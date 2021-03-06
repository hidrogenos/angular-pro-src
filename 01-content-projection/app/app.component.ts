import { Component,ViewChild,ComponentRef, ViewContainerRef, ComponentFactoryResolver, AfterContentInit } from '@angular/core';

import { User } from './auth-form/auth-form.interface';
import { AuthFormComponent } from './auth-form/auth-form.component';

@Component({
  selector: 'app-root',
  template: `
    <div>
    <button (click)="destroyComponent()">
      Destroy
    </button>
      <div #entry></div>
    </div>
  `
})
export class AppComponent implements AfterContentInit {

  component: ComponentRef<AuthFormComponent>;

  @ViewChild('entry', {read: ViewContainerRef}) entry: ViewContainerRef;

  constructor(
    private resolver: ComponentFactoryResolver
  ){}

  ngAfterContentInit(){
    const authFormFactory = this.resolver.resolveComponentFactory(AuthFormComponent);
    this.component = this.entry.createComponent(authFormFactory);
    this.component.instance.title = 'create account';
    this.component.instance.submitted.subscribe(this.loginUser)
  }

  destroyComponent(){
    this.component.destroy();
  }

  loginUser(user: User) {
    console.log('Login', user);
  }

}