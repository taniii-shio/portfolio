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
      hasNameError: false,
      hasEmailError: false,
      hasContentError: false,
      isSubmitted: false,
    };

    this.inputName = this.inputName.bind(this);
    this.inputEmail = this.inputEmail.bind(this);
    this.inputDescription = this.inputDescription.bind(this);
  }

  inputName = (event) => {
    const isEmpty = event.target.value === "";
    this.setState({ name: event.target.value, hasNameError: isEmpty });
  };

  inputEmail = (event) => {
    const isEmpty = event.target.value === "";
    this.setState({ email: event.target.value, hasEmailError: isEmpty });
  };

  inputDescription = (event) => {
    const isEmpty = event.target.value === "";
    this.setState({
      description: event.target.value,
      hasContentError: isEmpty,
    });
  };

  handleSubmit = () => {
    const name = this.state.name;
    const email = this.state.email;
    const description = this.state.description;

    const payload = {
      text:
        "お問い合わせがありました\n" +
        "お名前:" +
        name +
        "\n" +
        "Email:" +
        email +
        "\n" +
        "問い合わせ内容:\n" +
        description,
    };

    const url =
      "https://hooks.slack.com/services/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";

    fetch(url, {
      method: "POST",
      body: JSON.stringify(payload),
    }).then(() => {
      this.setState({
        name: "",
        email: "",
        description: "",
        isSubmitted: true,
      });
    });
  };

  render() {
    let nameErrorText;
    if (this.state.hasNameError) {
      nameErrorText = (
        <p className={styles.errormsg}>Please enter your name.</p>
      );
    }

    let emailErrorText;
    if (this.state.hasEmailError) {
      emailErrorText = (
        <p className={styles.errormsg}>Please enter your email.</p>
      );
    }

    let contentErrorText;
    if (this.state.hasContentError) {
      contentErrorText = (
        <p className={styles.errormsg}>Please enter content.</p>
      );
    }

    let contactForm;
    if (this.state.isSubmitted) {
      contactForm = (
        <div className={styles.msgcont}>
          <h2>Your message has been sent.</h2>
          <h3>Please wait for contact.</h3>
        </div>
      );
    } else {
      contactForm = (
        <div className={styles.formcont}>
          <TextInput
            label={"Name (Required)"}
            multiline={false}
            rows={1}
            value={this.state.name}
            type={"text"}
            onChange={this.inputName}
          />
          {nameErrorText}
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
          {emailErrorText}
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
          {contentErrorText}
          <br />
          <br />
          <div className={styles.btncont}>
            <Button
              onClick={() => {
                this.handleSubmit();
              }}
              variant="contained"
              disabled={
                !this.state.name || !this.state.email || !this.state.description
              }
            >
              submit
            </Button>
          </div>
          <br />
          <br />
          <br />
          <br />
        </div>
      );
    }

    return (
      <div className={styles.container}>
        <Head>
          <title>NaotoShioya/Contact</title>
        </Head>
        <h1 className={styles.title}>contact</h1>
        {contactForm}
      </div>
    );
  }
}
