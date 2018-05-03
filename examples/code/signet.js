let code ={};
code.base=`
  <template>
    <sg-signet></sg-signet>
  </template>
`;
code.auto=`
  <template>
     <sg-signet :iWidth="100" :iHeight="100"></sg-signet>
  </template>`;
code.edit=`
  <template>
     <sg-signet name="测试用印章" organization="北方数码科技有限公司"></sg-signet>
  </template>
`;
export default  code;
