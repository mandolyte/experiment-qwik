/** @jsxImportSource react */


// import { component$ } from "@builder.io/qwik";
import { qwikify$ } from '@builder.io/qwik-react';
import Add from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";

export const AddButton = qwikify$(() => {
  return (
    <IconButton >
      <Add onClick={ () => console.log("clicked!")}/>
    </IconButton>
  );
});

export default AddButton;

/*
const onChange = $(() => console.log('change', e));
return <QwikMUIText label="Text" value={store.text} onChange={onChange} />

*/