import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'src/app/models/course';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {

  course: Course;

  constructor(private thisRoute: ActivatedRoute) {
    this.course = {
      id: '0',
      title: '',
      imgUrl: '',
      price: 0,
      description: '',
      starRating: 0
    };
   }

  ngOnInit(): void {
    const id = this.thisRoute.snapshot.paramMap.get('id');
    console.log(id);

    /* const selectedCourse = courseList.find(c => c.title === id);
    if (selectedCourse) {
      this.course = selectedCourse;
    } */
  }

}
