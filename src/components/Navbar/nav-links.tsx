'use client'
import { links } from '@/lib/nav-links';
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

export default function NavLinks() {
  const pathname = usePathname()

  return links.map((link, index) => (
    <li key={index}>
      <Link
        href={link.href}
        className={clsx(
          'px-4 py-2 rounded transition-colors duration-300',
          {
            'text-lime-600 font-bold bg-lime-300': pathname === link.href,
            'text-blue-950 font-bold hover:text-lime-600': pathname !== link.href,
          }
        )}
      >
        {link.label}
      </Link>
    </li>
  ))
}
