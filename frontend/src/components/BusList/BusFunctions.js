import axios from "axios";

export function registerBookingDetail(bookingDetails) {
  let apiUrl = "http://localhost:8080/booking";
  return axios.post(apiUrl, bookingDetails, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export function notificationFunc(token) {
  let apiUrl = "http://localhost:8080/ticket";
  return axios.get(apiUrl, {
    headers: {
      "Content-Type": "application/json",
      authToken: token,
    },
  });
}

export function postponeNotificationFunc(token) {
  let apiUrl = "http://localhost:8080/postponeticket";
  return axios.get(apiUrl, {
    headers: {
      "Content-Type": "application/json",
      authToken: token,
    },
  });
}
