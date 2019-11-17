<template>
  <div>
    <p>Messages: {{ messageCount }}</p>
  </div>
</template>
<script>
export default {
    name:'pagehome',
  computed: {
    messageCount() {
      return this.$store.state.messages.length;
    }
  },
  mounted() {
    this.$store.dispatch("getMessages");
  }
};
</script>
