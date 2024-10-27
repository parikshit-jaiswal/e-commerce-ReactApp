import React, { useEffect, useState } from 'react'
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';


function Themebtn() {

    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("theme") || "light";
    });

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
        localStorage.setItem("theme", theme);
    }, [theme]);

    const handleThemeSwitch = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };
    return (
        <div role='button' onClick={handleThemeSwitch}>
            {theme === 'dark' ? <DarkModeIcon /> : <LightModeIcon />}
        </div>
    )
}

export default Themebtn