import Head from "next/head";

const ROOMS = [
  {
    id: 1,
    name: "Couckémons",
    subtitle: "Attrapez-les tous",
    icon: "⚡",
    color: "#F7D02C",
    colorDark: "#C8A800",
    indices: [
      {
        num: 1,
        text: "Trouve les Couckémons et mets-les dans l'ordre, en suivant les instructions tu trouveras ta prochaine action.",
      },
      {
        num: 2,
        text: "Quel type est super efficace contre le 1er ? Prends le mot entier.",
      },
      {
        num: 3,
        text: "Attaque les Pokémons de 2 à 6 avec le type le plus efficace.",
      },
      {
        num: 4,
        text: "Utilise le type du Pokémon numéro 7.",
      },
      {
        num: 5,
        text: "N'attaque pas le Pokémon 8 comme un animal à 6 pattes.",
      },
    ],
  },
  {
    id: 2,
    name: "Fantasticouck",
    subtitle: "Un monde de merveilles",
    icon: "✨",
    color: "#C890F8",
    colorDark: "#8A50C8",
    indices: [],
  },
  {
    id: 3,
    name: "Alex(ia)",
    subtitle: "La bien-aimée",
    icon: "♥",
    color: "#FF6B8A",
    colorDark: "#C83050",
    indices: [],
  },
  {
    id: 4,
    name: 'Le "Triathlon"',
    subtitle: "Courir, nager, pédaler... ou pas",
    icon: "🏊",
    color: "#60C8F5",
    colorDark: "#1A80C0",
    indices: [],
  },
  {
    id: 5,
    name: "Pro-Gaming",
    subtitle: "Instead of Programming",
    icon: "🎮",
    color: "#A080F8",
    colorDark: "#6040C0",
    indices: [],
  },
  {
    id: 6,
    name: "Jeux de Société",
    subtitle: "Mais pas après 21h",
    icon: "🎲",
    color: "#F0C060",
    colorDark: "#B08020",
    indices: [],
  },
  {
    id: 7,
    name: "The Belfius Heist",
    subtitle: "Le casse du siècle",
    icon: "🏦",
    color: "#40DFA0",
    colorDark: "#108060",
    indices: [],
  },
  {
    id: 8,
    name: "La Flamme de la Flemme",
    subtitle: "L'inextinguible passion pour rien",
    icon: "🔥",
    color: "#FF8040",
    colorDark: "#C04010",
    indices: [],
  },
];

export default function Indices() {
  return (
    <>
      <Head>
        <title>Indices — EVG Coucke</title>
        <style>{`
          * { box-sizing: border-box; margin: 0; padding: 0; }

          body {
            background: #f0f0f0;
            font-family: Arial, sans-serif;
          }

          .screen-nav {
            background: #1a1a2e;
            color: white;
            padding: 12px 32px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            position: sticky;
            top: 0;
            z-index: 100;
            box-shadow: 0 2px 8px rgba(0,0,0,0.3);
          }

          .screen-nav h1 {
            font-size: 16px;
            font-weight: 800;
            letter-spacing: 2px;
            text-transform: uppercase;
          }

          .print-btn {
            background: #DB0007;
            color: white;
            border: none;
            padding: 8px 20px;
            border-radius: 4px;
            font-size: 13px;
            font-weight: 700;
            cursor: pointer;
            letter-spacing: 1px;
            text-transform: uppercase;
          }

          .print-btn:hover { background: #AA0005; }

          .page-wrapper {
            max-width: 900px;
            margin: 0 auto;
            padding: 32px 24px 60px;
          }

          .room-section {
            margin-bottom: 48px;
          }

          .room-header {
            display: flex;
            align-items: center;
            gap: 12px;
            margin-bottom: 20px;
            padding-bottom: 12px;
            border-bottom: 2px solid #ddd;
          }

          .room-icon {
            font-size: 24px;
          }

          .room-title {
            font-size: 20px;
            font-weight: 900;
            text-transform: uppercase;
            letter-spacing: 1px;
          }

          .room-subtitle {
            font-size: 12px;
            color: #888;
            font-style: italic;
            margin-top: 2px;
          }

          .cards-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 0;
          }

          .card {
            border: 2px dashed #bbb;
            padding: 20px;
            position: relative;
            background: white;
            margin: -1px;
            page-break-inside: avoid;
            break-inside: avoid;
          }

          .cut-corner {
            position: absolute;
            top: 6px;
            right: 8px;
            font-size: 10px;
            color: #ccc;
            letter-spacing: 0.5px;
          }

          .card-room-badge {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            padding: 3px 10px;
            border-radius: 20px;
            font-size: 10px;
            font-weight: 800;
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-bottom: 12px;
            color: white;
          }

          .card-num {
            font-size: 11px;
            font-weight: 700;
            color: #aaa;
            text-transform: uppercase;
            letter-spacing: 2px;
            margin-bottom: 8px;
          }

          .card-text {
            font-size: 15px;
            line-height: 1.7;
            color: #1a1a1a;
            font-weight: 500;
          }

          .empty-card {
            border: 2px dashed #e0e0e0;
            background: #fafafa;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 12px;
            color: #ccc;
            font-style: italic;
            min-height: 100px;
          }

          .placeholder-room {
            border: 2px dashed #e0e0e0;
            border-radius: 8px;
            padding: 24px;
            text-align: center;
            color: #bbb;
            font-style: italic;
            font-size: 13px;
          }

          /* ===== PRINT STYLES ===== */
          @media print {
            @page {
              margin: 12mm;
              size: A4;
            }

            body { background: white; }

            .screen-nav { display: none !important; }

            .page-wrapper {
              max-width: 100%;
              padding: 0;
            }

            .room-section {
              margin-bottom: 36px;
            }

            .card {
              page-break-inside: avoid;
              break-inside: avoid;
            }

            .cards-grid {
              break-inside: avoid;
            }
          }
        `}</style>
      </Head>

      {/* Screen-only nav */}
      <nav className="screen-nav">
        <h1>✂ Indices à imprimer — EVG Coucke</h1>
        <button className="print-btn" onClick={() => window.print()}>
          🖨 Imprimer
        </button>
      </nav>

      <div className="page-wrapper">
        {ROOMS.map((room) => (
          <div key={room.id} className="room-section">

            {/* Room header */}
            <div className="room-header">
              <span className="room-icon">{room.icon}</span>
              <div>
                <div className="room-title" style={{ color: room.colorDark }}>
                  Salle {room.id} — {room.name}
                </div>
                <div className="room-subtitle">{room.subtitle}</div>
              </div>
            </div>

            {/* Cards */}
            {room.indices.length > 0 ? (
              <div className="cards-grid">
                {room.indices.map((indice) => (
                  <div className="card" key={indice.num}>
                    <div className="cut-corner">✂ couper</div>
                    <div
                      className="card-room-badge"
                      style={{ background: room.colorDark }}
                    >
                      <span>{room.icon}</span>
                      {room.name}
                    </div>
                    <div className="card-num">Indice {indice.num}</div>
                    <div className="card-text">{indice.text}</div>
                  </div>
                ))}
                {/* Fill empty slot if odd number of cards */}
                {room.indices.length % 2 !== 0 && (
                  <div className="card empty-card">— vide —</div>
                )}
              </div>
            ) : (
              <div className="placeholder-room">
                Indices à ajouter pour cette salle…
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
