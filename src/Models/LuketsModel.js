
export const getRootLucket = (luckets) => {
    return luckets.find( l => l.parent === "")
}

export const getParentLucket = (luckets, lucket) => {
    return luckets.find( l => l.name === lucket.parent)
}

export const increaseStatus = (lucket) => {
    let newStatus
    newStatus = lucket.status === "purple" ? "purple" : lucket.status === "blue" ? "purple" : lucket.status === "green" ? "blue" :lucket.status === "white" ? "green" :lucket.status === "yellow" ? "white" :lucket.status === "red" ? "yellow" : null
    lucket.status = newStatus
    return lucket.status
}

export const decreaseStatus = (lucket) => {
    let newStatus
    newStatus = lucket.status === "purple" ?  "blue" : lucket.status === "blue" ? "green" : lucket.status === "green" ? "white" :lucket.status === "white" ? "yellow" :lucket.status === "yellow" ? "red" :lucket.status === "red" ? "red" : null
    lucket.status = newStatus
    return lucket.status
}

export const increaseActionStatus = (lucket) => {
    let newActionStatus
    newActionStatus = lucket.actionStatus === "purple" ? "purple" : lucket.actionStatus === "blue" ? "purple" : lucket.actionStatus === "green" ? "blue" :lucket.actionStatus === "white" ? "green" :lucket.actionStatus === "yellow" ? "white" :lucket.actionStatus === "red" ? "yellow" : null
    lucket.actionStatus = newActionStatus
    return lucket.actionStatus
}

export const decreaseActionStatus = (lucket) => {
    let newActionStatus
    newActionStatus = lucket.actionStatus === "purple" ?  "blue" : lucket.actionStatus === "blue" ? "green" : lucket.actionStatus === "green" ? "white" :lucket.actionStatus === "white" ? "yellow" :lucket.actionStatus === "yellow" ? "red" :lucket.actionStatus === "red" ? "red" : null
    lucket.actionStatus = newActionStatus
    return lucket.actionStatus
}

export const getNewLucket = (parentLucket) => {
    return {
        parent: parentLucket.name,
        name: "NEW",
        actionStatus: "white",
        icon: 'reading.svg' ,
        points: 1,
        status: 'white'
    }
}

export const updateLucket = (luckets, lucket) => {
    let index = luckets.findIndex(l => l.id === lucket.id);
    luckets[index]=lucket;
    return luckets;
}

export const getLucketById = (luckets, id) => {
    return luckets.find( l => l.id===id);
}

export const getChildrenLuckets = (luckets, focusLucket) => {
    if (focusLucket) return luckets.filter( l => l.parent === focusLucket.name)
    else return []
}
