export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white p-6">
      <h1 className="text-4xl font-bold text-blue-600">Bem-vindo ao Meu App Next.js!</h1>
      <p className="mt-4 text-lg text-gray-700 text-center">
        Esta é a sua primeira página usando Next.js com Tailwind CSS. 🚀
      </p>
      <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition">
        Clique aqui
      </button>
    </main>
  );
}
