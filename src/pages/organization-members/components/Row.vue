<template>
  <tr>
    <td>
      <v-avatar>
        <img v-bind:src="member.avatarUrl" v-bind:alt="member.name" />
      </v-avatar>
    </td>
    <td>
      <span>{{member.name}}</span>
    </td>
    <td>
      <v-btn small color="primary">View Profile</v-btn>
    </td>
  </tr>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue';
import { MemberVm } from '../viewModel';

export default Vue.extend({
  name: 'RowComponent',
  props: {
    member: {} as PropOptions<MemberVm>,
  },
});
</script>

<style scoped>
td {
  text-align: center;
}
</style>
