import axios from "axios";
import {getRootLucket} from '../Models/LuketsModel'

export const getData = handler => {
  axios
    .get("https://luckets-5fbb4.firebaseio.com/luckets.json")
    .then(response => {
      let luckets = Object.keys(response.data).map(key => response.data[key]);
      let focusLucket = getRootLucket(luckets);
      handler(luckets, focusLucket);
    })
    .catch(err => {
      alert(err);
    });
};
