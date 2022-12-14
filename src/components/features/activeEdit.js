import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  key: "",
  name: "",
  sectors: "",
  editMode: false,
};

// create slice
export const activeEditSlice = createSlice({
  name: "edit",
  initialState,
  reducers: {
    activeEdit: (state, action) => {
      state.key = action.payload.key;
      state.name = action.payload.name;
      state.sectors = action.payload.sectors;
      state.editMode = true;
    },
    removeEdit: (state, action) => {
      state.key = "";
      state.name = "";
      state.sectors = "";
      state.editMode = false;
    },
  },
});

export default activeEditSlice.reducer;
export const { activeEdit, removeEdit } = activeEditSlice.actions;
