import "./App.scss"
import Nav from "./components/Nav";
import Main from "./components/Main";
import Footer from "./components/Footer";
import DetallePersonaje from "./components/DetallePersonaje";
import Episodios from "./components/Episodios";
import Lugares from "./components/Lugares";
import { BrowserRouter, Routes, Route } from "react-router-dom";


 




const App = () => {

  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/:idPersonaje" element={<DetallePersonaje/>}/>
        <Route path="/episodios" element={<Episodios/>}/>
        <Route path="/lugares" element={<Lugares/>}/>
  
      </Routes>
    
      <Footer/>
    </BrowserRouter>




    
  )
}

export default App;