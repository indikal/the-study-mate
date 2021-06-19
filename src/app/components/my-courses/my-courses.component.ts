import { Component, OnInit, OnDestroy } from '@angular/core';
import { Course } from 'src/app/models/course';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CourseEditModalComponent } from './course-edit-modal/course-edit-modal.component';
import { CoursesStoreService } from 'src/app/services/courses-store.service';
import { FirstServiceService } from 'src/app/services/first-service.service';
import { Subscribable, Subscription } from 'rxjs';

@Component({
  selector: 'app-my-courses',
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.css']
})
export class MyCoursesComponent implements OnInit, OnDestroy {

  courses !: Course[];
  coursesSubscription !: Subscription;

  constructor(private modalService: NgbModal,
              private courseService: CoursesStoreService,
              private courseHelper: FirstServiceService) { }

  ngOnInit(): void {
    this.coursesSubscription = this.courseService.getCourses().subscribe(
      (newCourses: Course[]) => (this.courses = newCourses)
    );
  }

  ngOnDestroy(): void {
    this.coursesSubscription.unsubscribe();
  }

  createCourse() {
    this.courseHelper.openCourseModal( {
        title: '',
        imgUrl: '',
        description: '',
        price: null
      } as unknown as Course, 'Create course');
  }
}
