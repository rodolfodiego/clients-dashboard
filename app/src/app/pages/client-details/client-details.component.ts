import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.sass']
})
export class ClientDetailsComponent implements OnInit {
  id: any;
  constructor(
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
  }

}
