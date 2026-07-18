---
title: People
---

<h1>Current members</h1>

<div class="people-grid">

{% assign people = site.people | sort: "order" %}

{% for person in people %}

<div class="person-card">

<img src="{{ person.photo }}" alt="{{ person.name }}">

<div class="person-info">

<h3>{{ person.name }}</h3>

<strong>{{ person.position }}</strong>


{% if person.orcid %}
<br>
<b>ORCID:</b>
<a href="https://orcid.org/{{ person.orcid }}">
{{ person.orcid }}
</a>
{% endif %}


{% if person.project %}
<br>
<b>Project:</b> {{ person.project }}
{% endif %}


{% if person.email %}
<br>
<b>Contact:</b>
<a href="mailto:{{ person.email }}">
{{ person.email }}
</a>
{% endif %}


{% if person.scholar %}
<br>
<a href="{{ person.scholar }}">
Google Scholar
</a>
{% endif %}


{% if person.linkedin %}
<br>
<a href="{{ person.linkedin }}">
LinkedIn
</a>
{% endif %}


</div>

</div>

{% endfor %}

</div><br><br>


<h1>Alumni</h1> 
<ul>
<li> Tiana Marie, L3 internship, 2026 </li>
<li> Amel Castillo, L3 internship, 2026 </li>
<li> Omar Guireev, L3 internship, 2026 </li>
<li> Amine Belhadj-Belziane, M2 internship, 2026 </li>
<li> Simone Bonfrate, Post-Doctoral fellow, 2024-2025 </li>
<li> Renato Dias da Cunha, Post-Doctoral fellow, 2025-2026 </li>
<li> Abdul Qadeer, M2 internship, 2025 </li>
<li> Anis Abdelbari, M2 internship, 2025 </li>
<li> Woojin Park, PhD exchange student, 2023-2024 </li>
<li> Thomas Fay, Post-doctoral fellow, 2023-2025 </li>
<li> Simone Bonfrate, PhD student, 2021-2024 </li>
<li> Darío Barreiro-Lage, Post-Doctoral fellow, 2024 </li>
<li> Marc Alías-Rodríguez, Post-Doctoral fellow, 2022-2024 </li>
<li> Omar Guireev, L2 internship, 2024 </li>
<li> Dulce Trejo, M1 internship, 2024 </li>
<li> Gustavo Adolfo Cardenas, Post-Doctoral fellow, 2023-2023 </li>
<li> Swarnendu Bhattacharyya, Post-Doctoral fellow, 2021-2023 </li>
<li> Johanna Guazelli, 2nd year Bachelor internship, 2020 </li>
<li> Karno Schwinn, PhD student, 2018-2020 </li>
<li> Padmabati Mondal, Post-Doctoral fellow, 2018-2018</li>
</ul>





