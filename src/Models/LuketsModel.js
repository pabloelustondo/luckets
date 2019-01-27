
export const getRootLucket = (luckets) => {
    return luckets.find( l => l.parent == "")
}
