import { motion } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'
export function Reveal({children,className=''}){return <motion.div className={className} initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.1}} transition={{duration:.6}}>{children}</motion.div>}
export function Label({children}){return <div className="eyebrow"><i/>{children}</div>}
export function Button({children,href='#iletisim',secondary=false}){return <a href={href} className={'button '+(secondary?'secondary':'')}>{children}<ArrowUpRight size={18}/></a>}
export function Logo(){return <a href="/" className="logo" aria-label="ADAVENT ana sayfa"><b>ADA<span>VENT</span><i/></b><small>MEKANİK OTOMASYON</small></a>}
