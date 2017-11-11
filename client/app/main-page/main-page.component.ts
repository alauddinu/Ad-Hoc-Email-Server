import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {DomSanitizer} from "@angular/platform-browser";
import {Subscription} from "rxjs/Subscription";
import {MatIconRegistry} from "@angular/material";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit, OnDestroy{

  account: string;
  hideToolbarComponents = true;
  routerSub: Subscription;

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, private router: Router) {
    iconRegistry.addSvgIcon(
      'ahem-logo',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/ahem_logo_icon.svg'));
      this.routerSub = this.router.events.subscribe(val => {
        this.router.url !='/' ? this.hideToolbarComponents = false : this.hideToolbarComponents = true;
        this.account = this.router.url.split('/account/')[1];
      });


  }

  ngOnInit(): void {
  }
  ngOnDestroy(): void {
    this.routerSub.unsubscribe();
  }


}
