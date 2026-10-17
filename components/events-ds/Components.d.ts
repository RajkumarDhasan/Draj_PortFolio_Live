// Components.d.ts — the complete catalog of the 18 component(s) in
// Components.bundle.js. READ THIS FILE BEFORE USING THE BUNDLE: component
// names are derived from Figma layer names (sanitized to PascalCase,
// deduplicated) and may differ from what the design calls them — the
// "figma layer" comment above each interface maps them back.
// After the bundle <script> loads, every component is a window global
// (e.g. window.Badge) and usable directly in JSX.
import * as React from 'react';

// figma layer: "Badge" (node 16:12)
export interface BadgeProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "discount" | "new" | "bestseller" | "ai pick" | "sold out";
  /** Text content; defaults to "-30%". */
  text1?: string;
}

// figma layer: "Button" (node 15:26)
export interface ButtonProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "primary" | "secondary" | "ghost";
  size?: "lg" | "md";
  state?: "default" | "disabled";
  /** Text content; defaults to "Button Label". */
  text1?: string;
}

// figma layer: "Icon/Card" (node 14:85)
export interface IconCardProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Icon/Cart" (node 14:18)
export interface IconCartProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Icon/Categories" (node 14:13)
export interface IconCategoriesProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Icon/Close" (node 14:100)
export interface IconCloseProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Icon/Heart" (node 14:34)
export interface IconHeartProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Icon/Home" (node 14:7)
export interface IconHomeProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Icon/Orders" (node 14:23)
export interface IconOrdersProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Icon/Profile" (node 14:27)
export interface IconProfileProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Icon/Star" (node 14:37)
export interface IconStarProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Icons" (node 14:2)
export interface IconsProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "InputField" (node 20:124)
export interface InputFieldProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "default" | "focused" | "error";
  /** Text content; defaults to "Field Label". */
  text1?: string;
  /** Text content; defaults to "Placeholder text". */
  text2?: string;
  /** Text content; defaults to "Please enter a valid value — check and try again.". */
  text3?: string;
}

// figma layer: "NavTab" (node 17:90)
export interface NavTabProps {
  className?: string;
  style?: React.CSSProperties;
  tab?: "home" | "categories" | "cart" | "orders" | "profile";
  state?: "active" | "inactive";
  /** Text content; defaults to "Home". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: "PaymentMethodRow" (node 21:149)
export interface PaymentMethodRowProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "default" | "selected";
  /** Text content; defaults to "Payment method". */
  text1?: string;
  /** Text content; defaults to "Detail · Expiry or note". */
  text2?: string;
  /** Text content; defaults to "Change". */
  text3?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: "PriceRow" (node 20:134)
export interface PriceRowProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "default" | "savings" | "total";
  /** Text content; defaults to "Subtotal". */
  text1?: string;
  /** Text content; defaults to "AED 498". */
  text2?: string;
}

// figma layer: "ProductCard" (node 18:120)
export interface ProductCardProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "default" | "discount" | "sold out" | "skeleton";
  /** Text content; defaults to "BRAND NAME". */
  text1?: string;
  /** Text content; defaults to "Product title that can wrap to two lines gracefully". */
  text2?: string;
  /** Text content; defaults to "4.8 (2.3k)". */
  text3?: string;
  /** Text content; defaults to "AED 249". */
  text4?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
}

// figma layer: "search-section" (node 516:4260)
export interface SearchSectionProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "default" | "variant2";
  /** Text content; defaults to "Perfumes". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}

declare const Badge: React.FC<BadgeProps>;
declare const Button: React.FC<ButtonProps>;
declare const IconCard: React.FC<IconCardProps>;
declare const IconCart: React.FC<IconCartProps>;
declare const IconCategories: React.FC<IconCategoriesProps>;
declare const IconClose: React.FC<IconCloseProps>;
declare const IconHeart: React.FC<IconHeartProps>;
declare const IconHome: React.FC<IconHomeProps>;
declare const IconOrders: React.FC<IconOrdersProps>;
declare const IconProfile: React.FC<IconProfileProps>;
declare const IconStar: React.FC<IconStarProps>;
declare const Icons: React.FC<IconsProps>;
declare const InputField: React.FC<InputFieldProps>;
declare const NavTab: React.FC<NavTabProps>;
declare const PaymentMethodRow: React.FC<PaymentMethodRowProps>;
declare const PriceRow: React.FC<PriceRowProps>;
declare const ProductCard: React.FC<ProductCardProps>;
declare const SearchSection: React.FC<SearchSectionProps>;
declare global {
  interface Window {
    Badge: React.FC<BadgeProps>;
    Button: React.FC<ButtonProps>;
    IconCard: React.FC<IconCardProps>;
    IconCart: React.FC<IconCartProps>;
    IconCategories: React.FC<IconCategoriesProps>;
    IconClose: React.FC<IconCloseProps>;
    IconHeart: React.FC<IconHeartProps>;
    IconHome: React.FC<IconHomeProps>;
    IconOrders: React.FC<IconOrdersProps>;
    IconProfile: React.FC<IconProfileProps>;
    IconStar: React.FC<IconStarProps>;
    Icons: React.FC<IconsProps>;
    InputField: React.FC<InputFieldProps>;
    NavTab: React.FC<NavTabProps>;
    PaymentMethodRow: React.FC<PaymentMethodRowProps>;
    PriceRow: React.FC<PriceRowProps>;
    ProductCard: React.FC<ProductCardProps>;
    SearchSection: React.FC<SearchSectionProps>;
  }
}
