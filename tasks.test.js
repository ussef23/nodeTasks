const { filterByStr, addCountToTitle } = require('./tasks.js')
const { animals, list } = require('./data.js')

test('Should display only animals containing `ry`', () => {
  const filtredList = filterByStr(animals, 'ry')
  expect(filtredList).toEqual([
    {
      name: 'John Dory'
    }
  ])
})

test('Shoud count the number of children and appending it in the name', () => {
  const displayedList = addCountToTitle(list)
  expect(displayedList).toEqual([{
    name: 'Dillauti [1]',
    people:
      [{
        name: 'Winifred Graham [6]',
        animals:
          [{ name: 'Anoa' },
          { name: 'Duck' },
          { name: 'Narwhal' },
          { name: 'Badger' },
          { name: 'Cobra' },
          { name: 'Crow' }]
      }]
  }])
})