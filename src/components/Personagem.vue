<template>
  <div class="personagem-card" v-if="!!personagem">
    <div class="header-personagem">
      <h4>Personagem</h4>
    </div>
    <div class="dados-personagem">
      <span>Nome: {{ personagem.nome }}</span>
      <span>Olhos: {{ personagem.olhos }}</span>
      <span>Peso: {{ personagem.peso }}</span>
      <span>Altura: {{ personagem.altura }}</span>
      <span>Sexo: {{ personagem.sexo === 'male' ? 'Masculino' : 'Feminino' }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';

@Component({name: 'Personagem'})
export default class Personagem extends Vue {
  @Prop() personagem!: PersonagemModel;
}
</script>

<style scoped>
.header-personagem {
  padding: 16px 8px;
  background: lavender;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}
.personagem-card {
  width: 200px;
  height: 150px;
  margin: 16px;
  border: 1px solid black;
  border-radius: 16px;
}
h4 {
  margin: 0;
}
.dados-personagem {
  text-align: left;
  display: flex;
  padding: 5px;
  flex-direction: column;
}
</style>
