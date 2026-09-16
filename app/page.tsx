import Image from "next/image";

const TEL = "+995599457070";
const TEL_DISPLAY = "599 45 70 70";
const WHATSAPP = "https://wa.me/995599457070";
const INSTAGRAM = "https://www.instagram.com/sant.service/";
const FACEBOOK =
  "https://www.facebook.com/profile.php?id=61552343170403";
const EMAIL = "santservice64@gmail.com";

const services = [
  "კანალიზაციის წმენდა",
  "ონკანის დაყენება",
  "უნიტაზის მონტაჟი",
  "დუშკაბინის მონტაჟი",
  "წყლის მილების დაბერვა",
  "წყლის მილების შედუღება",
];

const steps = [
  {
    n: "1",
    title: "დარეკე ან მოგვწერე",
    text: "Call ან WhatsApp — იმავე ნომერზე. შეგიძლია ფოტოც გამოგვიგზავნო.",
  },
  {
    n: "2",
    title: "ვიზიტი",
    text: "მოვალთ თბილისსა და შემოგარენში, 24/7.",
  },
  {
    n: "3",
    title: "ფასი",
    text: "ვიზიტი 50 ლარიდან. სამუშაოს ფასს გეტყვი დაწყებამდე.",
  },
  {
    n: "4",
    title: "სამუშაო",
    text: "ვაკეთებთ საქმეს. ყიდვა — თქვენზე, მონტაჟი — ჩვენზე.",
  },
];

function CallButton({ className = "" }: { className?: string }) {
  return (
    <a
      href={`tel:${TEL}`}
      className={`inline-flex items-center justify-center rounded-full bg-call px-6 py-3 text-base font-semibold text-white hover:bg-red-800 ${className}`}
    >
      დარეკე {TEL_DISPLAY}
    </a>
  );
}

function WhatsAppButton({ className = "" }: { className?: string }) {
  return (
    <a
      href={WHATSAPP}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center rounded-full bg-whatsapp px-6 py-3 text-base font-semibold text-white hover:bg-emerald-800 ${className}`}
    >
      WhatsApp
    </a>
  );
}

export default function Home() {
  return (
    <div className="flex min-h-full flex-col pb-24 md:pb-0">
      <header className="sticky top-0 z-20 border-b border-zinc-100 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3">
          <p className="text-sm font-semibold leading-tight sm:text-base">
            სანტექნიკოსი გამოძახებით
          </p>
          <a
            href={`tel:${TEL}`}
            className="shrink-0 text-sm font-bold text-call sm:text-base"
          >
            {TEL_DISPLAY}
          </a>
        </div>
      </header>

      <main className="flex-1">
        <section className="mx-auto grid max-w-5xl items-center gap-10 px-4 py-10 md:grid-cols-2 md:py-16">
          <div>
            <p className="text-sm font-semibold text-call">
              24/7 გამოძახება · თბილისი და შემოგარენი · ვიზიტი 50 ლარიდან
            </p>
            <h1 className="mt-3 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              ოჯახის სანტექნიკი გამოძახებით
            </h1>
            <p className="mt-4 text-lg text-zinc-600">
              სანდო სანტექნიკოსი თქვენი კომფორტისთვის. სანტექნიკოსი, მონტაჟი და
              შეკეთება.
            </p>
            <p className="mt-3 text-sm text-zinc-500">
              santeqnikosi gamodzaxebit
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CallButton />
              <WhatsAppButton />
            </div>
          </div>
          <div className="relative aspect-[819/430] overflow-hidden rounded-2xl border border-zinc-100 bg-zinc-50">
            <Image
              src="/hero.jpg"
              alt="სანტექნიკის სამუშაოები: ონკანები, უნიტაზი, დუშკაბინი"
              fill
              className="object-cover object-top"
              priority
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
        </section>

        <section className="border-t border-zinc-100 bg-zinc-50">
          <div className="mx-auto max-w-5xl px-4 py-14">
            <h2 className="text-2xl font-bold">სერვისები</h2>
            <p className="mt-2 text-zinc-600">
              ყიდვა — თქვენზე | მონტაჟი — ჩვენზე
            </p>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((name, i) => (
                <li
                  key={name}
                  className="rounded-xl border border-zinc-200 bg-white p-5"
                >
                  <span className="text-sm font-bold text-call">{i + 1}</span>
                  <p className="mt-2 font-semibold">{name}</p>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-zinc-700">
              7. ყველაფერი რაც სანტექნიკას შეეხება
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 py-14">
          <h2 className="text-2xl font-bold">როგორ მუშაობს</h2>
          <ol className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <li key={step.n}>
                <span className="text-sm font-bold text-call">{step.n}</span>
                <h3 className="mt-2 font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-zinc-600">{step.text}</p>
              </li>
            ))}
          </ol>
          <div className="mt-10 hidden gap-3 sm:flex">
            <CallButton />
            <WhatsAppButton />
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-100 bg-zinc-50">
        <div className="mx-auto max-w-5xl space-y-3 px-4 py-10 text-sm text-zinc-700">
          <p className="font-semibold">სანტექნიკოსი გამოძახებით</p>
          <p>
            <a className="font-bold text-call" href={`tel:${TEL}`}>
              {TEL_DISPLAY}
            </a>
            {" · "}
            <a className="font-semibold text-whatsapp" href={WHATSAPP}>
              WhatsApp
            </a>
          </p>
          <p>
            <a href={INSTAGRAM} className="underline">
              Instagram: sant.service
            </a>
            {" · "}
            <a href={FACEBOOK} className="underline">
              Facebook
            </a>
          </p>
          <p>
            <a href={`mailto:${EMAIL}`} className="underline">
              {EMAIL}
            </a>
          </p>
          <p className="text-zinc-500">თბილისი და შემოგარენი · 24/7 გამოძახება</p>
        </div>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-30 border-t border-zinc-200 bg-white p-3 md:hidden">
        <div className="flex gap-2">
          <CallButton className="flex-1 px-3 text-sm" />
          <WhatsAppButton className="flex-1 px-3 text-sm" />
        </div>
      </div>
    </div>
  );
}
