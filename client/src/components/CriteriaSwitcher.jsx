import Wrapper from "../assets/wrappers/CriteriaSwitcher";

const CriteriaSwitcher = ({ criteria, setCriteria, options }) => (
  <Wrapper>
    {options.map((option) => {
      let displayOption = option;
      let className = "capitalize-first";

      if (option === "sv" || option === "gaa") {
        className = "capitalize-all";
        displayOption = option.toUpperCase();
      }

      if (option === "sv") {
        displayOption += " %";
      }

      return (
        <li
          key={option}
          className={`b2 ${className} ${criteria === option ? "active" : ""}`}
          onClick={() => setCriteria(option)}
        >
          {displayOption}
        </li>
      );
    })}
  </Wrapper>
);

export default CriteriaSwitcher;
