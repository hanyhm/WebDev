function fetchData(callback) {
  setTimeout(() => {
    const data = { user: "Yousif" };
    callback(data);
  }, 2000);
}

function handleData(data) {
  console.log("Data received:", data);
}

fetchData(handleData);
