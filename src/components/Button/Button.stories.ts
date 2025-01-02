import Button from ".";

// type Story = StoryObj<typeof Button>;
export default {
  title: "Components/Button",
  component: Button,
};

export const Primary = {
  args: {
    children: "Click Me",
  },

  argTypes: {
    variant: {
      options: [
        "accent",
        "default",
        "destructive",
        "link",
        "ghost",
        "secondary",
        "outline",
      ],
      control: {
        type: "radio",
      },
    },
    size: {
      options: ["sm", "default", "lg", "icon"],
      control: {
        type: "radio",
      },
    },
    color: {
      control: {
        type: "color",
      },
    },
  },
};
