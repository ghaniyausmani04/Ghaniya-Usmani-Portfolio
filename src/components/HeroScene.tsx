import { Suspense, useMemo, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, RoundedBox, Sparkles, Html, useTexture, Edges } from "@react-three/drei";
import * as THREE from "three";
import guMark from "../assets/gu-mark.png";

/* ---------- Floating code symbol (DOM chip rendered inside the 3D scene) ---------- */
function CodeChip({
  position,
  label,
  color,
  speed = 1,
}: {
  position: [number, number, number];
  label: string;
  color: string;
  speed?: number;
}) {
  return (
    <Float speed={speed} floatIntensity={1.4} rotationIntensity={0.3}>
      <Html position={position} center transform distanceFactor={8} occlude={false}>
        <div
          className="select-none rounded-lg border px-2.5 py-1 font-display text-[13px] font-medium backdrop-blur-md"
          style={{
            color,
            borderColor: `${color}55`,
            background: "rgba(8,10,19,0.55)",
            boxShadow: `0 0 18px -4px ${color}80`,
            whiteSpace: "nowrap",
          }}
        >
          {label}
        </div>
      </Html>
    </Float>
  );
}

/* ---------- The laptop with a glowing animated code screen ---------- */
function Laptop() {
  const screenCanvasTexture = useMemo(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 512;
    canvas.height = 320;
    const ctx = canvas.getContext("2d")!;
    ctx.fillStyle = "#0a0d1a";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const lines = [
      { text: "const dev = new Engineer();", color: "#7DE8F5" },
      { text: "dev.skills = ['React', 'AI/ML'];", color: "#A78BFA" },
      { text: "function build(idea) {", color: "#E8EAF2" },
      { text: "  return ship(idea);", color: "#5B8DFF" },
      { text: "}", color: "#E8EAF2" },
      { text: "export default dev;", color: "#A78BFA" },
    ];
    ctx.font = "600 20px 'JetBrains Mono', monospace";
    lines.forEach((line, i) => {
      ctx.fillStyle = line.color;
      ctx.fillText(line.text, 24, 50 + i * 40);
    });

    const texture = new THREE.CanvasTexture(canvas);
    texture.colorSpace = THREE.SRGBColorSpace;
    return texture;
  }, []);

  const bodyMaterialProps = {
    color: "#333c66",
    metalness: 0.4,
    roughness: 0.32,
    emissive: "#221a44",
    emissiveIntensity: 0.18,
  };

  return (
    <group position={[0, 0.1, 0]} rotation={[0.12, -0.32, 0]} scale={0.92}>
      {/* base / keyboard deck */}
      <RoundedBox args={[2.6, 0.12, 1.8]} radius={0.07} smoothness={4} position={[0, -0.06, 0]}>
        <meshStandardMaterial {...bodyMaterialProps} />
        <Edges color="#8B9BFF" threshold={20} />
      </RoundedBox>
      <mesh position={[0, 0.005, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[2.3, 1.5]} />
        <meshStandardMaterial color="#12162a" metalness={0.5} roughness={0.4} />
      </mesh>
      {/* thin keyboard glow strip */}
      <mesh position={[0, 0.012, 0.35]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[1.9, 0.55]} />
        <meshBasicMaterial color="#3B6BFF" transparent opacity={0.12} toneMapped={false} />
      </mesh>

      {/* hinge pivot sits at the back-top edge of the base */}
      <group position={[0, 0, -0.88]} rotation={[-0.14, 0, 0]}>
        {/* screen offset upward so it hinges from its bottom edge */}
        <group position={[0, 0.825, 0]}>
          <RoundedBox args={[2.6, 1.65, 0.07]} radius={0.06} smoothness={4}>
            <meshStandardMaterial {...bodyMaterialProps} />
            <Edges color="#8B9BFF" threshold={20} />
          </RoundedBox>
          {/* bezel */}
          <mesh position={[0, 0, 0.04]}>
            <planeGeometry args={[2.42, 1.52]} />
            <meshStandardMaterial color="#0c0e1a" metalness={0.2} roughness={0.6} />
          </mesh>
          {/* screen surface */}
          <mesh position={[0, 0, 0.045]}>
            <planeGeometry args={[2.28, 1.42]} />
            <meshBasicMaterial map={screenCanvasTexture} toneMapped={false} />
          </mesh>
          {/* screen glow */}
          <pointLight position={[0, 0, 0.6]} color="#7C5CFF" intensity={2.6} distance={3.4} />
        </group>
      </group>
    </group>
  );
}

/* ---------- GU orbital emblem ---------- */
function OrbitalEmblem() {
  const texture = useTexture(guMark);
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (ringRef.current) ringRef.current.rotation.z += delta * 0.25;
  });

  return (
    <Float speed={1.2} floatIntensity={1.2} rotationIntensity={0.15}>
      <group position={[1.75, 1.05, -0.6]}>
        <mesh rotation={[Math.PI / 2.4, 0, 0]} ref={ringRef}>
          <torusGeometry args={[0.62, 0.008, 16, 100]} />
          <meshBasicMaterial color="#8B5CF6" toneMapped={false} transparent opacity={0.7} />
        </mesh>
        <mesh>
          <planeGeometry args={[0.85, 0.6]} />
          <meshBasicMaterial map={texture} transparent toneMapped={false} />
        </mesh>
        <pointLight color="#5B8DFF" intensity={1.4} distance={2.5} />
      </group>
    </Float>
  );
}

/* ---------- Glass panel accents ---------- */
function GlassPanel({
  position,
  size,
  rotation = [0, 0, 0],
}: {
  position: [number, number, number];
  size: [number, number];
  rotation?: [number, number, number];
}) {
  return (
    <Float speed={0.9} floatIntensity={1.6} rotationIntensity={0.25}>
      <mesh position={position} rotation={rotation}>
        <planeGeometry args={size} />
        <meshPhysicalMaterial
          color="#8B9BFF"
          transparent
          opacity={0.1}
          roughness={0.15}
          metalness={0.1}
          transmission={0.6}
          side={THREE.DoubleSide}
        />
      </mesh>
    </Float>
  );
}

/* ---------- Camera / group parallax that follows pointer ---------- */
function ParallaxRig({ children }: { children: React.ReactNode }) {
  const group = useRef<THREE.Group>(null);
  const { viewport } = useThree();
  const target = useRef({ x: 0, y: 0 });

  useFrame((state) => {
    target.current.x = (state.pointer.x * viewport.width) / 40;
    target.current.y = (state.pointer.y * viewport.height) / 40;
    if (group.current) {
      group.current.rotation.y = THREE.MathUtils.lerp(
        group.current.rotation.y,
        target.current.x,
        0.04
      );
      group.current.rotation.x = THREE.MathUtils.lerp(
        group.current.rotation.x,
        -target.current.y,
        0.04
      );
    }
  });

  return <group ref={group}>{children}</group>;
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.55} />
      <directionalLight position={[3, 4, 2]} intensity={1.6} color="#C6D0FF" />
      <directionalLight position={[-2, 1, 3]} intensity={0.6} color="#8B5CF6" />
      <pointLight position={[-3, -1, -1]} color="#3B6BFF" intensity={2.2} distance={9} />
      <pointLight position={[2.5, 2, 2]} color="#A78BFA" intensity={1.2} distance={7} />
      <fog attach="fog" args={["#05060B", 5.5, 11.5]} />

      <ParallaxRig>
        <Float speed={1} floatIntensity={0.6} rotationIntensity={0.06}>
          <Laptop />
        </Float>

        <OrbitalEmblem />

        <GlassPanel position={[-1.9, -0.6, 0.4]} size={[0.9, 1.1]} rotation={[0.1, 0.4, 0.1]} />
        <GlassPanel position={[1.4, -1.15, 0.9]} size={[0.7, 0.9]} rotation={[-0.1, -0.3, 0.15]} />

        <CodeChip position={[-1.6, 1.3, 0.3]} label="</>" color="#7DE8F5" speed={1.3} />
        <CodeChip position={[1.45, -0.55, 0.8]} label="{ AI }" color="#A78BFA" speed={0.9} />
        <CodeChip position={[-1.45, -1.35, 0.2]} label="=>" color="#5B8DFF" speed={1.1} />

        <Sparkles count={60} scale={[6, 4, 4]} size={1.4} speed={0.25} color="#8B9BFF" opacity={0.5} />
      </ParallaxRig>
    </>
  );
}

export default function HeroScene() {
  const [mounted] = useState(true);

  if (!mounted) return null;

  return (
    <div className="h-full w-full">
      <Canvas
        dpr={[1, 1.75]}
        camera={{ position: [0.2, 0.5, 5.8], fov: 38 }}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}
