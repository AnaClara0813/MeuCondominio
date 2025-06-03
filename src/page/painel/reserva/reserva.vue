<template>
  <div class="reserva-container">
    <h2>Reservas</h2>

    <section class="areas-disponiveis">
      <h3>Área disponíveis</h3>
      <div class="cards-area">
        <div class="card" v-for="(area, index) in areas" :key="index">
          <div class="icone">{{ area.icone }}</div>
          <p>{{ area.nome }}</p>
          <button>Reservar</button>
        </div>
      </div>
    </section>

    <section class="suas-reservas">
      <h3>Suas reservas</h3>
      <table class="tabela-reservas">
        <thead>
          <tr>
            <th>Data</th>
            <th>Horário</th>
            <th>Área</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(reserva, index) in reservas" :key="index">
            <td>{{ reserva.data }}</td>
            <td>{{ reserva.horario }}</td>
            <td>{{ reserva.area }}</td>
          </tr>
        </tbody>
      </table>
      <button class="nova-reserva">+ Nova Reserva</button>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Reserva',
  data() {
    return {
      areas: [
        { nome: 'Salão de Festas', icone: '🎉' },
        { nome: 'Churrasqueira', icone: '🔥' },
        { nome: 'Quadra', icone: '⚽' },
        { nome: 'Piscina', icone: '🏊' },
      ],
      reservas: [
        { data: '25/06/2025', horario: '19:00', area: 'Salão de Festas' },
        { data: '28/06/2025', horario: '19:00', area: 'Piscina' },
      ]
    };
  },
};
</script>

<style scoped src="./reserva.css"></style>
