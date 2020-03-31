const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      for (let i in collection) {
        callback(collection[i]);
      }

    },

    map: function(collection, callback) {
      let newArr = []
      for (let i in collection) {
        newArr = [...newArr, callback(collection[i])];
      };
      return newArr;
    },

    reduce: function(collection, callback, [acc]) {
      for (let i = 0; i < collection.length; i++) {
        acc = callback(acc, collection[i], collection);
      }
      return acc;
      // for (let i in collection) {
      //   acc = callback(acc, collection[i], collection);
      // };
      // return acc;
    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
