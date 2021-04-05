import { Heading } from '.';

export default {
  title: 'Heading',
  component: Heading,
  args: {
    children: 'O texto está escuro',
    colorDark: false,
  },
  argTypes: {
    children: { type: 'string' },
    colorDark: { type: 'boolean' },
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

export const colorDark = (args) => <Heading {...args} />;
export const Dark = (args) => <Heading {...args} />;

colorDark.parameters = {
  backgrounds: {
    default: 'colorDark',
  },
};

Dark.args = {
  children: 'O texto está claro',
  colorDark: true,
};
