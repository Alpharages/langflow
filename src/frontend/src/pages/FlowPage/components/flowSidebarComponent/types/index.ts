import type { Dispatch, SetStateAction } from "react";
import type { APIClassType, APIDataType } from "@/types/api";

export interface NodeColors {
  [key: string]: string;
}

export interface CategoryGroupProps {
  dataFilter: APIDataType;
  sortedCategories: string[];
  CATEGORIES: {
    display_name: string;
    name: string;
    icon: string;
  }[];
  openCategories: string[];
  setOpenCategories: Dispatch<SetStateAction<string[]>>;
  search: string;
  nodeColors: NodeColors;
  onDragStart: (
    event: React.DragEvent<any>,
    data: { type: string; node?: APIClassType },
  ) => void;
  sensitiveSort: (a: string, b: string) => number;
}

export interface SidebarGroupProps {
  BUNDLES: any;
  search: string;
  sortedCategories: string[];
  dataFilter: APIDataType;
  nodeColors: NodeColors;
  onDragStart: (
    event: React.DragEvent<HTMLDivElement>,
    data: { type: string; node?: APIClassType },
  ) => void;
  sensitiveSort: (a: string, b: string) => number;
  handleKeyDownInput: (
    event: React.KeyboardEvent<HTMLDivElement>,
    name: string,
  ) => void;
  openCategories: string[];
  setOpenCategories: Dispatch<SetStateAction<string[]>>;
}

export interface BundleItemProps {
  item: {
    name: string;
    display_name: string;
    icon: string;
  };
  openCategories: string[];
  setOpenCategories: Dispatch<SetStateAction<string[]>>;
  dataFilter: APIDataType;
  nodeColors: NodeColors;
  onDragStart: (
    event: React.DragEvent<any>,
    data: { type: string; node?: APIClassType },
  ) => void;
  sensitiveSort: (a: string, b: string) => number;
  handleKeyDownInput: (event: React.KeyboardEvent<any>, name: string) => void;
}

export interface SidebarHeaderComponentProps {
  showConfig: boolean;
  setShowConfig: (show: boolean) => void;
  showBeta: boolean;
  setShowBeta: (show: boolean) => void;
  showLegacy: boolean;
  setShowLegacy: (show: boolean) => void;
  searchInputRef: React.RefObject<HTMLInputElement>;
  isInputFocused: boolean;
  search: string;
  handleInputFocus: (event: React.FocusEvent<HTMLInputElement>) => void;
  handleInputBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  filterType:
    | {
        source: string | undefined;
        sourceHandle: string | undefined;
        target: string | undefined;
        targetHandle: string | undefined;
        type: string;
        color: string;
      }
    | undefined;
  setFilterEdge: (edge: any[]) => void;
  setFilterData: Dispatch<SetStateAction<APIDataType>>;
  data: APIDataType;
}

export interface UniqueInputsComponents {
  chatInput: boolean;
  webhookInput: boolean;
}
