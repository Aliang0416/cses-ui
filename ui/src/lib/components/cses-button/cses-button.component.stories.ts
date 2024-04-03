import type { Meta, StoryObj } from '@storybook/angular';
import CsesButton from './cses-button.component';
import {globalArgTypes} from "../../globalArgTypes";

const meta: Meta<CsesButton> = {
  component: CsesButton,
  title: 'CsesButton',
  parameters: {
    order: 'button',
  },
  argTypes: {
    color: globalArgTypes.color,
  }
  // title: 'Components/CsesButton',
};
export default meta;
type Story = StoryObj<CsesButton>;

export const eachType: Story = {
  name: '各种类型',
  parameters: {
  },
  args: {

  },
  render: (args) => ({
    template: `<cses-button type="default" label="默认类型" />
<br>
<br>
<cses-button type="primary" label="主色按钮" />
<br>
<br>
<cses-button type="text" label="文本按钮" />
`,
  })
};
export const Text: Story = {
  name: '带文字',
  args: {
    label: '按钮',
    size: 'default',
    type: 'default',
    disabled: false,
  },
  render: (args) => ({
    template: `<cses-button [disabled]="false" (click)="onClick($event)">按钮</cses-button>`,
    props: {
      enabled: true,
      onClick: (event: MouseEvent) => {
        console.log('click', event);
      }
    }
  })
};
