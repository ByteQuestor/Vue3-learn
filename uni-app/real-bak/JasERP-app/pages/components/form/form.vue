<template>
	<view>
		<u-popup :show="show" @close="close" @open="open">
            <view>
                <text>出淤泥而不染，濯清涟而不妖</text>
            </view>
		</u-popup>
		<u-button @click="show = true">打开</u-button>
	</view>
</template>
<script>
	export default {
      data() {
        return {
          show: false
        }
      }, 
      methods: {
        open() {
          // console.log('open');
        },
        close() {
          this.show = false
          // console.log('close');
        }
      }
	}
</script>


<style>
	       
</style>
