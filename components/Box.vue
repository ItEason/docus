<template lang="">
    <h2 class=title>小旦BOX</h2>
    <div>
        <div class="chat-container">
            <div class="chat-messages">
                <div class="message received">
                    <p>Hello! How can I assist you today?</p>
                </div>
                <div class="message sent">
                    <p>I have a question about your products.</p>
                </div>
                <div class="message received">
                    <p>Sure, I'll be happy to help. What would you like to know?</p>
                </div>
            </div>

            <div class="chat-input">
                <input type="text" placeholder="Type your message..." />
                <button class="send">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16"><path fill="#00affa" d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26l.001.002l4.995 3.178l3.178 4.995l.002.002l.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215l7.494-7.494l1.178-.471l-.47 1.178Z"/></svg>                </button>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>

</script>
<style lang="less" scoped>
.chat-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 50vw;
    min-height: 350px;
    margin: auto;
    border: 1px solid #ccc;
    border-radius: 5px;
    overflow: hidden;
    margin: 20px 0 20px 0;
}

.chat-messages {
    padding: 10px;
}

.message {
    display: flex;
    margin-bottom: 10px;
}

.received {
    justify-content: flex-start;
}

.sent {
    justify-content: flex-end;
}

.message p {
    background-color: #eee;
    padding: 5px 10px;
    border-radius: 10px;
}

.chat-input {
    display: flex;
    align-items: center;
    padding: 10px;
    background-color: #f5f5f5;
}

input[type="text"] {
    flex: 1;
    padding: 5px 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.send {
    margin-left: 10px;
    padding: 5px 10px;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}
</style>