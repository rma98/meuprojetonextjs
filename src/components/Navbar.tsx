'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Navbar() {
    const pathname = usePathname();
    const hideNavbarRoutes = ['/about', '/html5semantictailwind'];

    if (hideNavbarRoutes.includes(pathname)) {
        return null;
    }

    return (
        <nav className="bg-white shadow-md p-4 flex justify-center gap-6">
            <Link href="/" className="text-blue-600 hover:underline">
                Início
            </Link>
            <Link href="/about" className="text-green-600 hover:underline">
                Sobre
            </Link>
            <Link href="/certificates" className="text-yellow-600 hover:underline">
                Meus Certificados
            </Link>
            <Link href="/contact" className="text-red-600 hover:underline">
                Contato
            </Link>
        </nav>
    );
}
