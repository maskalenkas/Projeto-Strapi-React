import { Heading } from '.';

export default {
  title: 'Heading',
  component: Heading,
  // Vão ser passados para o componente heading
  args: {
    children: 'Não sei',
    light: 'false',
  },
  // Os tipos de argumentos passados
  argTypes: {
    children: { type: 'string' },
    light: { type: 'boolean' },
  },

  // Os parametros, para o proprio heading (a pasta pai de tudo)
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

export const Dark = (args) => <Heading {...args} />;
export const Light = (args) => <Heading {...args} />;

// Mais especificidade
Light.parameters = {
  backgrounds: {
    default: 'light',
  },
};

Light.args = {
  children: 'O texto era claro',
  light: false,
};
