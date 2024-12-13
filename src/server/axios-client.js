import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "69654d32bdbe41f5a14db9717c301f1b",
  },
});
