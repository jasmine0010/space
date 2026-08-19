import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowUpRight, FileText, Instagram, X } from "lucide-react";

const DISCORD_URL = "https://discord.gg/2cDCntjXe6";
const TIKTOK_URL = "https://www.tiktok.com/@studentsforspace";
const INSTAGRAM_URL = "https://www.instagram.com/studentsforspace/";
const GRAVITY_WELL_FABRIC_URL =
  "https://www.amazon.com/Stylish-FABRIC-Nylon-Spandex-Fabric/dp/B0GPSL88NG/ref=sr_1_12?crid=3OURAKLKD2TBW&dib=eyJ2IjoiMSJ9.8-m6n99hp7P3aOZLP4ScdA0AAMIC5KNPtDgX3ZAXblTljeCc17VMe5NUFEr83zsBPLjSWjuh8jHnTQbklzZwkX-8D56DzAPEAzaW2T8L8eM8A8c-BeZTWnZyJ--ehxMswWkDrQEVpILpPjQQ__hLJSsmHJcJXIkrP13tvJvdh6b4mHTzsaLFjiWuLFIXyqsCNwHcP7Hig9I5I1tOklzArQwXP8dVwTj4k0qRa750st-BMbZDx02H3eGo1zrzwr6H8JZFy013EzGBFjeixvuhGR62iHWfIQq6GcOPW1-68R4.oXzy1hKhCpBtbXAxRNyVrGu2vce2snMXJA4R8q5BQmA&dib_tag=se&keywords=Four-Way%2BStretch%2BNylon%2BSpandex&qid=1786225554&sprefix=four-way%2Bstretch%2Bnylon%2Bspandex%2Caps%2C175&sr=8-12&th=1";
const GRAVITY_WELL_BALL_BEARING_URL =
  "https://www.amazon.com/Breezliy-Precision-Chrome-Steel-Bearing/dp/B0BY8TN1V9/ref=sr_1_3?adgrpid=185070185934&dib=eyJ2IjoiMSJ9.1xPeJZvwBs2ar-jLXUAZSPy22bkTBhydFQdRfaZpDBqXcchrrrt7zDTyBBGm-cHBK5kalaGKcWtv0Z7BF-_jzqn6R0uZdZW7m_1plS7li3S7Jd8ViMMkmLM5Day02xX0hP8iHNzjfM5Sh1fAc8ZKKmzG3pkaUdfIb0T_jUDeG0S_h6xdy4Ja5yHRcBuJmFxH8k47xOk9Id-8EUwz40HPuu48aVuS6BP3M8RODJpMojA.rVus7g6YOMKuNn1Oq_7g6mJHQCgRbz3VPQf6NkiKBQg&dib_tag=se&hvadid=792937778327&hvdev=c&hvexpln=0&hvlocphy=9016851&hvnetw=g&hvocijid=1393919392224928423--&hvqmt=e&hvrand=1393919392224928423&hvtargid=kwd-356381925967&hydadcr=3694_13896260_2118412&keywords=1%2Binch%2Bball%2Bbearing&mcid=130d9ca4f322332ca004971c36dbfcb4&qid=1787168503&sr=8-3&th=1";
const GRAVITY_WELL_BODY_URL =
  "https://drive.google.com/file/d/1s0ylH_zQuSyjsjS5-5oqh-wAkgZgieEv/view?usp=sharing";
const GRAVITY_WELL_SMALL_BALL_BEARINGS_URL =
  "https://www.amazon.com/Campagnolo-Shimano-Front-Bicycle-Bearing/dp/B006PQZC5G/ref=sr_1_1_sspa?crid=178B6Y3NJM0F1&dib=eyJ2IjoiMSJ9.Q3Cl96_sLEuGha6hwr5AnWCnMKh2rn_c-pWMc04yQnzzMCMEtnc0XbvWmCnm8EYqO7_p8lk39KSuCiRP1M20HUF1EpoYFOvlXsj-lHYBRnqROMFzOneasWA2WS4YXqgO7kUR5rHOJ41YVieWjSX39PAt8jSYKj9XMp12Jxd3JnSiAVMxyZNsV-y5r4MSSix_7wuq0Tx7RNJVEv2YAK5JH_1XPUAjkQ2MM4zMWMzpI64.JC0aIpZFmhvB1vPNirXUuzgN65Qdfhf1Yj95wl9S_q4&dib_tag=se&keywords=small+ball+bearings&qid=1787169351&sprefix=small+ball+bearings%2Caps%2C135&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1";

function DiscordIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0291a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.994a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6062 3.9495-1.5214 6.0023-3.0291a.077.077 0 00.0313-.0551c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z" />
    </svg>
  );
}

import gravityWellFinished from "@/assets/gravity-well-finished.jpeg";
import gravityWellCad from "@/assets/gravity-well-cad.png";
import m31Core from "@/assets/gallery-m31-core.png";
import m57RingNebula from "@/assets/gallery-m57-ring-nebula.png";
import m30JellyfishCluster from "@/assets/gallery-m30-jellyfish-cluster.png";
import ngc6822BarnardsGalaxy from "@/assets/gallery-ngc-6822-barnards-galaxy.png";
import stephanQuintet from "@/assets/gallery-stephan-quintet.png";
import { FadeIn } from "@/components/FadeIn";
import { ArrowLink } from "@/components/ArrowLink";

export const Route = createFileRoute("/")({
  head: () => ({
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preload", as: "image", href: m57RingNebula },
    ],
    meta: [
      { property: "og:image", content: m57RingNebula },
      { name: "twitter:image", content: m57RingNebula },
    ],
  }),
  component: Home,
});

const NAV = [
  { id: "about", label: "About" },
  { id: "kits", label: "Kits" },
  { id: "gallery", label: "Gallery" },
];

const GRAVITY_WELL_SUPPLIES = [
  {
    label: "3D-printed body (two pieces) to support and clamp the fabric",
    href: GRAVITY_WELL_BODY_URL,
  },
  { label: "Cross-stretch fabric — $8.41", href: GRAVITY_WELL_FABRIC_URL },
  { label: "1-inch ball bearing", href: GRAVITY_WELL_BALL_BEARING_URL },
  { label: "Small ball bearings", href: GRAVITY_WELL_SMALL_BALL_BEARINGS_URL },
  { label: "M3 screws and nuts" },
];

const GRAVITY_WELL_STEPS = [
  "Center the cross-stretch fabric between the two 3D-printed body pieces, leaving enough slack to form a smooth well.",
  "Align the holes, then use the M3 screws and nuts to bolt through the fabric and clamp the two printed pieces together.",
  "Place the 1-inch ball bearing in the middle of the stretched fabric to create the gravity well.",
  "Drop the small ball bearings onto the fabric and give them a gentle push. Watch how they curve and roll around the center.",
];

const GALLERY_CREDIT = "NASA SEES Exoplanet Team 2026";
const SARA_RM_URL = "https://www.saraobservatory.org/about";

const GALLERY = [
  {
    src: m31Core,
    alt: "M31 Core",
    title: "M31 Core",
    span: "md:col-span-2 md:row-span-2",
  },
  { src: m57RingNebula, alt: "M57 Ring Nebula", title: "M57 · Ring Nebula", span: "" },
  {
    src: m30JellyfishCluster,
    alt: "M30 Jellyfish Cluster",
    title: "M30 · Jellyfish Cluster",
    span: "",
  },
  {
    src: ngc6822BarnardsGalaxy,
    alt: "NGC 6822 Barnard's Galaxy",
    title: "NGC 6822 · Barnard's Galaxy",
    span: "",
  },
  { src: stephanQuintet, alt: "Stephan Quintet", title: "Stephan Quintet", span: "" },
];


function SectionHeader({
  eyebrow,
  title,
  linkLabel,
  href,
}: {
  eyebrow: string;
  title: string;
  linkLabel?: string;
  href?: string;
}) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-6">
      <div>
        <p className="text-xs uppercase tracking-[0.28em] text-accent">{eyebrow}</p>
        <h2 className="mt-4 text-3xl md:text-4xl">{title}</h2>
      </div>
      {linkLabel && href && <ArrowLink href={href}>{linkLabel}</ArrowLink>}
    </div>
  );
}

function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [lightbox, setLightbox] = useState<(typeof GALLERY)[number] | null>(null);
  const [kitOpen, setKitOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!lightbox && !kitOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setLightbox(null);
      setKitOpen(false);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [kitOpen, lightbox]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-colors duration-500 ${
          scrolled ? "bg-background/85 backdrop-blur-md border-b border-border" : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 md:px-10">
          <a href="#top" className="flex items-center">
            <img src="/logo.svg" alt="Space Outreach Initiative" className="h-11 w-11 text-white" />
          </a>
          <ul className="hidden gap-8 md:flex">
            {NAV.map((n) => (
              <li key={n.id}>
                <a
                  href={`#${n.id}`}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center">
            <a
              href={DISCORD_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Discord"
              className="inline-flex items-center gap-2 px-2 py-2 text-sm text-white/80 transition-colors hover:text-white md:px-3"
            >
              <DiscordIcon className="h-4 w-4" />
              <span className="hidden md:inline">Discord</span>
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="inline-flex items-center gap-2 px-2 py-2 text-sm text-white/80 transition-colors hover:text-white md:px-3"
            >
              <Instagram className="h-4 w-4" aria-hidden="true" />
              <span className="hidden md:inline">Instagram</span>
            </a>
            <a
              href={TIKTOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="inline-flex items-center gap-2 px-2 py-2 text-sm text-white/80 transition-colors hover:text-white md:px-3"
            >
              <img src="/tiktok.svg" alt="" className="h-4 w-4" aria-hidden="true" />
              <span className="hidden md:inline">TikTok</span>
            </a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section id="top" className="relative min-h-svh w-full overflow-hidden md:min-h-screen">
        <img
          src={m57RingNebula}
          alt="M57 Ring Nebula"
          width={1920}
          height={1280}
          className="absolute inset-0 h-[125%] w-full -translate-y-[20%] object-cover md:h-[150%] md:-translate-y-[33%]"
        />
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-background via-background/70 to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-svh max-w-[1400px] flex-col justify-end px-5 pb-8 pt-32 sm:px-6 md:min-h-screen md:px-10 md:pb-14 md:pt-40">
          <h1 className="max-w-4xl text-[clamp(2rem,7vw,2.25rem)] leading-[0.98] md:text-6xl md:leading-[0.95] lg:text-7xl">
            Space Outreach Initiative
          </h1>
          <p className="mt-6 max-w-xl text-base text-white/80 md:text-lg">
            Observing the deep sky and sharing it with the public since a time before digital
            imaging.
          </p>

          <div className="mt-8">
            <a
              href="#about"
              className="inline-flex items-center border-[1.5px] border-white/30 bg-transparent px-4 py-2 text-sm text-white/80 transition-colors hover:border-white/60 hover:text-white md:text-base"
            >
              About us
            </a>
          </div>

          <div
            aria-hidden="true"
            className="mt-14 h-24 border-t border-white/15 md:mt-20"
          />
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-t border-border py-24 md:py-40">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-12 px-6 md:grid-cols-12 md:gap-16 md:px-10">
          <FadeIn className="md:col-span-6">
            <div
              className="aspect-[4/5] w-full overflow-hidden"
              style={{ backgroundColor: "#1a1a2e" }}
            >
              <img
                src={stephanQuintet}
                alt="Stephan's Quintet"
                width={1200}
                height={1500}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </FadeIn>
          <FadeIn className="md:col-span-6 md:pl-8 lg:pl-16">
            <p className="text-xs uppercase tracking-[0.28em] text-accent">About</p>
            <h2 className="mt-6 text-3xl md:text-4xl lg:text-5xl">
              Students making space more accessible.
            </h2>
            <div className="mt-8 space-y-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              <p>
                We are a student-led group united by our interest in space and our belief that
                learning about the universe should be accessible to everyone.
              </p>
              <p>
                We are developing hands-on educational kits that give students approachable ways
                to learn about astronomy, space science, and the universe around us.
              </p>
              <p>
                Through social media outreach, we share our enthusiasm, make space topics easier to
                explore, and hope to inspire more people to discover their own love of space.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Kits */}
      <section id="kits" className="border-t border-border py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <SectionHeader eyebrow="Kits" title="Build space science at home." />
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Hands-on projects designed to help students explore space science by building,
            experimenting, and observing for themselves.
          </p>
          <div className="mt-16 max-w-2xl">
            <FadeIn>
              <article className="group">
                <button
                  type="button"
                  onClick={() => setKitOpen(true)}
                  className="w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-background"
                  aria-label="Open the Gravity Well kit instructions"
                >
                  <div
                    className="relative aspect-[4/3] w-full overflow-hidden"
                    style={{ backgroundColor: "#1a1a2e" }}
                  >
                    <img
                      src={gravityWellFinished}
                      alt="Completed Gravity Well kit with stretched fabric and a steel ball in the center"
                      width={1200}
                      height={900}
                      loading="lazy"
                      className="h-full w-full object-cover object-[center_58%] transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                    <span className="chip absolute left-4 top-4">
                      <FileText size={12} strokeWidth={1.75} />
                      Kit
                    </span>
                  </div>
                  <p className="mt-6 text-xs uppercase tracking-[0.22em] text-muted-foreground">
                    Hands-on activity · Gravity &amp; orbital motion
                  </p>
                  <h3 className="mt-3 text-xl leading-tight transition-colors group-hover:text-accent md:text-2xl">
                    Gravity Well
                  </h3>
                  <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
                    Build a tabletop model that uses stretched fabric and steel balls to explore
                    curved paths, orbital motion, and the idea of a gravity well.
                  </p>
                  <span className="mt-6 inline-flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-foreground transition-colors group-hover:text-accent">
                    Open build guide
                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-border transition-colors group-hover:border-accent">
                      <ArrowUpRight size={14} strokeWidth={1.5} />
                    </span>
                  </span>
                </button>
              </article>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="border-t border-border py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <SectionHeader eyebrow="Gallery" title="Images from our members." />
          <p className="mt-5 text-xs uppercase tracking-[0.18em] text-muted-foreground">
            Image credit: {GALLERY_CREDIT} · Taken with{" "}
            <a
              href={SARA_RM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-muted-foreground/50 underline-offset-4 transition-colors hover:text-foreground"
            >
              SARA-RM
            </a>
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-[1400px] grid-cols-2 gap-2 px-2 md:grid-cols-4 md:gap-3 md:px-3">
          {GALLERY.map((img) => (
            <button
              key={img.src}
              type="button"
              onClick={() => setLightbox(img)}
              className={`group relative aspect-square overflow-hidden text-left ${img.span ?? ""}`}
              style={{ backgroundColor: "#1a1a2e" }}
              aria-label={`View ${img.alt}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-opacity duration-300 group-hover:opacity-90"
              />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent px-4 pb-4 pt-12 text-sm text-white md:text-base">
                {img.title}
              </span>
            </button>
          ))}
        </div>
      </section>
      {/* Footer */}
      <footer className="border-t border-border py-10">
        <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-4 px-6 text-xs uppercase tracking-[0.22em] text-muted-foreground md:px-10">
          <span>© {new Date().getFullYear()} Space Outreach Initiative</span>
          <a
            href={DISCORD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
          >
            <DiscordIcon className="h-4 w-4" />
            Community
          </a>
        </div>
      </footer>

      {/* Gravity Well kit guide */}
      {kitOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="gravity-well-title"
          aria-describedby="gravity-well-intro"
          className="fixed inset-0 z-[60] overflow-y-auto bg-background text-foreground"
        >
          <header className="sticky top-0 z-10 border-b border-border bg-background/90 backdrop-blur-md">
            <div className="mx-auto flex max-w-[1200px] items-center justify-between px-5 py-4 sm:px-6 md:px-10">
              <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">Kit guide</p>
              <button
                type="button"
                onClick={() => setKitOpen(false)}
                className="inline-flex items-center gap-2 px-2 py-2 text-xs uppercase tracking-[0.22em] text-foreground transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                aria-label="Close the Gravity Well kit guide"
                autoFocus
              >
                Close
                <X size={16} strokeWidth={1.5} aria-hidden="true" />
              </button>
            </div>
          </header>

          <main className="mx-auto max-w-[1200px] px-5 py-16 sm:px-6 md:px-10 md:py-24">
            <p className="text-xs uppercase tracking-[0.28em] text-accent">Hands-on kit</p>
            <h2 id="gravity-well-title" className="mt-5 text-4xl leading-none md:text-6xl">
              Gravity Well
            </h2>
            <p
              id="gravity-well-intro"
              className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg"
            >
              Use stretched fabric and steel balls to explore how objects can follow curved paths
              around a heavier center object. This is a simple analogy for a gravity well, not a
              scale model of gravity.
            </p>

            <div className="mt-12 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12">
              <figure>
                <div className="aspect-[3/4] overflow-hidden bg-[#1a1a2e]">
                  <img
                    src={gravityWellFinished}
                    alt="Completed Gravity Well kit with black cross-stretch fabric held in a circular 3D-printed frame"
                    className="h-full w-full object-cover"
                  />
                </div>
                <figcaption className="mt-3 text-xs leading-relaxed text-muted-foreground">
                  The assembled Gravity Well with the 1-inch ball bearing resting at the center.
                </figcaption>
              </figure>

              <aside className="self-start border border-border p-6 md:p-8">
                <p className="text-xs uppercase tracking-[0.24em] text-accent">What you need</p>
                <h3 className="mt-4 text-2xl md:text-3xl">Supplies</h3>
                <ul className="mt-8 divide-y divide-border border-y border-border">
                  {GRAVITY_WELL_SUPPLIES.map((item) => (
                    <li key={item.label} className="py-4 text-sm leading-relaxed md:text-base">
                      {item.href ? (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group inline-flex items-center gap-2 underline decoration-muted-foreground/50 underline-offset-4 transition-colors hover:text-accent"
                        >
                          {item.label}
                          <ArrowUpRight
                            size={14}
                            strokeWidth={1.5}
                            className="shrink-0"
                            aria-hidden="true"
                          />
                        </a>
                      ) : (
                        item.label
                      )}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-xs leading-relaxed text-muted-foreground">
                  Fabric price shown from the linked listing and may change. This project contains
                  small parts; adult supervision is recommended for younger builders.
                </p>
              </aside>
            </div>

            <section className="mt-20 border-t border-border pt-16 md:mt-28 md:pt-20">
              <p className="text-xs uppercase tracking-[0.28em] text-accent">Assembly</p>
              <h3 className="mt-4 text-3xl md:text-4xl">How to put it together.</h3>
              <ol className="mt-10 grid list-decimal grid-cols-1 gap-x-12 gap-y-7 pl-5 text-base leading-relaxed text-muted-foreground md:grid-cols-2 md:text-lg">
                {GRAVITY_WELL_STEPS.map((step) => (
                  <li key={step} className="pl-2 marker:text-accent">
                    {step}
                  </li>
                ))}
              </ol>

              <figure className="mt-12 md:mt-16">
                <div className="overflow-hidden border border-border bg-[#111113]">
                  <img
                    src={gravityWellCad}
                    alt="CAD view showing the upper ring aligned above the Gravity Well base"
                    className="h-auto w-full object-contain"
                    loading="lazy"
                  />
                </div>
                <figcaption className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                  CAD assembly view: the fabric sits between the upper ring and the lower body. The
                  M3 screws pass through the aligned holes to clamp the fabric in place.
                </figcaption>
              </figure>
            </section>

            <section className="mt-20 border-t border-border pt-16 md:mt-28 md:pt-20">
              <p className="text-xs uppercase tracking-[0.28em] text-accent">Try it</p>
              <h3 className="mt-4 text-3xl md:text-4xl">Watch the paths change.</h3>
              <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
                Try different starting positions and gentle pushes. Compare paths that curve around
                the center, tighten into smaller loops, or roll away. Notice how speed and distance
                from the center change what happens.
              </p>
            </section>
          </main>
        </div>
      )}

      {/* Lightbox */}
      {lightbox && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 p-4 md:p-10"
          onClick={() => setLightbox(null)}
        >
          <img
            src={lightbox.src}
            alt={lightbox.alt}
            className="max-h-full max-w-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <div className="absolute inset-x-4 bottom-4 text-center md:inset-x-10 md:bottom-7">
            <p className="text-sm text-foreground md:text-base">{lightbox.title}</p>
            <p className="mt-1 text-[0.65rem] uppercase tracking-[0.16em] text-muted-foreground md:text-xs">
              Image credit: {GALLERY_CREDIT} · Taken with{" "}
              <a
                href={SARA_RM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-muted-foreground/50 underline-offset-4 transition-colors hover:text-foreground"
              >
                SARA-RM
              </a>
            </p>
          </div>
          <button
            type="button"
            onClick={() => setLightbox(null)}
            className="absolute right-6 top-6 text-xs uppercase tracking-[0.28em] text-foreground hover:text-accent"
          >
            Close ×
          </button>
        </div>
      )}
    </div>
  );
}
