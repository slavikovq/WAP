import { BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./Home/Home"
import GaleriePage from "./Galerie/Galerie"
import Food from "./Food/Food"
import Drinks from "./Drinks/Drinks"
import Open from "./Open/Open"

export default function AppRoutes() {
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/Galerie" element={<GaleriePage/>}/>
                    <Route path="/Food" element={<Food/>}/>
                    <Route path="/Drinks" element={<Drinks/>}/>
                    <Route path="/Open" element={<Open/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}