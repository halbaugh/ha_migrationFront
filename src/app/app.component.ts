import { Component } from "@angular/core";
import { MigrationDataService } from "./migrationLogs/migration.service";

@Component({
  selector: 'migration-root',
  template: `
  <div><h1>{{pageTitle}}</h1>
    <ml-items></ml-items>
  <div>
  `,
  providers: [MigrationDataService]
})

export class AppComponent{
  pageTitle: string = "CCG Imaging";
}
