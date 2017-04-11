import { Component } from '@angular/core'



@Component({
    selector: 'auth-message',
    template: `
        <div>
          You wil be logged in for {{ days }} days
        </div>
    `
})
export class AuthMessageComponent{
    days: number = 7;
}