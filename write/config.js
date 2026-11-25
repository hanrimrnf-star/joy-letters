---
layout: null
---
/* _config.yml의 값을 서신 쓰기 화면에 전달합니다. 이 파일은 고치지 않으셔도 됩니다. */
window.SITE = {
  title: {{ site.title | jsonify }},
  subtitle: {{ site.subtitle | jsonify }},
  author: {{ site.author | jsonify }},
  logo: {{ site.logo | default: "" | jsonify }},
  owner: {% if site.github_user and site.github_user != "" %}{{ site.github_user | jsonify }}{% else %}{{ site.github.owner_name | jsonify }}{% endif %},
  repo: {% if site.github_repo and site.github_repo != "" %}{{ site.github_repo | jsonify }}{% else %}{{ site.github.repository_name | jsonify }}{% endif %},
  siteUrl: {{ '/' | absolute_url | jsonify }},
  goatcounter: {{ site.goatcounter | default: "" | jsonify }},
  prayer: {{ site.prayer | jsonify }},
  support: {{ site.support | jsonify }}
};
