class Panel {
  constructor(id) {
    const el = $(`#${id}`)[0];
    el.customAttrs = {};
    el.customAttrs.id = id;
    el.customAttrs.isShow = false;
    el.customAttrs.offsetLeft = gsap.getProperty(`#${id}`, "offsetLeft");
    gsap.set(`#${id}`, { opacity: 0 });
    // 处理自定义事件
    el.addEventListener("run", (e) => {
      if (!el.customAttrs.isShow) {
        const x = e.detail.x;
        // 动画提前量
        const offset = 50;
        if (x + offset >= el.customAttrs.offsetLeft) {
          el.customAttrs.isShow = true;
          this.show(id);
        }
      }
    });
    return el;
  }

  show(id) {
    switch (id) {
      case "init":
        gsap.fromTo(
          `#${id}`,
          { y: 300 },
          { opacity: 1, y: 0, duration: 2, ease: "elastic.out(1,0.3)" }
        );
        break;
      case "amazon":
        gsap.fromTo(
          `#${id}`,
          { x: -300, y: -300, rotation: 90, scale: 0 },
          { opacity: 1, x: 0, y: 0, rotation: 0, scale: 1, duration: 1 }
        );
        break;
      case "bahia":
        const tl = gsap.timeline({
          defaults: {
            duration: 0.5,
            ease: "power1.in"
          }
        });
        gsap.set(`#${id}`, {
          opacity: 1,
          scale: 0.1,
          x: -300,
          y: -300
        });
        tl.to(`#${id}`, {
          duration: 0.5,
          y: 0,
          scale: 0.2,
          ease: "bounce.out"
        }).to(`#${id}`, {
          duration: 0.5,
          scale: 1,
          rotation: 360,
          x: 0
        });
        break;
      case "parana":
        gsap.fromTo(
          `#${id}`,
          { scale: 0.1 },
          {
            scale: 1,
            opacity: 1,
            duration: 2,
            ease: `rough({ template: none/linear, strength: 1, points: 20, taper: 'none', randomize: true, clamp: false})`
          }
        );
        break;
      case "saopaulo":
        gsap.to(`#${id}`, { opacity: 1, rotation: 720, duration: 1 });
        break;
      case "rio":
        gsap.to(`#${id}`, { opacity: 1, duration: 1 });
        break;
      default:
        return;
    }
  }
}
