import './App.css';
import Header from "./modules/Header";
import {Routes, Route} from "react-router-dom"
import United from "./modules/United";
import YouTubeClone from "./pages/youtube-clone/YouTubeClone";
import Calculator from "./pages/calculator/Calculator";
import MathGame from "./pages/math-game/MathGame";

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<United/>}/>
        <Route path="/youtube" element={<YouTubeClone/>}/>
        <Route path="/calc" element={<Calculator/>}/>
        <Route path="/math-game" element={<MathGame/>}/>
      </Routes>
    </div>
  );
}

export default App;
