import { Specie } from './../../models';
import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'star-war-specie-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './specie-view.component.html',
  styleUrls: ['./specie-view.component.scss'],
})
export class SpecieViewComponent implements OnInit {
  title = 'Specie';

  @Input() data!: Specie;

  ngOnInit(): void {
    if (!this.data) {
      throw new Error(`Property 'data' is required!`);
    }
  }
}
