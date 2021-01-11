const { data } = require('./data.js')

const filterByStr = (array, str) => {
    return array.filter((item) => item.name.includes(str))
}

const filterData = str => {
    let filtredData = []

    data.forEach((country) => {
        let addCountry = false
        let people = []
        country.people.forEach((item) => {
            const animals = filterByStr(item.animals, str)
            if (animals.length > 0) {
                addCountry = true
                people = [...people, { name: item.name, animals }]
            }
        })
        if (addCountry)
            filtredData = [...filtredData, { name: country.name, people }]
    })

    console.log(JSON.stringify(filtredData))
}

const addCountToTitle = (outputData) => {

    outputData.forEach((country) => {
        country.name = `${country.name} [${country.people.length}]`
        country.people.forEach((item) => {
            item.name = `${item.name} [${item.animals.length}]`
        })
    })

    return outputData
}

const count = () => {
    const outputData = addCountToTitle(data)

    console.log(JSON.stringify(outputData))
}


module.exports = {
    filterData,
    count,
    filterByStr,
    addCountToTitle
}