<template>
  <div>
    <search-bar-component v-bind="{searchText, onSearch, onSearchTextChange}" />
    <filter-component v-bind="{filterText, onFilterTextChange}" />
    <v-data-table
      :headers="headers"
      :items="members"
      :items-per-page="5"
      :search="filterText"
      class="elevation-1"
    >
      <template v-slot:items="props">
        <td>
          <v-avatar>
            <img v-bind:src="props.item.avatarUrl" v-bind:alt="props.item.name" />
          </v-avatar>
        </td>
        <td>{{ props.item.name }}</td>
        <td>
          <v-btn color="primary" :to="`user-profile/${props.item.id}`">View profile</v-btn>
        </td>
      </template>
    </v-data-table>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue';
import { MemberVm } from './viewModel';
import { SearchBarComponent, FilterComponent } from './components';

export default Vue.extend({
  name: 'OrganizationMembersPage',
  components: { SearchBarComponent, FilterComponent },
  data() {
    return {
      headers: [
        { text: 'Avatar', value: 'avatarUrl' },
        { text: 'Name', value: 'name' },
        { text: 'Details', value: 'id' },
      ],
    };
  },
  props: {
    searchText: {} as PropOptions<string>,
    onSearch: {} as PropOptions<() => void>,
    onSearchTextChange: {} as PropOptions<(term: string) => void>,
    members: {} as PropOptions<MemberVm[]>,
    onFilterTextChange: {} as PropOptions<(term: string) => void>,
    filterText: {} as PropOptions<string>,
  },
});
</script>
