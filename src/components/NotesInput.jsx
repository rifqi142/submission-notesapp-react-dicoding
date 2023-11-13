import React from "react";

export default class NotesInput extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "",
      body: "",
    };
    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    this.setState({
      title: event.target.value,
    });
  }

  onBodyChangeEventHandler(event) {
    this.setState({
      body: event.target.value,
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
    this.setState({
      title: "",
      body: "",
    });
  }

  render() {
    return (
      <form className="note-input" onSubmit={this.onSubmitEventHandler}>
        <br />
        <h2>Buat Catatan</h2>
        <p className="note-input__title__char-limit">
          sisa karakter : {50 - this.state.title.length}
        </p>
        <input
          className="note-input-title"
          type="text"
          placeholder="Ini adalah judul ..."
          value={this.state.title}
          onChange={this.onTitleChangeEventHandler}
          maxLength={50}
          required
        />
        <textarea
          className="note-input-body"
          type="text"
          placeholder="Tuliskan catatan mu disini ..."
          value={this.state.body}
          onChange={this.onBodyChangeEventHandler}
          required
        />
        <button type="submit">Buat Catatan</button>
      </form>
    );
  }
}
