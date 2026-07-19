<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Your Name — Resume</title>
  <style>
    /* Exact CSS properties and architectural spacing from joaomoreno/resume */
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
      color: #24292e;
      background-color: #ffffff;
      margin: 0;
      padding: 0;
      font-size: 14px;
      line-height: 1.5;
    }
    a {
      color: #0366d6;
      text-decoration: none;
    }
    a:hover {
      text-decoration: underline;
    }
    .wrapper {
      max-width: 600px;
      margin: 0 auto;
      padding: 80px 40px;
    }
    /* Header Design */
    header {
      margin-bottom: 50px;
    }
    h1 {
      font-size: 32px;
      font-weight: 800;
      letter-spacing: -0.5px;
      margin: 0 0 4px 0;
      color: #000000;
      line-height: 1.2;
    }
    .subtitle {
      font-size: 16px;
      color: #586069;
      margin: 0 0 20px 0;
      font-weight: 400;
    }
    .contact-links {
      font-size: 13px;
      color: #586069;
    }
    .contact-links a {
      color: #586069;
      margin-right: 12px;
    }
    .contact-links a:hover {
      color: #0366d6;
    }
    /* Section Typography & Blocks */
    h2 {
      font-size: 18px;
      font-weight: 700;
      margin: 40px 0 20px 0;
      color: #000000;
      border-bottom: 1px solid #eaecef;
      padding-bottom: 6px;
    }
    .item {
      margin-bottom: 24px;
    }
    .item-header {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      margin-bottom: 4px;
    }
    .item-title {
      font-size: 15px;
      font-weight: 600;
      color: #000000;
    }
    .item-meta {
      font-size: 13px;
      color: #6a737d;
      font-variant-numeric: tabular-nums;
    }
    .item-sub {
      font-size: 13px;
      color: #586069;
      margin: 0 0 6px 0;
    }
    .item-desc {
      color: #24292e;
      margin: 0;
      font-size: 13.5px;
    }
    /* Monospaced Tag lists for Tech/Skills */
    .tags {
      font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace;
      font-size: 12px;
      color: #444d56;
      margin-top: 6px;
    }
    /* Simple structural lists */
    ul.simple-list {
      margin: 0;
      padding-left: 20px;
    }
    ul.simple-list li {
      margin-bottom: 4px;
      color: #24292e;
    }
    /* Print styling rules natively kept by Joao */
    @media print {
      body {
        font-size: 12px;
        background: #fff;
        color: #000;
      }
      .wrapper {
        padding: 20px 0;
        max-width: 100%;
      }
      a {
        color: #000;
      }
    }
    @media (max-width: 500px) {
      .wrapper {
        padding: 40px 20px;
      }
      .item-header {
        flex-direction: column;
      }
      .item-meta {
        margin-top: 2px;
        margin-bottom: 4px;
      }
    }
  </style>
</head>
<body>
  <div class="wrapper">
    <!-- HEADER -->
    <header>
      <h1>Your Name</h1>
      <div class="subtitle">Computational Photochemistry &amp; Excited-State Dynamics</div>
      <div class="contact-links">
        <a href="mailto:you@example.com">you@example.com</a>
        <a href="https://huixrotllant.github.io">huixrotllant.github.io</a>
        <a href="https://github.com/username">github.com/username</a>
      </div>
    </header>
    <!-- EXPERIENCE SECTION -->
    <section>
      <h2>Experience</h2>
      <div class="item">
        <div class="item-header">
          <div class="item-title">Principal Investigator</div>
          <div class="item-meta">2024 — Present</div>
        </div>
        <div class="item-sub">Huix-Rotllant Research Group</div>
        <p class="item-desc">
          Investigating the photochemistry of molecular systems in complex environments. Developing theoretical architectures for non-adiabatic dynamics and multi-scale QM/MM platforms.
        </p>
      </div>
      <div class="item">
        <div class="item-header">
          <div class="item-title">Postdoctoral Fellow</div>
          <div class="item-meta">2021 — 2024</div>
        </div>
        <div class="item-sub">Theoretical Chemistry Institute</div>
        <p class="item-desc">
          Explored specific variations of the Schrödinger equation under light-induced conditions across condensed phases and complex proteins.
        </p>
      </div>
    </section>
    <!-- EDUCATION SECTION -->
    <section>
      <h2>Education</h2>
      <div class="item">
        <div class="item-header">
          <div class="item-title">Ph.D. in Theoretical Chemistry</div>
          <div class="item-meta">2017 — 2021</div>
        </div>
        <div class="item-sub">University of Science — Summa Cum Laude</div>
        <p class="item-desc">
          Thesis: Methodological developments of TDDFT applied directly inside repeating periodic boundary conditions.
        </p>
      </div>
    </section>
    <!-- PROJECTS SECTION -->
    <section>
      <h2>Projects</h2>
      <div class="item">
        <div class="item-header">
          <div class="item-title"><a href="https://github.com">QuantumDynamics.js</a></div>
          <div class="item-meta">Open Source</div>
        </div>
        <p class="item-desc">
          A raw performance computation library designed to render electron wave functions directly in clean browser spaces.
        </p>
        <div class="tags">JavaScript, WebGL, WebAssembly</div>
      </div>
    </section>
    <!-- SKILLS SECTION -->
    <section>
      <h2>Skills</h2>
      <div class="item">
        <div class="item-header">
          <div class="item-title">Methodologies</div>
        </div>
        <p class="item-desc">
          Schrödinger Equation, TDDFT, Non-adiabatic Molecular Dynamics, Periodic Boundary Conditions (PBC), Condensed Phase Modeling.
        </p>
      </div>
      <div class="item">
        <div class="item-header">
          <div class="item-title">Engineering</div>
        </div>
        <p class="item-desc">
          Python, Fortran, C++, Linux Shell Scripting, Git Version Architecture, High-Performance Computing cluster environments.
        </p>
      </div>
    </section>
  </div>
</body>
</html>
