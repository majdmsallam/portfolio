import Taskify from './images/Taskify.png';
import DigitalCard from './images/digitalcard.png';

const ProjectsData = {
    projects: [
        {
            projectName: 'Taskify',
            projectDiscription:"I designed and developed a secure to-do list website using HTML, CSS, JavaScript, Bootstrap, Express.js, and MongoDB. The website features a robust user authentication system implemented with PassportJS, ensuring secure access to user-specific data. Additionally, frontend UI validation and security middleware were applied to enhance the user experience and ensure data security.",
            imageUrl: Taskify,
            projectUrl: "https://braudetaskify.onrender.com/"
        },
        {
            projectName: 'Y.M Perzol Digital Card',
            projectDiscription:"Designed a visually appealing digital business card using HTML, CSS, and JavaScript. The central feature of this card is to simplify user interaction by providing one-click access to social media contacts, enabling direct messaging, easy navigation to the store, and seamless saving of contact information. Additionally, the card includes an 'About Us' section, offering insights into our identity and values, as well as a 'Product Preview' section, showcasing a glimpse of our store's offerings with a representative example.",
            imageUrl: DigitalCard,
            projectUrl: "https://ymperzol.netlify.app/"
        },
    ],
    skills : ['Python','C', 'Java', 'Selenium', 'Git' ,'HTML', 'JavaScript', 'CSS', 'Bootstrap', 'NodeJS', 'expressJs','ReactJs', 'SQL', 'mongo DB', 'Object-Oriented Programming' ]
}

Object.freeze(ProjectsData); //This line of code just makes your object as a constant. No values can be updated.

export default ProjectsData;