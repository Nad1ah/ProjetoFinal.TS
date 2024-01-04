import "./app.js";

const usersPage =
  "https://jmrfrosa.github.io/edit-jsts-dec2023.github.io/data/users.json";
const postsPage =
  "https://jmrfrosa.github.io/edit-jsts-dec2023.github.io/data/posts.json";

async function getData() {
  const users = await getUsers();
  const posts = await getPosts();

  console.log("Users:", users);
  console.log("Posts:", posts);
}

getData();
interface User {
  id: number;
  name: string;
  picture: string;
}
interface Posts {
  userId: number;
  id: number;
  title: string;
  body: string;
}
async function getUsers(): Promise<User[]> {
  let response = await fetch(
    "https://jmrfrosa.github.io/edit-jsts-dec2023.github.io/data/users.json"
  );
  return await response.json();
}

async function getPosts(): Promise<Posts[]> {
  let response = await fetch(
    "https://jmrfrosa.github.io/edit-jsts-dec2023.github.io/data/posts.json"
  );
  return await response.json();
}
