import React from "react";
import { ExMembers, TeamMembers } from "../../Constants/Constant";
import TeamCard from "../../Components/TeamCard/TeamCard";

const About = () => {
  return (
    <div className="about-container">
      <section className="team-members">
        <h2>Meet The Team</h2>
        <div className="members">
          {TeamMembers.map((teamMember: any) => {
            return (
              <TeamCard
                src={teamMember.src}
                name={teamMember.name}
                position={teamMember.position}
              />
            );
          })}
        </div>
        <div className="ex-members">
          {ExMembers.map((exMember: any) => {
            return (
              <TeamCard
                src={exMember.src}
                name={exMember.name}
                position={exMember.position}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default About;
