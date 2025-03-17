import blog1 from "../blog/blog-1.webp"
import blog2 from "../blog/blog-2.webp"
import blog3 from "../blog/blog-3.webp"
import { Code2, Database, Globe, Cpu, Brain, Cloud } from 'lucide-react';


export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 2 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Java, Node.js, MySQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

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
    title: "AI Image Generator",
    description: "A modern AI-powered image generation platform using stable diffusion models",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    technologies: ["React", "TypeScript", "TailwindCSS", "Gemini API"],
    category: "Applications",
    link: "https://example.com/ai-image-generator"
  },
  {
    title: "E-Commerce Website",
    description: "Responsive Dashboard and products view",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    technologies: ["Figma"],
    category: "UI design",
    link: "https://www.figma.com/design/ryKAvzllH0zapEshbfBvgY/Untitled?node-id=0-1&t=QkR519N4v1CxCnLO-1"
  },
  {
    title: "E-Commerce Platform",
    description: "Full-featured online store with cart, checkout, and payment integration",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800",
    technologies: ["Next.js", "Stripe", "PostgreSQL", "Prisma"],
    category: "Web development",
    link: "https://example.com/ecommerce"
  },
  {
    title: "Portfolio",
    description: "Modern and minimalist portfolio design for creative professionals",
    image: "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?auto=format&fit=crop&q=80&w=800",
    technologies: ["React", "Framer Motion", "TailwindCSS"],
    category: "Web development",
    link: "www.chamikadamith.me",
  },
  {
    title: "Linkedin Clone",
    description: "Linkedin Clone Implementation Main Features in Linkedin",
    image: "https://images.unsplash.com/photo-1704382002666-5dc4fbb522c0?q=80&w=2009&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    technologies: ["React", "Firebase"],
    category: "Applications",
    link: "https://github.com/chamika-damith/Linkedin-Clone-ReactJs.git",
  },
  {
    title: "Proposed crop monitoring system Backend",
    description: "Real-time monitoring crop and manage fields,staff,vehicle,equipment",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    technologies: ["Java", "Spring boot", "Mysql", "JWT"],
    category: "Applications",
    link: "https://github.com/chamika-damith/Proposed-crop-monitoring-system-backend.git"
  },
  {
    title: "Proposed crop monitoring system Frontend",
    description: "Real-time monitoring crop and manage fields,staff,vehicle,equipment",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    technologies: ["HTML", "Javascript", "TailwindCSS"],
    category: "Web development",
    link: "https://github.com/chamika-damith/Proposed-crop-monitoring-system-frontend.git"
  },
];

export const CONTACT = {
  address: "Panadura, SriLanka ",
  phoneNo: "+94 78 576 5111 ",
  email: "chamikadamith9@gmail.com",
};

export const BLOGPOST = [
  {
    title: "The Future of Web Development",
    excerpt: "Revolutionizing Web Development: A Deep Dive into Bolt.New AI",
    date: "Nov 30, 2024",
    image: blog1,
    slug: "future-of-web-development",
    link: "https://medium.com/@chamikadamith9/revolutionizing-web-development-a-deep-dive-into-bolt-new-ai-7bc8b4607488",
  },
  {
    title: "Mastering Java & Spring",
    excerpt: "Java Bean vs POJO vs Spring Bean | Are you confused too ? Understanding the Differences",
    date: "Oct 26, 2024",
    image: blog2,
    slug: "Mastering-Java-&-Spring",
    link: "https://medium.com/@chamikadamith9/java-bean-vs-pojo-vs-spring-bean-are-you-confused-too-understanding-the-differences-6ad89241a8dc",
  },
  {
    title: "Java & Spring boot RESTful API",
    excerpt: "Understanding RESTful APIs in Java: A Beginner’s Guide to REST Principles and Building Your First API",
    date: "Oct 26, 2024",
    image: blog3,
    slug: "Java-&-Spring-boot-RESTful-API",
    link: "https://medium.com/@chamikadamith9/understanding-restful-apis-in-java-a-beginners-guide-to-rest-principles-and-building-your-first-f424b8610c0d",
  },
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
  {
    icon: Cpu,
    name: "System Architecture",
    description: "Developing robust and efficient system architectures",
    delay: 0.4
  },
  {
    icon: Brain,
    name: "AI Integration",
    description: "Implementing intelligent solutions with machine learning",
    delay: 0.5
  },
  {
    icon: Cloud,
    name: "Cloud Computing",
    description: "Leveraging cloud platforms for scalable applications",
    delay: 0.6
  }
];