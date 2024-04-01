import { Preview } from '@storybook/angular';
import {setCompodocJson} from "@storybook/addon-docs/angular";
import * as docJson from '../src/documentation.json';
setCompodocJson(docJson);

const preview: Preview = {
  parameters: {
    layout: 'centered',
  },
  // argTypes: {
  //   color: {
  //     control: {
  //       type: 'color',
  //     }
  //   },
  //   backgroundColor: {
  //     control: {
  //       type: 'color',
  //     }
  //   }
  // }
};

export default preview;
