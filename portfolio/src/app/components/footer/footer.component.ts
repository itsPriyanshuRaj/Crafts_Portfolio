import { Component } from '@angular/core';
import { faLinkedinIn,faBootstrap , faFontAwesome } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  faLinkedinIn = faLinkedinIn;
  faBootstrap = faBootstrap;
  faFontAwesome = faFontAwesome;
}
