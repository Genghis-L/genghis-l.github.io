---
layout: page
title: Inference and Representation
description: DS-GA. 1005 / CSCI-GA. 2569
importance: 4 # 1~5
category: [Data Science (NYU)]
pretty_table: true

shortcuts:
  - name: Website
    icon: fa-solid fa-link
    link: https://joanbruna.notion.site/ir25
  - name: Project
    icon: fa-solid fa-link
    link: /projects/2025_IR_CourseProject

course_information:
  Instructor: <a href="https://cims.nyu.edu/~bruna/">Joan Bruna</a>
  Semester: Spring 2025
  Website: <a href="https://joanbruna.notion.site/ir25">https://joanbruna.notion.site/ir25</a>
  Outline: >
    The aim of this graduate-level course is to describe the mathematical aspects of modeling high-dimensional data, with an emphasis on the computational and statistical quantitative questions. The course will describe in detail the following topics:

    - Gaussian Estimation
      - Gaussian PCA guarantees
      - From Gaussians to Gaussian mixtures: emergence of non-linear modeling

    - Probabilistic graphical models
      - D-separation and conditional independence
      - Gibbs models and Clifford Theorem
      - Basic hardness results
      - Exact inference

    - Inference and Statistical Physics
      - Free energies
      - Approximate-Message-Passing and Belief Propagation
      - Maximum-Entropy principle

    - Variational Inference
      - EM Algorithm
      - Convex Duality
      - Application: Variational Autoencoders

    - Markov-Chain Monte-Carlo methods
      - Metropolis-Hasting
      - Importance and Rejection Sampling
      - Perspective from Diffusions in continuous space-time
      - Functional Inequalities, spectral gap, high-dimensional aspects of MCMC

    - Measure Transportation in high dimensions
      - Optimal Transport and first consequences
      - Integral Probability Metrics
      - Statistical and Computational aspects of IPMs
      - Application: Generative Adversarial Networks

    - Generative Modeling using Neural Networks
      - Score-based Diffusion and Probability Flows

  Textbook: Two main good ones are <a href="https://www.amazon.com/Probabilistic-Graphical-Models-Principles-Computation/dp/0262013193">Probabilistic Graphical Models - Principles and Techniques</a> and <a href="https://www.amazon.com/High-Dimensional-Probability-Introduction-Applications-Probabilistic/dp/1108415199">High-Dimensional Probability - An Introduction with Applications in Data Science</a>. The one I like a lot is <a href="https://www.cs.columbia.edu/~blei/fogm/2023F/readings/WainwrightJordan2008.pdf">Graphical models, exponential families, and variational inference</a> which showcases extremely elegant connections between graphical models and variational inference on exponential families. See more in the <a href="https://joanbruna.notion.site/ir25">course website</a>.

grade:
  letter: "A"
  actual: "3.00"
  total: "3.00"
---

This is a graduate-level course at the [Courant Institute of Mathematical Sciences](https://cims.nyu.edu/), NYU. By the way, Joan is fantastic and this is a very good course.

{% include educations/course_information.md %}
{% include educations/gradebook.md %}
