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
                        <button class="button is-danger is-rounded" @click="showModal(user.id)">Deletar</button>
                    </td>
                </tr>
            </tbody>
        </table>
        <div :class="{ modal: true, 'is-active': modal }">
            <div class="modal-background"></div>
            <div class="modal-content">
                <div class="card">
                    <header class="card-header">
                        <p class="card-header-title">
                            Tem certeza?
                        </p>
                    </header>
                    <div class="card-content">
                        <div class="content">
                            Essa ação é irreversível. Deseja realmente excluir este usuário?
                        </div>
                    </div>
                    <footer class="card-footer">
                        <a href="#" class="card-footer-item">Sim</a>
                        <a href="#" class="card-footer-item" @click="hideModal()">Cancelar</a>
                    </footer>
                </div>
            </div>
            <button class="modal-close is-large" aria-label="close"  @click="hideModal()"></button>
        </div>
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
        users: [],
        modal: false
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
  },
  methods: {
    hideModal() {
        this.modal = false;
    },
    showModal(id) {
        this.modal = true;
    }
  }
};
</script>

<style scoped>

    .div-table {
        margin: 15px;
    }

</style>