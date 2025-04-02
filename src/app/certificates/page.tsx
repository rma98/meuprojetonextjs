import React from "react";

const certificates = [
    { year: 2025, files: ["Certificado1.pdf", "Certificado2.pdf"] },
    { year: 2024, files: ["CertificadoA.pdf", "CertificadoB.pdf"] },
    { year: 2023, files: ["CertificadoX.pdf", "CertificadoY.pdf"] },
];

export default function CertificatesPage() {
    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <h1 className="text-3xl font-bold text-center mb-6">Certificados</h1>
            <div className="max-w-4xl mx-auto grid gap-6">
                {certificates.map((yearData) => (
                    <div key={yearData.year} className="bg-white p-4 rounded-lg shadow">
                        <h2 className="text-xl font-semibold mb-2">{yearData.year}</h2>
                        <ul className="list-disc pl-6">
                            {yearData.files.map((file, index) => (
                                <li key={index} className="flex justify-between items-center">
                                    <span>{file}</span>
                                    <div>
                                        <button className="text-blue-500 hover:underline mr-4">Visualizar</button>
                                        <button className="text-green-500 hover:underline">Baixar</button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}
