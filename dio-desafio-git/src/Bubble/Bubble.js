import React, { useState } from "react";
import { useSpring, useTrail, animated } from "react-spring";
import { Container, Text } from "../Styled";

const Bubble = ({ x, y }) => {
  const [isPopping, setIsPopping] = useState(false);

  const { xPosition, yPosition, size } = useSpring({
    from: { xPosition: x, yPosition: y, size: 0 },
    to: async (next) => {
      while (!isPopping) {
        await next({
          xPosition: x + getRandomInt(-150, 150),
          yPosition: y + getRandomInt(-50, 50),
          size: getRandomInt(10, 150),
        });
      }
      await next({ size: 0 });
    },
    config: { mass: 1, tension: 150, friction: 30 },
  });

  const pop = () => setIsPopping(true);

  return (
    <div>
    <animated.div
      style={{ position: "absolute", left: xPosition, top: yPosition }}
    >
      <animated.div
        style={{
          width: size,
          height: size,
          borderRadius: "50%",
          backgroundColor: "pink",
    
        }}
        onClick={pop}
      />
    </animated.div>
    </div>
  );
};


const BubbleContainer = () => {
  const bubbles = Array.from({ length: 20 }, () => ({ x: getRandomInt(0, window.innerWidth), y: getRandomInt(0, window.innerHeight) }));

  const bubbleTrail = useTrail(bubbles.length, {
    from: { opacity: 0 },
    to: { opacity: 5 },
    delay: 100,
    config: { mass: 1, tension: 200, friction: 20 }
  });

  return (
    <Container>
      <Text>
        Aplicação para teste de versionamento de repositório.
      </Text>
      {bubbleTrail.map((props, index) => (
        <animated.div key={index} style={props}>
          <Bubble x={bubbles[index].x} y={bubbles[index].y} />
        </animated.div>
      ))}
    </Container>
  );
};

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export default BubbleContainer;