import uuidv1 from "uuid/v1";



export const getRootLucket = luckets => {
  return luckets.find(l => l.parent === "");
};

export const getParentLucket = (luckets, lucket) => {
  return luckets.find(l => l.id === lucket.parent);
};

export const LUCKET_COLOR_RANK = { "purple":3, "blue":2, "green":1, "white":0,"yellow":-1, "red":-2, "black":-3};

export const increaseStatus = lucket => {
  let newStatus;
  newStatus =
    lucket.status === "purple"
      ? "purple"
      : lucket.status === "blue"
      ? "purple"
      : lucket.status === "green"
      ? "blue"
      : lucket.status === "white"
      ? "green"
      : lucket.status === "yellow"
      ? "white"
      : lucket.status === "red"
      ? "yellow"
      : null;
  lucket.status = newStatus;
  return lucket.status;
};

export const decreaseStatus = lucket => {
  let newStatus;
  newStatus =
    lucket.status === "purple"
      ? "blue"
      : lucket.status === "blue"
      ? "green"
      : lucket.status === "green"
      ? "white"
      : lucket.status === "white"
      ? "yellow"
      : lucket.status === "yellow"
      ? "red"
      : lucket.status === "red"
      ? "red"
      : null;
  lucket.status = newStatus;
  return lucket.status;
};

export const getNewLucket = parentLucket => {
  const id = uuidv1();
  const parentId = parentLucket ? parentLucket.id : "Life-Lucket";
  return {
    id: id,
    parent: parentId,
    category:"A",
    order:0,
    name: "NEW",
    actionStatus: {Day:"white", Week:"white",Monthy:"white",Quarter:"white",Year:"white"},
    icon: "reading.svg",
    points: 1,
    status: "white"
  };
};

export const updateLucket = (luckets, lucket) => {
  let index = luckets.findIndex(l => l.id === lucket.id);
  luckets[index] = lucket;
  return luckets;
};

export const getLucketById = (luckets, id) => {
  return luckets.find(l => l.id === id);
};

export const getChildrenLuckets = (luckets, focusLucket) => {

  const rank = (l) => l.category + l.order;
  if (focusLucket)
    return luckets
      .filter(l => l.parent === focusLucket.id && !l.deleted)
      .sort((a, b) => (rank(a) > rank(b) ? 1 : rank(a) < rank(b) ? -1 : 0));
  else return [];
};

export const getPath = (luckets, focusLucket) => {
  let path = [];
  let parent = getParentLucket(luckets, focusLucket);

  while (parent) {
    path.push(parent);
    parent = getParentLucket(luckets, parent);
  }

  return path;
};

export const isSameDay = (d1,d2) => (d1.getDate() === d2.getDate());


export const filterForDo = (lucketsIn,timeFrame) => {


  const luckets = lucketsIn.filter( l => l.actionStatus[timeFrame]!=="white");

  const lucketActionOrder = (lucket) => LUCKET_COLOR_RANK[lucket.actionStatus[timeFrame]];

  const compare = (a,b) => lucketActionOrder(a) - lucketActionOrder(b);

  const doLuckets = luckets.sort(compare);
  return doLuckets;

}

export const cleanActionStatus = (luckets,timeFrame) =>{

  const newLuckets = luckets.map(
    l => {

      if (typeof l.actionStatus === 'string'){  //this code is temporaryr to clean actionStatus after refactor Timeframe
        const dayActionStatus = l.actionStatus;
        l.actionStatus = {};
        l.actionStatus[timeFrame] = dayActionStatus;   //TODO Make this timeFrame aware work for Day now
      } else {
        if (!l.actionStatus){
          l.actionStatus[timeFrame] = {};
        }
        l.actionStatus[timeFrame] = 'white';
      }

      return {...l}
    }
  );
  return newLuckets;
}

export const LucketsList2Object = (luckets) =>{

  luckets.reduce( (acc,lucket)=> {
    return {...acc, [lucket.id]:lucket}
  },{})

  return LucketsList2Object;
}

export const calculatePoints = (luckets, lucket, timeFrame) => {

  if (lucket === null) return 0;

  const aStatusOrder = {'red':-2, 'yellow':-1, 'white':3, 'green':1, 'blue':2};
  const statusOrder = {'red':-2, 'yellow':-1, 'white':0, 'green':1, 'blue':2};

  const result = {...lucket};
  result.totalActionPoints = (result.actionStatus[timeFrame] === "white")?0:result.points;
  result.doneActionPoints = (result.actionStatus[timeFrame] === "blue")?result.points:0;
  result.childrenActionStatus = 'white'; //if no children we assume white
  result.childrenStatus = 'white'; //if no children we assume white

  const childrenLuckets= getChildrenLuckets(luckets, lucket);

  if (childrenLuckets.length > 0){

    const calculatedChildrens = childrenLuckets.map( children =>
        calculatePoints(luckets, children, timeFrame));

    const totalChildrenPoints = calculatedChildrens.reduce( (acc, cc) => acc + cc.totalActionPoints, 0);
    const doneChildrenPoints = calculatedChildrens.reduce( (acc, cc) => acc + cc.doneActionPoints, 0);
    const childrenActionStatus = calculatedChildrens.reduce( (acc, cc) =>
        (aStatusOrder[cc.actionStatus[timeFrame]] < aStatusOrder[acc])?cc.actionStatus[timeFrame]:acc, 'white');
    const childrenStatus = calculatedChildrens.reduce( (acc, cc) =>
          (statusOrder[cc.status] < statusOrder[acc])?cc.status:acc, 'blue');

    result.totalActionPoints += totalChildrenPoints;
    result.doneActionPoints += doneChildrenPoints;
    result.childrenActionStatus = childrenActionStatus;
    result.childrenStatus = childrenStatus;
  }

  return result;

}


export const timeSet = (set, v) => {

  const vv = set.filter( o => o !== v);

  if( vv.length === set.length){
    //then it was not there so we pushed it
    return [...set,v];
  } else {
    //it was there so we remove it
    return vv;
  }

}


/*
		DayPart:
			1 - [12, 3)    Late Night
			2 - [3, 6)      Deep Night
			3 - [6 - 9)     Early morning
			4 - [9 - 12)   Morning
			5 - [12 - 15) Noon
			6 - [15 - 18) Afternoon
			7 - [18 - 21) Evening
			8 - [21 - 12) Night

 */

export const TimeOptions =  ['LN','DN','EM','MO','NO','AF','EV','NI'];


const setDefaultTimeAssignment = (timeOptions, lucket) => {
  //if luckets has not being assinged to any time option... then put it in all time options
  if (!lucket.time) {
    lucket.time = {};
  }
  //1. check is we have at least one assingment
  let numberOfAssingments = 0;
  timeOptions.forEach( timeOption => {
    numberOfAssingments +=  (lucket.time[timeOption]) ? 1:0;
  })

  if (numberOfAssingments === 0) {
    timeOptions.forEach( timeOption => {
      lucket.time[timeOption] = true;
    })
  }
}

export const categorizeByTime = (luckets, timeFrame) => {

  const lucketsMap = {};

  const activeLuckets = luckets.filter( l => l.actionStatus[timeFrame] !== 'white');

  TimeOptions.forEach( timeOption => {
    lucketsMap[timeOption]=[];
  });

  activeLuckets.forEach( lucket => {
    setDefaultTimeAssignment(TimeOptions, lucket);
    TimeOptions.forEach( timeOption => {
      if (lucket.time && lucket.time[timeOption]){
        lucketsMap[timeOption].push(lucket);
      }
    })
  });

  TimeOptions.forEach( option => {
    if (lucketsMap[option].length === 0){
      delete lucketsMap[option];
    }

  });

  const result = [];

  for( let cat in lucketsMap){
    const categoryObject = { category: cat, luckets:lucketsMap[cat] };
    result.push( categoryObject );
  }

  return result;

};


export const categorize = (luckets) => {

 const lucketsMap = {};

 luckets.forEach( lucket => {

   if (!lucketsMap[lucket.category]){
     lucketsMap[lucket.category]=[];
   }

   lucketsMap[lucket.category].push(lucket)
 });

 const result = [];
  for( let cat in lucketsMap){
    const categoryObject = buildCategory(cat,lucketsMap[cat] );
    result.push( categoryObject );
  }

  return result;
};

const buildCategory = (category, luckets) => {
  //given a key and a list of luckets assinged to that categor
  //returns an object that represents the category with a key, a name and relative points
  let totalActionPoints=0;
  let doneActionPoints=0;
  let childrenActionStatus=0;
  let childrenStatus=0;
  //calculate points
  luckets.forEach( l => {
    totalActionPoints += l.totalActionPoints;
    doneActionPoints += l.doneActionPoints;
    childrenActionStatus = (l.childrenActionStatus < childrenActionStatus)?l.childrenActionStatus:childrenActionStatus;
    childrenActionStatus = (l.childrenStatus < childrenStatus)?l.childrenStatus:childrenStatus;
  })

  return { category, luckets,totalActionPoints, doneActionPoints,childrenActionStatus, childrenStatus };
}

export const fixActionStatus = (luckets) => {
  if (luckets) {
    luckets.forEach(l => {
      if (typeof l.actionStatus === "string") {
        const actionStatus = l.actionStatus;
        l.actionStatus = {};
        l.actionStatus["Day"] = actionStatus;
        updateLucket(luckets, l);
      }
    })
  }
}


export const FUNCS = {};

FUNCS.resetTemplate = (luckets) => {
    const n = luckets.length;
    alert("resetTemplate GOT " + n);
}

FUNCS.exportTemplate = (luckets) => {
  const n = luckets.length;
  alert("exportTemplate GOT " + n);
}