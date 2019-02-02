import axios from "axios";

    export const getData = (handler) => {
    axios
    .get("https://luckets-5fbb4.firebaseio.com/luckets.json")
    .then(response => {
      let luckets = Object.keys(response.data).map(
        key => response.data[key]
      );
      handler(luckets);
    })
    .catch(err => {
      alert(err);
    })} 