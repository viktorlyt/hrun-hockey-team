import Wrapper from "../../public/assets/wrappers/ThemeSwitcher";
import { useTheme } from "../context/ThemeContext";

export default function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Wrapper>
      <label className="switch">
        <input
          type="checkbox"
          checked={theme === "light"}
          onChange={toggleTheme}
        />
        {/* <span className="slider round" /> */}
        <span className="slider round">
          <span className="switch-text">
            {theme === "light" ? "Away" : "Home"}
          </span>
        </span>
      </label>
    </Wrapper>
  );
}
