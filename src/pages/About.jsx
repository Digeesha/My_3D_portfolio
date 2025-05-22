import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { CTA } from "../components";
import { experiences, skills } from "../constants";

import "react-vertical-timeline-component/style.min.css";

const About = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        Hello, I'm{" "}
        <span className='blue-gradient_text font-semibold drop-shadow'>
          {" "}
          Digeesha
        </span>{" "}
        👋
      </h1>

      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
       <p>
           I’m a results-oriented Software Engineer with 5+ years of experience building scalable web applications and microservices. Armed with an MSc in Computer Science in progress, I leverage Java (Spring Boot, Hibernate), JavaScript frameworks (Angular, React), and cloud-native tooling (Docker, Jenkins, AWS) to deliver high-quality code and streamline CI/CD pipelines. My background spans logistics, telecom, and retail domains, where I’ve optimized performance, reduced incident resolution times, and enhanced user experiences. Always learning, I’m exploring AI/ML and blockchain to architect next-generation, intelligent systems.
          </p>
          <p>
           With a foundation in core Java and modern front-end technologies, I excel at dissecting complex requirements into maintainable components and champion best practices like TDD, code reviews, and clean architecture. I’ve guided cross-functional teams through Agile transformations and mentored junior developers to level up their skills. My MSc dissertation on explainable ML for healthcare has sharpened my data-driven mindset, and I’m eager to apply these insights to create trustworthy, impactful software.
          </p>
           <p>
           I thrive at the intersection of emerging tech and real-world impact. Whether it’s integrating SHAP-powered explainability into an AI dashboard for the NHS or prototyping a hybrid AI-blockchain fraud-prevention model, I adopt a hands-on experimentation approach. I enjoy converting prototypes into production-ready solutions—deploying containerized services on AWS, automating monitoring with Splunk, and ensuring 99.9% uptime under stringent SLAs. I’m driven by curiosity and dedicated to pushing boundaries.
          </p>
           <p>
           I believe great software is built through dialogue—pair programming sessions, design workshops, and transparent roadmaps. My roles have required tight collaboration with product owners, QA engineers, and DevOps specialists to deliver features on time and maintain high quality under pressure. I’m comfortable presenting to stakeholders, gathering feedback iteratively, and rallying teams around a shared vision. My goal is always to foster a culture of ownership, continuous improvement, and mutual respect.
          </p>
          <p>
          Outside of work, I pursue AI/ML certifications, contribute to open-source projects, and experiment with decentralized apps on Ethereum. I’m an avid reader of tech blogs and research papers and regularly attend meetups to stay current with trends. This passion fuels my professional growth and enables me to bring fresh ideas—like integrating serverless functions or adopting GraphQL—into teams. I’m committed to leveling up both my skill set and the collective expertise of my peers.
          </p>

      </div>
      <hr className='border-slate-200' />

      <CTA />
    </section>
  );
};

export default About;
