import { Component, OnInit } from '@angular/core';
import { EnterpriseService } from 'src/app/services/enterprise.service';

@Component({
  selector: 'app-enterprise',
  templateUrl: './enterprise.component.html',
  styleUrls: ['./enterprise.component.scss'],
})
export class EnterpriseComponent implements OnInit {

  enterprises: any;
  constructor(
    private enterpriservice: EnterpriseService
  ) {}

  ngOnInit(): void {
   this.getAllEnterprises();
  }

  getAllEnterprises() {
    this.enterpriservice.getAll().subscribe(res => {
      this.enterprises = res.response;
      console.log(this.enterprises);
    });
  }
  getEnterprise(caracteres) {
    if (caracteres === '' || caracteres === null) {
      this.getAllEnterprises();
      return;
    }

    this.enterpriservice.getByName(caracteres).subscribe(res => {
      console.log(res);
      this.enterprises = res.response;
    });
  }
}
