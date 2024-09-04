import { experienceData } from "@/app/info";
import ExperienceCard from "./ExperienceCard";

export default function Experience() {
  return (
    <>
      <h2 id="experience" className="gold pb-3">Experience</h2>
      {experienceData().map((experience, index) => {
        let left=(index % 2) === 0
        experience.left=left;
        return <ExperienceCard {...experience} key={index}/>;
      })}
    </>
  );
}
