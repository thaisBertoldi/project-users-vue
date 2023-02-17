<template>
    <div class="container">
        <h2 class="title-register">Login</h2>
        <div class="column is-centered form-input box">
            <div v-if="error">
                <p class="error">{{ error }}</p>
            </div>
            <input v-model="email" type="email" placeholder="Email" class="input">
            <input v-model="password" type="password" placeholder="********" class="input">
            <button class="button is-success" @click="login">Entrar</button>
        </div>
    </div>
</template>

<script>
import { notify } from 'vuejs-notify'
import api from '../api'

export default {
    data() {
        return {
            password: '',
            email: '',
            error: undefined
        }
    },
    methods: {
        login() {
            api.post('/login', {
                password: this.password,
                email: this.email
            }).then(res => {
                localStorage.setItem('token', res.data.token);
                this.$root.$emit('login-success', true);
                this.$router.push({ name: 'home' })
            }).catch(err => {
                notify.error({
                    position: 'top center',
                    title: 'Não foi possível realizar o login.',
                    timeout: 10000
                });
                this.error = err.response.data.err;
            })
        }
    }

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