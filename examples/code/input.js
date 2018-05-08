let code = {};

code.base = `
<template>
    <sg-input v-model="value" placeholder="Enter something..." style="width: 300px"></sg-input>
</template>
<script>
    export default {
        data () {
            return {
                value: ''
            }
        }
    }
</script>
`;

code.size = `
<template>
    <sg-input v-model="value1" size="large" placeholder="large size"></sg-input>
    <br>
    <sg-input v-model="value2" placeholder="default size"></sg-input>
    <br>
    <sg-input v-model="value3" size="small" placeholder="small size"></sg-input>
</template>
<script>
    export default {
        data () {
            return {
                value1: '',
                value2: '',
                value3: ''
            }
        }
    }
</script>
`;

code.clearable = `
<template>
    <sg-input v-model="value14" placeholder="Enter something..." clearable style="width: 200px"></sg-input>
</template>
<script>
    export default {
        data () {
            return {
                value14: 'Hello World'
            }
        }
    }
</script>
`;

code.icon = `
<template>
    <sg-input v-model="value4" icon="ios-clock-outline" placeholder="Enter something..." style="width: 200px"></sg-input>
</template>
<script>
    export default {
        data () {
            return {
                value4: ''
            }
        }
    }
</script>
`;

code.textarea = `
<template>
    <sg-input v-model="value5" type="textarea" placeholder="Enter something..."></sg-input>
    <sg-input v-model="value6" type="textarea" :rows="4" placeholder="Enter something..."></sg-input>
</template>
<script>
    export default {
        data () {
            return {
                value5: '',
                value6: ''
            }
        }
    }
</script>
`;

code.autosize = `
<template>
    <sg-input v-model="value7" type="textarea" :autosize="true" placeholder="Enter something..."></sg-input>
    <sg-input v-model="value8" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."></sg-input>
</template>
<script>
    export default {
        data () {
            return {
                value7: '',
                value8: ''
            }
        }
    }
</script>
`;

code.disabled = `
<template>
    <sg-input v-model="value9" disabled placeholder="Enter something..."></sg-input>
    <sg-input v-model="value10" disabled type="textarea" placeholder="Enter something..."></sg-input>
</template>
<script>
    export default {
        data () {
            return {
                value9: '',
                value10: ''
            }
        }
    }
</script>
`;

code.addon = `
<template>
    <sg-input v-model="value11">
        <span slot="prepend">http://</span>
        <span slot="append">.com</span>
    </sg-input>
    <br>
    <sg-input v-model="value12">
        <Select v-model="select1" slot="prepend" style="width: 80px">
            <Option value="http">http://</Option>
            <Option value="https">https://</Option>
        </Select>
        <Select v-model="select2" slot="append" style="width: 70px">
            <Option value="com">.com</Option>
            <Option value="org">.org</Option>
            <Option value="io">.io</Option>
        </Select>
    </sg-input>
    <br>
    <sg-input v-model="value13">
        <Select v-model="select3" slot="prepend" style="width: 80px">
            <Option value="day">Day</Option>
            <Option value="month">Month</Option>
        </Select>
        <Button slot="append" icon="ios-search"></Button>
    </sg-input>
</template>
<script>
    export default {
        data () {
            return {
                value11: '',
                value12: '',
                value13: '',
                select1: 'http',
                select2: 'com',
                select3: 'day'
            }
        }
    }
</script>
`;

code.bs = `<sg-identity :data="test" class="test-components">
              <template slot-scope="props">
                <sg-form inline :label-width="120">
                  <sg-form-item label="权利人姓名">
                    <sg-input v-model="props.row.name"></sg-input>
                  </sg-form-item>
                  <sg-form-item label="证件类型">
                    <sg-select value="身份证">
                      <Option value="身份证"></Option>
                      <Option value="军官证"></Option>
                    </sg-select>
                  </sg-form-item>
                  <sg-form-item label="证件号码" class="import">
                    <sg-input v-model="props.row.number"></sg-input>
                  </sg-form-item>
                  <sg-form-item label="产权来源">
                    <sg-select value="无偿移交" disabled>
                      <Option value="无偿移交"></Option>
                      <Option value="有偿移交"></Option>
                    </sg-select>
                  </sg-form-item>
                  <sg-form-item label="权利人性质">
                    <sg-select value="企业">
                      <Option value="企业"></Option>
                      <Option value="个人"></Option>
                    </sg-select>
                  </sg-form-item>
                  <sg-form-item label="占有份额">
                    <sg-input v-model="props.row.name"></sg-input>
                  </sg-form-item>
                  <sg-form-item label="权利面积">
                    <sg-input v-model="props.row.name"></sg-input>
                  </sg-form-item>
                  <sg-form-item label="权利面积">
                    <sg-input v-model="props.row.name"></sg-input>
                  </sg-form-item>
                  <sg-form-item label="联系人电话">
                    <sg-input v-model="props.row.name"></sg-input>
                  </sg-form-item>
                  <sg-form-item label="是否持证人">
                    <sg-select value="是">
                      <Option value="是"></Option>
                      <Option value="否"></Option>
                    </sg-select>
                  </sg-form-item>
                  <sg-form-item label="法人代表">
                    <sg-input v-model="props.row.name" disabled></sg-input>
                  </sg-form-item>
                  <sg-form-item label="法人证件类型">
                    <sg-select value="身份证">
                      <Option value="身份证"></Option>
                      <Option value="军官证"></Option>
                    </sg-select>
                  </sg-form-item>
                  <sg-form-item label="法人证件号码">
                    <sg-input v-model="props.row.name"></sg-input>
                  </sg-form-item>
                  <sg-form-item label="权利号码">
                    <sg-input v-model="props.row.name"></sg-input>
                  </sg-form-item>
                  <sg-form-item label="证书编号">
                    <sg-input v-model="props.row.name"></sg-input>
                  </sg-form-item>
                  <sg-form-item label="代理人">
                    <sg-input v-model="props.row.name"></sg-input>
                  </sg-form-item>
                  <sg-form-item label="代理人证件类型">
                    <sg-select value="组织机构代理">
                      <Option value="组织机构代理"></Option>
                    </sg-select>
                  </sg-form-item>
                  <sg-form-item label="代理人证件号码">
                    <sg-input v-model="props.row.name"></sg-input>
                  </sg-form-item>
                  <sg-form-item label="代理人联系电话">
                    <sg-input v-model="props.row.name"></sg-input>
                  </sg-form-item>
                  <sg-form-item label="备注">
                    <sg-input v-model="props.row.name"></sg-input>
                  </sg-form-item>
                  <sg-form-item label="">
                  </sg-form-item>
                </sg-form>
              </template>
            </sg-identity>`

export default code;
