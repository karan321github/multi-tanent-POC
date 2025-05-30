import { useEffect } from "react";
import { mockTenants } from "../mock/tenantData";

export const useTenantStyling = (tenantId: string) => {
  useEffect(() => {
    const tenantData = mockTenants[tenantId];
    if (!tenantData) return;

    const styleId = "dynamic-tenant-style";

    // Remove existing style tag if already injected
    const existingStyle = document.getElementById(styleId);
    if (existingStyle) {
      existingStyle.remove();
    }

    // Create and inject new style tag
    const style = document.createElement("style");
    style.id = styleId;
    style.innerHTML = tenantData.globalCss;
    document.head.appendChild(style);
  }, [tenantId]);
};
