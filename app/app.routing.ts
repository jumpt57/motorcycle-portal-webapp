import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { BikeComponent } from './components/bike/bike.component';
import { ComparatorComponent } from './components/comparator/comparator.component';
import { ManufacturerComponent } from './components/manufacturer/manufacturer.component';
import { ManufacturersComponent } from './components/manufacturers/manufacturers.component';
import { NewsComponent } from './components/news/news.component';
import { ResearchComponent } from './components/research/research.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'moto/:year/:name',
        component: BikeComponent
    },
    {
        path: 'comparateur',
        component: ComparatorComponent
    },
    {
        path: 'constructeurs',
        component: ManufacturersComponent
    },
    {
        path: 'constructeurs/:name',
        component: ManufacturerComponent
    },
    {
        path: 'nouveaux-modeles',
        component: NewsComponent
    },
    {
        path: 'recherche',
        component: ResearchComponent
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule { }
