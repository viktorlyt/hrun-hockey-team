import React, { useState, useRef, useEffect } from "react";
import ReactDatePicker from "react-datepicker";
import { MdKeyboardArrowDown } from "react-icons/md";
import "react-datepicker/dist/react-datepicker.css";
import Wrapper from "../assets/wrappers/DatePicker";

const DatePicker = ({
  name,
  labelText,
  value,
  onChange,
  isRequired = true,
  isFilter = false,
}) => {
  const [selectedDate, setSelectedDate] = useState(() => {
    if (value) {
      const date = new Date(value);
      date.setMinutes(date.getMinutes() + date.getTimezoneOffset());
      return date;
    }
    return null;
  });
  const [isOpen, setIsOpen] = useState(false);
  const datePickerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        datePickerRef.current &&
        !datePickerRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setIsOpen(false);
    if (onChange) {
      // Format date as YYYY-MM-DD, adjusting for timezone
      const adjustedDate = new Date(
        date.getTime() - date.getTimezoneOffset() * 60000
      );
      onChange(adjustedDate.toISOString().split("T")[0]);
    }
  };

  const toggleDatePicker = () => {
    setIsOpen(!isOpen);
  };

  const formatDate = (date) => {
    if (!date) return "Select date";
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "2-digit",
    });
  };

  return (
    <Wrapper>
      <div
        className={`datepicker-container ${isFilter ? "filter" : "form-row"}`}
      >
        <label
          htmlFor={name}
          className={`datepicker-label ${
            isFilter ? "filter-label" : "form-label"
          }`}
        >
          {labelText || name}
        </label>
        <div
          ref={datePickerRef}
          className={`datepicker-input-container ${isFilter ? "filter" : ""}`}
        >
          <div className="custom-select" onClick={toggleDatePicker}>
            <div className="selected-value">{formatDate(selectedDate)}</div>
            <div className="datepicker-icon-container">
              <div className="datepicker-icon">
                <MdKeyboardArrowDown />
              </div>
            </div>
          </div>
          {isOpen && (
            <div className="datepicker-dropdown">
              <ReactDatePicker
                selected={selectedDate}
                onChange={handleDateChange}
                inline
                disabledKeyboardNavigation
              />
            </div>
          )}
        </div>
      </div>
    </Wrapper>
  );
};

export default DatePicker;
