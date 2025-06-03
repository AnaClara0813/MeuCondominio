<template>
  <div class="boletos-container">
    <h2>Boletos</h2>

    <div class="card-boletos">
      <table class="tabela-boletos">
        <thead>
          <tr>
            <th>Vencimento</th>
            <th>Valor</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(boleto, index) in boletos" :key="index">
            <td>{{ boleto.vencimento }}</td>
            <td>{{ boleto.valor }}</td>
            <td>
              <span :class="['status', boleto.statusClass]">{{ boleto.status }}</span>
              <button v-if="boleto.status === 'Em aberto'" class="btn-pagar">Pagar</button>
              <button v-if="boleto.status === 'Atrasado'" class="btn-pagar">Gerar 2ª via</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Boletos',
  data() {
    return {
      boletos: [
        { vencimento: '05/05/2025', valor: 'R$300', status: 'Em aberto', statusClass: 'em-aberto' },
        { vencimento: '05/04/2025', valor: 'R$300', status: 'Atrasado', statusClass: 'atrasado' },
        { vencimento: '05/03/2025', valor: 'R$300', status: 'Pago', statusClass: 'pago' },
        { vencimento: '05/02/2025', valor: 'R$300', status: 'Pago', statusClass: 'pago' },
        { vencimento: '05/01/2025', valor: 'R$300', status: 'Pago', statusClass: 'pago' },
      ],
    };
  },
};
</script>

<style scoped src="./boletos.css"></style>
