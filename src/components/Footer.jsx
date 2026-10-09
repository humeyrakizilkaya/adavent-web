import {ArrowUpRight} from 'lucide-react'
import {Logo} from './UI'
import {company} from '../data/company'
export default function Footer(){return <footer><div className="container footer-main"><div><Logo/><p>Mekanik otomasyon ve HVAC çözümlerinde<br/>kurulumdan teknik desteğe, yanınızdayız.</p></div><div><h4>KEŞFEDİN</h4><a href="/#hakkimizda">Hakkımızda</a><a href="/#hizmetler">Hizmetlerimiz</a><a href="/#markalar">Markalarımız</a></div><div><h4>İLETİŞİM</h4><a href={'tel:'+company.tel}>{company.phone}</a><a href={'mailto:'+company.email}>{company.email}</a><span>Girne, KKTC</span></div><a href="/#top" className="back-top" aria-label="Sayfanın başına dön"><ArrowUpRight/></a></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} ADAVENT. Tüm hakları saklıdır.</span><span>MEKANİK · HAVALANDIRMA · İKLİMLENDİRME</span></div></footer>}

