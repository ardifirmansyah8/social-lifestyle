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

export interface IPaymentFee {
  paymentImage: string;
  paymentMethod: string;
  paymentName: string;
  totalFee: string;
  type: "va" | "qris" | "retail" | "ewallet" | "other";
}

export interface IPaymentMethod {
  type: string;
  method: IPaymentFee[];
}

export interface IDonationPayload {
  paymentAmount: number;
  paymentMethod: string;
  productDetails: string;
  customerVaName: string;
  email: string;
  phoneNumber: string;
  itemDetails: {
    name: string;
    price: number;
    quantity: number;
  }[];
  customerDetail: {
    firstName: string;
    lastName: string | null;
    email: string | null;
    phoneNumber: string;
  };
  callbackUrl: string;
  expiryPeriod: number;
}
