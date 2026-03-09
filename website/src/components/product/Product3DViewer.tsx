"use client";

import { Suspense, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment, Center } from "@react-three/drei";
import Image from "next/image";
import { RotateCcw, ZoomIn, ZoomOut } from "lucide-react";
import type { Group } from "three";

interface ModelProps {
  url: string;
}

function Model({ url }: ModelProps) {
  const { scene } = useGLTF(url);
  const ref = useRef<Group>(null);
  return (
    <Center>
      <primitive ref={ref} object={scene} />
    </Center>
  );
}

interface Product3DViewerProps {
  modelUrl?: string;
  fallbackImage?: string;
  productName: string;
}

export function Product3DViewer({
  modelUrl,
  fallbackImage,
  productName,
}: Product3DViewerProps) {
  const [error, setError] = useState(false);
  const [controlsKey, setControlsKey] = useState(0);

  const showModel = modelUrl && !error;

  if (!showModel) {
    return (
      <div className="relative aspect-square glass-card rounded-2xl overflow-hidden flex items-center justify-center">
        {fallbackImage ? (
          <Image
            src={fallbackImage}
            alt={productName}
            fill
            className="object-contain p-6"
            unoptimized
          />
        ) : (
          <div className="text-center text-zinc-500">
            <div className="w-16 h-16 mx-auto mb-2 bg-zinc-800 rounded-xl flex items-center justify-center text-2xl">
              💡
            </div>
            <p className="text-sm">3D-модель недоступна</p>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="relative aspect-square glass-card rounded-2xl overflow-hidden group">
      <Canvas
        camera={{ position: [0, 0, 3], fov: 45 }}
        onError={() => setError(true)}
        className="w-full h-full"
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <Environment preset="city" />
        <Suspense fallback={null}>
          <Model url={modelUrl} />
        </Suspense>
        <OrbitControls
          key={controlsKey}
          enablePan={false}
          enableZoom
          autoRotate
          autoRotateSpeed={1.5}
          minDistance={1.5}
          maxDistance={6}
        />
      </Canvas>

      <div className="absolute bottom-3 right-3 flex gap-1.5 opacity-0 group-hover:opacity-100 transition">
        <button
          type="button"
          title="Сбросить вид"
          onClick={() => setControlsKey((k) => k + 1)}
          className="p-2 bg-zinc-950/80 border border-white/8 rounded-xl text-zinc-300 hover:text-white hover:border-amber-500/50 transition"
        >
          <RotateCcw size={14} />
        </button>
      </div>

      <div className="absolute top-3 left-3 px-2 py-1 bg-zinc-950/70 rounded-lg text-xs text-zinc-400 opacity-0 group-hover:opacity-100 transition pointer-events-none">
        Зажмите для вращения · Scroll для zoom
      </div>

      <div className="absolute bottom-3 left-3 flex gap-1 opacity-0 group-hover:opacity-100 transition pointer-events-none">
        <ZoomOut size={12} className="text-zinc-500" />
        <ZoomIn size={12} className="text-zinc-500" />
      </div>
    </div>
  );
}
