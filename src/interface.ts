export interface Action {
  text: string;
  year?: number | undefined;
  type?: string;
}

export interface InitialStateWiki {
  value: Action[];
  loading: boolean;
  error: string | null;
}
