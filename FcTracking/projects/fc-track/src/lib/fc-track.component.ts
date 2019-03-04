import { Component, OnInit } from "@angular/core";

@Component({
  selector: "fc-track-detail",
  template: `
    <p>
      fc-track details works!
    </p>
  `,
  styles: []
})
export class FcTrackComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}

@Component({
  selector: "fc-track-list",
  template: `
    <p>
      fc-track list rocks works!
    </p>
    <a routerLink="detail">Load Detail</a>
  `,
  styles: []
})
export class FcTrackListComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
