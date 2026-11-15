import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { supabase } from "../supabase"
import { Mail, Lock, LogIn, Eye, EyeOff, ArrowLeft, Sun, Moon, ShieldCheck } from 'lucide-react'
import { usePortfolioTheme } from '../context/ThemeContext'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate()
  const { theme, toggleTheme } = usePortfolioTheme()

  const handleLogin = async (e) => {
    e.preventDefault()
    setLoading(true)
    const { data, error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) { alert(error.message); setLoading(false); return }
    const { data: profile } = await supabase.from('profiles').select('role').eq('id', data.user.id).single()
    if (profile?.role !== 'admin') {
      alert('Access denied')
      await supabase.auth.signOut()
      setLoading(false)
      return
    }
    navigate('/dashboard')
  }

  return (
    <main className="auth-page">
      <div className="auth-topbar"><Link to="/" className="auth-back"><ArrowLeft size={16}/> Back to portfolio</Link><button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">{theme === 'dark' ? <Sun size={17}/> : <Moon size={17}/>}</button></div>
      <div className="auth-layout">
        <section className="auth-story">
          <span className="auth-overline"><i/> PRIVATE WORKSPACE</span>
          <p className="auth-giant">H<span>.</span>SA</p>
          <h1>Good work<br/>starts <em>behind</em><br/>the scenes.</h1>
          <p className="auth-story-copy">A focused space to curate projects, share milestones, and keep this portfolio up to date.</p>
          <div className="auth-story-index"><span>PERSONAL PORTFOLIO</span><span>01 — ADMIN ACCESS</span></div>
        </section>
        <section className="auth-card-wrap">
          <div className="auth-card-glow"/>
          <div className="auth-card">
            <div className="auth-card-mark"><ShieldCheck size={19}/></div>
            <span className="auth-overline">WELCOME BACK</span>
            <h2>Admin <em>sign in.</em></h2>
            <p className="auth-subtitle">Enter your credentials to access the workspace.</p>
            <form onSubmit={handleLogin} className="auth-form">
              <label>Email address</label>
              <div className="auth-input"><Mail size={17}/><input type="email" placeholder="admin@example.com" value={email} onChange={e=>setEmail(e.target.value)} required autoComplete="username"/></div>
              <label>Password</label>
              <div className="auth-input"><Lock size={17}/><input type={showPassword?'text':'password'} placeholder="Enter your password" value={password} onChange={e=>setPassword(e.target.value)} required autoComplete="current-password"/><button type="button" onClick={()=>setShowPassword(v=>!v)} aria-label="Toggle password visibility">{showPassword?<EyeOff size={17}/>:<Eye size={17}/>}</button></div>
              <button className="auth-submit" type="submit" disabled={loading}>{loading?<span className="auth-spinner"/>:<>Access dashboard <LogIn size={17}/></>}</button>
            </form>
            <div className="auth-secure"><span/><span>SECURE AUTHENTICATED ACCESS</span><span/></div>
          </div>
        </section>
      </div>
      <div className="auth-bottom"><span>HIKAM SIRRUL ARIFIN</span><span>DESIGN · DEVELOP · DEPLOY</span></div>
    </main>
  )
}
