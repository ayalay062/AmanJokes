import { Injectable } from '@angular/core';
import * as config from '../../assets/config/config.json'
@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor() { }
  getConfigData(){
    return config;
  }
}
