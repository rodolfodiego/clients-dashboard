import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClientComponent } from './client.component';
import { ClientService } from 'src/app/services/client.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ClientDetailsComponent } from '../client-details/client-details.component';

export const ClientRoutes: Routes = [
  {
    path: 'client', component: ClientComponent, children: [
      { path: ':_id', component: ClientDetailsComponent },
    ]
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
