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

  const bg = { background: "#0a0e1a", minHeight: "100vh", color: "#ccd3e0", fontFamily: "Segoe UI, Arial, sans-serif" };

  return (
    <div style={bg}>
      {/* NAV */}
      <nav style={{ background: "#111827", borderBottom: "1px solid #1e2d45", padding: "0 32px", height: 52, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ fontSize: 18, fontWeight: 700, color: "#c89b3c", letterSpacing: 2, textTransform: "uppercase" }}>
          <span style={{ color: "#e8b84b" }}>RIOT</span> GAMES
        </div>
        <div style={{ display: "flex", gap: 24 }}>
          {["Support", "Status", "Privacy"].map(l => (
            <span key={l} style={{ color: "#8a9bb5", fontSize: 13, letterSpacing: 0.5 }}>{l}</span>
          ))}
        </div>
      </nav>

      {/* LOGIN */}
      {page === "login" && (
        <div style={{ minHeight: "calc(100vh - 52px)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ background: "#111827", border: "1px solid #1e2d45", borderRadius: 4, padding: "48px 40px", width: 400 }}>
            <h1 style={{ fontSize: 22, fontWeight: 700, color: "#e8d5a3", marginBottom: 8, textAlign: "center", letterSpacing: 1, textTransform: "uppercase" }}>Sign In</h1>
            <div style={{ fontSize: 12, color: "#4a5568", textAlign: "center", marginBottom: 32, letterSpacing: 0.5 }}>RIOT GAMES ACCOUNT</div>

            {error && (
              <div style={{ background: "#2d1515", border: "1px solid #6b2020", borderRadius: 3, padding: "10px 14px", fontSize: 13, color: "#f87171", marginBottom: 20 }}>
                Identifiant ou mot de passe incorrect.
              </div>
            )}

            {[
              { label: "Username", value: username, setter: setUsername, type: "text" },
              { label: "Password", value: password, setter: setPassword, type: "password" },
            ].map(({ label, value, setter, type }) => (
              <div key={label} style={{ marginBottom: 20 }}>
                <label style={{ display: "block", fontSize: 11, fontWeight: 600, color: "#8a9bb5", letterSpacing: 1, textTransform: "uppercase", marginBottom: 8 }}>{label}</label>
                <input
                  type={type}
                  value={value}
                  onChange={e => setter(e.target.value)}
                  onKeyDown={e => e.key === "Enter" && tryLogin()}
                  style={{ width: "100%", background: "#0a0e1a", border: "1px solid #1e2d45", borderRadius: 3, padding: "12px 14px", color: "#ccd3e0", fontSize: 14, outline: "none", fontFamily: "inherit", boxSizing: "border-box" }}
                />
              </div>
            ))}

            <button
              onClick={tryLogin}
              style={{ width: "100%", background: "#c89b3c", border: "none", borderRadius: 3, padding: 14, color: "#0a0e1a", fontSize: 14, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", cursor: "pointer", fontFamily: "inherit" }}
            >
              Sign In
            </button>
          </div>
        </div>
      )}

      {/* APP */}
      {page === "app" && (
        <div>
          {/* TABS */}
          <div style={{ background: "#111827", borderBottom: "1px solid #1e2d45", display: "flex", padding: "0 32px" }}>
            {["Match History", "Messages Admin"].map((t, i) => (
              <div
                key={t}
                onClick={() => setTab(i)}
                style={{ padding: "16px 24px", fontSize: 13, fontWeight: 600, color: tab === i ? "#c89b3c" : "#4a5568", cursor: "pointer", borderBottom: tab === i ? "2px solid #c89b3c" : "2px solid transparent", letterSpacing: 0.5, textTransform: "uppercase" }}
              >
                {t}
              </div>
            ))}
          </div>

          {/* MATCH HISTORY */}
          {tab === 0 && (
            <div style={{ padding: 32 }}>
              {/* Profile */}
              <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 32, background: "#111827", border: "1px solid #1e2d45", borderRadius: 4, padding: "20px 24px" }}>
                <div style={{ width: 64, height: 64, borderRadius: "50%", background: "#1e2d45", border: "2px solid #c89b3c", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, color: "#c89b3c", fontWeight: 700, flexShrink: 0 }}>FWR</div>
                <div>
                  <div style={{ fontSize: 18, color: "#e8d5a3", fontWeight: 700 }}>FukinWhiteRabbit</div>
                  <div style={{ fontSize: 12, color: "#8a9bb5", marginTop: 4, display: "flex", alignItems: "center", gap: 8 }}>
                    TFT — Saison 2024
                    <span style={{ background: "#2d1515", color: "#f87171", fontSize: 10, fontWeight: 700, padding: "2px 8px", borderRadius: 2, letterSpacing: 0.5, textTransform: "uppercase" }}>Iron IV</span>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 12, marginBottom: 32 }}>
                {[
                  { val: "0%", lbl: "Win rate", ok: false },
                  { val: "7.9", lbl: "Placement moyen", ok: false },
                  { val: "2 147h", lbl: "Temps de jeu", ok: true },
                ].map(({ val, lbl, ok }) => (
                  <div key={lbl} style={{ background: "#111827", border: "1px solid #1e2d45", borderRadius: 4, padding: 16, textAlign: "center" }}>
                    <div style={{ fontSize: 24, fontWeight: 700, color: ok ? "#34d399" : "#f87171" }}>{val}</div>
                    <div style={{ fontSize: 11, color: "#4a5568", marginTop: 4, textTransform: "uppercase", letterSpacing: 0.5 }}>{lbl}</div>
                  </div>
                ))}
              </div>

              {/* Matches */}
              <div style={{ fontSize: 12, fontWeight: 700, color: "#4a5568", letterSpacing: 1, textTransform: "uppercase", marginBottom: 12 }}>Dernières parties</div>
              {MATCHES.map((m, i) => (
                <div key={i} style={{ background: "#111827", border: "1px solid #1e2d45", borderLeft: "3px solid #6b2020", borderRadius: "0 4px 4px 0", padding: "14px 20px", marginBottom: 8, display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: 13 }}>
                  <div style={{ fontSize: 20, fontWeight: 700, color: "#f87171", minWidth: 36 }}>{m.place}e</div>
                  <div style={{ flex: 1, marginLeft: 16 }}>
                    <div style={{ color: "#ccd3e0", fontWeight: 500, marginBottom: 2 }}>{m.comp} — Augment: {m.augment}</div>
                    <div style={{ fontSize: 12, color: "#4a5568" }}>{m.duration} · {m.ago}</div>
                  </div>
                  <div style={{ fontSize: 12, color: "#f87171", fontWeight: 600 }}>{m.lp} LP</div>
                </div>
              ))}
            </div>
          )}

          {/* ADMIN MESSAGE */}
          {tab === 1 && (
            <div style={{ padding: 32 }}>
              <div style={{ background: "#111827", border: "1px solid #6b2020", borderRadius: 4, padding: 32, maxWidth: 680, margin: "0 auto" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24, paddingBottom: 16, borderBottom: "1px solid #1e2d45" }}>
                  <div style={{ width: 40, height: 40, background: "#2d1515", border: "1px solid #6b2020", borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, flexShrink: 0 }}>⚠</div>
                  <div>
                    <div style={{ fontSize: 15, color: "#e8d5a3", fontWeight: 700 }}>Avertissement officiel — Équipe Riot Games</div>
                    <div style={{ fontSize: 11, color: "#4a5568", marginTop: 2 }}>Reçu le 14 juin 2025 · <span style={{ fontFamily: "monospace", color: "#c89b3c" }}>TICKET #RG-2025-0614-FWR</span></div>
                  </div>
                </div>

                {[
                  <>Bonjour <strong style={{ color: "#ccd3e0" }}>FukinWhiteRabbit</strong>,</>,
                  <>Nos systèmes ont détecté une activité de jeu <strong style={{ color: "#ccd3e0" }}>anormalement élevée</strong> sur votre compte au cours des 90 derniers jours. Avec <strong style={{ color: "#ccd3e0" }}>2 147 heures de jeu</strong> enregistrées cette saison — et un taux de victoire de <strong style={{ color: "#ccd3e0" }}>0%</strong> — nous avons jugé nécessaire de vous contacter directement.</>,
                ].map((txt, i) => (
                  <p key={i} style={{ fontSize: 14, color: "#8a9bb5", lineHeight: 1.8, marginBottom: 16 }}>{txt}</p>
                ))}

                <div style={{ background: "#2d1515", borderLeft: "3px solid #f87171", padding: "12px 16px", borderRadius: "0 4px 4px 0", margin: "20px 0", fontSize: 13, color: "#f87171", lineHeight: 1.7 }}>
                  Votre compte a été temporairement <strong>restreint</strong> suite au déclenchement de notre protocole de bien-être joueur.<br />
                  Motif : temps de jeu excessif couplé à des performances en déclin constant.<br />
                  Statut actuel : <strong>IRON IV — 0 LP</strong>
                </div>

                <p style={{ fontSize: 14, color: "#8a9bb5", lineHeight: 1.8, marginBottom: 16 }}>
                  Notre équipe de psychologues du sport a analysé votre historique. Le diagnostic est sans appel : vous avez besoin de <strong style={{ color: "#ccd3e0" }}>mouvement physique</strong>. Votre cerveau tourne en boucle, vos réflexes se dégradent, et votre métabolisme réclame de l'oxygène.
                </p>

                <p style={{ fontSize: 14, color: "#8a9bb5", lineHeight: 1.8, marginBottom: 16 }}>
                  Nous ne vous demandons pas d'arrêter de jouer. Nous vous demandons de <strong style={{ color: "#ccd3e0" }}>courir, nager, et pédaler</strong> — dans cet ordre. Revenez quand votre corps aura repris ses droits sur votre esprit.
                </p>

                <div style={{ background: "#0f2d1a", border: "1px solid #1a4a28", borderRadius: 4, padding: "16px 20px", fontSize: 13, color: "#34d399", lineHeight: 1.7, marginTop: 20 }}>
                  Recommandation Riot Wellness Program :<br />
                  <strong>Triathlon d'initiation — distance S</strong><br />
                  750m natation · 20km vélo · 5km course à pied<br /><br />
                  Votre corps sait ce qu'il fait. Suivez-le.
                </div>

                <div style={{ marginTop: 24, paddingTop: 16, borderTop: "1px solid #1e2d45", fontSize: 11, color: "#4a5568" }}>
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
