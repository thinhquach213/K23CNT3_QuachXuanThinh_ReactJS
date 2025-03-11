import { useTheme } from "../context/QxtThemeContext";


export default function QxtThemeToggle(){
    const {theme , toggleTheme}    = useTheme();
    return (
        <button onClick={toggleTheme}>
            Chuyển sang {theme === "light" ? "tối" : "sáng"}
        </button>
    );
}
