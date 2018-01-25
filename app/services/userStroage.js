(function () {
    var Adbapp = angular.module('abpib');

    Adbapp.service('userStroage', function ($location) {
        this.set = function (key, value) {
            if (typeof value == 'object') {
                window.localStorage[key] = JSON.stringify(value);
            } else {
                window.localStorage[key] = value;
            }
        };
        this.get = function (key) {
            var ret = window.localStorage[key];
            if (ret) {
                try {
                    return JSON.parse(ret);
                } catch (err) {
                    return ret;
                }
            }
            return null;
        };
        this.remove = function (key) {
            delete window.localStorage[key];
        };
        this.removeoldpath = function () {
            this.remove('token');
            this.remove('colorConfig');
            this.remove('rs');
            this.remove('patient');
            this.remove('proc');
            this.remove('savedTpl');
            this.remove('templateList');
            this.remove('tools');
            this.remove('p')
            this.remove('components');

        };
        this.removeSelectedPatient = function () {
            this.remove('selectedPatient');
        };

        this.user = function (value) {
            if (value) {
                this.set('user', value);
            }
            // console.log(this.get('user'),"sdffffffffff");
            return this.get('user');
        };

        this.token = function (value) {
            if (value) {
                window.localStorage['token'] = value;
            }
            return window.localStorage['token'];
        };

        this.hasLoggedIn = function () {
            return this.user() != null;

        };

        this.login = function (userObj) {
            this.user(userObj)
        }

        this.logoutUser = function () {
            if (this.user() != null && this.user() != undefined) {
                this.set('lu', this.user().userId);
            }
            this.remove('user');
            this.remove('colorConfig');
            this.remove('patient');
            this.remove('proc');
            this.remove('savedTpl');
            this.remove('templateList');
            this.remove('tools');
            this.remove('components');
            this.remove('token');
            this.remove('p');
            this.remove('rs');
        };

        this.prefs = function (type, data) {
            if (data) {
                this.set(type, data);
            }
            return this.get(type);
        }

    })
})();
