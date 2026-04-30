export const PAGE_URLS = {
  API_DOCS: "/swagger.html",
  DOCS: "/docs.html",
  HOME: "",
  LOGIN: "/login.html",
  PROFILE: "/profile.html",
  REGISTER: "/register.html",
} as const;
//typ PageUrl moze byc jedna z wartosci obieku PAGE_URLS, jest teraz unią stringów reprezentujących wszystkie wartości w PAGE_URLS, co pozwala na bezpieczne używanie tych wartości w kodzie
export type PageUrl = (typeof PAGE_URLS)[keyof typeof PAGE_URLS];
