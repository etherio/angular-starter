import { AuthService } from "./auth.service";

export function initializeApp(authService: AuthService) {
  const firebaseConfig = {
    apiKey: "AIzaSyBgkNJBP6moWUoBEuOjBd2Yg1EuKsPHx1Q",
    appId: "1:499374745893:web:ae59292b3d99c41b7e12cc",
    authDomain: "omg-baby.firebaseapp.com",
    databaseURL: "https://omg-baby-default-rtdb.firebaseio.com",
    measurementId: "G-VEF70B6QLW",
    messagingSenderId: "499374745893",
    projectId: "omg-baby",
    storageBucket: "omg-baby.appspot.com",
  };
  return () => authService.initializeApp(firebaseConfig);
}
