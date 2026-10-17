// Components.d.ts — the complete catalog of the 57 component(s) in
// Components.bundle.js. READ THIS FILE BEFORE USING THE BUNDLE: component
// names are derived from Figma layer names (sanitized to PascalCase,
// deduplicated) and may differ from what the design calls them — the
// "figma layer" comment above each interface maps them back.
// After the bundle <script> loads, every component is a window global
// (e.g. window.AmbientBackgroundCoffee) and usable directly in JSX.
import * as React from 'react';

// figma layer: "Ambient background / Coffee" (node 52:4884)
export interface AmbientBackgroundCoffeeProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Bottom Navigation" (node 9:206)
export interface BottomNavigationProps {
  className?: string;
  style?: React.CSSProperties;
  activeDestination?: "home" | "discover" | "favorites" | "profile";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon4?: React.ReactNode;
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

// figma layer: "Browse by mood" (node 127:7509)
export interface BrowseByMoodProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Builder — pour animation overlays" (node 86:6933)
export interface BuilderPourAnimationOverlaysProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Button" (node 5:18)
export interface ButtonProps {
  className?: string;
  style?: React.CSSProperties;
  label?: string;
  type?: "primary" | "secondary";
  state?: "default" | "disabled";
}

// figma layer: "Cancellation flow — EN / AR" (node 102:7096)
export interface CancellationFlowENARProps {
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

// figma layer: "Coffee Card" (node 6:14)
export interface CoffeeCardProps {
  className?: string;
  style?: React.CSSProperties;
  image?: React.ReactNode;
  name?: string;
  showFavorite?: boolean;
  status?: string;
  category?: string;
  distance?: string;
  rating?: string;
  /** Text content; defaults to "•". */
  text1?: string;
}

// figma layer: "Option" (node 30:252)
export interface ComponentProps {
  className?: string;
  style?: React.CSSProperties;
  label?: string;
  state?: "default" | "selected";
}

// figma layer: "Components — Buttons" (node 5:19)
export interface ComponentsButtonsProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Components — Cards" (node 6:30)
export interface ComponentsCardsProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Components — Form Controls" (node 7:72)
export interface ComponentsFormControlsProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Components — Navigation" (node 8:66)
export interface ComponentsNavigationProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Components — Ordering" (node 29:206)
export interface ComponentsOrderingProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Components — Product art" (node 57:5360)
export interface ComponentsProductArtProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Drink builder — AR" (node 43:4313)
export interface DrinkBuilderARProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Drink builder — EN" (node 42:3757)
export interface DrinkBuilderENProps {
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

// figma layer: "Foundations — Typography" (node 4:13)
export interface FoundationsTypographyProps {
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

// figma layer: "Icon/Heart" (node 8:73)
export interface IconHeartProps {
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

// figma layer: "Icon/Search" (node 8:70)
export interface IconSearchProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Icon/User" (node 8:75)
export interface IconUserProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Image Placeholder/Coffee 1" (node 6:11)
export interface ImagePlaceholderCoffee1Props {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Image Placeholder/Coffee 2" (node 6:12)
export interface ImagePlaceholderCoffee2Props {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Image Placeholder/Coffee 3" (node 6:13)
export interface ImagePlaceholderCoffee3Props {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Info Card" (node 31:326)
export interface InfoCardProps {
  className?: string;
  style?: React.CSSProperties;
  title?: string;
  direction?: "ltr" | "rtl";
  description?: string;
}

// figma layer: "Logo/Noma" (node 38:2586)
export interface LogoNomaProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "noma". */
  text1?: string;
}

// figma layer: "Menu — EN" (node 59:5181)
export interface MenuENProps {
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

// figma layer: "Noma — Ordering flow (Arabic, RTL)" (node 33:3)
export interface NomaOrderingFlowArabicRTLProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Noma — Ordering flow (English, LTR)" (node 33:2)
export interface NomaOrderingFlowEnglishLTRProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Payment Choice" (node 32:1100)
export interface PaymentChoiceProps {
  className?: string;
  style?: React.CSSProperties;
  direction?: "ltr" | "rtl";
  selected?: "none" | "payatpickup" | "card";
}

// figma layer: "Quantity Stepper" (node 30:253)
export interface QuantityStepperProps {
  className?: string;
  style?: React.CSSProperties;
  quantity?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
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

// figma layer: "States & edge cases — EN" (node 39:2461)
export interface StatesEdgeCasesENProps {
  className?: string;
  style?: React.CSSProperties;
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

// figma layer: "Text Field" (node 32:1304)
export interface TextFieldProps {
  className?: string;
  style?: React.CSSProperties;
  label?: string;
  direction?: "ltr" | "rtl";
  value?: string;
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

// figma layer: "Wireframe / Size picker" (node 46:4933)
export interface WireframeSizePickerProps {
  className?: string;
  style?: React.CSSProperties;
  size?: "sm" | "md" | "lg" | "xl";
  /** Text content; defaults to "Cup size". */
  text1?: string;
  /** Text content; defaults to "Small  −2". */
  text2?: string;
  /** Text content; defaults to "Medium". */
  text3?: string;
  /** Text content; defaults to "Large  +3". */
  text4?: string;
}

// figma layer: "Wireframes — Drink builder (low-fi)" (node 46:4946)
export interface WireframesDrinkBuilderLowFiProps {
  className?: string;
  style?: React.CSSProperties;
}

declare const AmbientBackgroundCoffee: React.FC<AmbientBackgroundCoffeeProps>;
declare const BottomNavigation: React.FC<BottomNavigationProps>;
declare const BottomNavigationOrdering: React.FC<BottomNavigationOrderingProps>;
declare const BrowseByMood: React.FC<BrowseByMoodProps>;
declare const BuilderPourAnimationOverlays: React.FC<BuilderPourAnimationOverlaysProps>;
declare const Button: React.FC<ButtonProps>;
declare const CancellationFlowENAR: React.FC<CancellationFlowENARProps>;
declare const Chip: React.FC<ChipProps>;
declare const CoffeeCard: React.FC<CoffeeCardProps>;
declare const Component: React.FC<ComponentProps>;
declare const ComponentsButtons: React.FC<ComponentsButtonsProps>;
declare const ComponentsCards: React.FC<ComponentsCardsProps>;
declare const ComponentsFormControls: React.FC<ComponentsFormControlsProps>;
declare const ComponentsNavigation: React.FC<ComponentsNavigationProps>;
declare const ComponentsOrdering: React.FC<ComponentsOrderingProps>;
declare const ComponentsProductArt: React.FC<ComponentsProductArtProps>;
declare const DrinkBuilderAR: React.FC<DrinkBuilderARProps>;
declare const DrinkBuilderEN: React.FC<DrinkBuilderENProps>;
declare const ExtraShot: React.FC<ExtraShotProps>;
declare const FoundationsTypography: React.FC<FoundationsTypographyProps>;
declare const IconBag: React.FC<IconBagProps>;
declare const IconCheck: React.FC<IconCheckProps>;
declare const IconChevronDown: React.FC<IconChevronDownProps>;
declare const IconClose: React.FC<IconCloseProps>;
declare const IconCup: React.FC<IconCupProps>;
declare const IconFilter: React.FC<IconFilterProps>;
declare const IconHeart: React.FC<IconHeartProps>;
declare const IconHome: React.FC<IconHomeProps>;
declare const IconMinus: React.FC<IconMinusProps>;
declare const IconPin: React.FC<IconPinProps>;
declare const IconPlus: React.FC<IconPlusProps>;
declare const IconReceipt: React.FC<IconReceiptProps>;
declare const IconSearch: React.FC<IconSearchProps>;
declare const IconUser: React.FC<IconUserProps>;
declare const ImagePlaceholderCoffee1: React.FC<ImagePlaceholderCoffee1Props>;
declare const ImagePlaceholderCoffee2: React.FC<ImagePlaceholderCoffee2Props>;
declare const ImagePlaceholderCoffee3: React.FC<ImagePlaceholderCoffee3Props>;
declare const InfoCard: React.FC<InfoCardProps>;
declare const LogoNoma: React.FC<LogoNomaProps>;
declare const MenuEN: React.FC<MenuENProps>;
declare const NavigationItem: React.FC<NavigationItemProps>;
declare const NomaOrderingFlowArabicRTL: React.FC<NomaOrderingFlowArabicRTLProps>;
declare const NomaOrderingFlowEnglishLTR: React.FC<NomaOrderingFlowEnglishLTRProps>;
declare const PaymentChoice: React.FC<PaymentChoiceProps>;
declare const QuantityStepper: React.FC<QuantityStepperProps>;
declare const SearchField: React.FC<SearchFieldProps>;
declare const SearchFieldRTL: React.FC<SearchFieldRTLProps>;
declare const SectionHeader: React.FC<SectionHeaderProps>;
declare const SheetHeader: React.FC<SheetHeaderProps>;
declare const StatesEdgeCasesEN: React.FC<StatesEdgeCasesENProps>;
declare const StatusBar: React.FC<StatusBarProps>;
declare const SummaryRow: React.FC<SummaryRowProps>;
declare const TextField: React.FC<TextFieldProps>;
declare const Toast: React.FC<ToastProps>;
declare const ToolButton: React.FC<ToolButtonProps>;
declare const WireframeSizePicker: React.FC<WireframeSizePickerProps>;
declare const WireframesDrinkBuilderLowFi: React.FC<WireframesDrinkBuilderLowFiProps>;
declare global {
  interface Window {
    AmbientBackgroundCoffee: React.FC<AmbientBackgroundCoffeeProps>;
    BottomNavigation: React.FC<BottomNavigationProps>;
    BottomNavigationOrdering: React.FC<BottomNavigationOrderingProps>;
    BrowseByMood: React.FC<BrowseByMoodProps>;
    BuilderPourAnimationOverlays: React.FC<BuilderPourAnimationOverlaysProps>;
    Button: React.FC<ButtonProps>;
    CancellationFlowENAR: React.FC<CancellationFlowENARProps>;
    Chip: React.FC<ChipProps>;
    CoffeeCard: React.FC<CoffeeCardProps>;
    Component: React.FC<ComponentProps>;
    ComponentsButtons: React.FC<ComponentsButtonsProps>;
    ComponentsCards: React.FC<ComponentsCardsProps>;
    ComponentsFormControls: React.FC<ComponentsFormControlsProps>;
    ComponentsNavigation: React.FC<ComponentsNavigationProps>;
    ComponentsOrdering: React.FC<ComponentsOrderingProps>;
    ComponentsProductArt: React.FC<ComponentsProductArtProps>;
    DrinkBuilderAR: React.FC<DrinkBuilderARProps>;
    DrinkBuilderEN: React.FC<DrinkBuilderENProps>;
    ExtraShot: React.FC<ExtraShotProps>;
    FoundationsTypography: React.FC<FoundationsTypographyProps>;
    IconBag: React.FC<IconBagProps>;
    IconCheck: React.FC<IconCheckProps>;
    IconChevronDown: React.FC<IconChevronDownProps>;
    IconClose: React.FC<IconCloseProps>;
    IconCup: React.FC<IconCupProps>;
    IconFilter: React.FC<IconFilterProps>;
    IconHeart: React.FC<IconHeartProps>;
    IconHome: React.FC<IconHomeProps>;
    IconMinus: React.FC<IconMinusProps>;
    IconPin: React.FC<IconPinProps>;
    IconPlus: React.FC<IconPlusProps>;
    IconReceipt: React.FC<IconReceiptProps>;
    IconSearch: React.FC<IconSearchProps>;
    IconUser: React.FC<IconUserProps>;
    ImagePlaceholderCoffee1: React.FC<ImagePlaceholderCoffee1Props>;
    ImagePlaceholderCoffee2: React.FC<ImagePlaceholderCoffee2Props>;
    ImagePlaceholderCoffee3: React.FC<ImagePlaceholderCoffee3Props>;
    InfoCard: React.FC<InfoCardProps>;
    LogoNoma: React.FC<LogoNomaProps>;
    MenuEN: React.FC<MenuENProps>;
    NavigationItem: React.FC<NavigationItemProps>;
    NomaOrderingFlowArabicRTL: React.FC<NomaOrderingFlowArabicRTLProps>;
    NomaOrderingFlowEnglishLTR: React.FC<NomaOrderingFlowEnglishLTRProps>;
    PaymentChoice: React.FC<PaymentChoiceProps>;
    QuantityStepper: React.FC<QuantityStepperProps>;
    SearchField: React.FC<SearchFieldProps>;
    SearchFieldRTL: React.FC<SearchFieldRTLProps>;
    SectionHeader: React.FC<SectionHeaderProps>;
    SheetHeader: React.FC<SheetHeaderProps>;
    StatesEdgeCasesEN: React.FC<StatesEdgeCasesENProps>;
    StatusBar: React.FC<StatusBarProps>;
    SummaryRow: React.FC<SummaryRowProps>;
    TextField: React.FC<TextFieldProps>;
    Toast: React.FC<ToastProps>;
    ToolButton: React.FC<ToolButtonProps>;
    WireframeSizePicker: React.FC<WireframeSizePickerProps>;
    WireframesDrinkBuilderLowFi: React.FC<WireframesDrinkBuilderLowFiProps>;
  }
}
