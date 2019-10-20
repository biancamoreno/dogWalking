import { Component, OnInit } from '@angular/core';
import { HostsService } from 'src/app/services/hosts/hosts.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {

  hosts: any;

  constructor(private _hosts: HostsService) {
    this._hosts.getHosts().then($data => {
      this.hosts = $data;
    });
  }

  ngOnInit() {
  }

}
