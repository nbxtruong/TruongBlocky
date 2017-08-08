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

    vm.options = {
        gridType: 'fit',
        // itemChangeCallback: itemChange,
        margin: 10,
        minCols: 10, // minimum amount of columns in the grid
        maxCols: 10, // maximum amount of columns in the grid
        minRows: 10, // minimum amount of rows in the grid
        maxRows: 10, // maximum amount of rows in the grid
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
        type: 'Button'
    }, {
        type: 'Switch'
    }]

    vm.dashboard = [{
            type: 'Button',
            cols: 2,
            rows: 2,
            y: 0,
            x: 0
        },
        {
            type: 'Switch',
            cols: 2,
            rows: 1,
            y: 0,
            x: 2
        }
    ];

    vm.addWidget = addWidget

    function addWidget(params) {
        if (params === 'Button') {
            vm.dashboard.push({
                name: 'Button',
                cols: 2,
                rows: 2,
                y: 0,
                x: 0
            });
        }
        if (params === 'Switch') {
            vm.dashboard.push({
                name: 'Switch',
                cols: 2,
                rows: 1,
                y: 0,
                x: 0
            });
        }
    }
}