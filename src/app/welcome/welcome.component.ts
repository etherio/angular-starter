import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { AuthService } from "../shared/auth.service";
import firebase from "firebase/app";

@Component({
  selector: "app-welcome",
  templateUrl: "./welcome.component.html",
  styleUrls: ["./welcome.component.scss"],
})
export class WelcomeComponent implements OnInit {
  currentUser$!: Observable<firebase.User | null>;

  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    this.currentUser$ = this.auth.getCurrentUser();
  }
}
