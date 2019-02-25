
export const getRootLucket = (luckets) => {
    return luckets.find( l => l.parent === "")
}

export const getParentLucket = (luckets, lucket) => {
    return luckets.find( l => l.name === lucket.parent)
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
