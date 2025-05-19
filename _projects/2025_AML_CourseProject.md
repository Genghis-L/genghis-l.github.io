---
layout: distill
title: Stochastic Convex Optimization - Learnability, Stability and Gradient Descent
description: CSCI-GA. 3033 Advanced Machine Learning Course Project
img: assets/img/projects/2025_AML_CourseProject.png
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
  - name: Nikolaos Tsilivis
    url: "https://cims.nyu.edu/~nt2231/page.html"
    email: nt2231@nyu.edu
    affiliations:
      name: NYU

shortcuts:
  - name: Report
    icon: fa-solid fa-file
    link: /assets/pdf/projects/2025_AML_CourseProject/SCO_AML25_report.pdf
  - name: Slides
    icon: fa-solid fa-file
    link: /assets/pdf/projects/2025_AML_CourseProject/SCO_AML25_presentation.pdf
---

<d-contents>
  <nav class="l-text figcaption">
  <h3>Contents</h3>
    <div><a href="#overview">Overview</a></div>
  </nav>
</d-contents>

## Overview

We consider learning in the general framework of stochastic convex optimization (SCO). First, we study fundamental questions in this area: When is a SCO problem learnable? Is empirical risk minimization enough to guarantee learnability in SCO, as in binary classification? What is the role of stability in learning algorithms for SCO? We cover the perhaps surprising answers to these questions as provided by Shalev-Shwartz et al. (2010) <d-cite key="Shalev-Shwartz_et_al._2010"></d-cite>.

We then turn our attention to gradient descent (GD) and study its power as a learning algorithm within SCO. A recent result by Schliserman et al. (2024) <d-cite key="Schliserman_et_al._2024"></d-cite> shows that there are instances where GD requires $\Omega(\sqrt{d})$ samples to arrive at a solution of non-trivial test error ($d$ is the input dimension). A further improvement provided by Livni (2024) <d-cite key="Livni_2024"></d-cite> establishes that this lower bound is in fact $\Omega(d)$. Taken together, the results imply that there is no statistical benefit of GD in worst-case SCO. See more details in the [report](http://genghis-l.github.io/assets/pdf/projects/2025_AML_CourseProject/SCO_AML25_report.pdf).
