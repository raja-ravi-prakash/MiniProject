import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  state: boolean = false;
  constructor(private api: ApiService) {
    this.valForm = new FormGroup({
      area_code: new FormControl('', [Validators.required]),
      year: new FormControl('', [Validators.required]),
      item_code: new FormControl('', [Validators.required]),
    });
  }

  valForm: FormGroup;

  sub() {
    let { area_code, year, item_code } = this.valForm.value;
    this.api
      .predict({
        data: [area_code, year, item_code],
      })
      .subscribe((s: any) => {
        let temp: any = s;
        console.log(temp.result);
        alert(temp.result.toString() + ' HG/HA');
      });
  }

  change() {
    this.state = !this.state;
  }

  ngOnInit(): void {}
}
