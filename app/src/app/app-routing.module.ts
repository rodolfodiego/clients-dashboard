import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NavbarComponent } from "./navigation/navbar.component";
import { ClientRoutes } from "./pages/client/client.module";
import { EnterpriseRoutes } from "./pages/enterprise/enterprise.module";

const routes: Routes = [
  {
    path: "",
    component: NavbarComponent,
    children: [...EnterpriseRoutes],
  },
  {
    path: "",
    component: NavbarComponent,
    children: [...ClientRoutes],
  },
  {
    path: "",
    pathMatch: 'full',
    redirectTo: 'enterprise'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
