import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClientComponent } from './client.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ClientDetailsComponent } from '../client-details/client-details.component';

export const ClientRoutes: Routes = [
  {
    path: 'client', component: ClientComponent
  },
  {
    path: 'detalhescliente/:_id', component: ClientDetailsComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'client'
  }
];

@NgModule({
  declarations: [ClientComponent, ClientDetailsComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(ClientRoutes)
  ]
})
export class ClientModule {}
