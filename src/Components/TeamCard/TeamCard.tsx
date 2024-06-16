import React from "react";
import "./TeamCard.scss";

interface ITeamCardProps {
  src: any;
  name: string;
  position: string;
}

const TeamCard = (props: ITeamCardProps) => {
  const { src, name, position } = props;

  return (
    <div className="team-card-container">
      <img src={src} alt="trust member" className="member-image" />
      <div className="member-details">
        <div className="name">{name}</div>
        <div className="position">{position}</div>
      </div>
    </div>
  );
};

export default TeamCard;
