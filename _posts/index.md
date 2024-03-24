---
layout: base.njk
title: Welcome to the Hnry Site Optimiser!
---

{% raw %}
HnrySiteOptimiser is a single-page application developed to facilitate the review and improvement process for the Hnry website. This tool aims to provide a comprehensive analysis of the Hnry website's performance, usability, and SEO effectiveness, serving as a valuable resource for optimizing the website's overall effectiveness.
{% endraw %}

<form id="post-form">
    <label for="post-select">Select an issue from the drop down menu:</label>
    <select id="post-select">
        <option value="" disabled selected>Select a post</option>
        <option value="/post-1.html">Post 1</option>
        <option value="/post-2.html">Post 2</option>
        <option value="/post-3.html">Post 3</option>
    </select>
    <button type="submit">Go</button>
</form>



