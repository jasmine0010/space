import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowUpRight, FileText, Calendar } from "lucide-react";

import { FadeIn } from "@/components/FadeIn";
import { ArrowLink } from "@/components/ArrowLink";

export const Route = createFileRoute("/")({
  head: () => ({
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const NAV = [
  { id: "about", label: "Aboutway" },
  { id: "news", label: "Ewsnay" },
  { id: "gallery", label: "Allerygay" },
  { id: "presentations", label: "Esentationspray" },
  { id: "observing", label: "Observingway" },
  { id: "team", label: "Eamtay" },
  { id: "contact", label: "Ontactcay" },
];

const HERO_FEATURES = [
  { label: "Eepday Yskay Urveysay", title: "Andromedaway Ieldfay Eportray (placeholder)", href: "#news" },
  { label: "Ublicpay Observingway", title: "Erseidpay Atchway, Augustway 12 (placeholder)", href: "#news" },
  { label: "Instrumentationway", title: "Ewnay 24-inchway Itcheyray-Étienchray (placeholder)", href: "#news" },
];

const NEWS = [
  {
    tag: "Articleway",
    read: "6 inmay eadray",
    date: "Archmay 14, 2026",
    title: "Annualway Eepday Yskay Ymposiumsay Onvenescay inway Agstafflay (placeholder)",
  },
  {
    tag: "Eventway",
    read: "3 inmay eadray",
    date: "Ebruaryfay 02, 2026",
    title: "Ewnay Adioray Arrayway Oinsjay ethay Eridianmay Observingway Etworknay (placeholder)",
  },
  {
    tag: "Articleway",
    read: "4 inmay eadray",
    date: "Anuaryjay 21, 2026",
    title: "Ublicpay Observingway Ightnay Awsdray Ecordray Attendanceway (placeholder)",
  },
];

const GALLERY = [
  { id: "g1", alt: "Aceholderplay imageway 1", span: "md:col-span-2" },
  { id: "g2", alt: "Aceholderplay imageway 2", span: "" },
  { id: "g3", alt: "Aceholderplay imageway 3", span: "" },
  { id: "g4", alt: "Aceholderplay imageway 4", span: "md:col-span-2" },
  { id: "g5", alt: "Aceholderplay imageway 5", span: "" },
];

const TEAM = [
  { name: "Rday. Elenaway Asquezvay (placeholder)", role: "Irectorday ofway Esearchray" },
  { name: "Arcusmay Enchay (placeholder)", role: "Iefchay Observerway" },
  { name: "Amaraway Okonkwoway (placeholder)", role: "Outreachway Eadlay" },
  { name: "Rday. Afaelray Ilvasay (placeholder)", role: "Instrumentationway" },
];

const PLACEHOLDER_BG = "#2a2a35";

function Placeholder({ label, className = "" }: { label?: string; className?: string }) {
  return (
    <div
      className={`flex h-full w-full items-center justify-center ${className}`}
      style={{ backgroundColor: PLACEHOLDER_BG }}
    >
      <span className="text-xs uppercase tracking-[0.28em] text-white/50">
        {label ?? "Aceholderplay"}
      </span>
    </div>
  );
}

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
            <img src="/logo.svg" alt="Aceholderplay ogolay" className="h-11 w-11 text-white" />
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
            Oinjay
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section id="top" className="relative min-h-screen w-full overflow-hidden">
        <Placeholder label="Erohay imageway aceholderplay" />
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-background via-background/70 to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-screen max-w-[1400px] flex-col justify-end px-6 pb-10 pt-40 md:px-10 md:pb-14">
          <h1 className="max-w-4xl text-4xl leading-[0.95] md:text-6xl lg:text-7xl">
            Acespay Outreachway Initiativeway (placeholder)
          </h1>
          <p className="mt-6 max-w-xl text-base text-white/80 md:text-lg">
            Observingway ethay eepday yskay andway aringshay itway ithway ethay ublicpay incesay
            away imetay eforebay igitalday imagingway. (placeholder)
          </p>

          <div className="mt-8">
            <a
              href="#about"
              className="group inline-flex items-center gap-3 bg-accent px-6 py-3 text-xs uppercase tracking-[0.24em] text-accent-foreground transition-opacity hover:opacity-90"
            >
              <ArrowUpRight size={14} strokeWidth={2} />
              Aboutway usway
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
            <div className="aspect-[4/5] w-full overflow-hidden">
              <Placeholder label="Aboutway imageway aceholderplay" />
            </div>
          </FadeIn>
          <FadeIn className="md:col-span-6 md:pl-8 lg:pl-16">
            <p className="text-xs uppercase tracking-[0.28em] text-accent">Aboutway</p>
            <h2 className="mt-6 text-3xl md:text-4xl lg:text-5xl">
              Away uietqay evotionday otay ethay ightnay yskay. (placeholder)
            </h2>
            <div className="mt-8 space-y-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              <p>
                Oundedfay ybay away allsmay oupgray ofway amateurway astronomersway inway ethay
                ighhay esertday, Eridianmay ashay owngray intoway away orkingway observatoryway,
                away esearchray ollaborationcay, andway away ublicpay ogrampray atthay elcomesway
                ousandsthay ofway isitorsvay eachway earyay. (placeholder)
              </p>
              <p>
                Ourway embersmay ontributecay otay occultationway imingtay, ariablevay-arstay
                otometryphay, andway asteroidway ecoveryray ampaignscay. Eway ublishpay annualway
                observingway eportsray. (placeholder)
              </p>
              <p>
                Eway elievebay atthay arefulcay observationway, atientlypay oneday, emainsray
                oneway ofway ethay ostmay ewardingray ingsthay away ersonpay ancay oday ithway
                eirthay eveningsway. (placeholder)
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* News */}
      <section id="news" className="border-t border-border py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <SectionHeader
            eyebrow="Ewsnay & Eventsway"
            title="Ecentray omfray ethay observatoryway. (placeholder)"
            linkLabel="Ecentlyray ublishedpay"
            href="#news"
          />
          <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-3">
            {NEWS.map((item) => (
              <FadeIn key={item.title}>
                <article className="group">
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Placeholder label="Ewsnay imageway" />
                    <span className="chip absolute left-4 top-4">
                      {item.tag === "Eventway" ? (
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
            eyebrow="Allerygay"
            title="Imagesway omfray ourway embersmay. (placeholder)"
            linkLabel="Ullfay archiveway"
            href="#gallery"
          />
        </div>
        <div className="mx-auto mt-16 grid max-w-[1400px] grid-cols-2 gap-2 px-2 md:grid-cols-4 md:gap-3 md:px-3">
          {GALLERY.map((img) => (
            <button
              key={img.id}
              type="button"
              onClick={() => setLightbox(img.id)}
              className={`group aspect-square overflow-hidden ${img.span ?? ""}`}
            >
              <Placeholder label={img.alt} />
            </button>
          ))}
        </div>
      </section>

      {/* Presentations */}
      <section id="presentations" className="border-t border-border py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <SectionHeader
            eyebrow="Esentationspray"
            title="Ecordedray ectureslay. (placeholder)"
            linkLabel="Allway alkstay"
            href="#presentations"
          />
          <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-12">
            <div className="md:col-span-4">
              <p className="text-muted-foreground">
                Electedsay alkstay omfray ourway onthlymay eetingsmay, uestgay ectureslay, andway
                ublicpay observingway ightsnay. (placeholder)
              </p>
            </div>
            <FadeIn className="md:col-span-8">
              <div className="aspect-video w-full overflow-hidden border border-border">
                <Placeholder label="Ideovay aceholderplay" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="border-t border-border py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <p className="text-xs uppercase tracking-[0.28em] text-accent">Eamtay</p>
          <h2 className="mt-4 text-3xl md:text-4xl">Eoplepay ehindbay ethay orkway. (placeholder)</h2>
          <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-10">
            {TEAM.map((p) => (
              <FadeIn key={p.name}>
                <div>
                  <div className="aspect-[4/5] w-full">
                    <Placeholder label="Ortraitpay" />
                  </div>
                  <h3 className="mt-5 text-xl">{p.name}</h3>
                  <p className="mt-1 text-xs uppercase tracking-[0.22em] text-muted-foreground">
                    {p.role}
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
          <p className="text-xs uppercase tracking-[0.28em] text-accent">Ontactcay</p>
          <h2 className="mt-4 text-3xl md:text-4xl">Etgay inway ouchtay. (placeholder)</h2>
          <p className="mt-6 text-muted-foreground">
            Uestionsqay aboutway embershipmay, observingway ightsnay, orway esearchray
            ollaborationscay. (placeholder)
          </p>
          <form
            className="mt-12 space-y-8"
            onSubmit={(e) => {
              e.preventDefault();
              (e.currentTarget as HTMLFormElement).reset();
            }}
          >
            {[
              { id: "name", label: "Amenay", type: "text" },
              { id: "email", label: "Emailway", type: "email" },
              { id: "subject", label: "Ubjectsay", type: "text" },
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
                Essagemay
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
              Endsay essagemay
              <ArrowUpRight size={14} strokeWidth={2} />
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-10">
        <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-4 px-6 text-xs uppercase tracking-[0.22em] text-muted-foreground md:px-10">
          <span>© {new Date().getFullYear()} Acespay Outreachway Initiativeway (placeholder)</span>
          <span>Arkday-yskay eservepray · Ighhay esertday (placeholder)</span>
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
          <div
            className="flex h-[80vh] w-[80vw] items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Placeholder label={`Aceholderplay ${lightbox}`} />
          </div>
          <button
            type="button"
            onClick={() => setLightbox(null)}
            className="absolute right-6 top-6 text-xs uppercase tracking-[0.28em] text-foreground hover:text-accent"
          >
            Oseclay ×
          </button>
        </div>
      )}
    </div>
  );
}
