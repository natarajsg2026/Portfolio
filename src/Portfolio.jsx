import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { color } from "three/tsl";

const SECTIONS = ["Home", "About", "Skills", "Projects", "Contact"];
const ROLES = ["Data Analyst","Frondend Developer","Python Developer","Problem Solver","Creative Coder"];

// ═══════════════════════════════════════════════════════════════
//  REALISTIC LAPTOP — completely rebuilt
//  Coordinate system (world):
//    Base lies flat. Hinge is at back (z = -depth/2).
//    Lid group pivot = hinge point.
//    In lid-local space the lid panel stands VERTICALLY (XY plane),
//    screen face points toward +Z (toward viewer when open).
//  Open:   lidGroup.rotation.x ≈ -1.25  (≈ 108° open, slight tilt back)
//  Closed: lidGroup.rotation.x =  0     (lid flat on base)
// ═══════════════════════════════════════════════════════════════
function buildLaptop(scene) {
  const root = new THREE.Group();

  /* ── shared materials ── */
  const alumMat = new THREE.MeshStandardMaterial({
    color: 0xc8c8cc, roughness: 0.18, metalness: 0.95,
  });
  const darkAlum = new THREE.MeshStandardMaterial({
    color: 0x1a1a1c, roughness: 0.2, metalness: 0.9,
  });
  const bezelMat = new THREE.MeshStandardMaterial({
    color: 0x0a0a0c, roughness: 0.35, metalness: 0.6,
  });
  const keyCapMat = new THREE.MeshStandardMaterial({
    color: 0x1e1e20, roughness: 0.55, metalness: 0.45,
  });
  const tpadMat = new THREE.MeshStandardMaterial({
    color: 0x2a2a2e, roughness: 0.12, metalness: 0.88,
  });
  const rubberMat = new THREE.MeshStandardMaterial({
    color: 0x111111, roughness: 0.95, metalness: 0.0,
  });
  const portMat = new THREE.MeshStandardMaterial({
    color: 0x050505, roughness: 0.6, metalness: 0.3,
  });

  /* ─────────────────────────────────────────────
     BASE CHASSIS  (3.6 W × 0.14 H × 2.5 D)
  ───────────────────────────────────────────── */
  const BW = 3.6, BH = 0.14, BD = 2.5;

  // Main body — silver aluminium slab
  const baseBody = new THREE.Mesh(new THREE.BoxGeometry(BW, BH, BD), alumMat);
  baseBody.receiveShadow = true; baseBody.castShadow = true;
  root.add(baseBody);

  // Underside plastic strip (darker centre)
  const underStrip = new THREE.Mesh(
    new THREE.BoxGeometry(BW - 0.3, 0.005, BD - 0.25),
    new THREE.MeshStandardMaterial({ color: 0x888890, roughness: 0.3, metalness: 0.7 })
  );
  underStrip.position.set(0, -BH / 2 - 0.002, 0);
  root.add(underStrip);

  // Rubber feet (4 corners)
  [[-1.6, 1.05],[1.6, 1.05],[-1.6,-1.05],[1.6,-1.05]].forEach(([x,z]) => {
    const foot = new THREE.Mesh(new THREE.CylinderGeometry(0.12,0.12,0.025,16), rubberMat);
    foot.position.set(x, -BH/2 - 0.012, z);
    root.add(foot);
  });

  // Keyboard deck — slightly sunken dark recess
  const deckW = BW - 0.3, deckD = BD - 0.55;
  const deck = new THREE.Mesh(
    new THREE.BoxGeometry(deckW, 0.01, deckD),
    new THREE.MeshStandardMaterial({ color: 0x111114, roughness: 0.5, metalness: 0.5 })
  );
  deck.position.set(0, BH/2 + 0.005, -0.1);
  root.add(deck);

  // ── Key caps — generate a realistic QWERTY grid ──
  const rows = [
    { keys: 14, w: 0.198, z: -0.82 },  // function row (narrower)
    { keys: 13, w: 0.22,  z: -0.56 },  // number row
    { keys: 12, w: 0.22,  z: -0.30 },  // QWERTY
    { keys: 11, w: 0.22,  z: -0.04 },  // ASDF
    { keys: 10, w: 0.22,  z:  0.22 },  // ZXCV
    { keys:  1, w: 1.10,  z:  0.48 },  // spacebar
  ];
  rows.forEach(({ keys, w, z }) => {
    const totalW = keys * w + (keys - 1) * 0.03;
    for (let k = 0; k < keys; k++) {
      const kh = z === -0.82 ? 0.17 : 0.2;
      const key = new THREE.Mesh(
        new THREE.BoxGeometry(w - 0.02, 0.025, kh),
        keyCapMat
      );
      key.position.set(-totalW/2 + k*(w+0.03) + w/2, BH/2 + 0.02, z);
      root.add(key);
    }
  });

  // Backlight slit (thin emissive bar under keys, simulating keyboard backlight)
  const blMat = new THREE.MeshStandardMaterial({
    color: 0x00ccff, emissive: 0x00aaff, emissiveIntensity: 0.4,
    roughness: 0.1, metalness: 0.1, transparent: true, opacity: 0.3,
  });
  const backlight = new THREE.Mesh(new THREE.BoxGeometry(deckW - 0.1, 0.002, deckD - 0.2), blMat);
  backlight.position.set(0, BH/2 + 0.006, -0.1);
  root.add(backlight);
  root.userData.backlight = backlight;

  // Trackpad
  const tp = new THREE.Mesh(new THREE.BoxGeometry(0.95, 0.008, 0.62), tpadMat);
  tp.position.set(0, BH/2 + 0.007, 0.82);
  root.add(tp);
  // Trackpad border line
  const tpBorder = new THREE.Mesh(
    new THREE.BoxGeometry(0.97, 0.002, 0.64),
    new THREE.MeshStandardMaterial({ color: 0x444448, roughness: 0.2, metalness: 0.8 })
  );
  tpBorder.position.set(0, BH/2 + 0.012, 0.82);
  root.add(tpBorder);

  // Hinge bar — visible silver bar across back
  const hinge = new THREE.Mesh(
    new THREE.CylinderGeometry(0.055, 0.055, BW + 0.05, 24),
    new THREE.MeshStandardMaterial({ color: 0x888890, roughness: 0.15, metalness: 0.98 })
  );
  hinge.rotation.z = Math.PI / 2;
  hinge.position.set(0, BH/2 + 0.02, -BD/2 + 0.02);
  root.add(hinge);

  // USB-C ports (left side)
  [-0.25, 0.25].forEach(z => {
    const port = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.05, 0.06), portMat);
    port.position.set(-BW/2 - 0.01, 0, z);
    root.add(port);
  });
  // USB-A port (right side)
  const usba = new THREE.Mesh(new THREE.BoxGeometry(0.11, 0.06, 0.14), portMat);
  usba.position.set(BW/2 + 0.01, 0.01, 0);
  root.add(usba);
  // Headphone jack
  const jack = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 0.06, 12), portMat);
  jack.rotation.z = Math.PI / 2;
  jack.position.set(BW/2 + 0.01, 0, 0.4);
  root.add(jack);

  /* ─────────────────────────────────────────────
     LID  — pivot at hinge line (back of base top)
     In lid-local space:
       • Panel is VERTICAL (XY plane), height in Y, width in X
       • Screen face points toward +Z
       • Bottom of panel at Y=0 (hinge), top at Y = LH
  ───────────────────────────────────────────── */
  const LW = BW - 0.04;   // lid width
  const LH = 2.35;         // lid height (how tall the screen is)
  const LT = 0.075;        // lid thickness

  const lidGroup = new THREE.Group();
  lidGroup.position.set(0, BH/2 + 0.01, -BD/2 + 0.04); // pivot at hinge
  root.add(lidGroup);
  root.userData.lidGroup = lidGroup;

  // Lid back shell — silver aluminium  (Apple logo side)
  const lidBack = new THREE.Mesh(
    new THREE.BoxGeometry(LW, LH, LT),
    alumMat
  );
  lidBack.position.set(0, LH/2, -LT/2);
  lidBack.castShadow = true;
  lidGroup.add(lidBack);

  // Logo circle on back (subtle darker disc)
  const logo = new THREE.Mesh(
    new THREE.CylinderGeometry(0.18, 0.18, 0.005, 32),
    new THREE.MeshStandardMaterial({ color: 0xaaaaaf, roughness: 0.15, metalness: 0.95 })
  );
  logo.rotation.x = Math.PI / 2;
  logo.position.set(0, LH/2, -LT - 0.002);
  lidGroup.add(logo);

  // Bezel frame (front face, dark border around screen)
  const bezelFrame = new THREE.Mesh(
    new THREE.BoxGeometry(LW, LH, LT * 0.4),
    bezelMat
  );
  bezelFrame.position.set(0, LH/2, LT * 0.3);
  lidGroup.add(bezelFrame);

  // Webcam dot
  const cam = new THREE.Mesh(
    new THREE.CylinderGeometry(0.025, 0.025, 0.015, 12),
    new THREE.MeshStandardMaterial({ color: 0x050508, roughness: 0.2, metalness: 0.8 })
  );
  cam.rotation.x = Math.PI / 2;
  cam.position.set(0, LH - 0.12, LT * 0.72);
  lidGroup.add(cam);
  // Camera ring
  const camRing = new THREE.Mesh(
    new THREE.TorusGeometry(0.035, 0.008, 8, 20),
    new THREE.MeshStandardMaterial({ color: 0x2a2a30, roughness: 0.3, metalness: 0.7 })
  );
  camRing.rotation.x = Math.PI / 2;
  camRing.position.set(0, LH - 0.12, LT * 0.72);
  lidGroup.add(camRing);

  // ── SCREEN PANEL (PlaneGeometry — one face, correct UV) ──
  //   Placed just inside the bezel, face pointing toward +Z (viewer)
  const SW = LW - 0.28;  // screen width  (inset from bezel)
  const SH = LH - 0.22;  // screen height

  const screenGeo = new THREE.PlaneGeometry(SW, SH);
  // PlaneGeometry faces +Z by default ✓

  /* ── Canvas texture ── */
  const sc = document.createElement("canvas");
  sc.width = 1024; sc.height = 680;
  const sx = sc.getContext("2d");

  const CODE_LINES = [
    { t: "// ✦  Portfolio  2025",                  c: "#64d8ff", i: 0 },
    { t: "",                                         c: "#fff",    i: 0 },
    { t: "const developer = {",                     c: "#7ee8a2", i: 0 },
    { t: 'name     : "Your Name",',                 c: "#ffd580", i: 1 },
    { t: 'role     : "Full Stack Dev",',            c: "#ffd580", i: 1 },
    { t: 'location : "Your City, IN",',             c: "#ff9de2", i: 1 },
    { t: "skills   : [",                            c: "#7ee8a2", i: 1 },
    { t: '"React", "Node.js", "Three.js",',         c: "#ffd580", i: 2 },
    { t: '"TypeScript", "Python", "AWS"',           c: "#ffd580", i: 2 },
    { t: "],",                                       c: "#7ee8a2", i: 1 },
    { t: 'passion  : "Building beautiful things",', c: "#ff9de2", i: 1 },
    { t: "available: true,",                         c: "#64d8ff", i: 1 },
    { t: "};",                                       c: "#7ee8a2", i: 0 },
    { t: "",                                         c: "#fff",    i: 0 },
    { t: "function hire(dev) {",                    c: "#7ee8a2", i: 0 },
    { t: "  return dev.passion + dev.skills;",      c: "#ff9de2", i: 0 },
    { t: "}",                                       c: "#7ee8a2", i: 0 },
  ];

  function drawScreen() {
    const W = 1024, H = 680;
    // BG gradient
    const g = sx.createLinearGradient(0,0,0,H);
    g.addColorStop(0,"#020b14"); g.addColorStop(1,"#050f1e");
    sx.fillStyle = g; sx.fillRect(0,0,W,H);

    // Title bar
    sx.fillStyle = "#0b1420"; sx.fillRect(0,0,W,36);
    // Traffic lights
    [["#ff5f57",18],["#ffbd2e",44],["#28ca41",70]].forEach(([c,x])=>{
      sx.fillStyle=c; sx.beginPath(); sx.arc(x,18,7,0,Math.PI*2); sx.fill();
    });
    // Tab pill
    sx.fillStyle="#121e30"; sx.beginPath();
    sx.roundRect(100,6,160,24,4); sx.fill();
    sx.fillStyle="#64d8ff"; sx.font="bold 13px 'Courier New'";
    sx.fillText("portfolio.js  ✕",112,23);

    // Sidebar line numbers background
    sx.fillStyle="rgba(255,255,255,0.02)"; sx.fillRect(0,36,54,H-36);

    // Code lines
    const lineH = 34, startY = 80, indentW = 22;
    sx.font = "bold 17px 'Courier New',monospace";
    CODE_LINES.forEach((l,i)=>{
      const y = startY + i*lineH;
      // line number
      sx.fillStyle="#2e4a5a";
      sx.fillText(String(i+1).padStart(2," "), 8, y);
      // highlight active line
      if(i===4){ sx.fillStyle="rgba(100,216,255,0.07)"; sx.fillRect(54,y-22,W-54,lineH); }
      // code text
      sx.fillStyle = l.c;
      sx.fillText("  ".repeat(l.i) + l.t, 62, y);
    });

    // Blinking cursor
    if(Math.floor(Date.now()/500)%2===0){
      const cy = startY + CODE_LINES.length*lineH - 6;
      sx.fillStyle="#64d8ff";
      sx.fillRect(62, cy-20, 10, 20);
    }

    // Status bar
    sx.fillStyle="#0b1420"; sx.fillRect(0,H-22,W,22);
    sx.fillStyle="#64d8ff"; sx.font="11px 'Courier New'";
    sx.fillText("● portfolio.js   JavaScript   UTF-8   Ln 17  Col 1",8,H-7);
    sx.fillStyle="#7ee8a2";
    sx.fillText("▶ Live Server",W-130,H-7);
  }

  drawScreen();
  const screenTex = new THREE.CanvasTexture(sc);
  screenTex.flipY = false; // PlaneGeometry UVs are already correct

  const screenMesh = new THREE.Mesh(screenGeo, new THREE.MeshStandardMaterial({
    map: screenTex,
    emissive: 0x001830,
    emissiveIntensity: 0.55,
    roughness: 0.04,
    metalness: 0.0,
  }));
  // Sit the screen face flush with front of bezel, centred vertically
  screenMesh.position.set(0, LH/2, LT * 0.62);
  lidGroup.add(screenMesh);
  root.userData.screenMesh = screenMesh;
  root.userData.updateScreen = () => { drawScreen(); screenTex.needsUpdate = true; };

  // Screen glow point light (follows lid)
  const sg = new THREE.PointLight(0x0099ff, 3.5, 3.5);
  sg.position.set(0, LH/2, LT + 0.3);
  lidGroup.add(sg);
  root.userData.screenGlow = sg;

  /* ── Lid start: CLOSED = lid folded flat over keyboard
     rotation.x = 0 means lid stands straight up from pivot
     rotation.x = +Math.PI/2 means lid is flat on keyboard (closed, face-down)
     We want:
       closed  →  rotation.x = +Math.PI/2   (lid lays flat)
       open    →  rotation.x = -1.18 rad    (lid open ~108°, slight recline)
  ── */
  lidGroup.rotation.x = Math.PI / 2;  // starts closed

  // Scale & position the whole laptop
  root.scale.set(0.9, 0.9, 0.9);
  root.position.set(0, -0.15, 0);
  scene.add(root);
  return root;
}

// ═══════════════════════════════════════════════
//  MAIN COMPONENT
// ═══════════════════════════════════════════════
export default function Portfolio() {
  const canvasRef    = useRef(null);
  const scrollRef    = useRef(0);
  const laptopRef    = useRef(null);
  const animFrameRef = useRef(null);
  const [activeSection, setActiveSection] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const W = window.innerWidth, H = window.innerHeight;

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setSize(W, H);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;

    const scene = new THREE.Scene();

    // Subtle environment fog
    scene.fog = new THREE.FogExp2(0x060609, 0.055);

    const camera = new THREE.PerspectiveCamera(40, W/H, 0.1, 100);
    camera.position.set(0, 1.6, 7.0);
    camera.lookAt(0, 0.3, 0);

    /* ── Lights ── */
    scene.add(new THREE.AmbientLight(0xffffff, 0.55));

    const sun = new THREE.DirectionalLight(0xfff5e0, 1.6);
    sun.position.set(4, 8, 6); sun.castShadow = true;
    sun.shadow.mapSize.set(2048,2048);
    sun.shadow.camera.near = 0.5; sun.shadow.camera.far = 30;
    scene.add(sun);

    const fill = new THREE.DirectionalLight(0x4477ff, 0.5);
    fill.position.set(-5, 3, -3); scene.add(fill);

    const rim = new THREE.DirectionalLight(0x00d4ff, 0.7);
    rim.position.set(0, 5, -7); scene.add(rim);

    const under = new THREE.DirectionalLight(0x223344, 0.3);
    under.position.set(0, -4, 2); scene.add(under);

    /* ── Ground reflection plane ── */
    const ground = new THREE.Mesh(
      new THREE.PlaneGeometry(40,40),
      new THREE.MeshStandardMaterial({ color:0x050507, roughness:0.95, metalness:0.05, transparent:true, opacity:0.55 })
    );
    ground.rotation.x = -Math.PI/2;
    ground.position.y = -0.75;
    ground.receiveShadow = true;
    scene.add(ground);

    /* ── Laptop ── */
    const laptop = buildLaptop(scene);
    laptopRef.current = laptop;

    /* ── Resize ── */
    const onResize = () => {
      camera.aspect = window.innerWidth/window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", onResize);

    /* ── Scroll ── */
    const scrollEl = document.getElementById("scroll-container");
    const onScroll = () => {
      const max = scrollEl.scrollHeight - scrollEl.clientHeight;
      const prog = max > 0 ? scrollEl.scrollTop / max : 0;
      scrollRef.current = prog;
      setScrollProgress(prog);
      setActiveSection(Math.min(Math.floor(prog * SECTIONS.length), SECTIONS.length-1));
    };
    scrollEl?.addEventListener("scroll", onScroll);

    /* ── Animation loop ── */
    let t = 0, lastTexUpdate = 0;
    const animate = () => {
      animFrameRef.current = requestAnimationFrame(animate);
      t += 0.016;

      const prog = scrollRef.current;
      const lid  = laptop.userData.lidGroup;
      const bl   = laptop.userData.backlight;

      // Lid: closed = +PI/2, open = -1.18 (~108° open)
      const openAmt  = Math.min(prog / 0.30, 1);
      const targetX  = THREE.MathUtils.lerp(Math.PI/2, -1.18, openAmt);
      lid.rotation.x += (targetX - lid.rotation.x) * 0.08;

      // Y rotation — full sweep across scroll
      const targetY = prog * Math.PI * 1.75 - 0.1;
      laptop.rotation.y += (targetY - laptop.rotation.y) * 0.055;

      // Gentle float
      laptop.position.y = -0.15 + Math.sin(t * 0.95) * 0.099;

      // Camera ease
      camera.position.z = THREE.MathUtils.lerp(7.0, 5.4, prog);
      camera.position.y = THREE.MathUtils.lerp(1.6, 0.8, prog);
      camera.lookAt(0, 0.3, 0);

      // Keyboard backlight pulse
      if(bl) bl.material.emissiveIntensity = 0.35 + Math.sin(t*1.4)*0.15;

      // Screen glow pulse
      const sg = laptop.userData.screenGlow;
      if(sg) sg.intensity = 3.0 + Math.sin(t * 2.0) * 0.6;

      // Screen texture refresh ~2× per second
      if(t - lastTexUpdate > 0.45){
        lastTexUpdate = t;
        laptop.userData.updateScreen?.();
      }

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener("resize", onResize);
      scrollEl?.removeEventListener("scroll", onScroll);
      renderer.dispose();
    };
  }, []);

  const scrollTo = (i) => {
    const el = document.getElementById("scroll-container");
    const max = el.scrollHeight - el.clientHeight;
    el.scrollTo({ top: (i / SECTIONS.length) * max, behavior: "smooth" });
  };

  const downloadResume = () => {
    const txt = `YOUR NAME\nFull Stack Developer\n\nEmail: hello@yourname.dev\nPhone: +91-XXXXXXXXXX\nLinkedIn: linkedin.com/in/yourname\nGitHub: github.com/yourname\n\nSKILLS\nReact, TypeScript, Node.js, Three.js, Python, PostgreSQL, Docker, AWS\n\nEXPERIENCE\nSenior Developer — Company (2022–Present)\n• Scalable web apps serving 50k+ users\n\nEDUCATION\nB.Tech CS — University (2019–2023)\n`;
    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([txt],{type:"text/plain"}));
    a.download = "YourName_Resume.txt"; a.click();
  };

  return (
    <div style={{ background:"#060609", fontFamily:"'DM Sans','Segoe UI',sans-serif", overflow:"hidden", position:"relative" }}>
      {/* 3D canvas */}
      <canvas ref={canvasRef} style={{ position:"fixed", inset:0, width:"100vw", height:"100vh", zIndex:1, pointerEvents:"none" }} />

      {/* Scroll container */}
      <div id="scroll-container" style={{ position:"fixed", inset:0, overflowY:"scroll", zIndex:2 }}>
        <div style={{ height:`${SECTIONS.length*100}vh`, position:"relative" }}>

          {/* NAV */}
          <nav style={{
            position:"fixed",top:0,left:0,right:0,zIndex:50,
            display:"flex",justifyContent:"space-between",alignItems:"center",
            padding:"16px 44px",
            background:"linear-gradient(to bottom,rgba(6,6,9,0.9),transparent)",
          }}>
            <span style={{ fontSize:20,fontWeight:1000,color:"#fff",letterSpacing:"0.08em" }}>
              &lt;<span style={{color:"#030303"}}>Nataraj's Portfolio</span>/&gt;
            </span>
            <div style={{ display:"flex",gap:28,alignItems:"center" }}>
              {SECTIONS.map((s,i)=>(
                <button key={s} onClick={()=>scrollTo(i)} style={{
                  background:"none",border:"none",cursor:"pointer",
                  fontSize:12,fontWeight:800,letterSpacing:"0.1em",textTransform:"uppercase",
                  color:activeSection===i?"#00d4ff":"rgb(0, 0, 0)",transition:"color 0.3s",padding:0,
                }}>{s}</button>
              ))}
              <button onClick={()=>window.open("https://wa.me/918610806443", "_blank")} style={hireMeBtn(false)}>Hire Me</button>
            </div>
          </nav>

          {/* ── SECTION 0: HOME ── */}
          <section style={sec(0)}>
            <div style={card("left")}>
              <div style={tagBadge}>✦ Available for Work</div>
              <h1 style={{ fontSize:15,fontWeight:800,color:"#fff",margin:"12px 0 6px",letterSpacing:"0.05em" }}>I'm Natarajan R</h1>
              {/* Marquee */}
              <div style={{ overflow:"hidden",whiteSpace:"nowrap",margin:"8px 0 14px",
                borderTop:"1px solid rgba(0,212,255,0.18)", borderBottom:"1px solid rgba(0,212,255,0.18)",
                padding:"7px 0" }}>
                <span style={{ display:"inline-block",animation:"marqueeAnim 14s linear infinite",
                  fontSize:13,fontWeight:700,color:"#00d4ff",letterSpacing:"0.04em" }}>
                  {[...ROLES,...ROLES].join("  ✦  ")}&nbsp;&nbsp;
                </span>
              </div>
              <p style={bodyTxt}>Crafting high-performance web experiences with clean code and creative thinking. Open to freelance &amp; full-time roles.</p>
              <div style={{ display:"flex",gap:10,marginTop:18,flexWrap:"wrap" }}>
                <Btn label="View Work" primary onClick={()=>scrollTo(3)} />
                <Btn label="⬇ Resume" onClick={downloadResume} />
              </div>
            </div>
          </section>

          {/* ── SECTION 1: ABOUT ── */}
          <section style={sec(1)}>
            <div style={card("right")}>
              <Cap>About Me</Cap>
              <H2>Crafting Digital<br/>Experiences</H2>
              <p style={bodyTxt}>I'm a passionate developer with 3+ years of experience building scalable web applications. I turn complex ideas into elegant, performant products.</p>
              <p style={{...bodyTxt,marginTop:8}}>Currently open to full-time positions and exciting freelance projects.</p>
              <div style={{ display:"flex",gap:24,marginTop:18,paddingTop:14,borderTop:"1px solid rgba(255,255,255,0.08)" }}>
                {[["3+","Years Exp"],["20+","Projects"],["15+","Clients"]].map(([n,l])=>(
                  <div key={l}>
                    <div style={{fontSize:15,fontWeight:800,color:"#00d4ff"}}>{n}</div>
                    <div style={{fontSize:12,fontWeight:800,color:"rgb(253, 252, 252)",marginTop:3}}>{l}</div>
                  </div>
                ))}
              </div>
              <div style={{marginTop:16,}}><Btn label="⬇ Resume" onClick={downloadResume} /></div>
            </div>
          </section>

          {/* ── SECTION 2: SKILLS ── */}
          <section style={sec(2)}>
            <div style={card("left")}>
              <Cap>Skills</Cap>
              <H2>My Toolkit</H2>
              <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,marginTop:14 }}>
                {[["React","#61dafb"],["TypeScript","#3178c6"],["Node.js","#68a063"],["Three.js","#049ef4"],
                  ["Python","#f7c948"],["PostgreSQL","#336791"],["GraphQL","#e10098"],["Docker","#2496ed"],
                  ["Figma","#f24e1e"],["AWS","#ff9900"]].map(([s,c])=>(
                  <div key={s} style={{
                    fontSize:12,fontWeight:700,color:"#fff",
                    background:"rgba(255,255,255,0.04)",
                    border:`1px solid ${c}55`,borderLeft:`3px solid ${c}`,
                    padding:"8px 12px",borderRadius:7,
                    display:"flex",alignItems:"center",gap:7,
                  }}>
                    <span style={{width:7,height:7,borderRadius:"50%",background:c,flexShrink:0}}/>
                    {s}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── SECTION 3: PROJECTS ── */}
          <section style={sec(3)}>
            <div style={card("right")}>
              <Cap>Projects</Cap>
              <H2>Selected Work</H2>
              {[
                {name:"E-Commerce Platform",   tech:"React · Node · MongoDB",  desc:"Full-stack store with payment integration & admin panel.", color:"#00d4ff"},
                {name:"3D Portfolio",           tech:"Three.js · React · GSAP", desc:"Interactive portfolio with WebGL scroll animations.",       color:"#7ee8a2"},
                {name:"AI Analytics Dashboard",tech:"Python · FastAPI · React", desc:"Real-time analytics with ML-powered predictions.",           color:"#ffd580"},
              ].map(p=>(
                <div key={p.name} style={{
                  marginTop:12,padding:"14px 16px",borderRadius:9,cursor:"pointer",
                  background:"rgba(255,255,255,0.04)",
                  border:"1px solid rgba(255,255,255,0.08)",
                  borderLeft:`3px solid ${p.color}`,
                  transition:"background 0.2s",
                }}>
                  <div style={{fontSize:14,fontWeight:800,color:"#fff"}}>{p.name}</div>
                  <div style={{fontSize:11,fontWeight:700,color:p.color,marginTop:4,letterSpacing:"0.05em"}}>{p.tech}</div>
                  <div style={{fontSize:13,fontWeight:800,color:"rgb(255, 255, 255)",marginTop:6,lineHeight:1.65}}>{p.desc}</div>
                </div>
              ))}
            </div>
          </section>

          {/* ── SECTION 4: CONTACT ── */}
          <section style={sec(4)}>
            <div style={{...card("left"),maxWidth:340}}>
              <Cap>Contact</Cap>
              <H2>Let's Work<br/>Together</H2>
              <p style={bodyTxt}>Have a project or opportunity? I'd love to hear from you.</p>
              <div style={{display:"flex",flexDirection:"column",gap:9,marginTop:16}}>
                {[
                  {icon:"✉",label:"Email",    val:"Send Mail",         href:"mailto:natarajsg2026@gmail.com"},
                  {icon:"📱",label:"Whatsapp",    val:"Say Hi !",             href:"https://wa.me/+918610806443"},
                  {icon:"💼",label:"LinkedIn", val:"linkedin.com/in/yourname",   href:"https://linkedin.com"},
                  {icon:"🐙",label:"GitHub",   val:"github.com/yourname",        href:"https://github.com"},
                ].map(({icon,label,val,href})=>(
                  <a key={label} href={href} target="_blank" rel="noreferrer" style={{
                    display:"flex",alignItems:"center",gap:12,
                    padding:"10px 14px",borderRadius:9,textDecoration:"none",
                    background:"rgba(0,212,255,0.06)",
                    border:"1px solid rgba(0,212,255,0.2)",
                    transition:"background 0.2s",
                  }}>
                    <span style={{fontSize:17}}>{icon}</span>
                    <div>
                      <div style={{fontSize:10,color:"#00d4ff",fontWeight:800,letterSpacing:"0.12em",textTransform:"uppercase"}}>{label}</div>
                      <div style={{fontSize:12,color:"#fff",fontWeight:600,marginTop:2}}>{val}</div>
                    </div>
                  </a>
                ))}
              </div>
              <div style={{display:"flex",gap:10,marginTop:18}}>
                <a href="mailto:hello@yourname.dev" style={{
                  flex:1,textAlign:"center",fontSize:11,fontWeight:800,letterSpacing:"0.1em",
                  textTransform:"uppercase",textDecoration:"none",padding:"11px",borderRadius:8,
                  background:"linear-gradient(135deg,#00d4ff,#0077ff)",color:"#fff",
                  boxShadow:"0 0 22px rgba(0,212,255,0.4)",
                }}>Send Email</a>
                <button onClick={downloadResume} style={{
                  flex:1,fontSize:11,fontWeight:800,letterSpacing:"0.1em",textTransform:"uppercase",
                  cursor:"pointer",padding:"11px",borderRadius:8,
                  background:"transparent",border:"1px solid rgba(0,212,255,0.45)",color:"#fdfdfd",
                }}>⬇ Resume</button>
              </div>
            </div>
          </section>

        </div>
      </div>
 
 
      {/* Fixed Hire Me — bottom center */}
      <div style={{ position:"fixed",bottom:26,left:"50%",transform:"translateX(-50%)",zIndex:50 }}>
        <button onClick={()=>window.open("https://wa.me/918610806443", "_blank")} style={hireMeBtn(true)}>✦ Hire Me</button>
      </div>

      {/* Progress bar */}
      <div style={{
        position:"fixed",top:0,left:0,height:2,zIndex:100,transition:"width 0.08s",
        width:`${scrollProgress*100}%`,
        background:"linear-gradient(to right,#00d4ff,#0077ff)",
        boxShadow:"0 0 8px #00d4ff",
      }}/>

      {/* Dot nav */}
      <div style={{ position:"fixed",right:20,top:"50%",transform:"translateY(-50%)",display:"flex",flexDirection:"column",gap:8,zIndex:50 }}>
        {SECTIONS.map((s,i)=>(
          <div key={i} title={s} onClick={()=>scrollTo(i)} style={{
            width:activeSection===i?7:4,
            height:activeSection===i?22:4,
            borderRadius:4,cursor:"pointer",transition:"all 0.3s",
            background:activeSection===i?"#00d4ff":"rgba(53, 52, 52, 0.22)",
            boxShadow:activeSection===i?"0 0 10px #00d4ff":"none",
          }}/>
        ))}
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;600;700;800&display=swap');
        *{box-sizing:border-box;margin:0;padding:0;}
        ::-webkit-scrollbar{width:0;}
        @keyframes marqueeAnim{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
        @keyframes hirePulse{0%,100%{box-shadow:0 0 26px rgba(0,212,255,0.55),0 4px 18px rgba(0,0,0,0.5)}50%{box-shadow:0 0 42px rgba(0,212,255,0.9),0 4px 24px rgba(0,0,0,0.6)}}
        a:hover{opacity:0.85;}
      `}</style>
    </div>
  );
}

/* ── Small components ── */
function Btn({label,primary,onClick}){
  return(
    <button onClick={onClick} style={{
      fontSize:11,fontWeight:800,letterSpacing:"0.1em",textTransform:"uppercase",
      cursor:"pointer",padding:"10px 20px",borderRadius:8,
      border:primary?"none":"1px solid rgba(0,212,255,0.45)",
      background:primary?"linear-gradient(135deg,#00d4ff,#0077ff)":"transparent",
      color:primary?"#fff":"#00d4ff",
      boxShadow:primary?"0 0 18px rgba(0,212,255,0.3)":"none",
    }}>{label}</button>
  );
}
function Cap({children}){
  return <p style={{fontSize:10,fontWeight:800,color:"#00d4ff",letterSpacing:"0.22em",textTransform:"uppercase",marginBottom:8}}>{children}</p>;
}
function H2({children}){
  return <h2 style={{fontSize:15,fontWeight:800,color:"#fff",lineHeight:1.3,marginBottom:10}}>{children}</h2>;
}

/* ── Style helpers ── */
const bodyTxt={fontSize:14,fontWeight:600,color:"rgb(255, 255, 255)",lineHeight:1.85};
const tagBadge={
  display:"inline-flex",alignItems:"center",gap:5,
  fontSize:10,fontWeight:800,color:"#00d4ff",letterSpacing:"0.14em",textTransform:"uppercase",
  padding:"4px 12px",borderRadius:20,
  background:"rgba(0,212,255,0.1)",border:"1px solid rgba(0,212,255,0.3)",marginBottom:4,
};
const hireMeBtn=(big)=>({
  fontSize:big?12:11,fontWeight:800,letterSpacing:"0.13em",textTransform:"uppercase",
  padding:big?"12px 34px":"8px 18px",borderRadius:40,cursor:"pointer",
  background:"linear-gradient(135deg,#00d4ff,#0077ff)",
  color:"#fff",border:"none",
  animation:big?"hirePulse 2.5s ease-in-out infinite":"none",
  boxShadow:big?"0 0 26px rgba(0,212,255,0.55),0 4px 18px rgba(0,0,0,0.5)":"0 0 16px rgba(0,212,255,0.3)",
});
function sec(i){
  return{position:"absolute",top:`${i*100}vh`,left:0,right:0,height:"100vh",
    display:"flex",alignItems:"center",padding:"0 44px",pointerEvents:"auto"};
}
function card(side){
  return{
    display:"flex",flexDirection:"column",maxWidth:330,
    marginLeft:side==="left"?"1%":"auto",
    marginRight:side==="right"?"1%":"auto",
    background:"rgba(7,9,16,0.85)",
    backdropFilter:"blur(18px)",
    padding:"26px 26px",borderRadius:14,
    border:"1px solid rgba(0,212,255,0.18)",
    borderLeft:side==="left"?"3px solid #00d4ff":"1px solid rgba(0,212,255,0.18)",
    borderRight:side==="right"?"3px solid #00d4ff":"1px solid rgba(0,212,255,0.18)",
    boxShadow:"0 8px 48px rgba(0,0,0,0.65),inset 0 0 0 1px rgba(255,255,255,0.03)",
  };
}
