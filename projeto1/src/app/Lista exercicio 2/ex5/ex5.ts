import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ex5',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ex5.html',
  styleUrls: ['./ex5.css']
})
export class Ex5Component {
  nomes: string[] = ['Ana', 'Bruno', 'Carla', 'Daniel', 'Eduarda'];
}