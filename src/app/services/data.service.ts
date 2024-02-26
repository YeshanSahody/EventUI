import { Injectable } from '@angular/core';
// import { Role } from '../models/user/role';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // usersList = [
  //   {
  //     userId: 1,
  //     username: 'john_doe',
  //     password: 'securepass123',
  //     role: Role.student,
  //     email: 'john.doe@example.com',
  //     firstName: 'John',
  //     lastName: 'Doe',
  //     dateOfBirth: new Date('1995-03-12'),
  //     phone: '555-111-2233',
  //     avatar: 'https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8'
  //   },
  //   {
  //     userId: 2,
  //     username: 'emma_smith',
  //     password: 'password321',
  //     role: Role.student,
  //     email: 'emma.smith@example.com',
  //     firstName: 'Emma',
  //     lastName: 'Smith',
  //     dateOfBirth: new Date('1998-07-28'),
  //     phone: '555-222-3344',
  //     avatar: 'https://images.unsplash.com/photo-1610981755415-3f7c9202cccb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8'
  //   },
  //   {
  //     userId: 3,
  //     username: 'mike_jones',
  //     password: 'mikepass123',
  //     role: Role.student,
  //     email: 'mike.jones@example.com',
  //     firstName: 'Mike',
  //     lastName: 'Jones',
  //     dateOfBirth: new Date('1993-11-05'),
  //     phone: '555-333-4455',
  //     avatar: 'https://images.unsplash.com/photo-1638803040283-7a5ffd48dad5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D'
  //   },
  //   {
  //     userId: 4,
  //     username: 'sara_miller',
  //     password: 'sara123pass',
  //     role: Role.student,
  //     email: 'sara.miller@example.com',
  //     firstName: 'Sara',
  //     lastName: 'Miller',
  //     dateOfBirth: new Date('1997-02-18'),
  //     phone: '555-444-5566',
  //     avatar: 'https://images.unsplash.com/photo-1639628735078-ed2f038a193e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D'
  //   },
  //   {
  //     userId: 5,
  //     username: 'alex_turner',
  //     password: 'alexpass321',
  //     role: Role.student,
  //     email: 'alex.turner@example.com',
  //     firstName: 'Alex',
  //     lastName: 'Turner',
  //     dateOfBirth: new Date('1994-06-30'),
  //     phone: '555-555-6677',
  //     avatar: 'https://images.unsplash.com/photo-1529335764857-3f1164d1cb24?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8'
  //   },

  //   {
  //     userId: 6,
  //     username: 'lisa_jackson',
  //     password: 'lisapass456',
  //     role: Role.student,
  //     email: 'lisa.jackson@example.com',
  //     firstName: 'Lisa',
  //     lastName: 'Jackson',
  //     dateOfBirth: new Date('1996-08-22'),
  //     phone: '555-666-7788',
  //     avatar: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8'
  //   }
  // ];

  constructor(private storageService: StorageService) { }

  // seedUsers() {
  //   this.storageService.set('users', this.usersList);
  // }

  // getUsers() {
  //   return this.usersList;
  // }
}
