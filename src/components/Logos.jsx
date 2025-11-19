function Logos() {
  const logos = ['Visa', 'Stripe', 'Shopify', 'Klarna', 'Bolt', 'Wise']

  return (
    <section className="py-14 bg-white dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm uppercase tracking-wider text-slate-600/70 dark:text-slate-300/70">Trusted by fast-growing commerce brands</p>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 text-slate-500 dark:text-slate-400">
          {logos.map((name) => (
            <div key={name} className="h-12 rounded-xl border border-slate-200/80 dark:border-white/10 bg-white dark:bg-white/5 flex items-center justify-center font-semibold">
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Logos
