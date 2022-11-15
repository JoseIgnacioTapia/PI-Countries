export function sortByName(order, array) {
  if (order === 'asc') {
    return array.sort((a, b) => a.name.localeCompare(b.name, 'en'));
  }
  if (order === 'dsc') {
    return array.sort((a, b) => b.name.localeCompare(a.name, 'en'));
  }
}

export function sortByPopulation(order, array) {
  if (order === 'asc') {
    return array.sort((a, b) => a.population - b.population);
  }
  if (order === 'dsc') {
    return array.sort((a, b) => b.population - a.population);
  }
}
