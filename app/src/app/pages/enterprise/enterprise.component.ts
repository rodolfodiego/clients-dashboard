import { Component, OnInit } from '@angular/core';
import { EnterpriseService } from 'src/app/services/enterprise.service';

@Component({
  selector: 'app-enterprise',
  templateUrl: './enterprise.component.html',
  styleUrls: ['./enterprise.component.scss'],
})
export class EnterpriseComponent implements OnInit {

  enterprises: any;
  url = 'assets/enterprise.PNG';
  constructor(
    private enterpriservice: EnterpriseService
  ) {}

  ngOnInit(): void {
   this.getAllEnterprises();
  }

  getAllEnterprises() {
    this.enterpriservice.getAll().subscribe(res => {
      this.enterprises = res.response;
    });
  }
  getEnterprise(caracteres) {
    if (caracteres === '' || caracteres === null) {
      this.getAllEnterprises();
      return;
    }

    this.enterpriservice.getByName(caracteres).subscribe(res => {
      this.enterprises = res.response;
    });
  }
}
