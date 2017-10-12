'use strict';

/* Controllers */

angular.module('adminConsole.controllers.V1SurveyQuestionSkipLogicControllers', ['adminConsole.services'])

  .controller('V1SurveyQuestionSkipLogicListController', ['$scope', '$location', '$route', '$log', 'Utilities', 'V1SurveyQuestionSkipLogic', 'httpErrorHandler', 'pagination', function($scope, $location, $route, $log, Utilities, V1SurveyQuestionSkipLogic, httpErrorHandler, pagination) {
    $scope.error = false;
    $scope.errorMessage = null;
    $scope.linkClass = Utilities.linkClass;
    $scope.instances = pagination.instances;
    $scope.pagination = pagination;

    $scope.destroy = function(instance) {
      if(confirm('Are you sure?')) {
        instance.$delete()
          .then(function(val) {
            $scope.pagination.refresh();
            $route.reload();
          })
          .catch(httpErrorHandler($scope));
      }
    };

    // If browsing away from current model, clear the pagination cache.
    $scope.$on('$routeChangeStart', function(event, current, previous){
      if (current.originalPath !== previous.originalPath) pagination.clearCache();
    });
  }])

  .controller('V1SurveyQuestionSkipLogicDetailController', ['$scope', '$location', '$log', '$routeParams', 'Utilities', 'V1SurveyQuestionSkipLogic', 'httpErrorHandler', function($scope, $location, $log, $routeParams, Utilities, V1SurveyQuestionSkipLogic, httpErrorHandler) {
    $scope.linkClass = Utilities.linkClass;
    $scope.objectId = $routeParams.objectId;

    V1SurveyQuestionSkipLogic.get({id: $routeParams.objectId}).$promise
      .then(function(val) {
        $scope.instance = val;
      })
      .catch(httpErrorHandler($scope));
  }])

  .controller('V1SurveyQuestionSkipLogicCreateController', ['$scope', '$location', '$log', '$routeParams', 'Utilities', 'V1SurveyQuestionSkipLogic', 'httpErrorHandler', '$http', function($scope, $location, $log, $routeParams, Utilities, V1SurveyQuestionSkipLogic, httpErrorHandler, $http) {
    $scope.linkClass = Utilities.linkClass;
    $scope.instance = {};
    $scope.loading = false;

    $scope.submit = function(instance) {
      $scope.loading = true;
      var fd = new FormData();
      for (var key in instance) {
        if (instance[key] !== undefined) fd.append(key, instance[key]);
      }
      $http.post("/api/v1/survey_question_skip_logics", fd, {
          transformRequest: function(data) { return data; },
          headers: {'Content-Type': undefined}
        })
        .success(function(d) {
          $scope.loading = false;
          $location.path('survey_question_skip_logics/' + d.id);
        })
        .error(httpErrorHandler($scope));
    };

    $scope.newHashKeys = {};
    $scope.newHashValues = {};

    $scope.addKey = function(attr) {
      if(attr && $scope.newHashKeys[attr]) {
        var key = $scope.newHashKeys[attr];
        var value = $scope.newHashValues[attr];
        if($scope.instance[attr] === undefined) $scope.instance[attr] = {};
        if($scope.instance[attr][key] === undefined) {
          $scope.instance[attr][key] = value;
        }
      }
    };

    $scope.deleteHashKey = function(attr, key) {
      if($scope.instance[attr] && $scope.instance[attr][key]) {
        delete $scope.instance[attr][key];
      }
    };

    $scope.addToken = function(attr, value){
      if(!$scope.instance) $scope.instance = {};
      if(!$scope.instance[attr]) $scope.instance[attr] = [];
      $scope.instance[attr].push(value);
      this.value = null;
    };

    $scope.removeToken = function (attr, value) {
      var arr = $scope.instance[attr];
      for (var i in arr) {
        if (arr[i] == value) {
          arr.splice(i, 1);
          break;
        }
      }
    }
  }])

  .controller('V1SurveyQuestionSkipLogicEditController', ['$scope', '$location', '$log', '$routeParams', 'Utilities', 'V1SurveyQuestionSkipLogic', 'httpErrorHandler', '$http', function($scope, $location, $log, $routeParams, Utilities, V1SurveyQuestionSkipLogic, httpErrorHandler, $http) {
    $scope.linkClass = Utilities.linkClass;
    $scope.objectId = $routeParams.objectId;
    $scope.loading = false;

    V1SurveyQuestionSkipLogic.get({id: $routeParams.objectId}).$promise
      .then(function(val) {
        $scope.instance = val;
      })
      .catch(httpErrorHandler($scope));

    $scope.submit = function(instance) {
      var fd = new FormData();
      for (var key in instance) {
        if (instance[key] !== undefined) fd.append(key, instance[key]);
      }
      $http.put("/api/v1/survey_question_skip_logics/"+instance.id, fd, {
          transformRequest: function(data) { return data; },
          headers: {'Content-Type': undefined}
        })
        .success(function(d) {
          $scope.loading = false;
          $location.path('survey_question_skip_logics/' + instance.id);
        })
        .error(httpErrorHandler($scope));
    };

    $scope.newHashKeys = {};
    $scope.newHashValues = {};

    $scope.addKey = function(attr) {
      if(attr && $scope.newHashKeys[attr]) {
        var key = $scope.newHashKeys[attr];
        var value = $scope.newHashValues[attr];
        if($scope.instance[attr] === undefined) $scope.instance[attr] = {};
        if($scope.instance[attr][key] === undefined) {
          $scope.instance[attr][key] = value;
        }
      }
    };

    $scope.deleteHashKey = function(attr, key) {
      if($scope.instance[attr] && $scope.instance[attr][key]) {
        delete $scope.instance[attr][key];
      }
    };

    $scope.addToken = function(attr, value){
      if(!$scope.instance) $scope.instance = {};
      if(!$scope.instance[attr]) $scope.instance[attr] = [];
      $scope.instance[attr].push(value);
      this.value = null;
    };

    $scope.removeToken = function (attr, value) {
      var arr = $scope.instance[attr];
      for (var i in arr) {
        if (arr[i] == value) {
          arr.splice(i, 1);
          break;
        }
      }
    }
  }]);