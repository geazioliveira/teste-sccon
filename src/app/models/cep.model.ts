import {Moment} from 'moment';
import * as moment from 'moment';

export class CepModel {

  private _id: number;
  private _cep: string;
  private _logradouro: string;
  private _complemento: string;
  private _bairro: string;
  private _localidade: string;
  private _uf: string;
  private _unidade: string;
  private _ibge: string;
  private _gia: string;
  private _createdAt: Moment;

  constructor(data: any) {
    if (!data) {
      return;
    }

    this._id = data.id;
    this._cep = data.cep;
    this._logradouro = data.logradouro;
    this._complemento = data.complemento;
    this._bairro = data.bairro;
    this._localidade = data.localidade;
    this._uf = data.uf;
    this._unidade = data.unidade;
    this._ibge = data.ibge;
    this._gia = data.gia;
    this._createdAt = data.createdAt ? moment(data.createdAt) : moment();

  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get cep(): string {
    return this._cep;
  }

  set cep(value: string) {
    this._cep = value;
  }

  get logradouro(): string {
    return this._logradouro;
  }

  set logradouro(value: string) {
    this._logradouro = value;
  }

  get complemento(): string {
    return this._complemento;
  }

  set complemento(value: string) {
    this._complemento = value;
  }

  get bairro(): string {
    return this._bairro;
  }

  set bairro(value: string) {
    this._bairro = value;
  }

  get localidade(): string {
    return this._localidade;
  }

  set localidade(value: string) {
    this._localidade = value;
  }

  get uf(): string {
    return this._uf;
  }

  set uf(value: string) {
    this._uf = value;
  }

  get unidade(): string {
    return this._unidade;
  }

  set unidade(value: string) {
    this._unidade = value;
  }

  get ibge(): string {
    return this._ibge;
  }

  set ibge(value: string) {
    this._ibge = value;
  }

  get gia(): string {
    return this._gia;
  }

  set gia(value: string) {
    this._gia = value;
  }

  get createdAt(): Moment {
    return this._createdAt;
  }

  set createdAt(value: Moment) {
    this._createdAt = value;
  }

  getAddress() {
    return `${this.logradouro}, ${this.bairro} - ${this.localidade}, ${this.uf}`;
  }

  toJson() {
    return {
      id: this.id,
      cep: this.cep,
      logradouro: this.logradouro,
      complemento: this.complemento,
      bairro: this.bairro,
      localidade: this.localidade,
      uf: this.uf,
      unidade: this.unidade,
      ibge: this.ibge,
      gia: this.gia,
      createdAt: this.createdAt
    };
  }

}


