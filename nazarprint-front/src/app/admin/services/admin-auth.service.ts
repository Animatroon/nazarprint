import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class AdminAuthService {
  private readonly TOKEN_KEY = 'admin_token';
  private loggedIn$ = new BehaviorSubject<boolean>(this.hasToken());

  constructor(private http: HttpClient, private router: Router) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post<{ success: boolean; token: string; username: string }>(
      `${environment.apiUrl}/auth/login`,
      { username, password }
    ).pipe(
      tap(res => {
        if (res.success && res.token) {
          localStorage.setItem(this.TOKEN_KEY, res.token);
          this.loggedIn$.next(true);
        }
      })
    );
  }

  logout(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    this.loggedIn$.next(false);
    this.router.navigate(['/admin/login']);
  }

  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  isLoggedIn(): boolean {
    const token = localStorage.getItem(this.TOKEN_KEY);
    if (!token) return false;
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      if (payload.exp && payload.exp * 1000 < Date.now()) {
        localStorage.removeItem(this.TOKEN_KEY);
        return false;
      }
      return true;
    } catch {
      return false;
    }
  }

  isLoggedIn$(): Observable<boolean> {
    return this.loggedIn$.asObservable();
  }

  private hasToken(): boolean {
    return this.isLoggedIn();
  }
}
