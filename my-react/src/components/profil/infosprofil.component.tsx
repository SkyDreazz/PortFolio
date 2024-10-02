import React from "react";
import { InfosProfilRow, MoodProfilRow } from "./infosprofilrow.component.tsx";

interface Mood {
  mood: {
    name: string;
  }[];
}

interface Infos {
  data?: {
    name: string;
  }[];
}

export function InfosProfil({ data }: Infos) {
  return (
    <div
      style={{
        marginTop: "2vw",
      }}
    >
      <h2
        style={{
          textDecoration: "underline",
          color: "#C92319",
        }}
      >
        Centres d'intérêts / Passions
      </h2>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "1vw",
          width: "100%",
          flexWrap: "wrap",
        }}
      >
        {data?.map((infos) => (
          <InfosProfilRow data={infos} />
        ))}
      </div>
    </div>
  );
}

export function MoodProfil({ mood }: Mood) {
  return (
    <div>
      <h2
        style={{
          textDecoration: "underline",
          color: "#C92319",
          marginTop: "2vw"
        }}
      >
        Votre mood
      </h2>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "1vw",
          width: "100%",
          flexWrap: "wrap"
        }}
      >
        {mood?.map((infos) => (
          <MoodProfilRow mood={infos} />
        ))}
      </div>
    </div>
  );
}
