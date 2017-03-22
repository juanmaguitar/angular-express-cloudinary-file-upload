(function() {

  angular.module('myApp')
    .controller('MainController', MainController);

  function MainController( $scope, Upload ) {

    $scope.fileSelected = (files) => {
      if (files && files.length) {
        $scope.file = files[0];
      }
    }

    $scope.uploadFile = function() {
      const url = '/upload'
      const file = $scope.file

      // show spinning when uploading
      $scope.uploading = true;
      document.querySelector('.preview').onload = () => {
        $scope.$apply( () => $scope.uploading = false )
      }

      Upload.upload({ url, file })
        .success( ({imageLink}) => $scope.imageLink = imageLink )
        //.progress( console.log )
    }

  }

})()