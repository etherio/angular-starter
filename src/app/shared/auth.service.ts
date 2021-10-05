import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import firebase from "firebase/app";
@Injectable({
  providedIn: "root",
})
export class AuthService {
  private currentUser$ = new BehaviorSubject<firebase.User | null>(null);

  constructor() {
    firebase.auth().onAuthStateChanged((user) => this.currentUser$.next(user));
  }

  getCurrentUser() {
    return this.currentUser$;
  }
}
