<template lang="">
    <div id="app">
        <Logo></Logo>
        <main class="main">
            <Header />
            <ContentDoc />
            <Box></Box>
            <Slider/>
         </main>
    </div>
</template>
<script>
import Logo from '@/components/Logo.vue'
import Header from './components/Header.vue';
import Slider from './components/Slider.vue';


export default {
    components: {
        Logo,
        Header,
        Slider
    },
    // ...其他配置
}
</script>
<style >
* {
    user-select: none;

}

#app {
    width: 100%;
    margin: auto;
}

.title {
    font-size: var(--text-4xl-fontSize);
    line-height: var(--text-4xl-lineHeight);
    font-size: var(--text-3xl-fontSize);
    line-height: var(--text-3xl-lineHeight);
    font-weight: var(--fontWeight-bold);
    letter-spacing: var(--letterSpacing-tight);
    color: var(--elements-text-primary-color-static);
}

.main {
    width: 50vw;
    height: 100%;
    margin: auto;
}
</style>