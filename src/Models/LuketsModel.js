
export const getRootLucket = (luckets) => {
    return luckets.find( l => l.parent === "")
}

export const getParentLucket = (luckets, lucket) => {
    return luckets.find( l => l.name === lucket.parent)
}

export const getChildrenLuckets = (luckets, focusLucket) => {
    if (focusLucket) return luckets.filter( l => l.parent === focusLucket.name)
    else return []
}
