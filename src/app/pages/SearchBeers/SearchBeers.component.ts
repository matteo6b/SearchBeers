import { Observable, Subject, Subscription } from 'rxjs';
import { Beer } from './../../models/beer/Beer';
import { Component, OnInit } from '@angular/core';

import {
  debounceTime,
  distinctUntilChanged,
  map,
  switchMap,
} from 'rxjs/operators';
import { BeerService } from 'src/app/api/beer.service';

import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-searchBeers',
  templateUrl: './SearchBeers.component.html',
  styleUrls: ['./SearchBeers.component.scss'],
})
export class SearchBeersComponent implements OnInit {
  beers: Beer[] = [];
  searchRequestSubscriptions: Subscription[] = [];
  loading: boolean = false;

  constructor(private beerService: BeerService) {}

  ngOnInit(): void {
    this.getBeers();
  }

  getBeers(): void {
    this.loading = true;
    this.beerService.getBeers(1, 20, '').subscribe((beers) => {
      this.beers = beers;
      this.loading = false;
    });
  }
  onTextChange(changedText: string) {
    this.cancelPendingRequests();
    this.loading = true;
    const beersSubscription = this.beerService
      .getBeers(1, 20, changedText)
      .subscribe((beers) => {
        this.beers = beers;
        this.loading = false;
      });

    this.searchRequestSubscriptions.push(beersSubscription);
  }

  cancelPendingRequests() {
    this.searchRequestSubscriptions.forEach((sub) => sub.unsubscribe());
  }
}
