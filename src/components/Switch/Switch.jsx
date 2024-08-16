import { useState } from 'react';
import './Switch.css';

function Switch() {
    const [toggleValue, setToggleValue] = useState(false);

    const ThemeOption = ({ theme }) => {
        const setTheme = () => {
            document.querySelector("body").setAttribute("data-theme", theme);
            localStorage.setItem("theme", theme);
        };

        return (
            <label className="switch">
                <input onClick={setTheme} type="checkbox" checked={toggleValue} onChange={() => setToggleValue(!toggleValue)} />
                <span className="slider round"></span>
            </label>
        );
    };

    return <ThemeOption theme={toggleValue ? "light" : "dark"} />;
}

export default Switch;