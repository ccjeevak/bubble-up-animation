import "./App.css";
import logo from "./assets/images/logo.png";
import menu from "./assets/images/menu.png";
import fb from "./assets/images/fb.png";
import ig from "./assets/images/ig.png";
import tw from "./assets/images/tw.png";
import share from "./assets/images/share.png";
import info from "./assets/images/info.png";
import bubb from "./assets/images/bubble.png";
function App() {
  return (
    <div className="hero">
      <nav className="nav-bar">
        <img src={logo} className="logo" />
        <button type="button">Sign Up</button>
      </nav>
      <div className="content">
        <small>Welcome to our</small>
        <h1>
          World's<br></br>Creative Studio
        </h1>
        <button type="button"> Take a tour</button>
      </div>
      <div className="side-bar">
        <img src={menu} className="menu" />
        <div className="social-links">
          <img src={fb} />
          <img src={ig} />
          <img src={tw} />
        </div>
        <div className="useful-links">
          <img src={share} />
          <img src={info} />
        </div>
      </div>
      <div className="bubbles">
        <img src={bubb}/>
        <img src={bubb}/>
        <img src={bubb}/>
        <img src={bubb}/>
        <img src={bubb}/>
        <img src={bubb}/>
        <img src={bubb}/>
      </div>
    </div>
  );
}

export default App;
