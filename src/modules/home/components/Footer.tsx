export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white pt-10 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">FF Lentes</h3>
            <p className="text-gray-400 text-sm">
              Sua loja especializada em lentes de contato de alta qualidade para
              todos os tipos de necessidades.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Institucional</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="#" className="hover:text-white">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Trabalhe Conosco
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Termos de Uso
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Ajuda</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="#" className="hover:text-white">
                  Como Comprar
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Entrega
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Pagamento
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Contato</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>contato@fflentes.com.br</li>
              <li>(11) 99999-9999</li>
              <li>Segunda a Sexta: 9h às 18h</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
          <p>© 2025 FF Lentes. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
