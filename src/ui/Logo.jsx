import { Link } from "react-router-dom";
import logoImg from "../assets/images/logo@2x.png";

function Logo({ handleClick }) {
  return (
    <Link onClick={handleClick} to="/">
      <img src={logoImg} className="h-14 md:invert"></img>
    </Link>
  );
}

export default Logo;
