import axios from "axios";

const loggingIn = (req, res) => {
  fetch("");
};

export function notificationFunc() {
  let apiUrl = "http://localhost:8080/ticket";
  return axios.post(apiUrl, loggingIn, {
    headers: {
      "Content-Type": "application/json",
      authToken: "?",
    },
  });
}
