import styles from "./servicios.module.css"
import { useSelector } from "react-redux"
import { useState } from "react"
import Subservicios from "./Subservicios"

const Servicios = () => {
    const idiomaActual = useSelector((state) => state.idioma)
    const serviciosES = [
        {
          titulo: "Diseño de equipos y plantas",
          descripcion: "Nuestro equipo de ingenieros altamente capacitados se dedica a crear diseños innovadores, eficientes y personalizados para equipos y plantas industriales, que optimizan la productividad y garantizan la calidad de tus operaciones.",
          imagen: "https://res.cloudinary.com/dfmsezslx/image/upload/v1698086384/TECDE/undraw_designer_girl_re_h54c_bcybiy.svg",
          subservicios: [
            { sub: "Levantamiento de requerimientos de diseño", imagen: "url_de_la_imagen_del_subservicio.jpg" },
            { sub: "Diseño a detalle del equipo y/o planta", imagen: "url_de_la_imagen_del_subservicio.jpg" },
            { sub: "Modelado 3D y 2D", imagen: "url_de_la_imagen_del_subservicio.jpg" },
            { sub: "Diseño de plan de manufactura", imagen: "url_de_la_imagen_del_subservicio.jpg" },
            { sub: "Ingeniería inversa", imagen: "url_de_la_imagen_del_subservicio.jpg" },
            { sub: "Selección avanzada de materiales", imagen: "url_de_la_imagen_del_subservicio.jpg" },
            { sub: "Simulaciones multifísicas", imagen: "url_de_la_imagen_del_subservicio.jpg" },
            { sub: "Pruebas técnicas y normativas de materiales", imagen: "url_de_la_imagen_del_subservicio.jpg" },
            { sub: "Formación y capacitación", imagen: "url_de_la_imagen_del_subservicio.jpg" }
          ]
        },
        {
          titulo: "Consultoría para equipos y plantas",
          descripcion: "Nuestra consultoría especializada se enfoca en brindarte soluciones a medida para tus desafíos industriales. Trabajamos contigo para identificar oportunidades de mejora y aplicar estrategias que maximicen la eficiencia de tus equipos y plantas.",
          imagen: "https://res.cloudinary.com/dfmsezslx/image/upload/v1698086461/TECDE/undraw_working_re_ddwy_rhkbzj.svg",
          subservicios: [
            { sub: "Intervención de equipos para mejoras operaciones", imagen: "url_de_la_imagen_del_subservicio.jpg" },
            { sub: "Certificación de diseños implementados", imagen: "url_de_la_imagen_del_subservicio.jpg" },
            { sub: "Diseños colaborativos para mejora de equipos", imagen: "url_de_la_imagen_del_subservicio.jpg" },
            { sub: "Diagnostico de procesos productivos y manufactureros", imagen: "url_de_la_imagen_del_subservicio.jpg" },
            { sub: "Evaluación de eficiencia energética y operativa", imagen: "url_de_la_imagen_del_subservicio.jpg" },
            { sub: "Formación y capacitación", imagen: "url_de_la_imagen_del_subservicio.jpg"}
          ]
        },
        {
          titulo: "Desarrollo de software en la nube",
          descripcion: "En un mundo cada vez más digital, TECDE ofrece soluciones de software en la nube de vanguardia para gestionar y optimizar tus operaciones, brindando flexibilidad y accesibilidad sin precedentes.",
          imagen: "https://res.cloudinary.com/dfmsezslx/image/upload/v1698086543/TECDE/undraw_code_review_re_woeb_2_yaadex.svg",
          subservicios: [
            { sub: "Digitalización de información y levantamiento de indicadores", imagen: "url_de_la_imagen_del_subservicio.jpg" },
            { sub: "Software personalizado para funciones especificas", imagen: "url_de_la_imagen_del_subservicio.jpg" },
            { sub: "Integración de sistemas en la nube", imagen: "url_de_la_imagen_del_subservicio.jpg" },
            { sub: "Desarrollo de aplicaciones móviles y web", imagen: "url_de_la_imagen_del_subservicio.jpg" },
            { sub: "Automatización de procesos por medio de herramientas digitales", imagen: "url_de_la_imagen_del_subservicio.jpg" },
            { sub: "Análisis de Datos Avanzado", imagen: "url_de_la_imagen_del_subservicio.jpg" },
            { sub: "Desarrollo de Aplicaciones IoT", imagen: "url_de_la_imagen_del_subservicio.jpg" },
            { sub: "Formación y capacitación", imagen: "url_de_la_imagen_del_subservicio.jpg" }
          ]
        },
        {
          titulo: "Mantenimiento de equipos",
          descripcion: "Nuestro compromiso es garantizar que tus equipos funcionen sin problemas. Ofrecemos servicios de mantenimiento preventivo y correctivo para maximizar la vida útil de tus activos industriales.",
          imagen: "https://res.cloudinary.com/dfmsezslx/image/upload/v1698086800/TECDE/undraw_projections_re_ulc6_uxle6r.svg",
          subservicios: [
            { sub: "Diseño de planes de mantenimiento a partir de diversas metodologías", imagen: "url_de_la_imagen_del_subservicio.jpg" },
            { sub: "Diseño de planes de mantenimiento preventivos", imagen: "url_de_la_imagen_del_subservicio.jpg" },
            { sub: "Diseño y ejecución de planes de mantenimiento predictivos", imagen: "url_de_la_imagen_del_subservicio.jpg" },
            { sub: "Almacenamiento y seguimiento de datos e indicadores en la nube", imagen: "url_de_la_imagen_del_subservicio.jpg" },
            { sub: "Diseño y mantenimiento de CMMS", imagen: "url_de_la_imagen_del_subservicio.jpg" },
            { sub: "Diseño y seguimiento de acciones para la gestión de activos", imagen: "url_de_la_imagen_del_subservicio.jpg" },
            { sub: "Seguimiento de inventarios", imagen: "url_de_la_imagen_del_subservicio.jpg" },
            { sub: "Seguimiento de inventarios", imagen: "url_de_la_imagen_del_subservicio.jpg" },
            { sub: "Formación y capacitación", imagen: "url_de_la_imagen_del_subservicio.jpg" }
          ]
        },
        {
            titulo: "Automatización de procesos",
            descripcion: "La automatización es la clave para la eficiencia operativa. En TECDE, implementamos soluciones de automatización personalizadas que aumentan la productividad, reducen costos y minimizan el error humano.",
            imagen: "https://res.cloudinary.com/dfmsezslx/image/upload/v1698086659/TECDE/undraw_chat_bot_re_e2gj_zymenq.svg",
            subservicios: [
              { sub: "Robótica Industrial", imagen: "url_de_la_imagen_del_subservicio.jpg" },
              { sub: "Automatización de Procesos de Fabricación", imagen: "url_de_la_imagen_del_subservicio.jpg" },
              { sub: "Automatización de Almacenes y Logística", imagen: "url_de_la_imagen_del_subservicio.jpg" },
              { sub: "Automatización de Documentos", imagen: "url_de_la_imagen_del_subservicio.jpg" },
              { sub: "Automatización de Procesos de Control de Calidad", imagen: "url_de_la_imagen_del_subservicio.jpg" },
              { sub: "Formación y capacitación", imagen: "url_de_la_imagen_del_subservicio.jpg" }
            ]
        },
        {
            titulo: "Producción",
            descripcion: "Gestionamos tu producción con precisión y eficiencia. Nuestro enfoque en la calidad y la optimización de procesos garantiza resultados superiores en cada paso de la producción.",
            imagen: "https://res.cloudinary.com/dfmsezslx/image/upload/v1698086711/TECDE/undraw_product_iteration_kjok_fo5lcz.svg",
            subservicios: [
              { sub: "Planificación de Producción", imagen: "url_de_la_imagen_del_subservicio.jpg" },
              { sub: "Control de Calidad y Optimización de procesos", imagen: "url_de_la_imagen_del_subservicio.jpg" },
              { sub: "Gestión de Inventario", imagen: "url_de_la_imagen_del_subservicio.jpg" },
              { sub: "Análisis de Rendimiento de la Producción", imagen: "url_de_la_imagen_del_subservicio.jpg" },
              { sub: "Desarrollo de Estrategias de Producción Sostenible", imagen: "url_de_la_imagen_del_subservicio.jpg" },
              { sub: "Formación y capacitación", imagen: "url_de_la_imagen_del_subservicio.jpg" }
            ]
        },
        {
            titulo: "Gerencia y gestión de proyectos",
            descripcion: "Nuestra experiencia en gestión de proyectos te asegura que tus iniciativas se entreguen a tiempo y dentro del presupuesto. Dirigimos proyectos de principio a fin, brindando un enfoque estratégico y liderazgo experto.",
            imagen: "https://res.cloudinary.com/dfmsezslx/image/upload/v1698086798/TECDE/undraw_project_complete_lwss_bczidk.svg",
            subservicios: [
              { sub: "Planificación de Proyectos", imagen: "url_de_la_imagen_del_subservicio.jpg" },
              { sub: "Gestión de Recursos", imagen: "url_de_la_imagen_del_subservicio.jpg" },
              { sub: "Control de Costos", imagen: "url_de_la_imagen_del_subservicio.jpg" },
              { sub: "Gestión de Plazos", imagen: "url_de_la_imagen_del_subservicio.jpg" },
              { sub: "Gestión de Riesgos", imagen: "url_de_la_imagen_del_subservicio.jpg" },
              { sub: "Comunicación y Coordinación", imagen: "url_de_la_imagen_del_subservicio.jpg" },
              { sub: "Seguimiento y Evaluación del Desempeño", imagen: "url_de_la_imagen_del_subservicio.jpg" },
              { sub: "Implementación de Sistemas PLM", imagen: "url_de_la_imagen_del_subservicio.jpg" },
              { sub: "Gestión documental en la nube", imagen: "url_de_la_imagen_del_subservicio.jpg" }
            ]
        }
    ]

    const serviciosEN = [
        {
          titulo: "Diseño de equipos y plantas",
          descripcion: "Nuestro equipo de ingenieros altamente capacitados se dedica a crear diseños innovadores, eficientes y personalizados para equipos y plantas industriales, que optimizan la productividad y garantizan la calidad de tus operaciones.",
          imagen: "https://res.cloudinary.com/dfmsezslx/image/upload/v1698086095/TECDE/undraw_factory_dy-0-a_ob1htl.svgurl_de_la_imagen.jpg",
          subservicios: [
            { sub: "Levantamiento de requerimientos de diseño", imagen: "url_de_la_imagen_del_subservicio.jpg" },
            { sub: "Diseño a detalle del equipo y/o planta", imagen: "url_de_la_imagen_del_subservicio.jpg" },
            { sub: "Modelado 3D y 2D", imagen: "url_de_la_imagen_del_subservicio.jpg" },
            { sub: "Diseño de plan de manufactura", imagen: "url_de_la_imagen_del_subservicio.jpg" },
            { sub: "Ingeniería inversa", imagen: "url_de_la_imagen_del_subservicio.jpg" },
            { sub: "Selección avanzada de materiales", imagen: "url_de_la_imagen_del_subservicio.jpg" },
            { sub: "Simulaciones multifísicas para prever el comportamiento del equipo", imagen: "url_de_la_imagen_del_subservicio.jpg" },
            { sub: "Pruebas técnicas y normativas de materiales", imagen: "url_de_la_imagen_del_subservicio.jpg" },
            { sub: "Formación y capacitación", imagen: "url_de_la_imagen_del_subservicio.jpg" }
          ]
        },
        {
          titulo: "Consultoría para equipos y plantas",
          descripcion: "Nuestra consultoría especializada se enfoca en brindarte soluciones a medida para tus desafíos industriales. Trabajamos contigo para identificar oportunidades de mejora y aplicar estrategias que maximicen la eficiencia de tus equipos y plantas.",
          imagen: "url_de_la_imagen.jpg",
          subservicios: [
            { sub: "Intervención de equipos para mejoras operaciones", imagen: "url_de_la_imagen_del_subservicio.jpg" },
            { sub: "Certificación de diseños implementados por la empresa", imagen: "url_de_la_imagen_del_subservicio.jpg" },
            { sub: "Diseños colaborativos para la mejorar de equipos y optimización de procesos", imagen: "url_de_la_imagen_del_subservicio.jpg" },
            { sub: "Diagnostico de procesos productivos y manufactureros", imagen: "url_de_la_imagen_del_subservicio.jpg" },
            { sub: "Evaluación de eficiencia energética, operativa y productiva", imagen: "url_de_la_imagen_del_subservicio.jpg" },
            { sub: "Formación y capacitación", imagen: "url_de_la_imagen_del_subservicio.jpg" }
          ]
        },
        {
          titulo: "Desarrollo de software en la nube",
          descripcion: "En un mundo cada vez más digital, TECDE ofrece soluciones de software en la nube de vanguardia para gestionar y optimizar tus operaciones, brindando flexibilidad y accesibilidad sin precedentes.",
          imagen: "url_de_la_imagen.jpg",
          subservicios: [
            { sub: "Digitalización de información y levantamiento de indicadores", imagen: "url_de_la_imagen_del_subservicio.jpg" },
            { sub: "Software personalizado para funciones especificas de la empresa", imagen: "url_de_la_imagen_del_subservicio.jpg" },
            { sub: "Integración de sistemas en la nube", imagen: "url_de_la_imagen_del_subservicio.jpg" },
            { sub: "Desarrollo de aplicaciones móviles y web", imagen: "url_de_la_imagen_del_subservicio.jpg" },
            { sub: "Automatización de procesos por medio de herramientas digitales", imagen: "url_de_la_imagen_del_subservicio.jpg" },
            { sub: "Análisis de Datos Avanzado", imagen: "url_de_la_imagen_del_subservicio.jpg" },
            { sub: "Desarrollo de Aplicaciones IoT", imagen: "url_de_la_imagen_del_subservicio.jpg" },
            { sub: "Desarrollo de Aplicaciones IoT", imagen: "url_de_la_imagen_del_subservicio.jpg" },
            { sub: "Formación y capacitación", imagen: "url_de_la_imagen_del_subservicio.jpg" }
          ]
        },
        {
          titulo: "Mantenimiento de equipos",
          descripcion: "Nuestro compromiso es garantizar que tus equipos funcionen sin problemas. Ofrecemos servicios de mantenimiento preventivo y correctivo para maximizar la vida útil de tus activos industriales.",
          imagen: "url_de_la_imagen.jpg",
          subservicios: [
            { sub: "Diseño de planes de mantenimiento a partir de diversas metodologías", imagen: "url_de_la_imagen_del_subservicio.jpg" },
            { sub: "Diseño de planes de mantenimiento preventivos", imagen: "url_de_la_imagen_del_subservicio.jpg" },
            { sub: "Diseño y ejecución de planes de mantenimiento predictivos", imagen: "url_de_la_imagen_del_subservicio.jpg" },
            { sub: "Almacenamiento y seguimiento de datos e indicadores en la nube", imagen: "url_de_la_imagen_del_subservicio.jpg" },
            { sub: "Diseño y mantenimiento de CRM", imagen: "url_de_la_imagen_del_subservicio.jpg" },
            { sub: "Diseño y seguimiento de acciones para la gestión de activos", imagen: "url_de_la_imagen_del_subservicio.jpg" },
            { sub: "Seguimiento de inventarios", imagen: "url_de_la_imagen_del_subservicio.jpg" },
            { sub: "Seguimiento de inventarios", imagen: "url_de_la_imagen_del_subservicio.jpg" },
            { sub: "Formación y capacitación", imagen: "url_de_la_imagen_del_subservicio.jpg" }
          ]
        },
        {
            titulo: "Automatización de procesos",
            descripcion: "La automatización es la clave para la eficiencia operativa. En TECDE, implementamos soluciones de automatización personalizadas que aumentan la productividad, reducen costos y minimizan el error humano.",
            imagen: "url_de_la_imagen.jpg",
            subservicios: [
              { sub: "Robótica Industrial", imagen: "url_de_la_imagen_del_subservicio.jpg" },
              { sub: "Automatización de Procesos de Fabricación", imagen: "url_de_la_imagen_del_subservicio.jpg" },
              { sub: "Automatización de Almacenes y Logística", imagen: "url_de_la_imagen_del_subservicio.jpg" },
              { sub: "Automatización de Documentos", imagen: "url_de_la_imagen_del_subservicio.jpg" },
              { sub: "Automatización de Procesos de Control de Calidad", imagen: "url_de_la_imagen_del_subservicio.jpg" },
              { sub: "Formación y capacitación", imagen: "url_de_la_imagen_del_subservicio.jpg" }
            ]
        },
        {
            titulo: "Producción",
            descripcion: "Gestionamos tu producción con precisión y eficiencia. Nuestro enfoque en la calidad y la optimización de procesos garantiza resultados superiores en cada paso de la producción.",
            imagen: "url_de_la_imagen.jpg",
            subservicios: [
              { sub: "Planificación de Producción", imagen: "url_de_la_imagen_del_subservicio.jpg" },
              { sub: "Control de Calidad y Optimización de procesos", imagen: "url_de_la_imagen_del_subservicio.jpg" },
              { sub: "Gestión de Inventario", imagen: "url_de_la_imagen_del_subservicio.jpg" },
              { sub: "Análisis de Rendimiento de la Producción", imagen: "url_de_la_imagen_del_subservicio.jpg" },
              { sub: "Desarrollo de Estrategias de Producción Sostenible", imagen: "url_de_la_imagen_del_subservicio.jpg" },
              { sub: "Formación y capacitación", imagen: "url_de_la_imagen_del_subservicio.jpg" }
            ]
        },
        {
            titulo: "Gerencia y gestión de proyectos",
            descripcion: "Nuestra experiencia en gestión de proyectos te asegura que tus iniciativas se entreguen a tiempo y dentro del presupuesto. Dirigimos proyectos de principio a fin, brindando un enfoque estratégico y liderazgo experto.",
            imagen: "url_de_la_imagen.jpg",
            subservicios: [
              { sub: "Planificación de Proyectos", imagen: "url_de_la_imagen_del_subservicio.jpg" },
              { sub: "Gestión de Recursos", imagen: "url_de_la_imagen_del_subservicio.jpg" },
              { sub: "Control de Costos", imagen: "url_de_la_imagen_del_subservicio.jpg" },
              { sub: "Gestión de Plazos", imagen: "url_de_la_imagen_del_subservicio.jpg" },
              { sub: "Gestión de Riesgos", imagen: "url_de_la_imagen_del_subservicio.jpg" },
              { sub: "Comunicación y Coordinación", imagen: "url_de_la_imagen_del_subservicio.jpg" },
              { sub: "Seguimiento y Evaluación del Desempeño", imagen: "url_de_la_imagen_del_subservicio.jpg" },
              { sub: "Implementación de Sistemas PLM", imagen: "url_de_la_imagen_del_subservicio.jpg" },
              { sub: "Gestión documental en la nube", imagen: "url_de_la_imagen_del_subservicio.jpg" }
            ]
        }
    ]


    var servicios = [];
    if (idiomaActual === "es") {
        servicios = [...serviciosES];
    } 
    else {
        servicios = [...serviciosEN];
    }

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevCard = () => {
      setCurrentIndex((currentIndex - 1 + servicios.length) % servicios.length);
    };
  
    const nextCard = () => {
      setCurrentIndex((currentIndex + 1) % servicios.length);
    };

    return (
        <div className={styles.contenedorGral}> 
            <div className={styles.divBannerServ}>
                <h1 className={styles.ServiciosTitulo}>{idiomaActual === "es" ? "Nuestros servicios a tu disposición":"Our services at your disposal"}</h1>
                <h2 className={styles.Secundario}>{idiomaActual === "es" ? "Transformarán tecnológicamente a tu empresa":"will transform technologically your company"}</h2>
            </div>
            <div className={styles.servicio}>
                <div className={styles.principalTitulo}>
                    <button className={styles.prevButton} onClick={prevCard}>&#8249;</button>
                    <h2 className={styles.tituloser}>{servicios[currentIndex].titulo}</h2>
                    <button className={styles.nextButton} onClick={nextCard}>&#8250;</button>
                </div>
                <div className={styles.principal}>
                        <img className={styles.imgserv} src={servicios[currentIndex].imagen} alt={servicios[currentIndex].titulo} />
                        <p className={styles.descripcion}>{servicios[currentIndex].descripcion}</p>
                </div>
                <div className={styles.carruselImport}>
                    <Subservicios subservicios={servicios[currentIndex].subservicios}/>
                </div>
            </div>
        </div>

    )
}

export default Servicios