import React, { useState } from "react";
import ResponseMessage from "../components/ResponseMessage";
import { Actions, Screens } from "../reducers/funnel";
import common from "./Common.module.css";
import Dialog from "./Dialog";
import Loading from "./Loading";
import style from "./PostCode.module.css";

function PostCode({ state, dispatch }) {
  const [postcode, setPostcode] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [response, setResponse] = useState(null);
  const [option, setOption] = useState(null);

  function isValid() {
    return new RegExp("[A-Z][A-Z]\\d+").test(postcode.trim());
  }

  function fetchAPI() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([
          {
            id: 1,
            name: "alpha",
          },
          {
            id: 2,
            name: "beta",
          },
        ]);
      }, 2000);
    });
  }

  function handleCheck() {
    setLoading(true);
    setError(false);
    setResponse(null);
    setOption(null);

    fetchAPI()
      .then((res) => {
        console.log(res);

        setLoading(false);
        setError(false);
        setResponse(res);
        setOption(res[0]);
      })
      .catch((e) => {
        console.error(e);
        setLoading(false);
        setError(true);
        setResponse(null);
        setOption(null);
      });
  }

  return (
    <div className={common.screen}>
      <h2 className={common.question}>
        Finally, enter the
        <span className={common.highlight}> first part </span> of your
        <span className={common.highlight}> post code </span>
      </h2>
      <h4 className={common.instruction}>
        We use this to assign you a local installer <br /> (make sure you enter
        the right one, or you'll have to go back and change it later)
      </h4>

      <div className={style.container}>
        <div className={style.inputContainer}>
          <input
            className={style.input}
            type="text"
            placeholder="eg SW19"
            value={postcode}
            onChange={(e) => {
              setPostcode(e.target.value.trim().toUpperCase());
              if (response) {
                setResponse(null);
                setOption(null);
              }
            }}
          />
          <button
            disabled={!isValid()}
            className={style.checkButton}
            onClick={handleCheck}
          >
            check
          </button>
        </div>

        {response && option && (
          <select
            className={style.select}
            value={option}
            onChange={(e) => {
              setOption(e.target.value);
            }}
          >
            {response.map((_option) => (
              <option key={_option.id}>{_option.name}</option>
            ))}
          </select>
        )}

        <button
          onClick={(e) => {
            dispatch([
              {
                type: Actions.SET_OPTIONS,
                payload: {
                  screenName: Screens.POSTCODE,
                  value: { postcode, option },
                },
              },
              {
                type: Actions.CHANGE_SCREEN,
                payload: {
                  nextScreen: Screens.INSTANT_QUOTE,
                },
              },
              {
                type: Actions.SET_PROGRESS,
                payload: {
                  progress: 90,
                },
              },
            ]);
          }}
          disabled={!response && !option}
          className={style.button}
        >
          next
        </button>
      </div>
      <Dialog visible={loading}>
        <Loading text="Checking..." />
      </Dialog>
      <Dialog visible={error}>
        <ResponseMessage
          title="Something went wrong"
          subtitle="Try to resumit"
          icon="no.png"
          buttonText="close"
          onClick={(e) => {
            setLoading(false);
            setError(false);
            setResponse(null);
            setOption(null);
          }}
        />
      </Dialog>
    </div>
  );
}

export default PostCode;
