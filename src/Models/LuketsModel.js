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

export const increaseActionStatus = lucket => {
  let newActionStatus;
  newActionStatus =
    lucket.actionStatus === "purple"
      ? "purple"
      : lucket.actionStatus === "blue"
      ? "purple"
      : lucket.actionStatus === "green"
      ? "blue"
      : lucket.actionStatus === "white"
      ? "green"
      : lucket.actionStatus === "yellow"
      ? "white"
      : lucket.actionStatus === "red"
      ? "yellow"
      : null;
  lucket.actionStatus = newActionStatus;
  return lucket.actionStatus;
};

export const decreaseActionStatus = lucket => {
  let newActionStatus;
  newActionStatus =
    lucket.actionStatus === "purple"
      ? "blue"
      : lucket.actionStatus === "blue"
      ? "green"
      : lucket.actionStatus === "green"
      ? "white"
      : lucket.actionStatus === "white"
      ? "yellow"
      : lucket.actionStatus === "yellow"
      ? "red"
      : lucket.actionStatus === "red"
      ? "red"
      : null;
  lucket.actionStatus = newActionStatus;
  return lucket.actionStatus;
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
    actionStatus: "white",
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


export const filterForDo = (lucketsIn) => {


  const luckets = lucketsIn.filter( l => l.actionStatus!=="white");

  const lucketActionOrder = (lucket) => LUCKET_COLOR_RANK[lucket.actionStatus];

  const compare = (a,b) => lucketActionOrder(a) - lucketActionOrder(b);

  const doLuckets = luckets.sort(compare);
  return doLuckets;

}