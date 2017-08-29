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

    // for line chart
    vm.onClick = function (points, evt) {
        $log.log(points, evt);
    };
    vm.datasetOverride = [{
        yAxisID: 'y-axis-1'
    }];
    vm.LineChartOptions = {
        scales: {
            yAxes: [{
                id: 'y-axis-1',
                type: 'linear',
                display: true,
                position: 'left'
            }]
        }
    }

    // for griter
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

    vm.mobileOptions = {
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
            name: 'gaugeDemo',
            type: 'guage'
        },
        {
            name: 'webcamDemo',
            type: 'webcam'
        },
        {
            name: 'linerChartDemo',
            type: 'linerChart'
        },
        {
            name: 'dynamicChartDemo',
            type: 'dynamicChart'
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
    vm.showWidgetOption = true
    vm.list = ''
    vm.valuegauge = 50
    vm.selectedItem = (vm.listDashboard[vm.dashboardIndex])[0].name
    vm.dashboardName = (vm.listDashboard[vm.dashboardIndex])[0].name

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
    // vm.longPressAction = longPressAction('left')
    // vm.longPressOptions = longPressAction('right')
    vm.closeDropdown = closeDropdown
    vm.getColor = getColor

    //vm.chooseImage = chooseImage();
    vm.navBarLeft = navBarPosition('left')
    vm.navBarRight = navBarPosition('right')

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
                colorOff: '#000033',
                backgroundColor: '#85adad'
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
                status: false,
                backgroundColor: '#85adad'
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
                status: 611 + 'ppm',
                backgroundColor: '#85adad'
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
        if (type === 'guage') {
            (vm.listDashboard[vm.dashboardIndex])[0].templates.push({
                name: 'gaugeDemo',
                type: 'gauge',
                foregroundColor: '#bf65bc',
                backgroundColor: '#48df5e',
                value: '50',
                label: 'power',
                append: '%',
                topic: 'powerAllHouse',
                cols: 2,
                rows: 2,
                minItemCols: 2,
                minItemRows: 2,
                y: 0,
                x: 0
            })
        }
        if (type === 'webcam') {
            (vm.listDashboard[vm.dashboardIndex])[0].templates.push({
                name: 'webcamDemo',
                type: 'webcam',
                backgroundColor: '#bd77bc',
                topic: 'webcam1',
                cols: 2,
                rows: 2,
                minItemCols: 2,
                minItemRows: 2,
                y: 0,
                x: 0
            })
        }
        if (type === 'linerChart') {
            (vm.listDashboard[vm.dashboardIndex])[0].templates.push({
                name: 'linerChartDemo',
                type: 'linerChart',
                backgroundColor: '#bd77bc',
                topic: 'linerChart1',
                labels: ["January", "February", "March", "April", "May", "June", "July"],
                series: ['Series A'],
                data: [
                    [65, 59, 80, 81, 56, 55, 40]
                ],
                cols: 4,
                rows: 2,
                minItemCols: 4,
                minItemRows: 2,
                y: 0,
                x: 0
            })
        }
        if (type === 'dynamicChart') {
            (vm.listDashboard[vm.dashboardIndex])[0].templates.push({
                name: 'dynamicChartDemo',
                type: 'dynamicChart',
                backgroundColor: '#bd77bc',
                topic: 'dynamicChart1',
                labels: ["Download Sales", "In-Store Sales", "Mail-Order Sales", "Tele Sales", "Corporate Sales"],
                data: [300, 400, 180, 200, 220],
                mainType: 'radar',
                cols: 4,
                rows: 2,
                minItemCols: 4,
                minItemRows: 2,
                y: 0,
                x: 0
            })
        }
    }

    function saveDashboard() {
        // $log.log(vm.selected = (vm.listDashboard[vm.dashboardIndex])[0])
        var jsonData = angular.toJson(vm.listDashboard)
        $log.log(jsonData)
        $log.log(vm.iconsList)
        // var jsonData = angular.toJson(vm.listDashboard)
        $log.log(vm.selected.type)
    }

    function removeWidget() {
        var indexWidget = (vm.listDashboard[vm.dashboardIndex])[0].templates.indexOf(vm.selected);
        (vm.listDashboard[vm.dashboardIndex])[0].templates.splice(indexWidget, 1);
        vm.selected = null
    }

    function nextDashboard() {
        var end = vm.listDashboard.length
        var start = vm.dashboardIndex + 1
        if ((start < end) && (vm.showWidgetOption === true)) {
            vm.dashboardIndex = vm.dashboardIndex + 1
            vm.dashboardName = (vm.listDashboard[vm.dashboardIndex])[0].name
            // $log.log(vm.dashboardIndex)
        }
        // $log.log(vm.listDashboard.length)
    }

    function backDashboard() {
        if ((vm.dashboardIndex > 0) && (vm.showWidgetOption === true)) {
            vm.dashboardIndex = vm.dashboardIndex - 1
            vm.dashboardName = (vm.listDashboard[vm.dashboardIndex])[0].name
        }
    }

    function switchMode() {
        vm.showWidgetOption = !vm.showWidgetOption

        if (vm.showWidgetOption === false) {
            vm.mobileOptions.draggable.enabled = !vm.mobileOptions.draggable.enabled
            vm.mobileOptions.resizable.enabled = !vm.mobileOptions.resizable.enabled
            vm.mobileOptions.api.optionsChanged()

            vm.options.draggable.enabled = !vm.options.draggable.enabled
            vm.options.resizable.enabled = !vm.options.resizable.enabled
            vm.options.api.optionsChanged()
        }
        if (vm.showWidgetOption === true) {
            vm.mobileOptions.draggable.enabled = !vm.mobileOptions.draggable.enabled
            vm.mobileOptions.resizable.enabled = !vm.mobileOptions.resizable.enabled
            vm.mobileOptions.api.optionsChanged()

            vm.options.draggable.enabled = !vm.options.draggable.enabled
            vm.options.resizable.enabled = !vm.options.resizable.enabled
            vm.options.api.optionsChanged()
        }
    }

    function navBarPosition(position) {
        // $log.log(vm.showWidgetOption)
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