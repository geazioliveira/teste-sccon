import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatSort, Sort} from '@angular/material/sort';
import {CepModel} from '../../../models/cep.model';
import {ListService} from './list.service';
import {DbService} from '../../../services/db.service';
import {DataService} from '../../../services/data.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = ['cep', 'logradouro', 'createdAt', 'actions'];
  addresses: CepModel[] = [];
  dataSource: MatTableDataSource<CepModel>;

  constructor(
    private listService: ListService,
    private dataService: DataService
  ) {
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource();

    this.loadItems();

    this.dataService.event.subscribe(result => {
      this.loadItems();
    });
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  loadItems(): void {
    this.listService.getAddresses().subscribe(data => {
      this.dataSource.data = data;
    });
  }

  delete(address: CepModel) {
    if (confirm('Deseja excluir este endereço?')) {
      this.listService.deleteAddress(address).subscribe(() => {
        this.loadItems();
      });
    }
  }

}
