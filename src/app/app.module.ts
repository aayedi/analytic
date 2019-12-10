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

@NgModule({
  declarations: [
    AppComponent,
    EditionComponent,
    SideBarComponent,
    HeaderComponent,
    MonitoringComponent
  ],
  imports: [
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
    BrowserAnimationsModule
  ],
  providers: [EditorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
