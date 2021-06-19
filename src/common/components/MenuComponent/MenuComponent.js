import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Fade from "@material-ui/core/Fade";
import { connect } from "react-redux";
import { setFiterAC, sortAC } from "./menu-slice";
import { NAME, DATE, STATE } from "../../constants/constants";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import sorter from "../../helpers/sorter";
import "./menu.css";

const MenuComponent = ({ list, setOption, sortList }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (e) => {
    setAnchorEl(null);
    if (e.target.id) setOption(e.target.id);
    sortList(list, e.target.id);
  };

  return (
    <div className="menu_wrapper">
      <Button
        size="small"
        aria-controls="fade-menu"
        aria-haspopup="true"
        onClick={handleClick}
        style={{ fontSize: "24px", padding: "0", lineHeight: "none" }}
      >
        <ArrowDropDownIcon />
      </Button>
      <Menu
        id="fade-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem id={NAME} onClick={handleClose}>
          {NAME}
        </MenuItem>
        <MenuItem id={DATE} onClick={handleClose}>
          {DATE}
        </MenuItem>
        <MenuItem id={STATE} onClick={handleClose}>
          {STATE}
        </MenuItem>
      </Menu>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    option: state.filter.filterOption,
    list: state.item.list,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setOption: (option) => dispatch(setFiterAC(option)),
    sortList: (list, option) => {
      let sortedList = sorter(list, option);
      dispatch(sortAC(sortedList, option));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuComponent);
