import Wrapper from "../assets/wrappers/CriteriaSwitcher";

const CriteriaSwitcher = ({ criteria, setCriteria, options }) => (
  <Wrapper>
    {options.map((option) => (
      <li
        key={option}
        className={`capitalize-first ${criteria === option ? "active" : ""}`}
        onClick={() => setCriteria(option)}
      >
        {option}
      </li>
    ))}
  </Wrapper>
);

export default CriteriaSwitcher;
