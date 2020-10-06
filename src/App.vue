<template>
  <div id="app">
    <img
      alt="may the force be with you"
      class="logo-startwars"
      src="./assets/Star_Wars_logo.png"
    />
    <Loader v-if="isLoadingData" />
    <div v-if="!isLoadingData && !hasError" class="container-personagens">
      <div v-for="p in personagens" v-bind:key="p.nome">
        <Personagem v-bind:personagem="p" />
      </div>
    </div>
    <div v-if="hasError">
      <ErrorMessage />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Personagem from "./components/Personagem.vue";
import Loader from "./components/Loader.vue";
import ErrorMessage from "./components/ErrorMessage.vue";
import StartwarsService from "./services/startwars.service";

@Component({
  components: {
    Personagem,
    Loader,
    ErrorMessage
  }
})
export default class App extends Vue {
  private isLoadingData = true;
  private hasError = false;
  private personagens!: PersonagemModel[];

  async getCharacters() {
    const result = await StartwarsService.getStarWarsCharacters();

    if (!!result && !!result.data && result.data.results.length > 0) {
      this.personagens = result.data.results.map(function(r) {
        return {
          nome: r.name,
          olhos: r.eye_color,
          altura: r.height,
          peso: r.mass,
          sexo: r.gender
        };
      });
    } else {
      this.hasError = true;
    }

    this.isLoadingData = false;
  }

  mounted() {
    this.getCharacters();
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.container-personagens {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 500px;
  margin: auto;
}

.logo-startwars {
  width: 250px;
}
</style>
