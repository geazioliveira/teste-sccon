import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {CepModel} from '../../../models/cep.model';
import {catchError, map, tap} from 'rxjs/operators';
import {CustomService} from '../../../services/custom-service';
import {HttpClient} from '@angular/common/http';
import {DbService} from '../../../services/db.service';

@Injectable({
  providedIn: 'root'
})
export class SearchService extends CustomService {

  private path = 'https://viacep.com.br/ws/';
  private format = 'json';

  constructor(
    private http: HttpClient,
    private dbService: DbService) {
    super();
  }

  getCep(cep): Observable<CepModel> {
    const path = `${this.path}${cep}/${this.format}/`;

    return this.http.get<CepModel>(path)
      .pipe(
        map(data => new CepModel(data)),
        tap(_ => this.log('fetched address')),
        catchError(this.handleError<CepModel>('getCep', null))
      );
  }

  saveCep(cep: CepModel): void {
    this.dbService.save(cep.toJson());
  }

}
