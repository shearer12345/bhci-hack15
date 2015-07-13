/// <reference path="typings/angular2/angular2.d.ts" />

import {Component, View, bootstrap, NgFor, NgIf} from 'angular2/angular2';

// Annotation section
@Component({
    selector: 'my-app'
})

@View({
    templateUrl: 'my-app.html',
    directives: [NgFor, NgIf]
})

// Component controller
class MyAppComponent {
    name: string;
    names: Array<string>;
    version: string;
    included: Array<boolean>;

    constructor()
    {
        this.name = 'Alice';
        this.names = ["Aarav", "MartÃ­n", "Shannon", "Ariana", "Kai"];
        this.version = 'simple';
        this.inc();
    }

    ver(v)
    {
        this.version = v;
        this.inc();
    }

    inc()
    {

      var incs = {'simple':[false,false,true,true],'full':[false,false,true,false],'our':[true,true,true,true]}
      this.included = incs[this.version];
    }
}

//



bootstrap(MyAppComponent);
