var app = angular.module('theHomeLife')

app.controller('homeController', function($scope, homeService) {


$scope.submitQuery = function() {

homeService.getData($scope.searchRecipe).then(function(result){

	console.log(result)
	// $scope.image = result.data.Results[0].ImageURL120
	$scope.searchRecipe = '';
	var first = result.data.Results[0].RecipeID;
	var second = result.data.Results[1].RecipeID;
	var third = result.data.Results[2].RecipeID;
	var fourth = result.data.Results[3].RecipeID;
	var fifth = result.data.Results[4].RecipeID;
	var sixth = result.data.Results[5].RecipeID;

	homeService.getRecipe(first, second, third, fourth, fifth, sixth).then(function(recipe) {
		$scope.food= recipe.data.Ingredients;
		$scope.instructions = recipe.data.Instructions;
		$scope.image = recipe.data.ImageURL
		$scope.servings = recipe.data.YieldNumber;
		$scope.time = recipe.data.TotalMinutes;
		$scope.title = recipe.data.Title
		$scope.reviews = recipe.data.ReviewCount
		$scope.starRating = recipe.data.StarRating
console.log(recipe)
		homeService.get().then(function(response) {

			console.log(response)
		})
	})


})
}


})
