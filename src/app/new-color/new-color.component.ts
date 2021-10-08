import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IColor } from '../interfaces/icolor';
import { ColorModel } from '../models/color-model';
import { ColorService } from '../services/color.service';

@Component({
  selector: 'app-new-color',
  templateUrl: './new-color.component.html',
  styleUrls: ['./new-color.component.scss']
})
export class NewColorComponent implements OnInit {
  colorData: ColorModel[]
  logId = 0
  constructor(public colorService: ColorService,
    private router: Router,
    private aRoute: ActivatedRoute) {
    this.colorData = new Array<ColorModel>()
    this.aRoute.data.subscribe(data => {
      // console.log(data)
      this.colorData = (data[0] as IColor[]).map( cM => new ColorModel(cM.id, cM.uid, cM.hex_value, cM.color_name))
    })
  }

  ngOnInit(): void {
    this.colorService.color.subscribe(data => {
      if (data instanceof Array && data) {
        this.colorData = data
      } else if (data) {
        this.colorData.push(data)
      }
    })
    // this.fetchNewColor();
  }

  fetchNewColor() {
    this.colorService.getRandomColor<IColor[]>(5).subscribe(data => {
      if (data) {
        this.colorData = data.map( cM => new ColorModel(cM.id, cM.uid, cM.hex_value, cM.color_name))
        this.colorData.push(new ColorModel(6, 'dfsdf', '#fff123', 'YellowTest'))
      }
    })
  }
  reloadCurrentPage() {
    window.location.reload();
   }
}
