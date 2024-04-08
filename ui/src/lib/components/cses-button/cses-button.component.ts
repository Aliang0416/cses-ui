import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgIf} from '@angular/common';
import {ButtonSize, ButtonType} from "./cses-button.type";

/**
 * 基础按钮组件
 * @example <cses-button label=“按钮” />
 */
@Component({
  selector: 'cses-button',
  templateUrl: './cses-button.component.html',
  imports: [NgIf],
  standalone: true
})
export default class CsesButton {
  /**
   * 图标名
   */
  @Input('icon') iconName: string = '';
  /**
   * 图标前缀，如有需要可以修改
   */
  @Input('iconPrefix') iconPrefix = 'CSES';
  /**
   * 按钮文本
   */
  @Input('label') label = ''
  /**
   * 按钮尺寸
   */
  @Input('size') size: ButtonSize = 'default';
  /**
   * 按钮类型, type值为text和column时，size无效，且icon为必须
   */
  @Input('type') type: ButtonType = 'default';
  /**
   * 是否禁用
   */
  @Input('disabled') disabled = false;
  /**
   * 点击事件
   */
  @Output('click') click = new EventEmitter<MouseEvent>();

  protected onClick(event: MouseEvent) {
    event.stopPropagation();
    if (this.disabled) return;
    this.click.emit(event);
  }
}
