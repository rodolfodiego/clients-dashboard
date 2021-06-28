import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.scss']
})
export class ClientDetailsComponent implements OnInit {
  id: any;
  client: any;
  quantityEnterprise: any;
  quantityProperties: any;
  enterprises: any;
  constructor(
    private route: ActivatedRoute,
    private clientService: ClientService
    ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params._id;
    this.getClient();
    this.getTotalsClient();
    this.getEnterprisesClient();
  }

  getClient() {
    this.clientService.getById(this.id).subscribe(res => {
      this.client = res.response;
    });
  }
  getTotalsClient() {
    this.clientService.getTotalsByCompany(this.id).subscribe(res => {
      this.quantityEnterprise = res.quantity_enterprise;
      this.quantityProperties = res.quantity_properties;
    });
  }
  getEnterprisesClient() {
    this.clientService.getEnterprisesByClient(this.id).subscribe(res => {
      this.enterprises = res.response;
    });
  }
  getEnterprise(caracteres) {
    if (caracteres === '' || caracteres === null) {
      this.getEnterprisesClient();
      return;
    }

    this.clientService.getEnterpriseByName(caracteres, this.id).subscribe(res => {
      console.log(res);
      this.enterprises = res.response;
    });
  }
}
