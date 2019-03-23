import uuidv1 from "uuid/v1";

export const getRootLucket = luckets => {
  return luckets.find(l => l.parent === "");
};

export const getParentLucket = (luckets, lucket) => {
  return luckets.find(l => l.id === lucket.parent);
};

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

  console.log(JSON.stringify(luckets));
  console.log(JSON.stringify(focusLucket));
  let parent = getParentLucket(luckets, focusLucket);

  while (parent) {
    console.log(JSON.stringify(parent));
    path.push(parent);
    parent = getParentLucket(luckets, parent);
  }

  return path;
};
