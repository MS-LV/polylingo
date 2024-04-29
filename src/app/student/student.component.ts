import { Component, OnInit, signal, OnDestroy, viewChild } from '@angular/core';
import {
  Router,
  RouterOutlet,
  RouterLink,
  RouterLinkActive,
  NavigationStart,
} from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule, MatDrawer } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay, tap } from 'rxjs/operators';
import { RoutesPath } from '@/app.interface';
import { StudentService } from '@/student/student.service';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss'],
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    RouterLinkActive,
    MatMenuModule,
  ],
  providers: [StudentService],
})
export class StudentComponent implements OnInit, OnDestroy {
  drawer = viewChild.required(MatDrawer)
  routerPaths = signal<RoutesPath[]>([]);
  isHandset = signal(true);
  menuList = signal([
    { title: 'Profile', icon: 'person', router: '/student/profile' },
    { title: 'Logout', icon: 'logout', router: '/welcome' },
  ]);

  private isHandset$!: Observable<boolean>;
  constructor(
    private router: Router,
    private breakpointObserver: BreakpointObserver,
    private service: StudentService
  ) {}

  ngOnInit(): void {
    this.checkLayout();
    this.setRouterLinks();
    this.onRouterNavigate();
  }

  private onRouterNavigate() {
    this.router.events.subscribe((event: any) => {
      if (this.isHandset() && event instanceof NavigationStart) {
        this.drawer().close();
      }
    });
  }
  private setRouterLinks() {
    const routes = this.service.routerLinks();
    this.routerPaths.set(routes);
  }

  private checkLayout() {
    this.isHandset$ = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
      tap((result: { matches: boolean }) => {
        this.isHandset.set(result.matches);
      }),
      map((result: { matches: boolean }) => result.matches),
      shareReplay()
    );
    this.isHandset$.subscribe();
  }

  ngOnDestroy() {
    this.isHandset$ = new Observable();
    this.routerPaths.set([]);
  }
}
