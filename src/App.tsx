import Logo from "@/Logo";
import heroSocrates from "@/imports/hero-socrates.png";
import cityKirov from "@/imports/city-kirov.png";
import zkZnak from "@/imports/zk-znak.png";
import zkZaryadnoe from "@/imports/zk-zaryadnoe.png";
import zkBulychev from "@/imports/zk-bulychev.png";

const SITE_URL = "https://filo-soft.ru";
const NBSP = " ";

// Prevent Russian prepositions/conjunctions from dangling at the end of a line.
function typo(input: string): string {
  let s = input;
  for (let i = 0; i < 3; i++) {
    s = s.replace(
      /(^|\s)([А-Яа-яЁёA-Za-z]{1,2}|для|что|как|уже|или|при|над|под|про|без|обо)\s+/g,
      (_m, pre, w) => `${pre}${w}${NBSP}`,
    );
  }
  return s;
}

const program = [
  {
    n: "01",
    title: "ЖК «Знак»",
    text: "Посмотрим, как цифровые решения становятся частью современного жилого комплекса.",
    image: zkZaryadnoe,
    alt: "Современный жилой комплекс «Знак»",
  },
  {
    n: "02",
    title: "ЖК «Зарядное»",
    text: "Поговорим о технологиях, которые помогают создавать новый уровень комфорта для жителей.",
    image: zkZnak,
    alt: "Жилой комплекс «Зарядное» с благоустроенным двором",
  },
  {
    n: "03",
    title: "Круглый стол по цифровизации",
    text: "Обсудим практические вопросы, с которыми сталкиваются девелоперы и управляющие компании:",
    points: [
      "умный дом и цифровая инфраструктура",
      "мобильное приложение для жителей",
      "сервисы управляющей компании",
      "цифровые инструменты для продаж",
      "клиентский опыт и коммуникация с жителями",
    ],
  },
  {
    n: "04",
    title: "ЖК «Булычев»",
    text: "Посетим один из реализованных проектов и посмотрим на цифровые решения в действующем жилом комплексе.",
    image: zkBulychev,
    alt: "Жилой комплекс «Булычев» в вечерней подсветке",
  },
  {
    n: "05",
    title: "Городской тур",
    text: "Познакомимся с Кировом не только через современные ЖК — прогуляемся по городу, узнаем его историю и увидим места, которые формируют его характер.",
    image: cityKirov,
    alt: "Панорама исторического центра Кирова",
  },
];

function Rule() {
  return <div className="h-px w-full bg-ink/10" />;
}

export default function App() {
  return (
    <div className="min-h-screen w-full bg-white text-ink font-sans">
      {/* Header */}
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 sm:px-10">
        <Logo className="h-5 w-auto sm:h-6" color="#252090" />
        <span className="hidden text-sm font-medium text-ink/50 sm:block">
          Урбан-тур{NBSP}· Киров
        </span>
      </header>

      <Rule />

      {/* Hero */}
      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-14 sm:px-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8 lg:py-20">
        <div className="flex flex-col justify-center">
          <div className="mb-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm font-medium text-prime">
            <span>17–18 сентября</span>
            <span className="h-1 w-1 bg-brand-300" />
            <span>Киров</span>
          </div>

          <h1 className="text-5xl font-black leading-[0.98] tracking-tight text-ink sm:text-6xl lg:text-7xl">
            Урбан-тур
            <span className="mt-2 block text-prime">от Философт</span>
          </h1>

          <p className="mt-8 max-w-xl text-base leading-relaxed text-ink/70 sm:text-lg">
            {typo(
              "Приглашаем вас на двухдневный урбан-тур — поездку по современным жилым комплексам, экскурсию по городу и открытый разговор о цифровизации девелопмента и управления недвижимостью.",
            )}
          </p>

        </div>

        <div className="relative flex items-end justify-center">
          <div
            className="absolute inset-x-6 bottom-6 top-10 bg-brand-100"
            aria-hidden="true"
          />
          <img
            src={heroSocrates}
            alt="Мраморная статуя философа, держащего макет города с подсвеченными цифровыми связями"
            className="relative z-10 max-h-[30rem] w-auto object-contain"
          />
        </div>
      </section>

      {/* Intro band */}
      <section className="bg-ink text-white">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:px-10 lg:py-20">
          <p className="max-w-3xl text-2xl font-medium leading-snug text-white/90 sm:text-3xl lg:text-4xl">
            {typo(
              "Вместе посетим знаковые объекты Кирова, посмотрим, как сегодня технологии работают в реальных жилых комплексах, и обсудим, каким должен быть современный клиентский опыт.",
            )}
          </p>
        </div>
      </section>

      {/* Program */}
      <section id="program" className="mx-auto max-w-6xl px-6 py-16 sm:px-10 lg:py-24">
        <div className="mb-12 flex flex-wrap items-baseline justify-between gap-4">
          <h2 className="text-3xl font-bold tracking-tight text-prime sm:text-4xl">
            В программе
          </h2>
          <span className="text-sm font-medium text-ink/40">
            2 дня · 3 ЖК · 1 город
          </span>
        </div>

        <div className="flex flex-col">
          {program.map((item, i) => (
            <div key={item.n}>
              {i > 0 && <Rule />}
              <div className="grid grid-cols-1 gap-6 py-10 lg:grid-cols-[auto_1fr_auto] lg:items-start lg:gap-10">
                <span className="text-sm font-medium text-brand-300 lg:pt-1">
                  {item.n}
                </span>

                <div className="max-w-2xl">
                  <h3 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-ink/70">
                    {typo(item.text)}
                  </p>
                  {item.points && (
                    <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                      {item.points.map((p) => (
                        <li
                          key={p}
                          className="flex items-start gap-2.5 text-sm text-ink/80"
                        >
                          <span className="mt-2 h-1.5 w-1.5 flex-none bg-prime" />
                          {typo(p)}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {item.image && (
                  <div className="w-full overflow-hidden bg-brand-100 lg:w-64">
                    <img
                      src={item.image}
                      alt={item.alt}
                      className="h-44 w-full object-cover transition-transform duration-500 hover:scale-105 lg:h-40"
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 bg-brand-100/60 px-6 py-8 sm:px-10">
          <p className="max-w-3xl text-base leading-relaxed text-ink/80">
            {typo(
              "А вечером — неформальное общение, развлекательная программа и возможность продолжить разговор уже без деловой повестки.",
            )}
          </p>
        </div>
      </section>

      {/* Closing */}
      <section className="bg-prime text-white">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10 lg:py-28">
          <p className="text-sm font-medium text-brand-200">
            17–18 сентября · Киров
          </p>
          <h2 className="mt-6 max-w-3xl text-4xl font-black leading-tight tracking-tight sm:text-5xl">
            {typo(
              "Два дня, три жилых комплекса, один город и много разговоров о цифровизации.",
            )}
          </h2>
          <p className="mt-6 max-w-xl text-lg text-white/70">
            {typo("Будем рады провести эти два дня вместе с вами.")}
          </p>

          <div className="mt-10">
            <a
              href={SITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white px-7 py-3.5 text-sm font-medium text-prime transition-colors hover:bg-brand-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-prime"
            >
              Связаться с нами
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-10">
        <Logo className="h-5 w-auto" color="#252090" />
        <div className="flex flex-col gap-1 text-sm text-ink/40 sm:items-end">
          <a
            href={SITE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-ink/60 transition-colors hover:text-prime"
          >
            filo-soft.ru
          </a>
          <span>© 2026 · Урбан-тур · Киров</span>
        </div>
      </footer>
    </div>
  );
}
