import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { ButtonModule } from 'primeng/button';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { EditionComponent } from './edition/edition.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditorService } from './service/editor-service.service';
import { SideBarComponent } from './side-bar/side-bar.component';
import { HeaderComponent } from './header/header.component';
import { MonitoringComponent } from './monitoring/monitoring.component';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpService } from './service/http.service';
import { ShowEditorComponent } from './show-editor/show-editor.component';
import { APP_ROUTES } from './app.routes';
import { StatisticComponent } from './statistic/statistic.component';
import { ReeditionComponent } from './reedition/reedition.component';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { ReactiveFormsModule } from '@angular/forms';
import { InputSwitchModule } from 'primeng/inputswitch';

@NgModule({
  declarations: [
    AppComponent,
    EditionComponent,
    SideBarComponent,
    HeaderComponent,
    MonitoringComponent,
    ShowEditorComponent,
    StatisticComponent,
    ReeditionComponent
  ],
  imports: [
    APP_ROUTES,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CalendarModule,
    ButtonModule,
    MessageModule,
    MessagesModule,
    CardModule,
    DropdownModule,
    TableModule,
    ToggleButtonModule,
    BrowserAnimationsModule,
    ProgressSpinnerModule,
    HttpClientModule,
    ReactiveFormsModule,
    InputSwitchModule
  ],
  providers: [
    EditorService,
    HttpService,
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
