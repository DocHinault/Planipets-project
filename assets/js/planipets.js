document.addEventListener("DOMContentLoaded", () => {
  setupNavMenus();
  setupTimeline();
  setupProFunnel();
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

const tunnelProSteps = [
  {
    id: "pro-step-1",
    order: 1,
    title: "Découverte & curiosité",
    shortDescription:
      "Le professionnel entend parler de Planipets pour la première fois, sans encore savoir si c’est pour lui.",
    context: [
      "Il voit passer une publication sur les réseaux sociaux, un mail, un salon, une recommandation d’un confrère, ou une référence depuis le site d’une mairie/association.",
      "Il sait qu’il a besoin de plus de visibilité, de mieux s’organiser, ou d’augmenter ses revenus, mais n’a pas encore de solution claire.",
    ],
    goal: [
      "Faire exister Planipets comme une option crédible et alignée avec ses valeurs, sans agressivité commerciale.",
      "Susciter suffisamment de curiosité pour qu’il clique ou demande plus d’informations.",
    ],
    messages: [
      "Tu consacres ton énergie au bien-être des animaux, Planipets t’aide à sécuriser tes revenus et ta sérénité.",
      "Une plateforme pensée pour les métiers animaliers, pas un outil générique.",
      "Tu n’es pas seul·e : d’autres pros construisent leur activité avec Planipets.",
    ],
    kpis: [
      "Nombre de pros exposés aux contenus de découverte (reach réseaux, salons, emailings).",
      "Clics vers le site Planipets ou vers une landing dédiée Pros.",
    ],
    risks: [
      "Le pro assimile Planipets à une simple plateforme de prise de rendez-vous ‘comme les autres’.",
      "Perception d’un énième outil numérique chronophage.",
    ],
    improvements: [
      "Multiplier les témoignages de pros satisfaits, en mettant en avant leurs résultats concrets.",
      "Adapter les messages par type de métier (éducateurs, toiletteurs, etc.).",
    ],
    example:
      "Post LinkedIn : « Éducateurs canins, comportementalistes, toiletteurs… et si votre plateforme de prise de rendez-vous vous aidait aussi à créer du revenu récurrent ? » avec un lien vers la page Pro.",
  },
  {
    id: "pro-step-2",
    order: 2,
    title: "Premier contact qualifié avec Planipets",
    shortDescription: "Le pro clique sur un lien et arrive sur une page Planipets orientée Pros.",
    context: [
      "Il se rend sur la landing Pros, une page média présentant Planipets ou un article qui lui parle directement.",
      "Il a quelques minutes à consacrer à la lecture, mais reste méfiant.",
    ],
    goal: [
      "Rendre la promesse Pro compréhensible en moins de 10 secondes.",
      "Donner envie de creuser davantage (scroller, télécharger une ressource, s’inscrire à un webinaire, réserver un appel).",
    ],
    messages: [
      "Planipets t’aide à stabiliser ton activité, pas à te remplacer.",
      "Tu restes maître de la relation avec tes clients, nous construisons avec toi.",
      "Objectif prioritaire : plus de visibilité, plus de rendez-vous qualifiés, plus de récurrence.",
    ],
    kpis: [
      "Taux de rebond sur la landing Pros.",
      "Clics sur les CTA (‘Découvrir les offres’, ‘Réserver un appel avec Nasser’, ‘Voir un cas concret’).",
    ],
    risks: [
      "Page trop chargée ou jargon incompréhensible pour un pro non technicien.",
      "Pro qui ne comprend pas en quoi Planipets est différent des autres plateformes.",
    ],
    improvements: [
      "Clarifier un bloc ‘En 30 secondes, ce que Planipets change pour toi’.",
      "Mettre un comparatif avant/après simple (sans dénigrer d’autres outils).",
    ],
    example:
      "Hero landing Pro : « Tu t’occupes des animaux, on s’occupe d’optimiser ton planning, tes revenus et tes recommandations. » + bouton ‘Parler à Nasser (30 min offertes)’.",
  },
  {
    id: "pro-step-3",
    order: 3,
    title: "Compréhension de la promesse & intérêt business",
    shortDescription: "Le pro commence à comprendre ce que Planipets va lui apporter concrètement.",
    context: [
      "Il lit les sections qui expliquent la boutique, la gamification, le média, les partenariats collectivités.",
      "Il se projette : ‘Est-ce que ça peut vraiment m’aider, moi, dans ma situation ?’",
    ],
    goal: [
      "Traduire la promesse en bénéfices financiers et organisationnels lisibles.",
      "Répondre implicitement aux objections classiques (commission, temps, complexité…).",
    ],
    messages: [
      "Planipets t’aide à remplir ton planning et à créer des revenus complémentaires via une boutique et des recommandations alignées avec ta pratique.",
      "Tu n’es pas un vendeur de plus : tu restes un pro du bien-être, nous t’apportons l’outil et la structure.",
      "Un accompagnement humain (Nasser et l’équipe) est là pour t’aider à t’approprier l’outil.",
    ],
    kpis: [
      "Temps passé sur la page Pro.",
      "Clics sur les sections expliquant la boutique, la gamification ou la charte bien-être.",
    ],
    risks: [
      "Promesse trop large qui donne l’impression de ‘trop beau pour être vrai’.",
      "Mélange de plusieurs messages sans hiérarchie (agenda, boutique, média…).",
    ],
    improvements: [
      "Hiérarchiser la lecture : 1) revenu & planning, 2) boutique, 3) média & légitimité.",
      "Ajouter des cas d’usage chiffrés (sans surpromesse).",
    ],
    example:
      "Bloc ‘Ce que tu gagnes’ : 3 chiffres simples (‘+X rendez-vous/mois’, ‘Y % de revenus en plus en moyenne sur la cohorte pilote’, ‘Z heures de charge mentale en moins’).",
  },
  {
    id: "pro-step-4",
    order: 4,
    title: "Rendez-vous découverte avec Nasser",
    shortDescription:
      "Le pro prend un créneau pour parler directement à Nasser et clarifier sa situation.",
    context: [
      "Il a cliqué sur un CTA de type ‘Réserver un appel’.",
      "Il est intéressé mais encore hésitant ; c’est une étape clé de conversion.",
    ],
    goal: [
      "Qualifier le pro : métier, situation actuelle, maturité numérique, objectifs.",
      "Valider s’il y a un bon fit mutuel (valeurs, type de relation souhaitée).",
    ],
    messages: [
      "L’appel n’est pas un ‘pitch’ agressif, mais un diagnostic de ta situation.",
      "On voit ensemble ce qui est réaliste pour toi sur les 6–12 prochains mois.",
      "Tu repars avec une vision plus claire, même si tu ne signes pas.",
    ],
    kpis: [
      "Nombre d’appels planifiés vs visiteurs Pro.",
      "Taux de no-show sur les appels.",
      "Taux de transformation appel → étape suivante (essai / offre).",
    ],
    risks: [
      "Pros non qualifiés qui font perdre du temps (pas le bon profil, pas prêt à s’engager, pas aligné avec la charte).",
      "No-show ou annulation de dernière minute.",
    ],
    improvements: [
      "Formulaire de pré-qualification rapide avant l’appel (souvent ‘Pourquoi tu t’intéresses à Planipets ?’).",
      "Rappel automatique + email qui insiste sur la valeur de l’appel.",
    ],
    example:
      "Mail de confirmation : « Pendant 30 minutes, on pose ta situation, tes objectifs et on regarde comment Planipets peut t’aider concrètement, sans engagement. »",
  },
  {
    id: "pro-step-5",
    order: 5,
    title: "Décision & engagement (offre choisie)",
    shortDescription:
      "Après le rendez-vous, le pro choisit (ou non) une formule d’accompagnement Planipets.",
    context: [
      "Nasser a proposé une ou deux options alignées avec la situation du pro (ex : accompagnement de base, accompagnement + boutique pilote, etc.).",
      "Le pro pèse le pour et le contre : coût, temps, risque, confiance.",
    ],
    goal: [
      "Simplifier la prise de décision avec une offre lisible, sans grille tarifaire illisible.",
      "Montrer clairement le ROI attendu et la logique de partenariat (et non d’exploitation).",
    ],
    messages: [
      "Tu peux commencer simple et monter en puissance au fur et à mesure.",
      "Nous sommes à tes côtés sur la durée : la réussite de Planipets dépend aussi de ta réussite.",
      "Tu gardes la main sur les tarifs de tes prestations ; nous apportons la structure autour.",
    ],
    kpis: [
      "Taux de signature après appel.",
      "Délai moyen entre l’appel et la décision.",
    ],
    risks: [
      "Pros qui bloquent sur le prix faute de visualiser clairement le retour sur investissement.",
      "Contrats ou conditions perçus comme flous ou trop complexes.",
    ],
    improvements: [
      "Documents récapitulant l’offre, les engagements mutuels, les exemples de trajectoires de pros.",
      "Cas pratiques adaptés au profil du pro (‘déjà bien rempli’, ‘en lancement’, ‘en reconversion’…).",
    ],
    example:
      "Document PDF ou page récap : ‘Pack Planipets Essentiel – pour consolider ton planning et tes revenus sur 6 mois’, avec 3 bullet points de résultats attendus.",
  },
  {
    id: "pro-step-6",
    order: 6,
    title: "Onboarding & configuration du compte Pro",
    shortDescription:
      "Le pro a dit oui ; il faut maintenant qu’il soit correctement installé dans l’écosystème Planipets.",
    context: [
      "Création ou vérification des accès, paramétrage de la fiche pro, planning, zones d’intervention, services, tarifs.",
      "Signature de la charte bien-être et acceptation des conditions.",
    ],
    goal: [
      "Rendre l’onboarding le plus simple possible pour ne pas perdre l’élan de la décision.",
      "Poser des bases propres : fiche claire, agenda cohérent, communication alignée.",
    ],
    messages: [
      "On t’accompagne pas à pas, tu n’es pas seul devant un formulaire.",
      "Quelques heures bien investies maintenant pour des mois plus sereins ensuite.",
      "Ta fiche reflète ta façon de travailler et ton identité professionnelle.",
    ],
    kpis: [
      "Temps moyen entre signature et fiche pro publiée.",
      "Taux de pros abandonnant avant la fin de l’onboarding.",
    ],
    risks: [
      "Onboarding perçu comme une montagne (trop d’infos à remplir, peur de mal faire).",
      "Pro perdant l’enthousiasme initial si rien n’est visible rapidement.",
    ],
    improvements: [
      "Guides pas à pas (checklist), tutoriels vidéo courts.",
      "Possibilité pour l’équipe Planipets d’aider à pré-remplir certaines sections.",
    ],
    example:
      "Checklist envoyée après signature : ‘1. Compléter ta fiche, 2. Configurer ton agenda, 3. Valider ta charte, 4. Fixer un point de suivi à 30 jours.’",
  },
  {
    id: "pro-step-7",
    order: 7,
    title: "Activation : premiers rendez-vous & premiers revenus",
    shortDescription:
      "Le pro commence à recevoir des rendez-vous via Planipets et à en voir l’impact sur son activité.",
    context: [
      "Des clients réservent via la plateforme, parfois combiné avec sa propre communication.",
      "Le pro découvre l’interface jour après jour.",
    ],
    goal: [
      "Arriver rapidement à un premier résultat visible (1er rendez-vous, 1er mois ‘différent’).",
      "Rendre concret le bénéfice de Planipets sur son planning et sa charge mentale.",
    ],
    messages: [
      "Tu peux suivre les rendez-vous et les retours clients depuis ton espace Pro.",
      "Nous sommes disponibles pour optimiser ton profil et tes pratiques si besoin.",
      "Objectif : que tu sentes vraiment la différence d’ici quelques semaines.",
    ],
    kpis: [
      "Délai entre fin d’onboarding et 1er rendez-vous généré.",
      "Nombre de rendez-vous Planipets sur les 30–60 premiers jours.",
    ],
    risks: [
      "Si les premiers résultats tardent, le pro peut douter et décrocher.",
      "Mauvaise compréhension de la responsabilité partagée (communication du pro vs apport Planipets).",
    ],
    improvements: [
      "Points de suivi proactifs à 30 et 60 jours.",
      "Plan d’actions simple si la courbe de rendez-vous ne décolle pas (ajustements fiche, zones, messages).",
    ],
    example:
      "Mail de suivi : « Tu as reçu X demandes via Planipets ce mois-ci. Voici 3 leviers concrets pour booster encore davantage. »",
  },
  {
    id: "pro-step-8",
    order: 8,
    title: "Montée en puissance : boutique, gamification & formation",
    shortDescription:
      "Une fois l’usage de base stabilisé, le pro peut accéder aux leviers avancés de Planipets.",
    context: [
      "Il utilise déjà l’agenda et la fiche pro, et a obtenu quelques résultats.",
      "On lui propose d’entrer dans le pilote boutique, d’activer la gamification et de rejoindre des modules de formation.",
    ],
    goal: [
      "Transformer Planipets en véritable moteur de développement : revenus complémentaires, visibilité, montée en compétence.",
      "Renforcer le sentiment d’appartenance à une communauté de pros qui se tirent vers le haut.",
    ],
    messages: [
      "Avec la boutique, tes recommandations deviennent une source de revenus complémentaires alignée avec ta pratique.",
      "Le système de niveaux & quêtes récompense ton engagement et la qualité de ton travail.",
      "Les formations te permettent de progresser sur le marketing, la relation client, le bien-être animal, etc.",
    ],
    kpis: [
      "Taux de pros activant la boutique.",
      "Revenus générés via les recommandations.",
      "Participation aux quêtes, lives, formations.",
    ],
    risks: [
      "Pro qui se sent submergé par trop de nouveautés d’un coup.",
      "Crainte d’être transformé en ‘vendeur’ ou de perdre en authenticité.",
    ],
    improvements: [
      "Parcours progressif : activer d’abord un seul levier (ex : boutique) puis le reste.",
      "Mettre en avant l’éthique : charte des recommandations, sélection produits, transparence des commissions.",
    ],
    example:
      "Interface Pro : onglet ‘Recommandations & Boutique’ avec un message : « Tu peux ajouter 2–3 produits qui correspondent vraiment à ta pratique, nous nous occupons du reste. »",
  },
  {
    id: "pro-step-9",
    order: 9,
    title: "Ambassadeur Planipets & co-construction",
    shortDescription: "Le pro est satisfait, fidèle, et devient un partenaire clé de Planipets.",
    context: [
      "Il a une activité stabilisée grâce à Planipets, participe aux événements, partage régulièrement des retours.",
      "Il est prêt à témoigner, recommander Planipets à d’autres pros, co-construire des features.",
    ],
    goal: [
      "Transformer ces pros en ambassadeurs visibles et reconnus.",
      "Les impliquer dans l’amélioration du produit, de la boutique et de la gamification.",
    ],
    messages: [
      "Tu fais partie des pros qui façonnent Planipets.",
      "Nous valorisons ton expertise auprès d’autres pros et du grand public.",
      "Ton retour influence directement la roadmap.",
    ],
    kpis: [
      "Nombre de pros ambassadeurs actifs.",
      "Nombre de recommandations de nouveaux pros via le parrainage.",
      "Participation à des interviews, contenus, événements.",
    ],
    risks: [
      "Ambassadeurs qui ne se sentent pas suffisamment reconnus ou écoutés.",
      "Charge disproportionnée sur quelques personnes.",
    ],
    improvements: [
      "Mettre en place un programme ambassadeur structuré (bénéfices, cadre, visibilité).",
      "Prévoir des temps réguliers d’échange (tables rondes, groupes de travail).",
    ],
    example:
      "Page média : portrait d’un pro ambassadeur expliquant comment Planipets a transformé son activité, avec une citation forte et des chiffres clés.",
  },
];

function setupProFunnel() {
  const column = document.getElementById("funnelProColumn");
  const detailCard = document.getElementById("funnelProDetail");

  if (!column || !detailCard) return;

  const detailElements = {
    title: document.getElementById("funnelProDetailTitle"),
    subtitle: document.getElementById("funnelProDetailSubtitle"),
    context: document.getElementById("funnelProContext"),
    goal: document.getElementById("funnelProGoal"),
    messages: document.getElementById("funnelProMessages"),
    kpis: document.getElementById("funnelProKpis"),
    risks: document.getElementById("funnelProRisks"),
    example: document.getElementById("funnelProExample"),
  };

  let activeStepId = tunnelProSteps[0]?.id;

  tunnelProSteps.forEach((step) => {
    const stepEl = document.createElement("div");
    stepEl.className = "funnel-step funnel-step--pro";
    stepEl.dataset.stepId = step.id;
    const scale = Math.max(0.7, 1 - (step.order - 1) * 0.04);
    stepEl.style.setProperty("--funnel-scale", scale.toString());
    stepEl.innerHTML = `
      <div class="funnel-step-order">Étape ${step.order}/9</div>
      <div class="funnel-step-title">${step.title}</div>
    `;

    stepEl.addEventListener("mouseover", () => setActiveStep(step.id));
    stepEl.addEventListener("click", () => setActiveStep(step.id));

    column.appendChild(stepEl);
  });

  function fillList(listEl, items) {
    if (!listEl) return;
    listEl.innerHTML = "";
    (items || []).forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      listEl.appendChild(li);
    });
  }

  function renderProFunnelDetail(stepId) {
    const step = tunnelProSteps.find((s) => s.id === stepId);
    if (!step) return;

    detailCard.classList.remove("detail-fade-in");
    void detailCard.offsetWidth;
    detailCard.classList.add("detail-fade-in");

    if (detailElements.title) detailElements.title.textContent = step.title;
    if (detailElements.subtitle)
      detailElements.subtitle.textContent = step.shortDescription;

    fillList(detailElements.context, step.context);
    fillList(detailElements.goal, step.goal);
    fillList(detailElements.messages, step.messages);
    fillList(detailElements.kpis, step.kpis);
    fillList(detailElements.risks, [...(step.risks || []), ...(step.improvements || [])]);

    if (detailElements.example) detailElements.example.textContent = step.example;
  }

  function setActiveStep(stepId) {
    if (!stepId || stepId === activeStepId) return;
    activeStepId = stepId;
    column.querySelectorAll(".funnel-step").forEach((el) => {
      el.classList.toggle("funnel-step--active", el.dataset.stepId === stepId);
    });
    renderProFunnelDetail(stepId);
  }

  const firstStep = column.querySelector(`[data-step-id="${activeStepId}"]`);
  if (firstStep) firstStep.classList.add("funnel-step--active");
  if (activeStepId) renderProFunnelDetail(activeStepId);
}
