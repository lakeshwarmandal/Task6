import Navbar from "./Navbar";
import "./ProjectsShowcase.css";

const projects = [
  {
    title: "Project 1",
    description:
      "An innovative web application for managing personal tasks and schedules.",
    imageUrl:
      "https://www.eliassen.com/hs-fs/hubfs/theme-eliassen/images/stock/HOMEPAGE%20HERO.jpg?width=1254&height=837&name=HOMEPAGE%20HERO.jpg",
    projectUrl: "http://project1.com",
  },
  {
    title: "Project 2",
    description:
      "A mobile app that helps users track fitness activities and health stats.",
    imageUrl:
      "https://img.freepik.com/free-vector/gradient-ui-ux-background_23-2149065783.jpg",
    projectUrl: "http://project2.com",
  },
  {
    title: "Project 3",
    description:
      "A real-time chat application built with Node.js and WebSocket.",
    imageUrl:
      "https://project3.com/wp-content/uploads/2020/01/landing-logo.png",
    projectUrl: "http://project3.com",
  },
  {
    title: "Project 4",
    description:
      "E-commerce platform with a fully functional shopping cart and payment gateway integration.",
    imageUrl:
      "https://b3000714.smushcdn.com/3000714/wp-content/uploads/2023/01/kecom-hero-banner-4-300x243.jpg?lossy=1&strip=1&webp=1",
    projectUrl: "https://www.mulesoft.com/",
  },
  {
    title: "Project 5",
    description:
      "A blog platform with a custom content management system, featuring user authentication and post management.",
    imageUrl:
      "https://simplea.com/getmedia/07e8f6f1-6c53-4976-bea4-d10d659003f5/2_3_113_simplea_com_blog_article_what_is_a_cms_in_content_02.png.aspx?width=834&height=684",
    projectUrl: "http://project5.com",
  },
];

const ProjectsShowcase = () => {
  return (
    <div className="nav">
      <Navbar />
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.imageUrl} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a
              href={project.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsShowcase;
