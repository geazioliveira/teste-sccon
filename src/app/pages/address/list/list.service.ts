import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CepModel} from '../../../models/cep.model';
import {Observable, of} from 'rxjs';
import {CustomService} from '../../../services/custom-service';
import {catchError, map, tap} from 'rxjs/operators';
import {DbService} from '../../../services/db.service';

@Injectable({
  providedIn: 'root'
})
export class ListService extends CustomService {

  path = 'https://www.mocky.io/v2/5e8c477e2f0000480088c924';

  constructor(
    private http: HttpClient,
    private dbService: DbService) {
    super();
  }

  getAddresses(): Observable<CepModel[]> {
    return of(this.dbService.getItems())
      .pipe(
        map(items => {
          return items.map(address => new CepModel(address));
        }),
        tap(_ => this.log('fetched addresses')),
        catchError(this.handleError<CepModel[]>('getAddresses', null))
      );
  }

  deleteAddress(address: CepModel): Observable<void> {
    return of(this.dbService.delete(address.id));
  }

}
