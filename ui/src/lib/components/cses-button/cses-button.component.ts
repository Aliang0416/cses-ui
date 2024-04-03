import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgIf} from '@angular/common';
/**
 * 按钮大小,default和large高度40，small高度32
 */
type ButtonSize = 'small' | 'default' | 'large';
// primary主色按钮，default默认按钮，column列（上下排）按钮，text文字按钮
type ButtonType = 'primary' | 'default' | 'column' | 'text';

/**
 * 基础按钮组件
 * @example <cses-button type="default">默认类型按钮</cses-button>
 */
@Component({
  selector: 'cses-button',
  templateUrl: './cses-button.component.html',
  imports: [NgIf],
  standalone: true
})
export default class CsesButton {
  /**
   * 图标名称,默认前缀为CSES
   * @desc 这句话不会出现在文档中。不过ts可以查询到这个注释
   * @deprecated 表示被废除了
   */
  @Input('icon') iconName: string;
  /**
   * 图标前缀，如有需要可以修改
   */
  @Input('iconPrefix') iconPrefix = 'CSES';

  /**
   * @link ButtonSize
   */
  @Input('size') size: ButtonSize = 'default';
  /**
   * 按钮类型, type值为text和column时，size无效，且icon为必须
   */
  @Input('type') type: ButtonType = 'default';
  /**
   * 是否禁用
   */
  @Input('disabled') disabled: boolean = false;
  /**
   * 点击事件
   */
  @Output('click') click = new EventEmitter<MouseEvent>();

  /**
   * @ignore
   */
  protected onClick(event: MouseEvent) {
    event.stopPropagation();
    if (this.disabled) return;
    this.click.emit(event);
  }

  private _defaultIcon = 'cses-add';
}
