const orderSchema: {
    name: string;
    type: string;
    title: string;
    fields: Array<{
      name: string;
      title: string;
      type: string;
      options?: {
        list: { title: string; value: string }[];
        layout: string;
      };
      initialValue?: string;
      of?: { type: string; to: { type: string }[] }[];
    }>;
  } = {
    name: "order",
    type: "document",
    title: "Order",
    fields: [
      {
        name: "firstName",
        title: "First Name",
        type: "string"
      },
      {
        name: "lastName",
        title: "Last Name",
        type: "string"
      },
      {
        name: "address",
        title: "Address",
        type: "string"
      },
      {
        name: "phone",
        title: "Phone",
        type: "string"
      },
      {
        name: "city",
        title: "City",
        type: "string"
      },
      {
        name: "email",
        title: "Email",
        type: "string"
      },
      {
        name: "discount",
        title: "Discount",
        type: "number"
      },
      {
        name: "zipCode",
        title: "Zip Code",
        type: "string"
      },
      {
        name: "cartItems",
        title: "Cart Items",
        type: "array",
        of: [{ type: "reference", to: [{ type: "product" }] }]
      },
      {
        name: "total",
        title: "Total",
        type: "number"
      },
      {
        name: "status",
        type: "string",
        title: "Order Status",
        options: {
          list: [
            { title: "Pending", value: "pending" },
            { title: "Success", value: "success" },
            { title: "Dispatch", value: "dispatch" }
          ],
          layout: "radio"
        },
        initialValue: "pending"
      }
    ]
  }
  
  export default orderSchema;
  