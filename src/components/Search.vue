<template>
  <div class = "searchBox">
      <div class="input-box">
          <div class="iconfont icon-conSearch"></div>
          <input type="text" placeholder="请输入搜索内容">
      </div>
  </div>
</template>
<script>
export default {
    name : "Search",
    data(){
        return {
            value : ""
        }
    }
}
</script>
<style lang="less" scoped>
    .searchBox{
        padding: 0.15rem 0.3rem;
        background: #52525a;
        .input-box{
            @h : 0.56rem;

            height: @h;
            background: #ffffff;
            border-radius: 0.18rem e("/") 50%;
            box-shadow:  inset 0.02rem 0.02rem 0.04rem rgba(0, 0, 0, 0.34);
            padding: 0 0.18rem;
            display: flex;
            .iconfont{
                width: @h;
                height: @h;
                text-align: center;
                line-height: @h;
                font-size: 0.32rem;
            }
            input{
                flex: 1;
                border: none;
                outline: none;
                background:none;
            }
        }
    }
</style>


