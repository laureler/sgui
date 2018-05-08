<template>
  <div :class="wrapClasses">
    <template v-if="type !== 'textarea'">
      <i class="sg-icon" :class="['sg-icon-ios-close', prefixCls + '-icon', prefixCls + '-icon-clear' , prefixCls + '-icon-normal']" v-if="clearable && currentValue" @click="handleClear"></i>
      <i class="sg-icon" :class="['sg-icon-' + icon, prefixCls + '-icon', prefixCls + '-icon-normal']" v-else-if="icon" @click="handleIconClick"></i>
      <transition name="fade">
        <i class="sg-icon sg-icon-load-c sg-load-loop" :class="[prefixCls + '-icon', prefixCls + '-icon-validate']" v-if="!icon"></i>
      </transition>
      <input
        ref="input"
        :type="type"
        :class="inputClasses"
        :placeholder="placeholder"
        :disabled="disabled"
        :readonly="readonly"
        :value="currentValue"
        :autofocus="autofocus"
        @keyup.enter="handleEnter"
        @focus="handleFocus"
        @blur="handleBlur"
        @input="handleInput"
        @change="handleChange">
    </template>
    <textarea
    v-else
    :wrap="wrap"
    ref="textarea"
    :class="textareaClasses"
    :style="textareaStyles"
    :placeholder="placeholder"
    :disabled="disabled"
    :rows="rows"
    :readonly="readonly"
    :value="currentValue"
    :autofocus="autofocus"
    @keyup.enter="handleEnter"
    @focus="handleFocus"
    @blur="handleBlur"
    @input="handleInput">
    </textarea>
  </div>
</template>
<script>
  import { oneOf, findComponentUpward } from '../../utils/assist';
  import calcTextareaHeight from '../../utils/calcTextareaHeight';
  import Emitter from '../../mixins/emitter';

  const prefixCls = 'sg-input';

  export default {
    name: 'SgInput',
    mixins: [ Emitter ],
    props: {
      type: {
        validator (value) {
          return oneOf(value, ['text', 'textarea', 'password', 'url', 'email', 'date']);
        },
        default: 'text'
      },
      value: {
        type: [String, Number],
        default: ''
      },
      placeholder: {
        type: String,
        default: ''
      },
      disabled: {
        type: Boolean,
        default: false
      },
      icon: String,
      readonly: {
        type: Boolean,
        default: false
      },
      autofocus: {
        type: Boolean,
        default: false
      },
      rows:{
        type: Number,
        default: 2
      },
      clearable: {
        type: Boolean,
        default: true
      },
      wrap: {
        validator (value) {
          return oneOf(value, ['hard', 'soft']);
        },
        default: 'soft'
      }
    },
    data () {
      return {
        currentValue: this.value,
        prefixCls: prefixCls,
        textareaStyles: {}
      };
    },
    computed: {
      wrapClasses () {
        return [
          `${prefixCls}-wrapper`,
          {
            [`${prefixCls}-type`]: this.type,
          }
        ];
      },
      inputClasses () {
        return [
          `${prefixCls}`,
          {
            [`${prefixCls}-${this.size}`]: !!this.size,
            [`${prefixCls}-disabled`]: this.disabled
          }
        ];
      },
      textareaClasses () {
        return [
          `${prefixCls}`,
          {
            [`${prefixCls}-disabled`]: this.disabled
          }
        ];
      }
    },
    methods: {
      handleEnter (event) {
        this.$emit('on-enter', event);
      },
      handleIconClick (event) {
        this.$emit('on-click', event);
      },
      handleFocus (event) {
        this.$emit('on-focus', event);
      },
      handleBlur (event) {
        this.$emit('on-blur', event);
        if (!findComponentUpward(this, ['DatePicker', 'TimePicker', 'Cascader', 'Search'])) {
          this.dispatch('FormItem', 'on-form-blur', this.currentValue);
        }
      },
      handleInput (event) {
        let value = event.target.value;
        if (this.number) value = Number.isNaN(Number(value)) ? value : Number(value);
        this.$emit('input', value);
        this.setCurrentValue(value);
        this.$emit('on-change', event);
      },
      handleChange (event) {
        this.$emit('on-input-change', event);
      },
      setCurrentValue (value) {
        if (value === this.currentValue) return;
        this.$nextTick(() => {
          this.resizeTextarea();
        });
        this.currentValue = value;
        if (!findComponentUpward(this, ['DatePicker', 'TimePicker', 'Cascader', 'Search'])) {
          this.dispatch('FormItem', 'on-form-change', value);
        }
      },
      resizeTextarea () {
        const autosize = this.autosize;
        if (!autosize || this.type !== 'textarea') {
          return false;
        }

        const minRows = autosize.minRows;
        const maxRows = autosize.maxRows;

        this.textareaStyles = calcTextareaHeight(this.$refs.textarea, minRows, maxRows);
      },
      focus () {
        if (this.type === 'textarea') {
          this.$refs.textarea.focus();
        } else {
          this.$refs.input.focus();
        }
      },
      blur () {
        if (this.type === 'textarea') {
          this.$refs.textarea.blur();
        } else {
          this.$refs.input.blur();
        }
      },
      handleClear () {
        const e = { target: { value: '' } };
        this.$emit('input', '');
        this.setCurrentValue('');
        this.$emit('on-change', e);
      }
    },
    watch: {
      value (val) {
        this.setCurrentValue(val);
      }
    },
    mounted () {
      // this.resizeTextarea();
    }
  };
</script>
