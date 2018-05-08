<template>
  <div class="icon x-icon" v-html="XIcon"></div>
</template>

<script>
import XIcon from './x.svg'
export default {
  data () {
    return {
      XIcon: XIcon
    }
  }
}
</script>
