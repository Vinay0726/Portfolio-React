import React, { useEffect, useRef } from "react";
import Matter from "matter-js";

const MatterComponent = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const dimensions = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    Matter.use("matter-attractors");
    Matter.use("matter-wrap");

    // Configure Matter.js engine
    const {
      Engine,
      Events,
      Runner,
      Render,
      World,
      Body,
      Mouse,
      MouseConstraint,
      Common,
      Bodies,
    } = Matter;

    // Create engine
    const engine = Engine.create();
    engine.world.gravity.y = 0;
    engine.world.gravity.x = 0;

    // Create renderer
    const render = Render.create({
      canvas: canvas,
      engine: engine,
      options: {
        width: dimensions.width,
        height: dimensions.height,
        wireframes: false,
        background: "white",
      },
    });

    // Create runner
    const runner = Runner.create();

    // Create demo scene
    const world = engine.world;

    // Create a body with an attractor
    const ringRadius =
      Math.max(dimensions.width / 25, dimensions.height / 25) / 2;
    const attractiveBody = Bodies.circle(
      render.options.width / 2,
      render.options.height / 2,
      ringRadius,
      {
        render: {
          fillStyle: "transparent",
          strokeStyle: "#000", // Ring color
          lineWidth: 1, // Ring thickness
        },
        isStatic: true,
        plugin: {
          attractors: [
            function (bodyA, bodyB) {
              return {
                x: (bodyA.position.x - bodyB.position.x) * 1e-6,
                y: (bodyA.position.y - bodyB.position.y) * 1e-6,
              };
            },
          ],
        },
      }
    );

    World.add(world, attractiveBody);

    // Define green and gray shades
    const grayColors = [
      "#D3D3D3", // Light Gray
      "#BEBEBE", // Gray
    ];
    const greenColors = [
      "#A8D5A2", // Light Green
      "#8FBC8F", // Darker Green
    ];

    // Function to select color with weighted probability
    const getColor = () => {
      const isGreen = Math.random() > 0.75; // Adjust probability as needed
      const colors = isGreen ? greenColors : grayColors;
      return colors[Math.floor(Math.random() * colors.length)];
    };

    for (let i = 0; i < 60; i += 1) {
      let x = Common.random(0, render.options.width);
      let y = Common.random(0, render.options.height);
      let s =
        Common.random() > 0.6 ? Common.random(10, 80) : Common.random(4, 60);
      let polygonNumber = Common.random(3, 6);
      let color = getColor();

      let body = Bodies.polygon(x, y, polygonNumber, s, {
        mass: s / 20,
        friction: 0,
        frictionAir: 0.005,
        angle: Math.round(Math.random() * 360),
        render: {
          fillStyle: color,
          strokeStyle: null, // No border
          lineWidth: 0,
        },
      });

      World.add(world, body);

      let circle = Bodies.circle(x, y, Common.random(2, 8), {
        mass: 0.1,
        friction: 0,
        frictionAir: 0.005,
        render: {
          fillStyle: getColor(), // Green or gray
          strokeStyle: null, // No border
          lineWidth: 0,
        },
      });

      World.add(world, circle);

      circle = Bodies.circle(x, y, Common.random(2, 20), {
        mass: 6,
        friction: 0,
        frictionAir: 0,
        render: {
          fillStyle: getColor(), // Green or gray
          strokeStyle: null, // No border
          lineWidth: 0,
        },
      });

      World.add(world, circle);

      circle = Bodies.circle(x, y, Common.random(2, 30), {
        mass: 0.2,
        friction: 0.6,
        frictionAir: 0.005,
        render: {
          fillStyle: getColor(), // Green or gray
          strokeStyle: null, // No border
          lineWidth: 0,
        },
      });

      World.add(world, circle);
    }

    // Add mouse control
    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.1,
        render: {
          visible: false,
        },
      },
    });

    World.add(world, mouseConstraint);

    let shouldAttractToFixedPoint = false;
    const fixedPoint = {
      x: render.options.width / 2,
      y: render.options.height / 2,
    };

    Events.on(engine, "afterUpdate", function () {
      if (mouse.button === -1) {
        // When the mouse is not pressed, follow the mouse
        Body.translate(attractiveBody, {
          x: (mouse.position.x - attractiveBody.position.x) * 0.12,
          y: (mouse.position.y - attractiveBody.position.y) * 0.12,
        });
      } else {
        // When the mouse is pressed, stop moving and attract particles to a fixed point
        shouldAttractToFixedPoint = true;
      }

      if (shouldAttractToFixedPoint) {
        // Stronger attraction for all bodies towards the attractive body
        engine.world.bodies.forEach((body) => {
          if (body !== attractiveBody) {
            Body.applyForce(body, body.position, {
              x: (attractiveBody.position.x - body.position.x) * 1e-5,
              y: (attractiveBody.position.y - body.position.y) * 1e-5,
            });
          }
        });
      }
    });

    // Start the engine and renderer
    Runner.run(runner, engine);
    Render.run(render);

    // Cleanup on component unmount
    return () => {
      Render.stop(render);
      Runner.stop(runner);
      World.clear(world);
      Engine.clear(engine);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      if (canvasRef.current) {
        canvasRef.current.width = width;
        canvasRef.current.height = height;
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Call once to set initial size

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="matter-canvas" />;
};

export default MatterComponent;
