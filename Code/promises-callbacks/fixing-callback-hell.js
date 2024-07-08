function fetchUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Fetched user");
      resolve({ userId: 1, userName: "John Doe" });
    }, 1000);
  });
}

function fetchPosts(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Fetched posts for userId:", userId);
      resolve(["Post 1", "Post 2"]);
    }, 1000);
  });
}

function sendEmail(posts) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Sent email with posts:", posts);
      resolve("Email sent");
    }, 1000);
  });
}

async function process() {
  try {
    const user = await fetchUser();
    const posts = await fetchPosts(user.userId);
    const result = await sendEmail(posts);
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

process();
