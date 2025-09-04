import { profile } from '../data/profile';

export default function Header() {
  return (
    <header className="border-b border-gray-200 bg-white sticky top-0 z-40">
      <div className="container mx-auto flex items-center justify-between py-4">
        <div>
          <h1 className="text-lg sm:text-xl font-semibold text-gray-900">{profile.name}</h1>
          <p className="text-sm text-gray-600">{profile.title} · {profile.location}</p>
        </div>
        <nav className="flex items-center gap-3 text-sm">
          {profile.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="text-gray-600 hover:text-brand"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}



