import { BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./Home/Home"
import Galerie from "./Home/Galerie"

export default function AppRoutes() {
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/Galerie" element={<Galerie/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}










































//Mnau a uz ho nemaz )