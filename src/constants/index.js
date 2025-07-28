const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 3, suffix: "+", label: "Years of MERN Stack Practice" },
  { value: 2, suffix: "", label: "Full-Stack Projects Built" },
  { value: 10, suffix: "+", label: "Technologies Worked With" },
  { value: 1, suffix: "", label: "Ongoing Major Project" },
];


const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Eager for Excellence",
    desc: "Always aiming for the best results, with a strong focus on growth and continuous improvement.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Strong Team Player",
    desc: "Works well with others, contributes actively, and supports shared goals with clarity and care.",
  },
  {
    imgPath: "/images/time.png",
    title: "Fast & Adaptive Learner",
    desc: "Quick to grasp new concepts and adapt to challenges, without compromising quality or deadlines.",
  },
];


const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "JavaScript Developer",
    modelPath: "/models/js.glb",
    scale: 0.08,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review:
      "Currently working on multiple projects, implementing modern UI practices and creating interactive 3D experiences, while also focusing on performance optimization for a project built in 2022",
    imgPath: "/images/exp1.png",
    iconPath: "/images/dev.png",
    logoPath: "/images/logo1.png",
    title: "Full-Stack Developer | Ongoing Projects",
    date: "2025 – Present",
    responsibilities: [
      "Reviving and enhancing a previously shelved project built in 2022.",
      "Currently working on adding advanced features and performance upgrades.",
      "Also working on a new interactive app using Three.js focused on 3D web experiences.",
    ],
  },
  {
    review:
      "Delivered a feature-rich weather application with a clean UI and deep weather insights.",
    imgPath: "/images/exp2.png",
    iconPath: "/images/bulb.png",
    logoPath: "/images/logo2.png",
    title: "Full-Stack Developer | Weather Explorer",
    date: "Aug 2024 – Sept 2024",
    responsibilities: [
      "Built a weather application delivering detailed real-time and forecasted weather info.",
      "Used Next.js, TypeScript, and Tailwind CSS to create a modern UI.",
      "Implemented features like air quality, UV index, wind, humidity, multi-day forecast, and search functionality.",
    ],
  },
  {
    review:
      "Built a fully functional bookstore application from scratch, with smooth user journeys and seamless browsing experience.",
    imgPath: "/images/exp3.png",
    iconPath: "/images/fire.png",
    logoPath: "/images/logo3.png",
    title: "Full-Stack Developer | Librarium",
    date: "Aug 2023 – Sept 2023",
    responsibilities: [
      "Designed and implemented a scalable bookstore app with authentication, search, and checkout flows.",
      "Developed using React, Node.js, Express.js, and MongoDB with RESTful APIs.",
      "Integrated secure payment methods and dynamic product filtering for enhanced UX.",
    ],
  },
];


const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

export {
  words,
  abilities,
  counterItems,
  expCards,
  expLogos,
  techStackIcons,
  techStackImgs,
  navLinks,
};
