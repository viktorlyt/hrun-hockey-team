import Wrapper from "../assets/wrappers/CriteriaSwitcher";

const CriteriaSwitcher = ({ criteria, setCriteria, options }) => (
  <Wrapper>
    {options.map((option) => {
      let displayOption = option;
      let className = "capitalize-first";

      // Check if option is 'sv' or 'gaa'
      if (option === "sv" || option === "gaa") {
        className = "capitalize-all";
        displayOption = option.toUpperCase();
      }

      // Add '%' if option is 'sv'
      if (option === "sv") {
        displayOption += " %";
      }

      return (
        <li
          key={option}
          className={`${className} ${criteria === option ? "active" : ""}`}
          onClick={() => setCriteria(option)}
        >
          {displayOption}
        </li>
      );
    })}
  </Wrapper>
);

export default CriteriaSwitcher;
