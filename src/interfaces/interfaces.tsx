import { Column } from "material-table";

export interface EditRow {
  name: string;
  type: string;
  age: number;
}

export interface TableState {
  columns: Array<Column<EditRow>>;
  data: EditRow[];
}
