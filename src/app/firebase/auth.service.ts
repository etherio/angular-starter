import { Injectable } from "@angular/core";
import firebase from "firebase/app";
import "firebase/auth";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private token$ = new BehaviorSubject<string | null>(null);

  initializeApp(firebaseConfig: any): void {
    if (!firebase.apps.length) {
      firebase
        .initializeApp(firebaseConfig)
        .auth()
        .onAuthStateChanged(async (user) => {
          user && this.token$.next(await user.getIdToken());
        });
    }
  }

  getIdToken() {
    return this.token$;
  }
}
