let code ={};
code.base=`
  <template>
    <div>
        <sg-badge  count="3">
          <a href="#" class="demo-badge"></a>
        </sg-badge>
    </div>
</template>
<script>
export default {
}
</script>
<style>
   .demo-badge{
        width: 42px;
        height: 42px;
        background: #eee;
        border-radius: 6px;
        display: inline-block;
    }
</style>
`;
code.dot=`
  <template>
    <div>
        <sg-badge dot >
            <a href="#" class="demo-badge"></a>
          </sg-badge>
    </div>
</template>
<script>
export default {
}
</script>
<style>
   .demo-badge{
        width: 42px;
        height: 42px;
        background: #eee;
        border-radius: 6px;
        display: inline-block;
    }
</style>
`;
code.number=`
   <template>
    <div>
         <sg-badge  count="1000" overflow-count="999">
            <a href="#" class="demo-badge"></a>
          </sg-badge>
    </div>
</template>
<script>
export default {
}
</script>
<style>
   .demo-badge{
        width: 42px;
        height: 42px;
        background: #eee;
        border-radius: 6px;
        display: inline-block;
    }
</style>
`;
code.self=`
   <template>
    <div>
        <sg-badge  count="2"></sg-badge>
    </div>
</template>
<script>
export default {
}
</script>
<style>
   .demo-badge{
        width: 42px;
        height: 42px;
        background: #eee;
        border-radius: 6px;
        display: inline-block;
    }
</style>
`;
export default code;
