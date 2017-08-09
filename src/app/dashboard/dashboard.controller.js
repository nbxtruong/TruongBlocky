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
export default function DashboardController() {
    var vm = this
    vm.commanderStatus = false
    vm.selectWidget

    vm.options = {
        gridType: 'fit',
        // itemChangeCallback: itemChange,
        margin: 10,
        minCols: 10,
        maxCols: 10,
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
    }]

    vm.dashboard = [{
            type: 'button',
            cols: 1,
            rows: 2,
            y: 0,
            x: 0
        },
        {
            type: 'switch',
            cols: 1,
            rows: 2,
            y: 0,
            x: 2
        }
    ];

    vm.addWidget = addWidget
    vm.commanderCenter = commanderCenter
    vm.removeWidget = removeWidget

    function addWidget(params) {
        if (params === 'button') {
            vm.dashboard.push({
                type: 'button',
                cols: 2,
                rows: 2,
                y: 0,
                x: 0
            })
        }
        if (params === 'switch') {
            vm.dashboard.push({
                type: 'switch',
                cols: 2,
                rows: 1,
                y: 0,
                x: 2
            })
        }
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
}