import { Input, Textarea } from "@heroui/react";
import { FaBoxArchive } from "react-icons/fa6";
import { useFormContext } from "react-hook-form";
import type { CreateShipmentFormData } from "../../model/types";

export default function CreateShipmentStep3() {
  const {
    register,
    formState: { errors },
  } = useFormContext<CreateShipmentFormData>();

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="bg-accent/15 text-accent flex size-9 items-center justify-center rounded-lg">
          <FaBoxArchive className="text-xl" />
        </div>

        <h3 className="text-xl font-bold">Cargo Information</h3>
      </div>

      <Textarea
        placeholder="e.g. 50x Blue Cotton T-shirts, individual playbags, fragile handling required"
        variant="bordered"
        label="Cargo Description"
        labelPlacement="outside-top"
        classNames={{ input: "pt-2" }}
        isInvalid={!!errors.cargo?.description}
        errorMessage={errors.cargo?.description?.message}
        {...register("cargo.description")}
      />

      <div className="grid grid-cols-2 gap-4">
        <Input
          placeholder="0.0"
          variant="bordered"
          label="Weight"
          labelPlacement="outside-top"
          type="number"
          step="0.1"
          isInvalid={!!errors.cargo?.weight}
          errorMessage={errors.cargo?.weight?.message}
          {...register("cargo.weight", { valueAsNumber: true })}
        />

        <Input
          placeholder="30x20x15 cm"
          variant="bordered"
          label="Dimensions"
          labelPlacement="outside-top"
          isInvalid={!!errors.cargo?.dimensions}
          errorMessage={errors.cargo?.dimensions?.message}
          {...register("cargo.dimensions")}
        />
      </div>
    </div>
  );
}
