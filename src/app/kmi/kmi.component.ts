import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kmi',
  templateUrl: './kmi.component.html',
  styleUrls: ['./kmi.component.css']
})
export class KmiComponent implements OnInit {
  public svoris;
  public ugis;
  public kmi=null;

  constructor() { }

  ngOnInit(): void {
  }

  public skaiciuokKMI(){
    var ugisM=this.ugis/100;
    this.kmi=this.svoris/ (ugisM*ugisM);
  }

}
