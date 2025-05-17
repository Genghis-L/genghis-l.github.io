---
layout: page
title: Photos
permalink: /photos/
description: A collection of my featured photos
nav: true
nav_order: 4
display_categories: [Travel, People]
---

<!-- pages/photos.md -->
<div class="projects">
{% if site.enable_project_categories and page.display_categories %}
  <!-- Display categorized photos -->
  {% for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ category }}</h2>
  </a>
  {% assign categorized_photos = site.photos | where: "category", category %}
  {% assign sorted_photos = categorized_photos | sort: "importance" | reverse %}
  <!-- Generate cards for each photo -->
  {% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_photos %}
      {% include projects_horizontal.liquid project=project %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_photos %}
      {% include projects.liquid project=project %}
    {% endfor %}
  </div>
  {% endif %}
  {% endfor %}

{% else %}

<!-- Display photos without categories -->

{% assign sorted_photos = site.photos | sort: "importance" | reverse %}

  <!-- Generate cards for each photo -->

{% if page.horizontal %}

  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_photos %}
      {% include projects_horizontal.liquid project=project %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_photos %}
      {% include projects.liquid project=project %}
    {% endfor %}
  </div>
  {% endif %}
{% endif %}
</div>
