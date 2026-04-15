const C = {
  bg: "#F2F2F2",
  white: "#FFFFFF",
  red: "#DB0007",
  redDark: "#A80005",
  redLight: "#FF1A20",
  navy: "#1A1F3A",
  gold: "#B5924C",
  text: "#1A1A1A",
  subtext: "#444444",
  muted: "#888888",
  border: "#DDDDDD",
  borderRed: "rgba(219,0,7,0.25)",
  cardBg: "#FFFFFF",
};

const ROOMS = [
  { id: 1, name: "Couckémons", sub: "Attrapez-les tous", icon: "⚡", color: "#F7D02C" },
  { id: 2, name: "Fantasticouck", sub: "Un monde de merveilles", icon: "✨", color: "#B48EE0" },
  { id: 3, name: "Alex(ia)", sub: "La bien-aimée", icon: "♥", color: C.red },
  { id: 4, name: "Le « Triathlon »", sub: "Courir, nager, pédaler... ou pas", icon: "🏊", color: "#2196F3" },
  { id: 5, name: "Pro-Gaming", sub: "Instead of Programming", icon: "🎮", color: "#7B5EA7" },
  { id: 6, name: "Jeux de Société", sub: "Mais pas après 21h", icon: "🎲", color: "#E8923C" },
  { id: 7, name: "The Belfius Heist", sub: "Le casse du siècle", icon: "🏦", color: "#22C37E" },
  { id: 8, name: "La Flamme de la Flemme", sub: "L'inextinguible passion pour rien", icon: "🔥", color: "#FF6B35" },
];

function Card({ children, style = {}, accent = false }) {
  return (
    <div style={{
      background: C.cardBg,
      border: `1px solid ${C.border}`,
      borderTop: accent ? `4px solid ${C.red}` : `4px solid ${C.red}`,
      borderRadius: 2,
      padding: "24px 28px",
      marginBottom: 20,
      boxShadow: "0 1px 4px rgba(0,0,0,0.07)",
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
        fontSize: 13,
        fontWeight: 800,
        color: C.text,
        letterSpacing: 2,
        textTransform: "uppercase",
        fontFamily: "Arial, sans-serif",
      }}>{children}</div>
      <div style={{ flex: 1, height: 2, background: C.red, opacity: 0.15, marginLeft: 8 }} />
    </div>
  );
}

function Rule({ num, children }) {
  return (
    <div style={{ display: "flex", gap: 14, marginBottom: 14, alignItems: "flex-start" }}>
      <div style={{
        minWidth: 26, height: 26,
        background: C.red,
        borderRadius: 2,
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: 11, fontWeight: 900, color: C.white, flexShrink: 0,
        fontFamily: "Arial, sans-serif",
      }}>{num}</div>
      <div style={{ fontSize: 14, color: C.subtext, lineHeight: 1.75, paddingTop: 4, fontFamily: "Arial, sans-serif" }}>{children}</div>
    </div>
  );
}

function Warning({ children }) {
  return (
    <div style={{
      background: "rgba(219,0,7,0.05)",
      border: `1px solid ${C.borderRed}`,
      borderLeft: `4px solid ${C.red}`,
      borderRadius: "0 2px 2px 0",
      padding: "12px 16px",
      fontSize: 13,
      color: C.redDark,
      lineHeight: 1.7,
      marginTop: 14,
      fontFamily: "Arial, sans-serif",
    }}>{children}</div>
  );
}

function Tip({ icon, children }) {
  return (
    <div style={{
      background: "#F8F8F8",
      border: `1px solid ${C.border}`,
      borderLeft: `4px solid ${C.gold}`,
      borderRadius: "0 2px 2px 0",
      padding: "12px 16px",
      fontSize: 13,
      color: C.subtext,
      lineHeight: 1.7,
      marginTop: 12,
      display: "flex",
      gap: 10,
      alignItems: "flex-start",
      fontFamily: "Arial, sans-serif",
    }}>
      <span style={{ fontSize: 18, flexShrink: 0 }}>{icon}</span>
      <span>{children}</span>
    </div>
  );
}

export default function Regles() {
  return (
    <div style={{ background: C.bg, minHeight: "100vh", color: C.text, fontFamily: "Arial, sans-serif" }}>

      {/* NAV */}
      <nav style={{
        background: C.red,
        padding: "0 32px",
        height: 56,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        boxShadow: "0 2px 8px rgba(0,0,0,0.25)",
      }}>
        <a href="/" style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none" }}>
          <img src="/arsenal.webp" alt="Arsenal FC" style={{ height: 38, width: "auto" }} />
          <div style={{ width: 1, height: 24, background: "rgba(255,255,255,0.3)" }} />
          <div style={{ fontSize: 13, fontWeight: 700, color: C.white, letterSpacing: 2, textTransform: "uppercase" }}>EVG Coucke</div>
        </a>
        <div style={{ fontSize: 12, fontWeight: 700, color: "rgba(255,255,255,0.85)", letterSpacing: 2, textTransform: "uppercase" }}>
          ♠ Règles du jeu ♠
        </div>
      </nav>

      {/* HERO */}
      <div style={{
        background: `linear-gradient(135deg, ${C.red} 0%, ${C.redDark} 100%)`,
        padding: "52px 24px 56px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Background subtle pattern */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.05) 0%, transparent 60%), radial-gradient(circle at 80% 50%, rgba(0,0,0,0.15) 0%, transparent 60%)",
          pointerEvents: "none",
        }} />

        {/* Decorative card suits */}
        <div style={{ position: "absolute", top: 18, left: 32, fontSize: 48, opacity: 0.06, color: C.white, fontFamily: "serif" }}>♠</div>
        <div style={{ position: "absolute", top: 18, right: 32, fontSize: 48, opacity: 0.06, color: C.white, fontFamily: "serif" }}>♥</div>
        <div style={{ position: "absolute", bottom: 14, left: 80, fontSize: 32, opacity: 0.06, color: C.white, fontFamily: "serif" }}>♣</div>
        <div style={{ position: "absolute", bottom: 14, right: 80, fontSize: 32, opacity: 0.06, color: C.white, fontFamily: "serif" }}>♦</div>

        {/* Arsenal logo */}
        <div style={{ position: "relative", zIndex: 1, marginBottom: 20 }}>
          <img
            src="/arsenal.webp"
            alt="Arsenal FC"
            style={{ height: 100, width: "auto", filter: "drop-shadow(0 4px 16px rgba(0,0,0,0.4))" }}
          />
        </div>

        <div style={{
          position: "relative", zIndex: 1,
          fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.7)",
          letterSpacing: 4, textTransform: "uppercase", marginBottom: 10,
        }}>Escape Game · EVG Coucke</div>

        <h1 style={{
          position: "relative", zIndex: 1,
          fontSize: 44,
          fontWeight: 900,
          margin: "0 0 8px",
          color: C.white,
          lineHeight: 1.15,
          letterSpacing: -0.5,
          textShadow: "0 2px 12px rgba(0,0,0,0.3)",
        }}>
          Alex au Pays des Merveilles
        </h1>

        <div style={{
          position: "relative", zIndex: 1,
          fontSize: 15, color: "rgba(255,255,255,0.75)",
          marginBottom: 30, fontStyle: "italic", letterSpacing: 0.3,
        }}>
          Suivez le lapin blanc. Il n'y a pas d'autre option.
        </div>

        {/* Context box */}
        <div style={{
          position: "relative", zIndex: 1,
          display: "inline-block",
          background: "rgba(0,0,0,0.25)",
          border: "1px solid rgba(255,255,255,0.15)",
          borderRadius: 3,
          padding: "18px 28px",
          fontSize: 14,
          color: "rgba(255,255,255,0.88)",
          lineHeight: 1.85,
          maxWidth: 560,
          textAlign: "left",
          backdropFilter: "blur(4px)",
        }}>
          <strong style={{ color: C.white }}>Arsenal est en péril.</strong> Le trophée de Premier League est sur le point de leur échapper — et il n'y a qu'une seule façon de les sauver.
          Alex doit plonger dans l'esprit tordu de Coucke, suivre le{" "}
          <strong style={{ color: C.white }}>lapin blanc 🐇</strong>{" "}
          à travers ses 8 facettes les plus obscures, et ramener ce trophée avant qu'il ne soit trop tard.{" "}
          <strong style={{ color: "#FFD080" }}>Le chrono tourne. La saison ne pardonne pas.</strong>
        </div>
      </div>

      {/* ALEX IMAGE */}
      <div style={{ width: "100%", maxHeight: 420, overflow: "hidden", position: "relative" }}>
        <img
          src="/alex.png"
          alt="Alex au Pays des Merveilles"
          style={{ width: "100%", objectFit: "cover", objectPosition: "center 20%", display: "block", maxHeight: 420 }}
        />
      </div>

      {/* CONTENT */}
      <div style={{ maxWidth: 820, margin: "0 auto", padding: "36px 24px 60px" }}>

        {/* EQUIPES */}
        <Card>
          <SectionTitle icon="⚔️">Structure des équipes</SectionTitle>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 16 }}>
            {["Équipe A", "Équipe B"].map((team, i) => (
              <div key={team} style={{
                background: "#FAFAFA",
                border: `1px solid ${C.border}`,
                borderLeft: `4px solid ${C.red}`,
                borderRadius: "0 2px 2px 0",
                padding: "16px 18px",
              }}>
                <div style={{ fontSize: 14, fontWeight: 800, color: C.red, marginBottom: 10, letterSpacing: 1, textTransform: "uppercase" }}>{team}</div>
                <div style={{ fontSize: 13, color: C.subtext, lineHeight: 1.8 }}>
                  <div style={{ marginBottom: 4 }}>Groupe {i * 2 + 1} — Parcours 1 &nbsp;<span style={{ color: C.muted }}>(3-4 joueurs)</span></div>
                  <div>Groupe {i * 2 + 2} — Parcours 2 &nbsp;<span style={{ color: C.muted }}>(3-4 joueurs)</span></div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ fontSize: 13, color: C.muted, lineHeight: 1.8 }}>
            ~14 participants au total · <strong style={{ color: C.text }}>2 équipes</strong> en compétition de vitesse · <strong style={{ color: C.text }}>8 salles</strong> réparties en 2 parcours en boucle
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
            Votre groupe ne peut <strong style={{ color: C.red }}>pas avancer</strong> à la salle suivante tant que <strong style={{ color: C.text }}>les deux groupes</strong> de votre équipe n'ont pas chacun résolu leur salle respective. Coordonnez-vous.
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
                background: "#FAFAFA",
                border: `1px solid ${C.border}`,
                borderLeft: `4px solid ${room.color}`,
                borderRadius: "0 2px 2px 0",
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
              background: "#F8F8F8",
              border: `1px solid ${C.border}`,
              borderRadius: 4,
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
        <Card style={{ borderTop: `4px solid ${C.gold}` }}>
          <SectionTitle icon="🍺">La Règle Sacrée</SectionTitle>
          <div style={{ textAlign: "center", padding: "10px 0 4px" }}>
            <div style={{ fontSize: 36, marginBottom: 12 }}>🍺</div>
            <div style={{ fontSize: 18, fontWeight: 800, color: C.text, marginBottom: 12, letterSpacing: -0.3 }}>
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
          background: C.red,
          borderRadius: 2,
          padding: "36px 24px",
          textAlign: "center",
          boxShadow: "0 4px 20px rgba(219,0,7,0.3)",
          position: "relative",
          overflow: "hidden",
        }}>
          <div style={{
            position: "absolute", inset: 0,
            backgroundImage: "radial-gradient(circle at 30% 50%, rgba(255,255,255,0.06) 0%, transparent 60%)",
            pointerEvents: "none",
          }} />
          <div style={{ position: "relative", zIndex: 1 }}>
            <img
              src="/arsenal.webp"
              alt="Arsenal FC"
              style={{ height: 72, width: "auto", marginBottom: 16, filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.4))" }}
            />
            <div style={{ fontSize: 22, fontWeight: 900, color: C.white, marginBottom: 12, letterSpacing: -0.3 }}>
              Objectif : Sauver le trophée de Premier League d'Arsenal
            </div>
            <div style={{ fontSize: 14, color: "rgba(255,255,255,0.8)", lineHeight: 1.85, maxWidth: 480, margin: "0 auto", fontStyle: "italic" }}>
              Suivez le lapin blanc à travers les 8 salles. Collectez chaque fragment d'indice.
              Assemblez-les. Sauvez Arsenal. La première équipe à y parvenir remporte la gloire éternelle —
              et la satisfaction de voir l'autre arriver deuxième.
            </div>
            <div style={{ marginTop: 24, fontSize: 20, letterSpacing: 10, color: "rgba(255,255,255,0.2)" }}>
              ♠ ♥ ♦ ♣
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
