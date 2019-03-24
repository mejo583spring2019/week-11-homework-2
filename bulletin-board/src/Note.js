import React, { Component } from "react";
import FaPencil from "react-icons/lib/fa/pencil";
import FaTrash from "react-icons/lib/fa/trash";
import FaFloppy0 from "react-icons/lib/fa/floppy-o";

class Note extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
    };
    this.edit = this.edit.bind(this);
    this.remove = this.remove.bind(this);
    this.save = this.save.bind(this);
    this.renderForm = this.renderForm.bind(this);
  }

  edit() {
    this.setState({
      editiing: true,
    });
  }

  remove() {
    alert("removing note");
  }
  save() {
  }
  renderForm() {
    return (
      <div className='note'>
        <form>
          <textarea />
          <button onClick={this.save}><FaFloppy0 /></button>
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
  render() {
    if (this.state.editing) {
      return this.renderForm();
    } else {
      return this.renderDisplay();
    }
  }
}

export default Note
;
