import React, { useState } from "react";
import ResponseMessage from "../components/ResponseMessage";
import { Actions, CarData, Screens } from "../reducers/funnel";
import common from "./Common.module.css";
import Dialog from "./Dialog";
import style from "./InstantQuote.module.css";
import Loading from "./Loading";

function InstantQuote({ state, dispatch, onSuccess }) {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setSuccess(false);

    const data = buildMessage();

    // fetch("http://localhost/apps/quote/quote.php", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(data),
    // })
    //   .then((res) => res.json())
    //   .then((res) => {
    //     setLoading(false);
    //     setError(false);
    //     setSuccess(true);
    //     dispatch([
    //       {
    //         type: Actions.CHANGE_SCREEN,
    //         payload: {
    //           nextScreen: Screens.PRODUCTS,
    //         },
    //       },
    //       {
    //         type: Actions.SET_PROGRESS,
    //         payload: {
    //           nextScreen: 100,
    //         },
    //       },
    //       {
    //         type: Actions.SET_DONE,
    //         payload: {
    //           done: true,
    //         },
    //       },
    //     ]);
    //   })
    //   .catch((e) => {
    //     setLoading(false);
    //     setError(true);
    //     setSuccess(false);
    //   });

    dispatch([
      {
        type: Actions.SET_OPTIONS,
        payload: {
          screenName: Screens.INSTANT_QUOTE,
          value: {
            fname,
            lname,
            email,
            mobile,
          },
        },
      },
      {
        type: Actions.CHANGE_SCREEN,
        payload: {
          nextScreen: Screens.PRODUCTS,
        },
      },
      {
        type: Actions.SET_PROGRESS,
        payload: {
          nextScreen: 100,
        },
      },
      {
        type: Actions.SET_DONE,
        payload: {
          done: true,
        },
      },
    ]);
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
      purchaseOrLease: state.selectedOptions[Screens.PURCHASE_LEASE].value,
      haveOffstreetParking:
        state.selectedOptions[Screens.OFFSTREET_PARKING].value,
      willHaveVehicle:
        state.selectedOptions[Screens.HAVE_VEHICLE]?.value || "NA",
      fusebox: state.selectedOptions[Screens.FUSEBOX].value,
      postcode: state.selectedOptions[Screens.POSTCODE].value.postcode,
      locality: state.selectedOptions[Screens.POSTCODE].value.option,
      chargerInstall: state.selectedOptions[Screens.CHARGER_INSTALL].value,
      cablingType: state.selectedOptions[Screens.CABLING_TYPE]?.value || "NA",
      firstName: fname,
      lastName: lname,
      email: email,
      mobile: mobile,
    };
  }

  return (
    <div className={common.screen}>
      <h2 className={common.question}>
        Get a <span className={common.highlight}> free quote !</span>
      </h2>
      <h4 className={common.instruction}>
        To display your better choices, prices and finance options we simply
        require the below information
      </h4>

      <form method="post" className={style.form} onSubmit={handleSubmit}>
        <label className={style.label} htmlFor="fname">
          first name
        </label>
        <input
          value={fname}
          onChange={(e) => {
            setFname(e.target.value);
          }}
          className={style.input}
          type="text"
          required
          id="fname"
        />

        <label className={style.label} htmlFor="lname">
          last name
        </label>
        <input
          value={lname}
          onChange={(e) => {
            setLname(e.target.value);
          }}
          className={style.input}
          type="text"
          required
          id="lname"
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

        <section className={style.card}>
          <header className={style.header}>Our promise to you</header>
          <div className={style.body}>
            <small>
              <ul className={style.item}>
                <li>
                  <span role="img" aria-label="checkmark">
                    ✔️
                  </span>{" "}
                  We promise we won’t inundate you
                </li>
                <li>
                  <span role="img" aria-label="checkmark">
                    ✔️
                  </span>{" "}
                  ️ We’ll keep it relevant
                </li>
                <li>
                  <span role="img" aria-label="checkmark">
                    ✔️
                  </span>{" "}
                  ️We’ll never share your details
                </li>
              </ul>
            </small>
          </div>
        </section>

        <section className={style.card} style={{ textAlign: "center" }}>
          <header className={style.header}>
            All quotes are subject to final survey
          </header>
          <div className={style.body}>
            <small>
              <a href="about:blank" rel="noreferrer" target="_blank">
                Read our terms & conditions
              </a>
            </small>
          </div>
        </section>

        <button className={style.button} type="submit">
          confirm & submit
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
      {/* <Dialog visible={success}>
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
      </Dialog> */}
    </div>
  );
}

export default InstantQuote;
