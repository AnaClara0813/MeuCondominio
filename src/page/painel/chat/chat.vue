<template>
  <div class="chat-container">
    <aside class="chat-menu">
      <h2>Chat</h2>
      <ul>
        <li v-for="(contato, index) in contatos" :key="index" :class="{ ativo: contatoSelecionado === index }" @click="selecionarContato(index)">
          <i class="bi bi-person"></i> {{ contato.nome }}
        </li>
      </ul>
    </aside>

    <div class="chat-area">
      <header class="chat-header">
        <h3>{{ contatoAtual.nome }}</h3>
        <button class="fechar">✕</button>
      </header>

      <div class="mensagens">
        <div v-for="(mensagem, index) in contatoAtual.mensagens" :key="index" :class="['mensagem', mensagem.enviada ? 'enviada' : 'recebida']">
          <p>{{ mensagem.texto }}</p>
          <span class="hora">{{ mensagem.hora }}</span>
        </div>
      </div>

      <div class="input-area">
        <input type="text" placeholder="Digite sua mensagem..." v-model="novaMensagem" @keyup.enter="enviarMensagem" />
        <button @click="enviarMensagem"><i class="bi bi-send"></i></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chat',
  data() {
    return {
      contatos: [
        {
          nome: 'Portaria',
          mensagens: [
            { texto: 'Boa tarde! A encomenda chegou.', hora: '15:32', enviada: false },
            { texto: 'Olá, boa tarde. Passarei aí para buscar.', hora: '15:39', enviada: true },
            { texto: 'Combinado!', hora: '16:00', enviada: false },
          ]
        },
        { nome: 'Síndico', mensagens: [] },
        { nome: 'Administração', mensagens: [] }
      ],
      contatoSelecionado: 0,
      novaMensagem: ''
    };
  },
  computed: {
    contatoAtual() {
      return this.contatos[this.contatoSelecionado];
    }
  },
  methods: {
    selecionarContato(index) {
      this.contatoSelecionado = index;
    },
    enviarMensagem() {
      if (this.novaMensagem.trim() !== '') {
        this.contatoAtual.mensagens.push({ texto: this.novaMensagem, hora: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }), enviada: true });
        this.novaMensagem = '';
      }
    }
  }
};
</script>

<style scoped src="./chat.css"></style>
