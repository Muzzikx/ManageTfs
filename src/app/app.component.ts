import { Component } from '@angular/core';

interface MenuItem {
  label: string;
  path: string;
  exact?: boolean;
}

@Component({
  selector: 'tm-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Tfs Manager';
  menu: MenuItem[] = [
    {label: 'Dashboard', path: '', exact: true},
  ];
}
