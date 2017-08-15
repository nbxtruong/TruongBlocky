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
export default function DashboardController($log) {
    var vm = this
    vm.commanderStatus = false
    vm.selectWidget
    //vm.eventStop = eventStop
    vm.baseUrl = "./src/app/dashboard/images/"

    vm.options = {
        gridType: 'fit',
        // itemChangeCallback: itemChange,
        margin: 1,
        minCols: 8,
        maxCols: 8,
        minRows: 10,
        maxRows: 10,
        maxItemCols: 50,
        maxItemRows: 50,
        mobileBreakpoint: 0,
        //itemResizeCallback: vm.eventStop(),
        //compactType: 'compactLeft&Up',
        outerMargin: true,
        draggable: {
            enabled: true,
            //stop: vm.eventStop(vm.selectWidget)
        },
        resizable: {
            enabled: true,
            //start: eventStart(),
            //stop: $window.alert("Start!")
        },
        pushItems: true
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
        name: 'Air Conditioner',
        type: 'button',
        clickMessage: {
            topic: 'turnOn',
            message: 1
        },
        cols: 2,
        rows: 2,
        y: 0,
        x: 0,
        minItemCols: 2,
        minItemRows: 2,
        image: 'light',
        status: true
    },
    {
        name: 'Bedroom Light',
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
    }
    ];

    vm.models = {
        selected: null,
        templates: vm.widget,
        dropzones: vm.modelAsJson
    }

    vm.addWidget = addWidget
    vm.commanderCenter = commanderCenter
    vm.removeWidget = removeWidget
    vm.saveDashboard = saveDashboard
    vm.onSwipeRight = onSwipeRight

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
        vm.options.maxCols = 10;
        vm.options.minCols = 10;
        vm.options.api.optionsChanged();
        $log.log(vm.models.dropzones);
    }

    function commanderCenter(params) {
        vm.commanderStatus = !vm.commanderStatus
        vm.selectWidget = params
    }

    function removeWidget() {
        vm.dashboard.splice(vm.selectWidget, 1);
        vm.commanderStatus = !vm.commanderStatus
        vm.selectWidget = null
    }

    function onSwipeRight() {
        $log.log(vm.models.dropzones)
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