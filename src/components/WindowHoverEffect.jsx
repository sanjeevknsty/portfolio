// components/WindowHoverEffect.jsx
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import '../components/styles/WindowHoverEffect.css';

const WindowHoverEffect = () => {
    const windowRef = useRef(null);
    const hoverContainerRef = useRef(null);
    return (
        <>
            <div class="container">
                <div class="window">
                    <div class="hover-container">
                        <div class="div-fitter">
                            <div class="set1"></div>
                            <div class="set2"></div>
                            <div class="set3"></div>
                            <div class="set4"></div>
                        </div>
                    </div>
                </div>
                <div class="semi-container">
                    <div class="text text-1">
                        <h1>A</h1>
                    </div>
                    <div class="text text-2">
                        <h1>A</h1>
                    </div>
                    <div class="text text-3">
                        <h1>A</h1>
                    </div>
                    <div class="text text-4">
                        <h1>A</h1>
                    </div>
                    {/* <div class="text text-2">B</div>
      <div class="text text-3">C</div>
      <div class="text text-4">D</div>  */}
                </div>
            </div>
        </>

    );
};

export default WindowHoverEffect;
