import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AngularFontAwesomeModule } from "angular-font-awesome";

import {
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatDialogModule,
  MatSnackBarModule,
  MatSelectModule,
  MatCheckboxModule,
} from "@angular/material";

import { NgMultiSelectDropDownModule } from "ng-multiselect-dropdown";
import { HighchartsChartModule } from "highcharts-angular";
import { AngularMultiSelectModule } from "angular2-multiselect-dropdown";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AddDataComponent } from "./component/add-data/add-data.component";
import { HeaderComponent } from "./component/header/header.component";
import { SanitizeHtmlPipe } from "./component/display/filter.pipe";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { DataService } from "./data.service";
import { DisplayComponent } from "./component/display/display.component";
import { DropdownComponent } from "./component/dropdown/dropdown.component";
import { ReferanceComponent } from "./component/reference/referance.component";
import { SelectCheckAllComponent } from "./component/display/select-check-all.component";
import { AuthGuardService } from "./auth-guard.service";
import { DashboardComponent } from "./component/dashboard/dashboard.component";
import { ChartManagerComponent } from "./chart-manager/chart-manager.component";
import { StudentInteractionPatternsComponent } from "./charts/student-interaction-patterns/student-interaction-patterns.component";
import { CompetencyComponent } from "./charts/competency/competency.component";
import { ChartHelperService } from "./chart-helper.service";
import { ReadingAnalyticsComponent } from "./charts/reading-analytics/reading-analytics.component";
import { VideoAnalyticsComponent } from "./charts/video-analytics/video-analytics.component";
import { LearningProgressComponent } from "./charts/learning-progress/learning-progress.component";
import { WritingAnalyticsComponent } from "./charts/writing-analytics/writing-analytics.component";
import { DiscussionQualityComponent } from "./charts/discussion-quality/discussion-quality.component";
import { ClickstreamAnalysisComponent } from "./charts/clickstream-analysis/clickstream-analysis.component";
import { VideoEngagementsComponent } from "./charts/video-engagements/video-engagements.component";
import { InitiativeComponent } from "./charts/initiative/initiative.component";
import { SocialAnalysisComponent } from "./charts/social-analysis/social-analysis.component";
import { DroppingoutComponent } from "./charts/droppingout/droppingout.component";
import { TimeDistributionComponent } from "./charts/time-distribution/time-distribution.component";
import { TimePlanningComponent } from "./charts/time-planning/time-planning.component";
import { StudentComparisonComponent } from "./charts/student-comparison/student-comparison.component";
import { EngagementPerformanceComponent } from "./charts/engagement-performance/engagement-performance.component";
import { OnlineChangeDetectionComponent } from "./charts/online-change-detection/online-change-detection.component";
import { GamificationComponent } from "./charts/gamification/gamification.component";
import { PredictCoursecompletionComponent } from "./charts/predict-coursecompletion/predict-coursecompletion.component";
import { ProcrastinationComponent } from "./charts/procrastination/procrastination.component";
import { GroupParticipationComponent } from "./charts/group-participation/group-participation.component";
import { ClusteringComponent } from "./charts/clustering/clustering.component";
import { PredictExamSuccessComponent } from "./charts/predict-exam-success/predict-exam-success.component";
import { FinalGradePredictionComponent } from "./charts/final-grade-prediction/final-grade-prediction.component";
import { LearningBehaviourComponent } from "./charts/learning-behaviour/learning-behaviour.component";
import { SocialNetworkAnalysisComponent } from "./charts/social-network-analysis/social-network-analysis.component";
import { SelfMotivationComponent } from "./charts/self-motivation/self-motivation.component";
import { LearningBehaviorPatternsComponent } from "./charts/learning-behavior-patterns/learning-behavior-patterns.component";
import { PassingRatePredictionComponent } from "./charts/passing-rate-prediction/passing-rate-prediction.component";
import { FeedbackComponent } from "./charts/feedback/feedback.component";
import { CourseAssessmentComponent } from "./charts/course-assessment/course-assessment.component";
import { AffectiveStateComponent } from "./charts/affective-state/affective-state.component";
import { CourseDifficultyComponent } from "./charts/course-difficulty/course-difficulty.component";
import { CurriculumUsageComponent } from "./charts/curriculum-usage/curriculum-usage.component";
import { PresentationSkillsComponent } from "./charts/presentation-skills/presentation-skills.component";
import { AdminComponent } from "./component/admin/admin.component";

// const routes: Routes = [
//   { path: "add", component: AddDataComponent, canActivate: [AuthGuardService]},
//   { path: "reference", component: ReferanceComponent },
//   { path: "login", component: AdminComponent },
//   { path: "dashboard", component: DashboardComponent },
//   { path: "display/data", component: DisplayComponent },
//   { path: "", redirectTo: "display/data", pathMatch: "full" },
//   //{ path: "add/data", redirectTo: "add/data", pathMatch: "full" },
// ];
@NgModule({
  declarations: [
    AppComponent,
    AddDataComponent,
    HeaderComponent,
    DisplayComponent,
    SanitizeHtmlPipe,
    DropdownComponent,
    SelectCheckAllComponent,
    ReferanceComponent,
    AdminComponent,
    DashboardComponent,
    ChartManagerComponent,
    StudentInteractionPatternsComponent,
    CompetencyComponent,
    ReadingAnalyticsComponent,
    VideoAnalyticsComponent,
    LearningProgressComponent,
    WritingAnalyticsComponent,
    DiscussionQualityComponent,
    ClickstreamAnalysisComponent,
    VideoEngagementsComponent,
    InitiativeComponent,
    SocialAnalysisComponent,
    DroppingoutComponent,
    TimeDistributionComponent,
    TimePlanningComponent,
    StudentComparisonComponent,
    EngagementPerformanceComponent,
    OnlineChangeDetectionComponent,
    GamificationComponent,
    PredictCoursecompletionComponent,
    ProcrastinationComponent,
    GroupParticipationComponent,
    ClusteringComponent,
    PredictExamSuccessComponent,
    FinalGradePredictionComponent,
    LearningBehaviourComponent,
    SocialNetworkAnalysisComponent,
    SelfMotivationComponent,
    LearningBehaviorPatternsComponent,
    PassingRatePredictionComponent,
    FeedbackComponent,
    CourseAssessmentComponent,
    AffectiveStateComponent,
    CourseDifficultyComponent,
    CurriculumUsageComponent,
    PresentationSkillsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    //RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    HttpClientModule,
    MatDialogModule,
    MatSnackBarModule,
    NgMultiSelectDropDownModule,
    MatSelectModule,
    AngularMultiSelectModule,
    MatCheckboxModule,
    AngularFontAwesomeModule,
    HighchartsChartModule,
  ],

  providers: [DataService, AuthGuardService, ChartHelperService],

  bootstrap: [AppComponent],
})
export class AppModule {}
