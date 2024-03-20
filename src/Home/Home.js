import React from "react";
import classes from './Home.module.css'
import AnchorLink from "react-anchor-link-smooth-scroll";
const Home = () => {
    return (
        <section id="Home" className={classes.Home}>
            <div className={classes.mainContent}>
                <h1>HEY! I'M MAJD MSALLAM</h1>
                <h3>a junior software engineer with experience in QA automation for almost a year. Currently, I'm focused on front-end development, eager to bring creativity and user-centric design to projects. Let's build something amazing together!</h3>
                <AnchorLink href="#Projects" className={classes.projectBtn}>
                    PROJECTS
                </AnchorLink>
            </div>
            <nav className={classes.social}>
                <ul>
                    <li><a href="https://drive.google.com/drive/u/0/folders/12ULa3lIhPDY_uGdoUX6zXBC2AxNQk7wQ">Majd's CV <i class="fa-regular fa-file-pdf"></i></a></li>
                    <li><a href="https://github.com/majdmsallam">Github <i class="fa fa-github"></i></a></li>
                    <li><a href="https://www.linkedin.com/in/majd-msallam-28282b20a/">Linkedin <i class="fa fa-linkedin"></i></a></li>
                </ul>
            </nav>

        </section>

    );
}

export default Home;
