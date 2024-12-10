const posts = [
  {
    id: 1,
    title: "Post 1",
    content: "Conteúdo completo do post 1...",
    date: "2023-10-01",
    image: "image1.jpg",
    category: "Categoria 1",
    views: 0,
  },
  {
    id: 2,
    title: "Post 2",
    content: "Conteúdo completo do post 2...",
    date: "2023-10-02",
    image: "image2.jpg",
    category: "Categoria 2",
    views: 0,
  },
  {
    id: 3,
    title: "Post 3",
    content: "Conteúdo completo do post 3...",
    date: "2023-10-03",
    image: "image3.jpg",
    category: "Categoria 3",
    views: 0,
  },
  {
    id: 4,
    title: "Post 4",
    content: "Conteúdo completo do post 4...",
    date: "2023-10-04",
    image: "image4.jpg",
    category: "Categoria 4",
    views: 0,
  },
];

function loadPosts() {
  const container = document.getElementById("posts-container");
  container.innerHTML = "";
  posts.forEach((post) => {
    const postCard = document.createElement("div");
    postCard.className = "post-card";
    postCard.onclick = () => viewPost(post.id);
    postCard.innerHTML = `
            <img src="${post.image}" alt="${post.title}">
            <h2>${post.title}</h2>
            <p>${post.content.substring(0, 100)}...</p>
            <div class="meta">
                <span>${post.date}</span> | 
                <span>${post.category}</span> | 
                <span>${post.views} visualizações</span>
            </div>
        `;
    container.appendChild(postCard);
  });
}

function viewPost(id) {
  const post = posts.find((p) => p.id === id);
  post.views++;
  localStorage.setItem("post", JSON.stringify(post));
  window.location.href = "post.html";
}

function loadPost() {
  const post = JSON.parse(localStorage.getItem("post"));
  if (post) {
    const container = document.getElementById("post-content");
    container.innerHTML = `
            <h1>${post.title}</h1>
            <img src="${post.image}" alt="${post.title}">
            <p>${post.content}</p>
            <div class="meta">
                <span>${post.date}</span> | 
                <span>${post.category}</span> | 
                <span>${post.views} visualizações</span>
            </div>
        `;
  }
}

function filterPosts(category) {
  const filteredPosts = posts.filter((post) => post.category === category);
  const container = document.getElementById("posts-container");
  container.innerHTML = "";
  filteredPosts.forEach((post) => {
    const postCard = document.createElement("div");
    postCard.className = "post-card";
    postCard.onclick = () => viewPost(post.id);
    postCard.innerHTML = `
            <img src="${post.image}" alt="${post.title}">
            <h2>${post.title}</h2>
            <p>${post.content.substring(0, 100)}...</p>
            <div class="meta">
                <span>${post.date}</span> | 
                <span>${post.category}</span> | 
                <span>${post.views} visualizações</span>
            </div>
        `;
    container.appendChild(postCard);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("posts-container")) {
    loadPosts();
  } else if (document.getElementById("post-content")) {
    loadPost();
  }
});
