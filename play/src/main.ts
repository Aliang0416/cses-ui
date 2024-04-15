import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

// 根据系统主题色切换对应的类名
function setThemeClass() {
  if (darkModeMediaQuery.matches) {
    document.documentElement.setAttribute("data-theme", 'dark');
  } else {
    document.documentElement.setAttribute("data-theme", 'light');
  }
}

setThemeClass();

// 监听主题设置变化
darkModeMediaQuery.addEventListener('change', setThemeClass);
bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);
