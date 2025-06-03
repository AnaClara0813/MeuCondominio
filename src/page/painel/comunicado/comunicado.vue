<template>
  <div class="comunicado-container">
    <h2>Comunicados</h2>

    <section class="comunicados">
      <div class="card" v-for="(comunicado, index) in comunicados" :key="index">
        <div class="header">
          <span v-if="comunicado.novo" class="badge">Novo</span>
          <h3>{{ comunicado.titulo }}</h3>
        </div>
        <p class="descricao">{{ comunicado.descricao }}</p>
        <div class="footer">
          <span class="ver-mais">Ver mais</span>
          <span class="data">{{ comunicado.data }}</span>
        </div>
      </div>
    </section>

    <button class="chat-admin">Chat com Administrador</button>
  </div>
</template>

<script>
export default {
  name: 'Comunicado',
  data() {
    return {
      comunicados: [
        { titulo: 'Manutenção da piscina', descricao: 'A piscina estará interditada na próxima semana', data: '8 abr', novo: true },
        { titulo: 'Feira orgânica', descricao: 'Participe da feira de sábado no salão de festas', data: '9 mar', novo: false },
        { titulo: 'Uso da churrasqueira', descricao: 'Relembramos as regras de utilização da churrasqueira.', data: '12 fev', novo: false },
        { titulo: 'Uso da área comum pets', descricao: 'Lembre-se de recolher as fezes dos animais na área comum.', data: '1 jan', novo: false },
        { titulo: 'Uso da churrasqueira', descricao: 'Relembramos as regras de utilização da churrasqueira.', data: '12 fev', novo: false },
        { titulo: 'Uso da área comum pets', descricao: 'Lembre-se de recolher as fezes dos animais na área comum.', data: '1 jan', novo: false },
      ]
    };
  },
};
</script>

<style scoped src="./comunicado.css"></style>
