import { useLayout } from '@/hooks/useLayoutContext'

export default function MenuMobile() {
  const { mobileMenuOpen, categories } = useLayout()

  if (!mobileMenuOpen) return

  return (
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
  )
}
