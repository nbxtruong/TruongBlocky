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
/*@ngInject*/
export default function DashboardController($log, $mdSidenav, $mdDialog) {
    var vm = this

    vm.options = {
        gridType: 'scrollVertical',
        // itemChangeCallback: itemChange,
        margin: 2,
        minCols: 8,
        maxCols: 8,
        minRows: 10,
        maxRows: 50,
        mobileBreakpoint: 0,
        outerMargin: true,
        swap: true,
        pushItems: true,
        // displayGrid: '',
        draggable: {
            enabled: false,
            //   stop: eventStop
        },
        resizable: {
            enabled: false,
            //   stop: eventStop
        }
    };

    vm.mobileViewOptions = {
        gridType: 'scrollVertical',
        // itemChangeCallback: itemChange,
        margin: 2,
        minCols: 8,
        maxCols: 8,
        minRows: 10,
        maxRows: 50,
        mobileBreakpoint: 0,
        outerMargin: true,
        swap: true,
        pushItems: true,
        // displayGrid: '',
        draggable: {
            enabled: false,
            //   stop: eventStop
        },
        resizable: {
            enabled: false,
            //   stop: eventStop
        }
    };

    vm.mobileEditOptions = {
        gridType: 'scrollVertical',
        // itemChangeCallback: itemChange,
        margin: 2,
        minCols: 8,
        maxCols: 8,
        minRows: 10,
        maxRows: 50,
        mobileBreakpoint: 0,
        outerMargin: true,
        swap: true,
        pushItems: true,
        // displayGrid: '',
        draggable: {
            enabled: true,
            //   stop: eventStop
        },
        resizable: {
            enabled: true,
            //   stop: eventStop
        }
    };

    var dashboard0 = [{
        name: 'Phong Khach',
        templates: [{
            name: 'buttonDemo',
            type: 'button',
            clickMessage: {
                topic: 'Boom',
                message: '1'
            },
            cols: 1,
            rows: 2,
            y: 0,
            x: 0
        }, {
            name: 'switchDemo',
            type: 'switch',
            onMessage: {
                topic: 'mo den',
                message: '1'
            },
            offMessage: {
                topic: 'tat den',
                message: '0'
            },
            cols: 2,
            rows: 1,
            y: 0,
            x: 0
        }],
    }]

    var dashboard1 = [{
        name: 'Phong Ngu',
        templates: [{
            name: 'switchDemo',
            type: 'switch',
            onMessage: {
                topic: 'mo den',
                message: '1'
            },
            offMessage: {
                topic: 'tat den',
                message: '0'
            },
            cols: 2,
            rows: 1,
            y: 0,
            x: 0
        }],
    }]

    vm.listDashboard = [
        dashboard0,
        dashboard1
    ]

    vm.widgets = [{
            name: 'buttonDemo',
            type: 'button'
        },
        {
            name: 'switchDemo',
            type: 'switch'
        }
    ]

    vm.selected = null
    vm.dashboardIndex = 0
    vm.dashboardName = (vm.listDashboard[vm.dashboardIndex])[0].name
    vm.showWidgetOption = true

    vm.saveDashboard = saveDashboard
    vm.addWidget = addWidget
    vm.removeWidget = removeWidget
    vm.nextDashboard = nextDashboard
    vm.backDashboard = backDashboard
    vm.switchMode = switchMode
    vm.closeSideNav = closeSideNav
    vm.createDashboard = createDashboard
    vm.removeDashboard = removeDashboard
    vm.longPressAction = longPressAction('left')
    vm.longPressOptions = longPressAction('right')

    // $log.log((vm.listDashboard[vm.dashboardIndex])[0].name)

    function addWidget(type) {
        if (type === 'button') {
            (vm.listDashboard[vm.dashboardIndex])[0].templates.push({
                name: 'buttonDemo',
                type: 'button',
                clickMessage: {
                    topic: 'Boom',
                    message: '1'
                },
                cols: 1,
                rows: 2,
                y: 0,
                x: 0
            })
        }
        if (type === 'switch') {
            (vm.listDashboard[vm.dashboardIndex])[0].templates.push({
                name: 'switchDemo',
                type: 'switch',
                onMessage: {
                    topic: 'mo den',
                    message: '1'
                },
                offMessage: {
                    topic: 'tat den',
                    message: '0'
                },
                cols: 2,
                rows: 1,
                y: 0,
                x: 0
            })
        }
    }

    function saveDashboard() {
        // $log.log(vm.selected = (vm.listDashboard[vm.dashboardIndex])[0])
        var jsonData = angular.toJson(vm.listDashboard)
        $log.log(jsonData)
    }

    function removeWidget() {
        var indexWidget = (vm.listDashboard[vm.dashboardIndex])[0].templates.indexOf(vm.selected);
        (vm.listDashboard[vm.dashboardIndex])[0].templates.splice(indexWidget, 1)
    }

    function nextDashboard() {
        var end = vm.listDashboard.length
        var start = vm.dashboardIndex + 1
        if (start < end) {
            vm.dashboardIndex = vm.dashboardIndex + 1
            vm.dashboardName = (vm.listDashboard[vm.dashboardIndex])[0].name
            $log.log(vm.dashboardIndex)
        }
        $log.log(vm.listDashboard.length)
    }

    function backDashboard() {
        if (vm.dashboardIndex > 0) {
            vm.dashboardIndex = vm.dashboardIndex - 1
            vm.dashboardName = (vm.listDashboard[vm.dashboardIndex])[0].name
        }
    }

    function switchMode() {
        vm.options.draggable.enabled = !vm.options.draggable.enabled
        vm.options.resizable.enabled = !vm.options.resizable.enabled

        vm.options.api.optionsChanged()
        vm.mobileViewOptions.api.optionsChanged()
        vm.mobileEditOptions.api.optionsChanged()

        vm.showWidgetOption = !vm.showWidgetOption
    }

    function longPressAction(position) {
        return function () {
            // Component lookup should always be available since we are not using `ng-if`
            $mdSidenav(position)
                .toggle()
                .then(function () {
                    $log.debug("toggle " + position + " is done")
                })
        }
    }

    function createDashboard(event) {
        var confirm = $mdDialog.prompt()
            .title('What would you name your new Dashboard?')
            .textContent('Bowser is a common name.')
            .placeholder('Dashboard name')
            .ariaLabel('Dog name')
            .initialValue('')
            .targetEvent(event)
            .ok('Okay!')
            .cancel('No');

        $mdDialog.show(confirm).then(function (result) {
            vm.listDashboard.push(
                [{
                    name: result,
                    templates: [{
                        name: 'buttonDemo',
                        type: 'button',
                        clickMessage: {
                            topic: 'Boom',
                            message: '1'
                        },
                        cols: 1,
                        rows: 2,
                        y: 0,
                        x: 0
                    }, {
                        name: 'switchDemo',
                        type: 'switch',
                        onMessage: {
                            topic: 'mo den',
                            message: '1'
                        },
                        offMessage: {
                            topic: 'tat den',
                            message: '0'
                        },
                        cols: 2,
                        rows: 1,
                        y: 0,
                        x: 0
                    }],
                }]
            );
            vm.dashboardIndex = (vm.listDashboard.length) - 1
            vm.dashboardName = (vm.listDashboard[vm.dashboardIndex])[0].name
        }, function () {
            vm.status = 'You didn\'t name your dashboard.';
        });
    }

    function removeDashboard() {
        vm.listDashboard.splice(vm.dashboardIndex, 1)
        vm.dashboardName = (vm.listDashboard[vm.dashboardIndex])[0].name
    }

    function closeSideNav() {
        $mdSidenav('left').close()
        $mdSidenav('right').close()
    }
}