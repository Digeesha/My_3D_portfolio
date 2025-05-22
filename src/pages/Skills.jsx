import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { CTA } from "../components";
import { experiences, skills } from "../constants";

import "react-vertical-timeline-component/style.min.css";

const Skills = () => {
  return (
    <section className="max-container">
      <h1 className='head-text'>
        My{" "}
        <span className='blue-gradient_text drop-shadow font-semibold'>
          Skills
        </span>
      </h1>
      <p className="text-center text-slate-500 mt-2">
        A curated collection of technologies, tools, and frameworks I’ve mastered across the full software development lifecycle.
      </p>

      {/* Skills Section */}
      <div className="mt-16 flex flex-col">
        {Object.entries(skills).map(([category, skillGroup]) => (
          <div key={category} className="mb-14 w-full">
            <h4 className="text-lg font-semibold text-slate-700 mb-4 capitalize">
              {category.replace('_', ' & ')}
            </h4>
            <div className="flex flex-wrap gap-8">
              {skillGroup.map((skill) => (
                <div className="flex flex-col items-center gap-2 w-24" key={skill.name}>
                  <div className="block-container w-20 h-20">
                    <div className="btn-back rounded-xl" />
                    <div className="btn-front rounded-xl flex justify-center items-center">
                      <img
                        src={skill.imageUrl}
                        alt={skill.name}
                        className="w-3/4 h-3/4 object-contain"
                      />
                    </div>
                  </div>
                  <p className="text-center text-sm text-slate-700 font-medium">
                    {skill.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>



      <hr className="border-slate-200" />

      <CTA />
    </section>
  );
};

export default Skills;
