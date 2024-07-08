function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = { user: "Yousif" };
      resolve(data);
    }, 2000);
  });
}

fetchData()
  .then((data) => {
    console.log("Data received:", data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
