
      /* -------------------------------------------------------
   DATA
------------------------------------------------------- */
      const projects = [
        {
          title: "Undercover Dashboard",
          category: "App Desktop",
          img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
          desc: "A feature-rich analytics dashboard for desktop applications. Focuses on data clarity, visual hierarchy and executive-level reporting with interactive charts and real-time metrics.",
          tags: ["Adobe XD", "Dashboard", "Data Viz", "Desktop"],
          github: "#",
          demo: "#",
        },
        {
          title: "Zalwa Portfolio",
          category: "Website Design",
          img: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&q=80",
          desc: "A sophisticated dark-theme portfolio website featuring bold typography, immersive hero sections and smooth scroll animations designed to showcase creative work with maximum visual impact.",
          tags: ["Figma", "UI/UX", "Web Design", "Dark Theme"],
          github: "#",
          demo: "#",
        },
        {
          title: "Soundpar App",
          category: "App Mobile Design",
          img: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&q=80",
          desc: "A minimalist music streaming mobile application with an intuitive dark interface, smooth micro-interactions and a sleek player design built with user-centered principles.",
          tags: ["Figma", "Mobile UI", "App Design", "Music"],
          github: "#",
          demo: "#",
        },
        {
          title: "Mountain Travel",
          category: "Landing Page Design",
          img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
          desc: "A breathtaking travel landing page for mountain tourism with full-bleed photography, parallax effects, immersive destination cards and a seamless booking flow.",
          tags: ["Figma", "Travel", "Landing Page", "UX"],
          github: "#",
          demo: "#",
        },
        {
          title: "Ingenious Brand Kit",
          category: "Branding",
          img: "https://images.unsplash.com/photo-1634986666676-ec8fd927c23d?w=600&q=80",
          desc: "Complete branding identity system for a tech startup. Includes logo design, colour palette, typography guide, business card, social media templates and a comprehensive brand style guide.",
          tags: ["Illustrator", "Branding", "Logo", "Identity"],
          github: "#",
          demo: "#",
        },
        {
          title: "Works Portfolio v2",
          category: "Website Design",
          img: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&q=80",
          desc: "Second iteration of a minimal portfolio website with an editorial grid layout, variable font animations, dark/light mode toggle and scroll-triggered reveals.",
          tags: ["Figma", "Portfolio", "Minimal", "Animation"],
          github: "#",
          demo: "#",
        },
      ];

      /* -------------------------------------------------------
   TYPEWRITER
------------------------------------------------------- */
      const ROLES = [
        "UI/UX Designer",
        "Product Designer",
        "Visual Storyteller",
        "Figma Expert",
        "Creative Thinker",
      ];
      const NAME_STR = "Ali Hassan";
      const SPD_TYPE = 80;
      const SPD_DEL = 45;
      const PAUSE_END = 1800;
      const PAUSE_NEXT = 350;
      const nameEl = document.getElementById("heroName");
      const titleSpan = document.getElementById("heroTitleText");
      let state = { phase: "name", charIdx: 0, roleIdx: 0, deleting: false };
      function tick() {
        if (state.phase === "name") {
          nameEl.textContent = NAME_STR.slice(0, state.charIdx);
          state.charIdx++;
          if (state.charIdx > NAME_STR.length) {
            state.phase = "role";
            state.charIdx = 0;
            setTimeout(tick, 400);
            return;
          }
          setTimeout(tick, SPD_TYPE);
        } else {
          const phrase = ROLES[state.roleIdx];
          if (!state.deleting) {
            titleSpan.textContent = phrase.slice(0, state.charIdx + 1);
            state.charIdx++;
            if (state.charIdx === phrase.length) {
              state.deleting = true;
              setTimeout(tick, PAUSE_END);
            } else setTimeout(tick, SPD_TYPE);
          } else {
            titleSpan.textContent = phrase.slice(0, state.charIdx - 1);
            state.charIdx--;
            if (state.charIdx === 0) {
              state.deleting = false;
              state.roleIdx = (state.roleIdx + 1) % ROLES.length;
              setTimeout(tick, PAUSE_NEXT);
            } else setTimeout(tick, SPD_DEL);
          }
        }
      }
      window.addEventListener("load", () => setTimeout(tick, 900));

      /* -------------------------------------------------------
   PORTFOLIO RENDER
------------------------------------------------------- */
      function renderPortfolio(filter = "all") {
        const grid = document.getElementById("portfolioGrid");
        const filtered =
          filter === "all"
            ? projects
            : projects.filter((p) => p.category === filter);
        grid.innerHTML = filtered
          .map((p, i) => {
            const idx = projects.indexOf(p);
            return `
      <div class="portfolio-item" data-index="${idx}" style="transition-delay:${i * 0.08}s">
        <div class="portfolio-img-wrap">
          <img src="${p.img}" alt="${p.title}" loading="lazy" />
          <div class="portfolio-overlay">
            <div class="ovl-wrap">
              <button class="overlay-btn" onclick="openModal(${idx})" aria-label="View Details"><i class="fas fa-expand-alt"></i></button>
              <span class="ovl-tip">View Details</span>
            </div>
            <div class="ovl-wrap">
              <a href="${p.demo}" class="overlay-btn" target="_blank" rel="noopener" onclick="event.stopPropagation()" aria-label="Live Demo"><i class="fas fa-external-link-alt"></i></a>
              <span class="ovl-tip">Live Demo</span>
            </div>
            <div class="ovl-wrap">
              <a href="${p.github}" class="overlay-btn" target="_blank" rel="noopener" onclick="event.stopPropagation()" aria-label="GitHub Repo"><i class="fab fa-github"></i></a>
              <span class="ovl-tip">GitHub Repo</span>
            </div>
          </div>
        </div>
        <div class="portfolio-meta"><h4>${p.title}</h4><span>${p.category}</span></div>
      </div>`;
          })
          .join("");
        grid.classList.remove("visible");
        requestAnimationFrame(() => grid.classList.add("visible"));
      }

      /* -------------------------------------------------------
   MODAL
------------------------------------------------------- */
      function openModal(idx) {
        const p = projects[idx];
        document.getElementById("modalImg").src = p.img;
        document.getElementById("modalImg").alt = p.title;
        document.getElementById("modalTitle").textContent = p.title;
        document.getElementById("modalCategory").textContent = p.category;
        document.getElementById("modalDesc").textContent = p.desc;
        document.getElementById("modalDemo").href = p.demo;
        document.getElementById("modalGithub").href = p.github;
        document.getElementById("modalTags").innerHTML = p.tags
          .map((t) => `<span class="modal-tag">${t}</span>`)
          .join("");
        document.getElementById("modalBackdrop").classList.add("open");
        document.body.style.overflow = "hidden";
      }
      function closeModal() {
        document.getElementById("modalBackdrop").classList.remove("open");
        document.body.style.overflow = "";
      }
      document
        .getElementById("modalClose")
        .addEventListener("click", closeModal);
      document
        .getElementById("modalBackdrop")
        .addEventListener("click", (e) => {
          if (e.target === document.getElementById("modalBackdrop"))
            closeModal();
        });
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") closeModal();
      });

      /* -------------------------------------------------------
   FILTERS
------------------------------------------------------- */
      document.querySelectorAll(".filter-btn").forEach((btn) => {
        btn.addEventListener("click", () => {
          document
            .querySelectorAll(".filter-btn")
            .forEach((b) => b.classList.remove("active"));
          btn.classList.add("active");
          renderPortfolio(btn.dataset.filter);
          setTimeout(observeElements, 50);
        });
      });

      /* -------------------------------------------------------
   SCROLL REVEAL
------------------------------------------------------- */
      function observeElements() {
        const obs = new IntersectionObserver(
          (entries) => {
            entries.forEach((e) => {
              if (e.isIntersecting) {
                e.target.classList.add("visible");
                obs.unobserve(e.target);
              }
            });
          },
          { threshold: 0.12 },
        );
        document
          .querySelectorAll(".reveal,.reveal-left,.reveal-right,.stagger")
          .forEach((el) => {
            if (!el.classList.contains("visible")) obs.observe(el);
          });
      }

      /* -------------------------------------------------------
   SCROLL EVENTS
------------------------------------------------------- */
      const sections = document.querySelectorAll("section[id]");
      const navAs = document.querySelectorAll(".nav-links a");
      window.addEventListener("scroll", () => {
        let cur = "";
        sections.forEach((s) => {
          if (window.scrollY >= s.offsetTop - 120) cur = s.id;
        });
        navAs.forEach((a) =>
          a.classList.toggle("active", a.getAttribute("href") === "#" + cur),
        );
        const pct =
          (window.scrollY /
            (document.documentElement.scrollHeight - window.innerHeight)) *
          100;
        document.getElementById("progress-bar").style.width = pct + "%";
        document
          .getElementById("back-top")
          .classList.toggle("visible", window.scrollY > 400);
      });

      /* -------------------------------------------------------
   HAMBURGER
------------------------------------------------------- */
      const ham = document.getElementById("hamburger");
      const navLinksEl = document.getElementById("navLinks");
      ham.addEventListener("click", () => {
        ham.classList.toggle("open");
        navLinksEl.classList.toggle("open");
      });
      navLinksEl.querySelectorAll("a").forEach((a) => {
        a.addEventListener("click", () => {
          ham.classList.remove("open");
          navLinksEl.classList.remove("open");
        });
      });

      /* -------------------------------------------------------
   STAT COUNTERS
------------------------------------------------------- */
      function animateCounter(el) {
        const target = parseInt(el.dataset.target);
        let n = 0;
        const t = setInterval(() => {
          n = Math.min(n + Math.ceil(target / 40), target);
          el.textContent = n + "+";
          if (n >= target) clearInterval(t);
        }, 35);
      }
      new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting)
              e.target
                .querySelectorAll(".stat-num[data-target]")
                .forEach(animateCounter);
          });
        },
        { threshold: 0.5 },
      ).observe(document.querySelector(".hero-stats"));

      /* -------------------------------------------------------
   FORM
------------------------------------------------------- */
      function handleForm(e) {
        e.preventDefault();
        const btn = document.getElementById("sendBtn");
        btn.innerHTML = '<i class="fas fa-check"></i> Sent!';
        btn.style.background = "#27ae60";
        btn.style.borderColor = "#27ae60";
        setTimeout(() => {
          btn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
          btn.style.background = "";
          btn.style.borderColor = "";
          e.target.reset();
        }, 3000);
      }

      /* -------------------------------------------------------
   BACK TO TOP
------------------------------------------------------- */
      document
        .getElementById("back-top")
        .addEventListener("click", () =>
          window.scrollTo({ top: 0, behavior: "smooth" }),
        );

      /* -------------------------------------------------------
   INIT
------------------------------------------------------- */
      renderPortfolio();
      observeElements();
      setTimeout(observeElements, 400);
