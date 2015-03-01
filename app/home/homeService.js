var app = angular.module('theHomeLife')


app.service('homeService', function($http, $q) {

this.getData = function(userSearch) {

	return $http({
		method:'GET',
		url:'http://api.bigoven.com/recipes?title_kw=' + userSearch + '&pg=1&rpp=20&api_key=dvx51ehi7INBAt70is6nz04gOvJmD4lt'
	})
}

this.getRecipe = function(first, second, third, fourth, fifth, sixth) {
var arr = [first, second, third, fourth, fifth, sixth]
console.log(arr)
var recipeID = ''
var random =  Math.floor((Math.random() * arr.length) + 1);

// if (random === 1) {
// 	recipeID = arr[0]
// }
// if (random === 2) {
// 	recipeID = arr[1]
// }
// if (random === 3) {
// 	recipeID = arr[2]
// }
// if (random === 4) {
// 	recipeID = arr[3]
// }
// if (random === 5) {
// 	recipeID = arr[4]
// }
// if (random === 6) {
// 	recipeID = arr[5]
// }


	
	return $http({
		method:'GET',
		url:'http://api.bigoven.com/recipe/' + first + '?api_key=dvx51ehi7INBAt70is6nz04gOvJmD4lt'
	})
}


// this.postData = function(question, update) {

// 	return $http({
// 			method: 'POST',
// 			url: 'https://api.parse.com/1/classes/calendar',
// 			headers: {'X-Parse-Application-Id': 'pRfgUJczDp4fFaZFCPLbJJjsUHeKC40YqTnIdj9j', 'X-Parse-REST-API-Key': 'Gf8qX7hrh7fmKoIzcZMxw9CMrNf8y5ywVmzmofPv'},
// 			data: {text: question, status: 'red'}


// 		})

// 	}
  
  
// this.get = function() {

//   return $http({
//     method: 'GET',
//     url:'https://api.parse.com/1/classes/questions',
//     headers: {'X-Parse-Application-Id': 'sG69R7d7icgrIeq4NRXXYJelV6zMcGjXLsWzugYH', 'X-Parse-REST-API-Key': 'pSDp1DgeU2vcjraM5CJIuRSWH6XmJCpIgeIPcLWP'}
//   }).then(function(response) {

//   	console.log(response)
//   	return response;
//   })

// }



})