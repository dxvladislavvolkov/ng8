import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-comp',
  templateUrl: './my.component.html'
})
export class MyComponent {
    _visible = false;
    _message = "";

    @Input()
    get message(): any {
        return this._message
    }
    set message(value: any) {
        console.log('message');
        this._message = value;
    }

    @Input()
    get isVisible(): any {
        return this._visible;
    }
    set isVisible(value: any) {
        console.log('isVisible');
        this._visible = value;
    }
}
