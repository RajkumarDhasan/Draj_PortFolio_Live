// Components bundle — 25 component(s) materialized from a .fig as one
// self-contained file: no imports/exports; every component is assigned to window below.
// Design tokens / typography still ship separately (fig-tokens.css / fig-typography.css).

// figma node: 15:26 Button (12 variants)
const __venc_Button = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_Button = p => "type=" + __venc_Button(p.type) + '|' + "size=" + __venc_Button(p.size) + '|' + "state=" + __venc_Button(p.state);
function Button(_p = {}) {
  const props = {
    ..._p,
    type: _p.type ?? "primary",
    size: _p.size ?? "lg",
    state: _p.state ?? "default"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 200,
      height: 52,
      borderRadius: 999,
      backgroundColor: "var(--bg-inverse)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--text-inverse)",
      flexShrink: 0
    }
  }, props.text1 ?? "Button Label"));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 200,
      height: 52,
      borderRadius: 999,
      backgroundColor: "var(--neutral-100)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--text-tertiary)",
      flexShrink: 0
    }
  }, props.text1 ?? "Button Label"));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 200,
      height: 52,
      borderRadius: 999,
      backgroundColor: "var(--bg-default)",
      boxShadow: "inset 0 0 0 1px var(--border-strong)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--text-primary)",
      flexShrink: 0
    }
  }, props.text1 ?? "Button Label"));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 200,
      height: 52,
      borderRadius: 999,
      backgroundColor: "var(--bg-default)",
      boxShadow: "inset 0 0 0 1px var(--border-muted)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--text-tertiary)",
      flexShrink: 0
    }
  }, props.text1 ?? "Button Label"));
  const __body4 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 200,
      height: 52,
      borderRadius: 999,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--text-primary)",
      flexShrink: 0
    }
  }, props.text1 ?? "Button Label"));
  const __body5 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 200,
      height: 52,
      borderRadius: 999,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--text-tertiary)",
      flexShrink: 0
    }
  }, props.text1 ?? "Button Label"));
  const __body6 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 160,
      height: 44,
      borderRadius: 999,
      backgroundColor: "var(--bg-inverse)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--text-inverse)",
      flexShrink: 0
    }
  }, props.text1 ?? "Button Label"));
  const __body7 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 160,
      height: 44,
      borderRadius: 999,
      backgroundColor: "var(--neutral-100)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--text-tertiary)",
      flexShrink: 0
    }
  }, props.text1 ?? "Button Label"));
  const __body8 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 160,
      height: 44,
      borderRadius: 999,
      backgroundColor: "var(--bg-default)",
      boxShadow: "inset 0 0 0 1px var(--border-strong)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--text-primary)",
      flexShrink: 0
    }
  }, props.text1 ?? "Button Label"));
  const __body9 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 160,
      height: 44,
      borderRadius: 999,
      backgroundColor: "var(--bg-default)",
      boxShadow: "inset 0 0 0 1px var(--border-muted)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--text-tertiary)",
      flexShrink: 0
    }
  }, props.text1 ?? "Button Label"));
  const __body10 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 160,
      height: 44,
      borderRadius: 999,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--text-primary)",
      flexShrink: 0
    }
  }, props.text1 ?? "Button Label"));
  const __body11 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 160,
      height: 44,
      borderRadius: 999,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--text-tertiary)",
      flexShrink: 0
    }
  }, props.text1 ?? "Button Label"));
  const __impls = {
    // figma: Type=Primary, Size=Large, State=Default
    "type=primary|size=lg|state=default": __body0,
    // figma: Type=Primary, Size=Large, State=Disabled
    "type=primary|size=lg|state=disabled": __body1,
    // figma: Type=Secondary, Size=Large, State=Default
    "type=secondary|size=lg|state=default": __body2,
    // figma: Type=Secondary, Size=Large, State=Disabled
    "type=secondary|size=lg|state=disabled": __body3,
    // figma: Type=Ghost, Size=Large, State=Default
    "type=ghost|size=lg|state=default": __body4,
    // figma: Type=Ghost, Size=Large, State=Disabled
    "type=ghost|size=lg|state=disabled": __body5,
    // figma: Type=Primary, Size=Medium, State=Default
    "type=primary|size=md|state=default": __body6,
    // figma: Type=Primary, Size=Medium, State=Disabled
    "type=primary|size=md|state=disabled": __body7,
    // figma: Type=Secondary, Size=Medium, State=Default
    "type=secondary|size=md|state=default": __body8,
    // figma: Type=Secondary, Size=Medium, State=Disabled
    "type=secondary|size=md|state=disabled": __body9,
    // figma: Type=Ghost, Size=Medium, State=Default
    "type=ghost|size=md|state=default": __body10,
    // figma: Type=Ghost, Size=Medium, State=Disabled
    "type=ghost|size=md|state=disabled": __body11
  };
  return (__impls[__vkey_Button(props)] ?? __body0)();
}

// figma node: 449:10492 Splash
function Splash(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 440,
      height: 956,
      overflow: "hidden",
      borderRadius: 32,
      background: "radial-gradient(220px 478px at 50.00% 50.00%, rgb(243,161,149) 0.00%, rgb(226,126,114) 100.00%)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 44,
      display: "flex",
      flexDirection: "row",
      padding: "0px 24px 0px 24px",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(0,0,0)",
      flexShrink: 0
    }
  }, "9:41"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 18,
      height: 18,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 17.280,
    height: 11.005,
    viewBox: "0 0 17.280 11.005",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 3.947,
      width: 17.28,
      height: 11.005,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 17.28 1.032 C 17.28 0.462 16.85 0 16.32 0 L 15.36 0 C 14.83 0 14.4 0.462 14.4 1.032 L 14.4 9.973 C 14.4 10.543 14.83 11.005 15.36 11.005 L 16.32 11.005 C 16.85 11.005 17.28 10.543 17.28 9.973 L 17.28 1.032 Z M 10.589 2.201 L 11.549 2.201 C 12.08 2.201 12.509 2.674 12.509 3.258 L 12.509 9.949 C 12.509 10.532 12.08 11.005 11.549 11.005 L 10.589 11.005 C 10.059 11.005 9.629 10.532 9.629 9.949 L 9.629 3.258 C 9.629 2.674 10.059 2.201 10.589 2.201 Z M 6.691 4.586 L 5.731 4.586 C 5.201 4.586 4.771 5.065 4.771 5.655 L 4.771 9.935 C 4.771 10.526 5.201 11.005 5.731 11.005 L 6.691 11.005 C 7.221 11.005 7.651 10.526 7.651 9.935 L 7.651 5.655 C 7.651 5.065 7.221 4.586 6.691 4.586 Z M 1.92 6.787 L 0.96 6.787 C 0.43 6.787 0 7.259 0 7.841 L 0 9.951 C 0 10.533 0.43 11.005 0.96 11.005 L 1.92 11.005 C 2.45 11.005 2.88 10.533 2.88 9.951 L 2.88 7.841 C 2.88 7.259 2.45 6.787 1.92 6.787 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 18,
      height: 18,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 15.428,
    height: 11.095,
    viewBox: "0 0 15.428 11.095",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.9,
      top: 3.002,
      width: 15.428,
      height: 11.095,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7.714 2.22 C 9.953 2.22 12.105 3.05 13.728 4.538 C 13.85 4.653 14.045 4.651 14.165 4.535 L 15.333 3.397 C 15.394 3.338 15.428 3.258 15.428 3.175 C 15.427 3.091 15.392 3.011 15.33 2.953 C 11.073 -0.984 4.355 -0.984 0.097 2.953 C 0.036 3.011 0.001 3.091 0 3.175 C -0.001 3.258 0.033 3.338 0.094 3.397 L 1.262 4.535 C 1.383 4.651 1.578 4.653 1.7 4.538 C 3.323 3.05 5.476 2.22 7.714 2.22 Z M 7.711 6.018 C 8.933 6.018 10.111 6.478 11.016 7.31 C 11.139 7.428 11.332 7.426 11.451 7.304 L 12.61 6.117 C 12.671 6.055 12.704 5.97 12.704 5.882 C 12.703 5.795 12.667 5.711 12.605 5.65 C 9.847 3.048 5.577 3.048 2.82 5.65 C 2.757 5.711 2.722 5.795 2.721 5.882 C 2.72 5.97 2.754 6.055 2.815 6.117 L 3.974 7.304 C 4.093 7.426 4.286 7.428 4.408 7.31 C 5.313 6.479 6.49 6.018 7.711 6.018 Z M 9.983 8.532 C 9.985 8.627 9.951 8.718 9.891 8.785 L 7.932 10.994 C 7.875 11.059 7.796 11.095 7.715 11.095 C 7.633 11.095 7.555 11.059 7.497 10.994 L 5.538 8.785 C 5.477 8.718 5.444 8.627 5.446 8.532 C 5.448 8.437 5.484 8.347 5.547 8.284 C 6.798 7.101 8.631 7.101 9.882 8.284 C 9.945 8.347 9.981 8.437 9.983 8.532 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 16,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 23.424,
    height: 10.400,
    viewBox: "0 0 23.424 10.400",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 3.2,
      width: 23.424,
      height: 10.4,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 15.857 0 C 17.615 0 18.494 0 19.184 0.274 C 20.063 0.623 20.762 1.275 21.135 2.095 C 21.428 2.739 21.429 3.56 21.429 5.2 C 21.429 6.84 21.428 7.661 21.135 8.305 L 21.061 8.457 C 20.674 9.205 20.008 9.799 19.184 10.126 L 19.052 10.174 C 18.38 10.4 17.505 10.4 15.857 10.4 L 5.571 10.4 L 4.407 10.396 C 3.386 10.383 2.762 10.331 2.244 10.126 C 1.421 9.799 0.755 9.205 0.367 8.457 L 0.294 8.305 C 0 7.661 0 6.84 0 5.2 C 0 3.662 0 2.845 0.242 2.218 L 0.294 2.095 C 0.644 1.326 1.28 0.705 2.082 0.343 L 2.244 0.274 C 2.762 0.069 3.386 0.017 4.407 0.004 L 5.571 0 L 15.857 0 Z M 5.571 0.8 C 4.681 0.8 4.056 0.8 3.568 0.832 C 3.087 0.863 2.801 0.922 2.58 1.01 C 1.906 1.277 1.369 1.779 1.082 2.408 C 0.988 2.614 0.925 2.881 0.891 3.33 C 0.857 3.786 0.857 4.369 0.857 5.2 C 0.857 6.031 0.857 6.614 0.891 7.07 C 0.925 7.519 0.988 7.786 1.082 7.992 C 1.369 8.621 1.906 9.123 2.58 9.39 C 2.801 9.478 3.087 9.537 3.568 9.568 C 4.056 9.6 4.681 9.6 5.571 9.6 L 15.857 9.6 C 16.748 9.6 17.372 9.6 17.861 9.568 C 18.342 9.537 18.628 9.478 18.849 9.39 C 19.523 9.123 20.06 8.621 20.346 7.992 C 20.44 7.786 20.504 7.519 20.537 7.07 C 20.571 6.614 20.571 6.031 20.571 5.2 C 20.571 4.369 20.571 3.786 20.537 3.33 C 20.504 2.881 20.44 2.614 20.346 2.408 C 20.06 1.779 19.523 1.277 18.849 1.01 C 18.628 0.922 18.342 0.863 17.861 0.832 C 17.372 0.8 16.748 0.8 15.857 0.8 L 5.571 0.8 Z M 16.286 1.6 C 17.486 1.6 18.086 1.6 18.544 1.818 C 18.947 2.01 19.275 2.316 19.481 2.692 C 19.714 3.12 19.714 3.68 19.714 4.8 L 19.714 5.6 C 19.714 6.72 19.714 7.28 19.481 7.708 C 19.275 8.084 18.947 8.39 18.544 8.582 C 18.086 8.8 17.486 8.8 16.286 8.8 L 5.143 8.8 C 3.943 8.8 3.343 8.8 2.884 8.582 C 2.481 8.39 2.153 8.084 1.948 7.708 C 1.714 7.28 1.714 6.72 1.714 5.6 L 1.714 4.8 C 1.714 3.68 1.714 3.12 1.948 2.692 C 2.153 2.316 2.481 2.01 2.884 1.818 C 3.343 1.6 3.943 1.6 5.143 1.6 L 16.286 1.6 Z M 22.286 3.6 C 22.975 3.876 23.424 4.519 23.424 5.23 C 23.424 5.942 22.975 6.584 22.286 6.86 L 22.286 3.6 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 250,
      height: 322.267,
      overflow: "hidden",
      boxShadow: "0px 4px 4px 0px rgba(0,0,0,0.1)",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 250,
    height: 250.000,
    viewBox: "0 0 250 250.000",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 250,
      height: 250
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 82.895 C 0 37.113 37.113 0 82.895 0 L 167.105 0 C 212.887 0 250 37.113 250 82.895 L 250 167.105 C 250 212.887 212.887 250 167.105 250 L 82.895 250 C 37.113 250 0 212.887 0 167.105 L 0 82.895 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 259.279,
      width: 250,
      height: 62.988,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 250,
    height: 62.988,
    viewBox: "0 0 250 62.988",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 250,
      height: 62.988,
      color: "var(--icon-on-brand)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 194.929 10.072 L 208.015 10.068 C 208.055 10.068 208.093 10.086 208.121 10.118 C 208.149 10.149 208.165 10.192 208.165 10.236 L 208.173 12.635 C 208.173 12.657 208.17 12.679 208.162 12.7 C 208.155 12.721 208.144 12.74 208.13 12.756 C 208.116 12.772 208.1 12.784 208.082 12.793 C 208.063 12.801 208.043 12.806 208.023 12.806 L 194.95 12.8 C 194.852 12.8 194.803 12.855 194.803 12.966 C 194.797 25.337 194.797 37.72 194.803 50.118 C 194.805 52.374 195.063 56.446 196.236 58.34 C 198.562 62.093 206.233 59.567 209.204 58.047 L 209.241 58.037 L 209.279 58.045 L 209.311 58.07 L 209.331 58.107 L 210.111 60.501 C 210.126 60.548 210.124 60.601 210.105 60.647 C 210.087 60.693 210.052 60.729 210.009 60.747 C 205.682 62.635 201.234 63.331 196.662 62.832 C 193.009 62.433 189.489 60.914 188.048 56.731 C 187.361 54.739 187.017 52.412 187.014 49.75 C 187.004 37.481 187.001 25.229 187.004 12.993 C 187.004 12.941 186.986 12.891 186.954 12.855 C 186.921 12.818 186.877 12.797 186.831 12.797 L 185.331 12.804 C 185.308 12.804 185.285 12.799 185.263 12.789 C 185.241 12.778 185.222 12.763 185.205 12.744 C 185.188 12.725 185.175 12.703 185.167 12.678 C 185.158 12.654 185.153 12.628 185.153 12.6 L 185.167 10.182 C 185.168 10.151 185.179 10.121 185.199 10.099 C 185.218 10.078 185.245 10.066 185.273 10.066 L 186.839 10.07 C 186.86 10.07 186.882 10.065 186.902 10.056 C 186.921 10.047 186.939 10.033 186.954 10.017 C 186.969 10 186.981 9.98 186.99 9.957 C 186.998 9.936 187.002 9.912 187.002 9.888 L 187.008 0.15 C 187.008 0.062 187.048 0.018 187.126 0.018 L 194.662 0 C 194.699 0 194.734 0.016 194.761 0.046 C 194.786 0.076 194.801 0.116 194.801 0.158 L 194.801 9.928 C 194.801 9.966 194.815 10.003 194.839 10.031 C 194.863 10.057 194.895 10.072 194.929 10.072 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 7.946 32.161 C 7.919 32.161 7.893 32.172 7.873 32.193 C 7.854 32.213 7.841 32.242 7.839 32.273 C 7.394 37.579 7.664 42.805 8.651 47.952 C 9.672 53.292 12.796 58.462 17.709 59.838 C 18.712 60.118 20.047 60.249 21.716 60.231 C 26.809 60.176 31.771 59.088 36.603 56.967 C 36.625 56.958 36.64 56.966 36.65 56.988 L 37.465 59.202 C 37.476 59.231 37.482 59.264 37.482 59.295 C 37.482 59.328 37.476 59.36 37.465 59.389 C 37.454 59.419 37.438 59.447 37.417 59.469 C 37.397 59.492 37.373 59.509 37.346 59.521 C 32.269 61.784 27.011 62.928 21.572 62.951 C 19.917 62.958 18.572 62.901 17.538 62.78 C 11.678 62.091 6.188 58.59 3.141 52.822 C 1.508 49.732 0.583 45.907 0.246 42.295 C -0.295 36.515 0 30.442 1.691 24.963 C 5.072 14.015 14.385 8.353 24.291 9.82 C 28.216 10.404 31.573 12.209 34.361 15.238 C 38.408 19.636 39.255 26.027 39.078 32.054 C 39.077 32.084 39.065 32.112 39.046 32.133 C 39.027 32.153 39.001 32.165 38.975 32.165 L 7.946 32.161 Z M 24.089 12.913 C 20.216 11.391 16.353 12.835 13.523 16.096 C 10.417 19.674 8.796 24.451 8.156 29.334 L 8.158 29.379 L 8.177 29.419 L 8.209 29.447 L 8.249 29.457 L 31.309 29.459 L 31.359 29.448 L 31.402 29.414 L 31.429 29.365 L 31.438 29.308 C 31.317 23.259 29.928 15.211 24.089 12.913 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 98.416 32.159 C 98.373 32.159 98.332 32.177 98.301 32.21 C 98.269 32.242 98.25 32.286 98.246 32.335 C 97.907 36.923 98.056 41.434 98.694 45.869 C 99.407 50.83 101.298 55.517 104.889 58.26 C 106.402 59.416 108.13 60.044 110.073 60.145 C 115.882 60.443 121.535 59.385 127.032 56.971 L 127.057 56.971 L 127.075 56.989 L 127.894 59.188 C 127.905 59.221 127.911 59.254 127.911 59.289 C 127.911 59.323 127.905 59.358 127.893 59.389 C 127.881 59.421 127.864 59.449 127.843 59.474 C 127.82 59.497 127.795 59.516 127.767 59.529 C 121.495 62.308 114.974 63.397 108.204 62.796 C 104.971 62.511 101.919 61.314 99.049 59.209 C 93.825 55.382 91.385 49.353 90.701 42.533 C 89.821 33.764 90.804 23.899 96.28 17.069 C 99.485 13.072 103.462 10.673 108.208 9.869 C 111.801 9.262 115.553 9.548 118.945 11.033 C 124.458 13.447 127.834 17.969 129.075 24.597 C 129.511 26.918 129.555 29.56 129.519 32.027 C 129.517 32.118 129.476 32.164 129.395 32.164 L 98.416 32.159 Z M 121.855 29.316 C 121.784 22.05 119.487 12.313 111.424 12.318 C 103.695 12.322 99.453 22.007 98.599 29.362 L 98.602 29.397 L 98.617 29.427 L 98.642 29.448 L 98.672 29.455 L 121.731 29.458 L 121.779 29.447 L 121.82 29.416 L 121.846 29.37 L 121.855 29.316 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 143.618 18.237 C 145.209 15.646 147.274 13.494 149.812 11.78 C 152.41 10.027 155.019 9.459 157.977 9.589 C 160.711 9.712 163.436 10.004 165.937 11.074 C 170.157 12.882 171.81 16.831 172.087 21.74 C 172.1 21.992 172.108 23.113 172.109 25.101 C 172.113 35.114 172.127 45.127 172.149 55.14 C 172.153 57.341 173.108 59.814 175.364 59.816 C 176.487 59.818 177.609 59.819 178.731 59.819 C 178.799 59.819 178.832 59.857 178.832 59.935 L 178.842 62.392 C 178.842 62.427 178.83 62.46 178.808 62.485 C 178.787 62.51 178.758 62.524 178.727 62.524 C 175.159 62.571 172.778 62.571 171.584 62.52 C 168.427 62.386 164.863 60.204 164.401 56.334 C 164.309 55.575 164.264 54.91 164.264 54.341 C 164.268 43.741 164.266 33.141 164.26 22.539 C 164.257 19.59 163.965 15.568 161.714 13.641 C 161.145 13.155 160.382 12.805 159.427 12.592 C 153.378 11.241 148.781 14.901 145.339 20.113 C 144.096 21.993 143.368 23.743 143.368 26.094 C 143.366 38.191 143.365 50.289 143.365 62.388 C 143.365 62.408 143.361 62.429 143.355 62.448 C 143.348 62.468 143.336 62.485 143.324 62.5 C 143.31 62.514 143.295 62.526 143.277 62.534 C 143.261 62.542 143.242 62.545 143.224 62.545 L 135.804 62.543 C 135.643 62.542 135.562 62.45 135.562 62.269 L 135.562 10.075 C 135.562 10.049 135.571 10.024 135.588 10.005 C 135.605 9.987 135.627 9.976 135.651 9.976 L 143.236 9.967 C 143.27 9.967 143.303 9.983 143.328 10.011 C 143.352 10.038 143.365 10.075 143.365 10.114 L 143.361 18.146 C 143.361 18.483 143.446 18.514 143.618 18.237 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 231.277 28.481 C 235.033 30.234 238.769 32.089 242.374 34.213 C 247.173 37.046 249.831 41.447 249.995 47.777 C 250.193 55.517 244.802 60.786 238.563 62.231 C 234.88 63.083 231.155 63.21 227.387 62.612 C 223.833 62.046 220.331 60.515 217.749 57.633 C 217.729 57.611 217.714 57.583 217.702 57.554 C 217.691 57.525 217.686 57.494 217.685 57.462 C 217.685 57.429 217.69 57.399 217.701 57.369 C 217.712 57.34 217.728 57.313 217.748 57.291 L 219.219 55.607 C 219.234 55.589 219.253 55.574 219.274 55.564 C 219.295 55.554 219.317 55.55 219.34 55.55 C 219.363 55.55 219.385 55.555 219.406 55.565 C 219.426 55.575 219.445 55.591 219.461 55.609 C 222.889 59.641 230.607 61.252 235.312 59.607 C 240.638 57.745 243.461 52.208 241.808 46.016 C 240.812 42.285 237.306 39.521 234.246 38.111 C 231.422 36.81 228.601 35.505 225.779 34.195 C 224.539 33.62 223.212 32.672 221.796 31.35 C 218.74 28.498 217.215 25.282 217.608 20.686 C 218.072 15.228 220.755 12.348 225.134 10.904 C 229.898 9.332 234.753 9.15 239.7 10.358 C 241.954 10.909 244.009 11.935 245.862 13.436 C 245.89 13.46 245.91 13.495 245.916 13.535 C 245.922 13.575 245.914 13.616 245.894 13.649 L 244.573 15.817 L 244.541 15.851 L 244.499 15.867 L 244.456 15.862 L 244.418 15.838 C 243.752 15.135 243.078 14.616 242.395 14.281 C 239.093 12.659 235.555 12.043 231.786 12.433 C 228.644 12.759 226.362 14.733 225.508 18.158 C 224.243 23.229 227.531 26.733 231.277 28.481 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 66.921 50.348 L 66.944 50.384 L 66.98 50.398 L 67.018 50.387 L 67.044 50.355 C 71.241 40.483 75.417 30.669 79.574 20.911 C 80.015 19.874 80.298 19.013 80.422 18.328 C 80.846 15.985 80.743 13.472 78.962 11.853 C 78.942 11.834 78.926 11.811 78.914 11.785 C 78.902 11.759 78.895 11.73 78.894 11.701 C 78.892 11.671 78.896 11.642 78.905 11.615 C 78.914 11.588 78.928 11.563 78.946 11.542 L 80.293 10.008 C 80.344 9.95 80.405 9.931 80.476 9.947 C 81.384 10.152 82.271 11.71 82.634 12.592 C 83.439 14.543 83.233 17.123 82.785 19.196 C 82.602 20.044 82.185 21.256 81.534 22.833 C 76.069 36.068 70.596 49.299 65.112 62.525 C 65.097 62.561 65.072 62.593 65.042 62.614 C 65.012 62.636 64.977 62.648 64.941 62.648 L 63.154 62.662 C 63.116 62.662 63.078 62.648 63.046 62.623 C 63.014 62.597 62.99 62.561 62.977 62.52 L 46.192 10.189 L 46.188 10.145 L 46.202 10.105 L 46.23 10.077 L 46.267 10.068 L 53.957 10.073 C 53.995 10.072 54.033 10.085 54.065 10.111 C 54.096 10.136 54.121 10.172 54.134 10.214 L 66.921 50.348 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 250,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "0px 24px 16px 24px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    style: {
      position: "relative",
      height: 52,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "Get Started",
    type: "primary",
    size: "lg",
    state: "default"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 52,
      borderRadius: 999,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(26,26,26)",
      flexShrink: 0
    }
  }, "I already have an account")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--text-on-brand)",
      flexShrink: 0
    }
  }, "By continuing you agree to our Terms & Privacy Policy")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 97,
      display: "flex",
      flexDirection: "column",
      padding: "0px 0px 8px 0px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 134,
      height: 5,
      opacity: 0.2,
      borderRadius: 999,
      backgroundColor: "rgb(0,0,0)",
      flexShrink: 0
    }
  }))));
}

// figma node: 16:12 Badge (5 variants)
const __venc_Badge = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_Badge = p => "type=" + __venc_Badge(p.type);
function Badge(_p = {}) {
  const props = {
    ..._p,
    type: _p.type ?? "discount"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "var(--bg-brand)",
      display: "flex",
      flexDirection: "row",
      padding: "4px 8px 4px 8px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--text-on-brand)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "-30%"));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "var(--bg-success-tint)",
      display: "flex",
      flexDirection: "row",
      padding: "4px 8px 4px 8px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--text-success)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "NEW"));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "var(--amber-500)",
      display: "flex",
      flexDirection: "row",
      padding: "4px 8px 4px 8px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--neutral-900)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "BESTSELLER"));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "var(--bg-brand-tint)",
      display: "flex",
      flexDirection: "row",
      padding: "4px 8px 4px 8px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--text-brand)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "AI PICK"));
  const __body4 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "var(--bg-inverse)",
      display: "flex",
      flexDirection: "row",
      padding: "4px 8px 4px 8px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--text-inverse)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "SOLD OUT"));
  const __impls = {
    // figma: Type=Discount
    "type=discount": __body0,
    // figma: Type=New
    "type=new": __body1,
    // figma: Type=Bestseller
    "type=bestseller": __body2,
    // figma: Type=AI Pick
    "type=ai pick": __body3,
    // figma: Type=Sold Out
    "type=sold out": __body4
  };
  return (__impls[__vkey_Badge(props)] ?? __body0)();
}

// figma node: 262:4547 Bottom-Floating-Nav
function BottomFloatingNav(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 390,
      borderRadius: 999,
      backgroundColor: "var(--bg-inverse)",
      display: "flex",
      flexDirection: "row",
      padding: "10px 4px 10px 4px",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingTop: "calc(var(--spacing-sm-plus) * 1px)",
      paddingBottom: "calc(var(--spacing-sm-plus) * 1px)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 17,
    height: 17,
    viewBox: "0 0 17 17",
    fill: "none",
    style: {
      position: "absolute",
      left: 3,
      top: 4,
      width: 17,
      height: 17,
      color: "var(--icon-on-brand)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12.307 3.723 C 11.755 3.723 11.307 4.171 11.307 4.723 C 11.307 5.275 11.755 5.723 12.307 5.723 L 12.307 4.723 L 12.307 3.723 Z M 12.318 5.723 C 12.87 5.723 13.318 5.275 13.318 4.723 C 13.318 4.171 12.87 3.723 12.318 3.723 L 12.318 4.723 L 12.318 5.723 Z M 7.29 16.693 L 8.29 16.693 C 8.29 16.429 8.186 16.176 8 15.989 L 7.29 16.693 Z M 0.307 9.648 L 1.017 8.944 L 1.016 8.943 L 0.307 9.648 Z M 0 8.904 L 1 8.904 L 0 8.904 Z M 0.307 8.16 L 1.016 8.865 L 1.017 8.864 L 0.307 8.16 Z M 8.093 0.304 L 7.387 -0.404 L 7.383 -0.4 L 8.093 0.304 Z M 8.83 0 L 8.828 1 L 8.829 1 L 8.83 0 Z M 14.922 0.007 L 14.928 -0.993 L 14.923 -0.993 L 14.922 0.007 Z M 17 2.107 L 16 2.103 L 16 2.107 L 17 2.107 Z M 17 7.951 L 16 7.951 L 16 7.952 L 17 7.951 Z M 16.664 8.724 L 15.983 7.992 C 15.973 8.001 15.964 8.01 15.954 8.019 L 16.664 8.724 Z M 8.76 16.693 L 8.05 15.989 L 8.049 15.99 L 8.76 16.693 Z M 7.29 16.694 L 6.29 16.694 C 6.29 16.958 6.394 17.211 6.58 17.398 L 7.29 16.694 Z M 12.307 4.723 L 12.307 5.723 L 12.318 5.723 L 12.318 4.723 L 12.318 3.723 L 12.307 3.723 L 12.307 4.723 Z M 7.29 16.693 L 8 15.989 L 1.017 8.944 L 0.307 9.648 L -0.404 10.352 L 6.58 17.397 L 7.29 16.693 Z M 0.307 9.648 L 1.016 8.943 C 1.006 8.933 1 8.919 1 8.904 L 0 8.904 L -1 8.904 C -1 9.447 -0.785 9.968 -0.403 10.353 L 0.307 9.648 Z M 0 8.904 L 1 8.904 C 1 8.89 1.006 8.876 1.016 8.865 L 0.307 8.16 L -0.403 7.456 C -0.785 7.841 -1 8.361 -1 8.904 L 0 8.904 Z M 0.307 8.16 L 1.017 8.864 L 8.803 1.008 L 8.093 0.304 L 7.383 -0.4 L -0.404 7.457 L 0.307 8.16 Z M 8.093 0.304 L 8.799 1.012 C 8.803 1.008 8.807 1.005 8.812 1.003 L 8.431 0.079 L 8.05 -0.846 C 7.802 -0.744 7.577 -0.594 7.387 -0.404 L 8.093 0.304 Z M 8.431 0.079 L 8.812 1.003 C 8.817 1.001 8.823 1 8.828 1 L 8.83 0 L 8.832 -1 C 8.564 -1.001 8.298 -0.948 8.05 -0.846 L 8.431 0.079 Z M 8.83 0 L 8.829 1 L 14.921 1.007 L 14.922 0.007 L 14.923 -0.993 L 8.831 -1 L 8.83 0 Z M 14.922 0.007 L 14.916 1.007 C 15.205 1.009 15.481 1.125 15.684 1.331 L 16.395 0.627 L 17.106 -0.076 C 16.53 -0.658 15.747 -0.988 14.928 -0.993 L 14.922 0.007 Z M 16.395 0.627 L 15.684 1.331 C 15.888 1.536 16.001 1.814 16 2.103 L 17 2.107 L 18 2.111 C 18.003 1.292 17.682 0.506 17.106 -0.076 L 16.395 0.627 Z M 17 2.107 L 16 2.107 L 16 7.951 L 17 7.951 L 18 7.951 L 18 2.107 L 17 2.107 Z M 17 7.951 L 16 7.952 C 16 7.96 15.998 7.967 15.995 7.974 L 16.913 8.372 L 17.83 8.771 C 17.942 8.512 18 8.233 18 7.95 L 17 7.951 Z M 16.913 8.372 L 15.995 7.974 C 15.993 7.981 15.988 7.987 15.983 7.992 L 16.664 8.724 L 17.346 9.455 C 17.552 9.263 17.717 9.03 17.83 8.771 L 16.913 8.372 Z M 16.664 8.724 L 15.954 8.019 L 8.05 15.989 L 8.76 16.693 L 9.47 17.397 L 17.374 9.428 L 16.664 8.724 Z M 8.76 16.693 L 8.049 15.99 C 8.046 15.993 8.042 15.996 8.038 15.997 L 8.423 16.92 L 8.809 17.843 C 9.057 17.739 9.282 17.587 9.471 17.396 L 8.76 16.693 Z M 8.423 16.92 L 8.038 15.997 C 8.034 15.999 8.029 16 8.024 16 L 8.025 17 L 8.026 18 C 8.295 18 8.561 17.946 8.809 17.843 L 8.423 16.92 Z M 8.025 17 L 8.024 16 C 8.02 16 8.015 15.999 8.011 15.997 L 7.627 16.921 L 7.243 17.844 C 7.491 17.947 7.757 18 8.026 18 L 8.025 17 Z M 7.627 16.921 L 8.011 15.997 C 8.007 15.996 8.003 15.993 8 15.99 L 7.29 16.694 L 6.58 17.398 C 6.769 17.589 6.994 17.74 7.243 17.844 L 7.627 16.921 Z M 7.29 16.694 L 8.29 16.694 L 8.29 16.693 L 7.29 16.693 L 6.29 16.693 L 6.29 16.694 L 7.29 16.694 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 10,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--text-inverse)",
      flexShrink: 0
    }
  }, props.text1 ?? "Brands")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 7,
    height: 7,
    viewBox: "0 0 7 7",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.5,
      top: 3.5,
      width: 7,
      height: 7,
      color: "var(--icon-on-brand)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2 0 L 2 0.9 L 5 0.9 L 5 0 L 5 -0.9 L 2 -0.9 L 2 0 Z M 5 0 L 5 0.9 C 5.608 0.9 6.1 1.392 6.1 2 L 7 2 L 7.9 2 C 7.9 0.398 6.602 -0.9 5 -0.9 L 5 0 Z M 7 2 L 6.1 2 L 6.1 5 L 7 5 L 7.9 5 L 7.9 2 L 7 2 Z M 7 5 L 6.1 5 C 6.1 5.608 5.608 6.1 5 6.1 L 5 7 L 5 7.9 C 6.602 7.9 7.9 6.602 7.9 5 L 7 5 Z M 5 7 L 5 6.1 L 2 6.1 L 2 7 L 2 7.9 L 5 7.9 L 5 7 Z M 2 7 L 2 6.1 C 1.392 6.1 0.9 5.608 0.9 5 L 0 5 L -0.9 5 C -0.9 6.602 0.398 7.9 2 7.9 L 2 7 Z M 0 5 L 0.9 5 L 0.9 2 L 0 2 L -0.9 2 L -0.9 5 L 0 5 Z M 0 2 L 0.9 2 C 0.9 1.392 1.392 0.9 2 0.9 L 2 0 L 2 -0.9 C 0.398 -0.9 -0.9 0.398 -0.9 2 L 0 2 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 7,
    height: 7,
    viewBox: "0 0 7 7",
    fill: "none",
    style: {
      position: "absolute",
      left: 13.5,
      top: 3.5,
      width: 7,
      height: 7,
      color: "var(--icon-on-brand)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2 0 L 2 0.9 L 5 0.9 L 5 0 L 5 -0.9 L 2 -0.9 L 2 0 Z M 5 0 L 5 0.9 C 5.608 0.9 6.1 1.392 6.1 2 L 7 2 L 7.9 2 C 7.9 0.398 6.602 -0.9 5 -0.9 L 5 0 Z M 7 2 L 6.1 2 L 6.1 5 L 7 5 L 7.9 5 L 7.9 2 L 7 2 Z M 7 5 L 6.1 5 C 6.1 5.608 5.608 6.1 5 6.1 L 5 7 L 5 7.9 C 6.602 7.9 7.9 6.602 7.9 5 L 7 5 Z M 5 7 L 5 6.1 L 2 6.1 L 2 7 L 2 7.9 L 5 7.9 L 5 7 Z M 2 7 L 2 6.1 C 1.392 6.1 0.9 5.608 0.9 5 L 0 5 L -0.9 5 C -0.9 6.602 0.398 7.9 2 7.9 L 2 7 Z M 0 5 L 0.9 5 L 0.9 2 L 0 2 L -0.9 2 L -0.9 5 L 0 5 Z M 0 2 L 0.9 2 C 0.9 1.392 1.392 0.9 2 0.9 L 2 0 L 2 -0.9 C 0.398 -0.9 -0.9 0.398 -0.9 2 L 0 2 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 7,
    height: 7,
    viewBox: "0 0 7 7",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.5,
      top: 13.5,
      width: 7,
      height: 7,
      color: "var(--icon-on-brand)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2 0 L 2 0.9 L 5 0.9 L 5 0 L 5 -0.9 L 2 -0.9 L 2 0 Z M 5 0 L 5 0.9 C 5.608 0.9 6.1 1.392 6.1 2 L 7 2 L 7.9 2 C 7.9 0.398 6.602 -0.9 5 -0.9 L 5 0 Z M 7 2 L 6.1 2 L 6.1 5 L 7 5 L 7.9 5 L 7.9 2 L 7 2 Z M 7 5 L 6.1 5 C 6.1 5.608 5.608 6.1 5 6.1 L 5 7 L 5 7.9 C 6.602 7.9 7.9 6.602 7.9 5 L 7 5 Z M 5 7 L 5 6.1 L 2 6.1 L 2 7 L 2 7.9 L 5 7.9 L 5 7 Z M 2 7 L 2 6.1 C 1.392 6.1 0.9 5.608 0.9 5 L 0 5 L -0.9 5 C -0.9 6.602 0.398 7.9 2 7.9 L 2 7 Z M 0 5 L 0.9 5 L 0.9 2 L 0 2 L -0.9 2 L -0.9 5 L 0 5 Z M 0 2 L 0.9 2 C 0.9 1.392 1.392 0.9 2 0.9 L 2 0 L 2 -0.9 C 0.398 -0.9 -0.9 0.398 -0.9 2 L 0 2 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 7,
    height: 7,
    viewBox: "0 0 7 7",
    fill: "none",
    style: {
      position: "absolute",
      left: 13.5,
      top: 13.5,
      width: 7,
      height: 7,
      color: "var(--icon-on-brand)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2 0 L 2 0.9 L 5 0.9 L 5 0 L 5 -0.9 L 2 -0.9 L 2 0 Z M 5 0 L 5 0.9 C 5.608 0.9 6.1 1.392 6.1 2 L 7 2 L 7.9 2 C 7.9 0.398 6.602 -0.9 5 -0.9 L 5 0 Z M 7 2 L 6.1 2 L 6.1 5 L 7 5 L 7.9 5 L 7.9 2 L 7 2 Z M 7 5 L 6.1 5 C 6.1 5.608 5.608 6.1 5 6.1 L 5 7 L 5 7.9 C 6.602 7.9 7.9 6.602 7.9 5 L 7 5 Z M 5 7 L 5 6.1 L 2 6.1 L 2 7 L 2 7.9 L 5 7.9 L 5 7 Z M 2 7 L 2 6.1 C 1.392 6.1 0.9 5.608 0.9 5 L 0 5 L -0.9 5 C -0.9 6.602 0.398 7.9 2 7.9 L 2 7 Z M 0 5 L 0.9 5 L 0.9 2 L 0 2 L -0.9 2 L -0.9 5 L 0 5 Z M 0 2 L 0.9 2 C 0.9 1.392 1.392 0.9 2 0.9 L 2 0 L 2 -0.9 C 0.398 -0.9 -0.9 0.398 -0.9 2 L 0 2 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--text-inverse)",
      flexShrink: 0
    }
  }, "Categories")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 40,
      height: 40,
      borderRadius: 16,
      backgroundColor: "rgb(255,107,107)",
      display: "flex",
      flexDirection: "row",
      padding: "12px 12px 12px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16.722,
      height: 28,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 14.129,
    height: 21.026,
    viewBox: "0 0 14.129 21.026",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 14.129,
      height: 21.026,
      color: "var(--bg-default)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.953 15.08 C 2.903 14.873 2.857 14.693 2.816 14.541 C 2.43 13.111 2.044 11.68 1.658 10.251 C 1.635 10.163 1.622 10.079 1.619 10 C 1.598 9.275 1.81 8.471 2.285 7.912 C 2.779 7.332 3.523 7.038 4.278 6.981 C 4.372 6.973 4.467 6.978 4.563 6.995 C 4.946 7.062 5.308 7.178 5.647 7.342 C 6.917 7.96 7.196 9.188 6.926 10.481 C 6.901 10.6 6.875 10.72 6.849 10.839 C 6.83 10.925 6.803 11 6.769 11.064 C 6.509 11.549 6.04 11.939 5.614 12.267 C 4.759 12.926 3.905 13.587 3.053 14.251 C 3.05 14.253 3.047 14.257 3.045 14.261 C 3.043 14.265 3.042 14.27 3.042 14.274 C 3.045 14.312 3.054 14.354 3.069 14.401 C 3.235 14.898 3.386 15.398 3.522 15.9 C 3.523 15.902 3.524 15.904 3.525 15.906 C 3.527 15.907 3.528 15.908 3.53 15.909 C 3.532 15.909 3.534 15.91 3.536 15.909 C 3.538 15.909 3.54 15.908 3.542 15.907 C 4.759 14.979 5.976 14.054 7.194 13.131 C 7.25 13.089 7.289 13.056 7.312 13.032 C 7.571 12.756 7.794 12.454 7.982 12.125 C 8.787 10.71 8.81 9.139 8.153 7.646 C 8.109 7.545 8.055 7.451 7.992 7.363 C 7.68 6.93 7.32 6.556 6.912 6.24 C 5.692 5.293 4.341 5.089 2.859 5.625 C 2.638 5.705 2.405 5.809 2.16 5.937 C 1.901 6.073 1.719 6.246 1.514 6.455 C 0.636 7.35 0.005 8.534 0 9.802 C -0.001 10.09 0.039 10.397 0.129 10.68 C 0.192 10.883 0.255 11.084 0.313 11.292 C 1.095 14.101 1.861 16.915 2.611 19.732 C 2.649 19.876 2.7 19.967 2.789 20.075 C 3.495 20.929 4.397 21.208 5.494 20.912 C 5.577 20.889 5.629 20.87 5.652 20.853 C 7.059 19.812 8.544 18.886 9.931 17.818 C 10.555 17.338 11.14 16.814 11.688 16.248 C 13.741 14.124 14.448 11.135 14.001 8.261 C 13.456 4.757 11.286 1.606 7.933 0.281 C 7.225 0.001 6.321 -0.145 5.609 0.207 C 5.275 0.373 4.998 0.635 4.79 0.944 C 4.781 0.958 4.694 1.103 4.528 1.38 C 3.716 2.743 2.906 4.105 2.098 5.467 C 2.098 5.469 2.097 5.471 2.097 5.472 C 2.098 5.474 2.098 5.475 2.099 5.477 C 2.101 5.478 2.102 5.479 2.104 5.479 C 2.106 5.479 2.107 5.479 2.109 5.478 C 2.464 5.264 2.84 5.1 3.236 4.987 C 3.594 4.884 3.959 4.854 4.328 4.898 C 4.335 4.899 4.341 4.898 4.347 4.895 C 4.353 4.892 4.358 4.888 4.362 4.882 C 4.972 3.891 5.583 2.901 6.195 1.913 C 6.244 1.833 6.286 1.782 6.321 1.759 C 6.864 1.409 9.39 3.554 9.854 3.947 C 10.35 4.366 10.756 4.824 11.071 5.319 C 11.831 6.514 12.236 7.942 12.311 9.35 C 12.388 10.788 12.148 12.211 11.459 13.465 C 11.053 14.203 10.563 14.89 9.989 15.527 C 9.782 15.757 9.595 15.936 9.428 16.065 C 8.013 17.154 6.6 18.244 5.187 19.335 C 5.14 19.372 5.075 19.394 4.991 19.403 C 4.496 19.454 4.065 19.285 3.95 18.759 C 3.916 18.605 3.899 18.527 3.898 18.525 C 3.693 17.766 3.488 17.007 3.284 16.248 C 3.179 15.858 3.048 15.468 2.953 15.08 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 12.501,
    height: 11.486,
    viewBox: "0 0 12.501 11.486",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.221,
      top: 16.514,
      width: 12.501,
      height: 11.486,
      color: "var(--bg-default)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.916 7.34 C 1.102 8.605 0.424 9.986 0.009 11.436 C -0.009 11.498 0 11.503 0.037 11.449 C 1.022 9.993 2.12 8.609 3.33 7.297 C 3.452 7.164 3.57 7.042 3.683 6.93 C 4.786 5.838 6.038 4.887 7.303 4.022 C 8.226 3.392 9.59 2.503 10.731 1.662 C 11.075 1.408 11.454 1.175 11.803 0.91 C 12.062 0.714 12.395 0.43 12.5 0.074 C 12.501 0.071 12.501 0.068 12.501 0.065 C 12.5 0.062 12.499 0.059 12.498 0.057 C 12.496 0.054 12.494 0.052 12.492 0.05 C 12.489 0.049 12.486 0.047 12.483 0.047 C 11.826 -0.058 11.13 0.024 10.487 0.183 C 8.729 0.617 7.132 1.604 5.734 2.734 C 5.605 2.838 5.479 2.951 5.356 3.074 C 4.057 4.372 2.91 5.794 1.916 7.34 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 18,
    height: 13.500,
    viewBox: "0 0 18 13.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 3,
      top: 4,
      width: 18,
      height: 13.5,
      color: "var(--icon-on-brand)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 -0.9 C -0.497 -0.9 -0.9 -0.497 -0.9 0 C -0.9 0.497 -0.497 0.9 0 0.9 L 0 0 L 0 -0.9 Z M 2 0 L 2.883 -0.174 C 2.8 -0.596 2.43 -0.9 2 -0.9 L 2 0 Z M 4.4 12.2 L 5.292 12.08 C 5.29 12.062 5.287 12.044 5.283 12.026 L 4.4 12.2 Z M 5.9 13.5 L 5.9 12.6 L 5.892 12.6 L 5.9 13.5 Z M 14.5 13.5 L 14.518 12.6 C 14.512 12.6 14.506 12.6 14.5 12.6 L 14.5 13.5 Z M 16 12.3 L 15.125 12.089 C 15.123 12.099 15.12 12.11 15.118 12.12 L 16 12.3 Z M 18 4 L 18.875 4.211 C 18.94 3.943 18.878 3.66 18.707 3.443 C 18.536 3.226 18.276 3.1 18 3.1 L 18 4 Z M 3 3.1 C 2.503 3.1 2.1 3.503 2.1 4 C 2.1 4.497 2.503 4.9 3 4.9 L 3 4 L 3 3.1 Z M 0 0 L 0 0.9 L 2 0.9 L 2 0 L 2 -0.9 L 0 -0.9 L 0 0 Z M 2 0 L 1.117 0.174 L 3.517 12.374 L 4.4 12.2 L 5.283 12.026 L 2.883 -0.174 L 2 0 Z M 4.4 12.2 L 3.508 12.32 C 3.586 12.9 3.873 13.431 4.315 13.814 L 4.904 13.134 L 5.494 12.453 C 5.383 12.358 5.311 12.225 5.292 12.08 L 4.4 12.2 Z M 4.904 13.134 L 4.315 13.814 C 4.757 14.197 5.323 14.405 5.908 14.4 L 5.9 13.5 L 5.892 12.6 C 5.746 12.601 5.604 12.549 5.494 12.453 L 4.904 13.134 Z M 5.9 13.5 L 5.9 14.4 L 14.5 14.4 L 14.5 13.5 L 14.5 12.6 L 5.9 12.6 L 5.9 13.5 Z M 14.5 13.5 L 14.482 14.4 C 15.043 14.411 15.591 14.225 16.03 13.874 L 15.467 13.172 L 14.905 12.469 C 14.795 12.557 14.659 12.603 14.518 12.6 L 14.5 13.5 Z M 15.467 13.172 L 16.03 13.874 C 16.468 13.524 16.77 13.03 16.882 12.48 L 16 12.3 L 15.118 12.12 C 15.09 12.258 15.015 12.381 14.905 12.469 L 15.467 13.172 Z M 16 12.3 L 16.875 12.511 L 18.875 4.211 L 18 4 L 17.125 3.789 L 15.125 12.089 L 16 12.3 Z M 18 4 L 18 3.1 L 3 3.1 L 3 4 L 3 4.9 L 18 4.9 L 18 4 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 2.400,
    height: 2.400,
    viewBox: "0 0 2.400 2.400",
    fill: "none",
    style: {
      position: "absolute",
      left: 8.3,
      top: 19.8,
      width: 2.4,
      height: 2.4,
      color: "var(--icon-on-brand)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.2 2.4 C 1.863 2.4 2.4 1.863 2.4 1.2 C 2.4 0.537 1.863 0 1.2 0 C 0.537 0 0 0.537 0 1.2 C 0 1.863 0.537 2.4 1.2 2.4 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 2.400,
    height: 2.400,
    viewBox: "0 0 2.400 2.400",
    fill: "none",
    style: {
      position: "absolute",
      left: 16.3,
      top: 19.8,
      width: 2.4,
      height: 2.4,
      color: "var(--icon-on-brand)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.2 2.4 C 1.863 2.4 2.4 1.863 2.4 1.2 C 2.4 0.537 1.863 0 1.2 0 C 0.537 0 0 0.537 0 1.2 C 0 1.863 0.537 2.4 1.2 2.4 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--text-inverse)",
      flexShrink: 0
    }
  }, "Cart")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 8,
    height: 8,
    viewBox: "0 0 8 8",
    fill: "none",
    style: {
      position: "absolute",
      left: 8,
      top: 4,
      width: 8,
      height: 8,
      color: "var(--icon-on-brand)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 8 4 L 7.1 4 C 7.1 5.712 5.712 7.1 4 7.1 L 4 8 L 4 8.9 C 6.706 8.9 8.9 6.706 8.9 4 L 8 4 Z M 4 8 L 4 7.1 C 2.288 7.1 0.9 5.712 0.9 4 L 0 4 L -0.9 4 C -0.9 6.706 1.294 8.9 4 8.9 L 4 8 Z M 0 4 L 0.9 4 C 0.9 2.288 2.288 0.9 4 0.9 L 4 0 L 4 -0.9 C 1.294 -0.9 -0.9 1.294 -0.9 4 L 0 4 Z M 4 0 L 4 0.9 C 5.712 0.9 7.1 2.288 7.1 4 L 8 4 L 8.9 4 C 8.9 1.294 6.706 -0.9 4 -0.9 L 4 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 15,
    height: 5,
    viewBox: "0 0 15 5",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.5,
      top: 15.5,
      width: 15,
      height: 5,
      color: "var(--icon-on-brand)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M -0.827 4.645 C -1.023 5.102 -0.811 5.631 -0.355 5.827 C 0.102 6.023 0.631 5.811 0.827 5.355 L 0 5 L -0.827 4.645 Z M 14.173 5.355 C 14.369 5.811 14.898 6.023 15.355 5.827 C 15.811 5.631 16.023 5.102 15.827 4.645 L 15 5 L 14.173 5.355 Z M 0 5 L 0.827 5.355 C 1.516 3.746 2.457 2.648 3.559 1.946 C 4.663 1.243 5.988 0.9 7.5 0.9 L 7.5 0 L 7.5 -0.9 C 5.712 -0.9 4.037 -0.493 2.591 0.429 C 1.143 1.352 -0.016 2.754 -0.827 4.645 L 0 5 Z M 7.5 0 L 7.5 0.9 C 9.012 0.9 10.337 1.243 11.441 1.946 C 12.543 2.648 13.484 3.746 14.173 5.355 L 15 5 L 15.827 4.645 C 15.016 2.754 13.857 1.352 12.409 0.429 C 10.963 -0.493 9.288 -0.9 7.5 -0.9 L 7.5 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--text-inverse)",
      flexShrink: 0
    }
  }, "Profile")));
}

// figma node: 17:28 HomeIndicator
function HomeIndicator(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 390,
      height: 34,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 134,
      height: 5,
      borderRadius: 999,
      backgroundColor: "var(--text-primary)",
      flexShrink: 0
    }
  }));
}

// figma node: 271:5248 Wislist Icon (2 variants)
const __venc_WislistIcon = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_WislistIcon = p => "property1=" + __venc_WislistIcon(p.property1);
function WislistIcon(_p = {}) {
  const props = {
    ..._p,
    property1: _p.property1 ?? "unclick"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 44,
      height: 44,
      overflow: "hidden",
      position: "relative",
      color: "rgb(26,26,26)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 8,
      top: 8,
      borderRadius: 999,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      padding: "6px 6px 6px 6px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 13.334,
    height: 11.344,
    viewBox: "0 0 13.334 11.344",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.333,
      top: 2.656,
      width: 13.334,
      height: 11.344
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 3.677 L -1.5 3.677 L -1.5 3.677 L 0 3.677 Z M 0.645 1.6 L -0.59 0.75 L -0.59 0.75 L 0.645 1.6 Z M 2.355 0.254 L 2.891 1.654 L 2.891 1.654 L 2.355 0.254 Z M 4.526 0.113 L 4.174 1.571 L 4.174 1.571 L 4.526 0.113 Z M 6.394 1.227 L 5.279 2.229 L 5.289 2.241 L 5.299 2.251 L 6.394 1.227 Z M 6.519 1.314 L 7.116 -0.062 L 7.116 -0.062 L 6.519 1.314 Z M 6.816 1.314 L 7.413 2.69 L 7.413 2.69 L 6.816 1.314 Z M 6.94 1.227 L 8.035 2.251 L 8.048 2.238 L 8.06 2.224 L 6.94 1.227 Z M 8.808 0.104 L 9.163 1.561 L 8.808 0.104 Z M 10.984 0.242 L 11.521 -1.158 L 10.984 0.242 Z M 12.695 1.593 L 13.933 0.746 L 13.933 0.746 L 12.695 1.593 Z M 13.334 3.677 L 11.834 3.67 L 11.834 3.677 L 13.334 3.677 Z M 11.334 7.344 L 12.377 8.422 L 12.386 8.414 L 12.395 8.405 L 11.334 7.344 Z M 7.673 10.886 L 6.63 9.808 L 6.584 9.853 L 6.541 9.901 L 7.673 10.886 Z M 7.223 11.222 L 7.849 12.586 L 7.849 12.586 L 7.223 11.222 Z M 6.675 11.344 L 6.685 12.844 L 6.685 12.844 L 6.675 11.344 Z M 6.126 11.229 L 6.734 9.858 L 6.734 9.858 L 6.126 11.229 Z M 5.672 10.899 L 6.791 9.9 L 6.755 9.859 L 6.716 9.821 L 5.672 10.899 Z M 2 7.344 L 0.94 8.405 L 0.948 8.413 L 0.957 8.422 L 2 7.344 Z M 0 3.677 L 1.5 3.677 C 1.5 3.239 1.633 2.811 1.881 2.45 L 0.645 1.6 L -0.59 0.75 C -1.183 1.611 -1.5 2.632 -1.5 3.677 L 0 3.677 Z M 0.645 1.6 L 1.881 2.45 C 2.13 2.089 2.482 1.811 2.891 1.654 L 2.355 0.254 L 1.818 -1.147 C 0.842 -0.773 0.002 -0.111 -0.59 0.75 L 0.645 1.6 Z M 2.355 0.254 L 2.891 1.654 C 3.301 1.497 3.748 1.468 4.174 1.571 L 4.526 0.113 L 4.877 -1.345 C 3.861 -1.59 2.794 -1.521 1.818 -1.147 L 2.355 0.254 Z M 4.526 0.113 L 4.174 1.571 C 4.601 1.674 4.986 1.903 5.279 2.229 L 6.394 1.227 L 7.51 0.224 C 6.811 -0.553 5.893 -1.101 4.877 -1.345 L 4.526 0.113 Z M 6.394 1.227 L 5.299 2.251 C 5.474 2.439 5.686 2.588 5.921 2.69 L 6.519 1.314 L 7.116 -0.062 C 7.257 0 7.385 0.089 7.49 0.202 L 6.394 1.227 Z M 6.519 1.314 L 5.921 2.69 C 6.157 2.792 6.411 2.845 6.667 2.845 L 6.667 1.345 L 6.667 -0.155 C 6.821 -0.155 6.974 -0.123 7.116 -0.062 L 6.519 1.314 Z M 6.667 1.345 L 6.667 2.845 C 6.924 2.845 7.178 2.792 7.413 2.69 L 6.816 1.314 L 6.219 -0.062 C 6.36 -0.123 6.513 -0.155 6.667 -0.155 L 6.667 1.345 Z M 6.816 1.314 L 7.413 2.69 C 7.648 2.588 7.86 2.439 8.035 2.251 L 6.94 1.227 L 5.844 0.202 C 5.95 0.089 6.077 0 6.219 -0.062 L 6.816 1.314 Z M 6.94 1.227 L 8.06 2.224 C 8.352 1.896 8.737 1.665 9.163 1.561 L 8.808 0.104 L 8.454 -1.354 C 7.435 -1.106 6.516 -0.554 5.819 0.23 L 6.94 1.227 Z M 8.808 0.104 L 9.163 1.561 C 9.59 1.457 10.038 1.486 10.447 1.643 L 10.984 0.242 L 11.521 -1.158 C 10.542 -1.533 9.472 -1.602 8.454 -1.354 L 8.808 0.104 Z M 10.984 0.242 L 10.447 1.643 C 10.857 1.8 11.209 2.078 11.457 2.44 L 12.695 1.593 L 13.933 0.746 C 13.341 -0.119 12.5 -0.783 11.521 -1.158 L 10.984 0.242 Z M 12.695 1.593 L 11.457 2.44 C 11.705 2.803 11.836 3.232 11.834 3.67 L 13.334 3.677 L 14.834 3.685 C 14.839 2.636 14.525 1.611 13.933 0.746 L 12.695 1.593 Z M 13.334 3.677 L 11.834 3.677 C 11.834 4.521 11.295 5.263 10.274 6.283 L 11.334 7.344 L 12.395 8.405 C 13.374 7.426 14.834 5.887 14.834 3.677 L 13.334 3.677 Z M 11.334 7.344 L 10.291 6.266 L 6.63 9.808 L 7.673 10.886 L 8.715 11.964 L 12.377 8.422 L 11.334 7.344 Z M 7.673 10.886 L 6.541 9.901 C 6.557 9.883 6.576 9.869 6.597 9.859 L 7.223 11.222 L 7.849 12.586 C 8.214 12.418 8.54 12.174 8.804 11.871 L 7.673 10.886 Z M 7.223 11.222 L 6.597 9.859 C 6.619 9.849 6.642 9.844 6.666 9.844 L 6.675 11.344 L 6.685 12.844 C 7.087 12.841 7.484 12.753 7.849 12.586 L 7.223 11.222 Z M 6.675 11.344 L 6.666 9.844 C 6.689 9.844 6.713 9.849 6.734 9.858 L 6.126 11.229 L 5.518 12.6 C 5.885 12.763 6.283 12.846 6.685 12.844 L 6.675 11.344 Z M 6.126 11.229 L 6.734 9.858 C 6.756 9.868 6.775 9.882 6.791 9.9 L 5.672 10.899 L 4.554 11.898 C 4.822 12.198 5.15 12.437 5.518 12.6 L 6.126 11.229 Z M 5.672 10.899 L 6.716 9.821 L 3.043 6.266 L 2 7.344 L 0.957 8.422 L 4.629 11.977 L 5.672 10.899 Z M 2 7.344 L 3.061 6.283 C 2.038 5.261 1.5 4.527 1.5 3.677 L 0 3.677 L -1.5 3.677 C -1.5 5.894 -0.038 7.427 0.94 8.405 L 2 7.344 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 44,
      height: 44,
      overflow: "hidden",
      position: "relative",
      color: "var(--icon-destructive)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 8,
      top: 8,
      borderRadius: 999,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      padding: "6px 6px 6px 6px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 13.334,
    height: 11.344,
    viewBox: "0 0 13.334 11.344",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.333,
      top: 2.656,
      width: 13.334,
      height: 11.344
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.645 1.6 C 0.225 2.211 0 2.936 0 3.677 C 0 5.211 1 6.344 2 7.344 L 5.672 10.899 C 5.798 11.04 5.953 11.153 6.126 11.229 C 6.299 11.306 6.486 11.345 6.675 11.344 C 6.865 11.343 7.051 11.301 7.223 11.222 C 7.395 11.143 7.548 11.029 7.673 10.886 L 11.334 7.344 C 12.334 6.344 13.334 5.204 13.334 3.677 C 13.338 2.934 13.115 2.207 12.695 1.593 C 12.275 0.98 11.678 0.509 10.984 0.242 C 10.29 -0.024 9.531 -0.072 8.808 0.104 C 8.086 0.28 7.434 0.671 6.94 1.227 C 6.905 1.264 6.863 1.294 6.816 1.314 C 6.769 1.335 6.718 1.345 6.667 1.345 C 6.616 1.345 6.565 1.335 6.519 1.314 C 6.472 1.294 6.429 1.264 6.394 1.227 C 5.899 0.675 5.247 0.287 4.526 0.113 C 3.804 -0.061 3.047 -0.012 2.355 0.254 C 1.662 0.519 1.066 0.989 0.645 1.6 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0 3.677 L -1.5 3.677 L -1.5 3.677 L 0 3.677 Z M 0.645 1.6 L -0.59 0.75 L -0.59 0.75 L 0.645 1.6 Z M 2.355 0.254 L 2.891 1.654 L 2.891 1.654 L 2.355 0.254 Z M 4.526 0.113 L 4.174 1.571 L 4.174 1.571 L 4.526 0.113 Z M 6.394 1.227 L 5.279 2.229 L 5.289 2.241 L 5.299 2.251 L 6.394 1.227 Z M 6.519 1.314 L 7.116 -0.062 L 7.116 -0.062 L 6.519 1.314 Z M 6.816 1.314 L 7.413 2.69 L 7.413 2.69 L 6.816 1.314 Z M 6.94 1.227 L 8.035 2.251 L 8.048 2.238 L 8.06 2.224 L 6.94 1.227 Z M 8.808 0.104 L 9.163 1.561 L 8.808 0.104 Z M 10.984 0.242 L 11.521 -1.158 L 10.984 0.242 Z M 12.695 1.593 L 13.933 0.746 L 13.933 0.746 L 12.695 1.593 Z M 13.334 3.677 L 11.834 3.67 L 11.834 3.677 L 13.334 3.677 Z M 11.334 7.344 L 12.377 8.422 L 12.386 8.414 L 12.395 8.405 L 11.334 7.344 Z M 7.673 10.886 L 6.63 9.808 L 6.584 9.853 L 6.541 9.901 L 7.673 10.886 Z M 7.223 11.222 L 7.849 12.586 L 7.849 12.586 L 7.223 11.222 Z M 6.675 11.344 L 6.685 12.844 L 6.685 12.844 L 6.675 11.344 Z M 6.126 11.229 L 6.734 9.858 L 6.734 9.858 L 6.126 11.229 Z M 5.672 10.899 L 6.791 9.9 L 6.755 9.859 L 6.716 9.821 L 5.672 10.899 Z M 2 7.344 L 0.94 8.405 L 0.948 8.413 L 0.957 8.422 L 2 7.344 Z M 0 3.677 L 1.5 3.677 C 1.5 3.239 1.633 2.811 1.881 2.45 L 0.645 1.6 L -0.59 0.75 C -1.183 1.611 -1.5 2.632 -1.5 3.677 L 0 3.677 Z M 0.645 1.6 L 1.881 2.45 C 2.13 2.089 2.482 1.811 2.891 1.654 L 2.355 0.254 L 1.818 -1.147 C 0.842 -0.773 0.002 -0.111 -0.59 0.75 L 0.645 1.6 Z M 2.355 0.254 L 2.891 1.654 C 3.301 1.497 3.748 1.468 4.174 1.571 L 4.526 0.113 L 4.877 -1.345 C 3.861 -1.59 2.794 -1.521 1.818 -1.147 L 2.355 0.254 Z M 4.526 0.113 L 4.174 1.571 C 4.601 1.674 4.986 1.903 5.279 2.229 L 6.394 1.227 L 7.51 0.224 C 6.811 -0.553 5.893 -1.101 4.877 -1.345 L 4.526 0.113 Z M 6.394 1.227 L 5.299 2.251 C 5.474 2.439 5.686 2.588 5.921 2.69 L 6.519 1.314 L 7.116 -0.062 C 7.257 0 7.385 0.089 7.49 0.202 L 6.394 1.227 Z M 6.519 1.314 L 5.921 2.69 C 6.157 2.792 6.411 2.845 6.667 2.845 L 6.667 1.345 L 6.667 -0.155 C 6.821 -0.155 6.974 -0.123 7.116 -0.062 L 6.519 1.314 Z M 6.667 1.345 L 6.667 2.845 C 6.924 2.845 7.178 2.792 7.413 2.69 L 6.816 1.314 L 6.219 -0.062 C 6.36 -0.123 6.513 -0.155 6.667 -0.155 L 6.667 1.345 Z M 6.816 1.314 L 7.413 2.69 C 7.648 2.588 7.86 2.439 8.035 2.251 L 6.94 1.227 L 5.844 0.202 C 5.95 0.089 6.077 0 6.219 -0.062 L 6.816 1.314 Z M 6.94 1.227 L 8.06 2.224 C 8.352 1.896 8.737 1.665 9.163 1.561 L 8.808 0.104 L 8.454 -1.354 C 7.435 -1.106 6.516 -0.554 5.819 0.23 L 6.94 1.227 Z M 8.808 0.104 L 9.163 1.561 C 9.59 1.457 10.038 1.486 10.447 1.643 L 10.984 0.242 L 11.521 -1.158 C 10.542 -1.533 9.472 -1.602 8.454 -1.354 L 8.808 0.104 Z M 10.984 0.242 L 10.447 1.643 C 10.857 1.8 11.209 2.078 11.457 2.44 L 12.695 1.593 L 13.933 0.746 C 13.341 -0.119 12.5 -0.783 11.521 -1.158 L 10.984 0.242 Z M 12.695 1.593 L 11.457 2.44 C 11.705 2.803 11.836 3.232 11.834 3.67 L 13.334 3.677 L 14.834 3.685 C 14.839 2.636 14.525 1.611 13.933 0.746 L 12.695 1.593 Z M 13.334 3.677 L 11.834 3.677 C 11.834 4.521 11.295 5.263 10.274 6.283 L 11.334 7.344 L 12.395 8.405 C 13.374 7.426 14.834 5.887 14.834 3.677 L 13.334 3.677 Z M 11.334 7.344 L 10.291 6.266 L 6.63 9.808 L 7.673 10.886 L 8.715 11.964 L 12.377 8.422 L 11.334 7.344 Z M 7.673 10.886 L 6.541 9.901 C 6.557 9.883 6.576 9.869 6.597 9.859 L 7.223 11.222 L 7.849 12.586 C 8.214 12.418 8.54 12.174 8.804 11.871 L 7.673 10.886 Z M 7.223 11.222 L 6.597 9.859 C 6.619 9.849 6.642 9.844 6.666 9.844 L 6.675 11.344 L 6.685 12.844 C 7.087 12.841 7.484 12.753 7.849 12.586 L 7.223 11.222 Z M 6.675 11.344 L 6.666 9.844 C 6.689 9.844 6.713 9.849 6.734 9.858 L 6.126 11.229 L 5.518 12.6 C 5.885 12.763 6.283 12.846 6.685 12.844 L 6.675 11.344 Z M 6.126 11.229 L 6.734 9.858 C 6.756 9.868 6.775 9.882 6.791 9.9 L 5.672 10.899 L 4.554 11.898 C 4.822 12.198 5.15 12.437 5.518 12.6 L 6.126 11.229 Z M 5.672 10.899 L 6.716 9.821 L 3.043 6.266 L 2 7.344 L 0.957 8.422 L 4.629 11.977 L 5.672 10.899 Z M 2 7.344 L 3.061 6.283 C 2.038 5.261 1.5 4.527 1.5 3.677 L 0 3.677 L -1.5 3.677 C -1.5 5.894 -0.038 7.427 0.94 8.405 L 2 7.344 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))));
  const __impls = {
    // figma: Property 1=unclick
    "property1=unclick": __body0,
    // figma: Property 1=Clicked
    "property1=clicked": __body1
  };
  return (__impls[__vkey_WislistIcon(props)] ?? __body0)();
}

// figma node: 570:6535  AI Picked For You
function AIPickedForYou(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 440,
      height: 956,
      overflow: "hidden",
      borderRadius: 31,
      backgroundColor: "var(--bg-elevated)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 440,
      overflow: "hidden",
      background: "linear-gradient(180deg, rgb(226,126,114) 0.00%, rgb(243,161,149) 100.00%)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 64,
      display: "flex",
      flexDirection: "row",
      padding: "0px 20px 0px 30px",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, "9:41"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 68,
      height: 12,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 3,
    height: 6,
    viewBox: "0 0 3 6",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 6,
      width: 3,
      height: 6,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2 0 L 1 0 C 0.448 0 0 0.448 0 1 L 0 5 C 0 5.552 0.448 6 1 6 L 2 6 C 2.552 6 3 5.552 3 5 L 3 1 C 3 0.448 2.552 0 2 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3,
    height: 8,
    viewBox: "0 0 3 8",
    fill: "none",
    style: {
      position: "absolute",
      left: 5,
      top: 4,
      width: 3,
      height: 8,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2 0 L 1 0 C 0.448 0 0 0.448 0 1 L 0 7 C 0 7.552 0.448 8 1 8 L 2 8 C 2.552 8 3 7.552 3 7 L 3 1 C 3 0.448 2.552 0 2 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3,
    height: 10,
    viewBox: "0 0 3 10",
    fill: "none",
    style: {
      position: "absolute",
      left: 10,
      top: 2,
      width: 3,
      height: 10,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2 0 L 1 0 C 0.448 0 0 0.448 0 1 L 0 9 C 0 9.552 0.448 10 1 10 L 2 10 C 2.552 10 3 9.552 3 9 L 3 1 C 3 0.448 2.552 0 2 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3,
    height: 12,
    viewBox: "0 0 3 12",
    fill: "none",
    style: {
      position: "absolute",
      left: 15,
      top: 0,
      width: 3,
      height: 12,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2 0 L 1 0 C 0.448 0 0 0.448 0 1 L 0 11 C 0 11.552 0.448 12 1 12 L 2 12 C 2.552 12 3 11.552 3 11 L 3 1 C 3 0.448 2.552 0 2 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 10,
    height: 1.755,
    viewBox: "0 0 10 1.755",
    fill: "none",
    style: {
      position: "absolute",
      left: 31,
      top: 2.745,
      width: 10,
      height: 1.755,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M -0.5 1.131 C -0.845 1.407 -0.901 1.91 -0.624 2.255 C -0.348 2.6 0.155 2.656 0.5 2.38 L 0 1.755 L -0.5 1.131 Z M 9.5 2.38 C 9.845 2.656 10.348 2.6 10.625 2.255 C 10.901 1.91 10.845 1.407 10.5 1.131 L 10 1.755 L 9.5 2.38 Z M 0 1.755 L 0.5 2.38 C 1.777 1.357 3.364 0.8 5 0.8 L 5 0 L 5 -0.8 C 3.001 -0.8 1.061 -0.119 -0.5 1.131 L 0 1.755 Z M 5 0 L 5 0.8 C 6.636 0.8 8.223 1.357 9.5 2.38 L 10 1.755 L 10.5 1.131 C 8.939 -0.119 6.999 -0.8 5 -0.8 L 5 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 6,
    height: 1,
    viewBox: "0 0 6 1",
    fill: "none",
    style: {
      position: "absolute",
      left: 33,
      top: 6.2,
      width: 6,
      height: 1,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M -0.48 0.36 C -0.833 0.625 -0.905 1.127 -0.64 1.48 C -0.375 1.833 0.127 1.905 0.48 1.64 L 0 1 L -0.48 0.36 Z M 3 0 L 3 0.8 L 3 0 Z M 5.52 1.64 C 5.873 1.905 6.375 1.833 6.64 1.48 C 6.905 1.127 6.833 0.625 6.48 0.36 L 6 1 L 5.52 1.64 Z M 0 1 L 0.48 1.64 C 1.207 1.095 2.091 0.8 3 0.8 L 3 0 L 3 -0.8 C 1.745 -0.8 0.524 -0.393 -0.48 0.36 L 0 1 Z M 3 0 L 3 0.8 C 3.909 0.8 4.793 1.095 5.52 1.64 L 6 1 L 6.48 0.36 C 5.476 -0.393 4.255 -0.8 3 -0.8 L 3 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 2.600,
    height: 2.600,
    viewBox: "0 0 2.600 2.600",
    fill: "none",
    style: {
      position: "absolute",
      left: 34.7,
      top: 8.7,
      width: 2.6,
      height: 2.6,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.3 2.6 C 2.018 2.6 2.6 2.018 2.6 1.3 C 2.6 0.582 2.018 0 1.3 0 C 0.582 0 0 0.582 0 1.3 C 0 2.018 0.582 2.6 1.3 2.6 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 20,
    height: 10,
    viewBox: "0 0 20 10",
    fill: "none",
    style: {
      position: "absolute",
      left: 46,
      top: 1,
      width: 20,
      height: 10,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3 0 L 3 0.5 L 17 0.5 L 17 0 L 17 -0.5 L 3 -0.5 L 3 0 Z M 17 0 L 17 0.5 C 18.381 0.5 19.5 1.619 19.5 3 L 20 3 L 20.5 3 C 20.5 1.067 18.933 -0.5 17 -0.5 L 17 0 Z M 20 3 L 19.5 3 L 19.5 7 L 20 7 L 20.5 7 L 20.5 3 L 20 3 Z M 20 7 L 19.5 7 C 19.5 8.381 18.381 9.5 17 9.5 L 17 10 L 17 10.5 C 18.933 10.5 20.5 8.933 20.5 7 L 20 7 Z M 17 10 L 17 9.5 L 3 9.5 L 3 10 L 3 10.5 L 17 10.5 L 17 10 Z M 3 10 L 3 9.5 C 1.619 9.5 0.5 8.381 0.5 7 L 0 7 L -0.5 7 C -0.5 8.933 1.067 10.5 3 10.5 L 3 10 Z M 0 7 L 0.5 7 L 0.5 3 L 0 3 L -0.5 3 L -0.5 7 L 0 7 Z M 0 3 L 0.5 3 C 0.5 1.619 1.619 0.5 3 0.5 L 3 0 L 3 -0.5 C 1.067 -0.5 -0.5 1.067 -0.5 3 L 0 3 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 13,
    height: 6,
    viewBox: "0 0 13 6",
    fill: "none",
    style: {
      position: "absolute",
      left: 48,
      top: 3,
      width: 13,
      height: 6,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 11.5 0 L 1.5 0 C 0.672 0 0 0.672 0 1.5 L 0 4.5 C 0 5.328 0.672 6 1.5 6 L 11.5 6 C 12.328 6 13 5.328 13 4.5 L 13 1.5 C 13 0.672 12.328 0 11.5 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 2,
    height: 4,
    viewBox: "0 0 2 4",
    fill: "none",
    style: {
      position: "absolute",
      left: 67,
      top: 4,
      width: 2,
      height: 4,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 0 4 C 0.53 4 1.039 3.789 1.414 3.414 C 1.789 3.039 2 2.53 2 2 C 2 1.47 1.789 0.961 1.414 0.586 C 1.039 0.211 0.53 0 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 16px 10px 16px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-lg) * 1px)",
      paddingRight: "calc(var(--spacing-lg) * 1px)",
      paddingBottom: "calc(var(--spacing-sm-plus) * 1px)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 44,
      height: 44,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 6,
      top: 6,
      width: 32,
      height: "calc(var(--icon-2xl) * 1px)",
      overflow: "hidden",
      borderRadius: 999,
      backgroundColor: "var(--bg-subtle)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: "calc(var(--icon-sm) * 1px)",
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 4,
    height: 8,
    viewBox: "0 0 4 8",
    fill: "none",
    style: {
      position: "absolute",
      left: 6,
      top: 4,
      width: 4,
      height: 8,
      color: "var(--icon-primary)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.293 8.707 C 3.683 9.098 4.317 9.098 4.707 8.707 C 5.098 8.317 5.098 7.683 4.707 7.293 L 4 8 L 3.293 8.707 Z M 0 4 L -0.707 3.293 C -1.098 3.683 -1.098 4.317 -0.707 4.707 L 0 4 Z M 4.707 0.707 C 5.098 0.317 5.098 -0.317 4.707 -0.707 C 4.317 -1.098 3.683 -1.098 3.293 -0.707 L 4 0 L 4.707 0.707 Z M 4 8 L 4.707 7.293 L 0.707 3.293 L 0 4 L -0.707 4.707 L 3.293 8.707 L 4 8 Z M 0 4 L 0.707 4.707 L 4.707 0.707 L 4 0 L 3.293 -0.707 L -0.707 3.293 L 0 4 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--spacing-3xs) * 1px)",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 18,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--text-on-brand)",
      flexShrink: 0
    }
  }, "AI Picked For You"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--text-inverse)",
      flexShrink: 0
    }
  }, "Curated relationship and interest matches")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 44,
      height: 44,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 13,
      top: 13,
      width: 20,
      height: 20,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 15,
    height: 15,
    viewBox: "0 0 15 15",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.5,
      top: 2.5,
      width: 15,
      height: 15,
      color: "var(--icon-on-brand)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M -1 7.5 C -1 8.052 -0.552 8.5 0 8.5 C 0.552 8.5 1 8.052 1 7.5 L 0 7.5 L -1 7.5 Z M 7.5 0 L 7.504 -1 L 7.5 -1 L 7.5 0 Z M 13.117 2.283 L 13.824 1.576 L 13.818 1.57 L 13.812 1.564 L 13.117 2.283 Z M 15 4.167 L 15 5.167 L 16 5.167 L 16 4.167 L 15 4.167 Z M 16 0 C 16 -0.552 15.552 -1 15 -1 C 14.448 -1 14 -0.552 14 0 L 15 0 L 16 0 Z M 10.833 3.167 C 10.281 3.167 9.833 3.614 9.833 4.167 C 9.833 4.719 10.281 5.167 10.833 5.167 L 10.833 4.167 L 10.833 3.167 Z M 16 7.5 C 16 6.948 15.552 6.5 15 6.5 C 14.448 6.5 14 6.948 14 7.5 L 15 7.5 L 16 7.5 Z M 7.5 15 L 7.496 16 L 7.5 16 L 7.5 15 Z M 1.883 12.717 L 1.176 13.424 L 1.182 13.43 L 1.188 13.436 L 1.883 12.717 Z M 0 10.833 L 0 9.833 L -1 9.833 L -1 10.833 L 0 10.833 Z M 4.167 11.833 C 4.719 11.833 5.167 11.386 5.167 10.833 C 5.167 10.281 4.719 9.833 4.167 9.833 L 4.167 10.833 L 4.167 11.833 Z M -1 15 C -1 15.552 -0.552 16 0 16 C 0.552 16 1 15.552 1 15 L 0 15 L -1 15 Z M 0 7.5 L 1 7.5 C 1 5.776 1.685 4.123 2.904 2.904 L 2.197 2.197 L 1.49 1.49 C -0.104 3.084 -1 5.246 -1 7.5 L 0 7.5 Z M 2.197 2.197 L 2.904 2.904 C 4.123 1.685 5.776 1 7.5 1 L 7.5 0 L 7.5 -1 C 5.246 -1 3.084 -0.104 1.49 1.49 L 2.197 2.197 Z M 7.5 0 L 7.496 1 C 9.335 1.007 11.1 1.724 12.422 3.002 L 13.117 2.283 L 13.812 1.564 C 12.119 -0.072 9.859 -0.991 7.504 -1 L 7.5 0 Z M 13.117 2.283 L 12.41 2.99 L 14.293 4.874 L 15 4.167 L 15.707 3.46 L 13.824 1.576 L 13.117 2.283 Z M 15 4.167 L 16 4.167 L 16 0 L 15 0 L 14 0 L 14 4.167 L 15 4.167 Z M 15 4.167 L 15 3.167 L 10.833 3.167 L 10.833 4.167 L 10.833 5.167 L 15 5.167 L 15 4.167 Z M 15 7.5 L 14 7.5 C 14 9.224 13.315 10.877 12.096 12.096 L 12.803 12.803 L 13.51 13.51 C 15.104 11.916 16 9.754 16 7.5 L 15 7.5 Z M 12.803 12.803 L 12.096 12.096 C 10.877 13.315 9.224 14 7.5 14 L 7.5 15 L 7.5 16 C 9.754 16 11.916 15.104 13.51 13.51 L 12.803 12.803 Z M 7.5 15 L 7.504 14 C 5.665 13.993 3.9 13.276 2.578 11.998 L 1.883 12.717 L 1.188 13.436 C 2.881 15.072 5.141 15.991 7.496 16 L 7.5 15 Z M 1.883 12.717 L 2.59 12.01 L 0.707 10.126 L 0 10.833 L -0.707 11.54 L 1.176 13.424 L 1.883 12.717 Z M 0 10.833 L 0 11.833 L 4.167 11.833 L 4.167 10.833 L 4.167 9.833 L 0 9.833 L 0 10.833 Z M 0 10.833 L -1 10.833 L -1 15 L 0 15 L 1 15 L 1 10.833 L 0 10.833 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 830,
      width: 440,
      height: 126,
      overflow: "hidden",
      backgroundColor: "var(--bg-default)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "12px 16px 12px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement(BottomFloatingNav, {
    style: {
      position: "relative",
      width: 390,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement(HomeIndicator, {
    style: {
      position: "relative",
      height: 34,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 134,
      width: 440,
      height: 623,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      padding: "0px 16px 0px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 11,
      lineHeight: "100%",
      color: "rgb(128,128,128)",
      textTransform: "uppercase",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Based on interest in Watches"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 12,
      backgroundColor: "var(--bg-subtle)",
      boxShadow: "inset 0 0 0 0.500px var(--border-default), 0 0 0 0.500px var(--border-default)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "6px 6px 6px 6px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-xs) * 1px)",
      paddingTop: "calc(var(--spacing-xs) * 1px)",
      paddingRight: "calc(var(--spacing-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-xs) * 1px)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 96,
    viewBox: "0 0 96 74",
    fill: "none",
    style: {
      position: "relative",
      width: 96,
      overflow: "hidden",
      borderRadius: 12,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 12 C 0 5.373 5.373 0 12 0 L 84 0 C 90.627 0 96 5.373 96 12 L 96 62 C 96 68.627 90.627 74 84 74 L 12 74 C 5.373 74 0 68.627 0 62 L 0 12 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 74,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    style: {
      position: "absolute",
      left: 232,
      top: 0
    },
    type: "ai pick"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      gap: 2,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--text-tertiary)",
      flexShrink: 0
    }
  }, "Northgate"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 13,
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      lineHeight: 1.399999976158142,
      color: "var(--text-primary)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Sky Blue Clou de Paris dail"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--text-primary)",
      flexShrink: 0
    }
  }, "AED 1,645.00")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 12,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 16,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(235,235,232)",
      display: "flex",
      flexDirection: "column",
      gap: 12,
      padding: "12px 12px 12px 12px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 12,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 170,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }), /*#__PURE__*/React.createElement(WislistIcon, {
    style: {
      position: "absolute",
      left: 128,
      top: 0,
      width: 44,
      height: 44
    },
    property1: "unclick"
  }), /*#__PURE__*/React.createElement(Badge, {
    style: {
      position: "absolute",
      left: 8,
      top: 8
    },
    type: "new"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 11,
      lineHeight: "100%",
      letterSpacing: "0.500px",
      color: "rgb(107,102,97)",
      textTransform: "uppercase",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Northgate"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      lineHeight: "100%",
      color: "rgb(31,30,29)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Club Emerald Green diamond silver"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      height: 12,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 12,
      overflow: "hidden",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 10.001,
    height: 9.536,
    viewBox: "0 0 10.001 9.536",
    fill: "none",
    style: {
      position: "absolute",
      left: 1,
      top: 1,
      width: 10.001,
      height: 9.536,
      color: "rgb(212,175,55)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.763 0.147 L 3.867 -0.296 L 3.867 -0.295 L 4.763 0.147 Z M 5.001 0 L 5.001 -1 L 5.001 0 Z M 5.238 0.147 L 6.135 -0.295 L 6.135 -0.296 L 5.238 0.147 Z M 6.393 2.487 L 5.497 2.93 L 5.497 2.93 L 6.393 2.487 Z M 7.191 3.067 L 7.046 4.056 L 7.046 4.056 L 7.191 3.067 Z M 9.774 3.445 L 9.629 4.434 L 9.631 4.435 L 9.774 3.445 Z M 9.921 3.897 L 10.619 4.613 L 10.619 4.613 L 9.921 3.897 Z M 8.053 5.716 L 7.355 5 L 7.355 5 L 8.053 5.716 Z M 7.747 6.655 L 6.762 6.823 L 6.762 6.824 L 7.747 6.655 Z M 8.188 9.225 L 7.203 9.394 L 7.204 9.399 L 8.188 9.225 Z M 7.803 9.505 L 8.273 8.622 L 8.268 8.62 L 7.803 9.505 Z M 5.494 8.291 L 5.959 7.406 L 5.959 7.406 L 5.494 8.291 Z M 5.001 8.169 L 5.001 7.169 L 5.001 8.169 Z M 4.507 8.291 L 4.043 7.406 L 4.042 7.406 L 4.507 8.291 Z M 2.199 9.505 L 1.733 8.62 L 1.731 8.621 L 2.199 9.505 Z M 1.814 9.225 L 2.799 9.398 L 2.8 9.394 L 1.814 9.225 Z M 2.254 6.655 L 1.269 6.486 L 1.269 6.486 L 2.254 6.655 Z M 1.949 5.716 L 2.647 5 L 2.646 4.999 L 1.949 5.716 Z M 0.081 3.897 L 0.778 3.181 L 0.776 3.178 L 0.081 3.897 Z M 0.228 3.444 L 0.368 4.435 L 0.373 4.434 L 0.228 3.444 Z M 2.81 3.067 L 2.666 2.077 L 2.666 2.077 L 2.81 3.067 Z M 3.609 2.487 L 4.505 2.93 L 4.506 2.929 L 3.609 2.487 Z M 4.763 0.147 L 5.66 0.591 C 5.599 0.714 5.505 0.817 5.389 0.889 L 4.861 0.04 L 4.334 -0.81 C 4.133 -0.685 3.972 -0.507 3.867 -0.296 L 4.763 0.147 Z M 4.861 0.04 L 5.389 0.889 C 5.272 0.962 5.138 1 5.001 1 L 5.001 0 L 5.001 -1 C 4.765 -1 4.534 -0.934 4.334 -0.81 L 4.861 0.04 Z M 5.001 0 L 5.001 1 C 4.864 1 4.73 0.962 4.613 0.889 L 5.141 0.04 L 5.668 -0.81 C 5.468 -0.934 5.237 -1 5.001 -1 L 5.001 0 Z M 5.141 0.04 L 4.613 0.889 C 4.497 0.817 4.403 0.714 4.342 0.591 L 5.238 0.147 L 6.135 -0.296 C 6.03 -0.507 5.868 -0.685 5.668 -0.81 L 5.141 0.04 Z M 5.238 0.147 L 4.342 0.59 L 5.497 2.93 L 6.393 2.487 L 7.29 2.044 L 6.135 -0.295 L 5.238 0.147 Z M 6.393 2.487 L 5.497 2.93 C 5.645 3.229 5.863 3.488 6.133 3.684 L 6.721 2.875 L 7.309 2.066 C 7.301 2.061 7.294 2.053 7.29 2.044 L 6.393 2.487 Z M 6.721 2.875 L 6.133 3.684 C 6.402 3.88 6.716 4.008 7.046 4.056 L 7.191 3.067 L 7.336 2.078 C 7.326 2.076 7.317 2.072 7.309 2.066 L 6.721 2.875 Z M 7.191 3.067 L 7.046 4.056 L 9.629 4.434 L 9.774 3.445 L 9.919 2.455 L 7.336 2.077 L 7.191 3.067 Z M 9.774 3.445 L 9.631 4.435 C 9.495 4.415 9.367 4.358 9.262 4.269 L 9.907 3.505 L 10.551 2.74 C 10.37 2.588 10.151 2.489 9.917 2.455 L 9.774 3.445 Z M 9.907 3.505 L 9.262 4.269 C 9.157 4.181 9.079 4.065 9.037 3.935 L 9.988 3.625 L 10.939 3.316 C 10.866 3.091 10.731 2.892 10.551 2.74 L 9.907 3.505 Z M 9.988 3.625 L 9.037 3.935 C 8.995 3.804 8.989 3.664 9.022 3.531 L 9.993 3.771 L 10.964 4.01 C 11.021 3.781 11.012 3.54 10.939 3.316 L 9.988 3.625 Z M 9.993 3.771 L 9.022 3.531 C 9.055 3.398 9.125 3.277 9.223 3.181 L 9.921 3.897 L 10.619 4.613 C 10.788 4.448 10.908 4.239 10.964 4.01 L 9.993 3.771 Z M 9.921 3.897 L 9.223 3.181 L 7.355 5 L 8.053 5.716 L 8.751 6.432 L 10.619 4.613 L 9.921 3.897 Z M 8.053 5.716 L 7.355 5 C 7.116 5.233 6.937 5.521 6.833 5.838 L 7.784 6.148 L 8.735 6.457 C 8.738 6.448 8.744 6.439 8.751 6.432 L 8.053 5.716 Z M 7.784 6.148 L 6.833 5.838 C 6.73 6.156 6.705 6.494 6.762 6.823 L 7.747 6.655 L 8.733 6.487 C 8.731 6.477 8.732 6.467 8.735 6.457 L 7.784 6.148 Z M 7.747 6.655 L 6.762 6.824 L 7.203 9.394 L 8.188 9.225 L 9.174 9.056 L 8.733 6.486 L 7.747 6.655 Z M 8.188 9.225 L 7.204 9.399 C 7.18 9.263 7.194 9.123 7.246 8.996 L 8.173 9.37 L 9.1 9.745 C 9.189 9.525 9.214 9.285 9.173 9.051 L 8.188 9.225 Z M 8.173 9.37 L 7.246 8.996 C 7.298 8.868 7.384 8.757 7.495 8.676 L 8.083 9.485 L 8.671 10.295 C 8.863 10.155 9.012 9.965 9.1 9.745 L 8.173 9.37 Z M 8.083 9.485 L 7.495 8.676 C 7.607 8.595 7.739 8.547 7.876 8.538 L 7.946 9.535 L 8.015 10.533 C 8.252 10.517 8.479 10.434 8.671 10.295 L 8.083 9.485 Z M 7.946 9.535 L 7.876 8.538 C 8.014 8.528 8.151 8.558 8.273 8.622 L 7.803 9.505 L 7.333 10.388 C 7.542 10.499 7.779 10.549 8.015 10.533 L 7.946 9.535 Z M 7.803 9.505 L 8.268 8.62 L 5.959 7.406 L 5.494 8.291 L 5.029 9.176 L 7.338 10.39 L 7.803 9.505 Z M 5.494 8.291 L 5.959 7.406 C 5.663 7.25 5.334 7.169 5.001 7.169 L 5.001 8.169 L 5.001 9.169 C 5.011 9.169 5.02 9.172 5.029 9.176 L 5.494 8.291 Z M 5.001 8.169 L 5.001 7.169 C 4.667 7.169 4.338 7.25 4.043 7.406 L 4.507 8.291 L 4.972 9.176 C 4.981 9.172 4.991 9.169 5.001 9.169 L 5.001 8.169 Z M 4.507 8.291 L 4.042 7.406 L 1.733 8.62 L 2.199 9.505 L 2.664 10.39 L 4.973 9.176 L 4.507 8.291 Z M 2.199 9.505 L 1.731 8.621 C 1.853 8.557 1.99 8.528 2.127 8.538 L 2.056 9.535 L 1.985 10.533 C 2.221 10.549 2.458 10.5 2.667 10.389 L 2.199 9.505 Z M 2.056 9.535 L 2.127 8.538 C 2.264 8.547 2.396 8.595 2.507 8.676 L 1.919 9.485 L 1.331 10.294 C 1.522 10.433 1.749 10.516 1.985 10.533 L 2.056 9.535 Z M 1.919 9.485 L 2.507 8.676 C 2.618 8.757 2.705 8.868 2.756 8.995 L 1.829 9.37 L 0.902 9.745 C 0.991 9.964 1.139 10.155 1.331 10.294 L 1.919 9.485 Z M 1.829 9.37 L 2.756 8.995 C 2.808 9.123 2.823 9.262 2.799 9.398 L 1.814 9.225 L 0.829 9.052 C 0.788 9.285 0.813 9.525 0.902 9.745 L 1.829 9.37 Z M 1.814 9.225 L 2.8 9.394 L 3.24 6.824 L 2.254 6.655 L 1.269 6.486 L 0.828 9.056 L 1.814 9.225 Z M 2.254 6.655 L 3.24 6.825 C 3.297 6.495 3.272 6.157 3.169 5.839 L 2.218 6.148 L 1.267 6.457 C 1.27 6.467 1.27 6.477 1.269 6.486 L 2.254 6.655 Z M 2.218 6.148 L 3.169 5.839 C 3.065 5.521 2.886 5.233 2.647 5 L 1.949 5.716 L 1.251 6.432 C 1.258 6.439 1.264 6.448 1.267 6.457 L 2.218 6.148 Z M 1.949 5.716 L 2.646 4.999 L 0.778 3.181 L 0.081 3.897 L -0.617 4.614 L 1.251 6.432 L 1.949 5.716 Z M 0.081 3.897 L 0.776 3.178 C 0.875 3.274 0.945 3.395 0.978 3.529 L 0.008 3.771 L -0.962 4.013 C -0.905 4.243 -0.784 4.452 -0.614 4.617 L 0.081 3.897 Z M 0.008 3.771 L 0.978 3.529 C 1.011 3.662 1.007 3.803 0.964 3.934 L 0.013 3.625 L -0.938 3.316 C -1.011 3.542 -1.02 3.783 -0.962 4.013 L 0.008 3.771 Z M 0.013 3.625 L 0.964 3.934 C 0.922 4.065 0.843 4.181 0.738 4.27 L 0.095 3.504 L -0.549 2.738 C -0.73 2.891 -0.865 3.091 -0.938 3.316 L 0.013 3.625 Z M 0.095 3.504 L 0.738 4.27 C 0.632 4.358 0.504 4.415 0.368 4.435 L 0.228 3.444 L 0.088 2.454 C -0.147 2.487 -0.367 2.586 -0.549 2.738 L 0.095 3.504 Z M 0.228 3.444 L 0.373 4.434 L 2.955 4.056 L 2.81 3.067 L 2.666 2.077 L 0.083 2.455 L 0.228 3.444 Z M 2.81 3.067 L 2.954 4.057 C 3.285 4.008 3.599 3.881 3.869 3.685 L 3.281 2.875 L 2.694 2.066 C 2.686 2.072 2.676 2.076 2.666 2.077 L 2.81 3.067 Z M 3.281 2.875 L 3.869 3.685 C 4.139 3.488 4.358 3.229 4.505 2.93 L 3.609 2.487 L 2.712 2.044 C 2.708 2.053 2.701 2.061 2.694 2.066 L 3.281 2.875 Z M 3.609 2.487 L 4.506 2.929 L 5.66 0.59 L 4.763 0.147 L 3.867 -0.295 L 2.712 2.044 L 3.609 2.487 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--text-primary)",
      flexShrink: 0
    }
  }, "4.9"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 300,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--text-secondary)",
      flexShrink: 0
    }
  }, "(1.2K)")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "baseline",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 15,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(31,30,29)",
      flexShrink: 0
    }
  }, "AED 4,170.00"))), /*#__PURE__*/React.createElement(Button, {
    style: {
      position: "relative",
      height: 44,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "Add to Cart",
    type: "primary",
    size: "md",
    state: "default"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 12,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 16,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(235,235,232)",
      display: "flex",
      flexDirection: "column",
      gap: 12,
      padding: "12px 12px 12px 12px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 12,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 170,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }), /*#__PURE__*/React.createElement(Badge, {
    style: {
      position: "absolute",
      left: 8,
      top: 8
    },
    type: "discount"
  }), /*#__PURE__*/React.createElement(WislistIcon, {
    style: {
      position: "absolute",
      left: 128,
      top: 0,
      width: 44,
      height: 44
    },
    property1: "unclick"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 11,
      lineHeight: "100%",
      letterSpacing: "0.500px",
      color: "rgb(107,102,97)",
      textTransform: "uppercase",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Northgate"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      lineHeight: "100%",
      color: "rgb(31,30,29)",
      flexShrink: 0
    }
  }, "Grey Clou de Paris dial"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      height: 12,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 12,
      overflow: "hidden",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 10.001,
    height: 9.536,
    viewBox: "0 0 10.001 9.536",
    fill: "none",
    style: {
      position: "absolute",
      left: 1,
      top: 1,
      width: 10.001,
      height: 9.536,
      color: "rgb(212,175,55)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.763 0.147 L 3.867 -0.296 L 3.867 -0.295 L 4.763 0.147 Z M 5.001 0 L 5.001 -1 L 5.001 0 Z M 5.238 0.147 L 6.135 -0.295 L 6.135 -0.296 L 5.238 0.147 Z M 6.393 2.487 L 5.497 2.93 L 5.497 2.93 L 6.393 2.487 Z M 7.191 3.067 L 7.046 4.056 L 7.046 4.056 L 7.191 3.067 Z M 9.774 3.445 L 9.629 4.434 L 9.631 4.435 L 9.774 3.445 Z M 9.921 3.897 L 10.619 4.613 L 10.619 4.613 L 9.921 3.897 Z M 8.053 5.716 L 7.355 5 L 7.355 5 L 8.053 5.716 Z M 7.747 6.655 L 6.762 6.823 L 6.762 6.824 L 7.747 6.655 Z M 8.188 9.225 L 7.203 9.394 L 7.204 9.399 L 8.188 9.225 Z M 7.803 9.505 L 8.273 8.622 L 8.268 8.62 L 7.803 9.505 Z M 5.494 8.291 L 5.959 7.406 L 5.959 7.406 L 5.494 8.291 Z M 5.001 8.169 L 5.001 7.169 L 5.001 8.169 Z M 4.507 8.291 L 4.043 7.406 L 4.042 7.406 L 4.507 8.291 Z M 2.199 9.505 L 1.733 8.62 L 1.731 8.621 L 2.199 9.505 Z M 1.814 9.225 L 2.799 9.398 L 2.8 9.394 L 1.814 9.225 Z M 2.254 6.655 L 1.269 6.486 L 1.269 6.486 L 2.254 6.655 Z M 1.949 5.716 L 2.647 5 L 2.646 4.999 L 1.949 5.716 Z M 0.081 3.897 L 0.778 3.181 L 0.776 3.178 L 0.081 3.897 Z M 0.228 3.444 L 0.368 4.435 L 0.373 4.434 L 0.228 3.444 Z M 2.81 3.067 L 2.666 2.077 L 2.666 2.077 L 2.81 3.067 Z M 3.609 2.487 L 4.505 2.93 L 4.506 2.929 L 3.609 2.487 Z M 4.763 0.147 L 5.66 0.591 C 5.599 0.714 5.505 0.817 5.389 0.889 L 4.861 0.04 L 4.334 -0.81 C 4.133 -0.685 3.972 -0.507 3.867 -0.296 L 4.763 0.147 Z M 4.861 0.04 L 5.389 0.889 C 5.272 0.962 5.138 1 5.001 1 L 5.001 0 L 5.001 -1 C 4.765 -1 4.534 -0.934 4.334 -0.81 L 4.861 0.04 Z M 5.001 0 L 5.001 1 C 4.864 1 4.73 0.962 4.613 0.889 L 5.141 0.04 L 5.668 -0.81 C 5.468 -0.934 5.237 -1 5.001 -1 L 5.001 0 Z M 5.141 0.04 L 4.613 0.889 C 4.497 0.817 4.403 0.714 4.342 0.591 L 5.238 0.147 L 6.135 -0.296 C 6.03 -0.507 5.868 -0.685 5.668 -0.81 L 5.141 0.04 Z M 5.238 0.147 L 4.342 0.59 L 5.497 2.93 L 6.393 2.487 L 7.29 2.044 L 6.135 -0.295 L 5.238 0.147 Z M 6.393 2.487 L 5.497 2.93 C 5.645 3.229 5.863 3.488 6.133 3.684 L 6.721 2.875 L 7.309 2.066 C 7.301 2.061 7.294 2.053 7.29 2.044 L 6.393 2.487 Z M 6.721 2.875 L 6.133 3.684 C 6.402 3.88 6.716 4.008 7.046 4.056 L 7.191 3.067 L 7.336 2.078 C 7.326 2.076 7.317 2.072 7.309 2.066 L 6.721 2.875 Z M 7.191 3.067 L 7.046 4.056 L 9.629 4.434 L 9.774 3.445 L 9.919 2.455 L 7.336 2.077 L 7.191 3.067 Z M 9.774 3.445 L 9.631 4.435 C 9.495 4.415 9.367 4.358 9.262 4.269 L 9.907 3.505 L 10.551 2.74 C 10.37 2.588 10.151 2.489 9.917 2.455 L 9.774 3.445 Z M 9.907 3.505 L 9.262 4.269 C 9.157 4.181 9.079 4.065 9.037 3.935 L 9.988 3.625 L 10.939 3.316 C 10.866 3.091 10.731 2.892 10.551 2.74 L 9.907 3.505 Z M 9.988 3.625 L 9.037 3.935 C 8.995 3.804 8.989 3.664 9.022 3.531 L 9.993 3.771 L 10.964 4.01 C 11.021 3.781 11.012 3.54 10.939 3.316 L 9.988 3.625 Z M 9.993 3.771 L 9.022 3.531 C 9.055 3.398 9.125 3.277 9.223 3.181 L 9.921 3.897 L 10.619 4.613 C 10.788 4.448 10.908 4.239 10.964 4.01 L 9.993 3.771 Z M 9.921 3.897 L 9.223 3.181 L 7.355 5 L 8.053 5.716 L 8.751 6.432 L 10.619 4.613 L 9.921 3.897 Z M 8.053 5.716 L 7.355 5 C 7.116 5.233 6.937 5.521 6.833 5.838 L 7.784 6.148 L 8.735 6.457 C 8.738 6.448 8.744 6.439 8.751 6.432 L 8.053 5.716 Z M 7.784 6.148 L 6.833 5.838 C 6.73 6.156 6.705 6.494 6.762 6.823 L 7.747 6.655 L 8.733 6.487 C 8.731 6.477 8.732 6.467 8.735 6.457 L 7.784 6.148 Z M 7.747 6.655 L 6.762 6.824 L 7.203 9.394 L 8.188 9.225 L 9.174 9.056 L 8.733 6.486 L 7.747 6.655 Z M 8.188 9.225 L 7.204 9.399 C 7.18 9.263 7.194 9.123 7.246 8.996 L 8.173 9.37 L 9.1 9.745 C 9.189 9.525 9.214 9.285 9.173 9.051 L 8.188 9.225 Z M 8.173 9.37 L 7.246 8.996 C 7.298 8.868 7.384 8.757 7.495 8.676 L 8.083 9.485 L 8.671 10.295 C 8.863 10.155 9.012 9.965 9.1 9.745 L 8.173 9.37 Z M 8.083 9.485 L 7.495 8.676 C 7.607 8.595 7.739 8.547 7.876 8.538 L 7.946 9.535 L 8.015 10.533 C 8.252 10.517 8.479 10.434 8.671 10.295 L 8.083 9.485 Z M 7.946 9.535 L 7.876 8.538 C 8.014 8.528 8.151 8.558 8.273 8.622 L 7.803 9.505 L 7.333 10.388 C 7.542 10.499 7.779 10.549 8.015 10.533 L 7.946 9.535 Z M 7.803 9.505 L 8.268 8.62 L 5.959 7.406 L 5.494 8.291 L 5.029 9.176 L 7.338 10.39 L 7.803 9.505 Z M 5.494 8.291 L 5.959 7.406 C 5.663 7.25 5.334 7.169 5.001 7.169 L 5.001 8.169 L 5.001 9.169 C 5.011 9.169 5.02 9.172 5.029 9.176 L 5.494 8.291 Z M 5.001 8.169 L 5.001 7.169 C 4.667 7.169 4.338 7.25 4.043 7.406 L 4.507 8.291 L 4.972 9.176 C 4.981 9.172 4.991 9.169 5.001 9.169 L 5.001 8.169 Z M 4.507 8.291 L 4.042 7.406 L 1.733 8.62 L 2.199 9.505 L 2.664 10.39 L 4.973 9.176 L 4.507 8.291 Z M 2.199 9.505 L 1.731 8.621 C 1.853 8.557 1.99 8.528 2.127 8.538 L 2.056 9.535 L 1.985 10.533 C 2.221 10.549 2.458 10.5 2.667 10.389 L 2.199 9.505 Z M 2.056 9.535 L 2.127 8.538 C 2.264 8.547 2.396 8.595 2.507 8.676 L 1.919 9.485 L 1.331 10.294 C 1.522 10.433 1.749 10.516 1.985 10.533 L 2.056 9.535 Z M 1.919 9.485 L 2.507 8.676 C 2.618 8.757 2.705 8.868 2.756 8.995 L 1.829 9.37 L 0.902 9.745 C 0.991 9.964 1.139 10.155 1.331 10.294 L 1.919 9.485 Z M 1.829 9.37 L 2.756 8.995 C 2.808 9.123 2.823 9.262 2.799 9.398 L 1.814 9.225 L 0.829 9.052 C 0.788 9.285 0.813 9.525 0.902 9.745 L 1.829 9.37 Z M 1.814 9.225 L 2.8 9.394 L 3.24 6.824 L 2.254 6.655 L 1.269 6.486 L 0.828 9.056 L 1.814 9.225 Z M 2.254 6.655 L 3.24 6.825 C 3.297 6.495 3.272 6.157 3.169 5.839 L 2.218 6.148 L 1.267 6.457 C 1.27 6.467 1.27 6.477 1.269 6.486 L 2.254 6.655 Z M 2.218 6.148 L 3.169 5.839 C 3.065 5.521 2.886 5.233 2.647 5 L 1.949 5.716 L 1.251 6.432 C 1.258 6.439 1.264 6.448 1.267 6.457 L 2.218 6.148 Z M 1.949 5.716 L 2.646 4.999 L 0.778 3.181 L 0.081 3.897 L -0.617 4.614 L 1.251 6.432 L 1.949 5.716 Z M 0.081 3.897 L 0.776 3.178 C 0.875 3.274 0.945 3.395 0.978 3.529 L 0.008 3.771 L -0.962 4.013 C -0.905 4.243 -0.784 4.452 -0.614 4.617 L 0.081 3.897 Z M 0.008 3.771 L 0.978 3.529 C 1.011 3.662 1.007 3.803 0.964 3.934 L 0.013 3.625 L -0.938 3.316 C -1.011 3.542 -1.02 3.783 -0.962 4.013 L 0.008 3.771 Z M 0.013 3.625 L 0.964 3.934 C 0.922 4.065 0.843 4.181 0.738 4.27 L 0.095 3.504 L -0.549 2.738 C -0.73 2.891 -0.865 3.091 -0.938 3.316 L 0.013 3.625 Z M 0.095 3.504 L 0.738 4.27 C 0.632 4.358 0.504 4.415 0.368 4.435 L 0.228 3.444 L 0.088 2.454 C -0.147 2.487 -0.367 2.586 -0.549 2.738 L 0.095 3.504 Z M 0.228 3.444 L 0.373 4.434 L 2.955 4.056 L 2.81 3.067 L 2.666 2.077 L 0.083 2.455 L 0.228 3.444 Z M 2.81 3.067 L 2.954 4.057 C 3.285 4.008 3.599 3.881 3.869 3.685 L 3.281 2.875 L 2.694 2.066 C 2.686 2.072 2.676 2.076 2.666 2.077 L 2.81 3.067 Z M 3.281 2.875 L 3.869 3.685 C 4.139 3.488 4.358 3.229 4.505 2.93 L 3.609 2.487 L 2.712 2.044 C 2.708 2.053 2.701 2.061 2.694 2.066 L 3.281 2.875 Z M 3.609 2.487 L 4.506 2.929 L 5.66 0.59 L 4.763 0.147 L 3.867 -0.295 L 2.712 2.044 L 3.609 2.487 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--text-primary)",
      flexShrink: 0
    }
  }, "4.9"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 300,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--text-secondary)",
      flexShrink: 0
    }
  }, "(1.2K)")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "baseline",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Geist, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 15,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(31,30,29)",
      flexShrink: 0
    }
  }, "AED 1529.00"))), /*#__PURE__*/React.createElement(Button, {
    style: {
      position: "relative",
      height: 44,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "Add to Cart",
    type: "primary",
    size: "md",
    state: "default"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 999,
      boxShadow: "inset 0 0 0 1px rgb(217,217,217)",
      display: "flex",
      flexDirection: "row",
      padding: "12px 0px 12px 0px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(77,77,77)",
      flexShrink: 0
    }
  }, "Refresh AI Picks")))));
}

// figma node: 652:8898 Screen 1: AI Gift Finder
function Screen1AIGiftFinder(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 440,
      height: 956,
      minHeight: 956,
      overflow: "hidden",
      borderRadius: 32,
      backgroundColor: "var(--bg-default)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 20,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      background: "linear-gradient(180deg, rgb(226,126,114) 0.00%, rgb(243,161,149) 100.00%)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 64,
      display: "flex",
      flexDirection: "row",
      padding: "0px 20px 0px 30px",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, "9:41"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 68,
      height: 12,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 3,
    height: 6,
    viewBox: "0 0 3 6",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 6,
      width: 3,
      height: 6,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2 0 L 1 0 C 0.448 0 0 0.448 0 1 L 0 5 C 0 5.552 0.448 6 1 6 L 2 6 C 2.552 6 3 5.552 3 5 L 3 1 C 3 0.448 2.552 0 2 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3,
    height: 8,
    viewBox: "0 0 3 8",
    fill: "none",
    style: {
      position: "absolute",
      left: 5,
      top: 4,
      width: 3,
      height: 8,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2 0 L 1 0 C 0.448 0 0 0.448 0 1 L 0 7 C 0 7.552 0.448 8 1 8 L 2 8 C 2.552 8 3 7.552 3 7 L 3 1 C 3 0.448 2.552 0 2 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3,
    height: 10,
    viewBox: "0 0 3 10",
    fill: "none",
    style: {
      position: "absolute",
      left: 10,
      top: 2,
      width: 3,
      height: 10,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2 0 L 1 0 C 0.448 0 0 0.448 0 1 L 0 9 C 0 9.552 0.448 10 1 10 L 2 10 C 2.552 10 3 9.552 3 9 L 3 1 C 3 0.448 2.552 0 2 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3,
    height: 12,
    viewBox: "0 0 3 12",
    fill: "none",
    style: {
      position: "absolute",
      left: 15,
      top: 0,
      width: 3,
      height: 12,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2 0 L 1 0 C 0.448 0 0 0.448 0 1 L 0 11 C 0 11.552 0.448 12 1 12 L 2 12 C 2.552 12 3 11.552 3 11 L 3 1 C 3 0.448 2.552 0 2 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 10,
    height: 1.755,
    viewBox: "0 0 10 1.755",
    fill: "none",
    style: {
      position: "absolute",
      left: 31,
      top: 2.745,
      width: 10,
      height: 1.755,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M -0.5 1.131 C -0.845 1.407 -0.901 1.91 -0.624 2.255 C -0.348 2.6 0.155 2.656 0.5 2.38 L 0 1.755 L -0.5 1.131 Z M 9.5 2.38 C 9.845 2.656 10.348 2.6 10.625 2.255 C 10.901 1.91 10.845 1.407 10.5 1.131 L 10 1.755 L 9.5 2.38 Z M 0 1.755 L 0.5 2.38 C 1.777 1.357 3.364 0.8 5 0.8 L 5 0 L 5 -0.8 C 3.001 -0.8 1.061 -0.119 -0.5 1.131 L 0 1.755 Z M 5 0 L 5 0.8 C 6.636 0.8 8.223 1.357 9.5 2.38 L 10 1.755 L 10.5 1.131 C 8.939 -0.119 6.999 -0.8 5 -0.8 L 5 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 6,
    height: 1,
    viewBox: "0 0 6 1",
    fill: "none",
    style: {
      position: "absolute",
      left: 33,
      top: 6.2,
      width: 6,
      height: 1,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M -0.48 0.36 C -0.833 0.625 -0.905 1.127 -0.64 1.48 C -0.375 1.833 0.127 1.905 0.48 1.64 L 0 1 L -0.48 0.36 Z M 3 0 L 3 0.8 L 3 0 Z M 5.52 1.64 C 5.873 1.905 6.375 1.833 6.64 1.48 C 6.905 1.127 6.833 0.625 6.48 0.36 L 6 1 L 5.52 1.64 Z M 0 1 L 0.48 1.64 C 1.207 1.095 2.091 0.8 3 0.8 L 3 0 L 3 -0.8 C 1.745 -0.8 0.524 -0.393 -0.48 0.36 L 0 1 Z M 3 0 L 3 0.8 C 3.909 0.8 4.793 1.095 5.52 1.64 L 6 1 L 6.48 0.36 C 5.476 -0.393 4.255 -0.8 3 -0.8 L 3 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 2.600,
    height: 2.600,
    viewBox: "0 0 2.600 2.600",
    fill: "none",
    style: {
      position: "absolute",
      left: 34.7,
      top: 8.7,
      width: 2.6,
      height: 2.6,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.3 2.6 C 2.018 2.6 2.6 2.018 2.6 1.3 C 2.6 0.582 2.018 0 1.3 0 C 0.582 0 0 0.582 0 1.3 C 0 2.018 0.582 2.6 1.3 2.6 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 20,
    height: 10,
    viewBox: "0 0 20 10",
    fill: "none",
    style: {
      position: "absolute",
      left: 46,
      top: 1,
      width: 20,
      height: 10,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3 0 L 3 0.5 L 17 0.5 L 17 0 L 17 -0.5 L 3 -0.5 L 3 0 Z M 17 0 L 17 0.5 C 18.381 0.5 19.5 1.619 19.5 3 L 20 3 L 20.5 3 C 20.5 1.067 18.933 -0.5 17 -0.5 L 17 0 Z M 20 3 L 19.5 3 L 19.5 7 L 20 7 L 20.5 7 L 20.5 3 L 20 3 Z M 20 7 L 19.5 7 C 19.5 8.381 18.381 9.5 17 9.5 L 17 10 L 17 10.5 C 18.933 10.5 20.5 8.933 20.5 7 L 20 7 Z M 17 10 L 17 9.5 L 3 9.5 L 3 10 L 3 10.5 L 17 10.5 L 17 10 Z M 3 10 L 3 9.5 C 1.619 9.5 0.5 8.381 0.5 7 L 0 7 L -0.5 7 C -0.5 8.933 1.067 10.5 3 10.5 L 3 10 Z M 0 7 L 0.5 7 L 0.5 3 L 0 3 L -0.5 3 L -0.5 7 L 0 7 Z M 0 3 L 0.5 3 C 0.5 1.619 1.619 0.5 3 0.5 L 3 0 L 3 -0.5 C 1.067 -0.5 -0.5 1.067 -0.5 3 L 0 3 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 13,
    height: 6,
    viewBox: "0 0 13 6",
    fill: "none",
    style: {
      position: "absolute",
      left: 48,
      top: 3,
      width: 13,
      height: 6,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 11.5 0 L 1.5 0 C 0.672 0 0 0.672 0 1.5 L 0 4.5 C 0 5.328 0.672 6 1.5 6 L 11.5 6 C 12.328 6 13 5.328 13 4.5 L 13 1.5 C 13 0.672 12.328 0 11.5 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 2,
    height: 4,
    viewBox: "0 0 2 4",
    fill: "none",
    style: {
      position: "absolute",
      left: 67,
      top: 4,
      width: 2,
      height: 4,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 0 4 C 0.53 4 1.039 3.789 1.414 3.414 C 1.789 3.039 2 2.53 2 2 C 2 1.47 1.789 0.961 1.414 0.586 C 1.039 0.211 0.53 0 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-md) * 1px)",
      padding: "0px 16px 4px 16px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-lg) * 1px)",
      paddingRight: "calc(var(--spacing-lg) * 1px)",
      paddingBottom: "calc(var(--spacing-2xs) * 1px)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 44,
      height: 44,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 6,
      top: 6,
      width: 32,
      height: "calc(var(--icon-2xl) * 1px)",
      overflow: "hidden",
      borderRadius: 999,
      backgroundColor: "var(--bg-subtle)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: "calc(var(--icon-sm) * 1px)",
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 4,
    height: 8,
    viewBox: "0 0 4 8",
    fill: "none",
    style: {
      position: "absolute",
      left: 6,
      top: 4,
      width: 4,
      height: 8,
      color: "var(--icon-primary)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.293 8.707 C 3.683 9.098 4.317 9.098 4.707 8.707 C 5.098 8.317 5.098 7.683 4.707 7.293 L 4 8 L 3.293 8.707 Z M 0 4 L -0.707 3.293 C -1.098 3.683 -1.098 4.317 -0.707 4.707 L 0 4 Z M 4.707 0.707 C 5.098 0.317 5.098 -0.317 4.707 -0.707 C 4.317 -1.098 3.683 -1.098 3.293 -0.707 L 4 0 L 4.707 0.707 Z M 4 8 L 4.707 7.293 L 0.707 3.293 L 0 4 L -0.707 4.707 L 3.293 8.707 L 4 8 Z M 0 4 L 0.707 4.707 L 4.707 0.707 L 4 0 L 3.293 -0.707 L -0.707 3.293 L 0 4 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 2,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 18,
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      lineHeight: "100%",
      color: "var(--text-on-brand)",
      flexShrink: 0
    }
  }, "Gift Finder AI"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      lineHeight: "100%",
      color: "rgba(255,255,255,0.8)",
      flexShrink: 0
    }
  }, "Step 1 of 4: Profile & Recipient")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 20,
      padding: "0px 20px 0px 20px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 16,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px var(--border-default)",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "16px 16px 16px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--text-primary)",
      flexShrink: 0
    }
  }, "Curator Progress"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--text-brand)",
      flexShrink: 0
    }
  }, "25%")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 6,
      borderRadius: 999,
      backgroundColor: "var(--bg-subtle)",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 90,
      borderRadius: 999,
      backgroundColor: "var(--bg-brand)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 20,
      lineHeight: "100%",
      color: "var(--text-primary)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Who is this gift for?"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 12,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 12,
      backgroundColor: "var(--bg-brand-tint)",
      boxShadow: "inset 0 0 0 2px var(--bg-brand)",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "16px 16px 16px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 28,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(0,0,0)",
      flexShrink: 0
    }
  }, "\u2764\uFE0F"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 2,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--text-primary)",
      flexShrink: 0
    }
  }, "Partner"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 11,
      lineHeight: "100%",
      color: "var(--text-tertiary)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "For your special someone"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 12,
      backgroundColor: "var(--bg-cream)",
      boxShadow: "inset 0 0 0 1px var(--border-muted)",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "16px 16px 16px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 28,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(0,0,0)",
      flexShrink: 0
    }
  }, "\uD83C\uDF38"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 2,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--text-primary)",
      flexShrink: 0
    }
  }, "Parent"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 11,
      lineHeight: "100%",
      color: "var(--text-tertiary)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Show gratitude & love")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 12,
      backgroundColor: "var(--bg-cream)",
      boxShadow: "inset 0 0 0 1px var(--border-muted)",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "16px 16px 16px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 28,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(0,0,0)",
      flexShrink: 0
    }
  }, "\u2728"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 2,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--text-primary)",
      flexShrink: 0
    }
  }, "Friend"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 11,
      lineHeight: "100%",
      color: "var(--text-tertiary)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "A thoughtful celebration"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 12,
      backgroundColor: "var(--bg-cream)",
      boxShadow: "inset 0 0 0 1px var(--border-muted)",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "16px 16px 16px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 28,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(0,0,0)",
      flexShrink: 0
    }
  }, "\uD83E\uDDF8"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 2,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--text-primary)",
      flexShrink: 0
    }
  }, "Child"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 11,
      lineHeight: "100%",
      color: "var(--text-tertiary)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Joyful surprises")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 12,
      backgroundColor: "var(--bg-cream)",
      boxShadow: "inset 0 0 0 1px var(--border-muted)",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "16px 16px 16px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 28,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(0,0,0)",
      flexShrink: 0
    }
  }, "\uD83D\uDCBC"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 2,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--text-primary)",
      flexShrink: 0
    }
  }, "Colleague"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 11,
      lineHeight: "100%",
      color: "var(--text-tertiary)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Sophisticated style"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 12,
      backgroundColor: "var(--bg-cream)",
      boxShadow: "inset 0 0 0 1px var(--border-muted)",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "16px 16px 16px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 28,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(0,0,0)",
      flexShrink: 0
    }
  }, "\uD83C\uDF1F"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 2,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--text-primary)",
      flexShrink: 0
    }
  }, "Self"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 11,
      lineHeight: "100%",
      color: "var(--text-tertiary)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Indulge in a premium treat"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--text-primary)",
      flexShrink: 0
    }
  }, "Set Budget Limit"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 52,
      borderRadius: 12,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px var(--border-muted)",
      display: "flex",
      flexDirection: "row",
      padding: "0px 16px 0px 16px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--text-primary)",
      flexShrink: 0
    }
  }, "AED 500 max"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 79,
      display: "flex",
      flexDirection: "column",
      gap: 12,
      padding: "20px 0px 20px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      padding: "0px 20px 0px 20px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 11,
      textAlign: "center",
      lineHeight: "100%",
      color: "var(--text-tertiary)",
      flexGrow: 1
    }
  }, "* The app automatically loads region-specific curators for the UAE.")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(HomeIndicator, {
    style: {
      position: "relative",
      height: 34,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    }
  }))));
}

// figma node: 516:10476 AI Voice Assistant
function AIVoiceAssistant(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 440,
      height: 956,
      overflow: "hidden",
      borderRadius: 32,
      backgroundColor: "var(--bg-inverse)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 44,
      display: "flex",
      flexDirection: "row",
      padding: "0px 20px 0px 30px",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, "9:41"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 68,
      height: 12,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 3,
    height: 6,
    viewBox: "0 0 3 6",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 6,
      width: 3,
      height: 6,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2 0 L 1 0 C 0.448 0 0 0.448 0 1 L 0 5 C 0 5.552 0.448 6 1 6 L 2 6 C 2.552 6 3 5.552 3 5 L 3 1 C 3 0.448 2.552 0 2 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3,
    height: 8,
    viewBox: "0 0 3 8",
    fill: "none",
    style: {
      position: "absolute",
      left: 5,
      top: 4,
      width: 3,
      height: 8,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2 0 L 1 0 C 0.448 0 0 0.448 0 1 L 0 7 C 0 7.552 0.448 8 1 8 L 2 8 C 2.552 8 3 7.552 3 7 L 3 1 C 3 0.448 2.552 0 2 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3,
    height: 10,
    viewBox: "0 0 3 10",
    fill: "none",
    style: {
      position: "absolute",
      left: 10,
      top: 2,
      width: 3,
      height: 10,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2 0 L 1 0 C 0.448 0 0 0.448 0 1 L 0 9 C 0 9.552 0.448 10 1 10 L 2 10 C 2.552 10 3 9.552 3 9 L 3 1 C 3 0.448 2.552 0 2 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3,
    height: 12,
    viewBox: "0 0 3 12",
    fill: "none",
    style: {
      position: "absolute",
      left: 15,
      top: 0,
      width: 3,
      height: 12,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2 0 L 1 0 C 0.448 0 0 0.448 0 1 L 0 11 C 0 11.552 0.448 12 1 12 L 2 12 C 2.552 12 3 11.552 3 11 L 3 1 C 3 0.448 2.552 0 2 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 10,
    height: 1.755,
    viewBox: "0 0 10 1.755",
    fill: "none",
    style: {
      position: "absolute",
      left: 31,
      top: 2.745,
      width: 10,
      height: 1.755,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M -0.5 1.131 C -0.845 1.407 -0.901 1.91 -0.624 2.255 C -0.348 2.6 0.155 2.656 0.5 2.38 L 0 1.755 L -0.5 1.131 Z M 9.5 2.38 C 9.845 2.656 10.348 2.6 10.625 2.255 C 10.901 1.91 10.845 1.407 10.5 1.131 L 10 1.755 L 9.5 2.38 Z M 0 1.755 L 0.5 2.38 C 1.777 1.357 3.364 0.8 5 0.8 L 5 0 L 5 -0.8 C 3.001 -0.8 1.061 -0.119 -0.5 1.131 L 0 1.755 Z M 5 0 L 5 0.8 C 6.636 0.8 8.223 1.357 9.5 2.38 L 10 1.755 L 10.5 1.131 C 8.939 -0.119 6.999 -0.8 5 -0.8 L 5 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 6,
    height: 1,
    viewBox: "0 0 6 1",
    fill: "none",
    style: {
      position: "absolute",
      left: 33,
      top: 6.2,
      width: 6,
      height: 1,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M -0.48 0.36 C -0.833 0.625 -0.905 1.127 -0.64 1.48 C -0.375 1.833 0.127 1.905 0.48 1.64 L 0 1 L -0.48 0.36 Z M 3 0 L 3 0.8 L 3 0 Z M 5.52 1.64 C 5.873 1.905 6.375 1.833 6.64 1.48 C 6.905 1.127 6.833 0.625 6.48 0.36 L 6 1 L 5.52 1.64 Z M 0 1 L 0.48 1.64 C 1.207 1.095 2.091 0.8 3 0.8 L 3 0 L 3 -0.8 C 1.745 -0.8 0.524 -0.393 -0.48 0.36 L 0 1 Z M 3 0 L 3 0.8 C 3.909 0.8 4.793 1.095 5.52 1.64 L 6 1 L 6.48 0.36 C 5.476 -0.393 4.255 -0.8 3 -0.8 L 3 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 2.600,
    height: 2.600,
    viewBox: "0 0 2.600 2.600",
    fill: "none",
    style: {
      position: "absolute",
      left: 34.7,
      top: 8.7,
      width: 2.6,
      height: 2.6,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.3 2.6 C 2.018 2.6 2.6 2.018 2.6 1.3 C 2.6 0.582 2.018 0 1.3 0 C 0.582 0 0 0.582 0 1.3 C 0 2.018 0.582 2.6 1.3 2.6 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 20,
    height: 10,
    viewBox: "0 0 20 10",
    fill: "none",
    style: {
      position: "absolute",
      left: 46,
      top: 1,
      width: 20,
      height: 10,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3 0 L 3 0.5 L 17 0.5 L 17 0 L 17 -0.5 L 3 -0.5 L 3 0 Z M 17 0 L 17 0.5 C 18.381 0.5 19.5 1.619 19.5 3 L 20 3 L 20.5 3 C 20.5 1.067 18.933 -0.5 17 -0.5 L 17 0 Z M 20 3 L 19.5 3 L 19.5 7 L 20 7 L 20.5 7 L 20.5 3 L 20 3 Z M 20 7 L 19.5 7 C 19.5 8.381 18.381 9.5 17 9.5 L 17 10 L 17 10.5 C 18.933 10.5 20.5 8.933 20.5 7 L 20 7 Z M 17 10 L 17 9.5 L 3 9.5 L 3 10 L 3 10.5 L 17 10.5 L 17 10 Z M 3 10 L 3 9.5 C 1.619 9.5 0.5 8.381 0.5 7 L 0 7 L -0.5 7 C -0.5 8.933 1.067 10.5 3 10.5 L 3 10 Z M 0 7 L 0.5 7 L 0.5 3 L 0 3 L -0.5 3 L -0.5 7 L 0 7 Z M 0 3 L 0.5 3 C 0.5 1.619 1.619 0.5 3 0.5 L 3 0 L 3 -0.5 C 1.067 -0.5 -0.5 1.067 -0.5 3 L 0 3 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 13,
    height: 6,
    viewBox: "0 0 13 6",
    fill: "none",
    style: {
      position: "absolute",
      left: 48,
      top: 3,
      width: 13,
      height: 6,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 11.5 0 L 1.5 0 C 0.672 0 0 0.672 0 1.5 L 0 4.5 C 0 5.328 0.672 6 1.5 6 L 11.5 6 C 12.328 6 13 5.328 13 4.5 L 13 1.5 C 13 0.672 12.328 0 11.5 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 2,
    height: 4,
    viewBox: "0 0 2 4",
    fill: "none",
    style: {
      position: "absolute",
      left: 67,
      top: 4,
      width: 2,
      height: 4,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 0 4 C 0.53 4 1.039 3.789 1.414 3.414 C 1.789 3.039 2 2.53 2 2 C 2 1.47 1.789 0.961 1.414 0.586 C 1.039 0.211 0.53 0 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      padding: "12px 16px 12px 16px",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 999,
      backgroundColor: "rgba(0,0,0,0.5)",
      display: "flex",
      flexDirection: "row",
      padding: "8px 8px 8px 8px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 9.334,
    height: 9.334,
    viewBox: "0 0 9.334 9.334",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.333,
      top: 3.333,
      width: 9.334,
      height: 9.334,
      color: "var(--icon-on-brand)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.96 10.042 C 4.351 10.432 4.984 10.432 5.374 10.042 C 5.765 9.651 5.765 9.018 5.374 8.627 L 4.667 9.334 L 3.96 10.042 Z M 0 4.667 L -0.707 3.96 L -1.414 4.667 L -0.707 5.374 L 0 4.667 Z M 5.374 0.707 C 5.765 0.317 5.765 -0.317 5.374 -0.707 C 4.984 -1.098 4.351 -1.098 3.96 -0.707 L 4.667 0 L 5.374 0.707 Z M 9.334 5.667 C 9.887 5.667 10.334 5.219 10.334 4.667 C 10.334 4.115 9.887 3.667 9.334 3.667 L 9.334 4.667 L 9.334 5.667 Z M 4.667 9.334 L 5.374 8.627 L 0.707 3.96 L 0 4.667 L -0.707 5.374 L 3.96 10.042 L 4.667 9.334 Z M 0 4.667 L 0.707 5.374 L 5.374 0.707 L 4.667 0 L 3.96 -0.707 L -0.707 3.96 L 0 4.667 Z M 0 4.667 L 0 5.667 L 9.334 5.667 L 9.334 4.667 L 9.334 3.667 L 0 3.667 L 0 4.667 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 18,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--text-inverse)",
      flexShrink: 0
    }
  }, "TheEvents AI Assistant")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 108,
      display: "flex",
      flexDirection: "column",
      gap: 12,
      padding: "40px 16px 40px 16px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-lg) * 1px)",
      paddingRight: "calc(var(--spacing-lg) * 1px)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      opacity: 0.6,
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 18,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, "TheEvents AI Voice Assistant"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 28,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, "Listening...")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 160,
      height: 160,
      borderRadius: 999,
      backgroundColor: "rgba(243,161,149,0.102)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 120,
      height: 120,
      borderRadius: 999,
      backgroundColor: "rgba(243,161,149,0.2)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 80,
      height: 80,
      borderRadius: 999,
      backgroundColor: "rgb(243,161,149)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 18.669,
    height: 26.669,
    viewBox: "0 0 18.669 26.669",
    fill: "none",
    style: {
      position: "absolute",
      left: 6.666,
      top: 2.666,
      width: 18.669,
      height: 26.669,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 9.334 22.668 L 9.334 21.668 L 9.334 22.668 Z M 8.334 26.669 C 8.334 27.221 8.782 27.669 9.334 27.669 C 9.887 27.669 10.334 27.221 10.334 26.669 L 9.334 26.669 L 8.334 26.669 Z M 18.669 13.334 L 19.669 13.334 L 18.669 13.334 Z M 19.669 10.668 C 19.669 10.115 19.221 9.668 18.669 9.668 C 18.117 9.668 17.669 10.115 17.669 10.668 L 18.669 10.668 L 19.669 10.668 Z M 0 13.334 L -1 13.334 L 0 13.334 Z M 1 10.668 C 1 10.115 0.552 9.668 0 9.668 C -0.552 9.668 -1 10.115 -1 10.668 L 0 10.668 L 1 10.668 Z M 9.334 22.668 L 8.334 22.668 L 8.334 26.669 L 9.334 26.669 L 10.334 26.669 L 10.334 22.668 L 9.334 22.668 Z M 9.334 22.668 L 9.334 23.668 C 12.075 23.668 14.704 22.58 16.642 20.642 L 15.935 19.935 L 15.228 19.227 C 13.665 20.79 11.545 21.668 9.334 21.668 L 9.334 22.668 Z M 15.935 19.935 L 16.642 20.642 C 18.58 18.704 19.669 16.075 19.669 13.334 L 18.669 13.334 L 17.669 13.334 C 17.669 15.545 16.791 17.665 15.228 19.227 L 15.935 19.935 Z M 18.669 13.334 L 19.669 13.334 L 19.669 10.668 L 18.669 10.668 L 17.669 10.668 L 17.669 13.334 L 18.669 13.334 Z M 9.334 22.668 L 9.334 21.668 C 7.124 21.668 5.004 20.79 3.441 19.227 L 2.734 19.935 L 2.027 20.642 C 3.965 22.58 6.594 23.668 9.334 23.668 L 9.334 22.668 Z M 2.734 19.935 L 3.441 19.227 C 1.878 17.665 1 15.545 1 13.334 L 0 13.334 L -1 13.334 C -1 16.075 0.089 18.704 2.027 20.642 L 2.734 19.935 Z M 0 13.334 L 1 13.334 L 1 10.668 L 0 10.668 L -1 10.668 L -1 13.334 L 0 13.334 Z M 9.334 0 L 9.334 1 C 10.992 1 12.335 2.343 12.335 4 L 13.335 4 L 14.335 4 C 14.335 1.239 12.096 -1 9.334 -1 L 9.334 0 Z M 13.335 4 L 12.335 4 L 12.335 13.334 L 13.335 13.334 L 14.335 13.334 L 14.335 4 L 13.335 4 Z M 13.335 13.334 L 12.335 13.334 C 12.335 14.991 10.992 16.335 9.334 16.335 L 9.334 17.335 L 9.334 18.335 C 12.096 18.335 14.335 16.096 14.335 13.334 L 13.335 13.334 Z M 9.334 17.335 L 9.334 16.335 C 7.677 16.335 6.334 14.991 6.334 13.334 L 5.334 13.334 L 4.334 13.334 C 4.334 16.096 6.573 18.335 9.334 18.335 L 9.334 17.335 Z M 5.334 13.334 L 6.334 13.334 L 6.334 4 L 5.334 4 L 4.334 4 L 4.334 13.334 L 5.334 13.334 Z M 5.334 4 L 6.334 4 C 6.334 2.343 7.677 1 9.334 1 L 9.334 0 L 9.334 -1 C 6.573 -1 4.334 1.239 4.334 4 L 5.334 4 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 32,
      display: "flex",
      flexDirection: "row",
      gap: 6,
      padding: "40px 0px 40px 0px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 3,
      height: 12,
      borderRadius: 999,
      backgroundColor: "rgb(243,161,149)",
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 3,
      height: 24,
      borderRadius: 999,
      backgroundColor: "rgb(243,161,149)",
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 3,
      height: 32,
      borderRadius: 999,
      backgroundColor: "rgb(243,161,149)",
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 3,
      height: 16,
      borderRadius: 999,
      backgroundColor: "rgb(243,161,149)",
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 3,
      height: 28,
      borderRadius: 999,
      backgroundColor: "rgb(243,161,149)",
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 3,
      height: 8,
      borderRadius: 999,
      backgroundColor: "rgb(243,161,149)",
      flexShrink: 0
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 32,
      padding: "0px 16px 24px 16px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-lg) * 1px)",
      paddingRight: "calc(var(--spacing-lg) * 1px)",
      paddingBottom: "calc(var(--spacing-2xl) * 1px)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      opacity: 0.6,
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, "Try saying"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, "\"Find birthday gifts for mom under AED 1,000\"")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 999,
      boxShadow: "inset 0 0 0 1px rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      padding: "14px 32px 14px 32px",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, "Cancel"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 34,
      display: "flex",
      flexDirection: "column",
      padding: "0px 0px 8px 0px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 134,
      height: 5,
      opacity: 0.8,
      borderRadius: 999,
      backgroundColor: "rgb(255,255,255)",
      flexShrink: 0
    }
  })));
}

// figma node: 516:10509 Visual Search Camera
function VisualSearchCamera(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 440,
      height: 956,
      overflow: "hidden",
      borderRadius: 32,
      backgroundColor: "rgb(26,26,26)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-88dfbe4c89e8d373",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 440,
      height: 956
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 44,
      display: "flex",
      flexDirection: "row",
      padding: "0px 20px 0px 30px",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, "9:41"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 68,
      height: 12,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 3,
    height: 6,
    viewBox: "0 0 3 6",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 6,
      width: 3,
      height: 6,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2 0 L 1 0 C 0.448 0 0 0.448 0 1 L 0 5 C 0 5.552 0.448 6 1 6 L 2 6 C 2.552 6 3 5.552 3 5 L 3 1 C 3 0.448 2.552 0 2 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3,
    height: 8,
    viewBox: "0 0 3 8",
    fill: "none",
    style: {
      position: "absolute",
      left: 5,
      top: 4,
      width: 3,
      height: 8,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2 0 L 1 0 C 0.448 0 0 0.448 0 1 L 0 7 C 0 7.552 0.448 8 1 8 L 2 8 C 2.552 8 3 7.552 3 7 L 3 1 C 3 0.448 2.552 0 2 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3,
    height: 10,
    viewBox: "0 0 3 10",
    fill: "none",
    style: {
      position: "absolute",
      left: 10,
      top: 2,
      width: 3,
      height: 10,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2 0 L 1 0 C 0.448 0 0 0.448 0 1 L 0 9 C 0 9.552 0.448 10 1 10 L 2 10 C 2.552 10 3 9.552 3 9 L 3 1 C 3 0.448 2.552 0 2 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3,
    height: 12,
    viewBox: "0 0 3 12",
    fill: "none",
    style: {
      position: "absolute",
      left: 15,
      top: 0,
      width: 3,
      height: 12,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2 0 L 1 0 C 0.448 0 0 0.448 0 1 L 0 11 C 0 11.552 0.448 12 1 12 L 2 12 C 2.552 12 3 11.552 3 11 L 3 1 C 3 0.448 2.552 0 2 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 10,
    height: 1.755,
    viewBox: "0 0 10 1.755",
    fill: "none",
    style: {
      position: "absolute",
      left: 31,
      top: 2.745,
      width: 10,
      height: 1.755,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M -0.5 1.131 C -0.845 1.407 -0.901 1.91 -0.624 2.255 C -0.348 2.6 0.155 2.656 0.5 2.38 L 0 1.755 L -0.5 1.131 Z M 9.5 2.38 C 9.845 2.656 10.348 2.6 10.625 2.255 C 10.901 1.91 10.845 1.407 10.5 1.131 L 10 1.755 L 9.5 2.38 Z M 0 1.755 L 0.5 2.38 C 1.777 1.357 3.364 0.8 5 0.8 L 5 0 L 5 -0.8 C 3.001 -0.8 1.061 -0.119 -0.5 1.131 L 0 1.755 Z M 5 0 L 5 0.8 C 6.636 0.8 8.223 1.357 9.5 2.38 L 10 1.755 L 10.5 1.131 C 8.939 -0.119 6.999 -0.8 5 -0.8 L 5 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 6,
    height: 1,
    viewBox: "0 0 6 1",
    fill: "none",
    style: {
      position: "absolute",
      left: 33,
      top: 6.2,
      width: 6,
      height: 1,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M -0.48 0.36 C -0.833 0.625 -0.905 1.127 -0.64 1.48 C -0.375 1.833 0.127 1.905 0.48 1.64 L 0 1 L -0.48 0.36 Z M 3 0 L 3 0.8 L 3 0 Z M 5.52 1.64 C 5.873 1.905 6.375 1.833 6.64 1.48 C 6.905 1.127 6.833 0.625 6.48 0.36 L 6 1 L 5.52 1.64 Z M 0 1 L 0.48 1.64 C 1.207 1.095 2.091 0.8 3 0.8 L 3 0 L 3 -0.8 C 1.745 -0.8 0.524 -0.393 -0.48 0.36 L 0 1 Z M 3 0 L 3 0.8 C 3.909 0.8 4.793 1.095 5.52 1.64 L 6 1 L 6.48 0.36 C 5.476 -0.393 4.255 -0.8 3 -0.8 L 3 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 2.600,
    height: 2.600,
    viewBox: "0 0 2.600 2.600",
    fill: "none",
    style: {
      position: "absolute",
      left: 34.7,
      top: 8.7,
      width: 2.6,
      height: 2.6,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.3 2.6 C 2.018 2.6 2.6 2.018 2.6 1.3 C 2.6 0.582 2.018 0 1.3 0 C 0.582 0 0 0.582 0 1.3 C 0 2.018 0.582 2.6 1.3 2.6 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 20,
    height: 10,
    viewBox: "0 0 20 10",
    fill: "none",
    style: {
      position: "absolute",
      left: 46,
      top: 1,
      width: 20,
      height: 10,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3 0 L 3 0.5 L 17 0.5 L 17 0 L 17 -0.5 L 3 -0.5 L 3 0 Z M 17 0 L 17 0.5 C 18.381 0.5 19.5 1.619 19.5 3 L 20 3 L 20.5 3 C 20.5 1.067 18.933 -0.5 17 -0.5 L 17 0 Z M 20 3 L 19.5 3 L 19.5 7 L 20 7 L 20.5 7 L 20.5 3 L 20 3 Z M 20 7 L 19.5 7 C 19.5 8.381 18.381 9.5 17 9.5 L 17 10 L 17 10.5 C 18.933 10.5 20.5 8.933 20.5 7 L 20 7 Z M 17 10 L 17 9.5 L 3 9.5 L 3 10 L 3 10.5 L 17 10.5 L 17 10 Z M 3 10 L 3 9.5 C 1.619 9.5 0.5 8.381 0.5 7 L 0 7 L -0.5 7 C -0.5 8.933 1.067 10.5 3 10.5 L 3 10 Z M 0 7 L 0.5 7 L 0.5 3 L 0 3 L -0.5 3 L -0.5 7 L 0 7 Z M 0 3 L 0.5 3 C 0.5 1.619 1.619 0.5 3 0.5 L 3 0 L 3 -0.5 C 1.067 -0.5 -0.5 1.067 -0.5 3 L 0 3 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 13,
    height: 6,
    viewBox: "0 0 13 6",
    fill: "none",
    style: {
      position: "absolute",
      left: 48,
      top: 3,
      width: 13,
      height: 6,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 11.5 0 L 1.5 0 C 0.672 0 0 0.672 0 1.5 L 0 4.5 C 0 5.328 0.672 6 1.5 6 L 11.5 6 C 12.328 6 13 5.328 13 4.5 L 13 1.5 C 13 0.672 12.328 0 11.5 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 2,
    height: 4,
    viewBox: "0 0 2 4",
    fill: "none",
    style: {
      position: "absolute",
      left: 67,
      top: 4,
      width: 2,
      height: 4,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 0 4 C 0.53 4 1.039 3.789 1.414 3.414 C 1.789 3.039 2 2.53 2 2 C 2 1.47 1.789 0.961 1.414 0.586 C 1.039 0.211 0.53 0 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      padding: "12px 16px 12px 16px",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 999,
      backgroundColor: "rgba(0,0,0,0.5)",
      display: "flex",
      flexDirection: "row",
      padding: "8px 8px 8px 8px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 9.334,
    height: 9.334,
    viewBox: "0 0 9.334 9.334",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.333,
      top: 3.333,
      width: 9.334,
      height: 9.334,
      color: "var(--icon-on-brand)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.96 10.042 C 4.351 10.432 4.984 10.432 5.374 10.042 C 5.765 9.651 5.765 9.018 5.374 8.627 L 4.667 9.334 L 3.96 10.042 Z M 0 4.667 L -0.707 3.96 L -1.414 4.667 L -0.707 5.374 L 0 4.667 Z M 5.374 0.707 C 5.765 0.317 5.765 -0.317 5.374 -0.707 C 4.984 -1.098 4.351 -1.098 3.96 -0.707 L 4.667 0 L 5.374 0.707 Z M 9.334 5.667 C 9.887 5.667 10.334 5.219 10.334 4.667 C 10.334 4.115 9.887 3.667 9.334 3.667 L 9.334 4.667 L 9.334 5.667 Z M 4.667 9.334 L 5.374 8.627 L 0.707 3.96 L 0 4.667 L -0.707 5.374 L 3.96 10.042 L 4.667 9.334 Z M 0 4.667 L 0.707 5.374 L 5.374 0.707 L 4.667 0 L 3.96 -0.707 L -0.707 3.96 L 0 4.667 Z M 0 4.667 L 0 5.667 L 9.334 5.667 L 9.334 4.667 L 9.334 3.667 L 0 3.667 L 0 4.667 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 18,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--text-inverse)",
      flexShrink: 0
    }
  }, "Visual Search")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 240,
    height: 240,
    viewBox: "0 0 240 240",
    fill: "none",
    style: {
      position: "relative",
      width: 240,
      height: 240,
      borderRadius: 24,
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 24 240 L 24 239 C 19.808 239 15.881 237.88 12.499 235.923 L 11.998 236.788 L 11.497 237.654 C 15.176 239.782 19.447 241 24 241 L 24 240 Z M 3.212 228.002 L 4.077 227.501 C 2.12 224.119 1 220.192 1 216 L 0 216 L -1 216 C -1 220.553 0.218 224.824 2.346 228.503 L 3.212 228.002 Z M 0 216 L 1 216 L 1 205.333 L 0 205.333 L -1 205.333 L -1 216 L 0 216 Z M 0 194.667 L 1 194.667 L 1 173.333 L 0 173.333 L -1 173.333 L -1 194.667 L 0 194.667 Z M 0 162.667 L 1 162.667 L 1 141.333 L 0 141.333 L -1 141.333 L -1 162.667 L 0 162.667 Z M 0 130.667 L 1 130.667 L 1 109.333 L 0 109.333 L -1 109.333 L -1 130.667 L 0 130.667 Z M 0 98.667 L 1 98.667 L 1 77.333 L 0 77.333 L -1 77.333 L -1 98.667 L 0 98.667 Z M 0 66.667 L 1 66.667 L 1 45.333 L 0 45.333 L -1 45.333 L -1 66.667 L 0 66.667 Z M 0 34.667 L 1 34.667 L 1 24 L 0 24 L -1 24 L -1 34.667 L 0 34.667 Z M 0 24 L 1 24 C 1 19.808 2.12 15.881 4.077 12.499 L 3.212 11.998 L 2.346 11.497 C 0.218 15.176 -1 19.447 -1 24 L 0 24 Z M 11.998 3.212 L 12.499 4.077 C 15.881 2.12 19.808 1 24 1 L 24 0 L 24 -1 C 19.447 -1 15.176 0.218 11.497 2.346 L 11.998 3.212 Z M 24 0 L 24 1 L 34.667 1 L 34.667 0 L 34.667 -1 L 24 -1 L 24 0 Z M 45.333 0 L 45.333 1 L 66.667 1 L 66.667 0 L 66.667 -1 L 45.333 -1 L 45.333 0 Z M 77.333 0 L 77.333 1 L 98.667 1 L 98.667 0 L 98.667 -1 L 77.333 -1 L 77.333 0 Z M 109.333 0 L 109.333 1 L 130.667 1 L 130.667 0 L 130.667 -1 L 109.333 -1 L 109.333 0 Z M 141.333 0 L 141.333 1 L 162.667 1 L 162.667 0 L 162.667 -1 L 141.333 -1 L 141.333 0 Z M 173.333 0 L 173.333 1 L 194.667 1 L 194.667 0 L 194.667 -1 L 173.333 -1 L 173.333 0 Z M 205.333 0 L 205.333 1 L 216 1 L 216 0 L 216 -1 L 205.333 -1 L 205.333 0 Z M 216 0 L 216 1 C 220.192 1 224.119 2.12 227.501 4.077 L 228.002 3.212 L 228.503 2.346 C 224.824 0.218 220.553 -1 216 -1 L 216 0 Z M 236.788 11.998 L 235.923 12.499 C 237.88 15.881 239 19.808 239 24 L 240 24 L 241 24 C 241 19.447 239.782 15.176 237.654 11.497 L 236.788 11.998 Z M 240 24 L 239 24 L 239 34.667 L 240 34.667 L 241 34.667 L 241 24 L 240 24 Z M 240 45.333 L 239 45.333 L 239 66.667 L 240 66.667 L 241 66.667 L 241 45.333 L 240 45.333 Z M 240 77.333 L 239 77.333 L 239 98.667 L 240 98.667 L 241 98.667 L 241 77.333 L 240 77.333 Z M 240 109.333 L 239 109.333 L 239 130.667 L 240 130.667 L 241 130.667 L 241 109.333 L 240 109.333 Z M 240 141.333 L 239 141.333 L 239 162.667 L 240 162.667 L 241 162.667 L 241 141.333 L 240 141.333 Z M 240 173.333 L 239 173.333 L 239 194.667 L 240 194.667 L 241 194.667 L 241 173.333 L 240 173.333 Z M 240 205.333 L 239 205.333 L 239 216 L 240 216 L 241 216 L 241 205.333 L 240 205.333 Z M 240 216 L 239 216 C 239 220.192 237.88 224.119 235.923 227.501 L 236.788 228.002 L 237.654 228.503 C 239.782 224.824 241 220.553 241 216 L 240 216 Z M 228.002 236.788 L 227.501 235.923 C 224.119 237.88 220.192 239 216 239 L 216 240 L 216 241 C 220.553 241 224.824 239.782 228.503 237.654 L 228.002 236.788 Z M 216 240 L 216 239 L 205.333 239 L 205.333 240 L 205.333 241 L 216 241 L 216 240 Z M 194.667 240 L 194.667 239 L 173.333 239 L 173.333 240 L 173.333 241 L 194.667 241 L 194.667 240 Z M 162.667 240 L 162.667 239 L 141.333 239 L 141.333 240 L 141.333 241 L 162.667 241 L 162.667 240 Z M 130.667 240 L 130.667 239 L 109.333 239 L 109.333 240 L 109.333 241 L 130.667 241 L 130.667 240 Z M 98.667 240 L 98.667 239 L 77.333 239 L 77.333 240 L 77.333 241 L 98.667 241 L 98.667 240 Z M 66.667 240 L 66.667 239 L 45.333 239 L 45.333 240 L 45.333 241 L 66.667 241 L 66.667 240 Z M 34.667 240 L 34.667 239 L 24 239 L 24 240 L 24 241 L 34.667 241 L 34.667 240 Z M 24 240 L 24 238 C 19.989 238 16.234 236.928 13 235.057 L 11.998 236.788 L 10.996 238.519 C 14.823 240.733 19.267 242 24 242 L 24 240 Z M 3.212 228.002 L 4.943 227 C 3.072 223.766 2 220.011 2 216 L 0 216 L -2 216 C -2 220.733 -0.733 225.177 1.481 229.004 L 3.212 228.002 Z M 0 216 L 2 216 L 2 205.333 L 0 205.333 L -2 205.333 L -2 216 L 0 216 Z M 0 194.667 L 2 194.667 L 2 173.333 L 0 173.333 L -2 173.333 L -2 194.667 L 0 194.667 Z M 0 162.667 L 2 162.667 L 2 141.333 L 0 141.333 L -2 141.333 L -2 162.667 L 0 162.667 Z M 0 130.667 L 2 130.667 L 2 109.333 L 0 109.333 L -2 109.333 L -2 130.667 L 0 130.667 Z M 0 98.667 L 2 98.667 L 2 77.333 L 0 77.333 L -2 77.333 L -2 98.667 L 0 98.667 Z M 0 66.667 L 2 66.667 L 2 45.333 L 0 45.333 L -2 45.333 L -2 66.667 L 0 66.667 Z M 0 34.667 L 2 34.667 L 2 24 L 0 24 L -2 24 L -2 34.667 L 0 34.667 Z M 0 24 L 2 24 C 2 19.989 3.072 16.234 4.943 13 L 3.212 11.998 L 1.481 10.996 C -0.733 14.823 -2 19.267 -2 24 L 0 24 Z M 11.998 3.212 L 13 4.943 C 16.234 3.072 19.989 2 24 2 L 24 0 L 24 -2 C 19.267 -2 14.823 -0.733 10.996 1.481 L 11.998 3.212 Z M 24 0 L 24 2 L 34.667 2 L 34.667 0 L 34.667 -2 L 24 -2 L 24 0 Z M 45.333 0 L 45.333 2 L 66.667 2 L 66.667 0 L 66.667 -2 L 45.333 -2 L 45.333 0 Z M 77.333 0 L 77.333 2 L 98.667 2 L 98.667 0 L 98.667 -2 L 77.333 -2 L 77.333 0 Z M 109.333 0 L 109.333 2 L 130.667 2 L 130.667 0 L 130.667 -2 L 109.333 -2 L 109.333 0 Z M 141.333 0 L 141.333 2 L 162.667 2 L 162.667 0 L 162.667 -2 L 141.333 -2 L 141.333 0 Z M 173.333 0 L 173.333 2 L 194.667 2 L 194.667 0 L 194.667 -2 L 173.333 -2 L 173.333 0 Z M 205.333 0 L 205.333 2 L 216 2 L 216 0 L 216 -2 L 205.333 -2 L 205.333 0 Z M 216 0 L 216 2 C 220.011 2 223.766 3.072 227 4.943 L 228.002 3.212 L 229.004 1.481 C 225.177 -0.733 220.733 -2 216 -2 L 216 0 Z M 236.788 11.998 L 235.057 13 C 236.928 16.234 238 19.989 238 24 L 240 24 L 242 24 C 242 19.267 240.733 14.823 238.519 10.996 L 236.788 11.998 Z M 240 24 L 238 24 L 238 34.667 L 240 34.667 L 242 34.667 L 242 24 L 240 24 Z M 240 45.333 L 238 45.333 L 238 66.667 L 240 66.667 L 242 66.667 L 242 45.333 L 240 45.333 Z M 240 77.333 L 238 77.333 L 238 98.667 L 240 98.667 L 242 98.667 L 242 77.333 L 240 77.333 Z M 240 109.333 L 238 109.333 L 238 130.667 L 240 130.667 L 242 130.667 L 242 109.333 L 240 109.333 Z M 240 141.333 L 238 141.333 L 238 162.667 L 240 162.667 L 242 162.667 L 242 141.333 L 240 141.333 Z M 240 173.333 L 238 173.333 L 238 194.667 L 240 194.667 L 242 194.667 L 242 173.333 L 240 173.333 Z M 240 205.333 L 238 205.333 L 238 216 L 240 216 L 242 216 L 242 205.333 L 240 205.333 Z M 240 216 L 238 216 C 238 220.011 236.928 223.766 235.057 227 L 236.788 228.002 L 238.519 229.004 C 240.733 225.177 242 220.733 242 216 L 240 216 Z M 228.002 236.788 L 227 235.057 C 223.766 236.928 220.011 238 216 238 L 216 240 L 216 242 C 220.733 242 225.177 240.733 229.004 238.519 L 228.002 236.788 Z M 216 240 L 216 238 L 205.333 238 L 205.333 240 L 205.333 242 L 216 242 L 216 240 Z M 194.667 240 L 194.667 238 L 173.333 238 L 173.333 240 L 173.333 242 L 194.667 242 L 194.667 240 Z M 162.667 240 L 162.667 238 L 141.333 238 L 141.333 240 L 141.333 242 L 162.667 242 L 162.667 240 Z M 130.667 240 L 130.667 238 L 109.333 238 L 109.333 240 L 109.333 242 L 130.667 242 L 130.667 240 Z M 98.667 240 L 98.667 238 L 77.333 238 L 77.333 240 L 77.333 242 L 98.667 242 L 98.667 240 Z M 66.667 240 L 66.667 238 L 45.333 238 L 45.333 240 L 45.333 242 L 66.667 242 L 66.667 240 Z M 34.667 240 L 34.667 238 L 24 238 L 24 240 L 24 242 L 34.667 242 L 34.667 240 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(255,255,255)",
      flexShrink: 0,
      filter: "drop-shadow(0px 2px 4px rgb(0,0,0))"
    }
  }, "Point camera at a gift item to search")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      padding: "32px 32px 32px 32px",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 999,
      backgroundColor: "rgba(0,0,0,0.2)",
      display: "flex",
      flexDirection: "row",
      padding: "12px 12px 12px 12px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 18,
    height: 18,
    viewBox: "0 0 18 18",
    fill: "none",
    style: {
      position: "absolute",
      left: 3,
      top: 3,
      width: 18,
      height: 18,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 17.293 12.707 C 17.683 13.097 18.317 13.097 18.707 12.707 C 19.098 12.316 19.098 11.683 18.707 11.293 L 18 12 L 17.293 12.707 Z M 14.914 8.914 L 15.621 8.207 L 15.621 8.206 L 14.914 8.914 Z M 12.086 8.914 L 11.379 8.206 L 11.379 8.207 L 12.086 8.914 Z M 2.293 17.293 C 1.902 17.683 1.902 18.316 2.293 18.707 C 2.683 19.097 3.317 19.097 3.707 18.707 L 3 18 L 2.293 17.293 Z M 18 12 L 18.707 11.293 L 15.621 8.207 L 14.914 8.914 L 14.207 9.621 L 17.293 12.707 L 18 12 Z M 14.914 8.914 L 15.621 8.206 C 15.058 7.644 14.295 7.328 13.5 7.328 L 13.5 8.328 L 13.5 9.328 C 13.765 9.328 14.019 9.433 14.207 9.621 L 14.914 8.914 Z M 13.5 8.328 L 13.5 7.328 C 12.705 7.328 11.942 7.644 11.379 8.206 L 12.086 8.914 L 12.793 9.621 C 12.981 9.433 13.235 9.328 13.5 9.328 L 13.5 8.328 Z M 12.086 8.914 L 11.379 8.207 L 2.293 17.293 L 3 18 L 3.707 18.707 L 12.793 9.621 L 12.086 8.914 Z M 2 0 L 2 1 L 16 1 L 16 0 L 16 -1 L 2 -1 L 2 0 Z M 16 0 L 16 1 C 16.552 1 17 1.448 17 2 L 18 2 L 19 2 C 19 0.343 17.657 -1 16 -1 L 16 0 Z M 18 2 L 17 2 L 17 16 L 18 16 L 19 16 L 19 2 L 18 2 Z M 18 16 L 17 16 C 17 16.552 16.552 17 16 17 L 16 18 L 16 19 C 17.657 19 19 17.657 19 16 L 18 16 Z M 16 18 L 16 17 L 2 17 L 2 18 L 2 19 L 16 19 L 16 18 Z M 2 18 L 2 17 C 1.448 17 1 16.552 1 16 L 0 16 L -1 16 C -1 17.657 0.343 19 2 19 L 2 18 Z M 0 16 L 1 16 L 1 2 L 0 2 L -1 2 L -1 16 L 0 16 Z M 0 2 L 1 2 C 1 1.448 1.448 1 2 1 L 2 0 L 2 -1 C 0.343 -1 -1 0.343 -1 2 L 0 2 Z M 8 6 L 7 6 C 7 6.552 6.552 7 6 7 L 6 8 L 6 9 C 7.657 9 9 7.657 9 6 L 8 6 Z M 6 8 L 6 7 C 5.448 7 5 6.552 5 6 L 4 6 L 3 6 C 3 7.657 4.343 9 6 9 L 6 8 Z M 4 6 L 5 6 C 5 5.448 5.448 5 6 5 L 6 4 L 6 3 C 4.343 3 3 4.343 3 6 L 4 6 Z M 6 4 L 6 5 C 6.552 5 7 5.448 7 6 L 8 6 L 9 6 C 9 4.343 7.657 3 6 3 L 6 4 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 76,
      height: 76,
      borderRadius: 999,
      boxShadow: "inset 0 0 0 4px rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 60,
      height: 60,
      borderRadius: 999,
      backgroundColor: "rgb(243,161,149)",
      flexShrink: 0
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 999,
      backgroundColor: "rgba(0,0,0,0.2)",
      display: "flex",
      flexDirection: "row",
      padding: "12px 12px 12px 12px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      height: 20,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 15.004,
    height: 16.672,
    viewBox: "0 0 15.004 16.672",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.498,
      top: 1.664,
      width: 15.004,
      height: 16.672,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.836 10.003 L 0.836 9.003 L 0.833 9.003 L 0.836 10.003 Z M 0.186 8.644 L -0.531 7.948 L -0.562 7.98 L -0.59 8.014 L 0.186 8.644 Z M 8.435 0.144 L 9.153 0.84 L 9.173 0.82 L 9.191 0.799 L 8.435 0.144 Z M 9.152 0.527 L 10.105 0.831 L 10.111 0.812 L 10.116 0.792 L 9.152 0.527 Z M 7.552 5.544 L 8.489 5.894 L 8.497 5.871 L 8.505 5.848 L 7.552 5.544 Z M 8.335 6.669 L 8.335 5.669 L 8.332 5.669 L 8.335 6.669 Z M 14.168 6.669 L 14.168 7.669 L 14.171 7.669 L 14.168 6.669 Z M 14.818 8.028 L 15.535 8.724 L 15.566 8.692 L 15.594 8.658 L 14.818 8.028 Z M 6.569 16.528 L 5.851 15.832 L 5.831 15.852 L 5.813 15.873 L 6.569 16.528 Z M 5.852 16.145 L 4.899 15.841 L 4.893 15.86 L 4.888 15.88 L 5.852 16.145 Z M 7.452 11.128 L 6.515 10.778 L 6.507 10.801 L 6.499 10.824 L 7.452 11.128 Z M 6.669 10.003 L 6.669 11.003 L 6.672 11.003 L 6.669 10.003 Z M 0.836 10.003 L 0.833 9.003 C 0.864 9.003 0.895 9.012 0.922 9.028 L 0.39 9.875 L -0.141 10.722 C 0.152 10.907 0.493 11.004 0.839 11.003 L 0.836 10.003 Z M 0.39 9.875 L 0.922 9.028 C 0.949 9.045 0.97 9.069 0.984 9.098 L 0.082 9.529 L -0.82 9.961 C -0.671 10.274 -0.435 10.538 -0.141 10.722 L 0.39 9.875 Z M 0.082 9.529 L 0.984 9.098 C 0.997 9.126 1.003 9.158 0.999 9.189 L 0.006 9.072 L -0.987 8.954 C -1.028 9.299 -0.97 9.648 -0.82 9.961 L 0.082 9.529 Z M 0.006 9.072 L 0.999 9.189 C 0.995 9.22 0.983 9.25 0.963 9.274 L 0.186 8.644 L -0.59 8.014 C -0.809 8.284 -0.947 8.61 -0.987 8.954 L 0.006 9.072 Z M 0.186 8.644 L 0.904 9.341 L 9.153 0.84 L 8.435 0.144 L 7.718 -0.553 L -0.531 7.948 L 0.186 8.644 Z M 8.435 0.144 L 9.191 0.799 C 9.104 0.899 8.986 0.966 8.856 0.99 L 8.674 0.007 L 8.492 -0.976 C 8.176 -0.918 7.89 -0.754 7.679 -0.511 L 8.435 0.144 Z M 8.674 0.007 L 8.856 0.99 C 8.726 1.014 8.592 0.993 8.475 0.931 L 8.947 0.049 L 9.418 -0.832 C 9.135 -0.984 8.808 -1.035 8.492 -0.976 L 8.674 0.007 Z M 8.947 0.049 L 8.475 0.931 C 8.358 0.869 8.266 0.768 8.214 0.647 L 9.133 0.252 L 10.052 -0.142 C 9.925 -0.437 9.702 -0.681 9.418 -0.832 L 8.947 0.049 Z M 9.133 0.252 L 8.214 0.647 C 8.162 0.525 8.153 0.39 8.188 0.262 L 9.152 0.527 L 10.116 0.792 C 10.201 0.483 10.179 0.153 10.052 -0.142 L 9.133 0.252 Z M 9.152 0.527 L 8.199 0.223 L 6.599 5.24 L 7.552 5.544 L 8.505 5.848 L 10.105 0.831 L 9.152 0.527 Z M 7.552 5.544 L 6.615 5.194 C 6.511 5.472 6.477 5.771 6.514 6.065 L 7.506 5.94 L 8.498 5.815 C 8.501 5.842 8.498 5.869 8.489 5.894 L 7.552 5.544 Z M 7.506 5.94 L 6.514 6.065 C 6.551 6.359 6.659 6.64 6.828 6.883 L 7.649 6.312 L 8.469 5.741 C 8.485 5.763 8.495 5.788 8.498 5.815 L 7.506 5.94 Z M 7.649 6.312 L 6.828 6.883 C 6.997 7.127 7.223 7.325 7.486 7.462 L 7.948 6.575 L 8.41 5.688 C 8.433 5.701 8.454 5.719 8.469 5.741 L 7.649 6.312 Z M 7.948 6.575 L 7.486 7.462 C 7.75 7.599 8.042 7.67 8.338 7.669 L 8.335 6.669 L 8.332 5.669 C 8.359 5.669 8.386 5.676 8.41 5.688 L 7.948 6.575 Z M 8.335 6.669 L 8.335 7.669 L 14.168 7.669 L 14.168 6.669 L 14.168 5.669 L 8.335 5.669 L 8.335 6.669 Z M 14.168 6.669 L 14.171 7.669 C 14.14 7.669 14.109 7.66 14.082 7.644 L 14.614 6.797 L 15.145 5.95 C 14.852 5.765 14.511 5.668 14.165 5.669 L 14.168 6.669 Z M 14.614 6.797 L 14.082 7.644 C 14.055 7.627 14.034 7.603 14.02 7.574 L 14.922 7.143 L 15.824 6.711 C 15.675 6.398 15.439 6.134 15.145 5.95 L 14.614 6.797 Z M 14.922 7.143 L 14.02 7.574 C 14.007 7.546 14.001 7.514 14.005 7.483 L 14.998 7.6 L 15.991 7.718 C 16.032 7.373 15.974 7.024 15.824 6.711 L 14.922 7.143 Z M 14.998 7.6 L 14.005 7.483 C 14.009 7.452 14.021 7.422 14.041 7.398 L 14.818 8.028 L 15.594 8.658 C 15.813 8.388 15.951 8.062 15.991 7.718 L 14.998 7.6 Z M 14.818 8.028 L 14.1 7.331 L 5.851 15.832 L 6.569 16.528 L 7.286 17.225 L 15.535 8.724 L 14.818 8.028 Z M 6.569 16.528 L 5.813 15.873 C 5.9 15.773 6.018 15.706 6.148 15.682 L 6.33 16.665 L 6.512 17.648 C 6.828 17.59 7.114 17.426 7.325 17.183 L 6.569 16.528 Z M 6.33 16.665 L 6.148 15.682 C 6.278 15.658 6.412 15.679 6.529 15.741 L 6.057 16.623 L 5.586 17.504 C 5.869 17.656 6.196 17.707 6.512 17.648 L 6.33 16.665 Z M 6.057 16.623 L 6.529 15.741 C 6.646 15.803 6.738 15.904 6.79 16.025 L 5.871 16.42 L 4.952 16.814 C 5.079 17.109 5.302 17.353 5.586 17.504 L 6.057 16.623 Z M 5.871 16.42 L 6.79 16.025 C 6.842 16.147 6.851 16.282 6.816 16.41 L 5.852 16.145 L 4.888 15.88 C 4.803 16.189 4.825 16.519 4.952 16.814 L 5.871 16.42 Z M 5.852 16.145 L 6.805 16.449 L 8.405 11.432 L 7.452 11.128 L 6.499 10.824 L 4.899 15.841 L 5.852 16.145 Z M 7.452 11.128 L 8.389 11.478 C 8.493 11.2 8.527 10.901 8.49 10.607 L 7.498 10.732 L 6.506 10.857 C 6.503 10.83 6.506 10.803 6.515 10.778 L 7.452 11.128 Z M 7.498 10.732 L 8.49 10.607 C 8.453 10.313 8.345 10.032 8.176 9.789 L 7.355 10.36 L 6.535 10.931 C 6.519 10.909 6.509 10.884 6.506 10.857 L 7.498 10.732 Z M 7.355 10.36 L 8.176 9.789 C 8.007 9.545 7.781 9.347 7.518 9.21 L 7.056 10.097 L 6.594 10.984 C 6.571 10.971 6.55 10.953 6.535 10.931 L 7.355 10.36 Z M 7.056 10.097 L 7.518 9.21 C 7.254 9.073 6.962 9.002 6.666 9.003 L 6.669 10.003 L 6.672 11.003 C 6.645 11.003 6.618 10.996 6.594 10.984 L 7.056 10.097 Z M 6.669 10.003 L 6.669 9.003 L 0.836 9.003 L 0.836 10.003 L 0.836 11.003 L 6.669 11.003 L 6.669 10.003 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 34,
      display: "flex",
      flexDirection: "column",
      padding: "0px 0px 8px 0px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 134,
      height: 5,
      opacity: 0.8,
      borderRadius: 999,
      backgroundColor: "rgb(255,255,255)",
      flexShrink: 0
    }
  })));
}

// figma node: 545:4883 ProductGallery (1 variants)
const __venc_ProductGallery = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_ProductGallery = p => "property1=" + __venc_ProductGallery(p.property1);
function ProductGallery(_p = {}) {
  const props = {
    ..._p,
    property1: _p.property1 ?? "default"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 440,
      height: 400,
      overflow: "hidden",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 123,
      top: 336,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-xs) * 1px)",
      padding: "0px 0px 20px 0px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 44,
    height: 44,
    viewBox: "0 0 44 44",
    fill: "none",
    style: {
      position: "relative",
      width: 44,
      height: 44,
      overflow: "hidden",
      borderRadius: 8,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 8 C 0 3.582 3.582 0 8 0 L 36 0 C 40.418 0 44 3.582 44 8 L 44 36 C 44 40.418 40.418 44 36 44 L 8 44 C 3.582 44 0 40.418 0 36 L 0 8 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 44,
    height: 44,
    viewBox: "0 0 44 44",
    fill: "none",
    style: {
      position: "relative",
      width: 44,
      height: 44,
      overflow: "hidden",
      borderRadius: 8,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 8 C 0 3.582 3.582 0 8 0 L 36 0 C 40.418 0 44 3.582 44 8 L 44 36 C 44 40.418 40.418 44 36 44 L 8 44 C 3.582 44 0 40.418 0 36 L 0 8 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 44,
    height: 44,
    viewBox: "0 0 44 44",
    fill: "none",
    style: {
      position: "relative",
      width: 44,
      height: 44,
      overflow: "hidden",
      borderRadius: 8,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 8 C 0 3.582 3.582 0 8 0 L 36 0 C 40.418 0 44 3.582 44 8 L 44 36 C 44 40.418 40.418 44 36 44 L 8 44 C 3.582 44 0 40.418 0 36 L 0 8 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 44,
    height: 44,
    viewBox: "0 0 44 44",
    fill: "none",
    style: {
      position: "relative",
      width: 44,
      height: 44,
      overflow: "hidden",
      borderRadius: 8,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 8 C 0 3.582 3.582 0 8 0 L 36 0 C 40.418 0 44 3.582 44 8 L 44 36 C 44 40.418 40.418 44 36 44 L 8 44 C 3.582 44 0 40.418 0 36 L 0 8 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))));
  const __impls = {
    // figma: Property 1=Default
    "property1=default": __body0
  };
  return (__impls[__vkey_ProductGallery(props)] ?? __body0)();
}

// figma node: 570:6030 Product Gallery
function ProductGallery3(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 440,
      height: 956,
      overflow: "hidden",
      borderRadius: 31,
      backgroundColor: "var(--bg-elevated)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 910,
      width: 440,
      height: 46,
      overflow: "hidden",
      backgroundColor: "var(--bg-default)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "12px 16px 12px 16px",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement(HomeIndicator, {
    style: {
      position: "relative",
      height: 34,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 128,
      width: 440,
      height: 710,
      display: "flex",
      flexDirection: "column",
      padding: "0px 16px 0px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-lg) * 1px)",
      paddingRight: "calc(var(--spacing-lg) * 1px)"
    }
  }, /*#__PURE__*/React.createElement(ProductGallery, {
    style: {
      position: "relative",
      height: 370.909,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    property1: "default"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 24,
      padding: "16px 0px 16px 0px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingTop: "calc(var(--spacing-lg) * 1px)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(128,128,128)",
      flexShrink: 0
    }
  }, "Pinch to zoom in detail"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 64,
      height: 64,
      borderRadius: 8,
      boxShadow: "inset 0 0 0 2px rgb(26,26,26)",
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 64,
      height: 64,
      borderRadius: 8,
      boxShadow: "inset 0 0 0 1px rgb(217,217,217)",
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-e73ce42f073dd486-07f1ba23",
    style: {
      position: "relative",
      width: 64,
      height: 64,
      borderRadius: 8,
      boxShadow: "inset 0 0 0 1px rgb(217,217,217)",
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 64,
      height: 64,
      borderRadius: 8,
      boxShadow: "inset 0 0 0 1px rgb(217,217,217)",
      flexShrink: 0
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 440,
      overflow: "hidden",
      background: "linear-gradient(180deg, rgb(226,126,114) 0.00%, rgb(243,161,149) 100.00%)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 64,
      display: "flex",
      flexDirection: "row",
      padding: "0px 20px 0px 30px",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, "9:41"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 68,
      height: 12,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 3,
    height: 6,
    viewBox: "0 0 3 6",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 6,
      width: 3,
      height: 6,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2 0 L 1 0 C 0.448 0 0 0.448 0 1 L 0 5 C 0 5.552 0.448 6 1 6 L 2 6 C 2.552 6 3 5.552 3 5 L 3 1 C 3 0.448 2.552 0 2 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3,
    height: 8,
    viewBox: "0 0 3 8",
    fill: "none",
    style: {
      position: "absolute",
      left: 5,
      top: 4,
      width: 3,
      height: 8,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2 0 L 1 0 C 0.448 0 0 0.448 0 1 L 0 7 C 0 7.552 0.448 8 1 8 L 2 8 C 2.552 8 3 7.552 3 7 L 3 1 C 3 0.448 2.552 0 2 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3,
    height: 10,
    viewBox: "0 0 3 10",
    fill: "none",
    style: {
      position: "absolute",
      left: 10,
      top: 2,
      width: 3,
      height: 10,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2 0 L 1 0 C 0.448 0 0 0.448 0 1 L 0 9 C 0 9.552 0.448 10 1 10 L 2 10 C 2.552 10 3 9.552 3 9 L 3 1 C 3 0.448 2.552 0 2 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3,
    height: 12,
    viewBox: "0 0 3 12",
    fill: "none",
    style: {
      position: "absolute",
      left: 15,
      top: 0,
      width: 3,
      height: 12,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2 0 L 1 0 C 0.448 0 0 0.448 0 1 L 0 11 C 0 11.552 0.448 12 1 12 L 2 12 C 2.552 12 3 11.552 3 11 L 3 1 C 3 0.448 2.552 0 2 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 10,
    height: 1.755,
    viewBox: "0 0 10 1.755",
    fill: "none",
    style: {
      position: "absolute",
      left: 31,
      top: 2.745,
      width: 10,
      height: 1.755,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M -0.5 1.131 C -0.845 1.407 -0.901 1.91 -0.624 2.255 C -0.348 2.6 0.155 2.656 0.5 2.38 L 0 1.755 L -0.5 1.131 Z M 9.5 2.38 C 9.845 2.656 10.348 2.6 10.625 2.255 C 10.901 1.91 10.845 1.407 10.5 1.131 L 10 1.755 L 9.5 2.38 Z M 0 1.755 L 0.5 2.38 C 1.777 1.357 3.364 0.8 5 0.8 L 5 0 L 5 -0.8 C 3.001 -0.8 1.061 -0.119 -0.5 1.131 L 0 1.755 Z M 5 0 L 5 0.8 C 6.636 0.8 8.223 1.357 9.5 2.38 L 10 1.755 L 10.5 1.131 C 8.939 -0.119 6.999 -0.8 5 -0.8 L 5 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 6,
    height: 1,
    viewBox: "0 0 6 1",
    fill: "none",
    style: {
      position: "absolute",
      left: 33,
      top: 6.2,
      width: 6,
      height: 1,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M -0.48 0.36 C -0.833 0.625 -0.905 1.127 -0.64 1.48 C -0.375 1.833 0.127 1.905 0.48 1.64 L 0 1 L -0.48 0.36 Z M 3 0 L 3 0.8 L 3 0 Z M 5.52 1.64 C 5.873 1.905 6.375 1.833 6.64 1.48 C 6.905 1.127 6.833 0.625 6.48 0.36 L 6 1 L 5.52 1.64 Z M 0 1 L 0.48 1.64 C 1.207 1.095 2.091 0.8 3 0.8 L 3 0 L 3 -0.8 C 1.745 -0.8 0.524 -0.393 -0.48 0.36 L 0 1 Z M 3 0 L 3 0.8 C 3.909 0.8 4.793 1.095 5.52 1.64 L 6 1 L 6.48 0.36 C 5.476 -0.393 4.255 -0.8 3 -0.8 L 3 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 2.600,
    height: 2.600,
    viewBox: "0 0 2.600 2.600",
    fill: "none",
    style: {
      position: "absolute",
      left: 34.7,
      top: 8.7,
      width: 2.6,
      height: 2.6,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.3 2.6 C 2.018 2.6 2.6 2.018 2.6 1.3 C 2.6 0.582 2.018 0 1.3 0 C 0.582 0 0 0.582 0 1.3 C 0 2.018 0.582 2.6 1.3 2.6 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 20,
    height: 10,
    viewBox: "0 0 20 10",
    fill: "none",
    style: {
      position: "absolute",
      left: 46,
      top: 1,
      width: 20,
      height: 10,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3 0 L 3 0.5 L 17 0.5 L 17 0 L 17 -0.5 L 3 -0.5 L 3 0 Z M 17 0 L 17 0.5 C 18.381 0.5 19.5 1.619 19.5 3 L 20 3 L 20.5 3 C 20.5 1.067 18.933 -0.5 17 -0.5 L 17 0 Z M 20 3 L 19.5 3 L 19.5 7 L 20 7 L 20.5 7 L 20.5 3 L 20 3 Z M 20 7 L 19.5 7 C 19.5 8.381 18.381 9.5 17 9.5 L 17 10 L 17 10.5 C 18.933 10.5 20.5 8.933 20.5 7 L 20 7 Z M 17 10 L 17 9.5 L 3 9.5 L 3 10 L 3 10.5 L 17 10.5 L 17 10 Z M 3 10 L 3 9.5 C 1.619 9.5 0.5 8.381 0.5 7 L 0 7 L -0.5 7 C -0.5 8.933 1.067 10.5 3 10.5 L 3 10 Z M 0 7 L 0.5 7 L 0.5 3 L 0 3 L -0.5 3 L -0.5 7 L 0 7 Z M 0 3 L 0.5 3 C 0.5 1.619 1.619 0.5 3 0.5 L 3 0 L 3 -0.5 C 1.067 -0.5 -0.5 1.067 -0.5 3 L 0 3 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 13,
    height: 6,
    viewBox: "0 0 13 6",
    fill: "none",
    style: {
      position: "absolute",
      left: 48,
      top: 3,
      width: 13,
      height: 6,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 11.5 0 L 1.5 0 C 0.672 0 0 0.672 0 1.5 L 0 4.5 C 0 5.328 0.672 6 1.5 6 L 11.5 6 C 12.328 6 13 5.328 13 4.5 L 13 1.5 C 13 0.672 12.328 0 11.5 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 2,
    height: 4,
    viewBox: "0 0 2 4",
    fill: "none",
    style: {
      position: "absolute",
      left: 67,
      top: 4,
      width: 2,
      height: 4,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 0 4 C 0.53 4 1.039 3.789 1.414 3.414 C 1.789 3.039 2 2.53 2 2 C 2 1.47 1.789 0.961 1.414 0.586 C 1.039 0.211 0.53 0 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 16px 0px 16px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-lg) * 1px)",
      paddingRight: "calc(var(--spacing-lg) * 1px)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 44,
      height: 44,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 6,
      top: 6,
      width: 32,
      height: "calc(var(--icon-2xl) * 1px)",
      overflow: "hidden",
      borderRadius: 999,
      backgroundColor: "var(--bg-subtle)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: "calc(var(--icon-sm) * 1px)",
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 4,
    height: 8,
    viewBox: "0 0 4 8",
    fill: "none",
    style: {
      position: "absolute",
      left: 6,
      top: 4,
      width: 4,
      height: 8,
      color: "var(--icon-primary)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.293 8.707 C 3.683 9.098 4.317 9.098 4.707 8.707 C 5.098 8.317 5.098 7.683 4.707 7.293 L 4 8 L 3.293 8.707 Z M 0 4 L -0.707 3.293 C -1.098 3.683 -1.098 4.317 -0.707 4.707 L 0 4 Z M 4.707 0.707 C 5.098 0.317 5.098 -0.317 4.707 -0.707 C 4.317 -1.098 3.683 -1.098 3.293 -0.707 L 4 0 L 4.707 0.707 Z M 4 8 L 4.707 7.293 L 0.707 3.293 L 0 4 L -0.707 4.707 L 3.293 8.707 L 4 8 Z M 0 4 L 0.707 4.707 L 4.707 0.707 L 4 0 L 3.293 -0.707 L -0.707 3.293 L 0 4 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 20,
      lineHeight: "100%",
      color: "var(--text-on-brand)",
      flexGrow: 1
    }
  }, "Product Gallery"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 44,
      height: 44,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 6,
      top: 6,
      width: 32,
      height: "calc(var(--icon-2xl) * 1px)",
      overflow: "hidden",
      borderRadius: 999,
      backgroundColor: "var(--bg-default)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: "calc(var(--icon-sm) * 1px)",
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 8,
    height: 8,
    viewBox: "0 0 8 8",
    fill: "none",
    style: {
      position: "absolute",
      left: 4,
      top: 4,
      width: 8,
      height: 8,
      color: "var(--icon-primary)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.636 -0.636 C 0.285 -0.988 -0.285 -0.988 -0.636 -0.636 C -0.988 -0.285 -0.988 0.285 -0.636 0.636 L 0 0 L 0.636 -0.636 Z M 7.364 8.636 C 7.715 8.988 8.285 8.988 8.636 8.636 C 8.988 8.285 8.988 7.715 8.636 7.364 L 8 8 L 7.364 8.636 Z M 8.636 0.636 C 8.988 0.285 8.988 -0.285 8.636 -0.636 C 8.285 -0.988 7.715 -0.988 7.364 -0.636 L 8 0 L 8.636 0.636 Z M -0.636 7.364 C -0.988 7.715 -0.988 8.285 -0.636 8.636 C -0.285 8.988 0.285 8.988 0.636 8.636 L 0 8 L -0.636 7.364 Z M 0 0 L -0.636 0.636 L 7.364 8.636 L 8 8 L 8.636 7.364 L 0.636 -0.636 L 0 0 Z M 8 0 L 7.364 -0.636 L -0.636 7.364 L 0 8 L 0.636 8.636 L 8.636 0.636 L 8 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))))));
}

// figma node: 570:10741 Product -> Price Compare
function ProductPriceCompare(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 440,
      height: 956,
      overflow: "hidden",
      borderRadius: 32,
      backgroundColor: "var(--bg-default)",
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--spacing-md) * 1px)",
      padding: "0px 16px 0px 16px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-lg) * 1px)",
      paddingRight: "calc(var(--spacing-lg) * 1px)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 440,
      overflow: "hidden",
      background: "linear-gradient(180deg, rgb(226,126,114) 0.00%, rgb(243,161,149) 100.00%)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 64,
      display: "flex",
      flexDirection: "row",
      padding: "0px 20px 0px 30px",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, "9:41"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 68,
      height: 12,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 3,
    height: 6,
    viewBox: "0 0 3 6",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 6,
      width: 3,
      height: 6,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2 0 L 1 0 C 0.448 0 0 0.448 0 1 L 0 5 C 0 5.552 0.448 6 1 6 L 2 6 C 2.552 6 3 5.552 3 5 L 3 1 C 3 0.448 2.552 0 2 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3,
    height: 8,
    viewBox: "0 0 3 8",
    fill: "none",
    style: {
      position: "absolute",
      left: 5,
      top: 4,
      width: 3,
      height: 8,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2 0 L 1 0 C 0.448 0 0 0.448 0 1 L 0 7 C 0 7.552 0.448 8 1 8 L 2 8 C 2.552 8 3 7.552 3 7 L 3 1 C 3 0.448 2.552 0 2 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3,
    height: 10,
    viewBox: "0 0 3 10",
    fill: "none",
    style: {
      position: "absolute",
      left: 10,
      top: 2,
      width: 3,
      height: 10,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2 0 L 1 0 C 0.448 0 0 0.448 0 1 L 0 9 C 0 9.552 0.448 10 1 10 L 2 10 C 2.552 10 3 9.552 3 9 L 3 1 C 3 0.448 2.552 0 2 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3,
    height: 12,
    viewBox: "0 0 3 12",
    fill: "none",
    style: {
      position: "absolute",
      left: 15,
      top: 0,
      width: 3,
      height: 12,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2 0 L 1 0 C 0.448 0 0 0.448 0 1 L 0 11 C 0 11.552 0.448 12 1 12 L 2 12 C 2.552 12 3 11.552 3 11 L 3 1 C 3 0.448 2.552 0 2 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 10,
    height: 1.755,
    viewBox: "0 0 10 1.755",
    fill: "none",
    style: {
      position: "absolute",
      left: 31,
      top: 2.745,
      width: 10,
      height: 1.755,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M -0.5 1.131 C -0.845 1.407 -0.901 1.91 -0.624 2.255 C -0.348 2.6 0.155 2.656 0.5 2.38 L 0 1.755 L -0.5 1.131 Z M 9.5 2.38 C 9.845 2.656 10.348 2.6 10.625 2.255 C 10.901 1.91 10.845 1.407 10.5 1.131 L 10 1.755 L 9.5 2.38 Z M 0 1.755 L 0.5 2.38 C 1.777 1.357 3.364 0.8 5 0.8 L 5 0 L 5 -0.8 C 3.001 -0.8 1.061 -0.119 -0.5 1.131 L 0 1.755 Z M 5 0 L 5 0.8 C 6.636 0.8 8.223 1.357 9.5 2.38 L 10 1.755 L 10.5 1.131 C 8.939 -0.119 6.999 -0.8 5 -0.8 L 5 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 6,
    height: 1,
    viewBox: "0 0 6 1",
    fill: "none",
    style: {
      position: "absolute",
      left: 33,
      top: 6.2,
      width: 6,
      height: 1,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M -0.48 0.36 C -0.833 0.625 -0.905 1.127 -0.64 1.48 C -0.375 1.833 0.127 1.905 0.48 1.64 L 0 1 L -0.48 0.36 Z M 3 0 L 3 0.8 L 3 0 Z M 5.52 1.64 C 5.873 1.905 6.375 1.833 6.64 1.48 C 6.905 1.127 6.833 0.625 6.48 0.36 L 6 1 L 5.52 1.64 Z M 0 1 L 0.48 1.64 C 1.207 1.095 2.091 0.8 3 0.8 L 3 0 L 3 -0.8 C 1.745 -0.8 0.524 -0.393 -0.48 0.36 L 0 1 Z M 3 0 L 3 0.8 C 3.909 0.8 4.793 1.095 5.52 1.64 L 6 1 L 6.48 0.36 C 5.476 -0.393 4.255 -0.8 3 -0.8 L 3 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 2.600,
    height: 2.600,
    viewBox: "0 0 2.600 2.600",
    fill: "none",
    style: {
      position: "absolute",
      left: 34.7,
      top: 8.7,
      width: 2.6,
      height: 2.6,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.3 2.6 C 2.018 2.6 2.6 2.018 2.6 1.3 C 2.6 0.582 2.018 0 1.3 0 C 0.582 0 0 0.582 0 1.3 C 0 2.018 0.582 2.6 1.3 2.6 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 20,
    height: 10,
    viewBox: "0 0 20 10",
    fill: "none",
    style: {
      position: "absolute",
      left: 46,
      top: 1,
      width: 20,
      height: 10,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3 0 L 3 0.5 L 17 0.5 L 17 0 L 17 -0.5 L 3 -0.5 L 3 0 Z M 17 0 L 17 0.5 C 18.381 0.5 19.5 1.619 19.5 3 L 20 3 L 20.5 3 C 20.5 1.067 18.933 -0.5 17 -0.5 L 17 0 Z M 20 3 L 19.5 3 L 19.5 7 L 20 7 L 20.5 7 L 20.5 3 L 20 3 Z M 20 7 L 19.5 7 C 19.5 8.381 18.381 9.5 17 9.5 L 17 10 L 17 10.5 C 18.933 10.5 20.5 8.933 20.5 7 L 20 7 Z M 17 10 L 17 9.5 L 3 9.5 L 3 10 L 3 10.5 L 17 10.5 L 17 10 Z M 3 10 L 3 9.5 C 1.619 9.5 0.5 8.381 0.5 7 L 0 7 L -0.5 7 C -0.5 8.933 1.067 10.5 3 10.5 L 3 10 Z M 0 7 L 0.5 7 L 0.5 3 L 0 3 L -0.5 3 L -0.5 7 L 0 7 Z M 0 3 L 0.5 3 C 0.5 1.619 1.619 0.5 3 0.5 L 3 0 L 3 -0.5 C 1.067 -0.5 -0.5 1.067 -0.5 3 L 0 3 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 13,
    height: 6,
    viewBox: "0 0 13 6",
    fill: "none",
    style: {
      position: "absolute",
      left: 48,
      top: 3,
      width: 13,
      height: 6,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 11.5 0 L 1.5 0 C 0.672 0 0 0.672 0 1.5 L 0 4.5 C 0 5.328 0.672 6 1.5 6 L 11.5 6 C 12.328 6 13 5.328 13 4.5 L 13 1.5 C 13 0.672 12.328 0 11.5 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 2,
    height: 4,
    viewBox: "0 0 2 4",
    fill: "none",
    style: {
      position: "absolute",
      left: 67,
      top: 4,
      width: 2,
      height: 4,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 0 4 C 0.53 4 1.039 3.789 1.414 3.414 C 1.789 3.039 2 2.53 2 2 C 2 1.47 1.789 0.961 1.414 0.586 C 1.039 0.211 0.53 0 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      padding: "0px 16px 0px 16px",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-lg) * 1px)",
      paddingRight: "calc(var(--spacing-lg) * 1px)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 44,
      height: 44,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 6,
      top: 6,
      width: 32,
      height: "calc(var(--icon-2xl) * 1px)",
      overflow: "hidden",
      borderRadius: 999,
      backgroundColor: "var(--bg-subtle)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: "calc(var(--icon-sm) * 1px)",
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 4,
    height: 8,
    viewBox: "0 0 4 8",
    fill: "none",
    style: {
      position: "absolute",
      left: 6,
      top: 4,
      width: 4,
      height: 8,
      color: "var(--icon-primary)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.293 8.707 C 3.683 9.098 4.317 9.098 4.707 8.707 C 5.098 8.317 5.098 7.683 4.707 7.293 L 4 8 L 3.293 8.707 Z M 0 4 L -0.707 3.293 C -1.098 3.683 -1.098 4.317 -0.707 4.707 L 0 4 Z M 4.707 0.707 C 5.098 0.317 5.098 -0.317 4.707 -0.707 C 4.317 -1.098 3.683 -1.098 3.293 -0.707 L 4 0 L 4.707 0.707 Z M 4 8 L 4.707 7.293 L 0.707 3.293 L 0 4 L -0.707 4.707 L 3.293 8.707 L 4 8 Z M 0 4 L 0.707 4.707 L 4.707 0.707 L 4 0 L 3.293 -0.707 L -0.707 3.293 L 0 4 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 20,
      lineHeight: "100%",
      color: "var(--text-on-brand)",
      flexGrow: 1
    }
  }, "Price Compare"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 44,
      height: 44,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 6,
      top: 6,
      width: 32,
      height: "calc(var(--icon-2xl) * 1px)",
      overflow: "hidden",
      borderRadius: 999,
      backgroundColor: "var(--bg-subtle)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: "calc(var(--icon-sm) * 1px)",
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 10.667,
    height: 13.333,
    viewBox: "0 0 10.667 13.333",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.667,
      top: 1.333,
      width: 10.667,
      height: 13.333,
      color: "var(--icon-primary)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1 6.667 C 1 6.114 0.552 5.667 0 5.667 C -0.552 5.667 -1 6.114 -1 6.667 L 0 6.667 L 1 6.667 Z M 0 12 L -1 12 L 0 12 Z M 11.667 6.667 C 11.667 6.114 11.219 5.667 10.667 5.667 C 10.114 5.667 9.667 6.114 9.667 6.667 L 10.667 6.667 L 11.667 6.667 Z M 7.293 3.374 C 7.683 3.764 8.317 3.764 8.707 3.374 C 9.098 2.983 9.098 2.35 8.707 1.96 L 8 2.667 L 7.293 3.374 Z M 5.333 0 L 6.04 -0.707 C 5.853 -0.895 5.599 -1 5.333 -1 C 5.068 -1 4.814 -0.895 4.626 -0.707 L 5.333 0 Z M 1.96 1.96 C 1.569 2.35 1.569 2.983 1.96 3.374 C 2.35 3.764 2.983 3.764 3.374 3.374 L 2.667 2.667 L 1.96 1.96 Z M 4.333 8.667 C 4.333 9.219 4.781 9.667 5.333 9.667 C 5.886 9.667 6.333 9.219 6.333 8.667 L 5.333 8.667 L 4.333 8.667 Z M 0 6.667 L -1 6.667 L -1 12 L 0 12 L 1 12 L 1 6.667 L 0 6.667 Z M 0 12 L -1 12 C -1 12.619 -0.754 13.212 -0.317 13.65 L 0.391 12.943 L 1.098 12.236 C 1.035 12.173 1 12.088 1 12 L 0 12 Z M 0.391 12.943 L -0.317 13.65 C 0.121 14.088 0.714 14.333 1.333 14.333 L 1.333 13.333 L 1.333 12.333 C 1.245 12.333 1.16 12.298 1.098 12.236 L 0.391 12.943 Z M 1.333 13.333 L 1.333 14.333 L 9.333 14.333 L 9.333 13.333 L 9.333 12.333 L 1.333 12.333 L 1.333 13.333 Z M 9.333 13.333 L 9.333 14.333 C 9.952 14.333 10.546 14.088 10.983 13.65 L 10.276 12.943 L 9.569 12.236 C 9.507 12.298 9.422 12.333 9.333 12.333 L 9.333 13.333 Z M 10.276 12.943 L 10.983 13.65 C 11.421 13.212 11.667 12.619 11.667 12 L 10.667 12 L 9.667 12 C 9.667 12.088 9.632 12.173 9.569 12.236 L 10.276 12.943 Z M 10.667 12 L 11.667 12 L 11.667 6.667 L 10.667 6.667 L 9.667 6.667 L 9.667 12 L 10.667 12 Z M 8 2.667 L 8.707 1.96 L 6.04 -0.707 L 5.333 0 L 4.626 0.707 L 7.293 3.374 L 8 2.667 Z M 5.333 0 L 4.626 -0.707 L 1.96 1.96 L 2.667 2.667 L 3.374 3.374 L 6.04 0.707 L 5.333 0 Z M 5.333 0 L 4.333 0 L 4.333 8.667 L 5.333 8.667 L 6.333 8.667 L 6.333 0 L 5.333 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 24,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(239,236,233), 0px 8px 24px 0px rgba(26,26,26,0.0157)",
      display: "flex",
      flexDirection: "column",
      gap: 14,
      padding: "16px 16px 16px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 160,
      overflow: "hidden",
      borderRadius: 16,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 332,
      top: 0,
      width: 44,
      height: 44,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 8,
      top: 8,
      width: 28,
      height: 28,
      borderRadius: 999,
      backgroundColor: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 13.334,
    height: 11.344,
    viewBox: "0 0 13.334 11.344",
    fill: "none",
    style: {
      position: "absolute",
      left: 7,
      top: 8,
      width: 13.334,
      height: 11.344,
      color: "rgb(26,26,26)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 3.677 L -1.5 3.677 L -1.5 3.677 L 0 3.677 Z M 0.645 1.6 L -0.59 0.75 L -0.59 0.75 L 0.645 1.6 Z M 2.355 0.254 L 2.891 1.654 L 2.891 1.654 L 2.355 0.254 Z M 4.526 0.113 L 4.174 1.571 L 4.174 1.571 L 4.526 0.113 Z M 6.394 1.227 L 5.279 2.229 L 5.289 2.241 L 5.299 2.251 L 6.394 1.227 Z M 6.519 1.314 L 7.116 -0.062 L 7.116 -0.062 L 6.519 1.314 Z M 6.816 1.314 L 7.413 2.69 L 7.413 2.69 L 6.816 1.314 Z M 6.94 1.227 L 8.035 2.251 L 8.048 2.238 L 8.06 2.224 L 6.94 1.227 Z M 8.808 0.104 L 9.163 1.561 L 8.808 0.104 Z M 10.984 0.242 L 11.521 -1.158 L 10.984 0.242 Z M 12.695 1.593 L 13.933 0.746 L 13.933 0.746 L 12.695 1.593 Z M 13.334 3.677 L 11.834 3.67 L 11.834 3.677 L 13.334 3.677 Z M 11.334 7.344 L 12.377 8.422 L 12.386 8.414 L 12.395 8.405 L 11.334 7.344 Z M 7.673 10.886 L 6.63 9.808 L 6.584 9.853 L 6.541 9.901 L 7.673 10.886 Z M 7.223 11.222 L 7.849 12.586 L 7.849 12.586 L 7.223 11.222 Z M 6.675 11.344 L 6.685 12.844 L 6.685 12.844 L 6.675 11.344 Z M 6.126 11.229 L 6.734 9.858 L 6.734 9.858 L 6.126 11.229 Z M 5.672 10.899 L 6.791 9.9 L 6.755 9.859 L 6.716 9.821 L 5.672 10.899 Z M 2 7.344 L 0.94 8.405 L 0.948 8.413 L 0.957 8.422 L 2 7.344 Z M 0 3.677 L 1.5 3.677 C 1.5 3.239 1.633 2.811 1.881 2.45 L 0.645 1.6 L -0.59 0.75 C -1.183 1.611 -1.5 2.632 -1.5 3.677 L 0 3.677 Z M 0.645 1.6 L 1.881 2.45 C 2.13 2.089 2.482 1.811 2.891 1.654 L 2.355 0.254 L 1.818 -1.147 C 0.842 -0.773 0.002 -0.111 -0.59 0.75 L 0.645 1.6 Z M 2.355 0.254 L 2.891 1.654 C 3.301 1.497 3.748 1.468 4.174 1.571 L 4.526 0.113 L 4.877 -1.345 C 3.861 -1.59 2.794 -1.521 1.818 -1.147 L 2.355 0.254 Z M 4.526 0.113 L 4.174 1.571 C 4.601 1.674 4.986 1.903 5.279 2.229 L 6.394 1.227 L 7.51 0.224 C 6.811 -0.553 5.893 -1.101 4.877 -1.345 L 4.526 0.113 Z M 6.394 1.227 L 5.299 2.251 C 5.474 2.439 5.686 2.588 5.921 2.69 L 6.519 1.314 L 7.116 -0.062 C 7.257 0 7.385 0.089 7.49 0.202 L 6.394 1.227 Z M 6.519 1.314 L 5.921 2.69 C 6.157 2.792 6.411 2.845 6.667 2.845 L 6.667 1.345 L 6.667 -0.155 C 6.821 -0.155 6.974 -0.123 7.116 -0.062 L 6.519 1.314 Z M 6.667 1.345 L 6.667 2.845 C 6.924 2.845 7.178 2.792 7.413 2.69 L 6.816 1.314 L 6.219 -0.062 C 6.36 -0.123 6.513 -0.155 6.667 -0.155 L 6.667 1.345 Z M 6.816 1.314 L 7.413 2.69 C 7.648 2.588 7.86 2.439 8.035 2.251 L 6.94 1.227 L 5.844 0.202 C 5.95 0.089 6.077 0 6.219 -0.062 L 6.816 1.314 Z M 6.94 1.227 L 8.06 2.224 C 8.352 1.896 8.737 1.665 9.163 1.561 L 8.808 0.104 L 8.454 -1.354 C 7.435 -1.106 6.516 -0.554 5.819 0.23 L 6.94 1.227 Z M 8.808 0.104 L 9.163 1.561 C 9.59 1.457 10.038 1.486 10.447 1.643 L 10.984 0.242 L 11.521 -1.158 C 10.542 -1.533 9.472 -1.602 8.454 -1.354 L 8.808 0.104 Z M 10.984 0.242 L 10.447 1.643 C 10.857 1.8 11.209 2.078 11.457 2.44 L 12.695 1.593 L 13.933 0.746 C 13.341 -0.119 12.5 -0.783 11.521 -1.158 L 10.984 0.242 Z M 12.695 1.593 L 11.457 2.44 C 11.705 2.803 11.836 3.232 11.834 3.67 L 13.334 3.677 L 14.834 3.685 C 14.839 2.636 14.525 1.611 13.933 0.746 L 12.695 1.593 Z M 13.334 3.677 L 11.834 3.677 C 11.834 4.521 11.295 5.263 10.274 6.283 L 11.334 7.344 L 12.395 8.405 C 13.374 7.426 14.834 5.887 14.834 3.677 L 13.334 3.677 Z M 11.334 7.344 L 10.291 6.266 L 6.63 9.808 L 7.673 10.886 L 8.715 11.964 L 12.377 8.422 L 11.334 7.344 Z M 7.673 10.886 L 6.541 9.901 C 6.557 9.883 6.576 9.869 6.597 9.859 L 7.223 11.222 L 7.849 12.586 C 8.214 12.418 8.54 12.174 8.804 11.871 L 7.673 10.886 Z M 7.223 11.222 L 6.597 9.859 C 6.619 9.849 6.642 9.844 6.666 9.844 L 6.675 11.344 L 6.685 12.844 C 7.087 12.841 7.484 12.753 7.849 12.586 L 7.223 11.222 Z M 6.675 11.344 L 6.666 9.844 C 6.689 9.844 6.713 9.849 6.734 9.858 L 6.126 11.229 L 5.518 12.6 C 5.885 12.763 6.283 12.846 6.685 12.844 L 6.675 11.344 Z M 6.126 11.229 L 6.734 9.858 C 6.756 9.868 6.775 9.882 6.791 9.9 L 5.672 10.899 L 4.554 11.898 C 4.822 12.198 5.15 12.437 5.518 12.6 L 6.126 11.229 Z M 5.672 10.899 L 6.716 9.821 L 3.043 6.266 L 2 7.344 L 0.957 8.422 L 4.629 11.977 L 5.672 10.899 Z M 2 7.344 L 3.061 6.283 C 2.038 5.261 1.5 4.527 1.5 3.677 L 0 3.677 L -1.5 3.677 C -1.5 5.894 -0.038 7.427 0.94 8.405 L 2 7.344 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement(Badge, {
    style: {
      position: "absolute",
      left: 16,
      top: 16
    },
    type: "bestseller"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 20,
      lineHeight: "100%",
      color: "rgb(26,26,26)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Royal Amber Parfum"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(196,154,69)",
      flexShrink: 0
    }
  }, "4.9"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      height: 12,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 12,
      overflow: "hidden",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 10.001,
    height: 9.536,
    viewBox: "0 0 10.001 9.536",
    fill: "none",
    style: {
      position: "absolute",
      left: 1,
      top: 1,
      width: 10.001,
      height: 9.536,
      color: "rgb(196,154,69)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.763 0.147 L 3.867 -0.296 L 3.867 -0.295 L 4.763 0.147 Z M 5.001 0 L 5.001 -1 L 5.001 0 Z M 5.238 0.147 L 6.135 -0.295 L 6.135 -0.296 L 5.238 0.147 Z M 6.393 2.487 L 5.497 2.93 L 5.497 2.93 L 6.393 2.487 Z M 7.191 3.067 L 7.046 4.056 L 7.046 4.056 L 7.191 3.067 Z M 9.774 3.445 L 9.629 4.434 L 9.631 4.435 L 9.774 3.445 Z M 9.921 3.897 L 10.619 4.613 L 10.619 4.613 L 9.921 3.897 Z M 8.053 5.716 L 7.355 5 L 7.355 5 L 8.053 5.716 Z M 7.747 6.655 L 6.762 6.823 L 6.762 6.824 L 7.747 6.655 Z M 8.188 9.225 L 7.203 9.394 L 7.204 9.399 L 8.188 9.225 Z M 7.803 9.505 L 8.273 8.622 L 8.268 8.62 L 7.803 9.505 Z M 5.494 8.291 L 5.959 7.406 L 5.959 7.406 L 5.494 8.291 Z M 5.001 8.169 L 5.001 7.169 L 5.001 8.169 Z M 4.507 8.291 L 4.043 7.406 L 4.042 7.406 L 4.507 8.291 Z M 2.199 9.505 L 1.733 8.62 L 1.731 8.621 L 2.199 9.505 Z M 1.814 9.225 L 2.799 9.398 L 2.8 9.394 L 1.814 9.225 Z M 2.254 6.655 L 1.269 6.486 L 1.269 6.486 L 2.254 6.655 Z M 1.949 5.716 L 2.647 5 L 2.646 4.999 L 1.949 5.716 Z M 0.081 3.897 L 0.778 3.181 L 0.776 3.178 L 0.081 3.897 Z M 0.228 3.444 L 0.368 4.435 L 0.373 4.434 L 0.228 3.444 Z M 2.81 3.067 L 2.666 2.077 L 2.666 2.077 L 2.81 3.067 Z M 3.609 2.487 L 4.505 2.93 L 4.506 2.929 L 3.609 2.487 Z M 4.763 0.147 L 5.66 0.591 C 5.599 0.714 5.505 0.817 5.389 0.889 L 4.861 0.04 L 4.334 -0.81 C 4.133 -0.685 3.972 -0.507 3.867 -0.296 L 4.763 0.147 Z M 4.861 0.04 L 5.389 0.889 C 5.272 0.962 5.138 1 5.001 1 L 5.001 0 L 5.001 -1 C 4.765 -1 4.534 -0.934 4.334 -0.81 L 4.861 0.04 Z M 5.001 0 L 5.001 1 C 4.864 1 4.73 0.962 4.613 0.889 L 5.141 0.04 L 5.668 -0.81 C 5.468 -0.934 5.237 -1 5.001 -1 L 5.001 0 Z M 5.141 0.04 L 4.613 0.889 C 4.497 0.817 4.403 0.714 4.342 0.591 L 5.238 0.147 L 6.135 -0.296 C 6.03 -0.507 5.868 -0.685 5.668 -0.81 L 5.141 0.04 Z M 5.238 0.147 L 4.342 0.59 L 5.497 2.93 L 6.393 2.487 L 7.29 2.044 L 6.135 -0.295 L 5.238 0.147 Z M 6.393 2.487 L 5.497 2.93 C 5.645 3.229 5.863 3.488 6.133 3.684 L 6.721 2.875 L 7.309 2.066 C 7.301 2.061 7.294 2.053 7.29 2.044 L 6.393 2.487 Z M 6.721 2.875 L 6.133 3.684 C 6.402 3.88 6.716 4.008 7.046 4.056 L 7.191 3.067 L 7.336 2.078 C 7.326 2.076 7.317 2.072 7.309 2.066 L 6.721 2.875 Z M 7.191 3.067 L 7.046 4.056 L 9.629 4.434 L 9.774 3.445 L 9.919 2.455 L 7.336 2.077 L 7.191 3.067 Z M 9.774 3.445 L 9.631 4.435 C 9.495 4.415 9.367 4.358 9.262 4.269 L 9.907 3.505 L 10.551 2.74 C 10.37 2.588 10.151 2.489 9.917 2.455 L 9.774 3.445 Z M 9.907 3.505 L 9.262 4.269 C 9.157 4.181 9.079 4.065 9.037 3.935 L 9.988 3.625 L 10.939 3.316 C 10.866 3.091 10.731 2.892 10.551 2.74 L 9.907 3.505 Z M 9.988 3.625 L 9.037 3.935 C 8.995 3.804 8.989 3.664 9.022 3.531 L 9.993 3.771 L 10.964 4.01 C 11.021 3.781 11.012 3.54 10.939 3.316 L 9.988 3.625 Z M 9.993 3.771 L 9.022 3.531 C 9.055 3.398 9.125 3.277 9.223 3.181 L 9.921 3.897 L 10.619 4.613 C 10.788 4.448 10.908 4.239 10.964 4.01 L 9.993 3.771 Z M 9.921 3.897 L 9.223 3.181 L 7.355 5 L 8.053 5.716 L 8.751 6.432 L 10.619 4.613 L 9.921 3.897 Z M 8.053 5.716 L 7.355 5 C 7.116 5.233 6.937 5.521 6.833 5.838 L 7.784 6.148 L 8.735 6.457 C 8.738 6.448 8.744 6.439 8.751 6.432 L 8.053 5.716 Z M 7.784 6.148 L 6.833 5.838 C 6.73 6.156 6.705 6.494 6.762 6.823 L 7.747 6.655 L 8.733 6.487 C 8.731 6.477 8.732 6.467 8.735 6.457 L 7.784 6.148 Z M 7.747 6.655 L 6.762 6.824 L 7.203 9.394 L 8.188 9.225 L 9.174 9.056 L 8.733 6.486 L 7.747 6.655 Z M 8.188 9.225 L 7.204 9.399 C 7.18 9.263 7.194 9.123 7.246 8.996 L 8.173 9.37 L 9.1 9.745 C 9.189 9.525 9.214 9.285 9.173 9.051 L 8.188 9.225 Z M 8.173 9.37 L 7.246 8.996 C 7.298 8.868 7.384 8.757 7.495 8.676 L 8.083 9.485 L 8.671 10.295 C 8.863 10.155 9.012 9.965 9.1 9.745 L 8.173 9.37 Z M 8.083 9.485 L 7.495 8.676 C 7.607 8.595 7.739 8.547 7.876 8.538 L 7.946 9.535 L 8.015 10.533 C 8.252 10.517 8.479 10.434 8.671 10.295 L 8.083 9.485 Z M 7.946 9.535 L 7.876 8.538 C 8.014 8.528 8.151 8.558 8.273 8.622 L 7.803 9.505 L 7.333 10.388 C 7.542 10.499 7.779 10.549 8.015 10.533 L 7.946 9.535 Z M 7.803 9.505 L 8.268 8.62 L 5.959 7.406 L 5.494 8.291 L 5.029 9.176 L 7.338 10.39 L 7.803 9.505 Z M 5.494 8.291 L 5.959 7.406 C 5.663 7.25 5.334 7.169 5.001 7.169 L 5.001 8.169 L 5.001 9.169 C 5.011 9.169 5.02 9.172 5.029 9.176 L 5.494 8.291 Z M 5.001 8.169 L 5.001 7.169 C 4.667 7.169 4.338 7.25 4.043 7.406 L 4.507 8.291 L 4.972 9.176 C 4.981 9.172 4.991 9.169 5.001 9.169 L 5.001 8.169 Z M 4.507 8.291 L 4.042 7.406 L 1.733 8.62 L 2.199 9.505 L 2.664 10.39 L 4.973 9.176 L 4.507 8.291 Z M 2.199 9.505 L 1.731 8.621 C 1.853 8.557 1.99 8.528 2.127 8.538 L 2.056 9.535 L 1.985 10.533 C 2.221 10.549 2.458 10.5 2.667 10.389 L 2.199 9.505 Z M 2.056 9.535 L 2.127 8.538 C 2.264 8.547 2.396 8.595 2.507 8.676 L 1.919 9.485 L 1.331 10.294 C 1.522 10.433 1.749 10.516 1.985 10.533 L 2.056 9.535 Z M 1.919 9.485 L 2.507 8.676 C 2.618 8.757 2.705 8.868 2.756 8.995 L 1.829 9.37 L 0.902 9.745 C 0.991 9.964 1.139 10.155 1.331 10.294 L 1.919 9.485 Z M 1.829 9.37 L 2.756 8.995 C 2.808 9.123 2.823 9.262 2.799 9.398 L 1.814 9.225 L 0.829 9.052 C 0.788 9.285 0.813 9.525 0.902 9.745 L 1.829 9.37 Z M 1.814 9.225 L 2.8 9.394 L 3.24 6.824 L 2.254 6.655 L 1.269 6.486 L 0.828 9.056 L 1.814 9.225 Z M 2.254 6.655 L 3.24 6.825 C 3.297 6.495 3.272 6.157 3.169 5.839 L 2.218 6.148 L 1.267 6.457 C 1.27 6.467 1.27 6.477 1.269 6.486 L 2.254 6.655 Z M 2.218 6.148 L 3.169 5.839 C 3.065 5.521 2.886 5.233 2.647 5 L 1.949 5.716 L 1.251 6.432 C 1.258 6.439 1.264 6.448 1.267 6.457 L 2.218 6.148 Z M 1.949 5.716 L 2.646 4.999 L 0.778 3.181 L 0.081 3.897 L -0.617 4.614 L 1.251 6.432 L 1.949 5.716 Z M 0.081 3.897 L 0.776 3.178 C 0.875 3.274 0.945 3.395 0.978 3.529 L 0.008 3.771 L -0.962 4.013 C -0.905 4.243 -0.784 4.452 -0.614 4.617 L 0.081 3.897 Z M 0.008 3.771 L 0.978 3.529 C 1.011 3.662 1.007 3.803 0.964 3.934 L 0.013 3.625 L -0.938 3.316 C -1.011 3.542 -1.02 3.783 -0.962 4.013 L 0.008 3.771 Z M 0.013 3.625 L 0.964 3.934 C 0.922 4.065 0.843 4.181 0.738 4.27 L 0.095 3.504 L -0.549 2.738 C -0.73 2.891 -0.865 3.091 -0.938 3.316 L 0.013 3.625 Z M 0.095 3.504 L 0.738 4.27 C 0.632 4.358 0.504 4.415 0.368 4.435 L 0.228 3.444 L 0.088 2.454 C -0.147 2.487 -0.367 2.586 -0.549 2.738 L 0.095 3.504 Z M 0.228 3.444 L 0.373 4.434 L 2.955 4.056 L 2.81 3.067 L 2.666 2.077 L 0.083 2.455 L 0.228 3.444 Z M 2.81 3.067 L 2.954 4.057 C 3.285 4.008 3.599 3.881 3.869 3.685 L 3.281 2.875 L 2.694 2.066 C 2.686 2.072 2.676 2.076 2.666 2.077 L 2.81 3.067 Z M 3.281 2.875 L 3.869 3.685 C 4.139 3.488 4.358 3.229 4.505 2.93 L 3.609 2.487 L 2.712 2.044 C 2.708 2.053 2.701 2.061 2.694 2.066 L 3.281 2.875 Z M 3.609 2.487 L 4.506 2.929 L 5.66 0.59 L 4.763 0.147 L 3.867 -0.295 L 2.712 2.044 L 3.609 2.487 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      height: 12,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 12,
      overflow: "hidden",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 10.001,
    height: 9.536,
    viewBox: "0 0 10.001 9.536",
    fill: "none",
    style: {
      position: "absolute",
      left: 1,
      top: 1,
      width: 10.001,
      height: 9.536,
      color: "rgb(196,154,69)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.763 0.147 L 3.867 -0.296 L 3.867 -0.295 L 4.763 0.147 Z M 5.001 0 L 5.001 -1 L 5.001 0 Z M 5.238 0.147 L 6.135 -0.295 L 6.135 -0.296 L 5.238 0.147 Z M 6.393 2.487 L 5.497 2.93 L 5.497 2.93 L 6.393 2.487 Z M 7.191 3.067 L 7.046 4.056 L 7.046 4.056 L 7.191 3.067 Z M 9.774 3.445 L 9.629 4.434 L 9.631 4.435 L 9.774 3.445 Z M 9.921 3.897 L 10.619 4.613 L 10.619 4.613 L 9.921 3.897 Z M 8.053 5.716 L 7.355 5 L 7.355 5 L 8.053 5.716 Z M 7.747 6.655 L 6.762 6.823 L 6.762 6.824 L 7.747 6.655 Z M 8.188 9.225 L 7.203 9.394 L 7.204 9.399 L 8.188 9.225 Z M 7.803 9.505 L 8.273 8.622 L 8.268 8.62 L 7.803 9.505 Z M 5.494 8.291 L 5.959 7.406 L 5.959 7.406 L 5.494 8.291 Z M 5.001 8.169 L 5.001 7.169 L 5.001 8.169 Z M 4.507 8.291 L 4.043 7.406 L 4.042 7.406 L 4.507 8.291 Z M 2.199 9.505 L 1.733 8.62 L 1.731 8.621 L 2.199 9.505 Z M 1.814 9.225 L 2.799 9.398 L 2.8 9.394 L 1.814 9.225 Z M 2.254 6.655 L 1.269 6.486 L 1.269 6.486 L 2.254 6.655 Z M 1.949 5.716 L 2.647 5 L 2.646 4.999 L 1.949 5.716 Z M 0.081 3.897 L 0.778 3.181 L 0.776 3.178 L 0.081 3.897 Z M 0.228 3.444 L 0.368 4.435 L 0.373 4.434 L 0.228 3.444 Z M 2.81 3.067 L 2.666 2.077 L 2.666 2.077 L 2.81 3.067 Z M 3.609 2.487 L 4.505 2.93 L 4.506 2.929 L 3.609 2.487 Z M 4.763 0.147 L 5.66 0.591 C 5.599 0.714 5.505 0.817 5.389 0.889 L 4.861 0.04 L 4.334 -0.81 C 4.133 -0.685 3.972 -0.507 3.867 -0.296 L 4.763 0.147 Z M 4.861 0.04 L 5.389 0.889 C 5.272 0.962 5.138 1 5.001 1 L 5.001 0 L 5.001 -1 C 4.765 -1 4.534 -0.934 4.334 -0.81 L 4.861 0.04 Z M 5.001 0 L 5.001 1 C 4.864 1 4.73 0.962 4.613 0.889 L 5.141 0.04 L 5.668 -0.81 C 5.468 -0.934 5.237 -1 5.001 -1 L 5.001 0 Z M 5.141 0.04 L 4.613 0.889 C 4.497 0.817 4.403 0.714 4.342 0.591 L 5.238 0.147 L 6.135 -0.296 C 6.03 -0.507 5.868 -0.685 5.668 -0.81 L 5.141 0.04 Z M 5.238 0.147 L 4.342 0.59 L 5.497 2.93 L 6.393 2.487 L 7.29 2.044 L 6.135 -0.295 L 5.238 0.147 Z M 6.393 2.487 L 5.497 2.93 C 5.645 3.229 5.863 3.488 6.133 3.684 L 6.721 2.875 L 7.309 2.066 C 7.301 2.061 7.294 2.053 7.29 2.044 L 6.393 2.487 Z M 6.721 2.875 L 6.133 3.684 C 6.402 3.88 6.716 4.008 7.046 4.056 L 7.191 3.067 L 7.336 2.078 C 7.326 2.076 7.317 2.072 7.309 2.066 L 6.721 2.875 Z M 7.191 3.067 L 7.046 4.056 L 9.629 4.434 L 9.774 3.445 L 9.919 2.455 L 7.336 2.077 L 7.191 3.067 Z M 9.774 3.445 L 9.631 4.435 C 9.495 4.415 9.367 4.358 9.262 4.269 L 9.907 3.505 L 10.551 2.74 C 10.37 2.588 10.151 2.489 9.917 2.455 L 9.774 3.445 Z M 9.907 3.505 L 9.262 4.269 C 9.157 4.181 9.079 4.065 9.037 3.935 L 9.988 3.625 L 10.939 3.316 C 10.866 3.091 10.731 2.892 10.551 2.74 L 9.907 3.505 Z M 9.988 3.625 L 9.037 3.935 C 8.995 3.804 8.989 3.664 9.022 3.531 L 9.993 3.771 L 10.964 4.01 C 11.021 3.781 11.012 3.54 10.939 3.316 L 9.988 3.625 Z M 9.993 3.771 L 9.022 3.531 C 9.055 3.398 9.125 3.277 9.223 3.181 L 9.921 3.897 L 10.619 4.613 C 10.788 4.448 10.908 4.239 10.964 4.01 L 9.993 3.771 Z M 9.921 3.897 L 9.223 3.181 L 7.355 5 L 8.053 5.716 L 8.751 6.432 L 10.619 4.613 L 9.921 3.897 Z M 8.053 5.716 L 7.355 5 C 7.116 5.233 6.937 5.521 6.833 5.838 L 7.784 6.148 L 8.735 6.457 C 8.738 6.448 8.744 6.439 8.751 6.432 L 8.053 5.716 Z M 7.784 6.148 L 6.833 5.838 C 6.73 6.156 6.705 6.494 6.762 6.823 L 7.747 6.655 L 8.733 6.487 C 8.731 6.477 8.732 6.467 8.735 6.457 L 7.784 6.148 Z M 7.747 6.655 L 6.762 6.824 L 7.203 9.394 L 8.188 9.225 L 9.174 9.056 L 8.733 6.486 L 7.747 6.655 Z M 8.188 9.225 L 7.204 9.399 C 7.18 9.263 7.194 9.123 7.246 8.996 L 8.173 9.37 L 9.1 9.745 C 9.189 9.525 9.214 9.285 9.173 9.051 L 8.188 9.225 Z M 8.173 9.37 L 7.246 8.996 C 7.298 8.868 7.384 8.757 7.495 8.676 L 8.083 9.485 L 8.671 10.295 C 8.863 10.155 9.012 9.965 9.1 9.745 L 8.173 9.37 Z M 8.083 9.485 L 7.495 8.676 C 7.607 8.595 7.739 8.547 7.876 8.538 L 7.946 9.535 L 8.015 10.533 C 8.252 10.517 8.479 10.434 8.671 10.295 L 8.083 9.485 Z M 7.946 9.535 L 7.876 8.538 C 8.014 8.528 8.151 8.558 8.273 8.622 L 7.803 9.505 L 7.333 10.388 C 7.542 10.499 7.779 10.549 8.015 10.533 L 7.946 9.535 Z M 7.803 9.505 L 8.268 8.62 L 5.959 7.406 L 5.494 8.291 L 5.029 9.176 L 7.338 10.39 L 7.803 9.505 Z M 5.494 8.291 L 5.959 7.406 C 5.663 7.25 5.334 7.169 5.001 7.169 L 5.001 8.169 L 5.001 9.169 C 5.011 9.169 5.02 9.172 5.029 9.176 L 5.494 8.291 Z M 5.001 8.169 L 5.001 7.169 C 4.667 7.169 4.338 7.25 4.043 7.406 L 4.507 8.291 L 4.972 9.176 C 4.981 9.172 4.991 9.169 5.001 9.169 L 5.001 8.169 Z M 4.507 8.291 L 4.042 7.406 L 1.733 8.62 L 2.199 9.505 L 2.664 10.39 L 4.973 9.176 L 4.507 8.291 Z M 2.199 9.505 L 1.731 8.621 C 1.853 8.557 1.99 8.528 2.127 8.538 L 2.056 9.535 L 1.985 10.533 C 2.221 10.549 2.458 10.5 2.667 10.389 L 2.199 9.505 Z M 2.056 9.535 L 2.127 8.538 C 2.264 8.547 2.396 8.595 2.507 8.676 L 1.919 9.485 L 1.331 10.294 C 1.522 10.433 1.749 10.516 1.985 10.533 L 2.056 9.535 Z M 1.919 9.485 L 2.507 8.676 C 2.618 8.757 2.705 8.868 2.756 8.995 L 1.829 9.37 L 0.902 9.745 C 0.991 9.964 1.139 10.155 1.331 10.294 L 1.919 9.485 Z M 1.829 9.37 L 2.756 8.995 C 2.808 9.123 2.823 9.262 2.799 9.398 L 1.814 9.225 L 0.829 9.052 C 0.788 9.285 0.813 9.525 0.902 9.745 L 1.829 9.37 Z M 1.814 9.225 L 2.8 9.394 L 3.24 6.824 L 2.254 6.655 L 1.269 6.486 L 0.828 9.056 L 1.814 9.225 Z M 2.254 6.655 L 3.24 6.825 C 3.297 6.495 3.272 6.157 3.169 5.839 L 2.218 6.148 L 1.267 6.457 C 1.27 6.467 1.27 6.477 1.269 6.486 L 2.254 6.655 Z M 2.218 6.148 L 3.169 5.839 C 3.065 5.521 2.886 5.233 2.647 5 L 1.949 5.716 L 1.251 6.432 C 1.258 6.439 1.264 6.448 1.267 6.457 L 2.218 6.148 Z M 1.949 5.716 L 2.646 4.999 L 0.778 3.181 L 0.081 3.897 L -0.617 4.614 L 1.251 6.432 L 1.949 5.716 Z M 0.081 3.897 L 0.776 3.178 C 0.875 3.274 0.945 3.395 0.978 3.529 L 0.008 3.771 L -0.962 4.013 C -0.905 4.243 -0.784 4.452 -0.614 4.617 L 0.081 3.897 Z M 0.008 3.771 L 0.978 3.529 C 1.011 3.662 1.007 3.803 0.964 3.934 L 0.013 3.625 L -0.938 3.316 C -1.011 3.542 -1.02 3.783 -0.962 4.013 L 0.008 3.771 Z M 0.013 3.625 L 0.964 3.934 C 0.922 4.065 0.843 4.181 0.738 4.27 L 0.095 3.504 L -0.549 2.738 C -0.73 2.891 -0.865 3.091 -0.938 3.316 L 0.013 3.625 Z M 0.095 3.504 L 0.738 4.27 C 0.632 4.358 0.504 4.415 0.368 4.435 L 0.228 3.444 L 0.088 2.454 C -0.147 2.487 -0.367 2.586 -0.549 2.738 L 0.095 3.504 Z M 0.228 3.444 L 0.373 4.434 L 2.955 4.056 L 2.81 3.067 L 2.666 2.077 L 0.083 2.455 L 0.228 3.444 Z M 2.81 3.067 L 2.954 4.057 C 3.285 4.008 3.599 3.881 3.869 3.685 L 3.281 2.875 L 2.694 2.066 C 2.686 2.072 2.676 2.076 2.666 2.077 L 2.81 3.067 Z M 3.281 2.875 L 3.869 3.685 C 4.139 3.488 4.358 3.229 4.505 2.93 L 3.609 2.487 L 2.712 2.044 C 2.708 2.053 2.701 2.061 2.694 2.066 L 3.281 2.875 Z M 3.609 2.487 L 4.506 2.929 L 5.66 0.59 L 4.763 0.147 L 3.867 -0.295 L 2.712 2.044 L 3.609 2.487 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      height: 12,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 12,
      overflow: "hidden",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 10.001,
    height: 9.536,
    viewBox: "0 0 10.001 9.536",
    fill: "none",
    style: {
      position: "absolute",
      left: 1,
      top: 1,
      width: 10.001,
      height: 9.536,
      color: "rgb(196,154,69)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.763 0.147 L 3.867 -0.296 L 3.867 -0.295 L 4.763 0.147 Z M 5.001 0 L 5.001 -1 L 5.001 0 Z M 5.238 0.147 L 6.135 -0.295 L 6.135 -0.296 L 5.238 0.147 Z M 6.393 2.487 L 5.497 2.93 L 5.497 2.93 L 6.393 2.487 Z M 7.191 3.067 L 7.046 4.056 L 7.046 4.056 L 7.191 3.067 Z M 9.774 3.445 L 9.629 4.434 L 9.631 4.435 L 9.774 3.445 Z M 9.921 3.897 L 10.619 4.613 L 10.619 4.613 L 9.921 3.897 Z M 8.053 5.716 L 7.355 5 L 7.355 5 L 8.053 5.716 Z M 7.747 6.655 L 6.762 6.823 L 6.762 6.824 L 7.747 6.655 Z M 8.188 9.225 L 7.203 9.394 L 7.204 9.399 L 8.188 9.225 Z M 7.803 9.505 L 8.273 8.622 L 8.268 8.62 L 7.803 9.505 Z M 5.494 8.291 L 5.959 7.406 L 5.959 7.406 L 5.494 8.291 Z M 5.001 8.169 L 5.001 7.169 L 5.001 8.169 Z M 4.507 8.291 L 4.043 7.406 L 4.042 7.406 L 4.507 8.291 Z M 2.199 9.505 L 1.733 8.62 L 1.731 8.621 L 2.199 9.505 Z M 1.814 9.225 L 2.799 9.398 L 2.8 9.394 L 1.814 9.225 Z M 2.254 6.655 L 1.269 6.486 L 1.269 6.486 L 2.254 6.655 Z M 1.949 5.716 L 2.647 5 L 2.646 4.999 L 1.949 5.716 Z M 0.081 3.897 L 0.778 3.181 L 0.776 3.178 L 0.081 3.897 Z M 0.228 3.444 L 0.368 4.435 L 0.373 4.434 L 0.228 3.444 Z M 2.81 3.067 L 2.666 2.077 L 2.666 2.077 L 2.81 3.067 Z M 3.609 2.487 L 4.505 2.93 L 4.506 2.929 L 3.609 2.487 Z M 4.763 0.147 L 5.66 0.591 C 5.599 0.714 5.505 0.817 5.389 0.889 L 4.861 0.04 L 4.334 -0.81 C 4.133 -0.685 3.972 -0.507 3.867 -0.296 L 4.763 0.147 Z M 4.861 0.04 L 5.389 0.889 C 5.272 0.962 5.138 1 5.001 1 L 5.001 0 L 5.001 -1 C 4.765 -1 4.534 -0.934 4.334 -0.81 L 4.861 0.04 Z M 5.001 0 L 5.001 1 C 4.864 1 4.73 0.962 4.613 0.889 L 5.141 0.04 L 5.668 -0.81 C 5.468 -0.934 5.237 -1 5.001 -1 L 5.001 0 Z M 5.141 0.04 L 4.613 0.889 C 4.497 0.817 4.403 0.714 4.342 0.591 L 5.238 0.147 L 6.135 -0.296 C 6.03 -0.507 5.868 -0.685 5.668 -0.81 L 5.141 0.04 Z M 5.238 0.147 L 4.342 0.59 L 5.497 2.93 L 6.393 2.487 L 7.29 2.044 L 6.135 -0.295 L 5.238 0.147 Z M 6.393 2.487 L 5.497 2.93 C 5.645 3.229 5.863 3.488 6.133 3.684 L 6.721 2.875 L 7.309 2.066 C 7.301 2.061 7.294 2.053 7.29 2.044 L 6.393 2.487 Z M 6.721 2.875 L 6.133 3.684 C 6.402 3.88 6.716 4.008 7.046 4.056 L 7.191 3.067 L 7.336 2.078 C 7.326 2.076 7.317 2.072 7.309 2.066 L 6.721 2.875 Z M 7.191 3.067 L 7.046 4.056 L 9.629 4.434 L 9.774 3.445 L 9.919 2.455 L 7.336 2.077 L 7.191 3.067 Z M 9.774 3.445 L 9.631 4.435 C 9.495 4.415 9.367 4.358 9.262 4.269 L 9.907 3.505 L 10.551 2.74 C 10.37 2.588 10.151 2.489 9.917 2.455 L 9.774 3.445 Z M 9.907 3.505 L 9.262 4.269 C 9.157 4.181 9.079 4.065 9.037 3.935 L 9.988 3.625 L 10.939 3.316 C 10.866 3.091 10.731 2.892 10.551 2.74 L 9.907 3.505 Z M 9.988 3.625 L 9.037 3.935 C 8.995 3.804 8.989 3.664 9.022 3.531 L 9.993 3.771 L 10.964 4.01 C 11.021 3.781 11.012 3.54 10.939 3.316 L 9.988 3.625 Z M 9.993 3.771 L 9.022 3.531 C 9.055 3.398 9.125 3.277 9.223 3.181 L 9.921 3.897 L 10.619 4.613 C 10.788 4.448 10.908 4.239 10.964 4.01 L 9.993 3.771 Z M 9.921 3.897 L 9.223 3.181 L 7.355 5 L 8.053 5.716 L 8.751 6.432 L 10.619 4.613 L 9.921 3.897 Z M 8.053 5.716 L 7.355 5 C 7.116 5.233 6.937 5.521 6.833 5.838 L 7.784 6.148 L 8.735 6.457 C 8.738 6.448 8.744 6.439 8.751 6.432 L 8.053 5.716 Z M 7.784 6.148 L 6.833 5.838 C 6.73 6.156 6.705 6.494 6.762 6.823 L 7.747 6.655 L 8.733 6.487 C 8.731 6.477 8.732 6.467 8.735 6.457 L 7.784 6.148 Z M 7.747 6.655 L 6.762 6.824 L 7.203 9.394 L 8.188 9.225 L 9.174 9.056 L 8.733 6.486 L 7.747 6.655 Z M 8.188 9.225 L 7.204 9.399 C 7.18 9.263 7.194 9.123 7.246 8.996 L 8.173 9.37 L 9.1 9.745 C 9.189 9.525 9.214 9.285 9.173 9.051 L 8.188 9.225 Z M 8.173 9.37 L 7.246 8.996 C 7.298 8.868 7.384 8.757 7.495 8.676 L 8.083 9.485 L 8.671 10.295 C 8.863 10.155 9.012 9.965 9.1 9.745 L 8.173 9.37 Z M 8.083 9.485 L 7.495 8.676 C 7.607 8.595 7.739 8.547 7.876 8.538 L 7.946 9.535 L 8.015 10.533 C 8.252 10.517 8.479 10.434 8.671 10.295 L 8.083 9.485 Z M 7.946 9.535 L 7.876 8.538 C 8.014 8.528 8.151 8.558 8.273 8.622 L 7.803 9.505 L 7.333 10.388 C 7.542 10.499 7.779 10.549 8.015 10.533 L 7.946 9.535 Z M 7.803 9.505 L 8.268 8.62 L 5.959 7.406 L 5.494 8.291 L 5.029 9.176 L 7.338 10.39 L 7.803 9.505 Z M 5.494 8.291 L 5.959 7.406 C 5.663 7.25 5.334 7.169 5.001 7.169 L 5.001 8.169 L 5.001 9.169 C 5.011 9.169 5.02 9.172 5.029 9.176 L 5.494 8.291 Z M 5.001 8.169 L 5.001 7.169 C 4.667 7.169 4.338 7.25 4.043 7.406 L 4.507 8.291 L 4.972 9.176 C 4.981 9.172 4.991 9.169 5.001 9.169 L 5.001 8.169 Z M 4.507 8.291 L 4.042 7.406 L 1.733 8.62 L 2.199 9.505 L 2.664 10.39 L 4.973 9.176 L 4.507 8.291 Z M 2.199 9.505 L 1.731 8.621 C 1.853 8.557 1.99 8.528 2.127 8.538 L 2.056 9.535 L 1.985 10.533 C 2.221 10.549 2.458 10.5 2.667 10.389 L 2.199 9.505 Z M 2.056 9.535 L 2.127 8.538 C 2.264 8.547 2.396 8.595 2.507 8.676 L 1.919 9.485 L 1.331 10.294 C 1.522 10.433 1.749 10.516 1.985 10.533 L 2.056 9.535 Z M 1.919 9.485 L 2.507 8.676 C 2.618 8.757 2.705 8.868 2.756 8.995 L 1.829 9.37 L 0.902 9.745 C 0.991 9.964 1.139 10.155 1.331 10.294 L 1.919 9.485 Z M 1.829 9.37 L 2.756 8.995 C 2.808 9.123 2.823 9.262 2.799 9.398 L 1.814 9.225 L 0.829 9.052 C 0.788 9.285 0.813 9.525 0.902 9.745 L 1.829 9.37 Z M 1.814 9.225 L 2.8 9.394 L 3.24 6.824 L 2.254 6.655 L 1.269 6.486 L 0.828 9.056 L 1.814 9.225 Z M 2.254 6.655 L 3.24 6.825 C 3.297 6.495 3.272 6.157 3.169 5.839 L 2.218 6.148 L 1.267 6.457 C 1.27 6.467 1.27 6.477 1.269 6.486 L 2.254 6.655 Z M 2.218 6.148 L 3.169 5.839 C 3.065 5.521 2.886 5.233 2.647 5 L 1.949 5.716 L 1.251 6.432 C 1.258 6.439 1.264 6.448 1.267 6.457 L 2.218 6.148 Z M 1.949 5.716 L 2.646 4.999 L 0.778 3.181 L 0.081 3.897 L -0.617 4.614 L 1.251 6.432 L 1.949 5.716 Z M 0.081 3.897 L 0.776 3.178 C 0.875 3.274 0.945 3.395 0.978 3.529 L 0.008 3.771 L -0.962 4.013 C -0.905 4.243 -0.784 4.452 -0.614 4.617 L 0.081 3.897 Z M 0.008 3.771 L 0.978 3.529 C 1.011 3.662 1.007 3.803 0.964 3.934 L 0.013 3.625 L -0.938 3.316 C -1.011 3.542 -1.02 3.783 -0.962 4.013 L 0.008 3.771 Z M 0.013 3.625 L 0.964 3.934 C 0.922 4.065 0.843 4.181 0.738 4.27 L 0.095 3.504 L -0.549 2.738 C -0.73 2.891 -0.865 3.091 -0.938 3.316 L 0.013 3.625 Z M 0.095 3.504 L 0.738 4.27 C 0.632 4.358 0.504 4.415 0.368 4.435 L 0.228 3.444 L 0.088 2.454 C -0.147 2.487 -0.367 2.586 -0.549 2.738 L 0.095 3.504 Z M 0.228 3.444 L 0.373 4.434 L 2.955 4.056 L 2.81 3.067 L 2.666 2.077 L 0.083 2.455 L 0.228 3.444 Z M 2.81 3.067 L 2.954 4.057 C 3.285 4.008 3.599 3.881 3.869 3.685 L 3.281 2.875 L 2.694 2.066 C 2.686 2.072 2.676 2.076 2.666 2.077 L 2.81 3.067 Z M 3.281 2.875 L 3.869 3.685 C 4.139 3.488 4.358 3.229 4.505 2.93 L 3.609 2.487 L 2.712 2.044 C 2.708 2.053 2.701 2.061 2.694 2.066 L 3.281 2.875 Z M 3.609 2.487 L 4.506 2.929 L 5.66 0.59 L 4.763 0.147 L 3.867 -0.295 L 2.712 2.044 L 3.609 2.487 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      height: 12,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 12,
      overflow: "hidden",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 10.001,
    height: 9.536,
    viewBox: "0 0 10.001 9.536",
    fill: "none",
    style: {
      position: "absolute",
      left: 1,
      top: 1,
      width: 10.001,
      height: 9.536,
      color: "rgb(196,154,69)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.763 0.147 L 3.867 -0.296 L 3.867 -0.295 L 4.763 0.147 Z M 5.001 0 L 5.001 -1 L 5.001 0 Z M 5.238 0.147 L 6.135 -0.295 L 6.135 -0.296 L 5.238 0.147 Z M 6.393 2.487 L 5.497 2.93 L 5.497 2.93 L 6.393 2.487 Z M 7.191 3.067 L 7.046 4.056 L 7.046 4.056 L 7.191 3.067 Z M 9.774 3.445 L 9.629 4.434 L 9.631 4.435 L 9.774 3.445 Z M 9.921 3.897 L 10.619 4.613 L 10.619 4.613 L 9.921 3.897 Z M 8.053 5.716 L 7.355 5 L 7.355 5 L 8.053 5.716 Z M 7.747 6.655 L 6.762 6.823 L 6.762 6.824 L 7.747 6.655 Z M 8.188 9.225 L 7.203 9.394 L 7.204 9.399 L 8.188 9.225 Z M 7.803 9.505 L 8.273 8.622 L 8.268 8.62 L 7.803 9.505 Z M 5.494 8.291 L 5.959 7.406 L 5.959 7.406 L 5.494 8.291 Z M 5.001 8.169 L 5.001 7.169 L 5.001 8.169 Z M 4.507 8.291 L 4.043 7.406 L 4.042 7.406 L 4.507 8.291 Z M 2.199 9.505 L 1.733 8.62 L 1.731 8.621 L 2.199 9.505 Z M 1.814 9.225 L 2.799 9.398 L 2.8 9.394 L 1.814 9.225 Z M 2.254 6.655 L 1.269 6.486 L 1.269 6.486 L 2.254 6.655 Z M 1.949 5.716 L 2.647 5 L 2.646 4.999 L 1.949 5.716 Z M 0.081 3.897 L 0.778 3.181 L 0.776 3.178 L 0.081 3.897 Z M 0.228 3.444 L 0.368 4.435 L 0.373 4.434 L 0.228 3.444 Z M 2.81 3.067 L 2.666 2.077 L 2.666 2.077 L 2.81 3.067 Z M 3.609 2.487 L 4.505 2.93 L 4.506 2.929 L 3.609 2.487 Z M 4.763 0.147 L 5.66 0.591 C 5.599 0.714 5.505 0.817 5.389 0.889 L 4.861 0.04 L 4.334 -0.81 C 4.133 -0.685 3.972 -0.507 3.867 -0.296 L 4.763 0.147 Z M 4.861 0.04 L 5.389 0.889 C 5.272 0.962 5.138 1 5.001 1 L 5.001 0 L 5.001 -1 C 4.765 -1 4.534 -0.934 4.334 -0.81 L 4.861 0.04 Z M 5.001 0 L 5.001 1 C 4.864 1 4.73 0.962 4.613 0.889 L 5.141 0.04 L 5.668 -0.81 C 5.468 -0.934 5.237 -1 5.001 -1 L 5.001 0 Z M 5.141 0.04 L 4.613 0.889 C 4.497 0.817 4.403 0.714 4.342 0.591 L 5.238 0.147 L 6.135 -0.296 C 6.03 -0.507 5.868 -0.685 5.668 -0.81 L 5.141 0.04 Z M 5.238 0.147 L 4.342 0.59 L 5.497 2.93 L 6.393 2.487 L 7.29 2.044 L 6.135 -0.295 L 5.238 0.147 Z M 6.393 2.487 L 5.497 2.93 C 5.645 3.229 5.863 3.488 6.133 3.684 L 6.721 2.875 L 7.309 2.066 C 7.301 2.061 7.294 2.053 7.29 2.044 L 6.393 2.487 Z M 6.721 2.875 L 6.133 3.684 C 6.402 3.88 6.716 4.008 7.046 4.056 L 7.191 3.067 L 7.336 2.078 C 7.326 2.076 7.317 2.072 7.309 2.066 L 6.721 2.875 Z M 7.191 3.067 L 7.046 4.056 L 9.629 4.434 L 9.774 3.445 L 9.919 2.455 L 7.336 2.077 L 7.191 3.067 Z M 9.774 3.445 L 9.631 4.435 C 9.495 4.415 9.367 4.358 9.262 4.269 L 9.907 3.505 L 10.551 2.74 C 10.37 2.588 10.151 2.489 9.917 2.455 L 9.774 3.445 Z M 9.907 3.505 L 9.262 4.269 C 9.157 4.181 9.079 4.065 9.037 3.935 L 9.988 3.625 L 10.939 3.316 C 10.866 3.091 10.731 2.892 10.551 2.74 L 9.907 3.505 Z M 9.988 3.625 L 9.037 3.935 C 8.995 3.804 8.989 3.664 9.022 3.531 L 9.993 3.771 L 10.964 4.01 C 11.021 3.781 11.012 3.54 10.939 3.316 L 9.988 3.625 Z M 9.993 3.771 L 9.022 3.531 C 9.055 3.398 9.125 3.277 9.223 3.181 L 9.921 3.897 L 10.619 4.613 C 10.788 4.448 10.908 4.239 10.964 4.01 L 9.993 3.771 Z M 9.921 3.897 L 9.223 3.181 L 7.355 5 L 8.053 5.716 L 8.751 6.432 L 10.619 4.613 L 9.921 3.897 Z M 8.053 5.716 L 7.355 5 C 7.116 5.233 6.937 5.521 6.833 5.838 L 7.784 6.148 L 8.735 6.457 C 8.738 6.448 8.744 6.439 8.751 6.432 L 8.053 5.716 Z M 7.784 6.148 L 6.833 5.838 C 6.73 6.156 6.705 6.494 6.762 6.823 L 7.747 6.655 L 8.733 6.487 C 8.731 6.477 8.732 6.467 8.735 6.457 L 7.784 6.148 Z M 7.747 6.655 L 6.762 6.824 L 7.203 9.394 L 8.188 9.225 L 9.174 9.056 L 8.733 6.486 L 7.747 6.655 Z M 8.188 9.225 L 7.204 9.399 C 7.18 9.263 7.194 9.123 7.246 8.996 L 8.173 9.37 L 9.1 9.745 C 9.189 9.525 9.214 9.285 9.173 9.051 L 8.188 9.225 Z M 8.173 9.37 L 7.246 8.996 C 7.298 8.868 7.384 8.757 7.495 8.676 L 8.083 9.485 L 8.671 10.295 C 8.863 10.155 9.012 9.965 9.1 9.745 L 8.173 9.37 Z M 8.083 9.485 L 7.495 8.676 C 7.607 8.595 7.739 8.547 7.876 8.538 L 7.946 9.535 L 8.015 10.533 C 8.252 10.517 8.479 10.434 8.671 10.295 L 8.083 9.485 Z M 7.946 9.535 L 7.876 8.538 C 8.014 8.528 8.151 8.558 8.273 8.622 L 7.803 9.505 L 7.333 10.388 C 7.542 10.499 7.779 10.549 8.015 10.533 L 7.946 9.535 Z M 7.803 9.505 L 8.268 8.62 L 5.959 7.406 L 5.494 8.291 L 5.029 9.176 L 7.338 10.39 L 7.803 9.505 Z M 5.494 8.291 L 5.959 7.406 C 5.663 7.25 5.334 7.169 5.001 7.169 L 5.001 8.169 L 5.001 9.169 C 5.011 9.169 5.02 9.172 5.029 9.176 L 5.494 8.291 Z M 5.001 8.169 L 5.001 7.169 C 4.667 7.169 4.338 7.25 4.043 7.406 L 4.507 8.291 L 4.972 9.176 C 4.981 9.172 4.991 9.169 5.001 9.169 L 5.001 8.169 Z M 4.507 8.291 L 4.042 7.406 L 1.733 8.62 L 2.199 9.505 L 2.664 10.39 L 4.973 9.176 L 4.507 8.291 Z M 2.199 9.505 L 1.731 8.621 C 1.853 8.557 1.99 8.528 2.127 8.538 L 2.056 9.535 L 1.985 10.533 C 2.221 10.549 2.458 10.5 2.667 10.389 L 2.199 9.505 Z M 2.056 9.535 L 2.127 8.538 C 2.264 8.547 2.396 8.595 2.507 8.676 L 1.919 9.485 L 1.331 10.294 C 1.522 10.433 1.749 10.516 1.985 10.533 L 2.056 9.535 Z M 1.919 9.485 L 2.507 8.676 C 2.618 8.757 2.705 8.868 2.756 8.995 L 1.829 9.37 L 0.902 9.745 C 0.991 9.964 1.139 10.155 1.331 10.294 L 1.919 9.485 Z M 1.829 9.37 L 2.756 8.995 C 2.808 9.123 2.823 9.262 2.799 9.398 L 1.814 9.225 L 0.829 9.052 C 0.788 9.285 0.813 9.525 0.902 9.745 L 1.829 9.37 Z M 1.814 9.225 L 2.8 9.394 L 3.24 6.824 L 2.254 6.655 L 1.269 6.486 L 0.828 9.056 L 1.814 9.225 Z M 2.254 6.655 L 3.24 6.825 C 3.297 6.495 3.272 6.157 3.169 5.839 L 2.218 6.148 L 1.267 6.457 C 1.27 6.467 1.27 6.477 1.269 6.486 L 2.254 6.655 Z M 2.218 6.148 L 3.169 5.839 C 3.065 5.521 2.886 5.233 2.647 5 L 1.949 5.716 L 1.251 6.432 C 1.258 6.439 1.264 6.448 1.267 6.457 L 2.218 6.148 Z M 1.949 5.716 L 2.646 4.999 L 0.778 3.181 L 0.081 3.897 L -0.617 4.614 L 1.251 6.432 L 1.949 5.716 Z M 0.081 3.897 L 0.776 3.178 C 0.875 3.274 0.945 3.395 0.978 3.529 L 0.008 3.771 L -0.962 4.013 C -0.905 4.243 -0.784 4.452 -0.614 4.617 L 0.081 3.897 Z M 0.008 3.771 L 0.978 3.529 C 1.011 3.662 1.007 3.803 0.964 3.934 L 0.013 3.625 L -0.938 3.316 C -1.011 3.542 -1.02 3.783 -0.962 4.013 L 0.008 3.771 Z M 0.013 3.625 L 0.964 3.934 C 0.922 4.065 0.843 4.181 0.738 4.27 L 0.095 3.504 L -0.549 2.738 C -0.73 2.891 -0.865 3.091 -0.938 3.316 L 0.013 3.625 Z M 0.095 3.504 L 0.738 4.27 C 0.632 4.358 0.504 4.415 0.368 4.435 L 0.228 3.444 L 0.088 2.454 C -0.147 2.487 -0.367 2.586 -0.549 2.738 L 0.095 3.504 Z M 0.228 3.444 L 0.373 4.434 L 2.955 4.056 L 2.81 3.067 L 2.666 2.077 L 0.083 2.455 L 0.228 3.444 Z M 2.81 3.067 L 2.954 4.057 C 3.285 4.008 3.599 3.881 3.869 3.685 L 3.281 2.875 L 2.694 2.066 C 2.686 2.072 2.676 2.076 2.666 2.077 L 2.81 3.067 Z M 3.281 2.875 L 3.869 3.685 C 4.139 3.488 4.358 3.229 4.505 2.93 L 3.609 2.487 L 2.712 2.044 C 2.708 2.053 2.701 2.061 2.694 2.066 L 3.281 2.875 Z M 3.609 2.487 L 4.506 2.929 L 5.66 0.59 L 4.763 0.147 L 3.867 -0.295 L 2.712 2.044 L 3.609 2.487 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      height: 12,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 12,
      overflow: "hidden",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 10.001,
    height: 9.536,
    viewBox: "0 0 10.001 9.536",
    fill: "none",
    style: {
      position: "absolute",
      left: 1,
      top: 1,
      width: 10.001,
      height: 9.536,
      color: "rgb(196,154,69)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.763 0.147 L 3.867 -0.296 L 3.867 -0.295 L 4.763 0.147 Z M 5.001 0 L 5.001 -1 L 5.001 0 Z M 5.238 0.147 L 6.135 -0.295 L 6.135 -0.296 L 5.238 0.147 Z M 6.393 2.487 L 5.497 2.93 L 5.497 2.93 L 6.393 2.487 Z M 7.191 3.067 L 7.046 4.056 L 7.046 4.056 L 7.191 3.067 Z M 9.774 3.445 L 9.629 4.434 L 9.631 4.435 L 9.774 3.445 Z M 9.921 3.897 L 10.619 4.613 L 10.619 4.613 L 9.921 3.897 Z M 8.053 5.716 L 7.355 5 L 7.355 5 L 8.053 5.716 Z M 7.747 6.655 L 6.762 6.823 L 6.762 6.824 L 7.747 6.655 Z M 8.188 9.225 L 7.203 9.394 L 7.204 9.399 L 8.188 9.225 Z M 7.803 9.505 L 8.273 8.622 L 8.268 8.62 L 7.803 9.505 Z M 5.494 8.291 L 5.959 7.406 L 5.959 7.406 L 5.494 8.291 Z M 5.001 8.169 L 5.001 7.169 L 5.001 8.169 Z M 4.507 8.291 L 4.043 7.406 L 4.042 7.406 L 4.507 8.291 Z M 2.199 9.505 L 1.733 8.62 L 1.731 8.621 L 2.199 9.505 Z M 1.814 9.225 L 2.799 9.398 L 2.8 9.394 L 1.814 9.225 Z M 2.254 6.655 L 1.269 6.486 L 1.269 6.486 L 2.254 6.655 Z M 1.949 5.716 L 2.647 5 L 2.646 4.999 L 1.949 5.716 Z M 0.081 3.897 L 0.778 3.181 L 0.776 3.178 L 0.081 3.897 Z M 0.228 3.444 L 0.368 4.435 L 0.373 4.434 L 0.228 3.444 Z M 2.81 3.067 L 2.666 2.077 L 2.666 2.077 L 2.81 3.067 Z M 3.609 2.487 L 4.505 2.93 L 4.506 2.929 L 3.609 2.487 Z M 4.763 0.147 L 5.66 0.591 C 5.599 0.714 5.505 0.817 5.389 0.889 L 4.861 0.04 L 4.334 -0.81 C 4.133 -0.685 3.972 -0.507 3.867 -0.296 L 4.763 0.147 Z M 4.861 0.04 L 5.389 0.889 C 5.272 0.962 5.138 1 5.001 1 L 5.001 0 L 5.001 -1 C 4.765 -1 4.534 -0.934 4.334 -0.81 L 4.861 0.04 Z M 5.001 0 L 5.001 1 C 4.864 1 4.73 0.962 4.613 0.889 L 5.141 0.04 L 5.668 -0.81 C 5.468 -0.934 5.237 -1 5.001 -1 L 5.001 0 Z M 5.141 0.04 L 4.613 0.889 C 4.497 0.817 4.403 0.714 4.342 0.591 L 5.238 0.147 L 6.135 -0.296 C 6.03 -0.507 5.868 -0.685 5.668 -0.81 L 5.141 0.04 Z M 5.238 0.147 L 4.342 0.59 L 5.497 2.93 L 6.393 2.487 L 7.29 2.044 L 6.135 -0.295 L 5.238 0.147 Z M 6.393 2.487 L 5.497 2.93 C 5.645 3.229 5.863 3.488 6.133 3.684 L 6.721 2.875 L 7.309 2.066 C 7.301 2.061 7.294 2.053 7.29 2.044 L 6.393 2.487 Z M 6.721 2.875 L 6.133 3.684 C 6.402 3.88 6.716 4.008 7.046 4.056 L 7.191 3.067 L 7.336 2.078 C 7.326 2.076 7.317 2.072 7.309 2.066 L 6.721 2.875 Z M 7.191 3.067 L 7.046 4.056 L 9.629 4.434 L 9.774 3.445 L 9.919 2.455 L 7.336 2.077 L 7.191 3.067 Z M 9.774 3.445 L 9.631 4.435 C 9.495 4.415 9.367 4.358 9.262 4.269 L 9.907 3.505 L 10.551 2.74 C 10.37 2.588 10.151 2.489 9.917 2.455 L 9.774 3.445 Z M 9.907 3.505 L 9.262 4.269 C 9.157 4.181 9.079 4.065 9.037 3.935 L 9.988 3.625 L 10.939 3.316 C 10.866 3.091 10.731 2.892 10.551 2.74 L 9.907 3.505 Z M 9.988 3.625 L 9.037 3.935 C 8.995 3.804 8.989 3.664 9.022 3.531 L 9.993 3.771 L 10.964 4.01 C 11.021 3.781 11.012 3.54 10.939 3.316 L 9.988 3.625 Z M 9.993 3.771 L 9.022 3.531 C 9.055 3.398 9.125 3.277 9.223 3.181 L 9.921 3.897 L 10.619 4.613 C 10.788 4.448 10.908 4.239 10.964 4.01 L 9.993 3.771 Z M 9.921 3.897 L 9.223 3.181 L 7.355 5 L 8.053 5.716 L 8.751 6.432 L 10.619 4.613 L 9.921 3.897 Z M 8.053 5.716 L 7.355 5 C 7.116 5.233 6.937 5.521 6.833 5.838 L 7.784 6.148 L 8.735 6.457 C 8.738 6.448 8.744 6.439 8.751 6.432 L 8.053 5.716 Z M 7.784 6.148 L 6.833 5.838 C 6.73 6.156 6.705 6.494 6.762 6.823 L 7.747 6.655 L 8.733 6.487 C 8.731 6.477 8.732 6.467 8.735 6.457 L 7.784 6.148 Z M 7.747 6.655 L 6.762 6.824 L 7.203 9.394 L 8.188 9.225 L 9.174 9.056 L 8.733 6.486 L 7.747 6.655 Z M 8.188 9.225 L 7.204 9.399 C 7.18 9.263 7.194 9.123 7.246 8.996 L 8.173 9.37 L 9.1 9.745 C 9.189 9.525 9.214 9.285 9.173 9.051 L 8.188 9.225 Z M 8.173 9.37 L 7.246 8.996 C 7.298 8.868 7.384 8.757 7.495 8.676 L 8.083 9.485 L 8.671 10.295 C 8.863 10.155 9.012 9.965 9.1 9.745 L 8.173 9.37 Z M 8.083 9.485 L 7.495 8.676 C 7.607 8.595 7.739 8.547 7.876 8.538 L 7.946 9.535 L 8.015 10.533 C 8.252 10.517 8.479 10.434 8.671 10.295 L 8.083 9.485 Z M 7.946 9.535 L 7.876 8.538 C 8.014 8.528 8.151 8.558 8.273 8.622 L 7.803 9.505 L 7.333 10.388 C 7.542 10.499 7.779 10.549 8.015 10.533 L 7.946 9.535 Z M 7.803 9.505 L 8.268 8.62 L 5.959 7.406 L 5.494 8.291 L 5.029 9.176 L 7.338 10.39 L 7.803 9.505 Z M 5.494 8.291 L 5.959 7.406 C 5.663 7.25 5.334 7.169 5.001 7.169 L 5.001 8.169 L 5.001 9.169 C 5.011 9.169 5.02 9.172 5.029 9.176 L 5.494 8.291 Z M 5.001 8.169 L 5.001 7.169 C 4.667 7.169 4.338 7.25 4.043 7.406 L 4.507 8.291 L 4.972 9.176 C 4.981 9.172 4.991 9.169 5.001 9.169 L 5.001 8.169 Z M 4.507 8.291 L 4.042 7.406 L 1.733 8.62 L 2.199 9.505 L 2.664 10.39 L 4.973 9.176 L 4.507 8.291 Z M 2.199 9.505 L 1.731 8.621 C 1.853 8.557 1.99 8.528 2.127 8.538 L 2.056 9.535 L 1.985 10.533 C 2.221 10.549 2.458 10.5 2.667 10.389 L 2.199 9.505 Z M 2.056 9.535 L 2.127 8.538 C 2.264 8.547 2.396 8.595 2.507 8.676 L 1.919 9.485 L 1.331 10.294 C 1.522 10.433 1.749 10.516 1.985 10.533 L 2.056 9.535 Z M 1.919 9.485 L 2.507 8.676 C 2.618 8.757 2.705 8.868 2.756 8.995 L 1.829 9.37 L 0.902 9.745 C 0.991 9.964 1.139 10.155 1.331 10.294 L 1.919 9.485 Z M 1.829 9.37 L 2.756 8.995 C 2.808 9.123 2.823 9.262 2.799 9.398 L 1.814 9.225 L 0.829 9.052 C 0.788 9.285 0.813 9.525 0.902 9.745 L 1.829 9.37 Z M 1.814 9.225 L 2.8 9.394 L 3.24 6.824 L 2.254 6.655 L 1.269 6.486 L 0.828 9.056 L 1.814 9.225 Z M 2.254 6.655 L 3.24 6.825 C 3.297 6.495 3.272 6.157 3.169 5.839 L 2.218 6.148 L 1.267 6.457 C 1.27 6.467 1.27 6.477 1.269 6.486 L 2.254 6.655 Z M 2.218 6.148 L 3.169 5.839 C 3.065 5.521 2.886 5.233 2.647 5 L 1.949 5.716 L 1.251 6.432 C 1.258 6.439 1.264 6.448 1.267 6.457 L 2.218 6.148 Z M 1.949 5.716 L 2.646 4.999 L 0.778 3.181 L 0.081 3.897 L -0.617 4.614 L 1.251 6.432 L 1.949 5.716 Z M 0.081 3.897 L 0.776 3.178 C 0.875 3.274 0.945 3.395 0.978 3.529 L 0.008 3.771 L -0.962 4.013 C -0.905 4.243 -0.784 4.452 -0.614 4.617 L 0.081 3.897 Z M 0.008 3.771 L 0.978 3.529 C 1.011 3.662 1.007 3.803 0.964 3.934 L 0.013 3.625 L -0.938 3.316 C -1.011 3.542 -1.02 3.783 -0.962 4.013 L 0.008 3.771 Z M 0.013 3.625 L 0.964 3.934 C 0.922 4.065 0.843 4.181 0.738 4.27 L 0.095 3.504 L -0.549 2.738 C -0.73 2.891 -0.865 3.091 -0.938 3.316 L 0.013 3.625 Z M 0.095 3.504 L 0.738 4.27 C 0.632 4.358 0.504 4.415 0.368 4.435 L 0.228 3.444 L 0.088 2.454 C -0.147 2.487 -0.367 2.586 -0.549 2.738 L 0.095 3.504 Z M 0.228 3.444 L 0.373 4.434 L 2.955 4.056 L 2.81 3.067 L 2.666 2.077 L 0.083 2.455 L 0.228 3.444 Z M 2.81 3.067 L 2.954 4.057 C 3.285 4.008 3.599 3.881 3.869 3.685 L 3.281 2.875 L 2.694 2.066 C 2.686 2.072 2.676 2.076 2.666 2.077 L 2.81 3.067 Z M 3.281 2.875 L 3.869 3.685 C 4.139 3.488 4.358 3.229 4.505 2.93 L 3.609 2.487 L 2.712 2.044 C 2.708 2.053 2.701 2.061 2.694 2.066 L 3.281 2.875 Z M 3.609 2.487 L 4.506 2.929 L 5.66 0.59 L 4.763 0.147 L 3.867 -0.295 L 2.712 2.044 L 3.609 2.487 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(112,110,107)",
      flexShrink: 0
    }
  }, " (100ml)"))), /*#__PURE__*/React.createElement("svg", {
    height: 1,
    viewBox: "0 -0.500 376 1",
    fill: "none",
    style: {
      position: "relative",
      height: 1,
      flexShrink: 0,
      alignSelf: "stretch",
      color: "rgb(239,236,233)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 -0.5 L 0 0 L 376 0 L 376 -0.5 L 376 -1 L 0 -1 L 0 -0.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 13,
      lineHeight: 1.399999976158142,
      color: "rgb(112,110,107)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "A luxurious amber fragrance with warm oud notes, perfect for evening wear. Featuring exceptional projection and a long-lasting signature scent."), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      alignItems: "baseline",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(26,26,26)",
      textTransform: "uppercase",
      flexShrink: 0
    }
  }, "AED"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 800,
      fontSize: 22,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(26,26,26)",
      flexShrink: 0
    }
  }, "1,429"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(112,110,107)",
      flexShrink: 0
    }
  }, "/ retail avg")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    style: {
      position: "relative",
      height: 44,
      flexGrow: 1,
      width: "auto"
    },
    text1: "Add To Cart",
    type: "primary",
    size: "md",
    state: "disabled"
  }), /*#__PURE__*/React.createElement(Button, {
    style: {
      position: "relative",
      height: 44,
      flexGrow: 1,
      width: "auto"
    },
    text1: "Buy Now",
    type: "primary",
    size: "md",
    state: "default"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 4px 0px 4px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      letterSpacing: "1px",
      color: "rgb(112,110,107)",
      textTransform: "uppercase",
      flexShrink: 0
    }
  }, "COMPARE RETAILERS")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 12,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 16,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(239,236,233), 0px 4px 12px 0px rgba(26,26,26,0.0196)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "14px 14px 14px 14px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 48,
      height: 48,
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "var(--bg-subtle)",
      boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.1)",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-af02786e6dff9a86",
    style: {
      position: "absolute",
      left: 8,
      top: 7.5,
      width: 32,
      height: "calc(var(--icon-2xl) * 1px)",
      borderRadius: 999
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(26,26,26)",
      flexShrink: 0
    }
  }, "Maison d'Oud"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(196,154,69)",
      flexShrink: 0
    }
  }, "AED 1,429")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 10,
      height: 10,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 10,
      overflow: "hidden",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 8.334,
    height: 7.947,
    viewBox: "0 0 8.334 7.947",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.833,
      top: 0.833,
      width: 8.334,
      height: 7.947,
      color: "rgb(196,154,69)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.969 0.123 L 3.073 -0.321 L 3.073 -0.32 L 3.969 0.123 Z M 4.167 0 L 4.167 -1 L 4.167 0 Z M 4.365 0.123 L 5.262 -0.32 L 5.262 -0.321 L 4.365 0.123 Z M 5.328 2.072 L 4.431 2.515 L 4.431 2.515 L 5.328 2.072 Z M 5.992 2.556 L 5.847 3.545 L 5.848 3.545 L 5.992 2.556 Z M 8.145 2.871 L 8 3.86 L 8.002 3.86 L 8.145 2.871 Z M 8.267 3.247 L 8.965 3.964 L 8.966 3.963 L 8.267 3.247 Z M 6.711 4.763 L 6.013 4.047 L 6.013 4.047 L 6.711 4.763 Z M 6.456 5.546 L 5.47 5.714 L 5.471 5.715 L 6.456 5.546 Z M 6.824 7.687 L 5.838 7.857 L 5.839 7.861 L 6.824 7.687 Z M 6.502 7.921 L 6.972 7.038 L 6.968 7.036 L 6.502 7.921 Z M 4.578 6.909 L 5.044 6.024 L 5.043 6.024 L 4.578 6.909 Z M 4.167 6.808 L 4.167 5.808 L 4.167 6.808 Z M 3.756 6.909 L 3.291 6.024 L 3.291 6.024 L 3.756 6.909 Z M 1.832 7.921 L 1.367 7.036 L 1.365 7.037 L 1.832 7.921 Z M 1.512 7.687 L 2.497 7.86 L 2.497 7.856 L 1.512 7.687 Z M 1.879 5.546 L 0.893 5.377 L 0.893 5.377 L 1.879 5.546 Z M 1.624 4.763 L 2.322 4.047 L 2.322 4.047 L 1.624 4.763 Z M 0.067 3.248 L 0.765 2.531 L 0.762 2.529 L 0.067 3.248 Z M 0.19 2.87 L 0.33 3.861 L 0.335 3.86 L 0.19 2.87 Z M 2.342 2.556 L 2.198 1.566 L 2.197 1.566 L 2.342 2.556 Z M 3.007 2.072 L 3.904 2.515 L 3.904 2.515 L 3.007 2.072 Z M 3.969 0.123 L 4.866 0.566 C 4.801 0.697 4.702 0.806 4.578 0.883 L 4.051 0.033 L 3.523 -0.816 C 3.33 -0.696 3.174 -0.525 3.073 -0.321 L 3.969 0.123 Z M 4.051 0.033 L 4.578 0.883 C 4.455 0.959 4.313 1 4.167 1 L 4.167 0 L 4.167 -1 C 3.94 -1 3.717 -0.936 3.523 -0.816 L 4.051 0.033 Z M 4.167 0 L 4.167 1 C 4.022 1 3.88 0.959 3.756 0.883 L 4.284 0.033 L 4.811 -0.816 C 4.618 -0.936 4.395 -1 4.167 -1 L 4.167 0 Z M 4.284 0.033 L 3.756 0.883 C 3.633 0.806 3.534 0.697 3.469 0.566 L 4.365 0.123 L 5.262 -0.321 C 5.161 -0.525 5.005 -0.696 4.811 -0.816 L 4.284 0.033 Z M 4.365 0.123 L 3.469 0.566 L 4.431 2.515 L 5.328 2.072 L 6.225 1.63 L 5.262 -0.32 L 4.365 0.123 Z M 5.328 2.072 L 4.431 2.515 C 4.566 2.789 4.766 3.025 5.012 3.205 L 5.601 2.396 L 6.189 1.587 C 6.204 1.598 6.216 1.613 6.224 1.629 L 5.328 2.072 Z M 5.601 2.396 L 5.012 3.205 C 5.259 3.384 5.545 3.501 5.847 3.545 L 5.992 2.556 L 6.138 1.566 C 6.156 1.569 6.174 1.576 6.189 1.587 L 5.601 2.396 Z M 5.992 2.556 L 5.848 3.545 L 8 3.86 L 8.145 2.871 L 8.29 1.881 L 6.137 1.566 L 5.992 2.556 Z M 8.145 2.871 L 8.002 3.86 C 7.858 3.84 7.722 3.779 7.611 3.685 L 8.256 2.92 L 8.9 2.156 C 8.726 2.009 8.514 1.914 8.288 1.881 L 8.145 2.871 Z M 8.256 2.92 L 7.611 3.685 C 7.5 3.592 7.417 3.469 7.372 3.33 L 8.323 3.021 L 9.274 2.712 C 9.204 2.495 9.074 2.302 8.9 2.156 L 8.256 2.92 Z M 8.323 3.021 L 7.372 3.33 C 7.327 3.192 7.322 3.044 7.357 2.903 L 8.328 3.142 L 9.299 3.382 C 9.353 3.16 9.345 2.928 9.274 2.712 L 8.323 3.021 Z M 8.328 3.142 L 7.357 2.903 C 7.392 2.762 7.465 2.633 7.569 2.531 L 8.267 3.247 L 8.966 3.963 C 9.129 3.804 9.244 3.603 9.299 3.382 L 8.328 3.142 Z M 8.267 3.247 L 7.57 2.531 L 6.013 4.047 L 6.711 4.763 L 7.408 5.48 L 8.965 3.964 L 8.267 3.247 Z M 6.711 4.763 L 6.013 4.047 C 5.794 4.26 5.63 4.523 5.536 4.814 L 6.487 5.123 L 7.438 5.433 C 7.432 5.45 7.422 5.466 7.409 5.479 L 6.711 4.763 Z M 6.487 5.123 L 5.536 4.814 C 5.442 5.104 5.419 5.413 5.47 5.714 L 6.456 5.546 L 7.442 5.377 C 7.445 5.396 7.444 5.415 7.438 5.433 L 6.487 5.123 Z M 6.456 5.546 L 5.471 5.715 L 5.838 7.857 L 6.824 7.687 L 7.809 7.518 L 7.442 5.377 L 6.456 5.546 Z M 6.824 7.687 L 5.839 7.861 C 5.814 7.718 5.829 7.569 5.884 7.434 L 6.811 7.809 L 7.738 8.183 C 7.824 7.971 7.848 7.739 7.808 7.514 L 6.824 7.687 Z M 6.811 7.809 L 5.884 7.434 C 5.938 7.299 6.03 7.181 6.148 7.095 L 6.736 7.905 L 7.324 8.714 C 7.509 8.579 7.652 8.395 7.738 8.183 L 6.811 7.809 Z M 6.736 7.905 L 6.148 7.095 C 6.266 7.01 6.406 6.959 6.552 6.949 L 6.622 7.946 L 6.691 8.944 C 6.919 8.928 7.138 8.848 7.324 8.714 L 6.736 7.905 Z M 6.622 7.946 L 6.552 6.949 C 6.698 6.938 6.843 6.969 6.972 7.038 L 6.502 7.921 L 6.032 8.803 C 6.234 8.911 6.463 8.96 6.691 8.944 L 6.622 7.946 Z M 6.502 7.921 L 6.968 7.036 L 5.044 6.024 L 4.578 6.909 L 4.113 7.794 L 6.037 8.806 L 6.502 7.921 Z M 4.578 6.909 L 5.043 6.024 C 4.773 5.882 4.472 5.808 4.167 5.808 L 4.167 6.808 L 4.167 7.808 C 4.148 7.808 4.13 7.803 4.113 7.794 L 4.578 6.909 Z M 4.167 6.808 L 4.167 5.808 C 3.862 5.808 3.561 5.882 3.291 6.024 L 3.756 6.909 L 4.221 7.794 C 4.204 7.803 4.186 7.808 4.167 7.808 L 4.167 6.808 Z M 3.756 6.909 L 3.291 6.024 L 1.367 7.036 L 1.832 7.921 L 2.298 8.806 L 4.222 7.794 L 3.756 6.909 Z M 1.832 7.921 L 1.365 7.037 C 1.493 6.969 1.639 6.938 1.784 6.948 L 1.713 7.946 L 1.643 8.943 C 1.87 8.96 2.098 8.911 2.3 8.805 L 1.832 7.921 Z M 1.713 7.946 L 1.784 6.948 C 1.93 6.959 2.069 7.01 2.187 7.095 L 1.599 7.904 L 1.011 8.713 C 1.196 8.847 1.415 8.927 1.643 8.943 L 1.713 7.946 Z M 1.599 7.904 L 2.187 7.095 C 2.305 7.181 2.397 7.298 2.451 7.434 L 1.524 7.808 L 0.597 8.183 C 0.683 8.395 0.826 8.579 1.011 8.713 L 1.599 7.904 Z M 1.524 7.808 L 2.451 7.434 C 2.506 7.569 2.522 7.717 2.497 7.86 L 1.512 7.687 L 0.527 7.515 C 0.487 7.74 0.512 7.971 0.597 8.183 L 1.524 7.808 Z M 1.512 7.687 L 2.497 7.856 L 2.864 5.715 L 1.879 5.546 L 0.893 5.377 L 0.526 7.518 L 1.512 7.687 Z M 1.879 5.546 L 2.864 5.715 C 2.916 5.414 2.894 5.105 2.799 4.814 L 1.848 5.123 L 0.897 5.433 C 0.891 5.415 0.89 5.396 0.893 5.377 L 1.879 5.546 Z M 1.848 5.123 L 2.799 4.814 C 2.705 4.523 2.541 4.26 2.322 4.047 L 1.624 4.763 L 0.926 5.48 C 0.913 5.467 0.903 5.45 0.897 5.433 L 1.848 5.123 Z M 1.624 4.763 L 2.322 4.047 L 0.765 2.531 L 0.067 3.248 L -0.63 3.964 L 0.927 5.48 L 1.624 4.763 Z M 0.067 3.248 L 0.762 2.529 C 0.867 2.63 0.941 2.759 0.977 2.9 L 0.007 3.142 L -0.964 3.385 C -0.908 3.606 -0.792 3.808 -0.627 3.967 L 0.067 3.248 Z M 0.007 3.142 L 0.977 2.9 C 1.012 3.042 1.007 3.191 0.962 3.33 L 0.011 3.021 L -0.94 2.712 C -1.011 2.93 -1.019 3.163 -0.964 3.385 L 0.007 3.142 Z M 0.011 3.021 L 0.962 3.33 C 0.917 3.468 0.834 3.592 0.722 3.686 L 0.079 2.92 L -0.564 2.154 C -0.74 2.301 -0.87 2.495 -0.94 2.712 L 0.011 3.021 Z M 0.079 2.92 L 0.722 3.686 C 0.61 3.779 0.474 3.84 0.33 3.861 L 0.19 2.87 L 0.05 1.88 C -0.177 1.912 -0.389 2.007 -0.564 2.154 L 0.079 2.92 Z M 0.19 2.87 L 0.335 3.86 L 2.487 3.545 L 2.342 2.556 L 2.197 1.566 L 0.045 1.881 L 0.19 2.87 Z M 2.342 2.556 L 2.486 3.545 C 2.788 3.501 3.075 3.385 3.322 3.205 L 2.734 2.396 L 2.147 1.587 C 2.162 1.576 2.179 1.569 2.198 1.566 L 2.342 2.556 Z M 2.734 2.396 L 3.322 3.205 C 3.569 3.026 3.769 2.789 3.904 2.515 L 3.007 2.072 L 2.111 1.63 C 2.119 1.613 2.131 1.598 2.147 1.587 L 2.734 2.396 Z M 3.007 2.072 L 3.904 2.515 L 4.866 0.565 L 3.969 0.123 L 3.073 -0.32 L 2.111 1.63 L 3.007 2.072 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(112,110,107)",
      flexShrink: 0
    }
  }, "4.9 \u2022 Authentic Blend")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      lineHeight: "100%",
      color: "rgb(112,110,107)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Original Maison d'Oud fragrance, authentic oud blend with premium extraction."))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 16,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(239,236,233), 0px 4px 12px 0px rgba(26,26,26,0.0196)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "14px 14px 14px 14px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 48,
      height: 48,
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "var(--bg-subtle)",
      boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.1)",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-ac66b2e488a83d36",
    style: {
      position: "absolute",
      left: 8,
      top: 7.5,
      width: 32,
      height: "calc(var(--icon-2xl) * 1px)",
      borderRadius: 999
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(26,26,26)",
      flexShrink: 0
    }
  }, "Montblanc Store"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(196,154,69)",
      flexShrink: 0
    }
  }, "AED 1,899")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 10,
      height: 10,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 10,
      overflow: "hidden",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 8.334,
    height: 7.947,
    viewBox: "0 0 8.334 7.947",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.833,
      top: 0.833,
      width: 8.334,
      height: 7.947,
      color: "rgb(196,154,69)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.969 0.123 L 3.073 -0.321 L 3.073 -0.32 L 3.969 0.123 Z M 4.167 0 L 4.167 -1 L 4.167 0 Z M 4.365 0.123 L 5.262 -0.32 L 5.262 -0.321 L 4.365 0.123 Z M 5.328 2.072 L 4.431 2.515 L 4.431 2.515 L 5.328 2.072 Z M 5.992 2.556 L 5.847 3.545 L 5.848 3.545 L 5.992 2.556 Z M 8.145 2.871 L 8 3.86 L 8.002 3.86 L 8.145 2.871 Z M 8.267 3.247 L 8.965 3.964 L 8.966 3.963 L 8.267 3.247 Z M 6.711 4.763 L 6.013 4.047 L 6.013 4.047 L 6.711 4.763 Z M 6.456 5.546 L 5.47 5.714 L 5.471 5.715 L 6.456 5.546 Z M 6.824 7.687 L 5.838 7.857 L 5.839 7.861 L 6.824 7.687 Z M 6.502 7.921 L 6.972 7.038 L 6.968 7.036 L 6.502 7.921 Z M 4.578 6.909 L 5.044 6.024 L 5.043 6.024 L 4.578 6.909 Z M 4.167 6.808 L 4.167 5.808 L 4.167 6.808 Z M 3.756 6.909 L 3.291 6.024 L 3.291 6.024 L 3.756 6.909 Z M 1.832 7.921 L 1.367 7.036 L 1.365 7.037 L 1.832 7.921 Z M 1.512 7.687 L 2.497 7.86 L 2.497 7.856 L 1.512 7.687 Z M 1.879 5.546 L 0.893 5.377 L 0.893 5.377 L 1.879 5.546 Z M 1.624 4.763 L 2.322 4.047 L 2.322 4.047 L 1.624 4.763 Z M 0.067 3.248 L 0.765 2.531 L 0.762 2.529 L 0.067 3.248 Z M 0.19 2.87 L 0.33 3.861 L 0.335 3.86 L 0.19 2.87 Z M 2.342 2.556 L 2.198 1.566 L 2.197 1.566 L 2.342 2.556 Z M 3.007 2.072 L 3.904 2.515 L 3.904 2.515 L 3.007 2.072 Z M 3.969 0.123 L 4.866 0.566 C 4.801 0.697 4.702 0.806 4.578 0.883 L 4.051 0.033 L 3.523 -0.816 C 3.33 -0.696 3.174 -0.525 3.073 -0.321 L 3.969 0.123 Z M 4.051 0.033 L 4.578 0.883 C 4.455 0.959 4.313 1 4.167 1 L 4.167 0 L 4.167 -1 C 3.94 -1 3.717 -0.936 3.523 -0.816 L 4.051 0.033 Z M 4.167 0 L 4.167 1 C 4.022 1 3.88 0.959 3.756 0.883 L 4.284 0.033 L 4.811 -0.816 C 4.618 -0.936 4.395 -1 4.167 -1 L 4.167 0 Z M 4.284 0.033 L 3.756 0.883 C 3.633 0.806 3.534 0.697 3.469 0.566 L 4.365 0.123 L 5.262 -0.321 C 5.161 -0.525 5.005 -0.696 4.811 -0.816 L 4.284 0.033 Z M 4.365 0.123 L 3.469 0.566 L 4.431 2.515 L 5.328 2.072 L 6.225 1.63 L 5.262 -0.32 L 4.365 0.123 Z M 5.328 2.072 L 4.431 2.515 C 4.566 2.789 4.766 3.025 5.012 3.205 L 5.601 2.396 L 6.189 1.587 C 6.204 1.598 6.216 1.613 6.224 1.629 L 5.328 2.072 Z M 5.601 2.396 L 5.012 3.205 C 5.259 3.384 5.545 3.501 5.847 3.545 L 5.992 2.556 L 6.138 1.566 C 6.156 1.569 6.174 1.576 6.189 1.587 L 5.601 2.396 Z M 5.992 2.556 L 5.848 3.545 L 8 3.86 L 8.145 2.871 L 8.29 1.881 L 6.137 1.566 L 5.992 2.556 Z M 8.145 2.871 L 8.002 3.86 C 7.858 3.84 7.722 3.779 7.611 3.685 L 8.256 2.92 L 8.9 2.156 C 8.726 2.009 8.514 1.914 8.288 1.881 L 8.145 2.871 Z M 8.256 2.92 L 7.611 3.685 C 7.5 3.592 7.417 3.469 7.372 3.33 L 8.323 3.021 L 9.274 2.712 C 9.204 2.495 9.074 2.302 8.9 2.156 L 8.256 2.92 Z M 8.323 3.021 L 7.372 3.33 C 7.327 3.192 7.322 3.044 7.357 2.903 L 8.328 3.142 L 9.299 3.382 C 9.353 3.16 9.345 2.928 9.274 2.712 L 8.323 3.021 Z M 8.328 3.142 L 7.357 2.903 C 7.392 2.762 7.465 2.633 7.569 2.531 L 8.267 3.247 L 8.966 3.963 C 9.129 3.804 9.244 3.603 9.299 3.382 L 8.328 3.142 Z M 8.267 3.247 L 7.57 2.531 L 6.013 4.047 L 6.711 4.763 L 7.408 5.48 L 8.965 3.964 L 8.267 3.247 Z M 6.711 4.763 L 6.013 4.047 C 5.794 4.26 5.63 4.523 5.536 4.814 L 6.487 5.123 L 7.438 5.433 C 7.432 5.45 7.422 5.466 7.409 5.479 L 6.711 4.763 Z M 6.487 5.123 L 5.536 4.814 C 5.442 5.104 5.419 5.413 5.47 5.714 L 6.456 5.546 L 7.442 5.377 C 7.445 5.396 7.444 5.415 7.438 5.433 L 6.487 5.123 Z M 6.456 5.546 L 5.471 5.715 L 5.838 7.857 L 6.824 7.687 L 7.809 7.518 L 7.442 5.377 L 6.456 5.546 Z M 6.824 7.687 L 5.839 7.861 C 5.814 7.718 5.829 7.569 5.884 7.434 L 6.811 7.809 L 7.738 8.183 C 7.824 7.971 7.848 7.739 7.808 7.514 L 6.824 7.687 Z M 6.811 7.809 L 5.884 7.434 C 5.938 7.299 6.03 7.181 6.148 7.095 L 6.736 7.905 L 7.324 8.714 C 7.509 8.579 7.652 8.395 7.738 8.183 L 6.811 7.809 Z M 6.736 7.905 L 6.148 7.095 C 6.266 7.01 6.406 6.959 6.552 6.949 L 6.622 7.946 L 6.691 8.944 C 6.919 8.928 7.138 8.848 7.324 8.714 L 6.736 7.905 Z M 6.622 7.946 L 6.552 6.949 C 6.698 6.938 6.843 6.969 6.972 7.038 L 6.502 7.921 L 6.032 8.803 C 6.234 8.911 6.463 8.96 6.691 8.944 L 6.622 7.946 Z M 6.502 7.921 L 6.968 7.036 L 5.044 6.024 L 4.578 6.909 L 4.113 7.794 L 6.037 8.806 L 6.502 7.921 Z M 4.578 6.909 L 5.043 6.024 C 4.773 5.882 4.472 5.808 4.167 5.808 L 4.167 6.808 L 4.167 7.808 C 4.148 7.808 4.13 7.803 4.113 7.794 L 4.578 6.909 Z M 4.167 6.808 L 4.167 5.808 C 3.862 5.808 3.561 5.882 3.291 6.024 L 3.756 6.909 L 4.221 7.794 C 4.204 7.803 4.186 7.808 4.167 7.808 L 4.167 6.808 Z M 3.756 6.909 L 3.291 6.024 L 1.367 7.036 L 1.832 7.921 L 2.298 8.806 L 4.222 7.794 L 3.756 6.909 Z M 1.832 7.921 L 1.365 7.037 C 1.493 6.969 1.639 6.938 1.784 6.948 L 1.713 7.946 L 1.643 8.943 C 1.87 8.96 2.098 8.911 2.3 8.805 L 1.832 7.921 Z M 1.713 7.946 L 1.784 6.948 C 1.93 6.959 2.069 7.01 2.187 7.095 L 1.599 7.904 L 1.011 8.713 C 1.196 8.847 1.415 8.927 1.643 8.943 L 1.713 7.946 Z M 1.599 7.904 L 2.187 7.095 C 2.305 7.181 2.397 7.298 2.451 7.434 L 1.524 7.808 L 0.597 8.183 C 0.683 8.395 0.826 8.579 1.011 8.713 L 1.599 7.904 Z M 1.524 7.808 L 2.451 7.434 C 2.506 7.569 2.522 7.717 2.497 7.86 L 1.512 7.687 L 0.527 7.515 C 0.487 7.74 0.512 7.971 0.597 8.183 L 1.524 7.808 Z M 1.512 7.687 L 2.497 7.856 L 2.864 5.715 L 1.879 5.546 L 0.893 5.377 L 0.526 7.518 L 1.512 7.687 Z M 1.879 5.546 L 2.864 5.715 C 2.916 5.414 2.894 5.105 2.799 4.814 L 1.848 5.123 L 0.897 5.433 C 0.891 5.415 0.89 5.396 0.893 5.377 L 1.879 5.546 Z M 1.848 5.123 L 2.799 4.814 C 2.705 4.523 2.541 4.26 2.322 4.047 L 1.624 4.763 L 0.926 5.48 C 0.913 5.467 0.903 5.45 0.897 5.433 L 1.848 5.123 Z M 1.624 4.763 L 2.322 4.047 L 0.765 2.531 L 0.067 3.248 L -0.63 3.964 L 0.927 5.48 L 1.624 4.763 Z M 0.067 3.248 L 0.762 2.529 C 0.867 2.63 0.941 2.759 0.977 2.9 L 0.007 3.142 L -0.964 3.385 C -0.908 3.606 -0.792 3.808 -0.627 3.967 L 0.067 3.248 Z M 0.007 3.142 L 0.977 2.9 C 1.012 3.042 1.007 3.191 0.962 3.33 L 0.011 3.021 L -0.94 2.712 C -1.011 2.93 -1.019 3.163 -0.964 3.385 L 0.007 3.142 Z M 0.011 3.021 L 0.962 3.33 C 0.917 3.468 0.834 3.592 0.722 3.686 L 0.079 2.92 L -0.564 2.154 C -0.74 2.301 -0.87 2.495 -0.94 2.712 L 0.011 3.021 Z M 0.079 2.92 L 0.722 3.686 C 0.61 3.779 0.474 3.84 0.33 3.861 L 0.19 2.87 L 0.05 1.88 C -0.177 1.912 -0.389 2.007 -0.564 2.154 L 0.079 2.92 Z M 0.19 2.87 L 0.335 3.86 L 2.487 3.545 L 2.342 2.556 L 2.197 1.566 L 0.045 1.881 L 0.19 2.87 Z M 2.342 2.556 L 2.486 3.545 C 2.788 3.501 3.075 3.385 3.322 3.205 L 2.734 2.396 L 2.147 1.587 C 2.162 1.576 2.179 1.569 2.198 1.566 L 2.342 2.556 Z M 2.734 2.396 L 3.322 3.205 C 3.569 3.026 3.769 2.789 3.904 2.515 L 3.007 2.072 L 2.111 1.63 C 2.119 1.613 2.131 1.598 2.147 1.587 L 2.734 2.396 Z M 3.007 2.072 L 3.904 2.515 L 4.866 0.565 L 3.969 0.123 L 3.073 -0.32 L 2.111 1.63 L 3.007 2.072 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(112,110,107)",
      flexShrink: 0
    }
  }, "4.8 \u2022 Explorer Series")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      lineHeight: "100%",
      color: "rgb(112,110,107)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Explorer EDP 100ml, woody aromatic notes, secure signature gift wrap."))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 16,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(239,236,233), 0px 4px 12px 0px rgba(26,26,26,0.0196)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "14px 14px 14px 14px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 48,
      height: 48,
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "var(--bg-subtle)",
      boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.1)",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-9aeff3c12b2b3f07",
    style: {
      position: "absolute",
      left: 8,
      top: 8.5,
      width: 32,
      height: "calc(var(--icon-2xl) * 1px)",
      borderRadius: 999
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(26,26,26)",
      flexShrink: 0
    }
  }, "Sephora"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(196,154,69)",
      flexShrink: 0
    }
  }, "AED 1,550")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 10,
      height: 10,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 10,
      overflow: "hidden",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 8.334,
    height: 7.947,
    viewBox: "0 0 8.334 7.947",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.833,
      top: 0.833,
      width: 8.334,
      height: 7.947,
      color: "rgb(196,154,69)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.969 0.123 L 3.073 -0.321 L 3.073 -0.32 L 3.969 0.123 Z M 4.167 0 L 4.167 -1 L 4.167 0 Z M 4.365 0.123 L 5.262 -0.32 L 5.262 -0.321 L 4.365 0.123 Z M 5.328 2.072 L 4.431 2.515 L 4.431 2.515 L 5.328 2.072 Z M 5.992 2.556 L 5.847 3.545 L 5.848 3.545 L 5.992 2.556 Z M 8.145 2.871 L 8 3.86 L 8.002 3.86 L 8.145 2.871 Z M 8.267 3.247 L 8.965 3.964 L 8.966 3.963 L 8.267 3.247 Z M 6.711 4.763 L 6.013 4.047 L 6.013 4.047 L 6.711 4.763 Z M 6.456 5.546 L 5.47 5.714 L 5.471 5.715 L 6.456 5.546 Z M 6.824 7.687 L 5.838 7.857 L 5.839 7.861 L 6.824 7.687 Z M 6.502 7.921 L 6.972 7.038 L 6.968 7.036 L 6.502 7.921 Z M 4.578 6.909 L 5.044 6.024 L 5.043 6.024 L 4.578 6.909 Z M 4.167 6.808 L 4.167 5.808 L 4.167 6.808 Z M 3.756 6.909 L 3.291 6.024 L 3.291 6.024 L 3.756 6.909 Z M 1.832 7.921 L 1.367 7.036 L 1.365 7.037 L 1.832 7.921 Z M 1.512 7.687 L 2.497 7.86 L 2.497 7.856 L 1.512 7.687 Z M 1.879 5.546 L 0.893 5.377 L 0.893 5.377 L 1.879 5.546 Z M 1.624 4.763 L 2.322 4.047 L 2.322 4.047 L 1.624 4.763 Z M 0.067 3.248 L 0.765 2.531 L 0.762 2.529 L 0.067 3.248 Z M 0.19 2.87 L 0.33 3.861 L 0.335 3.86 L 0.19 2.87 Z M 2.342 2.556 L 2.198 1.566 L 2.197 1.566 L 2.342 2.556 Z M 3.007 2.072 L 3.904 2.515 L 3.904 2.515 L 3.007 2.072 Z M 3.969 0.123 L 4.866 0.566 C 4.801 0.697 4.702 0.806 4.578 0.883 L 4.051 0.033 L 3.523 -0.816 C 3.33 -0.696 3.174 -0.525 3.073 -0.321 L 3.969 0.123 Z M 4.051 0.033 L 4.578 0.883 C 4.455 0.959 4.313 1 4.167 1 L 4.167 0 L 4.167 -1 C 3.94 -1 3.717 -0.936 3.523 -0.816 L 4.051 0.033 Z M 4.167 0 L 4.167 1 C 4.022 1 3.88 0.959 3.756 0.883 L 4.284 0.033 L 4.811 -0.816 C 4.618 -0.936 4.395 -1 4.167 -1 L 4.167 0 Z M 4.284 0.033 L 3.756 0.883 C 3.633 0.806 3.534 0.697 3.469 0.566 L 4.365 0.123 L 5.262 -0.321 C 5.161 -0.525 5.005 -0.696 4.811 -0.816 L 4.284 0.033 Z M 4.365 0.123 L 3.469 0.566 L 4.431 2.515 L 5.328 2.072 L 6.225 1.63 L 5.262 -0.32 L 4.365 0.123 Z M 5.328 2.072 L 4.431 2.515 C 4.566 2.789 4.766 3.025 5.012 3.205 L 5.601 2.396 L 6.189 1.587 C 6.204 1.598 6.216 1.613 6.224 1.629 L 5.328 2.072 Z M 5.601 2.396 L 5.012 3.205 C 5.259 3.384 5.545 3.501 5.847 3.545 L 5.992 2.556 L 6.138 1.566 C 6.156 1.569 6.174 1.576 6.189 1.587 L 5.601 2.396 Z M 5.992 2.556 L 5.848 3.545 L 8 3.86 L 8.145 2.871 L 8.29 1.881 L 6.137 1.566 L 5.992 2.556 Z M 8.145 2.871 L 8.002 3.86 C 7.858 3.84 7.722 3.779 7.611 3.685 L 8.256 2.92 L 8.9 2.156 C 8.726 2.009 8.514 1.914 8.288 1.881 L 8.145 2.871 Z M 8.256 2.92 L 7.611 3.685 C 7.5 3.592 7.417 3.469 7.372 3.33 L 8.323 3.021 L 9.274 2.712 C 9.204 2.495 9.074 2.302 8.9 2.156 L 8.256 2.92 Z M 8.323 3.021 L 7.372 3.33 C 7.327 3.192 7.322 3.044 7.357 2.903 L 8.328 3.142 L 9.299 3.382 C 9.353 3.16 9.345 2.928 9.274 2.712 L 8.323 3.021 Z M 8.328 3.142 L 7.357 2.903 C 7.392 2.762 7.465 2.633 7.569 2.531 L 8.267 3.247 L 8.966 3.963 C 9.129 3.804 9.244 3.603 9.299 3.382 L 8.328 3.142 Z M 8.267 3.247 L 7.57 2.531 L 6.013 4.047 L 6.711 4.763 L 7.408 5.48 L 8.965 3.964 L 8.267 3.247 Z M 6.711 4.763 L 6.013 4.047 C 5.794 4.26 5.63 4.523 5.536 4.814 L 6.487 5.123 L 7.438 5.433 C 7.432 5.45 7.422 5.466 7.409 5.479 L 6.711 4.763 Z M 6.487 5.123 L 5.536 4.814 C 5.442 5.104 5.419 5.413 5.47 5.714 L 6.456 5.546 L 7.442 5.377 C 7.445 5.396 7.444 5.415 7.438 5.433 L 6.487 5.123 Z M 6.456 5.546 L 5.471 5.715 L 5.838 7.857 L 6.824 7.687 L 7.809 7.518 L 7.442 5.377 L 6.456 5.546 Z M 6.824 7.687 L 5.839 7.861 C 5.814 7.718 5.829 7.569 5.884 7.434 L 6.811 7.809 L 7.738 8.183 C 7.824 7.971 7.848 7.739 7.808 7.514 L 6.824 7.687 Z M 6.811 7.809 L 5.884 7.434 C 5.938 7.299 6.03 7.181 6.148 7.095 L 6.736 7.905 L 7.324 8.714 C 7.509 8.579 7.652 8.395 7.738 8.183 L 6.811 7.809 Z M 6.736 7.905 L 6.148 7.095 C 6.266 7.01 6.406 6.959 6.552 6.949 L 6.622 7.946 L 6.691 8.944 C 6.919 8.928 7.138 8.848 7.324 8.714 L 6.736 7.905 Z M 6.622 7.946 L 6.552 6.949 C 6.698 6.938 6.843 6.969 6.972 7.038 L 6.502 7.921 L 6.032 8.803 C 6.234 8.911 6.463 8.96 6.691 8.944 L 6.622 7.946 Z M 6.502 7.921 L 6.968 7.036 L 5.044 6.024 L 4.578 6.909 L 4.113 7.794 L 6.037 8.806 L 6.502 7.921 Z M 4.578 6.909 L 5.043 6.024 C 4.773 5.882 4.472 5.808 4.167 5.808 L 4.167 6.808 L 4.167 7.808 C 4.148 7.808 4.13 7.803 4.113 7.794 L 4.578 6.909 Z M 4.167 6.808 L 4.167 5.808 C 3.862 5.808 3.561 5.882 3.291 6.024 L 3.756 6.909 L 4.221 7.794 C 4.204 7.803 4.186 7.808 4.167 7.808 L 4.167 6.808 Z M 3.756 6.909 L 3.291 6.024 L 1.367 7.036 L 1.832 7.921 L 2.298 8.806 L 4.222 7.794 L 3.756 6.909 Z M 1.832 7.921 L 1.365 7.037 C 1.493 6.969 1.639 6.938 1.784 6.948 L 1.713 7.946 L 1.643 8.943 C 1.87 8.96 2.098 8.911 2.3 8.805 L 1.832 7.921 Z M 1.713 7.946 L 1.784 6.948 C 1.93 6.959 2.069 7.01 2.187 7.095 L 1.599 7.904 L 1.011 8.713 C 1.196 8.847 1.415 8.927 1.643 8.943 L 1.713 7.946 Z M 1.599 7.904 L 2.187 7.095 C 2.305 7.181 2.397 7.298 2.451 7.434 L 1.524 7.808 L 0.597 8.183 C 0.683 8.395 0.826 8.579 1.011 8.713 L 1.599 7.904 Z M 1.524 7.808 L 2.451 7.434 C 2.506 7.569 2.522 7.717 2.497 7.86 L 1.512 7.687 L 0.527 7.515 C 0.487 7.74 0.512 7.971 0.597 8.183 L 1.524 7.808 Z M 1.512 7.687 L 2.497 7.856 L 2.864 5.715 L 1.879 5.546 L 0.893 5.377 L 0.526 7.518 L 1.512 7.687 Z M 1.879 5.546 L 2.864 5.715 C 2.916 5.414 2.894 5.105 2.799 4.814 L 1.848 5.123 L 0.897 5.433 C 0.891 5.415 0.89 5.396 0.893 5.377 L 1.879 5.546 Z M 1.848 5.123 L 2.799 4.814 C 2.705 4.523 2.541 4.26 2.322 4.047 L 1.624 4.763 L 0.926 5.48 C 0.913 5.467 0.903 5.45 0.897 5.433 L 1.848 5.123 Z M 1.624 4.763 L 2.322 4.047 L 0.765 2.531 L 0.067 3.248 L -0.63 3.964 L 0.927 5.48 L 1.624 4.763 Z M 0.067 3.248 L 0.762 2.529 C 0.867 2.63 0.941 2.759 0.977 2.9 L 0.007 3.142 L -0.964 3.385 C -0.908 3.606 -0.792 3.808 -0.627 3.967 L 0.067 3.248 Z M 0.007 3.142 L 0.977 2.9 C 1.012 3.042 1.007 3.191 0.962 3.33 L 0.011 3.021 L -0.94 2.712 C -1.011 2.93 -1.019 3.163 -0.964 3.385 L 0.007 3.142 Z M 0.011 3.021 L 0.962 3.33 C 0.917 3.468 0.834 3.592 0.722 3.686 L 0.079 2.92 L -0.564 2.154 C -0.74 2.301 -0.87 2.495 -0.94 2.712 L 0.011 3.021 Z M 0.079 2.92 L 0.722 3.686 C 0.61 3.779 0.474 3.84 0.33 3.861 L 0.19 2.87 L 0.05 1.88 C -0.177 1.912 -0.389 2.007 -0.564 2.154 L 0.079 2.92 Z M 0.19 2.87 L 0.335 3.86 L 2.487 3.545 L 2.342 2.556 L 2.197 1.566 L 0.045 1.881 L 0.19 2.87 Z M 2.342 2.556 L 2.486 3.545 C 2.788 3.501 3.075 3.385 3.322 3.205 L 2.734 2.396 L 2.147 1.587 C 2.162 1.576 2.179 1.569 2.198 1.566 L 2.342 2.556 Z M 2.734 2.396 L 3.322 3.205 C 3.569 3.026 3.769 2.789 3.904 2.515 L 3.007 2.072 L 2.111 1.63 C 2.119 1.613 2.131 1.598 2.147 1.587 L 2.734 2.396 Z M 3.007 2.072 L 3.904 2.515 L 4.866 0.565 L 3.969 0.123 L 3.073 -0.32 L 2.111 1.63 L 3.007 2.072 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(112,110,107)",
      flexShrink: 0
    }
  }, "4.7 \u2022 Curated Selection")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      lineHeight: "100%",
      color: "rgb(112,110,107)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Curated luxury perfume selection, fast delivery, complimentary samples.")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 440,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 34,
      display: "flex",
      flexDirection: "column",
      padding: "8px 0px 8px 0px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 134,
      height: 5,
      borderRadius: 999,
      backgroundColor: "var(--bg-inverse)",
      flexShrink: 0
    }
  }))));
}

// figma node: 570:10988 Gift Wrapping
function GiftWrapping(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 440,
      height: 956,
      overflow: "hidden",
      borderRadius: 31,
      backgroundColor: "var(--bg-elevated)",
      position: "relative",
      color: "rgb(217,217,217)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 440,
      overflow: "hidden",
      background: "linear-gradient(180deg, rgb(226,126,114) 0.00%, rgb(243,161,149) 100.00%)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 64,
      display: "flex",
      flexDirection: "row",
      padding: "0px 20px 0px 30px",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, "9:41"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 68,
      height: 12,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 3,
    height: 6,
    viewBox: "0 0 3 6",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 6,
      width: 3,
      height: 6,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2 0 L 1 0 C 0.448 0 0 0.448 0 1 L 0 5 C 0 5.552 0.448 6 1 6 L 2 6 C 2.552 6 3 5.552 3 5 L 3 1 C 3 0.448 2.552 0 2 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3,
    height: 8,
    viewBox: "0 0 3 8",
    fill: "none",
    style: {
      position: "absolute",
      left: 5,
      top: 4,
      width: 3,
      height: 8,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2 0 L 1 0 C 0.448 0 0 0.448 0 1 L 0 7 C 0 7.552 0.448 8 1 8 L 2 8 C 2.552 8 3 7.552 3 7 L 3 1 C 3 0.448 2.552 0 2 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3,
    height: 10,
    viewBox: "0 0 3 10",
    fill: "none",
    style: {
      position: "absolute",
      left: 10,
      top: 2,
      width: 3,
      height: 10,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2 0 L 1 0 C 0.448 0 0 0.448 0 1 L 0 9 C 0 9.552 0.448 10 1 10 L 2 10 C 2.552 10 3 9.552 3 9 L 3 1 C 3 0.448 2.552 0 2 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3,
    height: 12,
    viewBox: "0 0 3 12",
    fill: "none",
    style: {
      position: "absolute",
      left: 15,
      top: 0,
      width: 3,
      height: 12,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2 0 L 1 0 C 0.448 0 0 0.448 0 1 L 0 11 C 0 11.552 0.448 12 1 12 L 2 12 C 2.552 12 3 11.552 3 11 L 3 1 C 3 0.448 2.552 0 2 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 10,
    height: 1.755,
    viewBox: "0 0 10 1.755",
    fill: "none",
    style: {
      position: "absolute",
      left: 31,
      top: 2.745,
      width: 10,
      height: 1.755,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M -0.5 1.131 C -0.845 1.407 -0.901 1.91 -0.624 2.255 C -0.348 2.6 0.155 2.656 0.5 2.38 L 0 1.755 L -0.5 1.131 Z M 9.5 2.38 C 9.845 2.656 10.348 2.6 10.625 2.255 C 10.901 1.91 10.845 1.407 10.5 1.131 L 10 1.755 L 9.5 2.38 Z M 0 1.755 L 0.5 2.38 C 1.777 1.357 3.364 0.8 5 0.8 L 5 0 L 5 -0.8 C 3.001 -0.8 1.061 -0.119 -0.5 1.131 L 0 1.755 Z M 5 0 L 5 0.8 C 6.636 0.8 8.223 1.357 9.5 2.38 L 10 1.755 L 10.5 1.131 C 8.939 -0.119 6.999 -0.8 5 -0.8 L 5 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 6,
    height: 1,
    viewBox: "0 0 6 1",
    fill: "none",
    style: {
      position: "absolute",
      left: 33,
      top: 6.2,
      width: 6,
      height: 1,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M -0.48 0.36 C -0.833 0.625 -0.905 1.127 -0.64 1.48 C -0.375 1.833 0.127 1.905 0.48 1.64 L 0 1 L -0.48 0.36 Z M 3 0 L 3 0.8 L 3 0 Z M 5.52 1.64 C 5.873 1.905 6.375 1.833 6.64 1.48 C 6.905 1.127 6.833 0.625 6.48 0.36 L 6 1 L 5.52 1.64 Z M 0 1 L 0.48 1.64 C 1.207 1.095 2.091 0.8 3 0.8 L 3 0 L 3 -0.8 C 1.745 -0.8 0.524 -0.393 -0.48 0.36 L 0 1 Z M 3 0 L 3 0.8 C 3.909 0.8 4.793 1.095 5.52 1.64 L 6 1 L 6.48 0.36 C 5.476 -0.393 4.255 -0.8 3 -0.8 L 3 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 2.600,
    height: 2.600,
    viewBox: "0 0 2.600 2.600",
    fill: "none",
    style: {
      position: "absolute",
      left: 34.7,
      top: 8.7,
      width: 2.6,
      height: 2.6,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.3 2.6 C 2.018 2.6 2.6 2.018 2.6 1.3 C 2.6 0.582 2.018 0 1.3 0 C 0.582 0 0 0.582 0 1.3 C 0 2.018 0.582 2.6 1.3 2.6 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 20,
    height: 10,
    viewBox: "0 0 20 10",
    fill: "none",
    style: {
      position: "absolute",
      left: 46,
      top: 1,
      width: 20,
      height: 10,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3 0 L 3 0.5 L 17 0.5 L 17 0 L 17 -0.5 L 3 -0.5 L 3 0 Z M 17 0 L 17 0.5 C 18.381 0.5 19.5 1.619 19.5 3 L 20 3 L 20.5 3 C 20.5 1.067 18.933 -0.5 17 -0.5 L 17 0 Z M 20 3 L 19.5 3 L 19.5 7 L 20 7 L 20.5 7 L 20.5 3 L 20 3 Z M 20 7 L 19.5 7 C 19.5 8.381 18.381 9.5 17 9.5 L 17 10 L 17 10.5 C 18.933 10.5 20.5 8.933 20.5 7 L 20 7 Z M 17 10 L 17 9.5 L 3 9.5 L 3 10 L 3 10.5 L 17 10.5 L 17 10 Z M 3 10 L 3 9.5 C 1.619 9.5 0.5 8.381 0.5 7 L 0 7 L -0.5 7 C -0.5 8.933 1.067 10.5 3 10.5 L 3 10 Z M 0 7 L 0.5 7 L 0.5 3 L 0 3 L -0.5 3 L -0.5 7 L 0 7 Z M 0 3 L 0.5 3 C 0.5 1.619 1.619 0.5 3 0.5 L 3 0 L 3 -0.5 C 1.067 -0.5 -0.5 1.067 -0.5 3 L 0 3 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 13,
    height: 6,
    viewBox: "0 0 13 6",
    fill: "none",
    style: {
      position: "absolute",
      left: 48,
      top: 3,
      width: 13,
      height: 6,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 11.5 0 L 1.5 0 C 0.672 0 0 0.672 0 1.5 L 0 4.5 C 0 5.328 0.672 6 1.5 6 L 11.5 6 C 12.328 6 13 5.328 13 4.5 L 13 1.5 C 13 0.672 12.328 0 11.5 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 2,
    height: 4,
    viewBox: "0 0 2 4",
    fill: "none",
    style: {
      position: "absolute",
      left: 67,
      top: 4,
      width: 2,
      height: 4,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 0 4 C 0.53 4 1.039 3.789 1.414 3.414 C 1.789 3.039 2 2.53 2 2 C 2 1.47 1.789 0.961 1.414 0.586 C 1.039 0.211 0.53 0 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      padding: "0px 16px 0px 16px",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-lg) * 1px)",
      paddingRight: "calc(var(--spacing-lg) * 1px)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 44,
      height: 44,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 6,
      top: 6,
      width: 32,
      height: "calc(var(--icon-2xl) * 1px)",
      overflow: "hidden",
      borderRadius: 999,
      backgroundColor: "var(--bg-subtle)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: "calc(var(--icon-sm) * 1px)",
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 4,
    height: 8,
    viewBox: "0 0 4 8",
    fill: "none",
    style: {
      position: "absolute",
      left: 6,
      top: 4,
      width: 4,
      height: 8,
      color: "var(--icon-primary)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.293 8.707 C 3.683 9.098 4.317 9.098 4.707 8.707 C 5.098 8.317 5.098 7.683 4.707 7.293 L 4 8 L 3.293 8.707 Z M 0 4 L -0.707 3.293 C -1.098 3.683 -1.098 4.317 -0.707 4.707 L 0 4 Z M 4.707 0.707 C 5.098 0.317 5.098 -0.317 4.707 -0.707 C 4.317 -1.098 3.683 -1.098 3.293 -0.707 L 4 0 L 4.707 0.707 Z M 4 8 L 4.707 7.293 L 0.707 3.293 L 0 4 L -0.707 4.707 L 3.293 8.707 L 4 8 Z M 0 4 L 0.707 4.707 L 4.707 0.707 L 4 0 L 3.293 -0.707 L -0.707 3.293 L 0 4 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 20,
      lineHeight: "100%",
      color: "var(--text-on-brand)",
      flexGrow: 1
    }
  }, "Gift Wrapping"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1,
      top: 108,
      width: 440,
      height: 635,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      padding: "20px 16px 16px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingTop: "calc(var(--spacing-xl) * 1px)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 12,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 15,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(26,26,26)",
      flexShrink: 0
    }
  }, "Select Wrapping Style"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 100,
      borderRadius: 16,
      boxShadow: "inset 0 0 0 2px var(--border-brand)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "12px 12px 12px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-24ecbb11766de561-ebe5d586",
    style: {
      position: "relative",
      width: 80,
      height: 80,
      overflow: "hidden",
      borderRadius: 12,
      boxShadow: "inset 0 0 0 1px rgb(217,217,217)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 500,
    height: 1,
    viewBox: "0 -0.500 500 1",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(-0.866,0.500,-0.500,-0.866,390,0)",
      transformOrigin: "0 0",
      width: 500,
      height: 1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 -0.5 L 0 0 L 500 0 L 500 -0.5 L 500 -1 L 0 -1 L 0 -0.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(26,26,26)",
      flexShrink: 0
    }
  }, "Premium Wrap"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(26,26,26)",
      flexShrink: 0
    }
  }, "AED 25")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 11,
      display: "-webkit-box",
      WebkitBoxOrient: "vertical",
      WebkitLineClamp: 2,
      overflow: "hidden",
      lineHeight: "100%",
      color: "rgb(128,128,128)",
      flexShrink: 0
    }
  }, "Satin ribbon, custom wax seal & high density paper"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 100,
      borderRadius: 16,
      boxShadow: "inset 0 0 0 1px rgb(217,217,217)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "12px 12px 12px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-45e4bbd7eacc6544-6a6c4890",
    style: {
      position: "relative",
      width: 80,
      height: 80,
      overflow: "hidden",
      borderRadius: 12,
      boxShadow: "inset 0 0 0 1px rgb(217,217,217)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 500,
    height: 1,
    viewBox: "0 -0.500 500 1",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(-0.866,0.500,-0.500,-0.866,390,0)",
      transformOrigin: "0 0",
      width: 500,
      height: 1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 -0.5 L 0 0 L 500 0 L 500 -0.5 L 500 -1 L 0 -1 L 0 -0.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(26,26,26)",
      flexShrink: 0
    }
  }, "Luxury Floral Combo"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(26,26,26)",
      flexShrink: 0
    }
  }, "AED 50")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 11,
      display: "-webkit-box",
      WebkitBoxOrient: "vertical",
      WebkitLineClamp: 2,
      overflow: "hidden",
      lineHeight: "100%",
      color: "rgb(128,128,128)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Fresh rose arrangement nested onto premium velvet case")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(26,26,26)",
      flexShrink: 0
    }
  }, "Paper Style"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 8,
      backgroundColor: "var(--bg-success-tint)",
      boxShadow: "inset 0 0 0 1.500px var(--feedback-success)",
      display: "flex",
      flexDirection: "row",
      padding: "8px 12px 8px 12px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--text-secondary)",
      flexShrink: 0
    }
  }, "Classic Red")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 8,
      boxShadow: "inset 0 0 0 1px rgb(217,217,217)",
      display: "flex",
      flexDirection: "row",
      padding: "8px 12px 8px 12px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(128,128,128)",
      flexShrink: 0
    }
  }, "Royal Blue")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 8,
      boxShadow: "inset 0 0 0 1px rgb(217,217,217)",
      display: "flex",
      flexDirection: "row",
      padding: "8px 12px 8px 12px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(128,128,128)",
      flexShrink: 0
    }
  }, "Emerald Green")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(26,26,26)",
      flexShrink: 0
    }
  }, "Gift Card Message"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 12,
      backgroundColor: "rgb(245,245,245)",
      boxShadow: "inset 0 0 0 1px rgb(217,217,217)",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "12px 12px 12px 12px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 13,
      lineHeight: "100%",
      color: "rgb(26,26,26)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "To the most wonderful sister, wishing you an incredible anniversary!"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 11,
      textAlign: "right",
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(128,128,128)",
      flexShrink: 0
    }
  }, "68 / 200 chars"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 847,
      width: 440,
      height: 109,
      backgroundColor: "rgb(255,255,255)",
      borderTop: "1px solid rgb(217,217,217)",
      borderRight: "1px solid rgb(217,217,217)",
      borderBottom: "1px solid rgb(217,217,217)",
      borderLeft: "1px solid rgb(217,217,217)",
      display: "flex",
      flexDirection: "column",
      gap: 12,
      padding: "16px 16px 16px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 12,
      backgroundColor: "var(--button-btndisabled)",
      display: "flex",
      flexDirection: "row",
      padding: "14px 14px 14px 14px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--button-inputtext)",
      flexShrink: 0
    }
  }, "Add Gift Wrapping - AED 25")), /*#__PURE__*/React.createElement(HomeIndicator, {
    style: {
      position: "relative",
      width: 390,
      height: 34,
      flexShrink: 0
    }
  })));
}

// figma node: 596:5477 Edit 3
function Edit3(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 40,
      height: 40,
      overflow: "hidden",
      position: "relative",
      color: "var(--icon-default-default)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 30,
    height: 28.536,
    viewBox: "0 0 30 28.536",
    fill: "none",
    style: {
      position: "absolute",
      left: 5,
      top: 4.798,
      width: 30,
      height: 28.536
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 15 28.536 L 30 28.536 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 22.5 1.036 C 23.163 0.372 24.062 0 25 0 C 25.464 0 25.924 0.091 26.353 0.269 C 26.782 0.447 27.172 0.707 27.5 1.036 C 27.828 1.364 28.089 1.754 28.266 2.183 C 28.444 2.611 28.536 3.071 28.536 3.536 C 28.536 4 28.444 4.46 28.266 4.889 C 28.089 5.317 27.828 5.707 27.5 6.036 L 6.667 26.869 L 0 28.536 L 1.667 21.869 L 22.5 1.036 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })));
}

// figma node: 14:70 Icon/Check
function IconCheck(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(26,26,26)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 14,
    height: 9.500,
    viewBox: "0 0 14 9.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 5,
      top: 7.5,
      width: 14,
      height: 9.5
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.636 4.364 C 0.285 4.012 -0.285 4.012 -0.636 4.364 C -0.988 4.715 -0.988 5.285 -0.636 5.636 L 0 5 L 0.636 4.364 Z M 4.5 9.5 L 3.864 10.136 C 4.215 10.488 4.785 10.488 5.136 10.136 L 4.5 9.5 Z M 14.636 0.636 C 14.988 0.285 14.988 -0.285 14.636 -0.636 C 14.285 -0.988 13.715 -0.988 13.364 -0.636 L 14 0 L 14.636 0.636 Z M 0 5 L -0.636 5.636 L 3.864 10.136 L 4.5 9.5 L 5.136 8.864 L 0.636 4.364 L 0 5 Z M 4.5 9.5 L 5.136 10.136 L 14.636 0.636 L 14 0 L 13.364 -0.636 L 3.864 8.864 L 4.5 9.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
}

// figma node: 14:89 Icon/Pin
function IconPin(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(26,26,26)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 13,
    height: 17,
    viewBox: "0 0 13 17",
    fill: "none",
    style: {
      position: "absolute",
      left: 5.5,
      top: 4,
      width: 13,
      height: 17
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.5 17 L 5.925 17.692 C 6.258 17.969 6.742 17.969 7.075 17.692 L 6.5 17 Z M 6.5 0 L 6.5 -0.9 L 6.5 0 Z M 13 6.5 L 13.9 6.5 L 13 6.5 Z M 6.5 17 C 7.075 16.308 7.075 16.308 7.075 16.308 C 7.075 16.308 7.075 16.308 7.075 16.308 C 7.075 16.308 7.075 16.308 7.075 16.308 C 7.075 16.307 7.074 16.307 7.073 16.306 C 7.071 16.304 7.067 16.301 7.062 16.296 C 7.051 16.287 7.035 16.274 7.013 16.255 C 6.969 16.217 6.903 16.16 6.818 16.085 C 6.648 15.934 6.403 15.711 6.108 15.428 C 5.517 14.859 4.731 14.052 3.947 13.093 C 2.341 11.129 0.9 8.716 0.9 6.5 L 0 6.5 L -0.9 6.5 C -0.9 9.384 0.909 12.221 2.553 14.232 C 3.394 15.261 4.233 16.122 4.861 16.725 C 5.175 17.028 5.438 17.267 5.624 17.431 C 5.716 17.514 5.79 17.578 5.841 17.622 C 5.867 17.643 5.887 17.66 5.901 17.672 C 5.908 17.678 5.914 17.683 5.918 17.686 C 5.92 17.688 5.921 17.689 5.922 17.69 C 5.923 17.691 5.924 17.691 5.924 17.692 C 5.924 17.692 5.924 17.692 5.924 17.692 C 5.925 17.692 5.925 17.692 6.5 17 Z M 0 6.5 L 0.9 6.5 C 0.9 5.015 1.49 3.59 2.54 2.54 L 1.904 1.904 L 1.267 1.267 C -0.12 2.655 -0.9 4.537 -0.9 6.5 L 0 6.5 Z M 1.904 1.904 L 2.54 2.54 C 3.59 1.49 5.015 0.9 6.5 0.9 L 6.5 0 L 6.5 -0.9 C 4.537 -0.9 2.655 -0.12 1.267 1.267 L 1.904 1.904 Z M 6.5 0 L 6.5 0.9 C 7.985 0.9 9.41 1.49 10.46 2.54 L 11.096 1.904 L 11.733 1.267 C 10.345 -0.12 8.463 -0.9 6.5 -0.9 L 6.5 0 Z M 11.096 1.904 L 10.46 2.54 C 11.51 3.59 12.1 5.015 12.1 6.5 L 13 6.5 L 13.9 6.5 C 13.9 4.537 13.12 2.655 11.733 1.267 L 11.096 1.904 Z M 13 6.5 L 12.1 6.5 C 12.1 8.716 10.659 11.129 9.053 13.093 C 8.269 14.052 7.483 14.859 6.892 15.428 C 6.597 15.711 6.352 15.934 6.182 16.085 C 6.097 16.16 6.031 16.217 5.987 16.255 C 5.965 16.274 5.949 16.287 5.938 16.296 C 5.933 16.301 5.929 16.304 5.927 16.306 C 5.926 16.307 5.925 16.307 5.925 16.308 C 5.925 16.308 5.925 16.308 5.925 16.308 C 5.925 16.308 5.925 16.308 5.925 16.308 C 5.925 16.308 5.925 16.308 6.5 17 C 7.075 17.692 7.075 17.692 7.076 17.692 C 7.076 17.692 7.076 17.692 7.076 17.692 C 7.076 17.691 7.077 17.691 7.078 17.69 C 7.079 17.689 7.08 17.688 7.082 17.686 C 7.086 17.683 7.092 17.678 7.099 17.672 C 7.113 17.66 7.133 17.643 7.159 17.622 C 7.21 17.578 7.284 17.514 7.376 17.431 C 7.562 17.267 7.825 17.028 8.139 16.725 C 8.767 16.122 9.606 15.261 10.447 14.232 C 12.091 12.221 13.9 9.384 13.9 6.5 L 13 6.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 4.600,
    height: 4.600,
    viewBox: "0 0 4.600 4.600",
    fill: "none",
    style: {
      position: "absolute",
      left: 9.7,
      top: 8.2,
      width: 4.6,
      height: 4.6
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.6 2.3 L 3.7 2.3 C 3.7 3.073 3.073 3.7 2.3 3.7 L 2.3 4.6 L 2.3 5.5 C 4.067 5.5 5.5 4.067 5.5 2.3 L 4.6 2.3 Z M 2.3 4.6 L 2.3 3.7 C 1.527 3.7 0.9 3.073 0.9 2.3 L 0 2.3 L -0.9 2.3 C -0.9 4.067 0.533 5.5 2.3 5.5 L 2.3 4.6 Z M 0 2.3 L 0.9 2.3 C 0.9 1.527 1.527 0.9 2.3 0.9 L 2.3 0 L 2.3 -0.9 C 0.533 -0.9 -0.9 0.533 -0.9 2.3 L 0 2.3 Z M 2.3 0 L 2.3 0.9 C 3.073 0.9 3.7 1.527 3.7 2.3 L 4.6 2.3 L 5.5 2.3 C 5.5 0.533 4.067 -0.9 2.3 -0.9 L 2.3 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
}

// figma node: 14:85 Icon/Card
function IconCard(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(26,26,26)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 18,
    height: 13,
    viewBox: "0 0 18 13",
    fill: "none",
    style: {
      position: "absolute",
      left: 3,
      top: 5.5,
      width: 18,
      height: 13
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2 0 L 2 0.9 L 16 0.9 L 16 0 L 16 -0.9 L 2 -0.9 L 2 0 Z M 16 0 L 16 0.9 C 16.608 0.9 17.1 1.392 17.1 2 L 18 2 L 18.9 2 C 18.9 0.398 17.602 -0.9 16 -0.9 L 16 0 Z M 18 2 L 17.1 2 L 17.1 11 L 18 11 L 18.9 11 L 18.9 2 L 18 2 Z M 18 11 L 17.1 11 C 17.1 11.608 16.608 12.1 16 12.1 L 16 13 L 16 13.9 C 17.602 13.9 18.9 12.602 18.9 11 L 18 11 Z M 16 13 L 16 12.1 L 2 12.1 L 2 13 L 2 13.9 L 16 13.9 L 16 13 Z M 2 13 L 2 12.1 C 1.392 12.1 0.9 11.608 0.9 11 L 0 11 L -0.9 11 C -0.9 12.602 0.398 13.9 2 13.9 L 2 13 Z M 0 11 L 0.9 11 L 0.9 2 L 0 2 L -0.9 2 L -0.9 11 L 0 11 Z M 0 2 L 0.9 2 C 0.9 1.392 1.392 0.9 2 0.9 L 2 0 L 2 -0.9 C 0.398 -0.9 -0.9 0.398 -0.9 2 L 0 2 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 18,
    height: 1.800,
    viewBox: "0 -0.900 18 1.800",
    fill: "none",
    style: {
      position: "absolute",
      left: 3,
      top: 10,
      width: 18,
      height: 1.7999999523162842
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 -0.9 C -0.497 -0.9 -0.9 -0.497 -0.9 0 C -0.9 0.497 -0.497 0.9 0 0.9 L 0 0 L 0 -0.9 Z M 18 0.9 C 18.497 0.9 18.9 0.497 18.9 0 C 18.9 -0.497 18.497 -0.9 18 -0.9 L 18 0 L 18 0.9 Z M 0 0 L 0 0.9 L 18 0.9 L 18 0 L 18 -0.9 L 0 -0.9 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 4,
    height: 1.800,
    viewBox: "0 -0.900 4 1.800",
    fill: "none",
    style: {
      position: "absolute",
      left: 6.5,
      top: 14.5,
      width: 4,
      height: 1.7999999523162842
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 -0.9 C -0.497 -0.9 -0.9 -0.497 -0.9 0 C -0.9 0.497 -0.497 0.9 0 0.9 L 0 0 L 0 -0.9 Z M 4 0.9 C 4.497 0.9 4.9 0.497 4.9 0 C 4.9 -0.497 4.497 -0.9 4 -0.9 L 4 0 L 4 0.9 Z M 0 0 L 0 0.9 L 4 0.9 L 4 0 L 4 -0.9 L 0 -0.9 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
}

// figma node: 21:149 PaymentMethodRow (2 variants)
const __venc_PaymentMethodRow = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_PaymentMethodRow = p => "state=" + __venc_PaymentMethodRow(p.state);
function PaymentMethodRow(_p = {}) {
  const props = {
    ..._p,
    state: _p.state ?? "default"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 358,
      height: 64,
      borderRadius: 12,
      backgroundColor: "var(--bg-default)",
      boxShadow: "inset 0 0 0 1px var(--border-default)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "0px 16px 0px 16px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      height: 20,
      borderRadius: "50%",
      boxShadow: "inset 0 0 0 1.500px var(--border-default)",
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 22,
      height: 22,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconCard, {
    style: {
      transform: "scale(0.917, 0.917)",
      transformOrigin: "0 0"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      gap: 2,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--text-primary)",
      flexShrink: 0
    }
  }, props.text1 ?? "Payment method"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--text-tertiary)",
      flexShrink: 0
    }
  }, props.text2 ?? "Detail · Expiry or note")));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 358,
      height: 64,
      borderRadius: 12,
      backgroundColor: "var(--bg-default)",
      boxShadow: "inset 0 0 0 1.500px var(--bg-inverse)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "0px 16px 0px 16px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      height: 20,
      borderRadius: "50%",
      backgroundColor: "var(--bg-default)",
      boxShadow: "inset 0 0 0 6px var(--bg-inverse)",
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 22,
      height: 22,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconCard, {
    style: {
      transform: "scale(0.917, 0.917)",
      transformOrigin: "0 0"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      gap: 2,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--text-primary)",
      flexShrink: 0
    }
  }, props.text1 ?? "Payment method"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--text-tertiary)",
      flexShrink: 0
    }
  }, props.text2 ?? "Detail · Expiry or note")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--text-secondary)",
      flexShrink: 0
    }
  }, props.text3 ?? "Change"));
  const __impls = {
    // figma: State=Default
    "state=default": __body0,
    // figma: State=Selected
    "state=selected": __body1
  };
  return (__impls[__vkey_PaymentMethodRow(props)] ?? __body0)();
}

// figma node: 20:134 PriceRow (3 variants)
const __venc_PriceRow = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_PriceRow = p => "type=" + __venc_PriceRow(p.type);
function PriceRow(_p = {}) {
  const props = {
    ..._p,
    type: _p.type ?? "default"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 358,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--text-secondary)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Subtotal"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--text-primary)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text2 ?? "AED 498"));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 358,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--text-success)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Savings applied"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--text-success)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text2 ?? "−AED 100"));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 358,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--text-primary)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Total"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--text-primary)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text2 ?? "AED 398"));
  const __impls = {
    // figma: Type=Default
    "type=default": __body0,
    // figma: Type=Savings
    "type=savings": __body1,
    // figma: Type=Total
    "type=total": __body2
  };
  return (__impls[__vkey_PriceRow(props)] ?? __body0)();
}

// figma node: 598:7754 Checkout
function Checkout(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 440,
      height: 956,
      overflow: "hidden",
      borderRadius: 31,
      backgroundColor: "var(--bg-elevated)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 440,
      overflow: "hidden",
      background: "linear-gradient(180deg, rgb(226,126,114) 0.00%, rgb(243,161,149) 100.00%)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 64,
      display: "flex",
      flexDirection: "row",
      padding: "0px 20px 0px 30px",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, "9:41"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 68,
      height: 12,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 3,
    height: 6,
    viewBox: "0 0 3 6",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 6,
      width: 3,
      height: 6,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2 0 L 1 0 C 0.448 0 0 0.448 0 1 L 0 5 C 0 5.552 0.448 6 1 6 L 2 6 C 2.552 6 3 5.552 3 5 L 3 1 C 3 0.448 2.552 0 2 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3,
    height: 8,
    viewBox: "0 0 3 8",
    fill: "none",
    style: {
      position: "absolute",
      left: 5,
      top: 4,
      width: 3,
      height: 8,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2 0 L 1 0 C 0.448 0 0 0.448 0 1 L 0 7 C 0 7.552 0.448 8 1 8 L 2 8 C 2.552 8 3 7.552 3 7 L 3 1 C 3 0.448 2.552 0 2 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3,
    height: 10,
    viewBox: "0 0 3 10",
    fill: "none",
    style: {
      position: "absolute",
      left: 10,
      top: 2,
      width: 3,
      height: 10,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2 0 L 1 0 C 0.448 0 0 0.448 0 1 L 0 9 C 0 9.552 0.448 10 1 10 L 2 10 C 2.552 10 3 9.552 3 9 L 3 1 C 3 0.448 2.552 0 2 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3,
    height: 12,
    viewBox: "0 0 3 12",
    fill: "none",
    style: {
      position: "absolute",
      left: 15,
      top: 0,
      width: 3,
      height: 12,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2 0 L 1 0 C 0.448 0 0 0.448 0 1 L 0 11 C 0 11.552 0.448 12 1 12 L 2 12 C 2.552 12 3 11.552 3 11 L 3 1 C 3 0.448 2.552 0 2 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 10,
    height: 1.755,
    viewBox: "0 0 10 1.755",
    fill: "none",
    style: {
      position: "absolute",
      left: 31,
      top: 2.745,
      width: 10,
      height: 1.755,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M -0.5 1.131 C -0.845 1.407 -0.901 1.91 -0.624 2.255 C -0.348 2.6 0.155 2.656 0.5 2.38 L 0 1.755 L -0.5 1.131 Z M 9.5 2.38 C 9.845 2.656 10.348 2.6 10.625 2.255 C 10.901 1.91 10.845 1.407 10.5 1.131 L 10 1.755 L 9.5 2.38 Z M 0 1.755 L 0.5 2.38 C 1.777 1.357 3.364 0.8 5 0.8 L 5 0 L 5 -0.8 C 3.001 -0.8 1.061 -0.119 -0.5 1.131 L 0 1.755 Z M 5 0 L 5 0.8 C 6.636 0.8 8.223 1.357 9.5 2.38 L 10 1.755 L 10.5 1.131 C 8.939 -0.119 6.999 -0.8 5 -0.8 L 5 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 6,
    height: 1,
    viewBox: "0 0 6 1",
    fill: "none",
    style: {
      position: "absolute",
      left: 33,
      top: 6.2,
      width: 6,
      height: 1,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M -0.48 0.36 C -0.833 0.625 -0.905 1.127 -0.64 1.48 C -0.375 1.833 0.127 1.905 0.48 1.64 L 0 1 L -0.48 0.36 Z M 3 0 L 3 0.8 L 3 0 Z M 5.52 1.64 C 5.873 1.905 6.375 1.833 6.64 1.48 C 6.905 1.127 6.833 0.625 6.48 0.36 L 6 1 L 5.52 1.64 Z M 0 1 L 0.48 1.64 C 1.207 1.095 2.091 0.8 3 0.8 L 3 0 L 3 -0.8 C 1.745 -0.8 0.524 -0.393 -0.48 0.36 L 0 1 Z M 3 0 L 3 0.8 C 3.909 0.8 4.793 1.095 5.52 1.64 L 6 1 L 6.48 0.36 C 5.476 -0.393 4.255 -0.8 3 -0.8 L 3 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 2.600,
    height: 2.600,
    viewBox: "0 0 2.600 2.600",
    fill: "none",
    style: {
      position: "absolute",
      left: 34.7,
      top: 8.7,
      width: 2.6,
      height: 2.6,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.3 2.6 C 2.018 2.6 2.6 2.018 2.6 1.3 C 2.6 0.582 2.018 0 1.3 0 C 0.582 0 0 0.582 0 1.3 C 0 2.018 0.582 2.6 1.3 2.6 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 20,
    height: 10,
    viewBox: "0 0 20 10",
    fill: "none",
    style: {
      position: "absolute",
      left: 46,
      top: 1,
      width: 20,
      height: 10,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3 0 L 3 0.5 L 17 0.5 L 17 0 L 17 -0.5 L 3 -0.5 L 3 0 Z M 17 0 L 17 0.5 C 18.381 0.5 19.5 1.619 19.5 3 L 20 3 L 20.5 3 C 20.5 1.067 18.933 -0.5 17 -0.5 L 17 0 Z M 20 3 L 19.5 3 L 19.5 7 L 20 7 L 20.5 7 L 20.5 3 L 20 3 Z M 20 7 L 19.5 7 C 19.5 8.381 18.381 9.5 17 9.5 L 17 10 L 17 10.5 C 18.933 10.5 20.5 8.933 20.5 7 L 20 7 Z M 17 10 L 17 9.5 L 3 9.5 L 3 10 L 3 10.5 L 17 10.5 L 17 10 Z M 3 10 L 3 9.5 C 1.619 9.5 0.5 8.381 0.5 7 L 0 7 L -0.5 7 C -0.5 8.933 1.067 10.5 3 10.5 L 3 10 Z M 0 7 L 0.5 7 L 0.5 3 L 0 3 L -0.5 3 L -0.5 7 L 0 7 Z M 0 3 L 0.5 3 C 0.5 1.619 1.619 0.5 3 0.5 L 3 0 L 3 -0.5 C 1.067 -0.5 -0.5 1.067 -0.5 3 L 0 3 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 13,
    height: 6,
    viewBox: "0 0 13 6",
    fill: "none",
    style: {
      position: "absolute",
      left: 48,
      top: 3,
      width: 13,
      height: 6,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 11.5 0 L 1.5 0 C 0.672 0 0 0.672 0 1.5 L 0 4.5 C 0 5.328 0.672 6 1.5 6 L 11.5 6 C 12.328 6 13 5.328 13 4.5 L 13 1.5 C 13 0.672 12.328 0 11.5 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 2,
    height: 4,
    viewBox: "0 0 2 4",
    fill: "none",
    style: {
      position: "absolute",
      left: 67,
      top: 4,
      width: 2,
      height: 4,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 0 4 C 0.53 4 1.039 3.789 1.414 3.414 C 1.789 3.039 2 2.53 2 2 C 2 1.47 1.789 0.961 1.414 0.586 C 1.039 0.211 0.53 0 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      padding: "0px 16px 0px 16px",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-lg) * 1px)",
      paddingRight: "calc(var(--spacing-lg) * 1px)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 44,
      height: 44,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 6,
      top: 6,
      width: 32,
      height: "calc(var(--icon-2xl) * 1px)",
      overflow: "hidden",
      borderRadius: 999,
      backgroundColor: "var(--bg-subtle)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: "calc(var(--icon-sm) * 1px)",
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 4,
    height: 8,
    viewBox: "0 0 4 8",
    fill: "none",
    style: {
      position: "absolute",
      left: 6,
      top: 4,
      width: 4,
      height: 8,
      color: "var(--icon-primary)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.293 8.707 C 3.683 9.098 4.317 9.098 4.707 8.707 C 5.098 8.317 5.098 7.683 4.707 7.293 L 4 8 L 3.293 8.707 Z M 0 4 L -0.707 3.293 C -1.098 3.683 -1.098 4.317 -0.707 4.707 L 0 4 Z M 4.707 0.707 C 5.098 0.317 5.098 -0.317 4.707 -0.707 C 4.317 -1.098 3.683 -1.098 3.293 -0.707 L 4 0 L 4.707 0.707 Z M 4 8 L 4.707 7.293 L 0.707 3.293 L 0 4 L -0.707 4.707 L 3.293 8.707 L 4 8 Z M 0 4 L 0.707 4.707 L 4.707 0.707 L 4 0 L 3.293 -0.707 L -0.707 3.293 L 0 4 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 20,
      lineHeight: "100%",
      color: "var(--text-on-brand)",
      flexGrow: 1
    }
  }, "Payment"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 809,
      width: 440,
      height: 147,
      overflow: "hidden",
      backgroundColor: "var(--bg-default)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "12px 16px 12px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "12px 16px 4px 16px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    style: {
      position: "relative",
      height: 52,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "Place Order — AED 720.30",
    type: "primary",
    size: "lg",
    state: "default"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--text-tertiary)",
      flexShrink: 0
    }
  }, "\uD83D\uDD12 Payments are encrypted and 3D Secure protected")), /*#__PURE__*/React.createElement(HomeIndicator, {
    style: {
      position: "relative",
      height: 34,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 108,
      width: 440,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      gap: 12,
      padding: "16px 16px 16px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingTop: "calc(var(--spacing-lg) * 1px)",
      paddingBottom: "calc(var(--spacing-lg) * 1px)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 18,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--text-primary)",
      flexShrink: 0
    }
  }, "Delivery"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "var(--bg-default)",
      boxShadow: "inset 0 0 0 1px var(--border-default)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "14px 14px 14px 14px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      height: 20,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(IconPin, {
    style: {
      transform: "scale(0.833, 0.833)",
      transformOrigin: "0 0"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      gap: 2,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--text-primary)",
      flexShrink: 0
    }
  }, "Home \u2014 Dubai Marina"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      lineHeight: "100%",
      color: "var(--text-tertiary)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Tower 3, Apt 1204 \xB7 +971 50 123 4567")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      height: 20,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Edit3, {
    style: {
      transform: "scale(0.500, 0.500)",
      transformOrigin: "0 0"
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      gap: 12,
      padding: "8px 16px 8px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 18,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--text-primary)",
      flexShrink: 0
    }
  }, "Payment"), /*#__PURE__*/React.createElement(PaymentMethodRow, {
    style: {
      position: "relative",
      height: 64,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "Visa ending 4242",
    text2: "Expires 08/27 · 3D Secure",
    state: "selected"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 64,
      borderRadius: 12,
      backgroundColor: "var(--bg-default)",
      boxShadow: "inset 0 0 0 1px var(--border-default)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "0px 16px 0px 16px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      height: 20,
      borderRadius: "50%",
      boxShadow: "inset 0 0 0 1.500px var(--border-default)",
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-04c3606d930e988c",
    style: {
      position: "relative",
      width: 32,
      height: "calc(var(--icon-2xl) * 1px)",
      borderRadius: 8,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      gap: 2,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--text-primary)",
      flexShrink: 0
    }
  }, "Pay With Tabby"))), /*#__PURE__*/React.createElement(PaymentMethodRow, {
    style: {
      position: "relative",
      height: 64,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "Cash on Delivery",
    text2: "Pay when your order arrives · +AED 5 fee",
    state: "default"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--text-secondary)",
      flexShrink: 0
    }
  }, "+ Add new card or gift card")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      padding: "8px 16px 8px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "var(--bg-success-tint)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "12px 14px 12px 14px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 18,
      height: 18,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(IconCheck, {
    style: {
      transform: "scale(0.750, 0.750)",
      transformOrigin: "0 0"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 13,
      lineHeight: "100%",
      color: "var(--text-success)",
      flexGrow: 1
    }
  }, "SAVE20 applied \u2014 you save AED 100"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--text-tertiary)",
      flexShrink: 0
    }
  }, "Remove"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "8px 16px 24px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 18,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--text-primary)",
      flexShrink: 0
    }
  }, "Order Summary"), /*#__PURE__*/React.createElement(PriceRow, {
    style: {
      position: "relative",
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "Subtotal (4 items)",
    text2: "AED 786",
    type: "default"
  }), /*#__PURE__*/React.createElement(PriceRow, {
    style: {
      position: "relative",
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "Delivery",
    text2: "Free",
    type: "default"
  }), /*#__PURE__*/React.createElement(PriceRow, {
    style: {
      position: "relative",
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "Coupon SAVE20",
    type: "savings"
  }), /*#__PURE__*/React.createElement(PriceRow, {
    style: {
      position: "relative",
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "VAT (5%)",
    text2: "AED 34.30",
    type: "default"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 1,
      backgroundColor: "var(--border-muted)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }), /*#__PURE__*/React.createElement(PriceRow, {
    style: {
      position: "relative",
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "Order Total",
    text2: "AED 720.30",
    type: "total"
  }))));
}

// figma node: 615:11913 01 · Order Tracking
function OrderTracking01(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 440,
      height: 956,
      overflow: "hidden",
      borderRadius: 31,
      backgroundColor: "var(--bg-default)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 440,
      overflow: "hidden",
      background: "linear-gradient(180deg, rgb(226,126,114) 0.00%, rgb(243,161,149) 100.00%)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 64,
      display: "flex",
      flexDirection: "row",
      padding: "0px 20px 0px 30px",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, "9:41"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 68,
      height: 12,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 3,
    height: 6,
    viewBox: "0 0 3 6",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 6,
      width: 3,
      height: 6,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2 0 L 1 0 C 0.448 0 0 0.448 0 1 L 0 5 C 0 5.552 0.448 6 1 6 L 2 6 C 2.552 6 3 5.552 3 5 L 3 1 C 3 0.448 2.552 0 2 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3,
    height: 8,
    viewBox: "0 0 3 8",
    fill: "none",
    style: {
      position: "absolute",
      left: 5,
      top: 4,
      width: 3,
      height: 8,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2 0 L 1 0 C 0.448 0 0 0.448 0 1 L 0 7 C 0 7.552 0.448 8 1 8 L 2 8 C 2.552 8 3 7.552 3 7 L 3 1 C 3 0.448 2.552 0 2 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3,
    height: 10,
    viewBox: "0 0 3 10",
    fill: "none",
    style: {
      position: "absolute",
      left: 10,
      top: 2,
      width: 3,
      height: 10,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2 0 L 1 0 C 0.448 0 0 0.448 0 1 L 0 9 C 0 9.552 0.448 10 1 10 L 2 10 C 2.552 10 3 9.552 3 9 L 3 1 C 3 0.448 2.552 0 2 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3,
    height: 12,
    viewBox: "0 0 3 12",
    fill: "none",
    style: {
      position: "absolute",
      left: 15,
      top: 0,
      width: 3,
      height: 12,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2 0 L 1 0 C 0.448 0 0 0.448 0 1 L 0 11 C 0 11.552 0.448 12 1 12 L 2 12 C 2.552 12 3 11.552 3 11 L 3 1 C 3 0.448 2.552 0 2 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 10,
    height: 1.755,
    viewBox: "0 0 10 1.755",
    fill: "none",
    style: {
      position: "absolute",
      left: 31,
      top: 2.745,
      width: 10,
      height: 1.755,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M -0.5 1.131 C -0.845 1.407 -0.901 1.91 -0.624 2.255 C -0.348 2.6 0.155 2.656 0.5 2.38 L 0 1.755 L -0.5 1.131 Z M 9.5 2.38 C 9.845 2.656 10.348 2.6 10.625 2.255 C 10.901 1.91 10.845 1.407 10.5 1.131 L 10 1.755 L 9.5 2.38 Z M 0 1.755 L 0.5 2.38 C 1.777 1.357 3.364 0.8 5 0.8 L 5 0 L 5 -0.8 C 3.001 -0.8 1.061 -0.119 -0.5 1.131 L 0 1.755 Z M 5 0 L 5 0.8 C 6.636 0.8 8.223 1.357 9.5 2.38 L 10 1.755 L 10.5 1.131 C 8.939 -0.119 6.999 -0.8 5 -0.8 L 5 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 6,
    height: 1,
    viewBox: "0 0 6 1",
    fill: "none",
    style: {
      position: "absolute",
      left: 33,
      top: 6.2,
      width: 6,
      height: 1,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M -0.48 0.36 C -0.833 0.625 -0.905 1.127 -0.64 1.48 C -0.375 1.833 0.127 1.905 0.48 1.64 L 0 1 L -0.48 0.36 Z M 3 0 L 3 0.8 L 3 0 Z M 5.52 1.64 C 5.873 1.905 6.375 1.833 6.64 1.48 C 6.905 1.127 6.833 0.625 6.48 0.36 L 6 1 L 5.52 1.64 Z M 0 1 L 0.48 1.64 C 1.207 1.095 2.091 0.8 3 0.8 L 3 0 L 3 -0.8 C 1.745 -0.8 0.524 -0.393 -0.48 0.36 L 0 1 Z M 3 0 L 3 0.8 C 3.909 0.8 4.793 1.095 5.52 1.64 L 6 1 L 6.48 0.36 C 5.476 -0.393 4.255 -0.8 3 -0.8 L 3 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 2.600,
    height: 2.600,
    viewBox: "0 0 2.600 2.600",
    fill: "none",
    style: {
      position: "absolute",
      left: 34.7,
      top: 8.7,
      width: 2.6,
      height: 2.6,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.3 2.6 C 2.018 2.6 2.6 2.018 2.6 1.3 C 2.6 0.582 2.018 0 1.3 0 C 0.582 0 0 0.582 0 1.3 C 0 2.018 0.582 2.6 1.3 2.6 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 20,
    height: 10,
    viewBox: "0 0 20 10",
    fill: "none",
    style: {
      position: "absolute",
      left: 46,
      top: 1,
      width: 20,
      height: 10,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3 0 L 3 0.5 L 17 0.5 L 17 0 L 17 -0.5 L 3 -0.5 L 3 0 Z M 17 0 L 17 0.5 C 18.381 0.5 19.5 1.619 19.5 3 L 20 3 L 20.5 3 C 20.5 1.067 18.933 -0.5 17 -0.5 L 17 0 Z M 20 3 L 19.5 3 L 19.5 7 L 20 7 L 20.5 7 L 20.5 3 L 20 3 Z M 20 7 L 19.5 7 C 19.5 8.381 18.381 9.5 17 9.5 L 17 10 L 17 10.5 C 18.933 10.5 20.5 8.933 20.5 7 L 20 7 Z M 17 10 L 17 9.5 L 3 9.5 L 3 10 L 3 10.5 L 17 10.5 L 17 10 Z M 3 10 L 3 9.5 C 1.619 9.5 0.5 8.381 0.5 7 L 0 7 L -0.5 7 C -0.5 8.933 1.067 10.5 3 10.5 L 3 10 Z M 0 7 L 0.5 7 L 0.5 3 L 0 3 L -0.5 3 L -0.5 7 L 0 7 Z M 0 3 L 0.5 3 C 0.5 1.619 1.619 0.5 3 0.5 L 3 0 L 3 -0.5 C 1.067 -0.5 -0.5 1.067 -0.5 3 L 0 3 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 13,
    height: 6,
    viewBox: "0 0 13 6",
    fill: "none",
    style: {
      position: "absolute",
      left: 48,
      top: 3,
      width: 13,
      height: 6,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 11.5 0 L 1.5 0 C 0.672 0 0 0.672 0 1.5 L 0 4.5 C 0 5.328 0.672 6 1.5 6 L 11.5 6 C 12.328 6 13 5.328 13 4.5 L 13 1.5 C 13 0.672 12.328 0 11.5 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 2,
    height: 4,
    viewBox: "0 0 2 4",
    fill: "none",
    style: {
      position: "absolute",
      left: 67,
      top: 4,
      width: 2,
      height: 4,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 0 4 C 0.53 4 1.039 3.789 1.414 3.414 C 1.789 3.039 2 2.53 2 2 C 2 1.47 1.789 0.961 1.414 0.586 C 1.039 0.211 0.53 0 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      padding: "0px 16px 0px 16px",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-lg) * 1px)",
      paddingRight: "calc(var(--spacing-lg) * 1px)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 44,
      height: 44,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 6,
      top: 6,
      width: 32,
      height: "calc(var(--icon-2xl) * 1px)",
      overflow: "hidden",
      borderRadius: 999,
      backgroundColor: "var(--bg-subtle)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: "calc(var(--icon-sm) * 1px)",
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 4,
    height: 8,
    viewBox: "0 0 4 8",
    fill: "none",
    style: {
      position: "absolute",
      left: 6,
      top: 4,
      width: 4,
      height: 8,
      color: "var(--icon-primary)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.293 8.707 C 3.683 9.098 4.317 9.098 4.707 8.707 C 5.098 8.317 5.098 7.683 4.707 7.293 L 4 8 L 3.293 8.707 Z M 0 4 L -0.707 3.293 C -1.098 3.683 -1.098 4.317 -0.707 4.707 L 0 4 Z M 4.707 0.707 C 5.098 0.317 5.098 -0.317 4.707 -0.707 C 4.317 -1.098 3.683 -1.098 3.293 -0.707 L 4 0 L 4.707 0.707 Z M 4 8 L 4.707 7.293 L 0.707 3.293 L 0 4 L -0.707 4.707 L 3.293 8.707 L 4 8 Z M 0 4 L 0.707 4.707 L 4.707 0.707 L 4 0 L 3.293 -0.707 L -0.707 3.293 L 0 4 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 20,
      lineHeight: "100%",
      color: "var(--text-on-brand)",
      flexGrow: 1
    }
  }, "Order Tracking"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 108,
      width: 440,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 280,
      backgroundColor: "var(--bg-subtle)",
      borderTop: "1px solid var(--border-muted)",
      borderRight: "1px solid var(--border-muted)",
      borderBottom: "1px solid var(--border-muted)",
      borderLeft: "1px solid var(--border-muted)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-8a764111c8c45b07",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 440,
      height: 280
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 140,
      top: 90,
      borderRadius: 99,
      backgroundColor: "var(--bg-inverse)",
      display: "flex",
      flexDirection: "row",
      padding: "8px 8px 8px 8px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      height: 20,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16.668,
    height: 13.332,
    viewBox: "0 0 16.668 13.332",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.666,
      top: 3.334,
      width: 16.668,
      height: 13.332,
      color: "var(--text-inverse)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 9.001 11.665 C 9.001 12.218 9.449 12.665 10.001 12.665 C 10.553 12.665 11.001 12.218 11.001 11.665 L 10.001 11.665 L 9.001 11.665 Z M 8.334 0 L 8.334 -1 L 8.334 0 Z M 1.667 0 L 1.667 -1 L 1.667 0 Z M 0 1.666 L -1 1.666 L 0 1.666 Z M 0 10.832 L -1 10.832 L 0 10.832 Z M 16.668 7.791 L 17.668 7.791 L 17.668 7.789 L 16.668 7.791 Z M 16.485 7.271 L 15.704 7.896 L 15.705 7.897 L 16.485 7.271 Z M 13.584 3.646 L 12.803 4.27 L 12.804 4.271 L 13.584 3.646 Z M 12.934 3.333 L 12.936 2.333 L 12.934 2.333 L 12.934 3.333 Z M 10.001 2.333 C 9.449 2.333 9.001 2.781 9.001 3.333 C 9.001 3.885 9.449 4.333 10.001 4.333 L 10.001 3.333 L 10.001 2.333 Z M 10.001 11.665 L 11.001 11.665 L 11.001 1.666 L 10.001 1.666 L 9.001 1.666 L 9.001 11.665 L 10.001 11.665 Z M 10.001 1.666 L 11.001 1.666 C 11.001 0.959 10.72 0.281 10.22 -0.219 L 9.513 0.488 L 8.806 1.195 C 8.931 1.32 9.001 1.49 9.001 1.666 L 10.001 1.666 Z M 9.513 0.488 L 10.22 -0.219 C 9.72 -0.719 9.041 -1 8.334 -1 L 8.334 0 L 8.334 1 C 8.511 1 8.681 1.07 8.806 1.195 L 9.513 0.488 Z M 8.334 0 L 8.334 -1 L 1.667 -1 L 1.667 0 L 1.667 1 L 8.334 1 L 8.334 0 Z M 1.667 0 L 1.667 -1 C 0.96 -1 0.281 -0.719 -0.219 -0.219 L 0.488 0.488 L 1.195 1.195 C 1.32 1.07 1.49 1 1.667 1 L 1.667 0 Z M 0.488 0.488 L -0.219 -0.219 C -0.719 0.281 -1 0.959 -1 1.666 L 0 1.666 L 1 1.666 C 1 1.49 1.07 1.32 1.195 1.195 L 0.488 0.488 Z M 0 1.666 L -1 1.666 L -1 10.832 L 0 10.832 L 1 10.832 L 1 1.666 L 0 1.666 Z M 0 10.832 L -1 10.832 C -1 11.319 -0.807 11.785 -0.463 12.129 L 0.244 11.421 L 0.951 10.714 C 0.982 10.746 1 10.788 1 10.832 L 0 10.832 Z M 0.244 11.421 L -0.463 12.129 C -0.119 12.472 0.347 12.665 0.833 12.665 L 0.833 11.665 L 0.833 10.665 C 0.878 10.665 0.92 10.683 0.951 10.714 L 0.244 11.421 Z M 0.833 11.665 L 0.833 12.665 L 2.5 12.665 L 2.5 11.665 L 2.5 10.665 L 0.833 10.665 L 0.833 11.665 Z M 2.5 11.665 L 1.5 11.665 C 1.5 13.138 2.694 14.332 4.167 14.332 L 4.167 13.332 L 4.167 12.332 C 3.799 12.332 3.5 12.033 3.5 11.665 L 2.5 11.665 Z M 4.167 13.332 L 4.167 14.332 C 5.64 14.332 6.834 13.138 6.834 11.665 L 5.834 11.665 L 4.834 11.665 C 4.834 12.033 4.535 12.332 4.167 12.332 L 4.167 13.332 Z M 2.5 11.665 L 3.5 11.665 C 3.5 11.298 3.799 10.999 4.167 10.999 L 4.167 9.999 L 4.167 8.999 C 2.694 8.999 1.5 10.193 1.5 11.665 L 2.5 11.665 Z M 4.167 9.999 L 4.167 10.999 C 4.535 10.999 4.834 11.298 4.834 11.665 L 5.834 11.665 L 6.834 11.665 C 6.834 10.193 5.64 8.999 4.167 8.999 L 4.167 9.999 Z M 10.834 11.665 L 10.834 10.665 L 5.834 10.665 L 5.834 11.665 L 5.834 12.665 L 10.834 12.665 L 10.834 11.665 Z M 10.834 11.665 L 9.834 11.665 C 9.834 13.138 11.028 14.332 12.501 14.332 L 12.501 13.332 L 12.501 12.332 C 12.133 12.332 11.834 12.033 11.834 11.665 L 10.834 11.665 Z M 12.501 13.332 L 12.501 14.332 C 13.974 14.332 15.168 13.138 15.168 11.665 L 14.168 11.665 L 13.168 11.665 C 13.168 12.033 12.869 12.332 12.501 12.332 L 12.501 13.332 Z M 10.834 11.665 L 11.834 11.665 C 11.834 11.298 12.133 10.999 12.501 10.999 L 12.501 9.999 L 12.501 8.999 C 11.028 8.999 9.834 10.193 9.834 11.665 L 10.834 11.665 Z M 12.501 9.999 L 12.501 10.999 C 12.869 10.999 13.168 11.298 13.168 11.665 L 14.168 11.665 L 15.168 11.665 C 15.168 10.193 13.974 8.999 12.501 8.999 L 12.501 9.999 Z M 14.168 11.665 L 14.168 12.665 L 15.835 12.665 L 15.835 11.665 L 15.835 10.665 L 14.168 10.665 L 14.168 11.665 Z M 15.835 11.665 L 15.835 12.665 C 16.321 12.665 16.787 12.472 17.131 12.129 L 16.424 11.421 L 15.717 10.714 C 15.748 10.683 15.79 10.665 15.835 10.665 L 15.835 11.665 Z M 16.424 11.421 L 17.131 12.129 C 17.475 11.785 17.668 11.319 17.668 10.832 L 16.668 10.832 L 15.668 10.832 C 15.668 10.788 15.686 10.746 15.717 10.714 L 16.424 11.421 Z M 16.668 10.832 L 17.668 10.832 L 17.668 7.791 L 16.668 7.791 L 15.668 7.791 L 15.668 10.832 L 16.668 10.832 Z M 16.668 7.791 L 17.668 7.789 C 17.667 7.373 17.525 6.97 17.265 6.645 L 16.485 7.271 L 15.705 7.897 C 15.681 7.867 15.668 7.831 15.668 7.793 L 16.668 7.791 Z M 16.485 7.271 L 17.265 6.646 L 14.365 3.022 L 13.584 3.646 L 12.804 4.271 L 15.704 7.896 L 16.485 7.271 Z M 13.584 3.646 L 14.366 3.022 C 14.194 2.808 13.977 2.634 13.729 2.515 L 13.295 3.416 L 12.861 4.316 C 12.838 4.306 12.819 4.29 12.803 4.27 L 13.584 3.646 Z M 13.295 3.416 L 13.729 2.515 C 13.482 2.396 13.211 2.333 12.936 2.333 L 12.934 3.333 L 12.933 4.333 C 12.908 4.333 12.883 4.327 12.861 4.316 L 13.295 3.416 Z M 12.934 3.333 L 12.934 2.333 L 10.001 2.333 L 10.001 3.333 L 10.001 4.333 L 12.934 4.333 L 12.934 3.333 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 240,
      top: 60,
      borderRadius: 99,
      backgroundColor: "var(--bg-default)",
      boxShadow: "inset 0 0 0 1px var(--border-muted)",
      display: "flex",
      flexDirection: "row",
      padding: "6px 6px 6px 6px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 10.666,
    height: 13.334,
    viewBox: "0 0 10.666 13.334",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.667,
      top: 1.333,
      width: 10.666,
      height: 13.334,
      color: "var(--text-brand)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10.666 5.334 L 11.666 5.334 L 10.666 5.334 Z M 5.733 13.201 L 6.335 14 L 6.361 13.979 L 6.387 13.957 L 5.733 13.201 Z M 5.333 13.334 L 5.333 14.334 L 5.333 13.334 Z M 4.932 13.201 L 4.279 13.957 L 4.304 13.979 L 4.331 14 L 4.932 13.201 Z M 5.333 0 L 5.333 -1 L 5.333 0 Z M 10.666 5.334 L 9.666 5.334 C 9.666 6.661 8.911 8.139 7.869 9.508 C 6.85 10.847 5.675 11.93 5.08 12.444 L 5.733 13.201 L 6.387 13.957 C 7.032 13.4 8.323 12.214 9.46 10.72 C 10.575 9.255 11.666 7.335 11.666 5.334 L 10.666 5.334 Z M 5.733 13.201 L 5.132 12.401 C 5.19 12.358 5.26 12.334 5.333 12.334 L 5.333 13.334 L 5.333 14.334 C 5.694 14.334 6.046 14.217 6.335 14 L 5.733 13.201 Z M 5.333 13.334 L 5.333 12.334 C 5.405 12.334 5.475 12.358 5.533 12.401 L 4.932 13.201 L 4.331 14 C 4.62 14.217 4.971 14.334 5.333 14.334 L 5.333 13.334 Z M 4.932 13.201 L 5.586 12.444 C 4.991 11.93 3.816 10.847 2.797 9.508 C 1.755 8.139 1 6.661 1 5.334 L 0 5.334 L -1 5.334 C -1 7.335 0.091 9.255 1.205 10.72 C 2.343 12.214 3.633 13.4 4.279 13.957 L 4.932 13.201 Z M 0 5.334 L 1 5.334 C 1 4.184 1.457 3.082 2.269 2.269 L 1.562 1.562 L 0.855 0.855 C -0.333 2.043 -1 3.654 -1 5.334 L 0 5.334 Z M 1.562 1.562 L 2.269 2.269 C 3.082 1.457 4.184 1 5.333 1 L 5.333 0 L 5.333 -1 C 3.653 -1 2.042 -0.333 0.855 0.855 L 1.562 1.562 Z M 5.333 0 L 5.333 1 C 6.482 1 7.584 1.457 8.396 2.269 L 9.104 1.562 L 9.811 0.855 C 8.623 -0.333 7.012 -1 5.333 -1 L 5.333 0 Z M 9.104 1.562 L 8.396 2.269 C 9.209 3.082 9.666 4.184 9.666 5.334 L 10.666 5.334 L 11.666 5.334 C 11.666 3.654 10.998 2.043 9.811 0.855 L 9.104 1.562 Z M 7.333 5.334 L 6.333 5.334 C 6.333 5.886 5.885 6.334 5.333 6.334 L 5.333 7.334 L 5.333 8.334 C 6.99 8.334 8.333 6.991 8.333 5.334 L 7.333 5.334 Z M 5.333 7.334 L 5.333 6.334 C 4.781 6.334 4.333 5.886 4.333 5.334 L 3.333 5.334 L 2.333 5.334 C 2.333 6.991 3.676 8.334 5.333 8.334 L 5.333 7.334 Z M 3.333 5.334 L 4.333 5.334 C 4.333 4.781 4.781 4.334 5.333 4.334 L 5.333 3.334 L 5.333 2.334 C 3.676 2.334 2.333 3.677 2.333 5.334 L 3.333 5.334 Z M 5.333 3.334 L 5.333 4.334 C 5.885 4.334 6.333 4.781 6.333 5.334 L 7.333 5.334 L 8.333 5.334 C 8.333 3.677 6.99 2.334 5.333 2.334 L 5.333 3.334 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      padding: "16px 16px 16px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 16,
      backgroundColor: "var(--bg-brand-tint)",
      display: "flex",
      flexDirection: "row",
      padding: "16px 16px 16px 16px",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-baf46f5c9712f6dc",
    style: {
      position: "relative",
      width: 48,
      height: 48,
      borderRadius: 99,
      boxShadow: "inset 0 0 0 1px var(--border-muted)",
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 2,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--text-primary)",
      flexShrink: 0
    }
  }, "Faras Al-Amiri"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--text-tertiary)",
      flexShrink: 0
    }
  }, "On the way to deliver"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 40,
      height: 40,
      borderRadius: 99,
      backgroundColor: "var(--bg-success-tint)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 18,
      height: 18,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 15.001,
    height: 15.001,
    viewBox: "0 0 15.001 15.001",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.499,
      top: 1.499,
      width: 15.001,
      height: 15.001,
      color: "var(--feedback-success)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 8.875 10.927 L 8.434 11.825 L 8.446 11.83 L 8.457 11.836 L 8.875 10.927 Z M 9.785 10.7 L 8.99 10.093 L 8.989 10.094 L 9.785 10.7 Z M 10.051 10.351 L 10.846 10.958 L 10.851 10.951 L 10.051 10.351 Z M 13.501 15.001 L 13.501 16.001 L 13.501 15.001 Z M 0 1.5 L 1 1.5 L 0 1.5 Z M 1.5 0 L 1.5 -1 L 1.5 0 Z M 3.75 0 L 3.75 -1 L 3.75 0 Z M 4.65 4.95 L 5.25 5.75 L 5.25 5.75 L 4.65 4.95 Z M 4.299 5.214 L 3.699 4.414 L 3.692 4.419 L 4.299 5.214 Z M 4.025 5.637 L 4.998 5.867 L 4.025 5.637 Z M 4.08 6.138 L 3.181 6.577 L 3.183 6.58 L 4.08 6.138 Z M 8.875 10.927 L 8.457 11.836 C 8.819 12.002 9.226 12.04 9.612 11.943 L 9.37 10.973 L 9.127 10.003 C 9.182 9.989 9.24 9.994 9.292 10.018 L 8.875 10.927 Z M 9.37 10.973 L 9.612 11.943 C 9.998 11.847 10.339 11.622 10.58 11.305 L 9.785 10.7 L 8.989 10.094 C 9.023 10.049 9.072 10.017 9.127 10.003 L 9.37 10.973 Z M 9.785 10.7 L 10.579 11.306 L 10.846 10.958 L 10.051 10.351 L 9.256 9.744 L 8.99 10.093 L 9.785 10.7 Z M 10.051 10.351 L 10.851 10.951 C 10.897 10.889 10.958 10.838 11.027 10.804 L 10.58 9.909 L 10.133 9.015 C 9.786 9.188 9.484 9.44 9.251 9.751 L 10.051 10.351 Z M 10.58 9.909 L 11.027 10.804 C 11.097 10.769 11.173 10.751 11.251 10.751 L 11.251 9.751 L 11.251 8.751 C 10.863 8.751 10.48 8.841 10.133 9.015 L 10.58 9.909 Z M 11.251 9.751 L 11.251 10.751 L 13.501 10.751 L 13.501 9.751 L 13.501 8.751 L 11.251 8.751 L 11.251 9.751 Z M 13.501 9.751 L 13.501 10.751 C 13.634 10.751 13.761 10.803 13.855 10.897 L 14.562 10.19 L 15.269 9.483 C 14.8 9.014 14.164 8.751 13.501 8.751 L 13.501 9.751 Z M 14.562 10.19 L 13.855 10.897 C 13.949 10.991 14.001 11.118 14.001 11.251 L 15.001 11.251 L 16.001 11.251 C 16.001 10.588 15.738 9.952 15.269 9.483 L 14.562 10.19 Z M 15.001 11.251 L 14.001 11.251 L 14.001 13.501 L 15.001 13.501 L 16.001 13.501 L 16.001 11.251 L 15.001 11.251 Z M 15.001 13.501 L 14.001 13.501 C 14.001 13.634 13.949 13.761 13.855 13.855 L 14.562 14.562 L 15.269 15.269 C 15.738 14.8 16.001 14.164 16.001 13.501 L 15.001 13.501 Z M 14.562 14.562 L 13.855 13.855 C 13.761 13.949 13.634 14.001 13.501 14.001 L 13.501 15.001 L 13.501 16.001 C 14.164 16.001 14.8 15.738 15.269 15.269 L 14.562 14.562 Z M 13.501 15.001 L 13.501 14.001 C 10.186 14.001 7.006 12.684 4.661 10.34 L 3.954 11.047 L 3.247 11.754 C 5.967 14.473 9.655 16.001 13.501 16.001 L 13.501 15.001 Z M 3.954 11.047 L 4.661 10.34 C 2.317 7.995 1 4.816 1 1.5 L 0 1.5 L -1 1.5 C -1 5.346 0.528 9.034 3.247 11.754 L 3.954 11.047 Z M 0 1.5 L 1 1.5 C 1 1.367 1.053 1.24 1.146 1.146 L 0.439 0.439 L -0.268 -0.268 C -0.737 0.201 -1 0.837 -1 1.5 L 0 1.5 Z M 0.439 0.439 L 1.146 1.146 C 1.24 1.053 1.367 1 1.5 1 L 1.5 0 L 1.5 -1 C 0.837 -1 0.201 -0.737 -0.268 -0.268 L 0.439 0.439 Z M 1.5 0 L 1.5 1 L 3.75 1 L 3.75 0 L 3.75 -1 L 1.5 -1 L 1.5 0 Z M 3.75 0 L 3.75 1 C 3.883 1 4.01 1.053 4.104 1.146 L 4.811 0.439 L 5.518 -0.268 C 5.049 -0.737 4.413 -1 3.75 -1 L 3.75 0 Z M 4.811 0.439 L 4.104 1.146 C 4.198 1.24 4.25 1.367 4.25 1.5 L 5.25 1.5 L 6.25 1.5 C 6.25 0.837 5.987 0.201 5.518 -0.268 L 4.811 0.439 Z M 5.25 1.5 L 4.25 1.5 L 4.25 3.75 L 5.25 3.75 L 6.25 3.75 L 6.25 1.5 L 5.25 1.5 Z M 5.25 3.75 L 4.25 3.75 C 4.25 3.828 4.232 3.905 4.198 3.974 L 5.092 4.421 L 5.986 4.868 C 6.16 4.521 6.25 4.138 6.25 3.75 L 5.25 3.75 Z M 5.092 4.421 L 4.198 3.974 C 4.163 4.043 4.112 4.104 4.05 4.15 L 4.65 4.95 L 5.25 5.75 C 5.561 5.518 5.813 5.216 5.986 4.868 L 5.092 4.421 Z M 4.65 4.95 L 4.05 4.15 L 3.699 4.414 L 4.299 5.214 L 4.899 6.014 L 5.25 5.75 L 4.65 4.95 Z M 4.299 5.214 L 3.692 4.419 C 3.371 4.664 3.145 5.013 3.052 5.407 L 4.025 5.637 L 4.998 5.867 C 4.984 5.924 4.952 5.973 4.906 6.008 L 4.299 5.214 Z M 4.025 5.637 L 3.052 5.407 C 2.958 5.8 3.004 6.213 3.181 6.577 L 4.08 6.138 L 4.979 5.7 C 5.004 5.752 5.011 5.811 4.998 5.867 L 4.025 5.637 Z M 4.08 6.138 L 3.183 6.58 C 4.306 8.861 6.152 10.705 8.434 11.825 L 8.875 10.927 L 9.315 10.029 C 7.43 9.104 5.905 7.581 4.977 5.697 L 4.08 6.138 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 40,
      height: 40,
      borderRadius: 99,
      backgroundColor: "var(--bg-success-tint)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 18,
      height: 18,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 15.001,
    height: 15.001,
    viewBox: "0 0 15.001 15.001",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.499,
      top: 1.499,
      width: 15.001,
      height: 15.001,
      color: "var(--feedback-success-strong)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.744 10.757 L 1.673 10.389 L 1.66 10.355 L 1.645 10.323 L 0.744 10.757 Z M 0.814 11.632 L 1.766 11.94 L 1.781 11.894 L 1.791 11.847 L 0.814 11.632 Z M 0.016 14.1 L -0.936 13.792 L -0.953 13.845 L -0.964 13.899 L 0.016 14.1 Z M 0.943 14.976 L 1.199 15.943 L 1.211 15.939 L 1.223 15.936 L 0.943 14.976 Z M 3.503 14.228 L 3.308 13.247 L 3.264 13.255 L 3.222 13.268 L 3.503 14.228 Z M 4.327 14.297 L 4.75 13.39 L 4.716 13.375 L 4.682 13.362 L 4.327 14.297 Z M 0.744 10.757 L -0.186 11.126 C -0.149 11.218 -0.141 11.32 -0.162 11.417 L 0.814 11.632 L 1.791 11.847 C 1.898 11.36 1.857 10.852 1.673 10.389 L 0.744 10.757 Z M 0.814 11.632 L -0.137 11.324 L -0.936 13.792 L 0.016 14.1 L 0.967 14.408 L 1.766 11.94 L 0.814 11.632 Z M 0.016 14.1 L -0.964 13.899 C -1.024 14.191 -1.009 14.493 -0.919 14.777 L 0.035 14.477 L 0.989 14.176 C 1.001 14.217 1.004 14.26 0.995 14.302 L 0.016 14.1 Z M 0.035 14.477 L -0.919 14.777 C -0.829 15.062 -0.668 15.318 -0.452 15.523 L 0.235 14.796 L 0.922 14.069 C 0.953 14.099 0.976 14.135 0.989 14.176 L 0.035 14.477 Z M 0.235 14.796 L -0.452 15.523 C -0.235 15.728 0.03 15.874 0.319 15.947 L 0.565 14.978 L 0.812 14.009 C 0.853 14.019 0.891 14.04 0.922 14.069 L 0.235 14.796 Z M 0.565 14.978 L 0.319 15.947 C 0.608 16.021 0.911 16.019 1.199 15.943 L 0.943 14.976 L 0.686 14.01 C 0.727 13.999 0.77 13.998 0.812 14.009 L 0.565 14.978 Z M 0.943 14.976 L 1.223 15.936 L 3.783 15.187 L 3.503 14.228 L 3.222 13.268 L 0.662 14.016 L 0.943 14.976 Z M 3.503 14.228 L 3.697 15.208 C 3.789 15.19 3.884 15.198 3.972 15.231 L 4.327 14.297 L 4.682 13.362 C 4.244 13.195 3.768 13.155 3.308 13.247 L 3.503 14.228 Z M 4.327 14.297 L 3.904 15.203 C 5.719 16.05 7.775 16.23 9.71 15.709 L 9.45 14.743 L 9.19 13.778 C 7.711 14.176 6.138 14.039 4.75 13.39 L 4.327 14.297 Z M 9.45 14.743 L 9.71 15.709 C 11.644 15.188 13.333 14.001 14.477 12.357 L 13.657 11.786 L 12.836 11.214 C 11.961 12.472 10.669 13.38 9.19 13.778 L 9.45 14.743 Z M 13.657 11.786 L 14.477 12.357 C 15.622 10.713 16.149 8.717 15.965 6.722 L 14.97 6.814 L 13.974 6.905 C 14.114 8.431 13.711 9.957 12.836 11.214 L 13.657 11.786 Z M 14.97 6.814 L 15.965 6.722 C 15.782 4.727 14.9 2.861 13.475 1.453 L 12.772 2.165 L 12.069 2.876 C 13.159 3.953 13.834 5.38 13.974 6.905 L 14.97 6.814 Z M 12.772 2.165 L 13.475 1.453 C 12.049 0.045 10.173 -0.814 8.176 -0.973 L 8.096 0.024 L 8.017 1.021 C 9.544 1.142 10.979 1.799 12.069 2.876 L 12.772 2.165 Z M 8.096 0.024 L 8.176 -0.973 C 6.179 -1.132 4.189 -0.581 2.559 0.584 L 3.141 1.397 L 3.722 2.211 C 4.968 1.321 6.49 0.899 8.017 1.021 L 8.096 0.024 Z M 3.141 1.397 L 2.559 0.584 C 0.929 1.748 -0.237 3.451 -0.734 5.392 L 0.234 5.64 L 1.203 5.888 C 1.583 4.404 2.475 3.102 3.722 2.211 L 3.141 1.397 Z M 0.234 5.64 L -0.734 5.392 C -1.231 7.333 -1.027 9.387 -0.157 11.191 L 0.744 10.757 L 1.645 10.323 C 0.979 8.943 0.823 7.372 1.203 5.888 L 0.234 5.64 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 16,
      backgroundColor: "var(--bg-elevated)",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "16px 16px 16px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 18,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--text-primary)",
      flexShrink: 0
    }
  }, "Your order is 15 mins away"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 13,
      lineHeight: 1.399999976158142,
      color: "var(--text-secondary)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Our delivery partner is carrying your premium fragile items with temperature-controlled premium packaging.")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 826,
      width: 440,
      borderTop: "1px solid rgb(217,217,217)",
      borderRight: "1px solid rgb(217,217,217)",
      borderBottom: "1px solid rgb(217,217,217)",
      borderLeft: "1px solid rgb(217,217,217)",
      display: "flex",
      flexDirection: "column",
      gap: 12,
      padding: "16px 24px 16px 24px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-2xl) * 1px)",
      paddingRight: "calc(var(--spacing-2xl) * 1px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 999,
      backgroundColor: "var(--bg-inverse)",
      display: "flex",
      flexDirection: "row",
      padding: "16px 24px 16px 24px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingTop: "calc(var(--spacing-lg) * 1px)",
      paddingBottom: "calc(var(--spacing-lg) * 1px)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 15,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--text-on-brand)",
      flexShrink: 0
    }
  }, "View Full Timeline")), /*#__PURE__*/React.createElement(HomeIndicator, {
    style: {
      position: "relative",
      height: 34,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    }
  })));
}

// figma node: 625:9289 Screen_1_LoyaltyProgram
function Screen1LoyaltyProgram(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 440,
      height: 956,
      overflow: "hidden",
      borderRadius: 32,
      backgroundColor: "var(--bg-default)",
      position: "relative",
      color: "var(--icon-brand)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 440,
      height: 956,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      background: "linear-gradient(180deg, rgb(226,126,114) 0.00%, rgb(243,161,149) 100.00%)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 64,
      display: "flex",
      flexDirection: "row",
      padding: "0px 20px 0px 30px",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, "9:41"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 68,
      height: 12,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 3,
    height: 6,
    viewBox: "0 0 3 6",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 6,
      width: 3,
      height: 6,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2 0 L 1 0 C 0.448 0 0 0.448 0 1 L 0 5 C 0 5.552 0.448 6 1 6 L 2 6 C 2.552 6 3 5.552 3 5 L 3 1 C 3 0.448 2.552 0 2 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3,
    height: 8,
    viewBox: "0 0 3 8",
    fill: "none",
    style: {
      position: "absolute",
      left: 5,
      top: 4,
      width: 3,
      height: 8,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2 0 L 1 0 C 0.448 0 0 0.448 0 1 L 0 7 C 0 7.552 0.448 8 1 8 L 2 8 C 2.552 8 3 7.552 3 7 L 3 1 C 3 0.448 2.552 0 2 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3,
    height: 10,
    viewBox: "0 0 3 10",
    fill: "none",
    style: {
      position: "absolute",
      left: 10,
      top: 2,
      width: 3,
      height: 10,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2 0 L 1 0 C 0.448 0 0 0.448 0 1 L 0 9 C 0 9.552 0.448 10 1 10 L 2 10 C 2.552 10 3 9.552 3 9 L 3 1 C 3 0.448 2.552 0 2 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3,
    height: 12,
    viewBox: "0 0 3 12",
    fill: "none",
    style: {
      position: "absolute",
      left: 15,
      top: 0,
      width: 3,
      height: 12,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2 0 L 1 0 C 0.448 0 0 0.448 0 1 L 0 11 C 0 11.552 0.448 12 1 12 L 2 12 C 2.552 12 3 11.552 3 11 L 3 1 C 3 0.448 2.552 0 2 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 10,
    height: 1.755,
    viewBox: "0 0 10 1.755",
    fill: "none",
    style: {
      position: "absolute",
      left: 31,
      top: 2.745,
      width: 10,
      height: 1.755,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M -0.5 1.131 C -0.845 1.407 -0.901 1.91 -0.624 2.255 C -0.348 2.6 0.155 2.656 0.5 2.38 L 0 1.755 L -0.5 1.131 Z M 9.5 2.38 C 9.845 2.656 10.348 2.6 10.625 2.255 C 10.901 1.91 10.845 1.407 10.5 1.131 L 10 1.755 L 9.5 2.38 Z M 0 1.755 L 0.5 2.38 C 1.777 1.357 3.364 0.8 5 0.8 L 5 0 L 5 -0.8 C 3.001 -0.8 1.061 -0.119 -0.5 1.131 L 0 1.755 Z M 5 0 L 5 0.8 C 6.636 0.8 8.223 1.357 9.5 2.38 L 10 1.755 L 10.5 1.131 C 8.939 -0.119 6.999 -0.8 5 -0.8 L 5 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 6,
    height: 1,
    viewBox: "0 0 6 1",
    fill: "none",
    style: {
      position: "absolute",
      left: 33,
      top: 6.2,
      width: 6,
      height: 1,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M -0.48 0.36 C -0.833 0.625 -0.905 1.127 -0.64 1.48 C -0.375 1.833 0.127 1.905 0.48 1.64 L 0 1 L -0.48 0.36 Z M 3 0 L 3 0.8 L 3 0 Z M 5.52 1.64 C 5.873 1.905 6.375 1.833 6.64 1.48 C 6.905 1.127 6.833 0.625 6.48 0.36 L 6 1 L 5.52 1.64 Z M 0 1 L 0.48 1.64 C 1.207 1.095 2.091 0.8 3 0.8 L 3 0 L 3 -0.8 C 1.745 -0.8 0.524 -0.393 -0.48 0.36 L 0 1 Z M 3 0 L 3 0.8 C 3.909 0.8 4.793 1.095 5.52 1.64 L 6 1 L 6.48 0.36 C 5.476 -0.393 4.255 -0.8 3 -0.8 L 3 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 2.600,
    height: 2.600,
    viewBox: "0 0 2.600 2.600",
    fill: "none",
    style: {
      position: "absolute",
      left: 34.7,
      top: 8.7,
      width: 2.6,
      height: 2.6,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.3 2.6 C 2.018 2.6 2.6 2.018 2.6 1.3 C 2.6 0.582 2.018 0 1.3 0 C 0.582 0 0 0.582 0 1.3 C 0 2.018 0.582 2.6 1.3 2.6 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 20,
    height: 10,
    viewBox: "0 0 20 10",
    fill: "none",
    style: {
      position: "absolute",
      left: 46,
      top: 1,
      width: 20,
      height: 10,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3 0 L 3 0.5 L 17 0.5 L 17 0 L 17 -0.5 L 3 -0.5 L 3 0 Z M 17 0 L 17 0.5 C 18.381 0.5 19.5 1.619 19.5 3 L 20 3 L 20.5 3 C 20.5 1.067 18.933 -0.5 17 -0.5 L 17 0 Z M 20 3 L 19.5 3 L 19.5 7 L 20 7 L 20.5 7 L 20.5 3 L 20 3 Z M 20 7 L 19.5 7 C 19.5 8.381 18.381 9.5 17 9.5 L 17 10 L 17 10.5 C 18.933 10.5 20.5 8.933 20.5 7 L 20 7 Z M 17 10 L 17 9.5 L 3 9.5 L 3 10 L 3 10.5 L 17 10.5 L 17 10 Z M 3 10 L 3 9.5 C 1.619 9.5 0.5 8.381 0.5 7 L 0 7 L -0.5 7 C -0.5 8.933 1.067 10.5 3 10.5 L 3 10 Z M 0 7 L 0.5 7 L 0.5 3 L 0 3 L -0.5 3 L -0.5 7 L 0 7 Z M 0 3 L 0.5 3 C 0.5 1.619 1.619 0.5 3 0.5 L 3 0 L 3 -0.5 C 1.067 -0.5 -0.5 1.067 -0.5 3 L 0 3 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 13,
    height: 6,
    viewBox: "0 0 13 6",
    fill: "none",
    style: {
      position: "absolute",
      left: 48,
      top: 3,
      width: 13,
      height: 6,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 11.5 0 L 1.5 0 C 0.672 0 0 0.672 0 1.5 L 0 4.5 C 0 5.328 0.672 6 1.5 6 L 11.5 6 C 12.328 6 13 5.328 13 4.5 L 13 1.5 C 13 0.672 12.328 0 11.5 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 2,
    height: 4,
    viewBox: "0 0 2 4",
    fill: "none",
    style: {
      position: "absolute",
      left: 67,
      top: 4,
      width: 2,
      height: 4,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 0 4 C 0.53 4 1.039 3.789 1.414 3.414 C 1.789 3.039 2 2.53 2 2 C 2 1.47 1.789 0.961 1.414 0.586 C 1.039 0.211 0.53 0 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      padding: "0px 16px 0px 16px",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-lg) * 1px)",
      paddingRight: "calc(var(--spacing-lg) * 1px)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 44,
      height: 44,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 6,
      top: 6,
      width: 32,
      height: "calc(var(--icon-2xl) * 1px)",
      overflow: "hidden",
      borderRadius: 999,
      backgroundColor: "var(--bg-subtle)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: "calc(var(--icon-sm) * 1px)",
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 4,
    height: 8,
    viewBox: "0 0 4 8",
    fill: "none",
    style: {
      position: "absolute",
      left: 6,
      top: 4,
      width: 4,
      height: 8,
      color: "var(--icon-primary)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.293 8.707 C 3.683 9.098 4.317 9.098 4.707 8.707 C 5.098 8.317 5.098 7.683 4.707 7.293 L 4 8 L 3.293 8.707 Z M 0 4 L -0.707 3.293 C -1.098 3.683 -1.098 4.317 -0.707 4.707 L 0 4 Z M 4.707 0.707 C 5.098 0.317 5.098 -0.317 4.707 -0.707 C 4.317 -1.098 3.683 -1.098 3.293 -0.707 L 4 0 L 4.707 0.707 Z M 4 8 L 4.707 7.293 L 0.707 3.293 L 0 4 L -0.707 4.707 L 3.293 8.707 L 4 8 Z M 0 4 L 0.707 4.707 L 4.707 0.707 L 4 0 L 3.293 -0.707 L -0.707 3.293 L 0 4 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 20,
      lineHeight: "100%",
      color: "var(--text-on-brand)",
      flexGrow: 1
    }
  }, "Loyalty Program"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 20,
      padding: "20px 20px 20px 20px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 20,
      background: "linear-gradient(180deg, rgb(243,161,149) 0.00%, rgb(226,126,114) 100.00%)",
      boxShadow: "0px 8px 16px 0px rgba(243,161,149,0.2)",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      padding: "20px 20px 20px 20px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--text-inverse)",
      textTransform: "uppercase",
      flexShrink: 0
    }
  }, "Your Balance"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 32,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--text-inverse)",
      flexShrink: 0
    }
  }, "2,450 Points")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 12,
      backgroundColor: "var(--bg-default)",
      boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.251)",
      display: "flex",
      flexDirection: "row",
      padding: "6px 12px 6px 12px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--text-secondary)",
      flexShrink: 0
    }
  }, "GOLD TIER"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--text-inverse)",
      flexShrink: 0
    }
  }, "Platinum tier at 5,000 pts"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--text-inverse)",
      flexShrink: 0
    }
  }, "2,550 pts left")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 8,
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "var(--bg-default)",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 180,
      backgroundColor: "var(--bg-default)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 14,
      lineHeight: "100%",
      letterSpacing: "0.500px",
      color: "rgb(128,128,128)",
      textTransform: "uppercase",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Gold Tier Benefits"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 12,
      boxShadow: "inset 0 0 0 1px var(--border-brand)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "rgb(255,255,255)",
      borderTop: "1px solid var(--icon-brand)",
      borderRight: "1px solid var(--icon-brand)",
      borderBottom: "1px solid var(--icon-brand)",
      borderLeft: "1px solid var(--icon-brand)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "12px 12px 12px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 40,
      height: 40,
      borderRadius: 8,
      backgroundColor: "var(--bg-brand-tint)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 18,
      height: 18,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 11.999,
    height: 8.249,
    viewBox: "0 0 11.999 8.249",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.001,
      top: 4.5,
      width: 11.999,
      height: 8.249
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12.706 0.707 C 13.096 0.317 13.096 -0.317 12.706 -0.707 C 12.315 -1.098 11.682 -1.098 11.292 -0.707 L 11.999 0 L 12.706 0.707 Z M 3.75 8.249 L 3.043 8.956 L 3.75 9.664 L 4.457 8.956 L 3.75 8.249 Z M 0.707 3.793 C 0.317 3.402 -0.317 3.402 -0.707 3.793 C -1.098 4.183 -1.098 4.816 -0.707 5.207 L 0 4.5 L 0.707 3.793 Z M 11.999 0 L 11.292 -0.707 L 3.043 7.542 L 3.75 8.249 L 4.457 8.956 L 12.706 0.707 L 11.999 0 Z M 3.75 8.249 L 4.457 7.542 L 0.707 3.793 L 0 4.5 L -0.707 5.207 L 3.043 8.956 L 3.75 8.249 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 2,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(26,26,26)",
      flexShrink: 0
    }
  }, "Free Delivery"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(128,128,128)",
      flexShrink: 0
    }
  }, "On all orders above AED 150"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderTop: "1px solid var(--icon-brand)",
      borderRight: "1px solid var(--icon-brand)",
      borderBottom: "1px solid var(--icon-brand)",
      borderLeft: "1px solid var(--icon-brand)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "12px 12px 12px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 40,
      height: 40,
      borderRadius: 8,
      backgroundColor: "var(--bg-brand-tint)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 18,
      height: 18,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 11.999,
    height: 8.249,
    viewBox: "0 0 11.999 8.249",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.001,
      top: 4.5,
      width: 11.999,
      height: 8.249
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12.706 0.707 C 13.096 0.317 13.096 -0.317 12.706 -0.707 C 12.315 -1.098 11.682 -1.098 11.292 -0.707 L 11.999 0 L 12.706 0.707 Z M 3.75 8.249 L 3.043 8.956 L 3.75 9.664 L 4.457 8.956 L 3.75 8.249 Z M 0.707 3.793 C 0.317 3.402 -0.317 3.402 -0.707 3.793 C -1.098 4.183 -1.098 4.816 -0.707 5.207 L 0 4.5 L 0.707 3.793 Z M 11.999 0 L 11.292 -0.707 L 3.043 7.542 L 3.75 8.249 L 4.457 8.956 L 12.706 0.707 L 11.999 0 Z M 3.75 8.249 L 4.457 7.542 L 0.707 3.793 L 0 4.5 L -0.707 5.207 L 3.043 8.956 L 3.75 8.249 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 2,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(26,26,26)",
      flexShrink: 0
    }
  }, "Birthday Gift"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(128,128,128)",
      flexShrink: 0
    }
  }, "Exclusive AED 100 Voucher"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "12px 12px 12px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 40,
      height: 40,
      borderRadius: 8,
      backgroundColor: "var(--bg-brand-tint)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 18,
      height: 18,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 11.999,
    height: 8.249,
    viewBox: "0 0 11.999 8.249",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.001,
      top: 4.5,
      width: 11.999,
      height: 8.249
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12.706 0.707 C 13.096 0.317 13.096 -0.317 12.706 -0.707 C 12.315 -1.098 11.682 -1.098 11.292 -0.707 L 11.999 0 L 12.706 0.707 Z M 3.75 8.249 L 3.043 8.956 L 3.75 9.664 L 4.457 8.956 L 3.75 8.249 Z M 0.707 3.793 C 0.317 3.402 -0.317 3.402 -0.707 3.793 C -1.098 4.183 -1.098 4.816 -0.707 5.207 L 0 4.5 L 0.707 3.793 Z M 11.999 0 L 11.292 -0.707 L 3.043 7.542 L 3.75 8.249 L 4.457 8.956 L 12.706 0.707 L 11.999 0 Z M 3.75 8.249 L 4.457 7.542 L 0.707 3.793 L 0 4.5 L -0.707 5.207 L 3.043 8.956 L 3.75 8.249 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 2,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(26,26,26)",
      flexShrink: 0
    }
  }, "Dedicated Support"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(128,128,128)",
      flexShrink: 0
    }
  }, "Priority assistance via call or chat"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 14,
      lineHeight: "100%",
      letterSpacing: "0.500px",
      color: "rgb(128,128,128)",
      textTransform: "uppercase",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "How to Earn Points"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 12,
      backgroundColor: "var(--bg-brand-tint)",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "12px 12px 12px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 40,
      height: 40,
      borderRadius: 8,
      backgroundColor: "rgb(245,245,245)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 18,
      height: 18,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 13.500,
    height: 15.001,
    viewBox: "0 0 13.500 15.001",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.25,
      top: 1.499,
      width: 13.5,
      height: 15.001
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10.75 6 C 10.75 5.448 10.302 5 9.75 5 C 9.198 5 8.75 5.448 8.75 6 L 9.75 6 L 10.75 6 Z M 6.75 9.001 L 6.75 10.001 L 6.75 9.001 Z M 4.75 6 C 4.75 5.448 4.302 5 3.75 5 C 3.198 5 2.75 5.448 2.75 6 L 3.75 6 L 4.75 6 Z M 0.077 2.026 C -0.475 2.026 -0.923 2.474 -0.923 3.026 C -0.923 3.578 -0.475 4.026 0.077 4.026 L 0.077 3.026 L 0.077 2.026 Z M 13.422 4.026 C 13.975 4.026 14.422 3.578 14.422 3.026 C 14.422 2.474 13.975 2.026 13.422 2.026 L 13.422 3.026 L 13.422 4.026 Z M 0.3 2.6 L 1.1 3.2 L 1.1 3.2 L 0.3 2.6 Z M 0 13.501 L -1 13.501 L 0 13.501 Z M 13.2 2.6 L 12.4 3.2 L 12.4 3.2 L 13.2 2.6 Z M 11.7 0.6 L 12.5 0 L 12.5 0 L 11.7 0.6 Z M 10.5 0 L 10.5 1 L 10.5 0 Z M 3 0 L 3 1 L 3 0 Z M 1.8 0.6 L 1 0 L 1 0 L 1.8 0.6 Z M 9.75 6 L 8.75 6 C 8.75 6.531 8.539 7.04 8.164 7.415 L 8.871 8.122 L 9.578 8.829 C 10.329 8.079 10.75 7.061 10.75 6 L 9.75 6 Z M 8.871 8.122 L 8.164 7.415 C 7.789 7.79 7.28 8.001 6.75 8.001 L 6.75 9.001 L 6.75 10.001 C 7.811 10.001 8.828 9.579 9.578 8.829 L 8.871 8.122 Z M 6.75 9.001 L 6.75 8.001 C 6.22 8.001 5.711 7.79 5.336 7.415 L 4.629 8.122 L 3.922 8.829 C 4.672 9.579 5.689 10.001 6.75 10.001 L 6.75 9.001 Z M 4.629 8.122 L 5.336 7.415 C 4.961 7.04 4.75 6.531 4.75 6 L 3.75 6 L 2.75 6 C 2.75 7.061 3.171 8.079 3.922 8.829 L 4.629 8.122 Z M 0.077 3.026 L 0.077 4.026 L 13.422 4.026 L 13.422 3.026 L 13.422 2.026 L 0.077 2.026 L 0.077 3.026 Z M 0.3 2.6 L -0.5 2 C -0.825 2.433 -1 2.96 -1 3.501 L 0 3.501 L 1 3.501 C 1 3.392 1.035 3.287 1.1 3.2 L 0.3 2.6 Z M 0 3.501 L -1 3.501 L -1 13.501 L 0 13.501 L 1 13.501 L 1 3.501 L 0 3.501 Z M 0 13.501 L -1 13.501 C -1 14.164 -0.737 14.8 -0.268 15.269 L 0.439 14.562 L 1.146 13.855 C 1.053 13.761 1 13.634 1 13.501 L 0 13.501 Z M 0.439 14.562 L -0.268 15.269 C 0.201 15.738 0.837 16.001 1.5 16.001 L 1.5 15.001 L 1.5 14.001 C 1.367 14.001 1.24 13.949 1.146 13.855 L 0.439 14.562 Z M 1.5 15.001 L 1.5 16.001 L 12 16.001 L 12 15.001 L 12 14.001 L 1.5 14.001 L 1.5 15.001 Z M 12 15.001 L 12 16.001 C 12.663 16.001 13.299 15.738 13.768 15.269 L 13.061 14.562 L 12.354 13.855 C 12.26 13.949 12.133 14.001 12 14.001 L 12 15.001 Z M 13.061 14.562 L 13.768 15.269 C 14.237 14.8 14.5 14.164 14.5 13.501 L 13.5 13.501 L 12.5 13.501 C 12.5 13.634 12.447 13.761 12.354 13.855 L 13.061 14.562 Z M 13.5 13.501 L 14.5 13.501 L 14.5 3.501 L 13.5 3.501 L 12.5 3.501 L 12.5 13.501 L 13.5 13.501 Z M 13.5 3.501 L 14.5 3.501 C 14.5 2.96 14.325 2.433 14 2 L 13.2 2.6 L 12.4 3.2 C 12.465 3.287 12.5 3.392 12.5 3.501 L 13.5 3.501 Z M 13.2 2.6 L 14 2.001 L 12.5 0 L 11.7 0.6 L 10.9 1.2 L 12.4 3.2 L 13.2 2.6 Z M 11.7 0.6 L 12.5 0 C 12.267 -0.31 11.965 -0.562 11.618 -0.736 L 11.171 0.158 L 10.724 1.053 C 10.793 1.087 10.853 1.138 10.9 1.2 L 11.7 0.6 Z M 11.171 0.158 L 11.618 -0.736 C 11.271 -0.91 10.888 -1 10.5 -1 L 10.5 0 L 10.5 1 C 10.578 1 10.654 1.018 10.724 1.053 L 11.171 0.158 Z M 10.5 0 L 10.5 -1 L 3 -1 L 3 0 L 3 1 L 10.5 1 L 10.5 0 Z M 3 0 L 3 -1 C 2.612 -1 2.229 -0.91 1.882 -0.736 L 2.329 0.158 L 2.776 1.053 C 2.846 1.018 2.922 1 3 1 L 3 0 Z M 2.329 0.158 L 1.882 -0.736 C 1.535 -0.562 1.233 -0.31 1 0 L 1.8 0.6 L 2.6 1.2 C 2.647 1.138 2.707 1.087 2.776 1.053 L 2.329 0.158 Z M 1.8 0.6 L 1 0 L -0.5 2.001 L 0.3 2.6 L 1.1 3.2 L 2.6 1.2 L 1.8 0.6 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 12,
      textAlign: "center",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      lineHeight: "100%",
      color: "rgb(26,26,26)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Place Order"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--text-brand)",
      flexShrink: 0
    }
  }, "+100 pts")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 12,
      backgroundColor: "var(--bg-brand-tint)",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "12px 12px 12px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 40,
      height: 40,
      borderRadius: 8,
      backgroundColor: "rgb(245,245,245)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 18,
      height: 18,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 15.001,
    height: 14.304,
    viewBox: "0 0 15.001 14.304",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.499,
      top: 1.499,
      width: 15.001,
      height: 14.304
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7.145 0.221 L 6.249 -0.222 L 6.248 -0.221 L 7.145 0.221 Z M 7.501 0 L 7.501 -1 L 7.501 0 Z M 7.858 0.221 L 8.754 -0.222 L 8.754 -0.222 L 7.858 0.221 Z M 9.59 3.73 L 8.693 4.173 L 8.694 4.173 L 9.59 3.73 Z M 10.786 4.6 L 10.641 5.59 L 10.642 5.59 L 10.786 4.6 Z M 14.661 5.167 L 14.516 6.157 L 14.517 6.157 L 14.661 5.167 Z M 14.881 5.845 L 15.579 6.562 L 15.579 6.561 L 14.881 5.845 Z M 12.079 8.574 L 11.382 7.857 L 11.381 7.858 L 12.079 8.574 Z M 11.621 9.982 L 10.635 10.151 L 10.636 10.152 L 11.621 9.982 Z M 12.283 13.837 L 11.297 14.007 L 11.298 14.011 L 12.283 13.837 Z M 11.704 14.257 L 12.174 13.375 L 12.17 13.372 L 11.704 14.257 Z M 8.241 12.436 L 8.706 11.551 L 8.706 11.551 L 8.241 12.436 Z M 7.501 12.254 L 7.501 11.254 L 7.501 12.254 Z M 6.761 12.436 L 6.296 11.551 L 6.296 11.551 L 6.761 12.436 Z M 3.298 14.257 L 2.833 13.372 L 2.83 13.374 L 3.298 14.257 Z M 2.721 13.837 L 3.706 14.01 L 3.706 14.006 L 2.721 13.837 Z M 3.382 9.983 L 2.396 9.814 L 2.396 9.814 L 3.382 9.983 Z M 2.923 8.574 L 3.621 7.858 L 3.621 7.857 L 2.923 8.574 Z M 0.121 5.846 L 0.819 5.13 L 0.816 5.127 L 0.121 5.846 Z M 0.342 5.167 L 0.482 6.157 L 0.486 6.156 L 0.342 5.167 Z M 4.216 4.6 L 4.072 3.611 L 4.071 3.611 L 4.216 4.6 Z M 5.413 3.73 L 6.31 4.173 L 6.31 4.173 L 5.413 3.73 Z M 7.145 0.221 L 8.041 0.665 C 7.992 0.765 7.915 0.85 7.819 0.909 L 7.292 0.06 L 6.764 -0.79 C 6.543 -0.652 6.364 -0.456 6.249 -0.222 L 7.145 0.221 Z M 7.292 0.06 L 7.819 0.909 C 7.724 0.969 7.614 1 7.501 1 L 7.501 0 L 7.501 -1 C 7.241 -1 6.986 -0.927 6.764 -0.79 L 7.292 0.06 Z M 7.501 0 L 7.501 1 C 7.389 1 7.279 0.969 7.184 0.909 L 7.711 0.06 L 8.238 -0.79 C 8.017 -0.927 7.762 -1 7.501 -1 L 7.501 0 Z M 7.711 0.06 L 7.184 0.909 C 7.088 0.85 7.011 0.765 6.961 0.665 L 7.858 0.221 L 8.754 -0.222 C 8.638 -0.456 8.46 -0.652 8.238 -0.79 L 7.711 0.06 Z M 7.858 0.221 L 6.961 0.664 L 8.693 4.173 L 9.59 3.73 L 10.487 3.288 L 8.754 -0.222 L 7.858 0.221 Z M 9.59 3.73 L 8.694 4.173 C 8.879 4.549 9.154 4.875 9.493 5.121 L 10.081 4.313 L 10.669 3.504 C 10.592 3.448 10.529 3.373 10.487 3.287 L 9.59 3.73 Z M 10.081 4.313 L 9.493 5.121 C 9.832 5.368 10.226 5.529 10.641 5.59 L 10.786 4.6 L 10.932 3.611 C 10.837 3.597 10.747 3.56 10.669 3.504 L 10.081 4.313 Z M 10.786 4.6 L 10.642 5.59 L 14.516 6.157 L 14.661 5.167 L 14.806 4.178 L 10.931 3.611 L 10.786 4.6 Z M 14.661 5.167 L 14.517 6.157 C 14.406 6.141 14.302 6.094 14.216 6.022 L 14.86 5.257 L 15.504 4.492 C 15.305 4.324 15.062 4.215 14.804 4.178 L 14.661 5.167 Z M 14.86 5.257 L 14.216 6.022 C 14.13 5.949 14.066 5.854 14.031 5.747 L 14.982 5.438 L 15.933 5.129 C 15.852 4.881 15.704 4.66 15.504 4.492 L 14.86 5.257 Z M 14.982 5.438 L 14.031 5.747 C 13.996 5.64 13.992 5.526 14.019 5.417 L 14.99 5.656 L 15.961 5.895 C 16.023 5.642 16.013 5.377 15.933 5.129 L 14.982 5.438 Z M 14.99 5.656 L 14.019 5.417 C 14.046 5.307 14.103 5.208 14.183 5.129 L 14.881 5.845 L 15.579 6.561 C 15.766 6.379 15.898 6.149 15.961 5.895 L 14.99 5.656 Z M 14.881 5.845 L 14.184 5.129 L 11.382 7.857 L 12.079 8.574 L 12.777 9.29 L 15.579 6.562 L 14.881 5.845 Z M 12.079 8.574 L 11.381 7.858 C 11.081 8.151 10.856 8.513 10.726 8.912 L 11.676 9.222 L 12.627 9.531 C 12.657 9.44 12.709 9.357 12.777 9.29 L 12.079 8.574 Z M 11.676 9.222 L 10.726 8.912 C 10.596 9.312 10.565 9.737 10.635 10.151 L 11.621 9.982 L 12.607 9.814 C 12.591 9.719 12.598 9.622 12.627 9.531 L 11.676 9.222 Z M 11.621 9.982 L 10.636 10.152 L 11.297 14.007 L 12.283 13.837 L 13.268 13.668 L 12.607 9.813 L 11.621 9.982 Z M 12.283 13.837 L 11.298 14.011 C 11.278 13.9 11.29 13.786 11.333 13.681 L 12.26 14.055 L 13.187 14.43 C 13.285 14.187 13.313 13.921 13.267 13.664 L 12.283 13.837 Z M 12.26 14.055 L 11.333 13.681 C 11.375 13.576 11.446 13.485 11.537 13.419 L 12.125 14.228 L 12.712 15.037 C 12.924 14.883 13.089 14.673 13.187 14.43 L 12.26 14.055 Z M 12.125 14.228 L 11.537 13.419 C 11.628 13.353 11.737 13.313 11.849 13.306 L 11.919 14.303 L 11.988 15.301 C 12.25 15.282 12.5 15.191 12.712 15.037 L 12.125 14.228 Z M 11.919 14.303 L 11.849 13.306 C 11.962 13.298 12.075 13.322 12.174 13.375 L 11.704 14.257 L 11.234 15.14 C 11.466 15.263 11.727 15.319 11.988 15.301 L 11.919 14.303 Z M 11.704 14.257 L 12.17 13.372 L 8.706 11.551 L 8.241 12.436 L 7.775 13.322 L 11.239 15.143 L 11.704 14.257 Z M 8.241 12.436 L 8.706 11.551 C 8.334 11.356 7.921 11.254 7.501 11.254 L 7.501 12.254 L 7.501 13.254 C 7.597 13.254 7.691 13.277 7.776 13.322 L 8.241 12.436 Z M 7.501 12.254 L 7.501 11.254 C 7.081 11.254 6.668 11.356 6.296 11.551 L 6.761 12.436 L 7.226 13.322 C 7.311 13.277 7.405 13.254 7.501 13.254 L 7.501 12.254 Z M 6.761 12.436 L 6.296 11.551 L 2.833 13.372 L 3.298 14.257 L 3.764 15.142 L 7.227 13.321 L 6.761 12.436 Z M 3.298 14.257 L 2.83 13.374 C 2.93 13.321 3.043 13.297 3.155 13.305 L 3.084 14.303 L 3.013 15.3 C 3.274 15.319 3.535 15.264 3.766 15.141 L 3.298 14.257 Z M 3.084 14.303 L 3.155 13.305 C 3.268 13.313 3.376 13.353 3.467 13.419 L 2.879 14.228 L 2.29 15.036 C 2.502 15.19 2.752 15.282 3.013 15.3 L 3.084 14.303 Z M 2.879 14.228 L 3.467 13.419 C 3.558 13.485 3.629 13.576 3.671 13.68 L 2.744 14.055 L 1.817 14.43 C 1.915 14.672 2.079 14.882 2.29 15.036 L 2.879 14.228 Z M 2.744 14.055 L 3.671 13.68 C 3.713 13.785 3.725 13.899 3.706 14.01 L 2.721 13.837 L 1.736 13.665 C 1.691 13.922 1.719 14.187 1.817 14.43 L 2.744 14.055 Z M 2.721 13.837 L 3.706 14.006 L 4.367 10.152 L 3.382 9.983 L 2.396 9.814 L 1.735 13.668 L 2.721 13.837 Z M 3.382 9.983 L 4.367 10.152 C 4.438 9.738 4.407 9.312 4.277 8.913 L 3.327 9.222 L 2.376 9.531 C 2.405 9.622 2.412 9.72 2.396 9.814 L 3.382 9.983 Z M 3.327 9.222 L 4.277 8.913 C 4.147 8.513 3.922 8.151 3.621 7.858 L 2.923 8.574 L 2.226 9.29 C 2.294 9.357 2.346 9.44 2.376 9.531 L 3.327 9.222 Z M 2.923 8.574 L 3.621 7.857 L 0.819 5.13 L 0.121 5.846 L -0.576 6.563 L 2.226 9.29 L 2.923 8.574 Z M 0.121 5.846 L 0.816 5.127 C 0.897 5.205 0.955 5.305 0.982 5.414 L 0.012 5.656 L -0.958 5.899 C -0.895 6.153 -0.762 6.384 -0.573 6.565 L 0.121 5.846 Z M 0.012 5.656 L 0.982 5.414 C 1.009 5.524 1.005 5.639 0.971 5.746 L 0.019 5.438 L -0.932 5.129 C -1.013 5.378 -1.022 5.645 -0.958 5.899 L 0.012 5.656 Z M 0.019 5.438 L 0.971 5.746 C 0.936 5.854 0.871 5.949 0.785 6.022 L 0.142 5.256 L -0.501 4.49 C -0.702 4.659 -0.851 4.88 -0.932 5.129 L 0.019 5.438 Z M 0.142 5.256 L 0.785 6.022 C 0.699 6.094 0.594 6.141 0.482 6.157 L 0.342 5.167 L 0.202 4.177 C -0.057 4.213 -0.301 4.322 -0.501 4.49 L 0.142 5.256 Z M 0.342 5.167 L 0.486 6.156 L 4.36 5.59 L 4.216 4.6 L 4.071 3.611 L 0.197 4.177 L 0.342 5.167 Z M 4.216 4.6 L 4.36 5.59 C 4.775 5.53 5.17 5.369 5.509 5.122 L 4.922 4.313 L 4.334 3.504 C 4.257 3.56 4.166 3.597 4.072 3.611 L 4.216 4.6 Z M 4.922 4.313 L 5.509 5.122 C 5.849 4.875 6.124 4.55 6.31 4.173 L 5.413 3.73 L 4.517 3.287 C 4.474 3.373 4.412 3.448 4.334 3.504 L 4.922 4.313 Z M 5.413 3.73 L 6.31 4.173 L 8.042 0.664 L 7.145 0.221 L 6.248 -0.221 L 4.517 3.288 L 5.413 3.73 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 12,
      textAlign: "center",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      lineHeight: "100%",
      color: "rgb(26,26,26)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Write Review"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--text-brand)",
      flexShrink: 0
    }
  }, "+50 pts")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 12,
      backgroundColor: "var(--bg-brand-tint)",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "12px 12px 12px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 40,
      height: 40,
      borderRadius: 8,
      backgroundColor: "rgb(245,245,245)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 18,
      height: 18,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 15.001,
    height: 13.500,
    viewBox: "0 0 15.001 13.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.499,
      top: 2.25,
      width: 15.001,
      height: 13.5
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 9.501 13.5 C 9.501 14.052 9.949 14.5 10.501 14.5 C 11.053 14.5 11.501 14.052 11.501 13.5 L 10.501 13.5 L 9.501 13.5 Z M 10.501 12 L 11.501 12 L 10.501 12 Z M 7.501 9 L 7.501 8 L 7.501 9 Z M 3 9 L 3 8 L 3 9 Z M 0 12 L -1 12 L 0 12 Z M -1 13.5 C -1 14.052 -0.552 14.5 0 14.5 C 0.552 14.5 1 14.052 1 13.5 L 0 13.5 L -1 13.5 Z M 13.751 3.75 C 13.751 3.198 13.303 2.75 12.751 2.75 C 12.199 2.75 11.751 3.198 11.751 3.75 L 12.751 3.75 L 13.751 3.75 Z M 11.751 8.25 C 11.751 8.802 12.199 9.25 12.751 9.25 C 13.303 9.25 13.751 8.802 13.751 8.25 L 12.751 8.25 L 11.751 8.25 Z M 15.001 7 C 15.553 7 16.001 6.552 16.001 6 C 16.001 5.448 15.553 5 15.001 5 L 15.001 6 L 15.001 7 Z M 10.501 5 C 9.949 5 9.501 5.448 9.501 6 C 9.501 6.552 9.949 7 10.501 7 L 10.501 6 L 10.501 5 Z M 10.501 13.5 L 11.501 13.5 L 11.501 12 L 10.501 12 L 9.501 12 L 9.501 13.5 L 10.501 13.5 Z M 10.501 12 L 11.501 12 C 11.501 10.939 11.079 9.922 10.329 9.172 L 9.622 9.879 L 8.915 10.586 C 9.29 10.961 9.501 11.47 9.501 12 L 10.501 12 Z M 9.622 9.879 L 10.329 9.172 C 9.579 8.421 8.562 8 7.501 8 L 7.501 9 L 7.501 10 C 8.031 10 8.54 10.211 8.915 10.586 L 9.622 9.879 Z M 7.501 9 L 7.501 8 L 3 8 L 3 9 L 3 10 L 7.501 10 L 7.501 9 Z M 3 9 L 3 8 C 1.939 8 0.922 8.421 0.172 9.172 L 0.879 9.879 L 1.586 10.586 C 1.961 10.211 2.47 10 3 10 L 3 9 Z M 0.879 9.879 L 0.172 9.172 C -0.579 9.922 -1 10.939 -1 12 L 0 12 L 1 12 C 1 11.47 1.211 10.961 1.586 10.586 L 0.879 9.879 Z M 0 12 L -1 12 L -1 13.5 L 0 13.5 L 1 13.5 L 1 12 L 0 12 Z M 12.751 3.75 L 11.751 3.75 L 11.751 8.25 L 12.751 8.25 L 13.751 8.25 L 13.751 3.75 L 12.751 3.75 Z M 15.001 6 L 15.001 5 L 10.501 5 L 10.501 6 L 10.501 7 L 15.001 7 L 15.001 6 Z M 8.251 3 L 7.251 3 C 7.251 4.104 6.355 5 5.25 5 L 5.25 6 L 5.25 7 C 7.46 7 9.251 5.209 9.251 3 L 8.251 3 Z M 5.25 6 L 5.25 5 C 4.146 5 3.25 4.104 3.25 3 L 2.25 3 L 1.25 3 C 1.25 5.209 3.041 7 5.25 7 L 5.25 6 Z M 2.25 3 L 3.25 3 C 3.25 1.896 4.146 1 5.25 1 L 5.25 0 L 5.25 -1 C 3.041 -1 1.25 0.791 1.25 3 L 2.25 3 Z M 5.25 0 L 5.25 1 C 6.355 1 7.251 1.896 7.251 3 L 8.251 3 L 9.251 3 C 9.251 0.791 7.46 -1 5.25 -1 L 5.25 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 12,
      textAlign: "center",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      lineHeight: "100%",
      color: "rgb(26,26,26)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Refer Friend"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--text-brand)",
      flexShrink: 0
    }
  }, "+200 pts")))))), /*#__PURE__*/React.createElement(HomeIndicator, {
    style: {
      position: "relative",
      height: 34,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    }
  })));
}

// figma node: 637:17433 Makeup Artist Profile
function MakeupArtistProfile(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 440,
      height: 956,
      overflow: "hidden",
      borderRadius: 31,
      backgroundColor: "var(--bg-default)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 64,
      backgroundColor: "var(--bg-brand)",
      display: "flex",
      flexDirection: "row",
      padding: "0px 20px 0px 30px",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--icon-on-brand)",
      flexShrink: 0
    }
  }, "9:41"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 68,
      height: 12,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 3,
    height: 6,
    viewBox: "0 0 3 6",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 6,
      width: 3,
      height: 6,
      color: "var(--icon-on-brand)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2 0 L 1 0 C 0.448 0 0 0.448 0 1 L 0 5 C 0 5.552 0.448 6 1 6 L 2 6 C 2.552 6 3 5.552 3 5 L 3 1 C 3 0.448 2.552 0 2 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3,
    height: 8,
    viewBox: "0 0 3 8",
    fill: "none",
    style: {
      position: "absolute",
      left: 5,
      top: 4,
      width: 3,
      height: 8,
      color: "var(--icon-on-brand)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2 0 L 1 0 C 0.448 0 0 0.448 0 1 L 0 7 C 0 7.552 0.448 8 1 8 L 2 8 C 2.552 8 3 7.552 3 7 L 3 1 C 3 0.448 2.552 0 2 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3,
    height: 10,
    viewBox: "0 0 3 10",
    fill: "none",
    style: {
      position: "absolute",
      left: 10,
      top: 2,
      width: 3,
      height: 10,
      color: "var(--icon-on-brand)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2 0 L 1 0 C 0.448 0 0 0.448 0 1 L 0 9 C 0 9.552 0.448 10 1 10 L 2 10 C 2.552 10 3 9.552 3 9 L 3 1 C 3 0.448 2.552 0 2 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3,
    height: 12,
    viewBox: "0 0 3 12",
    fill: "none",
    style: {
      position: "absolute",
      left: 15,
      top: 0,
      width: 3,
      height: 12,
      color: "var(--icon-on-brand)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2 0 L 1 0 C 0.448 0 0 0.448 0 1 L 0 11 C 0 11.552 0.448 12 1 12 L 2 12 C 2.552 12 3 11.552 3 11 L 3 1 C 3 0.448 2.552 0 2 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 10,
    height: 1.755,
    viewBox: "0 0 10 1.755",
    fill: "none",
    style: {
      position: "absolute",
      left: 31,
      top: 2.745,
      width: 10,
      height: 1.755,
      color: "var(--icon-on-brand)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M -0.5 1.131 C -0.845 1.407 -0.901 1.91 -0.624 2.255 C -0.348 2.6 0.155 2.656 0.5 2.38 L 0 1.755 L -0.5 1.131 Z M 9.5 2.38 C 9.845 2.656 10.348 2.6 10.625 2.255 C 10.901 1.91 10.845 1.407 10.5 1.131 L 10 1.755 L 9.5 2.38 Z M 0 1.755 L 0.5 2.38 C 1.777 1.357 3.364 0.8 5 0.8 L 5 0 L 5 -0.8 C 3.001 -0.8 1.061 -0.119 -0.5 1.131 L 0 1.755 Z M 5 0 L 5 0.8 C 6.636 0.8 8.223 1.357 9.5 2.38 L 10 1.755 L 10.5 1.131 C 8.939 -0.119 6.999 -0.8 5 -0.8 L 5 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 6,
    height: 1,
    viewBox: "0 0 6 1",
    fill: "none",
    style: {
      position: "absolute",
      left: 33,
      top: 6.2,
      width: 6,
      height: 1,
      color: "var(--icon-on-brand)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M -0.48 0.36 C -0.833 0.625 -0.905 1.127 -0.64 1.48 C -0.375 1.833 0.127 1.905 0.48 1.64 L 0 1 L -0.48 0.36 Z M 3 0 L 3 0.8 L 3 0 Z M 5.52 1.64 C 5.873 1.905 6.375 1.833 6.64 1.48 C 6.905 1.127 6.833 0.625 6.48 0.36 L 6 1 L 5.52 1.64 Z M 0 1 L 0.48 1.64 C 1.207 1.095 2.091 0.8 3 0.8 L 3 0 L 3 -0.8 C 1.745 -0.8 0.524 -0.393 -0.48 0.36 L 0 1 Z M 3 0 L 3 0.8 C 3.909 0.8 4.793 1.095 5.52 1.64 L 6 1 L 6.48 0.36 C 5.476 -0.393 4.255 -0.8 3 -0.8 L 3 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 2.600,
    height: 2.600,
    viewBox: "0 0 2.600 2.600",
    fill: "none",
    style: {
      position: "absolute",
      left: 34.7,
      top: 8.7,
      width: 2.6,
      height: 2.6,
      color: "var(--icon-on-brand)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.3 2.6 C 2.018 2.6 2.6 2.018 2.6 1.3 C 2.6 0.582 2.018 0 1.3 0 C 0.582 0 0 0.582 0 1.3 C 0 2.018 0.582 2.6 1.3 2.6 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 20,
    height: 10,
    viewBox: "0 0 20 10",
    fill: "none",
    style: {
      position: "absolute",
      left: 46,
      top: 1,
      width: 20,
      height: 10,
      color: "var(--icon-on-brand)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3 0 L 3 0.5 L 17 0.5 L 17 0 L 17 -0.5 L 3 -0.5 L 3 0 Z M 17 0 L 17 0.5 C 18.381 0.5 19.5 1.619 19.5 3 L 20 3 L 20.5 3 C 20.5 1.067 18.933 -0.5 17 -0.5 L 17 0 Z M 20 3 L 19.5 3 L 19.5 7 L 20 7 L 20.5 7 L 20.5 3 L 20 3 Z M 20 7 L 19.5 7 C 19.5 8.381 18.381 9.5 17 9.5 L 17 10 L 17 10.5 C 18.933 10.5 20.5 8.933 20.5 7 L 20 7 Z M 17 10 L 17 9.5 L 3 9.5 L 3 10 L 3 10.5 L 17 10.5 L 17 10 Z M 3 10 L 3 9.5 C 1.619 9.5 0.5 8.381 0.5 7 L 0 7 L -0.5 7 C -0.5 8.933 1.067 10.5 3 10.5 L 3 10 Z M 0 7 L 0.5 7 L 0.5 3 L 0 3 L -0.5 3 L -0.5 7 L 0 7 Z M 0 3 L 0.5 3 C 0.5 1.619 1.619 0.5 3 0.5 L 3 0 L 3 -0.5 C 1.067 -0.5 -0.5 1.067 -0.5 3 L 0 3 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 13,
    height: 6,
    viewBox: "0 0 13 6",
    fill: "none",
    style: {
      position: "absolute",
      left: 48,
      top: 3,
      width: 13,
      height: 6,
      color: "var(--icon-on-brand)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 11.5 0 L 1.5 0 C 0.672 0 0 0.672 0 1.5 L 0 4.5 C 0 5.328 0.672 6 1.5 6 L 11.5 6 C 12.328 6 13 5.328 13 4.5 L 13 1.5 C 13 0.672 12.328 0 11.5 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 2,
    height: 4,
    viewBox: "0 0 2 4",
    fill: "none",
    style: {
      position: "absolute",
      left: 67,
      top: 4,
      width: 2,
      height: 4,
      color: "var(--icon-on-brand)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 0 4 C 0.53 4 1.039 3.789 1.414 3.414 C 1.789 3.039 2 2.53 2 2 C 2 1.47 1.789 0.961 1.414 0.586 C 1.039 0.211 0.53 0 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 854,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-c2b15171e3cb911b",
    style: {
      position: "relative",
      height: 200,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 440,
      display: "flex",
      flexDirection: "row",
      padding: "12px 20px 12px 20px",
      justifyContent: "space-between",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 100,
      backgroundColor: "rgba(0,0,0,0.4)",
      display: "flex",
      flexDirection: "row",
      padding: "8px 8px 8px 8px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      height: 20,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 11.668,
    height: 11.668,
    viewBox: "0 0 11.668 11.668",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.166,
      top: 4.166,
      width: 11.668,
      height: 11.668,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.127 12.375 C 5.517 12.766 6.151 12.766 6.541 12.375 C 6.932 11.985 6.932 11.351 6.541 10.961 L 5.834 11.668 L 5.127 12.375 Z M 0 5.834 L -0.707 5.127 L -1.414 5.834 L -0.707 6.541 L 0 5.834 Z M 6.541 0.707 C 6.932 0.317 6.932 -0.317 6.541 -0.707 C 6.151 -1.098 5.517 -1.098 5.127 -0.707 L 5.834 0 L 6.541 0.707 Z M 11.668 6.834 C 12.22 6.834 12.668 6.386 12.668 5.834 C 12.668 5.282 12.22 4.834 11.668 4.834 L 11.668 5.834 L 11.668 6.834 Z M 5.834 11.668 L 6.541 10.961 L 0.707 5.127 L 0 5.834 L -0.707 6.541 L 5.127 12.375 L 5.834 11.668 Z M 0 5.834 L 0.707 6.541 L 6.541 0.707 L 5.834 0 L 5.127 -0.707 L -0.707 5.127 L 0 5.834 Z M 0 5.834 L 0 6.834 L 11.668 6.834 L 11.668 5.834 L 11.668 4.834 L 0 4.834 L 0 5.834 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 100,
      backgroundColor: "rgba(0,0,0,0.4)",
      display: "flex",
      flexDirection: "row",
      padding: "8px 8px 8px 8px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      height: 20,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 13.332,
    height: 16.668,
    viewBox: "0 0 13.332 16.668",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.334,
      top: 1.666,
      width: 13.332,
      height: 16.668,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.666 0 L 7.373 -0.707 L 6.666 -1.414 L 5.959 -0.707 L 6.666 0 Z M 5.666 10.834 C 5.666 11.386 6.114 11.834 6.666 11.834 C 7.218 11.834 7.666 11.386 7.666 10.834 L 6.666 10.834 L 5.666 10.834 Z M 9.292 4.041 C 9.682 4.431 10.315 4.431 10.706 4.041 C 11.097 3.65 11.097 3.017 10.706 2.627 L 9.999 3.334 L 9.292 4.041 Z M 2.626 2.627 C 2.235 3.017 2.235 3.65 2.626 4.041 C 3.017 4.431 3.65 4.431 4.04 4.041 L 3.333 3.334 L 2.626 2.627 Z M 1 8.334 C 1 7.782 0.552 7.334 0 7.334 C -0.552 7.334 -1 7.782 -1 8.334 L 0 8.334 L 1 8.334 Z M 0 15.001 L -1 15.001 L 0 15.001 Z M 0.488 16.18 L 1.195 15.473 L 0.488 16.18 Z M 12.844 16.18 L 12.137 15.473 L 12.844 16.18 Z M 14.332 8.334 C 14.332 7.782 13.884 7.334 13.332 7.334 C 12.78 7.334 12.332 7.782 12.332 8.334 L 13.332 8.334 L 14.332 8.334 Z M 6.666 0 L 5.666 0 L 5.666 10.834 L 6.666 10.834 L 7.666 10.834 L 7.666 0 L 6.666 0 Z M 6.666 0 L 5.959 0.707 L 9.292 4.041 L 9.999 3.334 L 10.706 2.627 L 7.373 -0.707 L 6.666 0 Z M 6.666 0 L 5.959 -0.707 L 2.626 2.627 L 3.333 3.334 L 4.04 4.041 L 7.373 0.707 L 6.666 0 Z M 0 8.334 L -1 8.334 L -1 15.001 L 0 15.001 L 1 15.001 L 1 8.334 L 0 8.334 Z M 0 15.001 L -1 15.001 C -1 15.708 -0.719 16.387 -0.219 16.887 L 0.488 16.18 L 1.195 15.473 C 1.07 15.348 1 15.178 1 15.001 L 0 15.001 Z M 0.488 16.18 L -0.219 16.887 C 0.281 17.387 0.959 17.668 1.666 17.668 L 1.666 16.668 L 1.666 15.668 C 1.49 15.668 1.32 15.598 1.195 15.473 L 0.488 16.18 Z M 1.666 16.668 L 1.666 17.668 L 11.665 17.668 L 11.665 16.668 L 11.665 15.668 L 1.666 15.668 L 1.666 16.668 Z M 11.665 16.668 L 11.665 17.668 C 12.373 17.668 13.051 17.387 13.551 16.887 L 12.844 16.18 L 12.137 15.473 C 12.012 15.598 11.842 15.668 11.665 15.668 L 11.665 16.668 Z M 12.844 16.18 L 13.551 16.887 C 14.051 16.387 14.332 15.708 14.332 15.001 L 13.332 15.001 L 12.332 15.001 C 12.332 15.178 12.262 15.348 12.137 15.473 L 12.844 16.18 Z M 13.332 15.001 L 14.332 15.001 L 14.332 8.334 L 13.332 8.334 L 12.332 8.334 L 12.332 15.001 L 13.332 15.001 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: "0px 0px 24px 24px",
      backgroundColor: "var(--bg-default)",
      boxShadow: "0px 8px 16px 0px rgba(243,161,149,0.2)",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "0px 20px 8px 20px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingBottom: "calc(var(--spacing-sm) * 1px)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 20,
      top: -45,
      width: 90,
      height: 90,
      overflow: "hidden",
      borderRadius: 45,
      boxShadow: "inset 0 0 0 4px rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-38f11dbab909390c",
    style: {
      position: "relative",
      width: 90,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 50,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "10px 10px 10px 10px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 320,
      top: 9,
      width: 80,
      height: 32,
      borderRadius: 999,
      boxShadow: "inset 0 0 0 1px var(--border-brand), 0px 1px 4px 0px rgba(12,12,13,0.1), 0px 1px 4px 0px rgba(12,12,13,0.05)",
      display: "flex",
      flexDirection: "row",
      padding: "6px 24px 6px 24px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-2xl) * 1px)",
      paddingTop: "calc(var(--spacing-xs) * 1px)",
      paddingRight: "calc(var(--spacing-2xl) * 1px)",
      paddingBottom: "calc(var(--spacing-xs) * 1px)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: 1.5,
      color: "var(--text-brand)",
      flexShrink: 0
    }
  }, "Follow"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--text-secondary)",
      flexShrink: 0
    }
  }, "Layla Al Maktoum"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      height: "calc(var(--icon-lg) * 1px)",
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16.672,
    height: 16.665,
    viewBox: "0 0 16.672 16.665",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.658,
      top: 1.67,
      width: 16.672,
      height: 16.665,
      color: "var(--icon-brand)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.549 7.622 C 6.159 7.232 5.526 7.232 5.135 7.622 C 4.745 8.013 4.745 8.646 5.135 9.036 L 5.842 8.329 L 6.549 7.622 Z M 7.509 9.996 L 6.802 10.703 L 7.509 11.41 L 8.216 10.703 L 7.509 9.996 Z M 11.549 7.37 C 11.94 6.979 11.94 6.346 11.549 5.955 C 11.159 5.565 10.526 5.565 10.135 5.955 L 10.842 6.663 L 11.549 7.37 Z M 1.551 5.513 L 2.086 6.358 L 2.679 5.982 L 2.527 5.296 L 1.551 5.513 Z M 5.534 1.538 L 5.315 2.513 L 5.999 2.667 L 6.377 2.076 L 5.534 1.538 Z M 8.342 0 L 8.342 1 L 8.342 0 Z M 11.151 1.538 L 10.308 2.076 L 10.686 2.667 L 11.37 2.513 L 11.151 1.538 Z M 15.134 5.521 L 14.158 5.302 L 14.005 5.986 L 14.595 6.364 L 15.134 5.521 Z M 16.262 6.728 L 15.385 7.209 L 16.262 6.728 Z M 16.262 9.93 L 15.385 9.45 L 16.262 9.93 Z M 15.134 11.138 L 14.595 10.295 L 14.005 10.673 L 14.158 11.356 L 15.134 11.138 Z M 11.159 15.121 L 11.376 14.145 L 10.692 13.993 L 10.315 14.584 L 11.159 15.121 Z M 5.534 15.121 L 6.378 14.584 L 6.001 13.992 L 5.315 14.145 L 5.534 15.121 Z M 1.551 11.146 L 2.527 11.363 L 2.679 10.677 L 2.086 10.301 L 1.551 11.146 Z M 0 8.329 L 1 8.329 L 0 8.329 Z M 5.842 8.329 L 5.135 9.036 L 6.802 10.703 L 7.509 9.996 L 8.216 9.289 L 6.549 7.622 L 5.842 8.329 Z M 7.509 9.996 L 8.216 10.703 L 11.549 7.37 L 10.842 6.663 L 10.135 5.955 L 6.802 9.289 L 7.509 9.996 Z M 1.551 5.513 L 2.527 5.296 C 2.442 4.912 2.455 4.514 2.565 4.136 L 1.605 3.856 L 0.645 3.576 C 0.441 4.276 0.416 5.017 0.575 5.729 L 1.551 5.513 Z M 1.605 3.856 L 2.565 4.136 C 2.675 3.759 2.879 3.416 3.157 3.139 L 2.45 2.431 L 1.744 1.723 C 1.228 2.238 0.85 2.876 0.645 3.576 L 1.605 3.856 Z M 2.45 2.431 L 3.157 3.139 C 3.435 2.861 3.778 2.658 4.156 2.549 L 3.878 1.589 L 3.599 0.628 C 2.899 0.831 2.26 1.208 1.744 1.723 L 2.45 2.431 Z M 3.878 1.589 L 4.156 2.549 C 4.533 2.44 4.932 2.428 5.315 2.513 L 5.534 1.538 L 5.753 0.562 C 5.041 0.402 4.3 0.425 3.599 0.628 L 3.878 1.589 Z M 5.534 1.538 L 6.377 2.076 C 6.588 1.746 6.878 1.475 7.222 1.287 L 6.742 0.41 L 6.261 -0.468 C 5.623 -0.118 5.083 0.386 4.692 0.999 L 5.534 1.538 Z M 6.742 0.41 L 7.222 1.287 C 7.565 1.099 7.951 1 8.342 1 L 8.342 0 L 8.342 -1 C 7.615 -1 6.899 -0.817 6.261 -0.468 L 6.742 0.41 Z M 8.342 0 L 8.342 1 C 8.734 1 9.12 1.099 9.463 1.287 L 9.943 0.41 L 10.424 -0.468 C 9.786 -0.817 9.07 -1 8.342 -1 L 8.342 0 Z M 9.943 0.41 L 9.463 1.287 C 9.807 1.475 10.097 1.746 10.308 2.076 L 11.151 1.538 L 11.993 0.999 C 11.601 0.386 11.062 -0.118 10.424 -0.468 L 9.943 0.41 Z M 11.151 1.538 L 11.37 2.513 C 11.754 2.427 12.154 2.439 12.532 2.549 L 12.81 1.588 L 13.088 0.628 C 12.386 0.424 11.644 0.402 10.931 0.562 L 11.151 1.538 Z M 12.81 1.588 L 12.532 2.549 C 12.91 2.658 13.254 2.862 13.532 3.14 L 14.239 2.433 L 14.946 1.726 C 14.429 1.209 13.79 0.831 13.088 0.628 L 12.81 1.588 Z M 14.239 2.433 L 13.532 3.14 C 13.81 3.418 14.013 3.762 14.123 4.14 L 15.084 3.862 L 16.044 3.583 C 15.841 2.882 15.463 2.242 14.946 1.726 L 14.239 2.433 Z M 15.084 3.862 L 14.123 4.14 C 14.233 4.518 14.245 4.918 14.158 5.302 L 15.134 5.521 L 16.11 5.74 C 16.27 5.027 16.247 4.285 16.044 3.583 L 15.084 3.862 Z M 15.134 5.521 L 14.595 6.364 C 14.925 6.575 15.197 6.865 15.385 7.209 L 16.262 6.728 L 17.139 6.248 C 16.79 5.61 16.286 5.07 15.673 4.679 L 15.134 5.521 Z M 16.262 6.728 L 15.385 7.209 C 15.573 7.552 15.672 7.938 15.672 8.329 L 16.672 8.329 L 17.672 8.329 C 17.672 7.602 17.489 6.886 17.139 6.248 L 16.262 6.728 Z M 16.672 8.329 L 15.672 8.329 C 15.672 8.721 15.573 9.106 15.385 9.45 L 16.262 9.93 L 17.139 10.41 C 17.489 9.772 17.672 9.057 17.672 8.329 L 16.672 8.329 Z M 16.262 9.93 L 15.385 9.45 C 15.197 9.794 14.925 10.084 14.595 10.295 L 15.134 11.138 L 15.673 11.98 C 16.286 11.588 16.79 11.049 17.139 10.41 L 16.262 9.93 Z M 15.134 11.138 L 14.158 11.356 C 14.244 11.74 14.232 12.139 14.123 12.516 L 15.083 12.794 L 16.044 13.072 C 16.247 12.372 16.27 11.631 16.11 10.919 L 15.134 11.138 Z M 15.083 12.794 L 14.123 12.516 C 14.013 12.893 13.811 13.237 13.533 13.515 L 14.241 14.221 L 14.949 14.928 C 15.464 14.411 15.841 13.773 16.044 13.072 L 15.083 12.794 Z M 14.241 14.221 L 13.533 13.515 C 13.256 13.793 12.912 13.997 12.535 14.107 L 12.815 15.067 L 13.096 16.027 C 13.796 15.822 14.433 15.444 14.949 14.928 L 14.241 14.221 Z M 12.815 15.067 L 12.535 14.107 C 12.158 14.217 11.759 14.23 11.376 14.145 L 11.159 15.121 L 10.942 16.097 C 11.655 16.255 12.395 16.231 13.096 16.027 L 12.815 15.067 Z M 11.159 15.121 L 10.315 14.584 C 10.105 14.916 9.814 15.188 9.47 15.377 L 9.951 16.254 L 10.432 17.13 C 11.071 16.779 11.612 16.273 12.003 15.658 L 11.159 15.121 Z M 9.951 16.254 L 9.47 15.377 C 9.125 15.566 8.739 15.665 8.347 15.665 L 8.347 16.665 L 8.347 17.665 C 9.076 17.665 9.793 17.481 10.432 17.13 L 9.951 16.254 Z M 8.347 16.665 L 8.347 15.665 C 7.954 15.665 7.568 15.566 7.224 15.377 L 6.742 16.254 L 6.261 17.13 C 6.9 17.481 7.618 17.665 8.347 17.665 L 8.347 16.665 Z M 6.742 16.254 L 7.224 15.377 C 6.879 15.188 6.589 14.916 6.378 14.584 L 5.534 15.121 L 4.69 15.658 C 5.082 16.273 5.622 16.779 6.261 17.13 L 6.742 16.254 Z M 5.534 15.121 L 5.315 14.145 C 4.932 14.231 4.533 14.219 4.156 14.11 L 3.878 15.07 L 3.599 16.031 C 4.3 16.234 5.041 16.256 5.753 16.097 L 5.534 15.121 Z M 3.878 15.07 L 4.156 14.11 C 3.778 14 3.435 13.798 3.157 13.52 L 2.45 14.228 L 1.744 14.936 C 2.26 15.451 2.899 15.828 3.599 16.031 L 3.878 15.07 Z M 2.45 14.228 L 3.157 13.52 C 2.879 13.243 2.675 12.899 2.565 12.522 L 1.605 12.802 L 0.645 13.083 C 0.85 13.783 1.228 14.42 1.744 14.936 L 2.45 14.228 Z M 1.605 12.802 L 2.565 12.522 C 2.455 12.145 2.442 11.746 2.527 11.363 L 1.551 11.146 L 0.575 10.929 C 0.416 11.642 0.441 12.382 0.645 13.083 L 1.605 12.802 Z M 1.551 11.146 L 2.086 10.301 C 1.753 10.091 1.479 9.799 1.289 9.455 L 0.413 9.937 L -0.463 10.419 C -0.11 11.06 0.398 11.6 1.016 11.991 L 1.551 11.146 Z M 0.413 9.937 L 1.289 9.455 C 1.1 9.11 1 8.723 1 8.329 L 0 8.329 L -1 8.329 C -1 9.06 -0.815 9.779 -0.463 10.419 L 0.413 9.937 Z M 0 8.329 L 1 8.329 C 1 7.936 1.1 7.549 1.289 7.204 L 0.413 6.722 L -0.463 6.239 C -0.815 6.88 -1 7.599 -1 8.329 L 0 8.329 Z M 0.413 6.722 L 1.289 7.204 C 1.479 6.859 1.753 6.568 2.086 6.358 L 1.551 5.513 L 1.016 4.668 C 0.398 5.058 -0.11 5.599 -0.463 6.239 L 0.413 6.722 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(128,128,128)",
      flexShrink: 0
    }
  }, "Abu Dhabi, UAE \u2022 Bridal & Arabic Glam Specialist"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 12,
      backgroundColor: "rgb(255,245,245)",
      boxShadow: "inset 0 0 0 1px rgb(252,232,230)",
      display: "flex",
      flexDirection: "row",
      padding: "10px 16px 10px 16px",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      height: 14,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 11.668,
    height: 11.125,
    viewBox: "0 0 11.668 11.125",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.166,
      top: 1.166,
      width: 11.668,
      height: 11.125,
      color: "rgb(255,193,7)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.557 0.172 L 4.751 -0.227 L 4.75 -0.226 L 5.557 0.172 Z M 5.834 0 L 5.834 -0.9 L 5.834 0 Z M 6.111 0.172 L 6.918 -0.226 L 6.918 -0.227 L 6.111 0.172 Z M 7.459 2.901 L 6.652 3.3 L 6.652 3.3 L 7.459 2.901 Z M 8.389 3.578 L 8.259 4.469 L 8.259 4.469 L 8.389 3.578 Z M 11.403 4.019 L 11.273 4.91 L 11.274 4.91 L 11.403 4.019 Z M 11.574 4.546 L 12.202 5.191 L 12.203 5.191 L 11.574 4.546 Z M 9.395 6.669 L 8.767 6.024 L 8.767 6.024 L 9.395 6.669 Z M 9.039 7.764 L 8.151 7.916 L 8.152 7.916 L 9.039 7.764 Z M 9.553 10.762 L 8.666 10.915 L 8.667 10.919 L 9.553 10.762 Z M 9.103 11.089 L 9.526 10.295 L 9.522 10.292 L 9.103 11.089 Z M 6.41 9.673 L 6.828 8.876 L 6.828 8.876 L 6.41 9.673 Z M 5.834 9.531 L 5.834 8.631 L 5.834 9.531 Z M 5.259 9.673 L 4.84 8.876 L 4.84 8.876 L 5.259 9.673 Z M 2.565 11.089 L 2.146 10.293 L 2.144 10.294 L 2.565 11.089 Z M 2.116 10.762 L 3.003 10.918 L 3.003 10.915 L 2.116 10.762 Z M 2.63 7.765 L 1.743 7.613 L 1.743 7.613 L 2.63 7.765 Z M 2.274 6.669 L 2.902 6.024 L 2.902 6.024 L 2.274 6.669 Z M 0.094 4.547 L 0.722 3.902 L 0.72 3.9 L 0.094 4.547 Z M 0.266 4.019 L 0.392 4.91 L 0.396 4.909 L 0.266 4.019 Z M 3.279 3.578 L 3.149 2.687 L 3.149 2.688 L 3.279 3.578 Z M 4.21 2.901 L 5.017 3.3 L 5.017 3.3 L 4.21 2.901 Z M 5.557 0.172 L 6.364 0.571 C 6.315 0.67 6.24 0.753 6.146 0.811 L 5.671 0.047 L 5.197 -0.718 C 5.005 -0.599 4.851 -0.429 4.751 -0.227 L 5.557 0.172 Z M 5.671 0.047 L 6.146 0.811 C 6.052 0.869 5.945 0.9 5.834 0.9 L 5.834 0 L 5.834 -0.9 C 5.609 -0.9 5.388 -0.837 5.197 -0.718 L 5.671 0.047 Z M 5.834 0 L 5.834 0.9 C 5.724 0.9 5.616 0.869 5.523 0.811 L 5.997 0.047 L 6.472 -0.718 C 6.281 -0.837 6.06 -0.9 5.834 -0.9 L 5.834 0 Z M 5.997 0.047 L 5.523 0.811 C 5.429 0.753 5.354 0.67 5.305 0.571 L 6.111 0.172 L 6.918 -0.227 C 6.818 -0.429 6.664 -0.599 6.472 -0.718 L 5.997 0.047 Z M 6.111 0.172 L 5.304 0.57 L 6.652 3.3 L 7.459 2.901 L 8.266 2.503 L 6.918 -0.226 L 6.111 0.172 Z M 7.459 2.901 L 6.652 3.3 C 6.805 3.61 7.032 3.879 7.311 4.082 L 7.841 3.354 L 8.37 2.627 C 8.326 2.594 8.29 2.552 8.266 2.503 L 7.459 2.901 Z M 7.841 3.354 L 7.311 4.082 C 7.591 4.286 7.916 4.418 8.259 4.469 L 8.389 3.578 L 8.52 2.688 C 8.466 2.68 8.414 2.659 8.37 2.627 L 7.841 3.354 Z M 8.389 3.578 L 8.259 4.469 L 11.273 4.91 L 11.403 4.019 L 11.533 3.129 L 8.52 2.688 L 8.389 3.578 Z M 11.403 4.019 L 11.274 4.91 C 11.165 4.894 11.062 4.848 10.978 4.777 L 11.558 4.089 L 12.138 3.4 C 11.965 3.255 11.755 3.161 11.532 3.128 L 11.403 4.019 Z M 11.558 4.089 L 10.978 4.777 C 10.894 4.706 10.831 4.613 10.797 4.508 L 11.653 4.229 L 12.508 3.951 C 12.439 3.737 12.31 3.546 12.138 3.4 L 11.558 4.089 Z M 11.653 4.229 L 10.797 4.508 C 10.763 4.403 10.759 4.291 10.785 4.184 L 11.659 4.399 L 12.533 4.615 C 12.587 4.396 12.578 4.166 12.508 3.951 L 11.653 4.229 Z M 11.659 4.399 L 10.785 4.184 C 10.811 4.077 10.867 3.979 10.946 3.902 L 11.574 4.546 L 12.203 5.191 C 12.364 5.033 12.479 4.834 12.533 4.615 L 11.659 4.399 Z M 11.574 4.546 L 10.947 3.902 L 8.767 6.024 L 9.395 6.669 L 10.023 7.313 L 12.202 5.191 L 11.574 4.546 Z M 9.395 6.669 L 8.767 6.024 C 8.519 6.266 8.333 6.564 8.226 6.894 L 9.082 7.172 L 9.938 7.451 C 9.955 7.399 9.984 7.351 10.023 7.313 L 9.395 6.669 Z M 9.082 7.172 L 8.226 6.894 C 8.119 7.223 8.093 7.574 8.151 7.916 L 9.039 7.764 L 9.926 7.613 C 9.917 7.558 9.921 7.503 9.938 7.451 L 9.082 7.172 Z M 9.039 7.764 L 8.152 7.916 L 8.666 10.915 L 9.553 10.762 L 10.44 10.61 L 9.926 7.612 L 9.039 7.764 Z M 9.553 10.762 L 8.667 10.919 C 8.648 10.81 8.659 10.698 8.701 10.595 L 9.535 10.932 L 10.37 11.269 C 10.455 11.059 10.479 10.829 10.439 10.606 L 9.553 10.762 Z M 9.535 10.932 L 8.701 10.595 C 8.742 10.492 8.812 10.403 8.901 10.338 L 9.43 11.066 L 9.959 11.795 C 10.143 11.661 10.285 11.479 10.37 11.269 L 9.535 10.932 Z M 9.43 11.066 L 8.901 10.338 C 8.991 10.273 9.097 10.234 9.208 10.227 L 9.27 11.125 L 9.333 12.022 C 9.559 12.007 9.776 11.928 9.959 11.795 L 9.43 11.066 Z M 9.27 11.125 L 9.208 10.227 C 9.318 10.219 9.429 10.243 9.526 10.295 L 9.103 11.089 L 8.68 11.884 C 8.881 11.99 9.106 12.038 9.333 12.022 L 9.27 11.125 Z M 9.103 11.089 L 9.522 10.292 L 6.828 8.876 L 6.41 9.673 L 5.991 10.469 L 8.685 11.886 L 9.103 11.089 Z M 6.41 9.673 L 6.828 8.876 C 6.521 8.715 6.18 8.631 5.834 8.631 L 5.834 9.531 L 5.834 10.431 C 5.889 10.431 5.943 10.444 5.991 10.47 L 6.41 9.673 Z M 5.834 9.531 L 5.834 8.631 C 5.488 8.631 5.147 8.715 4.84 8.876 L 5.259 9.673 L 5.677 10.47 C 5.725 10.444 5.779 10.431 5.834 10.431 L 5.834 9.531 Z M 5.259 9.673 L 4.84 8.876 L 2.146 10.293 L 2.565 11.089 L 2.984 11.886 L 5.678 10.469 L 5.259 9.673 Z M 2.565 11.089 L 2.144 10.294 C 2.242 10.242 2.352 10.219 2.463 10.227 L 2.399 11.124 L 2.335 12.022 C 2.561 12.038 2.786 11.99 2.986 11.885 L 2.565 11.089 Z M 2.399 11.124 L 2.463 10.227 C 2.573 10.234 2.679 10.273 2.768 10.338 L 2.239 11.066 L 1.71 11.794 C 1.893 11.927 2.109 12.006 2.335 12.022 L 2.399 11.124 Z M 2.239 11.066 L 2.768 10.338 C 2.858 10.403 2.927 10.492 2.969 10.594 L 2.134 10.932 L 1.3 11.269 C 1.385 11.479 1.527 11.661 1.71 11.794 L 2.239 11.066 Z M 2.134 10.932 L 2.969 10.594 C 3.01 10.697 3.022 10.809 3.003 10.918 L 2.116 10.762 L 1.23 10.607 C 1.191 10.83 1.215 11.059 1.3 11.269 L 2.134 10.932 Z M 2.116 10.762 L 3.003 10.915 L 3.517 7.917 L 2.63 7.765 L 1.743 7.613 L 1.229 10.61 L 2.116 10.762 Z M 2.63 7.765 L 3.517 7.917 C 3.576 7.575 3.55 7.224 3.443 6.894 L 2.587 7.173 L 1.731 7.451 C 1.748 7.503 1.752 7.559 1.743 7.613 L 2.63 7.765 Z M 2.587 7.173 L 3.443 6.894 C 3.336 6.565 3.15 6.266 2.902 6.024 L 2.274 6.669 L 1.646 7.313 C 1.685 7.352 1.714 7.399 1.731 7.451 L 2.587 7.173 Z M 2.274 6.669 L 2.902 6.024 L 0.722 3.902 L 0.094 4.547 L -0.533 5.192 L 1.646 7.313 L 2.274 6.669 Z M 0.094 4.547 L 0.72 3.9 C 0.799 3.977 0.856 4.074 0.882 4.182 L 0.009 4.399 L -0.864 4.617 C -0.809 4.837 -0.694 5.037 -0.531 5.194 L 0.094 4.547 Z M 0.009 4.399 L 0.882 4.182 C 0.909 4.289 0.905 4.402 0.871 4.507 L 0.015 4.229 L -0.841 3.951 C -0.911 4.167 -0.919 4.398 -0.864 4.617 L 0.009 4.399 Z M 0.015 4.229 L 0.871 4.507 C 0.837 4.612 0.774 4.706 0.689 4.777 L 0.11 4.088 L -0.469 3.399 C -0.642 3.545 -0.771 3.736 -0.841 3.951 L 0.015 4.229 Z M 0.11 4.088 L 0.689 4.777 C 0.604 4.848 0.501 4.894 0.392 4.91 L 0.266 4.019 L 0.14 3.127 C -0.084 3.159 -0.295 3.253 -0.469 3.399 L 0.11 4.088 Z M 0.266 4.019 L 0.396 4.909 L 3.409 4.469 L 3.279 3.578 L 3.149 2.688 L 0.136 3.128 L 0.266 4.019 Z M 3.279 3.578 L 3.408 4.469 C 3.751 4.419 4.077 4.286 4.357 4.083 L 3.828 3.355 L 3.299 2.627 C 3.255 2.659 3.203 2.68 3.149 2.687 L 3.279 3.578 Z M 3.828 3.355 L 4.357 4.083 C 4.637 3.879 4.864 3.611 5.017 3.3 L 4.21 2.901 L 3.403 2.503 C 3.379 2.552 3.343 2.594 3.299 2.627 L 3.828 3.355 Z M 4.21 2.901 L 5.017 3.3 L 6.364 0.57 L 5.557 0.172 L 4.75 -0.226 L 3.403 2.503 L 4.21 2.901 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--text-primary)",
      flexShrink: 0
    }
  }, "4.9"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--text-tertiary)",
      flexShrink: 0
    }
  }, "Rating")), /*#__PURE__*/React.createElement("svg", {
    width: 20,
    height: 1,
    viewBox: "0 -0.500 20 1",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,1,-1,0,117.500,10)",
      transformOrigin: "0 0",
      width: 20,
      height: 1,
      color: "rgb(242,211,208)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 -0.5 L 0 0 L 20 0 L 20 -0.5 L 20 -1 L 0 -1 L 0 -0.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      height: 14,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 11.668,
    height: 10.500,
    viewBox: "0 0 11.668 10.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.166,
      top: 1.75,
      width: 11.668,
      height: 10.5,
      color: "var(--text-secondary)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7.267 10.5 C 7.267 10.997 7.67 11.4 8.167 11.4 C 8.664 11.4 9.067 10.997 9.067 10.5 L 8.167 10.5 L 7.267 10.5 Z M 8.167 9.333 L 9.067 9.333 L 8.167 9.333 Z M 5.834 7 L 5.834 6.1 L 5.834 7 Z M 2.334 7 L 2.334 6.1 L 2.334 7 Z M 0 9.333 L -0.9 9.333 L 0 9.333 Z M -0.9 10.5 C -0.9 10.997 -0.497 11.4 0 11.4 C 0.497 11.4 0.9 10.997 0.9 10.5 L 0 10.5 L -0.9 10.5 Z M 8.393 -0.797 C 7.912 -0.921 7.421 -0.632 7.296 -0.151 C 7.171 0.33 7.46 0.821 7.941 0.946 L 8.167 0.075 L 8.393 -0.797 Z M 7.941 3.721 C 7.46 3.845 7.171 4.337 7.296 4.818 C 7.421 5.299 7.912 5.588 8.393 5.463 L 8.167 4.592 L 7.941 3.721 Z M 10.768 10.5 C 10.768 10.997 11.171 11.4 11.668 11.4 C 12.165 11.4 12.568 10.997 12.568 10.5 L 11.668 10.5 L 10.768 10.5 Z M 11.668 9.333 L 12.568 9.333 L 12.568 9.333 L 11.668 9.333 Z M 10.142 6.204 C 9.661 6.08 9.17 6.37 9.046 6.851 C 8.922 7.332 9.211 7.823 9.692 7.947 L 9.917 7.076 L 10.142 6.204 Z M 8.167 10.5 L 9.067 10.5 L 9.067 9.333 L 8.167 9.333 L 7.267 9.333 L 7.267 10.5 L 8.167 10.5 Z M 8.167 9.333 L 9.067 9.333 C 9.067 8.476 8.727 7.653 8.12 7.047 L 7.484 7.683 L 6.847 8.32 C 7.116 8.589 7.267 8.953 7.267 9.333 L 8.167 9.333 Z M 7.484 7.683 L 8.12 7.047 C 7.514 6.441 6.691 6.1 5.834 6.1 L 5.834 7 L 5.834 7.9 C 6.214 7.9 6.579 8.051 6.847 8.32 L 7.484 7.683 Z M 5.834 7 L 5.834 6.1 L 2.334 6.1 L 2.334 7 L 2.334 7.9 L 5.834 7.9 L 5.834 7 Z M 2.334 7 L 2.334 6.1 C 1.476 6.1 0.654 6.441 0.047 7.047 L 0.683 7.683 L 1.32 8.32 C 1.589 8.051 1.953 7.9 2.334 7.9 L 2.334 7 Z M 0.683 7.683 L 0.047 7.047 C -0.559 7.653 -0.9 8.476 -0.9 9.333 L 0 9.333 L 0.9 9.333 C 0.9 8.953 1.051 8.589 1.32 8.32 L 0.683 7.683 Z M 0 9.333 L -0.9 9.333 L -0.9 10.5 L 0 10.5 L 0.9 10.5 L 0.9 9.333 L 0 9.333 Z M 8.167 0.075 L 7.941 0.946 C 8.249 1.026 8.521 1.205 8.715 1.456 L 9.427 0.905 L 10.139 0.355 C 9.701 -0.212 9.087 -0.617 8.393 -0.797 L 8.167 0.075 Z M 9.427 0.905 L 8.715 1.456 C 8.91 1.707 9.015 2.016 9.015 2.333 L 9.915 2.333 L 10.815 2.333 C 10.815 1.617 10.577 0.921 10.139 0.355 L 9.427 0.905 Z M 9.915 2.333 L 9.015 2.333 C 9.015 2.651 8.91 2.959 8.715 3.21 L 9.427 3.761 L 10.139 4.312 C 10.577 3.746 10.815 3.05 10.815 2.333 L 9.915 2.333 Z M 9.427 3.761 L 8.715 3.21 C 8.521 3.462 8.249 3.641 7.941 3.721 L 8.167 4.592 L 8.393 5.463 C 9.087 5.283 9.701 4.879 10.139 4.312 L 9.427 3.761 Z M 11.668 10.5 L 12.568 10.5 L 12.568 9.333 L 11.668 9.333 L 10.768 9.333 L 10.768 10.5 L 11.668 10.5 Z M 11.668 9.333 L 12.568 9.333 C 12.567 8.616 12.329 7.92 11.89 7.354 L 11.178 7.905 L 10.467 8.457 C 10.662 8.708 10.767 9.016 10.768 9.334 L 11.668 9.333 Z M 11.178 7.905 L 11.89 7.354 C 11.451 6.788 10.836 6.383 10.142 6.204 L 9.917 7.076 L 9.692 7.947 C 10 8.027 10.272 8.206 10.467 8.457 L 11.178 7.905 Z M 6.417 2.333 L 5.517 2.333 C 5.517 3.125 4.875 3.767 4.084 3.767 L 4.084 4.667 L 4.084 5.567 C 5.869 5.567 7.317 4.119 7.317 2.333 L 6.417 2.333 Z M 4.084 4.667 L 4.084 3.767 C 3.292 3.767 2.65 3.125 2.65 2.333 L 1.75 2.333 L 0.85 2.333 C 0.85 4.119 2.298 5.567 4.084 5.567 L 4.084 4.667 Z M 1.75 2.333 L 2.65 2.333 C 2.65 1.542 3.292 0.9 4.084 0.9 L 4.084 0 L 4.084 -0.9 C 2.298 -0.9 0.85 0.548 0.85 2.333 L 1.75 2.333 Z M 4.084 0 L 4.084 0.9 C 4.875 0.9 5.517 1.542 5.517 2.333 L 6.417 2.333 L 7.317 2.333 C 7.317 0.548 5.869 -0.9 4.084 -0.9 L 4.084 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--text-primary)",
      flexShrink: 0
    }
  }, "8.2k"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--text-tertiary)",
      flexShrink: 0
    }
  }, "Followers")), /*#__PURE__*/React.createElement("svg", {
    width: 20,
    height: 1,
    viewBox: "0 -0.500 20 1",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,1,-1,0,262.500,10)",
      transformOrigin: "0 0",
      width: 20,
      height: 1,
      color: "rgb(242,211,208)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 -0.5 L 0 0 L 20 0 L 20 -0.5 L 20 -1 L 0 -1 L 0 -0.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      height: 14,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 11.667,
    height: 11.667,
    viewBox: "0 0 11.667 11.667",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.168,
      top: 1.165,
      width: 11.667,
      height: 11.667,
      color: "rgb(226,126,114)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12.431 4.489 C 12.332 4.002 11.857 3.688 11.37 3.787 C 10.882 3.886 10.568 4.361 10.667 4.848 L 11.549 4.669 L 12.431 4.489 Z M 8.299 1.56 C 8.729 1.809 9.28 1.661 9.528 1.231 C 9.777 0.8 9.629 0.25 9.198 0.001 L 8.749 0.781 L 8.299 1.56 Z M 4.719 4.615 C 4.367 4.264 3.797 4.264 3.446 4.615 C 3.094 4.967 3.094 5.537 3.446 5.888 L 4.082 5.252 L 4.719 4.615 Z M 5.832 7.002 L 5.196 7.638 L 5.832 8.275 L 6.469 7.638 L 5.832 7.002 Z M 12.302 1.805 C 12.653 1.453 12.653 0.883 12.302 0.532 C 11.95 0.181 11.381 0.181 11.029 0.532 L 11.666 1.168 L 12.302 1.805 Z M 11.549 4.669 L 10.667 4.848 C 10.893 5.954 10.732 7.104 10.212 8.105 L 11.011 8.52 L 11.81 8.934 C 12.519 7.567 12.739 5.998 12.431 4.489 L 11.549 4.669 Z M 11.011 8.52 L 10.212 8.105 C 9.693 9.107 8.845 9.9 7.812 10.353 L 8.173 11.177 L 8.534 12.002 C 9.944 11.384 11.101 10.301 11.81 8.934 L 11.011 8.52 Z M 8.173 11.177 L 7.812 10.353 C 6.778 10.805 5.62 10.89 4.532 10.592 L 4.294 11.46 L 4.057 12.328 C 5.543 12.734 7.123 12.619 8.534 12.002 L 8.173 11.177 Z M 4.294 11.46 L 4.532 10.592 C 3.443 10.294 2.49 9.632 1.83 8.717 L 1.1 9.243 L 0.37 9.769 C 1.27 11.019 2.571 11.922 4.057 12.328 L 4.294 11.46 Z M 1.1 9.243 L 1.83 8.717 C 1.171 7.801 0.845 6.687 0.908 5.56 L 0.009 5.511 L -0.89 5.461 C -0.975 6.999 -0.53 8.519 0.37 9.769 L 1.1 9.243 Z M 0.009 5.511 L 0.908 5.56 C 0.97 4.434 1.417 3.362 2.173 2.525 L 1.506 1.922 L 0.838 1.318 C -0.195 2.461 -0.804 3.923 -0.89 5.461 L 0.009 5.511 Z M 1.506 1.922 L 2.173 2.525 C 2.93 1.688 3.951 1.136 5.066 0.96 L 4.926 0.071 L 4.785 -0.818 C 3.264 -0.578 1.871 0.176 0.838 1.318 L 1.506 1.922 Z M 4.926 0.071 L 5.066 0.96 C 6.18 0.785 7.321 0.996 8.299 1.56 L 8.749 0.781 L 9.198 0.001 C 7.864 -0.769 6.307 -1.058 4.785 -0.818 L 4.926 0.071 Z M 4.082 5.252 L 3.446 5.888 L 5.196 7.638 L 5.832 7.002 L 6.469 6.365 L 4.719 4.615 L 4.082 5.252 Z M 5.832 7.002 L 6.469 7.638 L 12.302 1.805 L 11.666 1.168 L 11.029 0.532 L 5.196 6.365 L 5.832 7.002 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--text-primary)",
      flexShrink: 0
    }
  }, "220"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--text-tertiary)",
      flexShrink: 0
    }
  }, "Products")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 697,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      gap: 12,
      padding: "2px 8px 12px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-sm) * 1px)",
      paddingTop: "calc(var(--spacing-3xs) * 1px)",
      paddingRight: "calc(var(--spacing-sm) * 1px)",
      paddingBottom: "calc(var(--spacing-md) * 1px)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 390,
      overflow: "hidden",
      borderTop: "1px solid var(--border-muted)",
      borderRight: "1px solid var(--border-muted)",
      borderBottom: "1px solid var(--border-muted)",
      borderLeft: "1px solid var(--border-muted)",
      display: "flex",
      flexDirection: "row",
      padding: "0px 16px 0px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 39,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "12px 0px 12px 0px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--text-primary)",
      flexShrink: 0
    }
  }, "Products"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 60,
      height: 2,
      backgroundColor: "var(--icon-brand)",
      flexShrink: 0
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 38,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "12px 0px 12px 0px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--text-tertiary)",
      flexShrink: 0
    }
  }, "Collections"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 60,
      height: 2,
      backgroundColor: "rgba(0,0,0,0)",
      flexShrink: 0
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 38,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "12px 0px 12px 0px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--text-tertiary)",
      flexShrink: 0
    }
  }, "Reviews"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 60,
      height: 2,
      backgroundColor: "rgba(0,0,0,0)",
      flexShrink: 0
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 38,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "12px 0px 12px 0px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--text-tertiary)",
      flexShrink: 0
    }
  }, "Looks"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 60,
      height: 2,
      backgroundColor: "rgba(0,0,0,0)",
      flexShrink: 0
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 644,
      overflow: "hidden",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 208,
      height: 322,
      borderRadius: 16,
      backgroundColor: "var(--bg-default)",
      boxShadow: "inset 0 0 0 1px rgb(235,235,232)",
      display: "flex",
      flexDirection: "column",
      gap: 12,
      padding: "12px 12px 12px 12px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 12,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-afa5a82ad11f227c",
    style: {
      position: "relative",
      height: 170,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 8,
      top: 8,
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "rgb(226,126,114)",
      display: "flex",
      flexDirection: "row",
      padding: "4px 8px 4px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 10,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(255,255,255)",
      textTransform: "uppercase",
      flexShrink: 0
    }
  }, "20% OFF")), /*#__PURE__*/React.createElement(WislistIcon, {
    style: {
      position: "absolute",
      left: 140,
      top: 0,
      width: 44,
      height: 44
    },
    property1: "unclick"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      lineHeight: "100%",
      color: "rgb(31,30,29)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Velvet Matte Lipstick"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      height: 12,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 12,
      overflow: "hidden",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 10.001,
    height: 9.536,
    viewBox: "0 0 10.001 9.536",
    fill: "none",
    style: {
      position: "absolute",
      left: 1,
      top: 1,
      width: 10.001,
      height: 9.536,
      color: "rgb(212,175,55)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.763 0.147 L 3.867 -0.296 L 3.867 -0.295 L 4.763 0.147 Z M 5.001 0 L 5.001 -1 L 5.001 0 Z M 5.238 0.147 L 6.135 -0.295 L 6.135 -0.296 L 5.238 0.147 Z M 6.393 2.487 L 5.497 2.93 L 5.497 2.93 L 6.393 2.487 Z M 7.191 3.067 L 7.046 4.056 L 7.046 4.056 L 7.191 3.067 Z M 9.774 3.445 L 9.629 4.434 L 9.631 4.435 L 9.774 3.445 Z M 9.921 3.897 L 10.619 4.613 L 10.619 4.613 L 9.921 3.897 Z M 8.053 5.716 L 7.355 5 L 7.355 5 L 8.053 5.716 Z M 7.747 6.655 L 6.762 6.823 L 6.762 6.824 L 7.747 6.655 Z M 8.188 9.225 L 7.203 9.394 L 7.204 9.399 L 8.188 9.225 Z M 7.803 9.505 L 8.273 8.622 L 8.268 8.62 L 7.803 9.505 Z M 5.494 8.291 L 5.959 7.406 L 5.959 7.406 L 5.494 8.291 Z M 5.001 8.169 L 5.001 7.169 L 5.001 8.169 Z M 4.507 8.291 L 4.043 7.406 L 4.042 7.406 L 4.507 8.291 Z M 2.199 9.505 L 1.733 8.62 L 1.731 8.621 L 2.199 9.505 Z M 1.814 9.225 L 2.799 9.398 L 2.8 9.394 L 1.814 9.225 Z M 2.254 6.655 L 1.269 6.486 L 1.269 6.486 L 2.254 6.655 Z M 1.949 5.716 L 2.647 5 L 2.646 4.999 L 1.949 5.716 Z M 0.081 3.897 L 0.778 3.181 L 0.776 3.178 L 0.081 3.897 Z M 0.228 3.444 L 0.368 4.435 L 0.373 4.434 L 0.228 3.444 Z M 2.81 3.067 L 2.666 2.077 L 2.666 2.077 L 2.81 3.067 Z M 3.609 2.487 L 4.505 2.93 L 4.506 2.929 L 3.609 2.487 Z M 4.763 0.147 L 5.66 0.591 C 5.599 0.714 5.505 0.817 5.389 0.889 L 4.861 0.04 L 4.334 -0.81 C 4.133 -0.685 3.972 -0.507 3.867 -0.296 L 4.763 0.147 Z M 4.861 0.04 L 5.389 0.889 C 5.272 0.962 5.138 1 5.001 1 L 5.001 0 L 5.001 -1 C 4.765 -1 4.534 -0.934 4.334 -0.81 L 4.861 0.04 Z M 5.001 0 L 5.001 1 C 4.864 1 4.73 0.962 4.613 0.889 L 5.141 0.04 L 5.668 -0.81 C 5.468 -0.934 5.237 -1 5.001 -1 L 5.001 0 Z M 5.141 0.04 L 4.613 0.889 C 4.497 0.817 4.403 0.714 4.342 0.591 L 5.238 0.147 L 6.135 -0.296 C 6.03 -0.507 5.868 -0.685 5.668 -0.81 L 5.141 0.04 Z M 5.238 0.147 L 4.342 0.59 L 5.497 2.93 L 6.393 2.487 L 7.29 2.044 L 6.135 -0.295 L 5.238 0.147 Z M 6.393 2.487 L 5.497 2.93 C 5.645 3.229 5.863 3.488 6.133 3.684 L 6.721 2.875 L 7.309 2.066 C 7.301 2.061 7.294 2.053 7.29 2.044 L 6.393 2.487 Z M 6.721 2.875 L 6.133 3.684 C 6.402 3.88 6.716 4.008 7.046 4.056 L 7.191 3.067 L 7.336 2.078 C 7.326 2.076 7.317 2.072 7.309 2.066 L 6.721 2.875 Z M 7.191 3.067 L 7.046 4.056 L 9.629 4.434 L 9.774 3.445 L 9.919 2.455 L 7.336 2.077 L 7.191 3.067 Z M 9.774 3.445 L 9.631 4.435 C 9.495 4.415 9.367 4.358 9.262 4.269 L 9.907 3.505 L 10.551 2.74 C 10.37 2.588 10.151 2.489 9.917 2.455 L 9.774 3.445 Z M 9.907 3.505 L 9.262 4.269 C 9.157 4.181 9.079 4.065 9.037 3.935 L 9.988 3.625 L 10.939 3.316 C 10.866 3.091 10.731 2.892 10.551 2.74 L 9.907 3.505 Z M 9.988 3.625 L 9.037 3.935 C 8.995 3.804 8.989 3.664 9.022 3.531 L 9.993 3.771 L 10.964 4.01 C 11.021 3.781 11.012 3.54 10.939 3.316 L 9.988 3.625 Z M 9.993 3.771 L 9.022 3.531 C 9.055 3.398 9.125 3.277 9.223 3.181 L 9.921 3.897 L 10.619 4.613 C 10.788 4.448 10.908 4.239 10.964 4.01 L 9.993 3.771 Z M 9.921 3.897 L 9.223 3.181 L 7.355 5 L 8.053 5.716 L 8.751 6.432 L 10.619 4.613 L 9.921 3.897 Z M 8.053 5.716 L 7.355 5 C 7.116 5.233 6.937 5.521 6.833 5.838 L 7.784 6.148 L 8.735 6.457 C 8.738 6.448 8.744 6.439 8.751 6.432 L 8.053 5.716 Z M 7.784 6.148 L 6.833 5.838 C 6.73 6.156 6.705 6.494 6.762 6.823 L 7.747 6.655 L 8.733 6.487 C 8.731 6.477 8.732 6.467 8.735 6.457 L 7.784 6.148 Z M 7.747 6.655 L 6.762 6.824 L 7.203 9.394 L 8.188 9.225 L 9.174 9.056 L 8.733 6.486 L 7.747 6.655 Z M 8.188 9.225 L 7.204 9.399 C 7.18 9.263 7.194 9.123 7.246 8.996 L 8.173 9.37 L 9.1 9.745 C 9.189 9.525 9.214 9.285 9.173 9.051 L 8.188 9.225 Z M 8.173 9.37 L 7.246 8.996 C 7.298 8.868 7.384 8.757 7.495 8.676 L 8.083 9.485 L 8.671 10.295 C 8.863 10.155 9.012 9.965 9.1 9.745 L 8.173 9.37 Z M 8.083 9.485 L 7.495 8.676 C 7.607 8.595 7.739 8.547 7.876 8.538 L 7.946 9.535 L 8.015 10.533 C 8.252 10.517 8.479 10.434 8.671 10.295 L 8.083 9.485 Z M 7.946 9.535 L 7.876 8.538 C 8.014 8.528 8.151 8.558 8.273 8.622 L 7.803 9.505 L 7.333 10.388 C 7.542 10.499 7.779 10.549 8.015 10.533 L 7.946 9.535 Z M 7.803 9.505 L 8.268 8.62 L 5.959 7.406 L 5.494 8.291 L 5.029 9.176 L 7.338 10.39 L 7.803 9.505 Z M 5.494 8.291 L 5.959 7.406 C 5.663 7.25 5.334 7.169 5.001 7.169 L 5.001 8.169 L 5.001 9.169 C 5.011 9.169 5.02 9.172 5.029 9.176 L 5.494 8.291 Z M 5.001 8.169 L 5.001 7.169 C 4.667 7.169 4.338 7.25 4.043 7.406 L 4.507 8.291 L 4.972 9.176 C 4.981 9.172 4.991 9.169 5.001 9.169 L 5.001 8.169 Z M 4.507 8.291 L 4.042 7.406 L 1.733 8.62 L 2.199 9.505 L 2.664 10.39 L 4.973 9.176 L 4.507 8.291 Z M 2.199 9.505 L 1.731 8.621 C 1.853 8.557 1.99 8.528 2.127 8.538 L 2.056 9.535 L 1.985 10.533 C 2.221 10.549 2.458 10.5 2.667 10.389 L 2.199 9.505 Z M 2.056 9.535 L 2.127 8.538 C 2.264 8.547 2.396 8.595 2.507 8.676 L 1.919 9.485 L 1.331 10.294 C 1.522 10.433 1.749 10.516 1.985 10.533 L 2.056 9.535 Z M 1.919 9.485 L 2.507 8.676 C 2.618 8.757 2.705 8.868 2.756 8.995 L 1.829 9.37 L 0.902 9.745 C 0.991 9.964 1.139 10.155 1.331 10.294 L 1.919 9.485 Z M 1.829 9.37 L 2.756 8.995 C 2.808 9.123 2.823 9.262 2.799 9.398 L 1.814 9.225 L 0.829 9.052 C 0.788 9.285 0.813 9.525 0.902 9.745 L 1.829 9.37 Z M 1.814 9.225 L 2.8 9.394 L 3.24 6.824 L 2.254 6.655 L 1.269 6.486 L 0.828 9.056 L 1.814 9.225 Z M 2.254 6.655 L 3.24 6.825 C 3.297 6.495 3.272 6.157 3.169 5.839 L 2.218 6.148 L 1.267 6.457 C 1.27 6.467 1.27 6.477 1.269 6.486 L 2.254 6.655 Z M 2.218 6.148 L 3.169 5.839 C 3.065 5.521 2.886 5.233 2.647 5 L 1.949 5.716 L 1.251 6.432 C 1.258 6.439 1.264 6.448 1.267 6.457 L 2.218 6.148 Z M 1.949 5.716 L 2.646 4.999 L 0.778 3.181 L 0.081 3.897 L -0.617 4.614 L 1.251 6.432 L 1.949 5.716 Z M 0.081 3.897 L 0.776 3.178 C 0.875 3.274 0.945 3.395 0.978 3.529 L 0.008 3.771 L -0.962 4.013 C -0.905 4.243 -0.784 4.452 -0.614 4.617 L 0.081 3.897 Z M 0.008 3.771 L 0.978 3.529 C 1.011 3.662 1.007 3.803 0.964 3.934 L 0.013 3.625 L -0.938 3.316 C -1.011 3.542 -1.02 3.783 -0.962 4.013 L 0.008 3.771 Z M 0.013 3.625 L 0.964 3.934 C 0.922 4.065 0.843 4.181 0.738 4.27 L 0.095 3.504 L -0.549 2.738 C -0.73 2.891 -0.865 3.091 -0.938 3.316 L 0.013 3.625 Z M 0.095 3.504 L 0.738 4.27 C 0.632 4.358 0.504 4.415 0.368 4.435 L 0.228 3.444 L 0.088 2.454 C -0.147 2.487 -0.367 2.586 -0.549 2.738 L 0.095 3.504 Z M 0.228 3.444 L 0.373 4.434 L 2.955 4.056 L 2.81 3.067 L 2.666 2.077 L 0.083 2.455 L 0.228 3.444 Z M 2.81 3.067 L 2.954 4.057 C 3.285 4.008 3.599 3.881 3.869 3.685 L 3.281 2.875 L 2.694 2.066 C 2.686 2.072 2.676 2.076 2.666 2.077 L 2.81 3.067 Z M 3.281 2.875 L 3.869 3.685 C 4.139 3.488 4.358 3.229 4.505 2.93 L 3.609 2.487 L 2.712 2.044 C 2.708 2.053 2.701 2.061 2.694 2.066 L 3.281 2.875 Z M 3.609 2.487 L 4.506 2.929 L 5.66 0.59 L 4.763 0.147 L 3.867 -0.295 L 2.712 2.044 L 3.609 2.487 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--text-primary)",
      flexShrink: 0
    }
  }, "4.9"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 300,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--text-secondary)",
      flexShrink: 0
    }
  }, "(1.2K)")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "baseline",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 15,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(31,30,29)",
      flexShrink: 0
    }
  }, "AED 145"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(107,102,97)",
      textDecoration: "line-through",
      flexShrink: 0
    }
  }, "AED 180"))), /*#__PURE__*/React.createElement(Button, {
    style: {
      position: "relative",
      height: 44,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "Add to Cart",
    type: "primary",
    size: "md",
    state: "default"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 216,
      top: 0,
      width: 208,
      height: 322,
      borderRadius: 16,
      backgroundColor: "var(--bg-default)",
      boxShadow: "inset 0 0 0 1px rgb(235,235,232)",
      display: "flex",
      flexDirection: "column",
      gap: 12,
      padding: "12px 12px 12px 12px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 12,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-b88e180d9c9a772e",
    style: {
      position: "relative",
      height: 170,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 8,
      top: 8,
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "rgb(243,161,149)",
      display: "flex",
      flexDirection: "row",
      padding: "4px 8px 4px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 10,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(255,255,255)",
      textTransform: "uppercase",
      flexShrink: 0
    }
  }, "AI Pick")), /*#__PURE__*/React.createElement(WislistIcon, {
    style: {
      position: "absolute",
      left: 140,
      top: 0,
      width: 44,
      height: 44
    },
    property1: "unclick"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      lineHeight: "100%",
      color: "rgb(31,30,29)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Luminous Foundation"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      height: 12,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 12,
      overflow: "hidden",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 10.001,
    height: 9.536,
    viewBox: "0 0 10.001 9.536",
    fill: "none",
    style: {
      position: "absolute",
      left: 1,
      top: 1,
      width: 10.001,
      height: 9.536,
      color: "rgb(212,175,55)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.763 0.147 L 3.867 -0.296 L 3.867 -0.295 L 4.763 0.147 Z M 5.001 0 L 5.001 -1 L 5.001 0 Z M 5.238 0.147 L 6.135 -0.295 L 6.135 -0.296 L 5.238 0.147 Z M 6.393 2.487 L 5.497 2.93 L 5.497 2.93 L 6.393 2.487 Z M 7.191 3.067 L 7.046 4.056 L 7.046 4.056 L 7.191 3.067 Z M 9.774 3.445 L 9.629 4.434 L 9.631 4.435 L 9.774 3.445 Z M 9.921 3.897 L 10.619 4.613 L 10.619 4.613 L 9.921 3.897 Z M 8.053 5.716 L 7.355 5 L 7.355 5 L 8.053 5.716 Z M 7.747 6.655 L 6.762 6.823 L 6.762 6.824 L 7.747 6.655 Z M 8.188 9.225 L 7.203 9.394 L 7.204 9.399 L 8.188 9.225 Z M 7.803 9.505 L 8.273 8.622 L 8.268 8.62 L 7.803 9.505 Z M 5.494 8.291 L 5.959 7.406 L 5.959 7.406 L 5.494 8.291 Z M 5.001 8.169 L 5.001 7.169 L 5.001 8.169 Z M 4.507 8.291 L 4.043 7.406 L 4.042 7.406 L 4.507 8.291 Z M 2.199 9.505 L 1.733 8.62 L 1.731 8.621 L 2.199 9.505 Z M 1.814 9.225 L 2.799 9.398 L 2.8 9.394 L 1.814 9.225 Z M 2.254 6.655 L 1.269 6.486 L 1.269 6.486 L 2.254 6.655 Z M 1.949 5.716 L 2.647 5 L 2.646 4.999 L 1.949 5.716 Z M 0.081 3.897 L 0.778 3.181 L 0.776 3.178 L 0.081 3.897 Z M 0.228 3.444 L 0.368 4.435 L 0.373 4.434 L 0.228 3.444 Z M 2.81 3.067 L 2.666 2.077 L 2.666 2.077 L 2.81 3.067 Z M 3.609 2.487 L 4.505 2.93 L 4.506 2.929 L 3.609 2.487 Z M 4.763 0.147 L 5.66 0.591 C 5.599 0.714 5.505 0.817 5.389 0.889 L 4.861 0.04 L 4.334 -0.81 C 4.133 -0.685 3.972 -0.507 3.867 -0.296 L 4.763 0.147 Z M 4.861 0.04 L 5.389 0.889 C 5.272 0.962 5.138 1 5.001 1 L 5.001 0 L 5.001 -1 C 4.765 -1 4.534 -0.934 4.334 -0.81 L 4.861 0.04 Z M 5.001 0 L 5.001 1 C 4.864 1 4.73 0.962 4.613 0.889 L 5.141 0.04 L 5.668 -0.81 C 5.468 -0.934 5.237 -1 5.001 -1 L 5.001 0 Z M 5.141 0.04 L 4.613 0.889 C 4.497 0.817 4.403 0.714 4.342 0.591 L 5.238 0.147 L 6.135 -0.296 C 6.03 -0.507 5.868 -0.685 5.668 -0.81 L 5.141 0.04 Z M 5.238 0.147 L 4.342 0.59 L 5.497 2.93 L 6.393 2.487 L 7.29 2.044 L 6.135 -0.295 L 5.238 0.147 Z M 6.393 2.487 L 5.497 2.93 C 5.645 3.229 5.863 3.488 6.133 3.684 L 6.721 2.875 L 7.309 2.066 C 7.301 2.061 7.294 2.053 7.29 2.044 L 6.393 2.487 Z M 6.721 2.875 L 6.133 3.684 C 6.402 3.88 6.716 4.008 7.046 4.056 L 7.191 3.067 L 7.336 2.078 C 7.326 2.076 7.317 2.072 7.309 2.066 L 6.721 2.875 Z M 7.191 3.067 L 7.046 4.056 L 9.629 4.434 L 9.774 3.445 L 9.919 2.455 L 7.336 2.077 L 7.191 3.067 Z M 9.774 3.445 L 9.631 4.435 C 9.495 4.415 9.367 4.358 9.262 4.269 L 9.907 3.505 L 10.551 2.74 C 10.37 2.588 10.151 2.489 9.917 2.455 L 9.774 3.445 Z M 9.907 3.505 L 9.262 4.269 C 9.157 4.181 9.079 4.065 9.037 3.935 L 9.988 3.625 L 10.939 3.316 C 10.866 3.091 10.731 2.892 10.551 2.74 L 9.907 3.505 Z M 9.988 3.625 L 9.037 3.935 C 8.995 3.804 8.989 3.664 9.022 3.531 L 9.993 3.771 L 10.964 4.01 C 11.021 3.781 11.012 3.54 10.939 3.316 L 9.988 3.625 Z M 9.993 3.771 L 9.022 3.531 C 9.055 3.398 9.125 3.277 9.223 3.181 L 9.921 3.897 L 10.619 4.613 C 10.788 4.448 10.908 4.239 10.964 4.01 L 9.993 3.771 Z M 9.921 3.897 L 9.223 3.181 L 7.355 5 L 8.053 5.716 L 8.751 6.432 L 10.619 4.613 L 9.921 3.897 Z M 8.053 5.716 L 7.355 5 C 7.116 5.233 6.937 5.521 6.833 5.838 L 7.784 6.148 L 8.735 6.457 C 8.738 6.448 8.744 6.439 8.751 6.432 L 8.053 5.716 Z M 7.784 6.148 L 6.833 5.838 C 6.73 6.156 6.705 6.494 6.762 6.823 L 7.747 6.655 L 8.733 6.487 C 8.731 6.477 8.732 6.467 8.735 6.457 L 7.784 6.148 Z M 7.747 6.655 L 6.762 6.824 L 7.203 9.394 L 8.188 9.225 L 9.174 9.056 L 8.733 6.486 L 7.747 6.655 Z M 8.188 9.225 L 7.204 9.399 C 7.18 9.263 7.194 9.123 7.246 8.996 L 8.173 9.37 L 9.1 9.745 C 9.189 9.525 9.214 9.285 9.173 9.051 L 8.188 9.225 Z M 8.173 9.37 L 7.246 8.996 C 7.298 8.868 7.384 8.757 7.495 8.676 L 8.083 9.485 L 8.671 10.295 C 8.863 10.155 9.012 9.965 9.1 9.745 L 8.173 9.37 Z M 8.083 9.485 L 7.495 8.676 C 7.607 8.595 7.739 8.547 7.876 8.538 L 7.946 9.535 L 8.015 10.533 C 8.252 10.517 8.479 10.434 8.671 10.295 L 8.083 9.485 Z M 7.946 9.535 L 7.876 8.538 C 8.014 8.528 8.151 8.558 8.273 8.622 L 7.803 9.505 L 7.333 10.388 C 7.542 10.499 7.779 10.549 8.015 10.533 L 7.946 9.535 Z M 7.803 9.505 L 8.268 8.62 L 5.959 7.406 L 5.494 8.291 L 5.029 9.176 L 7.338 10.39 L 7.803 9.505 Z M 5.494 8.291 L 5.959 7.406 C 5.663 7.25 5.334 7.169 5.001 7.169 L 5.001 8.169 L 5.001 9.169 C 5.011 9.169 5.02 9.172 5.029 9.176 L 5.494 8.291 Z M 5.001 8.169 L 5.001 7.169 C 4.667 7.169 4.338 7.25 4.043 7.406 L 4.507 8.291 L 4.972 9.176 C 4.981 9.172 4.991 9.169 5.001 9.169 L 5.001 8.169 Z M 4.507 8.291 L 4.042 7.406 L 1.733 8.62 L 2.199 9.505 L 2.664 10.39 L 4.973 9.176 L 4.507 8.291 Z M 2.199 9.505 L 1.731 8.621 C 1.853 8.557 1.99 8.528 2.127 8.538 L 2.056 9.535 L 1.985 10.533 C 2.221 10.549 2.458 10.5 2.667 10.389 L 2.199 9.505 Z M 2.056 9.535 L 2.127 8.538 C 2.264 8.547 2.396 8.595 2.507 8.676 L 1.919 9.485 L 1.331 10.294 C 1.522 10.433 1.749 10.516 1.985 10.533 L 2.056 9.535 Z M 1.919 9.485 L 2.507 8.676 C 2.618 8.757 2.705 8.868 2.756 8.995 L 1.829 9.37 L 0.902 9.745 C 0.991 9.964 1.139 10.155 1.331 10.294 L 1.919 9.485 Z M 1.829 9.37 L 2.756 8.995 C 2.808 9.123 2.823 9.262 2.799 9.398 L 1.814 9.225 L 0.829 9.052 C 0.788 9.285 0.813 9.525 0.902 9.745 L 1.829 9.37 Z M 1.814 9.225 L 2.8 9.394 L 3.24 6.824 L 2.254 6.655 L 1.269 6.486 L 0.828 9.056 L 1.814 9.225 Z M 2.254 6.655 L 3.24 6.825 C 3.297 6.495 3.272 6.157 3.169 5.839 L 2.218 6.148 L 1.267 6.457 C 1.27 6.467 1.27 6.477 1.269 6.486 L 2.254 6.655 Z M 2.218 6.148 L 3.169 5.839 C 3.065 5.521 2.886 5.233 2.647 5 L 1.949 5.716 L 1.251 6.432 C 1.258 6.439 1.264 6.448 1.267 6.457 L 2.218 6.148 Z M 1.949 5.716 L 2.646 4.999 L 0.778 3.181 L 0.081 3.897 L -0.617 4.614 L 1.251 6.432 L 1.949 5.716 Z M 0.081 3.897 L 0.776 3.178 C 0.875 3.274 0.945 3.395 0.978 3.529 L 0.008 3.771 L -0.962 4.013 C -0.905 4.243 -0.784 4.452 -0.614 4.617 L 0.081 3.897 Z M 0.008 3.771 L 0.978 3.529 C 1.011 3.662 1.007 3.803 0.964 3.934 L 0.013 3.625 L -0.938 3.316 C -1.011 3.542 -1.02 3.783 -0.962 4.013 L 0.008 3.771 Z M 0.013 3.625 L 0.964 3.934 C 0.922 4.065 0.843 4.181 0.738 4.27 L 0.095 3.504 L -0.549 2.738 C -0.73 2.891 -0.865 3.091 -0.938 3.316 L 0.013 3.625 Z M 0.095 3.504 L 0.738 4.27 C 0.632 4.358 0.504 4.415 0.368 4.435 L 0.228 3.444 L 0.088 2.454 C -0.147 2.487 -0.367 2.586 -0.549 2.738 L 0.095 3.504 Z M 0.228 3.444 L 0.373 4.434 L 2.955 4.056 L 2.81 3.067 L 2.666 2.077 L 0.083 2.455 L 0.228 3.444 Z M 2.81 3.067 L 2.954 4.057 C 3.285 4.008 3.599 3.881 3.869 3.685 L 3.281 2.875 L 2.694 2.066 C 2.686 2.072 2.676 2.076 2.666 2.077 L 2.81 3.067 Z M 3.281 2.875 L 3.869 3.685 C 4.139 3.488 4.358 3.229 4.505 2.93 L 3.609 2.487 L 2.712 2.044 C 2.708 2.053 2.701 2.061 2.694 2.066 L 3.281 2.875 Z M 3.609 2.487 L 4.506 2.929 L 5.66 0.59 L 4.763 0.147 L 3.867 -0.295 L 2.712 2.044 L 3.609 2.487 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--text-primary)",
      flexShrink: 0
    }
  }, "4.8"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 300,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--text-secondary)",
      flexShrink: 0
    }
  }, "(950)")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "baseline",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 15,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(31,30,29)",
      flexShrink: 0
    }
  }, "AED 220"))), /*#__PURE__*/React.createElement(Button, {
    style: {
      position: "relative",
      height: 44,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "Add to Cart",
    type: "primary",
    size: "md",
    state: "default"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 330,
      width: 208,
      height: 322,
      borderRadius: 16,
      backgroundColor: "var(--bg-default)",
      boxShadow: "inset 0 0 0 1px rgb(235,235,232)",
      display: "flex",
      flexDirection: "column",
      gap: 12,
      padding: "12px 12px 12px 12px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 12,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-4cf71e25f41d585d",
    style: {
      position: "relative",
      height: 170,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 8,
      top: 8,
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "rgb(17,24,39)",
      display: "flex",
      flexDirection: "row",
      padding: "4px 8px 4px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 10,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(255,255,255)",
      textTransform: "uppercase",
      flexShrink: 0
    }
  }, "Bestseller")), /*#__PURE__*/React.createElement(WislistIcon, {
    style: {
      position: "absolute",
      left: 140,
      top: 0,
      width: 44,
      height: 44
    },
    property1: "unclick"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      lineHeight: "100%",
      color: "rgb(31,30,29)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Silk Blush Palette"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      height: 12,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 12,
      overflow: "hidden",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 10.001,
    height: 9.536,
    viewBox: "0 0 10.001 9.536",
    fill: "none",
    style: {
      position: "absolute",
      left: 1,
      top: 1,
      width: 10.001,
      height: 9.536,
      color: "rgb(212,175,55)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.763 0.147 L 3.867 -0.296 L 3.867 -0.295 L 4.763 0.147 Z M 5.001 0 L 5.001 -1 L 5.001 0 Z M 5.238 0.147 L 6.135 -0.295 L 6.135 -0.296 L 5.238 0.147 Z M 6.393 2.487 L 5.497 2.93 L 5.497 2.93 L 6.393 2.487 Z M 7.191 3.067 L 7.046 4.056 L 7.046 4.056 L 7.191 3.067 Z M 9.774 3.445 L 9.629 4.434 L 9.631 4.435 L 9.774 3.445 Z M 9.921 3.897 L 10.619 4.613 L 10.619 4.613 L 9.921 3.897 Z M 8.053 5.716 L 7.355 5 L 7.355 5 L 8.053 5.716 Z M 7.747 6.655 L 6.762 6.823 L 6.762 6.824 L 7.747 6.655 Z M 8.188 9.225 L 7.203 9.394 L 7.204 9.399 L 8.188 9.225 Z M 7.803 9.505 L 8.273 8.622 L 8.268 8.62 L 7.803 9.505 Z M 5.494 8.291 L 5.959 7.406 L 5.959 7.406 L 5.494 8.291 Z M 5.001 8.169 L 5.001 7.169 L 5.001 8.169 Z M 4.507 8.291 L 4.043 7.406 L 4.042 7.406 L 4.507 8.291 Z M 2.199 9.505 L 1.733 8.62 L 1.731 8.621 L 2.199 9.505 Z M 1.814 9.225 L 2.799 9.398 L 2.8 9.394 L 1.814 9.225 Z M 2.254 6.655 L 1.269 6.486 L 1.269 6.486 L 2.254 6.655 Z M 1.949 5.716 L 2.647 5 L 2.646 4.999 L 1.949 5.716 Z M 0.081 3.897 L 0.778 3.181 L 0.776 3.178 L 0.081 3.897 Z M 0.228 3.444 L 0.368 4.435 L 0.373 4.434 L 0.228 3.444 Z M 2.81 3.067 L 2.666 2.077 L 2.666 2.077 L 2.81 3.067 Z M 3.609 2.487 L 4.505 2.93 L 4.506 2.929 L 3.609 2.487 Z M 4.763 0.147 L 5.66 0.591 C 5.599 0.714 5.505 0.817 5.389 0.889 L 4.861 0.04 L 4.334 -0.81 C 4.133 -0.685 3.972 -0.507 3.867 -0.296 L 4.763 0.147 Z M 4.861 0.04 L 5.389 0.889 C 5.272 0.962 5.138 1 5.001 1 L 5.001 0 L 5.001 -1 C 4.765 -1 4.534 -0.934 4.334 -0.81 L 4.861 0.04 Z M 5.001 0 L 5.001 1 C 4.864 1 4.73 0.962 4.613 0.889 L 5.141 0.04 L 5.668 -0.81 C 5.468 -0.934 5.237 -1 5.001 -1 L 5.001 0 Z M 5.141 0.04 L 4.613 0.889 C 4.497 0.817 4.403 0.714 4.342 0.591 L 5.238 0.147 L 6.135 -0.296 C 6.03 -0.507 5.868 -0.685 5.668 -0.81 L 5.141 0.04 Z M 5.238 0.147 L 4.342 0.59 L 5.497 2.93 L 6.393 2.487 L 7.29 2.044 L 6.135 -0.295 L 5.238 0.147 Z M 6.393 2.487 L 5.497 2.93 C 5.645 3.229 5.863 3.488 6.133 3.684 L 6.721 2.875 L 7.309 2.066 C 7.301 2.061 7.294 2.053 7.29 2.044 L 6.393 2.487 Z M 6.721 2.875 L 6.133 3.684 C 6.402 3.88 6.716 4.008 7.046 4.056 L 7.191 3.067 L 7.336 2.078 C 7.326 2.076 7.317 2.072 7.309 2.066 L 6.721 2.875 Z M 7.191 3.067 L 7.046 4.056 L 9.629 4.434 L 9.774 3.445 L 9.919 2.455 L 7.336 2.077 L 7.191 3.067 Z M 9.774 3.445 L 9.631 4.435 C 9.495 4.415 9.367 4.358 9.262 4.269 L 9.907 3.505 L 10.551 2.74 C 10.37 2.588 10.151 2.489 9.917 2.455 L 9.774 3.445 Z M 9.907 3.505 L 9.262 4.269 C 9.157 4.181 9.079 4.065 9.037 3.935 L 9.988 3.625 L 10.939 3.316 C 10.866 3.091 10.731 2.892 10.551 2.74 L 9.907 3.505 Z M 9.988 3.625 L 9.037 3.935 C 8.995 3.804 8.989 3.664 9.022 3.531 L 9.993 3.771 L 10.964 4.01 C 11.021 3.781 11.012 3.54 10.939 3.316 L 9.988 3.625 Z M 9.993 3.771 L 9.022 3.531 C 9.055 3.398 9.125 3.277 9.223 3.181 L 9.921 3.897 L 10.619 4.613 C 10.788 4.448 10.908 4.239 10.964 4.01 L 9.993 3.771 Z M 9.921 3.897 L 9.223 3.181 L 7.355 5 L 8.053 5.716 L 8.751 6.432 L 10.619 4.613 L 9.921 3.897 Z M 8.053 5.716 L 7.355 5 C 7.116 5.233 6.937 5.521 6.833 5.838 L 7.784 6.148 L 8.735 6.457 C 8.738 6.448 8.744 6.439 8.751 6.432 L 8.053 5.716 Z M 7.784 6.148 L 6.833 5.838 C 6.73 6.156 6.705 6.494 6.762 6.823 L 7.747 6.655 L 8.733 6.487 C 8.731 6.477 8.732 6.467 8.735 6.457 L 7.784 6.148 Z M 7.747 6.655 L 6.762 6.824 L 7.203 9.394 L 8.188 9.225 L 9.174 9.056 L 8.733 6.486 L 7.747 6.655 Z M 8.188 9.225 L 7.204 9.399 C 7.18 9.263 7.194 9.123 7.246 8.996 L 8.173 9.37 L 9.1 9.745 C 9.189 9.525 9.214 9.285 9.173 9.051 L 8.188 9.225 Z M 8.173 9.37 L 7.246 8.996 C 7.298 8.868 7.384 8.757 7.495 8.676 L 8.083 9.485 L 8.671 10.295 C 8.863 10.155 9.012 9.965 9.1 9.745 L 8.173 9.37 Z M 8.083 9.485 L 7.495 8.676 C 7.607 8.595 7.739 8.547 7.876 8.538 L 7.946 9.535 L 8.015 10.533 C 8.252 10.517 8.479 10.434 8.671 10.295 L 8.083 9.485 Z M 7.946 9.535 L 7.876 8.538 C 8.014 8.528 8.151 8.558 8.273 8.622 L 7.803 9.505 L 7.333 10.388 C 7.542 10.499 7.779 10.549 8.015 10.533 L 7.946 9.535 Z M 7.803 9.505 L 8.268 8.62 L 5.959 7.406 L 5.494 8.291 L 5.029 9.176 L 7.338 10.39 L 7.803 9.505 Z M 5.494 8.291 L 5.959 7.406 C 5.663 7.25 5.334 7.169 5.001 7.169 L 5.001 8.169 L 5.001 9.169 C 5.011 9.169 5.02 9.172 5.029 9.176 L 5.494 8.291 Z M 5.001 8.169 L 5.001 7.169 C 4.667 7.169 4.338 7.25 4.043 7.406 L 4.507 8.291 L 4.972 9.176 C 4.981 9.172 4.991 9.169 5.001 9.169 L 5.001 8.169 Z M 4.507 8.291 L 4.042 7.406 L 1.733 8.62 L 2.199 9.505 L 2.664 10.39 L 4.973 9.176 L 4.507 8.291 Z M 2.199 9.505 L 1.731 8.621 C 1.853 8.557 1.99 8.528 2.127 8.538 L 2.056 9.535 L 1.985 10.533 C 2.221 10.549 2.458 10.5 2.667 10.389 L 2.199 9.505 Z M 2.056 9.535 L 2.127 8.538 C 2.264 8.547 2.396 8.595 2.507 8.676 L 1.919 9.485 L 1.331 10.294 C 1.522 10.433 1.749 10.516 1.985 10.533 L 2.056 9.535 Z M 1.919 9.485 L 2.507 8.676 C 2.618 8.757 2.705 8.868 2.756 8.995 L 1.829 9.37 L 0.902 9.745 C 0.991 9.964 1.139 10.155 1.331 10.294 L 1.919 9.485 Z M 1.829 9.37 L 2.756 8.995 C 2.808 9.123 2.823 9.262 2.799 9.398 L 1.814 9.225 L 0.829 9.052 C 0.788 9.285 0.813 9.525 0.902 9.745 L 1.829 9.37 Z M 1.814 9.225 L 2.8 9.394 L 3.24 6.824 L 2.254 6.655 L 1.269 6.486 L 0.828 9.056 L 1.814 9.225 Z M 2.254 6.655 L 3.24 6.825 C 3.297 6.495 3.272 6.157 3.169 5.839 L 2.218 6.148 L 1.267 6.457 C 1.27 6.467 1.27 6.477 1.269 6.486 L 2.254 6.655 Z M 2.218 6.148 L 3.169 5.839 C 3.065 5.521 2.886 5.233 2.647 5 L 1.949 5.716 L 1.251 6.432 C 1.258 6.439 1.264 6.448 1.267 6.457 L 2.218 6.148 Z M 1.949 5.716 L 2.646 4.999 L 0.778 3.181 L 0.081 3.897 L -0.617 4.614 L 1.251 6.432 L 1.949 5.716 Z M 0.081 3.897 L 0.776 3.178 C 0.875 3.274 0.945 3.395 0.978 3.529 L 0.008 3.771 L -0.962 4.013 C -0.905 4.243 -0.784 4.452 -0.614 4.617 L 0.081 3.897 Z M 0.008 3.771 L 0.978 3.529 C 1.011 3.662 1.007 3.803 0.964 3.934 L 0.013 3.625 L -0.938 3.316 C -1.011 3.542 -1.02 3.783 -0.962 4.013 L 0.008 3.771 Z M 0.013 3.625 L 0.964 3.934 C 0.922 4.065 0.843 4.181 0.738 4.27 L 0.095 3.504 L -0.549 2.738 C -0.73 2.891 -0.865 3.091 -0.938 3.316 L 0.013 3.625 Z M 0.095 3.504 L 0.738 4.27 C 0.632 4.358 0.504 4.415 0.368 4.435 L 0.228 3.444 L 0.088 2.454 C -0.147 2.487 -0.367 2.586 -0.549 2.738 L 0.095 3.504 Z M 0.228 3.444 L 0.373 4.434 L 2.955 4.056 L 2.81 3.067 L 2.666 2.077 L 0.083 2.455 L 0.228 3.444 Z M 2.81 3.067 L 2.954 4.057 C 3.285 4.008 3.599 3.881 3.869 3.685 L 3.281 2.875 L 2.694 2.066 C 2.686 2.072 2.676 2.076 2.666 2.077 L 2.81 3.067 Z M 3.281 2.875 L 3.869 3.685 C 4.139 3.488 4.358 3.229 4.505 2.93 L 3.609 2.487 L 2.712 2.044 C 2.708 2.053 2.701 2.061 2.694 2.066 L 3.281 2.875 Z M 3.609 2.487 L 4.506 2.929 L 5.66 0.59 L 4.763 0.147 L 3.867 -0.295 L 2.712 2.044 L 3.609 2.487 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--text-primary)",
      flexShrink: 0
    }
  }, "5.0"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 300,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--text-secondary)",
      flexShrink: 0
    }
  }, "(2.1K)")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "baseline",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 15,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(31,30,29)",
      flexShrink: 0
    }
  }, "AED 185"))), /*#__PURE__*/React.createElement(Button, {
    style: {
      position: "relative",
      height: 44,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "Add to Cart",
    type: "primary",
    size: "md",
    state: "default"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 216,
      top: 330,
      width: 208,
      height: 322,
      borderRadius: 16,
      backgroundColor: "var(--bg-default)",
      boxShadow: "inset 0 0 0 1px rgb(235,235,232)",
      display: "flex",
      flexDirection: "column",
      gap: 12,
      padding: "12px 12px 12px 12px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 12,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-2c4affb27a3550cd",
    style: {
      position: "relative",
      height: 170,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 8,
      top: 8,
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "rgb(107,114,128)",
      display: "flex",
      flexDirection: "row",
      padding: "4px 8px 4px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 10,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(255,255,255)",
      textTransform: "uppercase",
      flexShrink: 0
    }
  }, "Limited")), /*#__PURE__*/React.createElement(WislistIcon, {
    style: {
      position: "absolute",
      left: 140,
      top: 0,
      width: 44,
      height: 44
    },
    property1: "unclick"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      lineHeight: "100%",
      color: "rgb(31,30,29)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Midnight Eye Kit"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      height: 12,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 12,
      overflow: "hidden",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 10.001,
    height: 9.536,
    viewBox: "0 0 10.001 9.536",
    fill: "none",
    style: {
      position: "absolute",
      left: 1,
      top: 1,
      width: 10.001,
      height: 9.536,
      color: "rgb(212,175,55)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.763 0.147 L 3.867 -0.296 L 3.867 -0.295 L 4.763 0.147 Z M 5.001 0 L 5.001 -1 L 5.001 0 Z M 5.238 0.147 L 6.135 -0.295 L 6.135 -0.296 L 5.238 0.147 Z M 6.393 2.487 L 5.497 2.93 L 5.497 2.93 L 6.393 2.487 Z M 7.191 3.067 L 7.046 4.056 L 7.046 4.056 L 7.191 3.067 Z M 9.774 3.445 L 9.629 4.434 L 9.631 4.435 L 9.774 3.445 Z M 9.921 3.897 L 10.619 4.613 L 10.619 4.613 L 9.921 3.897 Z M 8.053 5.716 L 7.355 5 L 7.355 5 L 8.053 5.716 Z M 7.747 6.655 L 6.762 6.823 L 6.762 6.824 L 7.747 6.655 Z M 8.188 9.225 L 7.203 9.394 L 7.204 9.399 L 8.188 9.225 Z M 7.803 9.505 L 8.273 8.622 L 8.268 8.62 L 7.803 9.505 Z M 5.494 8.291 L 5.959 7.406 L 5.959 7.406 L 5.494 8.291 Z M 5.001 8.169 L 5.001 7.169 L 5.001 8.169 Z M 4.507 8.291 L 4.043 7.406 L 4.042 7.406 L 4.507 8.291 Z M 2.199 9.505 L 1.733 8.62 L 1.731 8.621 L 2.199 9.505 Z M 1.814 9.225 L 2.799 9.398 L 2.8 9.394 L 1.814 9.225 Z M 2.254 6.655 L 1.269 6.486 L 1.269 6.486 L 2.254 6.655 Z M 1.949 5.716 L 2.647 5 L 2.646 4.999 L 1.949 5.716 Z M 0.081 3.897 L 0.778 3.181 L 0.776 3.178 L 0.081 3.897 Z M 0.228 3.444 L 0.368 4.435 L 0.373 4.434 L 0.228 3.444 Z M 2.81 3.067 L 2.666 2.077 L 2.666 2.077 L 2.81 3.067 Z M 3.609 2.487 L 4.505 2.93 L 4.506 2.929 L 3.609 2.487 Z M 4.763 0.147 L 5.66 0.591 C 5.599 0.714 5.505 0.817 5.389 0.889 L 4.861 0.04 L 4.334 -0.81 C 4.133 -0.685 3.972 -0.507 3.867 -0.296 L 4.763 0.147 Z M 4.861 0.04 L 5.389 0.889 C 5.272 0.962 5.138 1 5.001 1 L 5.001 0 L 5.001 -1 C 4.765 -1 4.534 -0.934 4.334 -0.81 L 4.861 0.04 Z M 5.001 0 L 5.001 1 C 4.864 1 4.73 0.962 4.613 0.889 L 5.141 0.04 L 5.668 -0.81 C 5.468 -0.934 5.237 -1 5.001 -1 L 5.001 0 Z M 5.141 0.04 L 4.613 0.889 C 4.497 0.817 4.403 0.714 4.342 0.591 L 5.238 0.147 L 6.135 -0.296 C 6.03 -0.507 5.868 -0.685 5.668 -0.81 L 5.141 0.04 Z M 5.238 0.147 L 4.342 0.59 L 5.497 2.93 L 6.393 2.487 L 7.29 2.044 L 6.135 -0.295 L 5.238 0.147 Z M 6.393 2.487 L 5.497 2.93 C 5.645 3.229 5.863 3.488 6.133 3.684 L 6.721 2.875 L 7.309 2.066 C 7.301 2.061 7.294 2.053 7.29 2.044 L 6.393 2.487 Z M 6.721 2.875 L 6.133 3.684 C 6.402 3.88 6.716 4.008 7.046 4.056 L 7.191 3.067 L 7.336 2.078 C 7.326 2.076 7.317 2.072 7.309 2.066 L 6.721 2.875 Z M 7.191 3.067 L 7.046 4.056 L 9.629 4.434 L 9.774 3.445 L 9.919 2.455 L 7.336 2.077 L 7.191 3.067 Z M 9.774 3.445 L 9.631 4.435 C 9.495 4.415 9.367 4.358 9.262 4.269 L 9.907 3.505 L 10.551 2.74 C 10.37 2.588 10.151 2.489 9.917 2.455 L 9.774 3.445 Z M 9.907 3.505 L 9.262 4.269 C 9.157 4.181 9.079 4.065 9.037 3.935 L 9.988 3.625 L 10.939 3.316 C 10.866 3.091 10.731 2.892 10.551 2.74 L 9.907 3.505 Z M 9.988 3.625 L 9.037 3.935 C 8.995 3.804 8.989 3.664 9.022 3.531 L 9.993 3.771 L 10.964 4.01 C 11.021 3.781 11.012 3.54 10.939 3.316 L 9.988 3.625 Z M 9.993 3.771 L 9.022 3.531 C 9.055 3.398 9.125 3.277 9.223 3.181 L 9.921 3.897 L 10.619 4.613 C 10.788 4.448 10.908 4.239 10.964 4.01 L 9.993 3.771 Z M 9.921 3.897 L 9.223 3.181 L 7.355 5 L 8.053 5.716 L 8.751 6.432 L 10.619 4.613 L 9.921 3.897 Z M 8.053 5.716 L 7.355 5 C 7.116 5.233 6.937 5.521 6.833 5.838 L 7.784 6.148 L 8.735 6.457 C 8.738 6.448 8.744 6.439 8.751 6.432 L 8.053 5.716 Z M 7.784 6.148 L 6.833 5.838 C 6.73 6.156 6.705 6.494 6.762 6.823 L 7.747 6.655 L 8.733 6.487 C 8.731 6.477 8.732 6.467 8.735 6.457 L 7.784 6.148 Z M 7.747 6.655 L 6.762 6.824 L 7.203 9.394 L 8.188 9.225 L 9.174 9.056 L 8.733 6.486 L 7.747 6.655 Z M 8.188 9.225 L 7.204 9.399 C 7.18 9.263 7.194 9.123 7.246 8.996 L 8.173 9.37 L 9.1 9.745 C 9.189 9.525 9.214 9.285 9.173 9.051 L 8.188 9.225 Z M 8.173 9.37 L 7.246 8.996 C 7.298 8.868 7.384 8.757 7.495 8.676 L 8.083 9.485 L 8.671 10.295 C 8.863 10.155 9.012 9.965 9.1 9.745 L 8.173 9.37 Z M 8.083 9.485 L 7.495 8.676 C 7.607 8.595 7.739 8.547 7.876 8.538 L 7.946 9.535 L 8.015 10.533 C 8.252 10.517 8.479 10.434 8.671 10.295 L 8.083 9.485 Z M 7.946 9.535 L 7.876 8.538 C 8.014 8.528 8.151 8.558 8.273 8.622 L 7.803 9.505 L 7.333 10.388 C 7.542 10.499 7.779 10.549 8.015 10.533 L 7.946 9.535 Z M 7.803 9.505 L 8.268 8.62 L 5.959 7.406 L 5.494 8.291 L 5.029 9.176 L 7.338 10.39 L 7.803 9.505 Z M 5.494 8.291 L 5.959 7.406 C 5.663 7.25 5.334 7.169 5.001 7.169 L 5.001 8.169 L 5.001 9.169 C 5.011 9.169 5.02 9.172 5.029 9.176 L 5.494 8.291 Z M 5.001 8.169 L 5.001 7.169 C 4.667 7.169 4.338 7.25 4.043 7.406 L 4.507 8.291 L 4.972 9.176 C 4.981 9.172 4.991 9.169 5.001 9.169 L 5.001 8.169 Z M 4.507 8.291 L 4.042 7.406 L 1.733 8.62 L 2.199 9.505 L 2.664 10.39 L 4.973 9.176 L 4.507 8.291 Z M 2.199 9.505 L 1.731 8.621 C 1.853 8.557 1.99 8.528 2.127 8.538 L 2.056 9.535 L 1.985 10.533 C 2.221 10.549 2.458 10.5 2.667 10.389 L 2.199 9.505 Z M 2.056 9.535 L 2.127 8.538 C 2.264 8.547 2.396 8.595 2.507 8.676 L 1.919 9.485 L 1.331 10.294 C 1.522 10.433 1.749 10.516 1.985 10.533 L 2.056 9.535 Z M 1.919 9.485 L 2.507 8.676 C 2.618 8.757 2.705 8.868 2.756 8.995 L 1.829 9.37 L 0.902 9.745 C 0.991 9.964 1.139 10.155 1.331 10.294 L 1.919 9.485 Z M 1.829 9.37 L 2.756 8.995 C 2.808 9.123 2.823 9.262 2.799 9.398 L 1.814 9.225 L 0.829 9.052 C 0.788 9.285 0.813 9.525 0.902 9.745 L 1.829 9.37 Z M 1.814 9.225 L 2.8 9.394 L 3.24 6.824 L 2.254 6.655 L 1.269 6.486 L 0.828 9.056 L 1.814 9.225 Z M 2.254 6.655 L 3.24 6.825 C 3.297 6.495 3.272 6.157 3.169 5.839 L 2.218 6.148 L 1.267 6.457 C 1.27 6.467 1.27 6.477 1.269 6.486 L 2.254 6.655 Z M 2.218 6.148 L 3.169 5.839 C 3.065 5.521 2.886 5.233 2.647 5 L 1.949 5.716 L 1.251 6.432 C 1.258 6.439 1.264 6.448 1.267 6.457 L 2.218 6.148 Z M 1.949 5.716 L 2.646 4.999 L 0.778 3.181 L 0.081 3.897 L -0.617 4.614 L 1.251 6.432 L 1.949 5.716 Z M 0.081 3.897 L 0.776 3.178 C 0.875 3.274 0.945 3.395 0.978 3.529 L 0.008 3.771 L -0.962 4.013 C -0.905 4.243 -0.784 4.452 -0.614 4.617 L 0.081 3.897 Z M 0.008 3.771 L 0.978 3.529 C 1.011 3.662 1.007 3.803 0.964 3.934 L 0.013 3.625 L -0.938 3.316 C -1.011 3.542 -1.02 3.783 -0.962 4.013 L 0.008 3.771 Z M 0.013 3.625 L 0.964 3.934 C 0.922 4.065 0.843 4.181 0.738 4.27 L 0.095 3.504 L -0.549 2.738 C -0.73 2.891 -0.865 3.091 -0.938 3.316 L 0.013 3.625 Z M 0.095 3.504 L 0.738 4.27 C 0.632 4.358 0.504 4.415 0.368 4.435 L 0.228 3.444 L 0.088 2.454 C -0.147 2.487 -0.367 2.586 -0.549 2.738 L 0.095 3.504 Z M 0.228 3.444 L 0.373 4.434 L 2.955 4.056 L 2.81 3.067 L 2.666 2.077 L 0.083 2.455 L 0.228 3.444 Z M 2.81 3.067 L 2.954 4.057 C 3.285 4.008 3.599 3.881 3.869 3.685 L 3.281 2.875 L 2.694 2.066 C 2.686 2.072 2.676 2.076 2.666 2.077 L 2.81 3.067 Z M 3.281 2.875 L 3.869 3.685 C 4.139 3.488 4.358 3.229 4.505 2.93 L 3.609 2.487 L 2.712 2.044 C 2.708 2.053 2.701 2.061 2.694 2.066 L 3.281 2.875 Z M 3.609 2.487 L 4.506 2.929 L 5.66 0.59 L 4.763 0.147 L 3.867 -0.295 L 2.712 2.044 L 3.609 2.487 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--text-primary)",
      flexShrink: 0
    }
  }, "4.7"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 300,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--text-secondary)",
      flexShrink: 0
    }
  }, "(830)")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "baseline",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 15,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(31,30,29)",
      flexShrink: 0
    }
  }, "AED 310"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(107,102,97)",
      textDecoration: "line-through",
      flexShrink: 0
    }
  }, "AED 350"))), /*#__PURE__*/React.createElement(Button, {
    style: {
      position: "relative",
      height: 44,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "Add to Cart",
    type: "primary",
    size: "md",
    state: "default"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 38,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "12px 16px 12px 16px",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(HomeIndicator, {
    style: {
      position: "relative",
      height: 34,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    }
  })));
}

// figma node: 710:15333 screen-dashboard
function ScreenDashboard(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 440,
      height: 956,
      overflow: "hidden",
      borderRadius: 32,
      backgroundColor: "var(--bg-default)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      background: "linear-gradient(180deg, rgb(226,126,114) 0.00%, rgb(243,161,149) 100.00%)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 64,
      display: "flex",
      flexDirection: "row",
      padding: "0px 20px 0px 30px",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, "9:41"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 68,
      height: 12,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 3,
    height: 6,
    viewBox: "0 0 3 6",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 6,
      width: 3,
      height: 6,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2 0 L 1 0 C 0.448 0 0 0.448 0 1 L 0 5 C 0 5.552 0.448 6 1 6 L 2 6 C 2.552 6 3 5.552 3 5 L 3 1 C 3 0.448 2.552 0 2 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3,
    height: 8,
    viewBox: "0 0 3 8",
    fill: "none",
    style: {
      position: "absolute",
      left: 5,
      top: 4,
      width: 3,
      height: 8,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2 0 L 1 0 C 0.448 0 0 0.448 0 1 L 0 7 C 0 7.552 0.448 8 1 8 L 2 8 C 2.552 8 3 7.552 3 7 L 3 1 C 3 0.448 2.552 0 2 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3,
    height: 10,
    viewBox: "0 0 3 10",
    fill: "none",
    style: {
      position: "absolute",
      left: 10,
      top: 2,
      width: 3,
      height: 10,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2 0 L 1 0 C 0.448 0 0 0.448 0 1 L 0 9 C 0 9.552 0.448 10 1 10 L 2 10 C 2.552 10 3 9.552 3 9 L 3 1 C 3 0.448 2.552 0 2 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3,
    height: 12,
    viewBox: "0 0 3 12",
    fill: "none",
    style: {
      position: "absolute",
      left: 15,
      top: 0,
      width: 3,
      height: 12,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2 0 L 1 0 C 0.448 0 0 0.448 0 1 L 0 11 C 0 11.552 0.448 12 1 12 L 2 12 C 2.552 12 3 11.552 3 11 L 3 1 C 3 0.448 2.552 0 2 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 10,
    height: 1.755,
    viewBox: "0 0 10 1.755",
    fill: "none",
    style: {
      position: "absolute",
      left: 31,
      top: 2.745,
      width: 10,
      height: 1.755,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M -0.5 1.131 C -0.845 1.407 -0.901 1.91 -0.624 2.255 C -0.348 2.6 0.155 2.656 0.5 2.38 L 0 1.755 L -0.5 1.131 Z M 9.5 2.38 C 9.845 2.656 10.348 2.6 10.625 2.255 C 10.901 1.91 10.845 1.407 10.5 1.131 L 10 1.755 L 9.5 2.38 Z M 0 1.755 L 0.5 2.38 C 1.777 1.357 3.364 0.8 5 0.8 L 5 0 L 5 -0.8 C 3.001 -0.8 1.061 -0.119 -0.5 1.131 L 0 1.755 Z M 5 0 L 5 0.8 C 6.636 0.8 8.223 1.357 9.5 2.38 L 10 1.755 L 10.5 1.131 C 8.939 -0.119 6.999 -0.8 5 -0.8 L 5 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 6,
    height: 1,
    viewBox: "0 0 6 1",
    fill: "none",
    style: {
      position: "absolute",
      left: 33,
      top: 6.2,
      width: 6,
      height: 1,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M -0.48 0.36 C -0.833 0.625 -0.905 1.127 -0.64 1.48 C -0.375 1.833 0.127 1.905 0.48 1.64 L 0 1 L -0.48 0.36 Z M 3 0 L 3 0.8 L 3 0 Z M 5.52 1.64 C 5.873 1.905 6.375 1.833 6.64 1.48 C 6.905 1.127 6.833 0.625 6.48 0.36 L 6 1 L 5.52 1.64 Z M 0 1 L 0.48 1.64 C 1.207 1.095 2.091 0.8 3 0.8 L 3 0 L 3 -0.8 C 1.745 -0.8 0.524 -0.393 -0.48 0.36 L 0 1 Z M 3 0 L 3 0.8 C 3.909 0.8 4.793 1.095 5.52 1.64 L 6 1 L 6.48 0.36 C 5.476 -0.393 4.255 -0.8 3 -0.8 L 3 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 2.600,
    height: 2.600,
    viewBox: "0 0 2.600 2.600",
    fill: "none",
    style: {
      position: "absolute",
      left: 34.7,
      top: 8.7,
      width: 2.6,
      height: 2.6,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.3 2.6 C 2.018 2.6 2.6 2.018 2.6 1.3 C 2.6 0.582 2.018 0 1.3 0 C 0.582 0 0 0.582 0 1.3 C 0 2.018 0.582 2.6 1.3 2.6 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 20,
    height: 10,
    viewBox: "0 0 20 10",
    fill: "none",
    style: {
      position: "absolute",
      left: 46,
      top: 1,
      width: 20,
      height: 10,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3 0 L 3 0.5 L 17 0.5 L 17 0 L 17 -0.5 L 3 -0.5 L 3 0 Z M 17 0 L 17 0.5 C 18.381 0.5 19.5 1.619 19.5 3 L 20 3 L 20.5 3 C 20.5 1.067 18.933 -0.5 17 -0.5 L 17 0 Z M 20 3 L 19.5 3 L 19.5 7 L 20 7 L 20.5 7 L 20.5 3 L 20 3 Z M 20 7 L 19.5 7 C 19.5 8.381 18.381 9.5 17 9.5 L 17 10 L 17 10.5 C 18.933 10.5 20.5 8.933 20.5 7 L 20 7 Z M 17 10 L 17 9.5 L 3 9.5 L 3 10 L 3 10.5 L 17 10.5 L 17 10 Z M 3 10 L 3 9.5 C 1.619 9.5 0.5 8.381 0.5 7 L 0 7 L -0.5 7 C -0.5 8.933 1.067 10.5 3 10.5 L 3 10 Z M 0 7 L 0.5 7 L 0.5 3 L 0 3 L -0.5 3 L -0.5 7 L 0 7 Z M 0 3 L 0.5 3 C 0.5 1.619 1.619 0.5 3 0.5 L 3 0 L 3 -0.5 C 1.067 -0.5 -0.5 1.067 -0.5 3 L 0 3 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 13,
    height: 6,
    viewBox: "0 0 13 6",
    fill: "none",
    style: {
      position: "absolute",
      left: 48,
      top: 3,
      width: 13,
      height: 6,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 11.5 0 L 1.5 0 C 0.672 0 0 0.672 0 1.5 L 0 4.5 C 0 5.328 0.672 6 1.5 6 L 11.5 6 C 12.328 6 13 5.328 13 4.5 L 13 1.5 C 13 0.672 12.328 0 11.5 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 2,
    height: 4,
    viewBox: "0 0 2 4",
    fill: "none",
    style: {
      position: "absolute",
      left: 67,
      top: 4,
      width: 2,
      height: 4,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 0 4 C 0.53 4 1.039 3.789 1.414 3.414 C 1.789 3.039 2 2.53 2 2 C 2 1.47 1.789 0.961 1.414 0.586 C 1.039 0.211 0.53 0 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      padding: "0px 16px 12px 16px",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 44,
    height: 44,
    viewBox: "0 0 44 44",
    fill: "none",
    style: {
      position: "relative",
      width: 44,
      height: 44,
      borderRadius: 999,
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      color: "var(--border-brand)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 22 C 0 9.85 9.85 0 22 0 L 22 0 C 34.15 0 44 9.85 44 22 L 44 22 C 44 34.15 34.15 44 22 44 L 22 44 C 9.85 44 0 34.15 0 22 L 0 22 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0 22 M 44 22 M 44 22 M 0 22 M 22 0 M 44 22 M 22 44 M 0 22 M 22 44 L 22 42 C 10.954 42 2 33.046 2 22 L 0 22 L -2 22 C -2 35.255 8.745 46 22 46 L 22 44 Z M 44 22 L 42 22 C 42 33.046 33.046 42 22 42 L 22 44 L 22 46 C 35.255 46 46 35.255 46 22 L 44 22 Z M 22 0 L 22 2 C 33.046 2 42 10.954 42 22 L 44 22 L 46 22 C 46 8.745 35.255 -2 22 -2 L 22 0 Z M 22 0 L 22 -2 C 8.745 -2 -2 8.745 -2 22 L 0 22 L 2 22 C 2 10.954 10.954 2 22 2 L 22 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 2,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--text-inverse)",
      flexShrink: 0
    }
  }, "Zainab"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--text-on-brand)",
      flexShrink: 0
    }
  }, "Arrived on July 30, 2024"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 12,
      backgroundColor: "var(--bg-subtle)",
      display: "flex",
      flexDirection: "row",
      padding: "10px 10px 10px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 18,
      height: 14,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 11.999,
    height: 8.168,
    viewBox: "0 0 11.999 8.168",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.001,
      top: 2.916,
      width: 11.999,
      height: 8.168,
      color: "rgb(226,126,114)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 -1 C -0.552 -1 -1 -0.552 -1 0 C -1 0.552 -0.552 1 0 1 L 0 0 L 0 -1 Z M 11.999 1 C 12.551 1 12.999 0.552 12.999 0 C 12.999 -0.552 12.551 -1 11.999 -1 L 11.999 0 L 11.999 1 Z M 0 3.084 C -0.552 3.084 -1 3.532 -1 4.084 C -1 4.636 -0.552 5.084 0 5.084 L 0 4.084 L 0 3.084 Z M 11.999 5.084 C 12.551 5.084 12.999 4.636 12.999 4.084 C 12.999 3.532 12.551 3.084 11.999 3.084 L 11.999 4.084 L 11.999 5.084 Z M 0 7.168 C -0.552 7.168 -1 7.615 -1 8.168 C -1 8.72 -0.552 9.168 0 9.168 L 0 8.168 L 0 7.168 Z M 11.999 9.168 C 12.551 9.168 12.999 8.72 12.999 8.168 C 12.999 7.615 12.551 7.168 11.999 7.168 L 11.999 8.168 L 11.999 9.168 Z M 0 0 L 0 1 L 11.999 1 L 11.999 0 L 11.999 -1 L 0 -1 L 0 0 Z M 0 4.084 L 0 5.084 L 11.999 5.084 L 11.999 4.084 L 11.999 3.084 L 0 3.084 L 0 4.084 Z M 0 8.168 L 0 9.168 L 11.999 9.168 L 11.999 8.168 L 11.999 7.168 L 0 7.168 L 0 8.168 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      padding: "20px 16px 20px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-lg) * 1px)",
      paddingTop: "calc(var(--spacing-xl) * 1px)",
      paddingRight: "calc(var(--spacing-lg) * 1px)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 44,
      borderRadius: 999,
      backgroundColor: "var(--bg-cream)",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 999,
      backgroundColor: "var(--bg-brand-subtle)",
      display: "flex",
      flexDirection: "row",
      padding: "12px 16px 12px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 800,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--text-inverse)",
      flexShrink: 0
    }
  }, "Overview")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      padding: "12px 16px 12px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(102,102,102)",
      flexShrink: 0
    }
  }, "Products")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      padding: "12px 16px 12px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(102,102,102)",
      flexShrink: 0
    }
  }, "Orders")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--spacing-lg) * 1px)",
      padding: "16px 16px 16px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 40,
      borderRadius: 8,
      backgroundColor: "var(--bg-subtle)",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      padding: "8px 12px 8px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      height: 14,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 10.500,
    height: 11.668,
    viewBox: "0 0 10.500 11.668",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.75,
      top: 1.166,
      width: 10.5,
      height: 11.668,
      color: "var(--text-tertiary)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.917 0 C 3.917 -0.552 3.469 -1 2.917 -1 C 2.364 -1 1.917 -0.552 1.917 0 L 2.917 0 L 3.917 0 Z M 1.917 2.334 C 1.917 2.886 2.364 3.334 2.917 3.334 C 3.469 3.334 3.917 2.886 3.917 2.334 L 2.917 2.334 L 1.917 2.334 Z M 8.583 0 C 8.583 -0.552 8.136 -1 7.583 -1 C 7.031 -1 6.583 -0.552 6.583 0 L 7.583 0 L 8.583 0 Z M 6.583 2.334 C 6.583 2.886 7.031 3.334 7.583 3.334 C 8.136 3.334 8.583 2.886 8.583 2.334 L 7.583 2.334 L 6.583 2.334 Z M 0 3.667 C -0.552 3.667 -1 4.115 -1 4.667 C -1 5.219 -0.552 5.667 0 5.667 L 0 4.667 L 0 3.667 Z M 10.5 5.667 C 11.052 5.667 11.5 5.219 11.5 4.667 C 11.5 4.115 11.052 3.667 10.5 3.667 L 10.5 4.667 L 10.5 5.667 Z M 2.917 0 L 1.917 0 L 1.917 2.334 L 2.917 2.334 L 3.917 2.334 L 3.917 0 L 2.917 0 Z M 7.583 0 L 6.583 0 L 6.583 2.334 L 7.583 2.334 L 8.583 2.334 L 8.583 0 L 7.583 0 Z M 0 4.667 L 0 5.667 L 10.5 5.667 L 10.5 4.667 L 10.5 3.667 L 0 3.667 L 0 4.667 Z M 1.167 1.167 L 1.167 2.167 L 9.333 2.167 L 9.333 1.167 L 9.333 0.167 L 1.167 0.167 L 1.167 1.167 Z M 9.333 1.167 L 9.333 2.167 C 9.425 2.167 9.5 2.241 9.5 2.334 L 10.5 2.334 L 11.5 2.334 C 11.5 1.137 10.53 0.167 9.333 0.167 L 9.333 1.167 Z M 10.5 2.334 L 9.5 2.334 L 9.5 10.501 L 10.5 10.501 L 11.5 10.501 L 11.5 2.334 L 10.5 2.334 Z M 10.5 10.501 L 9.5 10.501 C 9.5 10.593 9.425 10.668 9.333 10.668 L 9.333 11.668 L 9.333 12.668 C 10.53 12.668 11.5 11.697 11.5 10.501 L 10.5 10.501 Z M 9.333 11.668 L 9.333 10.668 L 1.167 10.668 L 1.167 11.668 L 1.167 12.668 L 9.333 12.668 L 9.333 11.668 Z M 1.167 11.668 L 1.167 10.668 C 1.075 10.668 1 10.593 1 10.501 L 0 10.501 L -1 10.501 C -1 11.697 -0.03 12.668 1.167 12.668 L 1.167 11.668 Z M 0 10.501 L 1 10.501 L 1 2.334 L 0 2.334 L -1 2.334 L -1 10.501 L 0 10.501 Z M 0 2.334 L 1 2.334 C 1 2.241 1.075 2.167 1.167 2.167 L 1.167 1.167 L 1.167 0.167 C -0.03 0.167 -1 1.137 -1 2.334 L 0 2.334 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--text-secondary)",
      flexShrink: 0
    }
  }, "DATE_RANGE:  2024-07-21 to 2024-08-19")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 12,
      backgroundColor: "rgb(253,242,240)",
      boxShadow: "inset 0 0 0 1px rgb(243,161,149)",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "14px 14px 14px 14px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 13,
      lineHeight: 1.399999976158142,
      color: "var(--text-secondary)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "\uD83C\uDF89 Congratulations on being vendor! Attract your customers with the best products."), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(226,126,114)",
      flexShrink: 0
    }
  }, "Create a new product here")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--text-primary)",
      flexShrink: 0
    }
  }, "Performance Registry"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 24,
      boxShadow: "inset 0 0 0 1px rgb(209,209,209)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 48,
      borderRadius: "24px 24px 0px 0px",
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(243,243,243)",
      display: "flex",
      flexDirection: "row",
      padding: "10px 10px 10px 10px",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(153,153,153)",
      flexShrink: 0
    }
  }, "[1]"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(26,26,26)",
      flexShrink: 0
    }
  }, "Earnings")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 800,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(26,26,26)",
      flexShrink: 0
    }
  }, "AED 0.00")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 48,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(243,243,243)",
      display: "flex",
      flexDirection: "row",
      padding: "10px 10px 10px 10px",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(153,153,153)",
      flexShrink: 0
    }
  }, "[2]"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(26,26,26)",
      flexShrink: 0
    }
  }, "Revenue")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 800,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(26,26,26)",
      flexShrink: 0
    }
  }, "AED 0.00")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 48,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(243,243,243)",
      display: "flex",
      flexDirection: "row",
      padding: "10px 10px 10px 10px",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(153,153,153)",
      flexShrink: 0
    }
  }, "[3]"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(26,26,26)",
      flexShrink: 0
    }
  }, "Orders")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 800,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(26,26,26)",
      flexShrink: 0
    }
  }, "0")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 48,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(243,243,243)",
      display: "flex",
      flexDirection: "row",
      padding: "10px 10px 10px 10px",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(153,153,153)",
      flexShrink: 0
    }
  }, "[4]"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(26,26,26)",
      flexShrink: 0
    }
  }, "Return Orders")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 800,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(26,26,26)",
      flexShrink: 0
    }
  }, "0")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 48,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(243,243,243)",
      display: "flex",
      flexDirection: "row",
      padding: "10px 10px 10px 10px",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(153,153,153)",
      flexShrink: 0
    }
  }, "[5]"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(26,26,26)",
      flexShrink: 0
    }
  }, "Live Products")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 800,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(26,26,26)",
      flexShrink: 0
    }
  }, "5")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 48,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(243,243,243)",
      display: "flex",
      flexDirection: "row",
      padding: "10px 10px 10px 10px",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(153,153,153)",
      flexShrink: 0
    }
  }, "[6]"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(26,26,26)",
      flexShrink: 0
    }
  }, "Pending Products")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 800,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(26,26,26)",
      flexShrink: 0
    }
  }, "0")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 48,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(243,243,243)",
      display: "flex",
      flexDirection: "row",
      padding: "10px 10px 10px 10px",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(153,153,153)",
      flexShrink: 0
    }
  }, "[7]"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(26,26,26)",
      flexShrink: 0
    }
  }, "Live Packages")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 800,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(26,26,26)",
      flexShrink: 0
    }
  }, "0")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 48,
      borderRadius: "0px 0px 24px 24px",
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(243,243,243)",
      display: "flex",
      flexDirection: "row",
      padding: "10px 10px 10px 10px",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(153,153,153)",
      flexShrink: 0
    }
  }, "[8]"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(26,26,26)",
      flexShrink: 0
    }
  }, "Pending Packages")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 800,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(26,26,26)",
      flexShrink: 0
    }
  }, "0")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 13,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "var(--text-primary)",
      flexShrink: 0
    }
  }, "TOP SELLING PRODUCTS"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "var(--bg-default)",
      boxShadow: "inset 0 0 0 1px rgb(224,224,224)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 40,
      backgroundColor: "var(--bg-inverse)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 12px 8px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 24,
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 11,
      lineHeight: "100%",
      color: "var(--text-inverse)",
      flexShrink: 0
    }
  }, "ID"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 143,
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 11,
      lineHeight: "100%",
      color: "var(--text-inverse)",
      flexShrink: 0
    }
  }, "PRODUCT"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 128,
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 11,
      lineHeight: "100%",
      color: "var(--text-inverse)",
      flexShrink: 0
    }
  }, "AMOUNT"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 11,
      textAlign: "center",
      lineHeight: "100%",
      color: "var(--text-inverse)",
      flexGrow: 1
    }
  }, "STATUS")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderTop: "1px solid var(--border-default)",
      borderRight: "1px solid var(--border-default)",
      borderBottom: "1px solid var(--border-default)",
      borderLeft: "1px solid var(--border-default)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "10px 12px 10px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 24,
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 13,
      lineHeight: 1.399999976158142,
      color: "var(--text-secondary)",
      flexShrink: 0
    }
  }, "1"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 143,
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 13,
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      lineHeight: 1.399999976158142,
      color: "var(--text-primary)",
      flexShrink: 0
    }
  }, "Montana Perfume"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 14,
      lineHeight: "100%",
      color: "var(--text-primary)",
      flexGrow: 1
    }
  }, "AED 185"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 6,
      backgroundColor: "rgb(232,245,233)",
      display: "flex",
      flexDirection: "row",
      padding: "4px 6px 4px 6px",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(46,125,50)",
      flexShrink: 0
    }
  }, "Published"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderTop: "1px solid var(--border-default)",
      borderRight: "1px solid var(--border-default)",
      borderBottom: "1px solid var(--border-default)",
      borderLeft: "1px solid var(--border-default)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "10px 12px 10px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 24,
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 13,
      lineHeight: 1.399999976158142,
      color: "var(--text-secondary)",
      flexShrink: 0
    }
  }, "2"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 143,
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 13,
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      lineHeight: 1.399999976158142,
      color: "var(--text-primary)",
      flexShrink: 0
    }
  }, "Desert Oud"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 128,
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 14,
      lineHeight: "100%",
      color: "var(--text-primary)",
      flexShrink: 0
    }
  }, "AED 290"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 6,
      backgroundColor: "rgb(232,245,233)",
      display: "flex",
      flexDirection: "row",
      padding: "4px 6px 4px 6px",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(46,125,50)",
      flexShrink: 0
    }
  }, "Published")))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 34,
      display: "flex",
      flexDirection: "row",
      padding: "0px 0px 8px 0px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 134,
      height: 5,
      opacity: 0.2,
      borderRadius: 100,
      backgroundColor: "var(--text-primary)",
      flexShrink: 0
    }
  })));
}

// Globals for scripts loaded after this file.
window.Button = Button;
window.Splash = Splash;
window.Badge = Badge;
window.BottomFloatingNav = BottomFloatingNav;
window.HomeIndicator = HomeIndicator;
window.WislistIcon = WislistIcon;
window.AIPickedForYou = AIPickedForYou;
window.Screen1AIGiftFinder = Screen1AIGiftFinder;
window.AIVoiceAssistant = AIVoiceAssistant;
window.VisualSearchCamera = VisualSearchCamera;
window.ProductGallery = ProductGallery;
window.ProductGallery3 = ProductGallery3;
window.ProductPriceCompare = ProductPriceCompare;
window.GiftWrapping = GiftWrapping;
window.Edit3 = Edit3;
window.IconCheck = IconCheck;
window.IconPin = IconPin;
window.IconCard = IconCard;
window.PaymentMethodRow = PaymentMethodRow;
window.PriceRow = PriceRow;
window.Checkout = Checkout;
window.OrderTracking01 = OrderTracking01;
window.Screen1LoyaltyProgram = Screen1LoyaltyProgram;
window.MakeupArtistProfile = MakeupArtistProfile;
window.ScreenDashboard = ScreenDashboard;