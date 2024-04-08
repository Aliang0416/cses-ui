enum controlType {
  /**
   * 不提供任何控件
   */
  none = 'none',
  /**
   * 提供用于在可能状态之间切换的切换开关
   */
  boolean = 'boolean',
  /**
   * 提供数值输入以包含所有可能值的范围
   * @example argTypes: { even: { control: { type: 'number', min:1, max:30, step: 2 } }}
   */
  number = 'number',
  /**
   * 提供范围滑块组件以包含所有可能的值
   * @example argTypes: { odd: { control: { type: 'range', min: 1, max: 30, step: 3 } }}
   */
  range = 'range',
  /**
   * 提供基于 JSON 的编辑器组件来处理对象的值
   * @example argTypes: { user: { control: 'object' }}
   */
  object = 'object',
  /**
   * 提供基于 JSON 的编辑器组件来处理数组的值
   * @example argTypes: { users: { control: 'object' }}
   */
  array = 'array',
  /**
   * 提供用于输入文本的输入框
   */
  text = 'text',
  /**
   * 提供颜色选取器组件来处理颜色值。
   */
  color = 'color',
  /**
   * 提供日期选择器组件来处理日期值。
   */
  date = 'date',
  /**
   * 提供返回 URL 数组的文件输入组件, 可以搭配 accept 属性用于限制文件类型
   * @example argTypes: { avatar: { control: { type: 'file', accept: '.png' } }}
   */
  file = 'file',
  /**
   * 根据可用选项提供一组单选按钮。
   * @example argTypes: { contact: { control: 'radio', options: ['email', 'phone', 'mail'] }}
   */
  radio = 'radio',
  /**
   * 根据可用选项提供一组内联单选按钮。
   * @example argTypes: { contact: { control: 'inlineRadio', options: ['email', 'phone', 'mail'] }}
   */
  inlineRadio = 'inlineRadio',
  /**
   * 根据可用选项提供一组复选框。
   * @example argTypes: { contact: { control: 'check', options: ['email', 'phone', 'mail'] }}
   */
  check = 'check',
  /**
   * 根据可用选项提供一组内联复选框。
   * @example argTypes: { contact: { control: 'inlineCheck', options: ['email', 'phone', 'mail'] }}
   */
  inlineCheck = 'inlineCheck',
  /**
   * 提供用于处理单个值选择的下拉列表组件。
   * @example argTypes: { age: { control: 'select', options: [20, 30, 40, 50] }}
   */
  select = 'select',
  /**
   * 提供用于处理多个值选择的下拉列表组件。
   * @example argTypes: { countries: { control: 'multi-select', options: ['USA', 'Canada', 'Mexico'] }}
   */
  multiSelect = 'multiSelect',
}

interface IControl {
  // 控件类型
  type: `${controlType}`,
  // 是否禁用
  disable?: boolean,
  // 指定要从“控件”插件面板中排除的属性。名称与正则表达式匹配或属于数组的任何属性都将被排除在外。
  exclude?: string[] | RegExp[],
  // 在“控件”插件面板中显示每个属性的完整文档，包括说明和默认值。
  expanded?: boolean
  // 隐藏未为文章定义任何控件时出现的警告
  hideNoControlsWarning?: boolean
  // 指定要包含在“控件”加载项面板中的属性。任何名称与正则表达式不匹配或不属于数组的属性都将被排除在外
  include?: string[] | RegExp[],
  // 为颜色选取器控件指定预设色板。颜色值 许多是任何有效的 CSS 颜色。
  presetColors?: (string | { color: string; title?: string })[],
  /**
   * 指定控件的排序方式
   * + none：未排序，按处理 arg 类型的相同顺序显示
   * + alpha：按 arg 类型名称的字母顺序排序
   * + requiredFirst：与 alpha 相同，首先显示任何必需的 arg 类型
   * @default 'none'
   *
   */
  sort?: 'none' | 'alpha' | 'requiredFirst',
}

interface IArgType {
  control?: IControl,
  description?: string,
  defaultValue?: any,

  [key: string]: any
}

export const globalArgTypes: {
  [key: string]: IArgType
} = {
  color: {
    control: {type: 'color'},
    description: '颜色',
  },
  iconPrefix: {
    control: {type: 'text'},
    description: '图标前缀',
    defaultValue: 'CSES',
  }
}

export const type = (globalArgType: keyof typeof globalArgTypes, params?: IArgType) => {
  return {
    ...globalArgTypes[globalArgType],
    ...params
  }
}

