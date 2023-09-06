<template>
    <div class="search-box">
        <input type="text" v-model="searchQuery" @input="handleInput" placeholder="请输入搜索关键字" />
        <button @click="handleSearch">搜索</button>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            searchQuery: ''
        };
    },
    methods: {
        handleInput() {
            // 处理输入事件
        },
        handleSearch() {
            // 处理搜索事件
        }
    }
};
</script>
  
<style scoped>
.search-box {
    display: flex;
    align-items: center;
}

input[type="text"] {
    width: 200px;
    padding: 4px;
    border: 1px solid #ccc;
}

button {
    margin-left: 8px;
    padding: 4px 8px;
    background-color: #007bff;
    color: #fff;
    border: none;
    cursor: pointer;
}
</style>