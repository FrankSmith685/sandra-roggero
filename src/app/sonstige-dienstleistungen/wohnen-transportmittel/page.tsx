"use client";

import Breadcrumbs from "@/components/sonstige-dienstleistungen/vivienda-transporte/BreadCrumb";
import Header from "@/components/sonstige-dienstleistungen/vivienda-transporte/header";
import ViviendaTransporteOverview from "@/components/sonstige-dienstleistungen/vivienda-transporte/viviendaTransporteOverView";
// import Header from "@/components/sonstige-dienstleistungen/visado-idioma/header";
// import Breadcrumbs from "@/components/otros-servicios/vivienda-transporte/BreadCrumb";
// import Header from "@/components/otros-servicios/vivienda-transporte/header";
// import ViviendaTransporteOverview from "@/components/otros-servicios/vivienda-transporte/viviendaTransporteOverView";
import ContactCTA from "@/components/ui/CustomContactCTA";

export default function ViviendaTransporte() {
    return (
        <div className="w-full">
            <Header/>
            <Breadcrumbs/>
            <ViviendaTransporteOverview/>
            <ContactCTA/>
        </div>
    );
}
