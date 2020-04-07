import {Observable, of} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable()
export class DbService {

  private _key = 'db';


  save(model: any): boolean {
    try {
      model.id = this.getAutoIncrementNumber();
      localStorage.setItem('db', JSON.stringify([...this.getItems(), model]));
      return true;
    } catch (e) {
      console.error(e);
    }

    return false;
  }

  getItem(id: any): any {
    return this.getItems().find(item => item.id === id);
  }

  getItems(): any[] {
    const items = JSON.parse(localStorage.getItem(this._key));
    if (items) {
      return items.length ? items : [];
    }
    return [];
  }

  delete(id: number): void {
    const items = this.getItems().filter(item => {
      console.log(item);
      return item.id !== id;
    });

    localStorage.setItem('db', JSON.stringify(items));
  }

  private getAutoIncrementNumber() {
    const last = localStorage.getItem('AUTO_INCREMENT_NUMBER');
    let newNumber = (parseInt((last), 0) + 1);
    if (isNaN(newNumber)) {
      newNumber = 1;
    }

    localStorage.setItem('AUTO_INCREMENT_NUMBER', newNumber.toString());
    return newNumber;
  }

}
