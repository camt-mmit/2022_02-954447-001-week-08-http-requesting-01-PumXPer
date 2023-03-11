import { Specie } from './../../../models';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, switchMap } from 'rxjs';
import { SpeciesService } from 'src/app/star-war/service/specie.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SpecieViewComponent } from '../../../species/specie-view/specie-view.component';

@Component({
  selector: 'star-war-specie-view-page',
  standalone: true,
  templateUrl: './specie-view-page.component.html',
  styleUrls: ['./specie-view-page.component.scss'],
  imports: [CommonModule, SpecieViewComponent],
})
export class SpecieViewPageComponent {
  protected readonly data$: Observable<Specie>;
  constructor(
    private readonly dataService: SpeciesService,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
  ) {
    this.data$ = this.route.params.pipe(
      switchMap((params) => this.dataService.get(params['id'])),
    );
  }

  doBack(): void {
    history.back();
  }
}
