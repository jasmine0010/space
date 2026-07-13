import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowUpRight, FileText, Calendar } from "lucide-react";

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
import { PlaceholderBadge } from "@/components/PlaceholderBadge";

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
  { id: "presentations", label: "Presentations" },
  { id: "observing", label: "Observing" },
  { id: "team", label: "Team" },
  { id: "contact", label: "Contact" },
];

const HERO_FEATURES = [
  { label: "Deep Sky Survey", title: "[Placeholder] Andromeda Field Report", href: "#news" },
  { label: "Public Observing", title: "[Placeholder] Perseid Watch, August 12", href: "#news" },
  { label: "Instrumentation", title: "[Placeholder] New 24-inch Ritchey-Chrétien", href: "#news" },
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

const TEAM = [
  { name: "Dr. Elena Vasquez", role: "Director of Research" },
  { name: "Marcus Chen", role: "Chief Observer" },
  { name: "Amara Okonkwo", role: "Outreach Lead" },
  { name: "Dr. Rafael Silva", role: "Instrumentation" },
];

function SectionHeader({
  eyebrow,
  title,
  linkLabel,
  href,
  placeholder = false,
}: {
  eyebrow: string;
  title: React.ReactNode;
  linkLabel?: string;
  href?: string;
  placeholder?: boolean;
}) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-6">
      <div>
        <p className="text-xs uppercase tracking-[0.28em] text-accent">{eyebrow}</p>
        <h2 className="mt-4 text-3xl md:text-4xl">
          {placeholder && <PlaceholderBadge className="mr-2 align-middle" />}
          {title}
        </h2>
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
                  className="text-xs uppercase tracking-[0.22em] text-muted-foreground transition-colors hover:text-foreground"
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="hidden text-xs uppercase tracking-[0.22em] text-accent md:inline"
          >
            Join
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
            <PlaceholderBadge className="mr-2 align-middle" />
            Observing the deep sky and sharing it with the public since a time before digital
            imaging.
          </p>

          <div className="mt-8">
            <a
              href="#about"
              className="group inline-flex items-center gap-3 bg-accent px-6 py-3 text-xs uppercase tracking-[0.24em] text-accent-foreground transition-opacity hover:opacity-90"
            >
              <ArrowUpRight size={14} strokeWidth={2} />
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
              <PlaceholderBadge className="mr-2 align-middle" />
              A quiet devotion to the night sky.
            </h2>
            <div className="mt-8 space-y-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              <p>
                <PlaceholderBadge className="mr-2 align-middle" />
                Founded by a small group of amateur astronomers in the high desert, Meridian has
                grown into a working observatory, a research collaboration, and a public program
                that welcomes thousands of visitors each year.
              </p>
              <p>
                <PlaceholderBadge className="mr-2 align-middle" />
                Our members contribute to occultation timing, variable-star photometry, and
                asteroid recovery campaigns. We publish annual observing reports and maintain three
                dark-sky sites open to the public on scheduled nights.
              </p>
              <p>
                <PlaceholderBadge className="mr-2 align-middle" />
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
                    className="placeholder-frame relative aspect-[4/3] w-full overflow-hidden"
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
                    <PlaceholderBadge className="mr-2" /> {item.date} · {item.read}
                  </p>
                  <h3 className="mt-3 text-xl leading-tight transition-colors group-hover:text-accent md:text-2xl">
                    <PlaceholderBadge className="mr-2 align-middle" />
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
              className={`placeholder-frame group aspect-square overflow-hidden ${img.span ?? ""}`}
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

      {/* Presentations */}
      <section id="presentations" className="border-t border-border py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <SectionHeader
            eyebrow="Presentations"
            title="Recorded lectures."
            linkLabel="All talks"
            href="#presentations"
          />
          <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-12">
            <div className="md:col-span-4">
              <p className="text-muted-foreground">
                <PlaceholderBadge className="mr-2 align-middle" />
                Selected talks from our monthly meetings, guest lectures, and public observing nights.
              </p>
            </div>
            <FadeIn className="md:col-span-8">
              <div
                className="placeholder-frame aspect-video w-full overflow-hidden border border-border"
                style={{ backgroundColor: "#1a1a2e" }}
              >
                <iframe
                  className="h-full w-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Space Outreach Initiative — Featured Presentation"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="border-t border-border py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <p className="text-xs uppercase tracking-[0.28em] text-accent">Team</p>
          <h2 className="mt-4 text-3xl md:text-4xl">
            <PlaceholderBadge className="mr-2 align-middle" />
            People behind the work.
          </h2>
          <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-10">
            {TEAM.map((p) => (
              <FadeIn key={p.name}>
                <div>
                  <div
                    className="placeholder-frame aspect-[4/5] w-full"
                    style={{ backgroundColor: "#1a1a2e" }}
                    aria-hidden="true"
                  />
                  <h3 className="mt-5 text-xl">
                    <PlaceholderBadge className="mr-2 align-middle" />
                    {p.name}
                  </h3>
                  <p className="mt-1 text-xs uppercase tracking-[0.22em] text-muted-foreground">
                    <PlaceholderBadge className="mr-2" /> {p.role}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-border py-24 md:py-32">
        <div className="mx-auto max-w-2xl px-6 md:px-10">
          <p className="text-xs uppercase tracking-[0.28em] text-accent">Contact</p>
          <h2 className="mt-4 text-3xl md:text-4xl">
            <PlaceholderBadge className="mr-2 align-middle" />
            Get in touch.
          </h2>
          <p className="mt-6 text-muted-foreground">
            <PlaceholderBadge className="mr-2 align-middle" />
            Questions about membership, observing nights, or research collaborations.
          </p>
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
          <span>
            <PlaceholderBadge className="mr-2" />
            Dark-sky preserve · High desert
          </span>
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
