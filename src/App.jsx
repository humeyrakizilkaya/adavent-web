import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MotionConfig } from 'motion/react'
import Home from './pages/Home'
import References from './pages/References'
export default function App(){return <BrowserRouter><MotionConfig reducedMotion="user"><Routes><Route path="/" element={<Home/>}/><Route path="/referanslar" element={<References/>}/><Route path="*" element={<main className="missing"><h1>Sayfa bulunamadı</h1><a href="/">Ana sayfaya dön</a></main>}/></Routes></MotionConfig></BrowserRouter>}

