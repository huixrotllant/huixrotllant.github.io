<section class="intro">

<h2>Computational Photochemistry and Excited-State Dynamics</h2>

<p>
We develop theoretical and computational methods to investigate the photochemistry of molecular systems in complex environments. Our research combines electronic-structure theory, nonadiabatic dynamics, spectroscopy, and multiscale QM/MM approaches to understand how molecules absorb light, transfer energy, and undergo chemical transformations.
</p>

</section>

<section class="news">

<h2>Latest News</h2>

{% assign news = site.news | sort: "date" | reverse %}

{% for item in news limit:4 %}

<div class="news-card">

    {% if item.image %}
    <div class="news-image">
        <img src="{{ item.image }}" alt="{{ item.title }}">
    </div>
    {% endif %}

    <div class="news-text">

        <div class="news-date">
            {{ item.date | date: "%d %B %Y" }}
        </div>

        <h3>{{ item.title }}</h3>

        <p>{{ item.excerpt | strip_html | truncate:150 }}</p>

    </div>

</div>

{% endfor %}

<div class="news-footer">
    <a class="news-button" href="/news">
        View all news →
    </a>
</div>

</section>


