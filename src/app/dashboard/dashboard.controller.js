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

    vm.options = {
        gridType: 'fit',
        // itemChangeCallback: itemChange,
        margin: 10,
        minCols: 2,
        maxCols: 2,
        minRows: 10,
        maxRows: 10,
        maxItemCols: 50,
        maxItemRows: 50,
        minItemCols: 1,
        minItemRows: 2,
        mobileBreakpoint: 0,
        compactType: 'compactLeft&Up',
        outerMargin: true,
        draggable: {
            enabled: true,
            // stop: eventStop
        },
        resizable: {
            enabled: true,
            // stop: eventStop
        }
    };

    vm.widget = [{
        type: 'button'
    }, {
        type: 'switch'
    }, {
        type: 'sensor'
    }]

    vm.modelAsJson = [{
        name: 'Buttonfordemo',
        type: 'button',
        clickMessage: {
            topic: 'openDoor',
            message: 1
        },
        cols: 1,
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
        cols: 1,
        rows: 2,
        y: 0,
        x: 0
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
                cols: 1,
                rows: 2,
                y: 0,
                x: 0
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
                cols: 1,
                rows: 2,
                y: 0,
                x: 0
            })
        }
        if (params === 'sensor') {
            vm.models.dropzones.push({
                name: 'Indoor CO2',
                type: 'sensor',
                clickMessage: {
                    topic: 'openDoor',
                    message: 1
                },
                cols: 1,
                rows: 2,
                y: 0,
                x: 0
            })
        }
    }

    function saveDashboard() {
        $log.log(vm.models.dropzones)
    }

    function commanderCenter(params) {
        vm.commanderStatus = !vm.commanderStatus
        vm.selectWidget = params
    }

    function removeWidget() {
        vm.dashboard.splice(vm.selectWidget, 1);
        vm.commanderStatus = !vm.commanderStatus
        vm.selectWidge = null
    }

    function onSwipeRight() {
        $log.log(vm.models.dropzones)
    }
}