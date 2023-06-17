import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls, Stage, useAnimations, useFBX } from '@react-three/drei';
import { useEffect, useState } from 'react';
import { GridHelper, Color } from 'three';

const redColor = new Color('red');
const originalColor = new Color(0.07725600715363035,0.33729584719681505,0.4176000180482866)

function Model({
  b1Animate,
  b2Rotate,
  b3Position,
  b4Color
}) {
  const fbx = useFBX('robot1.fbx');
  const { animations } = fbx;
  const { actions } = useAnimations(animations, fbx);

  useEffect(() => {
    if( b4Color ){
      fbx.children[1].material.color = redColor;
    }
    else{
      fbx.children[1].material.color = originalColor;
    }
  },[fbx, b4Color])

  useEffect(() => {
    // mixamo.com o Take 001
    if(b1Animate){
      actions['mixamo.com'].play();
    }
    else{
      actions['mixamo.com'].stop()
    }
  }, [actions, b1Animate]);

  return (
    <group
      rotation={ b2Rotate ? [0, Math.PI / 2, 0] : [0, 0, 0]}
      position={ b3Position ? [60,0,150] : [0,0,0]}
    >
      <primitive object={fbx} />
    </group>
  );
}

export function Body({
  b1Animate,
  b2Rotate,
  b3Position,
  b4Color
}) {
  const [dimensions, setDimensions] = useState({ 
    height: window.innerHeight,
    width: window.innerWidth
  });

  useEffect(() => {
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      });
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Canvas style={{ width: dimensions.width, height: dimensions.height * 0.85 }}>
    <Environment background files='grey.hdr' blur={1} />
    <OrbitControls />
    <Stage>
      <Model
        b1Animate={b1Animate}
        b2Rotate={b2Rotate}
        b3Position={b3Position}
        b4Color={b4Color} 
      />
      <primitive object={new GridHelper(1000, 10, 'grey', 'grey')} position={[0, 0, 0]} />
    </Stage>
  </Canvas> 
  );
}
