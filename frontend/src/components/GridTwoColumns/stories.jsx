import { GridTwoColumns } from '.';

export default {
  title: 'GridTwoColumns',
  component: GridTwoColumns,
  args: {
    title: 'Grid two columns',
    text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure temporibus a magnam ratione? Quos assumenda fugit blanditiis quam praesentium aperiam vel deserunt itaque maxime accusantium. Labore porro nesciunt ipsa qui?`,
    srcImg: 'assets/images/javascript.svg',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <GridTwoColumns {...args} />
    </div>
  );
};
