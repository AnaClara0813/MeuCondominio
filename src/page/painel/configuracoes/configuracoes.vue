<template>
  <div class="configuracoes-container">
    <h2>Configurações</h2>

    <section class="configuracoes-lista">
      <div class="card-config" v-for="(item, index) in configuracoes" :key="index">
        <div class="icon">{{ item.icone }}</div>
        <div class="conteudo">
          <h3>{{ item.titulo }}</h3>
          <p>{{ item.descricao }}</p>
          <button @click="acao(item.titulo)">Editar</button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Configuracoes',
  data() {
    return {
      configuracoes: [
        { titulo: 'Perfil do Usuário', descricao: 'Atualize suas informações pessoais, senha e foto de perfil.', icone: '👤' },
        { titulo: 'Notificações', descricao: 'Gerencie quais alertas deseja receber por e-mail e app.', icone: '🔔' },
        { titulo: 'Preferências do Condomínio', descricao: 'Escolha as opções de interação e configurações específicas do seu condomínio.', icone: '🏢' },
        { titulo: 'Privacidade', descricao: 'Defina as permissões de compartilhamento de dados.', icone: '🔒' },
        { titulo: 'Idioma', descricao: 'Altere o idioma da plataforma.', icone: '🌐' },
      ]
    };
  },
  methods: {
    acao(titulo) {
      alert(`Ação para: ${titulo}`);
    }
  }
};
</script>

<style scoped src="./configuracoes.css"></style>
