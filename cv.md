<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Your Name — Resume</title>
  <style>
    /* Exact CSS specs, colors, and layout foundations from joaomoreno/resume */
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

    /* Core Two-Column Flex Layout Container */
    .wrapper {
      max-width: 840px;
      margin: 0 auto;
      padding: 80px 40px;
      display: flex;
      gap: 60px;
    }

    /* LEFT COLUMN: Profile Pic & Contact Panel */
    .sidebar {
      width: 220px;
      flex-shrink: 0;
    }

    .profile-frame {
      width: 100%;
      margin-bottom: 24px;
    }

    .profile-frame img {
      width: 100%;
      height: auto;
      border-radius: 6px;
      display: block;
      border: 1px solid #eaecef;
    }

    h1 {
      font-size: 26px;
      font-weight: 800;
      letter-spacing: -0.5px;
      margin: 0 0 6px 0;
      color: #000000;
      line-height: 1.2;
    }

    .subtitle {
      font-size: 14px;
      color: #586069;
      margin: 0 0 24px 0;
      font-weight: 400;
      line-height: 1.4;
    }

    .contact-links {
      font-size: 13px;
      color: #586069;
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .contact-links a {
      color: #586069;
    }

    .contact-links a:hover {
      color: #0366d6;
    }

    /* RIGHT COLUMN: The Main Timeline Content */
    .main-content {
      flex-grow: 1;
    }

    h2 {
      font-size: 16px;
      font-weight: 700;
      margin: 0 0 20px 0;
      color: #000000;
      border-bottom: 1px solid #eaecef;
      padding-bottom: 6px;
    }

    section {
      margin-bottom: 40px;
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
      font-size: 14.5px;
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

    /* Monospaced tag arrays for technology classifications */
    .tags {
      font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace;
      font-size: 12px;
      color: #444d56;
      margin-top: 6px;
    }

    /* Responsive adjustments for phone viewports */
    @media (max-width: 740px) {
      .wrapper {
        flex-direction: column;
        padding: 40px 20px;
        gap: 40px;
      }
      .sidebar {
        width: 100%;
      }
      .profile-frame {
        width: 120px; /* Smaller footprint when stacked on mobile screens */
      }
      .item-header {
        flex-direction: column;
      }
      .item-meta {
        margin-top: 2px;
        margin-bottom: 4px;
      }
    }

    @media print {
      body {
        font-size: 12px;
        background: #fff;
        color: #000;
      }
      .wrapper {
        padding: 0;
        max-width: 100%;
        gap: 40px;
      }
      a {
        color: #000;
      }
    }
  </style>
</head>
<body>

  <div class="wrapper">
    
    <!-- LEFT COLUMN: Profile Graphic & Contact Core -->
    <aside class="sidebar">
      <div class="profile-frame">
        <!-- Swap this source placeholder link out for your local image path -->
        <img src="https://via.placeholder.com/220x220" alt="Profile Picture">
      </div>
      
      <h1>Your Name</h1>
      <div class="subtitle">Computational Photochemistry &amp; Excited-State Dynamics</div>
      
      <div class="contact-links">
        <a href="mailto:you@example.com">you@example.com</a>
        <a href="https://huixrotllant.github.io">huixrotllant.github.io</a>
        <a href="https://github.com/username">github.com/username</a>
      </div>
    </aside>

    <!-- RIGHT COLUMN: Main Academic & Professional Chronicle -->
    <main class="main-content">
      
      <!-- EXPERIENCE -->
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
            Explored variations of the Schrödinger equation under light-induced conditions across condensed phases and complex proteins.
          </p>
        </div>
      </section>

      <!-- EDUCATION -->
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

      <!-- PROJECTS -->
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

      <!-- SKILLS -->
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

    </main>
  </div>

</body>
