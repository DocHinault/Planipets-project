document.addEventListener("DOMContentLoaded", () => {
  setupNavMenus();
  setupTimeline();
  setupTunnelParticulier();
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

const tunnelParticulierSteps = [
  {
    id: "step1",
    order: 1,
    title: "Découverte & prise de conscience",
    shortDescription:
      "Le propriétaire se rend compte qu’il a besoin d’aide pour le bien-être de son animal, sans forcément connaître Planipets.",
    context: [
      "Le chien tire en laisse, le chat fait des bêtises, le lapin s’ennuie, l’animal a peur des manipulations, etc.",
      "Le propriétaire cherche des solutions : demande des conseils à son entourage, tape des requêtes génériques sur Google, tombe sur des posts réseaux sociaux ou sur un article d’un blog.",
    ],
    role: [
      "Planipets doit apparaître dans cet horizon de solutions comme une référence sérieuse et bienveillante.",
      "Le média (articles, Rex & Minou, contenus pédagogiques) sert de porte d’entrée naturelle.",
    ],
    messages: [
      "Tu n’es pas seul·e : d’autres propriétaires vivent la même chose.",
      "Le bien-être de ton animal passe aussi par l’accompagnement de pros formés.",
      "Planipets t’aide à trouver le bon pro, près de chez toi.",
    ],
    kpis: [
      "Impressions sur les articles et posts réseaux sociaux.",
      "Clics organiques depuis Google vers le site Planipets.",
      "Durée moyenne de lecture des contenus de découverte.",
    ],
    frictions: [
      "Le propriétaire ne connaît pas Planipets et peut être méfiant face à une nouvelle plateforme.",
      "Il ne se sent pas toujours légitime à consulter un pro (peur d’être jugé, de payer cher, etc.).",
    ],
    improvements: [
      "Multiplier les preuves sociales (avis, témoignages, cas concrets).",
      "Proposer des contenus qui normalisent le recours à un pro (‘Consulter un éducateur, ce n’est pas un échec’).",
    ],
    example:
      "Post Instagram / article : « 5 signes que ton animal a besoin d’un pro (et comment ça se passe concrètement) », avec un CTA discret vers la recherche de pros sur Planipets.",
  },
  {
    id: "step2",
    order: 2,
    title: "Arrivée sur Planipets (page d’accueil / article)",
    shortDescription:
      "Le propriétaire clique sur un lien et arrive pour la première fois sur une page Planipets (home, article, page média…).",
    context: [
      "Il vient d’un moteur de recherche, d’un réseau social, d’un lien partagé par un ami, ou du site d’une mairie/asso partenaire.",
      "Il découvre le branding, les mascottes, la promesse.",
    ],
    role: [
      "Rassurer immédiatement avec une proposition de valeur claire : Planipets = plateforme pour le bien-être de son animal, avec de vrais pros.",
      "Proposer un premier chemin simple : rechercher un pro ou lire un contenu adapté à son problème.",
    ],
    messages: [
      "24/7 en quelques clics, trouve un professionnel pour le bien-être de ton animal.",
      "Des pros sélectionnés et partenaires de la charte Planipets.",
      "Tu peux commencer par poser un diagnostic léger grâce à nos contenus.",
    ],
    kpis: [
      "Taux de rebond sur la première page visitée.",
      "Clics sur la barre de recherche ou les boutons ‘Trouver un pro’.",
      "Clics vers des articles / guides liés au problème rencontré.",
    ],
    frictions: [
      "Trop d’informations en même temps, le propriétaire ne sait pas par où commencer.",
      "Promesse pas assez claire en 3 secondes (‘Planipets = quoi exactement ?’).",
    ],
    improvements: [
      "Renforcer un bloc ‘Commencer ici’ pour les nouveaux, avec 2 à 3 options maximum.",
      "Adapter certains textes de la home pour parler au particulier, sans jargon pro.",
    ],
    example:
      "Hero de la home : « Trouve un professionnel animalier près de chez toi – éducateur, comportementaliste, toiletteur, pet-sitter… » avec un champ de recherche simple et un bouton ‘Je cherche pour mon animal’.",
  },
  {
    id: "step3",
    order: 3,
    title: "Recherche & comparaison de pros",
    shortDescription:
      "Le propriétaire utilise la recherche Planipets pour lister des professionnels pertinents autour de chez lui.",
    context: [
      "Il saisit un type de besoin (éducation, massage, comportement…), une ville, ou clique sur une catégorie.",
      "Il scrute la liste : noms, photos, distances, spécialités, avis.",
    ],
    role: [
      "Aider à passer de l’angoisse à la clarté : oui, il existe des pros formés pour ce problème.",
      "Faciliter le tri par proximité, spécialité, type d’accompagnement (présentiel / à distance).",
    ],
    messages: [
      "Des pros sélectionnés pour leur sérieux et leur éthique.",
      "Filtre par localisation, spécialité et type de service.",
      "Lis les avis d’autres propriétaires comme toi.",
    ],
    kpis: [
      "Recherches effectuées par visiteur.",
      "Clics sur des fiches Pro.",
      "Taux de visiteurs qui passent de la home à une fiche Pro.",
    ],
    frictions: [
      "Trop peu de pros visibles dans certaines zones géographiques.",
      "Difficulté à comprendre les différences entre les professionnels (titres, certifications…).",
    ],
    improvements: [
      "Ajouter des filtres ou tags clairs (ex : ‘Pro spécialisé chiens réactifs’).",
      "Afficher des micro-infographies rassurantes (exemples de cas résolus).",
    ],
    example:
      "Page de liste avec un bandeau : « Résultats pour ‘chien qui tire en laisse’ à Lille – 3 professionnels trouvés » et une explication en 1 phrase de ce qu’ils font.",
  },
  {
    id: "step4",
    order: 4,
    title: "Consultation d’une fiche Pro & réassurance",
    shortDescription:
      "Le propriétaire ouvre une fiche Pro et vérifie que c’est la bonne personne pour son animal.",
    context: [
      "Il lit la description, les services, les tarifs, les zones d’intervention, les avis, etc.",
      "Il regarde si le pro ‘comprend’ ce qu’il vit.",
    ],
    role: [
      "Offrir une fiche claire, rassurante, structurée autour du besoin du propriétaire.",
      "Mettre en avant la charte Planipets, les prises en charge possibles, les avis vérifiés.",
    ],
    messages: [
      "Pro partenaire Planipets, signataire de la charte bien-être.",
      "Spécialisé dans [type de problématique].",
      "Avis vérifiés de propriétaires accompagnés.",
    ],
    kpis: [
      "Temps passé sur les fiches.",
      "Clics sur les boutons ‘Prendre rendez-vous’.",
      "Taux de conversion fiche → début de prise de RDV.",
    ],
    frictions: [
      "Problème de compréhension des tarifs ou du déroulé de la séance.",
      "Manque d’exemples concrets de résultats obtenus.",
    ],
    improvements: [
      "Ajouter un bloc ‘Comment se déroule une séance ?’ sur chaque fiche.",
      "Mettre des exemples avant/après anonymisés ou des témoignages plus détaillés.",
    ],
    example:
      "Bloc sur la fiche : « En pratique : 1er rendez-vous d’1h pour comprendre votre situation, puis 2 à 3 séances de suivi si besoin. »",
  },
  {
    id: "step5",
    order: 5,
    title: "Prise de rendez-vous",
    shortDescription: "Le propriétaire est convaincu et clique sur ‘Prendre rendez-vous’.",
    context: [
      "Il choisit un créneau, un lieu (domicile, cabinet, à distance), et renseigne les infos de base (animal, coordonnées).",
    ],
    role: [
      "Rendre le tunnel de réservation ultra simple, rapide et rassurant.",
      "Montrer clairement ce qui va se passer après validation du rendez-vous.",
    ],
    messages: [
      "Quelques clics pour réserver, tu peux toujours modifier ou annuler selon les conditions du pro.",
      "Tes informations sont protégées et uniquement utilisées pour ton rendez-vous.",
      "Tu recevras une confirmation par mail/SMS.",
    ],
    kpis: ["Taux de conversion fiche → réservation confirmée.", "Abandons de réservation (où, combien)."],
    frictions: ["Formulaire trop long ou peu clair.", "Doute sur la politique d’annulation / de paiement."],
    improvements: [
      "Limiter le nombre de champs obligatoires, clarifier les messages d’erreur.",
      "Afficher une mini FAQ ‘avant de confirmer’ (annulation, paiement, durée de la séance).",
    ],
    example:
      "Écran de réservation : « Choisis ton créneau – 60 minutes – 50 € · En présentiel chez le pro à [adresse]. »",
  },
  {
    id: "step6",
    order: 6,
    title: "Confirmation & préparation",
    shortDescription:
      "Le rendez-vous est confirmé ; on prépare le propriétaire et son animal pour que la séance se passe au mieux.",
    context: ["Le propriétaire reçoit un email / SMS de confirmation avec les détails pratiques."],
    role: ["Rassurer, réduire le no-show, préparer le terrain pour une séance utile."],
    messages: [
      "Rappel de la date, heure, lieu, durée.",
      "Conseils spécifiques (ex : ne pas nourrir l’animal juste avant, amener des friandises, carnet de santé si besoin…).",
      "Lien pour reprogrammer/annuler si nécessaire.",
    ],
    kpis: ["Taux de no-show.", "Taux de rendez-vous reprogrammés."],
    frictions: ["Mail peu clair, propriétaire qui ne retrouve plus les infos."],
    improvements: [
      "Templates de mails/SMS plus pédagogiques.",
      "Lien direct vers une mini-fiche ‘Comment bien préparer le rendez-vous ?’.",
    ],
    example:
      "Mail : « Bonjour, votre rendez-vous avec [Nom du pro] est confirmé le [date] à [heure]. Pensez à venir avec… »",
  },
  {
    id: "step7",
    order: 7,
    title: "Rendez-vous & expérience réelle",
    shortDescription:
      "Le propriétaire rencontre le pro ; cette expérience conditionne la confiance future envers Planipets.",
    context: [
      "L’essentiel se déroule en dehors de l’interface Planipets, mais cela reste une étape clé du tunnel.",
    ],
    role: [
      "S’assurer que les pros référencés respectent la charte bien-être et les standards de qualité.",
      "Recueillir ensuite le feedback du propriétaire pour améliorer le matching.",
    ],
    messages: [
      "Planipets reste disponible après le rendez-vous pour suivre ton expérience.",
      "Tu peux partager ton ressenti pour aider d’autres propriétaires.",
    ],
    kpis: ["Satisfaction post-rendez-vous (notes/avis).", "Taux de réclamation / demandes de support."],
    frictions: ["Décalage entre les attentes et la séance réelle (durée, méthode, résultats)."],
    improvements: [
      "Affiner la description des services sur les fiches.",
      "Mettre en place un canal de support si un rendez-vous se passe mal.",
    ],
    example:
      "Message post-séance : « Comment s’est passé ton rendez-vous avec [Nom du pro] ? Dis-le-nous en 1 minute. »",
  },
  {
    id: "step8",
    order: 8,
    title: "Suivi & retour d’expérience",
    shortDescription:
      "Après le rendez-vous, Planipets sollicite un avis et propose des contenus complémentaires.",
    context: ["Le propriétaire reçoit un mail quelques jours après la séance."],
    role: [
      "Transformer une expérience ponctuelle en relation suivie.",
      "Collecter des avis utiles pour les autres propriétaires et pour le pro.",
    ],
    messages: [
      "Ton avis compte pour aider le pro et les autres propriétaires.",
      "Voici quelques ressources pour aller plus loin (articles, vidéos, petits exercices).",
    ],
    kpis: ["Taux de collecte d’avis.", "Clics sur les contenus de suivi."],
    frictions: ["Propriétaire qui ne voit pas l’intérêt de laisser un avis ou manque de temps."],
    improvements: [
      "Rendre le formulaire d’avis ultra court (note + 2–3 questions max).",
      "Montrer concrètement comment les avis aident le pro.",
    ],
    example:
      "Mail : « Peux-tu nous dire en 3 clics comment s’est passée ta séance ? Note, ce que tu as aimé, ce qu’on peut améliorer. »",
  },
  {
    id: "step9",
    order: 9,
    title: "Fidélisation & multi-services",
    shortDescription:
      "Le propriétaire adopte Planipets comme réflexe pour le suivi du bien-être de son animal.",
    context: [
      "Il revient pour d’autres rendez-vous, pour un autre animal, ou pour un autre type de pro.",
      "Il peut rejoindre un club local, suivre des contenus, profiter de la boutique.",
    ],
    role: [
      "Devenir la plateforme de référence du propriétaire pour tous les sujets bien-être animal.",
      "Créer des parcours récurrents (rappels, clubs, recommandations de produits/service).",
    ],
    messages: [
      "Ton compte Planipets devient le carnet de vie de ton animal.",
      "Retrouve l’historique de tes pros, rendez-vous et conseils.",
      "Profite de recommandations très ciblées (pros, produits, événements).",
    ],
    kpis: [
      "Nombre de visites récurrentes par propriétaire.",
      "Nombre de pros différents consultés par compte.",
      "Engagement sur les contenus, clubs, boutique.",
    ],
    frictions: [
      "Le propriétaire ne voit pas la valeur d’un compte ou n’a pas l’habitude de se reconnecter.",
    ],
    improvements: [
      "Mettre en avant les bénéfices concrets d’un compte (historique, rappels, recommandations adaptées).",
      "Proposer des challenges / gamification douce pour encourager le retour.",
    ],
    example:
      "Interface compte : « Tes animaux : Max, Nala. Prochain rappel : bilan éducatif dans 3 mois. Suggestions : atelier collectif chiots, article sur l’enrichissement du milieu. »",
  },
];

function setupTunnelParticulier() {
  const column = document.getElementById("funnelColumn");
  const detail = document.getElementById("funnelDetail");
  const summary = document.getElementById("tunnelSummaryList");
  if (!column || !detail) return;

  const icons = ["✨", "📍", "🔍", "📄", "🗓️", "✅", "🤝", "💌", "🎯"];
  let activeStepId = tunnelParticulierSteps[0]?.id;

  column.innerHTML = "";
  tunnelParticulierSteps.forEach((step, index) => {
    const el = document.createElement("button");
    el.type = "button";
    el.className = "funnel-step";
    el.dataset.stepId = step.id;
    el.style.setProperty("--step-shrink", `${index * 10}px`);
    el.innerHTML = `
      <div class="step-label">Étape ${step.order}/9</div>
      <div class="step-title"><span class="step-icon">${icons[index % icons.length]}</span>${step.title}</div>
    `;

    const activate = () => setActiveStep(step.id);
    el.addEventListener("click", activate);
    el.addEventListener("mouseover", activate);

    if (index === 0) {
      el.classList.add("funnel-step--active");
    }
    column.appendChild(el);
  });

  renderTunnelDetail(activeStepId, detail);
  renderTunnelSummary(summary);

  function setActiveStep(stepId) {
    if (!stepId || stepId === activeStepId) return;
    activeStepId = stepId;

    column.querySelectorAll(".funnel-step").forEach((stepEl) => {
      stepEl.classList.toggle(
        "funnel-step--active",
        stepEl.dataset.stepId === stepId
      );
    });
    renderTunnelDetail(stepId, detail);
  }
}

function renderTunnelDetail(stepId, container) {
  if (!container) return;
  const step = tunnelParticulierSteps.find((item) => item.id === stepId);
  if (!step) return;

  container.classList.remove("is-switching");
  // trigger reflow to restart animation
  // eslint-disable-next-line no-unused-expressions
  container.offsetHeight;
  container.classList.add("is-switching");

  const renderList = (title, items) => {
    if (!items || !items.length) return "";
    const listItems = items.map((item) => `<li>${item}</li>`).join("");
    return `
      <div class="detail-section">
        <h4>${title}</h4>
        <ul class="detail-list">${listItems}</ul>
      </div>
    `;
  };

  container.innerHTML = `
    <h3>${step.title}</h3>
    <p class="detail-subtitle">${step.shortDescription}</p>
    <div class="detail-columns">
      ${renderList("Contexte côté propriétaire", step.context)}
      ${renderList("Rôle de Planipets", step.role)}
      ${renderList("Messages & contenus clés", step.messages)}
      ${renderList("Indicateurs (KPI)", step.kpis)}
      ${renderList("Frictions & pistes d’amélioration", step.frictions)}
      ${renderList("Améliorations prévues", step.improvements)}
    </div>
    <div class="example-block">
      <strong>Exemple concret</strong>
      <p>${step.example}</p>
    </div>
  `;
}

function renderTunnelSummary(container) {
  if (!container) return;
  container.innerHTML = "";
  tunnelParticulierSteps.forEach((step) => {
    const card = document.createElement("article");
    card.className = "summary-card";
    card.innerHTML = `
      <div class="summary-step-label">Étape ${step.order}/9</div>
      <h3>${step.title}</h3>
      <p>${step.shortDescription}</p>
    `;
    container.appendChild(card);
  });
}
