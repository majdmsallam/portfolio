import React from "react";
import classes from './Home.module.css'
const Home = () => {
    return (
        <section id="Home" className={classes.Home}>
            <div className={classes.mainContent}>
                <h1>HEY! I'M MAJD MSALLAM</h1>
                <h3>a junior software engineer with experience in QA automation for almost a year. Currently, I'm focused on front-end development, eager to bring creativity and user-centric design to projects. Let's build something amazing together!</h3>
                <button className={classes.projectBtn}>
                    PROJECTS
                </button>
            </div>
            <nav className={classes.social}>
                <ul>
                    <li><a href="">Majd's CV <i class="fa-regular fa-file-pdf"></i></a></li>
                    <li><a href="https://github.com/majdmsallam">Github <i class="fa fa-github"></i></a></li>
                    <li><a href="https://www.linkedin.com/in/majd-msallam-28282b20a/">Linkedin <i class="fa fa-linkedin"></i></a></li>
                </ul>
            </nav>

        </section>

    );
}

export default Home;
