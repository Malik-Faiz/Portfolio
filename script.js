const projects = [
        {
          title: "AI Agent – Intelligent Cobot for Education",
          category: "AI & LLM",
          img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80",
          desc: "Researching and developing a smart collaborative robot (Cobot) that adapts its role as teacher, student, or peer. The robot uses AI to clarify topics for shy students and help teachers prepare learning materials efficiently. Ongoing research project at UPPA.",
          tags: ["Python", "Robotics", "AI Agent", "Cobot Frameworks", "NLP"],
          github: "#",
          demo: "#",
        },
        {
          title: "Intelligent AI Agent Systems with RAG",
          category: "AI & LLM",
          img: "https://images.unsplash.com/photo-1655720828018-edd2daec9349?w=600&q=80",
          desc: "Engineered intelligent AI agent systems with Retrieval-Augmented Generation (RAG) for enhanced search functionality. Implemented multi-agent communication using Google Pub/Sub to coordinate distributed AI workflows with semantic search.",
          tags: ["Python", "RAG", "FAISS", "Google Cloud", "LLM", "Embeddings"],
          github: "#",
          demo: "#",
        },
        {
          title: "Deepfake Detection System",
          category: "Computer Vision",
          img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&q=80",
          desc: "Contributed to a deepfake detection project to distinguish between real and GAN-generated fake images. Pre-processed and augmented images to prevent overfitting and increased pipeline accuracy by 12% using fine-tuned MobileNet-v3.",
          tags: [
            "Python",
            "TensorFlow",
            "Keras",
            "OpenCV",
            "MobileNet-v3",
            "CNN",
          ],
          github: "#",
          demo: "#",
        },
        {
          title: "Tanzania Deforestation Monitor",
          category: "Machine Learning",
          img: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&q=80",
          desc: "Collaborated on a real-time monitoring system for deforestation in Tanzania's Mangrove Forest. Led deployment efforts, built an interactive geospatial dashboard, and deployed trained ML models to monitor environmental change in real-time.",
          tags: ["Python", "GIS Tools", "Dashboard", "Computer Vision", "ML"],
          github: "#",
          demo: "#",
        },
        {
          title: "Student Success Prediction",
          category: "Machine Learning",
          img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80",
          desc: "Developed a machine learning model achieving 87% accuracy to predict student success based on academic and demographic data. Helps institutions identify at-risk students early and enhance overall performance outcomes.",
          tags: [
            "Python",
            "Scikit-learn",
            "Predictive Modeling",
            "Feature Engineering",
          ],
          github: "#",
          demo: "#",
        },
        {
          title: "NexaCareer – FYP Platform",
          category: "Web Development",
          img: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&q=80",
          desc: "Final Year Project — a specialized software platform for IT job fairs, seamlessly connecting final-year students with companies. Features an AI module for automatic CV classification and intelligent candidate-company matching.",
          tags: ["React", "Node.js", "MySQL", "AI", "REST API", "Laravel"],
          github: "#",
          demo: "#",
        },
        {
          title: "Dog Breed Prediction",
          category: "Computer Vision",
          img: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&q=80",
          desc: "Built a deep neural network to classify dog breeds from images using advanced computer vision techniques. Leverages TensorFlow and Keras for model architecture with high classification accuracy across multiple breeds.",
          tags: ["TensorFlow", "Keras", "Python", "Deep Learning", "CNN"],
          github: "#",
          demo: "#",
        },
        {
          title: "Mango Leaf Disease Detection",
          category: "Computer Vision",
          img: "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?w=600&q=80",
          desc: "Created a computer vision-based model to detect diseases in mango leaves for early agricultural diagnosis and disease management. Helps the agricultural sector with preventive decision-making using image classification.",
          tags: [
            "Python",
            "OpenCV",
            "CNN",
            "Computer Vision",
            "Agriculture AI",
          ],
          github: "#",
          demo: "#",
        },
        {
          title: "Property Management System",
          category: "Web Development",
          img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80",
          desc: "A full-featured web platform to streamline property listing, management, and transactions. Built with Laravel for robust backend operations, MySQL for data persistence, and a clean responsive frontend for agents and buyers.",
          tags: ["Laravel", "MySQL", "HTML/CSS", "PHP", "Web App"],
          github: "#",
          demo: "#",
        },
      ];

      const ROLES = [
        "AI/ML Engineer",
        "LLM Systems Builder",
        "Data Scientist",
        "Computer Vision Expert",
        "Backend Developer",
        "Master's Student @ UPPA",
      ];
      const NAME_STR = "Malik Faiz ur Rehman";
      const SPD_TYPE = 70,
        SPD_DEL = 40,
        PAUSE_END = 1800,
        PAUSE_NEXT = 350;
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

      function renderPortfolio(filter = "all") {
        const grid = document.getElementById("portfolioGrid");
        const filtered =
          filter === "all"
            ? projects
            : projects.filter((p) => p.category === filter);
        grid.innerHTML = filtered
          .map((p, i) => {
            const idx = projects.indexOf(p);
            return `<div class="portfolio-item" data-index="${idx}" style="transition-delay:${i * 0.08}s">
            <div class="portfolio-img-wrap">
              <img src="${p.img}" alt="${p.title}" loading="lazy"/>
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
                  <a href="${p.github}" class="overlay-btn" target="_blank" rel="noopener" onclick="event.stopPropagation()" aria-label="GitHub"><i class="fab fa-github"></i></a>
                  <span class="ovl-tip">GitHub</span>
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

      document
        .getElementById("back-top")
        .addEventListener("click", () =>
          window.scrollTo({ top: 0, behavior: "smooth" }),
        );

      renderPortfolio();
      observeElements();
      setTimeout(observeElements, 400);