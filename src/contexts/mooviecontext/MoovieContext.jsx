import "./mooviecontext.css";
import React from "react";
import { createContext,useState,useEffect } from "react";
import { getMoovies } from "../../services/moovies.service";

export const mooviesContext = createContext()

export default  function MoovieProvider({children}) {
  const [moovies,setMoovies] = useState([])
  useEffect(()=>{
    getMoovies().then((res)=> setMoovies(res))
  },[]);
  return (
    <div className="mooviecontext">
      <mooviesContext.Provider value={{moovies,setMoovies}}>
      {children}
      </mooviesContext.Provider>
    </div>
  );
};


