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
//import chooseImageTemplate from './chooseImage.tpl.html'

export default function DashboardController($log, $mdSidenav, $mdDialog, $mdSelect) {
    var vm = this

    vm.baseUrl = 'http://172.16.3.108:3000/src/app/newDashboard/images/';

    vm.options = {
        gridType: 'scrollVertical',
        // itemChangeCallback: itemChange,
        margin: 2,
        minCols: 8,
        maxCols: 8,
        minRows: 10,
        maxRows: 50,
        // minItemCols: 2,
        // minItemRows: 2,
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
            handles: {
                s: false,
                e: false,
                n: false,
                w: false,
                se: true,
                ne: false,
                sw: false,
                nw: false
            },
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
            handles: {
                s: false,
                e: false,
                n: false,
                w: false,
                se: true,
                ne: false,
                sw: false,
                nw: false
            },
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
            handles: {
                s: false,
                e: false,
                n: false,
                w: false,
                se: true,
                ne: false,
                sw: false,
                nw: false
            },
        }
    };

    var dashboard0 = [{
        name: 'PhongKhach',
        templates: [{
            name: 'buttonDemo',
            type: 'button',
            clickMessage: {
                topic: 'Boom',
                message: '1'
            },
            cols: 2,
            rows: 2,
            y: 0,
            x: 0,
            image: "fa-quora",
            status: false,
            colorOn: '#7FFFD4',
            colorOff: '#000000'
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
            rows: 2,
            y: 0,
            x: 0,
            image: "switch",
            status: false
        },
        {
            name: 'sliderDemo',
            type: 'slider',
            changedMessage: {
                topic: 'Boom'
            },
            cols: 2,
            rows: 2,
            y: 0,
            x: 0,
            image: "light",
            status: 35
        },
        {
            name: 'displayDemo',
            type: 'display',
            clickMessage: {
                topic: 'Boom',
                message: '1'
            },
            cols: 2,
            rows: 2,
            y: 0,
            x: 0,
            image: "cooker",
            status: 335 + 'ppm'
        }],
    }]

    var dashboard1 = [{
        name: 'PhongNgu',
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
            rows: 2,
            y: 0,
            x: 0,
            image: "switch",
            status: false
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
    },
    {
        name: 'displayDemo',
        type: 'display'
    },
    {
        name: 'sliderDemo',
        type: 'slider'
    }
    ]

    vm.iconsList = ('fa-bath fa-eercast fa-etsy fa-grav fa-imdb fa-linode fa-car fa-microchip fa-quora' +
        ' fa-ravelry fa-telegram fa-anchor fa-area-chart fa-ban fa-battery fa-bomb fa-bell fa-plane fa-tree ' +
        'fa-superpowers fa-blind fa-mobile fa-free-code-camp fa-podcast fa-meetup fa-snowflake-o fa-archive ' +
        'fa-bed fa-bicycle fa-bluetooth fa-bolt fa-bug fa-bullhorn fa-cc fa-cubes fa-coffee fa-deaf fa-fighter-jet' +
        ' fa-fire fa-gavel fa-globe fa-heartbeat fa-lemon-o fa-leaf fa-key fa-paw fa-road fa-space-shuttle ' +
        'fa-wheelchair-alt')
        .split(' ').map(function (icon) {
            return {
                abbrev: icon
            };
        });

    vm.selected = null
    vm.dashboardIndex = 0
    vm.dashboardName = (vm.listDashboard[vm.dashboardIndex])[0].name
    vm.showWidgetOption = true
    vm.list = ''
    vm.selectedItem = (vm.listDashboard[vm.dashboardIndex])[0].name

    vm.saveDashboard = saveDashboard
    vm.addWidget = addWidget
    vm.removeWidget = removeWidget
    vm.nextDashboard = nextDashboard
    vm.backDashboard = backDashboard
    vm.switchMode = switchMode
    vm.closeSideNav = closeSideNav
    vm.createDashboard = createDashboard
    vm.removeDashboard = removeDashboard
    vm.selectListDashboard = selectListDashboard
    vm.handleClick = handleClick
    vm.longPressAction = longPressAction('left')
    vm.longPressOptions = longPressAction('right')
    vm.closeDropdown = closeDropdown
    vm.getColor = getColor

    //vm.chooseImage = chooseImage();

    //Update selected-box for everytimes
    vm.selectListDashboard()

    function selectListDashboard() {
        vm.list = '';
        for (var index = 0; index < vm.listDashboard.length; index++) {
            // $log.log((vm.listDashboard[index])[0].name)
            vm.list = vm.list.concat((vm.listDashboard[index])[0].name);
            vm.list = vm.list.concat(' ');
        }

        vm.list = vm.list.trimRight();

        vm.dashboard = (vm.list).split(' ').map(function (state) {
            return {
                abbrev: state
            };
        });
        // $log.log(vm.dashboard)
    }

    function handleClick(value) {
        var array = vm.dashboard
        var attr = 'abbrev'
        for (var i = 0; i < array.length; i += 1) {
            if (array[i][attr] === value) {
                vm.dashboardIndex = i;
                vm.dashboardName = (vm.listDashboard[i])[0].name;
            }
        }
    }

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
                cols: 2,
                rows: 2,
                y: 0,
                x: 0,
                image: "fa-car",
                status: false,
                colorOn: '#33ff33',
                colorOff: '#000033'
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
                rows: 2,
                y: 0,
                x: 0,
                image: "switch",
                status: false
            })
        }
        if (type === 'display') {
            (vm.listDashboard[vm.dashboardIndex])[0].templates.push({
                name: 'Indoor CO2',
                image: 'co2',
                type: 'display',
                cols: 2,
                rows: 2,
                y: 0,
                x: 0,
                minItemCols: 2,
                minItemRows: 2,
                status: 611 + 'ppm'
            })
        }
        if (type === 'slider') {
            (vm.listDashboard[vm.dashboardIndex])[0].templates.push({
                name: 'Window Curtain',
                image: 'co2',
                type: 'slider',
                cols: 2,
                rows: 2,
                y: 0,
                x: 0,
                status: 0
            })
        }
    }

    function saveDashboard() {
        // $log.log(vm.selected = (vm.listDashboard[vm.dashboardIndex])[0])
        var jsonData = angular.toJson(vm.listDashboard)
        $log.log(jsonData)
        $log.log(vm.iconsList)
    }

    function removeWidget() {
        var indexWidget = (vm.listDashboard[vm.dashboardIndex])[0].templates.indexOf(vm.selected);
        (vm.listDashboard[vm.dashboardIndex])[0].templates.splice(indexWidget, 1);
    }

    function nextDashboard() {
        var end = vm.listDashboard.length
        var start = vm.dashboardIndex + 1
        if (start < end) {
            vm.dashboardIndex = vm.dashboardIndex + 1
            vm.dashboardName = (vm.listDashboard[vm.dashboardIndex])[0].name
            // $log.log(vm.dashboardIndex)
        }
        // $log.log(vm.listDashboard.length)
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
            .title('Choose new for Dashboard.')
            // .textContent('Bowser is a common name.')
            .placeholder('Dashboard name')
            .ariaLabel('Dashboard name')
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
            vm.selectListDashboard()
            vm.list = null
            vm.selectedItem = (vm.listDashboard[vm.dashboardIndex])[0].name
        }, function () {
            vm.status = 'You didn\'t name your dashboard.';
        });
    }

    function removeDashboard() {
        vm.listDashboard.splice(vm.dashboardIndex, 1)
        vm.dashboardName = (vm.listDashboard[vm.dashboardIndex - 1])[0].name
        vm.dashboardIndex = vm.dashboardIndex - 1
        vm.list = null
        vm.selectListDashboard()
        vm.selectedItem = (vm.listDashboard[vm.dashboardIndex])[0].name
    }

    function closeSideNav() {
        $mdSidenav('left').close()
        $mdSidenav('right').close()
    }

    vm.changeStatus = function () {
        if (vm.showWidgetOption == true) {
            if (vm.selected.type == 'button' || vm.selected.type == 'switch') {
                vm.selected.status = !vm.selected.status;
            }
        }
    }

    function closeDropdown() {
        $mdSelect.hide();
    }

    // function chooseImage() {
    //     $mdDialog
    //         .show({
    //             controller: () => this,
    //             controllerAs: 'vm',
    //             templateUrl: chooseImageTemplate,
    //             parent: angular.element($document[0].body),
    //             fullscreen: true,
    //             scope: angular.extend($scope.$new(), {
    //                 close: function () {
    //                     $mdDialog.cancel()
    //                 }
    //             })
    //         })
    //         .then(function () { }, function () { })
    // }
    function getColor(param) {
        $log.log(param);
        if (param.status == true) {
            return param.colorOn;
        }
        else {
            return param.colorOff;
        }
    }
}