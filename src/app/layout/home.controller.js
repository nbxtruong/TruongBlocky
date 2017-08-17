/*
 * Copyright © 2016-2017 The Blocky Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


/* eslint-disable import/no-unresolved, import/default */


/* eslint-enable import/no-unresolved, import/default */

/* eslint-disable angular/angularelement */
import addLoginTemplate from './login.tpl.html'
import addLogoutTemplate from './logout.tpl.html'

/*@ngInject*/
export default function HomeController($scope, $mdDialog, $log, $document, $window, $state) {
    var vm = this

    vm.username
    vm.password
    vm.loginStatus = true
    vm.loginParam = 'Login'
    vm.codingLab = 'codingLab'
    vm.dashBoard = 'dashBoard'
    vm.examples = 'examples'
    vm.community = 'community'

    vm.userMenulistOption = userMenulistOption
    vm.userLogin = userLogin
    vm.userLogout = userLogout
    vm.navibarSelect = navibarSelect

    // vm.domain = "http://172.16.3.112:3000"

    vm.userMenu = [{
        name: "Profile",
        icon: "perm_contact_calendar"
    }, {
        name: "Logout",
        icon: "logout"
    }]

    function navibarSelect(params) {
        if (params === "codingLab") {
            // $window.location.href = vm.domain + "/#/landing"
            $state.go('home.landing')
        }
        if (params === "dashBoard") {
            // $window.location.href = vm.domain + "/#/newDashboard"
            $state.go('home.newDashboard')
        }
        if (params === "examples") {
            // $window.location.href = vm.domain + "/#/examples"
            $state.go('')
        }
        if (params === "community") {
            // $window.location.href = vm.domain + "/#/community"
            $state.go('')
        }
    }

    function userMenulistOption(params) {
        if (params === "Login") {
            $log.log("get in login popup")
            $mdDialog
                .show({
                    controller: () => this,
                    controllerAs: 'vm',
                    templateUrl: addLoginTemplate,
                    parent: angular.element($document[0].body),
                    fullscreen: true,
                    scope: angular.extend($scope.$new(), {
                        close: function () {
                            $mdDialog.cancel()
                        }
                    })
                })
                .then(function () {}, function () {})
        }
        if (params === "Logout") {
            $log.log("get in logout popup")
            $mdDialog
                .show({
                    controller: () => this,
                    controllerAs: 'vm',
                    templateUrl: addLogoutTemplate,
                    parent: angular.element($document[0].body),
                    fullscreen: true,
                    scope: angular.extend($scope.$new(), {
                        close: function () {
                            $mdDialog.cancel()
                        }
                    })
                })
                .then(function () {}, function () {})
        }
        if (params === "Profile") {
            // $window.location.href = vm.domain + "/#/profile"
            $state.go('home.profile')
        }
    }

    function userLogin(username, password) {
        vm.username = username
        vm.password = password
        vm.loginStatus = !vm.loginStatus
        $log.log(vm.username, vm.password)
    }

    function userLogout() {
        $log.log("You logout now.")
        vm.loginStatus = !vm.loginStatus
    }
}