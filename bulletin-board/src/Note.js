import React, { Component } from "react";
import { FaPencilAlt } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
class Note extends Component {
  render() {
    return (
      <div className="note">
        <p>Learn React</p>
        <span>
          <button><FaPencilAlt /></button>
          <button><FaTrashAlt /></button>
        </span>
      </div>
    );
  }
}

export default Note;
