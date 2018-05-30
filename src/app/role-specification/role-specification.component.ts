import { Component, OnInit } from '@angular/core';
import {Role} from '../role';
import {ActivatedRoute, Router} from '@angular/router';
import {RoleService} from '../role.service';
import { AlertService } from '../alert.service';

@Component({
  selector: 'app-role-specification',
  templateUrl: './role-specification.component.html',
  styleUrls: ['./role-specification.component.css']
})
export class RoleSpecificationComponent implements OnInit {
  loading = false;
  roles: Role[];
  role: Role;
  returnUrl: string;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private roleService: RoleService,
              private alertService: AlertService) { }

  ngOnInit() {
    this.loadAllRoles();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  private loadAllRoles() {
    this.roleService.getAll().subscribe(roles => this.roles = roles);
  }

  specifyRole() {
    this.loading = true;
    const user = JSON.parse(localStorage.getItem('currentUser'));
    this.roleService.saveRole(this.role, user).subscribe(
      data => {
        this.alertService.success('Role specification successful', true);
        user['role'] = this.role.role;
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.router.navigate([this.returnUrl]);
      },
      error => {
        this.alertService.error(error);
        this.loading = false;
      });
  }

}
