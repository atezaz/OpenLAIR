function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive": function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header></app-header>  \n\n<div>\n  <router-outlet></router-outlet>\n</div>\n  \n  \n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/chart-manager/chart-manager.component.html": function node_modulesRawLoaderDistCjsJsSrcAppChartManagerChartManagerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"buttons\" id=\"btn-menu\" [ngClass]=\"{ 'mat-elevation-z5': true, sticky: isSticky }\">\n  <button class=\"backBtn buttonLaTool\" routerLink=\"\">\n    Back\n  </button>\n\n  <button class=\"downloadCharts buttonLaTool\" (click)=\"downloadPage()\">\n    Download\n  </button>\n\n  <mat-form-field appearance=\"fill\">\n    <mat-select [formControl]=\"indicators\" multiple placeholder=\"Indicators\" [ngModel]=\"dropdownItems\">\n      <mat-select-trigger>\n        {{ indicators.value ? indicators.value[0] : \"\" }}\n        <span *ngIf=\"indicators.value?.length > 1\" class=\"selection\">\n          (+{{ indicators.value.length - 1 }}\n          {{ indicators.value?.length === 2 ? \"other\" : \"others\" }})\n        </span>\n      </mat-select-trigger>\n      <!-- These are the indicators that are not linked -->\n      <mat-option *ngFor=\"let indicator of dropdownItems\" [value]=\"indicator\" [ngStyle]=\"{\n          color:\n            indicator.includes([73]) ||\n            indicator.includes([57]) ||\n            indicator.includes([75]) ||\n            indicator.includes([135])\n              ? 'red'\n              : ''\n        }\" (onSelectionChange)=\"selectCharts($event, indicator)\">{{ indicator }}</mat-option>\n    </mat-select>\n  </mat-form-field>\n</div>\n\n<div class=\"container\">\n  <!-- componenents on top get rendered first -->\n\n  <!-- Student interaction patterns -->\n  <div class=\"main-content\" *ngIf=\"\n      referenceNumbers.includes('[127]') || referenceNumbers.includes('[121]')\n    \">\n    <app-student-interaction-patterns></app-student-interaction-patterns>\n  </div>\n\n  <!-- Reading Analytics -->\n  <div class=\"main-content\" *ngIf=\"\n      referenceNumbers.includes('[134]') ||\n      referenceNumbers.includes('[114]') ||\n      referenceNumbers.includes('[128]')\n    \">\n    <app-reading-analytics></app-reading-analytics>\n  </div>\n\n  <!-- Competency -->\n  <div class=\"main-content\" *ngIf=\"\n      referenceNumbers.includes('[31]') ||\n      referenceNumbers.includes('[46]') ||\n      referenceNumbers.includes('[98]')\n    \">\n    <app-competency></app-competency>\n  </div>\n\n  <!-- Learning progress -->\n  <div class=\"main-content\" *ngIf=\"\n      referenceNumbers.includes('[62]') ||\n      referenceNumbers.includes('[110]') ||\n      referenceNumbers.includes('[51]')\n    \">\n    <app-learning-progress></app-learning-progress>\n  </div>\n\n  <!-- Writing Analytics -->\n  <div class=\"main-content\" *ngIf=\"\n      referenceNumbers.includes('[61]') ||\n      referenceNumbers.includes('[48]') ||\n      referenceNumbers.includes('[89]') ||\n      referenceNumbers.includes('[85]')\n    \">\n    <app-writing-analytics></app-writing-analytics>\n  </div>\n\n  <!-- Discourse Analytics -->\n  <div class=\"main-content\" *ngIf=\"\n      referenceNumbers.includes('[24]') ||\n      referenceNumbers.includes('[27]') ||\n      referenceNumbers.includes('[49]') ||\n      referenceNumbers.includes('[142]') ||\n      referenceNumbers.includes('[80]') ||\n      referenceNumbers.includes('[88]')\n    \">\n    <app-discussion-quality></app-discussion-quality>\n  </div>\n\n  <!-- Clickstream analysis -->\n  <div class=\"main-content\" *ngIf=\"referenceNumbers.includes('[103]')\">\n    <app-clickstream-analysis></app-clickstream-analysis>\n  </div>\n\n  <!-- Video Analytics -->\n  <div class=\"main-content\" *ngIf=\"\n      referenceNumbers.includes('[138]') ||\n      referenceNumbers.includes('[72]') ||\n      referenceNumbers.includes('[116]')\n    \">\n    <app-video-engagements></app-video-engagements>\n  </div>\n\n  <!-- Initiative -->\n  <div class=\"main-content\" *ngIf=\"referenceNumbers.includes('[124]')\">\n    <app-initiative></app-initiative>\n  </div>\n\n  <!-- Social analysis -->\n  <div class=\"main-content\" *ngIf=\"referenceNumbers.includes('[63]')\">\n    <app-social-analysis></app-social-analysis>\n  </div>\n\n  <!--  Predictive analytics (Dropping out )-->\n\n  <div class=\"main-content\" *ngIf=\"\n      referenceNumbers.includes('[59]') ||\n      referenceNumbers.includes('[79]') ||\n      referenceNumbers.includes('[99]') ||\n      referenceNumbers.includes('[101]') ||\n      referenceNumbers.includes('[64]') ||\n      referenceNumbers.includes('[71]') ||\n      referenceNumbers.includes('[131]')\n    \">\n    <app-droppingout></app-droppingout>\n  </div>\n  <!-- Time distribution -->\n  <div class=\"main-content\" *ngIf=\"referenceNumbers.includes('[39]')\">\n    <app-time-distribution></app-time-distribution>\n  </div>\n\n  <!-- Time Planning -->\n  <div class=\"main-content\" *ngIf=\"\n      referenceNumbers.includes('[47]') ||\n      referenceNumbers.includes('[68]') ||\n      referenceNumbers.includes('[125]')\n    \">\n    <app-time-planning></app-time-planning>\n  </div>\n\n  <!-- Student comparison -->\n  <div class=\"main-content\" *ngIf=\"\n      referenceNumbers.includes('[130]') ||\n      referenceNumbers.includes('[126]') ||\n      referenceNumbers.includes('[129]') ||\n      referenceNumbers.includes('[25]') ||\n      referenceNumbers.includes('[50]')\n    \">\n    <app-student-comparison></app-student-comparison>\n  </div>\n\n  <!-- Engagement and Performance -->\n  <div class=\"main-content\" *ngIf=\"\n      referenceNumbers.includes('[69]') || referenceNumbers.includes('[86]')\n    \">\n    <app-engagement-performance></app-engagement-performance>\n  </div>\n\n  <!-- Online change detection-->\n  <div class=\"main-content\" *ngIf=\"referenceNumbers.includes('[137]')\">\n    <app-online-change-detection></app-online-change-detection>\n  </div>\n\n  <!-- Game analytics -->\n  <div class=\"main-content\" *ngIf=\"\n      referenceNumbers.includes('[45]') ||\n      referenceNumbers.includes('[43]') ||\n      referenceNumbers.includes('[104]')\n    \">\n    <app-gamification></app-gamification>\n  </div>\n\n  <!-- Predict course completion -->\n  <div class=\"main-content\" *ngIf=\"referenceNumbers.includes('[70]')\">\n    <app-predict-coursecompletion></app-predict-coursecompletion>\n  </div>\n\n  <!--  Procrastination  -->\n  <div class=\"main-content\" *ngIf=\"\n      referenceNumbers.includes('[102]') || referenceNumbers.includes('[107]')\n    \">\n    <app-procrastination></app-procrastination>\n  </div>\n\n  <!-- Group participation -->\n  <div class=\"main-content\" *ngIf=\"referenceNumbers.includes('[30]')\">\n    <app-group-participation></app-group-participation>\n  </div>\n\n  <!-- Clustering -->\n  <div class=\"main-content\" *ngIf=\"\n      referenceNumbers.includes('[66]') ||\n      referenceNumbers.includes('[120]') ||\n      referenceNumbers.includes('[113]') ||\n      referenceNumbers.includes('[29]')\n    \">\n    <app-clustering></app-clustering>\n  </div>\n\n  <!-- Final grade prediction -->\n  <div class=\"main-content\" *ngIf=\"\n      referenceNumbers.includes('[28]') ||\n      referenceNumbers.includes('[83]') ||\n      referenceNumbers.includes('[78]') ||\n      referenceNumbers.includes('[115]') ||\n      referenceNumbers.includes('[60]') ||\n      referenceNumbers.includes('[37]') ||\n      referenceNumbers.includes('[105]') ||\n      referenceNumbers.includes('[81]') ||\n      referenceNumbers.includes('[119]')\n    \">\n    <app-final-grade-prediction></app-final-grade-prediction>\n  </div>\n\n  <!-- Learning behaviour -->\n  <div class=\"main-content\" *ngIf=\"referenceNumbers.includes('[76]')\">\n    <app-learning-behaviour></app-learning-behaviour>\n  </div>\n\n  <!-- Social network analysis -->\n  <div class=\"main-content\" *ngIf=\"\n      referenceNumbers.includes('[90]') || referenceNumbers.includes('[52]')\n    \">\n    <app-social-network-analysis></app-social-network-analysis>\n  </div>\n\n  <!-- Self motivation -->\n  <div class=\"main-content\" *ngIf=\"referenceNumbers.includes('[139]')\">\n    <app-self-motivation></app-self-motivation>\n  </div>\n\n  <!-- Learning behaviour patterns -->\n  <div class=\"main-content\" *ngIf=\"\n      referenceNumbers.includes('[111]') ||\n      referenceNumbers.includes('[132]') ||\n      referenceNumbers.includes('[118]')\n    \">\n    <app-learning-behavior-patterns></app-learning-behavior-patterns>\n  </div>\n\n  <!-- Passing rate prediction -->\n  <div class=\"main-content\" *ngIf=\"\n      referenceNumbers.includes('[26]') ||\n      referenceNumbers.includes('[56]') ||\n      referenceNumbers.includes('[96]') ||\n      referenceNumbers.includes('[100]') ||\n      referenceNumbers.includes('[117]') ||\n      referenceNumbers.includes('[143]') ||\n      referenceNumbers.includes('[144]')\n    \">\n    <app-passing-rate-prediction></app-passing-rate-prediction>\n  </div>\n\n  <!--  Feedback (Self-regulation)-->\n  <div class=\"main-content\" *ngIf=\"\n      referenceNumbers.includes('[41]') || referenceNumbers.includes('[91]')\n    \">\n    <app-feedback></app-feedback>\n  </div>\n\n  <!-- Course assessment -->\n  <div class=\"main-content\" *ngIf=\"referenceNumbers.includes('[55]')\">\n    <app-course-assessment></app-course-assessment>\n  </div>\n\n  <!-- Affective-State -->\n  <div class=\"main-content\" *ngIf=\"\n      referenceNumbers.includes('[32]') ||\n      referenceNumbers.includes('[84]') ||\n      referenceNumbers.includes('[36]') ||\n      referenceNumbers.includes('[87]')\n    \">\n    <app-affective-state></app-affective-state>\n  </div>\n\n  <!-- Course difficulty -->\n  <div class=\"main-content\" *ngIf=\"\n      referenceNumbers.includes('[77]') || referenceNumbers.includes('[133]')\n    \">\n    <app-course-difficulty></app-course-difficulty>\n  </div>\n\n  <!-- Teacher curriculum usage -->\n  <div class=\"main-content\" *ngIf=\"\n      referenceNumbers.includes('[65]') || referenceNumbers.includes('[58]')\n    \">\n    <app-curriculum-usage></app-curriculum-usage>\n  </div>\n\n  <!-- Presentation skills -->\n  <div class=\"main-content\" *ngIf=\"\n      referenceNumbers.includes('[35]') || referenceNumbers.includes('[40]')\n    \">\n    <app-presentation-skills></app-presentation-skills>\n  </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/affective-state/affective-state.component.html": function node_modulesRawLoaderDistCjsJsSrcAppChartsAffectiveStateAffectiveStateComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\n  <highcharts-chart\n    [Highcharts]=\"Highcharts\"\n    [options]=\"chartOptions\"\n    style=\"width: 100%; height: 400px; display: block; float: left\"\n  ></highcharts-chart>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/clickstream-analysis/clickstream-analysis.component.html": function node_modulesRawLoaderDistCjsJsSrcAppChartsClickstreamAnalysisClickstreamAnalysisComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\n  <highcharts-chart\n    [Highcharts]=\"Highcharts\"\n    [options]=\"chartOptions\"\n    style=\"width: 100%; height: 400px; display: block; float: left\"\n  ></highcharts-chart>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/clustering/clustering.component.html": function node_modulesRawLoaderDistCjsJsSrcAppChartsClusteringClusteringComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\n  <highcharts-chart\n    [Highcharts]=\"Highcharts\"\n    [options]=\"chartOptions\"\n    style=\"width: 100%; display: block; float: left\"\n  ></highcharts-chart>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/competency/competency.component.html": function node_modulesRawLoaderDistCjsJsSrcAppChartsCompetencyCompetencyComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\n  <highcharts-chart\n    [Highcharts]=\"Highcharts\"\n    [options]=\"chartOptions\"\n    style=\"width: 100%; height: 400px; display: block; float: left\"\n  ></highcharts-chart>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/course-assessment/course-assessment.component.html": function node_modulesRawLoaderDistCjsJsSrcAppChartsCourseAssessmentCourseAssessmentComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\n  <highcharts-chart\n    [Highcharts]=\"Highcharts\"\n    [options]=\"chartOptions\"\n    style=\"width: 50%; height: 400px; display: block; float: left\"\n  ></highcharts-chart>\n\n  <highcharts-chart\n    [Highcharts]=\"Highcharts\"\n    [options]=\"chartOptions2\"\n    style=\"width: 50%; height: 400px; display: block; float: left\"\n  ></highcharts-chart>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/course-difficulty/course-difficulty.component.html": function node_modulesRawLoaderDistCjsJsSrcAppChartsCourseDifficultyCourseDifficultyComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\n  <highcharts-chart\n    [Highcharts]=\"Highcharts\"\n    [options]=\"chartOptions\"\n    style=\"width: 100%; height: 400px; display: block; float: left\"\n  ></highcharts-chart>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/curriculum-usage/curriculum-usage.component.html": function node_modulesRawLoaderDistCjsJsSrcAppChartsCurriculumUsageCurriculumUsageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\n  <highcharts-chart\n    [Highcharts]=\"Highcharts\"\n    [options]=\"chartOptions\"\n    style=\"width: 100%; height: 400px; display: block; float: left\"\n  ></highcharts-chart>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/discussion-quality/discussion-quality.component.html": function node_modulesRawLoaderDistCjsJsSrcAppChartsDiscussionQualityDiscussionQualityComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<highcharts-chart\n  [Highcharts]=\"Highcharts\"\n  [options]=\"chartOptions\"\n  style=\"width: 100%; height: 400px; display: block; float: left\"\n></highcharts-chart>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/droppingout/droppingout.component.html": function node_modulesRawLoaderDistCjsJsSrcAppChartsDroppingoutDroppingoutComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\n  <highcharts-chart\n    [Highcharts]=\"Highcharts\"\n    [options]=\"chartOptions\"\n    style=\"width: 100%; height: 400px; display: block; float: left\"\n  ></highcharts-chart>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/engagement-performance/engagement-performance.component.html": function node_modulesRawLoaderDistCjsJsSrcAppChartsEngagementPerformanceEngagementPerformanceComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\n  <highcharts-chart\n    [Highcharts]=\"Highcharts\"\n    [options]=\"chartOptions\"\n    style=\"width: 100%; height: 400px; display: block; float: left\"\n  ></highcharts-chart>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/feedback/feedback.component.html": function node_modulesRawLoaderDistCjsJsSrcAppChartsFeedbackFeedbackComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<SELECT id=\"list\" (change)=\"updateChart($event)\">\n  <option VALUE=\"A\">Video interactions</option>\n  <option VALUE=\"B\">Reading activities</option>\n  <option VALUE=\"C\">Assignment activities</option>\n  <option VALUE=\"D\">Dashboard access</option>\n</SELECT>\n<div class=\"example\">\n  <highcharts-chart\n    [Highcharts]=\"Highcharts\"\n    [options]=\"chartOptions\"\n    style=\"width: 50%; height: 400px; display: block; float: left\"\n  ></highcharts-chart>\n</div>\n\n<div class=\"example\">\n  <highcharts-chart\n    [Highcharts]=\"Highcharts\"\n    [options]=\"chartOptions2\"\n    style=\"width: 50%; height: 400px; display: block; float: left\"\n  ></highcharts-chart>\n</div>\n\n<!-- \n<figure class=\"highcharts-figure\">\n  <div id=\"container-speed\" class=\"chart-container\"></div>\n  <div id=\"container-rpm\" class=\"chart-container\"></div>\n</figure>\n-->\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/final-grade-prediction/final-grade-prediction.component.html": function node_modulesRawLoaderDistCjsJsSrcAppChartsFinalGradePredictionFinalGradePredictionComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\n  <highcharts-chart\n    [Highcharts]=\"Highcharts\"\n    [options]=\"chartOptions\"\n    style=\"width: 100%; height: 400px; display: block; float: left\"\n  ></highcharts-chart>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/gamification/gamification.component.html": function node_modulesRawLoaderDistCjsJsSrcAppChartsGamificationGamificationComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\n  <highcharts-chart\n    [Highcharts]=\"Highcharts\"\n    [options]=\"chartOptions\"\n    style=\"width: 100%; height: 400px; display: block; float: left\"\n  ></highcharts-chart>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/group-participation/group-participation.component.html": function node_modulesRawLoaderDistCjsJsSrcAppChartsGroupParticipationGroupParticipationComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\n  <highcharts-chart\n    [Highcharts]=\"Highcharts\"\n    [options]=\"chartOptions\"\n    style=\"width: 100%; height: 400px; display: block; float: left\"\n  ></highcharts-chart>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/initiative/initiative.component.html": function node_modulesRawLoaderDistCjsJsSrcAppChartsInitiativeInitiativeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\n  <highcharts-chart\n    [Highcharts]=\"Highcharts\"\n    [options]=\"chartOptions\"\n    style=\"width: 100%; height: 400px; display: block; float: left\"\n  ></highcharts-chart>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/learning-behavior-patterns/learning-behavior-patterns.component.html": function node_modulesRawLoaderDistCjsJsSrcAppChartsLearningBehaviorPatternsLearningBehaviorPatternsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\n  <highcharts-chart\n    [Highcharts]=\"Highcharts\"\n    [options]=\"chartOptions\"\n    style=\"width: 100%; display: block; float: left\"\n  ></highcharts-chart>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/learning-behaviour/learning-behaviour.component.html": function node_modulesRawLoaderDistCjsJsSrcAppChartsLearningBehaviourLearningBehaviourComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\n  <highcharts-chart\n    [Highcharts]=\"Highcharts\"\n    [options]=\"chartOptions\"\n    style=\"width: 100%; display: block; float: left\"\n  ></highcharts-chart>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/learning-progress/learning-progress.component.html": function node_modulesRawLoaderDistCjsJsSrcAppChartsLearningProgressLearningProgressComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\n  <highcharts-chart\n    [Highcharts]=\"Highcharts\"\n    [options]=\"chartOptions\"\n    style=\"width: 100%; height: 400px; display: block; float: left\"\n  ></highcharts-chart>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/online-change-detection/online-change-detection.component.html": function node_modulesRawLoaderDistCjsJsSrcAppChartsOnlineChangeDetectionOnlineChangeDetectionComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\n  <highcharts-chart\n    [Highcharts]=\"Highcharts\"\n    [options]=\"chartOptions\"\n    style=\"width: 100%; height: 400px; display: block; float: left\"\n  ></highcharts-chart>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/passing-rate-prediction/passing-rate-prediction.component.html": function node_modulesRawLoaderDistCjsJsSrcAppChartsPassingRatePredictionPassingRatePredictionComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\n  <highcharts-chart\n    [Highcharts]=\"Highcharts\"\n    [options]=\"chartOptions\"\n    style=\"width: 100%; height: 500px; display: block; float: left\"\n  ></highcharts-chart>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/predict-coursecompletion/predict-coursecompletion.component.html": function node_modulesRawLoaderDistCjsJsSrcAppChartsPredictCoursecompletionPredictCoursecompletionComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\n  <highcharts-chart\n    [Highcharts]=\"Highcharts\"\n    [options]=\"chartOptions\"\n    style=\"width: 100%; height: 400px; display: block; float: left\"\n  ></highcharts-chart>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/predict-exam-success/predict-exam-success.component.html": function node_modulesRawLoaderDistCjsJsSrcAppChartsPredictExamSuccessPredictExamSuccessComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\n  <highcharts-chart\n    [Highcharts]=\"Highcharts\"\n    [options]=\"chartOptions\"\n    style=\"width: 100%; height: 400px; display: block; float: left\"\n  ></highcharts-chart>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/presentation-skills/presentation-skills.component.html": function node_modulesRawLoaderDistCjsJsSrcAppChartsPresentationSkillsPresentationSkillsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"container\"></div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/procrastination/procrastination.component.html": function node_modulesRawLoaderDistCjsJsSrcAppChartsProcrastinationProcrastinationComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\n  <highcharts-chart\n    [Highcharts]=\"Highcharts\"\n    [options]=\"chartOptions\"\n    style=\"width: 100%; height: 400px; display: block; float: left\"\n  ></highcharts-chart>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/reading-analytics/reading-analytics.component.html": function node_modulesRawLoaderDistCjsJsSrcAppChartsReadingAnalyticsReadingAnalyticsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\n  <highcharts-chart\n    [Highcharts]=\"Highcharts\"\n    [options]=\"chartOptions\"\n    style=\"width: 100%; height: 400px; display: block; float: left\"\n  ></highcharts-chart>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/self-motivation/self-motivation.component.html": function node_modulesRawLoaderDistCjsJsSrcAppChartsSelfMotivationSelfMotivationComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\n  <highcharts-chart\n    [Highcharts]=\"Highcharts\"\n    [options]=\"chartOptions\"\n    style=\"width: 100%; height: 400px; display: block; float: left\"\n  ></highcharts-chart>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/social-analysis/social-analysis.component.html": function node_modulesRawLoaderDistCjsJsSrcAppChartsSocialAnalysisSocialAnalysisComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\n  <highcharts-chart\n    [Highcharts]=\"Highcharts\"\n    [options]=\"chartOptions\"\n    style=\"width: 100%; height: 400px; display: block; float: left\"\n  ></highcharts-chart>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/social-network-analysis/social-network-analysis.component.html": function node_modulesRawLoaderDistCjsJsSrcAppChartsSocialNetworkAnalysisSocialNetworkAnalysisComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\n  <highcharts-chart\n    [Highcharts]=\"Highcharts\"\n    [options]=\"chartOptions\"\n    style=\"width: 100%; height: 400px; display: block; float: left\"\n  ></highcharts-chart>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/student-comparison/student-comparison.component.html": function node_modulesRawLoaderDistCjsJsSrcAppChartsStudentComparisonStudentComparisonComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<SELECT id=\"list\" (change)=\"updateChart($event)\">\n  <option VALUE=\"A\">Clicks</option>\n  <option VALUE=\"B\">\"Lectures\" clicks</option>\n  <option VALUE=\"C\">\"Coursework\" clicks</option>\n  <option VALUE=\"D\">\"Practials\" clicks</option>\n  <option value=\"E\">Seen content</option>\n</SELECT>\n<div>\n  <highcharts-chart\n    [Highcharts]=\"Highcharts\"\n    [options]=\"chartOptions\"\n    style=\"width: 100%; height: 400px; display: block; float: left\"\n  ></highcharts-chart>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/student-interaction-patterns/student-interaction-patterns.component.html": function node_modulesRawLoaderDistCjsJsSrcAppChartsStudentInteractionPatternsStudentInteractionPatternsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\n  <highcharts-chart\n    [Highcharts]=\"Highcharts\"\n    [options]=\"chartOptions\"\n    style=\"width: 100%; height: 400px; display: block; float: left\"\n  ></highcharts-chart>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/time-distribution/time-distribution.component.html": function node_modulesRawLoaderDistCjsJsSrcAppChartsTimeDistributionTimeDistributionComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\n  <highcharts-chart\n    [Highcharts]=\"Highcharts\"\n    [options]=\"chartOptions\"\n    style=\"width: 100%; height: 400px; display: block; float: left\"\n  ></highcharts-chart>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/time-planning/time-planning.component.html": function node_modulesRawLoaderDistCjsJsSrcAppChartsTimePlanningTimePlanningComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\n  <highcharts-chart\n    [Highcharts]=\"Highcharts\"\n    [options]=\"chartOptions\"\n    style=\"width: 100%; height: 400px; display: block; float: left\"\n  ></highcharts-chart>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/video-analytics/video-analytics.component.html": function node_modulesRawLoaderDistCjsJsSrcAppChartsVideoAnalyticsVideoAnalyticsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\n  <highcharts-chart\n    [Highcharts]=\"Highcharts\"\n    [options]=\"chartOptions\"\n    style=\"width: 100%; height: 400px; display: block; float: left\"\n  ></highcharts-chart>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/video-engagements/video-engagements.component.html": function node_modulesRawLoaderDistCjsJsSrcAppChartsVideoEngagementsVideoEngagementsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\n  <highcharts-chart\n    [Highcharts]=\"Highcharts\"\n    [options]=\"chartOptions\"\n    style=\"width: 100%; height: 400px; display: block; float: left\"\n  ></highcharts-chart>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/writing-analytics/writing-analytics.component.html": function node_modulesRawLoaderDistCjsJsSrcAppChartsWritingAnalyticsWritingAnalyticsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\n  <highcharts-chart\n    [Highcharts]=\"Highcharts\"\n    [options]=\"chartOptions\"\n    style=\"width: 100%; height: 400px; display: block; float: left\"\n  ></highcharts-chart>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/component/add-data/add-data.component.html": function node_modulesRawLoaderDistCjsJsSrcAppComponentAddDataAddDataComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!--Data Entry form -->\n\n<div style=\"margin: auto;\">\n  <form [formGroup]=\"dataEntryForm\">\n\n    <div id=\"title\">\n      Add NEW Indicators and their Metrics\n    </div>\n   \n    <label *ngIf=\"successfulMessage\" >\n      <input type=\"checkbox\" class=\"alertCheckbox\" autocomplete=\"off\" />\n      <div class=\"alert success\">\n        <span class=\"alertClose\">X</span>\n        <span class=\"alertText\" [innerHTML]=\"successfulMessage\">\n        <br class=\"clear\"/></span>\n      </div>\n    </label>\n\n    <div id=\"dropdown\">\n      <label>Learning Events</label>\n      <mat-select placeholder=\"Learning Events\" (selectionChange)=\"learningValueChange($event.value)\"\n        formControlName=\"learningEvents\">\n        <mat-option *ngFor=\"let learningEvent of options\" [value]=\"learningEvent\">\n          {{ learningEvent }}\n        </mat-option>\n      </mat-select>\n      \n      <button style=\"padding: 6px 8px 6px 8px; float: right; margin-right: 8px; background-image: linear-gradient(45deg, #8e1e22 10%, #edcfcf 51%, #8e1e22 100%) !important; box-shadow: 2px 4px 5px 0px #ead8d8;\" class=\"buttonLaTool\" (click)='logout()'>Logout</button>\n      <span style=\"float: right; margin-right: 16px; margin-top: 17px;\" *ngIf=\"CUserName\">\n       Welcome, {{CUserName}}\n      </span>\n    </div>\n\n    <div id=\"activities\">\n      <label for=\"\">Learning Activities</label>\n      <mat-select formControlName=\"learningActivities\" [(ngModel)]=\"LaOptionValue\" placeholder=\"Learning Activities\" (selectionChange)=\"onActivityValueChange($event.value)\">\n        <mat-option *ngFor=\"let LearningAct of dropdownList\" [value]=\"LearningAct\" >\n         {{ LearningAct}}\n        </mat-option>\n      </mat-select>\n      <div style=\"color: rgb(4, 117, 14); margin-left: 212px; margin-top: 7px;\" *ngIf=\"similarActivityMessage\" [innerHTML]=\"similarActivityMessage\"></div>\n    </div>\n\n    <div formArrayName=\"indicator\">\n      <div *ngFor=\"let indicator of indicatorControls; let i = index\" [formGroupName]=\"i\">\n        <div id=\"indicators\">\n          <label class=\"indicatorName\">Indicators</label>\n          <input type=\"text\" formControlName=\"indicatorName\" placeholder=\"Indicator Name [ref]\" required/>\n        </div>\n\n        <div class=\"formfield\">\n          <label class=\"metrics\">Metrics</label>\n          <textarea class=\"text\" cols=\"30\" rows=\"10\" type=\"text\" formControlName=\"metrics\"\n            placeholder=\"Metrics must be comma seperated\" required></textarea>\n        </div>\n      </div>\n\n    </div>\n    <div id=\"savebtn\">\n      <button type=\"submit\" class=\"buttonLaTool\" \n        (click)='addData(learningEvents,learningActivities,indicator,metrics)'\n        [disabled]=\"dataEntryForm.pristine || dataEntryForm.invalid\">Save</button>\n    \n        \n      </div>\n  </form>\n\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/component/admin/admin.component.html": function node_modulesRawLoaderDistCjsJsSrcAppComponentAdminAdminComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n  <form [formGroup]=\"loginForm\" novalidate>\n    <div id=\"title\">\n      Login Form\n    </div>\n    <div id=\"username\">\n      <label>Username</label>\n      <input type=\"text\" formControlName=\"username\" required>\n    </div>\n\n    <div\n      *ngIf=\"loginForm.controls['username'].invalid && (loginForm.controls['username'].dirty || loginForm.controls['username'].touched)\"\n      class=\"alert\">\n      <div *ngIf=\"loginForm.controls['username'].errors.required\">\n        User Name is required.\n      </div>\n    </div>\n    <div id=\"password\">\n      <label class=\"learningActivities\">Password</label>\n      <input type=\"password\" formControlName=\"password\" required>\n    </div>\n    <div\n      *ngIf=\"loginForm.controls['password'].invalid && (loginForm.controls['password'].dirty || loginForm.controls['password'].touched)\"\n      class=\"alert\">\n      <div *ngIf=\"loginForm.controls['password'].errors.required\">\n        Password is required.\n      </div>\n    </div>\n    <div id=\"submit\">\n\n      <button class=\"submitbtn\" mat-raised-button color=\"primary\" type=\"submit\" (click)=\"submit()\"\n        [disabled]=\"loginForm.pristine || loginForm.invalid\">Login</button>\n    </div>\n\n\n\n  </form>\n\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/component/dashboard/dashboard.component.html": function node_modulesRawLoaderDistCjsJsSrcAppComponentDashboardDashboardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-chart-manager> </app-chart-manager>\n\n<div class=\"footer\">\n  <p>Dashboard is rendered with OpenLAIR.</p>\n</div>\n\n<a id=\"back-to-top\" class=\"btn back-to-top\" role=\"button\" (click)=\"backToTop()\">\n  <i class=\"material-icons buttonLaTool\">arrow_upward</i>\n</a>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/component/display/display.component.html": function node_modulesRawLoaderDistCjsJsSrcAppComponentDisplayDisplayComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<span class=\"tool_Home\">\n  <!-- Not run the demo if it is not home page -->\n  <div>\n    <span style=\"padding-bottom: 2px\">\n      <strong>Learning Events</strong><br />\n      <span class=\"stepDefine\" style=\"font-size: 14px; cursor: pointer;\" id=\"tooltipEvents\"\n        data-tooltipster='{\"side\":\"bottom\",\"animation\":\"fall\", \"delay\":\"200\", \"theme\":\"tooltipster-shadow\"}' title=\"\">\n        <img width=\"16px\" src=\"assets/images/question.png\" /> Click here for more details\n        <span class=\"\" id=\"contentEvents\">\n          <p style=\"text-align: left\">\n            <strong>Learning Events</strong><br />\n            A learning objective is the desired outcome of a single or multiple\n            learning event and is used to establish learning <br />\n            activities to achieve the overall learning outcome\n            <a target=\"_blank\"\n              href=\"https://research.tue.nl/en/publications/teacher-learning-in-the-context-of-educational-innovation-learnin\">[13]</a>.\n            Learning design literature identified eight learning events:\n            <br />create, explore, practice, imitate, receive, debate,\n            meta-learn/Elf-reflect, and experiment\n            <a target=\"_blank\" href=\"http://www.labset.net/media/prod/8LEM.pdf\">[1]</a>,\n            <a target=\"_blank\" href=\"https://www.tandfonline.com/doi/abs/10.1080/10494820701343694\">[2]</a>.\n            <br /><br />\n            <img width=\"800px\" src=\"assets/images/events.png\" />\n          </p>\n        </span>\n      </span>\n    </span>\n    <br />\n    <mat-form-field>\n      <mat-select class=\"step1\" placeholder=\"Learning Events\" name=\"Select\" [(ngModel)]=\"LearningEvents_mateSelect\"\n        multiple #selectionModel=\"ngModel\" (valueChange)=\"onEventValueChange($event)\">\n        <app-select-check-all [model]=\"selectionModel\" [values]=\"AllLearningEventsOptions\"\n          (sendCount)=\"onEventValueChange($event)\">\n        </app-select-check-all>\n        <mat-option *ngFor=\"let option of AllLearningEventsOptions\" [value]=\"option\">\n          {{ option }}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n  </div>\n  <div>\n    <strong>Learning Activites</strong><br />\n    <span style=\"font-size: 14px; cursor: pointer;\" id=\"tooltipActivites\"\n      data-tooltipster='{\"side\":\"bottom\",\"animation\":\"fall\", \"delay\":\"200\", \"theme\":\"tooltipster-shadow\"}' title=\"\">\n      <img width=\"16px\" src=\"assets/images/question.png\" /> Click here for more\n      details\n      <span class=\"\" id=\"contentActivites\">\n        <p style=\"text-align: left\">\n          <strong>Learning Activites</strong><br />\n          A study by Gruber et al.\n          <a target=\"_blank\"\n            href=\"https://www.researchgate.net/publication/334170760_Design_Thinking_for_Technology_Enhanced_Learning\">[3]</a>\n          took the model of learning events and added learning activities<br />\n          to identify its outcomes in LD. Learning activities are split into\n          in-class methods and tools,<br />\n          and online methods and tools [<a target=\"_blank\"\n            href=\"https://www.researchgate.net/publication/334170760_Design_Thinking_for_Technology_Enhanced_Learning\">3</a>,\n          <a target=\"_blank\"\n            href=\"https://www.researchgate.net/publication/222945649_Factors_affecting_teachers'_participation_in_professional_learning_activities\">9</a>].\n          Examples of in-class methods and tools are exercise, <br />exam,\n          presentation, discussion, demonstration, etc. On the other hand,\n          online methods and <br />tools are blogs, wikis, forums, photo and\n          audio notes, online tests and quizzes, e-portfolios, <br />etc.\n        </p>\n      </span>\n    </span>\n    <br /><br />\n    <ng-multiselect-dropdown class=\"step2\" [placeholder]=\"'Learning Activities'\" [data]=\"dropdownList\"\n      [(ngModel)]=\"selectedActivityItems\" [settings]=\"dropdownSettings\" (onSelect)=\"onActivitySelect($event)\"\n      (onSelectAll)=\"onSelectAll($event)\" (onDeSelect)=\"checkvalue($event)\">\n    </ng-multiselect-dropdown>\n  </div>\n  <div>\n    <strong>Indicators</strong><br />\n    <span style=\"font-size: 14px; cursor: pointer;\" id=\"tooltipIndicators\"\n      data-tooltipster='{\"side\":\"bottom\",\"animation\":\"fall\", \"delay\":\"200\", \"theme\":\"tooltipster-shadow\"}' title=\"\">\n      <span><img width=\"16px\" src=\"assets/images/question.png\" /> Click here for\n        more details</span>\n      <span class=\"toolBoxCss\" id=\"contentIndicators\">\n        <p style=\"height: 572px\">\n          <strong>Indicators</strong><br />\n          Metrics (measurements) are used to create indicators; an indicator is\n          the result of the analysis of one<br />\n          or multiple metrics (e.g. number of views, login/logout frequency &\n          time, number of posts, etc.) and gives\n          <br />\n          a more comprehensive picture on a particular (abstract) learner\n          status, e.g. reading comprehension, <br />\n          self-reflection, etc. An indicator covers a particular aspect of an\n          abstract variable (e.g., student engagement)<br />\n          by using relevant (measurable) items.<br /><br />\n          Here is an example of Student Engagement in Moodle. <br />\n          <img src=\"assets/images/engagement.jpg\" />\n        </p>\n      </span>\n    </span>\n    <br /><br />\n    <input class=\"step3\" matInput [(ngModel)]=\"searchInd\" placeholder=\"Search Indicator\"\n      (change)=\"searchIndicator(searchInd)\" />\n  </div>\n  <div>\n    <strong>Metrics</strong><br />\n    <span style=\"font-size: 14px; cursor: pointer;\" id=\"tooltipMetrics\"\n      data-tooltipster='{\"side\":\"bottom\",\"animation\":\"fall\", \"delay\":\"200\", \"theme\":\"tooltipster-shadow\"}' title=\"\">\n      <img width=\"16px\" src=\"assets/images/question.png\" /> Click here for more\n      details\n      <span class=\"toolBoxCss\" id=\"contentMetrics\">\n        <p style=\"text-align: left\">\n          <strong>Metrics</strong><br />\n          Learning analytics applications collect data from the interaction\n          between learners and LMSs.<br />\n          To make sense of these captured data, they need to be categorized in a\n          corresponding unit of<br />\n          measurement (e.g. number of views, login/logout frequency & time,\n          number of posts, etc.). In<br />\n          this paper, we refer to the units of measurements as metrics.\n        </p>\n      </span>\n    </span>\n    <br /><br />\n    <input class=\"stepMetrics\" matInput [(ngModel)]=\"searchMat\" placeholder=\"Search Metrics\"\n      (change)=\"learningEventsChangeOnSearch(searchMat)\" />\n  </div>\n\n  <div style=\"margin-left: 50px\">\n    <label *ngIf=\"ind\" style=\"color: gray; font-size: 15px\"> Selected Indicator(s)</label>\n    <ul id=\"reset\" style=\"line-height: 15%; font-size: 15px\" *ngFor=\"let selectInd of ind_list\">\n      <li>\n        {{ selectInd }}\n      </li>\n    </ul>\n    <span style=\"padding-top: 16px; padding-bottom: 16px\">\n      <button class=\"stepVisualize buttonLaTool\" (click)=\"forwardIndicators(ind_list)\">\n        <i class=\"fa-solid fa-display\"></i> &nbsp; Visualize\n      </button>\n      <button class=\"stepDownload buttonLaTool\" (click)=\"getSelectedind(mat_list)\"><i class=\"fa-solid fa-download\"></i>\n        &nbsp; JSON\n      </button>\n\n      <button class=\"stepDownloadText buttonLaTool\" (click)=\"download(mat_list, 'text/plain', 'Indicators TEXT.txt')\">\n        <i class=\"fa-solid fa-download\"></i> &nbsp; TEXT\n      </button>\n\n      <button class=\"stepReset buttonRed\" (click)=\"reset()\"><i class=\"fa-solid fa-arrow-rotate-right\"></i> &nbsp;\n        Reset</button>\n    </span>\n\n    <!-- <button class=\"stepReset buttonLaTool\"  (click)=\"reset()\"><img width=\"70px\" src=\"assets/images/reset.png\"/></button>  -->\n\n  </div>\n\n  <ng-template #secondDialog>\n    <h2 matDialogTitle>Metrics</h2>\n    <mat-dialog-content>\n      <ul *ngFor=\"let mat of sp\">\n        <!-- style=\"line-height: 20%\" -->\n        <li>{{ mat }}</li>\n      </ul>\n    </mat-dialog-content>\n    <button mat-button mat-dialog-close>Close</button>\n  </ng-template>\n\n  <table style=\"margin-left: 10px\">\n    <thead>\n      <th>Learning Events</th>\n      <div>\n        <th style=\"margin-left: 40px\">(Learning) Activities</th>\n      </div>\n      <div style=\"margin-left: 80px\">\n        <th>Indicators</th>\n      </div>\n    </thead>\n\n    <!-- for loop for learning events -->\n    <tr *ngFor=\"let learningEvents of data\">\n      <td style=\"width: 15\" class=\"leraningevents\">\n        {{ learningEvents.LearningEvents }}\n      </td>\n      <td>\n    <tr class=\"activities\" *ngFor=\"let LearningActivities of learningEvents.LearningActivities\">\n      <td style=\"width: 210px\">\n        {{ LearningActivities.Name }}\n      </td>\n      <td class=\"highlightIndicators\">\n        <!-- loop for indicators -->\n    <tr *ngFor=\"let indic of LearningActivities.indicator\">\n      <input class=\"step4\" #indicatorCheckbox type=\"checkbox\" value=\"indic\" [checked]=\"indic.checked\"\n        (change)=\"Checkbox($event, indic)\" />\n\n      <a class=\"sortable stepViewMetrics\" (click)=\"getMeterics(indic)\">\n        <span [innerHTML]=\"indic.indicatorName | sanitizeHtml: searchInd\">\n          {{ indic.indicatorName }}\n        </span>\n      </a>\n      <td *ngIf=\"searchMat\">\n    <tr>\n      <a class=\"sortable\">\n        <span [innerHTML]=\"indic.metrics | sanitizeHtml: searchMat\">\n          {{ indic.metrics }}\n        </span>\n      </a>\n    </tr>\n    </td>\n    </tr>\n    </td>\n    </tr>\n    </td>\n    </tr>\n  </table>\n\n  <a id=\"back-to-top\" class=\"btn back-to-top\" role=\"button\" (click)=\"backToTop()\">\n    <i class=\"material-icons buttonLaTool\">arrow_upward</i>\n  </a>\n</span>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/component/dropdown/dropdown.component.html": function node_modulesRawLoaderDistCjsJsSrcAppComponentDropdownDropdownComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-form-field>\n  <mat-label>Learning Events</mat-label>\n  <mat-select\n    name=\"Select\"\n    class=\"design\"\n    [formControl]=\"learningevents\"\n    [(value)]=\"selected\"\n    [(ngModel)]=\"selected\"\n    (selectionChange)=\"changeLearningEvents($event.value, selected)\"\n    multiple\n  >\n    <mat-select-trigger> {{ selected }}</mat-select-trigger>\n\n    <mat-option\n      (click)=\"$event.stopPropagation()\"\n      (change)=\"toggleSelection($event)\"\n    >\n      {{ text }}\n    </mat-option>\n\n    <mat-option\n      *ngFor=\"let learningevents of learningEvents\"\n      [value]=\"learningevents\"\n      >{{ learningevents }}</mat-option\n    >\n  </mat-select>\n</mat-form-field>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/component/header/header.component.html": function node_modulesRawLoaderDistCjsJsSrcAppComponentHeaderHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"header\" id=\"header\">\r\n  <mat-toolbar style=\"height: 72px;\" color=\"primary\">\r\n    <span class=\"step0\" >\r\n      <span id=\"tooltipHeaderLogo\" data-tooltipster='{\"side\":\"right\",\"animation\":\"grow\", \"delay\":\"200\", \"theme\":\"tooltipster-shadow\"}'>\r\n        <a><img routerLink=\"/\" class=\"HeaderLogo\"  style=\"height: 66px; padding-top: 9px\" src=\"assets/images/logo.png\" />\r\n          <span id=\"contentHeaderLogo\">\r\n            <!-- <p>\r\n              <strong>OpenLAIR</strong><br /><br />\r\n              Acronym [Blinded]<br />\r\n            </p> -->\r\n            <p>\r\n              <strong>OpenLAIR <a target=\"_blank\" href=\"https://www.researchgate.net/publication/360034339_What_Indicators_Can_I_Serve_You_with_An_Evaluation_of_a_Research-Driven_Learning_Analytics_Indicator_Repository\">(Ahmad et al., 2022)</a> and <a target=\"_blank\" href=\"https://www.researchgate.net/publication/362256819_Connecting_the_dots_-_A_literature_review_on_learning_analytics_indicators_from_a_learning_design_perspective\">(Ahmad et al., 2022)</a> </strong><br /><br />\r\n              Open Learning Analytics Indicator Repository<br />\r\n            </p>\r\n          </span>\r\n      </a>\r\n    </span>\r\n    </span>\r\n    \r\n    \r\n    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;\r\n    <span id=\"tooltipHeaderLogo2\" data-tooltipster='{\"side\":\"right\",\"animation\":\"grow\", \"delay\":\"200\", \"theme\":\"tooltipster-shadow\"}'>\r\n      <button class=\"buttonHead\" (click)=\"reset()\"><i class=\"fa-solid fa-arrow-rotate-right\"></i> Click here if the below TABLE is empty\r\n        <span id=\"contentHeaderLogo2\" >\r\n          <p>\r\n            Please wait for 10 seconds\r\n          </p>\r\n        </span>\r\n\r\n      </button>\r\n    </span>\r\n    \r\n\r\n    <!-- <a style=\"color: white; font-size: 14px;\" (click)=\"reset()\"> Click here if the table is empty</a>           reset()-->\r\n    <span class=\"example-spacer\"></span>\r\n\r\n\r\n    <button class=\"buttonHead\" (click)='addIndicators()'><img style=\"width: 17px;\"\r\n      src=\"assets/images/add.png\" />&nbsp; Add Indicators</button>\r\n\r\n    <!-- <a href=\"#\" onclick=\"myTour()\">Start Tour</a> -->\r\n    <button class=\"stepReferences buttonHead\" (click)='references()'><img style=\"width: 14px;\"\r\n        src=\"assets/images/ref.png\" />&nbsp; References</button>\r\n    \r\n    <!-- <a mat-button class=\"stepReferences\" href=\"https://atezaz.github.io/references.html\" target=\"_blank\">References</a> -->\r\n    <button class=\"stepStartTour buttonHead\" id=\"myTourBtn\">\r\n      <i class=\"fa-solid fa-flag\"></i>&nbsp; Start Tour\r\n    </button>\r\n  </mat-toolbar>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/component/reference/referance.component.html": function node_modulesRawLoaderDistCjsJsSrcAppComponentReferenceReferanceComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<blockquote>\n    <p>\n        [1] Leclercq, D. & Poumay, M. (2005). The 8 learning Events Model. (2005).1. LabSET\n        <cite>\n            <a href=\"http://www.labset.net/media/prod/8LEM.pdf\">University of Liège</a>\n        </cite>\n    </p>\n    <p>\n       [2] Verpoorten, Dominique, Marianne Poumay, and Dieudonné Leclercq. (2007) \"The eight learning events model: A pedagogic conceptual tool supporting diversification of learning methods.\" Interactive Learning Environments 15.2 : 151-160.\n       <a target = \"_blank\" href = \"https://doi.org/10.1080/10494820701343694\"> doi.org/10.1080/10494820701343694</a>\n    </p>\n    <p>\n        [3] Gruber, Marion. (2019). Design Thinking for Technology Enhanced Learning\n        <cite>\n            <a target = \"_blank\" href=\"https://www.researchgate.net/publication/334170760_Design_Thinking_for_Technology_Enhanced_Learning\">Retrieved link </a>\n        </cite> \n    </p>\n    <p>\n        [4] Lockyer, Lori, Elizabeth Heathcote, and Shane Dawson. \"Informing pedagogical action: Aligning learning analytics with learning design.\" American Behavioral Scientist 57.10 (2013): 1439-1459.\n        <a target = \"_blank\" href = \"https://www.doi.org/10.1177/0002764213479367\"> doi.org/10.1177/0002764213479367</a>\n    </p>\n    <p>\n        [5] Bakharia, Aneesha, et al. \"A conceptual framework linking learning design with learning analytics.\" Proceedings of the Sixth International Conference on Learning Analytics & Knowledge. ACM, 2016.\n        <a target = \"_blank\" href = \"https://doi.org/10.1145/2883851.2883944\"> doi.org/10.1145/2883851.2883944</a>\n    </p>\n    <p>\n        [6] Mangaroska, Katerina, and Michail Giannakos. \"Learning analytics for learning design: Towards evidence-driven decisions to enhance learning.\" European conference on technology enhanced learning. Springer, Cham, 2017.\n        <a target = \"_blank\" href = \"https://doi.org/10.1007/978-3-319-66610-5_38\"> doi.org/10.1007/978-3-319-66610-5_38</a>\n    </p>\n    <p>\n        [7] Mor, Yishay, and Brock Craft. \"Learning design: reflections on a snapshot of the current landscape.\" Research in learning technology 20 (2012): 85-94.\n        <a target = \"_blank\" href = \"https://doi.org/10.3402/rlt.v20i0.19196\"> doi.org/10.3402/rlt.v20i0.19196</a>\n    </p>\n    <p>\n        [8]  Hernández-Leo, D., Rodriguez Triana, M. J., Inventado, P. S., & Mor, Y. (2017). Preface: connecting learning design and learning analytics. Interaction Design and Architecture (s) Journal-IxD&A, 33(ARTICLE), 3-8.\n        <cite>\n            <a target = \"_blank\" href=\"https://infoscience.epfl.ch/record/231720\">Retrieved link </a>\n        </cite> \n\n    </p>\n    <p>\n        [9] Kwakman, Kitty. \"Factors affecting teachers’ participation in professional learning activities.\" Teaching and teacher education 19.2 (2003): 149-170.\n        <a target = \"_blank\" href = \"https://doi.org/10.1016/S0742-051X(02)00101-4\"> doi.org/10.1016/S0742-051X(02)00101-4</a>\n    </p>\n    <p>\n        [10] K. Mangaroska and M. N. Giannakos, \"Learning analytics for learning design: A systematic literature review of analytics-driven design to enhance learning,\" in IEEE Transactions on Learning Technologies.\n        <a target = \"_blank\" href = \"https://doi.org/10.1109/TLT.2018.2868673\"> doi.org/10.1109/TLT.2018.2868673</a>\n    </p>\n    <p>\n        [11] F. Martin, A. Ndoye, and P. Wilkins, “Using learning analytics to enhance student learning in online courses based on quality matters standards,” Journal of Educational Technology Systems, vol. 45, no. 2, pp. 165–187, 2016.\n        <a target = \"_blank\" href = \"https://doi.org/10.1177/0047239516656369\"> doi.org/10.1177/0047239516656369</a>\n    </p>\n    <p>\n        [12] Morss, Kate, and Rowena Murray. Teaching at university: A guide for postgraduates and researchers. Sage, 2005\n    </p>\n    <p>\n        [13] Bakkenes, Inge, Jan D. Vermunt, and Theo Wubbels. \"Teacher learning in the context of educational innovation: Learning activities and learning outcomes of experienced teachers.\" Learning and instruction 20.6 (2010): 533-548.\n        <a target = \"_blank\" href = \"https://doi.org/10.1016/j.learninstruc.2009.09.001\"> doi.org/10.1016/j.learninstruc.2009.09.001</a>\n    </p>\n    <p>\n        [14] Call for Papers of the 1st International Conference on Learning Analytics & Knowledge (LAK 2011)\n    </p>\n    <p>\n        [15]  Park, Yeonjeong, and I-H. Jo. \"Development of the learning analytics dashboard to support students’ learning performance.\" Journal of Universal Computer Science 21.1 (2015): 110.\n         <cite>\n            <a target = \"_blank\" href=\"http://www.jucs.org/jucs_21_1/development_of_the_learning/jucs_21_01_0110_0133_park.pdf\">Retrieved link </a>\n        </cite> \n\n    </p>\n    <p>\n        [16] Duval, Erik. \"Attention please!: learning analytics for visualization and recommendation.\" LAK 11 (2011): 9-17.\n        <a target = \"_blank\" href = \"https://doi.org/10.1145/2090116.2090118\"> doi.org/10.1145/2090116.2090118</a>\n    </p>\n    <p>\n        [17] Gašević, Dragan, Shane Dawson, and George Siemens. \"Let’s not forget: Learning analytics are about learning.\" TechTrends 59.1 (2015): 64-71.\n        <a target = \"_blank\" href = \"https://doi.org/10.1007/s11528-014-0822-x\"> doi.org/10.1007/s11528-014-0822-x</a>\n    </p>\n    <p>\n        [18] Ferguson, R. (2012). Learning analytics: drivers, developments and challenges. International Journal of Technology Enhanced Learning, 4(5/6), 304-317.\n        <cite>\n            <a target = \"_blank\" href=\"https://www.inderscienceonline.com/doi/abs/10.1504/IJTEL.2012.051816\">Retrieved link </a>\n        </cite> \n\n    </p>\n    <p>\n        [19] Beetham, Helen, and Rhona Sharpe, eds. Rethinking pedagogy for a digital age: Designing for 21st century learning. routledge, 2013.\n        <cite>\n            <a target = \"_blank\" href=\"https://www.tcrecord.org/books/abstract.asp?ContentId=17261\">Retrieved link </a>\n        </cite> \n\n    </p>\n    <p>\n        [20] Phillips, Rob, et al. \"Exploring learning analytics as indicators of study behavior.\" EdMedia+ Innovate Learning. Association for the Advancement of Computing in Education (AACE), 2012.\n        <cite>\n            <a target = \"_blank\" href=\"https://www.learntechlib.org/p/41174/\">Retrieved link </a>\n        </cite>\n\n    </p>\n    <p>\n        [21] Mor, Yishay, Brock Craft, and Davinia Hernández-Leo. \"The art and science of learning design: Editoral.\" Research in Learning Technology 21 (2013).\n        <a target = \"_blank\" href = \"https://doi.org/10.3402/rlt.v21i0.22513\"> doi.org/10.3402/rlt.v21i0.22513</a>\n    </p>\n    <p>\n        [22] Craftb, Brock. \"Learning Design: reflections upon the current landscape.\" (2012).\n        <cite>\n            <a target = \"_blank\" href=\"http://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.689.2132\">Retrieved link </a>\n        </cite> \n\n    </p>\n    <p>\n        [23] Koper, Rob. \"Current research in learning design.\" Educational Technology & Society 9.1 (2006): 13-22 \n        <cite>\n            <a target = \"_blank\" href=\"https://www.jstor.org/stable/jeductechsoci.9.1.13\">Retrieved link </a>\n        </cite> \n\n    </p>\n    <p>\n        [24]  Tan, J. P. L., Koh, E., Jonathan, C., & Yang, S. (2017). Learner dashboards a double-edged sword? Students’ sense-making of a collaborative critical reading and learning analytics environment for fostering 21st-century literacies.\n        <a target = \"_blank\" href = \"https://doi.org/10.18608/jla.2017.41.7\"> doi.org/10.18608/jla.2017.41.7</a>\n    </p>\n    <p>\n        [25]  Park, Y., & Jo, I. H. (2015). Development of the learning analytics dashboard to support students’ learning performance. Journal of Universal Computer Science, 21(1), 110.\n        <cite>\n            <a target = \"_blank\" href=\"http://www.jucs.org/jucs_21_1/development_of_the_learning/jucs_21_01_0110_0133_park.pdf\">Retrieved link </a>\n        </cite> \n\n</p>\n    <p>\n        [26]  Brouwer, N., Bredeweg, B., Latour, S., Berg, A., & van der Huizen, G. (2016, September). Learning analytics pilot with coach2-Searching for effective mirroring. In European Conference on Technology Enhanced Learning (pp. 363-369). Springer, Cham.\n        <a target = \"_blank\" href = \"https://doi.org/10.1007/978-3-319-45153-4_28\"> doi.org/10.1007/978-3-319-45153-4_28</a>\n    </p>\n    <p>\n        [27]  Beheshitha, S. S., Hatala, M., Gašević, D., & Joksimović, S. (2016, April). The role of achievement goal orientations when studying effect of learning analytics visualizations. In Proceedings of the sixth international conference on learning analytics & knowledge (pp. 54-63). ACM.\n        <a target = \"_blank\" href = \"https://doi.org/10.1145/2883851.2883904\"> doi.org/10.1145/2883851.2883904</a>\n    </p>\n    <p>\n        [28]  Koulocheri, E., & Xenos, M. (2013, April). Considering formal assessment in learning analytics within a PLE: the HOU2LEARN case. In Proceedings of the Third International Conference on Learning Analytics and Knowledge (pp. 28-32). ACM.\n        <a target = \"_blank\" href = \"https://doi.org/10.1145/2460296.2460304\"> doi.org/10.1145/2460296.2460304</a>\n    </p>\n    <p>\n        [29]  Håklev, S., Sharma, K., Slotta, J., & Dillenbourg, P. (2017, September). Contextualizing the co-creation of artefacts within the nested social structure of a collaborative MOOC. In European Conference on Technology Enhanced Learning (pp. 67-81). Springer, Cham.\n        <a target = \"_blank\" href = \"https://doi.org/10.1007/978-3-319-66610-5_6\"> doi.org/10.1007/978-3-319-66610-5_6</a>\n    </p>\n    <p>\n        [30]  Tervakari, A. M., Silius, K., Koro, J., Paukkeri, J., & Pirttilä, O. (2014, April). Usefulness of information visualizations based on educational data. In 2014 IEEE global engineering education conference (EDUCON) (pp. 142-151). IEEE.\n        <a target = \"_blank\" href = \"https://doi.org/10.1109/EDUCON.2014.6826081\"> doi.org/10.1109/EDUCON.2014.6826081</a>\n    </p>\n    <p>\n        [31]  Davis, D., Jivet, I., Kizilcec, R. F., Chen, G., Hauff, C., & Houben, G. J. (2017, March). Follow the successful crowd: raising MOOC completion rates through social comparison at scale. In Proceedings of the seventh international learning analytics & knowledge conference (pp. 454-463). ACM.\n        <a target = \"_blank\" href = \"https://doi.org/10.1145/3027385.3027411\"> doi.org/10.1145/3027385.3027411</a>\n    </p>\n    <p>\n        [32] Sedrakyan, G., Leony, D., Muñoz-Merino, P. J., Kloos, C. D., & Verbert, K. (2017, September). Evaluating student-facing learning dashboards of affective states. In European Conference on Technology Enhanced Learning (pp. 224-237). Springer, Cham.\n        <a target = \"_blank\" href = \"https://doi.org/10.1007/978-3-319-66610-5_17\"> doi.org/10.1007/978-3-319-66610-5_17</a>\n    </p>\n    <p>\n        [33]  de-la-Fuente-Valentín, L., Pardo, A., Hernández, F. L., & Burgos, D. (2015). A Visual Analytics Method for Score Estimation in Learning Courses. J. UCS, 21(1), 134-155.\n        <cite>\n            <a target = \"_blank\" href=\"http://www.jucs.org/jucs_21_1/a_visual_analytics_method/jucs_21_01_0134_0155_valentin.pdf\">Retrieved link </a>\n        </cite> \n\n    </p>\n    <p>\n        [34] Venant, R., Sharma, K., Vidal, P., Dillenbourg, P., & Broisin, J. (2017, September). Using sequential pattern mining to explore learners’ behaviors and evaluate their correlation with performance in inquiry-based learning. In European Conference on Technology Enhanced Learning (pp. 286-299). Springer, Cham.\n        <a target = \"_blank\" href = \"https://doi.org/10.1007/978-3-319-66610-5_21\"> doi.org/10.1007/978-3-319-66610-5_21</a>\n    </p>\n    <p>\n        [35]  Schneider, J., Börner, D., Van Rosmalen, P., & Specht, M. (2016). Can you help me with my pitch? Studying a tool for real-time automated feedback. IEEE Transactions on Learning Technologies, 9(4), 318-327.\n        <a target = \"_blank\" href = \"https://doi.org/10.1109/TLT.2016.2627043\"> doi.org/10.1109/TLT.2016.2627043</a>\n    </p>\n    <p>\n        [36]  Ruiz, S., Charleer, S., Urretavizcaya, M., Klerkx, J., Fernández-Castro, I., & Duval, E. (2016, April). Supporting learning by considering emotions: tracking and visualization a case study. In Proceedings of the sixth international conference on learning analytics & knowledge (pp. 254-263). ACM.\n        <a target = \"_blank\" href = \"https://doi.org/10.1145/2883851.2883888\"> doi.org/10.1145/2883851.2883888</a>\n    </p>\n    <p>\n        [37]  Barber, R., & Sharkey, M. (2012, April). Course correction: Using analytics to predict course success. In Proceedings of the 2nd international conference on learning analytics and knowledge (pp. 259-262). ACM.\n        <a target = \"_blank\" href = \"https://doi.org/10.1145/2330601.2330664\"> doi.org/10.1145/2330601.2330664</a>\n    </p>\n    <p>\n        [38]  Worsley, M. (2018, March). (Dis) engagement matters: Identifying efficacious learning practices with multimodal learning analytics. In Proceedings of the 8th International Conference on Learning Analytics and Knowledge (pp. 365-369). ACM.\n        <a target = \"_blank\" href = \"https://doi.org/10.1145/3170358.3170420\"> doi.org/10.1145/3170358.3170420</a>\n    </p>\n    <p>\n        [39]  Santos, J. L., Verbert, K., Govaerts, S., & Duval, E. (2013, April). Addressing learner issues with StepUp!: an evaluation. In Proceedings of the Third International Conference on Learning Analytics and Knowledge (pp. 14-22). ACM.\n        <a target = \"_blank\" href = \"https://doi.org/10.1145/2460296.2460301\"> doi.org/10.1145/2460296.2460301</a>\n    </p>\n    <p>\n        [40]  Ochoa, X., Domínguez, F., Guamán, B., Maya, R., Falcones, G., & Castells, J. (2018, March). The rap system: automatic feedback of oral presentation skills using multimodal analysis and low-cost sensors. In Proceedings of the 8th international conference on learning analytics and knowledge (pp. 360-364). ACM.\n        <a target = \"_blank\" href = \"https://doi.org/10.1145/3170358.3170406\"> doi.org/10.1145/3170358.3170406</a>\n    </p>\n    <p>\n        [41]  Corrin, L., & de Barba, P. (2014). Exploring Students. Interpretation of Feedback Delivered through Learning Analytics Dashboards’, in Rhetoric and Reality: Critical Perspectives on Educational Technology, Eds. B. Hegarty, J. McDOnald and S. Loke (Dunedin: ascilite proceedings, 2014), 28.\n        <cite>\n            <a target = \"_blank\" href=\"https://researchbank.swinburne.edu.au/items/b81ec459-0eb4-4ccb-b221-e6876166e213/1/\">Retrieved link </a>\n        </cite> \n         \n    </p>\n    <p>\n        [42]  Fougt, S. S., Siebert-Evenstone, A., Eagan, B., Tabatabai, S., & Misfeldt, M. (2018, March). Epistemic network analysis of students' longer written assignments as formative/summative evaluation. In Proceedings of the 8th International Conference on Learning Analytics and Knowledge (pp. 126-130). ACM.\n        <a target = \"_blank\" href = \"https://doi.org/10.1145/3170358.3170414\"> doi.org/10.1145/3170358.3170414</a>\n    </p>\n    <p>\n        [43]  Holman, C., Aguilar, S., & Fishman, B. (2013, April). GradeCraft: What can we learn from a game-inspired learning management system?. In Proceedings of the third international conference on learning analytics and knowledge (pp. 260-264). ACM.\n        <a target = \"_blank\" href = \"https://doi.org/10.1145/2460296.2460350\"> doi.org/10.1145/2460296.2460350</a>\n    </p>\n    <p>\n        [44]  Feild, J., Lewkow, N., Burns, S., & Gebhardt, K. (2018, March). A generalized classifier to identify online learning tool disengagement at scale. In Proceedings of the 8th International Conference on Learning Analytics and Knowledge (pp. 61-70). ACM.\n        <a target = \"_blank\" href = \"https://doi.org/10.1145/3170358.3170370\"> doi.org/10.1145/3170358.3170370</a>\n    </p>\n    <p>\n        [45]  Melero, J., Hernández‐Leo, D., Sun, J., Santos, P., & Blat, J. (2015). How was the activity? A visualization support for a case of location‐based learning design. British Journal of Educational Technology, 46(2), 317-329.\n        <a target = \"_blank\" href = \"https://doi.org/10.1111/bjet.12238\"> doi.org/10.1111/bjet.12238</a>\n    </p>\n    <p>\n        [46]  Davis, D., Kizilcec, R. F., Hauff, C., & Houben, G. J. (2018, March). The half-life of MOOC knowledge: a randomized trial evaluating knowledge retention and retrieval practice in MOOCs. In Proceedings of the 8th International Conference on Learning Analytics and Knowledge (pp. 1-10). ACM.\n        <a target = \"_blank\" href = \"https://doi.org/10.1145/3170358.3170383\"> doi.org/10.1145/3170358.3170383</a>\n\n    </p>\n    <p>\n        [47]  Harrer, A., & Göhnert, T. (2015, March). Integrated representations and small data: Towards contextualized and embedded analytics tools for learners. In Proceedings of the fifth international conference on learning analytics and knowledge (pp. 406-407). ACM.\n        <a target = \"_blank\" href = \"https://doi.org/10.1145/2723576.2723665\"> doi.org/10.1145/2723576.2723665</a>\n    </p>\n    <p>\n        [48]  Liu, M., Calvo, R. A., Pardo, A., & Martin, A. (2014). Measuring and visualizing students’ behavioral engagement in writing activities. IEEE Transactions on learning technologies, 8(2), 215-224.\n        <a target = \"_blank\" href = \"https://doi.org/10.1109/TLT.2014.2378786\"> doi.org/10.1109/TLT.2014.2378786</a>\n    </p>\n    <p>\n        [49]  Wise, A., Zhao, Y., & Hausknecht, S. (2014). Learning analytics for online discussions: Embedded and extracted approaches. Journal of Learning Analytics, 1(2), 48-71.\n        <cite>\n            <a target = \"_blank\" href=\"https://eric.ed.gov/?id=EJ1127052\">Retrieved link </a>\n        </cite> \n\n    </p>\n    <p>\n        [50]  Iandoli, L., Quinto, I., De Liddo, A., & Shum, S. B. (2014). Socially augmented argumentation tools: Rationale, design and evaluation of a debate dashboard. International Journal of Human-Computer Studies, 72(3), 298-319.\n        <a target = \"_blank\" href = \"https://doi.org/10.1016/j.ijhcs.2013.08.006\"> doi.org/10.1016/j.ijhcs.2013.08.006</a>\n    </p>\n    <p>\n        [51] Kump, B., Seifert, C., Beham, G., Lindstaedt, S. N., & Ley, T. (2012, April). Seeing what the system thinks you know: visualizing evidence in an open learner model. In Proceedings of the 2nd international conference on learning analytics and knowledge (pp. 153-157). ACM.\n        <a target = \"_blank\" href = \"https://doi.org/10.1145/2330601.2330640\"> doi.org/10.1145/2330601.2330640</a>\n    </p>\n    <p>\n        [52]  McAuley, J., O'Connor, A., & Lewis, D. (2012, April). Exploring reflection in online communities. In Proceedings of the 2nd international conference on learning analytics and knowledge (pp. 102-110). ACM.\n        <a target = \"_blank\" href = \"https://doi.org/10.1145/2330601.2330630\"> doi.org/10.1145/2330601.2330630</a>\n    </p>\n    <p>\n        [53]  Govaerts, S., Verbert, K., & Duval, E. (2011, December). Evaluating the student activity meter: two case studies. In International Conference on Web-Based Learning (pp. 188-197). Springer, Berlin, Heidelberg.\n        <a target = \"_blank\" href = \"https://doi.org/10.1007/978-3-642-25813-8_20\"> doi.org/10.1007/978-3-642-25813-8_20</a>\n    </p>\n    <p>\n        [54]  Arnold, K. E., & Pistilli, M. D. (2012, April). Course signals at Purdue: Using learning analytics to increase student success. In Proceedings of the 2nd international conference on learning analytics and knowledge (pp. 267-270). ACM.\n        <a target = \"_blank\" href = \"https://doi.org/10.1145/2330601.2330666\"> doi.org/10.1145/2330601.2330666</a>\n    </p>\n    <p>\n        [55]  Cooper, K., & Khosravi, H. (2018, March). Graph-based visual topic dependency models: Supporting assessment design and delivery at scale. In Proceedings of the 8th international conference on learning analytics and knowledge (pp. 11-15). ACM.\n        <a target = \"_blank\" href = \"https://doi.org/10.1145/3170358.3170418\"> doi.org/10.1145/3170358.3170418</a>\n    </p>\n    <p>\n        [56]  McKay, T., Miller, K., & Tritz, J. (2012, April). What to do with actionable intelligence: E 2 Coach as an intervention engine. In Proceedings of the 2nd International Conference on Learning Analytics and Knowledge (pp. 88-91). ACM.\n        <a target = \"_blank\" href = \"https://doi.org/10.1145/2330601.2330627\"> doi.org/10.1145/2330601.2330627</a>\n    </p>\n    <p>\n        [57]  Vesin, B., Klašnja-Milićević, A., Ivanović, M., & Budimac, Z. (2013). Applying recommender systems and adaptive hypermedia for e-learning personalization. Computing and Informatics, 32(3), 629-659.\n        <cite>\n            <a target = \"_blank\" href=\"http://www.cai2.sk/ojs/index.php/cai/article/view/1736/536\">Retrieved link </a>\n        </cite> \n\n    </p>\n    <p>\n        [58]  Gunnarsson, B. L., & Alterman, R. (2014). Peer promotions as a method to identify quality content. Journal of Learning Analytics, 1(2), 126-150.\n        <a target = \"_blank\" href = \"https://doi.org/10.18608/jla.2014.12.7\"> doi.org/10.18608/jla.2014.12.7</a>\n    </p>\n    <p>\n        [59]  Aguiar, E., Ambrose, G. A. A., Chawla, N. V., Goodrich, V., & Brockman, J. (2014). Engagement vs performance: Using electronic portfolios to predict first semester engineering student persistence. Journal of Learning Analytics, 1(3), 7-33. \n        <a target = \"_blank\" href = \"https://doi.org/10.1145/2567574.2567583\"> doi.org/10.1145/2567574.2567583</a>\n    </p>\n    <p>\n        [60]  Lowes, S., Lin, P., & Kinghorn, B. (2015). Exploring the link between online behaviours and course performance in asynchronous online high school courses. Journal of Learning Analytics, 2(2), 169-194.\n        <a target = \"_blank\" href = \"https://doi.org/10.18608/jla.2015.22.13\"> doi.org/10.18608/jla.2015.22.13</a>\n    </p>\n    <p>\n        [61]  Southavilay, V., Yacef, K., Reimann, P., & Calvo, R. A. (2013, April). Analysis of collaborative writing processes using revision maps and probabilistic topic models. In Proceedings of the third international conference on learning analytics and knowledge (pp. 38-47). ACM.\n        <a target = \"_blank\" href = \"https://doi.org/10.1145/2460296.2460307\"> doi.org/10.1145/2460296.2460307</a>\n    </p>\n    <p>\n        [62]  Muñoz-Merino, P. J., Valiente, J. A. R., & Kloos, C. D. (2013, April). Inferring higher level learning information from low level data for the Khan Academy platform. In Proceedings of the third international conference on learning analytics and knowledge (pp. 112-116). ACM.\n        <a target = \"_blank\" href = \"https://doi.org/10.1145/2460296.2460318\"> doi.org/10.1145/2460296.2460318</a>\n    </p>\n    <p>\n        [63]  Ahn, J. (2013, April). What can we learn from Facebook activity?: using social learning analytics to observe new media literacy skills. In Proceedings of the third international conference on learning analytics and knowledge (pp. 135-144). ACM.\n        <a target = \"_blank\" href = \"https://doi.org/10.1145/2460296.2460323\"> doi.org/10.1145/2460296.2460323</a>\n    </p>\n    <p>\n        [64]  Wolff, A., Zdrahal, Z., Nikolov, A., & Pantucek, M. (2013, April). Improving retention: predicting at-risk students by analysing clicking behaviour in a virtual learning environment. In Proceedings of the third international conference on learning analytics and knowledge (pp. 145-149). ACM.\n        <a target = \"_blank\" href = \"https://doi.org/10.1145/2460296.2460324\"> doi.org/10.1145/2460296.2460324</a> \n    </p>\n    <p>\n        [65]  Monroy, C., Rangel, V. S., & Whitaker, R. (2013, April). STEMscopes: contextualizing learning analytics in a K-12 science curriculum. In Proceedings of the Third International Conference on Learning Analytics and Knowledge (pp. 210-219). ACM.\n        <a target = \"_blank\" href = \"https://doi.org/10.1145/2460296.2460339\"> doi.org/10.1145/2460296.2460339</a> \n    </p>\n    <p>\n        [66]  Bogarín, A., Romero, C., Cerezo, R., & Sánchez-Santillán, M. (2014, March). Clustering for improving educational process mining. In Proceedings of the fourth international conference on learning analytics and knowledge (pp. 11-15). ACM.  \n        <a target = \"_blank\" href = \"https://doi.org/10.1145/2567574.2567604\"> doi.org/10.1145/2567574.2567604</a>\n    </p>\n    <p>\n        [67]  Nam, S., Lonn, S., Brown, T., Davis, C. S., & Koch, D. (2014, March). Customized course advising: investigating engineering student success with incoming profiles and patterns of concurrent course enrollment. In Proceedings of the Fourth International Conference on Learning Analytics And Knowledge (pp. 16-25). ACM.\n        <a target = \"_blank\" href = \"https://doi.org/10.1145/2567574.2567589\"> doi.org/10.1145/2567574.2567589</a>\n    </p>\n    <p>\n        [68]  Papamitsiou, Z. K., Terzis, V., & Economides, A. A. (2014, March). Temporal learning analytics for computer based testing. In Proceedings of the Fourth International Conference on Learning Analytics And Knowledge (pp. 31-35). ACM.\n        <a target = \"_blank\" href = \"https://doi.org/10.1145/2567574.2567609\"> doi.org/10.1145/2567574.2567609</a>\n    </p>\n    <p>\n        [69]  Coffrin, C., Corrin, L., de Barba, P., & Kennedy, G. (2014, March). Visualizing patterns of student engagement and performance in MOOCs. In Proceedings of the fourth international conference on learning analytics and knowledge (pp. 83-92). ACM.\n        <a target = \"_blank\" href = \"https://doi.org/10.1145/2567574.2567586\"> doi.org/10.1145/2567574.2567586</a>\n    </p>\n    <p>\n        [70]  Santos, J. L., Klerkx, J., Duval, E., Gago, D., & Rodríguez, L. (2014, March). Success, activity and drop-outs in MOOCs an exploratory study on the UNED COMA courses. In Proceedings of the Fourth International Conference on Learning Analytics and Knowledge (pp. 98-102). ACM.\n        <a target = \"_blank\" href = \"https://doi.org/10.1145/2567574.2567627\"> doi.org/10.1145/2567574.2567627</a>\n    </p>\n    <p>\n        [71]  Rogers, T., Colvin, C., & Chiera, B. (2014, March). Modest analytics: using the index method to identify students at risk of failure. In Proceedings of the Fourth International Conference on Learning Analytics And Knowledge (pp. 118-122). ACM.\n        <a target = \"_blank\" href = \"https://doi.org/10.1145/2567574.2567629\"> doi.org/10.1145/2567574.2567629</a>\n    </p>\n    <p>\n        [72]  Gašević, D., Mirriahi, N., & Dawson, S. (2014, March). Analytics of the effects of video use and instruction to support reflective learning. In Proceedings of the fourth international conference on learning analytics and Knowledge (pp. 123-132). ACM.\n        <a target = \"_blank\" href = \"https://doi.org/10.1145/2567574.2567590\"> doi.org/10.1145/2567574.2567590</a>\n    </p>\n    <p>\n        [73]  Vozniuk, A., Holzer, A., & Gillet, D. (2014, March). Peer assessment based on ratings in a social media course. In Proceedings of the Fourth International Conference on Learning Analytics And Knowledge (pp. 133-137). ACM. \n        <a target = \"_blank\" href = \"https://doi.org/10.1145/2567574.2567608\"> doi.org/10.1145/2567574.2567608</a>\n    </p>\n    <p>\n        [74]  Wang, Y., Heffernan, N. T., & Heffernan, C. (2015, March). Towards better affect detectors: effect of missing skills, class features and common wrong answers. In Proceedings of the Fifth International Conference on Learning Analytics and Knowledge (pp. 31-35). ACM.   \n        <a target = \"_blank\" href = \"https://doi.org/10.1145/2723576.2723618\"> doi.org/10.1145/2723576.2723618</a>\n    </p>\n    <p>\n        [75]  San Pedro, M. O., Baker, R. S., Heffernan, N. T., & Ocumpaugh, J. L. (2015, March). Exploring college major choice and middle school student behavior, affect and learning: what happens to students who game the system?. In Proceedings of the Fifth International Conference on Learning Analytics And Knowledge (pp. 36-40). ACM.\n        <a target = \"_blank\" href = \"https://doi.org/10.1145/2723576.2723610\"> doi.org/10.1145/2723576.2723610</a> \n    </p>\n    <p>\n        [76]  Ferguson, R., & Clow, D. (2015, March). Examining engagement: analysing learner subpopulations in massive open online courses (MOOCs). In Proceedings of the fifth international conference on learning analytics and knowledge (pp. 51-58). ACM.\n        <a target = \"_blank\" href = \"https://doi.org/10.1145/2723576.2723606\"> doi.org/10.1145/2723576.2723606</a> \n    </p>\n    <p>\n        [77]  Méndez, G., Ochoa, X., & Chiluiza, K. (2014, March). Techniques for data-driven curriculum analysis. In Proceedings of the fourth international conference on learning analytics and knowledge (pp. 148-157). ACM.\n        <a target = \"_blank\" href = \"https://doi.org/10.1145/2567574.2567591\"> doi.org/10.1145/2567574.2567591</a>\n    </p>\n    <p>\n        [78]  Jo, I. H., Kim, D., & Yoon, M. (2014, March). Analyzing the log patterns of adult learners in LMS using learning analytics. In Proceedings of the Fourth International Conference on Learning Analytics And Knowledge (pp. 183-187). ACM.\n         <a target = \"_blank\" href = \"https://doi.org/10.1145/2567574.2567616\"> doi.org/10.1145/2567574.2567616</a>\n    </p>\n    <p>\n        [79]  Waddington, R. J., & Nam, S. (2014, March). Practice exams make perfect: incorporating course resource use into an early warning system. In Proceedings of the Fourth International Conference on Learning Analytics And Knowledge (pp. 188-192). ACM.\n         <a target = \"_blank\" href = \"https://doi.org/10.1145/2567574.2567623\"> doi.org/10.1145/2567574.2567623</a>\n    </p>\n    <p>\n        [80]  Chiu, M. M., & Fujita, N. (2014, March). Statistical discourse analysis of online discussions: Informal cognition, social metacognition and knowledge creation. In Proceedings of the Fourth International Conference on Learning Analytics And Knowledge (pp. 217-225). ACM.\n        <a target = \"_blank\" href = \"https://doi.org/10.1145/2567574.2567580\"> doi.org/10.1145/2567574.2567580</a>\n    </p>\n    <p>\n        [81]  Yu, T., & Jo, I. H. (2014, March). Educational technology approach toward learning analytics: Relationship between student online behavior and learning performance in higher education. In Proceedings of the Fourth International Conference on Learning Analytics and Knowledge (pp. 269-270). ACM.\n        <a target = \"_blank\" href = \"https://doi.org/10.1145/2567574.2567594\"> doi.org/10.1145/2567574.2567594</a>\n    </p>\n    <p>\n        [82] Aguiar, E., Lakkaraju, H., Bhanpuri, N., Miller, D., Yuhas, B., & Addison, K. L. (2015, March). Who, when, and why: a machine learning approach to prioritizing students at risk of not graduating high school on time. In Proceedings of the Fifth International Conference on Learning Analytics And Knowledge (pp. 93-102). ACM.\n        <a target = \"_blank\" href = \"https://doi.org/10.1145/2723576.2723619\"> doi.org/10.1145/2723576.2723619</a>\n    </p>\n    <p>\n        [83]  Elbadrawy, A., Studham, R. S., & Karypis, G. (2015, March). Collaborative multi-regression models for predicting students' performance in course activities. In Proceedings of the Fifth International Conference on Learning Analytics And Knowledge (pp. 103-107). ACM.\n        <a target = \"_blank\" href = \"https://doi.org/10.1145/2723576.2723590\"> doi.org/10.1145/2723576.2723590</a>\n    </p>\n    <p>\n        [84]  Grawemeyer, B., Mavrikis, M., Holmes, W., Gutierrez-Santos, S., Wiedmann, M., & Rummel, N. (2016, April). Affecting off-task behaviour: how affect-aware feedback can improve student learning. In Proceedings of the sixth international conference on learning analytics & knowledge (pp. 104-113). ACM.\n        <a target = \"_blank\" href = \"https://doi.org/10.1145/2883851.2883936\"> doi.org/10.1145/2883851.2883936</a>\n    </p>\n    <p>\n        [85]  Allen, L. K., Mills, C., Jacovina, M. E., Crossley, S., D'mello, S., & McNamara, D. S. (2016, April). Investigating boredom and engagement during writing using multiple sources of information: the essay, the writer, and keystrokes. In Proceedings of the Sixth International Conference on Learning Analytics & Knowledge (pp. 114-123). ACM.\n        <a target = \"_blank\" href = \"https://doi.org/10.1145/2883851.2883939\"> doi.org/10.1145/2883851.2883939</a> \n    </p>\n    <p>\n        [86]  Papoušek, J., Stanislav, V., & Pelánek, R. (2016, April). Evaluation of an adaptive practice system for learning geography facts. In Proceedings of the Sixth International Conference on Learning Analytics & Knowledge (pp. 134-142). ACM.\n         <a target = \"_blank\" href = \"https://doi.org/10.1145/2883851.2883884\"> doi.org/10.1145/2883851.2883884</a> \n    </p>\n    <p>\n        [87]  Manai, O., Yamada, H., & Thorn, C. (2016, April). Real-time indicators and targeted supports: Using online platform data to accelerate student learning. In Proceedings of the Sixth International Conference on Learning Analytics & Knowledge (pp. 183-187). ACM.\n        <a target = \"_blank\" href = \"https://doi.org/10.1145/2883851.2883942\"> doi.org/10.1145/2883851.2883942</a> \n    </p>\n    <p>\n        [88]  Hecking, T., Chounta, I. A., & Hoppe, H. U. (2016, April). Investigating social and semantic user roles in MOOC discussion forums. In Proceedings of the sixth international conference on learning analytics & knowledge (pp. 198-207). ACM.\n        <a target = \"_blank\" href = \"https://doi.org/10.1145/2883851.2883924\"> doi.org/10.1145/2883851.2883924</a>    \n    </p>\n    <p>\n        [89]  Shum, S. B., Sándor, Á., Goldsmith, R., Wang, X., Bass, R., & McWilliams, M. (2016, April). Reflecting on reflective writing analytics: Assessment challenges and iterative evaluation of a prototype tool. In Proceedings of the sixth international conference on learning analytics & knowledge (pp. 213-222). ACM\n        <a target = \"_blank\" href = \"https://doi.org/10.1145/2883851.2883955\"> doi.org/10.1145/2883851.2883955</a>\n    </p>\n    <p>\n        [90]  Zhu, M., Bergner, Y., Zhang, Y., Baker, R., Wang, Y., & Paquette, L. (2016, April). Longitudinal engagement, performance, and social connectivity: a MOOC case study using exponential random graph models. In Proceedings of the Sixth International Conference on Learning Analytics & Knowledge (pp. 223-230). ACM.\n         <a target = \"_blank\" href = \"https://doi.org/10.1145/2883851.2883934\"> doi.org/10.1145/2883851.2883934</a>\n    </p>\n    <p>\n        [91]  Khan, I., & Pardo, A. (2016, April). Data2U: Scalable real time student feedback in active learning environments. In Proceedings of the sixth international conference on learning analytics & knowledge (pp. 249-253). ACM.\n        <a target = \"_blank\" href = \"https://doi.org/10.1145/2883851.2883911\"> doi.org/10.1145/2883851.2883911</a> \n    </p>\n    <p>\n        [92] Papamitsiou, Z., Karapistoli, E., & Economides, A. A. (2016, April). Applying classification techniques on temporal trace data for shaping student behavior models. In Proceedings of the Sixth International Conference on Learning Analytics & Knowledge (pp. 299-303). ACM.\n        <a target = \"_blank\" href = \"https://doi.org/10.1145/2883851.2883926\"> doi.org/10.1145/2883851.2883926</a> \n    </p>\n    <p>\n        [93] Joksimović, S., Manataki, A., Gašević, D., Dawson, S., Kovanović, V., & De Kereki, I. F. (2016, April). Translating network position into performance: importance of centrality in different network configurations. In Proceedings of the sixth international conference on learning analytics & knowledge (pp. 314-323). ACM.\n        <a target = \"_blank\" href = \"https://doi.org/10.1145/2883851.2883928\"> doi.org/10.1145/2883851.2883928</a>\n    </p>\n    <p>\n        [94]  Robinson, C., Yeomans, M., Reich, J., Hulleman, C., & Gehlbach, H. (2016, April). Forecasting student achievement in MOOCs with natural language processing. In Proceedings of the sixth international conference on learning analytics & knowledge (pp. 383-387). ACM.\n        <a target = \"_blank\" href = \"https://doi.org/10.1145/2883851.2883932\"> doi.org/10.1145/2883851.2883932</a>\n    </p>\n    <p>\n        [95]  Wang, X., Wen, M., & Rosé, C. P. (2016, April). Towards triggering higher-order thinking behaviors in MOOCs. In Proceedings of the Sixth International Conference on Learning Analytics & Knowledge (pp. 398-407). ACM.\n        <a target = \"_blank\" href = \"https://doi.org/10.1145/2883851.2883964\"> doi.org/10.1145/2883851.2883964</a>\n    </p>\n    <p>\n        [96]  Kennedy, G., Coffrin, C., De Barba, P., & Corrin, L. (2015, March). Predicting success: how learners' prior knowledge, skills and activities predict MOOC performance. In Proceedings of the fifth international conference on learning analytics and knowledge (pp. 136-140). ACM.\n        <a target = \"_blank\" href = \"https://doi.org/10.1145/2723576.2723593\"> doi.org/10.1145/2723576.2723593</a>\n    </p>\n    <p>\n        [97] Harrison, S., Villano, R., Lynch, G., & Chen, G. (2015, March). Likelihood analysis of student enrollment outcomes using learning environment variables: A case study approach. In Proceedings of the Fifth International Conference on Learning Analytics And Knowledge (pp. 141-145). ACM.\n         <a target = \"_blank\" href = \"https://doi.org/10.1145/2723576.2723621\"> doi.org/10.1145/2723576.2723621</a>\n    </p>\n    <p>\n        [98]  Pardo, A., Han, F., & Ellis, R. A. (2016, April). Exploring the relation between self-regulation, online activities, and academic performance: A case study. In Proceedings of the Sixth International Conference on Learning Analytics & Knowledge (pp. 422-429). ACM.\n        <a target = \"_blank\" href = \"https://doi.org/10.1145/2883851.2883883\"> doi.org/10.1145/2883851.2883883</a>\n    </p>\n    <p>\n        [99]  Brown, M. G., DeMonbrun, R. M., Lonn, S., Aguilar, S. J., & Teasley, S. D. (2016, April). What and when: the role of course type and timing in students' academic performance. In Proceedings of the Sixth International Conference on Learning Analytics & Knowledge (pp. 459-468). ACM.\n        <a target = \"_blank\" href = \"https://doi.org/10.1145/2883851.2883907\"> doi.org/10.1145/2883851.2883907</a>\n    </p>\n    <p>\n        [100]  Pardo, A., Mirriahi, N., Martinez-Maldonado, R., Jovanovic, J., Dawson, S., & Gašević, D. (2016, April). Generating actionable predictive models of academic performance. In Proceedings of the Sixth International Conference on Learning Analytics & Knowledge (pp. 474-478). ACM.\n        <a target = \"_blank\" href = \"https://doi.org/10.1145/2883851.2883870\"> doi.org/10.1145/2883851.2883870</a>\n    </p>\n    <p>\n        [101]  Hlosta, M., Zdrahal, Z., & Zendulka, J. (2017, March). Ouroboros: early identification of at-risk students without models based on legacy data. In Proceedings of the Seventh International Learning Analytics & Knowledge Conference (pp. 6-15). ACM.\n        <a target = \"_blank\" href = \"https://doi.org/10.1145/3027385.3027449\"> doi.org/10.1145/3027385.3027449</a>\n    </p>\n    <p>\n        [102]  Agnihotri, L., Essa, A., & Baker, R. (2017, March). Impact of student choice of content adoption delay on course outcomes. In Proceedings of the Seventh International Learning Analytics & Knowledge Conference (pp. 16-20). ACM.\n        <a target = \"_blank\" href = \"https://doi.org/10.1145/3027385.3027437\"> doi.org/10.1145/3027385.3027437</a>\n    </p>\n    <p>\n        [103]  Park, J., Denaro, K., Rodriguez, F., Smyth, P., & Warschauer, M. (2017, March). Detecting changes in student behavior from clickstream data. In Proceedings of the Seventh International Learning Analytics & Knowledge Conference (pp. 21-30). ACM.\n        <a target = \"_blank\" href = \"https://doi.org/10.1145/3027385.3027430\"> doi.org/10.1145/3027385.3027430</a>\n    </p>\n    <p>\n        [104]  Käser, T., Hallinen, N. R., & Schwartz, D. L. (2017, March). Modeling exploration strategies to predict student performance within a learning environment and beyond. In Proceedings of the Seventh International Learning Analytics & Knowledge Conference (pp. 31-40). ACM.\n        <a target = \"_blank\" href = \"https://doi.org/10.1145/3027385.3027422\"> doi.org/10.1145/3027385.3027422</a>\n    </p>\n    <p>\n        [105]  Conijn, R., Snijders, C., Kleingeld, A., & Matzat, U. (2016). Predicting student performance from LMS data: A comparison of 17 blended courses using Moodle LMS. IEEE Transactions on Learning Technologies, 10(1), 17-29.\n        <a target = \"_blank\" href = \"https://doi.org/10.1109/TLT.2016.2616312\"> doi.org/10.1109/TLT.2016.2616312</a>\n    </p>\n    <p>\n        [106]  Hershkovitz, A., de Baker, R. S. J., Gobert, J., Wixon, M., & Pedro, M. S. (2013). Discovery with models: A case study on carelessness in computer-based science inquiry. American Behavioral Scientist, 57(10), 1480-1499.\n        <a target = \"_blank\" href = \"https://doi.org/10.1177/0002764213479365\"> doi.org/10.1177/0002764213479365</a>\n    </p>\n    <p>\n        [107]  Paule Ruiz, M. P., Riestra González, M., Sánchez Santillán, M., & Pérez Pérez, J. R. (2015). The Procrastination related indicators in e-learning platforms. Journal of Universal Computer Science.\n        <cite>\n            <a target = \"_blank\" href=\"http://www.jucs.org/jucs_21_1/the_procrastination_related_indicators/jucs_21_01_0007_0022_ruiz.pdf\">Retrieved link </a>\n        </cite>\n\n    </p>\n    <p>\n        [108]  Paredes, W. C., & Chung, K. S. K. (2012, April). Modelling learning & performance: a social networks perspective. In Proceedings of the 2nd International Conference on Learning Analytics and Knowledge (pp. 34-42). ACM.\n        <a target = \"_blank\" href = \"https://doi.org/10.1145/2330601.2330617\"> doi.org/10.1145/2330601.2330617</a>\n    </p>\n    <p>\n        [109]  Smolin, D., & Butakov, S. (2012, April). Applying artificial intelligence to the educational data: an example of syllabus quality analysis. In Proceedings of the 2nd International Conference on Learning Analytics and Knowledge (pp. 164-169). ACM. \n        <a target = \"_blank\" href = \"https://doi.org/10.1145/2330601.2330644\"> doi.org/10.1145/2330601.2330644</a>\n    </p>\n    <p>\n        [110]  Pursel, B. K., Zhang, L., Jablokow, K. W., Choi, G. W., & Velegol, D. (2016). Understanding MOOC students: motivations and behaviours indicative of MOOC completion. Journal of Computer Assisted Learning, 32(3), 202-217.\n        <a target = \"_blank\" href = \"https://doi.org/10.1111/jcal.12131\"> doi.org/10.1111/jcal.12131</a>\n    </p>\n    <p>\n        [111]  Jovanović, J., Gašević, D., Dawson, S., Pardo, A., & Mirriahi, N. (2017). Learning analytics to unveil learning strategies in a flipped classroom. The Internet and Higher Education, 33(4), 74-85.\n        <a target = \"_blank\" href = \"http://dx.doi.org/10.1016/j.iheduc.2017.02.001 \"> dx.doi.org/10.1016/j.iheduc.2017.02.001 </a>\n    </p>\n    <p>\n        [112]  Chavarriaga, O., Florian-Gaviria, B., & Solarte, O. (2014, September). A recommender system for students based on social knowledge and assessment data of competences. In European Conference on Technology Enhanced Learning (pp. 56-69). Springer, Cham.\n         <a target = \"_blank\" href = \"https://doi.org/10.1007/978-3-319-11200-8_5 \"> doi.org/10.1007/978-3-319-11200-8_5 </a>\n    </p>\n    <p>\n        [113]  Li, N., Kidziński, Ł., Jermann, P., & Dillenbourg, P. (2015). MOOC video interaction patterns: What do they tell us?. In Design for teaching and learning in a networked world (pp. 197-210). Springer, Cham.\n        <a target = \"_blank\" href = \"https://doi.org/10.1007/978-3-319-24258-3_15 \"> doi.org/10.1007/978-3-319-24258-3_15 </a>\n    </p>\n    <p>\n        [114]  Sadallah, M., Encelle, B., Maredj, A. E., & Prié, Y. (2015). Towards reading session-based indicators in educational reading analytics. In Design for Teaching and Learning in a Networked World (pp. 297-310). Springer, Cham.\n        <a target = \"_blank\" href = \"https://doi.org/10.1007/978-3-319-24258-3_22 \"> doi.org/10.1007/978-3-319-24258-3_22 </a>\n    </p>\n    <p>\n        [115]  Figueira, A. (2015). Predicting results from interaction patterns during online group work. In Design for Teaching and Learning in a Networked World (pp. 414-419). Springer, Cham.\n        <a target = \"_blank\" href = \"https://doi.org/10.1007/978-3-319-24258-3_33 \"> doi.org/10.1007/978-3-319-24258-3_33 </a>\n    </p>\n    <p>\n        [116]  Abolkasim, E., Lau, L., & Dimitrova, V. (2016, September). A semantic-driven model for ranking digital learning objects based on diversity in the user comments. In European Conference on Technology Enhanced Learning (pp. 3-15). Springer, Cham.\n        <a target = \"_blank\" href = \"https://doi.org/10.1007/978-3-319-45153-4_1\"> doi.org/10.1007/978-3-319-45153-4_1 </a>\n    </p>\n    <p>\n        [117]  You, J. W. (2016). Identifying significant indicators using LMS data to predict course achievement in online learning. The Internet and Higher Education, 29, 23-30.\n         <a target = \"_blank\" href = \"https://doi.org/10.1016/j.iheduc.2015.11.003\"> doi.org/10.1016/j.iheduc.2015.11.003 </a>\n    </p>\n    <p>\n        [118]  Gasevic, D., Jovanovic, J., Pardo, A., & Dawson, S. (2017). Detecting learning strategies with analytics: Links with self-reported measures and academic performance. Journal of Learning Analytics, 4(2), 113-128.\n        <a target = \"_blank\" href = \"http://dx.doi.org/10.18608/jla.2017.42.10\"> dx.doi.org/10.18608/jla.2017.42.10 </a>\n    </p>\n    <p>\n        [119]  Hart, S., Daucourt, M., & Ganley, C. (2017). Individual differences related to college students’ course performance in calculus II. Journal of Learning Analytics, 4(2), 129-153.\n        <a target = \"_blank\" href = \"https://doi.org/10.18608/jla.2017.42.11\"> doi.org/10.18608/jla.2017.42.11 </a>\n    </p>\n    <p>\n        [120] Casey, K. (2017). Using keystroke analytics to improve pass-fail classifiers. Journal of Learning Analytics, 4(2), 189-211.\n        <a target = \"_blank\" href = \"https://doi.org/10.18608/jla.2017.42.14\"> doi.org/10.18608/jla.2017.42.14 </a>\n    </p>\n    <p>\n        [121] Bakharia, A., & Dawson, S. (2011, February). SNAPP: a bird's-eye view of temporal participant interaction. In Proceedings of the 1st international conference on learning analytics and knowledge (pp. 168-173). ACM.\n        <a target = \"_blank\" href = \"https://doi.org/10.1145/2090116.2090144\"> doi.org/10.1145/2090116.2090144 </a>\n    </p>\n    <p>\n        [122]  Lauría, E. J., Baron, J. D., Devireddy, M., Sundararaju, V., & Jayaprakash, S. M. (2012, April). Mining academic data to improve college student retention: An open source perspective. In Proceedings of the 2nd International Conference on Learning Analytics and Knowledge (pp. 139-142). ACM. \n        <a target = \"_blank\" href = \"https://doi.org/10.1145/2330601.2330637\"> doi.org/10.1145/2330601.2330637 </a>\n    </p>\n    <p>\n        [123] Boroujeni, M. S., Sharma, K., Kidziński, Ł., Lucignano, L., & Dillenbourg, P. (2016, September). How to quantify student’s regularity?. In European Conference on Technology Enhanced Learning (pp. 277-291). Springer, Cham.\n        <a target = \"_blank\" href = \"https://doi.org/10.1007/978-3-319-45153-4_21\"> doi.org/10.1007/978-3-319-45153-4_21 </a>\n    </p>\n    <p>\n        [124] Scheffel, M., Drachsler, H., Kreijns, K., De Kraker, J., & Specht, M. (2017, March). Widget, widget as you lead, i am performing well indeed!: using results from an exploratory offline study to inform an empirical online study about a learning analytics widget in a collaborative learning environment. In Proceedings of the Seventh International Learning Analytics & Knowledge Conference (pp. 289-298). ACM.\n         <a target = \"_blank\" href = \"https://doi.org/10.1145/3027385.3027428\"> doi.org/10.1145/3027385.3027428 </a>\n    </p>\n    <p>\n        [125]  Schumacher, C., & Ifenthaler, D. (2018). Features students really expect from learning analytics. Computers in Human Behavior, 78, 397-407.\n        <a target = \"_blank\" href = \"https://doi.org/10.1016/j.chb.2017.06.030\"> doi.org/10.1016/j.chb.2017.06.030 </a>\n    </p>\n    <p>\n        [126] Aljohani, N. R., Daud, A., Abbasi, R. A., Alowibdi, J. S., Basheri, M., & Aslam, M. A. (2019). An integrated framework for course adapted student learning analytics dashboard. Computers in Human Behavior, 92, 679-690.\n        <a target = \"_blank\" href = \"https://doi.org/10.1016/j.chb.2018.03.035\"> doi.org/10.1016/j.chb.2018.03.035 </a>\n    </p>\n    <p>\n        [127] Saqr, M., Nouri, J., & Fors, U. (2018). Temporality matters: A learning analytics study of the patterns of interactions and its relation to performance,”. EDULEARN18: Proceedings, ser. EDULEARN proceedings, 5386-5393.\n        <a target = \"_blank\" href = \"https://doi.org/10.21125/edulearn.2018.1305\"> doi.org/10.21125/edulearn.2018.1305 </a>  \n    </p>\n    <p>\n        [128] Majumdar, R., Akçapınar, A., Akçapınar, G., Flanagan, B., & Ogata, H. (2018). Learning Analytics Dashboard Widgets to Author Teaching-Learning Cases for Evidence-based Education. Companion Procs. of 9th LAK.\n        <cite>\n            <a target = \"_blank\" href=\"https://repository.kulib.kyoto-u.ac.jp/dspace/handle/2433/244167\">Retrieved link </a>\n        </cite>\n\n    </p>\n    <p>\n        [129] Matcha, W., Gašević, D., Uzir, N. A. A., Jovanović, J., & Pardo, A. (2019, March). Analytics of Learning Strategies: Associations with Academic Performance and Feedback. In Proceedings of the 9th International Conference on Learning Analytics & Knowledge (pp. 461-470). ACM.\n        <a target = \"_blank\" href = \"https://doi.org/10.1145/3303772.3303787\"> doi.org/10.1145/3303772.3303787 </a>    \n    </p>\n    <p>\n        [130] de Quincey, E., Briggs, C., Kyriacou, T., & Waller, R. (2019, March). Student Centred Design of a Learning Analytics System. In Proceedings of the 9th International Conference on Learning Analytics & Knowledge (pp. 353-362). ACM.\n        <a target = \"_blank\" href = \"https://doi.org/10.1145/3303772.3303793\"> doi.org/10.1145/3303772.3303793 </a>\n    </p>\n    <p>\n        [131] Syed, M., Anggara, T., Lanski, A., Duan, X., Ambrose, G. A., & Chawla, N. V. (2019, March). Integrated Closed-loop Learning Analytics Scheme in a First Year Experience Course. In Proceedings of the 9th International Conference on Learning Analytics & Knowledge (pp. 521-530). ACM.\n        <a target = \"_blank\" href = \"https://doi.org/10.1145/3303772.3303803\"> doi.org/10.1145/3303772.3303803 </a>\n    </p>\n    <p>\n        [132] Wang, Y., Law, N., Hemberg, E., & O'Reilly, U. M. (2019, March). Using Detailed Access Trajectories for Learning Behavior Analysis. In Proceedings of the 9th International Conference on Learning Analytics & Knowledge (pp. 290-299). ACM.\n         <a target = \"_blank\" href = \"https://doi.org/10.1145/3303772.3303781\"> doi.org/10.1145/3303772.3303781</a> \n    </p>\n    <p>\n        [133] Jovanović, J., Gašević, D., Pardo, A., Dawson, S., & Whitelock-Wainwright, A. (2019, March). Introducing meaning to clicks: Towards traced-measures of self-efficacy and cognitive load. In Proceedings of the 9th International Conference on Learning Analytics & Knowledge (pp. 511-520). ACM.\n        <a target = \"_blank\" href = \"https://doi.org/10.1145/3303772.3303782\"> doi.org/10.1145/3303772.3303782</a> \n    </p>\n    <p>\n        [134] Klebanov, B. B., Loukina, A., Madnani, N., Sabatini, J., & Lentini, J. (2019, March). Would you?: Could you? On a tablet? Analytics of Children's eBook Reading. In Proceedings of the 9th International Conference on Learning Analytics & Knowledge (pp. 106-110). ACM.\n        <a target = \"_blank\" href = \"https://doi.org/10.1145/3303772.3303833\"> doi.org/10.1145/3303772.3303833</a>\n    </p>\n    <p>\n        [135] Niaki, S. A., George, C. P., Michailidis, G., & Beal, C. R. (2019, March). Investigating the Usage Patterns of Algebra Nation Tutoring Platform. In Proceedings of the 9th International Conference on Learning Analytics & Knowledge (pp. 481-490). ACM.\n        <a target = \"_blank\" href = \"https://doi.org/10.1145/3303772.3303788\"> doi.org/10.1145/3303772.3303788</a>\n    </p>\n    <p>\n        [136] Manrique, R., Nunes, B. P., Marino, O., Casanova, M. A., & Nurmikko-Fuller, T. (2019, March). An Analysis of Student Representation, Representative Features and Classification Algorithms to Predict Degree Dropout. In Proceedings of the 9th International Conference on Learning Analytics & Knowledge (pp. 401-410). ACM.\n         <a target = \"_blank\" href = \"https://doi.org/10.1145/3303772.3303800\"> doi.org/10.1145/3303772.3303800</a>\n    </p>\n    <p>\n        [137] Shimada, A., Taniguchi, Y., Okubo, F., Konomi, S. I., & Ogata, H. (2018, March). Online change detection for monitoring individual student behavior via clickstream data on E-book system. In Proceedings of the 8th International Conference on Learning Analytics and Knowledge (pp. 446-450). ACM.\n        <a target = \"_blank\" href = \"https://doi.org/10.1145/3170358.3170412\"> doi.org/10.1145/3170358.3170412</a>\n    </p>\n    <p>\n        [138] Van der Zee, T., Davis, D., Saab, N., Giesbers, B., Ginn, J., Van Der Sluis, F., ... & Admiraal, W. (2018, March). Evaluating retrieval practice in a MOOC: how writing and reading summaries of videos affects student learning. In Proceedings of the 8th International Conference on Learning Analytics and Knowledge (pp. 216-225). ACM.\n        <a target = \"_blank\" href = \"https://doi.org/10.1145/3170358.3170382\"> doi.org/10.1145/3170358.3170382</a>\n    </p>\n    <p>\n        [139] Chen, B., Fan, Y., Zhang, G., & Wang, Q. (2017, March). Examining motivations and self-regulated learning strategies of returning MOOCs learners. In Proceedings of the Seventh International Learning Analytics & Knowledge Conference (pp. 542-543). ACM.\n        <a target = \"_blank\" href = \"https://doi.org/10.1145/3027385.3029448\"> doi.org/10.1145/3027385.3029448</a>\n    </p>\n    <p>\n        [140] Dawson, S., Jovanovic, J., Gašević, D., & Pardo, A. (2017, March). From prediction to impact: Evaluation of a learning analytics retention program. In Proceedings of the Seventh International Learning Analytics & Knowledge Conference (pp. 474-478). ACM.\n        <a target = \"_blank\" href = \"https://doi.org/10.1145/3027385.3027405\"> doi.org/10.1145/3027385.3027405</a>\n    </p>\n    <p>\n        [141] Duval, E. (2011). Attention please!: learning analytics for visualization and recommendation. LAK, 11, 9-17.\n        <a target = \"_blank\" href = \"https://doi.org/10.1145/2090116.2090118\"> doi.org/10.1145/2090116.2090118</a>     \n    </p>\n    <p>\n        [142] Ferguson, R., & Shum, S. B. (2011, February). Learning analytics to identify exploratory dialogue within synchronous text chat. In Proceedings of the 1st International Conference on Learning Analytics and Knowledge (pp. 99-103). ACM.\n        <a target = \"_blank\" href = \"https://doi.org/10.1145/2090116.2090130\"> doi.org/10.1145/2090116.2090130</a>\n    </p>\n    <p>\n        [143] Sharkey, M. (2011, February). Academic analytics landscape at the University of Phoenix. In Proceedings of the 1st International Conference on Learning Analytics and Knowledge (pp. 122-126). ACM.\n        <a target = \"_blank\" href = \"https://doi.org/10.1145/2090116.2090135\"> doi.org/10.1145/2090116.2090135</a>\n    </p>\n    <p>\n        [144] Fancsali, S. E. (2011, February). Variable construction for predictive and causal modeling of online education data. In Proceedings of the 1st International Conference on Learning Analytics and Knowledge (pp. 54-63). ACM. \n        <a target = \"_blank\" href = \"https://doi.org/10.1145/2090116.2090123\"> doi.org/10.1145/2090116.2090123</a>\n    </p>\n    <p>\n        [145] Verbert, K., Drachsler, H., Manouselis, N., Wolpers, M., Vuorikari, R., & Duval, E. (2011, February). Dataset-driven research for improving recommender systems for learning. In Proceedings of the 1st International Conference on Learning Analytics and Knowledge (pp. 44-53). ACM.\n         <a target = \"_blank\" href = \"https://doi.org/10.1145/2090116.2090122\"> doi.org/10.1145/2090116.2090122</a> \n    </p>\n    <p>\n        [146] Gwizdka, J., Hosseini, R., Cole, M., & Wang, S. (2017). Temporal dynamics of eye‐tracking and EEG during reading and relevance decisions. Journal of the Association for Information Science and Technology, 68(10), 2299-2312.\n        <cite>\n            <a target = \"_blank\" href=\"https://doi.org/10.1002/asi.23904\">https://doi.org/10.1002/asi.23904</a>\n        </cite>\n\n    </p>\n    <p>\n        [147] Jivet, I., Scheffel, M., Drachsler, H., & Specht, M. (2017, September). Awareness is not enough: pitfalls of learning analytics dashboards in the educational practice. In European Conference on Technology Enhanced Learning (pp. 82-96). Springer, Cham.\n        <a target = \"_blank\" href = \"https://doi.org/10.1007/978-3-319-66610-5_7\"> https://doi.org/10.1007/978-3-319-66610-5_7</a>\n    </p>\n    <p>\n        [148] Jivet, I., Scheffel, M., Specht, M., & Drachsler, H. (2018, March). License to evaluate: preparing learning analytics dashboards for educational practice. In Proceedings of the 8th International Conference on Learning Analytics and Knowledge (pp. 31-40). ACM.\n        <a target = \"_blank\" href = \"https://doi.org/10.1145/3170358.3170421\"> doi.org/10.1145/3170358.3170421</a>\n    </p>\n    <p>\n        [149] Inge Molenaar, Anne Horvers, Rick Dijkstra, and Ryan S. Baker. 2020. Personalized visualizations to promote young learners' SRL: the learning path app. In Proceedings of the Tenth International Conference on Learning Analytics & Knowledge (LAK '20). Association for Computing Machinery, New York, NY, USA, 330–339.\n         <a target = \"_blank\" href = \"https://doi.org/10.1145/3375462.3375465\"> https://doi.org/10.1145/3375462.3375465</a>\n    </p>\n    <p>\n        [150] Donia Malekian, James Bailey, and Gregor Kennedy. 2020. Prediction of students' assessment readiness in online learning environments: the sequence matters. In Proceedings of the Tenth International Conference on Learning Analytics & Knowledge (LAK '20). Association for Computing Machinery, New York, NY, USA, 382–391. DOI:\n         <a target = \"_blank\" href = \"https://doi.org/10.1145/3375462.3375468\"> https://doi.org/10.1145/3375462.3375468</a>\n    </p>\n\n    <p>\n        [151] Varshita Sher, Marek Hatala, and Dragan Gašević. 2020. Analyzing the consistency in within-activity learning patterns in blended learning. In Proceedings of the Tenth International Conference on Learning Analytics & Knowledge (LAK '20). Association for Computing Machinery, New York, NY, USA, 1–10. DOI:\n         <a target = \"_blank\" href = \"https://doi.org/10.1145/3375462.3375470\"> https://doi.org/10.1145/3375462.3375470</a>\n    </p>\n    <p>\n        [152] Anouschka van Leeuwen and Nikol Rummel. 2020. Comparing teachers' use of mirroring and advising dashboards. In Proceedings of the Tenth International Conference on Learning Analytics & Knowledge (LAK '20). Association for Computing Machinery, New York, NY, USA, 26–34. DOI:\n         <a target = \"_blank\" href = \"https://doi.org/10.1145/3375462.3375471\"> https://doi.org/10.1145/3375462.3375471</a>\n    </p>\n    <p>\n        [153] Fatemeh Salehian Kia, Stephanie D. Teasley, Marek Hatala, Stuart A. Karabenick, and Matthew Kay. 2020. How patterns of students dashboard use are related to their achievement and self-regulatory engagement. In Proceedings of the Tenth International Conference on Learning Analytics & Knowledge (LAK '20). Association for Computing Machinery, New York, NY, USA, 340–349. DOI:\n         <a target = \"_blank\" href = \"https://doi.org/10.1145/3375462.3375472\"> https://doi.org/10.1145/3375462.3375472</a>\n    </p>\n    <p>\n        [154] Jelena Jovanović, Shane Dawson, Srećko Joksimović, and George Siemens. 2020. Supporting actionable intelligence: reframing the analysis of observed study strategies. In Proceedings of the Tenth International Conference on Learning Analytics & Knowledge (LAK '20). Association for Computing Machinery, New York, NY, USA, 161–170. DOI:\n         <a target = \"_blank\" href = \"https://doi.org/10.1145/3375462.3375474\"> https://doi.org/10.1145/3375462.3375474</a>\n    </p>\n    <p>\n        [155] Timothy Tuti, Chris Paton, and Niall Winters. 2020. Learning to represent healthcare providers knowledge of neonatal emergency care: findings from a smartphone-based learning intervention targeting clinicians from LMICs. In Proceedings of the Tenth International Conference on Learning Analytics & Knowledge (LAK '20). Association for Computing Machinery, New York, NY, USA, 320–329. DOI:\n         <a target = \"_blank\" href = \"https://doi.org/10.1145/3375462.3375479\"> https://doi.org/10.1145/3375462.3375479</a>\n    </p>\n    <p>\n        [156] John Saint, Dragan Gašević, Wannisa Matcha, Nora'Ayu Ahmad Uzir, and Abelardo Pardo. 2020. Combining analytic methods to unlock sequential and temporal patterns of self-regulated learning. In Proceedings of the Tenth International Conference on Learning Analytics & Knowledge (LAK '20). Association for Computing Machinery, New York, NY, USA, 402–411. DOI:\n         <a target = \"_blank\" href = \"https://doi.org/10.1145/3375462.3375487\"> https://doi.org/10.1145/3375462.3375487</a>\n    </p>\n    <p>\n        [157] Nora'ayu Ahmad Uzir, Dragan Gašević, Jelena Jovanović, Wannisa Matcha, Lisa-Angelique Lim, and Anthea Fudge. 2020. Analytics of time management and learning strategies for effective online learning in blended environments. In Proceedings of the Tenth International Conference on Learning Analytics & Knowledge (LAK '20). Association for Computing Machinery, New York, NY, USA, 392–401. DOI:\n         <a target = \"_blank\" href = \"https://doi.org/10.1145/3375462.3375493\"> https://doi.org/10.1145/3375462.3375493</a>\n    </p>\n    <p>\n        [158] Steven Van Goidsenhoven, Daria Bogdanova, Galina Deeva, Seppe vanden Broucke, Jochen De Weerdt, and Monique Snoeck. 2020. Predicting student success in a blended learning environment. In Proceedings of the Tenth International Conference on Learning Analytics & Knowledge (LAK '20). Association for Computing Machinery, New York, NY, USA, 17–25. DOI:\n         <a target = \"_blank\" href = \"https://doi.org/10.1145/3375462.3375494\"> https://doi.org/10.1145/3375462.3375494</a>\n    </p>\n    <p>\n        [159] Máverick Ferreira, Vitor Rolim, Rafael Ferreira Mello, Rafael Dueire Lins, Guanliang Chen, and Dragan Gašević. 2020. Towards automatic content analysis of social presence in transcripts of online discussions. In Proceedings of the Tenth International Conference on Learning Analytics & Knowledge (LAK '20). Association for Computing Machinery, New York, NY, USA, 141–150. DOI:\n         <a target = \"_blank\" href = \"https://doi.org/10.1145/3375462.3375495\"> https://doi.org/10.1145/3375462.3375495</a>\n    </p>\n    <p>\n        [160] Kshitij Sharma, Zacharoula Papamitsiou, Jennifer K. Olsen, and Michail Giannakos. 2020. Predicting learners' effortful behaviour in adaptive assessment using multimodal data. In Proceedings of the Tenth International Conference on Learning Analytics & Knowledge (LAK '20). Association for Computing Machinery, New York, NY, USA, 480–489. DOI:\n         <a target = \"_blank\" href = \"https://doi.org/10.1145/3375462.3375498\"> https://doi.org/10.1145/3375462.3375498</a>\n    </p>\n    <p>\n        [161] Louis Faucon, Jennifer K. Olsen, and Pierre Dillenbourg. 2020. A bayesian model of individual differences and flexibility in inductive reasoning for categorization of examples. In Proceedings of the Tenth International Conference on Learning Analytics & Knowledge (LAK '20). Association for Computing Machinery, New York, NY, USA, 285–294. DOI:\n         <a target = \"_blank\" href = \"https://doi.org/10.1145/3375462.3375512\"> https://doi.org/10.1145/3375462.3375512</a>\n    </p>\n    <p>\n        [162] Namrata Srivastava, Sadia Nawaz, Jason M. Lodge, Eduardo Velloso, Sarah Erfani, and James Bailey. 2020. Exploring the usage of thermal imaging for understanding video lecture designs and students' experiences. In Proceedings of the Tenth International Conference on Learning Analytics & Knowledge (LAK '20). Association for Computing Machinery, New York, NY, USA, 250–259. DOI:\n         <a target = \"_blank\" href = \"https://doi.org/10.1145/3375462.3375514\"> https://doi.org/10.1145/3375462.3375514</a>\n    </p>\n    <p>\n        [163] Joshua Quick, Benjamin Motz, Jamie Israel, and Jason Kaetzel. 2020. What college students say, and what they do: aligning self-regulated learning theory with behavioral logs. In Proceedings of the Tenth International Conference on Learning Analytics & Knowledge (LAK '20). Association for Computing Machinery, New York, NY, USA, 534–543. DOI:\n         <a target = \"_blank\" href = \"https://doi.org/10.1145/3375462.3375516\"> https://doi.org/10.1145/3375462.3375516</a>\n    </p>\n    <p>\n        [164] Luca Benedetto, Andrea Cappelli, Roberto Turrin, and Paolo Cremonesi. 2020. R2DE: a NLP approach to estimating IRT parameters of newly generated questions. In Proceedings of the Tenth International Conference on Learning Analytics & Knowledge (LAK '20). Association for Computing Machinery, New York, NY, USA, 412–421. DOI:\n         <a target = \"_blank\" href = \"https://doi.org/10.1145/3375462.337551\"> https://doi.org/10.1145/3375462.337551</a>\n    </p>\n    <p>\n        [165] Huan Wei, Haotian Li, Meng Xia, Yong Wang, and Huamin Qu. 2020. Predicting student performance in interactive online question pools using mouse interaction features. In Proceedings of the Tenth International Conference on Learning Analytics & Knowledge (LAK '20). Association for Computing Machinery, New York, NY, USA, 645–654. DOI:\n         <a target = \"_blank\" href = \"https://doi.org/10.1145/3375462.3375521\"> https://doi.org/10.1145/3375462.3375521</a>\n    </p>\n    <p>\n        [166] Yanghee Kim, Sachit Butail, Michael Tscholl, Lichuan Liu, and Yunlong Wang. 2020. An exploratory approach to measuring collaborative engagement in child robot interaction. In Proceedings of the Tenth International Conference on Learning Analytics & Knowledge (LAK '20). Association for Computing Machinery, New York, NY, USA, 209–217. DOI:\n         <a target = \"_blank\" href = \"https://doi.org/10.1145/3375462.3375522\"> https://doi.org/10.1145/3375462.3375522</a>\n    </p>\n    <p>\n        [167] John A. Erickson, Anthony F. Botelho, Steven McAteer, Ashvini Varatharaj, and Neil T. Heffernan. 2020. The automated grading of student open responses in mathematics. In Proceedings of the Tenth International Conference on Learning Analytics & Knowledge (LAK '20). Association for Computing Machinery, New York, NY, USA, 615–624. DOI:\n         <a target = \"_blank\" href = \"https://doi.org/10.1145/3375462.3375523\"> https://doi.org/10.1145/3375462.3375523</a>\n    </p>\n    <p>\n        [168] Zachary A. Pardos and Weijie Jiang. 2020. Designing for serendipity in a university course recommendation system. In Proceedings of the Tenth International Conference on Learning Analytics & Knowledge (LAK '20). Association for Computing Machinery, New York, NY, USA, 350–359. DOI:\n         <a target = \"_blank\" href = \"https://doi.org/10.1145/3375462.3375524\"> https://doi.org/10.1145/3375462.3375524</a>\n    </p>\n    <p>\n        [169] Preya Shabrina, Ruth Okoilu Akintunde, Mehak Maniktala, Tiffany Barnes, Collin Lynch, and Teomara Rutherford. 2020. Peeking through the classroom window: a detailed data-driven analysis on the usage of a curriculum integrated math game in authentic classrooms. In Proceedings of the Tenth International Conference on Learning Analytics & Knowledge (LAK '20). Association for Computing Machinery, New York, NY, USA, 625–634. DOI:\n         <a target = \"_blank\" href = \"https://doi.org/10.1145/3375462.3375525\"> https://doi.org/10.1145/3375462.3375525</a>\n    </p>\n    <p>\n        [170] Hamideh Iraj, Anthea Fudge, Margaret Faulkner, Abelardo Pardo, and Vitomir Kovanović. 2020. Understanding students' engagement with personalised feedback messages. In Proceedings of the Tenth International Conference on Learning Analytics & Knowledge (LAK '20). Association for Computing Machinery, New York, NY, USA, 438–447. DOI:\n         <a target = \"_blank\" href = \"https://doi.org/10.1145/3375462.3375527\"> https://doi.org/10.1145/3375462.3375527</a>\n    </p>\n    <p>\n        [171] Yeonji Jung and Alyssa Friend Wise. 2020. How and how well do students reflect? multi-dimensional automated reflection assessment in health professions education. In Proceedings of the Tenth International Conference on Learning Analytics & Knowledge (LAK '20). Association for Computing Machinery, New York, NY, USA, 595–604. DOI:\n         <a target = \"_blank\" href = \"https://doi.org/10.1145/3375462.3375528\"> https://doi.org/10.1145/3375462.3375528</a>\n    </p>\n    <p>\n        [172] Ruth Okoilu Akintunde, Preya Shabrina, Veronica Catete, Tiffany Barnes, Collin Lynch, and Teomara Rutherford. 2020. Data-informed curriculum sequences for a curriculum-integrated game. In Proceedings of the Tenth International Conference on Learning Analytics & Knowledge (LAK '20). Association for Computing Machinery, New York, NY, USA, 635–644. https://doi.org/10.1145/3375462.3375530 \n         <a target = \"_blank\" href = \"https://doi.org/10.1145/3375462.3375530 \"> https://doi.org/10.1145/3375462.3375530 </a>\n    </p>\n    <p>\n        [173] Oleksandra Poquet and Jelena Jovanovic. 2020. Intergroup and interpersonal forum positioning in shared-thread and post-reply networks. In Proceedings of the Tenth International Conference on Learning Analytics &amp; Knowledge (LAK '20). Association for Computing Machinery, New York, NY, USA, 187–196. \n         <a target = \"_blank\" href = \"https://doi.org/10.1145/3375462.3375533\"> https://doi.org/10.1145/3375462.3375533</a>\n    </p>\n    <p>\n        [174] Wannisa Matcha, Dragan Gašević, Jelena Jovanović, Nora'ayu Ahmad Uzir, Chris W Oliver, Andrew Murray, and Danijela Gasevic. 2020. Analytics of learning strategies: the association with the personality traits. In Proceedings of the Tenth International Conference on Learning Analytics &amp; Knowledge (LAK '20). Association for Computing Machinery, New York, NY, USA, 151–160. \n         <a target = \"_blank\" href = \"https://doi.org/10.1145/3375462.3375534\"> https://doi.org/10.1145/3375462.3375534</a>\n    </p>\n    <p>\n        [175] Schulten, C., Manske, S., Langner-Thiele, A., Hoppe, H.U. (2020). Digital Value-Adding Chains in Vocational Education: Automatic Keyword Extraction from Learning Videos to Provide Learning Resource Recommendations. In: Alario-Hoyos, C., Rodríguez-Triana, M.J., Scheffel, M., Arnedillo-Sánchez, I., Dennerlein, S.M. (eds) Addressing Global Challenges and Quality Education. EC-TEL 2020. Lecture Notes in Computer Science(), vol 12315. Springer, Cham. \n         <a target = \"_blank\" href = \"https://doi.org/10.1007/978-3-030-57717-9_2\"> https://doi.org/10.1007/978-3-030-57717-9_2</a>\n    </p>\n    <p>\n        [176] Conijn, R., Van Waes, L., van Zaanen, M. (2020). Human-Centered Design of a Dashboard on Students’ Revisions During Writing. In: Alario-Hoyos, C., Rodríguez-Triana, M.J., Scheffel, M., Arnedillo-Sánchez, I., Dennerlein, S.M. (eds) Addressing Global Challenges and Quality Education. EC-TEL 2020. Lecture Notes in Computer Science(), vol 12315. Springer, Cham. \n         <a target = \"_blank\" href = \"https://doi.org/10.1007/978-3-030-57717-9_3\"> https://doi.org/10.1007/978-3-030-57717-9_3</a>\n    </p>\n    <p>\n        [177] Labba, C., Roussanaly, A., Boyer, A. (2020). An Operational Framework for Evaluating the Performance of Learning Record Stores. In: Alario-Hoyos, C., Rodríguez-Triana, M.J., Scheffel, M., Arnedillo-Sánchez, I., Dennerlein, S.M. (eds) Addressing Global Challenges and Quality Education. EC-TEL 2020. Lecture Notes in Computer Science(), vol 12315. Springer, Cham. \n         <a target = \"_blank\" href = \"https://doi.org/10.1007/978-3-030-57717-9_4\"> https://doi.org/10.1007/978-3-030-57717-9_4</a>\n    </p>\n    <p>\n        [178] Nikolayeva, I., Yessad, A., Laforge, B., Luengo, V. (2020). Does an E-mail Reminder Intervention with Learning Analytics Reduce Procrastination in a Blended University Course?. In: Alario-Hoyos, C., Rodríguez-Triana, M.J., Scheffel, M., Arnedillo-Sánchez, I., Dennerlein, S.M. (eds) Addressing Global Challenges and Quality Education. EC-TEL 2020. Lecture Notes in Computer Science(), vol 12315. Springer, Cham.  \n         <a target = \"_blank\" href = \"https://doi.org/10.1007/978-3-030-57717-9_5\"> https://doi.org/10.1007/978-3-030-57717-9_5</a>\n    </p>\n    <p>\n        [179] Delnoij, L.E.C., Janssen, J.P.W., Dirkx, K.J.H., Martens, R.L. (2020). Designing an Online Self-assessment for Informed Study Decisions: The User Perspective. In: Alario-Hoyos, C., Rodríguez-Triana, M.J., Scheffel, M., Arnedillo-Sánchez, I., Dennerlein, S.M. (eds) Addressing Global Challenges and Quality Education. EC-TEL 2020. Lecture Notes in Computer Science(), vol 12315. Springer, Cham. \n         <a target = \"_blank\" href = \"https://doi.org/10.1007/978-3-030-57717-9_6\"> https://doi.org/10.1007/978-3-030-57717-9_6</a>\n    </p>\n    <p>\n        [180] Schlotterbeck, D., Araya, R., Caballero, D., Jimenez, A., Lehesvuori, S., Viiri, J. (2020). Assessing Teacher’s Discourse Effect on Students’ Learning: A Keyword Centrality Approach. In: Alario-Hoyos, C., Rodríguez-Triana, M.J., Scheffel, M., Arnedillo-Sánchez, I., Dennerlein, S.M. (eds) Addressing Global Challenges and Quality Education. EC-TEL 2020. Lecture Notes in Computer Science(), vol 12315. Springer, Cham. \n         <a target = \"_blank\" href = \"https://doi.org/10.1007/978-3-030-57717-9_8\"> https://doi.org/10.1007/978-3-030-57717-9_8</a>\n    </p>\n    <p>\n        [181] Saqr, M., Viberg, O. (2020). Using Diffusion Network Analytics to Examine and Support Knowledge Construction in CSCL Settings. In: Alario-Hoyos, C., Rodríguez-Triana, M.J., Scheffel, M., Arnedillo-Sánchez, I., Dennerlein, S.M. (eds) Addressing Global Challenges and Quality Education. EC-TEL 2020. Lecture Notes in Computer Science(), vol 12315. Springer, Cham. \n         <a target = \"_blank\" href = \"https://doi.org/10.1007/978-3-030-57717-9_12\"> https://doi.org/10.1007/978-3-030-57717-9_12</a>\n    </p>\n    <p>\n        [182] Akhuseyinoglu, K., Barria-Pineda, J., Sosnovsky, S., Lamprecht, AL., Guerra, J., Brusilovsky, P. (2020). Exploring Student-Controlled Social Comparison. In: Alario-Hoyos, C., Rodríguez-Triana, M.J., Scheffel, M., Arnedillo-Sánchez, I., Dennerlein, S.M. (eds) Addressing Global Challenges and Quality Education. EC-TEL 2020. Lecture Notes in Computer Science(), vol 12315. Springer, Cham. \n         <a target = \"_blank\" href = \"https://doi.org/10.1007/978-3-030-57717-9_18\"> https://doi.org/10.1007/978-3-030-57717-9_18</a>\n    </p>\n    <p>\n        [183] Zhang, Z., Brun, A., Boyer, A. (2020). New Measures for Offline Evaluation of Learning Path Recommenders. In: Alario-Hoyos, C., Rodríguez-Triana, M.J., Scheffel, M., Arnedillo-Sánchez, I., Dennerlein, S.M. (eds) Addressing Global Challenges and Quality Education. EC-TEL 2020. Lecture Notes in Computer Science(), vol 12315. Springer, Cham. \n         <a target = \"_blank\" href = \"https://doi.org/10.1007/978-3-030-57717-9_19\"> https://doi.org/10.1007/978-3-030-57717-9_19</a>\n    </p>\n    <p>\n        [184] Yousuf, B., Conlan, O., Wade, V. (2020). Assessing the Impact of the Combination of Self-directed Learning, Immediate Feedback and Visualizations on Student Engagement in Online Learning. In: Alario-Hoyos, C., Rodríguez-Triana, M.J., Scheffel, M., Arnedillo-Sánchez, I., Dennerlein, S.M. (eds) Addressing Global Challenges and Quality Education. EC-TEL 2020. Lecture Notes in Computer Science(), vol 12315. Springer, Cham. \n         <a target = \"_blank\" href = \"https://doi.org/10.1007/978-3-030-57717-9_20\"> https://doi.org/10.1007/978-3-030-57717-9_20</a>\n    </p>\n   \n    <p>\n        <br>\n        <br>\n        <br>\n        <br>\n        <br>\n    </p>\n    \n  \n    <a id=\"back-to-top\" class=\"btn btn-top back-to-top\" role=\"button\" (click)=\"backToTop()\">\n      <i class=\"material-icons\">arrow_upward</i>\n    </a>\n      \n</blockquote>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js": function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts": function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _component_display_display_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./component/display/display.component */
    "./src/app/component/display/display.component.ts");
    /* harmony import */


    var _component_admin_admin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./component/admin/admin.component */
    "./src/app/component/admin/admin.component.ts");
    /* harmony import */


    var _component_add_data_add_data_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./component/add-data/add-data.component */
    "./src/app/component/add-data/add-data.component.ts");
    /* harmony import */


    var _auth_guard_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./auth-guard.service */
    "./src/app/auth-guard.service.ts");
    /* harmony import */


    var _component_reference_referance_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./component/reference/referance.component */
    "./src/app/component/reference/referance.component.ts");
    /* harmony import */


    var _component_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./component/dashboard/dashboard.component */
    "./src/app/component/dashboard/dashboard.component.ts");

    var routes = [//{ path: '/display/data/s', redirectTo: '/', pathMatch: 'full' },
    //{ path: 'display/data', component: DisplayComponent },
    //{ path: '', component: DisplayComponent },
    //{ path: 'admin', component: AdminComponent },
    // { path: 'add/data', component: AddDataComponent, canActivate: [AuthGuardService] },
    {
      path: "add",
      component: _component_add_data_add_data_component__WEBPACK_IMPORTED_MODULE_5__["AddDataComponent"],
      canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuardService"]]
    }, {
      path: "reference",
      component: _component_reference_referance_component__WEBPACK_IMPORTED_MODULE_7__["ReferanceComponent"]
    }, {
      path: "login",
      component: _component_admin_admin_component__WEBPACK_IMPORTED_MODULE_4__["AdminComponent"]
    }, {
      path: "dashboard",
      component: _component_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"]
    }, {
      path: "",
      component: _component_display_display_component__WEBPACK_IMPORTED_MODULE_3__["DisplayComponent"]
    }, {
      path: "",
      redirectTo: "display/data",
      pathMatch: "full"
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css": function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".multiselect-dropdown .dropdown-btn {\n    display: inline-block;\n    \n    width: 100%;\n    padding: 6px 12px;\n    margin-bottom: 0;\n    font-size: 12px;\n    font-weight: 400;\n    line-height: 1.1;\n    text-align: left;\n    vertical-align: middle;\n    cursor: pointer;\n    background-image: none;\n    border-radius: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7O0lBRXJCLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLHNCQUFzQjtJQUN0QixrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tdWx0aXNlbGVjdC1kcm9wZG93biAuZHJvcGRvd24tYnRuIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgXG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogNnB4IDEycHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBsaW5lLWhlaWdodDogMS4xO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts": function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'frontend';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts": function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var angular_font_awesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! angular-font-awesome */
    "./node_modules/angular-font-awesome/dist/angular-font-awesome.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ng-multiselect-dropdown */
    "./node_modules/ng-multiselect-dropdown/fesm2015/ng-multiselect-dropdown.js");
    /* harmony import */


    var highcharts_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! highcharts-angular */
    "./node_modules/highcharts-angular/fesm2015/highcharts-angular.js");
    /* harmony import */


    var angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! angular2-multiselect-dropdown */
    "./node_modules/angular2-multiselect-dropdown/fesm2015/angular2-multiselect-dropdown.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _component_add_data_add_data_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./component/add-data/add-data.component */
    "./src/app/component/add-data/add-data.component.ts");
    /* harmony import */


    var _component_header_header_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./component/header/header.component */
    "./src/app/component/header/header.component.ts");
    /* harmony import */


    var _component_display_filter_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./component/display/filter.pipe */
    "./src/app/component/display/filter.pipe.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _data_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./data.service */
    "./src/app/data.service.ts");
    /* harmony import */


    var _component_display_display_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./component/display/display.component */
    "./src/app/component/display/display.component.ts");
    /* harmony import */


    var _component_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./component/dropdown/dropdown.component */
    "./src/app/component/dropdown/dropdown.component.ts");
    /* harmony import */


    var _component_reference_referance_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./component/reference/referance.component */
    "./src/app/component/reference/referance.component.ts");
    /* harmony import */


    var _component_display_select_check_all_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./component/display/select-check-all.component */
    "./src/app/component/display/select-check-all.component.ts");
    /* harmony import */


    var _auth_guard_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./auth-guard.service */
    "./src/app/auth-guard.service.ts");
    /* harmony import */


    var _component_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./component/dashboard/dashboard.component */
    "./src/app/component/dashboard/dashboard.component.ts");
    /* harmony import */


    var _chart_manager_chart_manager_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./chart-manager/chart-manager.component */
    "./src/app/chart-manager/chart-manager.component.ts");
    /* harmony import */


    var _charts_student_interaction_patterns_student_interaction_patterns_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./charts/student-interaction-patterns/student-interaction-patterns.component */
    "./src/app/charts/student-interaction-patterns/student-interaction-patterns.component.ts");
    /* harmony import */


    var _charts_competency_competency_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./charts/competency/competency.component */
    "./src/app/charts/competency/competency.component.ts");
    /* harmony import */


    var _chart_helper_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./chart-helper.service */
    "./src/app/chart-helper.service.ts");
    /* harmony import */


    var _charts_reading_analytics_reading_analytics_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./charts/reading-analytics/reading-analytics.component */
    "./src/app/charts/reading-analytics/reading-analytics.component.ts");
    /* harmony import */


    var _charts_video_analytics_video_analytics_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./charts/video-analytics/video-analytics.component */
    "./src/app/charts/video-analytics/video-analytics.component.ts");
    /* harmony import */


    var _charts_learning_progress_learning_progress_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./charts/learning-progress/learning-progress.component */
    "./src/app/charts/learning-progress/learning-progress.component.ts");
    /* harmony import */


    var _charts_writing_analytics_writing_analytics_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./charts/writing-analytics/writing-analytics.component */
    "./src/app/charts/writing-analytics/writing-analytics.component.ts");
    /* harmony import */


    var _charts_discussion_quality_discussion_quality_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./charts/discussion-quality/discussion-quality.component */
    "./src/app/charts/discussion-quality/discussion-quality.component.ts");
    /* harmony import */


    var _charts_clickstream_analysis_clickstream_analysis_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./charts/clickstream-analysis/clickstream-analysis.component */
    "./src/app/charts/clickstream-analysis/clickstream-analysis.component.ts");
    /* harmony import */


    var _charts_video_engagements_video_engagements_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! ./charts/video-engagements/video-engagements.component */
    "./src/app/charts/video-engagements/video-engagements.component.ts");
    /* harmony import */


    var _charts_initiative_initiative_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! ./charts/initiative/initiative.component */
    "./src/app/charts/initiative/initiative.component.ts");
    /* harmony import */


    var _charts_social_analysis_social_analysis_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! ./charts/social-analysis/social-analysis.component */
    "./src/app/charts/social-analysis/social-analysis.component.ts");
    /* harmony import */


    var _charts_droppingout_droppingout_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! ./charts/droppingout/droppingout.component */
    "./src/app/charts/droppingout/droppingout.component.ts");
    /* harmony import */


    var _charts_time_distribution_time_distribution_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! ./charts/time-distribution/time-distribution.component */
    "./src/app/charts/time-distribution/time-distribution.component.ts");
    /* harmony import */


    var _charts_time_planning_time_planning_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! ./charts/time-planning/time-planning.component */
    "./src/app/charts/time-planning/time-planning.component.ts");
    /* harmony import */


    var _charts_student_comparison_student_comparison_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! ./charts/student-comparison/student-comparison.component */
    "./src/app/charts/student-comparison/student-comparison.component.ts");
    /* harmony import */


    var _charts_engagement_performance_engagement_performance_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! ./charts/engagement-performance/engagement-performance.component */
    "./src/app/charts/engagement-performance/engagement-performance.component.ts");
    /* harmony import */


    var _charts_online_change_detection_online_change_detection_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
    /*! ./charts/online-change-detection/online-change-detection.component */
    "./src/app/charts/online-change-detection/online-change-detection.component.ts");
    /* harmony import */


    var _charts_gamification_gamification_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
    /*! ./charts/gamification/gamification.component */
    "./src/app/charts/gamification/gamification.component.ts");
    /* harmony import */


    var _charts_predict_coursecompletion_predict_coursecompletion_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
    /*! ./charts/predict-coursecompletion/predict-coursecompletion.component */
    "./src/app/charts/predict-coursecompletion/predict-coursecompletion.component.ts");
    /* harmony import */


    var _charts_procrastination_procrastination_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
    /*! ./charts/procrastination/procrastination.component */
    "./src/app/charts/procrastination/procrastination.component.ts");
    /* harmony import */


    var _charts_group_participation_group_participation_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
    /*! ./charts/group-participation/group-participation.component */
    "./src/app/charts/group-participation/group-participation.component.ts");
    /* harmony import */


    var _charts_clustering_clustering_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(
    /*! ./charts/clustering/clustering.component */
    "./src/app/charts/clustering/clustering.component.ts");
    /* harmony import */


    var _charts_predict_exam_success_predict_exam_success_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(
    /*! ./charts/predict-exam-success/predict-exam-success.component */
    "./src/app/charts/predict-exam-success/predict-exam-success.component.ts");
    /* harmony import */


    var _charts_final_grade_prediction_final_grade_prediction_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(
    /*! ./charts/final-grade-prediction/final-grade-prediction.component */
    "./src/app/charts/final-grade-prediction/final-grade-prediction.component.ts");
    /* harmony import */


    var _charts_learning_behaviour_learning_behaviour_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(
    /*! ./charts/learning-behaviour/learning-behaviour.component */
    "./src/app/charts/learning-behaviour/learning-behaviour.component.ts");
    /* harmony import */


    var _charts_social_network_analysis_social_network_analysis_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(
    /*! ./charts/social-network-analysis/social-network-analysis.component */
    "./src/app/charts/social-network-analysis/social-network-analysis.component.ts");
    /* harmony import */


    var _charts_self_motivation_self_motivation_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(
    /*! ./charts/self-motivation/self-motivation.component */
    "./src/app/charts/self-motivation/self-motivation.component.ts");
    /* harmony import */


    var _charts_learning_behavior_patterns_learning_behavior_patterns_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(
    /*! ./charts/learning-behavior-patterns/learning-behavior-patterns.component */
    "./src/app/charts/learning-behavior-patterns/learning-behavior-patterns.component.ts");
    /* harmony import */


    var _charts_passing_rate_prediction_passing_rate_prediction_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(
    /*! ./charts/passing-rate-prediction/passing-rate-prediction.component */
    "./src/app/charts/passing-rate-prediction/passing-rate-prediction.component.ts");
    /* harmony import */


    var _charts_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(
    /*! ./charts/feedback/feedback.component */
    "./src/app/charts/feedback/feedback.component.ts");
    /* harmony import */


    var _charts_course_assessment_course_assessment_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(
    /*! ./charts/course-assessment/course-assessment.component */
    "./src/app/charts/course-assessment/course-assessment.component.ts");
    /* harmony import */


    var _charts_affective_state_affective_state_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(
    /*! ./charts/affective-state/affective-state.component */
    "./src/app/charts/affective-state/affective-state.component.ts");
    /* harmony import */


    var _charts_course_difficulty_course_difficulty_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(
    /*! ./charts/course-difficulty/course-difficulty.component */
    "./src/app/charts/course-difficulty/course-difficulty.component.ts");
    /* harmony import */


    var _charts_curriculum_usage_curriculum_usage_component__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(
    /*! ./charts/curriculum-usage/curriculum-usage.component */
    "./src/app/charts/curriculum-usage/curriculum-usage.component.ts");
    /* harmony import */


    var _charts_presentation_skills_presentation_skills_component__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(
    /*! ./charts/presentation-skills/presentation-skills.component */
    "./src/app/charts/presentation-skills/presentation-skills.component.ts");
    /* harmony import */


    var _component_admin_admin_component__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(
    /*! ./component/admin/admin.component */
    "./src/app/component/admin/admin.component.ts"); // const routes: Routes = [
    //   { path: "add", component: AddDataComponent, canActivate: [AuthGuardService]},
    //   { path: "reference", component: ReferanceComponent },
    //   { path: "login", component: AdminComponent },
    //   { path: "dashboard", component: DashboardComponent },
    //   { path: "display/data", component: DisplayComponent },
    //   { path: "", redirectTo: "display/data", pathMatch: "full" },
    //   //{ path: "add/data", redirectTo: "add/data", pathMatch: "full" },
    // ];


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"], _component_add_data_add_data_component__WEBPACK_IMPORTED_MODULE_12__["AddDataComponent"], _component_header_header_component__WEBPACK_IMPORTED_MODULE_13__["HeaderComponent"], _component_display_display_component__WEBPACK_IMPORTED_MODULE_17__["DisplayComponent"], _component_display_filter_pipe__WEBPACK_IMPORTED_MODULE_14__["SanitizeHtmlPipe"], _component_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_18__["DropdownComponent"], _component_display_select_check_all_component__WEBPACK_IMPORTED_MODULE_20__["SelectCheckAllComponent"], _component_reference_referance_component__WEBPACK_IMPORTED_MODULE_19__["ReferanceComponent"], _component_admin_admin_component__WEBPACK_IMPORTED_MODULE_60__["AdminComponent"], _component_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_22__["DashboardComponent"], _chart_manager_chart_manager_component__WEBPACK_IMPORTED_MODULE_23__["ChartManagerComponent"], _charts_student_interaction_patterns_student_interaction_patterns_component__WEBPACK_IMPORTED_MODULE_24__["StudentInteractionPatternsComponent"], _charts_competency_competency_component__WEBPACK_IMPORTED_MODULE_25__["CompetencyComponent"], _charts_reading_analytics_reading_analytics_component__WEBPACK_IMPORTED_MODULE_27__["ReadingAnalyticsComponent"], _charts_video_analytics_video_analytics_component__WEBPACK_IMPORTED_MODULE_28__["VideoAnalyticsComponent"], _charts_learning_progress_learning_progress_component__WEBPACK_IMPORTED_MODULE_29__["LearningProgressComponent"], _charts_writing_analytics_writing_analytics_component__WEBPACK_IMPORTED_MODULE_30__["WritingAnalyticsComponent"], _charts_discussion_quality_discussion_quality_component__WEBPACK_IMPORTED_MODULE_31__["DiscussionQualityComponent"], _charts_clickstream_analysis_clickstream_analysis_component__WEBPACK_IMPORTED_MODULE_32__["ClickstreamAnalysisComponent"], _charts_video_engagements_video_engagements_component__WEBPACK_IMPORTED_MODULE_33__["VideoEngagementsComponent"], _charts_initiative_initiative_component__WEBPACK_IMPORTED_MODULE_34__["InitiativeComponent"], _charts_social_analysis_social_analysis_component__WEBPACK_IMPORTED_MODULE_35__["SocialAnalysisComponent"], _charts_droppingout_droppingout_component__WEBPACK_IMPORTED_MODULE_36__["DroppingoutComponent"], _charts_time_distribution_time_distribution_component__WEBPACK_IMPORTED_MODULE_37__["TimeDistributionComponent"], _charts_time_planning_time_planning_component__WEBPACK_IMPORTED_MODULE_38__["TimePlanningComponent"], _charts_student_comparison_student_comparison_component__WEBPACK_IMPORTED_MODULE_39__["StudentComparisonComponent"], _charts_engagement_performance_engagement_performance_component__WEBPACK_IMPORTED_MODULE_40__["EngagementPerformanceComponent"], _charts_online_change_detection_online_change_detection_component__WEBPACK_IMPORTED_MODULE_41__["OnlineChangeDetectionComponent"], _charts_gamification_gamification_component__WEBPACK_IMPORTED_MODULE_42__["GamificationComponent"], _charts_predict_coursecompletion_predict_coursecompletion_component__WEBPACK_IMPORTED_MODULE_43__["PredictCoursecompletionComponent"], _charts_procrastination_procrastination_component__WEBPACK_IMPORTED_MODULE_44__["ProcrastinationComponent"], _charts_group_participation_group_participation_component__WEBPACK_IMPORTED_MODULE_45__["GroupParticipationComponent"], _charts_clustering_clustering_component__WEBPACK_IMPORTED_MODULE_46__["ClusteringComponent"], _charts_predict_exam_success_predict_exam_success_component__WEBPACK_IMPORTED_MODULE_47__["PredictExamSuccessComponent"], _charts_final_grade_prediction_final_grade_prediction_component__WEBPACK_IMPORTED_MODULE_48__["FinalGradePredictionComponent"], _charts_learning_behaviour_learning_behaviour_component__WEBPACK_IMPORTED_MODULE_49__["LearningBehaviourComponent"], _charts_social_network_analysis_social_network_analysis_component__WEBPACK_IMPORTED_MODULE_50__["SocialNetworkAnalysisComponent"], _charts_self_motivation_self_motivation_component__WEBPACK_IMPORTED_MODULE_51__["SelfMotivationComponent"], _charts_learning_behavior_patterns_learning_behavior_patterns_component__WEBPACK_IMPORTED_MODULE_52__["LearningBehaviorPatternsComponent"], _charts_passing_rate_prediction_passing_rate_prediction_component__WEBPACK_IMPORTED_MODULE_53__["PassingRatePredictionComponent"], _charts_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_54__["FeedbackComponent"], _charts_course_assessment_course_assessment_component__WEBPACK_IMPORTED_MODULE_55__["CourseAssessmentComponent"], _charts_affective_state_affective_state_component__WEBPACK_IMPORTED_MODULE_56__["AffectiveStateComponent"], _charts_course_difficulty_course_difficulty_component__WEBPACK_IMPORTED_MODULE_57__["CourseDifficultyComponent"], _charts_curriculum_usage_curriculum_usage_component__WEBPACK_IMPORTED_MODULE_58__["CurriculumUsageComponent"], _charts_presentation_skills_presentation_skills_component__WEBPACK_IMPORTED_MODULE_59__["PresentationSkillsComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], //RouterModule.forRoot(routes),
      _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["BrowserAnimationsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBarModule"], ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_7__["NgMultiSelectDropDownModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"], angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_9__["AngularMultiSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"], angular_font_awesome__WEBPACK_IMPORTED_MODULE_5__["AngularFontAwesomeModule"], highcharts_angular__WEBPACK_IMPORTED_MODULE_8__["HighchartsChartModule"]],
      providers: [_data_service__WEBPACK_IMPORTED_MODULE_16__["DataService"], _auth_guard_service__WEBPACK_IMPORTED_MODULE_21__["AuthGuardService"], _chart_helper_service__WEBPACK_IMPORTED_MODULE_26__["ChartHelperService"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/auth-guard.service.ts": function srcAppAuthGuardServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuardService", function () {
      return AuthGuardService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./data.service */
    "./src/app/data.service.ts");

    var AuthGuardService = /*#__PURE__*/function () {
      function AuthGuardService(dataService, router) {
        _classCallCheck(this, AuthGuardService);

        this.dataService = dataService;
        this.router = router;
      }

      _createClass(AuthGuardService, [{
        key: "canActivate",
        value: function canActivate(route, state) {
          var currentUser = JSON.parse(localStorage.getItem('currentUser')); //this.dataService.currentUserValue;

          if (currentUser) {
            return true;
          } else {
            //this.router.navigate(['/login']);
            this.router.navigate(['/login'], {
              queryParams: {
                returnUrl: state.url
              }
            });
            return false;
          }
        }
      }]);

      return AuthGuardService;
    }();

    AuthGuardService.ctorParameters = function () {
      return [{
        type: _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    AuthGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], AuthGuardService);
    /***/
  },

  /***/
  "./src/app/chart-helper.service.ts": function srcAppChartHelperServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChartHelperService", function () {
      return ChartHelperService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ChartHelperService = /*#__PURE__*/function () {
      function ChartHelperService() {
        _classCallCheck(this, ChartHelperService);
      } //Sets the indicators in the localstorage as a string


      _createClass(ChartHelperService, [{
        key: "setSettings",
        value: function setSettings(storageName, data) {
          localStorage.setItem(storageName, JSON.stringify(data));
        }
      }]);

      return ChartHelperService;
    }();

    ChartHelperService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], ChartHelperService);
    /***/
  },

  /***/
  "./src/app/chart-manager/chart-manager.component.css": function srcAppChartManagerChartManagerComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".container {\r\n  display: grid;\r\n  grid-template-columns: repeat(12, 1fr);\r\n}\r\n\r\n.main-content {\r\n  grid-column: span 6;\r\n}\r\n\r\n::ng-deep .mat-form-field-infix {\r\n  width: 250px !important;\r\n}\r\n\r\n::ng-deep .mat-form-field {\r\n  position: -webkit-sticky !important;\r\n  position: sticky !important;\r\n  z-index: 100;\r\n  top: 0;\r\n}\r\n\r\n.mat-elevation-z5 {\r\n  position: relative;\r\n}\r\n\r\n.sticky {\r\n  top: 0px;\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n  .main-content {\r\n    grid-column: span 12;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 480px) {\r\n  .main-content {\r\n    grid-column: span 12;\r\n  }\r\n}\r\n\r\n.downloadCharts {\r\n  margin: 1rem;\r\n  float: right;\r\n  z-index: 100;\r\n  position: fixed;\r\n  right: 1%;\r\n}\r\n\r\n.backBtn {\r\n  float: right;\r\n  margin: 1rem;\r\n  z-index: 100;\r\n  position: fixed;\r\n  right: 8%;\r\n}\r\n\r\n.mat-elevation-z5 {\r\n  position: relative;\r\n}\r\n\r\n.sticky {\r\n  position: fixed;\r\n  top: 0px;\r\n}\r\n\r\n.buttons {\r\n  height: 70px;\r\n  background-color: #fff;\r\n  border: 2px solid #f5f5f5;\r\n  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;\r\n  position: fixed;\r\n  right: 0;\r\n  float: right;\r\n  z-index: 99;\r\n  width: 100%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhcnQtbWFuYWdlci9jaGFydC1tYW5hZ2VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2Isc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsbUNBQTJCO0VBQTNCLDJCQUEyQjtFQUMzQixZQUFZO0VBQ1osTUFBTTtBQUNSOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsUUFBUTtBQUNWOztBQUVBO0VBQ0U7SUFDRSxvQkFBb0I7RUFDdEI7QUFDRjs7QUFDQTtFQUNFO0lBQ0Usb0JBQW9CO0VBQ3RCO0FBQ0Y7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLFlBQVk7RUFDWixlQUFlO0VBQ2YsU0FBUztBQUNYOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixZQUFZO0VBQ1osZUFBZTtFQUNmLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLHlCQUF5QjtFQUN6QixtREFBbUQ7RUFDbkQsZUFBZTtFQUNmLFFBQVE7RUFDUixZQUFZO0VBQ1osV0FBVztFQUNYLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0LW1hbmFnZXIvY2hhcnQtbWFuYWdlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMiwgMWZyKTtcclxufVxyXG5cclxuLm1haW4tY29udGVudCB7XHJcbiAgZ3JpZC1jb2x1bW46IHNwYW4gNjtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XHJcbiAgd2lkdGg6IDI1MHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQge1xyXG4gIHBvc2l0aW9uOiBzdGlja3kgIWltcG9ydGFudDtcclxuICB6LWluZGV4OiAxMDA7XHJcbiAgdG9wOiAwO1xyXG59XHJcblxyXG4ubWF0LWVsZXZhdGlvbi16NSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uc3RpY2t5IHtcclxuICB0b3A6IDBweDtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAubWFpbi1jb250ZW50IHtcclxuICAgIGdyaWQtY29sdW1uOiBzcGFuIDEyO1xyXG4gIH1cclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gIC5tYWluLWNvbnRlbnQge1xyXG4gICAgZ3JpZC1jb2x1bW46IHNwYW4gMTI7XHJcbiAgfVxyXG59XHJcblxyXG4uZG93bmxvYWRDaGFydHMge1xyXG4gIG1hcmdpbjogMXJlbTtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgei1pbmRleDogMTAwO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICByaWdodDogMSU7XHJcbn1cclxuXHJcbi5iYWNrQnRuIHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgbWFyZ2luOiAxcmVtO1xyXG4gIHotaW5kZXg6IDEwMDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgcmlnaHQ6IDglO1xyXG59XHJcblxyXG4ubWF0LWVsZXZhdGlvbi16NSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uc3RpY2t5IHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwcHg7XHJcbn1cclxuXHJcbi5idXR0b25zIHtcclxuICBoZWlnaHQ6IDcwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjZjVmNWY1O1xyXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xNSkgMS45NXB4IDEuOTVweCAyLjZweDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIHotaW5kZXg6IDk5O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/chart-manager/chart-manager.component.ts": function srcAppChartManagerChartManagerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChartManagerComponent", function () {
      return ChartManagerComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var ChartManagerComponent = /*#__PURE__*/function () {
      function ChartManagerComponent() {
        _classCallCheck(this, ChartManagerComponent);

        this.indicators = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.components = [];
        this.isSticky = false;
        this.unselectedIndicator = [];
        this.regex = /\[[0-9]+\]/; // We will check if the array contains a string in the format [XX] where X = 0-9
      }

      _createClass(ChartManagerComponent, [{
        key: "checkScroll",
        value: function checkScroll() {
          this.isSticky = window.pageYOffset >= 50;
        }
        /*
          This component renders all the charts.
          Parse all the indicators from local Storage into the dropdownItems variable, referenceNumbers contains only the numbers in brackets.
          The HTML template checks if referenceNumbers includes an indicator number in brackets and renders it.
              
        */

      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.dropdownItems = JSON.parse(localStorage.getItem("selectedIndicators")); //For the dropdown menu

          this.referenceNumbers = JSON.parse(localStorage.getItem("referenceNumbers")); //To render the charts
        } //Selecting and unselecting charts in the drop down menu

      }, {
        key: "selectCharts",
        value: function selectCharts(event, state) {
          if (event.isUserInput) {
            if (!event.source.selected) {
              var num = state.match(this.regex)[0]; //E.G. state = Course difficulty [77] => num = [77]

              var index = this.referenceNumbers.indexOf(num);
              this.referenceNumbers.splice(index, 1)[0];
            } else {
              var _num = state.match(this.regex)[0];

              if (state.match(this.regex)[0]) {
                this.referenceNumbers.push(_num); //push the reference into the referenceNumbers array after selecting it
              }
            }
          }
        }
        /*
          When the user presses the download button this function
          writes all the HTML content of the current page into a html file
          The excludeStyle variable sets css properties which should not be seen in the local file to none
        */

      }, {
        key: "downloadPage",
        value: function downloadPage() {
          var htmlContent = [document.querySelector("html").innerHTML];
          var excludeStyle = "\n      <style>\n      .downloadCharts{\n        display: none;\n      }\n  \n      .header {\n        display: none;\n      }\n  \n      .mat-form-field {\n        display: none;\n      }\n  \n      .footer {\n        display: block !important;\n      }\n      \n      .backBtn {\n        display:none;\n      }\n\n      .buttons {\n        display:none;\n      }\n  \n      .highcharts-subtitle {\n        display:none;\n      }\n     \n      </style>"; //add style sheet to the html

          htmlContent = [htmlContent[0].concat(excludeStyle)];
          var bl = new Blob(htmlContent, {
            type: "text/html"
          });
          var a = document.createElement("a");
          a.href = URL.createObjectURL(bl);
          a.download = "Indicator Visualizations.html";
          a.hidden = true;
          document.body.appendChild(a);
          a.click();
        }
      }]);

      return ChartManagerComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("window:scroll", ["$event"])], ChartManagerComponent.prototype, "checkScroll", null);
    ChartManagerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-chart-manager",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./chart-manager.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/chart-manager/chart-manager.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./chart-manager.component.css */
      "./src/app/chart-manager/chart-manager.component.css"))["default"]]
    })], ChartManagerComponent);
    /***/
  },

  /***/
  "./src/app/charts/affective-state/affective-state.component.css": function srcAppChartsAffectiveStateAffectiveStateComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0cy9hZmZlY3RpdmUtc3RhdGUvYWZmZWN0aXZlLXN0YXRlLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/charts/affective-state/affective-state.component.ts": function srcAppChartsAffectiveStateAffectiveStateComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AffectiveStateComponent", function () {
      return AffectiveStateComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! highcharts */
    "./node_modules/highcharts/highcharts.js");
    /* harmony import */


    var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! highcharts/modules/exporting */
    "./node_modules/highcharts/modules/exporting.js");
    /* harmony import */


    var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var highcharts_highcharts_more__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! highcharts/highcharts-more */
    "./node_modules/highcharts/highcharts-more.js");
    /* harmony import */


    var highcharts_highcharts_more__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(highcharts_highcharts_more__WEBPACK_IMPORTED_MODULE_4__);

    highcharts_highcharts_more__WEBPACK_IMPORTED_MODULE_4___default()(highcharts__WEBPACK_IMPORTED_MODULE_2__);

    var AffectiveStateComponent = /*#__PURE__*/function () {
      function AffectiveStateComponent() {
        _classCallCheck(this, AffectiveStateComponent);

        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_2__;
      }

      _createClass(AffectiveStateComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.setData();
        }
      }, {
        key: "setData",
        value: function setData() {
          this.chartOptions = {
            chart: {
              polar: true
            },
            title: {
              text: "Affective state"
            },
            subtitle: {
              text: "Self-Reported Affective State [32] Emotion [32], Affective State [84], Self-Regulation [36] Emotional state [36], Student progress (LMS activities) [87] Measure fixed mindset / Belonging uncertainty / Stereotype threat (Questionnaires) [87] Alerting [87] Self-reflection [87]"
            },
            xAxis: {
              categories: ["Activity 1", "Activity 2", "Activity 3", "Activity 4", "Activity 5", "Activity 6"]
            },
            yAxis: {
              min: 0
            },
            series: [{
              type: "column",
              name: "Frustrated",
              data: [1, 4, 2, 1, 5, 6]
            }, {
              type: "column",
              name: "Confused",
              data: [3, 7, 1, 3, 3, 4]
            }, {
              type: "column",
              name: "Bored",
              data: [2, 3, 4, 5, 8, 7]
            }, {
              type: "column",
              name: "Happy",
              data: [1, 8, 2, 7, 3, 6]
            }, {
              type: "line",
              name: "Class Average",
              data: [4, 3, 6, 2, 5, 3]
            }, {
              type: "column",
              name: "Motivated",
              data: [5, 6, 8, 9, 4, 2]
            }]
          }, highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default()(highcharts__WEBPACK_IMPORTED_MODULE_2__);
        }
      }]);

      return AffectiveStateComponent;
    }();

    AffectiveStateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-affective-state",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./affective-state.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/affective-state/affective-state.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./affective-state.component.css */
      "./src/app/charts/affective-state/affective-state.component.css"))["default"]]
    })], AffectiveStateComponent);
    /***/
  },

  /***/
  "./src/app/charts/clickstream-analysis/clickstream-analysis.component.css": function srcAppChartsClickstreamAnalysisClickstreamAnalysisComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0cy9jbGlja3N0cmVhbS1hbmFseXNpcy9jbGlja3N0cmVhbS1hbmFseXNpcy5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/charts/clickstream-analysis/clickstream-analysis.component.ts": function srcAppChartsClickstreamAnalysisClickstreamAnalysisComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClickstreamAnalysisComponent", function () {
      return ClickstreamAnalysisComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! highcharts */
    "./node_modules/highcharts/highcharts.js");
    /* harmony import */


    var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! highcharts/modules/exporting */
    "./node_modules/highcharts/modules/exporting.js");
    /* harmony import */


    var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__);

    var ClickstreamAnalysisComponent = /*#__PURE__*/function () {
      function ClickstreamAnalysisComponent() {
        _classCallCheck(this, ClickstreamAnalysisComponent);

        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_2__;
      }

      _createClass(ClickstreamAnalysisComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.setData();
        }
      }, {
        key: "setData",
        value: function setData() {
          this.chartOptions = {
            title: {
              text: "Clickstream Analysis"
            },
            subtitle: {
              text: "Clickstream Analysis [103] Student behavior [103]"
            },
            xAxis: {
              tickInterval: 1,
              type: "linear",
              accessibility: {
                rangeDescription: "Range: 1 to 30"
              }
            },
            yAxis: {
              type: "linear",
              minorTickInterval: 0.1,
              accessibility: {
                rangeDescription: "Range: 1 to 1000"
              },
              title: {
                text: "Average Number of Clicks"
              }
            },
            tooltip: {
              headerFormat: "<b>{series.name}</b><br />",
              pointFormat: "Day = {point.x}, Clicks = {point.y}"
            },
            series: [{
              name: "Average Number of Clicks per Day",
              data: Array.from({
                length: 30
              }, function () {
                return Math.floor(Math.random() * 500);
              }),
              pointStart: 1
            }]
          };
          highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default()(highcharts__WEBPACK_IMPORTED_MODULE_2__);
        }
      }]);

      return ClickstreamAnalysisComponent;
    }();

    ClickstreamAnalysisComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-clickstream-analysis",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./clickstream-analysis.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/clickstream-analysis/clickstream-analysis.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./clickstream-analysis.component.css */
      "./src/app/charts/clickstream-analysis/clickstream-analysis.component.css"))["default"]]
    })], ClickstreamAnalysisComponent);
    /***/
  },

  /***/
  "./src/app/charts/clustering/clustering.component.css": function srcAppChartsClusteringClusteringComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0cy9jbHVzdGVyaW5nL2NsdXN0ZXJpbmcuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/charts/clustering/clustering.component.ts": function srcAppChartsClusteringClusteringComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClusteringComponent", function () {
      return ClusteringComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! highcharts */
    "./node_modules/highcharts/highcharts.js");
    /* harmony import */


    var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! highcharts/modules/exporting */
    "./node_modules/highcharts/modules/exporting.js");
    /* harmony import */


    var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__);

    var drilldown = __webpack_require__(
    /*! highcharts/modules/drilldown.js */
    "./node_modules/highcharts/modules/drilldown.js");

    drilldown(highcharts__WEBPACK_IMPORTED_MODULE_2__);

    var ClusteringComponent = /*#__PURE__*/function () {
      function ClusteringComponent() {
        _classCallCheck(this, ClusteringComponent);

        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_2__;
      }

      _createClass(ClusteringComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.setData();
        }
      }, {
        key: "setData",
        value: function setData() {
          this.chartOptions = {
            chart: {
              type: "packedbubble",
              height: "50%"
            },
            title: {
              text: "Clustering"
            },
            subtitle: {
              text: "Clustering (educational data mining) [66], Pass-Fail Classification [120] Keystroke analytics [120], Student Classification [113] Video analytics [113], Classifying Student behavior [29]"
            },
            tooltip: {
              useHTML: true,
              pointFormat: "<b>{point.name}:</b><br>"
            },
            xAxis: {
              type: "category"
            },
            plotOptions: {
              packedbubble: {
                minSize: "20%",
                maxSize: "100%",
                zMin: 0,
                zMax: 1000,
                layoutAlgorithm: {
                  gravitationalConstant: 0.05,
                  splitSeries: true,
                  seriesInteraction: false,
                  dragBetweenSeries: true,
                  parentNodeLimit: true
                },
                dataLabels: {
                  enabled: true,
                  format: "{point.name}",
                  filter: {
                    property: "y",
                    operator: ">",
                    value: 15
                  },
                  style: {
                    color: "black",
                    textOutline: "none",
                    fontWeight: "normal"
                  }
                }
              }
            },
            series: [{
              name: "Cluster 1 (High performers)",
              data: [{
                name: "User 1",
                value: Math.floor(Math.random() * 30),
                drilldown: "high"
              }, {
                name: "User 2",
                value: Math.floor(Math.random() * 30),
                drilldown: "high"
              }, {
                name: "User 3",
                value: Math.floor(Math.random() * 30),
                drilldown: "high"
              }, {
                name: "User 4",
                value: Math.floor(Math.random() * 30),
                drilldown: "high"
              }, {
                name: "User 5",
                value: Math.floor(Math.random() * 30),
                drilldown: "high"
              }, {
                name: "User 6",
                value: Math.floor(Math.random() * 30),
                drilldown: "high"
              }, {
                name: "User 7",
                value: Math.floor(Math.random() * 30),
                drilldown: "high"
              }]
            }, {
              name: "Cluster 2 (Average performers)",
              data: [{
                name: "User 13",
                value: Math.floor(Math.random() * 30),
                drilldown: "avg"
              }, {
                name: "User 14",
                value: Math.floor(Math.random() * 30),
                drilldown: "avg"
              }, {
                name: "User 15",
                value: Math.floor(Math.random() * 30),
                drilldown: "avg"
              }, {
                name: "User 16",
                value: Math.floor(Math.random() * 30),
                drilldown: "avg"
              }, {
                name: "User 17",
                value: Math.floor(Math.random() * 30),
                drilldown: "avg"
              }, {
                name: "User 18",
                value: Math.floor(Math.random() * 30),
                drilldown: "avg"
              }]
            }, {
              name: "Cluster 3 (Low performers)",
              data: [{
                name: "User 23",
                value: Math.floor(Math.random() * 30),
                drilldown: "low"
              }, {
                name: "User 24",
                value: Math.floor(Math.random() * 30),
                drilldown: "low"
              }, {
                name: "User 25",
                value: Math.floor(Math.random() * 30),
                drilldown: "low"
              }]
            }],
            drilldown: {
              series: [{
                name: "High performers",
                id: "high",
                type: "column",
                data: [{
                  name: "Time spent on theoretical contents",
                  y: 22
                }, {
                  name: "Time spent on forum",
                  y: 35
                }, {
                  name: "Time spent on practical tasks",
                  y: 32
                }, {
                  name: "Time until task is submitted",
                  y: 25
                }, {
                  name: "# words in forum",
                  y: 21
                }]
              }, {
                name: "Average performers",
                id: "avg",
                type: "column",
                data: [{
                  name: "Time spent on theoretical contents",
                  y: 14
                }, {
                  name: "Time spent on forum",
                  y: 25
                }, {
                  name: "Time spent on practical tasks",
                  y: 22
                }, {
                  name: "Time until task is submitted",
                  y: 35
                }, {
                  name: "# words in forum",
                  y: 15
                }]
              }, {
                name: "Low performers",
                id: "low",
                type: "column",
                data: [{
                  name: "Time spent on theoretical contents",
                  y: 7
                }, {
                  name: "Time spent on forum",
                  y: 12
                }, {
                  name: "Time spent on practical tasks",
                  y: 10
                }, {
                  name: "Time until task is submitted",
                  y: 50
                }, {
                  name: "# words in forum",
                  y: 8
                }]
              }]
            }
          }, highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default()(highcharts__WEBPACK_IMPORTED_MODULE_2__);
        }
      }]);

      return ClusteringComponent;
    }();

    ClusteringComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-clustering",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./clustering.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/clustering/clustering.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./clustering.component.css */
      "./src/app/charts/clustering/clustering.component.css"))["default"]]
    })], ClusteringComponent);
    /***/
  },

  /***/
  "./src/app/charts/competency/competency.component.css": function srcAppChartsCompetencyCompetencyComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0cy9jb21wZXRlbmN5L2NvbXBldGVuY3kuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/charts/competency/competency.component.ts": function srcAppChartsCompetencyCompetencyComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CompetencyComponent", function () {
      return CompetencyComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! highcharts */
    "./node_modules/highcharts/highcharts.js");
    /* harmony import */


    var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! highcharts/modules/exporting */
    "./node_modules/highcharts/modules/exporting.js");
    /* harmony import */


    var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var highcharts_highcharts_more__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! highcharts/highcharts-more */
    "./node_modules/highcharts/highcharts-more.js");
    /* harmony import */


    var highcharts_highcharts_more__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(highcharts_highcharts_more__WEBPACK_IMPORTED_MODULE_4__);

    highcharts_highcharts_more__WEBPACK_IMPORTED_MODULE_4___default()(highcharts__WEBPACK_IMPORTED_MODULE_2__);

    var CompetencyComponent = /*#__PURE__*/function () {
      function CompetencyComponent() {
        _classCallCheck(this, CompetencyComponent);

        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_2__;
      } // time watching videos
      // time on platform
      // # videos accessed
      // # forum visits
      // # sessions per week
      // # questions attempted
      // % of time spent on videos
      // % of time spent on quizzes
      // avg. time on platform per week
      // # visited video lectures
      // # forum contributions


      _createClass(CompetencyComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.setData();
        }
      }, {
        key: "setData",
        value: function setData() {
          this.chartOptions = {
            chart: {
              type: "line",
              polar: true
            },
            title: {
              text: "Competency"
            },
            subtitle: {
              text: "Metacognitive Awareness [31] Competency [31], Self regulation [46] Learning strategies [46] predict performance [46] procrastination [46], Predict performance (by self-regulation metrics) [98] Self-Regulated Learning [98] "
            },
            xAxis: {
              categories: ["# forum contributions", "# visited video lectures", "# questions attempted", "% of time spent on quizzes", "avg. time on platform per week"],
              tickmarkPlacement: "on",
              lineWidth: 0
            },
            yAxis: {
              gridLineInterpolation: "polygon",
              lineWidth: 0,
              min: 0
            },
            exporting: {
              enabled: true
            },
            credits: {
              enabled: false
            },
            tooltip: {
              enabled: false
            },
            legend: {
              align: "right",
              verticalAlign: "middle",
              layout: "vertical"
            },
            series: [{
              name: "You",
              data: [30, 52, 44, 40, 22],
              pointPlacement: "on"
            }, {
              name: "Average graduate last week",
              data: [23, 41, 50, 44, 29],
              pointPlacement: "on"
            }]
          }, highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default()(highcharts__WEBPACK_IMPORTED_MODULE_2__);
        }
      }]);

      return CompetencyComponent;
    }();

    CompetencyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-competency",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./competency.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/competency/competency.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./competency.component.css */
      "./src/app/charts/competency/competency.component.css"))["default"]]
    })], CompetencyComponent);
    /***/
  },

  /***/
  "./src/app/charts/course-assessment/course-assessment.component.css": function srcAppChartsCourseAssessmentCourseAssessmentComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0cy9jb3Vyc2UtYXNzZXNzbWVudC9jb3Vyc2UtYXNzZXNzbWVudC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/charts/course-assessment/course-assessment.component.ts": function srcAppChartsCourseAssessmentCourseAssessmentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CourseAssessmentComponent", function () {
      return CourseAssessmentComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! highcharts */
    "./node_modules/highcharts/highcharts.js");
    /* harmony import */


    var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! highcharts/modules/exporting */
    "./node_modules/highcharts/modules/exporting.js");
    /* harmony import */


    var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var highcharts_modules_networkgraph__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! highcharts/modules/networkgraph */
    "./node_modules/highcharts/modules/networkgraph.js");
    /* harmony import */


    var highcharts_modules_networkgraph__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_networkgraph__WEBPACK_IMPORTED_MODULE_4__);

    highcharts_modules_networkgraph__WEBPACK_IMPORTED_MODULE_4___default()(highcharts__WEBPACK_IMPORTED_MODULE_2__);

    var CourseAssessmentComponent = /*#__PURE__*/function () {
      function CourseAssessmentComponent() {
        _classCallCheck(this, CourseAssessmentComponent);

        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_2__;
      }

      _createClass(CourseAssessmentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.setData();
        }
      }, {
        key: "setData",
        value: function setData() {
          this.chartOptions = {
            chart: {},
            title: {
              text: "Course Assessment (Student X on Assignment 1)"
            },
            subtitle: {
              text: "Course Assessments [55]"
            },
            plotOptions: {
              networkgraph: {
                layoutAlgorithm: {
                  enableSimulation: true
                }
              }
            },
            series: [{
              type: "networkgraph",
              link: {
                width: 3
              },
              marker: {
                radius: 20
              },
              dataLabels: {
                enabled: true,
                linkFormat: ""
              },
              data: [{
                from: "Conditionals",
                to: "Functions"
              }, {
                from: "Conditionals",
                to: "Loops",
                color: "red",
                width: 4
              }, {
                from: "Conditionals",
                to: "Fundamentals",
                color: "green",
                width: 4
              }, {
                from: "Functions",
                to: "File I/O"
              }, {
                from: "Functions",
                to: "Arrays"
              }, {
                from: "Loops",
                to: "File I/O"
              }, {
                from: "Loops",
                to: "Arrays"
              }],
              nodes: [{
                id: "Loops",
                color: "red"
              }, {
                id: "Conditionals",
                color: "orange"
              }]
            }]
          };
          highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default()(highcharts__WEBPACK_IMPORTED_MODULE_2__);
          this.chartOptions2 = {
            chart: {
              type: "networkgraph"
            },
            title: {
              text: "Course Assessment (Cohort on Assignment 1)"
            },
            plotOptions: {
              networkgraph: {
                layoutAlgorithm: {
                  enableSimulation: true
                }
              }
            },
            series: [{
              type: "networkgraph",
              link: {
                width: 3
              },
              marker: {
                radius: 20
              },
              dataLabels: {
                enabled: true,
                linkFormat: ""
              },
              data: [{
                from: "Conditionals",
                to: "Functions"
              }, {
                from: "Conditionals",
                to: "Loops",
                color: "orange",
                width: 4
              }, {
                from: "Conditionals",
                to: "Fundamentals",
                color: "green",
                width: 4
              }, {
                from: "Functions",
                to: "File I/O"
              }, {
                from: "Functions",
                to: "Arrays"
              }, {
                from: "Loops",
                to: "File I/O"
              }, {
                from: "Loops",
                to: "Arrays"
              }],
              nodes: [{
                id: "Loops",
                color: "lightgreen"
              }, {
                id: "Conditionals",
                color: "green"
              }]
            }]
          };
        }
      }]);

      return CourseAssessmentComponent;
    }();

    CourseAssessmentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-course-assessment",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./course-assessment.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/course-assessment/course-assessment.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./course-assessment.component.css */
      "./src/app/charts/course-assessment/course-assessment.component.css"))["default"]]
    })], CourseAssessmentComponent);
    /***/
  },

  /***/
  "./src/app/charts/course-difficulty/course-difficulty.component.css": function srcAppChartsCourseDifficultyCourseDifficultyComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0cy9jb3Vyc2UtZGlmZmljdWx0eS9jb3Vyc2UtZGlmZmljdWx0eS5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/charts/course-difficulty/course-difficulty.component.ts": function srcAppChartsCourseDifficultyCourseDifficultyComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CourseDifficultyComponent", function () {
      return CourseDifficultyComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! highcharts */
    "./node_modules/highcharts/highcharts.js");
    /* harmony import */


    var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! highcharts/modules/exporting */
    "./node_modules/highcharts/modules/exporting.js");
    /* harmony import */


    var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__);

    var CourseDifficultyComponent = /*#__PURE__*/function () {
      function CourseDifficultyComponent() {
        _classCallCheck(this, CourseDifficultyComponent);

        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_2__;
      }

      _createClass(CourseDifficultyComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.chartOptions = {
            chart: {
              type: "column"
            },
            title: {
              text: "Course difficulty"
            },
            subtitle: {
              text: "Course difficulty [77], Perceived difficulty [133] Self-efficacy [133] Cognitive load [133]"
            },
            xAxis: {
              categories: ["Object Oriented Programming", "Linear Algebra", "Physics", "Database Systems", "Data Structure", "Statistics", "Operating Systems", "Algorithm Analysis", "Programming Fundamentals"],
              crosshair: true
            },
            tooltip: {
              headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
              pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' + '<td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',
              footerFormat: "</table>",
              shared: true,
              useHTML: true
            },
            yAxis: {
              labels: {
                format: "{value}%"
              },
              min: 0,
              title: {
                text: null
              }
            },
            plotOptions: {
              column: {
                pointPadding: 0.2,
                borderWidth: 0
              }
            },
            series: [{
              name: "Perceived Negative Impact over GPA",
              data: [17, 25, 0, 4, 5, 27, 31, 10, 32]
            }, {
              name: "Perceived difficulty",
              data: [0, 28, 4, 4, 8, 32, 33, 17, 12]
            }]
          };
          highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default()(highcharts__WEBPACK_IMPORTED_MODULE_2__);
        }
      }]);

      return CourseDifficultyComponent;
    }();

    CourseDifficultyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-course-difficulty",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./course-difficulty.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/course-difficulty/course-difficulty.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./course-difficulty.component.css */
      "./src/app/charts/course-difficulty/course-difficulty.component.css"))["default"]]
    })], CourseDifficultyComponent);
    /***/
  },

  /***/
  "./src/app/charts/curriculum-usage/curriculum-usage.component.css": function srcAppChartsCurriculumUsageCurriculumUsageComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0cy9jdXJyaWN1bHVtLXVzYWdlL2N1cnJpY3VsdW0tdXNhZ2UuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/charts/curriculum-usage/curriculum-usage.component.ts": function srcAppChartsCurriculumUsageCurriculumUsageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CurriculumUsageComponent", function () {
      return CurriculumUsageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! highcharts */
    "./node_modules/highcharts/highcharts.js");
    /* harmony import */


    var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! highcharts/modules/exporting */
    "./node_modules/highcharts/modules/exporting.js");
    /* harmony import */


    var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__);

    var CurriculumUsageComponent = /*#__PURE__*/function () {
      function CurriculumUsageComponent() {
        _classCallCheck(this, CurriculumUsageComponent);

        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_2__;
      }

      _createClass(CurriculumUsageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.setData();
        }
      }, {
        key: "setData",
        value: function setData() {
          this.chartOptions = {
            chart: {
              type: "scatter",
              zoomType: "xy"
            },
            title: {
              text: "Teacher curriculum usage"
            },
            subtitle: {
              text: "Teacher curriculum usage [65] Curriculum Planning / designing [65], Content quality [58]"
            },
            xAxis: {
              title: {
                enabled: true,
                text: "Proportion of days visited"
              },
              startOnTick: true,
              endOnTick: true,
              min: 0,
              max: 1,
              showLastLabel: true
            },
            yAxis: {
              title: {
                text: "Total visits (log_10)"
              },
              max: 1000
            },
            plotOptions: {
              scatter: {
                marker: {
                  radius: 5,
                  states: {
                    hover: {
                      enabled: false,
                      lineColor: "rgb(100,100,100)"
                    }
                  }
                },
                states: {
                  hover: {
                    marker: {
                      enabled: false
                    }
                  }
                },
                tooltip: {
                  enabled: false
                }
              }
            },
            series: [{
              name: "Teacher",
              color: "rgba(119, 152, 191, .8)",
              data: [[0, 7], [0, 9], [0.05, 100], [0.05, 130], [0.05, 170], [0.05, 320], [0.05, 440], [0.05, 620], [0.06, 940], [0.07, 150], [0.07, 600], [0.07, 660], [0.07, 630], [0.07, 720], [0.07, 800], [0.07, 870], [0.08, 820], [0.08, 680], [0.08, 780], [0.08, 920], [0.08, 880], [0.08, 980], [0.09, 1000], [0.09, 900], [0.09, 940], [0.09, 960], [0.09, 880], [0.09, 830], [0.06, 200], [0, 500], [0.02, 700], [0.03, 800], [0.04, 1000], [0.1, 100], [0.1, 700], [0.1, 660], [0.1, 803], [0.1, 740], [0.1, 890], [0.1, 900], [0.1, 950], [0.12, 250], [0.12, 750], [0.12, 800], [0.12, 910], [0.12, 690], [0.15, 903], [0.15, 850], [0.15, 820], [0.15, 720], [0.15, 680], [0.15, 880], [0, 100], [0.25, 140], [0.5, 700], [0.5, 300], [0.5, 500], [0.6, 620], [0.6, 820], [0.75, 200], [1, 150], [1, 220], [1, 300], [1, 420], [1, 550], [1, 800]]
            }]
          }, highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default()(highcharts__WEBPACK_IMPORTED_MODULE_2__);
        }
      }]);

      return CurriculumUsageComponent;
    }();

    CurriculumUsageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-curriculum-usage",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./curriculum-usage.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/curriculum-usage/curriculum-usage.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./curriculum-usage.component.css */
      "./src/app/charts/curriculum-usage/curriculum-usage.component.css"))["default"]]
    })], CurriculumUsageComponent);
    /***/
  },

  /***/
  "./src/app/charts/discussion-quality/discussion-quality.component.css": function srcAppChartsDiscussionQualityDiscussionQualityComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0cy9kaXNjdXNzaW9uLXF1YWxpdHkvZGlzY3Vzc2lvbi1xdWFsaXR5LmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/charts/discussion-quality/discussion-quality.component.ts": function srcAppChartsDiscussionQualityDiscussionQualityComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DiscussionQualityComponent", function () {
      return DiscussionQualityComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! highcharts */
    "./node_modules/highcharts/highcharts.js");
    /* harmony import */


    var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! highcharts/modules/exporting */
    "./node_modules/highcharts/modules/exporting.js");
    /* harmony import */


    var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__);

    var DiscussionQualityComponent = /*#__PURE__*/function () {
      function DiscussionQualityComponent() {
        _classCallCheck(this, DiscussionQualityComponent);

        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_2__;
      }

      _createClass(DiscussionQualityComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.setData();
        }
      }, {
        key: "setData",
        value: function setData() {
          this.chartOptions = {
            chart: {
              type: "line",
              polar: true
            },
            title: {
              text: "Discussion forum quality"
            },
            subtitle: {
              text: "Discussion Contribution Quantity & Quality [24] Reading analytics [24], Discussion forum quality [27], Discussion Engagements [49], Exploratory dialogue [142], Discourse Analysis [80], Social Network Analysis (Discussion Forum) [88] Discourse Analysis [88]"
            },
            xAxis: {
              categories: ["# comments", "# likes", "# replies"],
              tickmarkPlacement: "on",
              lineWidth: 0
            },
            yAxis: {
              gridLineInterpolation: "polygon",
              lineWidth: 0,
              min: 0
            },
            exporting: {
              enabled: true
            },
            credits: {
              enabled: false
            },
            tooltip: {
              shared: true,
              pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
            },
            legend: {
              align: "right",
              verticalAlign: "middle",
              layout: "vertical"
            },
            series: [{
              name: "You",
              data: [30, 52, 44],
              pointPlacement: "on"
            }, {
              name: "Class Average",
              data: [56, 49, 33],
              pointPlacement: "on"
            }]
          }, highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default()(highcharts__WEBPACK_IMPORTED_MODULE_2__);
        }
      }]);

      return DiscussionQualityComponent;
    }();

    DiscussionQualityComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-discussion-quality",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./discussion-quality.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/discussion-quality/discussion-quality.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./discussion-quality.component.css */
      "./src/app/charts/discussion-quality/discussion-quality.component.css"))["default"]]
    })], DiscussionQualityComponent);
    /***/
  },

  /***/
  "./src/app/charts/droppingout/droppingout.component.css": function srcAppChartsDroppingoutDroppingoutComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0cy9kcm9wcGluZ291dC9kcm9wcGluZ291dC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/charts/droppingout/droppingout.component.ts": function srcAppChartsDroppingoutDroppingoutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DroppingoutComponent", function () {
      return DroppingoutComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! highcharts */
    "./node_modules/highcharts/highcharts.js");
    /* harmony import */


    var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! highcharts/modules/exporting */
    "./node_modules/highcharts/modules/exporting.js");
    /* harmony import */


    var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__);

    var DroppingoutComponent = /*#__PURE__*/function () {
      function DroppingoutComponent() {
        _classCallCheck(this, DroppingoutComponent);

        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_2__;
      }

      _createClass(DroppingoutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          //Set the chart data after we get the indicator and metrics
          this.setData();
        }
      }, {
        key: "setData",
        value: function setData() {
          this.chartOptions = {
            chart: {
              type: "scatter",
              zoomType: "xy"
            },
            title: {
              text: "Dropping out"
            },
            subtitle: {
              text: "Dropping out [59], Early Warning [79] Dropout Prediction [79], Course Planning [99] Early Warning [99], At-Risk Students [101] Early warning [101], At-Risk Students [64] Retention Prediction [64], At-Risk students [71] Exam success prediction [71], At-risk students [131] performance [131]"
            },
            tooltip: {
              enabled: false
            },
            xAxis: {
              min: -100,
              max: 100,
              tickInterval: 100,
              minorTickInterval: 10,
              tickLength: 0,
              minorTickLength: 0,
              labels: {
                enabled: false
              },
              title: {
                enabled: true,
                text: "Academic Performance"
              },

              /*
              plotLines:[{
                  value:0,
                  color:'#666',
                  width:1
              }],
              */
              gridLineWidth: 2,
              showLastLabel: true
            },
            yAxis: {
              title: {
                enabled: true,
                text: "Academic Engagement"
              },
              min: -100,
              max: 100,
              labels: {
                enabled: false
              },
              tickInterval: 100,
              minorTickInterval: 10,
              tickLength: 0,
              minorTickLength: 0,
              gridLineWidth: 2,
              plotLinesplotLines: [{
                value: 0,
                color: "#666",
                width: 1
              }]
            },
            plotOptions: {},
            series: [{
              name: "Second Semester Drop-out",
              color: "rgba(223, 83, 83, .8)",
              data: [{
                x: -90,
                y: -10
              }, {
                x: -91,
                y: -31
              }, {
                x: -85,
                y: -67
              }, {
                x: -80,
                y: -85
              }, {
                x: -37,
                y: -48
              }, {
                x: -20,
                y: -35
              }, {
                x: -45,
                y: -35
              }, {
                x: -75,
                y: -50
              }, {
                x: -50,
                y: -30
              }, {
                x: -30,
                y: -30
              }, {
                x: -50,
                y: -90
              }, {
                x: -20,
                y: -95
              }, {
                x: 10,
                y: -73
              }, {
                x: 15,
                y: -93
              }, {
                x: 30,
                y: -85
              }, {
                x: 40,
                y: -63
              }, {
                x: -95,
                y: 10
              }, {
                x: -91,
                y: 60
              }, {
                x: -85,
                y: 83
              }, {
                x: -80,
                y: 10
              }, {
                x: -65,
                y: 10
              }, {
                x: -45,
                y: 10
              }, {
                x: -35,
                y: 30
              }, {
                x: -55,
                y: 50
              }, {
                x: 10,
                y: 20
              }]
            }, {
              name: "Second Semester Stayer",
              color: "rgba(64, 205, 23,  .8)",
              data: [{
                x: -30,
                y: -10
              }, {
                x: -15,
                y: -12
              }, {
                x: -17,
                y: -20
              }, {
                x: -30,
                y: -70
              }, {
                x: -10,
                y: -80
              }, {
                x: 10,
                y: -10
              }, {
                x: 13,
                y: -30
              }, {
                x: 20,
                y: -15
              }, {
                x: 22,
                y: -23
              }, {
                x: 18,
                y: -34
              }, {
                x: 30,
                y: -50
              }, {
                x: 45,
                y: -15
              }, {
                x: 55,
                y: -9
              }, {
                x: 86,
                y: -7
              }, {
                x: 85,
                y: -50
              }, {
                x: 80,
                y: -90
              }, {
                x: 77,
                y: -55
              }, {
                x: -50,
                y: 95
              }, {
                x: -40,
                y: 85
              }, {
                x: -30,
                y: 82
              }, {
                x: -15,
                y: 77
              }, {
                x: -20,
                y: 70
              }, {
                x: 20,
                y: 25
              }, {
                x: 15,
                y: 30
              }, {
                x: 17,
                y: 34
              }, {
                x: 25,
                y: 77
              }, {
                x: 30,
                y: 92
              }, {
                x: 43,
                y: 67
              }, {
                x: 45,
                y: 55
              }, {
                x: 40,
                y: 20
              }, {
                x: 60,
                y: 16
              }, {
                x: 75,
                y: 18
              }, {
                x: 80,
                y: 40
              }, {
                x: 76,
                y: 49
              }, {
                x: 65,
                y: 85
              }, {
                x: 53,
                y: 67
              }, {
                x: 58,
                y: 73
              }]
            }]
          }, highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default()(highcharts__WEBPACK_IMPORTED_MODULE_2__);
        }
      }]);

      return DroppingoutComponent;
    }();

    DroppingoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-droppingout",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./droppingout.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/droppingout/droppingout.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./droppingout.component.css */
      "./src/app/charts/droppingout/droppingout.component.css"))["default"]]
    })], DroppingoutComponent);
    /***/
  },

  /***/
  "./src/app/charts/engagement-performance/engagement-performance.component.css": function srcAppChartsEngagementPerformanceEngagementPerformanceComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0cy9lbmdhZ2VtZW50LXBlcmZvcm1hbmNlL2VuZ2FnZW1lbnQtcGVyZm9ybWFuY2UuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/charts/engagement-performance/engagement-performance.component.ts": function srcAppChartsEngagementPerformanceEngagementPerformanceComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EngagementPerformanceComponent", function () {
      return EngagementPerformanceComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! highcharts */
    "./node_modules/highcharts/highcharts.js");
    /* harmony import */


    var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! highcharts/modules/exporting */
    "./node_modules/highcharts/modules/exporting.js");
    /* harmony import */


    var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__);

    var EngagementPerformanceComponent = /*#__PURE__*/function () {
      function EngagementPerformanceComponent() {
        _classCallCheck(this, EngagementPerformanceComponent);

        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_2__;
      }

      _createClass(EngagementPerformanceComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.setData();
        }
      }, {
        key: "setData",
        value: function setData() {
          this.chartOptions = {
            chart: {
              type: "column"
            },
            title: {
              text: "Engagement and Performance"
            },
            subtitle: {
              text: "Engagement and Performance [69], Engagement [86]"
            },
            xAxis: {
              categories: ["WK 1", "WK 2", "WK 3", "WK 4", "WK 5"]
            },
            yAxis: {
              min: 0,
              title: {
                text: "Student Participation"
              }
            },
            tooltip: {
              pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
              shared: true
            },
            plotOptions: {
              column: {
                stacking: "percent",
                dataLabels: {
                  enabled: true,
                  format: "{y} %"
                }
              }
            },
            series: [{
              name: '"Auditors" (Watched video but did not participate)',
              data: [79, 69, 64, 55, 57]
            }, {
              name: '"Active" (Participated in an assessment this week)',
              data: [11, 13, 10, 17, 12]
            }, {
              name: '"Qualified" (Grades in 60th percentile in first two weeks)',
              data: [10, 18, 26, 28, 31]
            }]
          }, highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default()(highcharts__WEBPACK_IMPORTED_MODULE_2__);
        }
      }]);

      return EngagementPerformanceComponent;
    }();

    EngagementPerformanceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-engagement-performance",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./engagement-performance.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/engagement-performance/engagement-performance.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./engagement-performance.component.css */
      "./src/app/charts/engagement-performance/engagement-performance.component.css"))["default"]]
    })], EngagementPerformanceComponent);
    /***/
  },

  /***/
  "./src/app/charts/feedback/feedback.component.css": function srcAppChartsFeedbackFeedbackComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0cy9mZWVkYmFjay9mZWVkYmFjay5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/charts/feedback/feedback.component.ts": function srcAppChartsFeedbackFeedbackComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FeedbackComponent", function () {
      return FeedbackComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! highcharts */
    "./node_modules/highcharts/highcharts.js");
    /* harmony import */


    var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! highcharts/modules/exporting */
    "./node_modules/highcharts/modules/exporting.js");
    /* harmony import */


    var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var highcharts_highcharts_more_src__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! highcharts/highcharts-more.src */
    "./node_modules/highcharts/highcharts-more.src.js");
    /* harmony import */


    var highcharts_highcharts_more_src__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(highcharts_highcharts_more_src__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var highcharts_modules_solid_gauge__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! highcharts/modules/solid-gauge */
    "./node_modules/highcharts/modules/solid-gauge.js");
    /* harmony import */


    var highcharts_modules_solid_gauge__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_solid_gauge__WEBPACK_IMPORTED_MODULE_5__);

    highcharts_highcharts_more_src__WEBPACK_IMPORTED_MODULE_4___default()(highcharts__WEBPACK_IMPORTED_MODULE_2__);
    highcharts_modules_solid_gauge__WEBPACK_IMPORTED_MODULE_5___default()(highcharts__WEBPACK_IMPORTED_MODULE_2__);

    var FeedbackComponent = /*#__PURE__*/function () {
      function FeedbackComponent() {
        _classCallCheck(this, FeedbackComponent);

        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_2__;
      }

      _createClass(FeedbackComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.setData();
        }
      }, {
        key: "setData",
        value: function setData() {
          this.chartOptions = {
            chart: {
              type: "solidgauge"
            },
            title: {
              text: "You"
            },
            subtitle: {
              text: "Feedback [41], Feedback [91]"
            },
            pane: {
              center: ["50%", "85%"],
              size: "140%",
              startAngle: -90,
              endAngle: 90,
              background: {
                backgroundColor: highcharts__WEBPACK_IMPORTED_MODULE_2__["defaultOptions"].legend.backgroundColor || "#EEE",
                innerRadius: "60%",
                outerRadius: "100%",
                shape: "arc"
              }
            },
            exporting: {
              enabled: false
            },
            tooltip: {
              enabled: false
            },
            // the value axis
            yAxis: {
              stops: [[0.1, "#DF5353"], [0.5, "#DDDF0D"], [0.9, "#55BF3B"]],
              lineWidth: 0,
              tickWidth: 0,
              minorTickInterval: null,
              tickAmount: 2,
              title: {
                y: -70
              },
              labels: {
                y: 16
              },
              min: 0,
              max: 100
            },
            plotOptions: {
              solidgauge: {
                dataLabels: {
                  y: 5,
                  borderWidth: 0,
                  useHTML: true
                }
              }
            },
            credits: {
              enabled: false
            },
            series: [{
              name: "You",
              data: [70],
              dataLabels: {
                format: '<div style="text-align:center">' + '<span style="font-size:25px">{y}%</span><br/></div>'
              }
            }]
          };
          highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default()(highcharts__WEBPACK_IMPORTED_MODULE_2__);
          this.chartOptions2 = {
            chart: {
              type: "solidgauge"
            },
            title: {
              text: "Class"
            },
            pane: {
              center: ["50%", "85%"],
              size: "140%",
              startAngle: -90,
              endAngle: 90,
              background: {
                backgroundColor: highcharts__WEBPACK_IMPORTED_MODULE_2__["defaultOptions"].legend.backgroundColor || "#EEE",
                innerRadius: "60%",
                outerRadius: "100%",
                shape: "arc"
              }
            },
            exporting: {
              enabled: false
            },
            tooltip: {
              enabled: false
            },
            // the value axis
            yAxis: {
              stops: [[0.1, "#DF5353"], [0.5, "#DDDF0D"], [0.9, "#55BF3B"]],
              lineWidth: 0,
              tickWidth: 0,
              minorTickInterval: null,
              tickAmount: 2,
              title: {
                y: -70
              },
              labels: {
                y: 16
              },
              min: 0,
              max: 100
            },
            plotOptions: {
              solidgauge: {
                dataLabels: {
                  y: 5,
                  borderWidth: 0,
                  useHTML: true
                }
              }
            },
            credits: {
              enabled: false
            },
            series: [{
              name: "Class",
              data: [83],
              dataLabels: {
                format: '<div style="text-align:center">' + '<span style="font-size:25px">{y}%</span><br/></div>'
              }
            }]
          };
        }
      }, {
        key: "updateChart",
        value: function updateChart(event) {
          var selVal = event.target.value;

          if (selVal == "A" || selVal == "") {
            this.chartOptions["series"] = {
              name: "You",
              data: [70]
            };
            this.chartOptions2["series"] = {
              name: "Class",
              data: [83]
            };
          } else if (selVal == "B") {
            this.chartOptions["series"] = {
              name: "You",
              data: [11]
            };
            this.chartOptions2["series"] = {
              name: "Class",
              data: [50]
            };
          } else if (selVal == "C") {
            this.chartOptions["series"] = {
              name: "You",
              data: [92]
            };
            this.chartOptions2["series"] = {
              name: "Class",
              data: [76]
            };
          } else if (selVal == "D") {
            this.chartOptions["series"] = {
              name: "You",
              data: [67]
            };
            this.chartOptions2["series"] = {
              name: "Class",
              data: [63]
            };
          } //Make a copy of the new object so the changes are visible


          this.chartOptions = Object.assign({}, this.chartOptions);
          this.chartOptions2 = Object.assign({}, this.chartOptions2);
        }
      }]);

      return FeedbackComponent;
    }();

    FeedbackComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-feedback",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./feedback.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/feedback/feedback.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./feedback.component.css */
      "./src/app/charts/feedback/feedback.component.css"))["default"]]
    })], FeedbackComponent);
    /***/
  },

  /***/
  "./src/app/charts/final-grade-prediction/final-grade-prediction.component.css": function srcAppChartsFinalGradePredictionFinalGradePredictionComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0cy9maW5hbC1ncmFkZS1wcmVkaWN0aW9uL2ZpbmFsLWdyYWRlLXByZWRpY3Rpb24uY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/charts/final-grade-prediction/final-grade-prediction.component.ts": function srcAppChartsFinalGradePredictionFinalGradePredictionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FinalGradePredictionComponent", function () {
      return FinalGradePredictionComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! highcharts */
    "./node_modules/highcharts/highcharts.js");
    /* harmony import */


    var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! highcharts/modules/exporting */
    "./node_modules/highcharts/modules/exporting.js");
    /* harmony import */


    var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__);

    var FinalGradePredictionComponent = /*#__PURE__*/function () {
      function FinalGradePredictionComponent() {
        _classCallCheck(this, FinalGradePredictionComponent);

        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_2__;
      }

      _createClass(FinalGradePredictionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.setData();
        }
      }, {
        key: "setData",
        value: function setData() {
          this.chartOptions = {
            chart: {
              type: "column"
            },
            title: {
              text: "Final grade prediction"
            },
            subtitle: {
              text: "Final Grade Prediction [28], Grade prediction (by performance / Course difficulty level) [83], Performance [83], Course difficulty level [83], Predict exam grades [78], Predict Student Grades [115], Predict exam success [60], Performance Prediction [37] Success Prediction [37], Success Prediction [105], Predict academic achievement [81], Predict Final Grade [119]"
            },
            xAxis: {
              categories: ["WK 1", "WK 2", "WK 3", "WK 4", "WK 5", "WK 6", "WK 7", "WK 8"],
              crosshair: true
            },
            yAxis: {
              min: 0,
              title: {
                text: "Final grade"
              },
              max: 100
            },
            tooltip: {
              headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
              pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' + '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
              footerFormat: "</table>",
              shared: true,
              useHTML: true
            },
            plotOptions: {
              column: {
                pointPadding: 0.2,
                borderWidth: 0
              }
            },
            series: [{
              name: "Number of New blog posts in group blog",
              data: [40, 90, 70, 18, 40]
            }, {
              name: "Number of Topics that each user has uploaded on group discussion",
              data: [30, 60, 30, 80, 100]
            }, {
              name: "Number of Comments on blog posts in group blog",
              data: [30, 20, 10, 20, 10]
            }, {
              type: "scatter",
              data: [25, 40, 25, 30, 40, 50],
              dashStyle: "shortdot",
              name: "Final grade prediction"
            }]
          };
          highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default()(highcharts__WEBPACK_IMPORTED_MODULE_2__);
        }
      }]);

      return FinalGradePredictionComponent;
    }();

    FinalGradePredictionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-final-grade-prediction",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./final-grade-prediction.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/final-grade-prediction/final-grade-prediction.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./final-grade-prediction.component.css */
      "./src/app/charts/final-grade-prediction/final-grade-prediction.component.css"))["default"]]
    })], FinalGradePredictionComponent);
    /***/
  },

  /***/
  "./src/app/charts/gamification/gamification.component.css": function srcAppChartsGamificationGamificationComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0cy9nYW1pZmljYXRpb24vZ2FtaWZpY2F0aW9uLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/charts/gamification/gamification.component.ts": function srcAppChartsGamificationGamificationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GamificationComponent", function () {
      return GamificationComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! highcharts */
    "./node_modules/highcharts/highcharts.js");
    /* harmony import */


    var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! highcharts/modules/exporting */
    "./node_modules/highcharts/modules/exporting.js");
    /* harmony import */


    var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__);

    var GamificationComponent = /*#__PURE__*/function () {
      function GamificationComponent() {
        _classCallCheck(this, GamificationComponent);

        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_2__;
      }

      _createClass(GamificationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.setData();
        }
      }, {
        key: "setData",
        value: function setData() {
          this.chartOptions = {
            title: {
              text: "Gamification"
            },
            subtitle: {
              text: "Gamification [45], Badges earned [43], Game Based Learning [104] Learning Strategy (Game) [104] Predict Performance (Game) [104]"
            },
            xAxis: {
              categories: ["Quiz 1", "Quiz 2", "Quiz 3", "Quiz 4", "Quiz 5", "Quiz 6", "Quiz 7"]
            },
            yAxis: {
              title: {
                text: "Points"
              }
            },
            series: [{
              type: "area",
              name: "Achieved points",
              data: [93, 72, 100, 64, 78, 90]
            }, {
              name: "Maximum possible points",
              type: "spline",
              data: [100, 100, 100, 100, 100, 100],
              marker: {
                enabled: false
              },
              dashStyle: "shortdot"
            }]
          }, highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default()(highcharts__WEBPACK_IMPORTED_MODULE_2__);
        }
      }]);

      return GamificationComponent;
    }();

    GamificationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-gamification",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./gamification.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/gamification/gamification.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./gamification.component.css */
      "./src/app/charts/gamification/gamification.component.css"))["default"]]
    })], GamificationComponent);
    /***/
  },

  /***/
  "./src/app/charts/group-participation/group-participation.component.css": function srcAppChartsGroupParticipationGroupParticipationComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0cy9ncm91cC1wYXJ0aWNpcGF0aW9uL2dyb3VwLXBhcnRpY2lwYXRpb24uY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/charts/group-participation/group-participation.component.ts": function srcAppChartsGroupParticipationGroupParticipationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GroupParticipationComponent", function () {
      return GroupParticipationComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! highcharts */
    "./node_modules/highcharts/highcharts.js");
    /* harmony import */


    var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var highcharts_modules_sankey__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! highcharts/modules/sankey */
    "./node_modules/highcharts/modules/sankey.js");
    /* harmony import */


    var highcharts_modules_sankey__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_sankey__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var highcharts_modules_dependency_wheel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! highcharts/modules/dependency-wheel */
    "./node_modules/highcharts/modules/dependency-wheel.js");
    /* harmony import */


    var highcharts_modules_dependency_wheel__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_dependency_wheel__WEBPACK_IMPORTED_MODULE_4__);

    highcharts_modules_sankey__WEBPACK_IMPORTED_MODULE_3___default()(highcharts__WEBPACK_IMPORTED_MODULE_2__);
    highcharts_modules_dependency_wheel__WEBPACK_IMPORTED_MODULE_4___default()(highcharts__WEBPACK_IMPORTED_MODULE_2__);

    var GroupParticipationComponent = /*#__PURE__*/function () {
      function GroupParticipationComponent() {
        _classCallCheck(this, GroupParticipationComponent);

        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_2__;
      }

      _createClass(GroupParticipationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.setData();
        }
      }, {
        key: "setData",
        value: function setData() {
          this.chartOptions = {
            title: {
              text: "Group Participation"
            },
            subtitle: {
              text: "Group Participation [30]"
            },
            tooltip: {
              pointFormatter: function pointFormatter() {
                return "<span>".concat(this.weight, " content read, ").concat(this.weight * 2, " comments made</span> ");
              }
            },
            series: [{
              keys: ["from", "to", "weight"],
              data: [["Group 1", "Group 2", 5], ["Group 1", "Group 3", 1], ["Group 1", "Group 6", 1], ["Group 1", "Group 4", 1], ["Group 5", "Group 2", 1], ["Group 5", "Group 3", 3], ["Group 5", "Group 4", 1], ["Group 3", "Group 2", 1], ["Group 4", "Group 3", 1], ["Group 4", "Group 8", 5], ["Group 6", "Group 4", 2], ["Group 2", "Group 4", 1], ["Group 2", "Group 3", 1]],
              type: "dependencywheel",
              name: "Interaction between Groups",
              dataLabels: {
                color: "#333",
                textPath: {
                  enabled: true,
                  attributes: {
                    dy: 5
                  }
                },
                distance: 10
              },
              size: "95%"
            }]
          };
        }
      }]);

      return GroupParticipationComponent;
    }();

    GroupParticipationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-group-participation",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./group-participation.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/group-participation/group-participation.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./group-participation.component.css */
      "./src/app/charts/group-participation/group-participation.component.css"))["default"]]
    })], GroupParticipationComponent);
    /***/
  },

  /***/
  "./src/app/charts/initiative/initiative.component.css": function srcAppChartsInitiativeInitiativeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0cy9pbml0aWF0aXZlL2luaXRpYXRpdmUuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/charts/initiative/initiative.component.ts": function srcAppChartsInitiativeInitiativeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InitiativeComponent", function () {
      return InitiativeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! highcharts */
    "./node_modules/highcharts/highcharts.js");
    /* harmony import */


    var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! highcharts/modules/exporting */
    "./node_modules/highcharts/modules/exporting.js");
    /* harmony import */


    var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var highcharts_highcharts_more__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! highcharts/highcharts-more */
    "./node_modules/highcharts/highcharts-more.js");
    /* harmony import */


    var highcharts_highcharts_more__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(highcharts_highcharts_more__WEBPACK_IMPORTED_MODULE_4__);

    highcharts_highcharts_more__WEBPACK_IMPORTED_MODULE_4___default()(highcharts__WEBPACK_IMPORTED_MODULE_2__);

    var InitiativeComponent = /*#__PURE__*/function () {
      function InitiativeComponent() {
        _classCallCheck(this, InitiativeComponent);

        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_2__;
      }

      _createClass(InitiativeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.setData();
        }
      }, {
        key: "setData",
        value: function setData() {
          this.chartOptions = {
            chart: {
              type: "line",
              polar: true
            },
            title: {
              text: "Initiative"
            },
            subtitle: {
              text: "Productivity = (Initiative + Responsiveness) / Presence [124] Collaboration [124]"
            },
            xAxis: {
              categories: ["Initiative", "Responsiveness", "Presence", "Connectedness"],
              tickmarkPlacement: "on",
              lineWidth: 0
            },
            yAxis: {
              gridLineInterpolation: "polygon",
              lineWidth: 0,
              min: 0
            },
            exporting: {
              enabled: true
            },
            credits: {
              enabled: false
            },
            tooltip: {
              shared: true,
              pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
            },
            legend: {
              align: "right",
              verticalAlign: "middle",
              layout: "vertical"
            },
            series: [{
              data: [30, 52, 44, 40],
              pointPlacement: "on",
              name: "# posts (discussion, blog, files, pages)"
            }, {
              data: [10, 22, 24, 30],
              pointPlacement: "on",
              name: "# comments (discussion, blog, files, pages)"
            }, {
              data: [25, 32, 41, 20],
              pointPlacement: "on",
              name: "# views"
            }, {
              data: [33, 24, 42, 11],
              pointPlacement: "on",
              name: "# contacts made"
            }]
          }, highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default()(highcharts__WEBPACK_IMPORTED_MODULE_2__);
        }
      }]);

      return InitiativeComponent;
    }();

    InitiativeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-initiative",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./initiative.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/initiative/initiative.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./initiative.component.css */
      "./src/app/charts/initiative/initiative.component.css"))["default"]]
    })], InitiativeComponent);
    /***/
  },

  /***/
  "./src/app/charts/learning-behavior-patterns/learning-behavior-patterns.component.css": function srcAppChartsLearningBehaviorPatternsLearningBehaviorPatternsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0cy9sZWFybmluZy1iZWhhdmlvci1wYXR0ZXJucy9sZWFybmluZy1iZWhhdmlvci1wYXR0ZXJucy5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/charts/learning-behavior-patterns/learning-behavior-patterns.component.ts": function srcAppChartsLearningBehaviorPatternsLearningBehaviorPatternsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LearningBehaviorPatternsComponent", function () {
      return LearningBehaviorPatternsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! highcharts */
    "./node_modules/highcharts/highcharts.js");
    /* harmony import */


    var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! highcharts/modules/exporting */
    "./node_modules/highcharts/modules/exporting.js");
    /* harmony import */


    var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__);

    var LearningBehaviorPatternsComponent = /*#__PURE__*/function () {
      function LearningBehaviorPatternsComponent() {
        _classCallCheck(this, LearningBehaviorPatternsComponent);

        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_2__;
      }

      _createClass(LearningBehaviorPatternsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.setData();
        }
      }, {
        key: "setData",
        value: function setData() {
          this.chartOptions = {
            chart: {
              type: "area"
            },
            title: {
              text: "Learning behavior patterns"
            },
            subtitle: {
              text: "Learning Behavior Patterns [111], Learning Patterns [132], Learning Strategies [118]"
            },
            xAxis: {
              tickmarkPlacement: "on",
              labels: {
                enabled: false
              },
              title: {
                text: "Learning Sequence"
              }
            },
            yAxis: {
              labels: {
                format: "{value}%"
              },
              title: {
                enabled: false
              }
            },
            tooltip: {
              pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.percentage:.1f}%</b><br/>',
              split: true
            },
            plotOptions: {
              area: {
                stacking: "percent",
                lineColor: "#ffffff",
                lineWidth: 1,
                marker: {
                  lineWidth: 1,
                  lineColor: "#ffffff"
                }
              }
            },
            series: [{
              name: "Video views",
              data: [50, 63, 89, 94, 14, 36, 52]
            }, {
              name: "Incorrectly solved assessment item",
              data: [10, 10, 11, 13, 21, 76, 17]
            }, {
              name: "Correctly solved MCQ",
              data: [16, 20, 27, 48, 54, 79, 62]
            }, {
              name: "Incorrectly solved MCQ",
              data: [18, 31, 54, 15, 33, 81, 11]
            }, {
              name: "Reading material page views",
              data: [63, 32, 22, 16, 13, 30, 46]
            }, {
              name: "Correctly solved assessment item",
              data: [22, 18, 12, 16, 13, 30, 46]
            }]
          }, highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default()(highcharts__WEBPACK_IMPORTED_MODULE_2__);
        }
      }]);

      return LearningBehaviorPatternsComponent;
    }();

    LearningBehaviorPatternsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-learning-behavior-patterns",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./learning-behavior-patterns.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/learning-behavior-patterns/learning-behavior-patterns.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./learning-behavior-patterns.component.css */
      "./src/app/charts/learning-behavior-patterns/learning-behavior-patterns.component.css"))["default"]]
    })], LearningBehaviorPatternsComponent);
    /***/
  },

  /***/
  "./src/app/charts/learning-behaviour/learning-behaviour.component.css": function srcAppChartsLearningBehaviourLearningBehaviourComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0cy9sZWFybmluZy1iZWhhdmlvdXIvbGVhcm5pbmctYmVoYXZpb3VyLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/charts/learning-behaviour/learning-behaviour.component.ts": function srcAppChartsLearningBehaviourLearningBehaviourComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LearningBehaviourComponent", function () {
      return LearningBehaviourComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! highcharts */
    "./node_modules/highcharts/highcharts.js");
    /* harmony import */


    var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! highcharts/modules/exporting */
    "./node_modules/highcharts/modules/exporting.js");
    /* harmony import */


    var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__);

    var LearningBehaviourComponent = /*#__PURE__*/function () {
      function LearningBehaviourComponent() {
        _classCallCheck(this, LearningBehaviourComponent);

        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_2__;
      }

      _createClass(LearningBehaviourComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.setData();
        }
      }, {
        key: "setData",
        value: function setData() {
          this.chartOptions = {
            chart: {
              type: "packedbubble",
              height: "50%"
            },
            title: {
              text: "Learning behavior"
            },
            subtitle: {
              text: "Learning behavior [76]"
            },
            tooltip: {
              useHTML: true,
              pointFormat: "<b>{point.name}</b>"
            },
            plotOptions: {
              packedbubble: {
                minSize: "20%",
                maxSize: "100%",
                zMin: 0,
                zMax: 1000,
                layoutAlgorithm: {
                  gravitationalConstant: 0.05,
                  splitSeries: true,
                  seriesInteraction: false,
                  dragBetweenSeries: true,
                  parentNodeLimit: true
                },
                dataLabels: {
                  enabled: true,
                  format: "{point.name}",
                  filter: {
                    property: "y",
                    operator: ">",
                    value: 15
                  },
                  style: {
                    color: "black",
                    textOutline: "none",
                    fontWeight: "normal"
                  }
                }
              }
            },
            series: [{
              name: "Completing",
              data: [{
                name: "User 1",
                value: Math.floor(Math.random() * 30)
              }, {
                name: "User 2",
                value: Math.floor(Math.random() * 30)
              }, {
                name: "User 3",
                value: Math.floor(Math.random() * 30)
              }, {
                name: "User 4",
                value: Math.floor(Math.random() * 30)
              }, {
                name: "User 5",
                value: Math.floor(Math.random() * 30)
              }, {
                name: "User 6",
                value: Math.floor(Math.random() * 30)
              }, {
                name: "User 7",
                value: Math.floor(Math.random() * 30)
              }, {
                name: "User 8",
                value: Math.floor(Math.random() * 30)
              }, {
                name: "User 9",
                value: Math.floor(Math.random() * 30)
              }, {
                name: "User 10",
                value: Math.floor(Math.random() * 30)
              }, {
                name: "User 11",
                value: Math.floor(Math.random() * 30)
              }, {
                name: "User 12",
                value: Math.floor(Math.random() * 30)
              }]
            }, {
              name: "Auditing",
              data: [{
                name: "User 13",
                value: Math.floor(Math.random() * 30)
              }, {
                name: "User 14",
                value: Math.floor(Math.random() * 30)
              }, {
                name: "User 15",
                value: Math.floor(Math.random() * 30)
              }, {
                name: "User 16",
                value: Math.floor(Math.random() * 30)
              }, {
                name: "User 17",
                value: Math.floor(Math.random() * 30)
              }, {
                name: "User 18",
                value: Math.floor(Math.random() * 30)
              }, {
                name: "User 19",
                value: Math.floor(Math.random() * 30)
              }, {
                name: "User 20",
                value: Math.floor(Math.random() * 30)
              }, {
                name: "User 21",
                value: Math.floor(Math.random() * 30)
              }, {
                name: "User 22",
                value: Math.floor(Math.random() * 30)
              }]
            }, {
              name: "Disengaging",
              data: [{
                name: "User 23",
                value: Math.floor(Math.random() * 30)
              }, {
                name: "User 24",
                value: Math.floor(Math.random() * 30)
              }, {
                name: "User 25",
                value: Math.floor(Math.random() * 30)
              }]
            }, {
              name: "Sampling",
              data: [{
                name: "User 26",
                value: Math.floor(Math.random() * 30)
              }, {
                name: "User 27",
                value: Math.floor(Math.random() * 30)
              }, {
                name: "User 28",
                value: Math.floor(Math.random() * 30)
              }, {
                name: "User 29",
                value: Math.floor(Math.random() * 30)
              }, {
                name: "User 30",
                value: Math.floor(Math.random() * 30)
              }]
            }]
          };
          highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default()(highcharts__WEBPACK_IMPORTED_MODULE_2__);
        }
      }]);

      return LearningBehaviourComponent;
    }();

    LearningBehaviourComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-learning-behaviour",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./learning-behaviour.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/learning-behaviour/learning-behaviour.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./learning-behaviour.component.css */
      "./src/app/charts/learning-behaviour/learning-behaviour.component.css"))["default"]]
    })], LearningBehaviourComponent);
    /***/
  },

  /***/
  "./src/app/charts/learning-progress/learning-progress.component.css": function srcAppChartsLearningProgressLearningProgressComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0cy9sZWFybmluZy1wcm9ncmVzcy9sZWFybmluZy1wcm9ncmVzcy5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/charts/learning-progress/learning-progress.component.ts": function srcAppChartsLearningProgressLearningProgressComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LearningProgressComponent", function () {
      return LearningProgressComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! highcharts */
    "./node_modules/highcharts/highcharts.js");
    /* harmony import */


    var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! highcharts/modules/exporting */
    "./node_modules/highcharts/modules/exporting.js");
    /* harmony import */


    var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__);

    var LearningProgressComponent = /*#__PURE__*/function () {
      function LearningProgressComponent() {
        _classCallCheck(this, LearningProgressComponent);

        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_2__;
      }

      _createClass(LearningProgressComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.setData();
        }
      }, {
        key: "setData",
        value: function setData() {
          this.chartOptions = {
            chart: {
              type: "line",
              zoomType: "xy",
              panning: true,
              panKey: "shift"
            },
            title: {
              text: "Learning Progress"
            },
            xAxis: {
              categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
              crosshair: true
            },
            yAxis: {
              min: 0,
              title: {
                text: "Amount"
              }
            },
            tooltip: {
              headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
              pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' + '<td style="padding:0"><b>{point.y:.1f} </b></td></tr>',
              footerFormat: "</table>",
              shared: true,
              useHTML: true
            },
            plotOptions: {
              column: {
                pointPadding: 0.2,
                borderWidth: 0
              }
            },
            series: [{
              name: "# completed videos",
              data: [12, 14, 9, 14, 18, 22, 14, 18, 13, 8, 9, 12]
            }, {
              name: "# attempted exercises",
              data: [5, 9, 6, 4, 8, 10, 13, 8, 14, 9, 8, 5]
            }]
          }, highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default()(highcharts__WEBPACK_IMPORTED_MODULE_2__);
        }
      }]);

      return LearningProgressComponent;
    }();

    LearningProgressComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-learning-progress",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./learning-progress.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/learning-progress/learning-progress.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./learning-progress.component.css */
      "./src/app/charts/learning-progress/learning-progress.component.css"))["default"]]
    })], LearningProgressComponent);
    /***/
  },

  /***/
  "./src/app/charts/online-change-detection/online-change-detection.component.css": function srcAppChartsOnlineChangeDetectionOnlineChangeDetectionComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0cy9vbmxpbmUtY2hhbmdlLWRldGVjdGlvbi9vbmxpbmUtY2hhbmdlLWRldGVjdGlvbi5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/charts/online-change-detection/online-change-detection.component.ts": function srcAppChartsOnlineChangeDetectionOnlineChangeDetectionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OnlineChangeDetectionComponent", function () {
      return OnlineChangeDetectionComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! highcharts */
    "./node_modules/highcharts/highcharts.js");
    /* harmony import */


    var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! highcharts/modules/exporting */
    "./node_modules/highcharts/modules/exporting.js");
    /* harmony import */


    var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__);

    var OnlineChangeDetectionComponent = /*#__PURE__*/function () {
      function OnlineChangeDetectionComponent() {
        _classCallCheck(this, OnlineChangeDetectionComponent);

        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_2__;
      }

      _createClass(OnlineChangeDetectionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.setData();
        }
      }, {
        key: "setData",
        value: function setData() {
          this.chartOptions = {
            chart: {
              type: "spline",
              animation: highcharts__WEBPACK_IMPORTED_MODULE_2__["SVGElement"],
              marginRight: 10,
              events: {
                load: function load() {
                  // set up the updating of the chart every 3 seconds
                  var series = this.series[0];
                  setInterval(function () {
                    var x = new Date().getTime(),
                        // current time
                    y = Math.random();
                    series.addPoint([x, y], true, true);
                  }, 3000);
                }
              }
            },
            time: {
              useUTC: false
            },
            title: {
              text: "Online Change Detection"
            },
            subtitle: {
              text: "Online change detection [137]"
            },
            accessibility: {
              announceNewData: {
                enabled: true,
                minAnnounceInterval: 15000,
                announcementFormatter: function announcementFormatter(allSeries, newSeries, newPoint) {
                  if (newPoint) {
                    return "New point added. Value: " + newPoint.y;
                  }

                  return false;
                }
              }
            },
            xAxis: {
              type: "datetime",
              tickPixelInterval: 150
            },
            yAxis: {
              title: {
                text: "Click Behaviour"
              },
              plotLines: [{
                value: 0,
                width: 1,
                color: "#808080"
              }]
            },
            tooltip: {
              headerFormat: "<b>{series.name}</b><br/>",
              pointFormat: "{point.x:%Y-%m-%d %H:%M:%S}<br/>{point.y:.2f}"
            },
            legend: {
              enabled: false
            },
            exporting: {
              enabled: false
            },
            series: [{
              name: "Click events",
              data: function () {
                // generate an array of random data
                var data = [],
                    time = new Date().getTime(),
                    i;

                for (i = -19; i <= 0; i += 1) {
                  data.push({
                    x: time + i * 3000,
                    y: Math.random() * 10
                  });
                }

                return data;
              }()
            }]
          }, highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default()(highcharts__WEBPACK_IMPORTED_MODULE_2__);
        }
      }]);

      return OnlineChangeDetectionComponent;
    }();

    OnlineChangeDetectionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-online-change-detection",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./online-change-detection.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/online-change-detection/online-change-detection.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./online-change-detection.component.css */
      "./src/app/charts/online-change-detection/online-change-detection.component.css"))["default"]]
    })], OnlineChangeDetectionComponent);
    /***/
  },

  /***/
  "./src/app/charts/passing-rate-prediction/passing-rate-prediction.component.css": function srcAppChartsPassingRatePredictionPassingRatePredictionComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0cy9wYXNzaW5nLXJhdGUtcHJlZGljdGlvbi9wYXNzaW5nLXJhdGUtcHJlZGljdGlvbi5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/charts/passing-rate-prediction/passing-rate-prediction.component.ts": function srcAppChartsPassingRatePredictionPassingRatePredictionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PassingRatePredictionComponent", function () {
      return PassingRatePredictionComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! highcharts */
    "./node_modules/highcharts/highcharts.js");
    /* harmony import */


    var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);

    var PassingRatePredictionComponent = /*#__PURE__*/function () {
      function PassingRatePredictionComponent() {
        _classCallCheck(this, PassingRatePredictionComponent);

        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_2__;
      }

      _createClass(PassingRatePredictionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.selectedOption = "Clicks";
          this.series_a = [{
            name: "series1",
            data: [22, 20, 18, 3, 4]
          }, {
            name: "series2",
            data: [10, 30, 10, 13, 14]
          }, {
            name: "series3",
            data: [12, 10, 10, 9, 2]
          }];
          this.setData();
        }
      }, {
        key: "setData",
        value: function setData() {
          this.chartOptions = {
            chart: {
              type: "column"
            },
            title: {
              text: "Final Grade Prediction"
            },
            subtitle: {
              text: "Passing rate Prediction [26] Final Grade Prediction [26] Performance prediction [26] Awareness [26], Success Prediction [56, 96], Performance Prediction [100, 117], predictive analytics (proposal) [143], Prediction (A pilot study) [144]"
            },
            tooltip: {
              shared: true
            },
            xAxis: [{
              title: {
                text: "Average grade so far"
              },
              categories: ["5", "15", "25", "35", "45", "55", "65", "75", "85", "95"],
              height: 100,
              max: 9,
              lineWidth: 2
            }, {
              title: {
                text: "final grade"
              },
              categories: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
              top: 300,
              max: 9,
              height: 100,
              offset: 0,
              lineWidth: 2
            }],
            yAxis: [{
              title: {
                text: "# students"
              },
              labels: {
                format: "{value}%"
              },
              height: 100,
              max: 25,
              lineWidth: 2
            }, {
              title: {
                text: "probability"
              },
              labels: {
                format: "{value}%"
              },
              top: 300,
              max: 100,
              height: 100,
              offset: 0,
              lineWidth: 2
            }],
            series: [{
              data: [10, 0, 5, 0, 5, 5, 10, {
                y: 25,
                color: "red"
              }, 20, 15],
              yAxis: 0,
              xAxis: 0,
              name: "Avg. grade assessments"
            }, {
              type: "spline",
              data: [0, 0, 0, 0, 0, 0, 0, 50, 100, 70],
              yAxis: 1,
              xAxis: 1,
              name: "Grade prediction"
            }]
          };
        }
      }]);

      return PassingRatePredictionComponent;
    }();

    PassingRatePredictionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-passing-rate-prediction",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./passing-rate-prediction.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/passing-rate-prediction/passing-rate-prediction.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./passing-rate-prediction.component.css */
      "./src/app/charts/passing-rate-prediction/passing-rate-prediction.component.css"))["default"]]
    })], PassingRatePredictionComponent);
    /***/
  },

  /***/
  "./src/app/charts/predict-coursecompletion/predict-coursecompletion.component.css": function srcAppChartsPredictCoursecompletionPredictCoursecompletionComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0cy9wcmVkaWN0LWNvdXJzZWNvbXBsZXRpb24vcHJlZGljdC1jb3Vyc2Vjb21wbGV0aW9uLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/charts/predict-coursecompletion/predict-coursecompletion.component.ts": function srcAppChartsPredictCoursecompletionPredictCoursecompletionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PredictCoursecompletionComponent", function () {
      return PredictCoursecompletionComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! highcharts */
    "./node_modules/highcharts/highcharts.js");
    /* harmony import */


    var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! highcharts/modules/exporting */
    "./node_modules/highcharts/modules/exporting.js");
    /* harmony import */


    var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__);

    var PredictCoursecompletionComponent = /*#__PURE__*/function () {
      function PredictCoursecompletionComponent() {
        _classCallCheck(this, PredictCoursecompletionComponent);

        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_2__;
      }

      _createClass(PredictCoursecompletionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.setData();
        }
      }, {
        key: "setData",
        value: function setData() {
          this.chartOptions = {
            chart: {
              type: "area"
            },
            title: {
              text: "Predict course succesful completion"
            },
            subtitle: {
              text: "Predict course successful completion [70]"
            },
            xAxis: {
              allowDecimals: false,
              title: {
                text: "Activities and Units"
              },
              labels: {
                formatter: function formatter() {
                  return this.value; // clean, unformatted number for year
                }
              },
              accessibility: {
                rangeDescription: "Range: 0 to 43."
              }
            },
            yAxis: {
              title: {
                text: "Passing Rate"
              }
            },
            tooltip: {
              enabled: false
            },
            plotOptions: {
              area: {
                pointStart: 0,
                marker: {
                  enabled: false,
                  symbol: "circle",
                  radius: 2,
                  states: {
                    hover: {
                      enabled: true
                    }
                  }
                }
              }
            },
            series: [{
              name: "Forum activities",
              data: [null, 1, 2, 7, 13, 18, 45, 48, 34, 43]
            }, {
              name: "Passing Rate",
              data: [3, 4, 10, 19, 22, 33, 65, 63, 50, 50]
            }]
          }, highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default()(highcharts__WEBPACK_IMPORTED_MODULE_2__);
        }
      }]);

      return PredictCoursecompletionComponent;
    }();

    PredictCoursecompletionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-predict-coursecompletion",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./predict-coursecompletion.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/predict-coursecompletion/predict-coursecompletion.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./predict-coursecompletion.component.css */
      "./src/app/charts/predict-coursecompletion/predict-coursecompletion.component.css"))["default"]]
    })], PredictCoursecompletionComponent);
    /***/
  },

  /***/
  "./src/app/charts/predict-exam-success/predict-exam-success.component.css": function srcAppChartsPredictExamSuccessPredictExamSuccessComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0cy9wcmVkaWN0LWV4YW0tc3VjY2Vzcy9wcmVkaWN0LWV4YW0tc3VjY2Vzcy5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/charts/predict-exam-success/predict-exam-success.component.ts": function srcAppChartsPredictExamSuccessPredictExamSuccessComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PredictExamSuccessComponent", function () {
      return PredictExamSuccessComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! highcharts */
    "./node_modules/highcharts/highcharts.js");
    /* harmony import */


    var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);

    var PredictExamSuccessComponent = /*#__PURE__*/function () {
      function PredictExamSuccessComponent() {
        _classCallCheck(this, PredictExamSuccessComponent);

        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_2__;
      }

      _createClass(PredictExamSuccessComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.setData();
        }
      }, {
        key: "setData",
        value: function setData() {
          this.chartOptions = {
            chart: {
              type: "column"
            },
            title: {
              text: "Predict exam success"
            },
            xAxis: {
              categories: ["# days of access", "# of logins", "# hours", "# posts viewed", "# posts created"],
              crosshair: true
            },
            yAxis: {
              min: 0,
              title: {
                text: "Frequency"
              },
              plotLines: [{
                value: 3,
                width: 1,
                color: "red",
                zIndex: 10
              }, {
                value: 6,
                width: 1,
                color: "green",
                zIndex: 10
              }]
            },
            tooltip: {
              headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
              pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' + '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
              footerFormat: "</table>",
              shared: true,
              useHTML: true
            },
            plotOptions: {
              column: {
                pointPadding: 0.2,
                borderWidth: 0
              }
            },
            series: [{
              name: "Student 1",
              data: [4, 9, 7, 18, 4]
            }, {
              name: "Student 2",
              data: [3, 6, 3, 8, 1]
            }, {
              name: "Student 3",
              data: [3, 2, 1, 2, 1]
            }]
          };
        }
      }]);

      return PredictExamSuccessComponent;
    }();

    PredictExamSuccessComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-predict-exam-success",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./predict-exam-success.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/predict-exam-success/predict-exam-success.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./predict-exam-success.component.css */
      "./src/app/charts/predict-exam-success/predict-exam-success.component.css"))["default"]]
    })], PredictExamSuccessComponent);
    /***/
  },

  /***/
  "./src/app/charts/presentation-skills/presentation-skills.component.css": function srcAppChartsPresentationSkillsPresentationSkillsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0cy9wcmVzZW50YXRpb24tc2tpbGxzL3ByZXNlbnRhdGlvbi1za2lsbHMuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/charts/presentation-skills/presentation-skills.component.ts": function srcAppChartsPresentationSkillsPresentationSkillsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PresentationSkillsComponent", function () {
      return PresentationSkillsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! highcharts */
    "./node_modules/highcharts/highcharts.js");
    /* harmony import */


    var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);

    var More = __webpack_require__(
    /*! highcharts/highcharts-more */
    "./node_modules/highcharts/highcharts-more.js");

    More(highcharts__WEBPACK_IMPORTED_MODULE_2__);

    var Exporting = __webpack_require__(
    /*! highcharts/modules/exporting */
    "./node_modules/highcharts/modules/exporting.js");

    Exporting(highcharts__WEBPACK_IMPORTED_MODULE_2__);

    var ExportData = __webpack_require__(
    /*! highcharts/modules/export-data */
    "./node_modules/highcharts/modules/export-data.js");

    ExportData(highcharts__WEBPACK_IMPORTED_MODULE_2__);

    var Accessibility = __webpack_require__(
    /*! highcharts/modules/accessibility */
    "./node_modules/highcharts/modules/accessibility.js");

    Accessibility(highcharts__WEBPACK_IMPORTED_MODULE_2__);

    var PresentationSkillsComponent = /*#__PURE__*/function () {
      function PresentationSkillsComponent() {
        _classCallCheck(this, PresentationSkillsComponent);

        this.TimeChartData = {
          xData: [0.001567, 0.011765, 0.022194, 0.032316, 0.04266, 0.063668, 0.074477, 0.085323, 0.09576, 0.106078, 0.116096, 0.137524, 0.148342, 0.159059, 0.170005, 0.180716, 0.191407, 0.212538, 0.222819, 0.233929, 0.244239, 0.255301, 0.266081, 0.287527, 0.298115, 0.309392, 0.320217, 0.330928, 0.341401, 0.361717, 0.372173, 0.382337, 0.39294, 0.403072, 0.413454, 0.434618, 0.444845, 0.455745, 0.465785, 0.475987, 0.486064, 0.507086, 0.517517, 0.527961, 0.538242, 0.548414, 0.558444, 0.578941, 0.589212, 0.599472, 0.60977, 0.620178, 0.630189, 0.650782, 0.661001, 0.671137, 0.681175, 0.691235, 0.702012, 0.722644, 0.733166, 0.743824, 0.754059, 0.764109, 0.774519, 0.795597, 0.805721, 0.81592, 0.826139, 0.836369, 0.846826, 0.86771, 0.87803, 0.888342, 0.898695, 0.908723, 0.91922, 0.939802, 0.950378, 0.960776, 0.971377, 0.981843, 0.992312, 1.013125, 1.023302, 1.033488, 1.043822, 1.054203, 1.065019, 1.086078, 1.09635, 1.106421, 1.117028, 1.127541, 1.138599, 1.159588, 1.170167, 1.180741, 1.190794, 1.201112, 1.211355, 1.233278, 1.243477, 1.254957, 1.265227, 1.276378, 1.285656, 1.297311, 1.308367, 1.318715, 1.329589, 1.340834, 1.352388, 1.375063, 1.385369, 1.396291, 1.408156, 1.418989, 1.429535, 1.451141, 1.462205, 1.473011, 1.483844, 1.494311, 1.514761, 1.525336, 1.535858, 1.546476, 1.557325, 1.567512, 1.590091, 1.600925, 1.612303, 1.622558, 1.633071, 1.643555, 1.66484, 1.675722, 1.685986, 1.696733, 1.706895, 1.719102, 1.741295, 1.752144, 1.762688, 1.773713, 1.784052, 1.795705, 1.817305, 1.827465, 1.838408, 1.849369, 1.860023, 1.871438, 1.89257, 1.90323, 1.914398, 1.924634, 1.934642, 1.945212, 1.966275, 1.976294, 1.986422, 1.996652, 2.008005, 2.018309, 2.041139, 2.051221, 2.0613, 2.072507, 2.08342, 2.094075, 2.114574, 2.125286, 2.135765, 2.146845, 2.157966, 2.169391, 2.190921, 2.200899, 2.212709, 2.222671, 2.232908, 2.244001, 2.264898, 2.275703, 2.286885, 2.298115, 2.310186, 2.32059, 2.344695, 2.354843, 2.366387, 2.379001, 2.390328, 2.402215, 2.423134, 2.433156, 2.444912, 2.457061, 2.468253, 2.478978, 2.499832, 2.513223, 2.52561, 2.538429, 2.548659, 2.560809, 2.581308, 2.592816, 2.603963, 2.615992, 2.626242, 2.638223, 2.660346, 2.671583, 2.681938, 2.69265, 2.70588, 2.716296, 2.740081, 2.75085, 2.761319, 2.772027, 2.782659, 2.793531, 2.816194, 2.828031, 2.839243, 2.851443, 2.863884, 2.874359, 2.895246, 2.906506, 2.91761, 2.92786, 2.938937, 2.950218, 2.973357, 2.98366, 2.994639, 3.005213, 3.01666, 3.02761, 3.050025, 3.061713, 3.071828, 3.082787, 3.093422, 3.105289, 3.127231, 3.138982, 3.149755, 3.160217, 3.171299, 3.191571, 3.202226, 3.213225, 3.223987, 3.234092, 3.244644, 3.265939, 3.276411, 3.286489, 3.297156, 3.307909, 3.319018, 3.34064, 3.351107, 3.361683, 3.373136, 3.384768, 3.395457, 3.417722, 3.429096, 3.439122, 3.449679, 3.459868, 3.469997, 3.492679, 3.503647, 3.514941, 3.525858, 3.538746, 3.550422, 3.572255, 3.58452, 3.595367, 3.605736, 3.617401, 3.628324, 3.652523, 3.663679, 3.67378, 3.684605, 3.695595, 3.705843, 3.728706, 3.739169, 3.750205, 3.761258, 3.771771, 3.781911, 3.804724, 3.81631, 3.826313, 3.837847, 3.85049, 3.860999, 3.88262, 3.892937, 3.903053, 3.913656, 3.924698, 3.935126, 3.956362, 3.966543, 3.976899, 3.98752, 3.997644, 4.008721, 4.029852, 4.040633, 4.051006, 4.06126, 4.071761, 4.083526, 4.10749, 4.117855, 4.128661, 4.13934, 4.151117, 4.1624, 4.184736, 4.194826, 4.205098, 4.215261, 4.225325, 4.236367, 4.262012, 4.273794, 4.285743, 4.297226, 4.308086, 4.318245, 4.340246, 4.351486, 4.363196, 4.374465, 4.387109, 4.398635, 4.421101, 4.432135, 4.444666, 4.456226, 4.467413, 4.477804, 4.498505, 4.510413, 4.522595, 4.534044, 4.545944, 4.558048, 4.580379, 4.59312, 4.605616, 4.618065, 4.631266, 4.644086, 4.667943, 4.67948, 4.691266, 4.703019, 4.715923, 4.725932, 4.752312, 4.765224, 4.777128, 4.787361, 4.800435, 4.823353, 4.836044, 4.848602, 4.860302, 4.871112, 4.882779, 4.904695, 4.914823, 4.927074, 4.938111, 4.949586, 4.960761, 4.982911, 4.9942, 5.004246, 5.016296, 5.027215, 5.038043, 5.058885, 5.070303, 5.080649, 5.093865, 5.104424, 5.114903, 5.134965, 5.146346, 5.15634, 5.168547, 5.179066, 5.191167, 5.214242, 5.224914, 5.237573, 5.249537, 5.261586, 5.272517, 5.296154, 5.306348, 5.316773, 5.327153, 5.339961, 5.350638, 5.376502, 5.389277, 5.402142, 5.412197, 5.42399, 5.434873, 5.458466, 5.470907, 5.482679, 5.493339, 5.50574, 5.516349, 5.538897, 5.549552, 5.56083, 5.571879, 5.583764, 5.59509, 5.619028, 5.629925, 5.640716, 5.650957, 5.661787, 5.671957, 5.693974, 5.704919, 5.717491, 5.731152, 5.744728, 5.755687, 5.778668, 5.791951, 5.80409, 5.815697, 5.828482, 5.840501, 5.864145, 5.875704, 5.887893, 5.900147, 5.912517, 5.924894, 5.948897, 5.959155, 5.970262, 5.981632, 5.992996, 6.00356, 6.027256, 6.038776, 6.050959, 6.061351, 6.071864, 6.082436, 6.104054, 6.115602, 6.127623, 6.139058, 6.150639, 6.161323, 6.183013, 6.194359, 6.206269, 6.218033, 6.2281, 6.240494, 6.262584, 6.275326, 6.287166, 6.298953, 6.310644, 6.321583, 6.345676, 6.356738, 6.366782, 6.377931, 6.388519, 6.397159],
          datasets: [{
            name: "Voice level",
            data: [13.833, 12.524, 11.441, 10.651, 9.961, 4.566, 4.617, 4.728, 4.823, 4.844, 4.856, 4.87, 4.702, 4.679, 4.674, 4.641, 4.47, 4.688, 4.798, 4.756, 4.903, 4.919, 5.017, 4.938, 4.879, 4.831, 4.623, 3.887, 3.502, 3.083, 3.123, 3.073, 2.922, 2.827, 2.805, 2.605, 2.743, 2.698, 2.513, 2.41, 2.17, 2.288, 2.308, 2.222, 2.183, 2.224, 2.163, 2.223, 2.142, 2.257, 2.015, 1.971, 1.894, 1.848, 1.835, 1.85, 2.036, 1.827, 1.904, 1.803, 1.852, 1.866, 1.906, 1.956, 1.954, 1.734, 1.904, 1.899, 2.001, 1.966, 1.844, 1.879, 1.856, 1.837, 1.827, 1.907, 1.729, 1.74, 1.68, 1.797, 1.811, 1.941, 2.026, 2.217, 2.281, 2.517, 2.673, 2.702, 2.893, 3.016, 3.073, 3.126, 3.283, 3.361, 3.33, 3.465, 3.916, 4.49, 5.074, 5.717, 6.523, 7.012, 6.726, 7.095, 7.471, 7.824, 7.802, 4.441, 4.625, 4.696, 4.861, 4.768, 4.889, 5.281, 5.36, 5.419, 5.137, 5.278, 5.151, 4.934, 4.952, 4.742, 4.666, 4.525, 4.126, 4.228, 4.334, 4.383, 5.287, 5.088, 5.28, 5.274, 5.251, 5.413, 5.365, 5.372, 5.512, 4.839, 5.099, 5.196, 5.219, 5.094, 5.582, 5.91, 5.952, 6.012, 5.854, 5.789, 5.465, 5.525, 5.659, 5.67, 5.173, 5.033, 5.318, 5.289, 5.226, 5.15, 5.106, 4.989, 5.103, 5.288, 5.428, 5.363, 5.026, 5, 4.941, 4.872, 4.751, 4.408, 4.425, 4.301, 4.134, 4.171, 4.272, 4.34, 4.543, 4.826, 5.381, 5.374, 5.433, 5.483, 5.539, 5.869, 6.956, 7.443, 7.654, 8.005, 8.181, 8.386, 9.202, 9.51, 9.66, 9.141, 8.79, 8.747, 8.949, 9.188, 9.625, 10.154, 10.173, 10.361, 11.186, 11.226, 11.091, 10.899, 10.945, 10.892, 9.618, 9.092, 8.465, 7.864, 7.396, 7.076, 7.053, 6.772, 6.958, 7.202, 6.93, 6.857, 7.007, 7.059, 7.099, 7.025, 6.95, 7.116, 6.331, 6.39, 6.571, 6.571, 6.604, 6.407, 6.371, 6.348, 6.348, 5.995, 6.162, 6.287, 6.241, 6.033, 6.083, 6.313, 6.118, 5.78, 5.698, 5.804, 5.743, 5.655, 5.976, 6.005, 6.06, 5.988, 6.021, 6.049, 5.882, 5.296, 5.142, 4.701, 4.701, 4.647, 4.491, 4.48, 4.384, 4.263, 4.515, 4.721, 5.084, 6.225, 6.302, 6.409, 6.52, 6.462, 6.525, 6.816, 6.656, 6.566, 6.34, 6.177, 6.143, 7.462, 7.783, 7.885, 7.998, 8.182, 8.352, 8.32, 8.5, 8.967, 8.474, 8.178, 7.89, 7.436, 7.634, 7.777, 7.628, 7.189, 6.787, 6.048, 6.003, 6.189, 6.216, 6.389, 6.353, 7.341, 7.899, 7.849, 7.757, 7.314, 7.134, 6.858, 6.689, 6.526, 5.909, 5.138, 4.617, 4.339, 4.558, 4.493, 4.545, 4.419, 4.245, 4.468, 5.093, 5.737, 6.215, 6.613, 6.876, 7.566, 7.586, 7.901, 7.736, 7.23, 6.703, 5.896, 5.73, 6.032, 6.263, 6.458, 7.107, 7.766, 7.911, 7.794, 7.776, 7.876, 7.866, 7.462, 7.298, 6.898, 6.62, 6.747, 7.285, 8.139, 8.411, 8.776, 8.946, 9.155, 9.296, 10.15, 9.96, 9.885, 9.99, 10.203, 10.401, 10.935, 11.071, 11.274, 11.566, 11.851, 12.187, 12.363, 12.426, 12.478, 12.486, 12.117, 12.132, 11.791, 11.332, 11.441, 11.38, 11.309, 10.985, 10.627, 10.355, 9.899, 9.833, 9.747, 9.693, 9.514, 9.502, 9.888, 9.98, 10.255, 10.667, 10.531, 10.452, 10.267, 10.2, 10.437, 10.553, 10.577, 10.661, 11.022, 11.213, 11.311, 11.572, 11.708, 11.176, 10.857, 10.754, 10.629, 10.185, 10.052, 10.083, 10.31, 10.478, 10.626, 11.121, 11.141, 11.221, 11.299, 11.435, 11.599, 11.353, 11.299, 11.288, 11.279, 11.208, 11.307, 11.685, 11.58, 11.379, 11.096, 11.144, 10.947, 10.699, 10.881, 10.746, 10.276, 9.994, 9.629, 9.76, 9.749, 10.012, 10.184, 10.336, 10.473, 10.848, 11.349, 11.978, 12.167, 12.327, 12.339, 12.064, 12.09, 12.12, 11.94, 11.562, 11.208, 10.974, 10.948, 10.983, 10.76, 10.694, 10.534, 10.273, 10.364, 10.421, 10.357, 10.316, 10.472, 10.94, 11.314, 11.485, 11.488, 11.606, 11.479, 11.091, 11.288, 11.354, 11.501, 11.302, 10.968, 11.026, 10.944, 11.08, 11.388, 11.504, 11.279, 10.683, 10.533, 10.505, 10.305, 10.146, 10.148, 9.501, 9.366, 9.23, 9.067, 8.956, 8.935],
            unit: "db",
            type: "line",
            valueDecimals: 1
          }, {
            name: "Number of gestures",
            data: [26.857, 27, 27.111, 27.2, 27.272, 30.545, 32.181, 33.818, 35.272, 36.545, 37.818, 41.818, 44.545, 47.272, 48.545, 49.818, 53.545, 61, 64.909, 68.818, 72.727, 75.09, 77.454, 82.181, 84.545, 84.454, 86.181, 87.909, 89.636, 93.09, 96.727, 100.363, 104, 107.636, 111.272, 116.727, 121.09, 125.454, 129.818, 134.181, 136.727, 151.636, 159.09, 166.545, 174, 181.454, 186.363, 201.636, 209.272, 216.909, 222.818, 228.727, 234.636, 249.363, 258.181, 267, 273.09, 279.181, 288.181, 303, 308.818, 314.636, 326.909, 336.272, 345.636, 364.363, 373.727, 380.181, 389.818, 399.454, 409.09, 425.727, 432.727, 439.727, 446.727, 453.727, 460.727, 473.272, 478.818, 484.363, 489.909, 491.636, 493.363, 498.272, 500.727, 503.181, 506.454, 508, 509.545, 512.636, 514.363, 516.09, 517.909, 519.727, 521.545, 525.636, 527.272, 528.909, 529.636, 530.363, 530.909, 531.181, 531.3, 531.444, 530.75, 529.857, 528.666, 521, 521, 521.777, 522.4, 522.909, 522.818, 522.636, 522.545, 522.454, 522.363, 522.272, 522.181, 520.727, 520.545, 521.09, 521.636, 522.181, 523.272, 523.818, 524.363, 524.909, 525.454, 528.09, 532.272, 534.363, 536.454, 537.909, 539.363, 540.818, 543.727, 545.909, 544.818, 543.727, 542.636, 541.545, 540, 539.545, 539.09, 538.636, 537.272, 535.181, 533.363, 532.454, 531.545, 530.636, 529.727, 528.818, 526.272, 525.909, 525.545, 525.181, 524.818, 524.454, 523.727, 522.363, 521, 520, 519, 516.545, 511.636, 510.636, 509.636, 506.909, 504.181, 502.454, 499, 497.272, 497, 496.727, 497.454, 496.727, 493.818, 491.636, 489.454, 487.272, 487.09, 486.909, 486.545, 485.363, 484.181, 484.09, 481.545, 479, 478.181, 477.909, 477.636, 477.363, 477.09, 476.818, 476.363, 481.818, 487.272, 492.727, 493.909, 493.181, 491.727, 491, 490.272, 489.545, 487.636, 485.727, 482.363, 474.454, 468.454, 462.454, 456.454, 450.454, 439.727, 435, 430.272, 425.545, 418.727, 418.363, 418.545, 419.09, 419.636, 420.181, 419.454, 418.727, 413.818, 413, 412.181, 411.363, 409.636, 407.909, 405, 403.818, 397.454, 392.818, 388.181, 383.545, 374.272, 369.636, 365, 358.363, 351.181, 344, 340, 338, 336, 334, 332, 328.636, 323.909, 322.545, 321.181, 319.818, 318.272, 315.181, 313.636, 312.09, 311.909, 311.727, 310.545, 308.181, 307, 306, 305, 302.818, 300.636, 297.545, 296.636, 296.727, 296.181, 295.636, 295.09, 294, 294.636, 293.09, 291.545, 291.545, 291.545, 292.181, 292.818, 293.454, 294.09, 292.545, 291, 292.272, 292.363, 292.454, 292.545, 289.818, 287.09, 281.636, 281.09, 280.545, 277, 273.454, 271.454, 267.454, 265.181, 262.909, 260.636, 258.363, 256.09, 248.909, 246.818, 240.909, 235, 229.09, 226.272, 220.636, 217.818, 215, 215, 211.545, 208.09, 201.181, 197.727, 194.272, 190.818, 187.363, 183.909, 170.818, 173, 175.181, 177.363, 179.545, 181.727, 186.09, 182.727, 179.363, 179.09, 178.818, 173.272, 160.272, 152.818, 145.363, 137.909, 130.454, 126.818, 116.272, 111, 107.363, 101.909, 98.363, 94.818, 87, 82.818, 80.363, 79.545, 78.272, 77, 73, 71.454, 69.636, 67.909, 66.727, 65.454, 62.909, 62.09, 61.272, 60.363, 59.454, 59, 58.545, 58.272, 58.09, 57.909, 57.727, 57.545, 57.272, 57.181, 56.909, 56.636, 56.454, 56.272, 55.909, 55.727, 55.818, 55.545, 55.272, 54.909, 54.818, 54.727, 54.636, 54.545, 54.454, 54, 54, 54, 54, 54, 53.636, 52.909, 52.545, 52.636, 52.727, 52.818, 52.909, 52.636, 52.272, 52.272, 52.272, 52.272, 52.818, 53, 53.09, 53.181, 53.272, 53.818, 54.363, 55.09, 55.454, 55.272, 55.09, 54.909, 54.727, 54.363, 53.727, 53.09, 52.636, 52.181, 51.727, 50.818, 50.363, 50.363, 50.363, 50.363, 50.818, 51.727, 51.272, 50.818, 50.363, 50.636, 50.909, 50.545, 50.363, 50.181, 50, 49.818, 50.818, 52.818, 53.09, 53.363, 53.636, 53.909, 54.181, 53.272, 52.818, 52.09, 51.363, 50.636, 49.909, 47.818, 46.09, 44.363, 43.363, 42.363, 41.363, 39.363, 37.636, 35.909, 35.181, 35.09, 35.363, 35.909, 36.181, 36.545, 36.909, 37.272, 38.363, 39.545, 39.636, 39.727, 39.818, 38.636, 37.454, 34.909, 33.636, 32.363, 31.09, 29.818, 27.181, 21.909, 20.545, 19.181, 17.818, 16.454, 15.09, 10.727, 8.545, 8.636, 8.727, 8.818, 8.909, 9.09, 8.9, 8.666, 9.5, 10.571, 12],
            unit: "",
            type: "area",
            valueDecimals: 0
          }, {
            name: "Heart rate",
            data: [101, 98, 103, 115, 124, 128, 133, 138, 138, 141, 143, 149, 149, 148, 146, 147, 152, 149, 155, 152, 153, 153, 156, 152, 151, 151, 149, 148, 150, 157, 161, 156, 160, 158, 156, 159, 164, 162, 160, 165, 165, 167, 167, 163, 166, 165, 161, 164, 163, 164, 162, 163, 164, 166, 166, 166, 166, 166, 164, 167, 166, 162, 164, 163, 161, 166, 168, 168, 169, 169, 165, 166, 167, 163, 167, 167, 169, 171, 167, 169, 171, 175, 174, 167, 168, 171, 167, 169, 169, 167, 166, 165, 163, 161, 163, 166, 162, 164, 166, 162, 162, 164, 163, 162, 162, 163, 161, 121, 121, 121, 121, 121, 121, 121, 121, 121, 121, 121, 121, 121, 121, 121, 121, 121, 121, 121, 121, 121, 121, 121, 121, 121, 121, 121, 121, 121, 121, 113, 117, 121, 119, 117, 120, 121, 124, 125, 127, 125, 129, 130, 131, 135, 135, 135, 135, 134, 136, 139, 142, 142, 145, 145, 150, 153, 155, 156, 157, 157, 154, 153, 152, 148, 130, 123, 123, 120, 123, 119, 115, 114, 114, 115, 115, 113, 112, 111, 113, 113, 113, 113, 110, 110, 109, 110, 110, 109, 108, 108, 109, 107, 107, 107, 109, 109, 111, 111, 111, 111, 111, 112, 112, 112, 112, 112, 114, 113, 113, 113, 113, 113, 113, 112, 111, 114, 118, 124, 127, 128, 128, 129, 131, 133, 131, 130, 133, 130, 136, 135, 135, 136, 136, 135, 136, 135, 134, 135, 137, 138, 139, 138, 134, 130, 130, 129, 129, 132, 132, 131, 130, 133, 132, 132, 128, 128, 132, 132, 128, 128, 129, 130, 130, 130, 130, 131, 133, 134, 132, 132, 130, 131, 129, 133, 133, 130, 130, 133, 133, 131, 130, 130, 130, 129, 129, 129, 126, 128, 126, 129, 129, 124, 125, 120, 120, 123, 125, 125, 124, 124, 125, 125, 126, 126, 126, 127, 126, 130, 134, 135, 126, 123, 124, 123, 127, 130, 130, 132, 133, 133, 133, 133, 130, 130, 129, 128, 124, 123, 124, 124, 127, 135, 139, 139, 134, 134, 133, 130, 130, 127, 129, 126, 126, 126, 129, 129, 123, 123, 128, 128, 125, 125, 125, 123, 123, 122, 122, 122, 125, 125, 125, 126, 126, 128, 128, 129, 129, 124, 125, 125, 125, 129, 131, 131, 131, 131, 131, 131, 131, 129, 129, 126, 126, 126, 126, 126, 125, 125, 126, 126, 126, 125, 126, 127, 130, 130, 130, 130, 132, 132, 132, 132, 132, 132, 129, 130, 132, 133, 132, 132, 129, 128, 128, 132, 133, 135, 137, 138, 139, 139, 142, 142, 141, 143, 144, 144, 143, 145, 145, 147, 150, 153, 158, 159, 160, 159, 160, 160, 160, 162, 162, 163, 162, 161, 161, 162, 161, 164, 166, 166, 165, 162, 162, 159, 157, 160, 159, 160, 160, 161, 161, 162, 162, 163, 163, 165, 166, 166, 164, 164, 166, 165, 166, 163, 162, 162, 161, 159, 159, 159, 159, 159, 156, 154, 153, 152, 152, 151, 154, 153, 151, 151],
            unit: "bpm",
            type: "area",
            valueDecimals: 0
          }]
        };
        this.activity = this.TimeChartData;
      }

      _createClass(PresentationSkillsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          ["mousemove", "touchmove", "touchstart"].forEach(function (eventType) {
            document.getElementById("container").addEventListener(eventType, function (e) {
              var chart, point, i, event;

              for (i = 0; i < highcharts__WEBPACK_IMPORTED_MODULE_2__["charts"].length; i = i + 1) {
                chart = highcharts__WEBPACK_IMPORTED_MODULE_2__["charts"][i]; // Find coordinates within the chart

                event = chart.pointer.normalize(e); // Get the hovered point

                point = chart.series[0].searchPoint(event, true);

                if (point) {
                  point.highlight(e);
                }
              }
            });
          });

          function syncExtremes(e) {
            var thisChart = this.chart;

            if (e.trigger !== "syncExtremes") {
              // Prevent feedback loop
              highcharts__WEBPACK_IMPORTED_MODULE_2__["each"](highcharts__WEBPACK_IMPORTED_MODULE_2__["charts"], function (chart) {
                if (chart !== thisChart) {
                  if (chart.xAxis[0].setExtremes) {
                    // It is null while updating
                    chart.xAxis[0].setExtremes(e.min, e.max, undefined, false, {
                      trigger: "syncExtremes"
                    });
                  }
                }
              });
            }
          }

          highcharts__WEBPACK_IMPORTED_MODULE_2__["Pointer"].prototype.reset = function () {
            return undefined;
          };

          highcharts__WEBPACK_IMPORTED_MODULE_2__["Point"].prototype.select = function (event) {
            event = this.series.chart.pointer.normalize(event);
            this.onMouseOver(); // Show the hover marker

            this.series.chart.tooltip.refresh(this); // Show the tooltip

            this.series.chart.xAxis[0].drawCrosshair(event, this); // Show the crosshair
          };

          this.xData = this.activity.xData;
          var that = this;

          if (this.activity) {
            this.activity.datasets.forEach(function (dataset, i) {
              dataset.data = highcharts__WEBPACK_IMPORTED_MODULE_2__["map"](dataset.data, function (val, j) {
                return [that.xData[j], val];
              });
              var chartDiv = document.createElement("div");
              chartDiv.className = "chart";
              document.getElementById("container").appendChild(chartDiv);
              highcharts__WEBPACK_IMPORTED_MODULE_2__["chart"](chartDiv, {
                chart: {
                  marginLeft: 40,
                  spacingTop: 20,
                  spacingBottom: 20,
                  height: 230
                },
                title: {
                  text: dataset.name,
                  align: "left",
                  margin: 0,
                  x: 30
                },
                subtitle: {
                  text: "Presentation skills [35], Presentation skills [40]"
                },
                credits: {
                  enabled: false
                },
                legend: {
                  enabled: false
                },
                xAxis: {
                  crosshair: true,
                  events: {
                    setExtremes: syncExtremes
                  },
                  labels: {
                    format: "{value} min"
                  }
                },
                yAxis: {
                  title: {
                    text: null
                  }
                },
                tooltip: {
                  positioner: function positioner() {
                    return {
                      // right aligned
                      x: this.chart.chartWidth - 200,
                      y: 10
                    };
                  },
                  borderWidth: 0,
                  backgroundColor: "none",
                  pointFormat: "{point.y}",
                  headerFormat: "",
                  shadow: false,
                  style: {
                    fontSize: "18px"
                  },
                  valueDecimals: dataset.valueDecimals
                },
                series: [{
                  data: dataset.data,
                  name: dataset.name,
                  type: dataset.type,
                  color: highcharts__WEBPACK_IMPORTED_MODULE_2__["getOptions"]().colors[i],
                  fillOpacity: 0.3,
                  tooltip: {
                    valueSuffix: " " + dataset.unit
                  }
                }]
              });
            });
          }
        }
      }]);

      return PresentationSkillsComponent;
    }();

    PresentationSkillsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-presentation-skills",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./presentation-skills.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/presentation-skills/presentation-skills.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./presentation-skills.component.css */
      "./src/app/charts/presentation-skills/presentation-skills.component.css"))["default"]]
    })], PresentationSkillsComponent);
    /***/
  },

  /***/
  "./src/app/charts/procrastination/procrastination.component.css": function srcAppChartsProcrastinationProcrastinationComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0cy9wcm9jcmFzdGluYXRpb24vcHJvY3Jhc3RpbmF0aW9uLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/charts/procrastination/procrastination.component.ts": function srcAppChartsProcrastinationProcrastinationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProcrastinationComponent", function () {
      return ProcrastinationComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! highcharts */
    "./node_modules/highcharts/highcharts.js");
    /* harmony import */


    var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! highcharts/modules/exporting */
    "./node_modules/highcharts/modules/exporting.js");
    /* harmony import */


    var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__);

    var ProcrastinationComponent = /*#__PURE__*/function () {
      function ProcrastinationComponent() {
        _classCallCheck(this, ProcrastinationComponent);

        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_2__;
      }

      _createClass(ProcrastinationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.setData();
        }
      }, {
        key: "setData",
        value: function setData() {
          this.chartOptions = {
            chart: {
              type: "scatter",
              zoomType: "xy"
            },
            title: {
              text: "Procrastination"
            },
            subtitle: {
              text: "Procrastination [102] Performance [102], Procrastination [107]"
            },
            xAxis: {
              title: {
                enabled: true,
                text: "Days until course material access after semester start"
              },
              startOnTick: true,
              endOnTick: true,
              showLastLabel: true
            },
            yAxis: {
              title: {
                text: "Score"
              },
              max: 100
            },
            legend: {
              layout: "vertical",
              align: "right",
              verticalAlign: "top",
              x: 10,
              y: 90,
              floating: true,
              backgroundColor: highcharts__WEBPACK_IMPORTED_MODULE_2__["defaultOptions"].chart.backgroundColor,
              borderWidth: 1
            },
            plotOptions: {
              scatter: {
                marker: {
                  radius: 5,
                  states: {
                    hover: {
                      enabled: true,
                      lineColor: "rgb(100,100,100)"
                    }
                  }
                },
                states: {
                  hover: {
                    marker: {
                      enabled: false
                    }
                  }
                },
                tooltip: {
                  headerFormat: "<b>{series.name}</b><br>",
                  pointFormat: "{point.x} days: {point.y} points"
                }
              }
            },
            series: [{
              name: "Student",
              color: "rgba(223, 83, 83, .5)",
              data: [[1, 100], [1, 89], [1, 93], [1, 87], [1, 70], [2, 84], [2, 72], [2, 55], [3, 31], [3, 45], [3, 72], [3, 88], [4, 55], [4, 11], [4, 85], [4, 52], [5, 50], [5, 42], [5, 33], [6, 33], [6, 52], [7, 33], [8, 20], [9, 15], [9, 23], [10, 14], [11, 3], [12, 0]]
            }]
          }, highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default()(highcharts__WEBPACK_IMPORTED_MODULE_2__);
        }
      }]);

      return ProcrastinationComponent;
    }();

    ProcrastinationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-procrastination",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./procrastination.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/procrastination/procrastination.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./procrastination.component.css */
      "./src/app/charts/procrastination/procrastination.component.css"))["default"]]
    })], ProcrastinationComponent);
    /***/
  },

  /***/
  "./src/app/charts/reading-analytics/reading-analytics.component.css": function srcAppChartsReadingAnalyticsReadingAnalyticsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0cy9yZWFkaW5nLWFuYWx5dGljcy9yZWFkaW5nLWFuYWx5dGljcy5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/charts/reading-analytics/reading-analytics.component.ts": function srcAppChartsReadingAnalyticsReadingAnalyticsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReadingAnalyticsComponent", function () {
      return ReadingAnalyticsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! highcharts */
    "./node_modules/highcharts/highcharts.js");
    /* harmony import */


    var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! highcharts/modules/exporting */
    "./node_modules/highcharts/modules/exporting.js");
    /* harmony import */


    var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__);

    var Draggable = __webpack_require__(
    /*! highcharts/modules/draggable-points.js */
    "./node_modules/highcharts/modules/draggable-points.js");

    Draggable(highcharts__WEBPACK_IMPORTED_MODULE_2__);

    var ReadingAnalyticsComponent = /*#__PURE__*/function () {
      function ReadingAnalyticsComponent() {
        _classCallCheck(this, ReadingAnalyticsComponent);

        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_2__;
      }

      _createClass(ReadingAnalyticsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.setData();
        }
      }, {
        key: "setData",
        value: function setData() {
          this.chartOptions = {
            title: {
              text: "Reading analytics"
            },
            subtitle: {
              text: "Reading analytics [134], Performance rating [128] Engagement rating [128] Active reading rating [128] Attendance rating [128], Reading Analytics [114] Ideal reading material [114]"
            },
            xAxis: {
              categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
            },
            plotOptions: {
              series: {
                stickyTracking: false,
                dragDrop: {
                  draggableY: true
                }
              },
              spline: {
                cursor: "ns-resize"
              }
            },
            series: [{
              name: "# reading sessions",
              data: [55, 21, 41, 68, 48, 87, 40, 52, 72, 60, 50, 15],
              type: "column"
            }, {
              name: "rereading the same material",
              data: [22, 15, 30, 50, 52, 65, 51, 40, 53, 48, 31, 9],
              type: "column"
            }, {
              name: "duration of reading sessions",
              data: [60, 19, 39, 72, 45, 90, 45, 44, 60, 52, 38, 14],
              type: "spline"
            }]
          };
          highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default()(highcharts__WEBPACK_IMPORTED_MODULE_2__);
        }
      }]);

      return ReadingAnalyticsComponent;
    }();

    ReadingAnalyticsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-reading-analytics",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./reading-analytics.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/reading-analytics/reading-analytics.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./reading-analytics.component.css */
      "./src/app/charts/reading-analytics/reading-analytics.component.css"))["default"]]
    })], ReadingAnalyticsComponent);
    /***/
  },

  /***/
  "./src/app/charts/self-motivation/self-motivation.component.css": function srcAppChartsSelfMotivationSelfMotivationComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0cy9zZWxmLW1vdGl2YXRpb24vc2VsZi1tb3RpdmF0aW9uLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/charts/self-motivation/self-motivation.component.ts": function srcAppChartsSelfMotivationSelfMotivationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SelfMotivationComponent", function () {
      return SelfMotivationComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! highcharts */
    "./node_modules/highcharts/highcharts.js");
    /* harmony import */


    var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! highcharts/modules/exporting */
    "./node_modules/highcharts/modules/exporting.js");
    /* harmony import */


    var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var highcharts_highcharts_more__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! highcharts/highcharts-more */
    "./node_modules/highcharts/highcharts-more.js");
    /* harmony import */


    var highcharts_highcharts_more__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(highcharts_highcharts_more__WEBPACK_IMPORTED_MODULE_4__);

    highcharts_highcharts_more__WEBPACK_IMPORTED_MODULE_4___default()(highcharts__WEBPACK_IMPORTED_MODULE_2__);

    var SelfMotivationComponent = /*#__PURE__*/function () {
      function SelfMotivationComponent() {
        _classCallCheck(this, SelfMotivationComponent);

        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_2__;
      }

      _createClass(SelfMotivationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.setData();
        }
      }, {
        key: "setData",
        value: function setData() {
          this.chartOptions = {
            chart: {
              type: "line",
              polar: true
            },
            title: {
              text: "Self-motivation, Self-regulated learning"
            },
            subtitle: {
              text: "Self-motivation [139] Self-regulated Learning [139]"
            },
            xAxis: {
              categories: ["#  videos watched", "# quizzes", "# assignments", "# forum activities"],
              tickmarkPlacement: "on",
              lineWidth: 0
            },
            yAxis: {
              gridLineInterpolation: "polygon",
              lineWidth: 0,
              min: 0
            },
            exporting: {
              enabled: true
            },
            credits: {
              enabled: false
            },
            tooltip: {
              shared: true,
              pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
            },
            legend: {
              align: "right",
              verticalAlign: "middle",
              layout: "vertical"
            },
            series: [{
              name: "This month",
              data: [30, 52, 44, 40],
              pointPlacement: "on"
            }, {
              name: "Last month",
              data: [20, 22, 34, 10],
              pointPlacement: "on"
            }]
          }, highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default()(highcharts__WEBPACK_IMPORTED_MODULE_2__);
        }
      }]);

      return SelfMotivationComponent;
    }();

    SelfMotivationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-self-motivation",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./self-motivation.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/self-motivation/self-motivation.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./self-motivation.component.css */
      "./src/app/charts/self-motivation/self-motivation.component.css"))["default"]]
    })], SelfMotivationComponent);
    /***/
  },

  /***/
  "./src/app/charts/social-analysis/social-analysis.component.css": function srcAppChartsSocialAnalysisSocialAnalysisComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0cy9zb2NpYWwtYW5hbHlzaXMvc29jaWFsLWFuYWx5c2lzLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/charts/social-analysis/social-analysis.component.ts": function srcAppChartsSocialAnalysisSocialAnalysisComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SocialAnalysisComponent", function () {
      return SocialAnalysisComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! highcharts */
    "./node_modules/highcharts/highcharts.js");
    /* harmony import */


    var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! highcharts/modules/exporting */
    "./node_modules/highcharts/modules/exporting.js");
    /* harmony import */


    var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__);

    var SocialAnalysisComponent = /*#__PURE__*/function () {
      function SocialAnalysisComponent() {
        _classCallCheck(this, SocialAnalysisComponent);

        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_2__;
      }

      _createClass(SocialAnalysisComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.setData();
        }
      }, {
        key: "setData",
        value: function setData() {
          this.chartOptions = {
            chart: {
              type: "bar"
            },
            title: {
              text: "Social network analysis"
            },
            subtitle: {
              text: "Social Network analysis [63]"
            },
            xAxis: {
              categories: ["Student 1", "Student 2", "Student 3", "Student 4", "Student 5"],
              title: {
                text: null
              }
            },
            yAxis: {
              min: 0,
              title: {
                text: "Number of interactions",
                align: "high"
              },
              labels: {
                overflow: "justify"
              }
            },
            plotOptions: {
              bar: {
                dataLabels: {
                  enabled: true
                }
              }
            },
            legend: {
              layout: "vertical",
              align: "right",
              verticalAlign: "top",
              x: -40,
              y: 80,
              floating: true,
              borderWidth: 1,
              backgroundColor: highcharts__WEBPACK_IMPORTED_MODULE_2__["defaultOptions"].legend.backgroundColor || "#FFFFFF",
              shadow: true
            },
            credits: {
              enabled: false
            },
            series: [{
              name: "# emails received on social media",
              data: [10, 12, 3, 20, 2]
            }, {
              name: "# emails sent on social media",
              data: [13, 15, 7, 4, 6]
            }, {
              name: "# wall posts received",
              data: [4, 8, 3, 7, 3]
            }, {
              name: "# status messages posted",
              data: [16, 11, 23, 7, 10]
            }, {
              name: "# posts written",
              data: [12, 11, 15, 8, 4]
            }]
          }, highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default()(highcharts__WEBPACK_IMPORTED_MODULE_2__);
        }
      }]);

      return SocialAnalysisComponent;
    }();

    SocialAnalysisComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-social-analysis",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./social-analysis.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/social-analysis/social-analysis.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./social-analysis.component.css */
      "./src/app/charts/social-analysis/social-analysis.component.css"))["default"]]
    })], SocialAnalysisComponent);
    /***/
  },

  /***/
  "./src/app/charts/social-network-analysis/social-network-analysis.component.css": function srcAppChartsSocialNetworkAnalysisSocialNetworkAnalysisComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0cy9zb2NpYWwtbmV0d29yay1hbmFseXNpcy9zb2NpYWwtbmV0d29yay1hbmFseXNpcy5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/charts/social-network-analysis/social-network-analysis.component.ts": function srcAppChartsSocialNetworkAnalysisSocialNetworkAnalysisComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SocialNetworkAnalysisComponent", function () {
      return SocialNetworkAnalysisComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! highcharts */
    "./node_modules/highcharts/highcharts.js");
    /* harmony import */


    var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! highcharts/modules/exporting */
    "./node_modules/highcharts/modules/exporting.js");
    /* harmony import */


    var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var highcharts_modules_networkgraph__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! highcharts/modules/networkgraph */
    "./node_modules/highcharts/modules/networkgraph.js");
    /* harmony import */


    var highcharts_modules_networkgraph__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_networkgraph__WEBPACK_IMPORTED_MODULE_4__); //import nodeFormatter from "./nodeformatter";


    highcharts_modules_networkgraph__WEBPACK_IMPORTED_MODULE_4___default()(highcharts__WEBPACK_IMPORTED_MODULE_2__);
    nodeFormatter(highcharts__WEBPACK_IMPORTED_MODULE_2__);

    var SocialNetworkAnalysisComponent = /*#__PURE__*/function () {
      function SocialNetworkAnalysisComponent() {
        _classCallCheck(this, SocialNetworkAnalysisComponent);

        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_2__;
      }

      _createClass(SocialNetworkAnalysisComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.setData();
        }
      }, {
        key: "setData",
        value: function setData() {
          this.chartOptions = {
            chart: {
              type: "networkgraph"
            },
            title: {
              text: "Social Network Analysis"
            },
            subtitle: {
              text: "Long Term Engagement [90] Social Network Analysis [90], Online Discussion (forum) Behavior [52]"
            },
            plotOptions: {
              networkgraph: {
                keys: ["from", "to"],
                layoutAlgorithm: {
                  enableSimulation: true,
                  friction: -0.9
                }
              }
            },
            series: [{
              type: "networkgraph",
              dataLabels: {
                enabled: true,
                linkFormat: ""
              },
              id: "lang-tree",
              data: [["User 1", "User 2"], ["User 1", "User 3"], ["User 1", "User 4"], ["User 1", "User 5"], ["User 1", "User 6"], ["User 1", "User 7"], ["User 1", "User 9"], ["User 5", "User 16"], ["User 3", "User 17"], ["User 3", "User 18"]]
            }],
            tooltip: {
              enabled: true,
              useHTML: true,
              formatter: function formatter() {
                var linkTo_li = "";
                var tooltipHTML = "";

                for (var i = 0; i < this.point.linksFrom.length; i++) {
                  linkTo_li = linkTo_li + "<li>".concat(this.point.linksFrom[i].to, "</li>");
                }

                tooltipHTML = tooltipHTML + "<b>Replies to [".concat(this.point.name, "]</b>:<ul>").concat(linkTo_li, "</ul>");
                return tooltipHTML;
              }
            }
          }, highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default()(highcharts__WEBPACK_IMPORTED_MODULE_2__);
        }
      }]);

      return SocialNetworkAnalysisComponent;
    }();

    SocialNetworkAnalysisComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-social-network-analysis",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./social-network-analysis.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/social-network-analysis/social-network-analysis.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./social-network-analysis.component.css */
      "./src/app/charts/social-network-analysis/social-network-analysis.component.css"))["default"]]
    })], SocialNetworkAnalysisComponent);

    function nodeFormatter(Highcharts) {
      // Add the nodes option through an event call. We want to start with the parent
      // item and apply separate colors to each child element, then the same color to
      // grandchildren.
      Highcharts.addEvent(Highcharts.Series, 'afterSetOptions', function (e) {
        var colors = Highcharts.getOptions().colors,
            i = 0,
            nodes = {};

        if (this instanceof Highcharts.seriesTypes.networkgraph && e.options.id === 'lang-tree') {
          e.options.data.forEach(function (link) {
            if (link[0] === 'User 1') {
              nodes['User 1'] = {
                id: 'User 1',
                marker: {
                  radius: 20
                }
              };
              nodes[link[1]] = {
                id: link[1],
                marker: {
                  radius: 10
                },
                color: colors[i++]
              };
            } else if (nodes[link[0]] && nodes[link[0]].color) {
              nodes[link[1]] = {
                id: link[1],
                color: nodes[link[0]].color
              };
            }
          });
          e.options.nodes = Object.keys(nodes).map(function (id) {
            return nodes[id];
          });
        }
      });
    }
    /***/

  },

  /***/
  "./src/app/charts/student-comparison/student-comparison.component.css": function srcAppChartsStudentComparisonStudentComparisonComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0cy9zdHVkZW50LWNvbXBhcmlzb24vc3R1ZGVudC1jb21wYXJpc29uLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/charts/student-comparison/student-comparison.component.ts": function srcAppChartsStudentComparisonStudentComparisonComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentComparisonComponent", function () {
      return StudentComparisonComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! highcharts */
    "./node_modules/highcharts/highcharts.js");
    /* harmony import */


    var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! highcharts/modules/exporting */
    "./node_modules/highcharts/modules/exporting.js");
    /* harmony import */


    var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__);

    var StudentComparisonComponent = /*#__PURE__*/function () {
      function StudentComparisonComponent() {
        _classCallCheck(this, StudentComparisonComponent);

        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_2__;
      }

      _createClass(StudentComparisonComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.selectedOption = "Clicks";
          this.setData();
        }
      }, {
        key: "setData",
        value: function setData() {
          this.chartOptions = {
            chart: {
              renderTo: "container",
              defaultSeriesType: "spline"
            },
            title: {
              text: "Student comparison"
            },
            subtitle: {
              text: "Student comparison [130] Grade prediction [130] Self-motivation [130], Student performance [126] Student comparison [126], Academic performance [129] Learning strategies [129], Performance [25], Performance [50]"
            },
            xAxis: {
              categories: ["WK 1", "WK 2", "WK 3", "WK 4", "WK 5", "WK 6", "WK 7", "WK 8", "WK 9", "WK 10", "WK 11", "WK 12"]
            },
            yAxis: {
              title: {
                text: this.selectedOption
              }
            },
            series: [{
              name: "You",
              data: [10, 20, 30, 20, 10]
            }, {
              name: "Avg. class data",
              data: [12, 21, 33, 12, 1]
            }]
          }, highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default()(highcharts__WEBPACK_IMPORTED_MODULE_2__);
        }
      }, {
        key: "updateChart",
        value: function updateChart(event) {
          var selVal = event.target.value;

          if (selVal == "A" || selVal == "") {
            this.chartOptions["series"] = [{
              name: "You",
              data: [10, 20, 30, 20, 10]
            }, {
              name: "Avg. class data",
              data: [12, 21, 33, 12, 1]
            }];
          } else if (selVal == "B") {
            this.chartOptions["series"] = [{
              name: "You",
              data: [11, 21, 32, 12, 1]
            }, {
              name: "Avg. class data",
              data: [22, 11, 13, 32, 21]
            }];
          } else if (selVal == "C") {
            this.chartOptions["series"] = [{
              name: "You",
              data: [31, 22, 33, 32, 11]
            }, {
              name: "Avg. class data",
              data: [32, 31, 11, 2, 15]
            }];
          } else if (selVal == "D") {
            this.chartOptions["series"] = [{
              name: "You",
              data: [54, 33, 44, 12, 32]
            }, {
              name: "Avg. class data",
              data: [22, 43, 13, 12, 133]
            }];
          } else {
            this.chartOptions["series"] = [{
              name: "You",
              data: [24, 13, 14, 32, 22]
            }, {
              name: "Avg. class data",
              data: [32, 43, 33, 52, 33]
            }];
          }

          this.selectedOption = event.target.options[event.target.options.selectedIndex].text;
          this.chartOptions["yAxis"]["title"]["text"] = this.selectedOption;
          this.chartOptions = Object.assign({}, this.chartOptions);
        }
      }]);

      return StudentComparisonComponent;
    }();

    StudentComparisonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-student-comparison",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./student-comparison.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/student-comparison/student-comparison.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./student-comparison.component.css */
      "./src/app/charts/student-comparison/student-comparison.component.css"))["default"]]
    })], StudentComparisonComponent);
    /***/
  },

  /***/
  "./src/app/charts/student-interaction-patterns/student-interaction-patterns.component.css": function srcAppChartsStudentInteractionPatternsStudentInteractionPatternsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0cy9zdHVkZW50LWludGVyYWN0aW9uLXBhdHRlcm5zL3N0dWRlbnQtaW50ZXJhY3Rpb24tcGF0dGVybnMuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/charts/student-interaction-patterns/student-interaction-patterns.component.ts": function srcAppChartsStudentInteractionPatternsStudentInteractionPatternsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentInteractionPatternsComponent", function () {
      return StudentInteractionPatternsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! highcharts */
    "./node_modules/highcharts/highcharts.js");
    /* harmony import */


    var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! highcharts/modules/exporting */
    "./node_modules/highcharts/modules/exporting.js");
    /* harmony import */


    var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__);

    var StudentInteractionPatternsComponent = /*#__PURE__*/function () {
      function StudentInteractionPatternsComponent() {
        _classCallCheck(this, StudentInteractionPatternsComponent);

        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_2__;
      }

      _createClass(StudentInteractionPatternsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.setData(); //Option to allow export of chart
        }
      }, {
        key: "setData",
        value: function setData() {
          this.chartOptions = {
            chart: {
              //  polar: true,
              type: "area"
            },
            title: {
              text: "Student interaction patterns"
            },
            subtitle: {
              text: "Student interaction patterns (Relation to performance) [127], Student Interaction Patterns [121]"
            },
            credits: {
              enabled: false
            },
            yAxis: {
              title: {
                text: "Number of Interactions"
              }
            },
            xAxis: {
              categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
            },
            legend: {
              layout: "vertical",
              align: "right",
              verticalAlign: "middle"
            },
            plotOptions: {
              series: {
                label: {
                  connectorAllowed: false
                }
              }
            },
            series: [{
              name: "# student visits",
              data: [66, 72, 80, 55, 43, 52, 39, 26, 22, 48, 70, 80]
            }, {
              name: "# discussion forum views",
              data: [62, 60, 72, 51, 30, 59, 42, 20, 14, 30, 54, 60]
            }, {
              name: "# content views",
              data: [88, 68, 60, 40, 15, 33, 68, 50, 13, 22, 44, 58]
            }],
            responsive: {
              rules: [{
                condition: {
                  maxWidth: 500
                },
                chartOptions: {
                  legend: {
                    layout: "horizontal",
                    align: "center",
                    verticalAlign: "bottom"
                  }
                }
              }]
            }
          };
          highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default()(highcharts__WEBPACK_IMPORTED_MODULE_2__);
        }
      }]);

      return StudentInteractionPatternsComponent;
    }();

    StudentInteractionPatternsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-student-interaction-patterns",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./student-interaction-patterns.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/student-interaction-patterns/student-interaction-patterns.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./student-interaction-patterns.component.css */
      "./src/app/charts/student-interaction-patterns/student-interaction-patterns.component.css"))["default"]]
    })], StudentInteractionPatternsComponent);
    /***/
  },

  /***/
  "./src/app/charts/time-distribution/time-distribution.component.css": function srcAppChartsTimeDistributionTimeDistributionComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0cy90aW1lLWRpc3RyaWJ1dGlvbi90aW1lLWRpc3RyaWJ1dGlvbi5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/charts/time-distribution/time-distribution.component.ts": function srcAppChartsTimeDistributionTimeDistributionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TimeDistributionComponent", function () {
      return TimeDistributionComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! highcharts */
    "./node_modules/highcharts/highcharts.js");
    /* harmony import */


    var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! highcharts/modules/exporting */
    "./node_modules/highcharts/modules/exporting.js");
    /* harmony import */


    var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__);

    var TimeDistributionComponent = /*#__PURE__*/function () {
      function TimeDistributionComponent() {
        _classCallCheck(this, TimeDistributionComponent);

        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_2__;
      }

      _createClass(TimeDistributionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.setData();
        }
      }, {
        key: "setData",
        value: function setData() {
          this.chartOptions = {
            chart: {
              type: "column"
            },
            title: {
              text: "Time distribution"
            },
            subtitle: {
              text: "Time Distribution [39] Resource Usage Awareness [39] Self-reflection [39]"
            },
            xAxis: {
              categories: ["WK 1", "WK 2", "WK 3", "WK 4", "WK 5", "WK 6", "WK 7", "WK 8", "WK 9", "WK 10", "WK 11", "WK 12"]
            },
            yAxis: {
              min: 0,
              title: {
                text: "Weekly activity"
              }
            },
            tooltip: {
              pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b><br/>',
              shared: true
            },
            plotOptions: {
              column: {
                stacking: "percent"
              }
            },
            series: [{
              name: "# posts",
              data: [38, 42, 37, 62, 30, 25, 21, 60, 15, 30, 46, 30]
            }, {
              name: "# visits",
              data: [30, 20, 25, 68, 42, 20, 15, 55, 23, 34, 40, 50]
            }, {
              name: "# comments",
              data: [10, 15, 14, 22, 8, 5, 7, 23, 15, 13, 20, 24]
            }, {
              name: "time spent in application",
              data: [50, 44, 38, 30, 42, 48, 52, 20, 15, 60, 72, 53],
              type: "spline"
            }]
          }, highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default()(highcharts__WEBPACK_IMPORTED_MODULE_2__);
        }
      }]);

      return TimeDistributionComponent;
    }();

    TimeDistributionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-time-distribution",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./time-distribution.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/time-distribution/time-distribution.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./time-distribution.component.css */
      "./src/app/charts/time-distribution/time-distribution.component.css"))["default"]]
    })], TimeDistributionComponent);
    /***/
  },

  /***/
  "./src/app/charts/time-planning/time-planning.component.css": function srcAppChartsTimePlanningTimePlanningComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0cy90aW1lLXBsYW5uaW5nL3RpbWUtcGxhbm5pbmcuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/charts/time-planning/time-planning.component.ts": function srcAppChartsTimePlanningTimePlanningComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TimePlanningComponent", function () {
      return TimePlanningComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! highcharts */
    "./node_modules/highcharts/highcharts.js");
    /* harmony import */


    var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! highcharts/modules/exporting */
    "./node_modules/highcharts/modules/exporting.js");
    /* harmony import */


    var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__);

    var drilldown = __webpack_require__(
    /*! highcharts/modules/drilldown.js */
    "./node_modules/highcharts/modules/drilldown.js");

    drilldown(highcharts__WEBPACK_IMPORTED_MODULE_2__);

    var TimePlanningComponent = /*#__PURE__*/function () {
      function TimePlanningComponent() {
        _classCallCheck(this, TimePlanningComponent);

        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_2__;
      }

      _createClass(TimePlanningComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          //Set the chart data after we get the indicator and metrics
          this.setData();
        }
      }, {
        key: "setData",
        value: function setData() {
          this.chartOptions = {
            chart: {
              plotBackgroundColor: null,
              plotBorderWidth: null,
              plotShadow: false,
              type: "pie"
            },
            title: {
              text: "Time planning"
            },
            subtitle: {
              text: "Collaborative Learning [47] Time Planning [47], Temporal Analysis [68], Recommendations for successful course completion [125] Self-regulation [125] Timeline (status and goal) [125]"
            },
            tooltip: {
              pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>"
            },
            accessibility: {
              point: {
                valueSuffix: "%"
              }
            },
            plotOptions: {
              pie: {
                allowPointSelect: true,
                cursor: "pointer",
                dataLabels: {
                  enabled: true,
                  format: "<b>{point.name}</b>: {point.percentage:.1f} %"
                }
              }
            },
            series: [{
              colorByPoint: true,
              data: [{
                name: "Time spent on reading",
                y: 61.41,
                sliced: true,
                selected: true,
                drilldown: "reading"
              }, {
                name: "Time spent on planning",
                y: 11.84,
                drilldown: "planning"
              }, {
                name: "Time spent on discussion forum",
                y: 10.85,
                drilldown: "forum"
              }]
            }],
            drilldown: {
              series: [{
                name: "Time spent on reading per day",
                id: "reading",
                data: [["Monday", 22], ["Tuesday", 15], ["Wednesday", 10], ["Thursday", 33], ["Friday", 20]]
              }, {
                name: "Time spent on planning per day",
                id: "planning",
                data: [["Monday", 38], ["Tuesday", 22], ["Wednesday", 8], ["Thursday", 20], ["Friday", 12]]
              }, {
                name: "Time spent on forum per day",
                id: "forum",
                data: [["Monday", 29], ["Tuesday", 30], ["Wednesday", 15], ["Thursday", 20], ["Friday", 6]]
              }]
            }
          }, highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default()(highcharts__WEBPACK_IMPORTED_MODULE_2__);
        }
      }]);

      return TimePlanningComponent;
    }();

    TimePlanningComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-time-planning",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./time-planning.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/time-planning/time-planning.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./time-planning.component.css */
      "./src/app/charts/time-planning/time-planning.component.css"))["default"]]
    })], TimePlanningComponent);
    /***/
  },

  /***/
  "./src/app/charts/video-analytics/video-analytics.component.css": function srcAppChartsVideoAnalyticsVideoAnalyticsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0cy92aWRlby1hbmFseXRpY3MvdmlkZW8tYW5hbHl0aWNzLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/charts/video-analytics/video-analytics.component.ts": function srcAppChartsVideoAnalyticsVideoAnalyticsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VideoAnalyticsComponent", function () {
      return VideoAnalyticsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! highcharts */
    "./node_modules/highcharts/highcharts.js");
    /* harmony import */


    var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! highcharts/modules/exporting */
    "./node_modules/highcharts/modules/exporting.js");
    /* harmony import */


    var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__);

    var VideoAnalyticsComponent = /*#__PURE__*/function () {
      function VideoAnalyticsComponent() {
        _classCallCheck(this, VideoAnalyticsComponent);

        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_2__;
      }

      _createClass(VideoAnalyticsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.setData();
        }
      }, {
        key: "setData",
        value: function setData() {
          this.chartOptions = {
            chart: {
              type: "column"
            },
            title: {
              text: "Video analytics"
            },
            legend: {
              align: "right",
              verticalAlign: "middle",
              layout: "vertical"
            },
            xAxis: {
              categories: ["User 1", "User 2", "User 3", "User 4", "User 5", "User 6", "User 7", "User 8", "User 9", "User 10", "User 11", "User 12"],
              labels: {
                x: -10
              }
            },
            yAxis: {
              allowDecimals: false,
              title: {
                text: "Amount"
              }
            },
            series: [{
              name: "# forward seeks",
              data: []
            }, {
              name: "# backward seeks",
              data: []
            }, {
              name: "# videos watched",
              data: []
            }, {
              name: "# pauses",
              data: []
            }],
            responsive: {
              rules: [{
                condition: {
                  maxWidth: 500
                },
                chartOptions: {
                  legend: {
                    align: "center",
                    verticalAlign: "bottom",
                    layout: "horizontal"
                  },
                  yAxis: {
                    labels: {
                      align: "left",
                      x: 0,
                      y: -5
                    },
                    title: {
                      text: null
                    }
                  },
                  subtitle: {
                    text: null
                  },
                  credits: {
                    enabled: false
                  }
                }
              }]
            }
          }, highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default()(highcharts__WEBPACK_IMPORTED_MODULE_2__);
        }
      }]);

      return VideoAnalyticsComponent;
    }();

    VideoAnalyticsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-video-analytics",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./video-analytics.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/video-analytics/video-analytics.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./video-analytics.component.css */
      "./src/app/charts/video-analytics/video-analytics.component.css"))["default"]]
    })], VideoAnalyticsComponent);
    /***/
  },

  /***/
  "./src/app/charts/video-engagements/video-engagements.component.css": function srcAppChartsVideoEngagementsVideoEngagementsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0cy92aWRlby1lbmdhZ2VtZW50cy92aWRlby1lbmdhZ2VtZW50cy5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/charts/video-engagements/video-engagements.component.ts": function srcAppChartsVideoEngagementsVideoEngagementsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VideoEngagementsComponent", function () {
      return VideoEngagementsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! highcharts */
    "./node_modules/highcharts/highcharts.js");
    /* harmony import */


    var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! highcharts/modules/exporting */
    "./node_modules/highcharts/modules/exporting.js");
    /* harmony import */


    var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__);

    var VideoEngagementsComponent = /*#__PURE__*/function () {
      function VideoEngagementsComponent() {
        _classCallCheck(this, VideoEngagementsComponent);

        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_2__;
      }

      _createClass(VideoEngagementsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.setData();
        }
      }, {
        key: "setData",
        value: function setData() {
          this.chartOptions = {
            title: {
              text: "Video engagements"
            },
            subtitle: {
              text: "Video engagements / analytics [138], Video analytics (Self-reflection) [72], Comment Analytics (Youtube Videos) [116]"
            },
            yAxis: {
              title: {
                text: "Number of Students"
              }
            },
            xAxis: {
              categories: ["Video 1", "Video 2", "Video 3", "Video 4", "Video 5", "Video 6", "Video 7"]
            },
            legend: {
              layout: "vertical",
              align: "right",
              verticalAlign: "middle"
            },
            plotOptions: {
              series: {
                label: {
                  connectorAllowed: false
                }
              }
            },
            series: [{
              name: "Read a summary",
              data: [625, 444, 488, 422, 380, 322, 205]
            }, {
              name: "Wrote a summary",
              data: [696, 525, 499, 431, 398, 280, 170]
            }],
            responsive: {
              rules: [{
                condition: {
                  maxWidth: 500
                },
                chartOptions: {
                  legend: {
                    layout: "horizontal",
                    align: "center",
                    verticalAlign: "bottom"
                  }
                }
              }]
            }
          }, highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default()(highcharts__WEBPACK_IMPORTED_MODULE_2__);
        }
      }]);

      return VideoEngagementsComponent;
    }();

    VideoEngagementsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-video-engagements",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./video-engagements.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/video-engagements/video-engagements.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./video-engagements.component.css */
      "./src/app/charts/video-engagements/video-engagements.component.css"))["default"]]
    })], VideoEngagementsComponent);
    /***/
  },

  /***/
  "./src/app/charts/writing-analytics/writing-analytics.component.css": function srcAppChartsWritingAnalyticsWritingAnalyticsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0cy93cml0aW5nLWFuYWx5dGljcy93cml0aW5nLWFuYWx5dGljcy5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/charts/writing-analytics/writing-analytics.component.ts": function srcAppChartsWritingAnalyticsWritingAnalyticsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WritingAnalyticsComponent", function () {
      return WritingAnalyticsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! highcharts */
    "./node_modules/highcharts/highcharts.js");
    /* harmony import */


    var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);

    var drilldown = __webpack_require__(
    /*! highcharts/modules/drilldown.js */
    "./node_modules/highcharts/modules/drilldown.js");

    drilldown(highcharts__WEBPACK_IMPORTED_MODULE_2__);

    var heatmap = __webpack_require__(
    /*! highcharts/modules/heatmap.js */
    "./node_modules/highcharts/modules/heatmap.js");

    heatmap(highcharts__WEBPACK_IMPORTED_MODULE_2__);

    var treemap = __webpack_require__(
    /*! highcharts/modules/treemap.js */
    "./node_modules/highcharts/modules/treemap.js");

    treemap(highcharts__WEBPACK_IMPORTED_MODULE_2__);

    var WritingAnalyticsComponent = /*#__PURE__*/function () {
      function WritingAnalyticsComponent() {
        _classCallCheck(this, WritingAnalyticsComponent);

        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_2__;
      }

      _createClass(WritingAnalyticsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.setData();
        }
      }, {
        key: "setData",
        value: function setData() {
          this.chartOptions = {
            chart: {
              plotBorderWidth: 1,
              events: {
                drilldown: function drilldown(e) {
                  var chart = this;
                  chart.tooltip.options.enabled = false;
                  chart.yAxis[0].update({
                    type: "linear",
                    categories: false
                  });
                },
                drillup: function drillup(e) {
                  var chart = this;
                  chart.tooltip.options.enabled = true;
                  chart.yAxis[0].update({
                    "this": "category",
                    categories: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
                  });
                }
              }
            },
            title: {
              text: "Writing analytics (Group edits per day)"
            },
            subtitle: {
              text: "Writing analytics [61] Collaboration network [61], Writing Engagement [48], Writing Analysis [89] Reflective Writing [89], Affective State [85] Text Analysis [85]"
            },
            xAxis: {
              type: "category"
            },
            yAxis: {
              type: "category",
              categories: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              title: null
            },
            colorAxis: {
              min: 0,
              minColor: "#FFFFFF",
              maxColor: highcharts__WEBPACK_IMPORTED_MODULE_2__["getOptions"]().colors[0]
            },
            legend: {
              align: "right",
              layout: "vertical",
              margin: 0,
              verticalAlign: "top",
              y: 25,
              symbolHeight: 280
            },
            tooltip: {
              formatter: function formatter() {
                return "The group had " + "<b>" + this.point.value + "</b> edits on <br><b>" + this.series.yAxis.categories[this.point.y] + "</b>";
              }
            },
            series: [{
              type: "heatmap",
              name: "Group Edits",
              borderWidth: 1,
              data: [{
                x: 0,
                y: 0,
                name: "Group 1",
                value: 10,
                drilldown: "group1Monday"
              }, {
                x: 0,
                y: 1,
                name: "Group 1",
                value: 19,
                drilldown: "group1Tuesday"
              }, {
                x: 0,
                y: 2,
                name: "Group 1",
                value: 8,
                drilldown: "group1Wednesday"
              }, {
                x: 0,
                y: 3,
                name: "Group 1",
                value: 24,
                drilldown: "group1Thursday"
              }, {
                x: 0,
                y: 4,
                name: "Group 1",
                value: 67,
                drilldown: "group1Friday"
              }, {
                x: 1,
                y: 0,
                name: "Group 2",
                value: 92,
                drilldown: "group2Monday"
              }, {
                x: 1,
                y: 1,
                name: "Group 2",
                value: 58,
                drilldown: "group2Tuesday"
              }, {
                x: 1,
                y: 2,
                name: "Group 2",
                value: 78,
                drilldown: "group2Wednesday"
              }, {
                x: 1,
                y: 3,
                name: "Group 2",
                value: 117,
                drilldown: "group2Thursday"
              }, {
                x: 1,
                y: 4,
                name: "Group 2",
                value: 48,
                drilldown: "group2Friday"
              }, {
                x: 2,
                y: 0,
                name: "Group 3",
                value: 35,
                drilldown: "group3Monday"
              }, {
                x: 2,
                y: 1,
                name: "Group 3",
                value: 15,
                drilldown: "group3Tuesday"
              }, {
                x: 2,
                y: 2,
                name: "Group 3",
                value: 123,
                drilldown: "group3Wednesday"
              }, {
                x: 2,
                y: 3,
                name: "Group 3",
                value: 64,
                drilldown: "group3Thursday"
              }, {
                x: 2,
                y: 4,
                name: "Group 3",
                value: 52,
                drilldown: "group3Friday"
              }, {
                x: 3,
                y: 0,
                name: "Group 4",
                value: 72,
                drilldown: "group4Monday"
              }, {
                x: 3,
                y: 1,
                name: "Group 4",
                value: 132,
                drilldown: "group4Tuesday"
              }, {
                x: 3,
                y: 2,
                name: "Group 4",
                value: 116,
                drilldown: "group4Wednesday"
              }, {
                x: 3,
                y: 3,
                name: "Group 4",
                value: 42,
                drilldown: "group4Thursday"
              }, {
                x: 3,
                y: 4,
                name: "Group 4",
                value: 88,
                drilldown: "group4Friday"
              }, {
                x: 4,
                y: 0,
                name: "Group 5",
                value: 38,
                drilldown: "group5Monday"
              }, {
                x: 4,
                y: 1,
                name: "Group 5",
                value: 35,
                drilldown: "group5Tuesday"
              }, {
                x: 4,
                y: 2,
                name: "Group 5",
                value: 58,
                drilldown: "group5Wednesday"
              }, {
                x: 4,
                y: 3,
                name: "Group 5",
                value: 117,
                drilldown: "group5Thursday"
              }, {
                x: 4,
                y: 4,
                name: "Group 5",
                value: 115,
                drilldown: "group5Friday"
              }],
              dataLabels: {
                enabled: true,
                color: "#000000"
              }
            }],
            drilldown: {
              series: [{
                id: "group1Monday",
                type: "bar",
                data: [{
                  name: "Student 1",
                  y: 2
                }, {
                  name: "Student 2",
                  y: 3
                }, {
                  name: "Student 3",
                  y: 5
                }]
              }, {
                id: "group1Tuesday",
                type: "bar",
                data: [{
                  name: "Student 1",
                  y: 10
                }, {
                  name: "Student 2",
                  y: 15
                }, {
                  name: "Student 3",
                  y: 23
                }]
              }, {
                id: "group1Wednesday",
                type: "bar",
                data: [{
                  name: "Student 1",
                  y: 2
                }, {
                  name: "Student 2",
                  y: 3
                }, {
                  name: "Student 3",
                  y: 3
                }]
              }, {
                id: "group1Thursday",
                type: "bar",
                data: [{
                  name: "Student 1",
                  y: 12
                }, {
                  name: "Student 2",
                  y: 6
                }, {
                  name: "Student 3",
                  y: 6
                }]
              }, {
                id: "group1Friday",
                type: "bar",
                data: [{
                  name: "Student 1",
                  y: 32
                }, {
                  name: "Student 2",
                  y: 15
                }, {
                  name: "Student 3",
                  y: 20
                }]
              }, {
                id: "group2Monday",
                type: "bar",
                data: [{
                  name: "Student 1",
                  y: 55
                }, {
                  name: "Student 2",
                  y: 20
                }, {
                  name: "Student 3",
                  y: 17
                }]
              }, {
                id: "group2Tuesday",
                type: "bar",
                data: [{
                  name: "Student 1",
                  y: 12
                }, {
                  name: "Student 2",
                  y: 23
                }, {
                  name: "Student 3",
                  y: 22
                }]
              }, {
                id: "group2Wednesday",
                type: "bar",
                data: [{
                  name: "Student 1",
                  y: 23
                }, {
                  name: "Student 2",
                  y: 25
                }, {
                  name: "Student 3",
                  y: 29
                }]
              }, {
                id: "group2Thursday",
                type: "bar",
                data: [{
                  name: "Student 1",
                  y: 68
                }, {
                  name: "Student 2",
                  y: 32
                }, {
                  name: "Student 3",
                  y: 23
                }]
              }, {
                id: "group2Friday",
                type: "bar",
                data: [{
                  name: "Student 1",
                  y: 12
                }, {
                  name: "Student 2",
                  y: 20
                }, {
                  name: "Student 3",
                  y: 20
                }]
              }, {
                id: "group3Monday",
                type: "bar",
                data: [{
                  name: "Student 1",
                  y: 8
                }, {
                  name: "Student 2",
                  y: 17
                }, {
                  name: "Student 3",
                  y: 10
                }]
              }, {
                id: "group3Tuesday",
                type: "bar",
                data: [{
                  name: "Student 1",
                  y: 1
                }, {
                  name: "Student 2",
                  y: 4
                }, {
                  name: "Student 3",
                  y: 10
                }]
              }, {
                id: "group3Wednesday",
                type: "bar",
                data: [{
                  name: "Student 1",
                  y: 55
                }, {
                  name: "Student 2",
                  y: 45
                }, {
                  name: "Student 3",
                  y: 23
                }]
              }, {
                id: "group3Thursday",
                type: "bar",
                data: [{
                  name: "Student 1",
                  y: 15
                }, {
                  name: "Student 2",
                  y: 25
                }, {
                  name: "Student 3",
                  y: 14
                }]
              }, {
                id: "group3Friday",
                type: "bar",
                data: [{
                  name: "Student 1",
                  y: 30
                }, {
                  name: "Student 2",
                  y: 17
                }, {
                  name: "Student 3",
                  y: 5
                }]
              }, {
                id: "group4Monday",
                type: "bar",
                data: [{
                  name: "Student 1",
                  y: 24
                }, {
                  name: "Student 2",
                  y: 24
                }, {
                  name: "Student 3",
                  y: 24
                }]
              }, {
                id: "group4Tuesday",
                type: "bar",
                data: [{
                  name: "Student 1",
                  y: 30
                }, {
                  name: "Student 2",
                  y: 60
                }, {
                  name: "Student 3",
                  y: 42
                }]
              }, {
                id: "group4Wednesday",
                type: "bar",
                data: [{
                  name: "Student 1",
                  y: 42
                }, {
                  name: "Student 2",
                  y: 38
                }, {
                  name: "Student 3",
                  y: 34
                }]
              }, {
                id: "group4Thursday",
                type: "bar",
                data: [{
                  name: "Student 1",
                  y: 14
                }, {
                  name: "Student 2",
                  y: 14
                }, {
                  name: "Student 3",
                  y: 14
                }]
              }, {
                id: "group4Friday",
                type: "bar",
                data: [{
                  name: "Student 1",
                  y: 40
                }, {
                  name: "Student 2",
                  y: 20
                }, {
                  name: "Student 3",
                  y: 28
                }]
              }, {
                id: "group5Monday",
                type: "bar",
                data: [{
                  name: "Student 1",
                  y: 15
                }, {
                  name: "Student 2",
                  y: 20
                }, {
                  name: "Student 3",
                  y: 3
                }]
              }, {
                id: "group5Tuesday",
                type: "bar",
                data: [{
                  name: "Student 1",
                  y: 15
                }, {
                  name: "Student 2",
                  y: 7
                }, {
                  name: "Student 3",
                  y: 13
                }]
              }, {
                id: "group5Wednesday",
                type: "bar",
                data: [{
                  name: "Student 1",
                  y: 23
                }, {
                  name: "Student 2",
                  y: 20
                }, {
                  name: "Student 3",
                  y: 15
                }]
              }, {
                id: "group5Thursday",
                type: "bar",
                data: [{
                  name: "Student 1",
                  y: 55
                }, {
                  name: "Student 2",
                  y: 45
                }, {
                  name: "Student 3",
                  y: 17
                }]
              }, {
                id: "group5Friday",
                type: "bar",
                data: [{
                  name: "Student 1",
                  y: 30
                }, {
                  name: "Student 2",
                  y: 40
                }, {
                  name: "Student 3",
                  y: 45
                }]
              }]
            }
          };
        }
      }]);

      return WritingAnalyticsComponent;
    }();

    WritingAnalyticsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-writing-analytics",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./writing-analytics.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/writing-analytics/writing-analytics.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./writing-analytics.component.css */
      "./src/app/charts/writing-analytics/writing-analytics.component.css"))["default"]]
    })], WritingAnalyticsComponent);
    /***/
  },

  /***/
  "./src/app/component/add-data/add-data.component.css": function srcAppComponentAddDataAddDataComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".card {\n  background: white;\n  margin: 15px;\n  height: 75%;\n  width: 50%;\n  box-shadow: 1px 1px 2px 2px #888888;\n  padding-bottom: 24px;\n  position: absolute;\n  transform: translate(50%, 50%);\n  bottom: 40%;\n  right: 50%;\n  overflow: auto;\n}\n\n\n#title {\n  text-align: center;\n  font-weight: normal;\n  margin: 24px;\n  padding: 24px;\n  background-color: #3F51B5;\n  color: white;\n}\n\n\n#dropdown {\n  margin: 16px;\n  font-weight: bold;\n  font-size: 16px;\n}\n\n\n#dropdown>mat-select {\n  height: 20px;\n  width: 300px;\n  padding-left: 25px;\n  font-size: 16px;\n  font-weight: normal;\n  margin-left: 34px;\n  border: none;\n  border-radius: 4px;\n  color: white;\n\n}\n\n\n#dropdown>label {\n  padding-right: 40px;\n  padding-left: 40px;\n}\n\n\noption {\n  color: white;\n  border: none;\n}\n\n\n#activities {\n  margin: 16px;\n  padding-left: 12px;\n  font-weight: bold;\n  font-size: 16px;\n}\n\n\n#activities>mat-select {\n  height: 20px;\n  width: 300px;\n  padding-left: 25px;\n  font-size: 16px;\n  font-weight: normal;\n  margin-left: 32px;\n\n  border: none;\n  border-radius: 4px;\n  color: white;\n\n}\n\n\n#activities>label {\n  padding-right: 24px;\n  padding-left: 24px;\n\n}\n\n\n#indicators {\n  margin-top: 16px;\n  padding-left: 30px;\n  font-weight: bold;\n  font-size: 16px;\n\n}\n\n\n#indicators>label {\n\n  padding-right: 84px;\n  padding-left: 24px;\n\n}\n\n\n#indicators>input {\n  font-size: 16px;\n  font-weight: normal;\n\n  margin-left: 32px;\n  width: 500px;\n  height: 30px;\n  font-weight: bold;\n  font-size: 16px;\n\n}\n\n\n#metrics {\n  margin-top: 16px;\n  padding-left: 30px;\n  font-weight: bold;\n  font-size: 16px;\n\n}\n\n\n.metrics {\n\n  padding-right: 140px;\n  padding-left: 24px;\n  font-size: medium;\n  margin-left: 24px;\n\n\n}\n\n\n#metrics>input {\n  font-size: 16px;\n  font-weight: normal;\n  background-color: #3F51B5;\n  border: none;\n  border-radius: 4px;\n  width: 400px;\n  height: 30px;\n  color: white;\n}\n\n\n.btn {\n  margin-top: 24px;\n  padding-right: 92px;\n  padding-left: 24px;\n  text-align: center;\n}\n\n\n#btn1 {\n  margin-left: 12px;\n  margin-right: 24px;\n}\n\n\n#btn2 {\n  margin-top: 12px;\n  margin-right: 24px;\n}\n\n\n#savebtn {\n\n  margin: 40px;\n  padding-left: 200px;\n}\n\n\n.formfield * {\n  vertical-align: middle;\n  margin-top: 16px;\n  font-weight: bold;\n  font-size: 16px;\n  width: 500px;\n\n}\n\n\n.alert {\n  position: relative;\n  top: 10;\n  left: 0;\n  width: auto;\n  padding: 10px;\n  margin-left: 600px;\n  margin-right: 600px;\n  line-height: 1.8;\n  border-radius: 5px;\n  cursor: hand;\n  cursor: pointer;\n  font-family: sans-serif;\n  font-weight: 400;\n}\n\n\n.alertCheckbox {\n  display: none;\n}\n\n\n:checked + .alert {\n  display: none;\n}\n\n\n.alertText {\n  display: table;\n  margin: 0 auto;\n  text-align: center;\n  font-size: 16px;\n}\n\n\n.alertClose {\n  float: right;\n  padding-top: 5px;\n  font-size: 10px;\n}\n\n\n.clear {\n  clear: both;\n}\n\n\n.success {\n  border: 1px solid rgb(214, 233, 198);\n  background-color: rgb(223, 240, 216);\n  color: rgb(70, 136, 71);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2FkZC1kYXRhL2FkZC1kYXRhLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLFdBQVc7RUFDWCxVQUFVO0VBQ1YsbUNBQW1DO0VBQ25DLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsOEJBQThCO0VBQzlCLFdBQVc7RUFDWCxVQUFVO0VBQ1YsY0FBYztBQUNoQjs7O0FBR0E7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDs7O0FBRUE7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7OztBQUdBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixZQUFZOztBQUVkOzs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7OztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7QUFDZDs7O0FBRUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOzs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsaUJBQWlCOztFQUVqQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFlBQVk7O0FBRWQ7OztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjs7QUFFcEI7OztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsZUFBZTs7QUFFakI7OztBQUVBOztFQUVFLG1CQUFtQjtFQUNuQixrQkFBa0I7O0FBRXBCOzs7QUFFQTtFQUNFLGVBQWU7RUFDZixtQkFBbUI7O0VBRW5CLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixlQUFlOztBQUVqQjs7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixlQUFlOztBQUVqQjs7O0FBRUE7O0VBRUUsb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsaUJBQWlCOzs7QUFHbkI7OztBQUVBO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osWUFBWTtFQUNaLFlBQVk7QUFDZDs7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7OztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOzs7QUFFQTs7RUFFRSxZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCOzs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixZQUFZOztBQUVkOzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsT0FBTztFQUNQLFdBQVc7RUFDWCxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtBQUNsQjs7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7OztBQUVBO0VBQ0UsYUFBYTtBQUNmOzs7QUFFQTtFQUNFLGNBQWM7RUFDZCxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7OztBQUVBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOzs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsb0NBQW9DO0VBQ3BDLHVCQUF1QjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9hZGQtZGF0YS9hZGQtZGF0YS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgbWFyZ2luOiAxNXB4O1xuICBoZWlnaHQ6IDc1JTtcbiAgd2lkdGg6IDUwJTtcbiAgYm94LXNoYWRvdzogMXB4IDFweCAycHggMnB4ICM4ODg4ODg7XG4gIHBhZGRpbmctYm90dG9tOiAyNHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDUwJSwgNTAlKTtcbiAgYm90dG9tOiA0MCU7XG4gIHJpZ2h0OiA1MCU7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG5cbiN0aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbWFyZ2luOiAyNHB4O1xuICBwYWRkaW5nOiAyNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0Y1MUI1O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbiNkcm9wZG93biB7XG4gIG1hcmdpbjogMTZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuXG4jZHJvcGRvd24+bWF0LXNlbGVjdCB7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDMwMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDI1cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbWFyZ2luLWxlZnQ6IDM0cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBjb2xvcjogd2hpdGU7XG5cbn1cblxuI2Ryb3Bkb3duPmxhYmVsIHtcbiAgcGFkZGluZy1yaWdodDogNDBweDtcbiAgcGFkZGluZy1sZWZ0OiA0MHB4O1xufVxuXG5vcHRpb24ge1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuI2FjdGl2aXRpZXMge1xuICBtYXJnaW46IDE2cHg7XG4gIHBhZGRpbmctbGVmdDogMTJweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuI2FjdGl2aXRpZXM+bWF0LXNlbGVjdCB7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDMwMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDI1cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbWFyZ2luLWxlZnQ6IDMycHg7XG5cbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGNvbG9yOiB3aGl0ZTtcblxufVxuXG4jYWN0aXZpdGllcz5sYWJlbCB7XG4gIHBhZGRpbmctcmlnaHQ6IDI0cHg7XG4gIHBhZGRpbmctbGVmdDogMjRweDtcblxufVxuXG4jaW5kaWNhdG9ycyB7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG4gIHBhZGRpbmctbGVmdDogMzBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcblxufVxuXG4jaW5kaWNhdG9ycz5sYWJlbCB7XG5cbiAgcGFkZGluZy1yaWdodDogODRweDtcbiAgcGFkZGluZy1sZWZ0OiAyNHB4O1xuXG59XG5cbiNpbmRpY2F0b3JzPmlucHV0IHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuXG4gIG1hcmdpbi1sZWZ0OiAzMnB4O1xuICB3aWR0aDogNTAwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcblxufVxuXG4jbWV0cmljcyB7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG4gIHBhZGRpbmctbGVmdDogMzBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcblxufVxuXG4ubWV0cmljcyB7XG5cbiAgcGFkZGluZy1yaWdodDogMTQwcHg7XG4gIHBhZGRpbmctbGVmdDogMjRweDtcbiAgZm9udC1zaXplOiBtZWRpdW07XG4gIG1hcmdpbi1sZWZ0OiAyNHB4O1xuXG5cbn1cblxuI21ldHJpY3M+aW5wdXQge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzRjUxQjU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB3aWR0aDogNDAwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uYnRuIHtcbiAgbWFyZ2luLXRvcDogMjRweDtcbiAgcGFkZGluZy1yaWdodDogOTJweDtcbiAgcGFkZGluZy1sZWZ0OiAyNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiNidG4xIHtcbiAgbWFyZ2luLWxlZnQ6IDEycHg7XG4gIG1hcmdpbi1yaWdodDogMjRweDtcbn1cblxuI2J0bjIge1xuICBtYXJnaW4tdG9wOiAxMnB4O1xuICBtYXJnaW4tcmlnaHQ6IDI0cHg7XG59XG5cbiNzYXZlYnRuIHtcblxuICBtYXJnaW46IDQwcHg7XG4gIHBhZGRpbmctbGVmdDogMjAwcHg7XG59XG5cbi5mb3JtZmllbGQgKiB7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHdpZHRoOiA1MDBweDtcblxufVxuXG4uYWxlcnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMTA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiBhdXRvO1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW4tbGVmdDogNjAwcHg7XG4gIG1hcmdpbi1yaWdodDogNjAwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgY3Vyc29yOiBoYW5kO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4uYWxlcnRDaGVja2JveCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbjpjaGVja2VkICsgLmFsZXJ0IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmFsZXJ0VGV4dCB7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5hbGVydENsb3NlIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBwYWRkaW5nLXRvcDogNXB4O1xuICBmb250LXNpemU6IDEwcHg7XG59XG5cbi5jbGVhciB7XG4gIGNsZWFyOiBib3RoO1xufVxuXG4uc3VjY2VzcyB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMTQsIDIzMywgMTk4KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMywgMjQwLCAyMTYpO1xuICBjb2xvcjogcmdiKDcwLCAxMzYsIDcxKTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/component/add-data/add-data.component.ts": function srcAppComponentAddDataAddDataComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddDataComponent", function () {
      return AddDataComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../data.service */
    "./src/app/data.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var AddDataComponent = /*#__PURE__*/function () {
      function AddDataComponent(dataService, router, fb) {
        _classCallCheck(this, AddDataComponent);

        this.dataService = dataService;
        this.router = router;
        this.fb = fb;
        this.options = [];
        this.selected = [];
        this.dropdownList = [];
        this.selectedItems = [];
        this.fileToUpload = null;

        if (localStorage.getItem('currentUser')) {
          this.CUserName = JSON.parse(localStorage.getItem('currentUser')).username;
        } //// form entries///////


        this.dataEntryForm = this.fb.group({
          learningEvents: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
          learningActivities: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
          indicator: this.fb.array([this.createIndicator()])
        });
      }

      _createClass(AddDataComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.fetchdata();
        }
      }, {
        key: "indicatorControls",
        get: function get() {
          return this.dataEntryForm.get('indicator')['controls'];
        } /// adding new indicator and meterics entry/////////// 

      }, {
        key: "createIndicator",
        value: function createIndicator() {
          return this.fb.group({
            indicatorName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            metrics: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
          });
        } /// code for add button//////////
        // addIndicator(): void {
        //   this.indicator = this.dataEntryForm.get('indicator') as FormArray;
        //   this.indicator.push(this.createIndicator());
        // }
        // removeIndicator(i: number) {
        //   this.indicator.removeAt(i);
        // }

      }, {
        key: "addData",
        value: function addData() {
          var _this = this;

          var indicators = this.dataEntryForm.value.indicator;
          var indicator = [];
          var metrics = [];
          indicators.forEach(function (element) {
            var ind = [element.indicatorName];
            indicator.push(ind);
          });
          indicators.forEach(function (element) {
            var met = [element.metrics];
            metrics.push(met);
          });
          this.dataService.addData(this.dataEntryForm.value.learningEvents, this.dataEntryForm.value.learningActivities, this.dataEntryForm.value.indicator).subscribe(function () {
            _this.router.navigate(['/data']);
          });
          this.dataEntryForm.reset(); // clear from entry

          this.similarActivityMessage = false; // location.reload(); // reload web page

          this.successfulMessage = "<b>Indicator and their Metrics added successfully!</b>"; //window.alert("");
        }
      }, {
        key: "fetchdata",
        value: function fetchdata() {
          var _this2 = this;

          this.dataService.getdata().subscribe(function (data) {
            _this2.data = data;

            var _iterator = _createForOfIteratorHelper(_this2.data),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var val = _step.value;

                _this2.options.push(val["LearningEvents"]);
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            _this2.selected.push(_this2.options);
          });
        }
      }, {
        key: "learningValueChange",
        value: function learningValueChange(x) {
          var _this3 = this;

          this.successfulMessage = false; //to hide the success message

          this.selectedevent = x; //console.log("Event: ", x);

          this.dataService.getdata().subscribe(function (data) {
            _this3.data = data;

            var event = _this3.data.filter(function (obj) {
              return x.includes(obj.LearningEvents);
            });

            _this3.setLearningActivities(event);

            if (x != "") {
              _this3.data = event;
            }
          });
        }
      }, {
        key: "setLearningActivities",
        value: function setLearningActivities(event) {
          this.dropdownList = [];

          var _iterator2 = _createForOfIteratorHelper(event),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var learningEvents = _step2.value;

              var _iterator3 = _createForOfIteratorHelper(learningEvents.LearningActivities),
                  _step3;

              try {
                for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                  var entry = _step3.value;
                  this.dropdownList.push(entry.Name);
                }
              } catch (err) {
                _iterator3.e(err);
              } finally {
                _iterator3.f();
              }
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }
      }, {
        key: "onActivityValueChange",
        value: function onActivityValueChange(activityValue) {
          var value = activityValue;
          console.log("ActValue: ", activityValue);

          if (activityValue == "Group Work") {
            this.similarActivityMessage = "The selected learning activity <em>\"Group Work\"</em> lies under the learning events <em>\"Create, Practice and Debate\"</em>.<br>Therefore, the Indicator and Metrics you want to add will also be added automatically under the <em>\"Group Work\"</em> activity in the mentioned learning events.";
          } else if (activityValue == "Review/Study") {
            this.similarActivityMessage = "The selected learning activity <em>\"Review/Study\"</em> lies under the learning events <em>\"Receive, Meta-learn or Self-reflect and Debate\"</em>.<br>Therefore, the Indicator and Metrics you want to add will also be added automatically under the <em>\"Review/Study\"</em> activity in the mentioned learning events.";
          } else if (activityValue == "Presentation") {
            this.similarActivityMessage = "The selected learning activity <em>\"Presentation\"</em> lies under the learning events <em>\"Receive, Imitate and Debate\"</em>.<br>Therefore, the Indicator and Metrics you want to add will also be added automatically under the <em>\"Presentation\"</em> activity in the mentioned learning events.";
          } else if (activityValue == "Exercise (Training)") {
            this.similarActivityMessage = "The selected learning activity <em>\"Exercise (Training)\"</em> lies under the learning events <em>\"Imitate, Experiment and Practice\"</em>.<br>Therefore, the Indicator and Metrics you want to add will also be added automatically under the <em>\"Exercise (Training)\"</em> activity in the mentioned learning events.";
          } else if (activityValue == "Question (Query/Inquiry)") {
            this.similarActivityMessage = "The selected learning activity <em>\"Question (Query/Inquiry)\"</em> lies under the learning events <em>\"Practice and Debate\"</em>.<br>Therefore, the Indicator and Metrics you want to add will also be added automatically under the <em>\"Question (Query/Inquiry)\"</em> activity in the mentioned learning events.";
          } else if (activityValue == "Survey (Questionnaire)") {
            this.similarActivityMessage = "The selected learning activity <em>\"Survey (Questionnaire)\"</em> lies under the learning events <em>\"Explore, Practice and Debate\"</em>.<br>Therefore, the Indicator and Metrics you want to add will also be added automatically under the <em>\"Survey (Questionnaire)\"</em> activity in the mentioned learning events.";
          } else if (activityValue == "Peer review/Assessment") {
            this.similarActivityMessage = "The selected learning activity <em>\"Peer review/Assessment\"</em> lies under the learning events <em>\"Practice and Meta-learn or Self-reflect\"</em>.<br>Therefore, the Indicator and Metrics you want to add will also be added automatically under the <em>\"Peer review/Assessment\"</em> activity in the mentioned learning events.";
          } else {
            this.similarActivityMessage = false;
          }
        }
      }, {
        key: "logout",
        value: function logout() {
          localStorage.removeItem('currentUser');
          this.router.navigate(['/']);
        }
      }]);

      return AddDataComponent;
    }();

    AddDataComponent.ctorParameters = function () {
      return [{
        type: _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
      }];
    };

    AddDataComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-data',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./add-data.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/component/add-data/add-data.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./add-data.component.css */
      "./src/app/component/add-data/add-data.component.css"))["default"]]
    })], AddDataComponent);
    /***/
  },

  /***/
  "./src/app/component/admin/admin.component.css": function srcAppComponentAdminAdminComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".container {\n\n  background: white;\n\n  height: auto;\n  width: auto;\n\n  box-shadow: 1px 1px 2px 2px #888888;\n  padding-bottom: 24px;\n  position: absolute;\n  transform: translate(50%, 50%);\n  bottom: 50%;\n  right: 50%;\n\n\n\n}\n\n#title {\n  text-align: center;\n  font-weight: normal;\n  padding: 24px;\n  background-color: #3F51B5;\n  color: white;\n}\n\n#username {\n  margin: 45px;\n  text-align: center;\n  margin-top: 25px;\n  padding-left: 10px;\n  font-weight: bold;\n  font-size: 16px;\n}\n\n#password {\n  margin: 45px;\n  text-align: center;\n  margin-top: 25px;\n  padding-left: 10px;\n  font-weight: bold;\n  font-size: 16px;\n}\n\nlabel {\n  padding-right: 20px;\n  padding-left: 16px;\n}\n\ninput {\n  font-size: 16px;\n  font-weight: normal;\n  background-color: #3F51B5;\n  border: none;\n  border-radius: 4px;\n  width: 180px;\n  height: 28px;\n  color: white;\n\n}\n\n#submit {\n  text-align: center;\n  margin: 40px;\n\n}\n\n#submit>button {\n  background-color: #3F51B5;\n  color: white;\n}\n\n.alert {\n  text-align: center;\n  color: red;\n  font-size: small;\n  margin: 0;\n}\n\n.submitbtn:disabled {\n  cursor: not-allowed;\n\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2FkbWluL2FkbWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUsaUJBQWlCOztFQUVqQixZQUFZO0VBQ1osV0FBVzs7RUFFWCxtQ0FBbUM7RUFDbkMsb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQiw4QkFBOEI7RUFDOUIsV0FBVztFQUNYLFVBQVU7Ozs7QUFJWjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osWUFBWTtFQUNaLFlBQVk7O0FBRWQ7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTs7QUFFZDs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxtQkFBbUI7O0FBRXJCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50L2FkbWluL2FkbWluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcblxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcblxuICBoZWlnaHQ6IGF1dG87XG4gIHdpZHRoOiBhdXRvO1xuXG4gIGJveC1zaGFkb3c6IDFweCAxcHggMnB4IDJweCAjODg4ODg4O1xuICBwYWRkaW5nLWJvdHRvbTogMjRweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCUsIDUwJSk7XG4gIGJvdHRvbTogNTAlO1xuICByaWdodDogNTAlO1xuXG5cblxufVxuXG4jdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIHBhZGRpbmc6IDI0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzRjUxQjU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuI3VzZXJuYW1lIHtcbiAgbWFyZ2luOiA0NXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuI3Bhc3N3b3JkIHtcbiAgbWFyZ2luOiA0NXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxubGFiZWwge1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG59XG5cbmlucHV0IHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0Y1MUI1O1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgd2lkdGg6IDE4MHB4O1xuICBoZWlnaHQ6IDI4cHg7XG4gIGNvbG9yOiB3aGl0ZTtcblxufVxuXG4jc3VibWl0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDQwcHg7XG5cbn1cblxuI3N1Ym1pdD5idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0Y1MUI1O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5hbGVydCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC1zaXplOiBzbWFsbDtcbiAgbWFyZ2luOiAwO1xufVxuXG4uc3VibWl0YnRuOmRpc2FibGVkIHtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcblxufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/component/admin/admin.component.ts": function srcAppComponentAdminAdminComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminComponent", function () {
      return AdminComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../data.service */
    "./src/app/data.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var AdminComponent = /*#__PURE__*/function () {
      function AdminComponent(dataService, router, fb) {
        _classCallCheck(this, AdminComponent);

        this.dataService = dataService;
        this.router = router;
        this.fb = fb;
        this.loginForm = this.fb.group({
          username: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
          password: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
      }

      _createClass(AdminComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "submit",
        value: function submit() {
          var _this4 = this;

          this.dataService.login(this.loginForm.value.username, this.loginForm.value.password).subscribe(function (res) {
            _this4.loginForm.reset();

            _this4.dataService.loggedIn = true;

            _this4.router.navigate(['add']);
          }, function (err) {
            return alert('User NOT found!');
          });
        }
      }]);

      return AdminComponent;
    }();

    AdminComponent.ctorParameters = function () {
      return [{
        type: _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
      }];
    };

    AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-admin',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./admin.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/component/admin/admin.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./admin.component.css */
      "./src/app/component/admin/admin.component.css"))["default"]]
    })], AdminComponent);
    /***/
  },

  /***/
  "./src/app/component/dashboard/dashboard.component.css": function srcAppComponentDashboardDashboardComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".footer {\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  background-color: #f5f5f5;\n  color: #b9bdc0;\n  text-align: center;\n  display: none;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZixPQUFPO0VBQ1AsU0FBUztFQUNULFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixhQUFhO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnQvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3RlciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbiAgY29sb3I6ICNiOWJkYzA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogbm9uZTtcbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/component/dashboard/dashboard.component.ts": function srcAppComponentDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var DashboardComponent = /*#__PURE__*/function () {
      function DashboardComponent() {
        _classCallCheck(this, DashboardComponent);

        this.isSticky = false;
        this.element = document.getElementById("header");
      }

      _createClass(DashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "backToTop",
        value: function backToTop() {
          this.element.scrollIntoView({
            behavior: "smooth"
          });
        }
      }]);

      return DashboardComponent;
    }();

    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-dashboard",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dashboard.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/component/dashboard/dashboard.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dashboard.component.css */
      "./src/app/component/dashboard/dashboard.component.css"))["default"]]
    })], DashboardComponent);
    /***/
  },

  /***/
  "./src/app/component/display/display.component.css": function srcAppComponentDisplayDisplayComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n\nthead{\n  \n  color: grey;\n  font-size: .85em;\n  letter-spacing: .1em;\n  text-transform: uppercase;\n}\n\n\n.activities:nth-child(odd) {\n  background-color: #f1f1f1;\n  \n}\n\n\n.leraningevents:nth-child(odd) {\n  background-color: #f1f1f1;\n \n}\n\n\n.sortable {\n  cursor: pointer;\n}\n\n\ndiv {\n  display:inline-block;\n  margin: 20px;\n  \n}\n\n\nbutton {\n  display:inline-block;\n  margin: 30px;\n  \n}\n\n\n.mat-select {\n  display: inline-block;\n  border: 1px solid #adadad;\n  width: 100%;\n  padding: 6px 2px;\n  margin-bottom: 0;\n  font-size: 12px;\n  font-weight: 100;\n  line-height: 1.1;\n  text-align: left;\n  vertical-align: middle;\n  cursor: pointer;\n  background-image: none;\n  border-radius: 4px;\n  \n  \n}\n\n\n::ng-deep .mat-form-field-underline {\n  display: none;\n}\n\n\n.mat-form-field {\n  font-size: 14px;\n  padding: 6px 2px;\n  text-align: center;\n  line-height: 2;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  color: grey;\n}\n\n\n.center {\n  margin-left: 10%;\n  margin-right: 10%;\n}\n\n\n.highlightText {\n  background: yellow;\n}\n\n\n/*************************************/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2Rpc3BsYXkvZGlzcGxheS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7O0VBRUUsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIseUJBQXlCO0FBQzNCOzs7QUFHQTtFQUNFLHlCQUF5Qjs7QUFFM0I7OztBQUVBO0VBQ0UseUJBQXlCOztBQUUzQjs7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOzs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixZQUFZOztBQUVkOzs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixZQUFZOztBQUVkOzs7QUFHQTtFQUNFLHFCQUFxQjtFQUNyQix5QkFBeUI7RUFDekIsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLGtCQUFrQjs7O0FBR3BCOzs7QUFDQTtFQUNFLGFBQWE7QUFDZjs7O0FBQ0E7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsaURBQWlEO0VBQ2pELFdBQVc7QUFDYjs7O0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COzs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7O0FBTUEsc0NBQXNDIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50L2Rpc3BsYXkvZGlzcGxheS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbnRoZWFke1xuICBcbiAgY29sb3I6IGdyZXk7XG4gIGZvbnQtc2l6ZTogLjg1ZW07XG4gIGxldHRlci1zcGFjaW5nOiAuMWVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG5cbi5hY3Rpdml0aWVzOm50aC1jaGlsZChvZGQpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcbiAgXG59XG5cbi5sZXJhbmluZ2V2ZW50czpudGgtY2hpbGQob2RkKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XG4gXG59XG5cbi5zb3J0YWJsZSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuZGl2IHtcbiAgZGlzcGxheTppbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMjBweDtcbiAgXG59XG5cbmJ1dHRvbiB7XG4gIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDMwcHg7XG4gIFxufVxuXG5cbi5tYXQtc2VsZWN0IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXI6IDFweCBzb2xpZCAjYWRhZGFkO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogNnB4IDJweDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogMTAwO1xuICBsaW5lLWhlaWdodDogMS4xO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgXG4gIFxufVxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xuICBkaXNwbGF5OiBub25lO1xufVxuLm1hdC1mb3JtLWZpZWxkIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBwYWRkaW5nOiA2cHggMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAyO1xuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiBncmV5O1xufVxuLmNlbnRlciB7XG4gIG1hcmdpbi1sZWZ0OiAxMCU7XG4gIG1hcmdpbi1yaWdodDogMTAlO1xufVxuXG4uaGlnaGxpZ2h0VGV4dCB7XG4gIGJhY2tncm91bmQ6IHllbGxvdztcbn1cblxuXG5cblxuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi8iXX0= */";
    /***/
  },

  /***/
  "./src/app/component/display/display.component.ts": function srcAppComponentDisplayDisplayComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DisplayComponent", function () {
      return DisplayComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../data.service */
    "./src/app/data.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var src_app_chart_helper_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/chart-helper.service */
    "./src/app/chart-helper.service.ts");

    var DisplayComponent = /*#__PURE__*/function () {
      function DisplayComponent(dataService, chartHelperService, router, snackbar, dialog, sanitizer) {
        var _this5 = this;

        _classCallCheck(this, DisplayComponent);

        this.dataService = dataService;
        this.chartHelperService = chartHelperService;
        this.router = router;
        this.snackbar = snackbar;
        this.dialog = dialog;
        this.sanitizer = sanitizer;
        this.dropdownList = []; //learning activities dropdown

        this.selectedActivityItems = []; //learning activities dropdown

        this.name = [];
        this.options = []; // learning events options

        this.optionsActivities = []; // learning Activities options

        this.AllActivities = []; // learning Activities options

        this.AllLearningEventsOptions = [];
        this.learningEvents = [];
        this.learningAct = [];
        this.isLoaded = false;
        this.LearningEvents_mateSelect = [];
        this.ind_list = [];
        this.mat_list = [];
        this.element = document.getElementById("header");

        this.getSelectedind = function (x) {
          if (x.length > 0) {
            var indicator = [];
            var data = x;
            data.forEach(function (element) {
              var o = _defineProperty({}, element.indicatorName, element.metrics.split(","));

              indicator.push(o); /// other properties and values
            }); // Convert the text to BLOB.

            var textToBLOB = new Blob([JSON.stringify({
              indicator: indicator
            })], {
              type: "application/json"
            });
            var sFileName = "indicators JSON.json"; // The file to save the data.

            var newLink = document.createElement("a");
            newLink.download = sFileName;

            if (window.webkitURL != null) {
              newLink.href = window.webkitURL.createObjectURL(textToBLOB);
            } else {
              newLink.href = window.URL.createObjectURL(textToBLOB);
              newLink.style.display = "none"; // document.body.appendChild(newLink);
            }

            newLink.click();
          } else {
            window.alert("No indicator is selected");
          }
        };
        /*
          This function pushes all selected indicators in an array
          and stores them in localStorage, so the drop down menu in the dashboard page can display the selected indicators even after refreshing the page
          We also store the "check" property in localStorage so the check marks stay checked when the user returns to the display component
          */


        this.forwardIndicators = function (x) {
          var indicators = [];
          var indicatorReferences = [];
          var selectedLearningEvents = [];
          var p = _this5.selectedevent;
          var regex = /\[[0-9]+\]/;

          var _iterator4 = _createForOfIteratorHelper(_this5.ind_list),
              _step4;

          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
              var ind = _step4.value;

              //console.log(this.ind_list);
              //console.log(this.options);
              if (!indicators.includes(ind)) {
                indicatorReferences.push(ind.match(regex)[0]);
                indicators.push(ind);
              }
            } //this.chartHelperService.setSettings("selectedLearningEvents", selectedLearningEvents);

          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }

          _this5.chartHelperService.setSettings("selectedIndicators", indicators);

          _this5.chartHelperService.setSettings("referenceNumbers", indicatorReferences);

          if (indicators.length > 0) {
            var eventList = _this5.data.filter(function (obj) {
              return p.includes(obj.LearningEvents);
            });

            localStorage.setItem("check", JSON.stringify(eventList));

            _this5.router.navigate(["/dashboard"]);
          } else {
            window.alert("No indicator is selected");
          }
        };
      }

      _createClass(DisplayComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.fetchdata();
          this.loadScript();
          this.dropdownSettings = {
            singleSelection: false,
            idField: "item_id",
            textField: "item_text",
            selectAllText: "Select All",
            unSelectAllText: "UnSelect All",
            itemsShowLimit: 3,
            allowSearchFilter: true
          };
        } // function of fetching data from database

      }, {
        key: "fetchdata",
        value: function fetchdata() {
          var _this6 = this;

          //console.log("fetchdata: ");
          this.dataService.getdata().subscribe(function (data) {
            _this6.data = data; /// complete data present in database

            var allEventActivities = data; //for pushing all the activities under selected events that are not selected Mainly for maintaing history

            var _iterator5 = _createForOfIteratorHelper(_this6.data),
                _step5;

            try {
              for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                var val = _step5.value;

                //retrive all learning events and PUSH all to the Dropdown and below I PUSH only those WAS checked before going to Dashboard
                _this6.AllLearningEventsOptions.push(val["LearningEvents"]); //here it pushes all the Events

              }
            } catch (err) {
              _iterator5.e(err);
            } finally {
              _iterator5.f();
            }

            if (!localStorage.getItem("check")) {
              //retrive all learning Activities and PUSH all to the Dropdown for the first time
              var eventCount = Object.keys(_this6.data).length;

              for (var k = 0; k < eventCount; k++) {
                var activitiesCount = Object.keys(_this6.data[k].LearningActivities).length;

                for (var l = 0; l < activitiesCount; l++) {
                  _this6.AllActivities.push(_this6.data[k].LearningActivities[l].Name);
                }
              }
            }

            _this6.isLoaded = true; //After the data is fetched, we check if the localStorage contains the check property (this is to retain the checkbox state)

            if (localStorage.getItem("check")) {
              //console.log("localStorage.getItem(): ", localStorage.getItem("check"));
              //Parse the data with the check property and loop through the indicators and see if the checked property is true
              //If it's true we push it to the ind_list and mat_list, so the selected indicators from before are displayed at the top
              _this6.data = JSON.parse(localStorage.getItem("check"));

              for (var i = 0; i < _this6.data.length; i++) {
                for (var j = 0; j < _this6.data[i]["LearningActivities"].length; j++) {
                  //console.log(data[i]["LearningActivities"][j]["indicator"]);
                  for (var _k = 0; _k < _this6.data[i]["LearningActivities"][j]["indicator"].length; _k++) {
                    if (_this6.data[i]["LearningActivities"][j]["indicator"][_k].checked) {
                      _this6.ind_list.push(_this6.data[i]["LearningActivities"][j]["indicator"][_k]["indicatorName"]);

                      _this6.mat_list.push(_this6.data[i]["LearningActivities"][j]["indicator"][_k]);
                    }
                  }
                }
              } // }
              // if (localStorage.getItem("check"))
              // {
              //to retrive the Checked learningEvents after coming from the Dashboard


              var _iterator6 = _createForOfIteratorHelper(_this6.data),
                  _step6;

              try {
                for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                  var val = _step6.value;

                  _this6.options.push(val["LearningEvents"]);
                }
              } catch (err) {
                _iterator6.e(err);
              } finally {
                _iterator6.f();
              }

              var _eventCount = Object.keys(_this6.data).length; //let activitiesCount = Object.keys(this.data.LearningActivities).length;
              //to retrive the Checked learningActivities after coming from the Dashboard

              for (var _k2 = 0; _k2 < _eventCount; _k2++) {
                var _activitiesCount = Object.keys(_this6.data[_k2].LearningActivities).length;

                for (var _l = 0; _l < _activitiesCount; _l++) {
                  _this6.optionsActivities.push(_this6.data[_k2].LearningActivities[_l].Name);
                }
              }

              _this6.LearningEvents_mateSelect = _this6.options; //to retain the current and previous state

              _this6.selectedevent = _this6.options; // to keep the object filled becasue people can select Activity instead of Event first

              var op = _this6.options;
              var otherActivities = allEventActivities.filter(function (obj) {
                return op.includes(obj.LearningEvents);
              }); // let Count = Object.keys(otherActivities).length;
              //   for (let k = 0; k < Count; k++) {
              //     let activityCount = Object.keys(otherActivities[k].LearningActivities).length;
              //     for (let l = 0; l < activityCount; l++) {
              //       this.AllActivities.push(otherActivities[k].LearningActivities[l].Name);
              //     }
              //   }

              _this6.setLearningActivities(otherActivities); //this will run for pushing all activities (into the LA Dropdown) under SelectedEvents for maintaining the history otherwise the else will run


              _this6.selectedActivityItems = _this6.optionsActivities; // first the DD will be populated with activities then these will be selected
            } else {
              _this6.setLearningActivities(_this6.data);

              _this6.LearningEvents_mateSelect = _this6.AllLearningEventsOptions; // to keep the object filled becasue people can select Activity instead of Event first

              _this6.selectedevent = _this6.AllLearningEventsOptions;
              _this6.selectedActivityItems = _this6.AllActivities;
            }
          });
        }
      }, {
        key: "onEventValueChange",
        value: function onEventValueChange(eventValue) {
          var _this7 = this;

          this.selectedevent = eventValue; //console.log("onEventValueChange:", p);

          this.ind_list = []; //empty the seleted list of indicators after event an Event change

          this.selectedActivityItems = []; //empty the seleted list of Activities after event change

          this.searchInd = ""; //empty

          this.searchMat = ""; //empty

          this.dataService.getdata().subscribe(function (data) {
            _this7.data = data; //console.log("data: ", this.data);
            //  if (localStorage.getItem("check")) {this.data = JSON.parse(localStorage.getItem("check"));
            //console.log("localStorage.inside: ", JSON.parse(localStorage.getItem("check")));//  }

            _this7.isLoaded = true; //if (eventValue == "Select All") { } else {

            var event = _this7.data.filter(function (obj) {
              //console.log("inside else: ", obj.LearningEvents);
              return eventValue.includes(obj.LearningEvents);
            });

            _this7.setLearningActivities(event); //to update the DD of LA


            if (eventValue != "") {
              _this7.data = event; //console.log("inside p IF: ", event);
            } //}

          });
        } /////////////// function for learning activities selection /////////////

      }, {
        key: "onActivitySelect",
        value: function onActivitySelect(item) {
          var _this8 = this;

          var p = this.selectedevent;
          this.ind_list = []; //empty the seleted list of indicators after event an Event change

          this.searchInd = ""; //empty

          this.searchMat = ""; //empty
          //console.log("item: ", item);
          //console.log("this.selectedevent: ", p);

          this.dataService.getdata().subscribe(function (data) {
            _this8.data = data; //console.log("onActivitySelect: ", p);

            _this8.isLoaded = true;

            var event = _this8.data.filter(function (obj) {
              return p.includes(obj.LearningEvents);
            });

            _this8.setLearningActivities(event); //console.log("onActivitySelect event: ", event);


            if (p != "") {
              _this8.data = event;
            }

            var newArray = _this8.selectedActivityItems;

            _this8.data.filter(function (obj) {
              obj.LearningActivities = obj.LearningActivities.filter(function (obj2) {
                return newArray.includes(obj2.Name);
              });
            });
          });
        }
      }, {
        key: "onSelectAll",
        value: function onSelectAll(items) {
          this.onActivitySelect(items); //console.log("onSelectAll: ", items);
          //console.log("onSelectAll: ", this.selectedItems);
          // this.onActivitySelect(items);
        }
      }, {
        key: "checkvalue",
        value: function checkvalue(event) {
          if (this.selectedActivityItems.length == 0) {//this.onEventValueChange(this.selectedevent);
          } else {
            var index = this.selectedActivityItems.length;

            if (index !== -1) {
              this.selectedActivityItems.splice(index, 1);
              this.onActivitySelect(this.selectedActivityItems);
            }
          }
        } /////////////// display learning activities ////////////////////

      }, {
        key: "setLearningActivities",
        value: function setLearningActivities(events) {
          //console.log("setLearningActivities event: ", events);
          this.dropdownList = [];
          this.name = [];

          var _iterator7 = _createForOfIteratorHelper(events),
              _step7;

          try {
            for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
              var learningEvent = _step7.value;

              //console.log("setLearningActivities learningEvents: ", learningEvents);
              var _iterator8 = _createForOfIteratorHelper(learningEvent.LearningActivities),
                  _step8;

              try {
                for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
                  var entry = _step8.value;
                  //console.log("setLearningActivities - entry- learningEvents.LearningActivities", entry);
                  this.dropdownList.push(entry.Name);

                  var _iterator9 = _createForOfIteratorHelper(entry.indicator),
                      _step9;

                  try {
                    for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
                      var ind1 = _step9.value;
                      this.name.push(ind1.metrics);
                    }
                  } catch (err) {
                    _iterator9.e(err);
                  } finally {
                    _iterator9.f();
                  }
                }
              } catch (err) {
                _iterator8.e(err);
              } finally {
                _iterator8.f();
              }
            }
          } catch (err) {
            _iterator7.e(err);
          } finally {
            _iterator7.f();
          }
        } ////////////////pop up by click Indicator to show meterics ///////////

      }, {
        key: "getMeterics",
        value: function getMeterics(indic) {
          this.mat = indic.metrics;
          var res = this.mat;
          this.sp = res.split(",");
          this.dialog.open(this.secondDialog);
        } ///////////////////   search by indicator ///////////////

      }, {
        key: "searchIndicator",
        value: function searchIndicator(search) {
          var _this9 = this;

          if (search || search == '') {
            if (this.selectedevent) {
              this.dataService.getsearchind(search).subscribe(function (data) {
                var op = _this9.selectedevent;
                var filterNonSelEvents = data.filter(function (obj) {
                  return op.includes(obj.LearningEvents);
                });
                _this9.data = filterNonSelEvents;
              });
            } else {
              this.dataService.getsearchind(search).subscribe(function (data) {
                _this9.data = data;
              });
            }
          } else {
            console.log("searchIndicator: ");
          }
        } ///////////////////   search by metrics ///////////////

      }, {
        key: "learningEventsChangeOnSearch",
        value: function learningEventsChangeOnSearch(search) {
          var _this10 = this;

          // if (search) {
          //   this.dataService.getsearchresult(search).subscribe((data: data[]) => {
          //     this.data = data;
          //   });
          // } else {
          //   console.log("learningEventsChangeOnSearch: ");
          //  // this.fetchdata();
          // }
          if (search || search == '') {
            if (this.selectedevent) {
              this.dataService.getsearchresult(search).subscribe(function (data) {
                var op = _this10.selectedevent;
                var filterNonSelEvents = data.filter(function (obj) {
                  return op.includes(obj.LearningEvents);
                });
                _this10.data = filterNonSelEvents;
              });
            } else {
              this.dataService.getsearchresult(search).subscribe(function (data) {
                _this10.data = data;
              });
            }
          } else {
            console.log("searchMatrics: ");
          }
        } ////////////////// function for checkbox to select indicator   //////////////////

      }, {
        key: "Checkbox",
        value: function Checkbox(event, selectInd) {
          this.ind = selectInd.indicatorName;
          this.met = selectInd; //console.log("CheckboxFun event", event);
          //console.log("CheckboxFun selectInd", selectInd);

          if (event.target.checked) {
            //Set the checked property to true and store it in localStorage so the checkboxes stay checked after reload
            selectInd.checked = true;
            localStorage.setItem("check", JSON.stringify(this.data));
            this.ind_list.push(this.ind);
            this.mat_list.push(this.met);
          } else {
            var index = this.ind_list.indexOf(this.ind); //Set checked to false and reset the localStorage values to keep it updated

            selectInd.checked = false;
            localStorage.setItem("check", JSON.stringify(this.data));
            var index1 = this.mat_list.indexOf(this.met);

            if (index !== -1) {
              this.ind_list.splice(index, 1);
              this.mat_list.splice(index1, 1);
            }
          }
        }
      }, {
        key: "download",
        value: function download(sList, mimeType, filename) {
          if (sList.length > 0) {
            var myFunction = function myFunction(item, index) {
              content += index + 1 + " Indicator Name: " + item.indicatorName + "\n\t" + "Metrics: " + item.metrics + "\n\n";
              console.log(item.indicatorName + item.metrics);
            };

            var content = "";
            var data = sList;
            data.forEach(myFunction);
            var a = document.createElement('a');
            var blob = new Blob([content], {
              type: mimeType
            });
            var url = URL.createObjectURL(blob);
            a.setAttribute('href', url);
            a.setAttribute('download', filename);
            a.click();
          } else {
            window.alert("No indicator is selected");
          }
        }
      }, {
        key: "reset",
        value: function reset() {
          this.ind_list = [];
          this.mat_list = []; //When the user presses the reset-button the "checked" property of the indicators have to be set to false and the check property in the localstorage is removed

          for (var i = 0; i < this.data.length; i++) {
            for (var j = 0; j < this.data[i]["LearningActivities"].length; j++) {
              //  console.log(data[i]["LearningActivities"][j]["indicator"]);
              for (var k = 0; k < this.data[i]["LearningActivities"][j]["indicator"].length; k++) {
                this.data[i]["LearningActivities"][j]["indicator"][k].checked = false;
              }
            }
          }

          localStorage.removeItem("check");
          this.uncheckAll(); // this.router.navigate(['./display/data']);
          // location.reload();

          location.href = "/";
        }
      }, {
        key: "backToTop",
        value: function backToTop() {
          this.element.scrollIntoView({
            behavior: "smooth"
          });
        } //will solve the issue of comming back from another page

      }, {
        key: "loadScript",
        value: function loadScript() {
          var node = document.createElement("script"); // create script tag

          node.src = "assets/js/tooltipJS.js"; // set source

          node.type = "text/javascript";
          node.async = true; // makes script run asynchronously

          node.charset = "utf-8"; // append to head of document

          document.getElementsByTagName("head")[0].appendChild(node);
        }
      }, {
        key: "uncheckAll",
        value: function uncheckAll() {
          this.indicatorCheckboxs.forEach(function (element) {
            element.nativeElement.checked = false;
          });
        }
      }]);

      return DisplayComponent;
    }();

    DisplayComponent.ctorParameters = function () {
      return [{
        type: _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]
      }, {
        type: src_app_chart_helper_service__WEBPACK_IMPORTED_MODULE_7__["ChartHelperService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]
      }, {
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("secondDialog", {
      "static": true
    })], DisplayComponent.prototype, "secondDialog", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])("indicatorCheckbox")], DisplayComponent.prototype, "indicatorCheckboxs", void 0);
    DisplayComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-display",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./display.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/component/display/display.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./display.component.css */
      "./src/app/component/display/display.component.css"))["default"]]
    })], DisplayComponent);
    /***/
  },

  /***/
  "./src/app/component/display/filter.pipe.ts": function srcAppComponentDisplayFilterPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SanitizeHtmlPipe", function () {
      return SanitizeHtmlPipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");

    var SanitizeHtmlPipe = /*#__PURE__*/function () {
      function SanitizeHtmlPipe(_sanitizer) {
        _classCallCheck(this, SanitizeHtmlPipe);

        this._sanitizer = _sanitizer;
      }

      _createClass(SanitizeHtmlPipe, [{
        key: "transform",
        value: function transform(text, search) {
          if (search && text) {
            var pattern = search.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
            pattern = pattern.split(' ').filter(function (t) {
              return t.length > 0;
            }).join(' ');
            var regex = new RegExp(pattern, 'gi');
            return this._sanitizer.bypassSecurityTrustHtml(text.replace(regex, function (match) {
              return "<span style=\"background-color: yellow;\">".concat(match, "</span>");
            }));
          } else {
            return text;
          }
        }
      }]);

      return SanitizeHtmlPipe;
    }();

    SanitizeHtmlPipe.ctorParameters = function () {
      return [{
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]
      }];
    };

    SanitizeHtmlPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'sanitizeHtml'
    })], SanitizeHtmlPipe);
    /***/
  },

  /***/
  "./src/app/component/display/select-check-all.component.ts": function srcAppComponentDisplaySelectCheckAllComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SelectCheckAllComponent", function () {
      return SelectCheckAllComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SelectCheckAllComponent = /*#__PURE__*/function () {
      function SelectCheckAllComponent() {
        _classCallCheck(this, SelectCheckAllComponent);

        this.values = [];
        this.text = 'Select All';
        this.sendCount = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(SelectCheckAllComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {// this.model.update.emit(this.values);
        }
      }, {
        key: "isChecked",
        value: function isChecked() {
          return this.model.value && this.values.length && this.model.value.length === this.values.length;
        }
      }, {
        key: "isIndeterminate",
        value: function isIndeterminate() {
          return this.model.value && this.values.length && this.model.value.length && this.model.value.length < this.values.length;
        }
      }, {
        key: "toggleSelection",
        value: function toggleSelection(change) {
          if (change.checked) {
            this.model.update.emit(this.values);
            this.sendCount.emit(this.values);
          } else {
            this.model.update.emit([]);
            this.sendCount.emit(this.values);
          }
        }
      }]);

      return SelectCheckAllComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SelectCheckAllComponent.prototype, "model", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SelectCheckAllComponent.prototype, "values", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SelectCheckAllComponent.prototype, "text", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], SelectCheckAllComponent.prototype, "sendCount", void 0);
    SelectCheckAllComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-select-check-all',
      template: "\n    <mat-checkbox class=\"mat-option\"\n                [disableRipple]=\"true\"\n                [indeterminate]=\"isIndeterminate()\"\n                [checked]=\"isChecked()\"\n                (click)=\"$event.stopPropagation()\"\n                (change)=\"toggleSelection($event)\"\n                >\n      {{text}}\n    </mat-checkbox>\n  ",
      styles: [""]
    })], SelectCheckAllComponent);
    /***/
  },

  /***/
  "./src/app/component/dropdown/dropdown.component.css": function srcAppComponentDropdownDropdownComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9kcm9wZG93bi9kcm9wZG93bi5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/component/dropdown/dropdown.component.ts": function srcAppComponentDropdownDropdownComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DropdownComponent", function () {
      return DropdownComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var DropdownComponent = /*#__PURE__*/function () {
      function DropdownComponent(fb) {
        _classCallCheck(this, DropdownComponent);

        this.fb = fb;
        this.learningevents = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.learningEvents = [];
        this.values = [];
        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.text = 'Select All';
      }

      _createClass(DropdownComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.setLearningEvent();
        }
      }, {
        key: "setLearningEvent",
        value: function setLearningEvent() {}
      }, {
        key: "changeLearningEvents",
        value: function changeLearningEvents(event, state) {
          this.valueChange.emit(state);
        }
      }]);

      return DropdownComponent;
    }();

    DropdownComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DropdownComponent.prototype, "model", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DropdownComponent.prototype, "values", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], DropdownComponent.prototype, "valueChange", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DropdownComponent.prototype, "text", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('allSelected', {
      "static": false
    })], DropdownComponent.prototype, "allSelected", void 0);
    DropdownComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-dropdown",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dropdown.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/component/dropdown/dropdown.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dropdown.component.css */
      "./src/app/component/dropdown/dropdown.component.css"))["default"]]
    })], DropdownComponent);
    /***/
  },

  /***/
  "./src/app/component/header/header.component.css": function srcAppComponentHeaderHeaderComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".example-spacer {\n    flex: 1 1 auto;\n  }\n  \n  .HeaderLogo {\n    cursor: pointer;\n  }\n  \n  .buttonHead {\n  padding: 13px 26px;\n  text-align: center;\n  transition: 1s;\n  background-size: 1051% auto;\n  color: white;\n  border-radius: 4px;\n  display: inline-block;\n  border: 0px;\n  background-image: linear-gradient(45deg, #3f51b5 10%, #a1bcde 51%, #3f51b5 100%);\n  cursor: pointer;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  -webkit-user-select: none;\n  touch-action: manipulation;\n  font-size: 15px;\n}\n  \n  .buttonHead:hover {\n  background-position: right center;\n  /* change the direction of the change here */\n  color: #fff;\n  text-decoration: none;\n}\n  \n  .buttonHead:active {\n  transform: scale(0.80);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUdGO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsMkJBQTJCO0VBQzNCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxnRkFBZ0Y7RUFDaEYsZUFBZTtFQUNmLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QiwwQkFBMEI7RUFDMUIsZUFBZTtBQUNqQjs7RUFFQTtFQUNFLGlDQUFpQztFQUNqQyw0Q0FBNEM7RUFDNUMsV0FBVztFQUNYLHFCQUFxQjtBQUN2Qjs7RUFFQTtFQUNFLHNCQUFzQjtBQUN4QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1zcGFjZXIge1xuICAgIGZsZXg6IDEgMSBhdXRvO1xuICB9XG4gIFxuICAuSGVhZGVyTG9nbyB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5cblxuLmJ1dHRvbkhlYWQge1xuICBwYWRkaW5nOiAxM3B4IDI2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdHJhbnNpdGlvbjogMXM7XG4gIGJhY2tncm91bmQtc2l6ZTogMTA1MSUgYXV0bztcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyOiAwcHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgIzNmNTFiNSAxMCUsICNhMWJjZGUgNTElLCAjM2Y1MWI1IDEwMCUpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xuICBmb250LXNpemU6IDE1cHg7XG59XG5cbi5idXR0b25IZWFkOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgY2VudGVyO1xuICAvKiBjaGFuZ2UgdGhlIGRpcmVjdGlvbiBvZiB0aGUgY2hhbmdlIGhlcmUgKi9cbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmJ1dHRvbkhlYWQ6YWN0aXZlIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjgwKTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/component/header/header.component.ts": function srcAppComponentHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../data.service */
    "./src/app/data.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent(dataService, router) {
        _classCallCheck(this, HeaderComponent);

        this.dataService = dataService;
        this.router = router;
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "addIndicators",
        value: function addIndicators() {
          this.router.navigate(['/add']); //this.router.navigate([]).then(result => {  window.open( `/referance`, '_blank'); });
        }
      }, {
        key: "references",
        value: function references() {
          this.router.navigate(['/reference']); //this.router.navigate([]).then(result => {  window.open( `/referance`, '_blank'); });
        }
      }, {
        key: "admin",
        value: function admin() {
          this.router.navigate(['/login']);
        }
      }, {
        key: "metrics",
        value: function metrics() {
          // this.router.navigate(['/referance'] );
          this.router.navigate([]).then(function (result) {
            window.open("/metrics", '_blank');
          });
        }
      }, {
        key: "reset",
        value: function reset() {
          location.href = "/";
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ctorParameters = function () {
      return [{
        type: _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-header',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/component/header/header.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./header.component.css */
      "./src/app/component/header/header.component.css"))["default"]]
    })], HeaderComponent);
    /***/
  },

  /***/
  "./src/app/component/reference/referance.component.css": function srcAppComponentReferenceReferanceComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9yZWZlcmVuY2UvcmVmZXJhbmNlLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/component/reference/referance.component.ts": function srcAppComponentReferenceReferanceComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReferanceComponent", function () {
      return ReferanceComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ReferanceComponent = /*#__PURE__*/function () {
      function ReferanceComponent() {
        _classCallCheck(this, ReferanceComponent);

        this.element = document.getElementById("header");
      }

      _createClass(ReferanceComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "backToTop",
        value: function backToTop() {
          this.element.scrollIntoView({
            behavior: "smooth"
          });
        }
      }]);

      return ReferanceComponent;
    }();

    ReferanceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-referance",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./referance.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/component/reference/referance.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./referance.component.css */
      "./src/app/component/reference/referance.component.css"))["default"]]
    })], ReferanceComponent);
    /***/
  },

  /***/
  "./src/app/data.service.ts": function srcAppDataServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataService", function () {
      return DataService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var DataService = /*#__PURE__*/function () {
      //68.65.123.130    OLD
      //198.187.29.73
      function DataService(http) {
        _classCallCheck(this, DataService);

        this.http = http; //uri = 'https://programmingzen.org/openlair';
        //uri = 'https://backend.openlair.edutec.science/openlair'; //live
        //uri = 'http://localhost:49160/openlair';

        this.uri = 'http://localhost:3001/openlair'; //local
        //this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        //this.currentUser = this.currentUserSubject.asObservable();
      }

      _createClass(DataService, [{
        key: "getdata",
        value: function getdata() {
          return this.http.get("".concat(this.uri, "/display/data"));
        }
      }, {
        key: "getsearchresult",
        value: function getsearchresult(search) {
          var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'text/plain'
            })
          };
          return this.http.post("".concat(this.uri, "/getsearchmetrics"), {
            search: search,
            httpOptions: httpOptions
          });
        }
      }, {
        key: "getsearchind",
        value: function getsearchind(search) {
          var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'text/plain'
            })
          };
          return this.http.post("".concat(this.uri, "/getsearchindicator"), {
            search: search,
            httpOptions: httpOptions
          });
        }
      }, {
        key: "addData",
        value: function addData(LearningEvents, LearningActivities, indicator) {
          var data1 = {
            LearningEvents: LearningEvents,
            LearningActivities: {
              Name: LearningActivities,
              indicator: indicator
            }
          };
          console.log("addData:", data1);
          return this.http.post("".concat(this.uri, "/add/data"), data1);
        } //public get currentUserValue(): User {
        //return this.currentUserSubject.value;
        //}

      }, {
        key: "login",
        value: function login(username, password) {
          console.log(username);
          var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'text/plain'
            })
          };
          return this.http.post("".concat(this.uri, "/login"), {
            username: username,
            password: password,
            httpOptions: httpOptions
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (user) {
            // store user details and basic auth credentials in local storage to keep user logged in between page refreshes
            //user.authdata = window.btoa(username + ':' + password);
            //this.currentUserSubject.next(user);
            localStorage.setItem('currentUser', JSON.stringify(user)); //return user;
          }));
        }
      }, {
        key: "isLoggedIn",
        value: function isLoggedIn() {
          return this.loggedIn;
        }
      }, {
        key: "getActivities",
        value: function getActivities(searchAct) {
          var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'text/plain'
            })
          };
          return this.http.post("".concat(this.uri, "/getActivities"), {
            searchAct: searchAct,
            httpOptions: httpOptions
          });
        }
      }, {
        key: "upload",
        value: function upload(file) {
          var formData = new FormData();
          formData.append('file', file, file.name);
          return this.http.post("".concat(this.uri, "/upload"), formData);
        }
      }]);

      return DataService;
    }();

    DataService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], DataService);
    /***/
  },

  /***/
  "./src/environments/environment.ts": function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts": function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0: function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\OpenLAIR_Docker\frontend\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map