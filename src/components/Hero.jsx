import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden" id="home">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent dark:from-slate-950 dark:via-slate-950/60 pointer-events-none" />

      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-[24vh] pb-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/70 dark:bg-slate-900/70 border border-white/30 dark:border-white/10 px-3 py-1 text-xs font-medium backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              We build acquisition machines for brands
            </div>

            <h1 className="mt-6 text-4xl sm:text-6xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
              Full-funnel marketing to take BrandZ online and make it unforgettable
            </h1>

            <p className="mt-5 text-lg sm:text-xl text-slate-700/80 dark:text-slate-200/80">
              Performance campaigns, conversion-first websites, and CRM automations that turn clicks into customers.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#contact" className="inline-flex items-center justify-center rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-900 px-5 py-3 font-semibold shadow hover:shadow-md">
                Get My Growth Plan
              </a>
              <a href="#services" className="inline-flex items-center justify-center rounded-xl bg-white/70 dark:bg-white/10 backdrop-blur border border-white/30 dark:border-white/10 px-5 py-3 font-semibold text-slate-900 dark:text-white">
                See How We Work
              </a>
            </div>

            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 text-sm text-slate-600 dark:text-slate-300">
              <div>
                <p className="text-2xl font-bold text-slate-900 dark:text-white">12x</p>
                <p>Avg. ROAS</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900 dark:text-white">+180%</p>
                <p>Lead Volume</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900 dark:text-white"><span className="align-top text-base">$</span>4.2M</p>
                <p>Tracked Revenue</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900 dark:text-white">48 hrs</p>
                <p>Website Launch</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
