<template>
 <div class="ratingselect">
   <div class="rating-type">
     <span class="block positive"
     @click="select(2)"
     :class="{'active':thisSelectType===2}">
       {{desc.all}}<span class="count">{{ratings.length}}</span>
     </span>
     <span class="block positive"
     @click="select(0)"
     :class="{'active':thisSelectType===0}">
       {{desc.positive}}<span class="count">{{positives.length}}</span>
     </span>
     <span class="block negative"
     @click="select(1)"
     :class="{'active':thisSelectType===1}">
       {{desc.negative}}<span class="count">{{negative.length}}</span>
     </span>
   </div>
   <div class="switch"
   @click="toggleContent"
   :class="{'on':thisOnlyContent}">
     <span class="icon-check_circle"></span>
      <span class="text">只看有内容的评价</span>
   </div>
 </div>
</template>

<script>
const POSITIVE = 0
const NEGATIVE = 1
const ALL = 2
export default {
  props: {
    ratings: {
      type: Array,
      default () {
        return []
      }
    },
    selectType: {
      type: Number,
      default: ALL
    },
    onlyContent: {
      type: Boolean,
      default: false
    },
    desc: {
      type: Object,
      default (){
        return {
          all: '全部',
          positive: '满意',
          negative: '不满意'
        }
      }
    }
  },
  computed: {
    positives (){
      // 用filter计算返回数组ratings里面所有rating的rateType为POSITIVE的 新数组
      return this.ratings.filter((rating) => {
        return rating.rateType === POSITIVE
      })
    },
    negative (){
      return this.ratings.filter((rating) => {
        return rating.rateType === NEGATIVE
      })
    }
  },
  methods: {
    select (type){
      // 这里改变props 父组件不会改变 VUE抛出错误
      // this.selectType=type
      // 改用thisSelectType
      this.thisSelectType = type
      // 所以这里要给父组件派发一个事件把type传出 在父组件的事件中改变selectType
      this.$emit('ratingtype-select', type)
    },
    toggleContent (){
      this.thisOnlyContent = !this.thisOnlyContent
      this.$emit('ratingtype-toggleContent', this.thisOnlyContent)
    }
  },
  data () {
    return {
      // 在这个组件中的selectType值等于父组件传来的selectType
      thisSelectType: this.selectType,
      thisOnlyContent: this.onlyContent
    }
  },
  components: {

  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"

  .ratingselect
    .rating-type
      padding: 18px 0
      margin: 0 18px
      border-1px(rgba(7, 17, 27, 0.1))
      font-size: 0
      .block
        display: inline-block
        padding: 8px 12px
        margin-right: 8px
        line-height: 16px
        border-radius: 1px
        font-size: 12px
        color: rgb(77, 85, 93)
        &.active
          color: #fff
        .count
          margin-left: 2px
          font-size: 8px
        &.positive
          background: rgba(0, 160, 220, 0.2)
          &.active
            background: rgb(0, 160, 220)
        &.negative
          background: rgba(77, 85, 93, 0.2)
          &.active
            background: rgb(77, 85, 93)
    .switch
      padding: 12px 18px
      line-height: 24px
      border-bottom: 1px solid rgba(7, 17, 27, 0.1)
      color: rgb(147, 153, 159)
      font-size: 0
      &.on
        .icon-check_circle
          color: #00c850
      .icon-check_circle
        display: inline-block
        vertical-align: top
        margin-right: 4px
        font-size: 24px
      .text
        display: inline-block
        vertical-align: top
        font-size: 12px

</style>
