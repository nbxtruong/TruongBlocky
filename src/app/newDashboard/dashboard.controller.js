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
export default function DashboardController($log, $mdSidenav, $mdDialog, $scope) {
    var vm = this

    // for line chart
    $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
    $scope.series = ['Series A', 'Series B'];
    $scope.data = [
        [65, 59, 80, 81, 56, 55, 40],
        [28, 48, 40, 19, 86, 27, 90]
    ];
    $scope.onClick = function (points, evt) {
        $log.log(points, evt);
    };
    $scope.datasetOverride = [{
        yAxisID: 'y-axis-1'
    }, {
        yAxisID: 'y-axis-2'
    }];
    $scope.LineChartOptions = {
        scales: {
            yAxes: [{
                    id: 'y-axis-1',
                    type: 'linear',
                    display: true,
                    position: 'left'
                },
                {
                    id: 'y-axis-2',
                    type: 'linear',
                    display: true,
                    position: 'right'
                }
            ]
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
            backgroundColor: '#6b553b',
            clickMessage: {
                topic: 'Boom',
                message: '1'
            },
            cols: 2,
            rows: 2,
            y: 0,
            x: 0
        }, {
            name: 'switchDemo',
            type: 'switch',
            backgroundColor: '#bf65bc',
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
            x: 0
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
        }
    ]

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
                rows: 2,
                y: 0,
                x: 0
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
                cols: 4,
                rows: 2,
                y: 0,
                x: 0
            })
        }
    }

    function saveDashboard() {
        // $log.log(vm.selected = (vm.listDashboard[vm.dashboardIndex])[0])
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
}