import React from "react";
import "./Card.css";
import NoPriority from './assets/No-priority.svg'
import LowPriorityIcon from './assets/Img - Low Priority.svg';
import MediumPriorityIcon from './assets/Img - Medium Priority.svg';
import HighPriorityIcon from './assets/Img - High Priority.svg';
import UrgentPriorityIcon from './assets/SVG - Urgent Priority grey.svg';

const PriorityIcons = {
  0: NoPriority, // Replace with the path to your "no priority" icon
  1: LowPriorityIcon, 
  2: MediumPriorityIcon,
  3: HighPriorityIcon,
  4: UrgentPriorityIcon
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
    const priorityLabels = ["No Priority", "Low", "Medium", "High", "Urgent"];
  
    return (
      <div className="ticket-card">
        <p className="ticket-id"> {id}</p>
        <h3 className="ticket-title">{title}</h3>
        
        
        {/* <p className="ticket-status">Status: {status}</p> */}
  
        {/* Priority Section */}
        <div className="ticket-priority">
          <span className="priority-icon-box">
                <img src={PriorityIcons[priority]} alt={`${priorityLabels[priority]} icon`} className="priority-icon" />
          </span>
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