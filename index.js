// Code your solution in this file

function findMatching(drivers, string) {
  return drivers.filter(function (name) {
    return string.toLowerCase() === name.toLowerCase();
  })
}

function fuzzyMatch (drivers, letter) {
  return drivers.filter(function (name) {
    return letter[0].toLowerCase() === name[0].toLowerCase();
  })
}

function matchName (drivers, string) {
  return drivers.filter(function (driver) {
    return string.toLowerCase() === driver.name.toLowerCase();
  })
}
