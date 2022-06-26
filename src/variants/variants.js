import React from "react";
import {
  List,
  Datagrid,
  TextField,
  useNotify,
  useRefresh,
  useRedirect,
  Create,
  SimpleForm,
  TextInput,
  Edit,
  EditButton,
  ListGuesser,
  ReferenceField,
  NumberField,
  DeleteButton,
  SelectInput,
  ReferenceInput,
  NumberInput,
  Filter,
  AutocompleteInput,
  DateInput,
} from "react-admin";
import CategoryIcon from "@material-ui/icons/VerticalSplitSharp";
import { app } from "../contants";
const VariantFilter = (props) => (
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
export const VariantList = (props) => {
  return (
    <List
      filters={<VariantFilter />}
      {...props}
      bulkActionButtons={false}
      pagination={false}
    >
      <Datagrid>
        <TextField source="id" label={"Variant#"} />
        <ReferenceField source="product_id" reference="products">
          <TextField source="name" />
        </ReferenceField>
        <NumberField source="price" label={`Price(${app.currencySymbol})`} />
        <EditButton />
        <DeleteButton />
      </Datagrid>
    </List>
  );
};

export const VariantCreate = (props) => {
  const notify = useNotify();
  const refresh = useRefresh();
  const redirect = useRedirect();
  const onSuccess = () => {
    notify(`Variant addedd successfully.`);
    redirect("/variants");
    refresh();
  };
  return (
    <Create
      {...props}
      onSuccess={onSuccess}
      onFailure={(data) => {
        notify(data.body, "error");
      }}
    >
      <SimpleForm>
        <ReferenceInput
          source="product_id"
          reference="products"
          fullWidth
          variant="outlined"
        >
          <SelectInput optionText="name" />
        </ReferenceInput>
        <NumberInput
          source="price"
          fullWidth
          placeholder="2500"
          autoFocus
          variant="outlined"
          required
        />
      </SimpleForm>
    </Create>
  );
};

export const VariantEdit = (props) => {
  const notify = useNotify();
  const refresh = useRefresh();
  return (
    <Edit
      {...props}
      undoable={false}
      onFailure={(data) => {
        notify(data.body, "error");
        refresh();
      }}
    >
      <SimpleForm>
        <ReferenceInput
          source="product_id"
          reference="products"
          fullWidth
          variant="outlined"
        >
          <SelectInput optionText="name" />
        </ReferenceInput>
        <NumberInput
          source="price"
          fullWidth
          placeholder="2500"
          autoFocus
          variant="outlined"
          required
        />
      </SimpleForm>
    </Edit>
  );
};

export default {
  list: VariantList,
  name: "variants",
  icon: CategoryIcon,
  edit: VariantEdit,
  create: VariantCreate,
};
