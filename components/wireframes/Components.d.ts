// Components.d.ts — the complete catalog of the 13 component(s) in
// Components.bundle.js. READ THIS FILE BEFORE USING THE BUNDLE: component
// names are derived from Figma layer names (sanitized to PascalCase,
// deduplicated) and may differ from what the design calls them — the
// "figma layer" comment above each interface maps them back.
// After the bundle <script> loads, every component is a window global
// (e.g. window.CartScreen) and usable directly in JSX.
import * as React from 'react';

// figma layer: "Cart Screen" (node 435:7533)
export interface CartScreenProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "compare-perfumes-vertical" (node 444:1057)
export interface ComparePerfumesVerticalProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "HomeIndicator" (node 17:28)
export interface HomeIndicatorProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Order Summary Screen" (node 435:7742)
export interface OrderSummaryScreenProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Payment Screen" (node 435:7968)
export interface PaymentScreenProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Plus" (node 415:2043)
export interface PlusProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Screen 1 - Home" (node 435:6252)
export interface Screen1HomeProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Screen_2_MyOrders" (node 435:8196)
export interface Screen2MyOrdersProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Screen 6 - Category Detail" (node 435:6639)
export interface Screen6CategoryDetailProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Screen 7 - Filtered Results" (node 435:6740)
export interface Screen7FilteredResultsProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Shipping Address Screen" (node 435:7796)
export interface ShippingAddressScreenProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Wishlist Screen" (node 435:7360)
export interface WishlistScreenProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Wislist Icon" (node 271:5248)
export interface WislistIconProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "unclick" | "clicked";
}

declare const CartScreen: React.FC<CartScreenProps>;
declare const ComparePerfumesVertical: React.FC<ComparePerfumesVerticalProps>;
declare const HomeIndicator: React.FC<HomeIndicatorProps>;
declare const OrderSummaryScreen: React.FC<OrderSummaryScreenProps>;
declare const PaymentScreen: React.FC<PaymentScreenProps>;
declare const Plus: React.FC<PlusProps>;
declare const Screen1Home: React.FC<Screen1HomeProps>;
declare const Screen2MyOrders: React.FC<Screen2MyOrdersProps>;
declare const Screen6CategoryDetail: React.FC<Screen6CategoryDetailProps>;
declare const Screen7FilteredResults: React.FC<Screen7FilteredResultsProps>;
declare const ShippingAddressScreen: React.FC<ShippingAddressScreenProps>;
declare const WishlistScreen: React.FC<WishlistScreenProps>;
declare const WislistIcon: React.FC<WislistIconProps>;
declare global {
  interface Window {
    CartScreen: React.FC<CartScreenProps>;
    ComparePerfumesVertical: React.FC<ComparePerfumesVerticalProps>;
    HomeIndicator: React.FC<HomeIndicatorProps>;
    OrderSummaryScreen: React.FC<OrderSummaryScreenProps>;
    PaymentScreen: React.FC<PaymentScreenProps>;
    Plus: React.FC<PlusProps>;
    Screen1Home: React.FC<Screen1HomeProps>;
    Screen2MyOrders: React.FC<Screen2MyOrdersProps>;
    Screen6CategoryDetail: React.FC<Screen6CategoryDetailProps>;
    Screen7FilteredResults: React.FC<Screen7FilteredResultsProps>;
    ShippingAddressScreen: React.FC<ShippingAddressScreenProps>;
    WishlistScreen: React.FC<WishlistScreenProps>;
    WislistIcon: React.FC<WislistIconProps>;
  }
}
