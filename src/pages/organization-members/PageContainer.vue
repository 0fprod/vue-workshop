<template>
  <div>
    <h1>Hello members</h1>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { MemberVm } from "./viewModel";

export default Vue.extend({
  name: "OrganizationMembers",
  components: {},
  data() {
    return {
      reactiveMembers: []
    };
  },
  async created() {
    await this.$store.dispatch("loadMembers");
  },
  methods: {},
  computed: {
    members(): MemberVm[] {
      return this.$store.state.members;
    }
  }
});
</script>