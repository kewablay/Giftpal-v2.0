<template>
<div></div>
</template>

<script>
export default {
  name: "logout",
  props: {
    title: String
  },
  methods: {
    logout() {
      this.$store.dispatch("destroyToken").then(res => {
          if (res.success) {
          this.$router.push("/");
        }
      });
    }
  },
  created() {
      this.logout();
  }
};
</script>
