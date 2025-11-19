import { Target, BarChart3, Globe2, MailCheck, ShoppingCart, Wand2 } from 'lucide-react'

function Services() {
  const items = [
    {
      icon: <Target className="h-6 w-6" />, 
      title: 'Paid Media & Growth',
      desc: 'Google, Meta, TikTok and Programmatic campaigns engineered for ROAS.'
    },
    {
      icon: <BarChart3 className="h-6 w-6" />, 
      title: 'Analytics & CRO',
      desc: 'Tracking, dashboards and A/B testing to turn traffic into revenue.'
    },
    {
      icon: <Globe2 className="h-6 w-6" />, 
      title: 'Web Design & Dev',
      desc: 'High-performance sites on modern stacks, built to convert fast.'
    },
    {
      icon: <MailCheck className="h-6 w-6" />, 
      title: 'CRM & Automation',
      desc: 'Lifecycle emails, CRM pipelines and automations that scale.'
    },
    {
      icon: <ShoppingCart className="h-6 w-6" />, 
      title: 'E‑commerce Growth',
      desc: 'End-to-end funnels for DTC brands across channels and marketplaces.'
    },
    {
      icon: <Wand2 className="h-6 w-6" />, 
      title: 'Brand & Content',
      desc: 'Positioning, ad creative and content systems that resonate.'
    }
  ]

  return (
    <section id="services" className="relative py-24 bg-white dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">Services built for modern brands</h2>
          <p className="mt-3 text-slate-700/80 dark:text-slate-300/80">Everything you need to launch, scale and dominate online channels.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <div key={idx} className="group rounded-2xl border border-slate-200/80 dark:border-white/10 bg-white dark:bg-white/5 p-6 hover:shadow-xl transition-shadow">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-indigo-500/90 via-sky-500/90 to-cyan-400/90 text-white flex items-center justify-center">
                {item.icon}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">{item.title}</h3>
              <p className="mt-1 text-slate-700/80 dark:text-slate-300/80">{item.desc}</p>
              <a href="#contact" className="mt-4 inline-flex text-indigo-600 dark:text-sky-300 hover:underline">Learn more →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
