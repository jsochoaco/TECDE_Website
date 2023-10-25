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
            { sub: "Diseño de planes de manufactura", imagen: "https://res.cloudinary.com/dfmsezslx/image/upload/v1698183821/TECDE/Manufactuing_zcd8lp.jpg" },
            { sub: "Modelado 3D y 2D", imagen: "https://res.cloudinary.com/dfmsezslx/image/upload/v1698181864/TECDE/3D_qtk3ir.png" },
            { sub: "Selección avanzada de materiales", imagen: "https://res.cloudinary.com/dfmsezslx/image/upload/v1698184135/TECDE/Materiales_ogqcl9.jpg" },
            { sub: "Simulaciones multifísicas", imagen: "https://res.cloudinary.com/dfmsezslx/image/upload/v1698186148/TECDE/Simulacion_xgfods.png" },
            { sub: "Pruebas técnicas y normativas de materiales", imagen: "https://res.cloudinary.com/dfmsezslx/image/upload/v1698184256/TECDE/malzeme-testleri_xg1bwj.jpg" },
            { sub: "Formación y capacitación", imagen: "https://res.cloudinary.com/dfmsezslx/image/upload/v1698184377/TECDE/Capacitacion-y-adiestramiento-1-2_xmk7h6.png" }
          ]
        },
        {
          titulo: "Consultoría para equipos y plantas",
          descripcion: "Nuestra consultoría especializada se enfoca en brindarte soluciones a medida para tus desafíos industriales. Trabajamos contigo para identificar oportunidades de mejora y aplicar estrategias que maximicen la eficiencia de tus equipos y plantas.",
          imagen: "https://res.cloudinary.com/dfmsezslx/image/upload/v1698086461/TECDE/undraw_working_re_ddwy_rhkbzj.svg",
          subservicios: [
            { sub: "Intervención de equipos para mejoras", imagen: "https://res.cloudinary.com/dfmsezslx/image/upload/v1698190959/TECDE/Interventoria_cmvrug.jpg" },
            { sub: "Certificación de diseños implementados", imagen: "https://res.cloudinary.com/dfmsezslx/image/upload/v1698191314/TECDE/Certificacion_bdqnpp.png" },
            { sub: "Diseños colaborativos para mejora de equipos", imagen: "https://res.cloudinary.com/dfmsezslx/image/upload/c_crop,ar_1:1/v1698191770/TECDE/architectural-blueprints_1_vmljip.jpg" },
            { sub: "Diagnostico de procesos productivos y manufactureros", imagen: "https://res.cloudinary.com/dfmsezslx/image/upload/v1698191473/TECDE/DashManufac_ydwpjs.png" },
            { sub: "Evaluación de eficiencia energética y operativa", imagen: "https://res.cloudinary.com/dfmsezslx/image/upload/v1698191622/TECDE/eficiencia_jb5tju.jpg" },
            { sub: "Formación y capacitación", imagen: "https://res.cloudinary.com/dfmsezslx/image/upload/v1698184377/TECDE/Capacitacion-y-adiestramiento-1-2_xmk7h6.png"}
          ]
        },
        {
          titulo: "Desarrollo de software en la nube",
          descripcion: "En un mundo cada vez más digital, TECDE ofrece soluciones de software en la nube de vanguardia para gestionar y optimizar tus operaciones, brindando flexibilidad y accesibilidad sin precedentes.",
          imagen: "https://res.cloudinary.com/dfmsezslx/image/upload/v1698086543/TECDE/undraw_code_review_re_woeb_2_yaadex.svg",
          subservicios: [
            { sub: "Digitalización de información y de indicadores", imagen: "https://res.cloudinary.com/dfmsezslx/image/upload/v1698192180/TECDE/Digitalizacion_kcofh3.jpg" },
            { sub: "Desarrollo de software personalizado", imagen: "https://res.cloudinary.com/dfmsezslx/image/upload/v1698192179/TECDE/Imagen4_zlc0ta.png" },
            { sub: "Integración de sistemas en la nube", imagen: "https://res.cloudinary.com/dfmsezslx/image/upload/v1698192321/TECDE/cloud-computing_qr4r6r.jpg" },
            { sub: "Desarrollo de aplicaciones móviles y web", imagen: "https://res.cloudinary.com/dfmsezslx/image/upload/v1698192453/TECDE/software-developer-holding-smartphone-at-workplace-T5BMWWZ_j7somg.png" },
            { sub: "Automatización de procesos con inteligencia artificial", imagen: "https://res.cloudinary.com/dfmsezslx/image/upload/v1698192843/TECDE/RPA_pmqxo2.jpg" },
            { sub: "Análisis de datos Avanzado", imagen: "https://res.cloudinary.com/dfmsezslx/image/upload/v1698192180/TECDE/Data_eoqb1m.png" },
            { sub: "Desarrollo de aplicaciones IoT", imagen: "https://res.cloudinary.com/dfmsezslx/image/upload/c_crop,ar_1:1/v1698192638/TECDE/IA_kevi5e.webp" },
            { sub: "Formación y capacitación de personal", imagen: "https://res.cloudinary.com/dfmsezslx/image/upload/v1698184377/TECDE/Capacitacion-y-adiestramiento-1-2_xmk7h6.png" }
          ]
        },
        {
          titulo: "Mantenimiento de equipos",
          descripcion: "Nuestro compromiso es garantizar que tus equipos funcionen sin problemas. Ofrecemos servicios de mantenimiento preventivo y correctivo para maximizar la vida útil de tus activos industriales.",
          imagen: "https://res.cloudinary.com/dfmsezslx/image/upload/v1698086800/TECDE/undraw_projections_re_ulc6_uxle6r.svg",
          subservicios: [
            { sub: "Diseño de planes de mantenimiento con diferentes metodologías", imagen: "https://res.cloudinary.com/dfmsezslx/image/upload/v1698194190/TECDE/mantenimiento5_ckymna.jpg" },
            { sub: "Diseño de planes de mantenimiento preventivos", imagen: "https://res.cloudinary.com/dfmsezslx/image/upload/v1698194190/TECDE/mantenimiento6_uhelew.jpg" },
            { sub: "Diseño y ejecución de planes de mantenimiento predictivos", imagen: "https://res.cloudinary.com/dfmsezslx/image/upload/v1698194192/TECDE/mantenimiento2_c4glux.jpg" },
            { sub: "Almacenamiento y seguimiento de datos e indicadores en la nube", imagen: "https://res.cloudinary.com/dfmsezslx/image/upload/v1698194189/TECDE/mantenimiento7_hynawz.jpg" },
            { sub: "Diseño de acciones para la gestión de activos", imagen: "https://res.cloudinary.com/dfmsezslx/image/upload/v1698194195/TECDE/mantenimiento4_bqorke.jpg" },
            { sub: "Seguimiento de inventarios", imagen: "https://res.cloudinary.com/dfmsezslx/image/upload/v1698194193/TECDE/matenimiento3_rwceps.jpg" },
            { sub: "Formación y capacitación de personal", imagen: "https://res.cloudinary.com/dfmsezslx/image/upload/v1698184377/TECDE/Capacitacion-y-adiestramiento-1-2_xmk7h6.png" }
          ]
        },
        {
            titulo: "Automatización de procesos",
            descripcion: "La automatización es la clave para la eficiencia operativa. En TECDE, implementamos soluciones de automatización personalizadas que aumentan la productividad, reducen costos y minimizan el error humano.",
            imagen: "https://res.cloudinary.com/dfmsezslx/image/upload/v1698086659/TECDE/undraw_chat_bot_re_e2gj_zymenq.svg",
            subservicios: [
              { sub: "Robótica Industrial", imagen: "https://res.cloudinary.com/dfmsezslx/image/upload/v1698194665/TECDE/robotica_asghh2.jpg" },
              { sub: "Automatización de procesos de fabricación", imagen: "https://res.cloudinary.com/dfmsezslx/image/upload/v1698194665/TECDE/automatizacion_zpt7xy.jpg" },
              { sub: "Automatización de almacenes y logística", imagen: "https://res.cloudinary.com/dfmsezslx/image/upload/v1698194666/TECDE/logistica_yzds06.jpg" },
              { sub: "Automatización de documentos", imagen: "https://res.cloudinary.com/dfmsezslx/image/upload/c_crop,ar_1:1/v1698194668/TECDE/documentos_timuqc.webp" },
              { sub: "Automatización de procesos de control de calidad", imagen: "https://res.cloudinary.com/dfmsezslx/image/upload/v1698194668/TECDE/control-de-calidad_kpalb3.jpg" },
              { sub: "Formación y capacitación de personal", imagen: "https://res.cloudinary.com/dfmsezslx/image/upload/v1698184377/TECDE/Capacitacion-y-adiestramiento-1-2_xmk7h6.png" }
            ]
        },
        {
            titulo: "Producción",
            descripcion: "Gestionamos tu producción con precisión y eficiencia. Nuestro enfoque en la calidad y la optimización de procesos garantiza resultados superiores en cada paso de la producción.",
            imagen: "https://res.cloudinary.com/dfmsezslx/image/upload/v1698086711/TECDE/undraw_product_iteration_kjok_fo5lcz.svg",
            subservicios: [
              { sub: "Planificación de producción", imagen: "https://res.cloudinary.com/dfmsezslx/image/upload/v1698194190/TECDE/mantenimiento5_ckymna.jpg" },
              { sub: "Control de calidad y optimización de procesos", imagen: "https://res.cloudinary.com/dfmsezslx/image/upload/v1698194668/TECDE/control-de-calidad_kpalb3.jpg" },
              { sub: "Gestión de inventario", imagen: "https://res.cloudinary.com/dfmsezslx/image/upload/c_crop,ar_1:1/v1698192638/TECDE/IA_kevi5e.webp" },
              { sub: "Análisis de rendimiento de la producción", imagen: "https://res.cloudinary.com/dfmsezslx/image/upload/v1698190959/TECDE/Interventoria_cmvrug.jpg" },
              { sub: "Desarrollo de estrategias de producción sostenible", imagen: "https://res.cloudinary.com/dfmsezslx/image/upload/v1698191622/TECDE/eficiencia_jb5tju.jpg" },
              { sub: "Formación y capacitación de personal", imagen: "https://res.cloudinary.com/dfmsezslx/image/upload/v1698184377/TECDE/Capacitacion-y-adiestramiento-1-2_xmk7h6.png" }
            ]
        },
        {
            titulo: "Gerencia y gestión de proyectos",
            descripcion: "Nuestra experiencia en gestión de proyectos te asegura que tus iniciativas se entreguen a tiempo y dentro del presupuesto. Dirigimos proyectos de principio a fin, brindando un enfoque estratégico y liderazgo experto.",
            imagen: "https://res.cloudinary.com/dfmsezslx/image/upload/v1698086798/TECDE/undraw_project_complete_lwss_bczidk.svg",
            subservicios: [
              { sub: "Planificación de proyectos", imagen: "https://res.cloudinary.com/dfmsezslx/image/upload/v1698195285/TECDE/planificacion_vxtf6i.jpg" },
              { sub: "Implementación de sistemas PLM", imagen: "https://res.cloudinary.com/dfmsezslx/image/upload/c_fill,ar_1:1/v1698195290/TECDE/PLM_hvirif.webp" },
              { sub: "Gestión de recursos", imagen: "https://res.cloudinary.com/dfmsezslx/image/upload/v1698195285/TECDE/gestionrecursos_jna8ez.jpg" },
              { sub: "Control de costos", imagen: "https://res.cloudinary.com/dfmsezslx/image/upload/v1698195287/TECDE/costos_ilejbe.jpg" },
              { sub: "Gestión de plazos", imagen: "https://res.cloudinary.com/dfmsezslx/image/upload/v1698195288/TECDE/cronograma_e72zal.jpg" },
              { sub: "Gestión de riesgos", imagen: "https://res.cloudinary.com/dfmsezslx/image/upload/c_crop,ar_1:1/v1698195292/TECDE/riesgos_htgnya.webp" },
              { sub: "Seguimiento y evaluación de desempeño", imagen: "https://res.cloudinary.com/dfmsezslx/image/upload/v1698195513/TECDE/rendimiento_wmsru6.jpg" },
              { sub: "Gestión documental en la nube", imagen: "https://res.cloudinary.com/dfmsezslx/image/upload/v1698195289/TECDE/nube_doc_gr1cly.jpg" },
              { sub: "Formación y capacitación de personal", imagen: "https://res.cloudinary.com/dfmsezslx/image/upload/v1698184377/TECDE/Capacitacion-y-adiestramiento-1-2_xmk7h6.png" }
            ]
        }
    ]

    const serviciosEN = [
      {
        titulo: "Equipment and Plant Design",
        descripcion: "Our highly skilled team of engineers is dedicated to creating innovative, efficient, and customized designs for industrial equipment and plants, optimizing productivity and ensuring the quality of your operations.",
        imagen: "https://res.cloudinary.com/dfmsezslx/image/upload/v1698086384/TECDE/undraw_designer_girl_re_h54c_bcybiy.svg",
        subservicios: [
          { sub: "Design Requirements Survey", imagen: "https://res.cloudinary.com/dfmsezslx/image/upload/v1698181650/TECDE/Requerimientos_oj8y69.jpg" },
          { sub: "Reverse Engineering", imagen: "https://res.cloudinary.com/dfmsezslx/image/upload/c_fill,ar_1:1/v1698183949/TECDE/Ingenieros_dh4via.webp" },
          { sub: "Detailed Equipment and/or Plant Design", imagen: "https://res.cloudinary.com/dfmsezslx/image/upload/v1698180001/TECDE/Modelo3d_tbmtoj.png" },
          { sub: "Manufacturing Plan Design", imagen: "https://res.cloudinary.com/dfmsezslx/image/upload/v1698183821/TECDE/Manufactuing_zcd8lp.jpg" },
          { sub: "3D and 2D Modeling", imagen: "https://res.cloudinary.com/dfmsezslx/image/upload/v1698181864/TECDE/3D_qtk3ir.png" },
          { sub: "Advanced Material Selection", imagen: "https://res.cloudinary.com/dfmsezslx/image/upload/v1698184135/TECDE/Materiales_ogqcl9.jpg" },
          { sub: "Multiphysics Simulations", imagen: "https://res.cloudinary.com/dfmsezslx/image/upload/v1698186148/TECDE/Simulacion_xgfods.png" },
          { sub: "Technical and Material Normative Testing", imagen: "https://res.cloudinary.com/dfmsezslx/image/upload/v1698184256/TECDE/malzeme-testleri_xg1bwj.jpg" },
          { sub: "Training and Education", imagen: "https://res.cloudinary.com/dfmsezslx/image/upload/v1698184377/TECDE/Capacitacion-y-adiestramiento-1-2_xmk7h6.png" }
        ]
      },
      {
        titulo: "Consulting for Equipment and Plants",
        descripcion: "Our specialized consulting focuses on providing tailored solutions for your industrial challenges. We work with you to identify improvement opportunities and apply strategies to maximize the efficiency of your equipment and plants.",
        imagen: "https://res.cloudinary.com/dfmsezslx/image/upload/v1698086461/TECDE/undraw_working_re_ddwy_rhkbzj.svg",
        subservicios: [
          { sub: "Equipment Intervention for Improvements", imagen: "https://res.cloudinary.com/dfmsezslx/image/upload/v1698190959/TECDE/Interventoria_cmvrug.jpg" },
          { sub: "Certification of Implemented Designs", imagen: "https://res.cloudinary.com/dfmsezslx/image/upload/v1698191314/TECDE/Certificacion_bdqnpp.png" },
          { sub: "Collaborative Designs for Equipment Improvement", imagen: "https://res.cloudinary.com/dfmsezslx/image/upload/c_crop,ar_1:1/v1698191770/TECDE/architectural-blueprints_1_vmljip.jpg" },
          { sub: "Diagnostic of Production and Manufacturing Processes", imagen: "https://res.cloudinary.com/dfmsezslx/image/upload/v1698191473/TECDE/DashManufac_ydwpjs.png" },
          { sub: "Evaluation of Energy and Operational Efficiency", imagen: "https://res.cloudinary.com/dfmsezslx/image/upload/v1698191622/TECDE/eficiencia_jb5tju.jpg" },
          { sub: "Training and Education", imagen: "https://res.cloudinary.com/dfmsezslx/image/upload/v1698184377/TECDE/Capacitacion-y-adiestramiento-1-2_xmk7h6.png" }
        ]
      },
      {
        titulo: "Cloud Software Development",
        descripcion: "In an increasingly digital world, TECDE offers cutting-edge cloud software solutions to manage and optimize your operations, providing unprecedented flexibility and accessibility.",
        imagen: "https://res.cloudinary.com/dfmsezslx/image/upload/v1698086543/TECDE/undraw_code_review_re_woeb_2_yaadex.svg",
        subservicios: [
          { sub: "Digitization of Information and Metrics", imagen: "https://res.cloudinary.com/dfmsezslx/image/upload/v1698192180/TECDE/Digitalizacion_kcofh3.jpg" },
          { sub: "Custom Software Development", imagen: "https://res.cloudinary.com/dfmsezslx/image/upload/v1698192179/TECDE/Imagen4_zlc0ta.png" },
          { sub: "Cloud Systems Integration", imagen: "https://res.cloudinary.com/dfmsezslx/image/upload/v1698192321/TECDE/cloud-computing_qr4r6.jpg" },
          { sub: "Mobile and Web App Development", imagen: "https://res.cloudinary.com/dfmsezslx/image/upload/v1698192453/TECDE/software-developer-holding-smartphone-at-workplace-T5BMWWZ_j7somg.png" },
          { sub: "Process Automation with Artificial Intelligence", imagen: "https://res.cloudinary.com/dfmsezslx/image/upload/v1698192843/TECDE/RPA_pmqxo2.jpg" },
          { sub: "Advanced Data Analysis", imagen: "https://res.cloudinary.com/dfmsezslx/image/upload/v1698192180/TECDE/Data_eoqb1m.png" },
          { sub: "IoT App Development", imagen: "https://res.cloudinary.com/dfmsezslx/image/upload/c_crop,ar_1:1/v1698192638/TECDE/IA_kevi5e.webp" },
          { sub: "Training and Education of Personnel", imagen: "https://res.cloudinary.com/dfmsezslx/image/upload/v1698184377/TECDE/Capacitacion-y-adiestramiento-1-2_xmk7h6.png" }
        ]
      },
      {
        titulo: "Equipment Maintenance",
        descripcion: "Our commitment is to ensure your equipment operates smoothly. We offer preventive and corrective maintenance services to maximize the lifespan of your industrial assets.",
        imagen: "https://res.cloudinary.com/dfmsezslx/image/upload/v1698086800/TECDE/undraw_projections_re_ulc6_uxle6r.svg",
        subservicios: [
          { sub: "Maintenance Plan Design with Different Methodologies", imagen: "https://res.cloudinary.com/dfmsezslx/image/upload/v1698194190/TECDE/mantenimiento5_ckymna.jpg" },
          { sub: "Design of Preventive Maintenance Plans", imagen: "https://res.cloudinary.com/dfmsezslx/image/upload/v1698194190/TECDE/mantenimiento6_uhelew.jpg" },
          { sub: "Design and Execution of Predictive Maintenance Plans", imagen: "https://res.cloudinary.com/dfmsezslx/image/upload/v1698194192/TECDE/mantenimiento2_c4glux.jpg" },
          { sub: "Cloud-Based Data and Metric Storage", imagen: "https://res.cloudinary.com/dfmsezslx/image/upload/v1698194189/TECDE/mantenimiento7_hynawz.jpg" },
          { sub: "Asset Management Strategy Design", imagen: "https://res.cloudinary.com/dfmsezslx/image/upload/v1698194195/TECDE/mantenimiento4_bqorke.jpg" },
          { sub: "Inventory Tracking", imagen: "https://res.cloudinary.com/dfmsezslx/image/upload/v1698194193/TECDE/matenimiento3_rwceps.jpg" },
          { sub: "Training and Education of Personnel", imagen: "https://res.cloudinary.com/dfmsezslx/image/upload/v1698184377/TECDE/Capacitacion-y-adiestramiento-1-2_xmk7h6.png" }
        ]
      },
      {
        titulo: "Process Automation",
        descripcion: "Automation is the key to operational efficiency. At TECDE, we implement custom automation solutions that increase productivity, reduce costs, and minimize human error.",
        imagen: "https://res.cloudinary.com/dfmsezslx/image/upload/v1698086659/TECDE/undraw_chat_bot_re_e2gj_zymenq.svg",
        subservicios: [
          { sub: "Industrial Robotics", imagen: "https://res.cloudinary.com/dfmsezslx/image/upload/v1698194665/TECDE/robotica_asghh2.jpg" },
          { sub: "Manufacturing Process Automation", imagen: "https://res.cloudinary.com/dfmsezslx/image/upload/v1698194665/TECDE/automatizacion_zpt7xy.jpg" },
          { sub: "Warehouse and Logistics Automation", imagen: "https://res.cloudinary.com/dfmsezslx/image/upload/v1698194666/TECDE/logistica_yzds06.jpg" },
          { sub: "Document Automation", imagen: "https://res.cloudinary.com/dfmsezslx/image/upload/c_crop,ar_1:1/v1698194668/TECDE/documentos_timuqc.webp" },
          { sub: "Quality Control Process Automation", imagen: "https://res.cloudinary.com/dfmsezslx/image/upload/v1698194668/TECDE/control-de-calidad_kpalb3.jpg" },
          { sub: "Training and Education of Personnel", imagen: "https://res.cloudinary.com/dfmsezslx/image/upload/v1698184377/TECDE/Capacitacion-y-adiestramiento-1-2_xmk7h6.png" }
        ]
      },
      {
        titulo: "Production",
        descripcion: "We manage your production with precision and efficiency. Our focus on quality and process optimization ensures superior results at every step of production.",
        imagen: "https://res.cloudinary.com/dfmsezslx/image/upload/v1698086711/TECDE/undraw_product_iteration_kjok_fo5lcz.svg",
        subservicios: [
          { sub: "Production Planning", imagen: "https://res.cloudinary.com/dfmsezslx/image/upload/v1698194190/TECDE/mantenimiento5_ckymna.jpg" },
          { sub: "Quality Control and Process Optimization", imagen: "https://res.cloudinary.com/dfmsezslx/image/upload/v1698194668/TECDE/control-de-calidad_kpalb3.jpg" },
          { sub: "Inventory Management", imagen: "https://res.cloudinary.com/dfmsezslx/image/upload/c_crop,ar_1:1/v1698192638/TECDE/IA_kevi5e.webp" },
          { sub: "Production Performance Analysis", imagen: "https://res.cloudinary.com/dfmsezslx/image/upload/v1698190959/TECDE/Interventoria_cmvrug.jpg" },
          { sub: "Sustainable Production Strategy Development", imagen: "https://res.cloudinary.com/dfmsezslx/image/upload/v1698191622/TECDE/eficiencia_jb5tju.jpg" },
          { sub: "Training and Education of Personnel", imagen: "https://res.cloudinary.com/dfmsezslx/image/upload/v1698184377/TECDE/Capacitacion-y-adiestramiento-1-2_xmk7h6.png" }
        ]
      },
      {
        titulo: "Project Management and Leadership",
        descripcion: "Our experience in project management ensures that your initiatives are delivered on time and within budget. We lead projects from start to finish, providing a strategic focus and expert leadership.",
        imagen: "https://res.cloudinary.com/dfmsezslx/image/upload/v1698086798/TECDE/undraw_project_complete_lwss_bczidk.svg",
        subservicios: [
          { sub: "Project Planning", imagen: "https://res.cloudinary.com/dfmsezslx/image/upload/v1698195285/TECDE/planificacion_vxtf6i.jpg" },
          { sub: "PLM System Implementation", imagen: "https://res.cloudinary.com/dfmsezslx/image/upload/c_fill,ar_1:1/v1698195290/TECDE/PLM_hvirif.webp" },
          { sub: "Resource Management", imagen: "https://res.cloudinary.com/dfmsezslx/image/upload/v1698195285/TECDE/gestionrecursos_jna8ez.jpg" },
          { sub: "Cost Control", imagen: "https://res.cloudinary.com/dfmsezslx/image/upload/v1698195287/TECDE/costos_ilejbe.jpg" },
          { sub: "Time Management", imagen: "https://res.cloudinary.com/dfmsezslx/image/upload/v1698195288/TECDE/cronograma_e72zal.jpg" },
          { sub: "Risk Management", imagen: "https://res.cloudinary.com/dfmsezslx/image/upload/c_crop,ar_1:1/v1698195292/TECDE/riesgos_htgnya.webp" },
          { sub: "Performance Monitoring and Evaluation", imagen: "https://res.cloudinary.com/dfmsezslx/image/upload/v1698195513/TECDE/rendimiento_wmsru6.jpg" },
          { sub: "Cloud Document Management", imagen: "https://res.cloudinary.com/dfmsezslx/image/upload/v1698195289/TECDE/nube_doc_gr1cly.jpg" },
          { sub: "Training and Education of Personnel", imagen: "https://res.cloudinary.com/dfmsezslx/image/upload/v1698184377/TECDE/Capacitacion-y-adiestramiento-1-2_xmk7h6.png" }
        ]
      }
    ];


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