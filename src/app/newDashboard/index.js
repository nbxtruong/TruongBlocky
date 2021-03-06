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
import uiRouter from 'angular-ui-router';
import './dashboard.scss';

import DashboardRoutes from './dashboard.routes';
import DashboardController from './dashboard.controller';

import 'chart.js/dist/Chart.min.js';
import 'angular-chart.js/dist/angular-chart.min.js';

export default angular.module('blocky.dashboard', [
    'chart.js',
    uiRouter
])
    .config(DashboardRoutes)
    .controller('DashboardController', DashboardController)
    .name;
