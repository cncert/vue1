<template>
  <div>
    <myHeader></myHeader>
    <h2 v-text="datas.title"></h2>
    <p v-if=datas.author>作者：{{datas.author.loginname}}   发表于：{{$utils.goodTime(datas.create_at)}}</p>
    <!--浏览器报错：[Vue warn]: Error in render: "TypeError: Cannot read property 'loginname' of undefined"-->
    <!--在加载页面时，datas.author.loginname还未存在，所以浏览器就报错了，在p标签上加上v-if=datas.author就不会出现这个报错-->
    <hr>
    <hr>
    <hr>
    <article v-html="datas.content"></article>
    <h3>网友回复：</h3>
    <ul>
      <li v-for="i in datas.replies">
        <p v-if=i.author>评论者：{{i.author.loginname}}  评论于： {{$utils.goodTime(i.create_at)}}</p>
        <article v-html="i.content"></article>
      </li>
    </ul>
    <myFooter></myFooter>
  </div>
</template>

<script>
    import myHeader from '../components/header'
    import myFooter from '../components/footer'
    export default {
        components: {myHeader, myFooter},
        data () {
            return {
              id: this.$route.params.id,
              datas: {}
            }
        },
        created () {
          this.getData()
        },
        methods: {
          getData () {
            this.$api.get('topic/' + this.id, null, r => {
              this.datas = r.data
            })
          }
        }
    }
</script>

<style scoped>

</style>
