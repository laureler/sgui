<template>
  <label :class="wrapClasses">
        <span :class="radioClasses">
            <span :class="innerClasses"></span>
            <input
              type="radio"
              :class="inputClasses"
              :disabled="disabled"
              :checked="currentValue"
              :name="groupName"
              @change="change"
              @focus="onFocus"
              @blur="onBlur">
        </span>
    <slot>{{ label }}</slot>
  </label>
</template>
<script>
  const prefixCls = 'ivu-radio';
  export default {
    data(){
      return {
        currentValue: this.value,
        group: false,
        groupName: this.name,
        //parent: findComponentUpward(this, 'RadioGroup'),
        focusWrapper: false,
        focusInner: false
      }
    },
    props: {
      value: {
        type: [String, Number, Boolean],
        default: false
      },
      trueValue: {
        type: [String, Number, Boolean],
        default: true
      },
      falseValue: {
        type: [String, Number, Boolean],
        default: false
      },
      label: {
        type: [String, Number]
      },
      disabled: {
        type: Boolean,
        default: false
      },
     /* size: {
        validator (value) {
          return oneOf(value, ['small', 'large', 'default']);
        }
      },*/
      name: {
        type: String
      }
    },
    computed: {
      wrapClasses () {
        return [
          `${prefixCls}-wrapper`,
          {
            [`${prefixCls}-group-item`]: this.group,
            [`${prefixCls}-wrapper-checked`]: this.currentValue,
            [`${prefixCls}-wrapper-disabled`]: this.disabled,
            //[`${prefixCls}-${this.size}`]: !!this.size,
            [`${prefixCls}-focus`]: this.focusWrapper
          }
        ];
      },
      radioClasses () {
        return [
          `${prefixCls}`,
          {
            [`${prefixCls}-checked`]: this.currentValue,
            [`${prefixCls}-disabled`]: this.disabled
          }
        ];
      },
      innerClasses () {
        return [
          `${prefixCls}-inner`,
          {
            [`${prefixCls}-focus`]: this.focusInner
          }
        ];
      },
      inputClasses () {
        return `${prefixCls}-input`;
      }
    },
    mounted () {
      if (this.parent) {
        this.group = true;
        if (this.name && this.name !== this.parent.name) {
          /* eslint-disable no-console */
          if (console.warn) {
            console.warn('[iview] Name does not match Radio Group name.');
          }
          /* eslint-enable no-console */
        } else {
          this.groupName = this.parent.name;
        }
      }
      if (this.group) {
        this.parent.updateValue();
      } else {
        this.updateValue();
      }
    },
    methods: {
      change (event) {
        if (this.disabled) {
          return false;
        }
        const checked = event.target.checked;
        this.currentValue = checked;
        const value = checked ? this.trueValue : this.falseValue;
        this.$emit('input', value);
        if (this.group) {
          if (this.label !== undefined) {
            this.parent.change({
              value: this.label,
              checked: this.value
            });
          }
        } else {
          this.$emit('on-change', value);
          //this.dispatch('FormItem', 'on-form-change', value);
        }
      },
      updateValue () {
        this.currentValue = this.value === this.trueValue;
      },
      onBlur () {
        this.focusWrapper = false;
        this.focusInner = false;
      },
      onFocus () {
        if (this.group && this.parent.type === 'button') {
          this.focusWrapper = true;
        } else {
          this.focusInner = true;
        }
      }
    },
    watch: {
      value (val) {
        if (val === this.trueValue || val === this.falseValue) {
          this.updateValue();
        } else {
          throw 'Value should be trueValue or falseValue.';
        }
      }
    }
  }
</script>
<style scoped>
  *{
    margin:0;padding:0;
  }
   *, :after, :before {
     box-sizing: border-box;
   }
  .ivu-radio-wrapper {
    font-size: 12px;
    vertical-align: middle;
    display: inline-block;
    position: relative;
    white-space: nowrap;
    margin-right: 8px;
    cursor: pointer;
  }
  .ivu-radio {
    display: inline-block;
    margin-right: 4px;
    white-space: nowrap;
    position: relative;
    line-height: 1;
    vertical-align: middle;
    cursor: pointer;
  }
  .ivu-radio-input{
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
    opacity: 0;
    cursor: pointer;
  }
.ivu-radio-inner{
  display: inline-block;
  width: 14px;
  height: 14px;
  position: relative;
  top: 0;
  left: 0;
  background-color: #fff;
  border: 1px solid #dddee1;
  border-radius: 50%;
  transition: all .2s ease-in-out;
}
  .ivu-radio-inner:after {
    position: absolute;
    width: 8px;
    height: 8px;
    left: 2px;
    top: 2px;
    border-radius: 6px;
    display: table;
    border-top: 0;
    border-left: 0;
    content: " ";
    background-color: #2d8cf0;
    opacity: 0;
    transition: all .2s ease-in-out;
    -webkit-transform: scale(0);
    transform: scale(0);
  }
   .ivu-radio-checked .ivu-radio-inner:after {
     opacity: 1;
     -webkit-transform: scale(1);
     transform: scale(1);
     transition: all .2s ease-in-out;
   }
  .ivu-radio-checked .ivu-radio-inner {
    border-color: #2d8cf0;
  }

</style>
