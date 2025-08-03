import { motion } from 'framer-motion';
import { FaJava, FaNode, FaPython, FaDocker, FaAws } from "react-icons/fa";

import { SiMongodb, SiKubernetes, SiTensorflow, SiPytorch, SiFirebase, SiDart, SiKeras, SiScikitlearn, SiJupyter, SiPandas, SiNumpy, SiAnaconda, SiGooglecloud, SiReact, SiHtml5, SiTailwindcss, SiFlutter, SiJavascript, SiSupabase, SiExpress } from "react-icons/si";

import { DiMysql } from "react-icons/di";
import { AiFillOpenAI } from "react-icons/ai";
import { IoLogoVercel } from "react-icons/io5";


const techStacks = {
  "Frontend Development": [
  { icon: SiReact, name: "React", color: "from-cyan-400 to-blue-500" },
  { icon: SiReact, name: "React Native", color: "from-blue-400 to-cyan-500" },
  { icon: SiHtml5, name: "HTML5", color: "from-orange-500 to-red-500" },
  { icon: SiDart, name: "Dart", color: "from-blue-500 to-teal-400" },
  { icon: SiJavascript, name: "JavaScript", color: "from-yellow-400 to-orange-500" },
  { icon: SiTailwindcss, name: "Tailwind CSS", color: "from-cyan-400 to-blue-500" },
  { icon: SiFlutter, name: "Flutter", color: "from-blue-400 to-cyan-300" }
],
  "Backend Systems": [
    { icon: FaNode, name: "Node.js", color: "from-green-500 to-gray-500" },
    { icon: SiMongodb, name: "MongoDB", color: "from-teal-400 to-blue-500" },
    { icon: FaPython, name: "Python", color: "from-yellow-400 to-green-500" },
    { icon: FaJava, name: "Java", color: "from-orange-400 to-red-500" },
    { icon: SiFirebase, name: "Firebase", color: "from-yellow-400 to-orange-500" },
    { icon: SiExpress, name: "Express.js", color: "from-gray-700 to-gray-900" },
  ],
  "Web Technologies": [
    
    { icon: DiMysql, name: "MySQL", color: "from-pink-400 to-purple-500" },
    { icon: SiMongodb, name: "MongoDB", color: "from-green-400 to-emerald-600" },
    { icon: SiFirebase, name: "Firebase", color: "from-yellow-400 to-orange-500" },
    { icon: SiSupabase, name: "Supabase", color: "from-green-400 to-teal-500" },
    
  ],
  "AI/ML": [
  { icon: SiTensorflow, name: "TensorFlow", color: "from-orange-400 to-yellow-500" },
  { icon: SiPytorch, name: "PyTorch", color: "from-red-400 to-orange-500" },
  { icon: AiFillOpenAI, name: "OpenAI", color: "from-blue-400 to-indigo-500" },
  { icon: SiScikitlearn, name: "Scikit-learn", color: "from-blue-500 to-cyan-500" },
  { icon: SiKeras, name: "Keras", color: "from-red-500 to-pink-500" },
  { icon: SiJupyter, name: "Jupyter", color: "from-orange-500 to-amber-500" },
  { icon: SiPandas, name: "Pandas", color: "from-blue-600 to-purple-600" },
  { icon: SiNumpy, name: "NumPy", color: "from-blue-400 to-blue-600" },
  { icon: SiAnaconda, name: "Anaconda", color: "from-green-400 to-emerald-500" },
  { icon: SiGooglecloud, name: "Google AI", color: "from-blue-500 to-green-500" }
],
  "System Architecture": [
    { icon: FaDocker, name: "Docker", color: "from-blue-400 to-green-500" },
    { icon: SiKubernetes, name: "Kubernetes", color: "from-teal-400 to-blue-500" },
    { icon: FaAws, name: "AWS", color: "from-yellow-400 to-orange-500" }
  ],
  
  "Cloud Computing": [
    { icon: FaAws, name: "AWS", color: "from-yellow-400 to-orange-500" },
    { icon: IoLogoVercel, name: "Vercel", color: "from-black to-gray-500" }
  ]
};

export function TechnologyDetails({ category, isHovered }) {
  const technologies = techStacks[category] || [];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isHovered ? 1 : 0 }}
      className="absolute inset-0 flex items-center justify-center bg-black/90 rounded-lg"
    >
      <div className="flex gap-6 p-4">
        {technologies.map(({ icon: Icon, name, color }) => (
          <motion.div
            key={name}
            initial={{ scale: 0.8 }}
            animate={{ scale: isHovered ? 1 : 0.8 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col items-center gap-2"
          >
            <div
              className={`p-2 bg-gradient-to-br ${color} rounded-full shadow-lg`}
            >
              <Icon className="w-6 h-6 text-white" />
            </div>
            <span className="text-sm text-white font-medium">{name}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
