import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'verbs-app-irregular-verbs',
  templateUrl: './irregular-verbs.component.html',
  styleUrls: ['./irregular-verbs.component.less']
})
export class IrregularVerbsComponent implements OnInit {
	sectionTitle = 'Irregular Verbs';

  constructor() {}

  ngOnInit() {
  }

}
