// Code your solution here
function findMatching(ary, str){
    return ary.filter((element) => element.toUpperCase() === str.toUpperCase())
}
function fuzzyMatch(ary, str){
    return ary.filter((element) => element.slice(0, str.length) === str)
}
function matchName(ary, str){
    return ary.filter((element) => element["name"] === str)
}