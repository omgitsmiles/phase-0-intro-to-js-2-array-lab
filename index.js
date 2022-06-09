// Write your solution here!

const cats = ['Milo','Otis', 'Garfield']

function destructivelyAppendCat(name) {
    cats.push(name)
}

function destructivelyPrependCat(name) {
    cats.unshift(name)
}

function destructivelyRemoveLastCat(name) {
    cats.pop()
}

function destructivelyRemoveFirstCat(name) {
    cats.shift()
}

function appendCat(name) {
    const newCat = [...cats, name]
    return newCat
}

function prependCat(name) {
    const newCat = [name, ...cats]
    return newCat
}

function removeLastCat(name) {
    const newCat = [...cats.slice(0, cats.length -1)]
    return newCat
}

function removeFirstCat() {
    const newCat = [...cats.slice(1)]
    return newCat
}
