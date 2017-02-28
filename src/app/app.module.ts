 import { NgModule } from '@angular/core';
 import { AppRoutingModule } from './app-routing.module';

import { AboutModule } from './about/about.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
      AppRoutingModule,
 AboutModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
