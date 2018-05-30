import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { AlertService } from '../alert.service';

@Component({
  moduleId: module.id,
  templateUrl: 'register.component.html'
})

export class RegisterComponent {
  model: any = {};
  loading = false;

  constructor(
    private router: Router,
    private userService: UserService,
    private alertService: AlertService) { }

  register() {
    this.loading = true;
    this.userService.create(this.model)
      .subscribe(
        outcome => {
          if (outcome.status === 'OK') {
            this.alertService.success(outcome.info, true);
            console.log(outcome.info);
            console.log(outcome.payload);
            this.router.navigate(['/login']);
          } else {
            this.loading = false;
            this.alertService.error(outcome.info, true);
            console.log(outcome.info);
            console.log(outcome.payload);
          }
        },
        error => {
          this.alertService.error(error);
          console.error(error);
          this.loading = false;
        });
  }
}
