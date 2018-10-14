import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ProductsComponent } from './products/products.component';

export const router: Routes = [
    {
        path: '',
        redirectTo: 'products',
        pathMatch: 'full'
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'products',
        component: ProductsComponent
    },
    {
        path: 'portfolio',
        component: PortfolioComponent
    }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);