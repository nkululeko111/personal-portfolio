import { Component, SimpleChange } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./home-page/home.component";
import { AboutPageComponent } from "./about-page/about-page.component";
import { PortfolioPageComponent } from "./portfolio-page/portfolio-page.component";
import { ContactPageComponent } from "./contact-page/contact-page.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, AboutPageComponent, PortfolioPageComponent, ContactPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  ngOnChanges (changes: SimpleChange) {

  
console.log(changes);
}
ngOnInit(){

}
  
  title = 'personal-portfolio';
}
