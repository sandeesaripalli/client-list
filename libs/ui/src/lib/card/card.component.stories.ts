import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { CardComponent } from './card.component';

export default {
  title: 'CardComponent',
  component: CardComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<CardComponent>;

const Template: Story<CardComponent> = (args: CardComponent) => ({
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
  data:[{
    name: "Brendon Taylor",
      title: "Supervisor",
      avatar: "https://avataaars.io/?avatarStyle=Circle&topType=NoHair&accessoriesType=Blank&facialHairType=BeardLight&facialHairColor=BrownDark&clotheType=Hoodie&clotheColor=Gray01&eyeType=Surprised&eyebrowType=UpDown&mouthType=Twinkle&skinColor=Brown",
      quote: "I am a super-visor!",
      nationality: "New Zealand"
  }]
}