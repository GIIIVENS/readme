// Require axios
const axios = require("axios");

const api = {
  async getUser(userResponses) {
    try {
      let response = await axios.get(
        `https://api.github.com/users/${userResponses.credits}`
      )
    } catch (error) {
      console.log("error");
    }
  },
};
