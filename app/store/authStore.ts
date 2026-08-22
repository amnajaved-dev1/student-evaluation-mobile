import { makeAutoObservable } from "mobx";

class AuthStore {
  isLoggedIn = false;
  role: "admin" | "teacher" | "student" | null = null;
  name: string = "";

  constructor() {
    makeAutoObservable(this);
  }

  login(role: "admin" | "teacher" | "student", name: string) {
    this.isLoggedIn = true;
    this.role = role;
    this.name = name;
  }

  logout() {
    this.isLoggedIn = false;
    this.role = null;
    this.name = "";
  }
}

export const authStore = new AuthStore();
