import React from "react";
import Like from "../../images/pictos/LikeRed.png";
import Vue from "../../images/pictos/Eye open.png";
import Match from "../../images/pictos/Match.png";
import Profil from "../../images/profil2.png";
import "./.css";

interface DatarOWProps {
  data: {
    name: string;
    img: string;
    number: number;
  };
}

interface UsersVueRowProps {
  data: {
    name: string;
    desc: string;
    loc: string;
    pref1: string;
    pref2: string;
    pref3: string;
  };
}

export function DataUserRow({ data }: DatarOWProps) {
  switch (data.img) {
    case "Vue":
      return (
        <div className="data">
          <div className="img">
            <img src={Vue} alt="" />
          </div>
          <div className="name">
            <h3>{data.name}</h3>
          </div>
          <div className="number">
            <h3>{data.number}</h3>
          </div>
        </div>
      );
    case "Like":
      return (
        <div className="data">
          <div className="img">
            <img src={Like} alt="" />
          </div>
          <div className="name">
            <h3>{data.name}</h3>
          </div>
          <div className="number">
            <h3>{data.number}</h3>
          </div>
        </div>
      );
    default:
      return (
        <div className="data">
          <div className="img">
            <img src={Match} alt="" />
          </div>
          <div className="name">
            <h3>{data.name}</h3>
          </div>
          <div className="number">
            <h3>{data.number}</h3>
          </div>
        </div>
      );
  }
}

export function UsersVueRow({ data }: UsersVueRowProps) {
  return (
    <div className="usersvuerow">
      <div>
        <img src={Profil} alt="" />
      </div>
      <div
        style={{
          width: "30%",
        }}
      >
        <h2>{data.name}</h2>
        <h3 style={{ color: "grey" }}>{data.desc}</h3>
        <h3 style={{ color: "grey" }}>{data.loc}</h3>
      </div>
      <div
        style={{
          display: "flex",
          width: "50%",
          justifyContent: "flex-end",
          gap: "0.5vw",
          flexWrap: "wrap"
        }}
      >
        <div
          style={{
            width: "30%",
            display: data.pref1 === "none" ? "none" : "block",
            backgroundColor: "#C92319",
            borderRadius: "3vw",
            padding: "0.3vw",
            boxShadow: "0 0 0.5em grey"
          }}
        >
          <h3
            style={{
              width: "100%",
              textAlign: "center",
              color: "white"
            }}
          >
            {data.pref1}
          </h3>
        </div>
        <div
          style={{
            width: "30%",
            display: data.pref2 === "none" ? "none" : "block",
            backgroundColor: "#C92319",
            borderRadius: "3vw",
            padding: "0.3vw",
            boxShadow: "0 0 0.5em grey"
          }}
        >
          <h3
            style={{
              width: "100%",
              textAlign: "center",
              color: "white"
            }}
          >
            {data.pref2}
          </h3>
        </div>
        <div
          style={{
            width: "30%",
            display: data.pref3 === "none" ? "none" : "block",
            backgroundColor: "#C92319",
            borderRadius: "3vw",
            padding: "0.3vw",
            boxShadow: "0 0 0.5em grey"
          }}
        >
          <h3
            style={{
              width: "100%",
              textAlign: "center",
              color: "white"
            }}
          >
            {data.pref3}
          </h3>
        </div>
      </div>
    </div>
  );
}
