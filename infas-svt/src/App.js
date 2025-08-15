import React, { useState, useEffect } from "react";

export default function RevisionINFAS() {
  const themes = [
    {
      id: 1,
      title: "THÈME 1 — Le fonctionnement du cœur",
      summary: [
        "L'automatisme cardiaque : capacité du cœur à déclencher sa propre contraction grâce au tissu nodal. Le nœud sinusal (Keith et Flack) est le pacemaker naturel (~70 bpm). L'influx passe par les oreillettes, le nœud auriculo‑ventriculaire (Aschoff‑Tawara), le faisceau de His puis le réseau de Purkinje.",
        "Le cycle (ou révolution) cardiaque dure environ 0,8 s et comporte : systole auriculaire (0,1 s), systole ventriculaire (0,3 s) et diastole générale (0,4 s). Les bruits cardiaques correspondent à la fermeture des valvules (1er bruit = fermeture auriculo‑ventriculaire, 2e bruit = fermeture sigmoïdes).",
        "Adaptation : le débit cardiaque Qc = Fc × Ves (fréquence × volume d'éjection systolique). Régulation nerveuse : nerf vague (parasympathique) diminue Fc ; système sympathique l'augmente. Régulation hormonale : adrénaline augmente Fc et force de contraction."
      ],
      questions: [
        { q: "Quel est le pacemaker naturel du cœur ?", options: ["Le faisceau de His", "Le nœud auriculo‑ventriculaire", "Le nœud sinusal", "Le réseau de Purkinje"], a: 2, exp: "Le nœud sinusal est le centre rythmogène qui impose la fréquence cardiaque." },
        { q: "Quel trajet suit l'influx électrique pour atteindre les ventricules ?", options: ["Nœud sinusal → Purkinje → faisceau de His → nœud auriculo‑ventriculaire", "Nœud sinusal → oreillettes → nœud auriculo‑ventriculaire → faisceau de His → Purkinje", "Faisceau de His → nœud sinusal → Purkinje", "Purkinje → nœud auriculo‑ventriculaire → nœud sinusal"], a: 1, exp: "L'influx naît au nœud sinusal, traverse les oreillettes, passe par le nœud AV, le faisceau de His puis le réseau de Purkinje." },
        { q: "Durée moyenne d'un cycle cardiaque (révolution) ?", options: ["0,4 s", "0,8 s", "1,2 s", "0,2 s"], a: 1, exp: "La révolution cardiaque dure environ 0,8 seconde." },
        { q: "Pendant quelle phase la fermeture des valvules auriculo‑ventriculaires a‑t‑elle lieu ?", options: ["Diastole générale", "Systole auriculaire", "Début de la systole ventriculaire", "Fin de la systole ventriculaire"], a: 2, exp: "La fermeture survient au début de la systole ventriculaire, quand la pression ventriculaire augmente." },
        { q: "Quel bruit cardiaque correspond à la fermeture des valvules sigmoïdes ?", options: ["1er bruit (TOUM)", "2ème bruit (TA)", "Bruit respiratoire", "Bruit d'auscultation veineuse"], a: 1, exp: "La fermeture des sigmoïdes produit le 2e bruit du cœur." },
        { q: "Formule du débit cardiaque (Qc) :", options: ["Qc = Ves / Fc", "Qc = Fc × Ves", "Qc = Fc + Ves", "Qc = Fc - Ves"], a: 1, exp: "Qc est le produit de la fréquence cardiaque par le volume d'éjection systolique." },
        { q: "Effet du nerf vague sur le cœur :", options: ["Cardioaccélérateur (augmente Fc)", "Cardiomodérateur (diminue Fc)", "N'a aucun effet", "Provoque fibrillation"], a: 1, exp: "Le nerf vague (parasympathique) diminue la fréquence cardiaque." },
        { q: "Quelle structure ralentit légèrement l'influx pour permettre le remplissage ventriculaire ?", options: ["Nœud sinusal", "Faisceau de His", "Nœud auriculo‑ventriculaire", "Réseau de Purkinje"], a: 2, exp: "Le nœud auriculo‑ventriculaire freine l'influx pour laisser le temps de remplissage des ventricules." },
        { q: "L'adrénaline agit principalement en :", options: ["Diminuant la force de contraction", "Augmentant la fréquence et la force de contraction", "Bloquant les valvules", "Réduisant le volume d'éjection"], a: 1, exp: "L'adrénaline augmente fréquence et force de contraction, préparant l'organisme à l'effort." },
        { q: "Où se trouve le nœud sinusal ?", options: ["Dans la paroi de l'oreillette droite", "Dans le ventricule gauche", "Au niveau du péricarde", "Dans le faisceau de His"], a: 0, exp: "Le nœud sinusal est situé dans la paroi de l'oreillette droite." },
        { q: "Le réseau de Purkinje innerve :", options: ["Les oreillettes", "Les parois des ventricules", "Les valves cardiaques", "Le nœud sinusal"], a: 1, exp: "Le réseau de Purkinje distribue l'influx aux parois ventriculaires pour déclencher la contraction." },
        { q: "Quel est l'effet principal du système sympathique sur le cœur ?", options: ["Diminuer la fréquence cardiaque", "Augmenter la fréquence et la force de contraction", "Arrêter la contraction", "Rendre les valvules plus perméables"], a: 1, exp: "Le système sympathique augmente fréquence et force de contraction." },
        { q: "La systole auriculaire correspond à :", options: ["La contraction des ventricules", "La contraction des oreillettes", "La relaxation générale", "L'éjection dans l'aorte uniquement"], a: 1, exp: "La systole auriculaire est la phase où les oreillettes se contractent et terminent le remplissage ventriculaire." },
        { q: "Le volume d'éjection systolique (Ves) est :", options: ["Le volume total de sang dans le cœur", "Le volume de sang éjecté par battement", "La fréquence cardiaque", "Le volume filtré par le rein"], a: 1, exp: "Le Ves est le volume de sang éjecté par chaque ventricule à chaque battement." },
        { q: "Pourquoi le nœud sinusal impose‑t‑il sa fréquence aux autres centres ?", options: ["Parce qu'il est physiquement plus grand", "Parce qu'il a la fréquence intrinsèque la plus élevée", "Parce qu'il produit des hormones", "Parce qu'il est connecté au cerveau"], a: 1, exp: "Le nœud sinusal a la fréquence intrinsèque la plus élevée et impose le rythme au reste du cœur." }
      ]
    },
    {
      id: 2,
      title: "THÈME 2 — Le fonctionnement du rein",
      summary: [
        "Le néphron est l'unité fonctionnelle du rein, chaque rein contient environ 1 million de néphrons. Il comprend le corpuscule de Malpighi (glomérule + capsule de Bowman) et le tube urinaire (TCP, anse de Henlé, TCD, tube collecteur).",
        "Rôles : épuration sanguine (élimination urée, acide urique, créatinine), maintien de l'homéostasie (osmorégulation, équilibre ionique, pH), et fonction endocrine (rénine, EPO, calcitriol).",
        "Formation de l'urine en 3 étapes : filtration glomérulaire (urine primitive ~180 L/j), réabsorption tubulaire (récupération de l'eau, glucose, ions) et sécrétion tubulaire (élimination active d'ions H+, K+, déchets). L'ADH régule la réabsorption d'eau au niveau du TCD et du tube collecteur. Le volume d'urine définitive est d'environ 1,5 L/jour."
      ],
      questions: [
        { q: "Quelle est l'unité fonctionnelle du rein ?", options: ["Le glomérule", "La capsule de Bowman", "Le néphron", "Le tube collecteur"], a: 2, exp: "Le néphron est l'unité structurale et fonctionnelle du rein." },
        { q: "Quelle étape initiale forme l'urine primitive ?", options: ["La réabsorption tubulaire", "La filtration glomérulaire", "La sécrétion tubulaire", "L'excrétion"], a: 1, exp: "La filtration glomérulaire produit l'urine primitive qui est ensuite modifiée." },
        { q: "Approximation du volume d'urine primitive produit par jour ?", options: ["1,5 L", "10 L", "180 L", "0,5 L"], a: 2, exp: "La filtration glomérulaire génère environ 180 L d'urine primitive par jour." },
        { q: "Quel tube est majoritairement responsable de la réabsorption du glucose ?", options: ["Anse de Henlé", "Tube contourné proximal (TCP)", "Tube contourné distal (TCD)", "Tube collecteur"], a: 1, exp: "Le TCP réabsorbe massivement le glucose et la majeure partie de l'eau et des ions." },
        { q: "L'ADH agit principalement pour :", options: ["Augmenter la réabsorption d'eau au TCD et tube collecteur", "Augmenter la filtration glomérulaire", "Sécréter l'urée", "Bloquer la réabsorption du glucose"], a: 0, exp: "L'ADH rend les parois plus perméables à l'eau, favorisant la concentration de l'urine." },
        { q: "Fonction endocrine du rein comprend :", options: ["Insuline", "Rénine, EPO, calcitriol", "Adrénaline", "Hormone de croissance"], a: 1, exp: "Le rein produit rénine, érythropoïétine (EPO) et calcitriol." },
        { q: "Quel mécanisme élimine activement H+ et K+ vers l'urine ?", options: ["Filtration glomérulaire", "Réabsorption tubulaire", "Sécrétion tubulaire", "Diffusion passive"], a: 2, exp: "La sécrétion tubulaire permet d'éliminer activement certains ions et déchets." },
        { q: "Quel constituant ne passe généralement pas la barrière de filtration glomérulaire ?", options: ["Eau", "Ions sodium", "Glucose", "Protéines plasmatiques"], a: 3, exp: "Les protéines et cellules sanguines sont retenues lors de la filtration glomérulaire." },
        { q: "Le rein participe à la régulation du pH sanguin via :", options: ["Filtration seule", "Sécrétion tubulaire et réabsorption", "Production d'adrénaline", "Contrôle nerveux direct"], a: 1, exp: "La sécrétion d'ions H+ et la réabsorption de bicarbonates aident à réguler le pH." },
        { q: "Quel est le volume approximatif d'urine définitive par jour ?", options: ["180 L", "20 L", "1,5 L", "0,1 L"], a: 2, exp: "Environ 1,5 L d'urine définitive est produit par jour chez un sujet sain." },
        { q: "Le corpuscule de Malpighi comprend :", options: ["La capsule de Bowman et le glomérule", "L'anse de Henlé et le TCP", "Le TCD et le tube collecteur", "Le bassinet"], a: 0, exp: "Le corpuscule est le glomérule entouré de la capsule de Bowman." },
        { q: "La filtration glomérulaire est principalement due à :", options: ["Action active des néphrons", "Pression sanguine élevée dans le glomérule", "Présence d'ADH", "Sécrétion hormonale"], a: 1, exp: "La pression dans les capillaires glomérulaires force le passage du plasma vers la capsule." },
        { q: "Quel rôle joue la réabsorption tubulaire ?", options: ["Éliminer les déchets uniquement", "Récupérer les substances utiles et l'eau", "Augmenter l'urine primitive", "Produire des hormones"], a: 1, exp: "La réabsorption récupère eau, glucose et ions utiles pour le sang." },
        { q: "Où se jette le tube collecteur ?", options: ["Dans l'uretère", "Dans le bassinet (pyélon)", "Dans la vessie directement", "Dans la capsule de Bowman"], a: 1, exp: "Les tubes collecteurs drainent l'urine des néphrons vers le bassinet du rein." },
        { q: "La réabsorption d'environ 99% de l'eau se produit principalement :", options: ["Au TCD", "Dans le TCP et l'anse de Henlé", "Dans la vessie", "Dans le glomérule"], a: 1, exp: "La majeure partie de l'eau est réabsorbée dans le TCP et l'anse de Henlé." }
      ]
    },
    {
      id: 3,
      title: "THÈME 3 — La communication dans l'organisme (tissu nerveux, synapse, muscle)",
      summary: [
        "Propriétés du tissu nerveux : le nerf est formé d'axones groupés en faisceaux (épinèvre, périnèvre, endonèvre). Fibres myélinisées (conduction plus rapide, conduction saltatoire) ou amyéliniques.",
        "Excitabilité : seuil de stimulation (rhéobase), loi du tout ou rien (s'applique à la fibre). Conductibilité : propagation par dépolarisation; vitesse dépend de la myéline et du diamètre.",
        "Synapse chimique : bouton pré‑synaptique (vésicules), fente synaptique, élément post‑synaptique (récepteurs). Entrée de Ca2+ déclenche exocytose des neurotransmetteurs ; PPS excitateur ou inhibiteur ; inactivation rapide des neurotransmetteurs.",
        "Muscle strié squelettique : organisation (muscle > faisceau > fibre > myofibrille > sarcomère). Contraction liée au glissement actine‑myosine ; phénomènes : secousse, sommation, tétanos (imparfait et parfait). L'ATP alimente la contraction via plusieurs voies énergétiques."
      ],
      questions: [
        { q: "La conduction saltatoire se retrouve principalement dans :", options: ["Les fibres amyéliniques", "Les fibres myélinisées", "Les synapses chimiques", "Les nerfs entiers sans myéline"], a: 1, exp: "La myéline permet à l'influx de sauter d'un nœud de Ranvier à l'autre, accélérant la conduction." },
        { q: "La loi du 'tout ou rien' s'applique :", options: ["Au nerf entier", "À une fibre isolée", "À la synapse", "À l'organe"], a: 1, exp: "Elle s'applique à une fibre : soit la réponse maximale, soit pas de réponse si le seuil n'est pas atteint." },
        { q: "Rôle des ions Ca2+ dans la synapse :", options: ["Dégrader le neurotransmetteur", "Provoquer la libération des neurotransmetteurs par exocytose", "Se lier aux récepteurs post‑synaptiques", "Générer directement le potentiel post‑synaptique"], a: 1, exp: "L'entrée de Ca2+ déclenche la fusion des vésicules synaptiques et la libération des neurotransmetteurs." },
        { q: "Lequel est un élément de la synapse chimique ?", options: ["Nœud de Ranvier", "Fente synaptique", "Sarcomère", "Capsule de Bowman"], a: 1, exp: "La fente synaptique sépare l'élément pré‑ et post‑synaptique." },
        { q: "Le PPS excitateur correspond à :", options: ["Hyperpolarisation post‑synaptique", "Dépolarisation post‑synaptique", "Absence d'effet", "Destruction des vésicules"], a: 1, exp: "PPSE rapproche la membrane du seuil d'excitation (dépolarisation)."},
        { q: "Le sarcomère est :", options: ["Une vésicule synaptique", "L'unité contractile du muscle", "Une partie du rein", "Un neurone"], a: 1, exp: "Le sarcomère est l'unité fonctionnelle de contraction dans la myofibrille." },
        { q: "Quel mécanisme produit une contraction maximale soutenue (tétanos parfait) ?", options: ["Stimulations espacées", "Sommation faible", "Stimulations à très haute fréquence", "Repos complet"], a: 2, exp: "Le tétanos parfait résulte de stimulations si rapprochées que les secousses fusionnent complètement." },
        { q: "Parmi ces voies, laquelle régénère l'ATP rapidement lors d'un effort court ?", options: ["Respiration aérobie", "Fermentation lactique", "Système phosphocréatine (créatine phosphate)", "Synthèse protéique"], a: 2, exp: "La phosphocréatine fournit une régénération très rapide d'ATP pour les efforts courts." },
        { q: "Quel facteur augmente la vitesse de conduction le long d'un axone ?", options: ["Diminution du diamètre", "Absence de myéline", "Présence de myéline et grand diamètre", "Plus grande distance entre nœuds"], a: 2, exp: "La myéline et un plus grand diamètre accélèrent la conduction." },
        { q: "La sommation des secousses musculaires signifie :", options: ["Deux secousses se combinent si rapprochées dans le temps", "La contraction est toujours plus faible", "Les secousses s'annulent", "Le muscle se détend entre chaque stimulation"], a: 0, exp: "Si les stimulations arrivent rapprochées, la seconde s'additionne à la première, augmentant la force." },
        { q: "Qu'est‑ce qui caractérise une fibre nerveuse myélinisée ?", options: ["Conduction lente et continue", "Conduction saltatoire", "Absence de nœuds de Ranvier", "Pas d'axone"], a: 1, exp: "La conduction saltatoire est caractéristique des fibres myélinisées." },
        { q: "La dépolarisation se propage le long de l'axone par :", options: ["Diffusion d'ATP", "Propagation locale de changements de potentiel membranaire (proche en proche)", "Transport actif de vésicules", "Flux sanguin"], a: 1, exp: "La dépolarisation se transmet par propagation locale du potentiel d'action le long de l'axone." },
        { q: "Quel élément structurel délimite un sarcomère ?", options: ["Nœud de Ranvier", "Stries Z", "Bandes A", "Capsule de Bowman"], a: 1, exp: "Le sarcomère est délimité par deux stries Z." },
        { q: "La myéline est principalement constituée de :", options: ["Protéines contractiles", "Lipides (isolation) et protéines", "Glucose", "ADN"], a: 1, exp: "La gaine de myéline est lipidique, ce qui isole l'axone et accélère la conduction." },
        { q: "Une fibre amyélinique conduit l'influx :", options: ["Plus rapidement que myélinisée", "Plus lentement (conduction continue)", "Par tétanos", "Sans potentiel d'action"], a: 1, exp: "Sans myéline la conduction est continue et plus lente." }
      ]
    },
    {
      id: 4,
      title: "THÈME 4 — Reproduction humaine et génétique",
      summary: [
        "Reproduction humaine : trajet des spermatozoïdes (vagin → utérus → trompes), capacitation, fécondation dans le tiers supérieur de la trompe, segmentation (morula → blastocyste) et nidation (~7 j).",
        "Cycle menstruel (~28 j) : cycle ovarien (phase folliculaire, ovulation J14, phase lutéale) et cycle utérin (menstruation, phase proliférative, phase sécrétoire). Régulation par hypothalamus (GnRH), hypophyse (FSH, LH) et ovaires (œstrogènes, progestérone).",
        "Contrôle de la reproduction : contraception hormonale (bloque ovulation par rétrocontrôle négatif), méthodes barrières, DIU; PMA : insémination artificielle, FIV.",
        "Génétique : transmissions autosomales récessive/dominante, héritage lié à l'X, système ABO (IA, IB, i) et rhésus (D/d). Exemples et règles de compatibilité sanguine."
      ],
      questions: [
        { q: "Où a lieu normalement la fécondation chez la femme ?", options: ["Dans l'utérus", "Dans l'ovaire", "Dans le vagin", "Dans la trompe de Fallope"], a: 3, exp: "La fécondation a généralement lieu dans le tiers supérieur de la trompe de Fallope." },
        { q: "Quel événement hormonal déclenche l'ovulation ?", options: ["Chute de progestérone", "Pic de FSH", "Pic de LH", "Augmentation lente des œstrogènes"], a: 2, exp: "Le pic de LH déclenche la rupture du follicule et l'ovulation." },
        { q: "La pilule combinée (œstroprogestative) agit principalement en :", options: ["Détruisant les spermatozoïdes", "Bloquant la nidation", "Empêchant la rencontre des gamètes", "Bloquant l'ovulation par rétrocontrôle négatif"], a: 3, exp: "Elle maintient le rétrocontrôle négatif sur l'hypothalamo‑hypophyse pour empêcher le développement folliculaire et le pic de LH." },
        { q: "Un caractère autosomal récessif nécessite quel génotype pour être exprimé ?", options: ["A/A", "A/a", "a/a", "Impossible à savoir"], a: 2, exp: "L'individu malade est homozygote récessif [a/a]." },
        { q: "Dans l'hérédité liée à l'X récessive, un homme porteur (XaY) :", options: ["Peut être porteur sans symptôme", "Est généralement malade s'il porte l'allèle mutant", "Ne transmet jamais à ses filles", "Transmet toujours à ses fils"], a: 1, exp: "Un homme portant l'allèle mutant sur son X exprimera souvent la maladie car il n'a qu'un seul X." },
        { q: "Le système ABO illustre :", options: ["Dominance simple", "Codominance et polyallélie", "Hérédité liée à l'sexe", "Mutation acquise"], a: 1, exp: "Le système ABO est un exemple de polyallélie (IA, IB, i) et de codominance entre IA et IB." },
        { q: "Quel groupe sanguin est receveur universel (ne possède pas d'anticorps) ?", options: ["Groupe O", "Groupe A", "Groupe B", "Groupe AB"], a: 3, exp: "Le groupe AB possède à la surface A et B et ne possède pas d'anticorps anti‑A ou anti‑B, donc receveur universel." },
        { q: "Quel risque pour une mère Rh- portant un fœtus Rh+ ?", options: ["Aucun risque", "Risque d'hémolyse fœtale lors d'une deuxième grossesse si sensibilisation", "La mère devient automatiquement Rh+", "Le fœtus devient O"], a: 1, exp: "La mère peut développer des anticorps anti‑D après exposition et attaquer un futur fœtus Rh+." },
        { q: "La capacitation des spermatozoïdes correspond à :", options: ["La mort des spermatozoïdes", "Des modifications biochimiques les rendant aptes à féconder", "La fécondation elle‑même", "La nidation"], a: 1, exp: "La capacitation est une série de modifications qui permettent au spermatozoïde de pénétrer l'ovocyte." },
        { q: "Le blastocyste s'implante dans l'endomètre environ :", options: ["1 jour après la fécondation", "7 jours après la fécondation", "1 mois après la fécondation", "Immédiatement"], a: 1, exp: "La nidation a lieu vers le 7e jour après la fécondation." },
        { q: "En génétique, IA et IB sont :", options: ["Complètement dominants sur i et codominants entre eux", "Récessifs sur i", "Identiques", "Mutuellement exclusifs"], a: 0, exp: "IA et IB sont chacun dominants sur i et codominants l'un par rapport à l'autre." },
        { q: "Lorsqu'une maladie autosomale dominante est présente :", options: ["Elle saute des générations", "Elle apparaît à chaque génération et un parent atteint transmet souvent la maladie", "Elle ne touche que les hommes", "Elle est toujours liée à l'X"], a: 1, exp: "Une anomalie autosomale dominante se manifeste souvent à chaque génération." },
        { q: "Quel organe produit la GnRH ?", options: ["L'hypophyse", "Les ovaires", "L'hypothalamus", "La thyroïde"], a: 2, exp: "La GnRH est sécrétée par l'hypothalamus et stimule l'hypophyse." },
        { q: "Quel est le rôle principal de la progestérone pendant la phase sécrétoire ?", options: ["Construire la couche superficielle de l'endomètre (menstruation)", "Enrichir l'endomètre en vaisseaux et glandes pour la nidation", "Déclencher l'ovulation", "Produire des spermatozoïdes"], a: 1, exp: "La progestérone rend l'endomètre apte à la nidation (phase sécrétoire)." },
        { q: "Une femme du groupe A (phénotype) et un homme du groupe B peuvent avoir un enfant O ; quels sont leurs génotypes probables ?", options: ["IAIA et IBIB", "IAi et IBi", "IAIA et IBi", "IAi et IBIB"], a: 1, exp: "Pour qu'un enfant soit ii (groupe O), chaque parent doit transmettre un i : parents probables IAi et IBi." }
      ]
    }
  ];

  const finalExam = [
    { q: "Quel est le pacemaker naturel du cœur ?", options: ["Le faisceau de His", "Le nœud auriculo‑ventriculaire", "Le nœud sinusal", "Le réseau de Purkinje"], a: 2 },
    { q: "Formule du débit cardiaque :", options: ["Qc = Ves / Fc", "Qc = Fc × Ves", "Qc = Fc + Ves", "Qc = Ves - Fc"], a: 1 },
    { q: "Phase où les valvules sigmoïdes sont fermées :", options: ["Systole ventriculaire", "Systole auriculaire", "Diastole générale", "Contraction isométrique"], a: 2 },
    { q: "Quel organe produit l'érythropoïétine (EPO) ?", options: ["Le foie", "Le rein", "La moelle osseuse", "La rate"], a: 1 },
    { q: "Que contient l'urine primitive mais pas l'urine définitive chez un sujet sain ?", options: ["Eau", "Glucose", "Ions Na+", "Urée"], a: 1 },
    { q: "Quel segment tubulaire réabsorbe massivement le glucose ?", options: ["TCP", "Anse de Henlé", "TCD", "Tube collecteur"], a: 0 },
    { q: "Quel neurotransmetteur est libéré par exocytose déclenchée par Ca2+ ?", options: ["Protéines contractiles", "Neurotransmetteurs (ex: acétylcholine)", "ADN", "Glucose"], a: 1 },
    { q: "La conduction saltatoire est caractéristique de :", options: ["Fibres amyéliniques", "Fibres myélinisées", "Synapses chimiques", "Sarcomères"], a: 1 },
    { q: "L'unité contractile du muscle est :", options: ["La myofibrille", "Le sarcomère", "La fibre musculaire", "La bande A"], a: 1 },
    { q: "Où se déroule généralement la fécondation ?", options: ["Dans l'utérus", "Dans la trompe de Fallope", "Dans l'ovaire", "Dans le vagin"], a: 1 },
    { q: "Quel pic hormonal déclenche directement l'ovulation ?", options: ["Pic de FSH", "Pic de LH", "Pic de prolactine", "Chute de progestérone"], a: 1 },
    { q: "Le système ABO est un exemple de :", options: ["Polyallélie et codominance", "Dominance simple", "Hérédité liée au sexe", "Hérédité mitochondriale"], a: 0 },
    { q: "Quel est le rôle principal de la GnRH ?", options: ["Stimuler l'hypophyse pour sécréter FSH et LH", "Produire des ovocytes", "Contracter l'utérus", "Stimuler la synthèse d'ADN"], a: 0 },
    { q: "Quel composant est normalement retenu par la barrière de filtration glomérulaire ?", options: ["Glucose", "Protéines plasmatiques", "Ions", "Eau"], a: 1 },
    { q: "La réabsorption d'eau sous contrôle hormonal est principalement effectuée grâce à :", options: ["ADH", "Adrénaline", "Insuline", "PTH"], a: 0 },
    { q: "Quel nœud freine légèrement l'influx électrique cardiaque ?", options: ["Nœud sinusal", "Nœud auriculo‑ventriculaire", "Faisceau de His", "Réseau de Purkinje"], a: 1 },
    { q: "La sommation des secousses augmente :", options: ["La fréquence cardiaque", "La force de contraction musculaire", "La filtration glomérulaire", "La production d'hormones"], a: 1 },
    { q: "Quel est le rôle de la rénine ?", options: ["Régulation de la pression artérielle (système rénine‑angiotensine)", "Production d'urine", "Production de globules rouges", "Synthèse de protéines"], a: 0 },
    { q: "Qu'est‑ce que la capacitation ?", options: ["Modification des ovocytes", "Modifications biochimiques des spermatozoïdes les rendant aptes à féconder", "Fusion du blastocyste", "Sécrétion d'anticorps"], a: 1 },
    { q: "Un homme hémizygote pour un gène récessif lié à l'X exprime souvent la maladie parce que :", options: ["Il a deux chromosomes X", "Il n'a qu'un seul X, donc l'allèle mutant s'exprime", "Il est toujours porteur sain", "Le gène se transmet par la mère seulement"], a: 1 },
    { q: "Quel élément déclenche la libération des neurotransmetteurs au niveau présynaptique ?", options: ["Na+ entrant", "K+ sortant", "Ca2+ entrant", "Cl- entrant"], a: 2 },
    { q: "La phase lutéale se situe approximativement entre :", options: ["J1‑J5", "J5‑J14", "J14‑J28", "J28‑J35"], a: 2 },
    { q: "Quel est le rôle du réseau de Purkinje ?", options: ["Ralentir l'influx", "Propager rapidement l'influx aux parois ventriculaires", "Produire hormones cardiaques", "Filtrer le sang"], a: 1 },
    { q: "Quel est le principal produit azoté éliminé par le rein ?", options: ["Glucose", "Urée", "Oxygène", "Adrénaline"], a: 1 },
    { q: "La fermeture des valvules auriculo‑ventriculaires produit :", options: ["Le 2ème bruit", "Le 1er bruit", "Un bruit respiratoire", "Un bruit hépatique"], a: 1 },
    { q: "Quel groupe sanguin est donneur universel ?", options: ["AB", "A", "B", "O"], a: 3 },
    { q: "La sécrétion tubulaire permet principalement :", options: ["Filtrer le plasma", "Ajouter activement certaines substances à l'urine", "Produire rénine", "Réguler la tension artérielle directement"], a: 1 },
    { q: "Le tétanos parfait correspond à :", options: ["Fusion complète des secousses en une contraction soutenue maximale", "Contraction isolée unique", "Relâchement complet entre secousses", "Contraction thermique"], a: 0 },
    { q: "Quel test est demandé pour valider l'examen final (score requis) ?", options: ["10/15", "15/15", "25/30", "20/30"], a: 2 }
  ];

  const [currentThemeIndex, setCurrentThemeIndex] = useState(0);
  const [unlocked, setUnlocked] = useState([]);
  const [quizState, setQuizState] = useState(null);
  const [finalState, setFinalState] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    setUnlocked(themes.map((t, i) => i === 0));
  }, []);

  function startQuiz(theme) {
    setQuizState({ themeId: theme.id, answers: Array(theme.questions.length).fill(null), finished: false, score: null });
    setMessage("");
  }

  function answerQuestion(i, choiceIndex) {
    setQuizState((q) => {
      const next = { ...q };
      next.answers = [...next.answers];
      next.answers[i] = choiceIndex;
      return next;
    });
  }

  function submitQuiz(theme) {
    if (!quizState) return;
    const answers = quizState.answers;
    const correct = themes.find((t) => t.id === theme.id).questions.map((qq) => qq.a);
    let score = 0;
    for (let i = 0; i < correct.length; i++) if (answers[i] === correct[i]) score++;
    const passed = score >= 10;
    setQuizState({ ...quizState, finished: true, score, passed });

    if (passed) {
      setUnlocked((u) => {
        const copy = [...u];
        const idx = themes.findIndex((t) => t.id === theme.id);
        if (idx + 1 < themes.length) copy[idx + 1] = true;
        return copy;
      });
      setMessage(`Thème validé (${score}/${theme.questions.length}). Correction ci‑dessous.`);
    } else {
      setMessage(`Thème non validé (${score}/${theme.questions.length}). Revois la correction puis réessaie.`);
    }
  }

  function renderCorrection(theme) {
    if (!quizState || !quizState.finished || quizState.themeId !== theme.id) return null;
    return (
      <div className="mt-4">
        <h4 className="font-semibold">Corrections détaillées</h4>
        <ol className="list-decimal pl-5 mt-2">
          {theme.questions.map((qq, i) => (
            <li key={i} className="mb-2">
              <div className="font-medium">Q{i + 1}: {qq.q}</div>
              <div>Ta réponse : {quizState.answers[i] == null ? "—" : qq.options[quizState.answers[i]]}</div>
              <div>Réponse correcte : {qq.options[qq.a]}</div>
              <div className="text-sm text-gray-700">Explication : {qq.exp}</div>
            </li>
          ))}
        </ol>
      </div>
    );
  }

  function startFinal() {
    setFinalState({ answers: Array(finalExam.length).fill(null), finished: false, score: null });
    setMessage("");
  }

  function answerFinal(i, choiceIndex) {
    setFinalState((f) => {
      const next = { ...f };
      next.answers = [...next.answers];
      next.answers[i] = choiceIndex;
      return next;
    });
  }

  function submitFinal() {
    if (!finalState) return;
    const answers = finalState.answers;
    let score = 0;
    for (let i = 0; i < finalExam.length; i++) if (answers[i] === finalExam[i].a) score++;
    const passed = score >= 25;
    setFinalState({ ...finalState, finished: true, score, passed });
    if (passed) setMessage(`Félicitations ! Évaluation validée (${score}/${finalExam.length}). Bravo pour ton travail !`);
    else setMessage(`Évaluation non validée (${score}/${finalExam.length}). Revois les thèmes et réessaie.`);
  }

  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="max-w-5xl mx-auto bg-white shadow rounded-lg p-6">
        <header className="mb-6">
          <h1 className="text-2xl font-extrabold">Application de révision — Concours INFAS (SVT)</h1>
          <p className="text-sm text-gray-600 mt-1">Contenu basé sur le document fourni. Chaque thème contient un résumé suivi d'un quiz de 15 questions (seuil 10/15). Une évaluation finale de 30 questions (seuil 25/30) clôt le module.</p>
        </header>

        <main className="grid md:grid-cols-4 gap-6">
          <nav className="md:col-span-1">
            <ul className="space-y-2">
              {themes.map((t, idx) => (
                <li key={t.id}>
                  <button
                    disabled={!unlocked[idx]}
                    onClick={() => setCurrentThemeIndex(idx)}
                    className={`w-full text-left p-3 rounded ${unlocked[idx] ? "bg-white hover:bg-slate-100" : "bg-gray-100 text-gray-400 cursor-not-allowed"}`}>
                    <div className="font-semibold">{t.title}</div>
                    <div className="text-xs text-gray-600">Questions : {t.questions.length}</div>
                  </button>
                </li>
              ))}
              <li className="mt-4">
                <button onClick={() => setCurrentThemeIndex("final")} className="w-full p-3 rounded bg-amber-50 hover:bg-amber-100">Évaluation finale (30 Q)</button>
              </li>
            </ul>
          </nav>

          <section className="md:col-span-3">
            {currentThemeIndex === "final" ? (
              <div>
                <h2 className="text-xl font-bold">Évaluation Finale — 30 questions</h2>
                <p className="text-sm text-gray-600 mb-4">Score requis pour valider : <span className="font-semibold">25 / 30</span></p>
                {!finalState && (
                  <div className="mb-4">
                    <button onClick={startFinal} className="px-4 py-2 bg-green-600 text-white rounded">Commencer l'évaluation finale</button>
                  </div>
                )}

                {finalState && (
                  <div>
                    <ol className="list-decimal pl-5 space-y-4">
                      {finalExam.map((q, i) => (
                        <li key={i}>
                          <div className="font-medium">{q.q}</div>
                          <div className="mt-2 grid gap-2 sm:grid-cols-2">
                            {q.options.map((opt, j) => (
                              <button key={j} onClick={() => answerFinal(i, j)} className={`p-2 border rounded text-left ${finalState.answers[i] === j ? "border-green-500 bg-green-50" : "bg-white"}`}>{opt}</button>
                            ))}
                          </div>
                        </li>
                      ))}
                    </ol>
                    <div className="mt-4">
                      <button onClick={submitFinal} className="px-4 py-2 bg-blue-600 text-white rounded">Soumettre l'évaluation finale</button>
                    </div>
                    {finalState.finished && (
                      <div className="mt-4 p-3 rounded border">
                        <div>Score : {finalState.score} / {finalExam.length}</div>
                        <div className="mt-2 font-medium">{finalState.passed ? "Félicitations ! Vous avez validé l'évaluation finale." : "Évaluation non validée."}</div>
                        {finalState.passed && <div className="mt-2 text-green-700">Bravo pour ton travail — continue comme ça !</div>}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ) : (
              <div>
                <h2 className="text-xl font-bold">{themes[currentThemeIndex].title}</h2>
                <div className="mt-3 space-y-2 text-gray-800">
                  {themes[currentThemeIndex].summary.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>

                <div className="mt-4">
                  {!quizState || quizState.themeId !== themes[currentThemeIndex].id ? (
                    <button onClick={() => startQuiz(themes[currentThemeIndex])} className="px-4 py-2 bg-indigo-600 text-white rounded">Commencer le quiz (15 Q)</button>
                  ) : (
                    <div>
                      <h3 className="mt-4 font-semibold">Quiz — {themes[currentThemeIndex].questions.length} questions</h3>
                      <ol className="list-decimal pl-5 space-y-4 mt-3">
                        {themes[currentThemeIndex].questions.map((q, i) => (
                          <li key={i}>
                            <div className="font-medium">{q.q}</div>
                            <div className="mt-2 grid gap-2 sm:grid-cols-2">
                              {q.options.map((opt, j) => (
                                <button key={j} onClick={() => answerQuestion(i, j)} className={`p-2 border rounded text-left ${quizState.answers[i] === j ? "border-green-500 bg-green-50" : "bg-white"}`}>{opt}</button>
                              ))}
                            </div>
                          </li>
                        ))}
                      </ol>

                      <div className="mt-4">
                        <button onClick={() => submitQuiz(themes[currentThemeIndex])} className="px-4 py-2 bg-blue-600 text-white rounded">Soumettre le quiz</button>
                      </div>

                      {quizState && quizState.finished && (
                        <div className="mt-4 p-3 rounded border">
                          <div>Score : {quizState.score} / {themes[currentThemeIndex].questions.length}</div>
                          <div className="mt-2 font-medium">{quizState.passed ? "Thème validé ✅" : "Thème non validé ❌"}</div>
                        </div>
                      )}

                      {renderCorrection(themes[currentThemeIndex])}
                    </div>
                  )}
                </div>
              </div>
            )}

            {message && <div className="mt-4 p-3 bg-amber-50 rounded border-l-4 border-amber-400">{message}</div>}

            <footer className="mt-6 text-sm text-gray-500">Contenu basé sur le fichier de révision fourni (Résumé de SVT pour le concours INFAS).</footer>
          </section>
        </main>
      </div>
    </div>
  );
}