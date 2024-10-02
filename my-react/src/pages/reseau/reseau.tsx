import React, { useState } from "react";
import { Infos } from "../../components/infos/infos.tsx";
import { Nav } from "../../components/nav/nav.component.tsx";
import "./reseau.css";
import { useLocation, useNavigate } from "react-router-dom";

export default function Reseau() {
  const nav = useNavigate();

  const NavFiltres = (text) => {
    localStorage.setItem('filtre', text);
    nav('/filtres')
  }

  const backGround = (event: string, text: string) => {
    return (
      <div className={event}>
        <h2 onClick={() => NavFiltres(text)}>{text}</h2>
      </div>
    );
  };

  return (
    <div className="reseau">
      <div className="content">
        <div>
          <Infos />
        </div>
        <div className="main">
          <h1>Rencontres</h1>
          <div className="categories">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    flexWrap: "wrap",
                    rowGap: "2vw",
                    columnGap: "2vw",
                    height: "30vw",
                    paddingBottom: "0.5vw",
                    marginTop: "1vw"
                  }}
                >
                  {backGround("ame-soeur", "Âme Soeur")}
                  {backGround("histoire-courte", "Histoire Courte")}
                  {backGround("fun", "Pour S'amuser")}
                  {backGround("voyage", "Voyages")}
                  {backGround("resto", "Soirée Resto")}
                  {backGround("serieux", "Relation Sérieuse")}
                  {backGround("amitie", "Amitié")}
                  {backGround("longue-distance", "Relation à Distance")}
                </div>
                <button style={{ width: "30%", marginTop: "1vw" }}>Tous</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Nav />
    </div>
  );
}
