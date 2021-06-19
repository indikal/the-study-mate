import { Injectable } from '@angular/core';
import { Course } from '../models/course';
import { CourseEditModalComponent } from '../components/my-courses/course-edit-modal/course-edit-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn: 'root'
})
export class FirstServiceService {

  greetings = 'FirstSevice service created!';

  constructor(private modalService: NgbModal) {
    console.log(this.greetings);
  }

  public anotherGreeting() {
    console.log('Greetings again!!');
  }

  public openCourseModal( course: Course, title: string ): Promise<any> {
    const modalRef = this.modalService.open(CourseEditModalComponent);
    modalRef.componentInstance.modalTitle = title;
    modalRef.componentInstance.course = course;

    return modalRef.result;
  }
}
