/* eslint-disable */
const _api_data = [
  {
    'artist': 'John Frederick Kensett',
    'lifespan': '1816-1872',
    'title': 'Almy Pond, Newport',
    'year': '1857',
    'medium': 'Oil on canvas.',
    'dimensions': '12 5/8 x 28 1/4 in. (32.1 x 56.2 cm)',
    'credit': 'Terra Foundation for American Art, Daniel J. Terra Collection',
    'object_number': '1987.13',
    'IIIF-UUID': 'a006652c-37ab-4eec-9ec9-856020290bb5'
  },
  {
    'artist': 'Samuel Morris',
    'lifespan': '1916-1871',
    'title': 'Gallery of the Louvre',
    'year': '1876',
    'medium': 'Oil on canvas.',
    'dimensions': '11 5/8 x 30 1/4 in. (35.1 x 56.2 cm)',
    'credit': 'Terra Foundation for American Art, Daniel J. Terra Collection',
    'object_number': '1987.31',
    'IIIF-UUID': '95104aa1-7a83-4666-a113-0623ec152d91'
  }
]

export const getObject = function (catalog_id, cb) {
  var responseData = _api_data.filter(obj => {
    return obj.object_number === catalog_id
  })

  setTimeout(() => {
    cb(responseData[0])
  }, 500)
}

