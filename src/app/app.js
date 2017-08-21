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

import './ie.support';
import angular from 'angular';
import ngMaterial from 'angular-material';
import ngMdIcons from 'angular-material-icons';
import ngCookies from 'angular-cookies';
import 'angular-translate';
import 'angular-translate-loader-static-files';
import 'angular-translate-storage-local';
import 'angular-translate-storage-cookie';
import 'angular-translate-handler-log';
import 'angular-translate-interpolation-messageformat';
import ngSanitize from 'angular-sanitize';
import ngAnimate from 'angular-animate';
import uiRouter from 'angular-ui-router';
import angularJwt from 'angular-jwt';
import 'angular-drag-and-drop-lists';
import mdDataTable from 'angular-material-data-table';
import ngTouch from 'angular-touch';
import 'angular-carousel';

import blockyLocales from './locale/locale.constant';
import blockyToast from './services/toast';
import blockyHome from './layout';
import 'angular-long-press'

import 'typeface-roboto';
import 'font-awesome/css/font-awesome.min.css';
import 'angular-material/angular-material.min.css';
import 'angular-material-icons/angular-material-icons.css';
import 'angular-hotkeys/build/hotkeys.min.css';
import 'angular-carousel/dist/angular-carousel.min.css';
import '../scss/main.scss';
import '../../node_modules/angular-gridster2/dist/gridster.css';
import '../../node_modules/angular-gridster2/dist/gridster.js';
import '../../node_modules/ngtouch/src/ngTouch.js';

import 'angular-bootstrap-colorpicker/css/colorpicker.css';
import 'angular-bootstrap-colorpicker/js/bootstrap-colorpicker-module.js';

import AppConfig from './app.config';
import GlobalInterceptor from './global-interceptor.service';
import AppRun from './app.run';


angular.module('blocky', [
        ngMaterial,
        ngMdIcons,
        ngCookies,
        'pascalprecht.translate',
        ngSanitize,
        ngAnimate,
        angularJwt,
        'dndLists',
        mdDataTable,
        ngTouch,
        'angular-carousel',
        blockyLocales,
        blockyToast,
        blockyHome,
        'angular-gridster2',
        'pr.longpress',
        'ngTouch',
        'colorpicker.module',
        uiRouter
    ])
    .config(AppConfig)
    .factory('globalInterceptor', GlobalInterceptor)
    .run(AppRun);