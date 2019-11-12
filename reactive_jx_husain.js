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