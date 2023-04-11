import React, {PropsWithChildren, useRef} from 'react';
import {Pressable, PressableProps, Text} from 'react-native';

interface IDoublePressable extends PressableProps {
  onDoublePress?: () => void;
}

const DoublePressable = ({
  onDoublePress = () => {},
  ...props
}: IDoublePressable) => {
  const lastTapRef = useRef(0);

  const handleDoublePress = () => {
    const now = Date.now();
    if (now - lastTapRef.current < 300) {
      onDoublePress();
    }

    lastTapRef.current = now;
  };

  return (
    <Pressable onPress={handleDoublePress} {...props}>
      {props.children}
    </Pressable>
  );
};

export default DoublePressable;
