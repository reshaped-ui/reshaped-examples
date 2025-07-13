import { Button, Container, View, Text, useTheme, MenuItem } from "reshaped";

const Demo = () => {
  const { invertColorMode } = useTheme();

  return (
    <View align="center" justify="center" height="100vh">
      <Container width="600px">
        <View align="center" gap={3}>
          <Text variant="title-1">🎉</Text>
          <Text variant="title-5" align="center">
            Welcome to Reshaped
          </Text>
          <Text variant="featured-3" align="center" color="neutral-faded">
            Reshaped is a professionally crafted design system for everyday
            product development made to match your brand. In this example
            repository we're using it together with Vite.
          </Text>
          <View.Item gapBefore={6}>
            <Button
              size="large"
              color="primary"
              href="https://reshaped.so"
              attributes={{ target: "_blank" }}
            >
              Check our website
            </Button>
          </View.Item>
          <div className="bg-elevation-raised p-x4 l:p-x6 text-critical border border-neutral-faded rounded-medium shadow-raised">
            Tailwind is used here with Reshaped tokens
          </div>
          <Button color="primary" variant="outline" onClick={invertColorMode}>
            Invert color mode
          </Button>
        </View>
      </Container>
    </View>
  );
};

export default Demo;
