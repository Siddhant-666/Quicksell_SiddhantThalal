import React from "react";
import TicketCard from "./card2";
import Backlog from "./assets/Backlog.svg";
import Todo from "./assets/To-do.svg";
import InProgress from "./assets/in-progress.svg";
import Done from "./assets/Done.svg";
import Cancelled from "./assets/Cancelled.svg";

// Priority Icons (Corrected imports)
import NoPriority from './assets/No-priority.svg';
import LowPriorityIcon from './assets/Img - Low Priority.svg';
import MediumPriorityIcon from './assets/Img - Medium Priority.svg';
import HighPriorityIcon from './assets/Img - High Priority.svg';
import UrgentPriorityIcon from './assets/SVG - Urgent Priority colour.svg';
import add from "./assets/add.svg";
import dots from "./assets/3 dot menu.svg";
const Container = ({ groupedTickets, getUserName }) => {
    // Map priorities to icons and labels
    const priorityIcons = {
        4: UrgentPriorityIcon,
        3: HighPriorityIcon,
        2: MediumPriorityIcon,
        1: LowPriorityIcon,
        0: NoPriority,
    };

    const priorityLabels = {
        4: "Urgent",
        3: "High",
        2: "Medium",
        1: "Low",
        0: "No priority",
    };

    return (
        <div className="kanban-board">
            {Object.keys(groupedTickets).map((group) => (
                <div key={group} className="kanban-column" style={{ width: "350px" }}>
                    <div className="column">
                        <div className="column-header">
                            <img
                                src={priorityIcons[group]}
                                alt={`${group} priority icon`}
                                className="priority-icon"
                                style={{ width: "24px", height: "24px" }} // added style to ensure visibility
                            />
                            <h2 className="column-title">
                                {priorityLabels[group]}{" "}
                                <span className="ticket-count">
                                    {groupedTickets[group].length}
                                </span>
                            </h2>
                        </div>
                        <div className="images">
                            <img className="image1" src={add} alt="" />
                            <img src={dots} alt="" />
                        </div>
                    </div>
                    <div className="cards-container">
                        {groupedTickets[group].length > 0 ? (
                            groupedTickets[group].map((ticket) => (
                                <TicketCard
                                    key={ticket.id}
                                    id={ticket.id}
                                    title={ticket.title}
                                    tag={ticket.tag}
                                    status={ticket.status}
                                    priority={ticket.priority}
                                    userName={getUserName(ticket.userId)}
                                />
                            ))
                        ) : (
                            <p className="no-tickets">No tickets in this column</p>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Container;
