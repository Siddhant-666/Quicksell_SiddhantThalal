import React, { useEffect, useState } from "react";
import Navbar from "./Navbar.jsx";
import ContainerByStatus from "./ContainerByStatus.jsx";
import ContainerByPriority from "./ContainerByPriority.jsx";
import ContainerByUser from "./ContainerByUser.jsx";
import "./App.css";
import axios from "axios";

const App = () => {
  const [data, setData] = useState({ tickets: [], users: [] });
  const [loading, setLoading] = useState(true);
  const [groupedTickets, setGroupedTickets] = useState({});
  const [groupingBy, setGroupingBy] = useState("status");
  const [sortBy, setSortBy] = useState("none");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.quicksell.co/v1/internal/frontend-assignment"
        );
        setData(response.data);
        groupAndSortTickets(response.data.tickets, "status", sortBy); // Initialize grouping and sorting
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Function to group and sort tickets
  const groupAndSortTickets = (tickets, groupBy, sortCriteria) => {
    let grouped = {};

    // Grouping logic
    if (groupBy === "status") {
      const allStatuses = ["Backlog", "Todo", "In progress", "Done", "Cancelled"];
      grouped = allStatuses.reduce((acc, status) => {
        acc[status] = tickets.filter((ticket) => ticket.status === status);
        return acc;
      }, {});
    } else if (groupBy === "priority") {
      const priorityLevels = ["4", "3", "2", "1", "0"];
      grouped = priorityLevels.reduce((acc, priority) => {
        acc[priority] = tickets.filter((ticket) => ticket.priority.toString() === priority);
        return acc;
      }, {});
    } else if (groupBy === "user") {
      grouped = data.users.reduce((acc, user) => {
        acc[user.name] = tickets.filter((ticket) => ticket.userId === user.id);
        return acc;
      }, {});
    }

    // Sorting logic
    if (sortCriteria !== "none") {
      Object.keys(grouped).forEach((key) => {
        grouped[key] = sortTickets(grouped[key], sortCriteria);
      });
    }

    setGroupedTickets(grouped); // Update grouped tickets
  };

  // Function to sort tickets based on criteria
  const sortTickets = (tickets, criteria) => {
    if (criteria === "priority") {
      return [...tickets].sort((a, b) => b.priority - a.priority);
    } else if (criteria === "title") {
      return [...tickets].sort((a, b) => a.title.localeCompare(b.title));
    }
    return tickets;
  };

  // Handle grouping option change
  const handleGroupChange = (newGrouping) => {
    setGroupingBy(newGrouping);
    groupAndSortTickets(data.tickets, newGrouping, sortBy);
  };

  // Handle sorting option change
  const handleSortChange = (newSort) => {
    setSortBy(newSort);
    groupAndSortTickets(data.tickets, groupingBy, newSort);
  };

  // Get user name by ID
  const getUserName = (userId) => {
    const user = data.users.find((user) => user.id === userId);
    return user ? user.name : "Unknown";
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <Navbar onGroupChange={handleGroupChange} onSortChange={handleSortChange} />
      {groupingBy === "status" ? (
        <ContainerByStatus groupedTickets={groupedTickets} getUserName={getUserName} />
      ) : groupingBy === "priority" ? (
        <ContainerByPriority groupedTickets={groupedTickets} getUserName={getUserName} />
      ) : (
        <ContainerByUser groupedTickets={groupedTickets} getUserName={getUserName} />
      )}
    </div>
  );
};

export default App;
