import { StyleSheet, Text, View } from 'react-native';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import Model from './src/Model';
import useControls from "r3f-native-orbitcontrols"

export default function App() {
  const [OrbitControls, events] = useControls()

  return (
    <View style={{flex: 1}}>
      <Canvas style={{flex: 1}}>
        <OrbitControls enablePan={true} />
        <directionalLight position={[0.5, 1, 10]} args={['#9E9E9E', 2]} />
        <directionalLight position={[-1, 1, 10]} args={['#9E9E9E', 2]} />
        <directionalLight position={[1, 1, 10]} args={['#9E9E9E', 2]} />
        <Suspense fallback={null}>
          <Model/>
        </Suspense>
      </Canvas>
    </View>
  );
}