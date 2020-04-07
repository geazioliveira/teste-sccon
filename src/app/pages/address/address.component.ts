import { Component, OnInit } from '@angular/core';
import {CepModel} from '../../models/cep.model';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
})
export class AddressComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('rodou');

  }

  onSave($event: CepModel): void {

  }

}
