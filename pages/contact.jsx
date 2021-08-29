import React from "react";
import Head from "next/head";
import styles from "../src/styles/contact.module.css";

import TextInput from "../src/components/form/TextInput";
import Button from "@material-ui/core/Button";

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      description: "",
    };

    this.inputName = this.inputName.bind(this);
    this.inputEmail = this.inputEmail.bind(this);
    this.inputDescription = this.inputDescription.bind(this);
  }

  inputName = (event) => {
    console.log(event.target.value);
    this.setState({ name: event.target.value });
  };

  inputEmail = (event) => {
    this.setState({ email: event.target.value });
  };

  inputDescription = (event) => {
    this.setState({ description: event.target.value });
  };

  render() {
    return (
      <div className={styles.container}>
        <Head>
          <title>NaotoShioya/Contact</title>
        </Head>
        <h1 className={styles.title}>contact</h1>
        <div className={styles.formcont}>
          <TextInput
            label={"Name (Required)"}
            multiline={false}
            rows={1}
            value={this.state.name}
            type={"text"}
            onChange={this.inputName}
          />
          <br />
          <br />
          <TextInput
            label={"Email (Required)"}
            multiline={false}
            rows={1}
            value={this.state.email}
            type={"email"}
            onChange={this.inputEmail}
          />
          <br />
          <br />
          <TextInput
            label={"Content (Required)"}
            multiline={true}
            rows={5}
            value={this.state.description}
            type={"text"}
            onChange={this.inputDescription}
          />
          <br />
          <br />
          <div className={styles.btncont}>
            <Button
              onClick={this.submitForm}
              variant="contained"
              disabled="true"
            >
              submit
            </Button>
          </div>
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>
    );
  }
}
