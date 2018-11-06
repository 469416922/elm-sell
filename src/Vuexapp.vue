<template>
 <div>
   1111111
<h1>{{count}}</h1>
  <p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </p>
 </div>
</template>

<script >
// import store from '@/store/index'
// 在单独构建的版本中辅助函数为 Vuex.mapState
// import { mapState, mapMutations } from 'vuex'
import { mapState } from 'vuex'
export default {
  data () {
    return {

    }
  },
  // computed: {
  //   count (){
  //     return this.$store.state.count
  //   }
  // },
  computed: mapState(
    ['count']
    // {
    // // 箭头函数可使代码更简练
    // count: state => state.count,
    // // 传字符串参数 'count' 等同于 `state => state.count`
    // countAlias: 'count',

    // // 为了能够使用 `this` 获取局部状态，必须使用常规函数
    // countPlusLocalState (state){
    //   return state.count + this.localCount
    // }
  // }
  ),
  // 没参数也可以这样写
  // methods: mapMutations(
  //   ['increment', 'decrement']
  // ),
  methods: {
    increment () {
      this.$store.commit('increment', {a: 10})
    },
    decrement () {
      this.$store.commit('decrement')
    }
  },
  components: {

  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
