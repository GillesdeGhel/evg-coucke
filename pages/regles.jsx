const C = {
  bg: "#0C1F4A",
  bgDeep: "#081535",
  panel: "rgba(255,255,255,0.07)",
  panelHover: "rgba(255,255,255,0.11)",
  border: "rgba(255,255,255,0.12)",
  borderBlue: "rgba(100,170,255,0.3)",
  blue: "#4A90D9",
  blueLight: "#7ABCF5",
  blueMid: "#2E6CB8",
  gold: "#D4AF37",
  goldLight: "#F0D060",
  red: "#DB0007",
  white: "#FFFFFF",
  text: "#EEF4FF",
  subtext: "#B0CCEE",
  muted: "rgba(180,210,255,0.55)",
  cardBg: "rgba(10,30,80,0.55)",
};

const ROOMS = [
  { id: 1, name: "Couckémons", sub: "Attrapez-les tous", icon: "⚡", color: "#F7D02C" },
  { id: 2, name: "Fantasticouck", sub: "Un monde de merveilles", icon: "✨", color: "#C890F8" },
  { id: 3, name: "Alex(ia)", sub: "La bien-aimée", icon: "♥", color: "#FF6B8A" },
  { id: 4, name: "Le « Triathlon »", sub: "Courir, nager, pédaler... ou pas", icon: "🏊", color: "#60C8F5" },
  { id: 5, name: "Pro-Gaming", sub: "Instead of Programming", icon: "🎮", color: "#A080F8" },
  { id: 6, name: "Jeux de Société", sub: "Mais pas après 21h", icon: "🎲", color: "#F0C060" },
  { id: 7, name: "The Belfius Heist", sub: "Le casse du siècle", icon: "🏦", color: "#40DFA0" },
  { id: 8, name: "La Flamme de la Flemme", sub: "L'inextinguible passion pour rien", icon: "🔥", color: "#FF8040" },
];

function Card({ children, style = {} }) {
  return (
    <div style={{
      background: C.cardBg,
      border: `1px solid ${C.border}`,
      borderRadius: 8,
      padding: "24px 28px",
      marginBottom: 20,
      backdropFilter: "blur(8px)",
      boxShadow: "0 4px 24px rgba(0,0,0,0.25)",
      ...style,
    }}>
      {children}
    </div>
  );
}

function SectionTitle({ icon, children }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18 }}>
      <span style={{ fontSize: 18 }}>{icon}</span>
      <div style={{
        fontSize: 12,
        fontWeight: 800,
        color: C.blueLight,
        letterSpacing: 3,
        textTransform: "uppercase",
      }}>{children}</div>
      <div style={{ flex: 1, height: 1, background: `linear-gradient(90deg, ${C.borderBlue}, transparent)`, marginLeft: 8 }} />
    </div>
  );
}

function Rule({ num, children }) {
  return (
    <div style={{ display: "flex", gap: 14, marginBottom: 14, alignItems: "flex-start" }}>
      <div style={{
        minWidth: 26, height: 26,
        background: `linear-gradient(135deg, ${C.blue}, ${C.blueMid})`,
        borderRadius: "50%",
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: 11, fontWeight: 900, color: C.white, flexShrink: 0,
      }}>{num}</div>
      <div style={{ fontSize: 14, color: C.subtext, lineHeight: 1.75, paddingTop: 4 }}>{children}</div>
    </div>
  );
}

function Warning({ children }) {
  return (
    <div style={{
      background: "rgba(219,0,7,0.12)",
      border: `1px solid rgba(219,0,7,0.3)`,
      borderLeft: `3px solid ${C.red}`,
      borderRadius: "0 6px 6px 0",
      padding: "12px 16px",
      fontSize: 13,
      color: "#FFAAAA",
      lineHeight: 1.7,
      marginTop: 14,
    }}>{children}</div>
  );
}

function Tip({ icon, children }) {
  return (
    <div style={{
      background: "rgba(74,144,217,0.12)",
      border: `1px solid ${C.borderBlue}`,
      borderLeft: `3px solid ${C.blue}`,
      borderRadius: "0 6px 6px 0",
      padding: "12px 16px",
      fontSize: 13,
      color: C.blueLight,
      lineHeight: 1.7,
      marginTop: 12,
      display: "flex",
      gap: 10,
      alignItems: "flex-start",
    }}>
      <span style={{ fontSize: 18, flexShrink: 0 }}>{icon}</span>
      <span>{children}</span>
    </div>
  );
}

export default function Regles() {
  return (
    <div style={{ background: C.bgDeep, minHeight: "100vh", color: C.text, fontFamily: "Arial, sans-serif" }}>

      {/* NAV */}
      <nav style={{
        background: "rgba(8,21,53,0.92)",
        borderBottom: `1px solid ${C.border}`,
        padding: "0 32px",
        height: 56,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backdropFilter: "blur(10px)",
        position: "sticky",
        top: 0,
        zIndex: 100,
        boxShadow: "0 2px 16px rgba(0,0,0,0.4)",
      }}>
        <a href="/" style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none" }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: C.blueLight, letterSpacing: 2, textTransform: "uppercase" }}>EVG Coucke</div>
        </a>
        <div style={{ fontSize: 12, fontWeight: 700, color: C.muted, letterSpacing: 2, textTransform: "uppercase" }}>
          ♠ Règles du jeu ♠
        </div>
      </nav>

      {/* HERO — Alex image full width with overlay */}
      <div style={{ position: "relative", width: "100%", height: 480, overflow: "hidden" }}>
        <img
          src="/alex.png"
          alt="Alex au Pays des Merveilles"
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 15%", display: "block" }}
        />
        {/* Dark gradient overlay for text legibility */}
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(90deg, rgba(8,21,53,0.88) 0%, rgba(8,21,53,0.55) 55%, rgba(8,21,53,0.15) 100%)",
        }} />
        {/* Bottom fade into bg */}
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0, height: 100,
          background: `linear-gradient(to bottom, transparent, ${C.bgDeep})`,
        }} />

        {/* Text on image */}
        <div style={{
          position: "absolute", top: 0, left: 0, bottom: 0,
          display: "flex", flexDirection: "column", justifyContent: "center",
          padding: "0 56px", maxWidth: 580,
        }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: C.blueLight, letterSpacing: 4, textTransform: "uppercase", marginBottom: 12 }}>
            Escape Game · EVG Coucke
          </div>
          <h1 style={{
            fontSize: 46, fontWeight: 900, margin: "0 0 10px", color: C.white,
            lineHeight: 1.1, textShadow: "0 2px 20px rgba(0,0,0,0.5)",
          }}>
            Alex au Pays des Merveilles
          </h1>
          <div style={{ fontSize: 14, color: C.subtext, fontStyle: "italic", marginBottom: 20 }}>
            Suivez le lapin blanc. Il n'y a pas d'autre option.
          </div>
          <div style={{
            fontSize: 14, color: C.subtext, lineHeight: 1.85,
            background: "rgba(8,21,53,0.5)", border: `1px solid ${C.border}`,
            borderRadius: 8, padding: "16px 18px",
            backdropFilter: "blur(4px)",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 12, paddingBottom: 12, borderBottom: `1px solid ${C.border}` }}>
              <img src="/arsenal.webp" alt="Arsenal FC" style={{ height: 48, width: "auto", filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.5))" }} />
              <div style={{ fontSize: 12, color: C.muted, fontStyle: "normal", letterSpacing: 1, textTransform: "uppercase", lineHeight: 1.5 }}>
                Arsenal FC<br />
                <span style={{ color: C.red, fontWeight: 700 }}>⚠ Trophée en danger</span>
              </div>
            </div>
            <strong style={{ color: C.white }}>Arsenal est en péril.</strong> Le trophée de Premier League est sur le point de leur échapper.
            Alex doit plonger dans l'esprit de Coucke, suivre le <strong style={{ color: C.goldLight }}>lapin blanc 🐇</strong> à travers ses 8 facettes les plus obscures, et ramener ce trophée avant qu'il ne soit trop tard.{" "}
            <strong style={{ color: C.goldLight }}>Le chrono tourne.</strong>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div style={{ maxWidth: 820, margin: "0 auto", padding: "32px 24px 60px" }}>

        {/* EQUIPES */}
        <Card>
          <SectionTitle icon="⚔️">Structure des équipes</SectionTitle>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 16 }}>
            {["Équipe A", "Équipe B"].map((team, i) => (
              <div key={team} style={{
                background: "rgba(255,255,255,0.05)",
                border: `1px solid ${C.border}`,
                borderTop: `3px solid ${C.blue}`,
                borderRadius: 6,
                padding: "16px 18px",
              }}>
                <div style={{ fontSize: 13, fontWeight: 800, color: C.blueLight, marginBottom: 10, letterSpacing: 2, textTransform: "uppercase" }}>{team}</div>
                <div style={{ fontSize: 13, color: C.subtext, lineHeight: 1.8 }}>
                  <div style={{ marginBottom: 4 }}>Groupe {i * 2 + 1} — Parcours 1 &nbsp;<span style={{ color: C.muted }}>(3-4 joueurs)</span></div>
                  <div>Groupe {i * 2 + 2} — Parcours 2 &nbsp;<span style={{ color: C.muted }}>(3-4 joueurs)</span></div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ fontSize: 13, color: C.muted, lineHeight: 1.8 }}>
            ~14 participants · <strong style={{ color: C.text }}>2 équipes</strong> en compétition de vitesse · <strong style={{ color: C.text }}>8 salles</strong> en 2 parcours en boucle
          </div>
        </Card>

        {/* COMMUNICATION */}
        <Card>
          <SectionTitle icon="📻">Communication</SectionTitle>
          <Rule num="1">
            Chaque groupe reçoit un <strong style={{ color: C.text }}>talkie-walkie</strong>. C'est votre seul moyen de parler à vos coéquipiers de l'autre parcours.
          </Rule>
          <Rule num="2">
            Chaque équipe dispose d'<strong style={{ color: C.text }}>un téléphone</strong> pour faire des recherches sur internet — uniquement pour les énigmes, pas pour communiquer entre groupes.
          </Rule>
          <Rule num="3">
            Chaque groupe reçoit un <strong style={{ color: C.text }}>bic et du papier</strong>. Prenez des notes, dessinez, gribouiller ça aide.
          </Rule>
          <Tip icon="🐇">
            Votre équipe est divisée en deux parcours — la coopération par talkie-walkie n'est pas optionnelle, elle est vitale.
          </Tip>
        </Card>

        {/* REGLES */}
        <Card>
          <SectionTitle icon="📜">Règles du jeu</SectionTitle>
          <Rule num="1">
            Chaque salle contient <strong style={{ color: C.text }}>une grande énigme</strong> qui, une fois résolue, vous indique dans quelle salle aller ensuite.
          </Rule>
          <Rule num="2">
            Votre groupe ne peut <strong style={{ color: "#FF8888" }}>pas avancer</strong> à la salle suivante tant que <strong style={{ color: C.text }}>les deux groupes</strong> de votre équipe n'ont pas chacun résolu leur salle respective. Coordonnez-vous.
          </Rule>
          <Rule num="3">
            Les 8 salles vous donneront chacune <strong style={{ color: C.text }}>un fragment de l'indice final</strong>. Il faudra tout rassembler pour sauver Arsenal.
          </Rule>
          <Rule num="4">
            Les deux équipes ne commencent <strong style={{ color: C.text }}>pas au même endroit</strong> — le parcours est une boucle. Le temps de remettre les salles en ordre entre les passages.
          </Rule>
          <Warning>
            ⚠️ Les deux équipes sont en <strong>compétition directe de vitesse</strong>. Il n'y a pas de deuxième place honorable.
          </Warning>
        </Card>

        {/* LES SALLES */}
        <Card>
          <SectionTitle icon="🚪">Les 8 Salles</SectionTitle>
          <div style={{ fontSize: 13, color: C.muted, marginBottom: 16, fontStyle: "italic" }}>
            8 facettes de l'esprit de Coucke — dans un ordre que seul le lapin blanc connaît.
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
            {ROOMS.map((room) => (
              <div key={room.id} style={{
                background: "rgba(255,255,255,0.04)",
                border: `1px solid ${C.border}`,
                borderLeft: `4px solid ${room.color}`,
                borderRadius: "0 6px 6px 0",
                padding: "12px 16px",
                display: "flex",
                alignItems: "center",
                gap: 12,
              }}>
                <span style={{ fontSize: 22, flexShrink: 0 }}>{room.icon}</span>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: C.text }}>{room.name}</div>
                  <div style={{ fontSize: 11, color: C.muted, marginTop: 2, fontStyle: "italic" }}>{room.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* AIDE */}
        <Card>
          <SectionTitle icon="🐯">Besoin d'aide ?</SectionTitle>
          <div style={{ display: "flex", gap: 18, alignItems: "flex-start" }}>
            <div style={{
              fontSize: 52, flexShrink: 0,
              background: "rgba(255,255,255,0.05)",
              border: `1px solid ${C.border}`,
              borderRadius: 8,
              padding: "8px 14px",
              lineHeight: 1,
            }}>🐯</div>
            <div>
              <div style={{ fontSize: 15, fontWeight: 800, color: C.text, marginBottom: 8, textTransform: "uppercase", letterSpacing: 1 }}>
                Le Chat Rayé
              </div>
              <div style={{ fontSize: 14, color: C.subtext, lineHeight: 1.85 }}>
                Si vous êtes vraiment bloqués, allez faire un <strong style={{ color: C.text }}>afond</strong> auprès du <strong style={{ color: C.text }}>Chat Rayé</strong> — celui avec le déguisement de tigre, oui.
                Il ne donnera pas la réponse directement, mais il peut mettre votre groupe sur la bonne piste.
              </div>
            </div>
          </div>
          <Warning>
            ⚠️ Les afonds ont un coût. Pas en argent. En honneur.
          </Warning>
        </Card>

        {/* BIÈRE */}
        <Card style={{ border: `1px solid rgba(212,175,55,0.3)` }}>
          <SectionTitle icon="🍺">La Règle Sacrée</SectionTitle>
          <div style={{ textAlign: "center", padding: "10px 0 4px" }}>
            <div style={{ fontSize: 36, marginBottom: 12 }}>🍺</div>
            <div style={{ fontSize: 18, fontWeight: 800, color: C.goldLight, marginBottom: 12 }}>
              À chaque nouvelle salle → Finir sa bière.
            </div>
            <div style={{ fontSize: 13, color: C.muted, lineHeight: 1.85, maxWidth: 440, margin: "0 auto", fontStyle: "italic" }}>
              Ce n'est pas une suggestion. Ce n'est pas une option. C'est une règle fondamentale de l'univers de Coucke,
              gravée quelque part entre le triathlon et TFT.{" "}
              <strong style={{ color: C.text, fontStyle: "normal" }}>On ne triche pas avec la bière.</strong>
            </div>
          </div>
        </Card>

        {/* OBJECTIF FINAL */}
        <div style={{
          background: "rgba(10,30,80,0.7)",
          border: `1px solid ${C.border}`,
          borderTop: `3px solid ${C.red}`,
          borderRadius: 8,
          padding: "36px 24px",
          textAlign: "center",
          backdropFilter: "blur(8px)",
          boxShadow: "0 4px 24px rgba(0,0,0,0.3)",
        }}>
          <div style={{ fontSize: 36, marginBottom: 12 }}>🏆</div>
          <div style={{ fontSize: 22, fontWeight: 900, color: C.white, marginBottom: 12 }}>
            Objectif : Sauver le trophée de Premier League d'Arsenal
          </div>
          <div style={{ fontSize: 14, color: C.subtext, lineHeight: 1.85, maxWidth: 480, margin: "0 auto", fontStyle: "italic" }}>
            Suivez le lapin blanc à travers les 8 salles. Collectez chaque fragment d'indice.
            Assemblez-les. Sauvez Arsenal. La première équipe à y parvenir remporte la gloire éternelle —
            et la satisfaction de voir l'autre arriver deuxième.
          </div>
          <div style={{ marginTop: 24, fontSize: 20, letterSpacing: 10, color: C.border }}>
            ♠ ♥ ♦ ♣
          </div>
        </div>

      </div>
    </div>
  );
}
