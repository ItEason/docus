<template>
    <div id="header">
        <div class="text">
            <div><img src="/img/logo.png" /></div>
            <h2 class="title">xDAN -AI</h2>
        </div>
        <div class="icons">
            <div @click="toDocument">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 36 36">
                    <path fill="#000000"
                        d="M31 10H13a1 1 0 0 0-1 1v22a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V11a1 1 0 0 0-1-1Zm-3 16H16v-2h12Zm0-4H16v-2h12Zm0-4H16v-2h12Z"
                        class="clr-i-solid clr-i-solid-path-1" />
                    <path fill="#000000" d="M6 24V4h18V3a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v22a1 1 0 0 0 1 1h1Z"
                        class="clr-i-solid clr-i-solid-path-2" />
                    <path fill="#000000" d="M10 28V8h18V7a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v22a1 1 0 0 0 1 1h1Z"
                        class="clr-i-solid clr-i-solid-path-3" />
                    <path fill="none" d="M0 0h36v36H0z" />
                </svg>
            </div>

            <div @click="toGithub">
                <svg class="github" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32">
                    <path fill="currentColor" fillRule="evenodd"
                        d="M16 2a14 14 0 0 0-4.43 27.28c.7.13 1-.3 1-.67v-2.38c-3.89.84-4.71-1.88-4.71-1.88a3.71 3.71 0 0 0-1.62-2.05c-1.27-.86.1-.85.1-.85a2.94 2.94 0 0 1 2.14 1.45a3 3 0 0 0 4.08 1.16a2.93 2.93 0 0 1 .88-1.87c-3.1-.36-6.37-1.56-6.37-6.92a5.4 5.4 0 0 1 1.44-3.76a5 5 0 0 1 .14-3.7s1.17-.38 3.85 1.43a13.3 13.3 0 0 1 7 0c2.67-1.81 3.84-1.43 3.84-1.43a5 5 0 0 1 .14 3.7a5.4 5.4 0 0 1 1.44 3.76c0 5.38-3.27 6.56-6.39 6.91a3.33 3.33 0 0 1 .95 2.59v3.84c0 .46.25.81 1 .67A14 14 0 0 0 16 2Z">
                    </path>
                </svg>
            </div>

            <div @click="toTwitter">
                <svg class="twitter" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16">
                    <path fill="#888888"
                        d="M5.032 14.286c6.037 0 9.34-4.837 9.34-9.032c0-.137 0-.274-.01-.41A6.56 6.56 0 0 0 16 3.2c-.6.256-1.235.425-1.885.5a3.207 3.207 0 0 0 1.443-1.757c-.645.37-1.35.63-2.085.77a3.322 3.322 0 0 0-1.862-.958a3.384 3.384 0 0 0-2.082.334a3.223 3.223 0 0 0-1.442 1.49a3.08 3.08 0 0 0-.208 2.03a9.57 9.57 0 0 1-3.747-.963a9.269 9.269 0 0 1-3.018-2.354a3.086 3.086 0 0 0-.36 2.314c.189.787.68 1.475 1.376 1.924a3.344 3.344 0 0 1-1.49-.398v.04c0 .734.263 1.444.743 2.01a3.3 3.3 0 0 0 1.89 1.102c-.483.128-.99.146-1.482.055a3.19 3.19 0 0 0 1.168 1.577a3.36 3.36 0 0 0 1.9.627A6.732 6.732 0 0 1 0 12.86a9.527 9.527 0 0 0 5.032 1.423" />
                </svg>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>

const toDocument = () => {
    alert("document")
}

const toGithub = () => {
    alert("github")
}

const toTwitter = () => {
    alert("twitter");
}

</script>
<style scoped lang="less">
#header {
    display: flex;
    padding: 0 25px;
    backdrop-filter: var(--elements-backdrop-filter);
    background-color: var(--elements-backdrop-background);
    border-bottom: 1px solid var(--elements-border-primary-static);
    position: sticky;
    top: 0;
    width: 100%;
    z-index: 10;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}



.text {
    width: 250px;
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;
    gap: 10px;
}

.icons {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    min-width: 150px;
    gap: 20px;

    .github,
    .twitter {
        cursor: pointer;
        color: black;

        &:hover {
            color: black;
        }
    }
}

h1 {
    font-weight: bold;
    margin: 0 5px;
}

img {
    width: 60px;
    height: 100% !important;
    aspect-ratio: 1/1;
    opacity: 1;
}
</style>