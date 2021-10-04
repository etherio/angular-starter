import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import firebase from "firebase/app";
import { AuthService } from "./firebase/auth.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  constructor(private $auth: AuthService, private $http: HttpClient) {}

  ngOnInit(): void {
    this.$auth.getIdToken().subscribe((token) => {
      console.log("token", token);
    });
  }
}
