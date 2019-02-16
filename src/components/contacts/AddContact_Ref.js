import React, { Component } from "react";

export default class AddContact extends Component {
  constructor(props) {
    super(props);
    this.nameInput = React.createRef();
    this.emailInput = React.createRef();
    this.phoneInput = React.createRef();
  }

  static defaultProps = {
    name: "fred smith",
    email: "fred@gmail.com",
    phone: "777-777-7777"
  };

  onFormSubmit = e => {
    e.preventDefault();
    const contact = {
      name: this.nameInput.current.value,
      email: this.emailInput.current.value,
      phone: this.phoneInput.current.value
    };
    console.log(contact);
  };

  render() {
    const { name, email, phone } = this.props;

    return (
      <div className="card mb-3">
        <div className="card-header">add contact</div>
        <div className="card-body">
          <form onSubmit={this.onFormSubmit}>
            <div className="form-group">
              <label htmlFor="name">name</label>
              <input
                type="text"
                placeholder="enter name.."
                defaultValue={name}
                ref={this.nameInput}
                name="name"
                className="form-control form-control-lg"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">email</label>
              <input
                type="email"
                placeholder="enter email.."
                defaultValue={email}
                ref={this.emailInput}
                name="email"
                className="form-control form-control-lg"
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">phone</label>
              <input
                type="text"
                placeholder="enter phone.."
                defaultValue={phone}
                ref={this.phoneInput}
                name="phone"
                className="form-control form-control-lg"
              />
            </div>
            <input
              className="btn btn-block btn-success"
              type="submit"
              value="add contact"
            />
          </form>
        </div>
      </div>
    );
  }
}
