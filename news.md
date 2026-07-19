<section class="news">

<h2>Older News</h2>

{% assign news = site.news | sort: "date" | reverse %}

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


