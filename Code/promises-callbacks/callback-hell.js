function fetchUser(callback) {
  setTimeout(() => {
    console.log("Fetched user");
    callback(null, { userId: 1, userName: "John Doe" });
  }, 1000);
}

function fetchPosts(userId, callback) {
  setTimeout(() => {
    console.log("Fetched posts for userId:", userId);
    callback(null, ["Post 1", "Post 2"]);
  }, 1000);
}

function sendEmail(posts, callback) {
  setTimeout(() => {
    console.log("Sent email with posts:", posts);
    callback(null, "Email sent");
  }, 1000);
}

fetchUser((err, user) => {
  if (err) {
    console.error(err);
  } else {
    fetchPosts(user.userId, (err, posts) => {
      if (err) {
        console.error(err);
      } else {
        sendEmail(posts, (err, result) => {
          if (err) {
            console.error(err);
          } else {
            console.log(result);
          }
        });
      }
    });
  }
});
