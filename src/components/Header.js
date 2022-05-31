import React from "react";
import Button from "./Button"

const Header = ({ title, onAdd, showAdd }) => {


  return (
      <header className="header">
        <h1>{title}</h1>
        <Button 
          onClick={onAdd}
          color={showAdd ? "#BC4B51" : "#5B8E7D"}
          text={showAdd ? "Close" : "Add"}
          />
      </header>
  )
}

Header.defaultProps = {
  title: "Book List",
}


export default Header
