import { Component } from '@angular/core';
import { faJava, faPython } from '@fortawesome/free-brands-svg-icons';
import { faHtml5, faCss, faBootstrap } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {


  faJava = faJava;
  faPython = faPython;
  faHtml5=faHtml5;
  faCss = faCss;
  faBootstrap= faBootstrap;


}
