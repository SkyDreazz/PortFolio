import React from "react";
import "./.css";
import Event from "../../images/pictos/Events.png";
import Home from "../../images/pictos/Home.png";
import Post from "../../images/pictos/+.png";
import Game from "../../images/pictos/game.png";
import Heart from "../../images/pictos/heart.png";
import Chat from "../../images/pictos/Chatting icon with text.png";
import { useNavigate } from "react-router-dom";

export function Nav() {

  const nav = useNavigate();

  const handleClick = (event) => {
    switch (event) {
      case "Home":
        nav("/");
        break;
      default:
        break;
    }
  }

  return (
    <div className="nav">
      <div className="event">
        <div>
          <img src={Event} alt="" />
        </div>
      </div>
      <div className="main-nav">
        <div><img src={Home} onClick={() => handleClick("Home")} alt="" /></div>
        <div><img src={Heart} alt="" /></div>
        <div><img src={Post} alt="" /></div>
        <div><img src={Chat} alt="" /></div>
        <div><img src={Game} alt="" /></div>
      </div>
      <div className="buttons">
        <div><button>SEARCH</button></div>
        <div><button>MORE</button></div>
      </div>
    </div>
  );
}
