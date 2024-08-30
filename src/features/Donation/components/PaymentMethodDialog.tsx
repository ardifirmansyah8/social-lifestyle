import { Check, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

import { usePayment, usePaymentMethods } from "@/hooks";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";

import type { IPaymentFee, IPaymentMethod } from "@/types";

const PaymentType: { [key: string]: string } = {
  va: "Transfer Bank (Virtual Account)",
  qris: "QRIS",
  retail: "Setor Tunai",
  ewallet: "E-Wallet",
  other: "Lainnya",
};

export default function DonationDialog({
  open,
  onClose,
  phone,
  amount,
}: {
  open: boolean;
  onClose: () => void;
  phone: string;
  amount: number;
}) {
  const { mutateAsync: getPaymentMethods } = usePaymentMethods();
  const { mutateAsync } = usePayment();

  const [selectedMethod, setSelectedMethod] = useState("");
  const [paymentMethods, setPaymentMethods] = useState<IPaymentMethod[]>([]);

  useEffect(() => {
    if (open) {
      getPaymentMethods(amount).then((resp) => {
        if (resp.data.paymentFee) {
          const parseMethods = [
            { type: "va", method: [] },
            { type: "qris", method: [] },
            { type: "ewallet", method: [] },
            { type: "retail", method: [] },
            { type: "other", method: [] },
          ] as IPaymentMethod[];
          resp.data.paymentFee.forEach((method: IPaymentFee) => {
            if (method.type === "va") {
              parseMethods[0].method = [...parseMethods[0].method, method];
            } else if (method.type === "qris") {
              parseMethods[1].method = [...parseMethods[1].method, method];
            } else if (method.type === "ewallet") {
              parseMethods[2].method = [...parseMethods[2].method, method];
            } else if (method.type === "retail") {
              parseMethods[3].method = [...parseMethods[3].method, method];
            } else if (method.type === "other") {
              parseMethods[4].method = [...parseMethods[4].method, method];
            }
          });
          setPaymentMethods(parseMethods);
        }
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  const handlePayment = async () => {
    const body = {
      paymentAmount: amount,
      paymentMethod: selectedMethod,
      productDetails: "", // ?
      customerVaName: "Hamba Allah",
      email: "payment@eziswaf.net",
      phoneNumber: phone,
      itemDetails: [
        {
          name: "", // ?
          price: amount,
          quantity: 1,
        },
      ],
      customerDetail: {
        firstName: "Hamba Allah",
        lastName: null,
        email: null,
        phoneNumber: phone,
      },
      callbackUrl: "http://lifestyle.eziswaf.net/api/v1/transactions/callback",
      expiryPeriod: 60,
    };

    mutateAsync(body).then((resp) => {
      if (resp.data) {
        window.open(resp.data.paymentUrl, "_self");
      }
    });
  };

  return (
    <Dialog open={open}>
      <DialogContent className="md:w-[600px] p-0" close={false}>
        <ScrollArea className="h-full md:h-[500px] p-7">
          <div className="flex flex-col gap-7 relative">
            <div className="flex items-center justify-between rounded-tl-sm rounded-tr-sm">
              <Label className="text-base text-red-1">Metode Pembayaran</Label>
              <X className="h-6 w-6 cursor-pointer" onClick={onClose} />
            </div>
            <div className="flex flex-col gap-2.5 mt-5">
              {paymentMethods.map((payment) => (
                <Accordion
                  key={payment.type}
                  type="single"
                  collapsible
                  className="border border-grey-5 rounded-sm p-2.5"
                >
                  <AccordionItem value={payment.type}>
                    <AccordionTrigger>
                      {PaymentType[payment.type]}
                    </AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-2.5">
                      {payment.method.map((method) => (
                        <div
                          key={method.paymentMethod}
                          className="flex items-center justify-between bg-blue-2 p-2.5 rounded-sm cursor-pointer"
                          onClick={() =>
                            setSelectedMethod(method.paymentMethod)
                          }
                        >
                          <div className="flex items-center gap-2.5">
                            <Image
                              src={method.paymentImage}
                              alt={method.paymentMethod}
                              width={50}
                              height={20}
                            />
                            <Label>{method.paymentName}</Label>
                          </div>
                          {selectedMethod === method.paymentMethod && (
                            <Check className="h-4 w-4 text-green-1 font-bold" />
                          )}
                        </div>
                      ))}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              ))}
            </div>
            <Button
              className="bg-pink-1 text-red-1 hover:bg-pink-1"
              disabled={!selectedMethod}
              onClick={() => handlePayment()}
            >
              Bayar
            </Button>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
