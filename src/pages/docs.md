---
path: /docs_template.html
layout: page
title: "{% block meta_title %}{% endblock %}"
active_tab: docs
template: docs
base_document_url: "{% block base_document_url %}{% endblock %}"
description: "{% block meta_description %}{% endblock %}"
---

<div class="document">
  {% block document %}
  {% endblock %}
</div>

<a href="https://{{ github_host|default("github.com") }}/{{ github_user }}/{{ github_repo }}/blob/{{ github_version }}{{ conf_py_path }}{{ pagename }}{{ suffix }}" class="improve-document-link">Edit page</a>
