import type { Meta, StoryObj } from '@storybook/angular';
import CsesButton from './cses-button.component';

const meta: Meta<CsesButton> = {
  component: CsesButton,
  title: 'CsesButton',
  // title: 'Components/CsesButton',
};
export default meta;
type Story = StoryObj<CsesButton>;

export const eachType: Story = {
  name: '各种类型',
  parameters: {
    actions: {
    }
  },
  render: (args) => ({
    template: `<cses-button type="default">默认类型按钮</cses-button>
<br>
<br>
<!--<cses-button type="column" >上按钮下文字</cses-button>-->
<cses-button type="primary">主色按钮</cses-button>
<br>
<br>
<cses-button type="text">纯文本类型</cses-button>
<a href="http://localhost:4400/?path=/docs/%E5%85%B3%E4%BA%8E-%E9%9C%80%E7%9F%A5">跳转</a>
`,
  })
};
export const Text: Story = {
  name: '带文字',
  args: {
    size: 'default',
    type: 'default',
    disabled: false,
  },
  // render: (args) => ({
  //   template: `<cses-button [disabled]="false" (click)="onClick($event)">按钮</cses-button>`,
  //   props: {
  //     onClick: (event: MouseEvent) => {
  //       console.log('click', event);
  //     }
  //   }
  // })
};
