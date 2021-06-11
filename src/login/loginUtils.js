// will return true if object contains {isValid} is true and {isBanned} is false
export const isDefined = (val) => typeof val !== 'undefined' && val !== null

// // example
// export const canLogin = (obj = null) => {
//   if (!obj) {
//     return false;
//   }

//   const { isValid, isBanned } = obj;

//   return isDefined(isValid) && isValid && isDefined(isBanned) && !isBanned;
// };

export const canLogin = (obj = null) => {
  if (!obj) {
    return false
  }

  const { isValid, isBanned } = obj

  return (
    (isValid === true || isValid === 1) &&
    (isBanned === false || isBanned === 0)
  )
}

////////////////////////////////////////
// ARRAY LOOPS

const legalDrinkingAge = 19

const customers = [
  {
    name: 'Tom',
    age: 17,
  },
  {
    name: 'Abdul',
    age: 19,
  },
  {
    name: 'Betty',
    age: 18,
  },
  {
    name: 'Jose',
    age: 20,
  },
  {
    name: 'Tan',
    age: 101,
  },
  {
    name: 'Stan',
    age: 33,
  },
  {
    name: 'Igor',
    age: 18,
  },
  {
    name: 'Cathy',
    age: 69,
  },
]

const areAllDrinkingOver = (client) => {
  return client.every(({ age }) => {
    return age >= legalDrinkingAge
  })
}

areAllDrinkingOver(customers)

////////////////////////////////

const areAnyOfDrinkingAge = (client) => {
  return client.some(({ age }) => {
    return age >= legalDrinkingAge
  })
}

console.log(areAnyOfDrinkingAge(customers))

////////////////////////////////

const findFirstOfLegalDrinkingAge = (client) => {
  return client.find(({ age }) => {
    return age >= legalDrinkingAge
  })
}

console.log(findFirstOfLegalDrinkingAge(customers))

////////////////////////////////

const filterOutUnderage = (client) => {
  return client.filter(({ age }) => {
    return age >= legalDrinkingAge
  })
}

console.log(filterOutUnderage(customers))

////////////////////////////////

const initializeAllLegalDrinkingAge = (client) => {
  // const totalAge = client.reduce((acc, { age }) => {
  //   return acc + age;
  // }, 0);
  // const numberOfClients = client.length;
  // const averageAge = totalAge / numberOfClients;

  // return averageAge;

  return (
    client.reduce((acc, { age }) => {
      return acc + age
    }, 0) / client.length
  )
}

console.log(initializeAllLegalDrinkingAge(customers))

////////////////////////////////

const mapNewClients = (client) => {
  return client.map((currentObject) => {
    return { ...currentObject, new: true }
  })
}

console.log(mapNewClients(customers))

// add unit tests for of these functions
// remember you have to export each function and import them in the test file
// exactly like we did for the {canLogin} function
