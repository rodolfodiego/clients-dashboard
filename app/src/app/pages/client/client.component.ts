import { Component, OnInit } from "@angular/core";
import { ClientService } from "src/app/services/client.service";

@Component({
  selector: "app-client",
  templateUrl: "./client.component.html",
  styleUrls: ["./client.component.scss"],
})
export class ClientComponent implements OnInit {

  clients = [];
  caracteres = 'en';
  idClient = '5';
  quantityClients: any;
  quantityEnterprise: any;
  quantityProperties: any;
  constructor(
    private clientService: ClientService
  ) {}
  ngOnInit(): void {
    this.getTotals();
    this.getAllClients();
  }

  getAllClients() {
    this.clientService.getAll().subscribe(res => {
      console.log(res);
      this.clients = res.response;

    });
  }

  getClient(caracteres) {
    if (caracteres === '' || caracteres === null){
      this.getAllClients();
      return;
    }
    console.log(caracteres);
    this.clientService.getByName(caracteres).subscribe(res => {
      console.log(res);
      this.clients = res.response;
    });
  }

  getTotals() {
    this.clientService.getGeneralTotals().subscribe(res => {
      this.quantityClients = res.quantity_clients;
      this.quantityEnterprise = res.quantity_enterprise;
      this.quantityProperties = res.quantity_properties;
    });
  }

  getClientId() {
    this.clientService.getById(this.idClient).subscribe(res => {
      console.log(res);
    });
  }

  getEnterpriseId() {
    this.clientService.getTotalsByCompany(this.idClient).subscribe(res => {
      console.log(res);
    });
  }
}
