import { Injectable, Inject } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/Observable'

import { Component, OnInit } from "@angular/core";
import { IMigrationLog } from "./migLog";
import { MigrationDataService } from './migration.service';




@Component({
    selector: 'ml-items',
    templateUrl: './migration-log-list.component.html',
    styleUrls: ['./migration-log-list.component.css']
})


export class MigrationLogListComponent implements OnInit{
    pageTitle: string = 'Whats on the bench??!?'
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    errorMessage: string;
    _listFilter: string;
    
    get listFilter(): string{
        return this._listFilter;
    }
    set listFilter(value:string){
        this._listFilter = value;
        this.filteredLogs= this.listFilter ? this.performFilter(this.listFilter) : this.logs;
    }
    filteredLogs: IMigrationLog[];
    logs: IMigrationLog[];

    constructor(private _migrationDataService: MigrationDataService){
        
        this.listFilter = ''
    }

    performFilter(filterBy: string): IMigrationLog[]{
        filterBy = filterBy.toLocaleLowerCase();
        console.log(this.logs.filter((log: IMigrationLog) => log.Name.toLocaleLowerCase().indexOf(filterBy) !== -1));
        return this.logs.filter((log: IMigrationLog) => (log.Name.toLocaleLowerCase().indexOf(filterBy) !== -1) 
                                                     || (log.NewAsset.toLocaleLowerCase().indexOf(filterBy) !== -1)
                                                     || (log.OldAsset.toLocaleLowerCase().indexOf(filterBy) !== -1)
                                                     || (log.Notes.toLocaleLowerCase().indexOf(filterBy) !== -1)
                                                     || (log.Technician.toLocaleLowerCase().indexOf(filterBy) !== -1));
        
        //need to find a way to filter all
    }

    ngOnInit(): void {
        console.log('In OnInit');
        this._migrationDataService.getLogs()
            .subscribe(logs => {
                this.logs = logs;
                this.filteredLogs = this.logs;
            },
                error => this.errorMessage = <any>error);
            
    }

    toggleImage(): void{
        this.showImage = !this.showImage;
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Migration Log List:' + message
    }

}