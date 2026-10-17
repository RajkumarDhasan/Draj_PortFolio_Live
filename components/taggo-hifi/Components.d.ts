// Components.d.ts — the complete catalog of the 14 component(s) in
// Components.bundle.js. READ THIS FILE BEFORE USING THE BUNDLE: component
// names are derived from Figma layer names (sanitized to PascalCase,
// deduplicated) and may differ from what the design calls them — the
// "figma layer" comment above each interface maps them back.
// After the bundle <script> loads, every component is a window global
// (e.g. window.AIChat) and usable directly in JSX.
import * as React from 'react';

// figma layer: "AI Chat" (node 8085:31503)
export interface AIChatProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "AI Chat -> Suggestions" (node 8085:31630)
export interface AIChatSuggestionsProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "aedIcon" (node 2940:24715)
export interface AedIconProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Container" (node 3213:23461)
export interface Container17Props {
  className?: string;
  style?: React.CSSProperties;
  property1?: "default" | "variant2" | "variant3" | "variant4" | "variant5" | "variant6";
  /** Text content; defaults to "Terrible". */
  text1?: string;
}

// figma layer: "Driver Assigned" (node 8069:25302)
export interface DriverAssignedProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "home ENG " (node 8072:29331)
export interface HomeENGProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Home Indicator" (node 7621:27202)
export interface HomeIndicator7Props {
  className?: string;
  style?: React.CSSProperties;
  device?: "iPad" | "iPhone";
  orientation?: "portrait" | "landscape";
  showHomeIndicator?: boolean;
}

// figma layer: "keyboard" (node 8010:24773)
export interface KeyboardProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "location confirmation" (node 8069:25482)
export interface LocationConfirmationProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Ride Completed" (node 8169:34390)
export interface RideCompletedProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "searching driver" (node 8314:26539)
export interface SearchingDriverProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Trip Details" (node 8169:34753)
export interface TripDetailsProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "User" (node 2507:19989)
export interface User3Props {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Vehicle & payment selection" (node 8069:25049)
export interface VehiclePaymentSelectionProps {
  className?: string;
  style?: React.CSSProperties;
}

declare const AIChat: React.FC<AIChatProps>;
declare const AIChatSuggestions: React.FC<AIChatSuggestionsProps>;
declare const AedIcon: React.FC<AedIconProps>;
declare const Container17: React.FC<Container17Props>;
declare const DriverAssigned: React.FC<DriverAssignedProps>;
declare const HomeENG: React.FC<HomeENGProps>;
declare const HomeIndicator7: React.FC<HomeIndicator7Props>;
declare const Keyboard: React.FC<KeyboardProps>;
declare const LocationConfirmation: React.FC<LocationConfirmationProps>;
declare const RideCompleted: React.FC<RideCompletedProps>;
declare const SearchingDriver: React.FC<SearchingDriverProps>;
declare const TripDetails: React.FC<TripDetailsProps>;
declare const User3: React.FC<User3Props>;
declare const VehiclePaymentSelection: React.FC<VehiclePaymentSelectionProps>;
declare global {
  interface Window {
    AIChat: React.FC<AIChatProps>;
    AIChatSuggestions: React.FC<AIChatSuggestionsProps>;
    AedIcon: React.FC<AedIconProps>;
    Container17: React.FC<Container17Props>;
    DriverAssigned: React.FC<DriverAssignedProps>;
    HomeENG: React.FC<HomeENGProps>;
    HomeIndicator7: React.FC<HomeIndicator7Props>;
    Keyboard: React.FC<KeyboardProps>;
    LocationConfirmation: React.FC<LocationConfirmationProps>;
    RideCompleted: React.FC<RideCompletedProps>;
    SearchingDriver: React.FC<SearchingDriverProps>;
    TripDetails: React.FC<TripDetailsProps>;
    User3: React.FC<User3Props>;
    VehiclePaymentSelection: React.FC<VehiclePaymentSelectionProps>;
  }
}
