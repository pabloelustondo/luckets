import axios from "axios";
import { getRootLucket } from '../Models/LuketsModel'

export const getData = handler => {
  axios
    .get("https://luckets-5fbb4.firebaseio.com/luckets.json")
    .then(response => {
      let luckets = Object.keys(response.data).map(key => {
        let obj = response.data[key];
        obj.id = key;
        return obj
      }
      );
      let focusLucket = getRootLucket(luckets);
      handler(luckets, focusLucket);
    })
    .catch(err => {
      alert(err);
    });
};

export const getUserData = (handler, user) => {
  axios
    .get("https://luckets-5fbb4.firebaseio.com/" + user.uid + ".json")
    .then(response => {
      if (response.data === null) { 
        ;
        postUserData(user) 
      }
      else {
        let luckets = Object.keys(response.data).map(key => {
          let obj = response.data[key];
          obj.id = key;
          return obj
        }
        );
      }
    })
    .catch(err => {
      postUserData(user)
    })
};


export const postData = (lucket, handler) => {
  axios
    .post("https://luckets-5fbb4.firebaseio.com/luckets.json/" + lucket.name, lucket)
    .then(response => {

      alert("OK");
    })
    .catch(err => {
      alert("ERROR" + err);
    });
};

export const postUserData = (user, data) => {
  ;
  let lucketsCollection = {};
  lucketsCollection[user.uid] = {luckets:data};
  axios
    .patch("https://luckets-5fbb4.firebaseio.com/users/"+user.uid+".json",{luckets:data})
    .then(response => {
      ;
      alert("OK");
    })
    .catch(err => {
      ;
      alert("ERROR" + err);
    });
};

export const postDefaultLucketSet = (user) => {
  //axios 1
  // grab luckets
  axios
    .get("https://luckets-5fbb4.firebaseio.com/luckets.json")
    .then(response => {
     
      ;
      // post into user
      postUserData(user,response.data)
    })
    .catch(err => {
      postUserData(user)
    })
}

export const checkUser = (user, handler) =>{
  //if luckes is null  post default
  axios
    .get("https://luckets-5fbb4.firebaseio.com/users/" + user.uid + "/luckets.json")
    .then(response => {
      if(response.data === null){    
        alert("user does not have data, will post default lucket set")
        postDefaultLucketSet(user);
      }
      else{
        let luckets = Object.keys(response.data).map(key => {
          let obj = response.data[key];
          obj.id = key;
          return obj});

        handler(luckets);
        alert("user allready has defaul lucket set")
      }
      
    })
    .catch(err => {
      postUserData(user)
    })
}

/// find user and output his luckets.

export const getuserData = handler => {
  axios
    .get("https://luckets-5fbb4.firebaseio.com/luckets.json")
    .then(response => {
      let luckets = Object.keys(response.data).map(key => {
        let obj = response.data[key];
        obj.id = key;
        return obj
      }
      );
      let focusLucket = getRootLucket(luckets);
      handler(luckets, focusLucket);
    })
    .catch(err => {
      alert(err);
    });
};

/// if user = null then make his spot in the database








