<template>
  <div>
    <p>Portal ADM</p>
    <div class="div-table">
        <table class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
            <thead>
                <tr>
                <th>Nome</th>
                <th>E-mail</th>
                <th>Cargo</th>
                <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in users" :key="user.id">
                    <td>{{ user.name }}</td>
                    <td>{{ user.email }}</td>
                    <td>{{ user.role | processRole }}</td>
                    <td  class="is-centered is-grouped">
                        <button class="button is-success is-rounded">Editar</button>
                        <button class="button is-danger is-rounded">Deletar</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  created() {
    const req = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    };
    axios.get("http://localhost:8686/user", req).then((res) => {
        this.users = res.data;
      }).catch((err) => {
        console.log(err);
      });
  },
  data() {
    return {
        users: []
    }
  },
  filters: {
    processRole: function(value) {
        if (value === 0) {
            return 'Usuario';
        } else if (value === 1) {
            return 'Admin';
        } else {
            return 'Outro cargo';
        }
    }
  }
};
</script>

<style scoped>

    .div-table {
        margin: 15px;
    }

</style>