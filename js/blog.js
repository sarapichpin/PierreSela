(function () {
  const grid = document.getElementById("blogGrid");
  const emptyMsg = document.getElementById("blogEmpty");
  const filters = document.getElementById("blogFilters");
  const lightbox = document.getElementById("lightbox");
  const lightboxContent = document.getElementById("lightboxContent");
  const lightboxClose = document.getElementById("lightboxClose");

  const posts = (typeof BLOG_POSTS !== "undefined" ? BLOG_POSTS : [])
    .slice()
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  let activeFilter = "all";

  function formatDate(dateStr) {
    if (!dateStr) return "";
    const d = new Date(dateStr);
    if (isNaN(d)) return dateStr;
    return d.toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" });
  }

  function mediaMarkup(post, forLightbox) {
    if (post.type === "video") {
      return `<video ${forLightbox ? "controls autoplay" : "controls"} preload="metadata" src="${post.src}"></video>`;
    }
    return `<img src="${post.src}" alt="${post.caption || ""}" loading="lazy">`;
  }

  function render() {
    const visible = posts.filter((p) => activeFilter === "all" || p.type === activeFilter);

    grid.innerHTML = "";
    emptyMsg.hidden = visible.length > 0;

    visible.forEach((post, index) => {
      const card = document.createElement("figure");
      card.className = "blog-card";
      card.innerHTML = `
        <div class="blog-media" data-index="${index}">
          ${mediaMarkup(post, false)}
          <span class="blog-media-type">${post.type === "video" ? "Vidéo" : "Photo"}</span>
        </div>
        <figcaption>
          <p class="blog-caption">${post.caption || ""}</p>
          <time class="blog-date">${formatDate(post.date)}</time>
        </figcaption>
      `;
      card.querySelector(".blog-media").addEventListener("click", () => openLightbox(post));
      grid.appendChild(card);
    });
  }

  function openLightbox(post) {
    lightboxContent.innerHTML = mediaMarkup(post, true);
    lightbox.hidden = false;
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    lightbox.hidden = true;
    lightboxContent.innerHTML = "";
    document.body.style.overflow = "";
  }

  lightboxClose.addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeLightbox();
  });

  filters.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      filters.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("is-active"));
      btn.classList.add("is-active");
      activeFilter = btn.dataset.filter;
      render();
    });
  });

  render();
})();
