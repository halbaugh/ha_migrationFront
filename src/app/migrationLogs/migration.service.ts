import { Injectable } from "@angular/core";
import { IMigrationLog } from "./migLog";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/Observable/throw';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';


@Injectable()
export class MigrationDataService {

    private _dbUrl = './api/migration/_migInfo.json';
    constructor(private _http: HttpClient){}

    getLogs(): Observable<IMigrationLog[]> {
        return this._http.get<IMigrationLog[]>(this._dbUrl)
            .catch(this.handleError);
    }

    private handleError(err: HttpErrorResponse){
        console.log(err.message);
        return Observable.throw(err.message);
    }
}