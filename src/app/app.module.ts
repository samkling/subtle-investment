import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { PostPageComponent } from './post-page/post-page.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PagerComponent } from './pager/pager.component';

const appRoutes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'post/:id', component: PostPageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: HomePageComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutPageComponent,
    ContactPageComponent,
    PostPageComponent,
    FooterComponent,
    HeaderComponent,
    NavigationComponent,
    PagerComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      // { enableTracing: true } // <-- debugging purposes only
    ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
