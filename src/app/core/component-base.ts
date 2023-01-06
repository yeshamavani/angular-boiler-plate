import {Directive, OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs';

@Directive()
export class ComponentBaseDirective implements OnDestroy {
  constructor() {}

  protected _subscriptions: Subscription[] = [];
  //   protected _viewPermissions = [];
  //   protected pm?: IBasePM<unknown>;

  ngOnDestroy() {
    this.clearAllSubscriptions();
    // this.clearAllViewPermissions();
    // if (this.pm) {
    //   this.pm.destroy();
    // }
  }

  clearAllSubscriptions() {
    this._subscriptions.forEach(subscription => {
      if (subscription) {
        subscription.unsubscribe();
      }
    });
    this._subscriptions = [];
  }

  //   clearAllViewPermissions() {
  //     if (this.ngZone && this.permissionService && this._viewPermissions.length) {
  //       this.ngZone.runOutsideAngular(() => {
  //         const permissions = this.permissionService.getPermissions();
  //         const entityPerms: string[] = [];
  //         for (const key in permissions) {
  //           if (!this._viewPermissions.includes(key)) {
  //             entityPerms.push(key);
  //           }
  //         }
  //         this.permissionService.loadPermissions(entityPerms);
  //         this._viewPermissions = [];
  //       });
  //     }
  //   }
}
