<script>
import { useStore } from 'vuex';
export default {
  setup() {
    const store = useStore();
    console.log("App.vue")
    console.log(store);
    console.log(store.state.user);
  }
}
</script>

<template>
<router-view></router-view>
</template>


<style scoped>

</style>
