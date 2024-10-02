import React, { useEffect, useState } from "react";
import Logo from "../../images/IDreamU_Logo.png";
import ProfilPicture from "../../images/ProfilPicture1.png";
import "./infos.css";
import Picto from "./pictogrammes/pictos.tsx";
import { useLocation, useNavigate } from "react-router-dom";
import { DataUser, UsersVue } from "../datas/infosdata.component.tsx";
import Profil1 from "../../images/profil1.png";
import Profil2 from "../../images/profil2.png";

export function Infos() {
  const nav = useNavigate();
  const location = useLocation();
  const [buttonText, setButtonText] = useState("Voir mon profil");
  const [getClass, setGetClass] = useState("infos");
  const [display, setDisplay] = useState("none");
  const [textData, setTextData] = useState("");

  useEffect(() => {
    if (location.pathname === "/profil") {
      setDisplay("block");
      setGetClass("profil");
      setButtonText("Revenir à l'accueil");
      setTextData("Mes Statistiques");
    } else if (location.pathname === "/reseau") {
      setDisplay("block");
      setGetClass("infos-reseau");
      setButtonText("Voir mon profil");
      setTextData("Mes dernières Vues");
    } else if (location.pathname === "/filtres") {
      setDisplay("block");
      setGetClass('infos-reseau');
      setButtonText('Voir mon profil');
      setTextData("Mes dernières rencontres")
    } 
    else {
      setDisplay("none");
      setGetClass("infos");
      setButtonText("Voir mon profil");
      setTextData("Mes Données");
    }
  }, [location.pathname]);

  const home = () => {
    nav("/");
  };

  const button = () => {
    if (location.pathname !== "/profil") {
      nav("/profil");
    } else {
      nav("/");
    }
  };

  return (
    <div className={getClass}>
      <div className="logo">
        <img src={Logo} alt="" onClick={home} />
      </div>
      <div className="infos-profil">
        <div id="profilpicture">
          <img src={ProfilPicture} alt="" />
        </div>
        <h2 style={{ display: display }}>Benoît Henrard</h2>
        <Picto />
        <button onClick={button}>{buttonText}</button>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: location.pathname === "/" ? "80%" : "100%",
        }}
      >
        <div>
          <h2>{textData}</h2>
        </div>
        <DataUser
          data={data.map((infos) => {
            return {
              name: infos.name,
              img: infos.img,
              number: infos.number,
            };
          })}
        />
        <UsersVue
          data={profils.map((infos) => {
            return {
              name: infos.name,
              desc: infos.desc,
              loc: infos.loc,
              pref1: infos.pref1,
              pref2: infos.pref2,
              pref3: infos.pref3,
            };
          })}
        />
        <button
          style={{
            display: location.pathname === "/reseau" ? "block" : "/filtres" ? "block" : "none",
          }}
        >
          Tous
        </button>
      </div>
      <div
        className="profils"
        style={{
          display: location.pathname === "/reseau" ? "none" : "/filtres" ? "none" : "flex",
        }}
      >
        <div>
          <img src={Profil1} alt="" />
          <h3>Julie</h3>
        </div>
        <div>
          <img src={Profil2} alt="" />
          <h3>Sarah</h3>
        </div>
      </div>
    </div>
  );
}

const data = [
  {
    name: "Vue de profil",
    img: "Vue",
    number: 50,
  },
  {
    name: "Likes",
    img: "Like",
    number: 8,
  },
  {
    name: "Matchs",
    img: "Match",
    number: 15,
  },
];

const profils = [
  {
    name: "Sarah Biaazni",
    desc: "Vétérinaire",
    loc: "Paris, France",
    pref1: "Sport",
    pref2: "Lecture",
    pref3: "none",
  },
  {
    name: "Sarah Biaazni",
    desc: "Vétérinaire",
    loc: "Paris, France",
    pref1: "Voyages",
    pref2: "Amis",
    pref3: "none",
  },
  {
    name: "Sarah Biaazni",
    desc: "Vétérinaire",
    loc: "Paris, France",
    pref1: "Voyages",
    pref2: "Amis",
    pref3: "none",
  },
  {
    name: "Sarah Biaazni",
    desc: "Vétérinaire",
    loc: "Paris, France",
    pref1: "Voyages",
    pref2: "Amis",
    pref3: "none",
  },
  {
    name: "Sarah Biaazni",
    desc: "Vétérinaire",
    loc: "Paris, France",
    pref1: "Voyages",
    pref2: "Amis",
    pref3: "Sport",
  },
];
