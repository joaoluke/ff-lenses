import ProductCarousel from '@/modules/home/components/ProductCarousel'

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

export default function Content() {
  return (
    <main className="container mx-auto px-4 py-8">
      <ProductCarousel title="Ofertas Especiais" products={promotionProducts} />

      <ProductCarousel title="Mais Vendidos" products={bestSellerProducts} />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        <div className="bg-gray-100 p-6 rounded-lg text-center">
          <h3 className="font-bold text-lg mb-2">Frete Grátis</h3>
          <p className="text-gray-600 text-sm">Para compras acima de R$ 150</p>
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
  )
}
