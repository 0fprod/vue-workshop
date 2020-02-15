<template>
  <div class="flex-row">
    <v-text-field
      placeholder="Github organization name"
      :value="searchText"
      @input="onSearchTextChange"
    />
    <v-btn normal color="primary" @click="onSearch">Search</v-btn>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue';

export default Vue.extend({
  name: 'SearchBarComponent',
  props: {
    searchText: String,
    onSearch: {} as PropOptions<() => void>,
    onSearchTextChange: {} as PropOptions<(term: string) => void>,
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