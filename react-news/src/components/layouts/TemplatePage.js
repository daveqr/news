import React, { useState } from 'react';
import '../../App.css'
import Articles from '../Articles';

function TemplatePage() {
    const [selectedNav, setSelectedNav] = useState("Home");
    const [customName, setCustomName] = useState("general");

    const handleNavClick = (nav, customName) => {
        setSelectedNav(nav);
        setCustomName(customName);

    }

    return (
        <div>
            <body>
                <header>
                    News Site
                </header>

                <nav>
                    <a className={selectedNav === "Home" ? "active" : ""} href="#" onClick={() => handleNavClick("Home", "general")}>Home</a>
                    <a className={selectedNav === "Science" ? "active" : ""} href="#" onClick={() => handleNavClick("Science", "science")}>Science</a>
                    <a className={selectedNav === "Health" ? "active" : ""} href="#" onClick={() => handleNavClick("Health", "health")}>Politics</a>
                    <a className={selectedNav === "Business" ? "active" : ""} href="#" onClick={() => handleNavClick("Business", "business")}>Business</a>
                    <a className={selectedNav === "Sports" ? "active" : ""} href="#" onClick={() => handleNavClick("Sports", "sports")}>Sports</a>
                    <a className={selectedNav === "Technology" ? "active" : ""} href="#" onClick={() => handleNavClick("Technology", "technology")}>Technology</a>
                    <a className={selectedNav === "Entertainment" ? "active" : ""} href="#" onClick={() => handleNavClick("Entertainment", "entertainment")}>Entertainment</a>
                </nav>
            </body>
            <Articles selectedNav={selectedNav} customName={customName}/>
            <footer>
                © 2023 News Site
            </footer>
        </div>
    );
}

export default TemplatePage;
