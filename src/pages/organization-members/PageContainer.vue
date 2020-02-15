<template>
  <organization-members-page v-bind="{ members, searchText, onSearch, onSearchTextChange }"></organization-members-page>
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
    };
  },
  async created() {
    await this.$store.dispatch('loadMembers');
  },
  methods: {
    onSearch() {
      this.$store.commit('setCurrentOrganization', {
        currentOrganization: this.searchText,
      });

      this.$store.dispatch('loadMembers');
    },
    onSearchTextChange(term: string) {
      this.searchText = term;
    },
  },
  computed: {
    members(): MemberVm[] {
      return this.$store.state.members;
    },
  },
});
</script>