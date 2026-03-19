import { Button, Card } from "@heroui/react";
import { useNavigate, useSearch } from "@tanstack/react-router";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";
import { FormProvider, useForm, type FieldPath } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import CreateShipmentHeader from "./create-shipment-header";
import CreateShipmentStep1 from "./forms/create-shipment-step-1";
import CreateShipmentStep2 from "./forms/create-shipment-step-2";
import CreateShipmentStep3 from "./forms/create-shipment-step-3";
import CreateShipmentDelivery from "./forms/create-shipment-delivery";
import {
  createShipmentSchema,
  type CreateShipmentFormData,
} from "../model/types";
import { useCreateShipment } from "../model/use-create-shipment";

const stepFields: FieldPath<CreateShipmentFormData>[][] = [
  ["sender.name", "sender.address", "sender.phone"],
  ["recipient.name", "recipient.address", "recipient.phone"],
  ["cargo.description", "cargo.weight", "cargo.dimensions", "deliveryOption"],
];

export default function CreateShipmentPage() {
  const { step = 1 } = useSearch({ from: "/_auth/shipments/new" });
  const navigate = useNavigate();
  const { mutate, isPending } = useCreateShipment();

  const methods = useForm<CreateShipmentFormData>({
    resolver: zodResolver(createShipmentSchema),
    defaultValues: {
      sender: { name: "", address: "", phone: "" },
      recipient: { name: "", address: "", phone: "" },
      cargo: { description: "", dimensions: "" },
      deliveryOption: "standard",
    },
    mode: "all",
  });

  const onSubmit = (data: CreateShipmentFormData) => {
    console.log(data);
    mutate(data);
  };

  const handleNext = async () => {
    const isValid = await methods.trigger(stepFields[step - 1]);
    if (isValid) {
      navigate({ to: "/shipments/new", search: { step: step + 1 } });
    }
  };

  const stepForms = [
    <CreateShipmentStep1 key="step-1" />,
    <CreateShipmentStep2 key="step-2" />,
    <CreateShipmentStep3 key="step-3" />,
  ];

  return (
    <FormProvider {...methods}>
      <div className="mx-auto w-full max-w-5xl space-y-8 px-4 py-8">
        <CreateShipmentHeader />

        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className="space-y-8"
          noValidate
        >
          <Card className="w-full p-8">{stepForms[Number(step) - 1]}</Card>

          {step === 3 && <CreateShipmentDelivery />}

          <div className="flex items-center justify-between">
            <Button
              variant="solid"
              disabled={step === 1}
              className="disabled:text-muted gap-3 border bg-white font-medium"
              onPress={() =>
                step > 1
                  ? navigate({
                      to: "/shipments/new",
                      search: { step: step - 1 },
                    })
                  : null
              }
            >
              <IoMdArrowBack className="text-base" />
              Back
            </Button>
            {step < 3 ? (
              <Button
                variant="solid"
                className="bg-accent shadow-accent font-medium text-white"
                onPress={handleNext}
              >
                Continue
                <IoMdArrowForward className="text-base" />
              </Button>
            ) : (
              <Button
                type="submit"
                variant="solid"
                className="bg-accent shadow-accent font-medium text-white"
                isLoading={isPending}
              >
                Submit
                <IoMdArrowForward className="text-base" />
              </Button>
            )}
          </div>
        </form>
      </div>
    </FormProvider>
  );
}
