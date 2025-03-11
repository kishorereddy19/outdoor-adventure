import { Link } from "react-router-dom";

function Logo() {
    return (
       <Link to="/"><img src='src\assets\logo@2x.png' className="h-14 md:invert"></img></Link>
    )
}

export default Logo
