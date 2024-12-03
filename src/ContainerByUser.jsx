import React from "react";
import "./C.css";
import Backlog from "./assets/Backlog.svg";
import Todo from "./assets/To-do.svg";
import InProgress from "./assets/in-progress.svg";
import Done from "./assets/Done.svg";
import Cancelled from "./assets/Cancelled.svg";
import NoPriority from './assets/No-priority.svg';
import LowPriorityIcon from './assets/Img - Low Priority.svg';
import MediumPriorityIcon from './assets/Img - Medium Priority.svg';
import HighPriorityIcon from './assets/Img - High Priority.svg';
import UrgentPriorityIcon from './assets/SVG - Urgent Priority grey.svg';
import add from "./assets/add.svg";
import dots from "./assets/3 dot menu.svg";

const ContainerByUser = ({ groupedTickets, getUserName }) => {
    // Mapping status to their corresponding icons
    const statusIcons = {
        Backlog,
        Todo,
        "In progress": InProgress,
        Done,
        Cancelled,
    };

    const generateInitials = (name) => {
        const words = name.trim().split(' ');
        const firstInitial = words[0] ? words[0][0].toUpperCase() : '';
        const lastInitial = words[1] ? words[1][0].toUpperCase() : '';
        return firstInitial + lastInitial;
    };

    // Mapping priority to their corresponding icons
    const priorityIcons = {
        4: UrgentPriorityIcon,
        3: HighPriorityIcon,
        2: MediumPriorityIcon,
        1: LowPriorityIcon,
        0: NoPriority,
    };

    return (
        <div className="kanban-board">
            {Object.keys(groupedTickets).map((userName) => (
                <div key={userName} className="kanban-column" style={{ paddingLeft: "0px", paddingRight: "0px" }}>
                    <div className="column">
                        <div className="initials-icon">
                            <svg width="40" height="40" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="20" cy="20" r="18" fill="#4CAF50" />
                                <text x="50%" y="50%" font-size="18" text-anchor="middle" fill="white" dy=".3em">
                                    {generateInitials(userName)}  {/* Call the function to display initials */}
                                </text>
                            </svg>
                            <h2 className="column-title">{userName}</h2>
                        </div>
                        
                        <div className="images">
                            <img className="image1" src={add} alt="" />
                            <img src={dots} alt="" />
                        </div>
                    </div>
                    <div className="cards-container">
                        {groupedTickets[userName].map((ticket) => (
                            <div key={ticket.id} className="ticket-card">
                                {/* Display the appropriate status icon */}
                                <h3 className="id">{ticket.id}</h3>

                                <div className="box-1">
                                    <span className="status-box">
                                        <img
                                            src={statusIcons[ticket.status]} // Dynamically choose the status icon
                                            alt={`${ticket.status} icon`}
                                            className="status-icon"
                                        />
                                    </span>
                                    <h3 className="ticket-title">{ticket.title}</h3>
                                </div>
                                {/* Display the appropriate priority icon */}
                                <div className="ticket-priority">
                                    <span className="priority-icon-box">
                                        <img
                                            src={priorityIcons[ticket.priority]} // Dynamically choose the priority icon
                                            alt={`Priority level ${ticket.priority}`}
                                            className="priority-icon"
                                        />
                                    </span>
                                    <span className="tag">
                                        <i className="fa-solid fa-circle"></i>
                                        <p className="ticket-tag">{ticket.tag.join(", ")}</p>
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ContainerByUser;
