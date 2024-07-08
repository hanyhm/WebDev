function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = { user: "Yousif" };
      resolve(data);
    }, 2000);
  });
}

async function getUserData() {
  try {
    const data = await fetchData(); // Wait for fetchData to resolve
    console.log("Data received:", data);
  } catch (error) {
    console.error("Error:", error);
  }
}

getUserData();
