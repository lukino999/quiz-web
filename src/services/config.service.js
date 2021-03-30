angular.module("app").factory("ConfigService", [
    function () {
        var service = {};

        service.apiBase = "https://quiz-api-lm.qaalabs.com/";

        return service;
    },
]);
