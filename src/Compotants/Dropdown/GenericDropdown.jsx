import React, { useState } from "react";
import "./GenericDropdown.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Dropdown } from "react-bootstrap";

const GenericDropdown = ({ items, defaultLabel = "Filter by" }) => {
  const [selectedValue, setSelectedValue] = useState("noValue");

  const handleSelect = (eventKey) => {
    setSelectedValue(eventKey);
  };

  return (
    <Dropdown onSelect={handleSelect}>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        {selectedValue === "noValue" ? defaultLabel : selectedValue}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item eventKey="noValue">{defaultLabel}</Dropdown.Item>
        {items.map((item) => (
          <Dropdown.Item key={item.value} eventKey={item.value}>
            {item.label}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default GenericDropdown;
