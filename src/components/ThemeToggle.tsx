import { useTheme } from "@/context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      style={{
        border: "none",
        cursor: "pointer",
        color: theme === "light" ? "#fff" : "#000",
        backgroundColor: "transparent",
        // fontSize:"20px",
      }}
    >
      {theme === "light" ? "🌙" : "☀️"}
    </button>
  );
}
