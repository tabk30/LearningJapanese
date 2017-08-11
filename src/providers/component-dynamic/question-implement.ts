import { Component, Input, AfterViewInit, ViewChild, ComponentFactoryResolver, OnDestroy, Type } from '@angular/core';

import { QuestionDirective } from './question-host';
import { QuestionInterface }  from './QuestionInterface'
@Component({
    selector: 'question-implement',
    template: `
              <div class="question-implement" >
                <ng-template question-host ></ng-template>
              </div>
            `,
    styles: ['.question-implement { height: 100%; }']
})
export class QuestionImplementComponent implements AfterViewInit, OnDestroy {
    @Input() component: Type<any>;
    @Input() data: Object;
    @ViewChild(QuestionDirective) questionHost: QuestionDirective;

    constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

    ngAfterViewInit() {
        this.loadComponent();
    }

    ngOnDestroy() {
        
    }

    loadComponent() {
        let questionItem = this.component;

        let componentFactory = this.componentFactoryResolver.resolveComponentFactory(questionItem);

        let viewContainerRef = this.questionHost.viewContainerRef;
        viewContainerRef.clear();

        let componentRef = viewContainerRef.createComponent(componentFactory);
        (<QuestionInterface>componentRef.instance).data = this.data;
    }
}


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/