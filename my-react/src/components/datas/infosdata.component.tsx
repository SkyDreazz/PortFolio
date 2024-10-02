import React, { useEffect, useState } from "react";
import { DataUserRow, UsersVueRow } from "./infosdatarow.component.tsx";
import { Location, useLocation } from "react-router-dom";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";

interface DataProps {
  data: {
    name: string;
    img: string;
    number: number;
  }[];
}

interface UsersVueProps {
  data: {
    name: string;
    desc: string;
    loc: string;
    pref1: string;
    pref2: string;
    pref3: string;
  }[];
}

export function DataUser({ data }: DataProps) {
  const location = useLocation();

  return (
    <div
      style={{
        display: location.pathname === "/reseau" ? "none" : location.pathname === "/filtres" ? "none" : "flex",
        flexDirection: "column",
        width: "100%",
        alignItems: location.pathname === "/profil" ? "center" : "",
        marginBottom: "1vw"
      }}
    >
      {data.map((infos) => (
        <DataUserRow data={infos} />
      ))}
    </div>
  );
}

export function UsersVue({ data }: UsersVueProps) {
  const location = useLocation();
  return (
    <div
      className={`users-vue`}
      style={{
        display: location.pathname === "/reseau" ? "block" : location.pathname === "/filtres" ? "block" : "none"
      }}
    >
      <SimpleBar style={{ height: "90%", width: "100%" }}>
        <div style={{
            paddingTop: "0.5vw",
            paddingLeft: "2.5vw",
        }}>
          {data.map((infos) => (
            <UsersVueRow data={infos} />
          ))}
        </div>
      </SimpleBar>
    </div>
  );
}
