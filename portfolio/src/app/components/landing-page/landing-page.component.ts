import { Component } from '@angular/core';
import { faGithub, faLinkedinIn, faHashnode } from '@fortawesome/free-brands-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {
  faGithub = faGithub;
  faLinkedinIn = faLinkedinIn;
  faHashnode = faHashnode;
  faDownload = faDownload;
}
