
export const getRootLucket = (luckets) => {
    return luckets.find( l => l.parent == "")
}

export const getChildrenLuckets = (luckets, focusLucket) => {

    if (focusLucket) return luckets.filter( l => l.parent === focusLucket.name)
    else return []
}
