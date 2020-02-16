<template>
  <div class="flex-row">
    <v-text-field placeholder="Filter by name" :value="filterText" @input="onFilterTextChange" />
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue';

export default Vue.extend({
  name: 'FilterComponent',
  props: {
    filterText: String,
    onFilterTextChange: {} as PropOptions<(term: string) => void>,
  },
});
</script>

<style scoped>
.flex-row {
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
}
.flex-row .v-text-field {
  max-width: 25%;
}
</style>