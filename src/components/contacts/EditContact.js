import React, { Component } from "react";
import { Consumer } from "../../context";
import TextInputGroup from "../layout/TextInputGroup";
import axios from "axios";

export default class EditContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    errors: {}
  };

  onValueChange = e => this.setState({ [e.target.name]: e.target.value });

  onFormSubmit = async (dispatch, e) => {
    e.preventDefault();
    const { name, email, phone } = this.state;

    if (name === "") {
      this.setState({ errors: { name: "enter the name you dumdum" } });
      return;
    } else if (email === "") {
      this.setState({ errors: { email: "enter the email you dumdum" } });
      return;
    } else if (phone === "") {
      this.setState({ errors: { phone: "enter the phone you dumdum" } });
      return;
    }

    const updatedContact = {
      name,
      email,
      phone
    };
    const { id } = this.props.match.params;
    const res = await axios.put(
      `https://jsonplaceholder.typicode.com/users/${id}`,
      updatedContact
    );
    dispatch({ type: "UPDATE_CONTACT", payload: res.data });

    this.setState({
      name: "",
      email: "",
      phone: "",
      errors: {}
    });

    this.props.history.push("/");
  };

  async componentDidMount() {
    const { id } = this.props.match.params;
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    const contact = res.data;

    const { name, email, phone } = contact;
    this.setState({
      name,
      email,
      phone
    });
  }

  render() {
    const { name, email, phone, errors } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">edit contact</div>
              <div className="card-body">
                <form onSubmit={this.onFormSubmit.bind(this, dispatch)}>
                  <TextInputGroup
                    label="name"
                    name="name"
                    value={name}
                    placeholder="enter name.."
                    onChange={this.onValueChange}
                    error={errors.name}
                  />
                  <TextInputGroup
                    label="email"
                    name="email"
                    value={email}
                    placeholder="enter email.."
                    type="email"
                    onChange={this.onValueChange}
                    error={errors.email}
                  />
                  <TextInputGroup
                    label="phone"
                    name="phone"
                    value={phone}
                    placeholder="enter phone.."
                    onChange={this.onValueChange}
                    error={errors.phone}
                  />
                  <input
                    className="btn btn-block btn-success"
                    type="submit"
                    value="update contact"
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
