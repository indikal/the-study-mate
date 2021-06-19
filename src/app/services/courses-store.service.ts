import { Injectable } from '@angular/core';
import { Course } from '../models/course';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CoursesStoreService {


  constructor(private firestore: AngularFirestore) {
  }

  public generateId(): string {
    return this.firestore.createId();
  }

  getCourses(): Observable<Course[]> {
    return this.firestore.collection<Course>('courses').valueChanges();
  }

  createCourse(newCourse: Course) {
    newCourse.id = this.generateId();
    this.firestore.collection('courses').doc<Course>(newCourse.id).set(newCourse);
  }

  updateCourse(modifiedCourse: Course) {
    this.firestore.collection('courses').doc<Course>(modifiedCourse.id).update(modifiedCourse);
  }

  deleteCourse(deletedCourse: Course) {
    this.firestore.collection('courses').doc<Course>(deletedCourse.id).delete();
  }
}
