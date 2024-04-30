
angular.module("app",[])
.controller("controller",function  ($scope){
    $scope.itemsArray= [];
    $scope.submit=function(){
    //    let items= JSON.parse(localStorage.getItem("item-array")) || [];
    //    console.log("items ",items)
    //    items.push($scope.itemName);
    //    localStorage.setItem("item-array",JSON.stringify(items))
      if($scope.itemsArray.indexOf($scope.itemName)==-1){
               $scope.itemsArray.push($scope.itemName);
               $scope.itemName="";
               $scope.error=false;
      }else $scope.error=true;

    }
    $scope.deleteItem=function(x){
      $scope.itemsArray.splice(x,1);
      console.log($scope.itemsArray)
    }
  

})

