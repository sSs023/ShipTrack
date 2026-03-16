import { Input } from "@heroui/react";
import { HiUser } from "react-icons/hi2";
import { Controller, useFormContext } from "react-hook-form";
import { PhoneInput } from "react-international-phone";
import type { CreateShipmentFormData } from "../../model/types";
import styles from "./phone-input.module.css";

export default function CreateShipmentStep1() {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext<CreateShipmentFormData>();

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="bg-accent/15 text-accent flex size-9 items-center justify-center rounded-lg">
          <HiUser className="text-xl" />
        </div>
        <h3 className="text-xl font-bold">Sender Information</h3>
      </div>
      <Input
        label="Full Name"
        labelPlacement="outside-top"
        placeholder="e. g. John Doe"
        variant="bordered"
        isInvalid={!!errors.sender?.name}
        errorMessage={errors.sender?.name?.message}
        {...register("sender.name")}
      />
      <Input
        label="Address"
        labelPlacement="outside-top"
        placeholder="e. g. 123 Main St"
        variant="bordered"
        isInvalid={!!errors.sender?.address}
        errorMessage={errors.sender?.address?.message}
        {...register("sender.address")}
      />
      <Controller
        name="sender.phone"
        control={control}
        render={({ field, fieldState }) => (
          <label htmlFor="sender-phone" className={styles.group}>
            <div className="mb-2 text-sm">Phone number</div>
            <PhoneInput
              placeholder="e. g. (123) 456-7890"
              className={styles.phoneInput}
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
