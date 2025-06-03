<template>
  <div class="entregas-container">
    <div class="header-entregas">
      <div class="icone-entrega">📦</div>
      <h2>Entregas</h2>
      <button class="fechar" @click="fechar"></button>
    </div>

    <div class="lista-entregas">
      <div class="bolao" v-for="(entrega, index) in entregas" :key="index">
        <div class="data">{{ entrega.data }}</div>
        <div class="conteudo">
          <strong>{{ entrega.titulo }}</strong>
          <p>{{ entrega.status }}</p>
        </div>
        <div class="data">{{ entrega.entregaData }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Entregas',
  data() {
    return {
      entregas: [
        { data: '22/05/2025', titulo: 'Shopee - Pedido 256996', status: 'Aguardando retirada', entregaData: '22/05/2025' },
        { data: '20/04/2024', titulo: 'Amazon - Pedido 256996', status: 'Retirado', entregaData: '20/04/2025' },
        { data: '18/03/2025', titulo: 'Entrega particular', status: 'Retirado', entregaData: '18/03/2025' },
      ],
    };
  },
  methods: {
    fechar() {
      // lógica de fechar modal ou redirecionar
    },
  },
};
</script>

<style scoped src="./entregas.css"></style>
