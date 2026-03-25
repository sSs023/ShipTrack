import { cn, TextField, Label, Input, FieldError } from "@heroui/react";
import { HiUser } from "react-icons/hi2";
import { Controller, useFormContext, useFormState } from "react-hook-form";
import { PhoneInput } from "react-international-phone";
import type { CreateShipmentFormData } from "../../model/types";
import styles from "./phone-input.module.css";

export default function CreateShipmentStep1() {
  const { register, control } = useFormContext<CreateShipmentFormData>();
  const { errors } = useFormState<CreateShipmentFormData>({
    name: ["sender.name", "sender.address", "sender.phone"],
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="bg-accent-soft text-accent flex size-9 items-center justify-center rounded-lg">
          <HiUser className="text-xl" />
        </div>
        <h3 className="text-xl font-bold">Sender Information</h3>
      </div>
      <TextField isInvalid={!!errors.sender?.name}>
        <Label>Full Name</Label>
        <Input placeholder="e. g. John Doe" {...register("sender.name")} />
        <FieldError>{errors.sender?.name?.message}</FieldError>
      </TextField>
      <TextField isInvalid={!!errors.sender?.address}>
        <Label>Address</Label>
        <Input
          placeholder="e. g. 123 Main St"
          {...register("sender.address")}
        />
        <FieldError>{errors.sender?.address?.message}</FieldError>
      </TextField>
      <Controller
        name="sender.phone"
        control={control}
        render={({ field, fieldState }) => (
          <label htmlFor="sender-phone" className={styles.group}>
            <div
              className={cn("mb-2 text-sm", fieldState.error && "text-danger")}
            >
              Phone number
            </div>
            <PhoneInput
              placeholder="e. g. (123) 456-7890"
              className={`${styles.phoneInput} ${fieldState.error ? styles.invalid : ""}`}
              hideDropdown
              value={field.value}
              onChange={field.onChange}
              inputProps={{ id: "sender-phone", onBlur: field.onBlur }}
              defaultCountry="uz"
            />
            {fieldState.error && (
              <span className="text-danger text-xs">
                {fieldState.error.message}
              </span>
            )}
          </label>
        )}
      />
    </div>
  );
}
