const fetchData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  displaying(data);
};

const posts = fetchData();

const displaying = (posts) => {
  let postsContainer = document.getElementById("PostsContainer");

  posts.forEach((post) => {
    const li = document.createElement("li");
    li.innerHTML = post.title;

    postsContainer.append(li);
  });
};

fetchData();
