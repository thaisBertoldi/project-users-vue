<template>
    <div class="container">
        <h2>Registro de usuário</h2>
        <div class="columns is-centered">
            <div class="column is-half form-input">
                <input type="text" placeholder="Nome do usuário" class="input">
                <input type="email" placeholder="Email" class="input">
                <input type="password" placeholder="********" class="input">
                <input type="text" placeholder="Cargo" class="input">
                <button class="button is-success">Cadastrar</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>

    .container {
        margin-top: 15px;
        display: flex;
        flex-direction: column;
        gap: 15px;
    }

    .form-input {
        display: flex;
        flex-direction: column;
        gap: 15px;
    }

</style>