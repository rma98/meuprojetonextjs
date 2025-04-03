export default function AboutLayout({ children }: { children: React.ReactNode }) {
    return (
        <section className="bg-green-50 p-10 min-h-screen">
            <h1 className="text-3xl font-bold text-green-700">Página Sobre</h1>
            {children}
        </section>
    );
}
