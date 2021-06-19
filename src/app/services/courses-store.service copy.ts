import { Injectable } from '@angular/core';
import { Course } from "../models/course";
import { Observable, BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesStoreMemoryService {

  courses: Course[] = [
    {
      id: this.generateId(),
      title: 'Angular workshop',
      imgUrl: 'assets/angular-3-logo.png',
      price: 50,
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!',
      starRating: 4
    },
    {
      id: this.generateId(),
      title: 'React for dummies',
      imgUrl: 'assets/react.png',
      price: 50,
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!',
      starRating: 4
    },
    {
      id: this.generateId(),
      title: 'Java one',
      imgUrl: 'assets/java-one.jpg',
      price: 50,
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!',
      starRating: 4
    },
    {
      id: this.generateId(),
      title: 'Python cookbook',
      imgUrl: 'assets/python.png',
      price: 50,
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!',
      starRating: 4
    },
    {
      id: this.generateId(),
      title: 'Master mongo DB',
      imgUrl: 'assets/mongo.png',
      price: 50,
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!',
      starRating: 4
    },
    {
      id: this.generateId(),
      title: 'AMQP in 24 hours',
      imgUrl: 'assets/amqp.png',
      price: 50,
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!',
      starRating: 4
    },
    {
      id: this.generateId(),
      title: 'Data Science',
      imgUrl: 'assets/amqp.png',
      price: 80,
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!',
      starRating: 4
    }
  ];

  coursesObservable: Subject<Course[]>;

  constructor() { 
    this.coursesObservable = new BehaviorSubject(this.courses);
  }

  public generateId(): string {
    return Math.round(Math.random() * 10000) + '';
  }

  getCourses(): Observable<Course[]> {
    return this.coursesObservable;
  }

  createCourse(newCourse: Course) {
    newCourse.id = this.generateId(),
    this.courses.push(newCourse);
    this.coursesObservable.next( [...this.courses]); //'...' is used to copy the array content
  }

  updateCourse(modifiedCourse: Course) {
    const idx = this.courses.findIndex( 
      thisCourse => modifiedCourse.id === thisCourse.id
    );
    this.courses[idx] = modifiedCourse;
    this.coursesObservable.next( [...this.courses]);
  }

  deleteCourse(deletedCourse: Course) {
    const idx = this.courses.findIndex( 
      thisCourse => deletedCourse.id === thisCourse.id
    );
    this.courses.splice(idx, 1);
    this.coursesObservable.next( [...this.courses]);
  }
}
