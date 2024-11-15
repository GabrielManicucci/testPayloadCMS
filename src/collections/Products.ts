import { CollectionConfig } from "payload/types";

export const Products: CollectionConfig = {
  slug: "products",
  admin: {
    useAsTitle: "name",
  },
  fields: [
    {
      name: "name",
      type: "text",
    },
    {
      name: "description",
      type: "text",
    },
    {
      name: "price",
      type: "number",
      admin: {
        step: 0.001,
      },
    },
    {
      name: "quantity",
      type: "number",
      admin: {
        step: 1,
      },
    },
  ],
};
