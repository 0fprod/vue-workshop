<template>
  <div>
    <search-bar-component v-bind="{searchText, onSearch, onSearchTextChange}" />
    <table-component :members="members" />
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue';
import { MemberVm } from './viewModel';
import { SearchBarComponent, TableComponent } from './components';

export default Vue.extend({
  name: 'OrganizationMembersPage',
  components: { SearchBarComponent, TableComponent },
  data() {
    return {
      headers: [
        { text: 'Avatar', value: 'avatarUrl' },
        { text: 'Name', value: 'login' },
        { text: 'Details', value: 'id' },
      ],
    };
  },
  props: {
    searchText: {} as PropOptions<string>,
    onSearch: {} as PropOptions<() => void>,
    onSearchTextChange: {} as PropOptions<(term: string) => void>,
    members: [] as PropOptions<MemberVm[]>,
  },
});
</script>
