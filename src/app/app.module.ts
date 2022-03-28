import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlternateIfDirective } from './Directives/AlternateIf.directive';
import { HighlightTextDirective } from './Directives/HighlightText.directive';
import { RendererHighlightDirective } from './Directives/renderer-highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    HighlightTextDirective,
    RendererHighlightDirective,
    AlternateIfDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
