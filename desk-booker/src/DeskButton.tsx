import "./App.css";
import { useState } from "react";
import React, { Component } from "react";

function DeskButton(props: any) {
  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const target = event.target as HTMLButtonElement;
    target.style.backgroundColor = "red";
    target.classList.add("some-class");
  };

  return (
    <button
      onClick={handleClick}
      key={props.key}
      type="button"
      className="btn btn-primary"
    >
      {props.children}
    </button>
  );
}

export default DeskButton;
