<template>
  <div class="main-container">
    <div class="whatsapp-button" @click="openWhatsApp"></div>
    <div class="rectangle-background">
      <div class="rectangle">
        <div class="logo"></div>

        <span class="menu-item" @click="scrollPercent(0)">INÍCIO</span>
        <span class="menu-item" @click="scrollPercent(26)">SERVIÇOS</span>
        <span class="menu-item" @click="scrollPercent(52)">COMO FUNCIONA</span>
        <span class="menu-item" @click="scrollPercent(100)">SOBRE NÓS</span>
        <span class="menu-item" @click="openWhatsApp">CONTATO</span>


        <div class="botao-inicio">
          <div class="light-button-1">
            <router-link to="/login" class="cta-light-button-3">
              <span class="botao-cta-light">LOGIN</span>
            </router-link>
          </div>
          <div class="light-button-2">
            <span class="cta-light-button-3" @click="openWhatsApp">CONHEÇA AGORA </span>
          </div>
        </div>

      </div>
    </div>
    <section id="inicio" style="position: relative; z-index: 1;">
      <div class="bg-start-prototype"></div>
      <div class="rectangle-4">
        <div class="rectangle-5">
          <span class="platform-ideal">A plataforma ideal para a gestão do seu condomínio.</span>
          <span class="gestao-moderna">Deixe a burocracia de lado com uma gestão moderna, prática e tudo em
            um só lugar.</span>
          <div class="botao-light">
            <span class="botao-cta-light" @click="openWhatsApp">CONHEÇA AGORA</span>
          </div>
        </div>
      </div>
    </section>

    <section id="servicos" style="position: relative; z-index: 1;">
      <div class="bg-servico-proto">
        <span class="nossos-servicos">Nossos serviços</span><span class="servico-personalizado">SERVIÇO
          PERSONALIZADO</span>
        <div class="flex-row-e">
          <div class="rectangle-6">
            <div class="vector"></div>
            <span class="atendimento-personalizado">Atendimento personalizado</span><span
              class="solucoes-sob-medida">Atendimento personalizado, com soluções sob medida para garantir
              eficiência e tranquilidade na administração do seu condomínio.</span>
          </div>
          <div class="rectangle-7">
            <div class="shield"></div>
            <span class="seguranca-dados">Segurança de Dados</span><span class="informacoes-criptografadas">Todas as
              informações protegidas com criptografia e acesso restrito.
              Sua privacidade é prioridade.</span>
          </div>
          <div class="rectangle-8">
            <div class="dollar-sign"></div>
            <span class="totalmente-transparente">Totalmente transparente</span><span class="valor-justo">Valor justo,
              sem
              cobranças abusivas. Aqui, você sabe exatamente o
              que está pagando.</span>
          </div>
        </div>
      </div>
    </section>

    <section id="como-funciona" style="position: relative; z-index: 1;">
      <div class="como-funciona-proto"></div>
      <div class="bg-como-funciona">
        <span class="como-funciona">Como funciona</span>
        <div class="retangulo-como-funciona"></div>
        <span class="plataforma-condominio">A plataforma Meu Condomínio descomplica a gestão e comunicação no seu
          prédio. Veja como é simples:</span>
        <div class="skyscrapers"></div>
        <span class="cadastro-condominio">Cadastro do condomínio</span><span class="controle-financeiro"> Controle
          financeiro sem segredos</span><span class="registre-receitas">Registre receitas, despesas e mantenha a
          prestação
          de contas clara para
          todos os moradores.</span><span class="basic-info">Adicione as informações básicas e após aprovação tenha
          acesso
          imediato
          ao painel de gestão. Não precisa ser especialista!
        </span>
        <div class="line">
          <div class="ellipse"></div>
          <div class="flex-column">
            <div class="ellipse-9"></div>
            <div class="ellipse-a"></div>
            <div class="check">
              <div class="check-b"></div>
            </div>
          </div>
          <div class="ellipse-c"></div>
        </div>
        <div class="layers"></div>
        <span class="organize-all">Organize tudo em um só lugar</span><span class="centralize-platform">Centralize
          comunicados, agendamentos, documentos e finanças em uma
          única plataforma — acessível por moradores e síndicos.</span>
        <div class="schedule"></div>
        <span class="schedule-info">Agende, informe e acompanhe</span><span class="reserve-monitor">Agende e monitore
          reservas de áreas comuns, envie avisos, registre
          ocorrências e acompanhe tudo em tempo real, com transparência.</span>
        <div class="cash"></div>
      </div>
      <div class="sobre-nos-proto">
        <div class="botao-primario">
          <span class="botao-cta-primario">FAÇA UM ORÇAMENTO</span>
        </div>
      </div>
    </section>

    <section id="sobre-nos" style="position: relative; z-index: 1;">
      <div class="rectangle-d">
        <div class="img-notebook-meu-condo">
          <div class="playbutton"></div>
        </div>
        <span class="transformando-vida-condominio-tecnologia-simplicidade">Transformando a vida em condomínio com
          tecnologia e simplicidade.</span><span class="no-meu-condominio-acreditamos">No Meu Condomínio, acreditamos
          que
          morar em comunidade pode — e deve —
          ser mais leve, organizado e transparente.<br /><br />Com um sistema
          intuitivo, acessível e seguro, promovemos praticidade, economia de tempo
          e mais qualidade de vida para todos os envolvidos.</span>
        <span class="saiba-mais">SAIBA MAIS</span>
      </div>
    </section>

  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      showModal: false,
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
    },
    scrollPercent(percent) {
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const y = totalHeight * (percent / 100);
      window.scrollTo({ top: y, behavior: 'smooth' });
    },
    openWhatsApp() {
      window.open(
        'https://wa.me/5562994873992?text=Quero%20conhecer%20o%20%22Meu%20Condom%C3%ADnio%20-%20App%22',
        '_blank'
      );
    },
    handleScroll() {
      const header = document.querySelector('.rectangle');
      const header_back = document.querySelector('.rectangle-background');
      const botao_inicio = document.querySelector('.botao-inicio');
      const logo = document.querySelector('.logo');

      if (window.scrollY > 50) {
        header.classList.add('scrolled');
        header_back.classList.add('scrolled');
        botao_inicio.classList.add('hidden');
        logo.classList.add('scrolled')
      } else {
        header.classList.remove('scrolled');
        header_back.classList.remove('scrolled');
        botao_inicio.classList.remove('hidden');
        logo.classList.remove('scrolled')
      }
    },
  },
};
</script>

<style>
section {
  scroll-margin-top: 180px;
  /* ou o valor real do menu fixo em seu estado maior */
}
</style>

<style scoped>
@import './index.css';
</style>
