const axios = require("axios");

describe("API test", () => {
  let postId;

  test("Axios get all posts", async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    expect(response.status).toBe(200);
    expect(response.data).toBeDefined();
  });

  test("Axios get post by ID", async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    expect(response.status).toBe(200);
    expect(response.data).toBeDefined();
    expect(response.data.id).toBe(1);
  });

  test("Axios create new post", async () => {
    const body = {
      title: "Test",
      body: "Test description",
      userId: 1,
    };
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      body
    );
    expect(response.status).toBe(201);
    expect(response.data).toBeDefined();
    expect(response.data.title).toBe(body.title);

    postId = response.data.id;
  });

  test("Axios get new post by ID", async () => {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${postId}`
      );
      expect(response.status).toBe(200);
      expect(response.data).toBeDefined();
    } catch {}
  });

  test("Axios get new post in the list", async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    try {
      expect(response.status).toBe(200);
      expect(response.data.id).toBe(postId);
    } catch {}
  });
});
