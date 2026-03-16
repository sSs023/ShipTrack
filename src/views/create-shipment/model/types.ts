import { z } from "zod";

export type IDeliveryOption = "standard" | "economy" | "express";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  address: z.string().min(1, "Address is required"),
  phone: z.string().min(1, "Phone is required"),
});

export const createShipmentSchema = z.object({
  sender: contactSchema,
  recipient: contactSchema,
  cargo: z.object({
    description: z.string().min(1, "Description is required"),
    weight: z.number().positive("Weight must be greater than 0"),
    dimensions: z.string().min(1, "Dimensions are required"),
  }),
  deliveryOption: z.enum(["standard", "economy", "express"]),
});

export type CreateShipmentFormData = z.infer<typeof createShipmentSchema>;
