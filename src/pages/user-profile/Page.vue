<template>
  <v-card>
    <v-card-title primary-title>
      <div d-flex>
        <v-avatar>
          <img v-bind:src="user.avatarUrl" v-bind:alt="user.name" />
        </v-avatar>
        <h3 class="headline mb-0">{{user.name}}</h3>
      </div>
    </v-card-title>
    <v-card-text>
      <v-text-field label="Name" :value="user.name" disabled />
      <v-text-field label="Url" :value="user.url" disabled />
      <v-text-field label="Blog" :value="user.blog" disabled />
      <v-text-field label="Location" :value="user.location" disabled />
      <v-text-field label="Email" :value="user.email" disabled />
      <v-text-field label="Bio" :value="user.bio" disabled />
    </v-card-text>
    <v-card-actions>
      <v-btn flat color="primary" @click="goBack">Back</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue';
import { UserProfileVm } from './viewModel';

export default Vue.extend({
  props: {
    user: {} as PropOptions<UserProfileVm>,
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
});
</script>

<style scoped>
</style>