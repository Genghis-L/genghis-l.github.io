---
layout: page
title: A picture with Joan
description: A picture with Joan
img: assets/img/photos/people/Joan.png
importance: 5
category: People
---

A picture with Joan.

{% if page.img %}

<div class="row mt-3">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid path=page.img class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
</div>
{% endif %}
