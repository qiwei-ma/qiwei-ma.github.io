---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

I’m currently a Research Assistant at The Education University of Hong Kong. My current research focuses on robotics, embodied intelligence, and AI for education, while my broader interests also include Large Language Models (LLMs) and multi-agent systems.

I will be applying for PhD positions for Fall 2027 entry and am also open to earlier opportunities after completing my RA contract.

Download my [CV](https://qiwei-ma.github.io/Qiwei-Ma-CV.pdf) here.
<!-- I have published more than 100 papers at the top international AI conferences with total <a href='https://scholar.google.com/citations?user=DhtAFkwAAAAJ'>google scholar citations <strong><span id='total_cit'>260000+</span></strong></a> (You can also use google scholar badge <a href='https://scholar.google.com/citations?user=DhtAFkwAAAAJ'><img src="https://img.shields.io/endpoint?url={{ url | url_encode }}&logo=Google%20Scholar&labelColor=f6f6f6&color=9cf&style=flat&label=citations"></a>). -->

# 🔬 Research Experience

## Multi-Agent Conversational AI for EFL Speaking Practice (Jan 2025 - Jan 2026) — Supervisor: Dr. Zhang (SZU)
- Developed a multi-agent system (MAS) for EFL speaking practice.
- Built seven specialized agents for preprocessing, response generation, and dialogue supervision.
- Investigated the mechanisms underlying MAS superiority and identified synergistic effects among integrated features.
- Conducted a 4-week controlled experiment with 32 university EFL learners, showing that MAS outperformed SAS in oral proficiency gains (p = 0.049) and grammatical accuracy (p = 0.016).
- Found that MAS led to 26% more practice sessions, 15% longer utterances, and a 70% reduction in repeated grammatical errors.

## Reasoning for Table Manipulation (Mar 2025 - Jan 2026) — Supervisors: Dr. Yang, Dr. Tan (SIAT, CAS)
- Developed an end-to-end LLM framework for table manipulation through structured reasoning.
- Constructed a benchmark covering five core tasks: table splitting and merging, wide-to-long conversion, semi-structured field parsing, and row/column generation.
- Completed two-stage training with supervised fine-tuning on reasoning traces followed by GRPO optimization, achieving state-of-the-art performance among 7B-scale table-specific models.
- Analyzed structural integrity challenges and found that column-level accuracy often exceeded row-level accuracy because of sensitivity to missing fields.

# 🔧 Additional Research

## Differential Privacy Image Generation (Mar 2024 - Apr 2025) — Supervisor: Dr. Zhang (SZU)
- Developed a differential privacy framework for image generation to reduce gradient clipping bias and improve training stability.
- Introduced reconstruction loss and noise injection during generator upsampling to improve data utility and image diversity.
- Designed a multi-component training pipeline integrating a generator, discriminators, a classifier, and an encoder with gradient sanitization mechanisms.
- Achieved state-of-the-art performance on MNIST and Fashion-MNIST, surpassing baseline methods in Inception Score, Frechet Inception Distance, and downstream classification accuracy.

## Intelligent Annotation and Feedback System for English Writing (Apr 2025 - Sep 2025) — Supervisor: Dr. Zhang (SZU)
- Developed LLM-IAF (LLM-based Intelligent Annotation and Feedback System), a mobile application for automated English writing assessment for junior high school students.
- Implemented a dual-engine AI workflow combining semantic evaluation and visual grounding to provide immediate visual feedback with error localization on handwritten essays.
- Conducted an experimental study comparing students using LLM-IAF with a control group receiving traditional instruction across four weekly writing tasks.
- Observed significant improvements in writing performance, learning engagement, and writing self-efficacy in the experimental group.
- Demonstrated strong agreement between AI and teacher scoring, and students reported high satisfaction with the system's usefulness and ease of use.


# 📝 Publications

- J. Zhang, Qiwei Ma, Y. Zhang, and X. Cao, "Multi-agent vs. single-agent AI for EFL speaking practice: A controlled experiment with hybrid input, contextual dialogue, and proficiency-adaptive feedback," *Educational Technology & Society (ET&S)*, 2025


<!-- # 🎖 Honors and Awards
- *2021.10* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 
- *2021.09* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet.  -->

# 📖 Education
- *2023.09 - 2026.06*, Master, Shenzhen University, Shenzhen.
- *2018.09 - 2022.06*, Undergraduate, Ningxia University, Yinchuan.

<!-- # 💬 Invited Talks
- *2021.06*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 
- *2021.03*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet.  \| [\[video\]](https://github.com/) -->

# 💻 Experience
- *2025.05 - 2026.01*, [Shenzhen Institutes of Advanced Technology, Chinese Academy of Sciences](http://english.siat.cas.cn/), China.
- *2026.04 - 2027.04*, Research Assistant, The Education University of Hong Kong, Hong Kong, China.
