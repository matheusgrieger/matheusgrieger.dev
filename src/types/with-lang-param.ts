export type WithLangParam<TProps extends object = {}, TParams extends object = {}> = TProps & {
  params: TParams & { lang: 'pt-BR' | 'en' };
};
