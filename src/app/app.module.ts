import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RatingCartComponent } from './rating-cart/rating-cart.component';
import { ImgCartComponent } from './img-cart/img-cart.component';
import { FollowerGrowthChartComponent } from './follower-growth-chart/follower-growth-chart.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ReachChartComponent } from './reach-chart/reach-chart.component';
import { LikeCommentChartComponent } from './like-comment-chart/like-comment-chart.component';
import { LikeHistoryComponent } from './like-history/like-history.component';
import { PostingHabitsComponent } from './posting-habits/posting-habits.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    RatingCartComponent,
    ImgCartComponent,
    FollowerGrowthChartComponent,
    ReachChartComponent,
    LikeCommentChartComponent,
    LikeHistoryComponent,
    PostingHabitsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FontAwesomeModule,
    NgApexchartsModule,
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
