import React, { useState } from "react";
import { Infos } from "../../components/infos/infos.tsx";
import { Nav } from "../../components/nav/nav.component.tsx";
import SearchIcon from "../../images/pictos/SearchIcon.png";

export function Filtres() {
  const [count, setCount] = useState(0);

  const Addfilters = (title: string, options: string[]) => {
    const initialColors = options.map(() => "white");
    const [backgroundColors, setBackgroundColors] =
      useState<string[]>(initialColors);

    const select = (index: number) => {
      setBackgroundColors((prevColors) =>
        prevColors.map((color, i) => {
          if (i === index) {
            if (color === "white") {
              setCount((prevCount) => prevCount + 1);
              return "#C92319";
            } else {
              setCount((prevCount) => prevCount - 1);
              return "white";
            }
          }
          return color;
        })
      );
    };

    return (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div>
          <h2
            style={{
              color: "#C92319",
              fontFamily: "Tanker",
              textDecoration: "underline",
              fontWeight: "100",
              fontSize: "2vw",
              marginLeft: "2vw",
            }}
          >
            {title}
          </h2>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "1vw",
            marginLeft: "2vw",
            marginBottom: "1vw",
          }}
        >
          {options.map((text, index) => (
            <div
              key={index}
              style={{
                backgroundColor: backgroundColors[index],
                borderRadius: "2vw",
                boxShadow: "0 0 0.2em grey",
                width: "10vw",
                display: text === "none" ? "none" : "block",
              }}
              onClick={() => select(index)}
            >
              <div>
                <h2
                  style={{
                    color:
                      backgroundColors[index] === "#C92319"
                        ? "white"
                        : "#C92319",
                    fontFamily: "Tanker",
                    fontWeight: "100",
                    fontSize: "1.5vw",
                    textAlign: "center",
                    margin: "0",
                    cursor: "pointer",
                  }}
                >
                  {text}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div>
          <Infos />
        </div>
        <div
          style={{ width: "100%", display: "flex", flexDirection: "column" }}
        >
          {count > 0 ? (
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <div style={{ width: "20%" }}></div>
              <h1
                style={{
                  width: "40%",
                  textAlign: "center",
                  textDecoration: "underline",
                  color: "#C92319",
                  fontFamily: "Tanker",
                  fontWeight: "100",
                  fontSize: "2.5vw",
                }}
              >
                Filtres de rencontres
              </h1>
              <div style={{ width: "20%" , display: "flex", justifyContent: "center", height: "100%", alignItems: "center"}}>
                <img src={SearchIcon} alt="" width={"50vw"} height={"50vw"} style={{cursor: "pointer"}} />
              </div>
            </div>
          ) : (
            <h1
              style={{
                width: "100%",
                textAlign: "center",
                textDecoration: "underline",
                color: "#C92319",
                fontFamily: "Tanker",
                fontWeight: "100",
                fontSize: "2.5vw",
              }}
            >
              Filtres de rencontres
            </h1>
          )}
          <div>
            {Addfilters("Yeux", [
              "Bleus",
              "Marrons",
              "Verts",
              "none",
              "none",
              "none",
            ])}
          </div>
          <div>
            {Addfilters("Cheveux", [
              "Brune",
              "Rousse",
              "Blonde",
              "Chatain",
              "Bouclés",
              "Lisses",
            ])}
          </div>
          <div>
            {Addfilters("Taille", [
              "1m40-1m50",
              "1m50-1m60",
              "1m60-1m70",
              "1m70+",
              "none",
              "none",
            ])}
          </div>
          <div>
            {Addfilters("Origine", [
              "Européen",
              "Américain",
              "Africain",
              "Asiatique",
              "Latino",
              "Oriental",
            ])}
          </div>
          <div>
            {Addfilters("Pays", [
              "Français",
              "Anglais",
              "Italien",
              "Mexicain",
              "Portugais",
              "Autres",
            ])}
          </div>
          <div>
            {Addfilters("Location", [
              "< 20km",
              "20-50 km",
              "50-100 km",
              "100-250 km",
              "250-500 km",
              "500 km >",
            ])}
          </div>
        </div>
      </div>
      <Nav />
    </div>
  );
}
