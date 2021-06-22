import { Component, OnInit } from "@angular/core";
import { ClientService } from "src/app/services/client.service";

@Component({
  selector: "app-client",
  templateUrl: "./client.component.html",
  styleUrls: ["./client.component.scss"],
})
export class ClientComponent implements OnInit {

  caracteres = 'rodolfo';
  idClient = '5';

  constructor(
    private clientService: ClientService
  ) {}
  ngOnInit(): void {
    this.getAllClients();
    this.getClient();
    this.getTotals();
    this.getClientId();
    this.getEnterpriseId();
  }

  getAllClients() {
    this.clientService.getAll().subscribe(res => {
      console.log(res);
    });
  }

  getClient() {
    this.clientService.getByName(this.caracteres).subscribe(res => {
      console.log(res);
    });
  }

  getTotals() {
    this.clientService.getGeneralTotals().subscribe(res => {
      console.log(res);
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
