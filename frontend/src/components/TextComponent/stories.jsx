import { TextComponent } from '.';

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi dicta ipsa fugiat doloribus porro? Tempora maiores delectus consectetur eveniet magni, aliquid accusamus illum ea voluptates modi ut. Eum, nihil molestias.`,
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  );
};
