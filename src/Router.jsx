import { Aboutus, Moovies, Home, ContactUs } from "./components/pages";
import { Route, Routes } from "react-router-dom";
import MoovieProvider from "./contexts/mooviecontext/MoovieContext";
import MooviesDetails from "./components/pages/mooviesditails/MooviesDitails";
export default function Router() {
    return (
        <div className="Router">
            <Routes>
                <Route path={"/"} element={<Home />}></Route>
                <Route path={"Moovies"} element={<MoovieProvider><Moovies /></MoovieProvider>} />
                <Route path={"MooviDitails"} element={<MoovieProvider><MooviesDetails /></MoovieProvider>} />
                <Route path={"ContectUS"} element={<ContactUs />} />
                <Route path={"Aboutus"} element={<Aboutus />} />
            </Routes>
        </div>
    )
}