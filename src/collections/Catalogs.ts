import { CollectionConfig } from "payload/types";

const Catalogs: CollectionConfig = {
  slug: "Catalogs",
  fields: [
    {
      name: "products",
      type: "relationship",
      relationTo: ["products"],
      hasMany: true,
      required: true,
    },
    {
      name: "author",
      type: "relationship",
      relationTo: ["users"],
      required: true,
    },
    {
      name: "tittle",
      type: "text",
      required: true,
    },
    {
      name: "description",
      type: "text",
    },
  ],
};

export default Catalogs;
