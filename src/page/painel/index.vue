<template>
  <div class="dashboard">
    <aside class="menu-lateral" :class="{ recolhido: isRecolhido }">
      <nav>
        <a href="#" @click.prevent="setSection('inicio')"><i class="bi bi-house"></i><span
            v-if="!isRecolhido">Início</span></a>
        <a href="#" @click.prevent="setSection('reservas')"><i class="bi bi-calendar-event"></i><span
            v-if="!isRecolhido">Reservas</span></a>
        <a href="#" @click.prevent="setSection('comunicados')"><i class="bi bi-megaphone"></i><span
            v-if="!isRecolhido">Comunicado</span></a>
        <a href="#" @click.prevent="setSection('boletos')"><i class="bi bi-receipt"></i><span
            v-if="!isRecolhido">Boletos</span></a>
        <a href="#" @click.prevent="setSection('ocorrencias')"><i class="bi bi-shield-exclamation"></i><span
            v-if="!isRecolhido">Ocorrências</span></a>
        <a href="#" @click.prevent="setSection('entregas')"><i class="bi bi-box-seam"></i><span
            v-if="!isRecolhido">Entregas</span></a>
        <a href="#" @click.prevent="setSection('chat')"><i class="bi bi-chat-dots"></i><span
            v-if="!isRecolhido">Chat</span></a>
        <a href="#" @click.prevent="setSection('configuracoes')"><i class="bi bi-gear"></i><span
            v-if="!isRecolhido">Configurações</span></a>
      </nav>
      <div class="menu-footer">
        <a href="/" class="icon-sair"><i class="bi bi-box-arrow-right"></i></a>
        <div class="avatar">
          <img src="https://i.pravatar.cc/40" alt="Usuário" />
        </div>
      </div>
    </aside>

    <main class="conteudo">
      <div class="top-header">
        <div class="header-esquerda">
          <button class="botao-recolher" @click="toggleMenu">
            <i class="bi bi-list"></i>
          </button>
          <div class="header-texto">
            <h1>Olá, Morador!</h1>
            <p>Fique por dentro de tudo que acontece em seu condomínio</p>
          </div>
        </div>
        <div class="search-bar">
          <input type="text" placeholder="O que você procura?" />
          <i class="bi bi-search"></i>
          <i class="bi bi-envelope-fill not-icon"></i>
          <i class="bi bi-bell-fill"></i>
        </div>
      </div>

      <div class="alerta" v-if="showAlerta">
        <span><strong>Alerta:</strong> Manutenção na piscina - 06/06</span>
        <button @click="showAlerta = false">Ler</button>
      </div>

      <div v-if="currentSection === 'inicio'">
        <div class="botoes-rodape">
          <button class="btn-acao">+ Nova Reserva</button>
          <button class="btn-acao">+ Novo Comunicado</button>
          <button class="btn-acao">+ Nova Ocorrência</button>
        </div>

        <div class="conteudo-grid">
          <div class="feed">
            <div class="post">
              <div class="post-header">
                <img src="https://i.pravatar.cc/40?img=1" alt="Keven" class="post-avatar" />
                <span class="post-user">Keven</span>
              </div>
              <img
                src="https://grupoatualsp.com.br/wp-content/uploads/2022/12/Conheca_as_Principais_Regras_para_o_uso_da_Piscina_em_Condominio_Capa.png"
                alt="Piscina" class="post-image" />
              <p class="post-description">A piscina está fechada para manutenção até 06/06.</p>
              <div class="post-actions">
                <i class="bi bi-hand-thumbs-up"></i>
                <i class="bi bi-chat-dots"></i>
              </div>
            </div>

            <div class="post">
              <div class="post-header">
                <img src="https://i.pravatar.cc/40?img=2" alt="Ana Clara" class="post-avatar" />
                <span class="post-user">Ana Clara</span>
              </div>
              <img
                src="https://fibersals.com.br/wp-content/uploads/2017/02/xjardim-de-condominio-regras.jpg.pagespeed.ic.jzheR96Hgr.jpg"
                alt="Jardim" class="post-image" />
              <p class="post-description">Novo paisagismo no jardim concluído com sucesso!</p>
              <div class="post-actions">
                <i class="bi bi-hand-thumbs-up"></i>
                <i class="bi bi-chat-dots"></i>
              </div>
            </div>
          </div>



          <div class="cards">
            <div class="card card-boletos">
              <i class="bi bi-receipt icon-card"></i>
              <div class="card-content">
                <h3>Boletos em aberto</h3>
                <table class="tabela-boletos">
                  <thead>
                    <tr>
                      <th>Data</th>
                      <th>Valor</th>
                      <th>Ação</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>06/06/2024</td>
                      <td>R$ 300,00</td>
                      <td><button class="btn-pagar">Pagar</button></td>
                    </tr>
                    <tr>
                      <td>15/06/2024</td>
                      <td>R$ 200,00</td>
                      <td><button class="btn-pagar">Pagar</button></td>
                    </tr>
                  </tbody>
                </table>

              </div>
            </div>

            <div class="card card-reservas">
              <i class="bi bi-calendar-event icon-card"></i>
              <div>
                <h3>Próximas reservas</h3>
                <ul>
                  <li>Salão de Festas I - 20/05 14:00</li>
                  <li>Churrasqueira III - 27/05 14:00</li>
                  <li>Quadra I - 27/05 18:00</li>
                </ul>
              </div>
            </div>

            <div class="card card-comunicados">
              <i class="bi bi-megaphone icon-card"></i>
              <div>
                <h3>Últimos comunicados</h3>
                <ul>
                  <li>Manutenção na piscina - 12/04</li>
                  <li>Revitalização piso - 22/04</li>
                </ul>
              </div>
            </div>

            <div class="card card-entregas">
              <i class="bi bi-box-seam icon-card"></i>
              <div>
                <h3>Entregas</h3>
                <p>Retirar na portaria</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Reserva v-if="currentSection === 'reservas'" />
      <Comunicado v-if="currentSection === 'comunicados'" />
      <Ocorrencias v-if="currentSection === 'ocorrencias'" />
      <Boletos v-if="currentSection === 'boletos'" />
      <Entregas v-if="currentSection === 'entregas'" />
      <Chat v-if="currentSection === 'chat'" />
      <Configuracoes v-if="currentSection === 'configuracoes'" />

    </main>
  </div>
</template>

<script>
import Reserva from './reserva/reserva.vue';
import Comunicado from './comunicado/comunicado.vue';
import Ocorrencias from './ocorrencias/ocorrencias.vue';
import Boletos from './boletos/boletos.vue';
import Entregas from './entregas/entregas.vue';
import Chat from './chat/chat.vue';
import Configuracoes from './configuracoes/configuracoes.vue';

export default {
  name: 'DashboardMorador',
  components: {
    Reserva,
    Comunicado,
    Ocorrencias,
    Boletos,
    Entregas,
    Chat,
    Configuracoes
  },
  data() {
    return {
      showAlerta: true,
      isRecolhido: false,
      currentSection: 'inicio'
    };
  },
  computed: {
    tituloPagina() {
      const map = {
        reservas: 'Reservas',
        comunicados: 'Comunicados',
        boletos: 'Boletos',
        ocorrencias: 'Ocorrências',
        entregas: 'Entregas',
        chat: 'Chat',
        configuracoes: 'Configurações',
      };
      return map[this.currentSection] || 'Página';
    }
  },
  methods: {
    toggleMenu() {
      this.isRecolhido = !this.isRecolhido;
    },
    setSection(secao) {
      this.currentSection = secao;
    }
  }
};

</script>

<style>
@import 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css';
@import './index.css';
</style>
