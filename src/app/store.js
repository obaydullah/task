import { configureStore } from "@reduxjs/toolkit";
import activeEdit from "../components/features/activeEdit";

export const store = configureStore({
  reducer: {
    activeEdit: activeEdit,
  },
});
