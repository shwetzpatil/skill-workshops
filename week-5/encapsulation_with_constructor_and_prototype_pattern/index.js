//copy to browser and see web dev   console file:///Users/shwetapatil/Desktop/skills-workshops/week-5/encapsulation_with_constructor_and_prototype_pattern/index.html

// console.log("hello!");

// Question 1

// // How does the printed output of the program change if you rename
// // CountModel to countmodel (everywhere it appears)?

// function countmodel() {
//   this._count = 0;
// };

// countmodel.prototype.count = function() {
//   return this._count;
// };

// countmodel.prototype.set = function(count) {
//   this._count = count;
// };

// var countmodel = new countmodel();
// countmodel.set(9);
// console.log("count is", countmodel.count());


// question 2

// function CountModel() {
//   this._count = 0;
// };

// CountModel.prototype.count = function() {
//   return this._count;
// };

// // How does the printed output of the program change if you rename
// // `set` to `_set` (and change `countModel.set(5)` below to
// // `countModel._set(5)`)?
// CountModel.prototype._set = function(count) {
//   this._count = count;
// };

// var countModel = new CountModel();
// // countModel.set(5);
// countModel._set(5);
// console.log("count is", countModel.count());


//question 3

// function CountModel() {
//   this._count = 0;

//   // How does the printed output of the program change if you
//   // uncomment the line below? Why does this happen?

//   // return {};
// };

// CountModel.prototype.count = function() {
//   return this._count;
// };

// CountModel.prototype.set = function(count) {
//   this._count = count;
// }

// var countModel = new CountModel();
// countModel.set(5);
// console.log("count is", countModel.count());


// Question 4

// function CountModel() {
//   this._count = 0;
// };

// CountModel.prototype.count = function() {
//   return this._count;
// };

// CountModel.prototype.set = function(count) {
//   this._count = count;
// };

// var countModel = new CountModel();

// // How does the printed output of the program change if you add this
// // code? Why?
// // countModel.set = function() {
// //   return "hello";
// // };

// console.log(countModel.set(5));

// countModel.set = function() {
//   return "hello";
// };

// console.log(countModel.set());

// console.log("count is", countModel.count());

// // // Question 5
// function CountModel() {
//   this._count = 0;
// };

// CountModel.prototype.count = function() {
//   return this._count;
// };

// CountModel.prototype.set = function(count) {
//   this._count = count;
// };

// var countModel = new CountModel();
// countModel.set(5);
// console.log("count is", countModel.count());

// // Bonus research project. Can you find the property name below that
// // makes the statement print out `true`?
// //console.log(countModel["REPLACE_ME"] === CountModel.prototype);
// console.log(CountModel.prototype)
// console.log(countModel["__proto__"] === CountModel.prototype);


//  //User stories shepherd

function Pen(){
  this.sheepies = [];

  this.herd = function(sheep) {
    this.sheepies.push(sheep)
    return 'herded'
  }
}

// Pen.prototype.herd = function(sheep) {
//   this.sheepies.push(sheep)
//   return 'herded'
// }


Pen. prototype.list = function() {
  this.sheepies.forEach(function(sheep){
    console.log(sheep.name)
  })
}


function Sheep(name) {
  this.name = name
}

pen = new Pen();
sheep1 = new Sheep('one');
sheep2 = new Sheep('two');

pen.herd(sheep1)
pen.herd(sheep2)

pen.list()