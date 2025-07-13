import { Container, View, Text, Button } from "reshaped";
import s from "./Demo.module.css";

const Demo = () => {
  return (
    <View align="center" justify="center" height="100vh">
      <Container width="600px">
        <View gap={3} align="center">
          <Text variant="title-1">🎉</Text>
          <Text variant={{ s: "title-6", l: "title-5" }} align="center">
            Welcome to Reshaped
          </Text>
          <Text variant="featured-3" align="center" color="neutral-faded">
            Reshaped is a professionally crafted design system for everyday
            product development made to match your brand. In this example
            repository we&apos;re using it together with NextJS
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

          <div className={s.customComponent}>Custom component with styles</div>

          <div className="w-[200px] h-[200px] flex bg-neutral-faded justify-center items-center rounded-medium">
            Tailwind styles
          </div>
        </View>
      </Container>
    </View>
  );
};

export default Demo;
