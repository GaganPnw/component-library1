export interface DropdownProps {
  options: string[];
  defaultOption?: string;
  enabled?: boolean;
  backgroundColor?: string;
  onChange?: (selectedOption: string) => void;

}

