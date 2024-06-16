import React from 'react'
import { TeamMembers } from '../../Constants/Constant'
import TeamCard from '../../Components/TeamCard/TeamCard'

const About = () => {
  return (
    <div className="about-container">
      <section className="team-members">
        <h2>Meet The Team</h2>
        {TeamMembers.map((teamMember: any) => {
          return (
            <TeamCard src={teamMember.src} name={teamMember.name} position={teamMember.position} />
          )
        })}
      </section>
    </div>
  )
}

export default About