/** @jsxImportSource react */

import { qwikify$ } from "@builder.io/qwik-react";
import { Button } from "@mui/material";

export const MuiButton = qwikify$(() => {
    return ( <div>
      <Button variant="outlined">MUI Button </Button>
    </div>
  );
})

export default MuiButton