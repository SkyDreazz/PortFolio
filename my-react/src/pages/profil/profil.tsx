import React from "react";
import { Infos } from "../../components/infos/infos.tsx";
import { Nav } from "../../components/nav/nav.component.tsx";
import "./profil.css";
import Parameters from "../../images/pictos/parameters.png";
import {
  InfosProfil,
  MoodProfil,
} from "../../components/profil/infosprofil.component.tsx";
import SimpleBar from "simplebar-react";

function Profil() {
  return (
    <div className="profil-main">
      <div className="content-profil">
        <Infos></Infos>
        <div className="main-content">
          <div className="head"></div>
          <SimpleBar style={{width: "100%", height: "60%"}}>
            <div className="head-text">
              <div>
                <h1>Benoît Henrard, 31</h1>
              </div>
              <div
                style={{
                  width: "15vw",
                  display: "flex",
                  gap: "3vw",
                  marginTop: "1vw",
                  marginRight: "1vw",
                }}
              >
                <img src={Parameters} alt="" width={"40vw"} height={"40vw"} style={{cursor: "pointer"}} />
                <button>Edit profil</button>
              </div>
            </div>
            <div>
              <h2>Nice, France</h2>
            </div>
            <div>
              <h3>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </h3>
            </div>
            <InfosProfil
              data={interets.map((data) => {
                return {
                  name: data.name,
                };
              })}
            />
            <MoodProfil
              mood={mood.map((data) => {
                return {
                  name: data.name,
                };
              })}
            />
          </SimpleBar>
        </div>
      </div>
      <Nav></Nav>
    </div>
  );
}

export default Profil;

const mood = [{ name: "Dispo ce soir" }, { name: "Histoire d'un soir" }];

const interets = [
  {
    name: "Sport",
  },
  {
    name: "Lecture",
  },
  {
    name: "Voyages",
  },
  {
    name: "Cinéma",
  },
  {
    name: "Automobile",
  },
  {
    name: "Parc",
  },
  {
    name: "Amis",
  },
];
