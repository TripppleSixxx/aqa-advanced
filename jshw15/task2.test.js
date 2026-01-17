//Завдання 2: Testing Request Headers and Params

const axios = require("axios");

describe("API test", () => {
  test("Get user's books", async () => {
    const responseGenerateToken = await axios.post(
      "https://demoqa.com/Account/v1/GenerateToken",
      {
        userName: "myTestUser01",
        password: "myTe5tPa5sword!",
      }
    );
    const userToken = responseGenerateToken.data.token;

    const responseGetBooks = await axios.get(
      "https://demoqa.com/BookStore/v1/Books",
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userToken}`,
        },
      }
    );
    
    expect(responseGetBooks.status).toBe(200);
    expect(responseGetBooks.data.books).toBeInstanceOf(Array);
  });
});
