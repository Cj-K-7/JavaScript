//Set is object that store values as a unique;
//argumet must be iterators array []

/*
The specification requires sets to be implemented "that, on average,
provide access times that are sublinear on the number of elements in the collection".
Therefore, it could be represented internally as a hash table (with O(1) lookup),
a search tree (with O(log(N)) lookup), or any other data structure, as long as the complexity is better than O(N).
 */
const mySet = new Set([1, 2]);
console.log(mySet);

//add deleted and check
mySet.add(56);
mySet.delete(56);
mySet.has(56);

//how about referencing data
const o = { a: 1, b: 2 };

mySet.add(o);
console.log(mySet);
//if same obeject(same referenced data)
mySet.add(o);
console.log(mySet);
// and just same value but not same referenced
mySet.add({ a: 1, b: 2 });
console.log(mySet);

//converting
console.log([...mySet]);

for (const item of mySet) {
  console.log(item);
}

for (const item of mySet.keys()) {
  console.log(item);
}

for (const item of mySet.values()) {
  console.log(item);
}

for (const item of mySet.entries()) {
  console.log(item);
}
