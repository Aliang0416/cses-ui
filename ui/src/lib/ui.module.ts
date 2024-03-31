import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { ButtonDirective } from './button.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [ButtonComponent, ButtonDirective],
})
export class UiModule {}
