import "./moovie.css";
import React from "react";
import { useContext } from "react";
import { mooviesContext } from "../../../contexts/mooviecontext/MoovieContext";
import MoovieCard from "../../fiuters/moovie-card/Moovie-Card"

export default function Moovies() {
  const {moovies} = useContext(mooviesContext)
  return (
    <div className="moovie">
      <h1>moovie</h1>
      {moovies?.map(moovieItem => (
        <MoovieCard moovies={moovieItem}/>
      )

      )}
    </div>
  );
};


