
//#region concatAll added to array prototype
/**
 * returns []
 */
Array.prototype.concatAll = function concatAll(){

	const result = [];
	this.forEach(arr => {

		arr.forEach(item => {
			result.push(item);
		})
	});
	return result;
};

//console.log('[ [6,7] , [4, 5] ].concatAll' ,[ [6,7] , [4, 5] ].concatAll());
//#endregion

//#region concatAllDeep added to array prototype
//[ 1, [ [2, [6,7] ], [4, 5] ] ]
Array.prototype.concatAllDeep = function concatAllDeep(){

	let result = [];
	this.forEach(arr => {

		if(Array.isArray(arr)){

			result = result.concat(concatAllDeep.call(arr));
		}
		else {
			result.push(arr);
		}

	});

	return result;

}

//console.log('[ 1, [ [2, [6,7] ], [4, 5] ] ].concatAllDeep()',[ 1, [ [2, [6,7] ], [4, 5] ] ].concatAllDeep());
//#endregion

//#region concatAllLevels function taking array argument to flatten
function concatAllLevels(arrToBeFlattened) {
	let targetArr = [];


	if(Array.isArray(arrToBeFlattened)){

		arrToBeFlattened.forEach(arr => {

			if(Array.isArray(arr)) {
				targetArr = targetArr.concat(concatAllLevels(arr));
			}
			else {
				targetArr.push(arr);
			}			
		});
		
	}
	else {
		 targetArr.push(arrToBeFlattened);
	}
	return targetArr;
}
//console.log('concatAllLevels([ 1, [ [2, [6,7] ], [4, 5] ] ])', concatAllLevels([ 1, [ [2, [6,7] ], [4, 5] ] ]));

//#endregion


//#region http://reactivex.io/learnrx/ Exercise 3

// function exercise3() {
//  var newReleases = [
//      {
//          "id": 70111470,
//          "title": "Die Hard",
//          "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
//          "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
//          "rating": [4.0],
//          "bookmark": []
//      },
//      {
//          "id": 654356453,
//          "title": "Bad Boys",
//          "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
//          "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
//          "rating": [5.0],
//          "bookmark": [{ id: 432534, time: 65876586 }]
//      },
//      {
//          "id": 65432445,
//          "title": "The Chamber",
//          "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
//          "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
//          "rating": [4.0],
//          "bookmark": []
//      },
//      {
//          "id": 675465,
//          "title": "Fracture",
//          "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
//          "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
//          "rating": [5.0],
//          "bookmark": [{ id: 432534, time: 65876586 }]
//      }
//  ],
//  videoAndTitlePairs = [];

//  // ------------ INSERT CODE HERE! -----------------------------------
//  // Use forEach function to accumulate {id, title} pairs from each video.
//  // Put the results into the videoAndTitlePairs array using the Array's
//  // push() method. Example: videoAndTitlePairs.push(newItem);
//  // ------------ INSERT CODE HERE! -----------------------------------

//     newReleases.forEach(release => {

//         videoAndTitlePairs.push({ id : release.id
//, title : release.title});
//     });

//  return videoAndTitlePairs;
// }
        
// const videoAndTitlePairs = exercise3();
// videoAndTitlePairs.forEach( vtPair => {
//     console.log(vtPair);
// });
//#endregion

//#region http://reactivex.io/learnrx/ Exercise 4

// Array.prototype.map = function(projectionFunction) {
//  var results = [];
//  this.forEach(function(itemInArray) {

//      // ------------ INSERT CODE HERE! ----------------------------
//      // Apply the projectionFunction to each item in the array and add
//      // each result to the results array.
//      // Note: you can add items to an array with the push() method.
//      // ------------ INSERT CODE HERE! ----------------------------

//         results.push(projectionFunction(itemInArray));
//  });

//  return results; 
// };

//  console.log(JSON.stringify([1,2,3].map(function(x) { return x + 1; })) === '[2,3,4]');
        

//#endregion

//#region http://reactivex.io/learnrx/ Exercise 5

// function exercise5() {
//  var newReleases = [
//      {
//          "id": 70111470,
//          "title": "Die Hard",
//          "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
//          "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
//          "rating": [4.0],
//          "bookmark": []
//      },
//      {
//          "id": 654356453,
//          "title": "Bad Boys",
//          "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
//          "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
//          "rating": [5.0],
//          "bookmark": [{ id: 432534, time: 65876586 }]
//      },
//      {
//          "id": 65432445,
//          "title": "The Chamber",
//          "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
//          "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
//          "rating": [4.0],
//          "bookmark": []
//      },
//      {
//          "id": 675465,
//          "title": "Fracture",
//          "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
//          "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
//          "rating": [5.0],
//          "bookmark": [{ id: 432534, time: 65876586 }]
//      }
//  ];

//  // ------------ INSERT CODE HERE! -----------------------------------
//  // Use map function to accumulate {id, title} pairs from each video.
//  return newReleases.map( itemInReleases => ({ id : itemInReleases.id, title : itemInReleases.title })); // finish this expression!
    

// }

// console.log(exercise5());
        
//#endregion

//#region http://reactivex.io/learnrx/ Exercise 6

// function exercise6() {
//  var newReleases = [
//      {
//          "id": 70111470,
//          "title": "Die Hard",
//          "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
//          "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
//          "rating": 4.0,
//          "bookmark": []
//      },
//      {
//          "id": 654356453,
//          "title": "Bad Boys",
//          "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
//          "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
//          "rating": 5.0,
//          "bookmark": [{ id: 432534, time: 65876586 }]
//      },
//      {
//          "id": 65432445,
//          "title": "The Chamber",
//          "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
//          "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
//          "rating": 4.0,
//          "bookmark": []
//      },
//      {
//          "id": 675465,
//          "title": "Fracture",
//          "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
//          "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
//          "rating": 5.0,
//          "bookmark": [{ id: 432534, time: 65876586 }]
//      }
//  ],
//  videos = [];

//  // ------------ INSERT CODE HERE! -----------------------------------
//  // Use forEach function to accumulate every video with a rating of 5.0
//  // ------------ INSERT CODE HERE! -----------------------------------
//     newReleases.forEach(itemInNewReleases => { 
           
//         if(itemInNewReleases.rating === 5.0 )  {
//             videos.push(itemInNewReleases) ;
//         }

//     });

//  return videos;
// }

// console.log(exercise6());
        
//#endregion

//#region http://reactivex.io/learnrx/ Exercise 7

// Array.prototype.filter = function(predicateFunction) {
//  var results = [];
//  this.forEach(function(itemInArray) {
//      // ------------ INSERT CODE HERE! ----------------------------
//      // Apply the predicateFunction to each item in the array.
//      // If the result is truthy, add the item to the results array.
//      // Note: remember you can add items to the array using the array's
//      // push() method.
//         // ------------ INSERT CODE HERE! ----------------------------
//         if(predicateFunction(itemInArray)) {
//             results.push(itemInArray);
//         }
//  });

//  return results;
// };

// console.log(JSON.stringify([1,2,3].filter(function(x) { return x > 2}))) ;
        
//#endregion

//#region http://reactivex.io/learnrx/ Exercise 8

// function exercise8() {
//  var newReleases = [
//      {
//          "id": 70111470,
//          "title": "Die Hard",
//          "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
//          "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
//          "rating": 4.0,
//          "bookmark": []
//      },
//      {
//          "id": 654356453,
//          "title": "Bad Boys",
//          "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
//          "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
//          "rating": 5.0,
//          "bookmark": [{ id: 432534, time: 65876586 }]
//      },
//      {
//          "id": 65432445,
//          "title": "The Chamber",
//          "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
//          "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
//          "rating": 4.0,
//          "bookmark": []
//      },
//      {
//          "id": 675465,
//          "title": "Fracture",
//          "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
//          "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
//          "rating": 5.0,
//          "bookmark": [{ id: 432534, time: 65876586 }]
//      }
//  ];

//  // ------------ INSERT CODE HERE! -----------------------------------
//  // Chain the filter and map functions to select the id of all videos
//  // with a rating of 5.0.

//     return newReleases
//         .filter(itemInNewReleases => itemInNewReleases.rating === 5) // Complete this expression
//         .map(itemInFilteredList => itemInFilteredList.id);
//  // ------------ INSERT CODE HERE! -----------------------------------
// }
// console.log(exercise8());        

//#endregion

//#region http://reactivex.io/learnrx/ Exercise 9

// function exercise9() {
//  var movieLists = [
//      {
//          name: "New Releases",
//          videos: [
//              {
//                  "id": 70111470,
//                  "title": "Die Hard",
//                  "boxart": "
http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
//                  "uri": "
http://api.netflix.com/catalog/titles/movies/70111470",
//                  "rating": 4.0,
//                  "bookmark": []
//              },
//              {
//                  "id": 654356453,
//                  "title": "Bad Boys",
//                  "boxart": "
//http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
//                  "uri": "
//http://api.netflix.com/catalog/titles/movies/70111470",
//                  "rating": 5.0,
//                  "bookmark": [{ id: 432534, time: 65876586 }]
//              }
//          ]
//      },
//      {
//          name: "Dramas",
//          videos: [
//              {
//                  "id": 65432445,
//                  "title": "The Chamber",
//                  "boxart": "
//http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
//                  "uri": "
//http://api.netflix.com/catalog/titles/movies/70111470",
//                  "rating": 4.0,
//                  "bookmark": []
//              },
//              {
//                  "id": 675465,
//                  "title": "Fracture",
//                  "boxart": "
//http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
//                  "uri": "
//http://api.netflix.com/catalog/titles/movies/70111470",
//                  "rating": 5.0,
//                  "bookmark": [{ id: 432534, time: 65876586 }]
//              }
//          ]
//      }
//  ],
//  allVideoIdsInMovieLists = [];

//  // ------------   INSERT CODE HERE!  -----------------------------------
//  // Use two nested forEach loops to flatten the movieLists into a list of
//  // video ids.
//  // ------------   INSERT CODE HERE!  -----------------------------------
//     movieLists.forEach(movieList => {

//         movieList.videos.forEach(movie => {
//             allVideoIdsInMovieLists.push(movie.id);

//         });
//     });
//  return allVideoIdsInMovieLists;

// }
// console.log(exercise9());        
//#endregion

//#region http://reactivex.io/learnrx/ Exercise 10
// Array.prototype.concatAll = function() {
//     var results = [];
//     this.forEach(function(subArray) {
//         // ------------ INSERT CODE HERE! ----------------------------
//         // Add all the items in each subArray to the results array.
//         // ------------ INSERT CODE HERE! ----------------------------
//         subArray.forEach(itemInSubArray => {
//             results.push(itemInSubArray);
//         });
//     });

//     return results;
// };

// console.log(JSON.stringify([ [1,2,3], [4,5,6], [7,8,9] ].concatAll())) ;
// console.log([1,2,3].concatAll());// throws an error because this is a one-dimensional array

        

//#endregion

//#region http://reactivex.io/learnrx/ Exercise 11

// function exercise11() {
//  var movieLists = [
//          {
//              name: "New Releases",
//              videos: [
//                  {
//                      "id": 70111470,
//                      "title": "Die Hard",
//                      "boxart": "
//http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
//                      "uri": "
//http://api.netflix.com/catalog/titles/movies/70111470",
//                      "rating": 4.0,
//                      "bookmark": []
//                  },
//                  {
//                      "id": 654356453,
//                      "title": "Bad Boys",
//                      "boxart": "
//http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
//                      "uri": "
//http://api.netflix.com/catalog/titles/movies/70111470",
//                      "rating": 5.0,
//                      "bookmark": [{ id: 432534, time: 65876586 }]
//                  }
//              ]
//          },
//          {
//              name: "Dramas",
//              videos: [
//                  {
//                      "id": 65432445,
//                      "title": "The Chamber",
//                      "boxart": "
//http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
//                      "uri": "
//http://api.netflix.com/catalog/titles/movies/70111470",
//                      "rating": 4.0,
//                      "bookmark": []
//                  },
//                  {
//                      "id": 675465,
//                      "title": "Fracture",
//                      "boxart": "
//http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
//                      "uri": "
//http://api.netflix.com/catalog/titles/movies/70111470",
//                      "rating": 5.0,
//                      "bookmark": [{ id: 432534, time: 65876586 }]
//                  }
//              ]
//          }
//      ];

//  // ------------   INSERT CODE HERE!  -----------------------------------
//  // Use map and concatAll to flatten the movieLists in a list of video ids.
//  // ------------   INSERT CODE HERE!  -----------------------------------
    
//  return movieLists.map(movieList => movieList.videos).concatAll().map(movie => 
//movie.id); // Complete this expression!

// }

// console.log(exercise11());
        
//#endregion

//#region exercise12
function exercise12() {
	var movieLists = [
			{
				name: "Instant Queue",
				videos : [
					{
						"id": 70111470,
						"title": "Die Hard",
						"boxarts": [
							{ width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" },
							{ width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/DieHard200.jpg" }
						],
						"url": "http://api.netflix.com/catalog/titles/movies/70111470",
						"rating": 4.0,
						"bookmark": []
					},
					{
						"id": 654356453,
						"title": "Bad Boys",
						"boxarts": [
							{ width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg" },
							{ width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg" }

						],
						"url": "http://api.netflix.com/catalog/titles/movies/70111470",
						"rating": 5.0,
						"bookmark": [{ id: 432534, time: 65876586 }]
					}
				]
			},
			{
				name: "New Releases",
				videos: [
					{
						"id": 65432445,
						"title": "The Chamber",
						"boxarts": [
							{ width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg" },
							{ width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg" }
						],
						"url": "http://api.netflix.com/catalog/titles/movies/70111470",
						"rating": 4.0,
						"bookmark": []
					},
					{
						"id": 675465,
						"title": "Fracture",
						"boxarts": [
							{ width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
							{ width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
							{ width: 300, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" }
						],
						"url": "http://api.netflix.com/catalog/titles/movies/70111470",
						"rating": 5.0,
						"bookmark": [{ id: 432534, time: 65876586 }]
					}
				]
			}
		];

	return movieLists.map(

		movieList =>
			movieList.videos.map(

				video => video.boxarts.map(

					boxart => {

						return ({
							id : video.id,
							title : video.title,
							boxart : boxart
						})
					}
					
				)
			)
	)
	.concatAll()
	.concatAll()
	.filter(movie => movie.boxart.width === 150)
	.map(movie => {
		return ({
			id: movie.id,
			title: movie.title,
			boxart : movie.boxart.url
		});
	});
		
}

console.log(exercise12());

//#endregion 

//#region exercise13
//#endregion

//#region exercise13
//#endregion

//#region exercise13
//#endregion

//#region exercise13
//#endregion

//#region exercise13
//#endregion

//#region exercise13
//#endregion

//#region exercise13
//#endregion

//#region exercise13
//#endregion

//#region exercise13
//#endregion

//#region exercise13
//#endregion

//#region exercise13
//#endregion