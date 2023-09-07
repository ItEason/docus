<template>
    <div class="container">
        <div class="sidebar">
            <ul>
                <li v-for="(item, index) in sidebarItems" :key="index" @click="selectItem(index)"
                    :class="{ active: selectedItem === index }" @mouseleave="moveOutStart">
                    {{ item }}
                </li>
            </ul>
        </div>

        <div class="content">
            <div class="slider">
                <div class="slides">
                    <div class="slide" v-for="(slide, index) in slides" :key="index"
                        :class="{ active: selectedItem === index }">
                        <div class="title">{{ slide.title }}</div>
                        <div class="blockquote">{{ slide.summary }}</div>
                        <ul v-show="slide.content">
                            <li v-for="item in slide.content">
                                <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <path fill="#108dda"
                                            d="m10 15.17l9.193-9.191l1.414 1.414l-10.606 10.606l-6.364-6.364l1.414-1.414l4.95 4.95Z" />
                                    </svg>
                                </span>
                                {{ item }}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="actions">
        <button>开启</button>
        <a href="">
            Open on Github
        </a>

    </div>
</template>
  
<script>
export default {
    data() {
        return {
            slides: [{
                title: 'xDAN -AI', summary: '130亿模型级别 全球TOP5超轻量调优 成本 ⬇️ 20倍( 超越400亿 Falcon模型 ). 超越99%同量级模型=400亿模型上一轮霸主Falcon.',
                content: [
                    "跨级别竞争", "超过 Llama2-13b-chat（59.9）", "超过 Llama2-13b-chat（59.9）", "超过 chatGLM6B  27% 清华智浦", "超过 baichuan7B  29% 百川智能", "world class AI startup  ｜ Leaderboard of OpenLLM"
                ]
            },
            {
                title: '业务内容', summary: 'xDAN -AI Focus on solving the problem of human memory',
                content: [
                    "人类第二层记忆", "法律AI大模型", "政务大脑"
                ]
            },
            {
                title: '技术内容', summary: 'Reshape the AI drive application pattern, creating unprecedented possibilities for AI and human intelligence fusion to pave the way',
                content: [
                    "LLM Service", "数据合成", "行业大模型"
                ]
            }],
            selectedItem: 0,
            selectContent: '',
            interval: null,
            sidebarItems: ['介绍', '业务', '技术'],
        };
    },
    mounted() {
        this.startAutoSlide();
    },
    methods: {
        startAutoSlide() {
            this.interval = setInterval(() => {
                this.nextSlide();
            }, 3000);
        },
        nextSlide() {
            this.selectedItem = (this.selectedItem + 1) % this.slides.length;
        },
        selectItem(index) {
            this.selectedItem = index;
            clearInterval(this.interval);
            this.interval = null
        },
        moveOutStart() {
            if (this.interval) return;
            this.interval = setInterval(() => {
                this.nextSlide();
            }, 3000)
        }
    },
};
</script>
  
<style lang="less">
.container {
    display: flex;
    padding: 20px;
    margin: 100px 0;
    overflow: hidden;
    border-radius: var(--radii-xl);
    border: 1px solid var(--elements-border-primary-static);

    .sidebar {
        width: 110px;
        background: linear-gradient(top to bottom, #2980b9, #6dd5fa);
    }

    .sidebar ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    .sidebar li {
        padding: 10px;
        cursor: pointer;
    }

    .sidebar li:hover {
        background-color: #ebebeb;
    }

    .sidebar li.active {
        color: black;
        font-size: 20px;
        transition: all .5s;
        font-weight: bold;
    }

    .content {
        flex-grow: 1;
        padding: 0 40px;
    }

    .slider {
        width: 100%;
        min-height: 300px;
        max-height: 400px;
        overflow: hidden;
    }

    .slides {
        display: flex;
        transition: transform 0.3s ease-in-out;
    }

}

.slide {
    display: none;
    flex: 0 0 100%;
    min-width: 100%;
    transition: all 1s;

    .blockquote {
        font-family: var(--typography-font-body);
        margin: var(--prose-blockquote-margin);
        padding-inline-start: var(--prose-blockquote-paddingInlineStart);
        quotes: var(--prose-blockquote-quotes);
        color: var(--prose-blockquote-color);
        border-inline-start-width: var(--prose-blockquote-border-width);
        border-inline-start-style: var(--prose-blockquote-border-style);
        border-inline-start-color: var(--prose-blockquote-border-color);
    }

    ul {
        list-style: none;
        margin: 0;
        padding: 0;

        li {
            margin-bottom: 10px;
            display: flex;
            align-items: flex-start;

            span {
                margin-right: 20px;
            }
        }
    }
}

.active {
    display: block;
    transition: all 1s;
}

.actions {
    margin-bottom: 80px;

    button {
        width: 64px;
        height: 48px;
        border: 1px solid rgb(9, 159, 192);
        background-color: rgb(9, 159, 192);
        border-radius: 0.6em;
        color: white;
        font-weight: var(--fontWeight-bold);
        --button-primary: var(---ym9-button-primary);
        --button-secondary: var(---a23-button-secondary);
    }

    a {
        margin: 20px;
        color: rgba(175, 155, 155, 1);
        ---ym9-button-primary: var(--color-primary-600);
        ---a23-button-secondary: var(--color-primary-500);
    }
}
</style>