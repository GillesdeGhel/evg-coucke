import Head from "next/head";

const ROOMS = [
  {
    id: 1,
    name: "Couckémons",
    subtitle: "Attrapez-les tous",
    icon: "⚡",
    color: "#F7D02C",
    colorDark: "#B8960C",
    texte: `Depuis qu'il est haut comme trois pommes, Coucke nourrit une passion des Pokémon. Des cours de récréation avec son Game Boy jusqu'à aujourd'hui, il n'a tout simplement jamais arrêté de les traquer et de les capturer. Son cerveau a matérialisé ici une équipe bien particulière, mais la route est barrée.\n\nPour déverrouiller l'accès à la salle suivante et obtenir votre indice, vous n'avez pas le choix. Vous connaissez sa devise par cœur : il va falloir tous les attraper ! Étudiez ces créatures, et prouvez que vous êtes de meilleurs dresseurs que lui.\n\nMais attention, votre mission ne s'arrête pas là : outre la fantaisie de cet univers Pokémon, vous allez devoir trouver des indices vitaux cachés ici pour aider vos partenaires. Décrochez votre talkie-walkie, car ils sont actuellement perdus dans un univers fantastique et sans vous, ils ne survivront pas à leur lancer de dés.`,
    parcours: 2, etape: 3, suivante: "The Belfius Heist", binome: "Fantasticouck",
    materiel: ["Pokémon 3D", "Pokéball", "QR code", "Feuille imprimée d'intro"],
    pieces: [
      { titre: "Table des Types", image: "/pokemon-types.png", caption: "Tableau des efficacités des types Pokémon" },
    ],
    indices: [
      { num: 1, text: "Trouve les Couckémons et mets-les dans l'ordre. En suivant les instructions tu trouveras ta prochaine action." },
      { num: 2, text: "Quel type est super efficace contre le 1er ? Prends le mot entier." },
      { num: 3, text: "Attaque les Pokémons de 2 à 6 avec le type le plus efficace." },
      { num: 4, text: "Utilise le type du Pokémon numéro 7." },
      { num: 5, text: "N'attaque pas le Pokémon 8 comme un animal à 6 pattes." },
    ],
    mj: {
      reponse: "VOL D'ARGENT",
      detail: `VOL → Dragon → Acier → Roche → Glace → Electrique → Normal → Ténèbres\n\nFaiblesse type par type :\n• VOL : Combat/Insecte → Scarhino (1)\n• Dragon : Dragon/Feu → Reshiram (2)\n• Acier : Roche/Fée → Strassie (3)\n• Roche : Vol/Insecte → Insécateur (4)\n• Glace : Vol/Dragon → Drattak (5)\n• Électrique : Vol/Eau → Léviator (6)\n• Normal : Ronflex → prendre le TYPE du pokémon 7\n• Ténèbres : Pas insecte / Normal / Psy → Girafarig (8)`,
    },
  },
  {
    id: 2,
    name: "Fantasticouck",
    subtitle: "Un monde de merveilles",
    icon: "✨",
    color: "#C890F8",
    colorDark: "#7A40B8",
    texte: `Notre cher fukinwhiterabbit n'est pas fait que de lignes de code et de data. C'est avant tout un explorateur dans l'âme (mais uniquement dans l'âme), qui a passé d'innombrables heures à arpenter des mondes imaginaires et fantastiques. Bienvenue dans son subconscient version Dé N Dé. Ici, les lois de la physique disparaissent au profit de la magie, des messages cryptiques et surtout des lancers de dés.\n\nLa quête qui se dresse devant vous est périlleuse, et vous allez vite réaliser qu'il vous manque des éléments cruciaux pour avancer. Ne paniquez pas : vos partenaires de l'autre côté du miroir, au milieu des herbes hautes de la salle Pokémon, détiennent sûrement les informations arcaniques qu'il vous manque. Lisez bien vos parchemins, faites les bons calculs, et communiquez avec eux pour espérer faire un coup critique.`,
    parcours: 1, etape: 3, suivante: "La Flamme de la Flemme", binome: "Couckémons",
    materiel: ["Livre de fantasy", "Dés (D4, D6, D8, D10, D12, D20)", "Cadenas 3579", "Boîte fermée avec cadenas", "Bougie chauffe-plat", "Briquet", "Truc imprimé en 3D qui dit FLEMME"],
    pieces: [
      {
        titre: "Parchemin I — Le Sang de la Pierre",
        texte: "Lance la pierre Rouge et retiens sa voix.\nMultiplie ce jet par le produit des faces de la pierre Orange et de la pierre Blanche.\nAjoute à cela toutes les faces de la pierre Jaune.\nDivise ce fardeau par les faces de la pierre Blanche.\nEnfin, retire de ce total autant de fois que possible les faces de la pierre Orange.\nCe qui survit est la clé.",
      },
      {
        titre: "Parchemin II — La Fièvre de l'Or",
        texte: "Fais rouler la pierre Noire pour connaître ton destin.\nMultiplie ton jet par le produit des faces de la pierre Bleue et de la pierre Blanche.\nOffre à ce nombre la somme des faces de la pierre Rouge et de la pierre Bleue.\nTranche ton œuvre en la divisant par les faces de la pierre Blanche.\nL'excédent qui refuse de former un groupe de la taille de la pierre Bleue t'indiquera la voie.",
      },
      {
        titre: "Parchemin III — Le Souffle du Vide",
        texte: "Interroge la pierre Orange par un jet.\nQue ce hasard soit multiplié par le produit des faces de la pierre Noire et de la pierre Blanche.\nAjoute l'absolu des faces de la pierre Rouge.\nPartage le tout en le divisant par les faces de la pierre Blanche.\nSeul le reste qui échappe à l'emprise de la pierre Noire brisera le sceau.",
      },
      {
        titre: "Parchemin IV — L'Œil du Néant",
        texte: "Réveille la pierre Bleue par un jet.\nMultiplie ce nombre par le produit des faces de la pierre Jaune et de la pierre Blanche.\nFais la somme des faces des pierres Rouge, Jaune et Blanche, et joins-la à ton calcul.\nDivise cet horizon par les faces de la pierre Blanche.\nLe fragment solitaire qui échappe à la mesure de la pierre Jaune est éternel.",
      },
    ],
    indices: [
      { num: 1, text: "Tout ce qui dépasse le seuil est condamné à disparaître. Ce qui reste après le passage — voilà la vérité." },
      { num: 2, text: "Imagine un mage qui marche en cercle. Son cercle mesure sept pas. Il marche dix-sept pas. Combien de pas le séparent du début ?" },
      { num: 3, text: "Il a franchi le cercle une fois — sept pas s'effacent. Il reste dix. Il repart. Sept s'effacent encore. Il reste trois. Il s'arrête. Trois est la vérité. Dix-sept a disparu." },
      { num: 4, text: "On écrit cela : 17 se souvient de 3 quand le cercle mesure 7." },
    ],
    mj: {
      reponse: "Code cadenas : 3579",
      detail: `Parchemin I — La Pierre Rouge : ((Jet × (6×4)) + 12) ÷ 4 mod 6 = 3\nParchemin II — La Pierre Noire : ((Jet × (8×4)) + (20+8)) ÷ 4 mod 8 = 7\nParchemin III — La Pierre Orange : ((Jet × (10×4)) + 20) ÷ 4 mod 10 = 5\nParchemin IV — La Pierre Bleue : ((Jet × (12×4)) + (20+12+4)) ÷ 4 mod 12 = 9`,
    },
  },
  {
    id: 3,
    name: "Alex(ia)",
    subtitle: "La bien-aimée",
    icon: "♥",
    color: "#FF6B8A",
    colorDark: "#B02040",
    texte: `Bienvenue dans le sanctuaire d'Alexia, ou plutôt dans la matrice de son alter ego numérique Alex(IA). Dans cette dimension, l'amour de sa vie s'est fusionné avec une intelligence artificielle, ne la facher pas sous peine de faire d'Alex(IA) une ex IA. Elle contrôle tout, entend tout, dicte les règles, et elle est particulièrement exigeante aujourd'hui.\n\nVous allez devoir comprendre son langage et réussir à l'amadouer pour qu'elle vous livre votre précieux indice. Si la technologie se retourne contre vous ou que ses caprices vous dépassent, appelez vos partenaires à la rescousse. Ce sont eux, en pleine sueur au milieu d'un triathlon, qui vont dénicher la marche à suivre pour apaiser cette IA rebelle. Et n'oubliez pas le pacte de votre équipe : Alex(IA) possède l'itinéraire exact de leur course. Si vous ne leur dictez pas le bon chemin, ils risquent de courir dans le vide jusqu'à l'épuisement.`,
    parcours: 1, etape: 2, suivante: "Fantasticouck", binome: 'Le "Triathlon"',
    materiel: ["Photos d'Alex modifiées par IA partout", "Elevenlabs"],
    indices: [
      { num: 1, text: "Voici la réponse à vos questions : 24 26 27 45 32 55 46 16 Q 54 29, peut-être comprendrez-vous en répondant à ses questions." },
      { num: 2, text: "Prenez gare au lexique de Lexia — ses énigmes vous ouvriront la voie." },
    ],
    mj: {
      reponse: "Réponse aux énigmes : Sommeil / Confiance / Carte / Lunettes / Excuses → Code final : FANTASTIQUE",
      detail: `Énigme 1 : "Je suis le seul voyage où si Coucke part c'est aussi Coucke qui attend. Plus il me cherche, plus je me cache, et je meurs le matin." → SOMMEIL\nÉnigme 2 : "Coucke l'a trop prise et est à risque de la perdre. Les enfants me donnent aux inconnus, les adultes en sont plus avares." → CONFIANCE\nÉnigme 3 : "J'ai des villes mais pas de maisons. J'ai des forêts mais pas d'arbres. J'ai des routes mais pas de voitures. J'ai des boulangeries mais je n'ai pas de Coucke." → CARTE\nÉnigme 4 : "Coucke ne me porte pas toujours, mais sans moi il ne voit plus le positif." → LUNETTES\nÉnigme 5 : "Faites pour s'en servir, Coucke les use à tort et à travers. À la vraie Alexia de temps en temps il les présentera." → EXCUSES\n\nDécodage du code "24 26 27 45 32 55 46 16 Q 54 29" :\nChaque nombre = numéro de réponse + numéro de lettre dans ce mot.\n\n  24 → réponse 2 (CONFIANCE), lettre 4 → F\n  26 → réponse 2 (CONFIANCE), lettre 6 → A\n  27 → réponse 2 (CONFIANCE), lettre 7 → N\n  45 → réponse 4 (LUNETTES),  lettre 5 → T\n  32 → réponse 3 (CARTE),     lettre 2 → A\n  55 → réponse 5 (EXCUSES),   lettre 5 → S\n  46 → réponse 4 (LUNETTES),  lettre 6 → T\n  16 → réponse 1 (SOMMEIL),   lettre 6 → I\n   Q → la lettre Q directement\n  54 → réponse 5 (EXCUSES),   lettre 4 → U\n  29 → réponse 2 (CONFIANCE), lettre 9 → E\n\n→ F-A-N-T-A-S-T-I-Q-U-E = FANTASTIQUE\n\nRéponse finale : "Ok super, vous avez tout ce qu'il faut pour décoder mon code !"`,
    },
  },
  {
    id: 4,
    name: 'Le "Triathlon"',
    subtitle: "Courir, nager, pédaler... ou pas",
    icon: "🏊",
    color: "#60C8F5",
    colorDark: "#1060A0",
    texte: `Bienvenue dans la zone rouge, là où les mollets brûlent et le cardio s'emballe. Vous le savez, Coucke est une véritable machine, prêt à enchaîner les kilomètres. Mais pour ce triathlon ultime, l'épreuve de sa vie, il ne court pas seul : c'est un parcours qu'il affronte en tandem avec sa future femme, Alexia.\n\nLe hic, c'est que l'effort a brouillé son esprit et il a complètement oublié le tracé de la course. Pour retrouver la trace du Super Coucke et débloquer votre indice, vous allez devoir contacter vos partenaires. C'est l'entité de la salle Alex(ia) qui détient le secret de cet itinéraire infernal. Écoutez bien ses indications ! Mais ne raccrochez pas trop vite : pendant que vous étudiez les cartes, fouillez les environs. Vos collègues de l'autre côté du fil sont coincés face à cette IA capricieuse, et c'est ici, parmi l'équipement de sport, que se cachent les indices pour les aider à l'amadouer.`,
    parcours: 2, etape: 2, suivante: "Couckémons", binome: "Alex(ia)",
    materiel: ["Cartes imprimées de Google Maps", "Indices", "Photo de Coucke ripped as fuck par IA", "Pokéball", "Cadenas 2026 + boîte avec Pokéball"],
    pieces: [
      { titre: "Carte du triathlon", image: "/triathlon.png", caption: "Le tracé de la course — Cucq → Étaples → Le Touquet → Golf → ?" },
    ],
    indices: [
      { num: 1, text: "Ajoute le triathlon de Coucke à la plus longue distance qu'il ait parcourue sur ses jambes." },
      { num: 2, text: "C'était le jour de la saint vierge avec la sienne (de sainte) en l'an de grâce 2023." },
      { num: 3, text: "Pour la trouver, pratique ton suédois : comment dit-on « s'efforcer à faire quelque chose sans relâche » ?" },
      { num: 4, text: "En 2023, Coucke ne se presse pas." },
    ],
    mj: {
      reponse: "Code cadenas : 2026",
      detail: `Parcours triathlon :\n• Départ : Super Cucq\n• Étape 1 : Étaples\n• Étape 2 : La plage (sans voir la tour Eiffel → Côte d'Opale, pas Paris)\n• Étape 3 : Travaille son swing (golf ?)\n• Fin : Trois pattes\n\nStrava Coucke : https://www.strava.com/athletes/49651259`,
    },
  },
  {
    id: 5,
    name: "Pro-Gaming",
    subtitle: "Instead of Programming",
    icon: "🎮",
    color: "#A080F8",
    colorDark: "#5030A0",
    texte: `Coucke a toujours eu un faible pour les jeux vidéo, au point de parfois préférer le pro-gaming à la place du programming. Dans ce sanctuaire numérique, vous allez devoir prouver votre valeur manette en main (ou clavier sous les doigts). Votre objectif : accéder à sa plateforme secrète en déjouant sa sécurité pour le moins... approximative. Observez bien son setup de gamer, les indices sont sous vos yeux. Et n'oubliez pas de communiquer avec vos partenaires de l'autre côté de la réalité, ils pourraient avoir besoin de vous.`,
    parcours: 2, etape: 1, suivante: 'Le "Triathlon"', binome: "Jeux de Société",
    materiel: ["QR code vers app Vercel", "Clavier d'ordinateur et souris", "Manette de PlayStation", "Texte de gameur", "Indice de salle Jeux de société"],
    pieces: [
      { titre: "QR Code — Accès TFT", image: "/qr-progaming.png", caption: "Scanner pour accéder à la plateforme. Bonne chance." },
    ],
    indices: [
      { num: 1, text: "Coucke n'est pas très fort en sécurité — en mot de passe il a simplement tapé son gamer tag." },
      { num: 2, text: "Coucke n'est pas très fort en motricité — quand il ne voit pas ce qu'il écrit, il décale souvent ses doigts sur le clavier." },
      { num: 3, text: "Malgré ses apparences, Coucke est de droite." },
    ],
    mj: {
      reponse: "Login : fukinwhiterabbit / Password : gilo,xjoyrtznnoy",
      detail: `Le mot de passe est "alex,wifetobee" décalé d'une touche vers la droite sur le clavier AZERTY.\nQR code à coller sous la manette de PS.`,
    },
  },
  {
    id: 6,
    name: "Jeux de Société",
    subtitle: "Mais pas après 21h",
    icon: "🎲",
    color: "#F0C060",
    colorDark: "#906000",
    texte: `Qu'ils soient virtuels ou bien réels, Coucke est un fan inconditionnel de jeux. Mais attention, pour les jeux de société, c'est sacré : jamais après 21h ! Ici, pas d'écrans, juste des plateaux, des pièces et des cartes. Vous allez devoir faire chauffer vos méninges pour décrypter les stratégies laissées en suspens sur ces différents jeux. Échecs, go, cartes... chaque élément cache une partie de la réponse. Ouvrez l'œil, cherchez l'invisible, et surtout, collaborez avec l'équipe numérique qui joue en parallèle.`,
    parcours: 1, etape: 1, suivante: "Alex(ia)", binome: "Pro-Gaming",
    materiel: ["Jeu d'échecs", "Goban + règles de Goban", "Grille pour montrer le L2", "Jeu de cartes", "Bic encre invisible"],
    pieces: [
      { titre: "Grille de Goban", image: "/goban.png", caption: "La pierre manquante parle plus fort que toutes les autres." },
    ],
    indices: [
      {
        num: 1,
        label: "Parchemin I — L'Échiquier",
        text: "Blanc joue. Un seul mouvement brise le roi noir. Lis le chemin : là où règne la tour, puis là où le cavalier achève. Deux cases. Deux lettres. Dans l'ordre du coup.",
      },
      {
        num: 2,
        label: "Parchemin II — Le Goban",
        text: "Une pierre manque. Le plateau est incomplet, le territoire instable. La pierre absente parle plus fort que toutes les autres. Là où elle doit reposer — commence ta lecture.",
      },
      {
        num: 3,
        label: "Parchemin III — Le Jeu de cartes",
        text: "Entre le visible et l'invisible du jeu qui pique les cœurs de ceux qui se tiennent à carreau, tu trouveras ta réponse.",
      },
    ],
    mj: {
      reponse: "ALEX",
      detail: `A → lettre initiale du mot "As" (la carte)\nL → position L2 sur le Goban → lettre L\nE → position E3 sur l'échiquier (mat) → lettre E\nX → écrit en encre invisible sur l'As de cœur, révélé à la blacklight\n\nOrdre de lecture : As → Goban L2 → Échiquier E3 → Encre invisible\n→ A - L - E - X = ALEX`,
    },
  },
  {
    id: 7,
    name: "The Belfius Heist",
    subtitle: "Le casse du siècle",
    icon: "🏦",
    color: "#40DFA0",
    colorDark: "#106040",
    texte: `Coucke n'aime pas rentrer trop tard. Les soirées cocoogaming, c'est bien — mais il y a un mariage à organiser, et ce mariage va coûter des millions. Heureusement, derrière le joueur passionné se cache un data engineer de talent. Et un data engineer de talent, ça trouve des solutions créatives.\n\nSa solution : hacker Belfius. Virer les fonds. Financer le mariage du siècle.\n\nBienvenue dans le centre névralgique de Belfius — ou plutôt, dans ce qu'il en reste après que notre ami s'y soit introduit par effraction numérique. Le terminal est ouvert, les fichiers sont là. Quelque part dans ce système se cachent trois fragments d'un code de transfert. Assemblez-les et déclenchez le virement. Fouillez, explorez, hackez. Mais faites vite — les administrateurs système ne dorment pas éternellement.`,
    parcours: 2, etape: 4, suivante: "Pro-Gaming", loop: true,
    materiel: ["Ordinateur avec bash / terminal ouvert", "Logo Belfius imprimé", "Décoration Belfius"],
    pieces: [
      {
        titre: "Enveloppe #1 — Accès Système",
        texte: "BELFIUS INTERNAL SYSTEM v2.4.1\n\nVos credentials d'accès :\n\nlogin    : phantom\npassword : DARKN3T\n\n⚠ Accès badge expirant à 06:00. Ne perdez pas de temps.",
      },
    ],
    indices: [
      {
        num: 1,
        label: "Fragment 1 — Les Journaux",
        text: "Une connexion suspecte a eu lieu cette nuit. Les journaux réseau enregistrent tout — chaque tentative, chaque intrusion. Le fragment que vous cherchez est un numéro de port. Un port 'normal' fait moins de 1024.",
      },
      {
        num: 2,
        label: "Fragment 2 — Les Fichiers Cachés",
        text: "Sur Linux, les fichiers secrets commencent par un point. La commande ls ne les montre pas par défaut. Il existe une option pour afficher absolument tout ce qui se trouve dans un dossier — y compris ce qu'on cherche à dissimuler.",
      },
      {
        num: 3,
        label: "Fragment 3 — Le Chiffrement",
        text: "Le dernier fragment a été chiffré. Chaque lettre a été avancée de 3 rangs dans l'alphabet. Pour décoder, il faut reculer de 3. Le terminal dispose d'une commande pour ça.",
      },
      {
        num: 4,
        label: "Dernier recours — La Commande",
        text: "Vous avez les 3 fragments ? Le format du code de transfert est : FRAGMENT1-FRAGMENT2-FRAGMENT3. Tapez : transfer [votre code]",
      },
      {
        num: 5,
        label: "L'Attaque",
        text: "La commande à run dans le terminal est bash launch_belfius_trojan_horse_attack_v3.sh",
      },
    ],
    mj: {
      reponse: "Code final : 7734-GHOST-NEXUS → commande : transfer 7734-GHOST-NEXUS",
      detail: `FRAGMENT 1 : 7734\n→ cd logs → cat access.log → connexion suspecte à 03:47:33, port=7734\n\nFRAGMENT 2 : GHOST\n→ cd accounts → ls -a → cd .vault → cat transfer_key.dat\n(le dossier .vault est caché, invisible sans ls -a)\n\nFRAGMENT 3 : NEXUS\n→ cd tools → ls -a → cat .intercepted.enc → texte chiffré : QHAXV\n→ decode QHAXV 3 → chaque lettre reculée de 3 → NEXUS\n\nCode complet : transfer 7734-GHOST-NEXUS\n\nEaster eggs :\n• cat accounts/michel_coucke.acc → père milliardaire à Dubai (47M€, Lamborghini, villa anti-missile)\n• cat accounts/francois_coucke.acc → OnlyFans, packs TFT à 2h du mat, remboursement bague x3\n\nSi succès : virement de 47 234 891,42€ — badge désactivé, contrat terminé, mariage sauvé 🎉`,
    },
  },
  {
    id: 8,
    name: "La Flamme de la Flemme",
    subtitle: "L'inextinguible passion pour rien",
    icon: "🔥",
    color: "#FF8040",
    colorDark: "#A03010",
    texte: `Pendant que les hackers s'attaquent aux serveurs de Belfius, Coucke — trop flemmard pour bouger de son canapé — coordonne l'opération depuis chez lui. Il ne se lève pas. Il ne touche pas l'interrupteur. Sa maison lui obéit.\n\nVotre rôle : résoudre les énigmes de la planque de Coucke et transmettre les indices aux hackers en temps réel. Ils ne peuvent pas avancer sans vous — et le chrono tourne.`,
    parcours: 1, etape: 4, suivante: "Jeux de Société", loop: true,
    materiel: ["Blacklight (lampe UV)", "Lampe de chevet", "Google Home", "Prise connectée", "Horloge à aiguille", "Marqueur à encre invisible"],
    indices: [
      { num: 1, text: "Ce flemmard de Coucke ne doit même plus se lever de son lit pour gérer sa maison." },
      { num: 2, text: "Google est ton ami." },
      { num: 3, text: "À quelle heure Coucke va-t-il dormir ?" },
      { num: 4, text: "Trouve la tournure de phrase exacte. Sujet, verbe, complément — c'est du français, motherfucker." },
    ],
    mj: {
      reponse: "Commande Google Home à trouver (heure + formule exacte)",
      detail: `Chanson : "North London Forever" — berceuse de Coucke.\nAutomatisation Google Home : allume une lumière, en éteint une autre.\nEncre invisible → révéler avec blacklight.\nHorloge à aiguille → heure = code ou indice.`,
    },
  },
];

export default function Indices() {
  const printQR = () => {
    const win = window.open('', '_blank');
    win.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>QR Code Règles</title>
          <style>
            body { font-family: sans-serif; text-align: center; margin: 0; padding: 20px; display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
            .qr-box { border: 1px dashed #ccc; padding: 15px; border-radius: 8px; }
            .qr-box img { width: 100%; max-width: 150px; height: auto; }
            .qr-title { font-size: 14px; font-weight: bold; margin-top: 10px; color: #333; }
            @media print {
              @page { margin: 10mm; size: A4; }
              body { padding: 0; gap: 10px; }
            }
          </style>
        </head>
        <body>
          ${Array(15).fill('<div class="qr-box"><img src="/qr-regles.png" alt="QR Code" /><div class="qr-title">📱 Scanner pour les règles</div></div>').join('')}
        </body>
      </html>
    `);
    win.document.close();
    setTimeout(() => {
      win.focus();
      win.print();
    }, 500);
  };

  return (
    <>
      <Head>
        <title>Indices — EVG Coucke</title>
        <style>{`
          *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

          body {
            background: #e8e8e8;
            font-family: Arial, Helvetica, sans-serif;
            color: #111;
          }

          /* ---- SCREEN NAV ---- */
          .no-print {
            background: #111827;
            color: white;
            padding: 0 28px;
            height: 54px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            position: sticky;
            top: 0;
            z-index: 200;
            box-shadow: 0 2px 12px rgba(0,0,0,0.4);
          }
          .no-print h1 { font-size: 14px; font-weight: 800; letter-spacing: 2px; text-transform: uppercase; }
          .no-print nav { display: flex; gap: 12px; align-items: center; }
          .btn {
            border: none; padding: 8px 18px; border-radius: 3px;
            font-size: 12px; font-weight: 800; cursor: pointer;
            letter-spacing: 1px; text-transform: uppercase; text-decoration: none;
            display: inline-flex; align-items: center; gap: 6px;
          }
          .btn-print { background: #DB0007; color: white; }
          .btn-print:hover { background: #AA0005; }
          .btn-back { background: rgba(255,255,255,0.1); color: #ccc; }
          .btn-back:hover { background: rgba(255,255,255,0.2); }

          /* ---- LAYOUT ---- */
          .page-wrapper { max-width: 960px; margin: 0 auto; padding: 32px 20px 80px; }

          .room-section { margin-bottom: 56px; }

          .room-header {
            display: flex; align-items: center; gap: 14px;
            padding: 14px 20px; margin-bottom: 18px;
            border-radius: 4px; color: white;
          }
          .room-header-icon { font-size: 28px; flex-shrink: 0; }
          .room-header-title { font-size: 18px; font-weight: 900; text-transform: uppercase; letter-spacing: 1px; }
          .room-header-sub { font-size: 12px; opacity: 0.75; font-style: italic; margin-top: 2px; }
          .room-header-num { margin-left: auto; font-size: 32px; font-weight: 900; opacity: 0.25; }

          /* ---- SECTION LABELS ---- */
          .section-label {
            font-size: 10px; font-weight: 800; letter-spacing: 3px; text-transform: uppercase;
            color: #888; margin: 18px 0 10px; padding-left: 4px;
            display: flex; align-items: center; gap: 8px;
          }
          .section-label::after { content: ''; flex: 1; height: 1px; background: #ddd; }

          /* ---- TEXTE CARD ---- */
          .texte-card {
            background: #fffdf5;
            border: 2px dashed #ccc;
            border-radius: 0;
            padding: 22px 26px;
            margin-bottom: 10px;
            position: relative;
            page-break-inside: avoid;
            break-inside: avoid;
          }
          .texte-card-label {
            position: absolute; top: 8px; right: 12px;
            font-size: 9px; color: #bbb; letter-spacing: 1px; text-transform: uppercase;
          }
          .texte-card-title {
            font-size: 11px; font-weight: 800; text-transform: uppercase;
            letter-spacing: 2px; margin-bottom: 12px;
          }
          .texte-card-body { font-size: 13px; line-height: 1.85; color: #333; white-space: pre-line; }

          /* ---- INDICES GRID ---- */
          .indices-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
          }

          .indice-card {
            border: 2px dashed #bbb;
            padding: 18px 20px;
            margin: -1px;
            background: white;
            position: relative;
            page-break-inside: avoid;
            break-inside: avoid;
            min-height: 130px;
          }
          .cut-hint {
            position: absolute; top: 6px; right: 8px;
            font-size: 9px; color: #ddd; letter-spacing: 0.5px;
          }
          .indice-badge {
            display: inline-flex; align-items: center; gap: 5px;
            padding: 2px 10px; border-radius: 20px; margin-bottom: 10px;
            font-size: 9px; font-weight: 800; text-transform: uppercase; letter-spacing: 1px;
            color: white;
          }
          .indice-num {
            font-size: 10px; font-weight: 700; color: #aaa;
            text-transform: uppercase; letter-spacing: 2px; margin-bottom: 8px;
          }
          .indice-label {
            font-size: 11px; font-weight: 800; color: #444; margin-bottom: 6px;
            text-transform: uppercase; letter-spacing: 0.5px;
          }
          .indice-text { font-size: 14px; line-height: 1.7; color: #1a1a1a; font-weight: 500; }
          .empty-slot {
            border: 2px dashed #eee; background: #fafafa;
            display: flex; align-items: center; justify-content: center;
            font-size: 11px; color: #ddd; font-style: italic;
            min-height: 130px; margin: -1px;
          }

          /* ---- MATERIEL ---- */
          .materiel-box {
            background: #f5f5f5; border: 1px solid #e0e0e0;
            border-radius: 3px; padding: 14px 18px; margin-top: 10px;
          }
          .materiel-title { font-size: 10px; font-weight: 800; text-transform: uppercase; letter-spacing: 2px; color: #999; margin-bottom: 8px; }
          .materiel-list { display: flex; flex-wrap: wrap; gap: 6px; }
          .materiel-item {
            background: white; border: 1px solid #e0e0e0; border-radius: 20px;
            padding: 3px 12px; font-size: 12px; color: #555;
          }

          /* ---- MJ SHEET ---- */
          .mj-card {
            padding: 12px 4px; margin-top: 10px;
          }
          .mj-stamp {
            font-size: 9px; font-weight: 900; color: #DB0007;
            letter-spacing: 2px; text-transform: uppercase;
            border: 1px solid #DB0007; padding: 1px 6px; border-radius: 2px;
            display: inline-block; margin-bottom: 8px;
          }
          .mj-title { font-size: 10px; font-weight: 800; text-transform: uppercase; letter-spacing: 2px; color: #c00; margin-bottom: 6px; }
          .mj-reponse { font-size: 14px; font-weight: 900; color: #900; margin-bottom: 6px; }
          .mj-detail { font-size: 12px; line-height: 1.75; color: #666; white-space: pre-line; }

          /* ---- PARCOURS MAP ---- */
          .parcours-map {
            background: #111827; border-radius: 8px; padding: 24px 28px;
            margin-bottom: 40px; color: white;
            overflow-x: auto;
          }
          .parcours-map-inner {
            min-width: 700px;
          }
          .parcours-map-title {
            font-size: 11px; font-weight: 800; letter-spacing: 3px;
            text-transform: uppercase; color: #9CA3AF; margin-bottom: 24px;
          }
          .parcours-row {
            display: flex; align-items: center; gap: 0; margin-bottom: 6px;
          }
          .parcours-label {
            font-size: 10px; font-weight: 800; text-transform: uppercase;
            letter-spacing: 1px; padding: 4px 10px; border-radius: 4px;
            color: white; min-width: 90px; text-align: center; flex-shrink: 0;
          }
          .parcours-steps {
            display: flex; align-items: center; flex: 1; gap: 0;
          }
          .p-step {
            display: flex; flex-direction: column; align-items: center;
            background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.12);
            border-radius: 6px; padding: 8px 12px; min-width: 130px;
            text-align: center; position: relative;
          }
          .p-step-icon { font-size: 20px; margin-bottom: 4px; }
          .p-step-name { font-size: 11px; font-weight: 700; color: white; line-height: 1.3; }
          .p-step-num { font-size: 9px; color: #6B7280; margin-top: 3px; text-transform: uppercase; letter-spacing: 1px; }
          .p-arrow { color: #374151; font-size: 18px; padding: 0 6px; flex-shrink: 0; }
          .p-arrow-loop { color: #EF4444; font-size: 14px; padding: 0 4px; flex-shrink: 0; }

          .binome-rows {
            margin-top: 20px; border-top: 1px solid rgba(255,255,255,0.08); padding-top: 16px;
          }
          .binome-title {
            font-size: 10px; font-weight: 800; text-transform: uppercase;
            letter-spacing: 2px; color: #6B7280; margin-bottom: 12px;
          }
          .binome-grid {
            display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px;
          }
          .binome-card {
            background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1);
            border-radius: 6px; padding: 10px; text-align: center;
          }
          .binome-card-step { font-size: 9px; color: #6B7280; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px; }
          .binome-room {
            font-size: 11px; font-weight: 700; color: white; padding: 5px 8px;
            border-radius: 4px; margin-bottom: 4px; line-height: 1.3;
          }
          .binome-vs { font-size: 10px; color: #4B5563; margin: 4px 0; font-weight: 800; }

          @media (max-width: 768px) {
            .parcours-map-inner { min-width: auto; }
            .parcours-row { flex-direction: column; align-items: flex-start; gap: 12px; margin-bottom: 24px !important; }
            .parcours-steps { flex-wrap: wrap; gap: 8px 0; }
            .binome-grid { grid-template-columns: repeat(2, 1fr); }
            .room-header { flex-direction: column; align-items: flex-start; gap: 12px; }
            .room-header-num { margin-left: 0; }
            .next-room { margin-left: 0; margin-top: 8px; }
          }

          @media (max-width: 480px) {
            .binome-grid { grid-template-columns: 1fr; }
            .indices-grid { grid-template-columns: 1fr; }
            .pieces-grid { grid-template-columns: 1fr; }
          }

          /* ---- NEXT ROOM BADGE ---- */
          .next-room {
            margin-left: auto; font-size: 11px; font-weight: 600;
            color: rgba(255,255,255,0.7); display: flex; align-items: center; gap: 6px;
            flex-shrink: 0; text-align: right;
          }
          .next-room strong { color: white; }
          .next-room .loop-tag {
            background: rgba(239,68,68,0.25); color: #FCA5A5;
            border: 1px solid rgba(239,68,68,0.4);
            font-size: 9px; padding: 1px 6px; border-radius: 3px;
            text-transform: uppercase; letter-spacing: 1px;
          }

          /* ---- PIÈCES À IMPRIMER ---- */
          .pieces-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
            margin-bottom: 4px;
          }
          .piece-card {
            background: #fdf6e3;
            border: 2px dashed #c8a96e;
            border-radius: 2px;
            padding: 20px 22px;
            position: relative;
            page-break-inside: avoid;
            break-inside: avoid;
            box-shadow: inset 0 0 20px rgba(180,140,80,0.08);
          }
          .piece-card.full-width {
            grid-column: 1 / -1;
            max-width: 480px;
            margin: 0 auto;
            width: 100%;
          }
          .piece-cut { position: absolute; top: 6px; right: 8px; font-size: 9px; color: #c8a96e; letter-spacing: 0.5px; }
          .piece-titre {
            font-size: 12px; font-weight: 800; text-transform: uppercase;
            letter-spacing: 1px; color: #6b4c11; margin-bottom: 14px;
            padding-bottom: 10px; border-bottom: 1px solid #d4b483;
            font-family: Georgia, serif;
          }
          .piece-texte {
            font-size: 13px; line-height: 1.85; color: #3a2a0a;
            font-style: italic; white-space: pre-line;
            font-family: Georgia, serif;
          }

          /* ---- PLACEHOLDER ---- */
          .placeholder { border: 2px dashed #e8e8e8; border-radius: 4px; padding: 20px; text-align: center; color: #ccc; font-style: italic; font-size: 13px; }

          /* ---- PAGE BREAK ---- */
          .page-break { page-break-before: always; break-before: page; }

          /* ===== PRINT ===== */
          @media print {
            @page { margin: 10mm; size: A4; }
            body { background: white; }
            .no-print { display: none !important; }
            .page-wrapper { max-width: 100%; padding: 0; }
            .room-section { margin-bottom: 40px; }
            .materiel-box { display: none; }
            .mj-card { display: none; }
            .btn-back { display: none; }
            .hide-on-print { display: none !important; }
          }
        `}</style>
      </Head>

      <div className="no-print">
        <h1>✂ Indices à imprimer — EVG Coucke</h1>
        <nav>
          <a href="/regles" className="btn btn-back">← Règles</a>
          <button className="btn btn-print" onClick={() => window.print()}>🖨 Imprimer</button>
        </nav>
      </div>

      <div className="page-wrapper">

        {/* PARCOURS OVERVIEW */}
        <div className="parcours-map no-print">
          <div className="parcours-map-title">🗺 Carte des parcours</div>

          {[
            {
              label: "Parcours 1", color: "#2E6CB8",
              steps: [
                { name: "Jeux de Société", icon: "🎲" },
                { name: "Alex(ia)", icon: "♥" },
                { name: "Fantasticouck", icon: "✨" },
                { name: "La Flamme de la Flemme", icon: "🔥" },
              ]
            },
            {
              label: "Parcours 2", color: "#106040",
              steps: [
                { name: "Pro-Gaming", icon: "🎮" },
                { name: 'Le "Triathlon"', icon: "🏊" },
                { name: "Couckémons", icon: "⚡" },
                { name: "The Belfius Heist", icon: "🏦" },
              ]
            }
          ].map(p => (
            <div className="parcours-row" key={p.label} style={{ marginBottom: 10 }}>
              <span className="parcours-label" style={{ background: p.color, marginRight: 12 }}>{p.label}</span>
              <div className="parcours-steps">
                {p.steps.map((s, si) => (
                  <div key={si} style={{ display: "flex", alignItems: "center" }}>
                    <div className="p-step">
                      <div className="p-step-icon">{s.icon}</div>
                      <div className="p-step-name">{s.name}</div>
                      <div className="p-step-num">Étape {si + 1}</div>
                    </div>
                    {si < p.steps.length - 1
                      ? <div className="p-arrow">→</div>
                      : <div className="p-arrow-loop" title="Boucle vers le début">↩</div>
                    }
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="binome-rows">
            <div className="binome-title">🔗 Salles simultanées — même étape, équipes différentes</div>
            <div className="binome-grid">
              {[
                { etape: 1, p1: { name: "Jeux de Société", icon: "🎲", color: "#906000" }, p2: { name: "Pro-Gaming", icon: "🎮", color: "#5030A0" } },
                { etape: 2, p1: { name: "Alex(ia)", icon: "♥", color: "#B02040" }, p2: { name: 'Le "Triathlon"', icon: "🏊", color: "#1060A0" } },
                { etape: 3, p1: { name: "Fantasticouck", icon: "✨", color: "#7A40B8" }, p2: { name: "Couckémons", icon: "⚡", color: "#B8960C" } },
                { etape: 4, p1: { name: "La Flamme de la Flemme", icon: "🔥", color: "#A03010" }, p2: { name: "The Belfius Heist", icon: "🏦", color: "#106040" } },
              ].map(b => (
                <div className="binome-card" key={b.etape}>
                  <div className="binome-card-step">Étape {b.etape}</div>
                  <div className="binome-room" style={{ background: b.p1.color + "33", border: `1px solid ${b.p1.color}66` }}>
                    {b.p1.icon} {b.p1.name}
                  </div>
                  <div className="binome-vs">↕ simultané</div>
                  <div className="binome-room" style={{ background: b.p2.color + "33", border: `1px solid ${b.p2.color}66` }}>
                    {b.p2.icon} {b.p2.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* QR CODE REGLES */}
        <div className="room-section hide-on-print" style={{ background: 'white', padding: '24px', borderRadius: '8px', marginBottom: '40px', border: '2px dashed #ccc', textAlign: 'center' }}>
          <div style={{ fontSize: '18px', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>📱 QR Code des Règles</div>
          <div style={{ fontSize: '13px', color: '#666', marginBottom: '20px' }}>À imprimer en 15 exemplaires pour les distribuer ou les placer dans les salles.</div>
          <img src="/qr-regles.png" alt="QR Code Règles" style={{ width: '150px', marginBottom: '20px', borderRadius: '4px', border: '1px solid #eee' }} />
          <br/>
          <button className="btn btn-print" onClick={printQR} style={{ background: '#1060A0' }}>🖨 Imprimer 15x sur une page</button>
        </div>

        {ROOMS.map((room, i) => (
          <div key={room.id} className={`room-section${i > 0 && i % 2 === 0 ? " page-break" : ""}`}>

            {/* ROOM HEADER */}
            <div className="room-header" style={{ background: `linear-gradient(135deg, ${room.colorDark}, ${room.color}33), ${room.colorDark}` }}>
              <span className="room-header-icon">{room.icon}</span>
              <div>
                <div className="room-header-title">{room.name}</div>
                <div className="room-header-sub">
                  {room.parcours && <span style={{ marginRight: 8, opacity: 0.75 }}>Parcours {room.parcours} · Étape {room.etape}</span>}
                  {room.subtitle}
                  {room.binome && <span style={{ marginLeft: 8, opacity: 0.65 }}>· 🔗 simultané avec <em>{room.binome}</em></span>}
                </div>
              </div>
              {room.suivante && (
                <div className="next-room">
                  {room.loop && <span className="loop-tag">boucle</span>}
                  {room.loop ? "↩" : "→"} <strong>{room.suivante}</strong>
                </div>
              )}
            </div>

            {/* TEXTE D'INTRO */}
            {room.texte ? (
              <>
                <div className="section-label">✦ Texte d'introduction — à lire à l'entrée</div>
                <div className="texte-card">
                  <div className="cut-hint">✂ découper</div>
                  <div className="texte-card-title" style={{ color: room.colorDark }}>{room.icon} {room.name}</div>
                  <div className="texte-card-body">{room.texte}</div>
                </div>
              </>
            ) : (
              <>
                <div className="section-label">✦ Texte d'introduction</div>
                <div className="placeholder">Texte à rédiger…</div>
              </>
            )}

            {/* PIÈCES À IMPRIMER */}
            {room.pieces && room.pieces.length > 0 && (
              <>
                <div className="section-label">✦ Pièces à imprimer — à découper et placer dans la salle</div>
                <div className="pieces-grid">
                  {room.pieces.map((piece, pi) => (
                    <div className={`piece-card${piece.image ? " full-width" : ""}`} key={pi}>
                      <div className="piece-cut">✂ couper</div>
                      <div className="piece-titre">{piece.titre}</div>
                      {piece.image && (
                        <img
                          src={piece.image}
                          alt={piece.titre}
                          style={{ width: "100%", height: "auto", display: "block", marginBottom: piece.caption ? 10 : 0, borderRadius: 2 }}
                        />
                      )}
                      {piece.texte && <div className="piece-texte">{piece.texte}</div>}
                      {piece.caption && <div style={{ fontSize: 11, color: "#888", fontStyle: "italic", textAlign: "center", marginTop: 8 }}>{piece.caption}</div>}
                    </div>
                  ))}
                </div>
              </>
            )}

            {/* INDICES */}
            <div className="section-label">✦ Indices — à découper et distribuer</div>
            {room.indices.length > 0 ? (
              <div className="indices-grid">
                {room.indices.map((ind) => (
                  <div className="indice-card" key={ind.num}>
                    <div className="cut-hint">✂ couper</div>
                    <div className="indice-badge" style={{ background: room.colorDark }}>
                      {room.icon} {room.name}
                    </div>
                    <div className="indice-num">Indice {ind.num}</div>
                    {ind.label && <div className="indice-label">{ind.label}</div>}
                    <div className="indice-text">{ind.text}</div>
                  </div>
                ))}
                {room.indices.length % 2 !== 0 && <div className="empty-slot">—</div>}
              </div>
            ) : (
              <div className="placeholder">Indices à ajouter…</div>
            )}

            {/* MATÉRIEL — screen only */}
            {room.materiel && room.materiel.length > 0 && (
              <div className="materiel-box no-print">
                <div className="materiel-title">📦 Matériel nécessaire</div>
                <div className="materiel-list">
                  {room.materiel.map((m) => (
                    <span key={m} className="materiel-item">{m}</span>
                  ))}
                </div>
              </div>
            )}

            {/* MJ SHEET */}
            {room.mj && (
              <div className="mj-card">
                <div className="mj-stamp">MJ seulement</div>
                <div className="mj-title">Solution / Notes MJ</div>
                <div className="mj-reponse">→ {room.mj.reponse}</div>
                <div className="mj-detail">{room.mj.detail}</div>
              </div>
            )}

          </div>
        ))}
      </div>
    </>
  );
}
