import axios from "axios";
import { getRootLucket, LucketsList2Object } from '../Logic/LuketsModel';
import masterData from "./master-data.json";

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
      alert("Off Line:  " + err);
      handler(masterData, masterData[0]);
    });
};

export const getUserData = (handler, user) => {
   
  axios
    .get("https://luckets-5fbb4.firebaseio.com/" + user.uid + ".json")
    .then(response => {
      if (response.data === null) {
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


export const patchAllLuckets = (user, luckets, handler) => {

 luckets.forEach( lucket => {
     patchData(user, lucket, () => {});
 })

};

export const patchData = (user, lucket, handler) => {

  axios
    .patch("https://luckets-5fbb4.firebaseio.com//users/"+user.uid+"/luckets/" + lucket.id +".json", lucket)
    .then(response => {

    })
    .catch(err => {
      alert("ERROR" + err);
    });
};

export const postData = (user, lucket, handler) => {

  axios
    .patch("https://luckets-5fbb4.firebaseio.com//users/"+user.uid+"/luckets/" + lucket.id +".json", lucket)
    .then(response => {

    })
    .catch(err => {
      alert("ERROR" + err);
    });
};

export const postHistory = (user, closedDay, handler) => {

  const id=closedDay.userInfo.openDay;
  axios
    .put("https://luckets-5fbb4.firebaseio.com//users/"+user.uid+"/history/"+ id +".json/", closedDay)
    .then((response) => {
        handler(response);
    })
    .catch(err => {
      alert("ERROR" + err);
    });
};


export const postUserData = (user, data) => {
  let lucketsCollection = {};
  lucketsCollection[user.uid] = {luckets:data};
  axios
    .patch("https://luckets-5fbb4.firebaseio.com/users/"+user.uid+".json",{luckets:data})
    .then(response => {
    })
    .catch(err => {  
      alert("ERROR" + err);
    });
};

export const postUserInfo = (user, data) => {
  axios
    .patch("https://luckets-5fbb4.firebaseio.com/users/"+user.uid+".json",{userInfo:data})
    .then(response => {
    })
    .catch(err => {  
      alert("ERROR" + err);
    });
};

export const postDefaultLucketSet = (user) => {
  //axios 1
  // grab luckets
  axios
    .get("https://luckets-5fbb4.firebaseio.com/luckets.json")
    .then(response => {
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

        handler(luckets.filter( l => !l.deleted===true) );
      }
      
    })
    .catch(err => {
      postUserData(user)
    })
}

export const getUserInfo = (user, handler) =>{
  axios
    .get("https://luckets-5fbb4.firebaseio.com/users/" + user.uid + "/userInfo.json")
    .then(response => {
        handler(  response.data );
      }).catch( err => {
        alert("ERROR GETTING USER INFO:   " + err);
      })  
}

export const getHistory = (user, handler) =>{
  axios
    .get("https://luckets-5fbb4.firebaseio.com/users/" + user.uid + "/history.json")
    .then(response => {
        handler(  response.data );
      }).catch( err => {
        alert("ERROR GETTING USER INFO:   " + err);
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








