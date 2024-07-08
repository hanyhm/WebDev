function fetchUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ user: "Yousif" });
    }, 1000);
  });
}

function fetchPosts() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(["Post 1", "Post 2"]);
    }, 2000);
  });
}

async function getUserAndPosts() {
  try {
    const user = await fetchUser();
    console.log("User:", user);

    const posts = await fetchPosts();
    console.log("Posts:", posts);
  } catch (error) {
    console.error("Error:", error);
  }
}

getUserAndPosts();
