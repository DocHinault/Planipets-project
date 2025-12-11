document.addEventListener("DOMContentLoaded", () => {
  setupNavMenus();
  setupTimeline();
});

function setupNavMenus() {
  const toggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");
  if (toggle && navLinks) {
    toggle.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });
  }

  document.querySelectorAll(".nav-item.has-submenu").forEach((item) => {
    item.addEventListener("click", () => {
      item.classList.toggle("is-open");
    });
  });
}

function setupTimeline() {
  const monthsWrapper = document.getElementById("timelineMonths");
  const detailsContainer = document.getElementById("detailsContainer");
  const highlightBar = document.getElementById("timelineHighlightBar");
  const quarterLabel = document.getElementById("quarterLabel");
  const quarterMetrics = document.getElementById("quarterMetrics");

  if (!monthsWrapper || !detailsContainer || !highlightBar) return;

  const roadmap2026 = [
    {
      id: "2026-01",
      label: "Janvier 2026",
      theme: "Fondations & clarification de l’offre Pro",
      summary:
        "Ateliers promesse, inventaire des parcours actuels et premiers KPIs pour cadrer la suite.",
      quarter: "T1 2026 · Fondations",
      metrics: [
        "Promesse centrale reformulée",
        "Audit UX complet",
        "KPIs cibles définis",
      ],
      weeks: [
        {
          label: "Semaine 1",
          tasks: [
            "Atelier sur la promesse centrale Pro.",
            "Inventaire des pages produit et média existantes.",
            "Définition des premiers KPIs prioritaires.",
          ],
        },
        {
          label: "Semaine 2",
          tasks: [
            "Rédaction des messages clés et du nouveau hero Pro.",
            "Maquettage des sections de la landing Pro.",
            "Préparation du plan d’audit UX.",
          ],
        },
        {
          label: "Semaine 3",
          tasks: [
            "Tests de cohérence des parcours existants.",
            "Collecte des 404 et irritants majeurs.",
            "Définition du tableau de suivi des corrections.",
          ],
        },
        {
          label: "Semaine 4",
          tasks: [
            "Synthèse de l’audit et priorisation des corrections.",
            "Partage des KPIs retenus avec l’équipe.",
            "Planification du sprint correctif de février.",
          ],
        },
      ],
    },
    {
      id: "2026-02",
      label: "Février 2026",
      theme: "Hygiène produit & stack data",
      summary:
        "Corrections rapides, uniformisation des formulaires et instrumentation des événements clés.",
      quarter: "T1 2026 · Fondations",
      metrics: [
        "404 corrigées",
        "Formulaires unifiés",
        "Tracking événementiel prêt",
      ],
      weeks: [
        {
          label: "Semaine 1",
          tasks: [
            "Traiter les pages les plus vues selon l’audit.",
            "Uniformiser labels, CTA et messages d’erreur.",
            "Préparer les gabarits de formulaires communs.",
          ],
        },
        {
          label: "Semaine 2",
          tasks: [
            "Implémenter les correctifs rapides identifiés.",
            "Repasser sur l’accessibilité des formulaires.",
            "Lister les événements produit à tracer.",
          ],
        },
        {
          label: "Semaine 3",
          tasks: [
            "Brancher le tracking sur les parcours critiques.",
            "Tester les événements en staging.",
            "Préparer un mini dashboard de suivi.",
          ],
        },
        {
          label: "Semaine 4",
          tasks: [
            "Valider les données sur 7 à 10 jours.",
            "Documenter la base de KPIs.",
            "Lister les manques pour mars.",
          ],
        },
      ],
    },
    {
      id: "2026-03",
      label: "Mars 2026",
      theme: "Spécification boutique & gamification",
      summary:
        "Choix catalogue pilote, règles de commission et conception des niveaux Pro.",
      quarter: "T1 2026 · Fondations",
      metrics: [
        "Spécification boutique validée",
        "Modèle de niveaux cadré",
        "Maquettes UI prêtes",
      ],
      weeks: [
        {
          label: "Semaine 1",
          tasks: [
            "Benchmark rapide des partenaires boutique.",
            "Cartographier catalogue pilote (food, accessoires, services).",
            "Lister les dépendances techniques.",
          ],
        },
        {
          label: "Semaine 2",
          tasks: [
            "Poser les règles de commission pro/Planipets.",
            "Préparer les écrans clés Pro et particulier.",
            "Écrire les premiers scénarios de niveaux Pro.",
          ],
        },
        {
          label: "Semaine 3",
          tasks: [
            "Ateliers avec 3 pros pilotes sur les niveaux.",
            "Affiner la table des quêtes hebdomadaires.",
            "Valider les critères d’éligibilité des produits.",
          ],
        },
        {
          label: "Semaine 4",
          tasks: [
            "Assembler la spécification finale.",
            "Clore les maquettes pour T2.",
            "Communiquer la vision boutique + gamification.",
          ],
        },
      ],
    },
    {
      id: "2026-04",
      label: "Avril 2026",
      theme: "Partenaires boutique & intégration",
      summary: "Sélection des partenaires, mapping catalogue et premiers flux techniques.",
      quarter: "T2 2026 · Boutique & Gamification",
      metrics: ["Partenaires pilotes", "Mapping catalogue", "Flux tests"],
      weeks: [
        {
          label: "Semaine 1",
          tasks: [
            "Appels de qualification avec 5 à 10 marques.",
            "Évaluation de la compatibilité technique.",
            "Choix des catégories du pilote.",
          ],
        },
        {
          label: "Semaine 2",
          tasks: [
            "Négociation commissions et règles de redistribution.",
            "Structuration des données produits.",
            "Définition des checklists de qualité.",
          ],
        },
        {
          label: "Semaine 3",
          tasks: [
            "Mise en place des flux d’import (API/CSV).",
            "Écrans internes de gestion du catalogue.",
            "Tests sur échantillon réduit.",
          ],
        },
        {
          label: "Semaine 4",
          tasks: [
            "Validation conjointe avec 2 partenaires.",
            "Plan de communication pilote.",
            "Préparation de l’onboarding pro.",
          ],
        },
      ],
    },
    {
      id: "2026-05",
      label: "Mai 2026",
      theme: "Interfaces Pro & parcours particuliers",
      summary: "Interface recommandation Pro et parcours d’achat particulier v1.",
      quarter: "T2 2026 · Boutique & Gamification",
      metrics: ["Interface pro prête", "Parcours particulier", "Tests internes"],
      weeks: [
        {
          label: "Semaine 1",
          tasks: [
            "Développement onglet Recommandations & Boutique.",
            "Cartes produits activables par le pro.",
            "Préparation des liens de recommandation.",
          ],
        },
        {
          label: "Semaine 2",
          tasks: [
            "Parcours de commande particulier (produit → panier).",
            "Affichage des commissions estimées.",
            "Tests d’ergonomie avec quelques pros.",
          ],
        },
        {
          label: "Semaine 3",
          tasks: [
            "Ajout des QR codes et boutons de partage.",
            "Validation des flux de paiement.",
            "Rédaction des confirmations et e-mails.",
          ],
        },
        {
          label: "Semaine 4",
          tasks: [
            "Revue qualité bout en bout.",
            "Fix des points de friction identifiés.",
            "Préparation du pilote juin.",
          ],
        },
      ],
    },
    {
      id: "2026-06",
      label: "Juin 2026",
      theme: "Cohorte pilote & coaching pros",
      summary: "Onboarding de 20–30 pros pilotes, suivi rapproché et contenus pédagogiques.",
      quarter: "T2 2026 · Boutique & Gamification",
      metrics: ["Cohorte prête", "Premières commandes", "Feedback structuré"],
      weeks: [
        {
          label: "Semaine 1",
          tasks: [
            "Sélection des pros pilotes.",
            "Invitation et planification des sessions live.",
            "Création du canal de support privé.",
          ],
        },
        {
          label: "Semaine 2",
          tasks: [
            "Onboarding boutique + niveaux.",
            "Suivi des premières recommandations.",
            "Collecte des questions récurrentes.",
          ],
        },
        {
          label: "Semaine 3",
          tasks: [
            "Webinaires et playbooks de scripts.",
            "Enrichissement des FAQ.",
            "Premiers mini-dashboards envoyés aux pros.",
          ],
        },
        {
          label: "Semaine 4",
          tasks: [
            "Analyse quantitative du pilote.",
            "Recueil des feedbacks qualitatifs.",
            "Décisions pour l’itération T3.",
          ],
        },
      ],
    },
    {
      id: "2026-07",
      label: "Juillet 2026",
      theme: "Compte Particulier & carnet animal",
      summary: "Espace particulier v1, fiches animaux et historique de rendez-vous.",
      quarter: "T3 2026 · Particuliers & Communauté",
      metrics: ["Compte particulier", "Fiches animaux", "Historique RDV"],
      weeks: [
        {
          label: "Semaine 1",
          tasks: [
            "Création du compte particulier simple.",
            "Formulaire fiche animal (nom, photo, âge).",
            "Association des RDV existants.",
          ],
        },
        {
          label: "Semaine 2",
          tasks: [
            "Consultation et édition des fiches.",
            "Historique de RDV par animal.",
            "Tests mobiles et accessibilité.",
          ],
        },
        {
          label: "Semaine 3",
          tasks: [
            "Préparation de la connexion boutique → fiches animaux.",
            "Bloc conseils personnalisés.",
            "Collecte de feedback particuliers.",
          ],
        },
        {
          label: "Semaine 4",
          tasks: [
            "Stabilisation et corrections.",
            "Documentation support.",
            "Annonce publique limitée.",
          ],
        },
      ],
    },
    {
      id: "2026-08",
      label: "Août 2026",
      theme: "Clubs locaux & gamification douce",
      summary: "Statuts particuliers, défis bien-être et premières animations locales.",
      quarter: "T3 2026 · Particuliers & Communauté",
      metrics: ["Statuts particuliers", "Défis bien-être", "Clubs pilotes"],
      weeks: [
        {
          label: "Semaine 1",
          tasks: [
            "Conception des statuts et badges particuliers.",
            "Liste des défis bien-être pertinents.",
            "Sélection des villes/tests clubs.",
          ],
        },
        {
          label: "Semaine 2",
          tasks: [
            "Implémentation des défis hebdomadaires.",
            "Affichage des clubs locaux.",
            "Partenariats associatifs locaux.",
          ],
        },
        {
          label: "Semaine 3",
          tasks: [
            "Lancement des défis pilotes.",
            "Communication via le média.",
            "Collecte des retours clubs.",
          ],
        },
        {
          label: "Semaine 4",
          tasks: [
            "Ajustements UX gamification douce.",
            "Préparation des événements récurrents.",
            "Mesure de l’engagement.",
          ],
        },
      ],
    },
    {
      id: "2026-09",
      label: "Septembre 2026",
      theme: "Boutique élargie & packages",
      summary: "Élargissement du catalogue et packages récurrents pour les pros.",
      quarter: "T3 2026 · Particuliers & Communauté",
      metrics: ["Nouveaux partenaires", "Packages récurrents", "Suivi revenus"],
      weeks: [
        {
          label: "Semaine 1",
          tasks: [
            "Analyse des ventes pilote T2/T3.",
            "Sélection de nouvelles catégories.",
            "Contact de nouveaux fournisseurs.",
          ],
        },
        {
          label: "Semaine 2",
          tasks: [
            "Création des packages récurrents (abos, kits).",
            "Ajustement des niveaux et plafonds.",
            "Préparation du matériel de vente pro.",
          ],
        },
        {
          label: "Semaine 3",
          tasks: [
            "Tests packages avec pros ambassadeurs.",
            "Mise à jour des flux de commissions.",
            "Documentation claire pour les pros.",
          ],
        },
        {
          label: "Semaine 4",
          tasks: [
            "Lancement large des packages.",
            "Suivi des revenus générés.",
            "Plan de communication Q4.",
          ],
        },
      ],
    },
    {
      id: "2026-10",
      label: "Octobre 2026",
      theme: "Offre média & publicité",
      summary: "Structuration des offres média, storytelling Rex & Minou et partenariats marques.",
      quarter: "T4 2026 · Média & Partenariats",
      metrics: ["Offres média", "Storytelling renforcé", "Accords marques"],
      weeks: [
        {
          label: "Semaine 1",
          tasks: [
            "Inventaire des audiences et formats.",
            "Packaging des offres média/publicité.",
            "Mise à jour de la charte éditoriale.",
          ],
        },
        {
          label: "Semaine 2",
          tasks: [
            "Renforcement de la série Rex & Minou.",
            "Création de médiakits.",
            "Prospection initiale partenaires.",
          ],
        },
        {
          label: "Semaine 3",
          tasks: [
            "Tests de formats sponsorisés pilotes.",
            "Mesure des performances.",
            "Collecte des retours audience.",
          ],
        },
        {
          label: "Semaine 4",
          tasks: [
            "Négociation avec 2–3 marques cibles.",
            "Planification des campagnes Q4/Q1.",
            "Mise à jour des guidelines de transparence.",
          ],
        },
      ],
    },
    {
      id: "2026-11",
      label: "Novembre 2026",
      theme: "Collectivités & référentiel bien-être",
      summary: "Discussions avec mairies/assos, preuves d’impact et kits collectivités.",
      quarter: "T4 2026 · Média & Partenariats",
      metrics: ["Rencontres collectivités", "Kits prêts", "Référentiel partagé"],
      weeks: [
        {
          label: "Semaine 1",
          tasks: [
            "Identification des collectivités cibles.",
            "Préparation d’un dossier Planipets territoire.",
            "Définition des indicateurs d’impact.",
          ],
        },
        {
          label: "Semaine 2",
          tasks: [
            "Rendez-vous avec 3 mairies/assos.",
            "Recueil des besoins locaux.",
            "Adapter l’offre aux contraintes publiques.",
          ],
        },
        {
          label: "Semaine 3",
          tasks: [
            "Création du kit collectivités (slides + fiches).",
            "Mise en avant des initiatives bien-être.",
            "Co-construction d’événements pilotes.",
          ],
        },
        {
          label: "Semaine 4",
          tasks: [
            "Signature de 1–2 partenariats locaux.",
            "Planification des campagnes terrain.",
            "Préparation des KPIs de suivi.",
          ],
        },
      ],
    },
    {
      id: "2026-12",
      label: "Décembre 2026",
      theme: "Bilan & plan 2027",
      summary: "Consolidation des apprentissages, arbitrages roadmap et objectifs 2027.",
      quarter: "T4 2026 · Média & Partenariats",
      metrics: ["Bilan annuel", "OKR 2027", "Plan de communication"],
      weeks: [
        {
          label: "Semaine 1",
          tasks: [
            "Analyse consolidée des KPIs 2026.",
            "Synthèse boutique & gamification.",
            "Recensement des dettes techniques.",
          ],
        },
        {
          label: "Semaine 2",
          tasks: [
            "Atelier interne objectifs 2027.",
            "Priorisation des gros chantiers.",
            "Définition des besoins en ressources.",
          ],
        },
        {
          label: "Semaine 3",
          tasks: [
            "Écriture de la roadmap 2027 v1.",
            "Préparation du plan de communication.",
            "Boucle de feedback avec pros ambassadeurs.",
          ],
        },
        {
          label: "Semaine 4",
          tasks: [
            "Diffusion publique/équipe de la vision 2027.",
            "Célébration et remerciements communauté.",
            "Pause de maintenance et améliorations mineures.",
          ],
        },
      ],
    },
  ];

  let activeMonthId = roadmap2026[0].id;
  const monthElements = new Map();

  roadmap2026.forEach((month) => {
    const monthEl = document.createElement("button");
    monthEl.className = "timeline-month";
    monthEl.type = "button";
    monthEl.dataset.id = month.id;
    monthEl.innerHTML = `<strong>${month.label}</strong><span class="month-theme">${month.theme}</span>`;
    monthsWrapper.appendChild(monthEl);
    monthElements.set(month.id, monthEl);

    const show = () => setActiveMonth(month.id);
    monthEl.addEventListener("mouseenter", show);
    monthEl.addEventListener("focus", show);
    monthEl.addEventListener("click", show);
  });

  function setActiveMonth(id) {
    const month = roadmap2026.find((m) => m.id === id);
    if (!month) return;
    activeMonthId = id;

    monthElements.forEach((el) => el.classList.remove("active"));
    const activeEl = monthElements.get(id);
    if (activeEl) {
      activeEl.classList.add("active");
      updateHighlightBar(activeEl);
    }

    renderDetails(month);
  }

  function renderDetails(month) {
    detailsContainer.innerHTML = "";
    const wrapper = document.createElement("div");
    wrapper.className = "timeline-details-inner";

    const header = document.createElement("div");
    header.className = "details-header";

    const titleBlock = document.createElement("div");
    titleBlock.className = "details-title-block";
    titleBlock.innerHTML = `
      <span class="details-month-label">${month.label}</span>
      <h2 class="details-main-title">${month.theme}</h2>
      <p class="details-tagline">${month.summary}</p>
    `;

    header.appendChild(titleBlock);
    wrapper.appendChild(header);

    const summary = document.createElement("div");
    summary.className = "details-summary";
    summary.textContent = month.summary;
    wrapper.appendChild(summary);

    const weeksList = document.createElement("div");
    weeksList.className = "week-list";

    month.weeks.forEach((week) => {
      const card = document.createElement("article");
      card.className = "week-card";
      const title = document.createElement("h4");
      title.textContent = week.label;
      const list = document.createElement("ul");
      week.tasks.forEach((task) => {
        const li = document.createElement("li");
        li.textContent = task;
        list.appendChild(li);
      });
      card.appendChild(title);
      card.appendChild(list);
      weeksList.appendChild(card);
    });

    wrapper.appendChild(weeksList);
    detailsContainer.appendChild(wrapper);

    if (quarterLabel && quarterMetrics) {
      quarterLabel.textContent = month.quarter;
      quarterMetrics.innerHTML = "";
      month.metrics.forEach((m) => {
        const pill = document.createElement("div");
        pill.className = "quarter-metric";
        pill.textContent = m;
        quarterMetrics.appendChild(pill);
      });
    }
  }

  function updateHighlightBar(activeEl) {
    const { offsetLeft, offsetWidth } = activeEl;
    highlightBar.style.transform = `translateX(${offsetLeft}px)`;
    highlightBar.style.width = `${offsetWidth}px`;
  }

  function handleKeyboardNav(event) {
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
    event.preventDefault();
    const currentIndex = roadmap2026.findIndex((m) => m.id === activeMonthId);
    if (currentIndex === -1) return;
    const nextIndex =
      event.key === "ArrowRight"
        ? Math.min(currentIndex + 1, roadmap2026.length - 1)
        : Math.max(currentIndex - 1, 0);
    const nextMonth = roadmap2026[nextIndex];
    if (nextMonth) {
      setActiveMonth(nextMonth.id);
      const el = monthElements.get(nextMonth.id);
      if (el) el.scrollIntoView({ behavior: "smooth", inline: "center" });
    }
  }

  window.addEventListener("keydown", handleKeyboardNav);
  window.addEventListener("resize", () => {
    const activeEl = monthElements.get(activeMonthId);
    if (activeEl) updateHighlightBar(activeEl);
  });

  setActiveMonth(activeMonthId);
}
