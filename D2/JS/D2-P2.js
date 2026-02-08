function fetchUsers() {
    return fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => data.map(user => ({
            id: user.id,
            username: user.username
        })))
        .catch(err => console.log(err));
}

async function GetPosts(userId) {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts?userId=" + userId
        );
        let data = await response.json();
        fillResultContainer(data);
    } catch (error) {
        console.log(error);
    }
}

function fillUsersContainer() {
    let uContainer = document.querySelector("#user-container");

    fetchUsers().then(users => {
        users.forEach(user => {
            let userBtn = document.createElement("button");
            userBtn.className = "user-btn";
            userBtn.textContent = user.username;
            userBtn.dataset.userId = user.id;
            userBtn.addEventListener("click", setActiveUser);
            uContainer.appendChild(userBtn);
        });
    });
}

function fillResultContainer(data) {
    let rContainer = document.querySelector("#result-container");
    rContainer.innerHTML = "";

    let ul = document.createElement("ul");

    data.forEach(post => {
        let li = document.createElement("li");
        li.textContent = post.body;
        ul.appendChild(li);
    });

    rContainer.appendChild(ul);
}

let activeBtn = null;

function setActiveUser(event) {
    if (activeBtn != null) {
        activeBtn.style.backgroundColor = "gold";
    }
    activeBtn = event.target;
    activeBtn.style.backgroundColor = "lightcoral";

    GetPosts(activeBtn.dataset.userId);
}
