import text from "../../assets/SVG/visionbox_text.svg";
import logo_v from "../../assets/SVG/visionbox_v.svg";
import './Navbar.css'

function Navbar() {
  return (
    <div className="parentNavbar">
  
        <div className="visionboxlogo">
        <img
        className="visionboxlogo_v"
            src={logo_v}
            style={{
              maxHeight: "100px",
            }}
          />
          <img
          className="visionboxlogo_text"
            src={text}
            style={{
              maxHeight: "100px",
            }}
          />
      </div>

      <div class="navtabs">
  <span class="tab active" id="1">HOME</span>
  <span class="tab" id="2">CONTACT US</span>
  <span class="tab" id="3">ABOUT</span>
  <div class="indicator"></div>
</div>
 
    </div>
  );
}

export default Navbar;
