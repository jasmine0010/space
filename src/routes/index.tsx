import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowUpRight, FileText, Calendar } from "lucide-react";

const DISCORD_URL = "https://discord.gg/lovable-dev";

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

import hero from "@/assets/hero.jpg";
import about from "@/assets/about.jpg";
import g1 from "@/assets/g1.jpg";
import g2 from "@/assets/g2.jpg";
import g3 from "@/assets/g3.jpg";
import g4 from "@/assets/g4.jpg";
import g5 from "@/assets/g5.jpg";
import n1 from "@/assets/n1.jpg";
import n2 from "@/assets/n2.jpg";
import n3 from "@/assets/n3.jpg";
import { FadeIn } from "@/components/FadeIn";
import { ArrowLink } from "@/components/ArrowLink";

export const Route = createFileRoute("/")({
  head: () => ({
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preload", as: "image", href: hero },
    ],
    meta: [
      { property: "og:image", content: hero },
      { name: "twitter:image", content: hero },
    ],
  }),
  component: Home,
});

const NAV = [
  { id: "about", label: "About" },
  { id: "news", label: "News" },
  { id: "gallery", label: "Gallery" },
  { id: "contact", label: "Contact" },
];

const HERO_FEATURES = [
  { label: "Deep Sky Survey", title: "Andromeda Field Report", href: "#news" },
  { label: "Public Observing", title: "Perseid Watch, August 12", href: "#news" },
  { label: "Instrumentation", title: "New 24-inch Ritchey-Chrétien", href: "#news" },
];

const NEWS = [
  {
    img: n1,
    tag: "Article",
    read: "6 min read",
    date: "March 14, 2026",
    title: "Annual Deep Sky Symposium Convenes in Flagstaff",
  },
  {
    img: n2,
    tag: "Event",
    read: "3 min read",
    date: "February 02, 2026",
    title: "New Radio Array Joins the Meridian Observing Network",
  },
  {
    img: n3,
    tag: "Article",
    read: "4 min read",
    date: "January 21, 2026",
    title: "Public Observing Night Draws Record Attendance",
  },
];

const GALLERY = [
  { src: g1, alt: "Emission nebula", span: "md:col-span-2" },
  { src: g2, alt: "Spiral galaxy", span: "" },
  { src: g3, alt: "Saturn and its rings", span: "" },
  { src: g4, alt: "Milky Way over mountains", span: "md:col-span-2" },
  { src: g5, alt: "Cosmic cliffs" },
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
  const [lightbox, setLightbox] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setLightbox(null);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox]);

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
          <a
            href={DISCORD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 px-4 py-2 text-sm text-white/80 transition-colors hover:text-white md:inline-flex"
          >
            <DiscordIcon className="h-4 w-4" />
            Discord
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section id="top" className="relative min-h-screen w-full overflow-hidden">
        <img
          src={hero}
          alt="Deep space galaxy"
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-background via-background/70 to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-screen max-w-[1400px] flex-col justify-end px-6 pb-10 pt-40 md:px-10 md:pb-14">
          <h1 className="max-w-4xl text-4xl leading-[0.95] md:text-6xl lg:text-7xl">
            Space Outreach Initiative
          </h1>
          <p className="mt-6 max-w-xl text-base text-white/80 md:text-lg">
            Observing the deep sky and sharing it with the public since a time before digital
            imaging.
          </p>

          <div className="mt-8">
            <a
              href="#about"
              className="inline-flex items-center border-[1.5px] border-white/30 bg-transparent px-4 py-2 text-base text-white/80 transition-colors hover:border-white/60 hover:text-white md:text-lg"
            >
              About us
            </a>
          </div>

          {/* Feature strip */}
          <div className="mt-14 grid grid-cols-1 gap-8 border-t border-white/15 pt-8 md:mt-20 md:grid-cols-3 md:gap-10">
            {HERO_FEATURES.map((f) => (
              <a
                key={f.title}
                href={f.href}
                className="group flex items-start justify-between gap-6"
              >
                <div>
                  <p className="text-[0.65rem] uppercase tracking-[0.28em] text-white/60">
                    {f.label}
                  </p>
                  <p className="mt-3 text-lg leading-snug text-white transition-colors group-hover:text-accent md:text-xl">
                    {f.title}
                  </p>
                </div>
                <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/30 text-white transition-colors group-hover:border-accent group-hover:text-accent">
                  <ArrowUpRight size={14} strokeWidth={1.5} />
                </span>
              </a>
            ))}
          </div>
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
                src={about}
                alt="Observatory dome under the stars"
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
              A quiet devotion to the night sky.
            </h2>
            <div className="mt-8 space-y-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              <p>
                Founded by a small group of amateur astronomers in the high desert, Meridian has
                grown into a working observatory, a research collaboration, and a public program
                that welcomes thousands of visitors each year.
              </p>
              <p>
                Our members contribute to occultation timing, variable-star photometry, and
                asteroid recovery campaigns. We publish annual observing reports and maintain three
                dark-sky sites open to the public on scheduled nights.
              </p>
              <p>
                We believe that careful observation, patiently done, remains one of the most
                rewarding things a person can do with their evenings.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* News */}
      <section id="news" className="border-t border-border py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <SectionHeader
            eyebrow="News & Events"
            title="Recent from the observatory."
            linkLabel="Recently published"
            href="#news"
          />
          <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-3">
            {NEWS.map((item) => (
              <FadeIn key={item.title}>
                <article className="group">
                  <div
                    className="relative aspect-[4/3] w-full overflow-hidden"
                    style={{ backgroundColor: "#1a1a2e" }}
                  >
                    <img
                      src={item.img}
                      alt=""
                      width={1200}
                      height={900}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                    <span className="chip absolute left-4 top-4">
                      {item.tag === "Event" ? (
                        <Calendar size={12} strokeWidth={1.75} />
                      ) : (
                        <FileText size={12} strokeWidth={1.75} />
                      )}
                      {item.tag}
                    </span>
                  </div>
                  <p className="mt-6 text-xs uppercase tracking-[0.22em] text-muted-foreground">
                    {item.date} · {item.read}
                  </p>
                  <h3 className="mt-3 text-xl leading-tight transition-colors group-hover:text-accent md:text-2xl">
                    {item.title}
                  </h3>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="border-t border-border py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <SectionHeader
            eyebrow="Gallery"
            title="Images from our members."
            linkLabel="Full archive"
            href="#gallery"
          />
        </div>
        <div className="mx-auto mt-16 grid max-w-[1400px] grid-cols-2 gap-2 px-2 md:grid-cols-4 md:gap-3 md:px-3">
          {GALLERY.map((img) => (
            <button
              key={img.src}
              type="button"
              onClick={() => setLightbox(img.src)}
              className={`group aspect-square overflow-hidden ${img.span ?? ""}`}
              style={{ backgroundColor: "#1a1a2e" }}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-opacity duration-300 group-hover:opacity-90"
              />
            </button>
          ))}
        </div>
      </section>


      {/* Contact */}
      <section id="contact" className="border-t border-border py-24 md:py-32">
        <div className="mx-auto max-w-2xl px-6 md:px-10">
          <p className="text-xs uppercase tracking-[0.28em] text-accent">Contact</p>
          <h2 className="mt-4 text-3xl md:text-4xl">Get in touch.</h2>
          <p className="mt-6 text-muted-foreground">
            Questions about membership, observing nights, or research collaborations.
          </p>

          <a
            href={DISCORD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 flex items-center gap-4 border border-border bg-transparent p-5 transition-colors hover:border-white/30"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 text-foreground">
              <DiscordIcon className="h-5 w-5" />
            </span>
            <div>
              <p className="text-base text-foreground">Join us on Discord</p>
              <p className="mt-1 text-sm text-muted-foreground">Community chat, events, and observing alerts.</p>
            </div>
          </a>

          <form
            className="mt-12 space-y-8"
            onSubmit={(e) => {
              e.preventDefault();
              (e.currentTarget as HTMLFormElement).reset();
            }}
          >
            {[
              { id: "name", label: "Name", type: "text" },
              { id: "email", label: "Email", type: "email" },
              { id: "subject", label: "Subject", type: "text" },
            ].map((f) => (
              <div key={f.id}>
                <label
                  htmlFor={f.id}
                  className="block text-xs uppercase tracking-[0.22em] text-muted-foreground"
                >
                  {f.label}
                </label>
                <input
                  id={f.id}
                  type={f.type}
                  required
                  className="mt-3 w-full border-0 border-b border-border bg-transparent py-3 text-base text-foreground outline-none focus:border-accent"
                />
              </div>
            ))}
            <div>
              <label
                htmlFor="message"
                className="block text-xs uppercase tracking-[0.22em] text-muted-foreground"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                required
                className="mt-3 w-full resize-none border-0 border-b border-border bg-transparent py-3 text-base text-foreground outline-none focus:border-accent"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-3 bg-accent px-6 py-3 text-xs uppercase tracking-[0.24em] text-accent-foreground transition-opacity hover:opacity-90"
            >
              Send message
              <ArrowUpRight size={14} strokeWidth={2} />
            </button>
          </form>
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

      {/* Lightbox */}
      {lightbox && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 p-4 md:p-10"
          onClick={() => setLightbox(null)}
        >
          <img
            src={lightbox}
            alt=""
            className="max-h-full max-w-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
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
