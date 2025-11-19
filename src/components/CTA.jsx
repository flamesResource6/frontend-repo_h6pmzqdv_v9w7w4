function CTA() {
  return (
    <section id="contact" className="relative py-24 bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-200/80 dark:border-white/10 bg-white/80 dark:bg-white/5 backdrop-blur p-10 sm:p-14 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">Ready to grow BrandZ?</h2>
          <p className="mt-3 text-slate-700/80 dark:text-slate-300/80 max-w-2xl mx-auto">Tell us your goals. We’ll audit your funnel and send a 90‑day plan covering acquisition, conversion and retention.</p>

          <form onSubmit={(e) => e.preventDefault()} className="mt-8 grid sm:grid-cols-[1fr_auto] gap-3 max-w-xl mx-auto">
            <input type="email" required placeholder="Your work email" className="w-full rounded-xl border border-slate-300/80 dark:border-white/10 bg-white dark:bg-slate-900 px-4 py-3 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-300" />
            <button className="inline-flex items-center justify-center rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-900 px-6 py-3 font-semibold shadow hover:shadow-md">Get Proposal</button>
          </form>

          <p className="mt-3 text-xs text-slate-500">No spam. Cancel anytime.</p>
        </div>
      </div>
    </section>
  )
}

export default CTA
