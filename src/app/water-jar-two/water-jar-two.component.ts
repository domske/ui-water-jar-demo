import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-water-jar-two',
  templateUrl: 'water-jar-two.component.html',
  styleUrls: ['water-jar-two.component.scss'],
})
export class WaterJarTwoComponent implements OnInit, OnDestroy {
  value = 0;
  dir = 1;
  timerId = 0;

  ngOnInit() {
    this.timerId = window.setInterval(() => {
      this.value += 5 * this.dir;
      if (this.value > 110) {
        this.dir = -1;
      } else if (this.value < -10) {
        this.dir = 1;
      }
    }, 300);
  }

  ngOnDestroy() {
    window.clearInterval(this.timerId);
  }

  getColor() {
    return this.value > 80
      ? '#27ae60'
      : this.value > 20
      ? '#f3d112'
      : '#c0392b';
  }

  getValue() {
    return Math.min(Math.max(this.value, 0), 100);
  }
}
