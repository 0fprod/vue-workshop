<template>
  <user-profile-page v-bind="{user}"></user-profile-page>
</template>

<script lang="ts">
import Vue from 'vue';
import UserProfilePage from './Page.vue';
import { UserProfileVm, createDefaultUserProfileVm } from './viewModel';

export default Vue.extend({
  name: 'UserProfile',
  components: { UserProfilePage },
  props: {
    id: String,
  },
  data() {
    return {
      // user: createDefaultUserProfileVm(),
    };
  },
  async created() {
    this.$store.commit('setLoading', { loading: true });

    await this.$store.dispatch('loadUser', { userId: this.id }).finally(() => {
      this.$store.commit('setLoading', { loading: false });
    });
  },
  computed: {
    user(): UserProfileVm {
      return this.$store.state.user;
    },
  },
});
</script>