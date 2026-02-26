import React from "react";
import { categoriesAndItems } from "./categoryConfig";

export const categoryRoutes = categoriesAndItems.flatMap((category) =>
  category.items.map((item) => ({
    path: item.path,
    element: React.createElement(item.component),
  })),
);
