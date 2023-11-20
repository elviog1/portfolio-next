import React, { useEffect } from "react";
import dynamic from "next/dynamic";

// Importa CodersRankActivity utilizando dynamic para cargarlo dinámicamente en el lado del cliente
const CodersRankActivity = dynamic(() => import("@codersrank/activity"), {
  ssr: false,
});

// Registra el componente web solo si se está ejecutando en el navegador
if (typeof window !== "undefined") {
  window.customElements.define("codersrank-activity", CodersRankActivity);
}

export default function ActivityWidget() {
  useEffect(() => {
    // Cualquier código específico del lado del cliente que puedas necesitar
  }, []);

  return (
    <div>
      <CodersRankActivity
        branding={false}
        username="elviog1"
        labels={true}
        legend={true}
        tooltip={true}
      />
    </div>
  );
}
