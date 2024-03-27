import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei/native'

export default function Model(props) {
  const { nodes, materials } = useGLTF(require('../src/Model.glb'))
  return (
    <group {...props} dispose={null} scale={1}>
      <group position={[0, 1.817, 0]} scale={[1.848, 1.406, 1.848]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle009.geometry}
          material={materials.Blue}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle009_1.geometry}
          material={materials.Wood}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle009_2.geometry}
          material={materials['Material.004']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle009_3.geometry}
          material={materials['Stone 2']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle009_4.geometry}
          material={materials.Wall}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle009_5.geometry}
          material={materials['Crystal glow']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle009_6.geometry}
          material={materials.Crystal}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle009_7.geometry}
          material={materials.Rocks}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle009_8.geometry}
          material={materials['Material.005']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.PlaNt_2.geometry}
        material={materials['Green Gradeint 6.001']}
        position={[2.13, 0.695, -0.579]}
        rotation={[1.797, -0.13, 1.513]}
        scale={[0.16, 0.166, 0.632]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plant_1.geometry}
        material={materials['Green Gradeint 6.001']}
        position={[-1.715, 0.775, -1.968]}
        rotation={[1.709, 0.333, 3.032]}
        scale={[0.16, 0.166, 0.632]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ground_rocks.geometry}
        material={materials['Stone 2']}
        position={[0.134, -0.1, 2.623]}
        rotation={[-2.865, 1.561, 2.915]}
        scale={[0.094, 0.048, 0.194]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ground_.geometry}
        material={materials['Green Gradeint 6']}
        position={[0, -0.011, 0]}
        scale={[4.666, 1.205, 4.666]}
      />
      <group
        position={[-1.888, 0.303, 0.489]}
        rotation={[-2.908, -0.977, 2.239]}
        scale={[0.263, 0.359, 0.263]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere002.geometry}
          material={materials['Material.009']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere002_1.geometry}
          material={materials['Material.006']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere002_2.geometry}
          material={materials['Mushroom trunk ']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere002_3.geometry}
          material={materials['Material.001']}
        />
      </group>
      <group
        position={[2.298, 0.197, 0.252]}
        rotation={[-3.028, -0.253, -3.122]}
        scale={[0.579, 0.629, 0.575]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere005.geometry}
          material={materials['Material.Tree brown 2']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere005_1.geometry}
          material={materials['Mushroom trunk .001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere005_2.geometry}
          material={materials['Material.003']}
        />
      </group>
    </group>
  )
}