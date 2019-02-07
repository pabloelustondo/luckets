
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

export const getChildrenLuckets = (luckets, focusLucket) => {
    if (focusLucket) return luckets.filter( l => l.parent === focusLucket.name)
    else return []
}
