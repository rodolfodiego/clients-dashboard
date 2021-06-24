import { NgModule } from "@angular/core";

import { ClientModule } from "./client/client.module";
import { EnterpriseModule } from "./enterprise/enterprise.module";

@NgModule({
  imports: [
    ClientModule,
    EnterpriseModule,
  ],
  declarations: [],
})
export class PagesModule {}
