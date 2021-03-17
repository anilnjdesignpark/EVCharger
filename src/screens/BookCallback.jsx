import React, { useState } from "react";
import common from "./Common.module.css";
import style from "./BookCallback.module.css";
import ResponseMessage from "../components/ResponseMessage";
import Dialog from "./Dialog";
import Loading from "./Loading";
import { CarData, Screens } from "../reducers/funnel";

function BookCallBack({ state, dispatch, onSuccess }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [postcode, setPostcode] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setSuccess(false);

    const data = buildMessage();

    fetch("http://localhost/apps/quote/callback.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        setLoading(false);
        setError(false);
        setSuccess(true);
      })
      .catch((e) => {
        setLoading(false);
        setError(true);
        setSuccess(false);
      });
  }

  function isEligible() {
    const brand = CarData.filter(
      (car) =>
        car.name === state.selectedOptions[Screens.CAR_SELECT].value.brand
    )[0];
    return brand.supported.includes(
      state.selectedOptions[Screens.CAR_SELECT].value.model
    );
  }

  function buildMessage() {
    return {
      brand: state.selectedOptions[Screens.CAR_SELECT].value.brand,
      model: state.selectedOptions[Screens.CAR_SELECT].value.model,

      eligible: isEligible(),
      purchaseOrLease: state.selectedOptions[Screens.PURCHASE_LEASE]?.value,
      haveOffstreetParking:
        state.selectedOptions[Screens.OFFSTREET_PARKING]?.value,
      name: name,
      email: email,
      mobile: mobile,
      postcode: postcode,
      message: message,
    };
  }

  return (
    <div className={common.screen}>
      <h2 className={common.question}>
        <span className={common.highlight}> Book a callback</span> we'll help
        you select the right charger
      </h2>
      <h4 className={common.instruction}>Fill the below form</h4>

      <form method="post" className={style.form} onSubmit={handleSubmit}>
        <label className={style.label} htmlFor="name">
          name
        </label>
        <input
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          className={style.input}
          type="text"
          required
          id="name"
        />

        <label className={style.label} htmlFor="email">
          email
        </label>
        <input
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          className={style.input}
          type="email"
          required
          id="email"
        />

        <label className={style.label} htmlFor="mobile">
          mobile
        </label>
        <input
          value={mobile}
          onChange={(e) => {
            setMobile(e.target.value);
          }}
          className={style.input}
          type="tel"
          required
          id="mobile"
        />

        <label className={style.label} htmlFor="postcode">
          postcode
        </label>
        <input
          value={postcode}
          onChange={(e) => {
            setPostcode(e.target.value);
          }}
          className={style.input}
          type="text"
          required
          id="postcode"
        />

        <label className={style.label} htmlFor="message">
          message
        </label>
        <textarea
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          id="message"
          required
          className={style.message}
        ></textarea>

        <button className={style.button} type="submit">
          send
        </button>
      </form>

      <Dialog visible={loading}>
        <Loading />
      </Dialog>
      <Dialog visible={error}>
        <ResponseMessage
          title="Something went wrong"
          subtitle="Try to resumit the form"
          icon="no.png"
          buttonText="close"
          onClick={(e) => {
            setLoading(false);
            setError(false);
            setSuccess(false);
          }}
        />
      </Dialog>
      <Dialog visible={success}>
        <ResponseMessage
          title="Sent sucessfully"
          subtitle="Thank you for submitting form"
          icon="yes.png"
          buttonText="restart"
          onClick={(e) => {
            setLoading(false);
            setError(false);
            setSuccess(false);
            onSuccess();
          }}
        />
      </Dialog>
    </div>
  );
}

export default BookCallBack;
