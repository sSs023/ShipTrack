import { Input } from "@heroui/react";
import { RiUserLocationFill } from "react-icons/ri";
import { Controller, useFormContext } from "react-hook-form";
import { PhoneInput } from "react-international-phone";
import type { CreateShipmentFormData } from "../../model/types";
import styles from "./phone-input.module.css";

export default function CreateShipmentStep2() {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext<CreateShipmentFormData>();

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="bg-accent/15 text-accent flex size-9 items-center justify-center rounded-lg">
          <RiUserLocationFill className="text-xl" />
        </div>
        <h3 className="text-xl font-bold">Where it this going?</h3>
      </div>
      <Input
        label="Recipient Full Name"
        labelPlacement="outside-top"
        placeholder="e. g. John Doe"
        variant="bordered"
        isInvalid={!!errors.recipient?.name}
        errorMessage={errors.recipient?.name?.message}
        {...register("recipient.name")}
      />
      <Input
        label="Shipping Address"
        labelPlacement="outside-top"
        placeholder="e. g. 123 Main St"
        variant="bordered"
        isInvalid={!!errors.recipient?.address}
        errorMessage={errors.recipient?.address?.message}
        {...register("recipient.address")}
      />
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
