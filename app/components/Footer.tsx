// app/components/Footer.tsx
'use client';

const Footer = () => {
  return (
    <footer className="w-full bg-gray-50 py-6 text-gray-600">
      <div className="max-w-[1400px] mx-auto px-4">
        {/* Disclaimer Médico */}
        <p className="text-[8px] sm:text-[10px] md:text-[13px] lg:text-[15px] leading-relaxed max-w-4xl mx-auto text-center text-gray-500">
          Este produto não se destina a diagnosticar, tratar, curar ou prevenir qualquer doença, os resultados podem variar de pessoa para pessoa, esses 
          depoimentos podem ser fictícios, esta informação não constitui aconselhamento médico e não deve ser considerada como tal, consulte o seu médico antes 
          de modificar o seu regime médico regular. Este é um advertorial e não um artigo de notícia ou blog. Produto dispensado da obrigatoriedade de registro 
          conforme RDC 240/2018.
        </p>

        {/* Informações de Contato */}
        <div className="text-center text-[8px] sm:text-[10px] md:text-[13px] lg:text-[15px] mb-4">
          <p>Luvard - CNPJ 27.472.997/0101-39 | Email: contato@luvard.com</p>
        </div>

        {/* Métodos de Pagamento */}
        <div className="flex flex-col items-center gap-2 mb-4">
          <p className="text-[8px] sm:text-[10px] md:text-[13px] lg:text-[15px]">Pague com:</p>
          <div className="flex justify-center">
            <img 
              src="/formas_pagamento.png" 
              alt="Métodos de Pagamento" 
              className="h-[20px] sm:h-[22px] md:h-[25px] object-contain"
            />
          </div>
        </div>

        {/* Links e Copyright */}
        <div className="text-center text-[8px] sm:text-[10px] md:text-[13px] lg:text-[15px]">
          <p>
            © {new Date().getFullYear()} Luvard - Todos os Direitos Reservados. 
            <a href="/privacidade" className="text-gray-600 hover:text-gray-800 ml-2">Política de Privacidade</a> | 
            <a href="/termos" className="text-gray-600 hover:text-gray-800 ml-2">Termos de Uso</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;