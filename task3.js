task3.js
async function fetchUserPosts(userId) {
  try {
    const userRes = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    if (!userRes.ok) throw new Error();

    const user = await userRes.json();

    const postsRes = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    if (!postsRes.ok) throw new Error();

    const posts = await postsRes.json();

    return {
      name: user.name,
      email: user.email,
      postsCount: posts.length
    };

  } catch (e) {
    return { error: "Не вдалося завантажити дані" };
  }
}

// тест
fetchUserPosts(1).then(console.log);
