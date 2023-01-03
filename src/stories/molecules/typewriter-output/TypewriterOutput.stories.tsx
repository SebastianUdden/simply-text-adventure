import { Story, Meta } from "@storybook/react";
import TypewriterOutput, { TypewriterOutputProps } from "./TypewriterOutput";

export default {
  title: "TypewriterOutput",
  component: TypewriterOutput,
} as Meta;

const Template: Story<TypewriterOutputProps> = (args) => (
  <TypewriterOutput {...args} />
);
export const Default = Template.bind({});
export const LongText = Template.bind({});

Default.args = {
  text: "This is typewriter output text, that's medium length...",
  speedMS: 50,
};

LongText.args = {
  text: `I'm baby raw denim actually single-origin chillwave edison bulb.

  Fam woke kickstarter flexitarian vinyl,\npalo santo tilde you probably haven't heard of them chicharrones trust fund pickled taxidermy everyday carry tofu butcher. Vice artisan pok pok, coloring book gastropub VHS wolf chicharrones 3 wolf moon austin everyday carry normcore slow-carb. Waistcoat sartorial vape, slow-carb church-key literally mumblecore flannel DSA next level +1. Ethical plaid mlkshk cred tumblr.\n
  Ennui fingerstache kombucha, 3 wolf moon keytar green juice gentrify glossier mustache neutra hexagon hoodie scenester seitan. Poke meh salvia pinterest, cornhole heirloom +1 organic art party copper mug schlitz biodiesel tousled health goth. Before they sold out kickstarter raw denim, viral Brooklyn helvetica poke pok pok la croix direct trade scenester street art offal chillwave. Succulents pok pok narwhal, praxis forage master cleanse kogi. Neutra before they sold out hammock cloud bread iceland. JOMO paleo banjo cloud bread authentic swag scenester direct trade meggings DSA VHS. Tumeric taiyaki bruh truffaut air plant godard, butcher chia lo-fi fit.\nSmall batch praxis +1 chartreuse thundercats. Church-key ramps farm-to-table etsy yr blog. Glossier praxis kale chips, trust fund humblebrag try-hard VHS pug mukbang 90's single-origin coffee cardigan poke. Subway tile fashion axe snackwave tumblr, brunch green juice tattooed DIY yuccie.\n3 wolf moon cardigan gluten-free leggings. Lo-fi brunch fit cred drinking vinegar godard bushwick, tonx cornhole big mood. Yuccie stumptown sus, trust fund microdosing portland pok pok aesthetic everyday carry squid cloud bread. Adaptogen before they sold out austin kombucha plaid mukbang cray distillery four loko shoreditch pickled man braid. Meh before they sold out tumeric, chillwave chicharrones whatever wayfarers truffaut cliche forage bitters four loko gochujang banjo.`,
  speedMS: 50,
};
