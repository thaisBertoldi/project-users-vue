<template>
    <div class="container">
        <h2 class="title-register">Registro de usuário</h2>
        <img src="../assets/anotation.png" alt="" class="image-anotation">
        <div class="column is-centered form-input box">
            <input v-model="name" type="text" placeholder="Nome do usuário" class="input">
            <input v-model="email" type="email" placeholder="Email" class="input">
            <input v-model="password" type="password" placeholder="********" class="input">
            <div class="select div-select"> 
                <select v-model="role">
                    <option disabled value="0">Selecione o cargo</option>
                    <option value="1">1 - Admin</option>
                    <option value="2">2 - Qualquer outro cargo</option>
                </select>
            </div>
            <button class="button is-success" @click="register">Cadastrar</button>
        </div>
    </div>
</template>

<script>
import { notify } from 'vuejs-notify'

export default {
    data() {
        return {
            name: '',
            password: '',
            email: '',
            role: '0'
        }
    },
    methods: {
        register() {
            console.log(this.name);
            notify.success({
                position: 'top center',
                title: 'Usuário cadastrado com sucesso!',
                timeout: 10000
            });
            notify.error({
                position: 'top center',
                title: 'Falha ao tentar cadastrar o usuário.',
                timeout: 10000
            });
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

</style>