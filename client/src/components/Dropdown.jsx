import { useState, useRef, useEffect } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import Wrapper from "../assets/wrappers/Dropdown";

const Dropdown = ({
  name,
  labelText,
  options,
  defaultValue,
  onChange,
  isRequired = true,
  isFilter = false,
}) => {
  const [selectedValue, setSelectedValue] = useState(defaultValue || "");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setSelectedValue(defaultValue || "");
  }, [defaultValue]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleOptionClick = (option) => {
    setSelectedValue(option.value);
    setIsOpen(false);
    if (onChange) {
      onChange(option.value);
    }
  };

  const selectedLabel =
    options.find((option) => option.value === selectedValue)?.label || "";

  return (
    <Wrapper>
      <div className={`dropdown-container ${isFilter ? "filter" : "form-row"}`}>
        <label
          htmlFor={name}
          className={`dropdown-label b2 ${
            isFilter ? "filter-label" : "form-label"
          }`}
        >
          {labelText || name}
        </label>
        <div
          ref={dropdownRef}
          className={`dropdown-input-container ${isFilter ? "filter" : ""}`}
        >
          <div
            className="custom-select"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <div className="selected-value b2">{selectedLabel}</div>
            <div className="dropdown-icon-container">
              <div className="dropdown-icon">
                <MdKeyboardArrowDown />
              </div>
            </div>
          </div>
          {isOpen && (
            <ul className="options-list">
              {options.map((option) => (
                <li
                  key={option.value}
                  onClick={() => handleOptionClick(option)}
                  className={`b3 ${
                    option.value === defaultValue ? "selected" : ""
                  }`}
                >
                  {option.label}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </Wrapper>
  );
};

export default Dropdown;
