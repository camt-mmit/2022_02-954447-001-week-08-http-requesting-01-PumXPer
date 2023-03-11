import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleListComponent } from 'src/app/star-war/people/people-list/people-list.component';
import { List, Person, SearchData } from '../../../models';
import { PeopleService } from '../../../service/people.service';
import { Observable, switchMap } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'star-war-people-list-page',
  standalone: true,
  imports: [CommonModule, PeopleListComponent],
  templateUrl: './people-list-page.component.html',
  styleUrls: ['./people-list-page.component.scss'],
})
export class PeopleListPageComponent {
  protected readonly data$: Observable<List<Person>>;

  protected searchData: SearchData;

  constructor(
    dataService: PeopleService,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
  ) {
    //this.data$ = dataService.getAll({ page: '3' });
    this.searchData = this.route.snapshot.queryParams;
    this.data$ = this.route.queryParams.pipe(
      switchMap((params) => dataService.getAll(params)),
    );
  }

  protected search(searchData: SearchData): void {
    this.router.navigate([], {
      queryParams: searchData,
    });
  }

  protected onItemSelect(item: Person): void {
    const paths = item.url.pathname.split('/');
    const id = paths[paths.length - 2];
    this.router.navigate([id], {
      relativeTo: this.route,
    });
  }
}
