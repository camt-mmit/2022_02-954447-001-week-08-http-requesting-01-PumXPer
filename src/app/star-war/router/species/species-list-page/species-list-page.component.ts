import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { List, Specie, SearchData } from 'src/app/star-war/models';
import { Observable, switchMap } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { SpeciesService } from 'src/app/star-war/service/specie.service';
import { SpecieListComponent } from '../../../species/specie-list/specie-list.component';

@Component({
  selector: 'star-war-species-list-page',
  standalone: true,
  templateUrl: './species-list-page.component.html',
  styleUrls: ['./species-list-page.component.scss'],
  imports: [CommonModule, SpecieListComponent],
})
export class SpeciesListPageComponent {
  protected readonly data$: Observable<List<Specie>>;

  protected searchData: SearchData;

  constructor(
    dataService: SpeciesService,
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

  protected onItemSelect(item: Specie): void {
    const paths = item.url.pathname.split('/');
    const id = paths[paths.length - 2];
    this.router.navigate([id], {
      relativeTo: this.route,
    });
  }
}
