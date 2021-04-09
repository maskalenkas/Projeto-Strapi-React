import { Contador } from '.';

export default {
  title: 'Contador',
  component: Contador,
  args: {
    numeroAumentar: 1,
    numeroInicial: 0,
  },
  argTypes: {
    numeroAumentar: { type: 'int' },
    numeroInicial: { type: 'int' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <Contador {...args} />
    </div>
  );
};
