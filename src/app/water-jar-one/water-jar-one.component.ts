import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-water-jar-one',
  templateUrl: 'water-jar-one.component.html',
  styleUrls: ['water-jar-one.component.scss'],
})
export class WaterJarOneComponent {
  @Input() value = 0;
}
