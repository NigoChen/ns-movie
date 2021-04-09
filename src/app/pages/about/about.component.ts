import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  imagePath  = "assets/image/movie-logo.jpg";
  title       = "Projeto criado no curse";
  coursName   = "Apps Web a Mobile num so proijeto com AngularScript";
  description = "Descirption Applications Web a Mobile (Android e IOS)";
  buttonText  = "SAIBA MAIS";
  ngOnInit(): void {

  }

}
