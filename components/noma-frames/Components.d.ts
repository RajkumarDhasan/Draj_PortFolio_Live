// Components.d.ts — the complete catalog of the 37 component(s) in
// Components.bundle.js. READ THIS FILE BEFORE USING THE BUNDLE: component
// names are derived from Figma layer names (sanitized to PascalCase,
// deduplicated) and may differ from what the design calls them — the
// "figma layer" comment above each interface maps them back.
// After the bundle <script> loads, every component is a window global
// (e.g. window.ARBuilderDefaultRecipe) and usable directly in JSX.
import * as React from 'react';

// figma layer: "AR · Builder — Default recipe" (node 43:4314)
export interface ARBuilderDefaultRecipeProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Ambient background / Coffee" (node 52:4884)
export interface AmbientBackgroundCoffeeProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Bottom Navigation — Ordering" (node 31:633)
export interface BottomNavigationOrderingProps {
  className?: string;
  style?: React.CSSProperties;
  activeDestination?: "home" | "menu" | "orders" | "profile";
  direction?: "ltr" | "rtl";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon4?: React.ReactNode;
}

// figma layer: "Button" (node 5:18)
export interface ButtonProps {
  className?: string;
  style?: React.CSSProperties;
  label?: string;
  type?: "primary" | "secondary";
  state?: "default" | "disabled";
}

// figma layer: "07 Cart" (node 35:1588)
export interface Cart07Props {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "18 Cart — item removed" (node 39:2833)
export interface CartItemRemoved18Props {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Chip" (node 30:247)
export interface ChipProps {
  className?: string;
  style?: React.CSSProperties;
  label?: string;
  state?: "default" | "selected";
}

// figma layer: "Option" (node 30:252)
export interface ComponentProps {
  className?: string;
  style?: React.CSSProperties;
  label?: string;
  state?: "default" | "selected";
}

// figma layer: "04 Customize sheet" (node 34:781)
export interface CustomizeSheet04Props {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "EN · Builder — Default recipe" (node 42:3758)
export interface ENBuilderDefaultRecipeProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Extra Shot" (node 33:1451)
export interface ExtraShotProps {
  className?: string;
  style?: React.CSSProperties;
  direction?: "ltr" | "rtl";
  selected?: "off" | "on";
}

// figma layer: "05 Filter sheet" (node 34:840)
export interface FilterSheet05Props {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "01 Home" (node 33:4)
export interface Home01Props {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "01 Home — AR" (node 33:452)
export interface HomeAR01Props {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "03 Home — added to order" (node 33:295)
export interface HomeAddedToOrder03Props {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Icon/Bag" (node 29:222)
export interface IconBagProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Icon/Check" (node 29:236)
export interface IconCheckProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Icon/Chevron Down" (node 38:2585)
export interface IconChevronDownProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Icon/Close" (node 29:233)
export interface IconCloseProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Icon/Cup" (node 29:213)
export interface IconCupProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Icon/Filter" (node 29:241)
export interface IconFilterProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Icon/Home" (node 8:67)
export interface IconHomeProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Icon/Minus" (node 29:229)
export interface IconMinusProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Icon/Pin" (node 38:2582)
export interface IconPinProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Icon/Plus" (node 29:226)
export interface IconPlusProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Icon/Receipt" (node 29:218)
export interface IconReceiptProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Icon/User" (node 8:75)
export interface IconUserProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "13 Location sheet" (node 39:2462)
export interface LocationSheet13Props {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Navigation Item" (node 8:89)
export interface NavigationItemProps {
  className?: string;
  style?: React.CSSProperties;
  label?: string;
  state?: "active" | "inactive";
  icon?: React.ReactNode;
}

// figma layer: "Search Field" (node 7:71)
export interface SearchFieldProps {
  className?: string;
  style?: React.CSSProperties;
  placeholder?: string;
  state?: "default" | "focused" | "disabled";
  showIcon?: boolean;
}

// figma layer: "Search Field RTL" (node 31:271)
export interface SearchFieldRTLProps {
  className?: string;
  style?: React.CSSProperties;
  placeholder?: string;
  state?: "default" | "focused";
}

// figma layer: "Section Header" (node 30:268)
export interface SectionHeaderProps {
  className?: string;
  style?: React.CSSProperties;
  title?: string;
  direction?: "ltr" | "rtl";
  trailing?: string;
}

// figma layer: "Sheet Header" (node 31:339)
export interface SheetHeaderProps {
  className?: string;
  style?: React.CSSProperties;
  title?: string;
  direction?: "ltr" | "rtl";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: "Status Bar" (node 32:1265)
export interface StatusBarProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "9:41". */
  text1?: string;
}

// figma layer: "Summary Row" (node 31:319)
export interface SummaryRowProps {
  className?: string;
  style?: React.CSSProperties;
  label?: string;
  direction?: "ltr" | "rtl";
  value?: string;
  type?: "default" | "total";
}

// figma layer: "Toast" (node 31:350)
export interface ToastProps {
  className?: string;
  style?: React.CSSProperties;
  message?: string;
  direction?: "ltr" | "rtl";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: "Tool Button" (node 32:1295)
export interface ToolButtonProps {
  className?: string;
  style?: React.CSSProperties;
  label?: string;
  direction?: "ltr" | "rtl";
  state?: "default" | "active";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

declare const ARBuilderDefaultRecipe: React.FC<ARBuilderDefaultRecipeProps>;
declare const AmbientBackgroundCoffee: React.FC<AmbientBackgroundCoffeeProps>;
declare const BottomNavigationOrdering: React.FC<BottomNavigationOrderingProps>;
declare const Button: React.FC<ButtonProps>;
declare const Cart07: React.FC<Cart07Props>;
declare const CartItemRemoved18: React.FC<CartItemRemoved18Props>;
declare const Chip: React.FC<ChipProps>;
declare const Component: React.FC<ComponentProps>;
declare const CustomizeSheet04: React.FC<CustomizeSheet04Props>;
declare const ENBuilderDefaultRecipe: React.FC<ENBuilderDefaultRecipeProps>;
declare const ExtraShot: React.FC<ExtraShotProps>;
declare const FilterSheet05: React.FC<FilterSheet05Props>;
declare const Home01: React.FC<Home01Props>;
declare const HomeAR01: React.FC<HomeAR01Props>;
declare const HomeAddedToOrder03: React.FC<HomeAddedToOrder03Props>;
declare const IconBag: React.FC<IconBagProps>;
declare const IconCheck: React.FC<IconCheckProps>;
declare const IconChevronDown: React.FC<IconChevronDownProps>;
declare const IconClose: React.FC<IconCloseProps>;
declare const IconCup: React.FC<IconCupProps>;
declare const IconFilter: React.FC<IconFilterProps>;
declare const IconHome: React.FC<IconHomeProps>;
declare const IconMinus: React.FC<IconMinusProps>;
declare const IconPin: React.FC<IconPinProps>;
declare const IconPlus: React.FC<IconPlusProps>;
declare const IconReceipt: React.FC<IconReceiptProps>;
declare const IconUser: React.FC<IconUserProps>;
declare const LocationSheet13: React.FC<LocationSheet13Props>;
declare const NavigationItem: React.FC<NavigationItemProps>;
declare const SearchField: React.FC<SearchFieldProps>;
declare const SearchFieldRTL: React.FC<SearchFieldRTLProps>;
declare const SectionHeader: React.FC<SectionHeaderProps>;
declare const SheetHeader: React.FC<SheetHeaderProps>;
declare const StatusBar: React.FC<StatusBarProps>;
declare const SummaryRow: React.FC<SummaryRowProps>;
declare const Toast: React.FC<ToastProps>;
declare const ToolButton: React.FC<ToolButtonProps>;
declare global {
  interface Window {
    ARBuilderDefaultRecipe: React.FC<ARBuilderDefaultRecipeProps>;
    AmbientBackgroundCoffee: React.FC<AmbientBackgroundCoffeeProps>;
    BottomNavigationOrdering: React.FC<BottomNavigationOrderingProps>;
    Button: React.FC<ButtonProps>;
    Cart07: React.FC<Cart07Props>;
    CartItemRemoved18: React.FC<CartItemRemoved18Props>;
    Chip: React.FC<ChipProps>;
    Component: React.FC<ComponentProps>;
    CustomizeSheet04: React.FC<CustomizeSheet04Props>;
    ENBuilderDefaultRecipe: React.FC<ENBuilderDefaultRecipeProps>;
    ExtraShot: React.FC<ExtraShotProps>;
    FilterSheet05: React.FC<FilterSheet05Props>;
    Home01: React.FC<Home01Props>;
    HomeAR01: React.FC<HomeAR01Props>;
    HomeAddedToOrder03: React.FC<HomeAddedToOrder03Props>;
    IconBag: React.FC<IconBagProps>;
    IconCheck: React.FC<IconCheckProps>;
    IconChevronDown: React.FC<IconChevronDownProps>;
    IconClose: React.FC<IconCloseProps>;
    IconCup: React.FC<IconCupProps>;
    IconFilter: React.FC<IconFilterProps>;
    IconHome: React.FC<IconHomeProps>;
    IconMinus: React.FC<IconMinusProps>;
    IconPin: React.FC<IconPinProps>;
    IconPlus: React.FC<IconPlusProps>;
    IconReceipt: React.FC<IconReceiptProps>;
    IconUser: React.FC<IconUserProps>;
    LocationSheet13: React.FC<LocationSheet13Props>;
    NavigationItem: React.FC<NavigationItemProps>;
    SearchField: React.FC<SearchFieldProps>;
    SearchFieldRTL: React.FC<SearchFieldRTLProps>;
    SectionHeader: React.FC<SectionHeaderProps>;
    SheetHeader: React.FC<SheetHeaderProps>;
    StatusBar: React.FC<StatusBarProps>;
    SummaryRow: React.FC<SummaryRowProps>;
    Toast: React.FC<ToastProps>;
    ToolButton: React.FC<ToolButtonProps>;
  }
}
