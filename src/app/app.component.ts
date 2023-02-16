import { Component, ViewChild } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild(MatSidenav) sidenav!: MatSidenav;

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngAfterContentInit(): void {
    this.breakpointObserver.observe(['(max-width: 800px)']).subscribe({
      next: (res) => {
        if (res.matches) {
          this.sidenav.mode = 'over'
          this.sidenav.close()
        } else {
          this.sidenav.mode = 'push'
          this.sidenav.open()
        }
      }
    })
  }
}
