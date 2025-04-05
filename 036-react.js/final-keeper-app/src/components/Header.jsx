import React from "react";
import EditNoteIcon from '@mui/icons-material/EditNote';

function Header() {
  return (
    <header>
      <h1><EditNoteIcon sx={{ fontSize: 30 }} /> Keeper</h1>
    </header>
  );
}

export default Header;
