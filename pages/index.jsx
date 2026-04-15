import { useState } from "react";

const MATCHES = [
  { place: 8, comp: "Reroll Assassins", augment: "Défaite assurée", duration: "32 min", ago: "Il y a 2h", lp: -28 },
  { place: 8, comp: "Dragonland", augment: "Perte de temps", duration: "28 min", ago: "Il y a 4h", lp: -28 },
  { place: 7, comp: "Hyper Roll", augment: "Abandon total", duration: "19 min", ago: "Il y a 5h", lp: -22 },
  { place: 8, comp: "Reroll Mages", augment: "Erreur critique", duration: "41 min", ago: "Il y a 7h", lp: -28 },
  { place: 8, comp: "Standard", augment: "Mauvaise décision", duration: "35 min", ago: "Il y a 9h", lp: -28 },
  { place: 7, comp: "Reroll Carry", augment: "Chance nulle", duration: "27 min", ago: "Il y a 11h", lp: -22 },
  { place: 8, comp: "Dragonland", augment: "Catastrophe", duration: "33 min", ago: "Il y a 13h", lp: -28 },
  { place: 8, comp: "Hyper Roll", augment: "Vraiment nul", duration: "22 min", ago: "Il y a 15h", lp: -28 },
];

// TFT color palette
const C = {
  bg: "#0A0914",
  panel: "#13112A",
  panelAlt: "#1A1735",
  border: "#2D2659",
  borderLight: "#3D3570",
  gold: "#C89B3C",
  goldLight: "#F0C060",
  purple: "#7B5EA7",
  purpleLight: "#A87FD2",
  teal: "#0ACFCF",
  tealDark: "#077A7A",
  text: "#F0E6D3",
  subtext: "#9B93C0",
  muted: "#4A4270",
  red: "#E84057",
  redBg: "#2A0D18",
  redBorder: "#6B1D30",
  green: "#34d399",
  greenBg: "#0A2218",
  greenBorder: "#1A4A30",
};

export default function App() {
  const [page, setPage] = useState("login");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [tab, setTab] = useState(0);

  function tryLogin() {
    if (username.trim().toLowerCase() === "fukinwhiterabbit" && password.trim().toLowerCase() === "gilo,xjoyrtznnoy") {
      setPage("app");
      setError(false);
    } else {
      setError(true);
    }
  }

  return (
    <div style={{ background: C.bg, minHeight: "100vh", color: C.text, fontFamily: "Segoe UI, Arial, sans-serif" }}>

      {/* NAV */}
      <nav style={{ background: C.panel, borderBottom: `1px solid ${C.border}`, padding: "0 32px", height: 56, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div style={{ fontSize: 20, fontWeight: 800, color: C.gold, letterSpacing: 3, textTransform: "uppercase" }}>
            TFT
          </div>
          <div style={{ width: 1, height: 20, background: C.border }} />
          <div style={{ fontSize: 12, color: C.subtext, letterSpacing: 1, textTransform: "uppercase" }}>
            Teamfight Tactics
          </div>
        </div>
        <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
          {["Support", "Status", "Privacy"].map(l => (
            <span key={l} style={{ color: C.muted, fontSize: 12, letterSpacing: 0.5 }}>{l}</span>
          ))}
          <a href="/regles" style={{ color: C.purple, fontSize: 12, letterSpacing: 0.5, textDecoration: "none", fontWeight: 600 }}>📜 Règles EVG</a>
        </div>
      </nav>

      {/* LOGIN */}
      {page === "login" && (
        <div style={{ minHeight: "calc(100vh - 56px)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ background: C.panel, border: `1px solid ${C.border}`, borderRadius: 6, padding: "48px 40px", width: 400 }}>
            {/* TFT title on login */}
            <div style={{ textAlign: "center", marginBottom: 28 }}>
              <div style={{ fontSize: 28, fontWeight: 800, color: C.gold, letterSpacing: 4, textTransform: "uppercase" }}>TFT</div>
              <div style={{ fontSize: 11, color: C.subtext, letterSpacing: 2, textTransform: "uppercase", marginTop: 4 }}>Teamfight Tactics</div>
              <div style={{ width: 40, height: 2, background: `linear-gradient(90deg, ${C.purple}, ${C.teal})`, margin: "12px auto 0" }} />
            </div>

            <div style={{ fontSize: 11, color: C.muted, textAlign: "center", marginBottom: 28, letterSpacing: 1, textTransform: "uppercase" }}>Connexion au compte Riot</div>

            {error && (
              <div style={{ background: C.redBg, border: `1px solid ${C.redBorder}`, borderRadius: 4, padding: "10px 14px", fontSize: 13, color: C.red, marginBottom: 20 }}>
                Identifiant ou mot de passe incorrect.
              </div>
            )}

            {[
              { label: "Username", value: username, setter: setUsername, type: "text" },
              { label: "Password", value: password, setter: setPassword, type: "password" },
            ].map(({ label, value, setter, type }) => (
              <div key={label} style={{ marginBottom: 20 }}>
                <label style={{ display: "block", fontSize: 11, fontWeight: 600, color: C.subtext, letterSpacing: 1, textTransform: "uppercase", marginBottom: 8 }}>{label}</label>
                <input
                  type={type}
                  value={value}
                  onChange={e => setter(e.target.value)}
                  onKeyDown={e => e.key === "Enter" && tryLogin()}
                  style={{ width: "100%", background: C.bg, border: `1px solid ${C.border}`, borderRadius: 4, padding: "12px 14px", color: C.text, fontSize: 14, outline: "none", fontFamily: "inherit", boxSizing: "border-box" }}
                />
              </div>
            ))}

            <button
              onClick={tryLogin}
              style={{ width: "100%", background: `linear-gradient(135deg, ${C.gold}, #A07828)`, border: "none", borderRadius: 4, padding: 14, color: "#0A0914", fontSize: 14, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", cursor: "pointer", fontFamily: "inherit" }}
            >
              Se connecter
            </button>
          </div>
        </div>
      )}

      {/* APP */}
      {page === "app" && (
        <div>
          {/* TABS */}
          <div style={{ background: C.panel, borderBottom: `1px solid ${C.border}`, display: "flex", padding: "0 32px" }}>
            {["Match History", "Messages Admin"].map((t, i) => (
              <div
                key={t}
                onClick={() => setTab(i)}
                style={{ padding: "16px 24px", fontSize: 12, fontWeight: 600, color: tab === i ? C.gold : C.muted, cursor: "pointer", borderBottom: tab === i ? `2px solid ${C.gold}` : "2px solid transparent", letterSpacing: 0.5, textTransform: "uppercase" }}
              >
                {t}
              </div>
            ))}
          </div>

          {/* MATCH HISTORY */}
          {tab === 0 && (
            <div style={{ padding: 32 }}>
              {/* Profile */}
              <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 28, background: C.panel, border: `1px solid ${C.border}`, borderRadius: 6, padding: "20px 24px" }}>
                <div style={{ width: 64, height: 64, borderRadius: "50%", background: C.panelAlt, border: `2px solid ${C.gold}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, color: C.gold, fontWeight: 800, flexShrink: 0, letterSpacing: 1 }}>FWR</div>
                <div>
                  <div style={{ fontSize: 18, color: C.text, fontWeight: 700 }}>FukinWhiteRabbit</div>
                  <div style={{ fontSize: 12, color: C.subtext, marginTop: 6, display: "flex", alignItems: "center", gap: 10 }}>
                    <span style={{ color: C.teal, fontWeight: 600 }}>Teamfight Tactics</span>
                    <span style={{ color: C.muted }}>·</span>
                    <span>Saison 2024</span>
                    <span style={{ background: C.redBg, color: C.red, fontSize: 10, fontWeight: 700, padding: "2px 8px", borderRadius: 3, letterSpacing: 0.5, textTransform: "uppercase", border: `1px solid ${C.redBorder}` }}>Iron IV</span>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 12, marginBottom: 28 }}>
                {[
                  { val: "0%", lbl: "Win rate", ok: false },
                  { val: "7.9", lbl: "Placement moyen", ok: false },
                  { val: "2 147h", lbl: "Temps de jeu", ok: true },
                ].map(({ val, lbl, ok }) => (
                  <div key={lbl} style={{ background: C.panel, border: `1px solid ${C.border}`, borderRadius: 6, padding: 16, textAlign: "center" }}>
                    <div style={{ fontSize: 26, fontWeight: 700, color: ok ? C.teal : C.red }}>{val}</div>
                    <div style={{ fontSize: 11, color: C.muted, marginTop: 4, textTransform: "uppercase", letterSpacing: 0.5 }}>{lbl}</div>
                  </div>
                ))}
              </div>

              {/* Matches */}
              <div style={{ fontSize: 11, fontWeight: 700, color: C.muted, letterSpacing: 1, textTransform: "uppercase", marginBottom: 12 }}>Dernières parties</div>
              {MATCHES.map((m, i) => (
                <div key={i} style={{ background: C.panel, border: `1px solid ${C.border}`, borderLeft: `3px solid ${C.red}`, borderRadius: "0 6px 6px 0", padding: "14px 20px", marginBottom: 8, display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: 13 }}>
                  <div style={{ fontSize: 22, fontWeight: 800, color: C.red, minWidth: 36 }}>{m.place}e</div>
                  <div style={{ flex: 1, marginLeft: 16 }}>
                    <div style={{ color: C.text, fontWeight: 500, marginBottom: 3 }}>{m.comp} — <span style={{ color: C.subtext }}>Augment: {m.augment}</span></div>
                    <div style={{ fontSize: 12, color: C.muted }}>{m.duration} · {m.ago}</div>
                  </div>
                  <div style={{ fontSize: 13, color: C.red, fontWeight: 700 }}>{m.lp} LP</div>
                </div>
              ))}
            </div>
          )}

          {/* ADMIN MESSAGE */}
          {tab === 1 && (
            <div style={{ padding: 32 }}>
              <div style={{ background: C.panel, border: `1px solid ${C.redBorder}`, borderRadius: 6, padding: 32, maxWidth: 680, margin: "0 auto" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24, paddingBottom: 16, borderBottom: `1px solid ${C.border}` }}>
                  <div style={{ width: 40, height: 40, background: C.redBg, border: `1px solid ${C.redBorder}`, borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, flexShrink: 0 }}>⚠</div>
                  <div>
                    <div style={{ fontSize: 15, color: C.text, fontWeight: 700 }}>Avertissement officiel — Équipe Riot Games</div>
                    <div style={{ fontSize: 11, color: C.muted, marginTop: 2 }}>Reçu le 14 juin 2025 · <span style={{ fontFamily: "monospace", color: C.gold }}>TICKET #RG-2025-0614-FWR</span></div>
                  </div>
                </div>

                <p style={{ fontSize: 14, color: C.subtext, lineHeight: 1.8, marginBottom: 16 }}>
                  Bonjour <strong style={{ color: C.text }}>FukinWhiteRabbit</strong>,
                </p>
                <p style={{ fontSize: 14, color: C.subtext, lineHeight: 1.8, marginBottom: 16 }}>
                  Nos systèmes ont détecté une activité de jeu <strong style={{ color: C.text }}>anormalement élevée</strong> sur votre compte au cours des 90 derniers jours. Avec <strong style={{ color: C.text }}>2 147 heures de jeu</strong> enregistrées cette saison — et un taux de victoire de <strong style={{ color: C.text }}>0%</strong> — nous avons jugé nécessaire de vous contacter directement.
                </p>

                <div style={{ background: C.redBg, borderLeft: `3px solid ${C.red}`, padding: "12px 16px", borderRadius: "0 4px 4px 0", margin: "20px 0", fontSize: 13, color: C.red, lineHeight: 1.7 }}>
                  Votre compte a été temporairement <strong>restreint</strong> suite au déclenchement de notre protocole de bien-être joueur.<br />
                  Motif : temps de jeu excessif couplé à des performances en déclin constant.<br />
                  Statut actuel : <strong>IRON IV — 0 LP</strong>
                </div>

                <p style={{ fontSize: 14, color: C.subtext, lineHeight: 1.8, marginBottom: 16 }}>
                  Notre équipe de psychologues du sport a analysé votre historique. Le diagnostic est sans appel : vous avez besoin de <strong style={{ color: C.text }}>mouvement physique</strong>. Votre cerveau tourne en boucle, vos réflexes se dégradent, et votre métabolisme réclame de l&apos;oxygène.
                </p>

                <p style={{ fontSize: 14, color: C.subtext, lineHeight: 1.8, marginBottom: 16 }}>
                  Nous ne vous demandons pas d&apos;arrêter de jouer. Nous vous demandons de <strong style={{ color: C.text }}>courir, nager, et pédaler</strong> — dans cet ordre. Revenez quand votre corps aura repris ses droits sur votre esprit.
                </p>

                <div style={{ background: C.greenBg, border: `1px solid ${C.greenBorder}`, borderRadius: 4, padding: "16px 20px", fontSize: 13, color: C.green, lineHeight: 1.7, marginTop: 20 }}>
                  Recommandation Riot Wellness Program :<br />
                  <strong>Triathlon d&apos;initiation — distance S</strong><br />
                  750m natation · 20km vélo · 5km course à pied<br /><br />
                  Votre corps sait ce qu&apos;il fait. Suivez-le.
                </div>

                <div style={{ marginTop: 24, paddingTop: 16, borderTop: `1px solid ${C.border}`, fontSize: 11, color: C.muted }}>
                  Riot Games · Player Wellness Department · riot-wellness@riotgames.com<br />
                  Ce message est automatique. Ne pas répondre à cet email.
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
