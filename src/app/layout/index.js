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
import './home.scss';

import uiRouter from 'angular-ui-router';

import HomeRoutes from './home.routes';
import HomeController from './home.controller';

import blockyLanding from '../landing';
import blockyProfile from '../profile';
//import blockyDashboard from '../dashboard';
import blockyNewDashboard from '../newDashboard';

export default angular.module('blocky.home', [
    uiRouter,
    blockyLanding,
    //blockyDashboard,
    blockyProfile,
    blockyNewDashboard
])
    .config(HomeRoutes)
    .controller('HomeController', HomeController)
    .name;
