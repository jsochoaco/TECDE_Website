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
            { sub: "Levantamiento de requerimientos de diseño", imagen: "https://res.cloudinary.com/dfmsezslx/image/upload/v1698181650/TECDE/Requerimientos_oj8y69.jpg" },
            { sub: "Ingeniería inversa", imagen: "https://res.cloudinary.com/dfmsezslx/image/upload/c_fill,ar_1:1/v1698183949/TECDE/Ingenieros_dh4via.webp" },
            { sub: "Diseño a detalle del equipo y/o planta", imagen: "https://res.cloudinary.com/dfmsezslx/image/upload/v1698180001/TECDE/Modelo3d_tbmtoj.png" },
            { sub: "Diseño de plan de manufactura", imagen: "https://res.cloudinary.com/dfmsezslx/image/upload/v1698183821/TECDE/Manufactuing_zcd8lp.jpg" },
            { sub: "Modelado 3D y 2D", imagen: "https://res.cloudinary.com/dfmsezslx/image/upload/v1698181864/TECDE/3D_qtk3ir.png" },
            { sub: "Selección avanzada de materiales", imagen: "https://res.cloudinary.com/dfmsezslx/image/upload/v1698184135/TECDE/Materiales_ogqcl9.jpg" },
            { sub: "Simulaciones multifísicas", imagen: "" },
            { sub: "Pruebas técnicas y normativas de materiales", imagen: "https://res.cloudinary.com/dfmsezslx/image/upload/v1698184256/TECDE/malzeme-testleri_xg1bwj.jpg" },
            { sub: "Formación y capacitación", imagen: "https://res.cloudinary.com/dfmsezslx/image/upload/v1698184377/TECDE/Capacitacion-y-adiestramiento-1-2_xmk7h6.png" }
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
            { sub: "Formación y capacitación", imagen: "https://res.cloudinary.com/dfmsezslx/image/upload/v1698184377/TECDE/Capacitacion-y-adiestramiento-1-2_xmk7h6.png"}
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
            { sub: "Formación y capacitación", imagen: "https://res.cloudinary.com/dfmsezslx/image/upload/v1698184377/TECDE/Capacitacion-y-adiestramiento-1-2_xmk7h6.png" }
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
            { sub: "Formación y capacitación", imagen: "https://res.cloudinary.com/dfmsezslx/image/upload/v1698184377/TECDE/Capacitacion-y-adiestramiento-1-2_xmk7h6.png" }
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
              { sub: "Formación y capacitación", imagen: "https://res.cloudinary.com/dfmsezslx/image/upload/v1698184377/TECDE/Capacitacion-y-adiestramiento-1-2_xmk7h6.png" }
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
              { sub: "Formación y capacitación", imagen: "https://res.cloudinary.com/dfmsezslx/image/upload/v1698184377/TECDE/Capacitacion-y-adiestramiento-1-2_xmk7h6.png" }
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
        titulo: "Design of Equipment and Plants",
        descripcion: "Our highly skilled engineering team is dedicated to creating innovative, efficient, and customized designs for industrial equipment and plants, optimizing productivity and ensuring the quality of your operations.",
        imagen: "https://res.cloudinary.com/dfmsezslx/image/upload/v1698086384/TECDE/undraw_designer_girl_re_h54c_bcybiy.svg",
        subservicios: [
          { sub: "Requirements Gathering for Design", imagen: "subservice_image_url.jpg" },
          { sub: "Detailed Equipment and Plant Design", imagen: "subservice_image_url.jpg" },
          { sub: "3D and 2D Modeling", imagen: "subservice_image_url.jpg" },
          { sub: "Manufacturing Plan Design", imagen: "subservice_image_url.jpg" },
          { sub: "Reverse Engineering", imagen: "subservice_image_url.jpg" },
          { sub: "Advanced Material Selection", imagen: "subservice_image_url.jpg" },
          { sub: "Multi-Physics Simulations to Predict Equipment Behavior", imagen: "subservice_image_url.jpg" },
          { sub: "Technical and Regulatory Material Testing", imagen: "subservice_image_url.jpg" },
          { sub: "Training and Education", imagen: "subservice_image_url.jpg" }
        ]
      },
      {
        titulo: "Consulting for Equipment and Plants",
        descripcion: "Our specialized consulting focuses on providing tailor-made solutions for your industrial challenges. We work with you to identify improvement opportunities and implement strategies to maximize the efficiency of your equipment and plants.",
        imagen: "https://res.cloudinary.com/dfmsezslx/image/upload/v1698086461/TECDE/undraw_working_re_ddwy_rhkbzj.svg",
        subservicios: [
          { sub: "Equipment Intervention for Improved Operations", imagen: "subservice_image_url.jpg" },
          { sub: "Certification of Implemented Designs", imagen: "subservice_image_url.jpg" },
          { sub: "Collaborative Designs for Equipment Improvement and Process Optimization", imagen: "subservice_image_url.jpg" },
          { sub: "Diagnosis of Production and Manufacturing Processes", imagen: "subservice_image_url.jpg" },
          { sub: "Energy, Operational, and Production Efficiency Assessment", imagen: "subservice_image_url.jpg" },
          { sub: "Training and Education", imagen: "subservice_image_url.jpg" }
        ]
      },
      {
        titulo: "Cloud Software Development",
        descripcion: "In an increasingly digital world, TECDE offers cutting-edge cloud software solutions to manage and optimize your operations, providing unprecedented flexibility and accessibility.",
        imagen: "https://res.cloudinary.com/dfmsezslx/image/upload/v1698086543/TECDE/undraw_code_review_re_woeb_2_yaadex.svg",
        subservicios: [
          { sub: "Information Digitization and Indicator Collection", imagen: "subservice_image_url.jpg" },
          { sub: "Custom Software for Company-Specific Functions", imagen: "subservice_image_url.jpg" },
          { sub: "Cloud System Integration", imagen: "subservice_image_url.jpg" },
          { sub: "Mobile and Web Application Development", imagen: "subservice_image_url.jpg" },
          { sub: "Process Automation through Digital Tools", imagen: "subservice_image_url.jpg" },
          { sub: "Advanced Data Analysis", imagen: "subservice_image_url.jpg" },
          { sub: "IoT Application Development", imagen: "subservice_image_url.jpg" },
          { sub: "Training and Education", imagen: "subservice_image_url.jpg" }
        ]
      },
      {
        titulo: "Equipment Maintenance",
        descripcion: "Our commitment is to ensure that your equipment functions smoothly. We offer preventive and corrective maintenance services to maximize the lifespan of your industrial assets.",
        imagen: "https://res.cloudinary.com/dfmsezslx/image/upload/v1698086800/TECDE/undraw_projections_re_ulc6_uxle6r.svg",
        subservicios: [
          { sub: "Maintenance Plan Design using Various Methodologies", imagen: "subservice_image_url.jpg" },
          { sub: "Design of Preventive Maintenance Plans", imagen: "subservice_image_url.jpg" },
          { sub: "Design and Execution of Predictive Maintenance Plans", imagen: "subservice_image_url.jpg" },
          { sub: "Data and Indicator Storage and Monitoring in the Cloud", imagen: "subservice_image_url.jpg" },
          { sub: "CMMS Design and Maintenance", imagen: "subservice_image_url.jpg" },
          { sub: "Design and Monitoring of Asset Management Actions", imagen: "subservice_image_url.jpg" },
          { sub: "Inventory Tracking", imagen: "subservice_image_url.jpg" },
          { sub: "Inventory Tracking", imagen: "subservice_image_url.jpg" },
          { sub: "Training and Education", imagen: "subservice_image_url.jpg" }
        ]
      },
      {
          titulo: "Process Automation",
          descripcion: "Automation is the key to operational efficiency. At TECDE, we implement personalized automation solutions that increase productivity, reduce costs, and minimize human error.",
          imagen: "https://res.cloudinary.com/dfmsezslx/image/upload/v1698086659/TECDE/undraw_chat_bot_re_e2gj_zymenq.svg",
          subservicios: [
            { sub: "Industrial Robotics", imagen: "subservice_image_url.jpg" },
            { sub: "Manufacturing Process Automation", imagen: "subservice_image_url.jpg" },
            { sub: "Warehouses and Logistics Automation", imagen: "subservice_image_url.jpg" },
            { sub: "Document Automation", imagen: "subservice_image_url.jpg" },
            { sub: "Quality Control Process Automation", imagen: "subservice_image_url.jpg" },
            { sub: "Training and Education", imagen: "subservice_image_url.jpg" }
          ]
      },
      {
          titulo: "Production",
          descripcion: "We manage your production with precision and efficiency. Our focus on quality and process optimization guarantees superior results at every step of production.",
          imagen: "https://res.cloudinary.com/dfmsezslx/image/upload/v1698086711/TECDE/undraw_product_iteration_kjok_fo5lcz.svg",
          subservicios: [
            { sub: "Production Planning", imagen: "subservice_image_url.jpg" },
            { sub: "Quality Control and Process Optimization", imagen: "subservice_image_url.jpg" },
            { sub: "Inventory Management", imagen: "subservice_image_url.jpg" },
            { sub: "Production Performance Analysis", imagen: "subservice_image_url.jpg" },
            { sub: "Development of Sustainable Production Strategies", imagen: "subservice_image_url.jpg" },
            { sub: "Training and Education", imagen: "subservice_image_url.jpg" }
          ]
      },
      {
          titulo: "Project Management and Leadership",
          descripcion: "Our experience in project management ensures that your initiatives are delivered on time and within budget. We lead projects from start to finish, providing a strategic focus and expert leadership.",
          imagen: "https://res.cloudinary.com/dfmsezslx/image/upload/v1698086798/TECDE/undraw_project_complete_lwss_bczidk.svg",
          subservicios: [
            { sub: "Project Planning", imagen: "subservice_image_url.jpg" },
            { sub: "Resource Management", imagen: "subservice_image_url.jpg" },
            { sub: "Cost Control", imagen: "subservice_image_url.jpg" },
            { sub: "Time Management", imagen: "subservice_image_url.jpg" },
            { sub: "Risk Management", imagen: "subservice_image_url.jpg" },
            { sub: "Communication and Coordination", imagen: "subservice_image_url.jpg" },
            { sub: "Performance Monitoring and Evaluation", imagen: "subservice_image_url.jpg" },
            { sub: "PLM System Implementation", imagen: "subservice_image_url.jpg" },
            { sub: "Cloud Document Management", imagen: "subservice_image_url.jpg" }
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