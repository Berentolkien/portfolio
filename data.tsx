import { BookText, CodeSquare, HomeIcon, UserRound, Linkedin, Twitter, Rss, Twitch, Youtube, Crop, Pencil, Computer, Book, Rocket, Speech, Github } from "lucide-react";

export const socialNetworks = [
    {
        id: 2,
        logo: <Linkedin size={30} strokeWidth={1} />,
        src: "https://www.linkedin.com/in/lucas-bernaola-b58b3720a/",
    },
    {
        id: 4,
        logo: <Github size={30} strokeWidth={1} />,
        src: "https://github.com/Berentolkien",
    },
];


export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
        link: "/",
    },
    {
        id: 2,
        title: "User",
        icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
        link: "/about-me",
    },
    {
        id: 3,
        title: "Book",
        icon: <BookText size={25} color="#fff" strokeWidth={1} />,
        link: "/stack",
    },
    {
        id: 4,
        title: "Target",
        icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
        link: "/portfolio",
    },
];

export const dataAboutPage = [
    {
        id: 2,
        title: "Web developer trainee",
        subtitle: "E-learning Start up",
        description: "I worked as a trainee developer on this website that started in WordPress and then we continued the development with Django and React technologies.",
        date: "May/Sep 2023",
    },
    {
        id: 3,
        title: "Web Development Bootcamp",
        subtitle: "CODERHOUSE",
        description: "Course divided into 3 modules, Web Development, Javascript, React",
        date: "March 2023",
    },
]

export const dataCounter = [
    {
        id: 0,
        endCounter: 1,
        text: "Years of experience",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 1,
        endCounter: 1,
        text: "Completed projects",
        lineRight: true,
        lineRightMobile: false,
    }
];

export const stackData = [
    {
        icon: <Pencil />,
        title: "FRONT END",
        description: "HTML - CSS - JAVASCRIPT - TYPESCRIPT - BOOTSTRAP - SASS - REACT - VUE3 ",
    },
    {
        icon: <Computer />,
        title: "BACK END",
        description: "PYTHON - DJANGO - POSRTGRESQL - DOCKER - DBEABER -",
    },
    {
        icon: <Book />,
        title: "Soft Skills",
        description: "Teamwork - Responsibility - Problem Solving - Positive Attitude - Adaptability - Empathy ",
    },
    {
        icon: <Rocket />,
        title: "Lenguages",
        description: "Spanish (native) - English (B2)"
    },
];

export const dataPortfolio = [
    {
        id: 1,
        title: "Web Pro",
        image: "/image-1.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 2,
        title: "Desarrollo Web Ágil",
        image: "/image-2.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 3,
        title: "Estrategias Web",
        image: "/image-3.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 4,
        title: "Ideas Creativas",
        image: "/image-4.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 5,
        title: "Webs Impactantes",
        image: "/image-5.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 6,
        title: "Web Dinámica",
        image: "/image-6.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 7,
        title: "Dark Web ",
        image: "/image-7.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 8,
        title: "E-commerce web",
        image: "/image-8.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    }
];
