export const restaurant = {
  name: 'Restaurante da Birrinha',
  phone: '5563992641584',
  phoneDisplay: '(63) 99264-1584',
  address: 'Lot. Couto Magalhães, Araguaína - TO',
  postalCode: '77818-340',
  hours: '11:00 – 14:00',
  days: 'Quarta a Segunda',
  instagram: '@restaurantedabirrinha_',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Restaurante+da+Birrinha+Aragua%C3%ADna+TO',
  portfolioWhatsApp: '5563992641584',
}

export type MenuCategory = 'Marmitex & Pratos' | 'Carnes do Buffet' | 'Acompanhamentos' | 'Bebidas'
export type MenuItem = { id: string; name: string; description: string; price?: number; category: MenuCategory; image: string; options?: string[] }

// Exemplos para apresentação do layout. Substitua nomes, preços, fotos e adicionais pelo cardápio aprovado.
export const menuCategories: MenuCategory[] = ['Marmitex & Pratos', 'Carnes do Buffet', 'Acompanhamentos', 'Bebidas']
export const menuItems: MenuItem[] = [
  { id: 'marmitex', name: 'Marmitex da casa', description: 'Arroz, feijão, acompanhamentos do dia e carne à escolha.', category: 'Marmitex & Pratos', image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=85', options: ['Frango grelhado', 'Carne assada', 'Sem cebola'] },
  { id: 'prato', name: 'Prato feito', description: 'Uma refeição completa com o tempero caseiro da Birrinha.', category: 'Marmitex & Pratos', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=85', options: ['Frango grelhado', 'Carne assada', 'Sem cebola'] },
  { id: 'frango', name: 'Frango grelhado', description: 'Sugestão de carne para o buffet. Consulte a disponibilidade do dia.', category: 'Carnes do Buffet', image: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=900&q=85', options: ['Bem passado', 'Ao ponto'] },
  { id: 'carne', name: 'Carne assada', description: 'Sugestão de carne para o buffet. Consulte a disponibilidade do dia.', category: 'Carnes do Buffet', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=85', options: ['Bem passada', 'Ao ponto'] },
  { id: 'salada', name: 'Salada fresca', description: 'Seleção de saladas e acompanhamentos do buffet.', category: 'Acompanhamentos', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=85' },
  { id: 'arroz', name: 'Arroz e feijão', description: 'A dupla clássica para acompanhar seu almoço.', category: 'Acompanhamentos', image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=900&q=85' },
  { id: 'refri', name: 'Refrigerante lata', description: 'Consulte os sabores disponíveis.', category: 'Bebidas', image: 'https://images.unsplash.com/photo-1581636625402-29b2a704ef13?auto=format&fit=crop&w=900&q=85' },
  { id: 'suco', name: 'Suco', description: 'Consulte os sabores disponíveis.', category: 'Bebidas', image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=900&q=85' },
]

export const reviews = [
  'Muito boa a comida, muita variedade de saladas e carnes!',
  'Ótimo custo benefício e ambiente agradável. Recomendo a todos.',
  'Melhor buffet de Araguaína. Comida sempre fresca e saborosa.',
]
