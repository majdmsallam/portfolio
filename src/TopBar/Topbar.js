// import React from "react";
// import classes from './Topbar.module.css'
// import MajdProfileImage from './images/MajdProfile.png';
// import AnchorLink from "react-anchor-link-smooth-scroll";
// const Topbar = () => {
//     return (
//         <header>
//             <nav className={classes.Topbar}>
//                 <div className={classes.start}>
//                     <img src={MajdProfileImage} alt="Majd Profile img" />
//                     <span>MAJD MSALLAM</span>
//                 </div>
//                 <div className={classes.end}>
//                     <ul>
//                         <AnchorLink href="#Home">
//                             <li>HOME</li>
//                         </AnchorLink>
//                         <AnchorLink href="#About">
//                             <li>ABOUT</li>
//                         </AnchorLink>
//                         <AnchorLink href="#Projects">
//                             <li>PROJECTS</li>
//                         </AnchorLink>
//                         <AnchorLink href="Contact">
//                             <li>CONTACT</li>
//                         </AnchorLink>

//                     </ul>
//                 </div>
//             </nav>

//         </header>
//     );
// }

// export default Topbar;

import React, { useState } from "react";
import classes from './Topbar.module.css'
import MajdProfileImage from './images/MajdProfile.png';
import AnchorLink from "react-anchor-link-smooth-scroll";

const Topbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header>
            <nav className={`${classes.Topbar} ${menuOpen ? classes.open : ''}`}>
                <div className={classes.start}>
                    <img src={MajdProfileImage} alt="Majd Profile img" />
                    <span>MAJD MSALLAM</span>
                </div>
                <div className={`${classes.end} ${menuOpen ? '' : ''}`}>
                    <ul>
                        <AnchorLink href="#Home">
                            <li>HOME</li>
                        </AnchorLink>
                        <AnchorLink href="#About" >
                            <li>ABOUT</li>
                        </AnchorLink>
                        <AnchorLink href="#Projects">
                            <li>PROJECTS</li>
                        </AnchorLink>
                    </ul>
                </div>
                <button className={classes.hamburger} onClick={toggleMenu}>
                    <i class="fa-solid fa-bars"></i>
                </button>
                <div className={`${classes.hamburgerMenu} ${menuOpen ? classes.showMenu : ''}`}>
                    <ul>
                        <AnchorLink href="#Home">
                            <li>HOME</li>
                        </AnchorLink>
                        <AnchorLink href="#About" >
                            <li>ABOUT</li>
                        </AnchorLink>
                        <AnchorLink href="#Projects">
                            <li>PROJECTS</li>
                        </AnchorLink>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Topbar;