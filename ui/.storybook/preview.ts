import {Preview} from '@storybook/angular';
import {setCompodocJson} from "@storybook/addon-docs/angular";
import * as docJson from '../src/documentation.json';
setCompodocJson(docJson);

const preview: Preview = {
  // globalTypes: {
  //   theme: {
  //     description: 'Global theme for components',
  //     defaultValue: 'light',
  //     toolbar: {
  //       title: 'Theme',
  //       icon: 'circlehollow',
  //       items: ['light', 'dark'],
  //       dynamicTitle: true,
  //     },
  //   },
  // },
  parameters: {
    layout: 'centered',
    options: {
      controls: {
        matcher: {
          color: /(background|color)$/i,
        }
      }
      // storySort: {
      //   order: ['*', 'button'],
      // }
    }
  },
  argTypes: {
  }
};

export default preview;
