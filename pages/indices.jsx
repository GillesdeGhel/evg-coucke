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
    materiel: ["Pokémon 3D", "Pokéball", "QR code", "Feuille imprimée d'intro"],
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
    materiel: ["Livre de fantasy", "Dés (D4, D6, D8, D10, D12, D20)", "Cadenas 3579", "Boîte fermée avec cadenas", "Bougie chauffe-plat", "Briquet", "Truc imprimé en 3D qui dit FLEMME"],
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
    texte: `Bienvenue dans le sanctuaire d'Alex... ou plutôt, dans la matrice de son alter ego numérique. Dans cette dimension, l'amour de sa vie s'est fusionné avec une intelligence artificielle pour devenir Alex(IA). Elle contrôle tout, entend tout, dicte les règles, et elle est particulièrement exigeante aujourd'hui.\n\nVous allez devoir comprendre son langage et réussir à l'amadouer pour qu'elle vous livre votre précieux indice. Si la technologie se retourne contre vous ou que ses caprices vous dépassent, appelez vos partenaires à la rescousse. Ce sont eux, en pleine sueur au milieu d'un triathlon, qui vont dénicher la marche à suivre pour apaiser cette IA rebelle. Et n'oubliez pas le pacte de votre équipe : Alex(IA) possède l'itinéraire exact de leur course. Si vous ne leur dictez pas le bon chemin, ils risquent de courir dans le vide jusqu'à l'épuisement.`,
    materiel: ["Photos d'Alex modifiées par IA partout"],
    indices: [
      { num: 1, text: "Voici la réponse à vos questions : 24 26 27 45 32 55 46 16 Q 54 29" },
      { num: 2, text: "Prenez gare au lexique de Lexia — ses énigmes vous ouvriront la voie." },
    ],
    mj: {
      reponse: "ALEX (code ou mot de passe final) — Réponse aux énigmes : Sommeil / Confiance / Carte / Lunettes / Excuses",
      detail: `Énigme 1 : "Je suis le seul voyage où si Coucke part c'est aussi Coucke qui attend. Plus il me cherche, plus je me cache, et je meurs le matin." → SOMMEIL\nÉnigme 2 : "Coucke l'a trop prise et est à risque de la perdre. Les enfants me donnent aux inconnus, les adultes en sont plus avares." → CONFIANCE\nÉnigme 3 : "J'ai des villes mais pas de maisons. J'ai des forêts mais pas d'arbres. J'ai des routes mais pas de voitures. J'ai des boulangeries mais je n'ai pas de Coucke." → CARTE\nÉnigme 4 : "Coucke ne me porte pas toujours, mais sans moi il ne voit plus le positif." → LUNETTES\nÉnigme 5 : "Faites pour s'en servir, Coucke les use à tort et à travers. À la vraie Alexia de temps en temps il les présentera." → EXCUSES\n\nRéponse finale : "Ok super, vous avez tout ce qu'il faut pour décoder mon code !"`,
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
    materiel: ["Cartes imprimées de Google Maps", "Indices", "Photo de Coucke ripped as fuck par IA", "Pokéball", "Cadenas 2026 + boîte avec Pokéball"],
    indices: [
      { num: 1, text: "Ajoute le triathlon de Coucke à la plus longue distance qu'il ait parcourue sur ses jambes." },
      { num: 2, text: "C'était le jour de la saint vierge avec la sienne (de sainte) en l'an de grâce 2023." },
      { num: 3, text: "Pour la trouver, pratique ton suédois : comment dit-on « s'efforcer à faire quelque chose sans relâche » ?" },
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
    texte: null,
    materiel: ["QR code vers app Vercel", "Clavier d'ordinateur et souris", "Manette de PlayStation", "Texte de gameur", "Indice de salle Jeux de société"],
    indices: [
      { num: 1, text: "Coucke n'est pas très fort en sécurité — en mot de passe il a simplement tapé son gamer tag." },
      { num: 2, text: "Coucke n'est pas très fort en motricité — quand il ne voit pas ce qu'il écrit, il décale souvent ses doigts sur le clavier." },
      { num: 3, text: "Coucke a tendance à être plutôt à droite qu'à gauche." },
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
    texte: null,
    materiel: ["Jeu d'échecs", "Goban + règles de Goban", "Grille pour montrer le L2", "Jeu de cartes", "Bic encre invisible"],
    indices: [
      {
        num: 1,
        label: "Parchemin I — L'Échiquier",
        text: "Blanc joue. Un seul mouvement brise le roi noir. Lis le chemin : là où règne la tour, puis là où le cavalier achève. Deux cases. Deux lettres. Dans l'ordre du coup.",
      },
      {
        num: 2,
        label: "Parchemin II — Le Goban",
        text: "Une pierre manque. Le plateau est incomplet, le territoire instable. La pierre absente parle plus fort que toutes les autres. Là où elle doit reposer — commence ta lecture. [IMAGE : grille Goban avec pierre manquante à L2]",
      },
      {
        num: 3,
        label: "Parchemin III — Le Jeu de cartes",
        text: "Entre le visible et l'invisible du jeu qui pique les cœurs de ceux qui se tiennent à carreau, tu trouveras ta réponse.",
      },
    ],
    mj: {
      reponse: "ALEX (A de l'échiquier en E3, L du Goban en L2, E et X sur l'as de cœur à l'encre invisible)",
      detail: `Échiquier → mat en E3 → lettre E puis A (case de départ ?) → vérifier\nGoban → pierre manquante en L2 → lettre L\nJeu de cartes → As de cœur avec encre invisible → A et X`,
    },
  },
  {
    id: 7,
    name: "The Belfius Heist",
    subtitle: "Le casse du siècle",
    icon: "🏦",
    color: "#40DFA0",
    colorDark: "#106040",
    texte: `Coucke est un programmeur hors pair. Mais aujourd'hui, ses talents servent une cause bien particulière. Bienvenue dans le centre névralgique de Belfius — ou plutôt, dans ce qu'il en reste après que notre ami s'y soit introduit par effraction numérique.\n\nVotre mission : finir ce qu'il a commencé. Le terminal est ouvert, les fichiers sont là, et quelque part dans ce chaos de code se cache l'indice qui vous permettra de débloquer la suite. Fouillez, explorez, hackez. Mais faites vite — les administrateurs système ne dorment pas éternellement.`,
    materiel: ["Ordinateur avec bash / terminal ouvert", "Logo Belfius imprimé", "Décoration Belfius"],
    indices: [
      { num: 1, text: "bash escape" },
      { num: 2, text: "Login : Phantom" },
      { num: 3, text: "Password : DARKN3T" },
      { num: 4, text: "Commande à faire dans l'ordinateur (à préciser selon le script)" },
    ],
    mj: {
      reponse: "À définir selon le script bash",
      detail: `Utilisateur dédié macOS limité, Terminal en plein écran.\nArborescence dans /Users/joueur/systeme_banque/ avec vrais fichiers texte.\nCompte en banque : Michel Coucke — 20 000 000€ — Localisation : Dubai.\nRed herrings + fichiers cachés.\nCode PIN de Couckson à trouver.\nSite : https://hackertyper.net/ pour l'ambiance.`,
    },
  },
  {
    id: 8,
    name: "La Flamme de la Flemme",
    subtitle: "L'inextinguible passion pour rien",
    icon: "🔥",
    color: "#FF8040",
    colorDark: "#A03010",
    texte: null,
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
        {ROOMS.map((room, i) => (
          <div key={room.id} className={`room-section${i > 0 && i % 2 === 0 ? " page-break" : ""}`}>

            {/* ROOM HEADER */}
            <div className="room-header" style={{ background: `linear-gradient(135deg, ${room.colorDark}, ${room.color}33), ${room.colorDark}` }}>
              <span className="room-header-icon">{room.icon}</span>
              <div>
                <div className="room-header-title">{room.name}</div>
                <div className="room-header-sub">{room.subtitle}</div>
              </div>
              <div className="room-header-num">{String(room.id).padStart(2, "0")}</div>
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
