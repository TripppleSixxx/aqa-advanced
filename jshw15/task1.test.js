//Завдання 1

const axios = require("axios");

describe("API test", () => {
  
  test("Use wrong URL for trigger and handle the error", async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posters"
      );
    } catch (error) {
      expect(error).toBeDefined();
      expect(error.response.status).toBe(404);
      expect(error.message).toContain("404");
      console.log("Error message: ", error.message);
    }
  });
});
