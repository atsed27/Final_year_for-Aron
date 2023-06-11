import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./main.css";
import NavIcons from "../NavIcons/NavIcons";


function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
			<h3>LOGO</h3>
			<nav ref={navRef}>
            
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
				<NavIcons />
				
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
			
		</header>
	);
}

export default Navbar;
