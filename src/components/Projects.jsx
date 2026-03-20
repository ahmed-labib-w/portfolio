import { motion } from "framer-motion";
import image1 from "../assets/iphone-landing page.png";
import image2 from "../assets/ecommerce.png";
import image3 from "../assets/academic-advisor.png";
import image4 from "../assets/movie-app.png";
import image5 from "../assets/movie-listing.png";

const projectsData = [
  {
    image: image4,
    title: "Movie Searching App",
    description:
      "A movie discovery web application built with React that allows users to browse trending movies, and manage a personal favorites list.",
    technologies: [
      "React",
      "React Router",
      "Vanilla CSS",
      "Context API",
      "TMDB API",
    ],
    githubLink: "https://github.com/ahmed-labib-w/Movie-App",
  },
  {
    image: image5,
    title: "Job Listing App",
    description:
      "A Single Page CRUD Application built with React that allows users to create, edit, and delete job listings.",
    technologies: ["React", "React Router", "TailwindCSS"],
    githubLink: "https://github.com/ahmed-labib-w/job-listing",
  },
  {
    image: image2,
    title: "Ecommerce website",
    description:
      "This is an Ecommerce website i developed as my final project for my frontend training/diploma at Route Academy that displays various products fetched from a REST API",
    technologies: ["Next", "TailwindCSS", "Context API", "FORMIK", "POSTMAN"],
    githubLink: "https://github.com/budderrar/Ecommerce_site",
  },
  {
    image: image1,
    title: "Apple Iphone15 Landing Page",
    description:
      "An iphone landing page inspired by Apple's IPHONE 15 landing page",
    technologies: [`ReactJS`, "TailwindCSS", "ThreeJS", "GSAP Animations"],
    githubLink: "https://github.com/budderrar/apple_clone",
  },
  {
    image: image3,
    title: "Academic Advisor",
    description: "Graduation Project",
    technologies: [
      "NodeJS",
      "ExpressJS",
      "MONGODB",
      "HTML CSS JS",
      "Bootstrap",
    ],
    githubLink: "https://github.com/budderrar/Academic-Advisor",
  },
];

const ProjectCard = ({ project }) => {
  const handleRedirect = () => {
    window.open(project.githubLink, "_blank");
  };
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0 }}
      className="flex flex-col items-center gap-8 md:flex-row md:gap-24"
    >
      <img
        src={project.image}
        alt=""
        className="w-full cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105 md:w-[300px]"
        onClick={handleRedirect}
      />

      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-3">
          <div className="text-xl font-semibold">{project.title}</div>
          <p className="text-gray-400">{project.description}</p>
        </div>

        <div className="flex flex-wrap gap-5">
          {project.technologies.map((tech, index) => (
            <span key={index} className="rounded-lg bg-black p-3">
              {tech}
            </span>
          ))}
        </div>

        <button
          className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] w-80 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
          onClick={handleRedirect}
        >
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
            Check out the repository on github 😁🔗
          </span>
        </button>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <div
      id="projects"
      className="flex min-h-screen w-full flex-col items-center justify-center gap-16 p-4 md:px-14 md:py-24"
    >
      <motion.h1
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0 }}
        className="text-4xl font-light text-white md:text-6xl"
      >
        My Projects
      </motion.h1>

      <div className="flex w-full max-w-[1000px] flex-col gap-16 text-white">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
