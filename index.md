

<html>
<style>
.page-header {
  color: #000;
  text-align: center;
  background-color: $header-bg-color;
  background-image: url("./images/header.png");
  background-repeat: no-repeat;
  background-size: cover;
  margin: 0 auto;

}
  .btn {
    color: #000;
    border-color: #000; 
    background-color: #fff;
  } 

  .btn:hover {
    color: #000;
    text-decoration: none;
    border-color: #000;
    background-color: #7c940ea1;
  }
</style>
<body>

My research group focuses on the theoretical modeling of photochemical processes in complex environments, combining theory development and applications of hybrid classical–quantum methodologies, quantum dynamics, spectroscopy and density functional theory approaches for excited states.

<section class="news">

<h2>News</h2>

{% assign news = site.news | sort: "date" | reverse %}

{% for item in news limit:5 %}

<div class="news-item">

{% if item.image %}
<img src="{{ item.image }}" alt="">
{% endif %}

<div class="news-content">

<div class="news-date">
{{ item.date | date: "%d %B %Y" }}
</div>

<h3>{{ item.title }}</h3>

<p>
{{ item.content }}
</p>

</div>

</div>

{% endfor %}

</section>

</body>
</html>
