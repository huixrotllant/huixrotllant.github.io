<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Miquel Huix-Rotllant — Resume</title>
  <script>
  function speakName() {
    // Check if the browser supports text-to-speech
    if ('speechSynthesis' in window) {
      // Cancel any speech currently playing
      window.speechSynthesis.cancel();
      
      // Type out how you want the computer voice to pronounce it
      const utterance = new SpeechSynthesisUtterance("Miquel Huix Rotllant"); 
      
      utterance.lang = 'ca-ES'; // Change to 'es-ES', 'fr-FR', etc. if needed
      utterance.rate = 0.9;     // Slightly slower pace so it is easy to catch
      
      window.speechSynthesis.speak(utterance);
    } else {
      alert("Text-to-speech is not supported in this browser.");
    }
  }
  </script>
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

    .executive-summary, .item-desc {
  text-align: justify;
  text-justify: inter-word; /* Ensures clean, even spacing between words across all modern browsers */
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

      .executive-summary, .item-desc {
    text-align: justify;
    text-justify: inter-word;
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
        <img src="/images/people/miquel.png" alt="Profile Picture">
      </div>
      
      <h2>Miquel Huix-Rotllant
      <button class="speaker-btn" onclick="speakName()" aria-label="Listen to pronunciation" title="Click to hear pronunciation">
    <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.25-2.5-3.93v7.86c1.48-.68 2.5-2.16 2.5-3.93zm-2.5-7.43v1.54c2.61.71 4.5 3.1 4.5 5.89s-1.89 5.18-4.5 5.89v1.54c3.46-.76 6-3.81 6-7.43s-2.54-6.67-6-7.43z"/></svg>
    <span class="ipa-text">/Mikɛl Uʃ-Rutʎan/</span>
      </button>
      </h2>
      <div class="subtitle">Computational Photochemistry &amp; Excited-State Dynamics</div>
      
      <div class="contact-links">
        <b>Email:</b><a href="mailto:miquel.huix-rotllant@cnrs.fr">miquel.huix-rotllant@cnrs.fr</a>
        <b>Website:</b><a href="https://huixrotllant.github.io">huixrotllant.github.io</a>
        <b>Orcid:</b> <a href="https://orcid.org/0000-0002-2131-7328">0000-0002-2131-7328</a>
      </div>
    </aside>

    <!-- RIGHT COLUMN: Main Academic & Professional Chronicle -->
    <main class="main-content">

    <!-- SUMMARY -->
      <section>
        <h2>Summary</h2>

        <div class="executive-summary" itemprop="description">
          <p class="item-desc">
Following my PhD in Theoretical Chemistry from Université Grenoble (2012) focused on developing double excitations for TDDFT, I defended my Habilitation (HDR) in 2025 at Aix-Marseille University on the modeling of photochemistry in the condensed phase. I am a permanent CNRS Research Fellow since 2015 at Aix-Marseille University, currently serving as the Head of the Light and Radicals strategic research axis at the Institut de Chimie Radicalaire. I currently lead the Theoretical Chemistry division of the national French XFEL network as well as the South-East hub of the French Theoretical Chemistry network (Thémosia). I have authored over 70 peer-reviewed publications, blending electronic structure developments, multi-scale modeling, and spectroscopy with applications spanning from gas-phase molecules to complex photoactive proteins.
  </p>
        </div>
      </section>
      
      <!-- EXPERIENCE -->
      <section>
        <h2>Current Position</h2>

        <div class="item">
          <div class="item-header">
            <div class="item-title">Principal Investigator</div>
            <div class="item-meta">2015 — Present</div>
          </div>
          <div class="item-sub">Huix-Rotllant Research Group</div>
          <p class="item-desc">
            Investigating the photochemistry of molecular systems in complex environments. Developing theoretical architectures for non-adiabatic dynamics and multi-scale QM/MM platforms.
          </p>
        </div>
        
      </section>

      <!-- EDUCATION -->
      <section>
        <h2>Education</h2>

        <div class="item">
          <div class="item-header">
            <div class="item-title">Habilitation to supervise research</div>
            <div class="item-meta">2025</div>
          </div>
          <div class="item-sub">Aix-Marseille University (France)</div>
          <p class="item-desc">
            Thesis: Energy dissipation in photoactive molecular systems: from gas to condensed phase
          </p>
        </div>

        <div class="item">
          <div class="item-header">
            <div class="item-title">PhD Theoretical Chemistry</div>
            <div class="item-meta">2008-2011</div>
          </div>
          <div class="item-sub">Université de Grenoble (France)</div>
           <div class="item-sub"><b>Advisor:</b> Mark E. Casida</div>
          <p class="item-desc">
            Thesis: Improved correlation kernels for linear-response time-dependent density-functional theory
          </p>
        </div>

        <div class="item">
          <div class="item-header">
            <div class="item-title">Master Theoretical Chemistry</div>
            <div class="item-meta">2006-2008</div>
          </div>
          <div class="item-sub">Universitat Rovira i Virgili (Catalonia)</div>
        </div>

        
        <div class="item">
          <div class="item-header">
            <div class="item-title">Bachelor Chemistry</div>
            <div class="item-meta">2002-2006</div>
          </div>
          <div class="item-sub">Universitat de Girona (Catalonia)</div>
        </div>

        
      </section>
    </main>
  </div>

</body>
