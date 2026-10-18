'use client';

import Link from 'next/link';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { useEffect, useState } from 'react';

const THEME_KEY = 'episodios-perdidos:theme';

export function SiteHeader() {
  const [dark, setDark] = useState(true);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(THEME_KEY);
    const nextDark = saved ? saved === 'dark' : true;
    setDark(nextDark);
    document.documentElement.dataset.theme = nextDark ? 'dark' : 'light';
  }, []);

  function toggleTheme() {
    const next = !dark;
    setDark(next);
    document.documentElement.dataset.theme = next ? 'dark' : 'light';
    localStorage.setItem(THEME_KEY, next ? 'dark' : 'light');
  }

  return (
    <header className="site-header">
      <Link className="site-brand" href="/" onClick={() => setOpen(false)}>
        <span className="brand-symbol">EP</span>
        <span><strong>Episódios Perdidos</strong><small>Histórias que a TV nunca contou</small></span>
      </Link>
      <button className="nav-toggle" onClick={() => setOpen(!open)} aria-label={open ? 'Fechar menu' : 'Abrir menu'} aria-expanded={open}>
        {open ? <X /> : <Menu />}
      </button>
      <nav className={open ? 'site-nav site-nav--open' : 'site-nav'} aria-label="Navegação principal">
        <Link href="/" onClick={() => setOpen(false)}>Início</Link>
        <Link href="/series" onClick={() => setOpen(false)}>Séries</Link>
        <Link href="/sobre" onClick={() => setOpen(false)}>Sobre</Link>
        <button className="theme-toggle" onClick={toggleTheme} aria-label={dark ? 'Ativar modo claro' : 'Ativar modo escuro'}>
          {dark ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </nav>
    </header>
  );
}
