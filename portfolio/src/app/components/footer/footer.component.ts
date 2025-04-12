import { Component } from '@angular/core';
import { faAngular,faBootstrap , faFontAwesome } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  faAngular = faAngular;
  faBootstrap = faBootstrap;
  faFontAwesome = faFontAwesome;
}
