import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SpecialtyService} from '../specialty.service';
import {AlertService} from '../alert.service';
import {Specialty} from '../specialty';

@Component({
  selector: 'app-specialty',
  templateUrl: './specialty.component.html',
  styleUrls: ['./specialty.component.css']
})
export class SpecialtyComponent implements OnInit {
  loading = false;
  specialties: Specialty[];
  specialty: Specialty;
  returnUrl: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private specialtyService: SpecialtyService,
              private alertService: AlertService) {
  }

  ngOnInit() {
    this.loadAllSpecialties();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  private loadAllSpecialties() {
    this.specialtyService.getAll().subscribe(specialties => this.specialties = specialties);
  }

  specifySpecialty() {
    this.loading = true;
    const user = JSON.parse(localStorage.getItem('currentUser'));
    this.specialtyService.saveRole(this.specialty, user).subscribe(
      data => {
        this.alertService.success('Specialty specification successful', true);
        user['specialty'] = this.specialty.specialty;
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.router.navigate([this.returnUrl]);
      },
      error => {
        this.alertService.error(error);
        this.loading = false;
      });
  }

}
