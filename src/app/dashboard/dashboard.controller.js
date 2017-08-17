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
export default function DashboardController($log, $mdSidenav, $window) {
    var vm = this
    vm.commanderStatus = false
    vm.selectWidget = null
    //vm.eventStop = eventStop
    vm.baseUrl = "./src/app/dashboard/images/"

    vm.options = {
        gridType: 'scrollVertical',
        // itemChangeCallback: itemChange,
        margin: 2,
        minCols: 8,
        maxCols: 8,
        minRows: 10,
        maxRows: 50,
        maxItemCols: 50,
        maxItemRows: 50,
        minItemCols: 1,
        minItemRows: 2,
        swap: true,
        pushItems: true,
        displayGrid: '',
        mobileBreakpoint: 0,
        fixedColWidth: 0,
        fixedRowHeight: 0,
        // compactType: 'compactLeft&Up',
        outerMargin: true,
        draggable: {
            enabled: true,
            //stop: vm.eventStop(vm.selectWidget)
        },
        resizable: {
            enabled: true,
            //start: eventStart(),
            //stop: $window.alert("Start!")
        }
    };

    vm.widget = [{
        type: 'button'
    }, {
        type: 'switch'
    }, {
        type: 'display'
    }, {
        type: 'slider'
    }]

    vm.modelAsJson = [{
            name: 'Buttonfordemo',
            type: 'button',
            clickMessage: {
                topic: 'openDoor',
                message: 1
            },
            cols: 2,
            rows: 2,
            y: 0,
            x: 0
        },
        {
            name: 'Switchfordemo',
            type: 'switch',
            onMessage: {
                topic: '',
                message: ''
            },
            offMessage: {
                topic: '',
                message: ''
            },
            cols: 2,
            rows: 2,
            y: 0,
            x: 0
        }
    ]

    vm.models = {
        selected: null,
        templates: vm.widget,
        dropzones: vm.modelAsJson
    }

    vm.addWidget = addWidget
    vm.removeWidget = removeWidget
    vm.saveDashboard = saveDashboard
    vm.onSwipeLeft = wipeAction('left')
    vm.onSwipeRight = wipeAction('right')
    vm.closeSideNav = closeSideNav

    function addWidget(params) {
        if (params === 'button') {
            vm.models.dropzones.push({
                name: 'Buttonfordemo',
                type: 'button',
                clickMessage: {
                    topic: 'openDoor',
                    message: 1
                },
                cols: 2,
                rows: 2,
                y: 0,
                x: 0,
                minItemCols: 2,
                image: "light",
                status: false
            })
        }
        if (params === 'switch') {
            vm.models.dropzones.push({
                name: 'Switchfordemo',
                type: 'switch',
                onMessage: {
                    topic: '',
                    message: ''
                },
                offMessage: {
                    topic: '',
                    message: ''
                },
                cols: 2,
                rows: 2,
                y: 0,
                x: 0,
                minItemCols: 2,
                image: "switch",
                status: false
            })
        }
        if (params === 'display') {
            vm.models.dropzones.push({
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
        if (params === 'slider') {
            vm.models.dropzones.push({
                name: 'Window Curtain',
                image: 'co2',
                type: 'slider',
                cols: 2,
                rows: 2,
                y: 0,
                x: 0,
                minItemCols: 2,
                minItemRows: 2,
                status: 45
            })
        }
    }

    function saveDashboard() {
        vm.options.minCols = 4;
        vm.options.maxCols = 4;
        vm.options.api.optionsChanged();
        $log.log(vm.models);
    }

    function removeWidget() {
        vm.models.dropzones.splice(vm.models.selected, 1)
    }

    function wipeAction(navID) {
        return function () {
            // Component lookup should always be available since we are not using `ng-if`
            $mdSidenav(navID)
                .toggle()
                .then(function () {
                    $log.debug("toggle " + navID + " is done")
                })
        }
    }

    function closeSideNav() {
        $mdSidenav('left').close()
        $mdSidenav('right').close()
    }

    $window.onresize = function () {
        // $log.log($window.innerWidth)
        // vm.options.minCols = 4
        // vm.options.maxCols = 4
        // vm.options.api.optionsChanged()
        // if ($window.innerWidt > 1280) {
        //     vm.options.minCols = 8
        //     vm.options.maxCols = 8
        //     vm.options.api.optionsChanged()
        // }
        // if ($window.innerWidt <= 1280) {
        //     vm.options.minCols = 4
        //     vm.options.maxCols = 4
        //     vm.options.api.optionsChanged()
        // }
        // if ($window.innerWidt <= 840) {
        //     vm.options.minCols = 2
        //     vm.options.maxCols = 2
        //     vm.options.api.optionsChanged()
        // }
    }

    //Calculate Font Size for text in widget
    //vm.fontSize = 30;
    // function eventStop() {
    //     // if (vm.itemResize.emit(vm.state.item)) {

    //     // }
    //     $window.alert("TvA");
    // }

    // function eventStart() {
    //     //$window.alert("Start!")
    // }

    vm.changeStatus = function () {
        if (vm.models.selected.type == 'button' || vm.models.selected.type == 'switch') {
            vm.models.selected.status = !vm.models.selected.status;
        }
    }

}