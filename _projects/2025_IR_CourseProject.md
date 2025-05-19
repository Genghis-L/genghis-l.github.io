---
layout: distill
title: Hamiltonian Monte Carlo - Algorithm, Theory, and Experiments
description: DS-GA. 1005 Inference and Representation Course Project
img: assets/img/projects/2025_IR_CourseProject.png
importance: 3 # 1～5
category: Data Science
giscus_comments: true

bibliography: projects.bib

authors:
  - name: Kehan (Genghis) Luo
    url: "https://Genghis-L.github.io/"
    email: kl4747@nyu.edu
    affiliations:
      name: NYU Shanghai
  - name: Jiasheng (Alex) Ni
    url: "https://www.linkedin.com/in/jiasheng-ni-830a421a6/"
    email: jn2294@nyu.edu
    affiliations:
      name: NYU

shortcuts:
  - name: Report
    icon: fa-solid fa-file
    link: /assets/pdf/projects/2025_IR_CourseProject/HMC_IR25_report.pdf
  - name: Slides
    icon: fa-solid fa-file
    link: /assets/pdf/projects/2025_IR_CourseProject/HMC_IR25_slides.pdf
  - name: Code
    icon: fa-brands fa-github
    link: https://github.com/Genghis-L/Hamiltonian-Monte-Carlo
---

<d-contents>
  <nav class="l-text figcaption">
  <h3>Contents</h3>
    <div><a href="#overview">Overview</a></div>
  </nav>
</d-contents>

## Overview

Efficient sampling from complex, high-dimensional probability distributions remains a central challenge in computational statistics and machine learning. 
In this report, we present a comprehensive treatment of Hamiltonian Monte Carlo (HMC), an advanced Markov Chain Monte Carlo (MCMC) technique that leverages Hamiltonian dynamics to propose distant, low-autocorrelation moves in the target distribution. 
We begin by introducing the HMC algorithm—momentum augmentation, leapfrog integration, and the Metropolis acceptance step—and discuss its key theoretical properties, including reversibility, symplecticity, and near-conservation of the Hamiltonian. 
We then relate HMC to overdamped and underdamped Langevin dynamics and survey important extensions such as the No-U-Turn Sampler (NUTS) and Riemannian Manifold HMC. 
Through a series of experiments on Gaussian and “Donut” distributions across varying dimensions, as well as comparisons of integrators, kinetic energy functions, and proposal schemes, we empirically demonstrate HMC’s superior effective sample size and acceptance rates relative to Random-Walk Metropolis, albeit at higher computational cost. 
Finally, we discuss practical considerations, limitations—such as tuning requirements and gradient dependence—and outline future research directions, including adaptive mass matrices, higher-order integrators, and integration with normalizing flows. 
Github codes for our experiments can be found [here](https://github.com/Genghis-L/Hamiltonian-Monte-Carlo). See more details in the [report](http://genghis-l.github.io/assets/pdf/projects/2025_IR_CourseProject/HMC_IR25_report.pdf). 