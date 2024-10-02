import React from "react";

interface MoodRow {
  mood: {
    name: string;
  };
}

interface InfosRow {
  data: {
    name: string;
  };
}

export function InfosProfilRow({ data }: InfosRow) {
  return (
    <div
      style={{
        backgroundColor: "#C92319",
        borderRadius: "2vw",
        color: "white",
        textAlign: "center",
        width: "10vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "2.5vw",
      }}
    >
      <h2 style={{ margin: "0", fontSize: "1.5vw", }}>{data.name}</h2>
    </div>
  );
}

export function MoodProfilRow({ mood }: MoodRow) {
  return (
    <div
      style={{
        backgroundColor: "#C92319",
        borderRadius: "2vw",
        color: "white",
        textAlign: "center",
        width: "auto",
        padding: '0.5vw 1vw',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "2.5vw",
      }}
    > <h2 style={{margin: "0", fontSize: "1.5vw",}}>{mood.name}</h2> </div>
  );
}
