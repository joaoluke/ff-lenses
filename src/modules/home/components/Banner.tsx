import { Button } from '@/components/ui/button'

export default function Banner() {
  return (
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
  )
}
