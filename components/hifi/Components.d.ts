// Components.d.ts — the complete catalog of the 25 component(s) in
// Components.bundle.js. READ THIS FILE BEFORE USING THE BUNDLE: component
// names are derived from Figma layer names (sanitized to PascalCase,
// deduplicated) and may differ from what the design calls them — the
// "figma layer" comment above each interface maps them back.
// After the bundle <script> loads, every component is a window global
// (e.g. window.AIPickedForYou) and usable directly in JSX.
import * as React from 'react';

// figma layer: " AI Picked For You" (node 570:6535)
export interface AIPickedForYouProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "AI Voice Assistant" (node 516:10476)
export interface AIVoiceAssistantProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Badge" (node 16:12)
export interface BadgeProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "discount" | "new" | "bestseller" | "ai pick" | "sold out";
  /** Text content; defaults to "-30%". */
  text1?: string;
}

// figma layer: "Bottom-Floating-Nav" (node 262:4547)
export interface BottomFloatingNavProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "Brands". */
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

// figma layer: "Checkout" (node 598:7754)
export interface CheckoutProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Edit 3" (node 596:5477)
export interface Edit3Props {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Gift Wrapping" (node 570:10988)
export interface GiftWrappingProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "HomeIndicator" (node 17:28)
export interface HomeIndicatorProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Icon/Card" (node 14:85)
export interface IconCardProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Icon/Check" (node 14:70)
export interface IconCheckProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Icon/Pin" (node 14:89)
export interface IconPinProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Makeup Artist Profile" (node 637:17433)
export interface MakeupArtistProfileProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "01 · Order Tracking" (node 615:11913)
export interface OrderTracking01Props {
  className?: string;
  style?: React.CSSProperties;
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

// figma layer: "ProductGallery" (node 545:4883)
export interface ProductGalleryProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "default";
}

// figma layer: "Product Gallery" (node 570:6030)
export interface ProductGallery3Props {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Product -> Price Compare" (node 570:10741)
export interface ProductPriceCompareProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Screen 1: AI Gift Finder" (node 652:8898)
export interface Screen1AIGiftFinderProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Screen_1_LoyaltyProgram" (node 625:9289)
export interface Screen1LoyaltyProgramProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "screen-dashboard" (node 710:15333)
export interface ScreenDashboardProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Splash" (node 449:10492)
export interface SplashProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Visual Search Camera" (node 516:10509)
export interface VisualSearchCameraProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Wislist Icon" (node 271:5248)
export interface WislistIconProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "unclick" | "clicked";
}

declare const AIPickedForYou: React.FC<AIPickedForYouProps>;
declare const AIVoiceAssistant: React.FC<AIVoiceAssistantProps>;
declare const Badge: React.FC<BadgeProps>;
declare const BottomFloatingNav: React.FC<BottomFloatingNavProps>;
declare const Button: React.FC<ButtonProps>;
declare const Checkout: React.FC<CheckoutProps>;
declare const Edit3: React.FC<Edit3Props>;
declare const GiftWrapping: React.FC<GiftWrappingProps>;
declare const HomeIndicator: React.FC<HomeIndicatorProps>;
declare const IconCard: React.FC<IconCardProps>;
declare const IconCheck: React.FC<IconCheckProps>;
declare const IconPin: React.FC<IconPinProps>;
declare const MakeupArtistProfile: React.FC<MakeupArtistProfileProps>;
declare const OrderTracking01: React.FC<OrderTracking01Props>;
declare const PaymentMethodRow: React.FC<PaymentMethodRowProps>;
declare const PriceRow: React.FC<PriceRowProps>;
declare const ProductGallery: React.FC<ProductGalleryProps>;
declare const ProductGallery3: React.FC<ProductGallery3Props>;
declare const ProductPriceCompare: React.FC<ProductPriceCompareProps>;
declare const Screen1AIGiftFinder: React.FC<Screen1AIGiftFinderProps>;
declare const Screen1LoyaltyProgram: React.FC<Screen1LoyaltyProgramProps>;
declare const ScreenDashboard: React.FC<ScreenDashboardProps>;
declare const Splash: React.FC<SplashProps>;
declare const VisualSearchCamera: React.FC<VisualSearchCameraProps>;
declare const WislistIcon: React.FC<WislistIconProps>;
declare global {
  interface Window {
    AIPickedForYou: React.FC<AIPickedForYouProps>;
    AIVoiceAssistant: React.FC<AIVoiceAssistantProps>;
    Badge: React.FC<BadgeProps>;
    BottomFloatingNav: React.FC<BottomFloatingNavProps>;
    Button: React.FC<ButtonProps>;
    Checkout: React.FC<CheckoutProps>;
    Edit3: React.FC<Edit3Props>;
    GiftWrapping: React.FC<GiftWrappingProps>;
    HomeIndicator: React.FC<HomeIndicatorProps>;
    IconCard: React.FC<IconCardProps>;
    IconCheck: React.FC<IconCheckProps>;
    IconPin: React.FC<IconPinProps>;
    MakeupArtistProfile: React.FC<MakeupArtistProfileProps>;
    OrderTracking01: React.FC<OrderTracking01Props>;
    PaymentMethodRow: React.FC<PaymentMethodRowProps>;
    PriceRow: React.FC<PriceRowProps>;
    ProductGallery: React.FC<ProductGalleryProps>;
    ProductGallery3: React.FC<ProductGallery3Props>;
    ProductPriceCompare: React.FC<ProductPriceCompareProps>;
    Screen1AIGiftFinder: React.FC<Screen1AIGiftFinderProps>;
    Screen1LoyaltyProgram: React.FC<Screen1LoyaltyProgramProps>;
    ScreenDashboard: React.FC<ScreenDashboardProps>;
    Splash: React.FC<SplashProps>;
    VisualSearchCamera: React.FC<VisualSearchCameraProps>;
    WislistIcon: React.FC<WislistIconProps>;
  }
}
