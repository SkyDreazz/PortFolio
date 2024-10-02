import React, { useEffect, useState } from "react";
import { Infos } from "../../components/infos/infos.tsx";
import "./index.css";
import { Nav } from "../../components/nav/nav.component.tsx";
import Notif from "../../images/pictos/bell-solid 2.png";
import img1 from "../../images/profils/image 51.png";
import img2 from "../../images/profils/image 49.png";
import img3 from "../../images/profils/image 52.png";
import img4 from "../../images/profils/image 48.png";
import img5 from "../../images/profils/image 47.png";
import img6 from "../../images/profils/image 50.png";
import img7 from "../../images/profils/long.png";
import img8 from "../../images/profils/image 46.png";
import Profil2 from "../../images/profil2.png";

function Index() {
  const [classImg, setClassImg] = useState(false);
  const [image, setImage] = useState("");

  useEffect(() => {
    setClassImg(false);
    setImage("");
  }, []);

  const quickVue = () => {
    setClassImg(true);
  };

  const handleClick = () => {
    quickVue();
  };

  return (
    <div>
      <div className="content">
        <div>
          <Infos />
        </div>
        <div className="main-content">
          <div id="main">
            <div className="head">
              <div id="first">
                <h2>Benoit Henrard</h2>
              </div>
              <div id="sec">
                <img src={Notif} alt="" />
              </div>
            </div>
            <div className="head-nav">
              <div>
                <h3>Voir mes amis</h3>
              </div>
              <div>
                <h3>Voir mes messages</h3>
              </div>
              <div>
                <h3>Ajouter des posts</h3>
              </div>
            </div>
          </div>
          <div className="rencontres">
            <div className="photo-profils">
              <div className="personnes">
                <img src={img1} alt="" onClick={() => handleClick()} />
                <img src={img2} alt="" />
                <img src={img3} alt="" />
                <h3>En ligne</h3>
                <h3>Actuellement</h3>
                <img src={img4} alt="" />
                <img src={img5} alt="" />
                <img src={img6} alt="" />
                <h3>Proche de chez</h3>
                <h3>vous</h3>
                <img src={img7} alt="" />
                <img src={img8} alt="" />
                <h3>Profils Intéressants</h3>
                <h3>pour vous</h3>
              </div>
            </div>
            <div className={classImg ? "quickvue" : "none"}>
              <h2>Faire des rencontres</h2>
              <div className="img">
                <div>
                  <img src={Profil2} alt="" />
                </div>
                <div>
                  <h1>
                    Sarah BIAANZI
                  </h1>
                </div>
                <div>
                  <h2>
                    Vétérinaire
                  </h2>
                  <h2>Paris, France</h2>
                </div>
              </div>
              <h2 style={{
                color: "#C92319",
                textDecoration: "underline"
              }}>Son Mood</h2>
              <div style={{
                backgroundColor: "#C92319",
                borderRadius: "2vw",
                padding: "0.2vw 0.5vw",
                marginBottom: "0.5vw"
              }}>
                <h3 style={{
                  width: "100%",
                  textAlign: "center",
                  color: "white",
                  fontSize: "1.3vw"
                }}>Histoire d'un soir</h3>
              </div>
              <div style={{
                backgroundColor: "#C92319",
                borderRadius: "2vw",
                padding: "0.2vw 0.5vw",
                marginBottom: "0.5vw"
              }}>
                <h3 style={{
                  width: "100%",
                  textAlign: "center",
                  color: "white",
                  fontSize: "1.3vw"
                }}>Dispo ce soir</h3>
              </div>
              <div style={{
                backgroundColor: "#C92319",
                borderRadius: "2vw",
                padding: "0.2vw 0.5vw"
              }}>
                <h3 style={{
                  width: "100%",
                  textAlign: "center",
                  color: "white",
                  fontSize: "1.3vw"
                }}>Âme soeur</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Nav />
    </div>
  );
}

export default Index;
