'use strict';

/* Controllers */

angular.module('adminConsole.controllers.V2VideoAuditLoggingControllers', ['adminConsole.services'])

  .controller('V2VideoAuditLoggingListController', ['$scope', '$location', '$route', '$log', 'Utilities', 'V2VideoAuditLogging', 'httpErrorHandler', 'pagination', function($scope, $location, $route, $log, Utilities, V2VideoAuditLogging, httpErrorHandler, pagination) {
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

  .controller('V2VideoAuditLoggingDetailController', ['$scope', '$location', '$log', '$routeParams', 'Utilities', 'V2VideoAuditLogging', 'httpErrorHandler', function($scope, $location, $log, $routeParams, Utilities, V2VideoAuditLogging, httpErrorHandler) {
    $scope.linkClass = Utilities.linkClass;
    $scope.objectId = $routeParams.objectId;

    V2VideoAuditLogging.get({id: $routeParams.objectId}).$promise
      .then(function(val) {
        $scope.instance = val;
      })
      .catch(httpErrorHandler($scope));
  }])

  .controller('V2VideoAuditLoggingCreateController', ['$scope', '$location', '$log', '$routeParams', 'Utilities', 'V2VideoAuditLogging', 'httpErrorHandler', '$http', function($scope, $location, $log, $routeParams, Utilities, V2VideoAuditLogging, httpErrorHandler, $http) {
    $scope.linkClass = Utilities.linkClass;
    $scope.instance = {};
    $scope.loading = false;

    $scope.submit = function(instance) {
      $scope.loading = true;
      var fd = new FormData();
      for (var key in instance) {
        if (instance[key] !== undefined) fd.append(key, instance[key]);
      }
      $http.post("/api/v2/video_audit_loggings", fd, {
          transformRequest: function(data) { return data; },
          headers: {'Content-Type': undefined}
        })
        .success(function(d) {
          $scope.loading = false;
          $location.path('video_audit_loggings/' + d.id);
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

  .controller('V2VideoAuditLoggingEditController', ['$scope', '$location', '$log', '$routeParams', 'Utilities', 'V2VideoAuditLogging', 'httpErrorHandler', '$http', function($scope, $location, $log, $routeParams, Utilities, V2VideoAuditLogging, httpErrorHandler, $http) {
    $scope.linkClass = Utilities.linkClass;
    $scope.objectId = $routeParams.objectId;
    $scope.loading = false;

    V2VideoAuditLogging.get({id: $routeParams.objectId}).$promise
      .then(function(val) {
        $scope.instance = val;
      })
      .catch(httpErrorHandler($scope));

    $scope.submit = function(instance) {
      var fd = new FormData();
      for (var key in instance) {
        if (instance[key] !== undefined) fd.append(key, instance[key]);
      }
      $http.put("/api/v2/video_audit_loggings/"+instance.id, fd, {
          transformRequest: function(data) { return data; },
          headers: {'Content-Type': undefined}
        })
        .success(function(d) {
          $scope.loading = false;
          $location.path('video_audit_loggings/' + instance.id);
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