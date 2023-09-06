<template lang="">
    <div id="app">
        <header>
            <Logo/>
        </header>
        <main class="main">
            <ContentDoc />
         </main>
    </div>
</template>
<script lang="ts" setup>
import Logo from './components/Logo.vue';
</script>
<style scoped>
#app {
    width: 100%;
    margin: auto;
}

.main {
    width: 50vw;
    height: 100%;
    margin: auto;
}
</style>