<template>
  <v-dialog fullscreen persistant :value="true" v-if="promiseInProgress">
    <v-progress-circular color="blue" indeterminate width="7" size="80" class="loading" />
  </v-dialog>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Loader',
  computed: {
    promiseInProgress(): boolean {
      return this.$store.state.loading;
    },
  },
});
</script>

<style scoped>
.loading {
  z-index: 999;
  position: fixed;
  height: 2em;
  width: 2em;
  margin: auto;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
</style>