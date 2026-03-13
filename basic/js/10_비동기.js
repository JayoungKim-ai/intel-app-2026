let loading = false;
async function getUserPosts() {
  loading = true;
  try {
    const userResponse = await fetch(
      "https://jsonplaceholder.typicode.com/posts",
    );
    console.log(userResponse);
    const user = await userResponse.json();
    console.log(user);
  } catch (err) {
    console.error("에러발생", err.message);
  } finally {
    loading = false;
  }
}

getUserPosts();
