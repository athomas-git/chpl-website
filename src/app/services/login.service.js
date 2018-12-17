(function () {
    'use strict';

    angular.module('chpl.services')
        .factory('authService', authService);

    /** @ngInclude */
    function authService ($localStorage, $log, $window, API_KEY) {
        var service = {
            getApiKey: getApiKey,
            getFullname: getFullname,
            getToken: getToken,
            getUsername: getUsername,
            hasAnyRole: hasAnyRole,
            isAcbAdmin: isAcbAdmin,
            isAtlAdmin: isAtlAdmin,
            isChplAdmin: isChplAdmin,
            isCmsStaff: isCmsStaff,
            isOncStaff: isOncStaff,
            logout: logout,
            parseJwt: parseJwt,
            saveToken: saveToken,
        }
        return service;

        ////////////////////////////////////////////////////////////////////////

        function getApiKey () {
            return API_KEY;
        }

        function getFullname () {
            if (hasAnyRole()) {
                var token = getToken();
                var identity = parseJwt(token).Identity;
                return identity[2];
            } else {
                logout();
                return '';
            }
        }

        function getToken () {
            return $localStorage.jwtToken;
        }

        function getUsername () {
            if (hasAnyRole()) {
                var token = getToken();
                var identity = parseJwt(token).Identity;
                return identity[1];
            } else {
                logout();
                return '';
            }
        }

        function hasAnyRole (roles) {
            var token = getToken();
            if (token) {
                let userRoles = parseJwt(token).Authorities;
                if (roles) {
                    if (userRoles) {
                        return roles.reduce((ret, role) => ret || (userRoles.indexOf(role) > -1), false); // true iff user has at least one role in the required list
                    }
                    return false; // logged in, role(s) required, user has no roles
                }
                return true; // logged in, no role required
            }
            return false; // not logged in
        }

        function isAcbAdmin () {
            var token = getToken();
            if (token) {
                var authorities = parseJwt(token).Authorities;
                if (authorities) {
                    return authorities.indexOf('ROLE_ACB') > -1
                }
            }
            return false;
        }

        function isAtlAdmin () {
            var token = getToken();
            if (token) {
                var authorities = parseJwt(token).Authorities;
                if (authorities) {
                    return authorities.indexOf('ROLE_ATL') > -1
                }
            }
            return false;
        }

        function isChplAdmin () {
            var token = getToken();
            if (token) {
                var authorities = parseJwt(token).Authorities;
                if (authorities) {
                    return authorities.indexOf('ROLE_ADMIN') > -1
                }
            }
            return false;
        }

        function isCmsStaff () {
            var token = getToken();
            if (token) {
                var authorities = parseJwt(token).Authorities;
                if (authorities) {
                    return authorities.indexOf('ROLE_CMS_STAFF') > -1
                }
            }
            return false;
        }

        function isOncStaff () {
            var token = getToken();
            if (token) {
                var authorities = parseJwt(token).Authorities;
                if (authorities) {
                    return authorities.indexOf('ROLE_ONC_STAFF') > -1
                }
            }
            return false;
        }

        function logout () {
            delete $localStorage.jwtToken;
        }

        function parseJwt (token) {
            if (angular.isString(token)) {
                var vals = token.split('.');
                if (vals.length > 1) {
                    var base64 = vals[1].replace('-','+').replace('_','/');
                    return angular.fromJson($window.atob(base64));
                }
                return {};
            }
        }

        function saveToken (token) {
            $localStorage.jwtToken = token;
        }
    }
})();
