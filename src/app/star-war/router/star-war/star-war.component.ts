import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'star-war-root',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './star-war.component.html',
  styleUrls: ['./star-war.component.scss'],
})
export class StarWarComponent {}
