/* eslint-disable no-unused-vars */
const city = 'New York'
/* eslint-disable no-unused-vars */
const cityStr = 'City'
/* eslint-disable no-unused-vars */
const shoppingList = 'apples, bananas, oranges, grapes'

// TODO get the INDEX of the character where 'York' word is found in the city variable
const cityIndex = city.indexOf('York')

// TODO - get the substring "York" from the city variable
const citySubstring = city.substring(4)

// TODO = replace 'York' with 'Delhi'
const cityReplaced = city.replace('York', 'Delhi')

// TODO - check if city starts with 'New' and ends with 'York'
const cityStartsWith = city.startsWith('New')
const cityEndsWith = city.endsWith('York')

// TODO - split the shopping list into an array of items without spaces
// hint (you might want to replace first, then split)
const shoppingListArray = shoppingList.replace(/\s/g, '').split(',')

// TODO - concatenate two strings using the `${var}` syntax
// make cityStrConcat equal to 'New York City'
const cityStrConcat = `${city} ${cityStr}`

module.exports = {
  cityIndex,
  citySubstring,
  cityReplaced,
  cityStartsWith,
  cityEndsWith,
  shoppingListArray,
  cityStrConcat
}
