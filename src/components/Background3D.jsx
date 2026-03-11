import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Background3D = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    let frameId;
    
    // Scene setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x0f0f1a, 0.03); // Enhanced fog for deeper look

    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 12;
    camera.position.y = 2; // Look slightly down

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "high-performance" });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }

    // 1. Fluid Particle Grid (Sea of Particles)
    const countX = 80;
    const countZ = 80;
    const waveCount = countX * countZ;
    const waveGeometry = new THREE.BufferGeometry();
    const wavePositions = new Float32Array(waveCount * 3);
    const waveInitialPositions = new Float32Array(waveCount * 3);
    const waveColors = new Float32Array(waveCount * 3);

    const colorPurple = new THREE.Color(0x8b5cf6); // Accent Purple
    const colorBlue = new THREE.Color(0x3b82f6);   // Accent Blue

    let index = 0;
    for (let i = 0; i < countX; i++) {
      for (let j = 0; j < countZ; j++) {
        const x = (i / countX - 0.5) * 60;
        const z = (j / countZ - 0.5) * 60;
        const y = 0;
        
        wavePositions[index * 3] = x;
        wavePositions[index * 3 + 1] = y;
        wavePositions[index * 3 + 2] = z;

        waveInitialPositions[index * 3] = x;
        waveInitialPositions[index * 3 + 1] = y;
        waveInitialPositions[index * 3 + 2] = z;

        // Gradient from Purple to Blue
        const mixedColor = colorPurple.clone().lerp(colorBlue, i / countX);
        waveColors[index * 3] = mixedColor.r;
        waveColors[index * 3 + 1] = mixedColor.g;
        waveColors[index * 3 + 2] = mixedColor.b;

        index++;
      }
    }

    waveGeometry.setAttribute('position', new THREE.BufferAttribute(wavePositions, 3));
    waveGeometry.setAttribute('color', new THREE.BufferAttribute(waveColors, 3));
    
    const waveMaterial = new THREE.PointsMaterial({
      size: 0.12,
      vertexColors: true,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending
    });

    const waveMesh = new THREE.Points(waveGeometry, waveMaterial);
    waveMesh.position.y = -6; // Act as a floor
    scene.add(waveMesh);

    // 2. Floating Ambient Dust
    const dustGeometry = new THREE.BufferGeometry();
    const dustCount = 1000;
    const dustPos = new Float32Array(dustCount * 3);
    for (let i = 0; i < dustCount * 3; i++) {
      dustPos[i] = (Math.random() - 0.5) * 40;
    }
    dustGeometry.setAttribute('position', new THREE.BufferAttribute(dustPos, 3));
    const dustMaterial = new THREE.PointsMaterial({
      size: 0.05,
      color: 0x9333ea,
      transparent: true,
      opacity: 0.5,
      blending: THREE.AdditiveBlending
    });
    const dustMesh = new THREE.Points(dustGeometry, dustMaterial);
    scene.add(dustMesh);

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (event) => {
      // Scale mouse coordinates mapped to -1 to 1
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      // Invert Y axis
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    const startTime = performance.now();

    const animate = () => {
      frameId = requestAnimationFrame(animate);

      const elapsedTime = (performance.now() - startTime) * 0.001;

      // Animate the Particle Sea
      const positions = waveMesh.geometry.attributes.position.array;
      let posIdx = 0;
      for (let i = 0; i < countX; i++) {
        for (let j = 0; j < countZ; j++) {
           const x = waveInitialPositions[posIdx * 3];
           const z = waveInitialPositions[posIdx * 3 + 2];
           
           // Math for overlapping sine waves to create a fluid sea
           const waveY1 = Math.sin(x * 0.15 + elapsedTime * 1.5) * 1.5;
           const waveY2 = Math.cos(z * 0.15 + elapsedTime * 1.2) * 1.5;
           
           positions[posIdx * 3 + 1] = waveY1 + waveY2;
           posIdx++;
        }
      }
      waveMesh.geometry.attributes.position.needsUpdate = true;

      // Animate Dust
      dustMesh.rotation.y = elapsedTime * 0.03;
      dustMesh.rotation.x = elapsedTime * 0.01;

      // Camera Parallax based on mouse
      const targetX = mouseX * 2;
      const targetY = mouseY * 1 + 2; // Keep it somewhat elevated
      
      camera.position.x += (targetX - camera.position.x) * 0.02;
      camera.position.y += (targetY - camera.position.y) * 0.02;
      camera.lookAt(0, -2, 0); // Always look toward the center slightly down

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(frameId);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      
      // Memory cleanup
      waveGeometry.dispose();
      waveMaterial.dispose();
      dustGeometry.dispose();
      dustMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="fixed top-0 left-0 w-screen h-screen -z-10 pointer-events-none bg-bgPrimary" />;
};

export default Background3D;
