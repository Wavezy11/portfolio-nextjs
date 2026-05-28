"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function HeroCanvas() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    let animationFrameId: number;
    let isActive = true;

    // SCENE SETUP
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 200;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);

    // PARTICLES
    const particleCount = 120;
    const particles = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const velocities: { x: number; y: number }[] = [];

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * window.innerWidth;
      positions[i * 3 + 1] = (Math.random() - 0.5) * window.innerHeight;
      positions[i * 3 + 2] = 0;
      velocities.push({
        x: (Math.random() - 0.5) * 0.4,
        y: (Math.random() - 0.5) * 0.4,
      });
    }

    particles.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const particleMaterial = new THREE.PointsMaterial({
      color: 0x00f5d4,
      size: 1.5,
      transparent: true,
      opacity: 0.6,
    });

    const particleSystem = new THREE.Points(particles, particleMaterial);
    scene.add(particleSystem);

    // LINES
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x00f5d4,
      transparent: true,
      opacity: 0.15,
    });

    // MOUSE
    const mouse = new THREE.Vector2(-9999, -9999);
    const handleMouseMove = (e: MouseEvent) => {
      // Map to Three.js coordinates
      mouse.x = e.clientX - window.innerWidth / 2;
      mouse.y = -(e.clientY - window.innerHeight / 2);
    };
    window.addEventListener("mousemove", handleMouseMove);

    // RESIZE
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    // INTERSECTION OBSERVER TO PAUSE
    const observer = new IntersectionObserver(
      ([entry]) => {
        isActive = entry.isIntersecting;
      },
      { threshold: 0 }
    );
    if (currentMount) observer.observe(currentMount);

    // ANIMATION LOOP
    const animate = () => {
      if (!isActive) {
        animationFrameId = requestAnimationFrame(animate);
        return;
      }

      const positions = particleSystem.geometry.attributes.position.array as Float32Array;

      // Temporary arrays for lines
      const linePositions = [];
      const lineColors = [];

      for (let i = 0; i < particleCount; i++) {
        // Apply velocity
        positions[i * 3] += velocities[i].x;
        positions[i * 3 + 1] += velocities[i].y;

        // Bounce off edges roughly
        const halfW = window.innerWidth / 2 + 50;
        const halfH = window.innerHeight / 2 + 50;
        if (positions[i * 3] > halfW || positions[i * 3] < -halfW) velocities[i].x *= -1;
        if (positions[i * 3 + 1] > halfH || positions[i * 3 + 1] < -halfH) velocities[i].y *= -1;

        // Mouse repulsion
        const dx = positions[i * 3] - mouse.x;
        const dy = positions[i * 3 + 1] - mouse.y;
        const distToMouse = Math.sqrt(dx * dx + dy * dy);
        
        if (distToMouse < 120) {
          const force = (120 - distToMouse) / 120;
          positions[i * 3] += (dx / distToMouse) * force * 2;
          positions[i * 3 + 1] += (dy / distToMouse) * force * 2;
        }

        // Lines connection
        for (let j = i + 1; j < particleCount; j++) {
          const dx2 = positions[i * 3] - positions[j * 3];
          const dy2 = positions[i * 3 + 1] - positions[j * 3];
          const distToParticle = Math.sqrt(dx2 * dx2 + dy2 * dy2);

          if (distToParticle < 150) {
            linePositions.push(
              positions[i * 3], positions[i * 3 + 1], 0,
              positions[j * 3], positions[j * 3 + 1], 0
            );
            // Calculate opacity inversely proportional to distance (max 0.15)
            const opacity = (1 - distToParticle / 150) * 0.15;
            // Three.js LineBasicMaterial doesn't support vertex colors with varying opacity cleanly 
            // without custom shaders in raw Three.js, but we can fake it by coloring it darker/closer to black 
            // since we use additive blending or just a single material.
            // Actually, we can use vertexColors if we use Color(0x00FF41).multiplyScalar(opacity)
            const c = new THREE.Color(0x00f5d4).multiplyScalar(opacity / 0.15 * 0.5); 
            lineColors.push(c.r, c.g, c.b, c.r, c.g, c.b);
          }
        }
      }

      particleSystem.geometry.attributes.position.needsUpdate = true;

      // Update lines
      const oldLines = scene.getObjectByName("lines");
      if (oldLines) {
        (oldLines as THREE.LineSegments).geometry.dispose();
        scene.remove(oldLines);
      }

      if (linePositions.length > 0) {
        const lineGeo = new THREE.BufferGeometry();
        lineGeo.setAttribute("position", new THREE.Float32BufferAttribute(linePositions, 3));
        lineGeo.setAttribute("color", new THREE.Float32BufferAttribute(lineColors, 3));
        
        const linesMaterial = new THREE.LineBasicMaterial({
          vertexColors: true,
          blending: THREE.AdditiveBlending,
          transparent: true,
          opacity: 0.8, // Base opacity, vertex colors scale it down
        });
        
        const lines = new THREE.LineSegments(lineGeo, linesMaterial);
        lines.name = "lines";
        scene.add(lines);
      }

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // CLEANUP
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      observer.disconnect();
      
      const lines = scene.getObjectByName("lines");
      if (lines) (lines as THREE.LineSegments).geometry.dispose();
      
      particles.dispose();
      particleMaterial.dispose();
      lineMaterial.dispose();
      renderer.dispose();
      
      if (currentMount && renderer.domElement) {
        currentMount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div 
      ref={mountRef} 
      className="absolute inset-0 z-0 opacity-50"
      aria-hidden="true"
    />
  );
}
