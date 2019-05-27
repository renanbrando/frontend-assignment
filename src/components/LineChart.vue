<template>
     <div>
       <line-chart :styles="myStyles"/>
     </div>
</template>

<script>
import LineChart from './LineChart.js'

export default {
  data () {
    return {
      height: 300
    }
  },
  computed: {
    myStyles () {
      return {
        height: `${this.height}px`,
        position: 'relative'
      }
    }
  }
}
</script>