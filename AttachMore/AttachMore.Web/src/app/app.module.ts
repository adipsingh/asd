import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AmCoreModule } from './core/am-core.module';
import { AppRoutingModule } from './app-routing.module';
import { HTTP_INTERCEPTORS_PROVIDERS } from './http-interceptors';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { JwSocialButtonsModule } from 'jw-angular-social-buttons';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    JwSocialButtonsModule,
    AmCoreModule,
  ],
  providers: [
    HTTP_INTERCEPTORS_PROVIDERS
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
