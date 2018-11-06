<template>
<div class="cartcontrol">
   <transition name="move">
    <div class="cart-decrease " v-show="food.count>0" @click.stop="decreaseCart">
      <span class="inner icon-remove_circle_outline"></span>
    </div>
   </transition>
   <div class="cart-count" v-show="food.count>0">{{food.count}}</div>
   <div class="cart-add icon-add_circle" @click.stop="addCart"></div>
 </div>
</template>

<script>
import Vue from 'vue'
export default {
  props: {
    food: {
      type: Object
    }
  },
  data () {
    return {

    }
  },
  methods: {
    addCart () {
      if (!this.food.count){
      // this.food.count = 1  //这样写界面不更新
        Vue.set(this.food, 'count', 1)
      } else {
        this.food.count++
      }
      // 添加这句，提交'cart-add'事情给父组件，第二个是要传递的参数
      this.$emit('cart-add', event.target)
    },
    decreaseCart (){
      if (this.food.count > 0) {
        this.food.count--
      }
    }
  },
  components: {

  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .cartcontrol
    font-size: 0
    .cart-decrease
      display: inline-block
      padding: 6px
      transition: all 0.4s linear
      // &.move-transition
      opacity: 1
      transform: translate3d(0, 0, 0) rotate(0)
      .inner
        display: inline-block
        line-height: 24px
        font-size: 24px
        color: rgb(0, 160, 220)
      &.move-enter,&.move-leave-to
        opacity: 0
        transform: translate3d(24px,0,0) rotate(180deg)
    .cart-count
      display: inline-block
      vertical-align: top
      width: 12px
      padding-top: 6px
      line-height: 24px
      text-align: center
      font-size: 10px
      color: rgb(147, 153, 159)
    .cart-add
      display: inline-block
      padding: 6px
      line-height: 24px
      font-size: 24px
      color: rgb(0, 160, 220)
</style>
