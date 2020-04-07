import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {SearchService} from './search.service';
import {DataService} from '../../../services/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchFormGroup: FormGroup;
  cep: FormControl;


  constructor(
    private formBuilder: FormBuilder,
    private searchService: SearchService,
    private dataService: DataService
  ) {
  }

  ngOnInit(): void {
    this.searchFormGroup = this.formBuilder.group({
      cep: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  searchCep(): void {
    if (this.searchFormGroup.dirty && this.searchFormGroup.valid) {
      this.searchService.getCep(this.searchFormGroup.value.cep)
        .subscribe(cep => {
          this.searchService.saveCep(cep);
          this.dataService.changeCep(cep);
      });
    }
  }

  getErrorMessage() {
    const cep = this.searchFormGroup.get('cep');
    if (cep.hasError('required')) {
      return 'Digite seu CEP';
    }

    if (cep.hasError('minlength')) {
      return 'Digite um CEP valido';
    }

    return '';

  }

}
