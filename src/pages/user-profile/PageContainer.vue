<template>
  <h1>hello {{ id }}</h1>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'UserProfile',
  components: {},
  props: {
    id: String,
  },
  data() {
    return {};
  },
  created() {},
  methods: {},
  computed: {},
});
</script>