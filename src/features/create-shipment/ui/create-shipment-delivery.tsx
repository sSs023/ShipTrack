import { deliveryOptions } from "@/entities/shipment";
import { Card, cn, Radio, RadioGroup } from "@heroui/react";
import { Controller, useFormContext } from "react-hook-form";
import { IoMdSpeedometer } from "react-icons/io";
import type { CreateShipmentFormData } from "../model/types";

export default function CreateShipmentDelivery() {
  const { control, watch } = useFormContext<CreateShipmentFormData>();
  const delivery = watch("deliveryOption");

  return (
    <div className="mt-6 w-full space-y-6">
      <div className="flex items-center gap-3">
        <IoMdSpeedometer className="text-accent text-xl" />
        <h3 className="text-xl font-bold">Delivery Options</h3>
      </div>
      <Controller
        name="deliveryOption"
        control={control}
        render={({ field }) => (
          <RadioGroup
            classNames={{
              wrapper: "grid w-full grid-cols-3 flex-nowrap gap-4",
            }}
            value={field.value}
            onChange={(e) => field.onChange(e.target.value)}
          >
            {deliveryOptions.map((option) => (
              <label htmlFor={option.plan} key={option.plan}>
                <Card
                  className={cn(
                    "w-full p-6",
                    option.plan === delivery && "shadow-none",
                  )}
                >
                  <div className="flex items-center justify-between">
                    <option.Icon className="text-muted text-xl" />
                    <Radio
                      value={option.plan}
                      id={option.plan}
                      classNames={{
                        wrapper:
                          "group-data-[focus-visible=true]:ring-0 group-data-[focus-visible=true]:ring-transparent group-data-[focus-visible=true]:ring-offset-0",
                      }}
                    />
                  </div>
                  <h4 className="mt-5 text-base font-bold">{option.label}</h4>
                  <p className="text-muted text-xs">{option.description}</p>
                  <div className="mt-4 text-sm font-medium">
                    {option.duration}
                  </div>
                  <div className="text-accent text-xl font-bold">
                    ${option.price.toFixed(2)}
                  </div>
                </Card>
              </label>
            ))}
          </RadioGroup>
        )}
      />
    </div>
  );
}
