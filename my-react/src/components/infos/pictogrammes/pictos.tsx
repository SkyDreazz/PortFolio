import React, { useEffect, useState } from "react";
import facebook from "../../../images/pictos/facebook.png";
import reseau from "../../../images/pictos/Globe.png";
import "./pictos.css";
import { useLocation, useNavigate } from "react-router-dom";


function Picto(){

    const location = useLocation();

    const [getClass, setGetClass] = useState('pictos');

    const nav = useNavigate()

    const handleClick = (event: string) =>{
        switch(event){
            case "reseau":
                nav("/reseau")
                break;
            default:
                break;
        }
    }

    useEffect(() => {
        if (location.pathname === "/profil"){
            setGetClass('none')
        } else if (location.pathname === "/reseau") {
            setGetClass('none')
        } else if (location.pathname === "/filtres") {
            setGetClass('none')
        }
        
        else {
            setGetClass('pictos')
        }
    }, [location.pathname])

    return (
        <div className={getClass}>
            <img src={facebook} alt="" />
            <img src={reseau} alt="" onClick={() => handleClick("reseau")}/>
        </div>
    )
}

export default Picto;