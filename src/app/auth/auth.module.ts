import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { SigninComponent } from "./signin/signin.component";
import { MatButtonModule } from "@angular/material/button";

const routes: Routes = [
  {
    path: "",
    component: SigninComponent,
  },
];

@NgModule({
  declarations: [SigninComponent],
  imports: [CommonModule, MatButtonModule, RouterModule.forChild(routes)],
})
export class AuthModule {}
