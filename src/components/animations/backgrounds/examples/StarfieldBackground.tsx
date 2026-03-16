import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function WarpParticlesThree() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if (!canvasRef.current) return;

        const canvas = canvasRef.current;
        const renderer = new THREE.WebGLRenderer({
            canvas,
            alpha: true,
            preserveDrawingBuffer: true
        });
        renderer.autoClearColor = false;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            20,
            canvas.clientWidth / canvas.clientHeight,
            0.1,
            1000
        );
        camera.position.z = 1;

        const PARTICLES = 1500;
        const DIM = 50;
        const SPEED = 0.1;

        // パーティクルの座標
        const vertices: number[] = [];
        for (let i = 0; i < PARTICLES; i++) {
            const x = DIM * (Math.random() - 0.5);
            const y = DIM * (Math.random() - 0.5);
            const z = -DIM * Math.random();
            vertices.push(x, y, z);
        }

        const geometry = new THREE.BufferGeometry();
        geometry.setAttribute("position", new THREE.Float32BufferAttribute(vertices, 3));

        const material = new THREE.PointsMaterial({
            color: 0xffffff,
            size: 0.1,
            sizeAttenuation: true,
            opacity: 1,
            transparent: true,
            depthTest: false,
        });

        const points = new THREE.Points(geometry, material);

        // fade 用プレート（残像）
        const fadeGeo = new THREE.PlaneGeometry(1, 1);
        const fadeMat = new THREE.MeshBasicMaterial({
            color: 0x000000,
            transparent: true,
            opacity: 0.3,
        });
        const fadePlate = new THREE.Mesh(fadeGeo, fadeMat);
        (fadePlate.material as THREE.MeshBasicMaterial).transparent = true;
        fadePlate.renderOrder = -1;
        fadePlate.position.z = -0.1;

        scene.add(fadePlate);
        scene.add(points);

        // リサイズ対応
        const onResize = () => {
            if (!canvasRef.current) return;
            camera.aspect = canvasRef.current.clientWidth / canvasRef.current.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(canvasRef.current.clientWidth, canvasRef.current.clientHeight, false);
        };
        window.addEventListener("resize", onResize);
        onResize();

        const position = geometry.attributes.position as THREE.BufferAttribute;

        const animate = () => {
        requestAnimationFrame(animate);

        const p = position.array as Float32Array;
        for (let i = 0; i < p.length; i += 3) {
            const z = p[i + 2];
            if (z >= 0) {
                p[i] = DIM * (Math.random() - 0.5);
                p[i + 1] = DIM * (Math.random() - 0.5);
                p[i + 2] = -DIM;
            } else {
                p[i + 2] += SPEED;
            }
        }
        position.needsUpdate = true;

        renderer.render(scene, camera);
        };

        animate();

        return () => {
            window.removeEventListener("resize", onResize);
            geometry.dispose();
            material.dispose();
            renderer.dispose();
        };
    }, []);

    return (
        <div className="relative w-full aspect-video rounded-lg overflow-hidden">
            <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full block"
            />
        </div>
    )
}