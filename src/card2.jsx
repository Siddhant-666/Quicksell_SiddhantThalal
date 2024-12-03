import React from "react";
import "./Card2.css";
import Backlog from "./assets/Backlog.svg";
import Todo from "./assets/To-do.svg";
import InProgress from "./assets/in-progress.svg";
import Done from "./assets/Done.svg";
import Cancelled from "./assets/Cancelled.svg";

const statusIcons = {
    Backlog,
    Todo,
    "In progress": InProgress,
    Done,
    Cancelled,
};
// const Card = ({ id, title, tag, status, priority, userName }) => {
//   const priorityColors = ["#d9534f", "#f0ad4e", "#5bc0de", "#5cb85c", "#0275d8"];

//   return (
//     <div className="ticket-card">
//       <h3 className="ticket-title">{title}</h3>
//       <p className="ticket-id">ID: {id}</p>
//       <p className="ticket-tag">Tag: {tag.join(", ")}</p>
//       <p className="ticket-status">Status: {status}</p>
//       {if {priority}==1}{
//       <p className="ticket-priority" style={{ color: priorityColors[priority] }}>
//       Priority: {priority}
//     </p>
//       }


//       <p className="ticket-user">Assigned to: {userName}</p>
//     </div>
//   );
// };

// export default Card;

const Card = ({ id, title, tag, status, priority, userName }) => {


    return (
        <div className="ticket-card">
            <p className="ticket-id"> {id}</p>
            <div className="box-1">
                <span className="status-box">
                    <img src={statusIcons[status]} alt={` icon`} className="status-icon" />
                </span>
                <h3 className="ticket-title">{title}</h3>

            </div>



            {/* <p className="ticket-status">Status: {status}</p> */}

            {/* Priority Section */}
            <div className="ticket-priority">

                <span className="tag">
                    <i class="fa-solid fa-circle"></i>
                    <span className="ticket-tag"> {tag.join(", ")}</span>

                </span>

            </div>


            {/* <p className="ticket-user">Assigned to: {userName}</p> */}
        </div>
    );
};

export default Card;