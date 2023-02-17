<template>
  <div>
    <nav class="navbar is-dark" v-show="isLogged">
      <div class="navbar-menu">
        <div class="navbar-start">
          <router-link to="/" class="navbar-item">Home</router-link>
          <router-link to="/about" class="navbar-item">About</router-link>
          <router-link to="/register" class="navbar-item">Register</router-link>
          <router-link to="/users" class="navbar-item">Usuários</router-link>
        </div>
          <div class="navbar-end">
            <div class="navbar-item">
              <div class="buttons">
                <button class="button is-primary" @click="logout">
                  Logout
                </button>
              </div>
            </div>
          </div>
      </div>
    </nav>
    <nav v-show="!isLogged" class="navbar is-dark" >
      <div class="navbar-menu">
        <div class="navbar-start">
          <router-link to="/login" class="navbar-item">Faça Login</router-link>
        </div>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLogged: localStorage.getItem('token') ? true : false,
    };
  },
  mounted() {
    this.$root.$on("login-success", (data) => {
      this.isLogged = data;
    });
  },
  methods: {
    logout() {
      localStorage.removeItem("token");
      this.$root.$emit("login-success", false);
    },
  },
};
</script>