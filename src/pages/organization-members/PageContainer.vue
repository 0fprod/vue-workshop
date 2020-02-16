<template>
  <organization-members-page
    v-bind="{ 
      members,
      searchText,
      onSearch,
      onSearchTextChange,
      filterText, 
      onFilterTextChange }"
  ></organization-members-page>
</template>
  
<script lang="ts">
import Vue from 'vue';
import { MemberVm } from './viewModel';
import OrganizationMembersPage from './Page.vue';

export default Vue.extend({
  name: 'OrganizationMembersPageContainer',
  components: { OrganizationMembersPage },
  data() {
    return {
      searchText: 'lemoncode',
      filterText: '',
    };
  },
  async created() {
    this.$store.commit('setLoading', { loading: true });
    await this.$store.dispatch('loadMembers').finally(() => {
      this.$store.commit('setLoading', { loading: false });
    });
  },
  methods: {
    onSearch() {
      this.$store.commit('setLoading', { loading: true });

      this.$store.commit('setCurrentOrganization', {
        currentOrganization: this.searchText,
      });

      this.$store.dispatch('loadMembers').finally(() => {
        this.$store.commit('setLoading', { loading: false });
      });
    },
    onSearchTextChange(term: string) {
      this.searchText = term;
    },
    onFilterTextChange(name: string) {
      this.filterText = name;
    },
  },
  computed: {
    members(): MemberVm[] {
      return this.$store.state.members;
    },
  },
});
</script>