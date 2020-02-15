<template>
  <table :class="$style.table">
    <header-component />
    <tbody>
      <template v-for="member in members">
        <row-component :key="member.id" :member="member" />
      </template>
    </tbody>
  </table>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue';
import { MemberVm } from '../viewModel';
import HeaderComponent from './Header.vue';
import RowComponent from './Row.vue';

export default Vue.extend({
  name: 'TableComponent',
  components: { HeaderComponent, RowComponent },
  props: {
    members: {} as PropOptions<MemberVm[]>,
  },
});
</script>

 <style module>
.table {
  border-collapse: collapse;
  width: 100%;
}

.table tbody tr:nth-of-type(odd) {
  background-color: rgba(0, 0, 0, 0.05);
}
</style>