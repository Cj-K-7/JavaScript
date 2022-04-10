function hashStoringToInt(string, tableSize) {
  let hash = 17;
  for (let index = 0; index < string.length; index++) {
    hash = (13 * hash * string.chartCodeAt(index)) % tableSize;
  }
  return hash;
}

class HashTable {
  table = new Array(17);
  setItem = (key, value) => {
    const idx = hashStoringToInt(key, this.table.length);
    this.table[idx] = value;
  };
  getItem = (key) => {
    const idx = hashStoringToInt(key, this.table.length);
    return this.table[idx];
  };
}
