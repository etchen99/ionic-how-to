import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { IonicModule, Platform } from 'ionic-angular';

import { HomePageModule } from '../pages/home/home.module';
import { MyApp } from './app.component';

describe('MyApp', () => {
  let component: MyApp;
  let fixture: ComponentFixture<MyApp>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [MyApp],
        imports: [IonicModule.forRoot(MyApp), HomePageModule],
        providers: [StatusBar, SplashScreen],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(MyApp);
    component = fixture.componentInstance;

    spyOn(Platform.prototype, 'ready').and.returnValue(Promise.resolve(0));
    spyOn(StatusBar.prototype, 'styleDefault');
    spyOn(SplashScreen.prototype, 'hide');
  });

  it('component is created', () => {
    expect(component instanceof MyApp).toBeTruthy();
  });

  it('side menu has 2 pages', () => {
    expect(component.pages.length).toBe(2);
  });

  describe('when the application initialize', () => {
    it('waits for the platform to be ready', async () => {
      await component.initializeApp();

      const platform = TestBed.get(Platform);

      expect(platform.ready).toHaveBeenCalled();
    });

    describe('and when the platform is ready', () => {
      it('sets status bar to default style', async () => {
        await component.initializeApp();

        const statusBar: StatusBar = TestBed.get(StatusBar);

        expect(statusBar.styleDefault).toHaveBeenCalled();
      });

      it('hide the splash screen', async () => {
        await component.initializeApp();

        const splashScreen: SplashScreen = TestBed.get(SplashScreen);

        expect(splashScreen.hide).toHaveBeenCalled();
      });
    });
  });

  describe('when a navigation item is clicked on the menu', () => {
    it('opens requested page', () => {
      spyOn(component.nav, 'setRoot');

      component.openPage({});

      expect(component.nav.setRoot).toHaveBeenCalled();
    });
  });
});
