import React from "react";
import TicketCard from "./cards";
import Backlog from "./assets/Backlog.svg";
import Todo from "./assets/To-do.svg";
import InProgress from "./assets/in-progress.svg";
import Done from "./assets/Done.svg";
import Cancelled from "./assets/Cancelled.svg";
import add from "./assets/add.svg";
import dots from "./assets/3 dot menu.svg";
const Container = ({ groupedTickets, getUserName }) => {
    // Map statuses to SVGs
    const statusIcons = {
        Backlog,
        Todo,
        "In progress": InProgress,
        Done,
        Cancelled,
    };


    return (
        <div className="kanban-board">
            {Object.keys(groupedTickets).map((status) => (
                <div key={status} className="kanban-column" style={{ width: "350px" }}>
                    <div className="column">
                        <div className="column-header">
                            <img
                                src={statusIcons[status]}
                                alt={`${status} icon`}
                                className="status-icon"
                            />
                            <h2 className="column-title">
                                {status}{" "}
                                <span
                                    className="ticket-count"

                                >
                                    {groupedTickets[status].length}
                                </span>
                            </h2>

                        </div>
                        <div className="images">
                            <img className= "image1" src={add} alt="" />
                            <img src={dots} alt="" />
                        </div>
                    </div>
                    <div className="cards-container">
                        {groupedTickets[status].length > 0 ? (
                            // Sort tickets by priority before rendering them
                            groupedTickets[status]
                                .sort((a, b) => b.priority - a.priority) // Sort by priority (highest to lowest)
                                .map((ticket) => (
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
                            <p className="no-tickets"></p>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Container;
