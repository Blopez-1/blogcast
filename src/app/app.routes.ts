import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TopicPageComponent } from './pages/topic-page/topic-page.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: HomeComponent
    },
    {
        path: 'category/:topic', 
        component: TopicPageComponent,
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
    }
];
