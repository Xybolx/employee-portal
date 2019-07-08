import React from 'react';
import Particles from 'react-particles-js';

const Title = () => {

    return (
        <h1>
            <Particles
                canvasClassName="canvas"
                height="125px"
                params={{
                    particles: {
                        number: {
                            value: 4,
                            density: {
                                enable: false,
                                value_area: 800
                            }
                        },
                        line_linked: {
                            enable: false,
                            color: "#282c34"
                        },
                        move: {
                            speed: 3,
                            out_mode: "out",
                            direction: "bottom",
                            bounce: false
                        },
                        shape: {
                            type:
                                "image",
                            image:
                            {
                                src: "super-logo.png",
                                height: 30,
                                width: 40
                            }
                        },
                        color: {
                            value: "#282c34"
                        },
                        size: {
                            value: 20,
                            random: false,
                            anim: {
                                enable: false,
                                speed: 8,
                                size_min: 10,
                                sync: false
                            }
                        },
                    },
                    retina_detect: true
                }} />
            <img className="img-fluid" src="super-logo.png" alt="" />
            Super, inc.
        </h1>
    );
};

export default Title;