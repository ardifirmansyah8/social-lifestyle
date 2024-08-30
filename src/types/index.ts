export interface IProgram {
  id: number;
  media1Url: string;
  category: {
    name: string;
    title: string;
  };
}

export interface IInfo {
  id: number;
  imageUrl: string;
  title: string;
  categoryName: string;
}

export interface ILandingPage {
  contents: IProgram[] | IInfo[];
}

export interface ILandingPageResponse {
  data: ILandingPage[];
}
