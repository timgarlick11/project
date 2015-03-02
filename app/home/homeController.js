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
	// var fourth = result.data.Results[3].RecipeID;
	// var fifth = result.data.Results[4].RecipeID;
	// var sixth = result.data.Results[5].RecipeID;

	homeService.getRecipe(first).then(function(firstRecipe) {
		console.log(firstRecipe)
		$scope.firstIngredients= firstRecipe.data.Ingredients;
		$scope.firstInstructions = firstRecipe.data.Instructions;
		$scope.firstImage = firstRecipe.data.ImageURL;
		$scope.firstServings = firstRecipe.data.YieldNumber;
		$scope.firstTime = firstRecipe.data.TotalMinutes;

		var firstTime = firstRecipe.data.TotalMinutes;
		if(firstTime === 0) {
			Time = 'variable'
			$scope.fTime = Time;
		} else {$scope.fTime = firstTime}

		
		$scope.firstTitle = firstRecipe.data.Title;
		$scope.firstReviews = firstRecipe.data.ReviewCount;
		$scope.firstStarRating = firstRecipe.data.StarRating;
		// homeService.get().then(function(response) {

		// })
	})


	homeService.getRecipe(second).then(function(secondRecipe){

		console.log(secondRecipe)
		$scope.secondIngredients= secondRecipe.data.Ingredients;
		$scope.secondInstructions = secondRecipe.data.Instructions;
		$scope.secondImage = secondRecipe.data.ImageURL;
		$scope.secondServings = secondRecipe.data.YieldNumber;
		$scope.secondTime = secondRecipe.data.TotalMinutes;

		// var Time = secondRecipe.data.TotalMinutes;
		
		// if(Time === -1) {
		// 	Time = 'variable'
		// 	$scope.secondTime = Time;
		// } else { $scope.secondTime = 'poop'}
		
		// $scope.secondTime = Time;
		$scope.secondTitle = secondRecipe.data.Title;
		$scope.secondReviews = secondRecipe.data.ReviewCount;
		$scope.secondStarRating = secondRecipe.data.StarRating;
	})

})


}

 
})
