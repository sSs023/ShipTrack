import { TextField, Label, Input, FieldError, TextArea } from "@heroui/react";
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
        <div className="bg-accent-soft text-accent flex size-9 items-center justify-center rounded-lg">
          <FaBoxArchive className="text-xl" />
        </div>

        <h3 className="text-xl font-bold">Cargo Information</h3>
      </div>

      <TextField isInvalid={!!errors.cargo?.description}>
        <Label>Cargo Description</Label>
        <TextArea
          placeholder="e.g. 50x Blue Cotton T-shirts, individual playbags, fragile handling required"
          className="pt-2"
          {...register("cargo.description")}
        />
        <FieldError>{errors.cargo?.description?.message}</FieldError>
      </TextField>

      <div className="grid grid-cols-2 gap-4">
        <TextField isInvalid={!!errors.cargo?.weight}>
          <Label>Weight</Label>
          <Input
            placeholder="0.0"
            type="number"
            step="0.1"
            {...register("cargo.weight", { valueAsNumber: true })}
          />
          <FieldError>{errors.cargo?.weight?.message}</FieldError>
        </TextField>

        <TextField isInvalid={!!errors.cargo?.dimensions}>
          <Label>Dimensions</Label>
          <Input placeholder="30x20x15 cm" {...register("cargo.dimensions")} />
          <FieldError>{errors.cargo?.dimensions?.message}</FieldError>
        </TextField>
      </div>
    </div>
  );
}
