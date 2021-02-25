//Async action creator for POST API Route
export const sendData = (url, payload) => {
  return (dispatch) => {
    return fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        dispatch({ type: "DATA_FROM_BACKEND", dataFromBackend: res });
      })
      .catch((err) => {
        console.log("API failed");
      });
  };
};

//Async action creator for GET API Route
export const getData = (url) => {
  return (dispatch) => {
    return fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        return json.drinks;
      })
      .then((drinks) => {
        dispatch({ type: "GET_DATA", getDataFromBackend: drinks });
      })
      .catch((err) => {
        console.log("API failed");
      });
  };
};
