import React from "react";
import classes from './Footer.module.css'
const Footer = () => {
    return (
        <footer className={classes.footer}>
            <div className={classes.container}>
                <div className={classes.footerContent}>
                    {/* <div className={classes.footerLogo}>
                        Logo
                    </div> */}
                    {/* <div className={classes.footerLinks}>
                        <ul className={classes.footerMenu}>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Projects</a></li>
                        </ul>
                    </div> */}
                    {/* <div className={classes.footerSocial}>
                        <ul className={classes.socialIcons}>
                            <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                            <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                            <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                            <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                        </ul>
                    </div> */}
                </div>
                <div className={classes.footerBottom}>
                    <p>&copy; 2024 Majd Msallam. All rights reserved.</p>
                </div>
            </div>
        </footer>

    );
}

export default Footer;