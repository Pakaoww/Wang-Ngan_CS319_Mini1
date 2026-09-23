import type { ReactNode } from 'react'

type Page = 'home' | 'jobs' | 'training' | 'events' | 'certification' | 'news' | 'account' | 'admin'

type LayoutProps = { currentPage: Page; onNavigate: (page: Page) => void; onLogin: () => void; children: ReactNode; loggedIn: boolean }

const links: { page: Page; label: string }[] = [
  { page: 'home', label: 'Home' }, { page: 'jobs', label: 'Jobs' }, { page: 'training', label: 'Training' },
  { page: 'events', label: 'Events' }, { page: 'certification', label: 'Certification' }, { page: 'news', label: 'News' },
]

export default function Layout({ currentPage, onNavigate, onLogin, children, loggedIn }: LayoutProps) {
  return <div className="site"><header className="header"><button className="logo" onClick={() => onNavigate('home')}>Nexora</button><nav>{links.map((link) => <button className={currentPage === link.page ? 'active' : ''} onClick={() => onNavigate(link.page)} key={link.page}>{link.label}</button>)}</nav><div className="header-actions"><button onClick={() => onNavigate('account')}>My Account</button><button className="button small" onClick={onLogin}>{loggedIn ? 'Signed in' : 'Login'}</button><button className="menu-toggle" aria-label="Open menu">☰</button></div></header><main>{children}</main><footer><div><strong>Nexora</strong><p>AI and Digital Career & Learning Platform</p></div><div><strong>Explore</strong><button onClick={() => onNavigate('jobs')}>Jobs</button><button onClick={() => onNavigate('training')}>Training</button></div><div><strong>Support</strong><button onClick={() => onNavigate('events')}>Events</button><button onClick={() => onNavigate('news')}>News & Articles</button></div></footer></div>
}
