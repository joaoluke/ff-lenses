import { Menu, Search, ShoppingCart, User } from 'lucide-react'

import { useLayout } from '@/hooks/useLayoutContext'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function Header() {
  const { mobileMenuOpen, categories, setMobileMenuOpen } = useLayout()

  return (
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
  )
}
