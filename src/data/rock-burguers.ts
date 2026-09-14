export const CONTATO = {
  nome: "Rock Burguer's",
  slogan: "Tradição desde 2009",
  ruaNumero: "Rua Nicolau Werner, 366",
  bairro: "Garcia / Valparaíso",
  cidadeEstado: "Blumenau/SC",
  cep: "89023-440",
  telefone: "(47) 3326-1270",
  telefoneHref: "tel:+554733261270",
  whatsapp: "(47) 99699-6721",
  whatsappLink: "https://wa.me/5547996996721",
  instagramLabel: "@rockburguersbnu",
  instagram: "https://www.instagram.com/rockburguersbnu/",
  horario: "Terça a sábado, das 18h às 23h",
  googleNota: "4,9",
  googleAvaliacoes: "mais de 770 avaliações",
  mapsEmbed:
    "https://www.google.com/maps?q=Rua+Nicolau+Werner,+366,+Valpara%C3%ADso,+Blumenau+-+SC,+89023-440&output=embed",
  mapsLink:
    "https://www.google.com/maps/search/?api=1&query=Rua+Nicolau+Werner,+366,+Valpara%C3%ADso,+Blumenau+-+SC,+89023-440",
} as const;

export type MenuItem = {
  nome: string;
  preco?: string;
  meia?: string;
};

export type MenuTab = {
  id: string;
  label: string;
  observacao: string;
  inteiraMeia?: boolean;
  itens: MenuItem[];
};

export const MENU: MenuTab[] = [
  {
    id: "lanches",
    label: "Lanches",
    observacao: "Lanches preparados na chapa.",
    itens: [
      { nome: "X-Rock Misto", preco: "29,00" },
      { nome: "X-Costela da Casa", preco: "26,00" },
      { nome: "Americano Galinha", preco: "43,00" },
      { nome: "X-Linguiça Blumenau", preco: "34,00" },
      { nome: "X-Costela", preco: "34,00" },
      { nome: "X-Gourmet", preco: "45,00" },
      { nome: "X-Frango Mostarda e Mel", preco: "34,00" },
      { nome: "X-Salada", preco: "28,00" },
      { nome: "X-Burguer", preco: "25,00" },
      { nome: "X-Bacon", preco: "36,00" },
      { nome: "X-Galinha", preco: "33,00" },
      { nome: "X-Calabresa", preco: "31,00" },
      { nome: "X-Egg", preco: "31,00" },
      { nome: "X-Dog", preco: "31,00" },
      { nome: "X-Coração", preco: "40,00" },
      { nome: "X-Alcatra", preco: "44,00" },
      { nome: "X-Hamburguer", preco: "23,00" },
      { nome: "Misto Quente", preco: "23,00" },
      { nome: "Queijo Quente", preco: "24,00" },
      { nome: "Baurú", preco: "24,00" },
      { nome: "Pão Pizza", preco: "20,00" },
      { nome: "Alcatra Acebolada", preco: "45,00" },
      { nome: "Frango com Salada", preco: "32,00" },
      { nome: "Prato de Salada", preco: "24,00" },
      { nome: "Combo Kids", preco: "35,00" },
    ],
  },
  {
    id: "torradas",
    label: "Torradas",
    observacao: "Valores para torrada inteira e meia torrada.",
    inteiraMeia: true,
    itens: [
      { nome: "Torrada Americana", preco: "38,00", meia: "28,00" },
      { nome: "Torrada Portuguesa", preco: "40,00", meia: "30,00" },
      { nome: "Torrada de Calabresa", preco: "33,00", meia: "25,00" },
      { nome: "Torrada Baurú", preco: "38,00", meia: "28,00" },
      { nome: "Torrada Especial de Frango", preco: "33,00", meia: "25,00" },
      { nome: "Torrada Strogonoff de Frango", preco: "40,00", meia: "30,00" },
      { nome: "Torrada Strogonoff de Carne", preco: "37,00", meia: "27,00" },
      { nome: "Torrada Especial de Carne", preco: "44,00", meia: "33,00" },
      { nome: "Torrada de Alcatra Acebolada", preco: "52,00", meia: "40,00" },
      { nome: "Torrada de Frango com Mostarda e Mel", preco: "44,00", meia: "33,00" },
    ],
  },
  {
    id: "petiscos",
    label: "Petiscos",
    observacao: "Valores para porção inteira e meia porção quando indicado.",
    inteiraMeia: true,
    itens: [
      { nome: "Petisco de Alcatra", preco: "207,00", meia: "144,00" },
      { nome: "Petisco Alcatra e Frango", preco: "182,00", meia: "129,00" },
      { nome: "Petisco Filé de Frango", preco: "132,00", meia: "99,00" },
      { nome: "Frango à Passarinho com Fritas", preco: "97,00", meia: "67,00" },
      { nome: "Fritas", preco: "48,00", meia: "34,00" },
      { nome: "Polenta", preco: "62,00", meia: "44,00" },
      { nome: "Fritas com Bacon e Cheddar", preco: "77,00", meia: "58,00" },
      { nome: "Filé de Tilápia à Milanesa", preco: "62,00" },
      { nome: "Combo Filé de Tilápia", preco: "92,00" },
    ],
  },
  {
    id: "rapidinhas",
    label: "Rapidinhas",
    observacao: "Opções com acompanhamento de fritas.",
    itens: [
      { nome: "Peito de Frango e Fritas", preco: "42,00" },
      { nome: "Calabresa e Fritas", preco: "44,00" },
      { nome: "Coração e Fritas", preco: "54,00" },
      { nome: "Alcatra e Fritas", preco: "56,00" },
    ],
  },
  {
    id: "drinks",
    label: "Bebidas",
    observacao: "Consulte os valores com a equipe.",
    itens: [
      { nome: "Batida de Coco" },
      { nome: "Batida de Sorvete" },
      { nome: "Caipirinha de Vinho" },
      { nome: "Coquetel Delícia" },
      { nome: "Milk Shake" },
      { nome: "Cafézinho da Manhã" },
    ],
  },
];

export const NAV_LINKS = [
  { href: "#casa", label: "A casa" },
  { href: "#cardapio", label: "Cardápio" },
  { href: "#fotos", label: "Fotos reais" },
  { href: "#visite", label: "Como chegar" },
] as const;
