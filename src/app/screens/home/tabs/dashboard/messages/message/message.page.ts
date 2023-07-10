import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface RouteParams {
  id: string;
}

@Component({
  selector: 'Message',
  templateUrl: './message.page.html',
})
export class MessagePage {
  title: string = ''
  constructor(private route: ActivatedRoute) {
    route.params.subscribe((params) => {
      this.title = (params as RouteParams).id;
    })
  }
}
