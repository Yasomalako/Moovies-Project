import "./header.css";
import { Link } from "react-router-dom"; 
export const pages = ["Moovies","Aboutus","ContectUS","MooviDitails"]
export default  function Header() {
  return (
    <div className="header">
      <Link to={"/"}/><button>Home</button>
      {pages.map(pagePath=>(
        <Link to={pagePath}><button>{pagePath}</button></Link>
      ))}
    </div>
  );
};


