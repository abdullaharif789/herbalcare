import React from "react";
import {
  List,
  Datagrid,
  TextField,
  NumberField,
  DateField,
  ReferenceField,
  downloadCSV,
  Filter,
  TextInput,
  ReferenceInput,
  AutocompleteInput,
} from "react-admin";
import jsonExport from "jsonexport/dist";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

const exporter = (orders) => {
  const ordersForExport = orders.map((order) => {
    const { id, customer, variant } = order;
    return {
      "Order#": id,
      Name: customer.first_name,
      Address: customer.address,
      Phone: customer.phone,
      City: customer.city,
      "Variant Id": variant?.id || 0,
      "Variant Price": variant?.price || 0,
    };
  });

  jsonExport(ordersForExport, {}, (err, csv) => {
    downloadCSV(csv, "orders");
  });
};
const OrderFilter = (props) => (
  <Filter {...props}>
    <TextInput
      alwaysOn
      source="variant_id"
      fullWidth
      variant="outlined"
      label="Variant Id"
    />
    <ReferenceInput
      source="product_id"
      reference="products"
      alwaysOn
      variant="outlined"
      perPage={10000000}
      filterToQuery={(searchText) => ({ name: searchText })}
    >
      <AutocompleteInput optionText="name" />
    </ReferenceInput>
  </Filter>
);
export const OrderList = (props) => {
  return (
    <List
      filters={<OrderFilter />}
      exporter={exporter}
      {...props}
      bulkActionButtons={false}
      pagination={false}
    >
      <Datagrid>
        <TextField source="id" label={"Order#"} />
        <TextField source="customer.first_name" label={"Name"} />
        <TextField source="customer.address" label={"Address"} />
        <TextField source="customer.phone" label={"Phone"} />
        <TextField source="customer.city" label={"City"} />
        <ReferenceField
          source="variant.product_id"
          reference="products"
          label={"Product"}
        >
          <TextField source="name" />
        </ReferenceField>
        <NumberField source="variant.id" label={"Variant Id"} />
        <NumberField source="variant.price" label={"Variant Price"} />
        <DateField source="created_at" label={"Ordered On"} showTime />
      </Datagrid>
    </List>
  );
};

export default {
  list: OrderList,
  name: "orders",
  icon: AddShoppingCartIcon,
};
