import { Heart, Quote, Sparkles, Star } from "lucide-react";
import { AnimatePresence, motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";

// ── Floating heart particle ──────────────────────────────────────────────────
interface HeartParticle {
  id: number;
  x: number;
  size: number;
  duration: number;
  delay: number;
  drift: number;
  rot: number;
  emoji: string;
}

function generateHearts(count: number): HeartParticle[] {
  const emojis = ["💕", "❤️", "💗", "💖", "💝", "🌹", "💓", "💞"];
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    size: 14 + Math.random() * 20,
    duration: 7 + Math.random() * 8,
    delay: Math.random() * 10,
    drift: (Math.random() - 0.5) * 120,
    rot: (Math.random() - 0.5) * 40,
    emoji: emojis[Math.floor(Math.random() * emojis.length)],
  }));
}

// ── Section fade-in wrapper ───────────────────────────────────────────────────
function FadeSection({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref}>
      <motion.div
        className={className}
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </div>
  );
}

// ── Reasons data ─────────────────────────────────────────────────────────────
const reasons = [
  {
    title: "Your Beautiful Smile",
    text: "The way your smile lights up the entire room and makes my heart skip every single time.",
    emoji: "😊",
  },
  {
    title: "The Way You Laugh",
    text: "Your laughter is the most beautiful sound in the world — pure, genuine, and utterly contagious.",
    emoji: "😄",
  },
  {
    title: "Your Kind Heart",
    text: "You love so deeply and care so fiercely. Your kindness is one of the most beautiful things about you.",
    emoji: "💗",
  },
  {
    title: "How You Make Everything Better",
    text: "Even the most ordinary moments become extraordinary when you're in them. You are magic.",
    emoji: "✨",
  },
  {
    title: "Your Strength & Grace",
    text: "The way you carry yourself — with such quiet strength and effortless elegance — leaves me in awe.",
    emoji: "🌹",
  },
  {
    title: "How You Care for Others",
    text: "You pour so much love into the people around you. Your warmth touches everyone it reaches.",
    emoji: "🤗",
  },
  {
    title: "Your Warmth and Love",
    text: "Being near you feels like coming home. You are the safest, warmest place I have ever known.",
    emoji: "🏡",
  },
  {
    title: "How You Make Me Feel",
    text: "With you, I feel whole. You see me fully, love me completely, and make me want to be my best self.",
    emoji: "💫",
  },
];

// ── Metaphors data ────────────────────────────────────────────────────────────
const metaphors = [
  { label: "My Sunshine", icon: "☀️", color: "from-gold/30 to-gold-light/20" },
  {
    label: "My Safe Place",
    icon: "🏡",
    color: "from-rose-light/40 to-blush/30",
  },
  {
    label: "My Favorite Adventure",
    icon: "🌸",
    color: "from-petal/50 to-rose-light/30",
  },
  {
    label: "My Best Friend",
    icon: "💞",
    color: "from-blush/50 to-secondary/40",
  },
  {
    label: "My Everything",
    icon: "🌟",
    color: "from-gold-light/40 to-accent/20",
  },
];

// ── Main App ──────────────────────────────────────────────────────────────────
export default function App() {
  const [hearts] = useState<HeartParticle[]>(() => generateHearts(18));
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    document.title = "I Love You, Vanshika 💕";
  }, []);

  return (
    <div className="min-h-screen bg-cream overflow-x-hidden font-body">
      {/* ── Floating hearts backdrop ── */}
      <div
        className="fixed inset-0 pointer-events-none overflow-hidden z-0"
        aria-hidden="true"
      >
        {hearts.map((h) => (
          <span
            key={h.id}
            className="absolute select-none animate-float-heart"
            style={
              {
                left: `${h.x}%`,
                bottom: "-40px",
                fontSize: `${h.size}px`,
                "--duration": `${h.duration}s`,
                "--delay": `${h.delay}s`,
                "--drift": `${h.drift}px`,
                "--rot": `${h.rot}deg`,
              } as React.CSSProperties
            }
          >
            {h.emoji}
          </span>
        ))}
      </div>

      {/* ══ HERO SECTION ══════════════════════════════════════════════════════ */}
      <section
        data-ocid="hero.section"
        className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden grain-overlay"
      >
        {/* Hero background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('/assets/generated/love-hero.dim_1200x600.jpg')",
          }}
          aria-hidden="true"
        />
        {/* Warm overlay gradients */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, oklch(0.12 0.08 10 / 0.35) 0%, oklch(0.42 0.18 12 / 0.25) 40%, oklch(0.975 0.012 45 / 0.85) 100%)",
          }}
          aria-hidden="true"
        />

        {/* Hero content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center gap-6">
          <AnimatePresence>
            {mounted && (
              <>
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, ease: "backOut" }}
                  className="animate-heart-pulse text-7xl mb-2"
                >
                  💕
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="text-sm uppercase tracking-[0.35em] font-display font-medium"
                  style={{ color: "oklch(0.99 0.005 30)" }}
                >
                  A love letter to
                </motion.p>

                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.9,
                    delay: 0.4,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="font-display font-bold leading-tight text-center"
                  style={{
                    fontSize: "clamp(3rem, 8vw, 6.5rem)",
                    color: "oklch(0.99 0.005 30)",
                    textShadow: "0 4px 24px oklch(0.2 0.12 12 / 0.5)",
                  }}
                >
                  I Love You,{" "}
                  <span
                    style={{
                      background:
                        "linear-gradient(135deg, oklch(0.98 0.01 45), oklch(0.88 0.12 65), oklch(0.98 0.01 45))",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      backgroundSize: "200% auto",
                      display: "inline-block",
                    }}
                    className="animate-shimmer"
                  >
                    Vanshika
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  className="font-serif-elegant text-xl md:text-2xl text-center max-w-xl"
                  style={{ color: "oklch(0.95 0.025 30)" }}
                >
                  Every day with you is my favorite day
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={{ opacity: 1, scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 1.0 }}
                  className="flex items-center gap-3 mt-2"
                >
                  <div
                    className="h-px w-16"
                    style={{ background: "oklch(0.88 0.12 65 / 0.7)" }}
                  />
                  <Heart
                    className="w-4 h-4 fill-current"
                    style={{ color: "oklch(0.88 0.12 65)" }}
                  />
                  <div
                    className="h-px w-16"
                    style={{ background: "oklch(0.88 0.12 65 / 0.7)" }}
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1.3 }}
                  className="flex gap-3 flex-wrap justify-center mt-2"
                >
                  {[
                    "Since forever",
                    "Until always",
                    "Just because you're you",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-1.5 rounded-full text-sm font-display"
                      style={{
                        background: "oklch(0.99 0.005 30 / 0.15)",
                        border: "1px solid oklch(0.99 0.005 30 / 0.3)",
                        color: "oklch(0.97 0.01 30)",
                        backdropFilter: "blur(8px)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span
            className="text-xs uppercase tracking-widest font-display"
            style={{ color: "oklch(0.95 0.025 30 / 0.7)" }}
          >
            scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 1.8,
              ease: "easeInOut",
            }}
          >
            <Heart
              className="w-4 h-4 fill-current"
              style={{ color: "oklch(0.95 0.025 30 / 0.7)" }}
            />
          </motion.div>
        </motion.div>
      </section>

      {/* ══ REASONS SECTION ══════════════════════════════════════════════════ */}
      <section
        data-ocid="reasons.section"
        className="relative z-10 py-24 px-6"
        style={{
          background:
            "linear-gradient(180deg, oklch(0.975 0.012 45) 0%, oklch(0.96 0.025 15) 50%, oklch(0.975 0.012 45) 100%)",
        }}
      >
        <div className="max-w-6xl mx-auto">
          <FadeSection className="text-center mb-16">
            <div className="flex justify-center mb-4">
              <Sparkles
                className="w-6 h-6"
                style={{ color: "oklch(0.78 0.12 72)" }}
              />
            </div>
            <h2
              className="font-display font-bold mb-4"
              style={{
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                color: "oklch(0.3 0.12 15)",
              }}
            >
              Reasons I Love You
            </h2>
            <p
              className="font-serif-elegant text-lg max-w-md mx-auto"
              style={{ color: "oklch(0.45 0.08 18)" }}
            >
              Where do I even begin? Here are just a few of the countless
              reasons...
            </p>
          </FadeSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((reason, i) => (
              <FadeSection key={reason.title} delay={i * 0.08}>
                <div
                  data-ocid={
                    `reasons.item.${i + 1}` as `reasons.item.${1 | 2 | 3 | 4 | 5 | 6 | 7 | 8}`
                  }
                  className="card-hover rounded-2xl p-6 h-full flex flex-col gap-3 relative overflow-hidden"
                  style={{
                    background:
                      i % 3 === 0
                        ? "linear-gradient(145deg, oklch(0.99 0.008 35), oklch(0.95 0.03 18))"
                        : i % 3 === 1
                          ? "linear-gradient(145deg, oklch(0.99 0.008 35), oklch(0.96 0.025 45))"
                          : "linear-gradient(145deg, oklch(0.99 0.008 35), oklch(0.95 0.04 25))",
                    boxShadow:
                      "0 4px 24px oklch(0.42 0.18 12 / 0.08), 0 1px 4px oklch(0.42 0.18 12 / 0.06)",
                    border: "1px solid oklch(0.87 0.04 20 / 0.6)",
                  }}
                >
                  {/* Background decoration */}
                  <div
                    className="absolute -top-4 -right-4 text-6xl opacity-10 select-none pointer-events-none"
                    aria-hidden="true"
                  >
                    {reason.emoji}
                  </div>

                  <div className="text-3xl mb-1">{reason.emoji}</div>

                  <h3
                    className="font-display font-semibold text-lg leading-tight"
                    style={{ color: "oklch(0.3 0.15 14)" }}
                  >
                    {reason.title}
                  </h3>

                  <p
                    className="text-sm leading-relaxed font-body flex-1"
                    style={{ color: "oklch(0.42 0.07 18)" }}
                  >
                    {reason.text}
                  </p>

                  <div className="mt-auto pt-2">
                    <Heart
                      className="w-4 h-4 fill-current"
                      style={{ color: "oklch(0.62 0.18 16)" }}
                    />
                  </div>
                </div>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* ══ LOVE LETTER SECTION ══════════════════════════════════════════════ */}
      <section
        data-ocid="letter.section"
        className="relative z-10 py-24 px-6 overflow-hidden"
        style={{
          background:
            "linear-gradient(160deg, oklch(0.42 0.18 12) 0%, oklch(0.32 0.14 14) 100%)",
        }}
      >
        {/* Decorative petals */}
        <div
          className="absolute inset-0 overflow-hidden pointer-events-none"
          aria-hidden="true"
        >
          {([0, 1, 2, 3, 4, 5] as const).map((i) => (
            <span
              key={`rose-petal-pos-${i}`}
              className="absolute text-4xl opacity-15 select-none animate-petal-drift"
              style={
                {
                  left: `${10 + i * 15}%`,
                  top: "-40px",
                  "--petal-dur": `${14 + i * 2}s`,
                  "--petal-delay": `${i * 2}s`,
                  "--petal-drift": `${(i % 2 === 0 ? 1 : -1) * (30 + i * 15)}px`,
                  "--petal-rot": `${(i % 2 === 0 ? 1 : -1) * 360}deg`,
                } as React.CSSProperties
              }
            >
              🌹
            </span>
          ))}
        </div>

        <div className="max-w-3xl mx-auto relative z-10">
          <FadeSection className="text-center mb-12">
            <h2
              className="font-display font-bold mb-3"
              style={{
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                color: "oklch(0.99 0.005 30)",
              }}
            >
              A Letter From My Heart
            </h2>
            <div className="flex justify-center gap-2">
              {["💕-a", "🌹-b", "💕-c"].map((e) => (
                <span key={e} className="text-2xl">
                  {e.split("-")[0]}
                </span>
              ))}
            </div>
          </FadeSection>

          <FadeSection delay={0.2}>
            <div
              className="relative rounded-3xl p-10 md:p-14"
              style={{
                background: "oklch(0.99 0.005 30 / 0.06)",
                border: "1px solid oklch(0.99 0.005 30 / 0.2)",
                backdropFilter: "blur(12px)",
                boxShadow: "0 24px 80px oklch(0.2 0.1 12 / 0.4)",
              }}
            >
              {/* Decorative quote mark */}
              <Quote
                className="absolute top-6 left-8 w-12 h-12 opacity-20"
                style={{ color: "oklch(0.88 0.12 65)" }}
              />

              <div
                className="relative z-10 space-y-5 font-serif-elegant leading-relaxed"
                style={{
                  fontSize: "clamp(1.1rem, 2.5vw, 1.3rem)",
                  color: "oklch(0.97 0.01 30)",
                }}
              >
                <p>
                  <span
                    className="font-display font-bold text-2xl"
                    style={{ color: "oklch(0.88 0.12 65)" }}
                  >
                    Vanshika,
                  </span>
                </p>
                <p>
                  From the moment I met you, my world changed forever. There is
                  no version of my story that makes sense without you in it —
                  you are the chapter I'll re-read for the rest of my life.
                </p>
                <p>
                  You are my sunshine on every cloudy day, my calm in every
                  storm, my laughter when I need it most. With you, the ordinary
                  becomes extraordinary, and the extraordinary becomes home.
                </p>
                <p>
                  I am so grateful — endlessly, overwhelmingly grateful — to
                  love you and to be loved by you. You see me in a way no one
                  else ever has, and that is the greatest gift anyone has ever
                  given me.
                </p>
                <p>
                  You are my person.{" "}
                  <span style={{ color: "oklch(0.88 0.12 65)" }}>
                    Today. Tomorrow. Always.
                  </span>
                </p>
              </div>

              {/* Signature */}
              <div
                className="mt-10 text-right font-display font-bold text-2xl"
                style={{ color: "oklch(0.88 0.12 65)" }}
              >
                Forever Yours 💕
              </div>
            </div>
          </FadeSection>
        </div>
      </section>

      {/* ══ YOU ARE MY... SECTION ════════════════════════════════════════════ */}
      <section
        data-ocid="metaphors.section"
        className="relative z-10 py-24 px-6"
        style={{
          background:
            "linear-gradient(180deg, oklch(0.975 0.012 45) 0%, oklch(0.965 0.03 30) 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto">
          <FadeSection className="text-center mb-16">
            <Star
              className="w-6 h-6 mx-auto mb-4 fill-current"
              style={{ color: "oklch(0.78 0.12 72)" }}
            />
            <h2
              className="font-display font-bold"
              style={{
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                color: "oklch(0.3 0.12 15)",
              }}
            >
              You Are My...
            </h2>
          </FadeSection>

          <div className="flex flex-col gap-5">
            {metaphors.map((m, i) => (
              <FadeSection key={m.label} delay={i * 0.12}>
                <motion.div
                  whileHover={{ scale: 1.02, x: 8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className={`flex items-center gap-6 rounded-2xl px-8 py-6 bg-gradient-to-r ${m.color}`}
                  style={{
                    border: "1px solid oklch(0.87 0.04 20 / 0.5)",
                    boxShadow: "0 4px 20px oklch(0.42 0.18 12 / 0.06)",
                  }}
                >
                  <span
                    className="text-4xl flex-shrink-0 animate-gentle-float"
                    style={{ animationDelay: `${i * 0.4}s` }}
                  >
                    {m.icon}
                  </span>
                  <span
                    className="font-display font-bold"
                    style={{
                      fontSize: "clamp(1.4rem, 3.5vw, 2rem)",
                      color: "oklch(0.28 0.14 14)",
                    }}
                  >
                    {m.label}
                  </span>
                  <Heart
                    className="ml-auto w-5 h-5 fill-current flex-shrink-0 opacity-40"
                    style={{ color: "oklch(0.55 0.18 15)" }}
                  />
                </motion.div>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CLOSING SECTION ══════════════════════════════════════════════════ */}
      <section
        data-ocid="closing.section"
        className="relative z-10 py-28 px-6 overflow-hidden"
        style={{
          background:
            "linear-gradient(160deg, oklch(0.965 0.03 30) 0%, oklch(0.96 0.04 22) 50%, oklch(0.975 0.012 45) 100%)",
        }}
      >
        {/* Decorative hearts pattern */}
        <div
          className="absolute inset-0 pointer-events-none overflow-hidden"
          aria-hidden="true"
        >
          {(["💕-a", "💗-b", "❤️-c", "💖-d", "💝-e", "💕-f"] as const).map(
            (item, i) => (
              <span
                key={item}
                className="absolute text-3xl select-none"
                style={{
                  left: `${5 + i * 17}%`,
                  top: `${10 + (i % 3) * 30}%`,
                  transform: `rotate(${(i - 2.5) * 12}deg)`,
                  opacity: 0.07,
                }}
              >
                {item.split("-")[0]}
              </span>
            ),
          )}
        </div>

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <FadeSection>
            <div className="animate-gentle-float inline-block mb-8 text-7xl">
              💝
            </div>
          </FadeSection>

          <FadeSection delay={0.15}>
            <div
              className="relative rounded-3xl p-10 md:p-16 mb-10"
              style={{
                background:
                  "linear-gradient(145deg, oklch(0.99 0.008 35 / 0.8), oklch(0.96 0.04 22 / 0.8))",
                border: "1px solid oklch(0.87 0.04 20 / 0.7)",
                boxShadow:
                  "0 16px 60px oklch(0.42 0.18 12 / 0.1), inset 0 1px 0 oklch(0.99 0.005 30 / 0.6)",
              }}
            >
              <Quote
                className="absolute top-6 left-8 w-8 h-8 opacity-20"
                style={{ color: "oklch(0.55 0.18 15)" }}
              />
              <blockquote
                className="font-serif-elegant leading-relaxed mb-6"
                style={{
                  fontSize: "clamp(1.2rem, 3vw, 1.65rem)",
                  color: "oklch(0.28 0.1 16)",
                  fontStyle: "italic",
                }}
              >
                "In all the world, there is no heart for me like yours. In all
                the world, there is no love for you like mine."
              </blockquote>
              <cite
                className="font-display font-medium text-sm uppercase tracking-widest not-italic"
                style={{ color: "oklch(0.55 0.12 60)" }}
              >
                — Maya Angelou
              </cite>
            </div>
          </FadeSection>

          <FadeSection delay={0.3}>
            <div
              className="font-display font-bold mb-3"
              style={{
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                background:
                  "linear-gradient(135deg, oklch(0.42 0.18 12), oklch(0.65 0.2 18), oklch(0.78 0.12 72))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Forever Yours, Vanshika 💕
            </div>
            <p
              className="font-serif-elegant text-lg"
              style={{ color: "oklch(0.48 0.08 18)" }}
            >
              Written with every piece of my heart
            </p>
          </FadeSection>

          {/* Heart row */}
          <FadeSection delay={0.45}>
            <div className="flex justify-center gap-3 mt-10 flex-wrap">
              {(
                ["💕-a", "❤️-b", "💗-c", "💖-d", "💝-e", "❤️-f", "💕-g"] as const
              ).map((item, i) => (
                <motion.span
                  key={item}
                  className="text-2xl"
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    repeat: Number.POSITIVE_INFINITY,
                    duration: 2,
                    delay: i * 0.15,
                    ease: "easeInOut",
                  }}
                >
                  {item.split("-")[0]}
                </motion.span>
              ))}
            </div>
          </FadeSection>
        </div>
      </section>

      {/* ── Footer ─────────────────────────────────────────────────────────── */}
      <footer
        className="relative z-10 py-6 px-6 text-center"
        style={{
          background: "oklch(0.22 0.08 14)",
          borderTop: "1px solid oklch(0.35 0.1 14)",
        }}
      >
        <p
          className="text-sm font-body"
          style={{ color: "oklch(0.65 0.06 20)" }}
        >
          © {new Date().getFullYear()}. Built with{" "}
          <Heart
            className="inline w-3.5 h-3.5 fill-current mx-0.5 relative -top-px"
            style={{ color: "oklch(0.62 0.18 16)" }}
          />{" "}
          using{" "}
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 transition-opacity hover:opacity-80"
            style={{ color: "oklch(0.72 0.1 55)" }}
          >
            caffeine.ai
          </a>
        </p>
      </footer>
    </div>
  );
}
