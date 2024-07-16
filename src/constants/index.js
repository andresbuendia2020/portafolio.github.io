import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    reactjs,
    threejs,
    github,
    video,
    c,
    aframe,
    colab,
    maya,
    python,
    unity,
    vagrant,
    vuforia,
    githubblack,
    boga,
    projects_videface,
    rentacar4less,
} from "../assets";

import joelPaez from "../assets/joelPaez.jpeg";
import joseRestrepo from "../assets/joseRestrepo.jpeg";
import melerCarranza from "../assets/melerCarranza.jpeg";
import solAngie from "../assets/solAngie.jpeg";
import efraMancilla from "../assets/efraMancilla.jpeg";

export const navLinks = [
    {
        id: "#about",
        title: "Sobre Mi",
    },
    {
        id: "#work",
        title: "Proyectos",
    },
    {
        id: "#contact",
        title: "Contacto",
    },
];

export const linkTreeNavLinks = [
    {
        id: "/",
        title: "Portfolio",
    },
    {
        id: "",
        title: "Connect",
    },
    {
        id: "#contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Front End Senior Developer",
        icon: web,
    },
    {
        title: "Analista de desarrollo",
        icon: mobile,
    },
    {
        title: "Desarrollador en Angular y React",
        icon: backend,
    },
    {
        title: "Desarrollador en Python y TypeScript",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "C",
        icon: c,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "Python",
        icon: python,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Unity",
        icon: unity,
    },
    {
        name: "Vagrant",
        icon: vagrant,
    },
    {
        name: "Vuforia",
        icon: vuforia,
    },
    {
        name: "A-frame",
        icon: aframe,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "GitHub",
        icon: githubblack,
    },
    {
        name: "Colab",
        icon: colab,
    },
    {
        name: "Maya",
        icon: maya,
    },
];

const experiences = [
    {
        title: "LinkScribe | A.I. & Web Dev",
        company_name: "Docker, Vagrant, Kaggle, Edge Impulse, ML Flow, API Rest, JS, Python, React, CSS, HTML, MUI",
        icon: github,
        iconBg: "radial-gradient(circle at center, #383076, #4a37de)",
        iconLink: "https://github.com/xlgabriel/linkscribe",
        date: "August 2023 - December 2023",
        points: [
            "Effortlessly create, organize, and categorize web links using NLP (Natural Language Processing). Copy and paste links to extract content information, categorize, and search with custom keywords.",
            "Model trained from scratch and used in the backend, connected by API.",
        ],
    },
    {
        title: "AcademIA | Scrum Master",
        company_name:
            "Scrum, Jira, Miro, Taiga, Slack, Notion, KPIs, User Stories, Metrics, Daily Scrum, Sprints, soft skills",
        icon: github,
        iconBg: "radial-gradient(circle at center, #383076, #4a37de)",
        iconLink: "https://github.com/xlgabriel/academia",
        date: "February 2023 - June 2023",
        points: [
            "LMS-type open-source collaborative project where the user (teacher, student) can access their academic courses, upload and review multimedia content.",
            "It also has Hangouts-style chat, with a plus of AItype virtual assistant integrated inside the system.",
        ],
    },
    {
        title: "Lecturando | A.I. & Game Dev",
        company_name: "Unity, GitHub, GitLab, Miro, Scrum, Doc & Testing, Tesseract OCR, ONNX, Barracuda, Firebase, C#",
        icon: github,
        iconBg: "radial-gradient(circle at center, #383076, #4a37de)",
        iconLink: "https://gitlab.com/media-collab/dm2_lecturando",
        date: "February 2022 - December 2022",
        points: [
            "Unity game focused on solving the letter inversion problem (p,q,b,d) detected in kids from schools from Cali, Colombia.",
            "Using image recognition and database in this gamification-based videogame, we offered solutions for teachers to help solving this problem.",
        ],
    },
    {
        title: "GoPance | Front-end Dev",
        company_name: "React, HTML, CSS, JavaScript, Bootstrap, Canva, Netlify, Firebase, Node.js, Postman.",
        icon: github,
        iconBg: "radial-gradient(circle at center, #383076, #4a37de)",
        iconLink: "https://github.com/Johannes910/gopance",
        date: "August 2022 - December 2022",
        points: [
            "Web application similar to Rappi or Uber Eats, focused on Pance town in Cali, Colombia.",
            "The purpose is to connect the different business and services located here with people around the city to impulse its economy and development.",
        ],
    },
    {
        title: "Minecraft Speech to Text",
        company_name: "Python, CNN, Colab, Jupyter Notebook, ursina, h5py, keras, Speech recognizer, TensorFlow.",
        icon: github,
        iconBg: "radial-gradient(circle at center, #383076, #4a37de)",
        iconLink: "https://videface.app",
        date: "August 2022 - December 2022",
        points: [
            "Python-based Minecraft with words recognizer (Convolutional Neural Network), with our own dataset and training.",
            "By saying one of the five words, it changes the block to use within the game.",
            "Great project to learn about speech recognition and A.I. from training to implementation.",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "Un desarrollador con habilidades sobresalientes en Angular y React puede beneficiarse significativamente al explorar tecnologías de vanguardia para optimizar aplicaciones , mfe, etc.....",
        name: "Joel Paez",
        designation: "Director de TI y Operaciones | AI Generativa, Blockchain, Open Banking, ECommerce, B2b, MBA, Magister Fintech y Transformación Digital",
        company: "Tul.sas",
        image: joelPaez,
        linkedin: "https://www.linkedin.com/in/joel-alberto-paez-rodriguez/",
    },
    {
        testimonial:
            "Andres siempre demostró compromiso y profesionalismo en el desarrollo de actividades que le fueron asignadas. Es muy receptivo con el feedback que se le da y le gusta estar en constante aprendizaje.",
        name: "Meler Carranza",
        designation: "Sr Frontend Developer | Angular",
        company: "Tul.sas",
        image: melerCarranza,
        linkedin: "https://www.linkedin.com/in/melercarranza/",
    },
    {
        testimonial:
            "Andrés es un profesional comprometido y siempre dispuesto a aprender. Su capacidad para colaborar y aceptar feedback es ejemplar. Es un valioso miembro del equipo.",
        name: "Jose Restrepo",
        designation: "Frontend Developer | Angular Developer | React | JavaScript",
        company: "Simetrik",
        image: joseRestrepo,
        linkedin: "https://www.linkedin.com/in/jose-restrepo-9489a117a/",
    },
    {
        testimonial:
            "Trabajar con Andrés ha sido una experiencia excelente. Su capacidad para resolver problemas complejos y su habilidad para trabajar en equipo son notables.",
        name: "Solangie Paola Garavito",
        designation: "Ingeniera de Sistemas | Especialista en Desarrollo de Software, Marketing Digital y Analítica Web.",
        company: "Directora de Innovación y Transformación Digital Trust4p",
        image: solAngie,
        linkedin: "https://www.linkedin.com/in/solangie-paola-garavito-mendivelso-86177376/",
    },
    {
        testimonial:
            "Siempre dispuesto a aprender, demuestra mejoras continuas en sus procesos de desarrollo y aprendizaje, buen trabajo en equipo",
        name: "Efraín José Mancilla",
        designation: "Senior Development Engineer ",
        company: "Bold",
        image: efraMancilla,
        linkedin: "https://www.linkedin.com/in/solangie-paola-garavito-mendivelso-86177376/",
    },
];

const projects = [
    {
        upper_title: "Fast-growing SaaS with real clients",
        date: "July 2023 - Present",
        name: "VideFace",
        description:
            "Transforms remote sales and customer service. Creation of a web app from scratch ready for commercial use. Build and maintain a scalable, multi-tenant and monetizing product. In charge of the other developers as a CTO and Scrum Master. Supervising the new features, code refactor, infrastructure improvements and more.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "firebase",
                color: "pink-text-gradient",
            },
            {
                name: "javascript",
                color: "text-yellow-500",
            },
            {
                name: "socket.io",
                color: "text-gray-300",
            },
            {
                name: "webrtc",
                color: "text-green-300",
            },
            {
                name: "cloud run",
                color: "orange-text-gradient",
            },
            {
                name: "node.js",
                color: "text-green-500",
            },
            {
                name: "cloudflare",
                color: "text-orange-500",
            },
        ],
        image: projects_videface,
        source_code_link: "https://videface.app",
    },
    {
        upper_title: "Giving real value to the company",
        date: "March 2023 - Present",
        name: "Rent a car 4 less",
        description:
            "Development of web-based software to automatize car rental process in the offices. Automate internal processes related to the management of sensitive information. Development of new features on the WordPress page. In charge of social networks management, content creation, user experience and more.",
        tags: [
            {
                name: "wordpress",
                color: "blue-text-gradient",
            },
            {
                name: "nodemailer",
                color: "green-text-gradient",
            },
            {
                name: "node.js",
                color: "pink-text-gradient",
            },
            {
                name: "google cloud",
                color: "text-yellow-500",
            },
            {
                name: "react",
                color: "text-orange-500",
            },
            {
                name: "material-ui",
                color: "text-gray-300",
            },
        ],
        image: rentacar4less,
        source_code_link: "https://videface.app/",
    },
    {
        upper_title: "Getting to know the professional world",
        date: "June 2020 - December 2023",
        name: "BOGA and Electronet",
        description:
            "BOGA and Siluetas Spa: in charge of editing content focused on text and audiovisual elements on a continuous basis for the social networks. Multimedia experiences developer. Electronet: in charge of the creation of the intro to the edition of the Opener and promotion of electronic events, all with high quality audiovisual detail. ",
        tags: [
            {
                name: "premiere pro",
                color: "blue-text-gradient",
            },
            {
                name: "canva",
                color: "green-text-gradient",
            },
            {
                name: "pro tools",
                color: "pink-text-gradient",
            },
            {
                name: "after effects",
                color: "blue-text-gradient",
            },
            {
                name: "adobe media encoder",
                color: "text-yellow-400",
            },
        ],
        image: boga,
        source_code_link: "https://instagram.com/boga.peluqueria",
    },
];

export { services, technologies, experiences, testimonials, projects };
