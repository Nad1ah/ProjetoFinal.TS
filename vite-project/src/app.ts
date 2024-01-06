//1. peguei os dados da pagina HTML, com o querySelector e fiz uma const para cada.

const searchBr = document.querySelector("#searchId");
const postsBody = document.querySelector("#postsContainer");
const dateTime = document.querySelector("#date-time");
const newPost = document.querySelector("#postForm");
const titulo = document.querySelector("#titulo");
const conteudo = document.querySelector("#conteudo");
const postElement = document.createElement("div");

//2. criei as const para fazer fetch dos dados.

const usersPage =
  "https://jmrfrosa.github.io/edit-jsts-dec2023.github.io/data/users.json";
const postsPage =
  "https://jmrfrosa.github.io/edit-jsts-dec2023.github.io/data/posts.json";

//3. coloquei a discrição do conteudo que ele vai receber do fecth.
interface User {
  id: number;
  name: string;
  picture: string;
}

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

//4. criei a função para receber usuarios e posts.

async function getData() {
  try {
    const [users, posts] = await Promise.all([getUsers(), getPosts()]);

    console.log("Users:", users);
    console.log("Posts:", posts);
  } catch (error) {
    console.log("error", error);
  }
}

getData();

async function getUsers(): Promise<User[]> {
  const response = await fetch(usersPage);
  return await response.json();
}

async function getPosts(): Promise<Post[]> {
  const response = await fetch(postsPage);
  return await response.json();
}

//5. começei a criar a função para pesquisa, mas ao chegar no return me perdi.

const elements = Array.from(document.querySelectorAll(".string"));

const filteredElements = elements.filter((element) => {
  return element.classList.contains("string");
});

//6. criei a função para novo post.

async function createPost(title: string, body: string, userId: number) {
  const response = await fetch(postsPage, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userId: userId,
      title: title,
      body: body,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to create post");
  }

  const newPost = await response.json();
  return newPost;
}

async function criarPost() {
  const tituloInput = document.querySelector("#titulo");
  const conteudoInput = document.querySelector("#conteudo");
  const usuarioId = usersPage;

  const newPost = await createPost(
    tituloInput.value,
    conteudoInput.value,
    usuarioId
  );

  const form = document.querySelector("#postForm");
  form.addEventListener("submit", function (event: Event) {
    event.preventDefault();
    criarPost();
    form.reset();
  });
}
