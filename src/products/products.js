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
  DeleteButton,
} from "react-admin";
import CategoryIcon from "@material-ui/icons/Category";

export const ProductList = (props) => {
  return (
    <List {...props} bulkActionButtons={false} pagination={false}>
      <Datagrid>
        <TextField source="name" label={"Product Name"} />
        <EditButton />
        <DeleteButton />
      </Datagrid>
    </List>
  );
};

export const ProductCreate = (props) => {
  const notify = useNotify();
  const refresh = useRefresh();
  const redirect = useRedirect();
  const onSuccess = () => {
    notify(`Product addedd successfully.`);
    redirect("/products");
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
        <TextInput
          source="name"
          fullWidth
          placeholder="Joint Pain"
          autoFocus
          variant="outlined"
          required
        />
      </SimpleForm>
    </Create>
  );
};

export const ProductEdit = (props) => {
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
        <TextInput
          source="name"
          fullWidth
          placeholder="Joint Pain"
          autoFocus
          variant="outlined"
          required
        />
      </SimpleForm>
    </Edit>
  );
};

export default {
  list: ProductList,
  name: "products",
  icon: CategoryIcon,
  edit: ProductEdit,
  create: ProductCreate,
};
