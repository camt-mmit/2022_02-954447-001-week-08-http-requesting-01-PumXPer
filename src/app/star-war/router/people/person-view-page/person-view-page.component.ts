import { Observable, switchMap } from 'rxjs';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Person } from 'src/app/star-war/models';
import { PeopleService } from 'src/app/star-war/service/people.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonViewComponent } from '../../../people/person-view/person-view.component';

@Component({
  selector: 'star-war-person-view-page',
  standalone: true,
  templateUrl: './person-view-page.component.html',
  styleUrls: ['./person-view-page.component.scss'],
  imports: [CommonModule, PersonViewComponent],
})
export class PersonViewPageComponent {
  protected readonly data$: Observable<Person>;
  constructor(
    private readonly dataService: PeopleService,
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
