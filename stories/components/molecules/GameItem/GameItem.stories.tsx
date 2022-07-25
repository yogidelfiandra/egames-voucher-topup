import { ComponentMeta, ComponentStory } from '@storybook/react';
import GameItem, {
  GameItemProps,
} from '../../../../components/molecules/GameItem';

export default {
  title: 'Components/Molecules/GameItem',
  component: GameItem,
} as ComponentMeta<typeof GameItem>;

const Template: ComponentStory<typeof GameItem> = (args: GameItemProps) => (
  <GameItem {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: 'Mobile Legend',
  thumbnail: 'Thumbnail-3',
  category: 'mobile',
};
