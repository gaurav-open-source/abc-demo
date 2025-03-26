document.addEventListener("DOMContentLoaded", function () {
    if (typeof AFRAME === "undefined") {
      console.error("A-Frame is not loaded! Check your script order.");
      return;
    }
  
    console.log("A-Frame loaded. Registering components...");
  
    // Ball Component
    AFRAME.registerComponent("rube-ball", {
      schema: {
        color: { type: "string", default: "red" },
        position: { type: "string", default: "0 1 -3" }
      },
      init: function () {
        this.el.setAttribute("geometry", { primitive: "sphere", radius: 0.5 });
        this.el.setAttribute("material", { color: this.data.color });
        this.el.setAttribute("position", this.data.position);
        this.el.setAttribute("dynamic-body", "mass: 2; shape: sphere");
      }
    });
  
    // Ramp Component
    AFRAME.registerComponent("rube-ramp", {
      schema: {
        color: { type: "string", default: "#FFC65D" },
        position: { type: "string", default: "0 0 -3" },
        rotation: { type: "string", default: "0 0 -20" },
        width: { type: "number", default: 5 },
        height: { type: "number", default: 0.2 },
        depth: { type: "number", default: 2 }
      },
      init: function () {
        this.el.setAttribute("geometry", {
          primitive: "box",
          width: this.data.width,
          height: this.data.height,
          depth: this.data.depth
        });
        this.el.setAttribute("material", { color: this.data.color });
        this.el.setAttribute("position", this.data.position);
        this.el.setAttribute("rotation", this.data.rotation);
        this.el.setAttribute("static-body", "shape: box");
      }
    });
  
    // Not Ready
    // Container (like a cup)
    AFRAME.registerComponent("rube-container", {
      schema: {
        color: { type: "string", default: "green" },
        position: { type: "string", default: "5 1 -3" }
      },
      init: function () {
        const pos = this.data.position;
        this.el.setAttribute("position", pos);
  
        // Front wall
        let front = document.createElement("a-box");
        front.setAttribute("position", "0 0 0.7");
        front.setAttribute("width", "1.4");
        front.setAttribute("height", "1");
        front.setAttribute("depth", "0.1");
        front.setAttribute("color", this.data.color);
        front.setAttribute("static-body", "");
        this.el.appendChild(front);
  
        // Back wall
        let back = document.createElement("a-box");
        back.setAttribute("position", "0 0 -0.7");
        back.setAttribute("width", "1.4");
        back.setAttribute("height", "1");
        back.setAttribute("depth", "0.1");
        back.setAttribute("color", this.data.color);
        back.setAttribute("static-body", "");
        this.el.appendChild(back);
  
        // Left wall
        let left = document.createElement("a-box");
        left.setAttribute("position", "-0.7 0 0");
        left.setAttribute("width", "0.1");
        left.setAttribute("height", "1");
        left.setAttribute("depth", "1.4");
        left.setAttribute("color", this.data.color);
        left.setAttribute("static-body", "");
        this.el.appendChild(left);
  
        // Right wall
        let right = document.createElement("a-box");
        right.setAttribute("position", "0.7 0 0");
        right.setAttribute("width", "0.1");
        right.setAttribute("height", "1");
        right.setAttribute("depth", "1.4");
        right.setAttribute("color", this.data.color);
        right.setAttribute("static-body", "");
        this.el.appendChild(right);
  
        // Bottom
        let bottom = document.createElement("a-box");
        bottom.setAttribute("position", "0 -0.45 0");
        bottom.setAttribute("width", "1.4");
        bottom.setAttribute("height", "0.1");
        bottom.setAttribute("depth", "1.4");
        bottom.setAttribute("color", this.data.color);
        bottom.setAttribute("static-body", "");
        this.el.appendChild(bottom);
      }
    });
  
    // Fan (Rotating Propeller)
    AFRAME.registerComponent("rube-fan", {
      schema: {
        color: { type: "string", default: "yellow" },
        position: { type: "string", default: "3 2 -3" }
      },
      init: function () {
        this.el.setAttribute("geometry", { primitive: "cylinder", radius: 0.5, height: 0.1 });
        this.el.setAttribute("material", { color: this.data.color });
        this.el.setAttribute("position", this.data.position);
        this.el.setAttribute("rotation", "0 0 90");
  
        this.el.setAttribute("animation", {
          property: "rotation",
          to: "0 0 360",
          loop: true,
          dur: 1000,
          easing: "linear"
        });
      }
    });
  });
  