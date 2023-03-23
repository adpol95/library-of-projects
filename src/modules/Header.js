import '../App.css';
import logo1 from '../refBaseFinalProjects/Anton Pol_free-file (1).png';
import {Link} from "react-router-dom";
function Header() {
  return (
    <header>
      <div id="headLogo">
        <Link to="/">
          <img src={logo1} alt=""/>
        </Link>
      </div>
      <div className="headButtons">
        <div>
          <Link to="/youtube">
            YouTube clone
          </Link>
          <div className="pointMove"></div>
        </div>
      </div>
      <div className="headButtons">
        <div>
          <Link to="/calc">
            Calculator
          </Link>
          <div className="pointMove"></div>
        </div>
      </div>
      <div className="headButtons">
        <div>
          <Link to="/math-game">
            Math Game
          </Link>
          <div className="pointMove"></div>
        </div>
      </div>
    </header>
  )
}

export default Header;