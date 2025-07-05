---
title: "💼 My Services"
description: "Overview of consulting, development, and training services."
---

<style>
  .service-flex {
    display: flex;
    align-items: flex-start;
    gap: 2rem;
    margin-bottom: 1.5rem;
    flex-wrap: wrap;
  }
  .service-title-row {
    display: flex;
    align-items: center;
    gap: 0.7rem;
    margin-bottom: 0.3rem;
  }
  .service-icon {
    font-size: 2.5rem;
    margin-right: 0;
    flex-shrink: 0;
    line-height: 1.1;
    margin-top: 0;
    align-self: flex-start;
  }
  .service-title {
    font-size: 1.18rem;
    font-weight: 700;
    text-align: left;
    line-height: 1.25;
    word-break: break-word;
    white-space: normal;
    flex: 1 1 0%;
    min-width: 0;
    display: flex;
    align-items: center;
  }
  .service-box {
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(16px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 1.25rem;
    padding: 1.5rem;
    margin-bottom: 1rem;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    flex: 1 1 320px;
    min-width: 270px;
    transform: translateY(0);
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
  }
  
  .service-box::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(37, 99, 235, 0.05), transparent);
    transition: left 0.6s ease;
    pointer-events: none;
  }
  
  .service-box:hover::before {
    left: 100%;
  }
  
  .service-box:hover {
    transform: translateY(-6px);
    box-shadow: 0 16px 48px rgba(37, 99, 235, 0.15);
    background: rgba(255, 255, 255, 0.95);
    border-color: rgba(37, 99, 235, 0.3);
  }
  
  .service-icon {
    font-size: 2.5rem;
    margin-right: 0;
    flex-shrink: 0;
    line-height: 1.1;
    margin-top: 0;
    align-self: flex-start;
    transition: transform 0.3s ease;
  }
  
  .service-box:hover .service-icon {
    transform: scale(1.1);
  }
  
  @media (prefers-color-scheme: dark) {
    .service-box {
      background: rgba(17, 24, 39, 0.9);
      border-color: rgba(55, 65, 81, 0.5);
      color: #f3f4f6;
    }
    
    .service-box:hover {
      background: rgba(17, 24, 39, 0.95);
      border-color: rgba(96, 165, 250, 0.4);
      box-shadow: 0 16px 48px rgba(96, 165, 250, 0.1);
    }
  }
  @media (max-width: 700px) {
    .service-flex { 
      flex-direction: column; 
      gap: 1.2rem; 
      margin: 0;
      padding: 0;
    }
    .service-box {
      padding: 1.2rem;
      margin-bottom: 1rem;
      min-width: unset;
      flex: 1 1 auto;
      width: 100%;
      box-sizing: border-box;
    }
    .service-title { 
      font-size: 1.05rem; 
      line-height: 1.3;
    }
    .service-title-row { 
      margin-bottom: 0.5rem;
      gap: 0.5rem;
    }
    .service-icon { 
      font-size: 1.8rem;
      margin-top: 0.1rem;
    }
    h1, h1#title, h1.title, h1:first-child { 
      font-size: 1.35rem !important; 
      padding: 0 1rem;
    }
    .cta-white { 
      font-size: 1.75rem !important; 
      padding: 0 1rem;
    }
    .cta-white a { 
      font-size: 2.25rem !important; 
    }
  }
  @media (max-width: 480px) {
    .service-box {
      padding: 1rem;
      margin-bottom: 0.8rem;
      border-radius: 1rem;
    }
    .service-title { 
      font-size: 1rem; 
    }
    .service-icon { 
      font-size: 1.6rem;
    }
    h1, h1#title, h1.title, h1:first-child { 
      font-size: 1.2rem !important; 
    }
    .cta-white { 
      font-size: 1.5rem !important; 
    }
    .cta-white a { 
      font-size: 1.8rem !important; 
    }
  }
  /* Titel auf dieser Seite ausblenden */
  h1.title, h1#title, h1:first-child {
    display: none !important;
  }
  .cta-white {
    color: #fff !important;
    text-shadow: 0 2px 8px rgba(0,0,0,0.18);
  }
</style>

# 💼 My Services & Solutions

I offer a range of professional services to help your business succeed in the digital world. My focus is on practical, results-driven solutions tailored to your needs.

<div class="service-flex">
  <div class="service-box">
    <div class="service-title-row">
      <span class="service-icon">🧩</span>
      <span class="service-title">Polarion Consulting & Development</span>
    </div>
    <ul>
      <li>Solution design & architecture for Polarion ALM</li>
      <li>Project support, custom development, and integration</li>
      <li>Delivery of complete solution packages and ready-to-use modules</li>
      <li>From initial concept to finished product, I support you at every step</li>
    </ul>
    <div style="font-size:0.98em;color:#2563eb;margin-top:0.5em;">7+ years experience • End-to-end support • Focus on quality & maintainability</div>
  </div>
  <div class="service-box">
    <div class="service-title-row">
      <span class="service-icon">🔗</span>
      <span class="service-title">GitHub & CI/CD Pipeline Optimization</span>
    </div>
    <ul>
      <li>Building and establishing a GitHub-based workflow for your company</li>
      <li>Best practice implementation based on my experience and your environment</li>
      <li>Optimization and automation of existing GitHub setups using advanced workflows</li>
      <li>Consulting, hands-on support, and training for your team</li>
    </ul>
    <div style="font-size:0.98em;color:#2563eb;margin-top:0.5em;">Migration, automation, and team enablement for modern DevOps</div>
  </div>
  <div class="service-box">
    <div class="service-title-row">
      <span class="service-icon">🤖</span>
      <span class="service-title">The Path to AI & AI Agents</span>
    </div>
    <ul>
      <li>Training and overview of the world and possibilities of AI (technical or business focus)</li>
      <li>Joint analysis of your business processes for AI-driven optimization</li>
      <li>Implementation of complex AI automations and agent-based outsourcing</li>
    </ul>
    <div style="font-size:0.98em;color:#2563eb;margin-top:0.5em;">From first steps to advanced AI agent networks</div>
  </div>
</div>

<hr style="border: none; border-top: 2px solid #fff; margin: 1.5rem 0 2rem 0; background: none;">

## ⭐ Why work with me?

- <strong>Proven expertise</strong> in Polarion, GitHub, CI/CD, and AI
- <strong>Hands-on mentality</strong> and pragmatic, solution-oriented approach
- <strong>Transparent communication</strong> and reliable delivery
- <strong>Continuous improvement</strong> and knowledge transfer for your team

<section class="my-16 max-w-2xl mx-auto">
  <div class="text-4xl font-bold text-center cta-white">
    For more details or a tailored offer, feel free to contact me directly<br /><br />
    <a class="contact-cta-link" href="mailto:consulting@boesger.com">Let's chat 📨</a>
  </div>
</section>
