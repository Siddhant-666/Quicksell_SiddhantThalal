import React, { useState, useEffect, useRef } from "react";
import "./Navbar.css";
import displayIcon from "./assets/Display.svg";
import down from "./assets/down.svg";

const Navbar = ({ onGroupChange, onSortChange }) => {
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const dropdownRef = useRef(null);
    const displayBoxRef = useRef(null);

    const toggleDropdown = () => {
        setIsDropdownVisible((prev) => !prev);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target) &&
                !displayBoxRef.current.contains(event.target)
            ) {
                setIsDropdownVisible(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <div
                    className="display-box"
                    onClick={toggleDropdown}
                    ref={displayBoxRef}
                    aria-expanded={isDropdownVisible}
                    role="button"
                    aria-haspopup="true"
                >
                    <img src={displayIcon} alt="Display Icon" className="display-icon" />
                    <p className="display-text">Display</p>
                    <img src={down} alt="Dropdown Arrow" className="dropdown-arrow" />
                </div>

                {isDropdownVisible && (
                    <div className="dropdown-menu" ref={dropdownRef} role="menu">
                        {/* Grouping Section */}
                        <div className="dropdown-section">
                            <label htmlFor="group-select" className="label">Grouping</label>
                            <select
                                id="group-select"
                                className="dropdown-select"
                                onChange={(e) => onGroupChange(e.target.value)}
                            >
                                <option value="" disabled selected>
                                    Select Group
                                </option>
                                <option value="status">Status</option>
                                <option value="priority">Priority</option>
                                <option value="user">User</option>
                            </select>
                        </div>

                        {/* Ordering Section */}
                        <div className="dropdown-section">
                            <label htmlFor="sort-select" className="label">Ordering</label>
                            <select
                                id="sort-select"
                                className="dropdown-select"
                                onChange={(e) => onSortChange(e.target.value)}
                            >
                                <option value="none">None</option>
                                <option value="priority">Priority</option>
                                <option value="title">Title</option>
                            </select>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
