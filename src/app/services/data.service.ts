import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {CepModel} from '../models/cep.model';

@Injectable()
export class DataService {

  private cepSource = new BehaviorSubject<CepModel>(null);
  event = this.cepSource.asObservable();

  constructor() {
  }

  changeCep(cep: CepModel) {
    this.cepSource.next(cep);
  }

}
