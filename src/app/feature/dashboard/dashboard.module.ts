import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ChartComponent } from './components/chart/chart.component';
import { DeleteComponent } from './components/delete/delete.component';

@NgModule({
  declarations: [
    DashboardComponent,
    HomeComponent,
    NavbarComponent,
    SidebarComponent,
    ChartComponent,
    DeleteComponent,
  ],
  imports: [CommonModule, DashboardRoutingModule, SharedModule],
})
export class DashboardModule {}
