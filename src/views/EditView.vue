<template>
    <div class="container">
        <h2 class="title-register">Editar usuário</h2>
        <div class="column is-centered form-input box">
            <div v-if="error">
                <p class="error">{{ error }}</p>
            </div>
            <input v-model="name" type="text" placeholder="Nome do usuário" class="input">
            <input v-model="email" type="email" placeholder="Email" class="input">
            <button class="button is-success" @click="update">Editar</button>
        </div>
    </div>
</template>

<script>
import { notify } from 'vuejs-notify'
import headers from '../utils/headers'
import api from '../api'

export default {
    created() {
        api.get(`/user/${this.$route.params.id}`, headers.reqToken)
        .then(res => {
            this.name = res.data.name;
            this.email = res.data.email;
            this.id = res.data.id;
        }).catch(() => {
            this.$router.push({ name: 'users' });
        });
    },
    data() {
        return {
            name: '',
            email: '',
            id: -1,
            error: undefined,
        }
    },
    methods: {
        update() {
            api.put('/user', {
                name: this.name,
                email: this.email,
                id: this.id
            }, headers.reqToken).then(() => {
                notify.success({
                    position: 'top center',
                    title: 'Usuário editado com sucesso!',
                    timeout: 10000
                });
                this.$router.push({ name: 'users' });
            }).catch(err => {
                notify.error({
                    position: 'top center',
                    title: 'Não foi possível editar o usuário.',
                    timeout: 10000
                });
                this.error = err.response.data.err;
            })
        },
    },
}
</script>

<style scoped>

    .container {
        margin-top: 5%;
        display: flex;
        flex-direction: column;
    }

    .form-input {
        display: flex;
        flex-direction: column;
        gap: 15px;
        padding: 50px;
    }

    .div-select {
        display: flex;
        flex-direction: column;
    }

    .title-register {
        color: #f2f3f3;
        padding: 10px 0;
        font-weight: 400;
        font-size: 20px;
        line-height: 1.125;
        background-color: rgb(125, 128, 125);
        border-top-left-radius: 6px;
        border-top-right-radius: 6px;
    }

    .image-anotation {
        position: absolute;
        width: 150px;
        left: 93%;
        top: -20px;
    }

    .error {
        color: red;
    }

</style>