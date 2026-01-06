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

I’m currently a master's student at Shenzhen University, majoring in artificial intelligence. My research interests lie in Large Language Models (LLMs), multi-agent systems, and their applications, with particular emphasis on education.

Download my [CV](https://qiwei-ma.github.io/Qiwei-Ma-CV.pdf) here.
<!-- I have published more than 100 papers at the top international AI conferences with total <a href='https://scholar.google.com/citations?user=DhtAFkwAAAAJ'>google scholar citations <strong><span id='total_cit'>260000+</span></strong></a> (You can also use google scholar badge <a href='https://scholar.google.com/citations?user=DhtAFkwAAAAJ'><img src="https://img.shields.io/endpoint?url={{ url | url_encode }}&logo=Google%20Scholar&labelColor=f6f6f6&color=9cf&style=flat&label=citations"></a>). -->

# 🔬 Research Experience

## Multi-Agent Conversational AI for EFL Speaking Practice (Jan 2025 - Present) — Supervisor: Dr. Zhang (SZU)
- Proposed a multi-agent system (MAS) for EFL speaking practice.
- Completed development of seven specialized agents (preprocessing, response generation, dialogue supervision).
- Explored mechanisms of MAS superiority, confirming synergistic effects of integrated features.
- Found MAS outperforms SAS in oral proficiency gains (p = 0.049) and grammatical accuracy (p = 0.016) via a 4-week controlled experiment with 32 university EFL learners.
- Observed MAS led to 26% more practice sessions, 15% longer utterances, and a 70% reduction in repeated grammatical errors.

## Reasoning for Table Manipulation (Mar 2025 - Present) — Supervisors: Dr. Yang, Dr. Tan (SIAT, CAS)
- Proposed an end-to-end LLM to manipulate tabular structures via structured reasoning.
- Constructed a benchmark covering five core tasks: table splitting/merging, wide-to-long conversion, semi-structured field parsing, and row/column generation.
- Completed two-stage training (SFT on reasoning traces + GRPO optimization), achieving SOTA performance among 7B-scale table-specific models.
- Investigated structural integrity challenges and found column-level accuracy often exceeds row-level accuracy due to sensitivity to missing fields.

# 🔧 Others

## Differential Privacy Image Generation (Mar 2024 - Apr 2025) — Supervisor: Dr. Zhang (SZU)
- Proposed a differential privacy framework for image generation to eliminate gradient clipping bias and improve training stability.
- Introduced reconstruction loss and noise injection during generator upsampling stages to enhance data utility and image diversity.
- Designed multi-component training pipeline integrating generator, discriminators, classifier, and encoder with gradient sanitization mechanisms.
- Achieved SOTA performance on MNIST and Fashion-MNIST, surpassing baseline methods in Inception Score, Frechet Inception Distance, and downstream classification accuracy.

## Intelligent Annotation and Feedback System for English Writing (Apr 2025 - Present) — Supervisor: Dr. Zhang (SZU)
- Developed LLM-IAF (LLM-based Intelligent Annotation & Feedback System), a mobile application for automated English writing evaluation targeting junior high school students.
- Implemented dual-engine AI workflow combining semantic evaluation and visual grounding to provide immediate, visualized feedback with error localization on handwritten essays.
- Conducted experimental study with students, comparing experimental group using LLM-IAF versus control group with traditional instruction over four weekly writing tasks.
- Achieved significant improvement in writing performance for experimental group compared to control group, with substantial gains in learning engagement and writing self-efficacy.
- Demonstrated strong AI-teacher score correlation and good agreement; students reported high satisfaction with system's usefulness and ease of use.


# 📝 Publications

- J. Zhang, Qiwei Ma, Y. Zhang, and X. Cao, "Multi-agent vs. single-agent AI for EFL speaking practice: A controlled experiment with hybrid input, contextual dialogue, and proficiency-adaptive feedback," *Educational Technology & Society (ET&S)*, 2025(Accepted)


<!-- # 🎖 Honors and Awards
- *2021.10* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 
- *2021.09* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet.  -->

# 📖 Educations
- *2023.09 - now*, Master, Shenzhen Univeristy, Shenzhen. 
- *2018.09 - 2022.06*, Undergraduate, Ningxia Univeristy, Yinchuan.

<!-- # 💬 Invited Talks
- *2021.06*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 
- *2021.03*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet.  \| [\[video\]](https://github.com/) -->

# 💻 Internships
- *2025.05 - now*, [Shenzhen Institutes of Advanced Technology, Chinese Academy of Sciences](http://english.siat.cas.cn/), China.