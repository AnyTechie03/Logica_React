import React, { useEffect, useState } from 'react';
import bgl from '../../../assets/audio/welcome-to-my-kingdom.mp3';
import './Loading.css';

const Loading = () => {
    const [audioReady, setAudioReady] = useState(false);

    useEffect(() => {
        const audio = new Audio(bgl);

        audio.oncanplaythrough = () => {
            setAudioReady(true);
        };

        // Cleanup function to stop audio when the component unmounts
        return () => {
            audio.pause();
            audio.currentTime = 0;
        };
   
    }, []);

    const startAudio = () => {
        const audio = new Audio(bgl);
        audio.play();
        setTimeout(() => {
            audio.muted = true;
            audio.pause();
        }, 8970);
    };

    return (
        <div className="lcontainer">
            <svg className="prelooad" viewBox="0 0 1320 300">
                <text x="50%" y="50%" dy=".35em" textAnchor="middle">
                    Logica
                </text>
            </svg>
            {audioReady && (
                <audio src={bgl} autoPlay onCanPlayThrough={() => console.log("Logica")} />

            )}
        </div>
    );
};

export default Loading;
