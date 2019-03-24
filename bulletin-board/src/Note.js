import React, { Component } from "react";
import FaPencil from "react-icons/lib/fa/pencil";
import FaTrash from "react-icons/lib/fa/trash";
import FaFloppy0 from "react-icons/lib/fa/floppy-o";

class Note extends Component {
  constructor(props) {
    super(props);
    this.edit = this.edit.bind(this);
    this.remove = this.remove.bind(this);
    this.renderForm = this.renderForm.bind(this);
  }
  edit() {
    alert("editing note");
  }
  remove() {
    alert("removing note");
  }

  renderForm() {
    return (
      <div className='note'>
        <form>
          <textarea />
          <button><FaFloppy0></FaFloppy0></button>
        </form>
      </div>
    );
  }

  renderDisplay() {
    return (
      <div className="note">
        <p>Learn React</p>
        <span>
          <button onClick={this.edit} id="edit"><FaPencil /></button>
          <button onClick={this.remove} id="remove"><FaTrash /></button>
        </span>
      </div>
    );
  }
}

export default Note;
