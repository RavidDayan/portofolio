import EducationCard from "./EducationCard";
import { educationData } from "@/app/info";
export default function Education() {
  return (
    <>
      <h2 id="education" className="gold pb-3">
        Education
      </h2>
      {educationData().map((education, index) => {
        return <EducationCard {...education} key={index} />;
      })}
    </>
  );
}
