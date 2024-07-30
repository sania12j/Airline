import React, { useEffect } from "react";
import "./cancelpage.css";
import logo from "./parzi.gif";
import bgimg from "./mainbg.png";
import * as BusFunc from "../BusList/BusFunctions";
export default function TicketPage({ history }) {
  useEffect(() => {
    BusFunc.postponeNotificationFunc(sessionStorage.getItem("authToken"));
  }, []);

  const handleSignOut = (e) => {
    e.preventDefault();
    sessionStorage.removeItem("authToken");
    localStorage.removeItem("reservedSeats");
    localStorage.removeItem("nameData");
    localStorage.clear();
    history.push("/");
  };

  const handleBookAgainIcon = (e) => {
    e.preventDefault();
    localStorage.removeItem("reservedSeats");
    localStorage.removeItem("nameData");
    localStorage.clear();
    history.push("/routes");
  };
  const myStyle = {
    backgroundImage: { bgimg },
    fontSize: "25px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div style={myStyle}>
      <div className="container">
        <div>
          <nav className="mb-4 navbar navbar-expand-lg navbar-dark bg-unique hm-gradient">
            <a href="/#" className="navbar-brand Company-Log">
              SA
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent-3"
              aria-controls="navbarSupportedContent-3"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent-3"
            >
              <ul className="navbar-nav ml-auto nav-flex-icons ic">
                <li className="nav-item">
                  <a
                    href="/#"
                    className="nav-link waves-effect waves-light"
                    onClick={(e) => handleBookAgainIcon(e)}
                    style={{
                      color: "#494242",
                      fontSize: "smaller",
                      boxShadow: "rgba(0, 0, 0, 0.36) -1px 0px 29px 1px",
                      margin: "auto 1.8rem",
                    }}
                  >
                    Book Again
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="/#"
                    className="nav-link waves-effect waves-light"
                    onClick={(e) => handleSignOut(e)}
                    style={{
                      color: "red",
                      fontSize: "smaller",
                      boxShadow: "rgba(0, 0, 0, 0.56) 0px 22px 70px 4px",
                    }}
                  >
                    Sign-Out
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <img
            style={{ width: "45%", height: "40%" }}
            src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExd3AwZ3N1ZmIxYmo3bGhoYTFydTVsOThkdWs3cXR4eWRwb2p6Y2dydyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/nbs8t9B4P3CBmaoBMi/giphy.webp"
            alt="loading..."
          />
          <h2
            style={{
              color: "#5b3939",
              marginLeft: "0.6rem",
              padding: "1.5rem",
              background: "#fffbf657",
            }}
          >
            YOUR TICKET HAS BEEN CANCELLED
          </h2>
        </div>
      </div>
    </div>
  );
}
