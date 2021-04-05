import { BotaoTeste } from '.';

export default {
  title: 'BotaoTeste',
  component: BotaoTeste,
  args: {
    children: 'um fislho',
    light: 'false',
  },
  argTypes: {
    children: { type: 'string' },
    light: { type: 'boolean' },
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

export const Botao = (args) => <BotaoTeste {...args} />;
