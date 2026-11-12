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

I’m currently a Research Assistant at The Education University of Hong Kong. My current research focuses on **Agentic AI**, **Embodied Intelligence**, and **AI in Education**.

I will be applying for PhD positions for Fall 2027 entry and am also open to earlier opportunities after completing my RA contract.

Please see my [CV](/Qiwei-Ma-CV.pdf) and [Google Scholar](https://scholar.google.com/citations?user=9FHf45gAAAAJ&hl=en) for further details, or contact me at mqiwei@eduhk.hk.
<!-- I have published more than 100 papers at the top international AI conferences with total <a href='https://scholar.google.com/citations?user=DhtAFkwAAAAJ'>google scholar citations <strong><span id='total_cit'>260000+</span></strong></a> (You can also use google scholar badge <a href='https://scholar.google.com/citations?user=DhtAFkwAAAAJ'><img src="https://img.shields.io/endpoint?url={{ url | url_encode }}&logo=Google%20Scholar&labelColor=f6f6f6&color=9cf&style=flat&label=citations"></a>). -->

# 🔬 Research Experience

<div class='paper-box'>
<div class='paper-box-image'><div class='paper-box-figure'><div class="badge">ET&S 2026</div><a href='images/multi-agent-efl-system.png'><img src='images/multi-agent-efl-system.webp' alt='Architecture of the multi-agent conversational AI system for EFL speaking practice' width="100%"></a></div></div>
<div class='paper-box-text' markdown="1">

## [Multi-Agent Conversational AI for EFL Speaking Practice](https://doi.org/10.30191/ETS.202604_29(2).SP05)&nbsp;<a class="paper-resource" href="https://doi.org/10.30191/ETS.202604_29(2).SP05">[Paper]</a>&nbsp;<a class="paper-resource" href="https://github.com/qiwei-ma/Multi-Agent-Conversational-AI">[Code]</a>

<p class="paper-meta">Jan 2025 - Jan 2026 · Supervisor: Dr. Zhang (SZU)</p>

<p class="paper-authors">Jun Zhang, <strong>Qiwei Ma</strong>, Yu Zhang, and Xiaoming Cao</p>

- Built a multi-agent system for EFL speaking practice with a digital-human interface.
- Supported mixed Chinese and English input, with dialogue and feedback adapted to the learner’s level.
- Kept agents modular so dialogue and feedback strategies could be tested and revised independently.

</div>
</div>

<div class='paper-box' id='mllm-iaf'>
<div class='paper-box-image'><div class='paper-box-figure'><div class="badge">Assessing Writing 2027</div><a href='images/mllm-iaf-system.png'><img src='images/mllm-iaf-system.webp' alt='Fig. 1. Architecture of our MLLM-IAF system.' width="100%" loading="lazy"></a></div></div>
<div class='paper-box-text' markdown="1">

## [Intelligent Annotation and Feedback System for English Writing](https://doi.org/10.1016/j.asw.2026.101146)&nbsp;<a class="paper-resource" href="https://doi.org/10.1016/j.asw.2026.101146">[Paper]</a>

<p class="paper-meta">Apr 2025 - Sep 2025 · Supervisor: Dr. Zhang (SZU)</p>

<p class="paper-authors">Jun Zhang, <strong>Qiwei Ma</strong>, Yu Zhang, Liying Zhu, and Xiaoming Cao</p>

- Built MLLM-IAF to assess handwritten English essays and provide visual feedback.
- Combined multimodal AI with OCR to place corrections beside the relevant text.
- Added a teacher review interface for adjusting scores and editing AI-generated feedback.

</div>
</div>

# 🔧 Additional Research

## Reasoning for Table Manipulation (Mar 2025 - Jan 2026) — Supervisors: Dr. Yang, Dr. Tan (SIAT, CAS)
- Developed an end-to-end LLM framework for table manipulation through structured reasoning.
- Constructed a benchmark covering five core tasks: table splitting and merging, wide-to-long conversion, semi-structured field parsing, and row/column generation.
- Completed two-stage training with supervised fine-tuning on reasoning traces followed by GRPO optimisation, and evaluated the resulting models on table manipulation tasks.
- Analyzed structural integrity challenges and found that column-level accuracy often exceeded row-level accuracy because of sensitivity to missing fields.

## Differential Privacy Image Generation (Mar 2024 - Apr 2025) — Supervisor: Dr. Zhang (SZU)
- Developed a differential privacy framework for image generation to reduce gradient clipping bias and improve training stability.
- Introduced reconstruction loss and noise injection during generator upsampling to improve data utility and image diversity.
- Designed a multi-component training pipeline integrating a generator, discriminators, a classifier, and an encoder with gradient sanitization mechanisms.
- Evaluated generated image quality and downstream classification performance on MNIST and Fashion-MNIST.

# 📝 Publications

<div class="publication-list" markdown="1">

- Zhang, J., **Qiwei Ma**, Zhang, Y., Zhu, L., <span class="citation-ampersand">&amp;</span> Cao, X. (2027). From textual lists to in-situ annotations: Empowering junior high school EFL writing with multimodal large language models. <span class="publication-venue"><em>Assessing Writing, 71</em>, 101146.</span> <a class="doi-link" href="https://doi.org/10.1016/j.asw.2026.101146">DOI</a>

- Yang, J., Wang, M., Du, X., <span class="citation-ampersand">&amp;</span> **Qiwei Ma** (2026). Multimodal affective computing in the era of LLM-based educational agents: Key insights, challenges, and future prospects. <span class="publication-venue"><em>IEEE Transactions on Learning Technologies, 19</em>, 988–1004.</span> <a class="doi-link" href="https://doi.org/10.1109/TLT.2026.3738338">DOI</a>

- Wang, M., Wang, Y., <span class="citation-ampersand">&amp;</span> **Qiwei Ma**<sup>&#42;</sup> (2026). Agentic AI unleashed: Power, promise, and ethical frontiers. In K. T. Chui, C. Li, J. Jia, S. K. S. Cheung, F. W.-F. Lee, <span class="citation-ampersand">&amp;</span> J. Shang (Eds.), <span class="publication-venue"><em>Blended learning: Innovations for future education</em> (pp. 27-39). Springer.</span> <a class="doi-link" href="https://doi.org/10.1007/978-981-92-3761-6_3">DOI</a>

- Zhang, J., **Qiwei Ma**, Zhang, Y., <span class="citation-ampersand">&amp;</span> Cao, X. (2026). Multi-agent vs. single-agent AI for EFL speaking practice: A controlled experiment with hybrid input, contextual dialogue, and proficiency-adaptive feedback. <span class="publication-venue"><em>Educational Technology <span class="citation-ampersand">&amp;</span> Society, 29</em>(2), 297-322.</span> <a class="doi-link" href="https://doi.org/10.30191/ETS.202604_29(2).SP05">DOI</a>


</div>

<small>* Corresponding author.</small>



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
- *2025.05 - 2026.01*, Research Intern, [Shenzhen Institutes of Advanced Technology, Chinese Academy of Sciences](http://english.siat.cas.cn/), Shenzhen.
- *2026.04 - Present*, Research Assistant, [The Education University of Hong Kong](https://www.eduhk.hk/en/), Hong Kong.
