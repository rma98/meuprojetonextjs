export default function PortalRobson() {
    return (
        <div className="min-h-screen bg-gray-100 text-gray-800 font-sans">
            {/* Header */}
            <header className="bg-blue-900 text-white p-6 shadow-md">
                <h1 className="text-3xl font-bold text-center">Portal Robson</h1>
            </header>

            {/* Navbar */}
            <nav className="bg-blue-700 text-white p-4 flex justify-center gap-8 text-sm font-medium">
                <a href="#noticias" className="hover:underline">Notícias</a>
                <a href="#eventos" className="hover:underline">Eventos</a>
                <a href="#sobre" className="hover:underline">Sobre</a>
            </nav>

            {/* Main content area */}
            <main className="max-w-7xl mx-auto p-6 grid grid-cols-1 md:grid-cols-4 gap-6">
                {/* Main articles (col-span-3) */}
                <section className="md:col-span-3">
                    <section id="noticias" className="mb-12">
                        <h2 className="text-2xl font-semibold mb-4 text-blue-800">Notícias</h2>

                        <article className="bg-white rounded-xl p-6 shadow hover:shadow-lg mb-6">
                            <header className="mb-2">
                                <h3 className="text-xl font-bold text-blue-600">Crise dos Chips</h3>
                            </header>
                            <p className="text-gray-700">A indústria enfrenta escassez global de semicondutores...</p>
                        </article>

                        <article className="bg-white rounded-xl p-6 shadow hover:shadow-lg">
                            <header className="mb-2">
                                <h3 className="text-xl font-bold text-blue-600">Lançamento do Novo Framework</h3>
                            </header>
                            <p className="text-gray-700">O Vue 4 promete revolucionar o desenvolvimento de interfaces...</p>
                        </article>
                    </section>

                    <section id="eventos">
                        <h2 className="text-2xl font-semibold mb-4 text-blue-800">Eventos</h2>

                        <article className="bg-white rounded-xl p-6 shadow hover:shadow-lg">
                            <header className="mb-2">
                                <h3 className="text-xl font-bold text-blue-600">JS Conf Brasil</h3>
                            </header>
                            <p className="text-gray-700">Maior evento de JavaScript do país com workshops incríveis!</p>
                        </article>
                    </section>
                </section>

                {/* Sidebar (aside) */}
                <aside className="bg-blue-50 rounded-xl p-6 shadow-md">
                    <h4 className="text-lg font-semibold text-blue-700 mb-4">Menu Rápido</h4>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#noticias" className="text-blue-600 hover:underline">Notícias</a></li>
                        <li><a href="#eventos" className="text-blue-600 hover:underline">Eventos</a></li>
                        <li><a href="#sobre" className="text-blue-600 hover:underline">Sobre</a></li>
                    </ul>
                </aside>
            </main>

            {/* Footer */}
            <footer className="bg-blue-900 text-white text-center p-4 mt-12">
                <p>&copy; 2025 Robson Corp. Todos os direitos reservados.</p>
            </footer>
        </div>
    );
}
