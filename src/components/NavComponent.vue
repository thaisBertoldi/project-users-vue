<template>
  <div>
    <nav class="navbar is-dark">
      <div class="navbar-menu">
        <div class="navbar-start">
          <router-link to="/" class="navbar-item">Home</router-link>
          <router-link to="/about" class="navbar-item">About</router-link>
          <router-link to="/register" class="navbar-item">Register</router-link>
          <router-link to="/users" class="navbar-item">Usuários</router-link>
        </div>
      </div>
    </nav>
    <nav>
      <router-link to="/login" class="navbar-item">Faça Login</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {

};
</script>