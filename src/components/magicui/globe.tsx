// Dynamic imports for heavy dependencies
import { useEffect, useRef, useState } from "react"
import { cn } from "../../lib/utils"
let createGlobe: unknown = null;

const MOVEMENT_DAMPING = 1400

const AFRICA_CENTER_LON = 20; // Central longitude for Africa
// const AFRICA_CENTER_LAT = 0;  // Central latitude for Africa (not used)

// Convert degrees to radians
function degToRad(deg: number) {
  return (deg * Math.PI) / 180;
}

const GLOBE_CONFIG = {
  width: 800,
  height: 800,
  onRender: () => { },
  devicePixelRatio: 2,
  phi: degToRad(AFRICA_CENTER_LON), // Center Africa horizontally
  theta: 0.3, // Keep the tilt
  dark: 0,
  diffuse: 0.2,
  mapSamples: 16000,
  mapBrightness: 6, // Increased brightness to make dots stand out on dark base
  baseColor: [36 / 255, 10 / 255, 64 / 255], // Purple for the globe base (#240A40)
  markerColor: [251 / 255, 100 / 255, 21 / 255], // Orange markers
  glowColor: [92 / 255, 18 / 255, 167 / 255], // Purple glow for dots/map (#5C12A7)
  markers: [
    { location: [6.5244, 3.3792], size: 0.08 }, // Lagos, Nigeria
    { location: [-1.2921, 36.8219], size: 0.07 }, // Nairobi, Kenya
    { location: [30.0444, 31.2357], size: 0.09 }, // Cairo, Egypt
    { location: [14.7167, -17.4677], size: 0.06 }, // Dakar, Senegal
    { location: [-26.2041, 28.0473], size: 0.08 }, // Johannesburg, South Africa
    { location: [5.6037, -0.1870], size: 0.07 }, // Accra, Ghana
    { location: [36.8065, 10.1815], size: 0.06 }, // Tunis, Tunisia
    { location: [15.5007, 32.5599], size: 0.07 }, // Khartoum, Sudan
    { location: [12.6392, -8.0029], size: 0.06 }, // Bamako, Mali
    { location: [35.6892, -0.6308], size: 0.07 }, // Oran, Algeria
    { location: [9.0579, 7.4951], size: 0.07 }, // Abuja, Nigeria
    { location: [-4.4419, 15.2663], size: 0.08 }, // Kinshasa, DRC
    { location: [33.5731, -7.5898], size: 0.08 }, // Casablanca, Morocco
    { location: [31.7917, -7.0926], size: 0.06 }, // Marrakesh, Morocco
  ],
}

function GlobeInner({
  className,
  config,
  motionHooks,
}: {
  className?: string
  config?: unknown
  motionHooks: { useMotionValue: typeof import('motion/react').useMotionValue, useSpring: typeof import('motion/react').useSpring }
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);
  const lastPointerX = useRef<number | null>(null);
  const phiRef = useRef(degToRad(AFRICA_CENTER_LON)); // persists across renders
  let width = 0;


  // Always call useEffect, but only run globe logic if ready
  useEffect(() => {
    if (!motionHooks) return; // motionHooks is now always available
    const onResize = () => {
      if (canvasRef.current) {
        width = canvasRef.current.offsetWidth;
      }
    };

    window.addEventListener("resize", onResize);
    onResize();

    const globe = (createGlobe as (canvas: HTMLCanvasElement, config: unknown) => { destroy: () => void })(canvasRef.current!, {
      ...(config as object),
      width: width * 2,
      height: width * 2,
      onRender: (state: unknown) => {
        const s = state as Record<string, number>;
        if (!pointerInteracting.current) phiRef.current += 0.005;
        s.phi = phiRef.current + rs.get();
        s.width = width * 2;
        s.height = width * 2;
      },
    });

    setTimeout(() => (canvasRef.current!.style.opacity = "1"), 0);
    return () => {
      globe.destroy();
      window.removeEventListener("resize", onResize);
    };
  }, [motionHooks, config]);

  if (!motionHooks) { // motionHooks is now always available
    return <div className={cn("absolute inset-0 ml-auto max-[400px] aspect-[1/1] w-full", className)} />;
  }

  const r = motionHooks.useMotionValue(0);
  const rs = motionHooks.useSpring(r, {
    mass: 1,
    damping: 30,
    stiffness: 100,
  });

  const updatePointerInteraction = (value: number | null) => {
    pointerInteracting.current = value;
    if (canvasRef.current) {
      canvasRef.current.style.cursor = value !== null ? "grabbing" : "grab";
    }
  };

  const updateMovement = (clientX: number) => {
    if (pointerInteracting.current !== null && lastPointerX.current !== null) {
      const delta = clientX - lastPointerX.current;
      pointerInteractionMovement.current = delta;
      r.set(r.get() + delta / MOVEMENT_DAMPING);
    }
    lastPointerX.current = clientX;
  };

  return (
    <div className={cn("absolute inset-0 ml-auto max-[400px] aspect-[1/1] w-full", className)}>
      <canvas
        className={cn("size-full opacity-0 transition-opacity duration-500")}
        ref={canvasRef}
        onPointerDown={(e) => {
          pointerInteracting.current = e.clientX;
          lastPointerX.current = e.clientX;
          updatePointerInteraction(e.clientX);
        }}
        onPointerUp={() => {
          updatePointerInteraction(null);
          lastPointerX.current = null;
        }}
        onPointerOut={() => {
          updatePointerInteraction(null);
          lastPointerX.current = null;
        }}
        onMouseMove={(e) => {
          if (pointerInteracting.current !== null) updateMovement(e.clientX);
        }}
        onTouchMove={(e) => {
          if (e.touches[0] && pointerInteracting.current !== null) updateMovement(e.touches[0].clientX);
        }}
        onTouchStart={(e) => {
          if (e.touches[0]) {
            pointerInteracting.current = e.touches[0].clientX;
            lastPointerX.current = e.touches[0].clientX;
            updatePointerInteraction(e.touches[0].clientX);
          }
        }}
        onTouchEnd={() => {
          updatePointerInteraction(null);
          lastPointerX.current = null;
        }}
      />
    </div>
  );
}

export function Globe({ className, config = GLOBE_CONFIG }: { className?: string; config?: unknown }) {
  const [motionReady, setMotionReady] = useState(false);
  const [motionHooks, setMotionHooks] = useState<null | { useMotionValue: typeof import('motion/react').useMotionValue, useSpring: typeof import('motion/react').useSpring }>(null);

  useEffect(() => {
    let isMounted = true;
    Promise.all([
      import("cobe"),
      import("motion/react")
    ]).then(([cobe, motion]) => {
      if (!isMounted) return;
      createGlobe = cobe.default;
      setMotionHooks({ useMotionValue: motion.useMotionValue, useSpring: motion.useSpring });
      setMotionReady(true);
    });
    return () => { isMounted = false; };
  }, []);

  if (!motionReady || !motionHooks) {
    return <div className={cn("absolute inset-0 ml-auto max-[400px] aspect-[1/1] w-full", className)} />;
  }

  return <GlobeInner className={className} config={config} motionHooks={motionHooks} />;
}
