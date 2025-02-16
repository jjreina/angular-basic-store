export interface ProductResponse {
  categoryCode: string;
  results: Product[];
}

export interface Product {
  name: string;
  price: Price;
  images: Image[];
}

interface Price {
  formattedValue: string;
}

interface Image {
  baseUrl: string;
  url: string;
}
