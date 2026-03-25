import { TextField, Label, Input, FieldError } from "@heroui/react";
import { RiUserLocationFill } from "react-icons/ri";
import { Controller, useFormContext, useFormState } from "react-hook-form";
import { PhoneInput } from "react-international-phone";
import type { CreateShipmentFormData } from "../../model/types";
import styles from "./phone-input.module.css";

export default function CreateShipmentStep2() {
  const { register, control } = useFormContext<CreateShipmentFormData>();
  const { errors } = useFormState<CreateShipmentFormData>({
    name: ["recipient.name", "recipient.address", "recipient.phone"],
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="bg-accent-soft text-accent flex size-9 items-center justify-center rounded-lg">
          <RiUserLocationFill className="text-xl" />
        </div>
        <h3 className="text-xl font-bold">Where it this going?</h3>
      </div>
      <TextField isInvalid={!!errors.recipient?.name}>
        <Label>Recipient Full Name</Label>
        <Input placeholder="e. g. John Doe" {...register("recipient.name")} />
        <FieldError>{errors.recipient?.name?.message}</FieldError>
      </TextField>
      <TextField isInvalid={!!errors.recipient?.address}>
        <Label>Shipping Address</Label>
        <Input
          placeholder="e. g. 123 Main St"
          {...register("recipient.address")}
        />
        <FieldError>{errors.recipient?.address?.message}</FieldError>
      </TextField>
      <Controller
        name="recipient.phone"
        control={control}
        render={({ field, fieldState }) => (
          <label htmlFor="recipient-phone" className={styles.group}>
            <div className="mb-2 text-sm">Recipient Phone</div>
            <PhoneInput
              placeholder="e. g. (123) 456-7890"
              className={styles.phoneInput}
              hideDropdown
              value={field.value}
              onChange={field.onChange}
              inputProps={{ id: "recipient-phone", onBlur: field.onBlur }}
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
