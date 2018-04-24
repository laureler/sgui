<template>
  <div class="header">
    <div class="title">
      <div class="back" onclick="window.history.go(-1)">返回</div>
    </div>
  </div>
</template>
<style lang="less" scoped>
  .header{
    position: absolute;
    top: 0;
    width: 100%;
  }
  .title {
    height: 50px;
    line-height: 50px;
    background-color: #fff;
    padding: 0px 15px;
    border-bottom: 1px solid #ddd;
    display: flex;
    .back{
      display: inline-block;
      padding-left: 20px;
      position: relative;
      cursor: pointer;
      &:after{
        content:' ';
        height: 10px;
        width: 10px;
        position: absolute;
        border:2px solid #383a4c;
        border-right: none;
        border-bottom: none;
        top: 20px;
        left: 5px;
        transform: rotate(-45deg);
      }
    }
  }
</style>
