import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { PlaceholderService } from './placeholder.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  dataSource: MatTableDataSource<any>;
  @ViewChild(MatSort, {static: true})sort: MatSort;
  dataSub: Subscription;
  originalFilter: (data: any, filter: string) => boolean;
  constructor(private placeholderService: PlaceholderService) {}

  ngOnInit(): void {
    this.dataSub = this.placeholderService.get().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
      this.originalFilter = this.dataSource.filterPredicate;
    })

    console.log('OnInit');
  }

  ngOnDestroy(): void {
    console.log('OnDestroy');
  }
}
