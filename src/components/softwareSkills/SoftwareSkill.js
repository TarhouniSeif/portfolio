import React from "react";
import "./SoftwareSkill.scss";
import {skillsSection} from "../../portfolio";

//export default function SoftwareSkill() {
//return (
//<div>
//<div className="software-skills-main-div">
//<ul className="dev-icons">
//{skillsSection.softwareSkills.map((skills, i) => {
//return (
//  <li
//  key={i}
//className="software-skill-inline"
//name={skills.skillName}

//<i className={skills.fontAwesomeClassname}></i>
//<p>{skills.skillName}</p>
//</li>
//);
//})}
//</ul>
//  </div>
//</div>
//);
//}
export default function SoftwareSkill() {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.softwareSkills.map((skills, i) => (
            <li key={i} className="software-skill-inline">
              {/* Vérifie si une icône est définie, puis l'affiche */}
              {skills.icon && <span className="skill-icon">{skills.icon}</span>}
              <p>{skills.skillName}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
