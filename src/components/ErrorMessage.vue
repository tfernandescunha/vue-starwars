<template>
  <div class="error-message">
    <img alt="may the force be with you" class="error-startwars" src="../assets/error-darth-vader.png"/>

    Ops...parece que a força se foi e tivemos um problema ...
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({ name: "ErrorMessage" })
export default class ErrorMessage extends Vue {

}
</script>

<style scoped>
.error-startwars {
  margin: 20px 0 20px 0;
  width: 120px;
}
.error-message {
  display: flex;
  align-content: center;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
</style>
