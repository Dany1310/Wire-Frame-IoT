import React from "react";
import "./Menu.css"; // Archivo CSS para estilos (lo explico más abajo)
import {useNavigate, Routes, Route} from 'react-router-dom';

interface TeamButtonProps {
  team: string;
  active: boolean;
  onClick: () => void;
}

const TeamButton: React.FC<TeamButtonProps> = ({ team, active, onClick }) => {
  return (
    <button className={`team-button ${active ? "active" : "inactive"}`} onClick={onClick}>
      <i className="fas fa-wifi"></i>
      <span>{team}</span>
    </button>
  );
};

const Menu: React.FC = () => {
  const teams = [
    { id: 1, name: "Team 1", active: true },
    { id: 2, name: "Team 2", active: true },
    { id: 3, name: "Team 3", active: true },
    { id: 4, name: "Team 4", active: false },
    { id: 5, name: "Team 5", active: false },
    { id: 6, name: "Team 6", active: false },
  ];

  const navigate= useNavigate();

  const handleTeamClick = (teamName: string) => {
    navigate('/Team1');
    console.log(`Selected ${teamName}`);
  };

  return (
    <div className="menu-container container-fluid">
      <h1 className="title">XRover Army</h1>
      <h2 className="subtitle">CHOOSE A ROBOT</h2>
      <div className="team-grid">
        {teams.map((team) => (
          <TeamButton
            key={team.id}
            team={team.name}
            active={team.active}
            onClick={() => handleTeamClick(team.name)}
          />
        ))}
      </div>
    </div>
  );
};

export default Menu;

