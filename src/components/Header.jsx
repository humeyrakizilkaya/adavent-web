import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { ArrowUpRight, Mail, Phone, X } from 'lucide-react'
import { Logo } from './UI'
import { company } from '../data/company'
import './Header.css'

const links = [
  ['Ana Sayfa', 'top'], ['Hakkımızda', 'hakkimizda'],
  ['Hizmetlerimiz', 'hizmetler'], ['Markalarımız', 'markalar'],
  ['Referanslarımız', 'referanslar'], ['İletişim', 'iletisim'],
]
const destination = id => id === 'referanslar' ? '/referanslar' : `/#${id}`

function Sidebar({ onClose, active, triggerRef }) {
  const dialogRef = useRef(null)
  const closeRef = useRef(null)
  const reduced = useReducedMotion()

  useEffect(() => {
    const dialog = dialogRef.current
    const body = document.body
    const previousOverflow = body.style.overflow
    const previousPadding = body.style.paddingRight
    const gap = window.innerWidth - document.documentElement.clientWidth
    body.style.overflow = 'hidden'
    if (gap > 0) body.style.paddingRight = `${parseFloat(getComputedStyle(body).paddingRight) + gap}px`
    dialog.showModal()
    closeRef.current?.focus()
    const trigger = triggerRef.current
    return () => {
      dialog.close()
      body.style.overflow = previousOverflow
      body.style.paddingRight = previousPadding
      trigger?.focus({ preventScroll: true })
    }
  }, [triggerRef])

  const transition = { duration: reduced ? 0 : 0.38, ease: [0.22, 1, 0.36, 1] }
  return createPortal(
    <dialog ref={dialogRef} className="navigation-dialog" id="navigation-sidebar" aria-modal="true" aria-labelledby="navigation-title" onCancel={e => { e.preventDefault(); onClose() }}>
      <motion.div className="navigation-scrim" aria-hidden="true" onClick={onClose} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={transition} />
      <motion.div className="navigation-panel" initial={{ x: reduced ? 0 : '100%', opacity: reduced ? 0 : 1 }} animate={{ x: 0, opacity: 1 }} exit={{ x: reduced ? 0 : '100%', opacity: reduced ? 0 : 1 }} transition={transition}>
        <div className="sidebar-heading"><span id="navigation-title">ADAVENT / KEŞFEDİN</span><button ref={closeRef} type="button" className="sidebar-close" onClick={onClose} aria-label="Menüyü kapat"><X size={23} /></button></div>
        <nav aria-label="Ana navigasyon" className="sidebar-links">
          {links.map(([label, id], index) => <Link key={id} to={destination(id)} aria-current={active === id ? (id === 'referanslar' ? 'page' : 'location') : undefined} onClick={onClose}><small aria-hidden="true">0{index + 1}</small><span>{label}</span><ArrowUpRight aria-hidden="true" size={22} /></Link>)}
        </nav>
        <div className="sidebar-bottom"><p>Birlikte, doğru çözümü kuralım.</p><Link to="/#iletisim" className="button sidebar-quote" onClick={onClose}>Teklif Al <ArrowUpRight size={21} aria-hidden="true" /></Link><a className="sidebar-phone" href={'tel:' + company.tel}><Phone size={15} aria-hidden="true" />{company.phone}</a><span className="sidebar-location">GİRNE, KKTC · MEKANİK OTOMASYON</span></div>
      </motion.div>
    </dialog>, document.body,
  )
}

export default function Header() {
  const [open, setOpen] = useState(false)
  const [section, setSection] = useState('top')
  const triggerRef = useRef(null)
  const location = useLocation()
  useEffect(() => {
    const media = window.matchMedia('(min-width: 1024px)')
    const changed = () => { if (media.matches) setOpen(false) }
    media.addEventListener('change', changed)
    return () => media.removeEventListener('change', changed)
  }, [])
  const active = location.pathname === '/referanslar' ? 'referanslar' : section

  useEffect(() => {
    if (location.pathname !== '/') return
    const ids = ['top', 'hakkimizda', 'hizmetler', 'neden', 'markalar', 'iletisim']
    let scheduled = false
    function update() {
      scheduled = false
      const current = ids.filter(id => { const node = document.getElementById(id); return node && node.getBoundingClientRect().top <= 160 }).at(-1) || 'top'
      setSection(current === 'neden' ? 'hizmetler' : current)
    }
    function scroll() { if (!scheduled) { scheduled = true; requestAnimationFrame(update) } }
    update()
    window.addEventListener('scroll', scroll, { passive: true })
    window.addEventListener('resize', scroll)
    return () => { window.removeEventListener('scroll', scroll); window.removeEventListener('resize', scroll) }
  }, [location.pathname])

  useEffect(() => {
    if (location.pathname !== '/' || !location.hash) return
    const id = decodeURIComponent(location.hash.slice(1))
    const frame = requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView({ behavior: 'instant', block: 'start' }))
    return () => cancelAnimationFrame(frame)
  }, [location.pathname, location.hash])

  return <><aside className="reference-rail" aria-label="ADAVENT yan navigasyon"><Link to="/#top" className="rail-logo" aria-label="ADAVENT ana sayfa"><img src="/images/adavent-logo.png" alt="ADAVENT Mekanik Otomasyon" /></Link><nav className="rail-links" aria-label="Ana navigasyon">{links.map(([label,id]) => <Link key={id} to={destination(id)} aria-current={active === id ? (id === 'referanslar' ? 'page' : 'location') : undefined} onClick={() => { if(location.pathname === '/') document.getElementById(id)?.scrollIntoView({behavior:'instant',block:'start'}) }}>{label}</Link>)}</nav><div className="rail-footer"><Link to="/#iletisim" className="rail-quote">Teklif Al</Link><div className="rail-contact"><a href={'mailto:'+company.email} aria-label="ADAVENT'e e-posta gönder"><Mail size={14} aria-hidden="true"/></a><a href={'tel:'+company.tel} aria-label="ADAVENT'i ara"><Phone size={14} aria-hidden="true"/></a></div></div></aside><header className="premium-header"><div className="container premium-header-row"><Logo /><button ref={triggerRef} type="button" className="navigation-trigger" aria-label="Ana menüyü aç" aria-expanded={open} aria-controls="navigation-sidebar" aria-haspopup="dialog" onClick={() => setOpen(true)}><span>MENÜ</span><span className="hamburger-lines" aria-hidden="true"><i /><i /></span></button></div></header><AnimatePresence>{open && <Sidebar key="sidebar" onClose={() => setOpen(false)} active={active} triggerRef={triggerRef} />}</AnimatePresence></>
}

