import React, { useState } from 'react'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import {
  Search,
  ShoppingCart,
  Menu,
  ChevronLeft,
  ChevronRight,
  Heart,
  User,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'

// Dados simulados de produtos
const promotionProducts = [
  {
    id: 1,
    name: 'Lente de Contato Natural Colors',
    price: 89.9,
    discount: 20,
    image: '/api/placeholder/300/300',
    rating: 4.5,
  },
  {
    id: 2,
    name: 'Lente de Contato Hidrocolor Mensal',
    price: 115.9,
    discount: 30,
    image: '/api/placeholder/300/300',
    rating: 4.7,
  },
  {
    id: 3,
    name: 'Lente de Contato Colorida Anual',
    price: 159.9,
    discount: 15,
    image: '/api/placeholder/300/300',
    rating: 4.2,
  },
  {
    id: 4,
    name: 'Lente de Contato Multifocal',
    price: 199.9,
    discount: 25,
    image: '/api/placeholder/300/300',
    rating: 4.8,
  },
  {
    id: 5,
    name: 'Lente de Contato para Astigmatismo',
    price: 129.9,
    discount: 10,
    image: '/api/placeholder/300/300',
    rating: 4.6,
  },
]

const bestSellerProducts = [
  {
    id: 6,
    name: 'Lente de Contato SofLens Diária',
    price: 79.9,
    discount: 0,
    image: '/api/placeholder/300/300',
    rating: 4.9,
  },
  {
    id: 7,
    name: 'Lente de Contato Acuvue Oasys',
    price: 125.9,
    discount: 0,
    image: '/api/placeholder/300/300',
    rating: 5.0,
  },
  {
    id: 8,
    name: 'Lente de Contato Biofinity',
    price: 139.9,
    discount: 0,
    image: '/api/placeholder/300/300',
    rating: 4.8,
  },
  {
    id: 9,
    name: 'Lente de Contato Air Optix',
    price: 119.9,
    discount: 0,
    image: '/api/placeholder/300/300',
    rating: 4.7,
  },
  {
    id: 10,
    name: 'Lente de Contato Dailies Total 1',
    price: 99.9,
    discount: 0,
    image: '/api/placeholder/300/300',
    rating: 4.6,
  },
]

// Componente de Produto
const ProductCard = ({ product }) => {
  return (
    <Card className="w-64 h-full flex flex-col mx-2 my-2 shadow-md hover:shadow-lg transition-shadow">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover rounded-t-lg"
        />
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 bg-white rounded-full"
        >
          <Heart className="h-5 w-5 text-gray-500 hover:text-red-500" />
        </Button>
        {product.discount > 0 && (
          <Badge className="absolute top-2 left-2 bg-red-500">
            -{product.discount}%
          </Badge>
        )}
      </div>
      <CardContent className="flex-grow p-4">
        <div className="flex items-center mb-2">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
          ))}
          <span className="ml-1 text-xs text-gray-500">{product.rating}</span>
        </div>
        <h3 className="font-medium text-sm mb-1 line-clamp-2">
          {product.name}
        </h3>
        <div className="flex items-baseline mt-2">
          {product.discount > 0 ? (
            <>
              <span className="text-lg font-bold text-blue-600">
                R${' '}
                {((product.price * (100 - product.discount)) / 100).toFixed(2)}
              </span>
              <span className="ml-2 text-sm text-gray-500 line-through">
                R$ {product.price.toFixed(2)}
              </span>
            </>
          ) : (
            <span className="text-lg font-bold text-blue-600">
              R$ {product.price.toFixed(2)}
            </span>
          )}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full bg-blue-600 hover:bg-blue-700">
          <ShoppingCart className="mr-2 h-4 w-4" /> Adicionar
        </Button>
      </CardFooter>
    </Card>
  )
}

// Componente Carrossel
const ProductCarousel = ({ title, products }) => {
  const [scrollPosition, setScrollPosition] = useState(0)
  const carouselRef = React.useRef(null)

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -280, behavior: 'smooth' })
      setScrollPosition(Math.max(0, scrollPosition - 1))
    }
  }

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 280, behavior: 'smooth' })
      setScrollPosition(scrollPosition + 1)
    }
  }

  return (
    <div className="mb-10">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-gray-800">{title}</h2>
        <div className="flex space-x-2">
          <Button
            variant="outline"
            size="icon"
            onClick={scrollLeft}
            disabled={scrollPosition === 0}
            className="border border-gray-300"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={scrollRight}
            className="border border-gray-300"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </div>
      <div
        ref={carouselRef}
        className="flex overflow-x-auto scrollbar-hide pb-4 -mx-2 scroll-smooth"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {products.map((product) => (
          <div key={product.id} className="flex-shrink-0">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  )
}

// Página principal
const FFLentesHome = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const categories = [
    'Lentes Coloridas',
    'Lentes para Miopia',
    'Lentes para Hipermetropia',
    'Lentes para Astigmatismo',
    'Lentes Multifocais',
    'Soluções de Limpeza',
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo e Menu Mobile */}
            <div className="flex items-center">
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden mr-2"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <Menu className="h-6 w-6" />
              </Button>
              <div className="font-bold text-2xl text-blue-600">FF Lentes</div>
            </div>

            {/* Campo de Busca */}
            <div className="hidden md:flex flex-1 max-w-md mx-4">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Buscar lentes..."
                  className="pl-10 pr-4 py-2 w-full border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Ícones */}
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon">
                <User className="h-6 w-6" />
              </Button>
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-6 w-6" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  3
                </span>
              </Button>
            </div>
          </div>

          {/* Campo de Busca Mobile */}
          <div className="mt-4 md:hidden">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="Buscar lentes..."
                className="pl-10 pr-4 py-2 w-full border-gray-300"
              />
            </div>
          </div>

          {/* Menu de Categorias Desktop */}
          <nav className="hidden md:flex mt-4 space-x-6 overflow-x-auto pb-2">
            {categories.map((category, index) => (
              <a
                key={index}
                href="#"
                className="text-gray-600 hover:text-blue-600 whitespace-nowrap"
              >
                {category}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* Menu Mobile */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute z-20 w-full">
          <nav className="container mx-auto px-4 py-3">
            {categories.map((category, index) => (
              <a
                key={index}
                href="#"
                className="block py-2 border-b border-gray-100 text-gray-600"
              >
                {category}
              </a>
            ))}
          </nav>
        </div>
      )}

      {/* Banner Principal */}
      <div className="bg-blue-600 text-white py-6 md:py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-2xl md:text-4xl font-bold mb-2 md:mb-4">
            Lentes de Contato de Alta Qualidade
          </h1>
          <p className="text-sm md:text-lg mb-4 md:mb-6">
            Conforto, praticidade e estilo para o seu dia a dia
          </p>
          <Button className="bg-white text-blue-600 hover:bg-gray-100">
            Ver Coleção
          </Button>
        </div>
      </div>

      {/* Conteúdo Principal */}
      <main className="container mx-auto px-4 py-8">
        {/* Seção de Promoções */}
        <ProductCarousel
          title="Ofertas Especiais"
          products={promotionProducts}
        />

        {/* Seção de Mais Vendidos */}
        <ProductCarousel title="Mais Vendidos" products={bestSellerProducts} />

        {/* Banners Informativos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          <div className="bg-gray-100 p-6 rounded-lg text-center">
            <h3 className="font-bold text-lg mb-2">Frete Grátis</h3>
            <p className="text-gray-600 text-sm">
              Para compras acima de R$ 150
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg text-center">
            <h3 className="font-bold text-lg mb-2">Parcelamento</h3>
            <p className="text-gray-600 text-sm">Em até 12x sem juros</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg text-center">
            <h3 className="font-bold text-lg mb-2">Troca Garantida</h3>
            <p className="text-gray-600 text-sm">Caso não fique satisfeito</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white pt-10 pb-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">FF Lentes</h3>
              <p className="text-gray-400 text-sm">
                Sua loja especializada em lentes de contato de alta qualidade
                para todos os tipos de necessidades.
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
    </div>
  )
}

export default FFLentesHome
