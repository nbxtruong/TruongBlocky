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

/*@ngInject*/
export default function HomeController($scope, $mdDialog, $log) {
    var imagePath = 'img/list/60.jpeg';

    var vm = this

    vm.userMenulistOption = userMenulistOption

    vm.domain = "http://localhost:8080"

    vm.navItems = [{
            url: vm.domain + "/#/landing",
            name: "codingLab",
            label: "CODING LAB",
            icon: "extension"
        },
        {
            url: vm.domain + "/#/dashboards",
            name: "dashboard",
            label: "DASHBOARD",
            icon: "extension"
        },
        {
            url: vm.domain + "/#/examples",
            name: "examples",
            label: "EXAMPLES",
            icon: "flip_to_back"
        },
        {
            url: vm.domain + "/#/community",
            name: "community",
            label: "COMMUNITY",
            icon: "forum"
        }
    ]

    vm.userMenu = [{
        name: "Profile",
        icon: "perm_contact_calendar"
    }, {
        name: "Logout",
        icon: "logout"
    }, {
        name: "Login",
        icon: "login"
    }]

    function userMenulistOption(params, ev) {
        if (params === "Login") {
            $log.log("get in login popup")
            $mdDialog.show({
                targetEvent: ev,
                template: '<md-dialog>' +
                    '<md-dialog-actions>' +
                    '<div layout="row">' +
                    '<md-input-container flex>' +
                    '<label>Username</label>' +
                    '<input type="text" ng-model="username" required md-maxlength="20">' +
                    '</md-input-container>' +
                    '<md-input-container flex>' +
                    '<label>Password</label>' +
                    '<input type="text" ng-model="password" required md-maxlength="20">' +
                    '</md-input-container>' +
                    '</div>' +
                    '<md-button ng-click="login()" class="md-primary">' +
                    'login' +
                    '</md-button>' +
                    '</md-dialog-actions>' +
                    '</md-dialog>'
            });
        }
    }

    $scope.todos = [];
    for (var i = 0; i < 15; i++) {
        $scope.todos.push({
            face: imagePath,
            what: "Brunch this weekend?",
            who: "Min Li Chan",
            notes: "I'll be in your neighborhood doing errands."
        });
    }
}

/* eslint-enable angular/angularelement */