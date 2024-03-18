import React from "react";
import classes from './aboutMe.module.css'
const aboutMe = (props) => {
    if (!props.data || !Array.isArray(props.data)) {
        return null
    }
    const skillsDisplay = props.data.map((item, pos) => {
        return (
            <div key={pos} className={classes.skill}>
                {item}
            </div>

        );
    });
    return (
        <section id="About" className={classes.aboutMe}>
            <h1>About Me</h1>
            <hr></hr>
            <p>Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</p>
            <div className={classes.container}>
                <div className={classes.getToKnowMe}>
                    <h1>Get to know me!</h1>
                    <p> I'm a junior software engineer who has been working at Galil Software as a QA automation engineer for almost 1 year. Due to the war, I was unfortunately laid off. Now, I'm focusing on front-end development because it's my passion and dream career.</p>
                    <p>I'm currently open to job opportunities where I can contribute, learn, and grow. If you have a good opportunity that matches my skills and experience, please don't hesitate to contact me through my social media channels.</p>
                </div>
                <div className={classes.skills}>
                    <h1>My Skills</h1>
                    <div className={classes.skillContainer}>
                        {skillsDisplay}
                    </div>
                    

                </div>
            </div>
            

        </section>

    );
}

export default aboutMe;