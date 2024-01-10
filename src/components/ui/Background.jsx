import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';


const Background = () => {
    const loadParticles = async(main) => {
        await loadFull(main)

    }

  return (
    <Particles 
        id='tsparticles'
        init={loadParticles}
        options={{
            background: {
                color: {
                    value: "#3c3c3c",
                },
            },
            fpsLimit: 200,
            interactivity: {
                events: {
                    onClick: {
                        enable: true,
                        mode: "push",
                    },
                    onHover: {
                        enable: true,
                        mode: "repulse",
                    },
                    resize: true,
                },
                modes: {
                    push: {
                        quantity: 4,
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4,
                    },
                },
            },
            fullScreen: {
                enable: true,
                zIndex: -1,
            },
            particles: {
                color: {
                    value: "#ffffff",
                },
                links: {
                    color: "#ffffff",
                    distance: 150,
                    enable: true,
                    opacity: 0.5,
                    width: 1,
                },
                move: {
                    direction: "none",
                    enable: true,
                    outModes: {
                        default: "bounce",
                    },
                    random: false,
                    speed: 4,
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                        area: 1800,
                    },
                    value: 80,
                },
                opacity: {
                    value: 0.5,
                },
                shape: {
                    type: "square",
                },
                size: {
                    value: { min: 1, max: 5 },
                },
            },
            
            detectRetina: true,
        }}
    />
  )
}

export default Background
