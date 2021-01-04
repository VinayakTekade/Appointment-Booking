import { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

const TimezonePicker = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () =>
    setDropdownOpen((prevState) => {
      return !prevState;
    });
  const [lastClicked, setLastClicked] = useState(null);

  return (
    <div className="">
      <Dropdown direction="down" isOpen={dropdownOpen} toggle={toggleDropdown}>
        <DropdownToggle caret>{lastClicked || "Timezone"}</DropdownToggle>
        <DropdownMenu>
          <DropdownItem onClick={() => setLastClicked("America/NewYork")}>
            America/NewYork
          </DropdownItem>
          <DropdownItem onClick={() => setLastClicked("PacificBS")}>
            PacificBS
          </DropdownItem>
          <DropdownItem onClick={() => setLastClicked("Indian Standard Time")}>
            Indian Standard Time
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default TimezonePicker;
