let numbers = [1, 3, 12, 90, 3, 12, 100]
let itemRepeatObject = numbers.reduce((obj, currentItem) => {
    return {...obj, [currentItem]: (obj[currentItem] || 0) + 1}
}, {})
sa

dfasdf
console.log(itemRepeatObject);

