import { useEffect, useRef } from "react";
import * as THREE from "three";

export function BackgroundRadialRight() {
    const containerRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            const renderer = new THREE.WebGLRenderer();
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setClearColor(0x000, 0);
            containerRef.current?.appendChild(renderer.domElement);
            camera.position.z = 5;

            const light = new THREE.DirectionalLight(0xFFFF, 0.5);
            light.position.set(-1, 3, 1);
            scene.add(light);
            const smokeScenes: THREE.Mesh[] = [];
            const loader = new THREE.TextureLoader();
            loader.crossOrigin = "";
            loader.load("/assets/background-floated-right.png", (texture) => {
                const geo = new THREE.PlaneGeometry(1000, 1000);
                const mat = new THREE.MeshLambertMaterial({
                    map: texture,
                    transparent: true,
                })
                const particle1 = new THREE.Mesh(geo, mat);   
                particle1.position.set(
                    150,
                    0,
                    -400,
                );
                scene.add(particle1);
                smokeScenes.push(particle1);
                const particle2 = new THREE.Mesh(geo, mat);   
                particle2.position.set(
                    -150,
                    0,
                    -400,
                );
                particle2.rotation.z += 3.14;
                scene.add(particle2);
                smokeScenes.push(particle2);
            });
            const animate = () => {
                smokeScenes.forEach((p) => {
                    p.rotation.z+=0.005;
                });
                renderer.render(scene, camera);
                requestAnimationFrame(animate);
              };             
              animate();
        }
    }, []);
    return (
        <div className="fixed -z-50 top-0 left-0 h-full w-full" ref={containerRef}>
            {/* <Image src="/assets/background-floated-right.png" width={850} height={650} alt="Circle Right" /> */}
        </div>
    )
}
