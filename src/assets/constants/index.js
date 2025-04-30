
import { Code2, Database, Globe, Cpu, Brain, Cloud } from 'lucide-react';


export const HERO_CONTENT = `Passionate and detail-oriented Full Stack Software Developer specializing in Flutter with Firebase and React Native for mobile application development. Experienced in designing, developing, and maintaining high-performance web and mobile applications. Skilled in both front-end and back-end technologies, with expertise in modern frameworks and databases. Adept at problem-solving, optimizing performance, and collaborating with teams to deliver high-quality software solutions. Eager to leverage technical expertise and innovation to create impactful digital experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 2 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Java,  Node.js, MySQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Full Stack Developer",
    company: "Google",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "Computer Service Management System",
    description: "A MERN stack-based Computer Service Management System enabling real-time service tracking, automated invoicing, and efficient repair management with a user-friendly interface.",
    image: "https://i.postimg.cc/gJvzw2gd/photo-2025-03-14-09-51-30.jpg",
    technologies: ["React", "express", "TailwindCSS","Framer Motion"],
    category: "Web development",
    link: "https://github.com/DilshanDe/Computer-Service-Center-managment-System"
  },

  {
    title: "FullStack Social Media App",
    description: "Developed a full-stack social media application using React Native and Supabase, featuring user authentication, profile management, real-time posts, and interactive social features, ensuring a responsive and engaging user experience.",
    image: "https://i.postimg.cc/HLYPHmtn/welcome.png",
    technologies: ["React Native","Superbase"],
    category: "Applications",
    link: "https://github.com/DilshanDe/Social-Media-App"
  },
  {
    title: "Weather Forecast App",
    description: "Weather Forecast App – A React Native app with real-time updates, location tracking, and a sleek Tailwind CSS UI. Features dynamic themes, weather icons, and smooth API integration.",
    image: "https://i.postimg.cc/NFHQFCL4/OIP-20.jpg",
    technologies: ["React Native", "Tailwind CSS"],
    category: "Applications",
    link: "https://github.com/DilshanDe/Weather-App"
  },
  {
    title: "Portfolio",
    description: "Modern and minimalist portfolio design for creative professionals",
    image: "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?auto=format&fit=crop&q=80&w=800",
    technologies: ["React", "Framer Motion", "TailwindCSS"],
    category: "Web development",
    link: "https://github.com/DilshanDe/Portfolio",
  },
  {
    title: "Chat Application",
    description: "A React Native chat app powered by Firebase for instant messaging, secure authentication, and real-time sync. Showcases expertise in backend integration and real-time data handling.",
    image: "https://i.postimg.cc/vmSBmNG1/OIP-21.jpg",
    technologies: ["React", "Firebase"],
    category: "Applications",
    link: "https://github.com/DilshanDe/Chat-App-React-Native",
  },
  {
    title: "Salon Booking App",
    description: "Salon Booking App is a Flutter & Dart app for seamless salon scheduling with real-time booking & Firebase integration.",
    image: "https://i.postimg.cc/LsswwBdp/R-5.png",
    technologies: ["Flutter", "Dart", "Firebase"],
    category: "Applications",
    link: "https://github.com/DilshanDe/Salon-Booking-App"
  },
  {
    title: "News App",
    description: "A real-time news app built with Flutter and NewsAPI. Users can browse top headlines, filter by category, and search for specific topics. Features a clean UI, responsive design, and smooth API integration for live news updates..",
    image: "https://i.postimg.cc/wxrDJgYw/OIP-1.jpg",
    technologies: ["Flutter", "Dart", "NewsAPi"],
    category: "Applications",
    link: "https://github.com/DilshanDe/News-App"
  },
  {
    title: "Travel Companion App (Ongoing)",
    description: "Travel Companion App is a Flutter & Firebase app for trip planning, hotel booking, and destination exploration. It features real-time tracking, authentication, and cloud storage, ensuring a seamless travel experience.",
    image: "https://i.postimg.cc/brC0Wb1Z/OIP-22.jpg",
    technologies: ["Flutter", "Dart", "Firebase"],
    category: "Applications",
    link: "https://github.com/DilshanDe/Travel-App"
  },
  {
    title: "Flutter Counter App (BLoC)",
    description: "A basic counter app built with Flutter using BLoC for state management, showcasing clean architecture and reactive state handling.",
    image: "https://i.postimg.cc/2y8VVg1h/OIP.jpg",
    technologies: ["Flutter", "Dart", "BLoC"],
    category: "Applications",
    link: "https://github.com/DilshanDe/Counter-App"
  },
  {
    title: "Flutter Package Delivery App(Ongoing)",
    description: "The app includes user authentication, package tracking, payment processing, and an admin panel. Real-time updates and UI design tips were key elements in creating a user-friendly experience. The app features GPS integration for location tracking and ResourPay for payment processing. I implemented state management using inherited widgets and classes to ensure clean and maintainable code.",
    image: "https://i.postimg.cc/PxCcjMPv/fast-delivery.png",
    technologies: ["Flutter", "Dart","Firebase"],
    category: "Applications",
    link: "https://github.com/DilshanDe/Package-Delivery-App"
  },
  {
    title: "Computer Service Management System Ui",
    description: "Computer service Managment System ui using a Figma",
    image: "https://i.postimg.cc/gJvzw2gd/photo-2025-03-14-09-51-30.jpg",
    technologies: ["Figma"],
    category: "UI design",
    link: "https://www.figma.com/design/NFAa0RmpgJlJXyUFYqfnQ1/Group-Project?node-id=0-1&p=f&t=SyIWpbTxBEFEE4jt-0"
  },
];

export const CONTACT = {
  address: "Rathmalana, SriLanka ",
  phoneNo: "+94 761191988 ",
  email: "dilshansilwa54@gmail.com",
};

export const BLOGPOST = [

];

export const technologies = [
  {
    icon: Code2,
    name: "Frontend Development",
    description: "Building responsive and interactive user interfaces with modern frameworks",
    delay: 0.1
  },
  {
    icon: Database,
    name: "Backend Systems",
    description: "Designing scalable server architectures and APIs",
    delay: 0.2
  },
  {
    icon: Globe,
    name: "Web Technologies",
    description: "Creating seamless web experiences with cutting-edge tools",
    delay: 0.3
  },
  

];