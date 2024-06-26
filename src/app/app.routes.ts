import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { CardComponent } from './card/card.component';
import { ArrivalsComponent } from './arrivals/arrivals.component';
import { DeparturesComponent } from './departures/departures.component';

export const routes: Routes = [
    {
        path: "", component: MainComponent
    },
    {path: "departures", component: DeparturesComponent},
    {path: "arrivals", component: ArrivalsComponent},
    {path: "card", component: CardComponent}
];
