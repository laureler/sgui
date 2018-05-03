let code = {};
code.base=`
  <template>
        <div>
          <sg-avatar size="large" >{{text}}}</sg-avatar>
          <sg-avatar >{{text}}}</sg-avatar>
          <sg-avatar size="small">{{text}}}</sg-avatar>
        </div>
  </template> 
  <script>
    export default {
        data () {
            return {
               text:'头像'
            }
        }
    }
</script>     
`;
code.type=`
  <template>
       <div>
          <sg-avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" />
          <sg-avatar style="color: #f56a00;background-color: #fde3cf">{{text}}}</sg-avatar>
          <sg-avatar style="background-color: #87d068" icon="person" />
       </div>
  </template> 
  <script>
    export default {
        data () {
            return {
               text:'U'
            }
        }
    }
</script> 
`;
code.badge=`
  <template>
      <div>
        <sg-badge  count="2">
          <sg-avatar shape="square">头像</sg-avatar>
        </sg-badge>
        <sg-badge dot>
          <sg-avatar shape="square">头像</sg-avatar>
        </sg-badge>
       </div>
  </template> 
  <script>
    export default {
        data () {
            return {
               text:'头像'
            }
        }
    }
</script> 
`;

export default code;
