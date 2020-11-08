import { ModuleWithProviders, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { EpisodioComponent} from './components/episodio/episodio.component';
import { PersonajesComponent} from './components/personajes/personajes.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';


const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'peliculas',
        component: PeliculasComponent
    },
    {
        path: 'episodio',
        component: EpisodioComponent
    },
    {
        path: 'personajes',
        component: PersonajesComponent
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders =  RouterModule.forRoot(appRoutes);
