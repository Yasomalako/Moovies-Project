import "./mooviesditails.css";
import React from "react";
import { useContext } from "react";
import { mooviesContext } from "../../../contexts/mooviecontext/MoovieContext";
import DenseTable from "../../fiuters/table/Table";
export default function MooviesDetails() {
  const {moovies} = useContext(mooviesContext)
  
  return (
    <div className="mooviesditails">
      <h1>mooviesditails</h1>
      {moovies?.map(moovieItem=>(
        <DenseTable moovies={moovieItem}/>
      )
      )}
    </div>
  );
};


