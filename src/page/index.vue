<template>
  <div>
    <myHeader></myHeader>
    <div class="article_list">
      <ul>
        <li v-for="i in list">
          <time v-text="$utils.goodTime(i.create_at)"></time>
          <!--//这里展示了在html里使用自定义函数utils-->
          <router-link :to="'/content/' + i.id">
            {{i.title}}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import myHeader from '../components/header'
  import myFooter from '@/components/footer'
    export default {
      components: {myHeader, myFooter},
      data () {
        return {
          list: []
        }
      },
      created () {
        this.getData()
      },
      methods: {
        getData () {
          this.$api.get('topics',null, r =>{
            this.list = r.data
            console.log(r)
          })
        }
      }
    }
</script>

<style scoped>

</style>
