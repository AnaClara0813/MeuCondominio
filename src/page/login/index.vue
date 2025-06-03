<template>
  <div class="main-container">
    <div class="form-container">
      <div class="login-card">
        <div class="user-icon">
          <i class="fas fa-user"></i>
        </div>

        <label class="label">Email</label>
        <input type="email" placeholder="Digite seu email" class="input-field">

        <label class="label">Senha</label>
        <input type="password" placeholder="Digite sua senha" class="input-field">

        <span class="forgot-password">Esqueci minha senha</span>

        <button class="login-button">
          <router-link to="/painel" class="rectangle-5">
            <span class="login">ENTRAR</span>
          </router-link>
        </button>

        <div class="perfil-options">
          <label><input type="radio" name="perfil" value="administracao"> ADMINISTRAÇÃO</label>
          <label><input type="radio" name="perfil" value="morador"> MORADOR</label>
        </div>
      </div>
    </div>

    <div class="image-container">
      <span class="welcome-text">BEM VINDO</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginPage'
}
</script>

<style scoped>
@import './index.css';
</style>
