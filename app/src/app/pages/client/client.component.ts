import { Component, OnInit } from "@angular/core";
import { ClientService } from "src/app/services/client.service";

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss'],
})
export class ClientComponent implements OnInit {

  hidenClients = true;
  clients = [];
  caracteres = 'en';
  idClient = '5';
  quantityClients: any;
  quantityEnterprise: any;
  quantityProperties: any;
  spinner = false;
  test = true;
  constructor(
    private clientService: ClientService
  ) {}
  ngOnInit(): void {
    this.getTotals();
    this.getAllClients();
    this.hidenClients = true;
  }

  getAllClients() {
    this.spinner = true;
    this.test = true;
    this.clientService.getAll().subscribe(res => {
      this.clients = res.response;
      console.log(this.clients);
      this.spinner = false;

    });
  }

  getClient(caracteres) {
    if (caracteres === '' || caracteres === null){
      this.getAllClients();
      return;
    }

    this.clientService.getByName(caracteres).subscribe(res => {
      this.test = false;
      this.clients = res.response;
      console.log(this.clients);
    });
  }

  getTotals() {
    this.clientService.getGeneralTotals().subscribe(res => {
      this.quantityClients = res.quantity_clients;
      this.quantityEnterprise = res.quantity_enterprise;
      this.quantityProperties = res.quantity_properties;
    });
  }

  showMoreDetails() {
    this.hidenClients = false;
  }
}
