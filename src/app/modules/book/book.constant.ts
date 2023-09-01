export const bookFilterableFields: string[] = [
  'minPrice',
  'maxPrice',
  'search',
  'category',
];
export type FilterableFieldType = {
  minPrice?: string;
  maxPrice?: string;
  search?: string;
  category?: string;
};
export const bookOptionsFields: string[] = [
  'limit',
  'size',
  'page',
  'sortBy',
  'sortOrder',
];

export const bookSearchableFields: string[] = ['title', 'author', 'genre'];
