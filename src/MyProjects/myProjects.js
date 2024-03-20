import React from "react";
import classes from './myProjects.module.css'
const myProjects = (props) => {
    if (!props.data || !Array.isArray(props.data)) {
        return null
    }
    const projectDisplay = props.data.map((item, pos) => {
        return (
            <div key={pos} className={classes.Taskify}>
                <div className={classes.image}>
                    <img src={item.imageUrl} alt={item.projectName} />
                </div>
                <div className={classes.info}>
                    <h3>{item.projectName}</h3>
                    <p>{item.projectDiscription}</p>
                    <a href={item.projectUrl} className={classes.projectBtn}>
                        Preview Project
                    </a>
                </div>
            </div>
        );
    });
    return (
        <section id="Projects" className={classes.myProjects}>
            <h1>Projects</h1>
            <hr></hr>
            <p>Here you will find some of the personal projects that I created with each project containing its link to preview</p>
            <div>
                {projectDisplay}
            </div>

        </section>

    );
}

export default myProjects;