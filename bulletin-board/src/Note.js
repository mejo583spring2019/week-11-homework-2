import React, { Component } from "react";
import { FaPencilAlt } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import { FaRegSave } from "react-icons/fa";
class Note extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
    };
    this.edit = this.edit.bind(this);
    this.remove = this.remove.bind(this);
  }

  edit() {
    this.setState({
      editing: true,
    });
  }

  remove() {
    alert("removing note");
  }

  renderForm() {
    return (
      <div className="note">
        <form>
          <textarea />
          <button><FaRegSave /></button>
        </form>
      </div>
    );
  }

  render() {
    return (
      <div className="note">
        <p>Learn React</p>
        <span>
          <button onClick={this.edit} id="edit"><FaPencilAlt /></button>
          <button onClick={this.remove} id="remove"><FaTrashAlt /></button>
        </span>
      </div>
    );
  }
}

export default Note;
