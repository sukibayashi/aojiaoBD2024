// 刪除主頁面========================================================
document.getElementById("toggleButton").addEventListener("click", function () {
    // 获取所有具有指定class的元素
    var elements = document.querySelectorAll(".content_toppage");

    // 遍历并删除每个元素
    elements.forEach(function (element) {
        element.remove();
    });

    // 使用 AJAX 加载新的 HTML 文件内容
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "chat.html", true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // 插入新内容
            var newContent = xhr.responseText;
            document.body.insertAdjacentHTML("beforeend", newContent);
        }
    };
    xhr.send();
});

// 打開表情包列表===================================================
document.addEventListener("click", function (event) {
    var sendEmojiButton = document.getElementById("send_emoji");
    var chatEmojiList = document.getElementById("chat_emoji_list");

    // 检查点击的元素是否是 send_emoji 或其内部的元素
    if (event.target === sendEmojiButton || sendEmojiButton.contains(event.target)) {
        chatEmojiList.classList.toggle("show");
    }
});

// 發送JS=========================================================
function sendMessage() {
    var messageInput = document.getElementById("message-input");
    var messageText = messageInput.value.trim();

    if (messageText !== "") {
        var chatBody = document.getElementById("chat-body");
        var messageContainer = document.createElement("div");
        messageContainer.className = "message own-message";
        messageContainer.innerHTML = `
        <div class="chat_box">
            <div class="message_right">
                <div class="kidoku">既読</div>
                <div class="timestamp">${getTime()}</div>
            </div>
            <div class="message-body">${messageText}</div>
        </div>
        `;

        chatBody.appendChild(messageContainer);

        messageInput.value = "";
        messageInput.focus();

        // Scroll to the bottom of the chat
        chatBody.scrollTop = chatBody.scrollHeight;
    }
    window.scrollTo(0, document.body.scrollHeight);
}

function getTime() {
    var now = new Date();
    var hours = now.getHours().toString().padStart(2, "0");
    var minutes = now.getMinutes().toString().padStart(2, "0");
    return hours + ":" + minutes;
}

// 發送表情=======================================================
// 【表情1】~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function sendEmoji_1() {
    var chatBody = document.getElementById("chat-body");
    var messageContainer = document.createElement("div");
    messageContainer.className = "message own-message";
    messageContainer.innerHTML = `
    <div class="chat_box">
        <div class="message_right">
            <div class="kidoku">既読</div>
            <div class="timestamp">${getTime()}</div>
        </div>
        <div class="message_emoji"><img src="./src/emoji/sticker3.GIF" class="emoji" alt="emoji"></div>
    </div>
    `;

    chatBody.appendChild(messageContainer);

    // Scroll to the bottom of the chat
    chatBody.scrollTop = chatBody.scrollHeight;

    window.scrollTo(0, document.body.scrollHeight);
}
// 【表情2】~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function sendEmoji_2() {
    var chatBody = document.getElementById("chat-body");
    var messageContainer = document.createElement("div");
    messageContainer.className = "message own-message";
    messageContainer.innerHTML = `
    <div class="chat_box">
        <div class="message_right">
            <div class="kidoku">既読</div>
            <div class="timestamp">${getTime()}</div>
        </div>
        <div class="message_emoji"><img src="./src/emoji/sticker3.GIF" class="emoji" alt="emoji"></div>
    </div>
    `;

    chatBody.appendChild(messageContainer);

    // Scroll to the bottom of the chat
    chatBody.scrollTop = chatBody.scrollHeight;

    window.scrollTo(0, document.body.scrollHeight);
}
// 【表情3】~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function sendEmoji_3() {
    var chatBody = document.getElementById("chat-body");
    var messageContainer = document.createElement("div");
    messageContainer.className = "message own-message";
    messageContainer.innerHTML = `
    <div class="chat_box">
        <div class="message_right">
            <div class="kidoku">既読</div>
            <div class="timestamp">${getTime()}</div>
        </div>
        <div class="message_emoji"><img src="./src/emoji/sticker5.GIF" class="emoji" alt="emoji"></div>
    </div>
    `;

    chatBody.appendChild(messageContainer);

    // Scroll to the bottom of the chat
    chatBody.scrollTop = chatBody.scrollHeight;

    window.scrollTo(0, document.body.scrollHeight);
}
// 【表情4】~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function sendEmoji_4() {
    var chatBody = document.getElementById("chat-body");
    var messageContainer = document.createElement("div");
    messageContainer.className = "message own-message";
    messageContainer.innerHTML = `
    <div class="chat_box">
        <div class="message_right">
            <div class="kidoku">既読</div>
            <div class="timestamp">${getTime()}</div>
        </div>
        <div class="message_emoji"><img src="./src/emoji/sticker6.jpg" class="emoji" alt="emoji"></div>
    </div>
    `;

    chatBody.appendChild(messageContainer);

    // Scroll to the bottom of the chat
    chatBody.scrollTop = chatBody.scrollHeight;

    window.scrollTo(0, document.body.scrollHeight);
}
// 【表情5】~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function sendEmoji_5() {
    var chatBody = document.getElementById("chat-body");
    var messageContainer = document.createElement("div");
    messageContainer.className = "message own-message";
    messageContainer.innerHTML = `
    <div class="chat_box">
        <div class="message_right">
            <div class="kidoku">既読</div>
            <div class="timestamp">${getTime()}</div>
        </div>
        <div class="message_emoji"><img src="./src/emoji/sticker7.jpg" class="emoji" alt="emoji"></div>
    </div>
    `;

    chatBody.appendChild(messageContainer);

    // Scroll to the bottom of the chat
    chatBody.scrollTop = chatBody.scrollHeight;

    window.scrollTo(0, document.body.scrollHeight);
}
// 【表情6】~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function sendEmoji_6() {
    var chatBody = document.getElementById("chat-body");
    var messageContainer = document.createElement("div");
    messageContainer.className = "message own-message";
    messageContainer.innerHTML = `
    <div class="chat_box">
        <div class="message_right">
            <div class="kidoku">既読</div>
            <div class="timestamp">${getTime()}</div>
        </div>
        <div class="message_emoji"><img src="./src/emoji/sticker8.PNG" class="emoji" alt="emoji"></div>
    </div>
    `;

    chatBody.appendChild(messageContainer);

    // Scroll to the bottom of the chat
    chatBody.scrollTop = chatBody.scrollHeight;

    window.scrollTo(0, document.body.scrollHeight);
}
// 【表情7】~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function sendEmoji_7() {
    var chatBody = document.getElementById("chat-body");
    var messageContainer = document.createElement("div");
    messageContainer.className = "message own-message";
    messageContainer.innerHTML = `
    <div class="chat_box">
        <div class="message_right">
            <div class="kidoku">既読</div>
            <div class="timestamp">${getTime()}</div>
        </div>
        <div class="message_emoji"><img src="./src/emoji/sticker9.PNG" class="emoji" alt="emoji"></div>
    </div>
    `;

    chatBody.appendChild(messageContainer);

    // Scroll to the bottom of the chat
    chatBody.scrollTop = chatBody.scrollHeight;

    window.scrollTo(0, document.body.scrollHeight);
}
// 【表情8】~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function sendEmoji_8() {
    var chatBody = document.getElementById("chat-body");
    var messageContainer = document.createElement("div");
    messageContainer.className = "message own-message";
    messageContainer.innerHTML = `
    <div class="chat_box">
        <div class="message_right">
            <div class="kidoku">既読</div>
            <div class="timestamp">${getTime()}</div>
        </div>
        <div class="message_emoji"><img src="./src/emoji/sticker10.PNG" class="emoji" alt="emoji"></div>
    </div>
    `;

    chatBody.appendChild(messageContainer);

    // Scroll to the bottom of the chat
    chatBody.scrollTop = chatBody.scrollHeight;

    window.scrollTo(0, document.body.scrollHeight);
}