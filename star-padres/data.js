const DOMINIOS = [
  {
    "slug": "comprender",
    "nombre": "Comprender la Neurodivergencia",
    "color": "#3b82f6",
    "icon": "<path d=\"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z\"/>",
    "habilidades": [
      {
        "slug": "diferenciar-conducta-necesidad",
        "nombre": "Diferenciar Conducta de Necesidad",
        "emoji": "🔍",
        "descripcion": "No quiere ≠ no puede. Oposición ≠ sobrecarga. Silencio ≠ desinterés.",
        "situaciones": [
          {
            "q": "Tu hijo/a se niega a ponerse el abrigo aunque hace frío.",
            "good": "Piensas que puede ser una molestia sensorial con la tela y le ofreces otra opción de abrigo.",
            "bad": "Asumes que está siendo desobediente y lo obligas a ponérselo a la fuerza."
          },
          {
            "q": "En la mesa, tu hijo/a rechaza un plato que antes comía sin problema.",
            "good": "Consideras que algo sensorial cambió (textura, olor) y le preguntas qué le incomoda.",
            "bad": "Le dices que está siendo caprichoso y lo obligas a comerlo igual."
          },
          {
            "q": "Tu hijo/a no responde cuando lo llamas desde otra habitación.",
            "good": "Te acercas y confirmas si te escuchó, sin asumir que te está ignorando.",
            "bad": "Levantas la voz pensando que te ignora a propósito."
          },
          {
            "q": "Pides a tu hijo/a que se apure para salir y se queda inmóvil.",
            "good": "Reconoces que puede estar en sobrecarga de transición y le das un momento y pasos simples.",
            "bad": "Lo regañas por 'no cooperar' y lo apuras físicamente."
          },
          {
            "q": "Tu hijo/a se resiste a saludar a un familiar que visita.",
            "good": "Entiendes que el contacto social espontáneo puede costarle y no lo fuerzas a abrazar.",
            "bad": "Lo obligas a saludar 'por educación' delante de todos."
          },
          {
            "q": "Durante la tarea escolar, tu hijo/a se detiene y no continúa.",
            "good": "Consideras que puede estar agotado cognitivamente, no que esté siendo flojo.",
            "bad": "Le dices que no se esfuerza lo suficiente y lo presionas a seguir."
          },
          {
            "q": "Tu hijo/a llora al cambiar de una actividad a otra.",
            "good": "Reconoces que la transición le genera angustia real, no un capricho.",
            "bad": "Le dices que está exagerando y que se le pasará."
          },
          {
            "q": "Tu hijo/a repite la misma pregunta varias veces.",
            "good": "Entiendes que puede necesitar la repetición para regular ansiedad, y respondes con calma.",
            "bad": "Te frustras y le dices que deje de preguntar lo mismo."
          },
          {
            "q": "Tu hijo/a se tapa los oídos en una reunión familiar ruidosa.",
            "good": "Reconoces sobrecarga auditiva y buscas un lugar más tranquilo con él/ella.",
            "bad": "Le dices que no sea dramático y que se aguante."
          },
          {
            "q": "Tu hijo/a se niega a probar un juego nuevo con primos.",
            "good": "Consideras que lo desconocido le genera inseguridad, no rechazo a la familia.",
            "bad": "Lo empujas a jugar diciendo que está siendo antisocial."
          },
          {
            "q": "Tu hijo/a se queda en silencio tras un día de colegio.",
            "good": "Piensas que puede estar recuperándose de sobrecarga social, no evitándote.",
            "bad": "Insistes en que te cuente todo de inmediato."
          },
          {
            "q": "Tu hijo/a evita mirarte a los ojos mientras hablan.",
            "good": "Sabes que puede procesar mejor sin contacto visual directo.",
            "bad": "Le exiges que te mire cuando le hablas."
          },
          {
            "q": "Tu hijo/a se enoja al cambiar los muebles de lugar.",
            "good": "Entiendes que el cambio en el entorno conocido le desestabiliza.",
            "bad": "Le dices que está siendo controlador por una tontería."
          },
          {
            "q": "Tu hijo/a no quiere ir a una fiesta de cumpleaños.",
            "good": "Consideras que el entorno social intenso le genera anticipación de agobio.",
            "bad": "Lo obligas a ir para que 'socialice como los demás'."
          },
          {
            "q": "Tu hijo/a se queda quieto sin reaccionar tras un regaño.",
            "good": "Reconoces que puede estar en shutdown, no ignorándote con desdén.",
            "bad": "Le exiges una respuesta inmediata y subes el tono."
          },
          {
            "q": "Tu hijo/a se resiste a bañarse a la hora habitual.",
            "good": "Averiguas si algo sensorial del agua o la rutina cambió.",
            "bad": "Asumes que es pura pereza y lo fuerzas verbalmente."
          },
          {
            "q": "Tu hijo/a interrumpe reiteradamente cuando hablas con otro adulto.",
            "good": "Consideras que puede tener dificultad para esperar turno, no falta de respeto.",
            "bad": "Lo regañas en público por 'maleducado'."
          },
          {
            "q": "Tu hijo/a se frustra mucho al perder en un juego de mesa.",
            "good": "Entiendes que la rigidez ante la pérdida es parte de su perfil, no un berrinche vacío.",
            "bad": "Le dices que 'siempre exagera' y minimizas su reacción."
          },
          {
            "q": "Tu hijo/a no quiere usar cierta ropa aunque combine bien.",
            "good": "Investigas si hay molestia sensorial en la tela o etiquetas.",
            "bad": "Insistes en que se la ponga porque 'se ve bien'."
          },
          {
            "q": "Tu hijo/a se queda parado sin avanzar en medio de un centro comercial.",
            "good": "Reconoces posible sobrecarga sensorial y buscas reducir estímulos.",
            "bad": "Lo jalas del brazo diciéndole que deje de hacer show."
          }
        ]
      },
      {
        "slug": "identificar-diferencias-neurologicas",
        "nombre": "Identificar Diferencias Neurológicas",
        "emoji": "🧠",
        "descripcion": "Comprender procesamiento, atención, funciones ejecutivas y comunicación.",
        "situaciones": [
          {
            "q": "Tu hijo/a tarda mucho más que sus hermanos en terminar la tarea.",
            "good": "Reconoces que su ritmo de procesamiento es distinto y ajustas expectativas de tiempo.",
            "bad": "Lo comparas con sus hermanos y le dices que se esfuerce más."
          },
          {
            "q": "Da instrucciones de tres pasos y solo hace el primero.",
            "good": "Entiendes que la memoria de trabajo puede saturarse y das un paso a la vez.",
            "bad": "Repites la instrucción completa cada vez más fuerte."
          },
          {
            "q": "Tu hijo/a se distrae fácilmente durante la cena familiar.",
            "good": "Sabes que sostener atención en ambientes con múltiples estímulos le cuesta más.",
            "bad": "Lo regañas por 'no prestar atención nunca'."
          },
          {
            "q": "No logra empezar una tarea aunque sabe cómo hacerla.",
            "good": "Reconoces una dificultad de inicio ejecutivo y lo ayudas a arrancar juntos.",
            "bad": "Le dices que es puro flojera y lo dejas solo con la tarea."
          },
          {
            "q": "Tu hijo/a habla de forma muy literal y no capta el sarcasmo.",
            "good": "Ajustas tu lenguaje para ser más directo y claro con él/ella.",
            "bad": "Te burlas de que 'nunca entiende las bromas'."
          },
          {
            "q": "Se hiperconcentra en un tema y no nota que lo llamas.",
            "good": "Reconoces que su atención funciona distinto, no que te ignora.",
            "bad": "Le apagas el interés bruscamente para obligarlo a responder."
          },
          {
            "q": "Olvida llevar sus cosas al colegio a pesar de recordatorios.",
            "good": "Entiendes que la organización ejecutiva necesita apoyos externos (listas, rutinas visuales).",
            "bad": "Lo culpas de ser 'despistado a propósito'."
          },
          {
            "q": "Tu hijo/a necesita más tiempo para responder una pregunta.",
            "good": "Le das espacio de silencio sin apresurarlo a contestar.",
            "bad": "Respondes por él/ella o repites la pregunta impaciente."
          },
          {
            "q": "Se equivoca de nuevo en algo que ya se le explicó varias veces.",
            "good": "Consideras que la generalización de aprendizajes puede tardar más y repites con paciencia.",
            "bad": "Le dices que 'nunca aprende' y te frustras visiblemente."
          },
          {
            "q": "Tu hijo/a cambia de tema abruptamente en una conversación.",
            "good": "Reconoces que su asociación de ideas funciona distinto y sigues el hilo con curiosidad.",
            "bad": "Lo corriges por 'no seguir la conversación como debería'."
          },
          {
            "q": "No nota cuándo terminó su turno de hablar y sigue hablando.",
            "good": "Le enseñas con calma señales concretas para identificar el cambio de turno.",
            "bad": "Lo callas abruptamente delante de otros."
          },
          {
            "q": "Tu hijo/a necesita rutinas exactas para funcionar bien en la mañana.",
            "good": "Entiendes que la previsibilidad reduce la carga cognitiva, no es capricho.",
            "bad": "Le dices que 'es demasiado exigente' con los horarios."
          },
          {
            "q": "Se le dificulta planear los pasos para un proyecto escolar.",
            "good": "Lo ayudas a dividir el proyecto en pasos pequeños, apoyando la función ejecutiva.",
            "bad": "Le dices que se organice solo, 'ya tiene edad'."
          },
          {
            "q": "Tu hijo/a repite palabras o frases de programas que le gustan.",
            "good": "Reconoces la ecolalia como parte de su comunicación y respondes con interés.",
            "bad": "Le dices que deje de hablar 'raro'."
          },
          {
            "q": "No identifica cuándo alguien está aburrido de escucharlo.",
            "good": "Le das después, en privado, señales concretas para reconocer el desinterés ajeno.",
            "bad": "Lo avergüenzas delante de otros diciéndole que 'aburre a todos'."
          },
          {
            "q": "Tu hijo/a necesita moverse constantemente mientras estudia.",
            "good": "Permites el movimiento (pelota, balanceo) como apoyo a su concentración.",
            "bad": "Le exiges quedarse quieto para poder estudiar 'bien'."
          },
          {
            "q": "Confunde el orden de los días de la semana en la rutina.",
            "good": "Usas un calendario visual para apoyar su organización temporal.",
            "bad": "Le dices que 'ya debería saberlo' a su edad."
          },
          {
            "q": "Tu hijo/a se pierde en instrucciones verbales largas.",
            "good": "Acompañas la instrucción con apoyos visuales o la divides en partes.",
            "bad": "Repites la instrucción larga cada vez más rápido."
          },
          {
            "q": "Necesita anticipación de varios días para un cambio de plan.",
            "good": "Le avisas con tiempo y usas apoyos visuales de la nueva rutina.",
            "bad": "Le avisas al último momento y esperas que se adapte rápido."
          },
          {
            "q": "Tu hijo/a procesa mejor la información escrita que la hablada.",
            "good": "Le das instrucciones por escrito o con dibujos cuando es posible.",
            "bad": "Insistes en explicarle todo solo de forma oral y rápida."
          }
        ]
      },
      {
        "slug": "comprender-perfil-individual",
        "nombre": "Comprender el Perfil Individual",
        "emoji": "🧩",
        "descripcion": "Cada hijo/a tiene fortalezas, sensibilidades, intereses y límites propios.",
        "situaciones": [
          {
            "q": "Tu hijo/a tiene un interés intenso por un tema específico.",
            "good": "Lo usas como puente para conectar, aprender juntos y motivar otras áreas.",
            "bad": "Le dices que 'ya habla demasiado de lo mismo' y lo desalientas."
          },
          {
            "q": "Comparas a tu hijo/a con otro niño neurotípico de su edad.",
            "good": "Te detienes y evalúas su progreso según su propio punto de partida.",
            "bad": "Sigues comparando y expresando decepción por las diferencias."
          },
          {
            "q": "Tu hijo/a tiene una sensibilidad particular a ciertos sonidos.",
            "good": "Identificas y respetas ese límite sensorial concreto, ofreciendo protección auditiva.",
            "bad": "Le dices que 'no puede ser tan sensible' y lo expones igual."
          },
          {
            "q": "Tu hijo/a destaca en un área (memoria, dibujo, música) pero no en otras.",
            "good": "Celebras esa fortaleza específica sin exigir el mismo nivel en todo lo demás.",
            "bad": "Minimizas su fortaleza porque 'en otras cosas no rinde igual'."
          },
          {
            "q": "Un familiar sugiere una actividad que no encaja con el perfil de tu hijo/a.",
            "good": "Explicas con tacto por qué esa actividad no es adecuada para él/ella en particular.",
            "bad": "Aceptas la sugerencia para no incomodar, ignorando lo que sabes de tu hijo/a."
          },
          {
            "q": "Tu hijo/a prefiere jugar solo/a en el recreo.",
            "good": "Respetas que su forma de recargarse es distinta, sin forzar la socialización.",
            "bad": "Le insistes en que 'debería' tener más amigos como los demás."
          },
          {
            "q": "Otro padre comenta que su hijo/a de la misma edad ya hace algo que el tuyo no.",
            "good": "Recuerdas que cada perfil tiene su propio ritmo y no lo tomas como alarma automática.",
            "bad": "Sientes ansiedad y presionas a tu hijo/a a igualar ese hito."
          },
          {
            "q": "Tu hijo/a se especializa en clasificar y ordenar objetos por horas.",
            "good": "Ves esa actividad como una fortaleza de atención al detalle, no como algo raro.",
            "bad": "Le interrumpes constantemente porque 'no es un juego normal'."
          },
          {
            "q": "Tu hijo/a tiene un límite claro de tiempo social antes de agotarse.",
            "good": "Planificas las salidas respetando ese límite conocido.",
            "bad": "Extiendes la salida esperando que 'aguante un poco más'."
          },
          {
            "q": "Tu hijo/a necesita objetos específicos (peluche, textura) para sentirse seguro/a.",
            "good": "Permites que los lleve consigo en situaciones nuevas.",
            "bad": "Le dices que 'ya está grande' para depender de esos objetos."
          },
          {
            "q": "Un profesor sugiere que tu hijo/a debería comportarse como 'el resto de la clase'.",
            "good": "Compartes información sobre su perfil individual para ajustar expectativas.",
            "bad": "Presionas a tu hijo/a en casa para que se ajuste al molde sin más contexto."
          },
          {
            "q": "Tu hijo/a tiene una rutina de sueño distinta a la de sus hermanos.",
            "good": "Adaptas su rutina a su ritmo biológico real, dentro de lo posible.",
            "bad": "Le impones el mismo horario que a los demás porque 'así debe ser'."
          },
          {
            "q": "Notas que tu hijo/a rinde mejor en las mañanas que en las tardes.",
            "good": "Planificas tareas exigentes para su mejor momento del día.",
            "bad": "Ignoras el patrón y programas todo según tu conveniencia."
          },
          {
            "q": "Tu hijo/a evita comidas con ciertas texturas.",
            "good": "Respetas ese límite sensorial y buscas alternativas nutritivas similares.",
            "bad": "Lo obligas a comer 'de todo como los demás niños'."
          },
          {
            "q": "Tu hijo/a se siente más cómodo con rutinas visuales que con explicaciones verbales.",
            "good": "Incorporas pictogramas o listas visuales en la organización diaria.",
            "bad": "Sigues explicando todo verbalmente aunque no le funcione."
          },
          {
            "q": "Tu hijo/a tiene fortalezas distintas a las de su hermano/a.",
            "good": "Valoras a cada uno según sus propias fortalezas, sin jerarquizar.",
            "bad": "Comentas en casa que uno 'rinde más' que el otro."
          },
          {
            "q": "Tu hijo/a necesita más tiempo a solas después del colegio que otros niños.",
            "good": "Le das ese espacio antes de pedirle que participe en actividades familiares.",
            "bad": "Le exiges unirse de inmediato a la familia al llegar a casa."
          },
          {
            "q": "Tu hijo/a se estresa con cambios de ropa según el clima.",
            "good": "Buscas ropa de transición cómoda que respete su sensibilidad.",
            "bad": "Le dices que 'no puede ser tan quisquilloso' con la ropa."
          },
          {
            "q": "Tu hijo/a muestra pasión por temas que a ti te parecen poco convencionales.",
            "good": "Te interesas genuinamente en su pasión, aunque no la entiendas del todo.",
            "bad": "Le sugieres que cambie de interés por algo 'más normal'."
          },
          {
            "q": "Tu hijo/a tiene una forma particular de expresar cariño (no con abrazos).",
            "good": "Reconoces y valoras su forma propia de expresar afecto.",
            "bad": "Le exiges mostrar cariño de la forma convencional que tú esperas."
          }
        ]
      },
      {
        "slug": "reconocer-impacto-entorno",
        "nombre": "Reconocer el Impacto del Entorno",
        "emoji": "🏠",
        "descripcion": "No todo depende del niño/a: ruido, tiempo, demandas, incertidumbre, personas.",
        "situaciones": [
          {
            "q": "Tu hijo/a se altera en un supermercado con música y luces fuertes.",
            "good": "Reconoces que el entorno sensorial satura, y buscas reducir el tiempo de exposición.",
            "bad": "Le exiges que se comporte 'como siempre' sin considerar el ambiente."
          },
          {
            "q": "Después de una semana escolar intensa, tu hijo/a llega agotado/a cada día.",
            "good": "Ajustas las expectativas de actividades extra los días de mayor carga.",
            "bad": "Le llenas la tarde de actividades porque 'hay que aprovechar el tiempo'."
          },
          {
            "q": "Un evento familiar se extiende más de lo planeado.",
            "good": "Evalúas retirarte antes o dar un descanso a tu hijo/a en medio del evento.",
            "bad": "Te quedas hasta el final ignorando señales de agotamiento."
          },
          {
            "q": "El plan del día cambia de último momento por un imprevisto.",
            "good": "Reconoces que la incertidumbre repentina afecta más a tu hijo/a y lo acompañas en la transición.",
            "bad": "Esperas que se adapte igual de rápido que cualquier otro niño."
          },
          {
            "q": "Hay muchas personas nuevas en una reunión familiar.",
            "good": "Anticipas la sobrecarga social y das espacios de retirada disponibles.",
            "bad": "Lo empujas a interactuar con todos 'para que socialice'."
          },
          {
            "q": "La casa está más desordenada o ruidosa de lo habitual por visitas.",
            "good": "Reconoces que el entorno alterado afecta su regulación y buscas un rincón tranquilo.",
            "bad": "Le dices que se aguante porque 'la casa no siempre está en silencio'."
          },
          {
            "q": "Tu hijo/a tiene una crisis justo antes de salir de viaje.",
            "good": "Consideras que la anticipación del cambio de entorno genera esa reacción, no un capricho de último momento.",
            "bad": "Te enojas porque 'siempre arruina los planes'."
          },
          {
            "q": "El colegio cambió de horario esta semana.",
            "good": "Ajustas la rutina de casa para amortiguar el impacto del cambio externo.",
            "bad": "Ignoras el cambio y esperas que se adapte solo."
          },
          {
            "q": "Hay demasiadas tareas y actividades extraescolares en la agenda semanal.",
            "good": "Revisas la carga total y reduces demandas si notas agotamiento.",
            "bad": "Mantienes todas las actividades porque 'ya están pagadas o comprometidas'."
          },
          {
            "q": "Tu hijo/a se irrita más los días de mucho calor o luz solar intensa.",
            "good": "Reconoces el factor ambiental y ajustas actividades a horarios más cómodos.",
            "bad": "Atribuyes la irritabilidad solo a 'mal carácter'."
          },
          {
            "q": "Una fiesta infantil tiene mucho ruido y aglomeración.",
            "good": "Buscas un espacio tranquilo cercano al que tu hijo/a pueda retirarse si lo necesita.",
            "bad": "Insistes en que se quede en medio del bullicio todo el tiempo."
          },
          {
            "q": "Cambiaron los muebles o la distribución de su habitación.",
            "good": "Reconoces que el entorno físico alterado afecta su sensación de seguridad.",
            "bad": "Le dices que 'no es para tanto' un cambio de muebles."
          },
          {
            "q": "Tu hijo/a tiene un mal día después de una noche con poco sueño.",
            "good": "Consideras el cansancio acumulado antes de interpretar su conducta como desafiante.",
            "bad": "Le exiges el mismo rendimiento que un día de descanso normal."
          },
          {
            "q": "Hay conflictos entre adultos de la familia durante una visita.",
            "good": "Reconoces que la tensión ambiental afecta a tu hijo/a aunque no participe directamente.",
            "bad": "Asumes que su malestar no tiene relación con el ambiente tenso."
          },
          {
            "q": "El transporte público está muy lleno camino al colegio.",
            "good": "Buscas alternativas (otro horario, otro medio) si notas que le afecta.",
            "bad": "Insistes en la misma rutina de transporte pase lo que pase."
          },
          {
            "q": "Tu hijo/a se comporta distinto en casa de los abuelos que en la propia.",
            "good": "Reconoces que un entorno con reglas y estímulos distintos afecta su regulación.",
            "bad": "Comparas negativamente su comportamiento entre ambos lugares."
          },
          {
            "q": "Una demanda escolar nueva (examen, exposición) se suma a la semana.",
            "good": "Reduces otras exigencias en casa para equilibrar la carga total.",
            "bad": "Mantienes todas las exigencias de casa igual, sumando presión."
          },
          {
            "q": "El clima impide salir a jugar afuera como de costumbre.",
            "good": "Ofreces una alternativa dentro de casa que cubra su necesidad de movimiento.",
            "bad": "Le dices que se aguante el encierro sin más opciones."
          },
          {
            "q": "Tu hijo/a reacciona distinto en la mañana que en la noche.",
            "good": "Planificas conversaciones o demandas importantes según su mejor momento del día.",
            "bad": "Exiges las mismas respuestas sin importar la hora o su estado."
          },
          {
            "q": "Una mudanza o cambio de colegio se aproxima.",
            "good": "Anticipas el impacto del cambio de entorno con tiempo y apoyos visuales.",
            "bad": "Informas el cambio a último momento esperando que se ajuste rápido."
          }
        ]
      }
    ]
  },
  {
    "slug": "comunicacion",
    "nombre": "Comunicación Bidireccional",
    "color": "#8b5cf6",
    "icon": "<path d=\"M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z\"/>",
    "habilidades": [
      {
        "slug": "escucha-neuroafirmativa",
        "nombre": "Escucha Neuroafirmativa",
        "emoji": "👂",
        "descripcion": "Escuchar antes de corregir.",
        "situaciones": [
          {
            "q": "Tu hijo/a se queja de que el colegio 'es horrible' otra vez.",
            "good": "Le preguntas qué pasó específicamente hoy antes de dar tu opinión.",
            "bad": "Le dices que exagera y que el colegio no puede ser tan malo."
          },
          {
            "q": "Te cuenta que un compañero lo/la molestó pero de forma confusa.",
            "good": "Escuchas toda la historia sin interrumpir para entender su versión.",
            "bad": "Concluyes rápido lo que pasó sin dejarlo terminar de contar."
          },
          {
            "q": "Tu hijo/a repite una queja sobre la misma persona varias veces.",
            "good": "Entiendes que necesita procesarlo repitiéndolo y lo acompañas con paciencia.",
            "bad": "Le dices 'ya me contaste eso' y cambias de tema."
          },
          {
            "q": "Te dice que no quiere ir a cierta actividad sin dar razones claras.",
            "good": "Le preguntas con calma qué le preocupa antes de decidir por él/ella.",
            "bad": "Asumes que es capricho y lo obligas a ir igual."
          },
          {
            "q": "Tu hijo/a se frustra tratando de explicar algo que le pasó.",
            "good": "Le das tiempo, sin apurarlo, para encontrar las palabras.",
            "bad": "Terminas la frase por él/ella impacientemente."
          },
          {
            "q": "Comparte una opinión distinta a la tuya sobre algo importante.",
            "good": "La escuchas completa antes de responder o corregir.",
            "bad": "Lo interrumpes para decirle que está equivocado."
          },
          {
            "q": "Tu hijo/a llega llorando sin explicar de inmediato qué pasó.",
            "good": "Le das espacio y validas su emoción antes de pedir detalles.",
            "bad": "Exiges que te explique de inmediato para poder 'solucionarlo'."
          },
          {
            "q": "Te dice que un profesor 'lo trata mal'.",
            "good": "Investigas con preguntas abiertas antes de descartar o confirmar su percepción.",
            "bad": "Le dices que seguro exagera porque los profesores 'no hacen eso'."
          },
          {
            "q": "Tu hijo/a te cuenta un logro que a ti te parece pequeño.",
            "good": "Celebras genuinamente lo que es importante para él/ella.",
            "bad": "Minimizas el logro comparándolo con algo 'más grande'."
          },
          {
            "q": "Expresa miedo a algo que a ti te parece irracional.",
            "good": "Validas que el miedo es real para él/ella, sin descalificarlo.",
            "bad": "Le dices que 'eso no da miedo' y lo ignoras."
          },
          {
            "q": "Tu hijo/a intenta contarte algo mientras estás distraído/a.",
            "good": "Pausas lo que haces y le das atención completa por un momento.",
            "bad": "Respondes con monosílabos sin mirarlo mientras sigue hablando."
          },
          {
            "q": "Te dice que no le gustó un regalo que le diste.",
            "good": "Preguntas qué hubiera preferido sin ofenderte por su honestidad.",
            "bad": "Te enojas y le dices que es un malagradecido."
          },
          {
            "q": "Tu hijo/a comparte una idea poco convencional para resolver un problema.",
            "good": "La consideras seriamente antes de sugerir la tuya.",
            "bad": "Descartas la idea de inmediato por 'poco práctica'."
          },
          {
            "q": "Te dice que se siente diferente a sus compañeros.",
            "good": "Le preguntas cómo se siente al respecto sin apresurarte a tranquilizarlo.",
            "bad": "Le dices rápido que 'todos son iguales' para cerrar el tema."
          },
          {
            "q": "Tu hijo/a se queja de una regla de la casa.",
            "good": "Escuchas su argumento antes de reafirmar o ajustar la regla.",
            "bad": "Repites la regla sin explicar ni escuchar su punto."
          },
          {
            "q": "Comparte que algo le dio vergüenza en público.",
            "good": "Validas el sentimiento sin restarle importancia.",
            "bad": "Le dices que 'no fue nada' y sigues con lo tuyo."
          },
          {
            "q": "Tu hijo/a insiste en que algo sensorial le molesta y tú no lo notas.",
            "good": "Confías en su percepción aunque no la compartas.",
            "bad": "Le dices que 'no puede ser tan molesto' porque tú no lo sientes."
          },
          {
            "q": "Te pregunta lo mismo varias veces sobre un plan futuro.",
            "good": "Respondes con la misma paciencia cada vez, entendiendo su necesidad de certeza.",
            "bad": "Le dices con fastidio que deje de preguntar lo mismo."
          },
          {
            "q": "Tu hijo/a expresa enojo hacia una decisión familiar.",
            "good": "Escuchas el enojo sin descalificarlo, aunque la decisión no cambie.",
            "bad": "Le dices que no tiene derecho a enojarse por eso."
          },
          {
            "q": "Comparte una observación inusual sobre algo cotidiano.",
            "good": "Muestras curiosidad genuina por su forma particular de ver las cosas.",
            "bad": "Le dices que 'piensa raro' y cambias de tema."
          },
          {
            "q": "Tu hijo/a de 4 años llega del jardín diciendo 'no quiero volver nunca más'.",
            "good": "Le preguntas con calma qué pasó hoy en vez de asumir que exagera.",
            "bad": "Le dices que tiene que ir igual sin indagar más."
          },
          {
            "q": "Tu hijo/a adolescente escribe 'todo está mal' y luego no responde más mensajes.",
            "good": "Esperas su momento y le preguntas después con calma qué ocurrió.",
            "bad": "Le respondes de inmediato con soluciones sin saber qué pasó."
          },
          {
            "q": "Tu hijo/a de primaria dice que 'la maestra nueva no le cae bien' sin dar detalles.",
            "good": "Le haces preguntas abiertas para entender qué le incomoda específicamente.",
            "bad": "Le dices que debe llevarse bien con todos los maestros."
          },
          {
            "q": "Tu hijo/a adulto joven llama y dice 'el trabajo es un desastre' y corta rápido.",
            "good": "Lo llamas de vuelta más tarde y lo dejas contar con calma.",
            "bad": "Le das consejos de inmediato sin conocer el contexto."
          },
          {
            "q": "En el auto, tu hijo/a empieza a contarte algo importante justo al llegar a destino.",
            "good": "Te quedas unos minutos más en el auto para que termine de contarte.",
            "bad": "Le dices que hablen después porque ya llegaron."
          },
          {
            "q": "Tu hijo/a te interrumpe para contarte algo mientras hablas por teléfono.",
            "good": "Le haces una seña de 'un momento' y vuelves a él/ella apenas puedas.",
            "bad": "Lo mandas a callar bruscamente sin reconocer que necesitaba algo."
          },
          {
            "q": "Tu hijo/a adolescente te cuenta que discutió con su mejor amigo/a, con el relato desordenado.",
            "good": "Sigues el hilo de su historia sin apurarlo a 'ir al grano'.",
            "bad": "Le pides que resuma rápido porque no tienes tiempo."
          },
          {
            "q": "Tu hijo/a de 5 años te cuenta un sueño confuso con mucho detalle innecesario para ti.",
            "good": "Lo escuchas completo, mostrando interés por su mundo interno.",
            "bad": "Le dices que 'era solo un sueño' y cambias de tema rápido."
          },
          {
            "q": "Tu hijo/a te dice que le tiene miedo a un compañero nuevo sin explicar por qué.",
            "good": "Le preguntas qué le genera esa sensación antes de restarle importancia.",
            "bad": "Le dices que 'no puede tenerle miedo a alguien que no conoce'."
          },
          {
            "q": "Tu hijo/a preadolescente cuenta algo sobre su día mientras hace otra cosa a la vez.",
            "good": "Le das atención aunque el relato sea fragmentado o disperso.",
            "bad": "Le dices que te hable 'de una vez, sin tantas vueltas'."
          },
          {
            "q": "Tu hijo/a te dice que un juego de la escuela 'no fue justo' sin más contexto.",
            "good": "Le pides que te explique la situación completa antes de opinar.",
            "bad": "Le dices que 'así es la vida' y sigues con lo tuyo."
          },
          {
            "q": "Tu hijo/a adulto joven menciona que terminó una relación de pareja, casi de pasada.",
            "good": "Le preguntas con calma cómo se siente, sin apurar el tema.",
            "bad": "Cambias de tema rápido para no 'incomodar'."
          },
          {
            "q": "Tu hijo/a de primaria llega angustiado/a por un examen que salió mal.",
            "good": "Lo dejas hablar de lo que sintió antes de hablar de la nota.",
            "bad": "Le preguntas de inmediato qué nota sacó, ignorando su angustia."
          },
          {
            "q": "Tu hijo/a te cuenta que un profesor sustituto 'hace todo distinto' y eso le molesta.",
            "good": "Exploras con preguntas qué parte del cambio le cuesta más.",
            "bad": "Le dices que 'se tiene que adaptar' sin más conversación."
          },
          {
            "q": "Tu hijo/a adolescente comparte que se siente diferente por su forma de pensar.",
            "good": "Le preguntas cómo se siente con eso, sin apresurarte a corregir su percepción.",
            "bad": "Le dices rápido que 'no es para tanto' y cierras el tema."
          },
          {
            "q": "Tu hijo/a te cuenta, entre risas nerviosas, que algo le dio mucha vergüenza en el recreo.",
            "good": "Escuchas el relato completo sin minimizar la vergüenza que sintió.",
            "bad": "Te ríes con él/ella sin detenerte a validar cómo se sintió."
          },
          {
            "q": "Tu hijo/a de 6 años insiste en contarte los mismos detalles de un paseo escolar.",
            "good": "Lo escuchas de nuevo con paciencia, sabiendo que necesita procesarlo así.",
            "bad": "Le dices 'eso ya me lo contaste' y te vas."
          },
          {
            "q": "Tu hijo/a preadolescente menciona que un grupo de WhatsApp 'se puso raro' hoy.",
            "good": "Le preguntas con calma qué pasó exactamente en el grupo.",
            "bad": "Le quitas el celular sin escuchar antes qué ocurrió."
          },
          {
            "q": "Tu hijo/a te cuenta que extraña a un amigo/a que se mudó de ciudad.",
            "good": "Validas su tristeza escuchando cuánto significaba esa amistad.",
            "bad": "Le dices que 'hará nuevos amigos' y cierras el tema rápido."
          },
          {
            "q": "Tu hijo/a adulto joven te cuenta sobre una entrevista de trabajo que no salió como esperaba.",
            "good": "Le preguntas cómo vivió el proceso antes de analizar qué falló.",
            "bad": "Le das feedback inmediato sobre qué hizo mal."
          },
          {
            "q": "Tu hijo/a se queja de que 'nadie lo entiende' en la escuela.",
            "good": "Le preguntas qué situación específica lo llevó a sentir eso.",
            "bad": "Le dices que 'todos se sienten así a veces' y sigues de largo."
          },
          {
            "q": "Tu hijo/a de primaria te cuenta con mucho detalle sobre un videojuego mientras tú tienes prisa.",
            "good": "Le dices que quieres escucharlo con calma en unos minutos, y cumples.",
            "bad": "Lo cortas diciendo que 'eso no importa ahora'."
          },
          {
            "q": "Tu hijo/a adolescente te cuenta que un profesor le llamó la atención frente a la clase.",
            "good": "Escuchas su versión completa antes de suponer que hizo algo malo.",
            "bad": "Asumes que el profesor tenía razón sin escuchar su parte."
          },
          {
            "q": "Tu hijo/a te dice que un animal en el zoológico 'se veía triste'.",
            "good": "Muestras interés genuino en su observación sin descartarla.",
            "bad": "Le dices que 'los animales no sienten eso' y avanzas."
          },
          {
            "q": "Tu hijo/a comparte que le teme a una inyección que tiene programada.",
            "good": "Escuchas su miedo completo antes de tranquilizarlo con información.",
            "bad": "Le dices que 'no duele nada' sin dejarlo expresar el miedo."
          },
          {
            "q": "Tu hijo/a de secundaria menciona sentirse agotado/a 'sin motivo' después de clases.",
            "good": "Le preguntas más sobre su día para entender el agotamiento.",
            "bad": "Le dices que 'no hizo nada como para estar tan cansado'."
          },
          {
            "q": "Tu hijo/a te cuenta que un compañero se burló de su forma de hablar.",
            "good": "Escuchas todo el relato antes de decidir cómo actuar.",
            "bad": "Minimizas diciendo que 'los niños siempre se molestan entre ellos'."
          },
          {
            "q": "Tu hijo/a adulto joven te llama solo para 'desahogarse' del día, sin pedir consejo.",
            "good": "Lo dejas hablar sin interrumpir con soluciones no pedidas.",
            "bad": "Lo interrumpes cada minuto con consejos que no pidió."
          },
          {
            "q": "Tu hijo/a te dice que no quiere ir al cumpleaños de un primo sin explicar por qué.",
            "good": "Le preguntas con calma qué le preocupa de esa fiesta en particular.",
            "bad": "Asumes que es capricho y lo obligas a ir sin escucharlo."
          },
          {
            "q": "Tu hijo/a de 7 años te interrumpe con una pregunta sobre dinosaurios en medio de una tarea urgente.",
            "good": "Le dices que en un momento le prestarás toda tu atención, y lo cumples.",
            "bad": "Le respondes con fastidio sin registrar lo que preguntó."
          },
          {
            "q": "Tu hijo/a comparte que sintió que un amigo lo dejó de lado en el recreo.",
            "good": "Le haces preguntas para entender bien la situación antes de opinar.",
            "bad": "Le dices que 'seguro fue sin querer' sin haber escuchado más."
          },
          {
            "q": "Tu hijo/a preadolescente cuenta, con muchas idas y vueltas, un conflicto con su hermano.",
            "good": "Sigues su relato sin apurar el orden en que cuenta las cosas.",
            "bad": "Le pides que 'vaya al punto' cortando su forma de narrar."
          },
          {
            "q": "Tu hijo/a menciona que un doctor 'le dio miedo' en la última consulta.",
            "good": "Le preguntas qué parte de la visita le generó esa sensación.",
            "bad": "Le dices que 'los doctores no dan miedo' y cambias de tema."
          },
          {
            "q": "Tu hijo/a adolescente comparte una duda sobre su identidad o vocación.",
            "good": "Escuchas sin apresurarte a dar una respuesta definitiva.",
            "bad": "Le dices de inmediato qué 'debería' pensar o decidir."
          },
          {
            "q": "Tu hijo/a te cuenta que un profesor cambió las reglas del salón sin avisar.",
            "good": "Le preguntas cómo le afectó ese cambio antes de justificar al profesor.",
            "bad": "Le dices que 'los profesores pueden cambiar lo que quieran'."
          },
          {
            "q": "Tu hijo/a de primaria dice que 'la comida del comedor escolar es asquerosa' cada día.",
            "good": "Le preguntas qué específicamente le desagrada de la comida.",
            "bad": "Le dices que 'coma lo que hay' sin explorar más."
          },
          {
            "q": "Tu hijo/a comparte que se siente triste sin saber explicar exactamente por qué.",
            "good": "Le das espacio para que hable sin exigir una razón clara.",
            "bad": "Insistes en que 'debe haber una razón' y lo presionas a encontrarla."
          },
          {
            "q": "Tu hijo/a adulto joven menciona que está dudando de seguir la carrera que eligió.",
            "good": "Escuchas sus dudas completas antes de opinar sobre su decisión.",
            "bad": "Le dices de inmediato que 'no puede cambiar de idea ahora'."
          },
          {
            "q": "Tu hijo/a te cuenta que un vecino le gritó por jugar en la calle.",
            "good": "Escuchas su versión completa antes de decidir cómo abordarlo.",
            "bad": "Asumes que el vecino tenía razón sin escucharlo primero."
          },
          {
            "q": "Tu hijo/a preadolescente comparte que un grupo de amigos lo excluyó de un plan.",
            "good": "Le preguntas cómo se sintió y qué pasó exactamente.",
            "bad": "Le dices que 'no será para tanto' sin dejarlo contar más."
          },
          {
            "q": "Tu hijo/a te cuenta con entusiasmo algo sobre un tema que a ti no te interesa mucho.",
            "good": "Le prestas atención genuina el tiempo que necesita para contarlo.",
            "bad": "Lo cortas diciendo que 'ya hablamos mucho de eso'."
          },
          {
            "q": "Tu hijo/a dice que se sintió 'raro' en una fiesta familiar sin dar más detalles.",
            "good": "Le preguntas con calma qué parte de la fiesta le generó eso.",
            "bad": "Le dices que 'ahí estaba toda la familia, no puede sentirse raro'."
          },
          {
            "q": "Tu hijo/a adolescente te cuenta que peleó con su pareja, con detalles que no comprendes del todo.",
            "good": "Escuchas sin juzgar la relación, solo acompañando su relato.",
            "bad": "Opinas de inmediato sobre quién tuvo la culpa."
          },
          {
            "q": "Tu hijo/a te dice que no quiere que le tomen fotos en el evento familiar.",
            "good": "Le preguntas por qué antes de insistir en la foto grupal.",
            "bad": "Lo obligas a la foto diciendo que 'no pasa nada por una foto'."
          },
          {
            "q": "Tu hijo/a de primaria comenta que 'el recreo es lo peor del día'.",
            "good": "Indagas con calma qué ocurre específicamente en el recreo.",
            "bad": "Le dices que 'el recreo es para divertirse' sin más preguntas."
          },
          {
            "q": "Tu hijo/a comparte que sintió que lo compararon con su hermano en una reunión familiar.",
            "good": "Escuchas cómo le afectó esa comparación antes de restarle importancia.",
            "bad": "Le dices que 'no fue para tanto' y minimizas su malestar."
          },
          {
            "q": "Tu hijo/a adulto joven te cuenta que discutió con un compañero de piso.",
            "good": "Escuchas los detalles del conflicto sin tomar partido de inmediato.",
            "bad": "Le das la razón automáticamente sin conocer la otra versión."
          },
          {
            "q": "Tu hijo/a menciona que un juguete se rompió y parece afectarlo más de lo esperado.",
            "good": "Validas que ese objeto tenía un significado importante para él/ella.",
            "bad": "Le dices que 'es solo un juguete' y no le das importancia."
          },
          {
            "q": "Tu hijo/a preadolescente comparte que se siente presionado/a por las notas.",
            "good": "Le preguntas qué específicamente le genera esa presión.",
            "bad": "Le dices que 'las notas son lo más importante ahora' sin escuchar más."
          },
          {
            "q": "Tu hijo/a te cuenta que tuvo una pesadilla y quiere contarte todos los detalles.",
            "good": "Escuchas el relato completo aunque sea tarde y estés cansado/a.",
            "bad": "Le dices que 'ya pasó, vuelve a dormir' cortando el relato."
          },
          {
            "q": "Tu hijo/a dice que no le gustó cómo lo trataron en una tienda.",
            "good": "Le preguntas qué pasó exactamente antes de restarle importancia.",
            "bad": "Le dices que 'seguro fue un malentendido' sin escuchar más."
          },
          {
            "q": "Tu hijo/a adolescente comparte una opinión política o social que te sorprende.",
            "good": "La escuchas completa antes de dar tu propia postura.",
            "bad": "Lo interrumpes para corregir su opinión de inmediato."
          },
          {
            "q": "Tu hijo/a te cuenta que se sintió excluido/a en un trabajo grupal escolar.",
            "good": "Le preguntas cómo fue la dinámica del grupo con calma.",
            "bad": "Le dices que 'tiene que aprender a integrarse mejor'."
          },
          {
            "q": "Tu hijo/a comparte que algo en el hospital lo asustó durante una visita médica.",
            "good": "Le das espacio para expresar el miedo antes de tranquilizarlo.",
            "bad": "Le dices que 'ya pasó' sin dejarlo procesar lo vivido."
          },
          {
            "q": "Tu hijo/a de primaria te dice que 'ya no quiere ir más a fútbol' sin explicar por qué.",
            "good": "Le preguntas con curiosidad qué cambió en su interés por el deporte.",
            "bad": "Le dices que 'ya pagamos la inscripción, tiene que seguir'."
          },
          {
            "q": "Tu hijo/a adulto joven comenta que se siente estancado/a en su vida.",
            "good": "Lo escuchas con atención completa sin apresurarte a dar soluciones.",
            "bad": "Le das una lista de 'lo que debería hacer' sin dejarlo hablar más."
          },
          {
            "q": "Tu hijo/a menciona que sintió que un familiar favoreció a un primo en un juego.",
            "good": "Validas su percepción escuchando qué observó exactamente.",
            "bad": "Le dices que 'está exagerando' sin indagar en lo que vio."
          },
          {
            "q": "Tu hijo/a preadolescente te dice que no entiende por qué sus papás se separaron.",
            "good": "Le das espacio para expresar sus dudas y sentimientos sin apurar respuestas.",
            "bad": "Le das una explicación rápida para 'cerrar el tema'."
          },
          {
            "q": "Tu hijo/a comparte que le teme a la oscuridad, aunque antes no le pasaba.",
            "good": "Le preguntas si algo cambió recientemente que explique ese miedo.",
            "bad": "Le dices que 'ya es grande para tenerle miedo a eso'."
          },
          {
            "q": "Tu hijo/a adolescente cuenta que un video en redes sociales lo hizo sentir mal con su cuerpo.",
            "good": "Escuchas cómo le afectó ese contenido antes de opinar.",
            "bad": "Le dices que 'no debería ver esas cosas' sin explorar cómo se siente."
          },
          {
            "q": "Tu hijo/a te dice que extraña a una mascota que falleció, meses después.",
            "good": "Validas que el duelo puede seguir presente, escuchándolo con paciencia.",
            "bad": "Le dices que 'ya debería haberlo superado'."
          },
          {
            "q": "Tu hijo/a comparte que se sintió avergonzado/a al no entender un chiste grupal.",
            "good": "Escuchas cómo se sintió sin restarle importancia al momento.",
            "bad": "Le dices que 'no es para tanto, era solo un chiste'."
          },
          {
            "q": "Tu hijo/a de primaria menciona que un compañero nuevo 'habla distinto' y le da curiosidad.",
            "good": "Escuchas su observación con interés, sin corregirlo de inmediato.",
            "bad": "Le dices que 'no debe fijarse en eso' cortando la conversación."
          },
          {
            "q": "Tu hijo/a adulto joven comparte que dudó de renunciar a su primer trabajo.",
            "good": "Escuchas sus razones completas antes de dar tu opinión.",
            "bad": "Le dices de inmediato que 'no puede renunciar tan rápido'."
          },
          {
            "q": "Tu hijo/a comenta que sintió que un maestro no lo escuchó cuando pidió ayuda.",
            "good": "Le preguntas los detalles antes de decidir si hablar con el colegio.",
            "bad": "Le dices que 'seguro el maestro estaba ocupado' sin más preguntas."
          },
          {
            "q": "Tu hijo/a preadolescente te cuenta que un grupo de redes sociales lo hizo sentir presionado/a.",
            "good": "Escuchas la situación completa antes de tomar medidas.",
            "bad": "Le quitas el acceso a redes sin escuchar primero qué pasó."
          },
          {
            "q": "Tu hijo/a menciona que le gustaría cambiar de colegio, sin dar razones de inmediato.",
            "good": "Le preguntas con calma qué le lleva a pensar en ese cambio.",
            "bad": "Descartas la idea de plano sin explorar sus motivos."
          },
          {
            "q": "Tu hijo/a comparte que sintió miedo durante una tormenta, más que otras veces.",
            "good": "Le preguntas si algo distinto pasó esta vez que aumentó su miedo.",
            "bad": "Le dices que 'ya sabe que las tormentas no hacen nada'."
          },
          {
            "q": "Tu hijo/a adolescente te cuenta que discutió con un profesor por una nota.",
            "good": "Escuchas ambas partes de la historia antes de tomar postura.",
            "bad": "Le das la razón al profesor sin escuchar la versión de tu hijo/a."
          },
          {
            "q": "Tu hijo/a comenta que sintió que lo dejaron de lado en una foto grupal familiar.",
            "good": "Validas su sentimiento escuchando qué notó exactamente.",
            "bad": "Le dices que 'está viendo cosas donde no las hay'."
          },
          {
            "q": "Tu hijo/a de primaria te dice que no quiere ir a natación 'nunca más'.",
            "good": "Le preguntas qué pasó en la última clase antes de decidir algo.",
            "bad": "Le dices que 'ya invertimos en las clases, tiene que seguir'."
          },
          {
            "q": "Tu hijo/a comparte que sintió nervios extremos antes de una presentación escolar.",
            "good": "Escuchas sus nervios completos sin apurarte a decir 'todo saldrá bien'.",
            "bad": "Le dices que 'no hay nada que temer' sin dejarlo expresar más."
          },
          {
            "q": "Tu hijo/a adulto joven te cuenta que se siente inseguro/a viviendo solo/a por primera vez.",
            "good": "Escuchas sus preocupaciones completas antes de minimizarlas.",
            "bad": "Le dices que 'ya es adulto, tiene que resolverlo solo'."
          },
          {
            "q": "Tu hijo/a menciona que un compañero de equipo 'no lo pasa la pelota' nunca.",
            "good": "Le preguntas más detalles antes de sacar una conclusión.",
            "bad": "Le dices que 'seguro está exagerando' sin escuchar más."
          },
          {
            "q": "Tu hijo/a comparte que sintió que un familiar lo trató como 'niño chico' en una reunión.",
            "good": "Validas su molestia escuchando qué situación específica lo generó.",
            "bad": "Le dices que 'no puede ofenderse por cariño familiar'."
          },
          {
            "q": "Tu hijo/a preadolescente te cuenta que se siente confundido/a con sus propias emociones.",
            "good": "Le das espacio para hablar de esa confusión sin apurar respuestas.",
            "bad": "Le dices que 'a su edad todos se sienten así' cerrando el tema."
          },
          {
            "q": "Tu hijo/a comparte que un examen médico le generó mucha ansiedad anticipada.",
            "good": "Escuchas su ansiedad completa antes de explicar el procedimiento.",
            "bad": "Le explicas el procedimiento sin antes validar su ansiedad."
          },
          {
            "q": "Tu hijo/a te cuenta que sintió que un amigo lo traicionó al compartir un secreto.",
            "good": "Escuchas toda la situación antes de opinar sobre la amistad.",
            "bad": "Le dices que 'así son los amigos a veces' sin profundizar."
          },
          {
            "q": "Tu hijo/a adolescente comparte que duda de su orientación o identidad.",
            "good": "Escuchas con apertura genuina, sin apurar conclusiones ni etiquetas.",
            "bad": "Le dices que 'es solo una fase' cortando la conversación."
          },
          {
            "q": "Tu hijo/a comenta que se sintió mal al no ser elegido/a para un equipo escolar.",
            "good": "Le das espacio para expresar la decepción antes de animarlo.",
            "bad": "Le dices rápido que 'la próxima vez será' sin dejarlo procesar."
          }
        ]
      },
      {
        "slug": "adaptar-lenguaje",
        "nombre": "Adaptar el Lenguaje",
        "emoji": "🗣️",
        "descripcion": "Literalidad, claridad, una instrucción cada vez, evitar ambigüedad.",
        "situaciones": [
          {
            "q": "Le dices a tu hijo/a 'ya casi' y se enoja al ver que pasan 20 minutos.",
            "good": "Aprendes a dar tiempos concretos ('en 10 minutos') en vez de expresiones vagas.",
            "bad": "Insistes en usar 'ya casi' y te frustras porque 'no entiende'."
          },
          {
            "q": "Le pides que 'ordene su cuarto' y no sabe por dónde empezar.",
            "good": "Divides la instrucción en pasos concretos: primero la ropa, luego los juguetes.",
            "bad": "Repites 'ordena tu cuarto' cada vez más fuerte."
          },
          {
            "q": "Usas una expresión idiomática y tu hijo/a la toma literal.",
            "good": "Le explicas el significado real y evitas esa expresión en el futuro con él/ella.",
            "bad": "Te ríes de que 'no entendió' sin explicarle."
          },
          {
            "q": "Le das dos instrucciones seguidas y solo cumple una.",
            "good": "Das una instrucción a la vez y confirmas antes de dar la siguiente.",
            "bad": "Le repites las dos juntas cada vez más rápido."
          },
          {
            "q": "Dices 'compórtate' sin especificar qué esperas.",
            "good": "Nombras la conducta concreta que esperas ver.",
            "bad": "Sigues usando 'compórtate' y te enojas porque no cambia nada."
          },
          {
            "q": "Le preguntas '¿cómo te fue?' y responde con una sola palabra.",
            "good": "Haces preguntas más específicas y concretas sobre su día.",
            "bad": "Insistes con la misma pregunta amplia esperando más detalle."
          },
          {
            "q": "Usas sarcasmo y tu hijo/a responde tomándolo literal.",
            "good": "Aclaras que era sarcasmo y ajustas tu forma de hablarle.",
            "bad": "Le dices que 'debería entender' el sarcasmo a su edad."
          },
          {
            "q": "Le dices 'en un rato' para algo que en realidad es en una hora.",
            "good": "Das el tiempo exacto para reducir la ansiedad de la espera.",
            "bad": "Sigues siendo impreciso con los tiempos."
          },
          {
            "q": "Le explicas una tarea con muchos detalles a la vez.",
            "good": "Simplificas la explicación en pasos cortos y secuenciales.",
            "bad": "Repites la explicación completa y larga otra vez."
          },
          {
            "q": "Le dices 'no tardes' sin definir un límite claro.",
            "good": "Defines un tiempo específico ('20 minutos') en vez de algo ambiguo.",
            "bad": "Te frustras porque 'no tardes' no fue suficientemente claro para él/ella."
          },
          {
            "q": "Usas una metáfora que tu hijo/a no capta.",
            "good": "La reemplazas por una descripción literal y directa.",
            "bad": "Insistes en la metáfora esperando que la entienda con el tiempo."
          },
          {
            "q": "Le pides que 'se apure un poco' y no cambia el ritmo.",
            "good": "Le das una instrucción concreta como 'termina en 5 minutos'.",
            "bad": "Repites 'apúrate' cada vez con más urgencia en la voz."
          },
          {
            "q": "Le dices que algo fue 'una película buenísima' esperando entusiasmo similar.",
            "good": "Aceptas que su reacción puede ser distinta a la esperada sin forzarla.",
            "bad": "Insistes en que debería reaccionar como tú esperabas."
          },
          {
            "q": "Das una instrucción con doble sentido sin darte cuenta.",
            "good": "Reformulas de forma directa cuando notas la confusión.",
            "bad": "Repites la misma frase ambigua pensando que se aclarará sola."
          },
          {
            "q": "Le dices 'pórtate bien en la fiesta' sin más contexto.",
            "good": "Especificas 2-3 comportamientos concretos esperados en esa fiesta.",
            "bad": "Repites la frase genérica y esperas que la interprete solo/a."
          },
          {
            "q": "Usas un tono de voz irónico que tu hijo/a no distingue del literal.",
            "good": "Ajustas tu tono para ser más claro y directo con él/ella.",
            "bad": "Sigues usando ironía y te frustras si no la capta."
          },
          {
            "q": "Le explicas una regla nueva usando muchas palabras abstractas.",
            "good": "La traduces a ejemplos concretos y situaciones específicas.",
            "bad": "Repites la explicación abstracta esperando que 'algún día' la entienda."
          },
          {
            "q": "Le dices 'vamos a salir en cualquier momento' y se pone ansioso/a.",
            "good": "Le das una hora aproximada concreta para reducir la incertidumbre.",
            "bad": "Mantienes la frase vaga aunque notes su ansiedad."
          },
          {
            "q": "Le haces una pregunta abierta muy amplia y no responde.",
            "good": "La reformulas de forma más específica y acotada.",
            "bad": "Repites la misma pregunta amplia insistentemente."
          },
          {
            "q": "Le dices 'ten cuidado' sin especificar con qué.",
            "good": "Nombras el riesgo concreto ('cuidado con el escalón').",
            "bad": "Sigues usando advertencias vagas y te frustras si no reacciona."
          },
          {
            "q": "Le dices a tu hijo/a 'nos vamos en un ratito' antes de salir de viaje.",
            "good": "Le das una hora exacta ('a las 4') para reducir la incertidumbre.",
            "bad": "Repites 'un ratito' aunque notes que se pone ansioso/a."
          },
          {
            "q": "Le pides a tu hijo/a que 'se comporte' en la boda de un familiar.",
            "good": "Le nombras 2 o 3 conductas concretas esperadas en ese evento.",
            "bad": "Repites 'pórtate bien' esperando que lo interprete solo/a."
          },
          {
            "q": "Usas la frase 'cuesta un ojo de la cara' y tu hijo/a se preocupa literalmente.",
            "good": "Le explicas que es una forma de decir que algo es caro.",
            "bad": "Te burlas de que 'no entendió' sin aclararle nada."
          },
          {
            "q": "Le dices 'vamos a ver' ante una petición, sin comprometerte a nada claro.",
            "good": "Le das una respuesta concreta: sí, no, o cuándo lo sabrás.",
            "bad": "Sigues usando 'vamos a ver' y te frustras si insiste en preguntar."
          },
          {
            "q": "Le explicas las reglas de un juego de mesa nuevo con mucho detalle de golpe.",
            "good": "Divides la explicación en rondas cortas, jugando mientras explicas.",
            "bad": "Repites todo el reglamento de una vez esperando que lo retenga."
          },
          {
            "q": "Le dices 'dale, como quieras' de forma sarcástica ante su insistencia.",
            "good": "Le das una respuesta clara y directa sobre lo que decides.",
            "bad": "Usas sarcasmo y te frustras porque lo toma como un sí literal."
          },
          {
            "q": "Le pides que 'se apure con el desayuno' sin especificar cuánto tiempo tiene.",
            "good": "Le dices un tiempo concreto: 'termina en 10 minutos'.",
            "bad": "Repites 'apúrate' cada vez con más urgencia en la voz."
          },
          {
            "q": "Le explicas una tarea usando la expresión 'no es ciencia espacial'.",
            "good": "Evitas la expresión y explicas los pasos de forma literal.",
            "bad": "Insistes en la frase aunque notes que la tomó al pie de la letra."
          },
          {
            "q": "Le dices 'te llamo en cinco minutos' y en realidad tardas media hora.",
            "good": "Ajustas tu comunicación a tiempos reales que puedas cumplir.",
            "bad": "Sigues dando tiempos que no cumples, generando desconfianza."
          },
          {
            "q": "Le pides que 'se vista rápido' para el colegio sin dar una secuencia clara.",
            "good": "Le das el orden concreto: primero la ropa interior, luego el pantalón.",
            "bad": "Repites 'rápido, rápido' sin dar pasos concretos."
          },
          {
            "q": "Usas la expresión 'me costó sangre, sudor y lágrimas' y tu hijo/a se alarma.",
            "good": "Le explicas que es una forma de decir que fue muy difícil.",
            "bad": "Sigues usando la expresión sin notar su confusión literal."
          },
          {
            "q": "Le dices 'siéntate como la gente' sin especificar qué postura esperas.",
            "good": "Le muestras o nombras la postura concreta que esperas.",
            "bad": "Repites la frase genérica esperando que la interprete solo/a."
          },
          {
            "q": "Le explicas un cambio de rutina usando muchas condicionales ('si pasa esto, entonces...').",
            "good": "Simplificas a una secuencia lineal y concreta de pasos.",
            "bad": "Mantienes las condicionales complejas y se confunde más."
          },
          {
            "q": "Le dices 'ahorita' para algo que en realidad harás en la tarde.",
            "good": "Reemplazas 'ahorita' por un momento concreto del día.",
            "bad": "Sigues usando 'ahorita' aunque genere confusión repetida."
          },
          {
            "q": "Le pides que 'ponga atención' en clase sin decir qué conducta específica esperas.",
            "good": "Nombras conductas concretas: mirar al pizarrón, escribir lo importante.",
            "bad": "Repites 'pon atención' sin dar ninguna referencia concreta."
          },
          {
            "q": "Usas la frase 'estoy que exploto' y tu hijo/a se asusta pensando que literalmente pasará algo.",
            "good": "Aclaras que es una forma de decir que estás muy frustrado/a, sin peligro real.",
            "bad": "Sigues usando la frase notando su miedo, sin aclarar nada."
          },
          {
            "q": "Le explicas un itinerario de vacaciones con muchos detalles verbales seguidos.",
            "good": "Le muestras un calendario visual simple con las actividades por día.",
            "bad": "Repites el itinerario completo de forma oral, una y otra vez."
          },
          {
            "q": "Le dices 'no hagas tanto drama' ante una reacción que a ti te parece exagerada.",
            "good": "Nombras la emoción que ves y preguntas qué la generó.",
            "bad": "Repites 'drama' cada vez que expresa una emoción intensa."
          },
          {
            "q": "Usas la palabra 'luego' para referirte a momentos muy distintos del día.",
            "good": "Especificas el momento exacto cada vez que la usas.",
            "bad": "Sigues usando 'luego' de forma ambigua y genérica."
          },
          {
            "q": "Le dices 'ya sabes lo que tienes que hacer' sin haberlo explicitado antes.",
            "good": "Repites la instrucción concreta, aunque ya se haya dicho antes.",
            "bad": "Asumes que 'ya debería saberlo' y no aclaras nada."
          },
          {
            "q": "Le explicas una receta de cocina con pasos mezclados y fuera de orden.",
            "good": "Ordenas los pasos de forma secuencial y numerada.",
            "bad": "Repites los pasos desordenados esperando que los reorganice solo/a."
          },
          {
            "q": "Usas la expresión 'me lavo las manos' sobre un tema y tu hijo/a lo toma literal.",
            "good": "Aclaras que significa que ya no te vas a involucrar en el tema.",
            "bad": "Sigues con la expresión sin notar la confusión que genera."
          },
          {
            "q": "Le pides que 'sea considerado/a' con su hermano sin decir qué acción esperas.",
            "good": "Nombras la conducta concreta: 'comparte el juguete cinco minutos'.",
            "bad": "Repites 'sé considerado' esperando que lo entienda solo/a."
          },
          {
            "q": "Le dices 'en cualquier momento llega tu tía' antes de una visita.",
            "good": "Le das una hora aproximada concreta para reducir la espera ansiosa.",
            "bad": "Mantienes la frase vaga aunque notes que se pone nervioso/a."
          },
          {
            "q": "Le explicas una emergencia médica con vocabulario técnico complejo.",
            "good": "Traduces la información a frases simples y directas según su edad.",
            "bad": "Usas el mismo vocabulario técnico esperando que lo entienda igual."
          },
          {
            "q": "Le dices 'no te hagas el difícil' ante su resistencia a algo.",
            "good": "Le preguntas qué parte específica le cuesta de la situación.",
            "bad": "Repites la frase acusatoria sin explorar la dificultad real."
          },
          {
            "q": "Usas la expresión 'se me fue el avión' y tu hijo/a busca un avión real.",
            "good": "Le explicas que significa que te distrajiste u olvidaste algo.",
            "bad": "Te ríes de su confusión sin aclararle el significado."
          },
          {
            "q": "Le dices 'aguanta un poco más' durante una fila larga sin dar tiempo estimado.",
            "good": "Le das un cálculo aproximado del tiempo que falta.",
            "bad": "Repites 'aguanta' sin dar ninguna referencia de tiempo."
          },
          {
            "q": "Le explicas un examen con instrucciones ambiguas sobre el formato.",
            "good": "Aclaras exactamente qué se espera: número de preguntas, tiempo, formato.",
            "bad": "Repites la instrucción ambigua esperando que la deduzca solo/a."
          },
          {
            "q": "Le dices 'no es para tanto' cuando reacciona fuerte ante un cambio de planes.",
            "good": "Describes el cambio de forma concreta y ofreces información clara.",
            "bad": "Repites 'no es para tanto' sin dar más claridad sobre la situación."
          },
          {
            "q": "Usas la frase 'tira la toalla' y tu hijo/a busca literalmente una toalla.",
            "good": "Le explicas que significa rendirse o dejar de intentarlo.",
            "bad": "Sigues usando la expresión sin explicarle el significado."
          },
          {
            "q": "Le pides que 'no exagere' al describir una molestia sensorial.",
            "good": "Le preguntas detalles concretos sobre lo que siente, sin descalificar.",
            "bad": "Repites 'no exageres' sin indagar en lo que describe."
          },
          {
            "q": "Le explicas un cambio de colegio con lenguaje muy abstracto sobre 'nuevas oportunidades'.",
            "good": "Describes concretamente qué cambiará: edificio, horario, compañeros.",
            "bad": "Repites frases abstractas esperando que reduzcan su ansiedad."
          },
          {
            "q": "Le dices 'con calma' cuando está muy alterado/a, sin dar pasos concretos.",
            "good": "Le ofreces una acción concreta: respirar contando hasta cinco contigo.",
            "bad": "Repites 'cálmate' sin ofrecer ninguna herramienta concreta."
          },
          {
            "q": "Usas la expresión 'estar en la luna' y tu hijo/a pregunta si viajaste al espacio.",
            "good": "Le explicas que significa estar distraído/a pensando en otra cosa.",
            "bad": "Te burlas de la pregunta sin aclarar el significado."
          },
          {
            "q": "Le pides que 'no se pase de la raya' sin definir cuál es el límite exacto.",
            "good": "Nombras la conducta específica que no debe repetir.",
            "bad": "Repites la frase figurada esperando que entienda el límite implícito."
          },
          {
            "q": "Le explicas los horarios de vacaciones con referencias relativas ('el día después de mañana').",
            "good": "Usas un calendario visual con fechas y días concretos marcados.",
            "bad": "Sigues usando referencias relativas que le cuesta calcular."
          },
          {
            "q": "Le dices 'ya deberías saber esto' ante una duda que vuelve a tener.",
            "good": "Respondes la duda de nuevo con la misma paciencia que la primera vez.",
            "bad": "Repites 'ya deberías saberlo' generando que evite preguntar."
          },
          {
            "q": "Usas la frase 'me quedé de piedra' y tu hijo/a se preocupa pensando que te transformaste.",
            "good": "Le explicas que significa que te sorprendiste mucho.",
            "bad": "Sigues usando la expresión sin aclarar su significado literal."
          },
          {
            "q": "Le pides que 'hable más claro' sin decir qué parte no entendiste.",
            "good": "Le repites la parte específica que no captaste para que la reformule.",
            "bad": "Repites 'habla más claro' sin señalar qué no se entendió."
          },
          {
            "q": "Le explicas una mudanza con frases largas sobre 'un nuevo capítulo en la vida'.",
            "good": "Describes en términos concretos qué cambiará en su rutina diaria.",
            "bad": "Repites metáforas abstractas sin bajar a detalles concretos."
          },
          {
            "q": "Le dices 'no me hagas repetir las cosas' ante su necesidad de confirmar de nuevo.",
            "good": "Repites la información con calma, entendiendo su necesidad de certeza.",
            "bad": "Te frustras y repites la frase de reproche en vez de la información."
          },
          {
            "q": "Usas la expresión 'me quitaste un peso de encima' y tu hijo/a busca el peso físico.",
            "good": "Le explicas que significa que te sentiste aliviado/a.",
            "bad": "Sigues con la expresión sin aclarar qué significa realmente."
          },
          {
            "q": "Le pides que 'termine rápido' la tarea sin dar un tiempo específico.",
            "good": "Le das un tiempo concreto como referencia: '15 minutos más'.",
            "bad": "Repites 'rápido' cada vez con más impaciencia en el tono."
          },
          {
            "q": "Le explicas un procedimiento del hospital con palabras vagas como 'te van a revisar'.",
            "good": "Describes en detalle concreto qué va a pasar, paso a paso.",
            "bad": "Mantienes la explicación vaga aunque notes su ansiedad creciente."
          },
          {
            "q": "Usas la frase 'no hay para tanto' ante su reacción a un ruido fuerte.",
            "good": "Nombras el sonido concreto y ofreces una solución práctica (tapones, salir).",
            "bad": "Repites 'no hay para tanto' sin ofrecer ninguna alternativa."
          },
          {
            "q": "Le pides que 'se controle' en una fiesta sin decir qué conducta esperas.",
            "good": "Nombras 2 o 3 conductas concretas antes de entrar a la fiesta.",
            "bad": "Repites 'contrólate' sin dar ninguna referencia concreta."
          },
          {
            "q": "Usas la expresión 'eso no tiene ni pies ni cabeza' y tu hijo/a se confunde.",
            "good": "Le explicas que significa que algo no tiene sentido lógico.",
            "bad": "Sigues usando la expresión sin aclarar su significado."
          },
          {
            "q": "Le explicas las reglas de convivencia familiar con conceptos abstractos como 'respeto'.",
            "good": "Traduces 'respeto' a acciones concretas y observables.",
            "bad": "Repites el concepto abstracto esperando que lo deduzca solo/a."
          },
          {
            "q": "Le dices 'te dije mil veces' ante un olvido repetido.",
            "good": "Repites la instrucción de forma clara, sin el reproche añadido.",
            "bad": "Sigues sumando el reproche cada vez que debes repetir algo."
          },
          {
            "q": "Usas la frase 'no muerdas más de lo que puedes masticar' y tu hijo/a se confunde.",
            "good": "Le explicas de forma literal que significa no comprometerse a más de lo posible.",
            "bad": "Sigues usando la expresión sin aclarar su sentido figurado."
          },
          {
            "q": "Le pides que 'se relaje' antes de un examen sin dar ninguna técnica concreta.",
            "good": "Le ofreces un ejercicio de respiración concreto para practicar juntos.",
            "bad": "Repites 'relájate' sin dar ninguna herramienta práctica."
          },
          {
            "q": "Le explicas una cita médica usando la palabra 'pronto' de forma repetida.",
            "good": "Le das la fecha y hora exacta de la cita con anticipación.",
            "bad": "Sigues usando 'pronto' aunque aumente su ansiedad anticipatoria."
          },
          {
            "q": "Usas la expresión 'esto es pan comido' y tu hijo/a pregunta por el pan.",
            "good": "Le explicas que significa que la tarea será fácil de hacer.",
            "bad": "Te ríes de la confusión sin aclarar el significado."
          },
          {
            "q": "Le dices 'compórtate como tu hermano mayor' sin especificar qué conducta imitar.",
            "good": "Nombras la conducta concreta que esperas, sin usar comparaciones.",
            "bad": "Repites la comparación sin especificar ninguna conducta concreta."
          },
          {
            "q": "Le explicas el reglamento de un deporte nuevo con reglas todas juntas de una vez.",
            "good": "Introduces las reglas de a poco, mientras practican en la cancha.",
            "bad": "Explicas el reglamento completo de golpe esperando que lo retenga."
          },
          {
            "q": "Usas la frase 'ponte las pilas' y tu hijo/a busca pilas reales para colocarse.",
            "good": "Le explicas que significa que necesita esforzarse o activarse más.",
            "bad": "Sigues con la expresión sin aclarar su sentido figurado."
          },
          {
            "q": "Le dices 'no seas tan intenso' ante su forma directa de expresar entusiasmo.",
            "good": "Reconoces su forma de expresión sin pedirle que la cambie.",
            "bad": "Repites 'baja el tono' sin validar su forma natural de ser."
          },
          {
            "q": "Le explicas un cambio de horario escolar usando fechas relativas confusas.",
            "good": "Usas un calendario con el nuevo horario escrito día por día.",
            "bad": "Repites las fechas relativas esperando que las calcule solo/a."
          },
          {
            "q": "Usas la expresión 'me suena a chino' y tu hijo/a pregunta por qué mencionas China.",
            "good": "Le explicas que significa que algo es difícil de entender.",
            "bad": "Sigues usando la expresión sin aclarar su significado real."
          },
          {
            "q": "Le pides que 'no se pase de listo/a' ante una broma que hizo.",
            "good": "Nombras la conducta específica que te molestó, de forma directa.",
            "bad": "Repites la expresión figurada sin explicar qué conducta corregir."
          },
          {
            "q": "Le explicas una salida familiar con la frase 'nos organizamos sobre la marcha'.",
            "good": "Defines con anticipación al menos los puntos clave del plan.",
            "bad": "Mantienes la improvisación total aunque le genere ansiedad."
          },
          {
            "q": "Usas la frase 'eso me suena a excusa' ante su explicación de por qué no hizo algo.",
            "good": "Le preguntas más detalles concretos antes de descalificar su razón.",
            "bad": "Repites 'es una excusa' sin explorar la explicación que dio."
          },
          {
            "q": "Le pides que 'piense antes de hablar' sin decir qué necesitas específicamente.",
            "good": "Le explicas la conducta concreta que esperas en ese momento.",
            "bad": "Repites la frase genérica sin dar ninguna guía concreta."
          },
          {
            "q": "Le explicas un viaje en avión usando términos técnicos sobre 'turbulencia' sin contexto.",
            "good": "Describes en términos simples y concretos qué se siente y por qué pasa.",
            "bad": "Usas terminología técnica sin adaptarla a su comprensión."
          },
          {
            "q": "Usas la expresión 'se armó la grande' y tu hijo/a se confunde sobre qué se armó.",
            "good": "Le explicas que significa que hubo un problema o desorden grande.",
            "bad": "Sigues con la expresión sin aclarar su significado real."
          },
          {
            "q": "Le pides que 'no te hagas problema' ante algo que a él/ella sí le genera angustia real.",
            "good": "Reconoces la angustia y le das información concreta sobre la situación.",
            "bad": "Repites 'no te hagas problema' invalidando lo que siente."
          },
          {
            "q": "Le explicas una regla nueva de convivencia usando condicionales encadenadas y complejas.",
            "good": "Simplificas la regla a una frase corta y directa.",
            "bad": "Repites la explicación compleja esperando que la entienda igual."
          },
          {
            "q": "Usas la frase 'no des más vueltas' ante su forma de explicar algo con muchos detalles.",
            "good": "Le das tiempo para terminar su explicación a su propio ritmo.",
            "bad": "Repites 've al grano' cortando su forma natural de contar."
          },
          {
            "q": "Le pides que 'se le baje la espuma' ante su entusiasmo por algo.",
            "good": "Validas su entusiasmo sin pedirle que lo module artificialmente.",
            "bad": "Repites la expresión sin explicar qué conducta específica esperas."
          },
          {
            "q": "Le explicas un trámite (pasaporte, documento) con lenguaje burocrático complejo.",
            "good": "Traduces el trámite a pasos simples y concretos, uno por uno.",
            "bad": "Usas el lenguaje burocrático completo esperando que lo entienda."
          },
          {
            "q": "Usas la expresión 'no hay que darle tantas vueltas' ante su necesidad de procesar una decisión.",
            "good": "Le das el tiempo y la información concreta que necesita para decidir.",
            "bad": "Repites la expresión apresurando una decisión que aún no está lista."
          },
          {
            "q": "Le pides que 'se ponga en los zapatos del otro' de forma abstracta.",
            "good": "Le das un ejemplo concreto de cómo se sentiría la otra persona.",
            "bad": "Repites la expresión abstracta sin dar ningún ejemplo concreto."
          },
          {
            "q": "Le explicas la mudanza de cuarto usando la frase 'vamos a darle una vuelta a todo'.",
            "good": "Describes en detalle concreto qué muebles y objetos cambiarán de lugar.",
            "bad": "Repites la frase vaga sin especificar qué cambiará realmente."
          },
          {
            "q": "Usas la expresión 'eso es la gota que colma el vaso' y tu hijo/a busca un vaso real.",
            "good": "Le explicas que significa que ya fueron demasiadas cosas juntas.",
            "bad": "Sigues con la expresión sin aclarar su sentido figurado."
          },
          {
            "q": "Le pides que 'no te tomes todo tan literal' ante su interpretación de una broma.",
            "good": "Reconoces que su forma de procesar el lenguaje es distinta y ajustas tu forma de hablar.",
            "bad": "Le exiges que cambie su forma natural de interpretar el lenguaje."
          },
          {
            "q": "Le explicas un cambio de actividad extraescolar con información parcial y ambigua.",
            "good": "Le das toda la información concreta disponible antes de que decida.",
            "bad": "Le das información a medias esperando que 'se acostumbre' después."
          },
          {
            "q": "Usas la frase 'no hagas tormentas en un vaso de agua' ante su reacción a algo.",
            "good": "Le preguntas qué le genera esa reacción antes de minimizarla con una frase hecha.",
            "bad": "Repites la expresión sin indagar en lo que realmente le afecta."
          },
          {
            "q": "Le pides que 'se aguante' un rato más en una situación sensorialmente incómoda.",
            "good": "Le das un tiempo concreto y un plan claro para salir de la situación.",
            "bad": "Repites 'aguántate' sin dar ninguna referencia de tiempo o salida."
          },
          {
            "q": "Le dices 'no seas tan quisquilloso/a' ante su rechazo a una comida por su textura.",
            "good": "Nombras la textura concreta que le molesta y buscas alternativas similares.",
            "bad": "Repites 'no seas quisquilloso' sin identificar la molestia sensorial real."
          }
        ]
      },
      {
        "slug": "validar-sin-asumir",
        "nombre": "Validar sin Asumir",
        "emoji": "💬",
        "descripcion": "\"No entiendo completamente, pero creo que esto es importante para ti.\"",
        "situaciones": [
          {
            "q": "Tu hijo/a se altera por algo que a ti te parece insignificante.",
            "good": "Le dices que aunque no lo entiendas del todo, ves que es importante para él/ella.",
            "bad": "Le dices que 'no es para tanto' y minimizas su reacción."
          },
          {
            "q": "Expresa un malestar que no logras identificar la causa.",
            "good": "Reconoces que hay algo real ahí, aunque aún no sepas exactamente qué.",
            "bad": "Asumes una causa sin confirmar y actúas según esa suposición."
          },
          {
            "q": "Tu hijo/a insiste en que algo 'se siente mal' sin más explicación.",
            "good": "Confías en su percepción y le preguntas más para entender juntos.",
            "bad": "Le dices que está imaginando cosas."
          },
          {
            "q": "Se resiste a algo que parece simple para ti.",
            "good": "Le comunicas que confías en que hay una razón, aunque no la veas aún.",
            "bad": "Asumes que solo está siendo difícil a propósito."
          },
          {
            "q": "Tu hijo/a llora por un cambio de planes pequeño.",
            "good": "Validas que el cambio le afecta, sin juzgar la magnitud de su reacción.",
            "bad": "Le dices que está exagerando por algo tan simple."
          },
          {
            "q": "Te dice que un lugar 'se siente raro' y no quiere entrar.",
            "good": "Le tomas la palabra y buscas juntos qué le genera esa sensación.",
            "bad": "Lo obligas a entrar diciendo que 'no hay nada raro'."
          },
          {
            "q": "Expresa que un sonido específico 'le duele'.",
            "good": "Aceptas la experiencia como real para él/ella, aunque tú no la sientas igual.",
            "bad": "Le dices que 'no puede doler' un sonido."
          },
          {
            "q": "Tu hijo/a se resiste a un plan que tú preparaste con ilusión.",
            "good": "Reconoces su malestar sin necesidad de que coincida con tu expectativa.",
            "bad": "Le haces sentir culpable por no compartir tu entusiasmo."
          },
          {
            "q": "Dice que algo 'no se siente correcto' sin poder explicar por qué.",
            "good": "Le das espacio para que lo procese, validando que confías en su percepción.",
            "bad": "Exiges una explicación lógica inmediata o lo descartas."
          },
          {
            "q": "Tu hijo/a rechaza una comida que antes le gustaba.",
            "good": "Aceptas que algo cambió para él/ella sin cuestionar su honestidad.",
            "bad": "Le dices que 'antes le gustaba' así que debe seguir gustándole."
          },
          {
            "q": "Se queja de una prenda de ropa que a ti te parece cómoda.",
            "good": "Reconoces que su experiencia sensorial es distinta a la tuya.",
            "bad": "Insistes en que 'se ve bien' así que debe sentirse bien."
          },
          {
            "q": "Tu hijo/a dice que se siente 'observado' en un lugar público.",
            "good": "Validas su sensación de incomodidad sin necesidad de confirmarla objetivamente.",
            "bad": "Le dices que 'nadie lo está mirando' de forma tajante."
          },
          {
            "q": "Expresa ansiedad por un evento que a ti te parece sencillo.",
            "good": "Reconoces que su nivel de ansiedad es válido para su experiencia.",
            "bad": "Le dices que 'no hay nada que temer' sin más."
          },
          {
            "q": "Tu hijo/a se queja de cansancio después de una actividad corta.",
            "good": "Aceptas que su gasto de energía puede ser distinto al tuyo.",
            "bad": "Le dices que 'no puede estar cansado' tan rápido."
          },
          {
            "q": "Dice que un compañero 'lo trata distinto' sin evidencia clara para ti.",
            "good": "Tomas en serio su percepción y exploras juntos qué está pasando.",
            "bad": "Descartas su percepción porque tú no ves ese trato."
          },
          {
            "q": "Tu hijo/a se siente incómodo/a en una reunión social que parece agradable.",
            "good": "Validas que el ambiente puede sentirse distinto para él/ella.",
            "bad": "Le dices que 'está siendo antisocial sin razón'."
          },
          {
            "q": "Expresa que necesita irse de un lugar 'ya' sin dar motivo claro.",
            "good": "Confías en la urgencia que expresa y actúas para ayudarlo/a.",
            "bad": "Le pides una justificación completa antes de moverte."
          },
          {
            "q": "Tu hijo/a dice que algo 'le da miedo' que a ti te parece inofensivo.",
            "good": "Validas el miedo como real para su experiencia particular.",
            "bad": "Le dices que 'eso no da miedo a nadie'."
          },
          {
            "q": "Se queja de que algo 'huele mal' y tú no percibes nada.",
            "good": "Reconoces que su sensibilidad olfativa puede ser distinta a la tuya.",
            "bad": "Le dices que 'no huele a nada' de forma cortante."
          },
          {
            "q": "Tu hijo/a insiste en que necesita hacer algo de cierta manera específica.",
            "good": "Le preguntas qué hay detrás de esa necesidad antes de negarte.",
            "bad": "Le dices que 'está siendo demasiado rígido' sin explorar más."
          },
          {
            "q": "Tu hijo/a de 4 años dice que su peluche 'está triste' hoy.",
            "good": "Le sigues la idea y le preguntas qué cree que necesita el peluche.",
            "bad": "Le dices que 'los peluches no sienten nada' de forma tajante."
          },
          {
            "q": "Tu hijo/a adolescente dice que una canción 'le pesa' sin poder explicar más.",
            "good": "Aceptas que la música le genera algo real, aunque no lo entiendas del todo.",
            "bad": "Le dices que 'es solo una canción' restándole importancia."
          },
          {
            "q": "Tu hijo/a insiste en que la luz de su cuarto 'es demasiado fuerte' de noche.",
            "good": "Confías en su percepción y buscas juntos una solución (regulador, cortina).",
            "bad": "Le dices que 'la luz siempre fue así' sin considerar su experiencia."
          },
          {
            "q": "Tu hijo/a de primaria dice que no quiere sentarse 'en esa silla' del salón.",
            "good": "Le preguntas qué le incomoda de esa silla en particular.",
            "bad": "Le dices que 'es una silla igual a las demás' y lo obligas."
          },
          {
            "q": "Tu hijo/a adulto joven expresa que un ambiente laboral 'se siente tóxico' sin evidencia clara para ti.",
            "good": "Validas su percepción y le preguntas qué situaciones concretas lo generan.",
            "bad": "Le dices que 'está exagerando' sin explorar su experiencia."
          },
          {
            "q": "Tu hijo/a dice que una tela específica 'le pica' aunque a ti te parezca suave.",
            "good": "Reconoces que su piel puede percibir texturas distinto a la tuya.",
            "bad": "Le dices que 'no puede picar, es tela suave' y lo ignoras."
          },
          {
            "q": "Tu hijo/a preadolescente comenta que se siente 'vigilado/a' en el aula.",
            "good": "Validas su sensación y exploras juntos qué la provoca.",
            "bad": "Le dices que 'nadie lo está vigilando' de forma cortante."
          },
          {
            "q": "Tu hijo/a expresa que un lugar de vacaciones 'no le gustó nada' aunque parecía disfrutarlo.",
            "good": "Aceptas que su experiencia interna puede ser distinta a lo que mostró.",
            "bad": "Le dices que 'se veía feliz, no puede ser cierto' y lo descartas."
          },
          {
            "q": "Tu hijo/a dice que 'algo cambió' en la relación con un amigo, sin poder precisar qué.",
            "good": "Le das espacio para procesar esa sensación sin exigir una explicación exacta.",
            "bad": "Le dices que 'está imaginando cosas' sin explorar más."
          },
          {
            "q": "Tu hijo/a de 6 años dice que el agua de la piscina 'se siente distinta' hoy.",
            "good": "Confías en su percepción sensorial aunque no notes la diferencia.",
            "bad": "Le dices que 'el agua es la misma de siempre' y lo ignoras."
          },
          {
            "q": "Tu hijo/a adolescente comenta que un profesor 'tiene favoritos' en la clase.",
            "good": "Tomas en serio su percepción y le preguntas qué observó concretamente.",
            "bad": "Le dices que 'seguro lo imagina' sin considerar su punto de vista."
          },
          {
            "q": "Tu hijo/a expresa que se siente 'fuera de lugar' en las reuniones familiares grandes.",
            "good": "Validas esa sensación sin necesidad de que coincida con tu propia experiencia.",
            "bad": "Le dices que 'es su familia, debería sentirse cómodo' sin escuchar más."
          },
          {
            "q": "Tu hijo/a insiste en que un olor en la casa nueva 'es muy fuerte', aunque tú no lo notes.",
            "good": "Aceptas que su olfato puede captar algo que el tuyo no percibe.",
            "bad": "Le dices que 'no hay ningún olor' de forma cortante."
          },
          {
            "q": "Tu hijo/a preadolescente dice que sintió que 'lo miraron feo' en el colegio.",
            "good": "Validas su percepción y exploras juntos la situación específica.",
            "bad": "Le dices que 'seguro no fue nada' sin indagar más."
          },
          {
            "q": "Tu hijo/a expresa miedo a un objeto cotidiano (una máscara, un muñeco) que a ti no te parece amenazante.",
            "good": "Aceptas que su miedo es real para su experiencia, sin descalificarlo.",
            "bad": "Le dices que 'eso no da miedo a nadie' de forma tajante."
          },
          {
            "q": "Tu hijo/a dice que 'algo anda mal' en la familia, sin poder identificar qué exactamente.",
            "good": "Reconoces que puede estar percibiendo una tensión real y le das espacio para hablar.",
            "bad": "Le dices que 'no pasa nada' cuando en realidad sí hay tensión."
          },
          {
            "q": "Tu hijo/a de primaria insiste en que la etiqueta de su ropa 'le molesta muchísimo'.",
            "good": "Confías en su sensibilidad sensorial y buscas cortarla o cambiar la prenda.",
            "bad": "Le dices que 'no puede molestar tanto una etiqueta' y lo ignoras."
          },
          {
            "q": "Tu hijo/a adulto joven expresa que se siente 'invisible' en su grupo de amigos actual.",
            "good": "Validas ese sentimiento y le preguntas qué lo lleva a sentirse así.",
            "bad": "Le dices que 'seguro lo quieren igual' sin explorar su experiencia."
          },
          {
            "q": "Tu hijo/a dice que un juego en el recreo 'no se sintió justo', sin poder explicar bien por qué.",
            "good": "Le das espacio para procesarlo, validando que hay algo real detrás.",
            "bad": "Le exiges una explicación lógica inmediata o descartas su queja."
          },
          {
            "q": "Tu hijo/a expresa que la voz de cierto adulto 'le resulta insoportable' de escuchar.",
            "good": "Aceptas que su percepción auditiva es distinta y buscas reducir la exposición.",
            "bad": "Le dices que 'no puede ser tan sensible' con la voz de alguien."
          },
          {
            "q": "Tu hijo/a preadolescente dice que sintió 'algo raro' en el ambiente de una fiesta.",
            "good": "Validas la sensación y le preguntas qué notó específicamente.",
            "bad": "Le dices que 'la fiesta estaba bien' sin considerar su percepción."
          },
          {
            "q": "Tu hijo/a insiste en que necesita revisar la puerta varias veces antes de dormir.",
            "good": "Le preguntas qué hay detrás de esa necesidad antes de decirle que pare.",
            "bad": "Le dices que 'es una tontería revisar tantas veces' sin explorar más."
          },
          {
            "q": "Tu hijo/a dice que el uniforme escolar 'se siente distinto' desde que lo lavaron con otro jabón.",
            "good": "Confías en su percepción sensorial y consideras volver al jabón anterior.",
            "bad": "Le dices que 'es la misma ropa de siempre' y lo descartas."
          },
          {
            "q": "Tu hijo/a adolescente expresa que sintió 'energía negativa' en un lugar específico.",
            "good": "Validas que percibió algo incómodo, sin necesidad de explicarlo racionalmente.",
            "bad": "Le dices que 'eso no existe' descartando su experiencia por completo."
          },
          {
            "q": "Tu hijo/a dice que un compañero 'habla distinto' con él/ella que con los demás.",
            "good": "Tomas en serio su observación y exploras juntos qué está notando.",
            "bad": "Le dices que 'está imaginando cosas' sin considerar su percepción."
          },
          {
            "q": "Tu hijo/a de primaria insiste en que la comida 'sabe distinta' aunque sea la misma receta de siempre.",
            "good": "Aceptas que su percepción del sabor puede variar y le preguntas qué nota diferente.",
            "bad": "Le dices que 'es la misma comida de siempre' de forma tajante."
          },
          {
            "q": "Tu hijo/a expresa que se siente 'atrapado/a' en una rutina que antes disfrutaba.",
            "good": "Validas ese cambio de sentir sin cuestionar por qué antes le gustaba.",
            "bad": "Le dices que 'antes le encantaba, no puede haber cambiado' así de rápido."
          },
          {
            "q": "Tu hijo/a preadolescente dice que un espacio del colegio 'le da mala espina'.",
            "good": "Confías en su intuición y exploras juntos qué le genera esa sensación.",
            "bad": "Le dices que 'no hay nada de qué preocuparse ahí' sin indagar."
          },
          {
            "q": "Tu hijo/a insiste en que necesita que las cosas estén en un orden específico para sentirse bien.",
            "good": "Reconoces que ese orden le da seguridad, sin llamarlo exageración.",
            "bad": "Le dices que 'no importa el orden' y lo desordenas sin avisar."
          },
          {
            "q": "Tu hijo/a adulto joven expresa que un comentario de un familiar 'le dolió' aunque parecía inocente.",
            "good": "Validas que el impacto fue real para él/ella, más allá de la intención del comentario.",
            "bad": "Le dices que 'no era para tanto, seguro no quiso ofender'."
          },
          {
            "q": "Tu hijo/a dice que 'algo se siente distinto' en su cuerpo, sin lograr describirlo bien.",
            "good": "Tomas en serio la señal corporal y buscas juntos más información.",
            "bad": "Le dices que 'seguro no es nada' sin explorar más su sensación."
          },
          {
            "q": "Tu hijo/a de primaria expresa que un peinado nuevo 'le molesta toda la cabeza'.",
            "good": "Confías en su sensibilidad y buscas un peinado más cómodo para él/ella.",
            "bad": "Le dices que 'se ve bien así' ignorando su molestia física."
          },
          {
            "q": "Tu hijo/a insiste en que prefiere comer siempre lo mismo, y tú te preocupas por eso.",
            "good": "Validas que esa previsibilidad le da seguridad, sin forzar variedad de golpe.",
            "bad": "Le dices que 'tiene que comer variado como todos' sin explorar el porqué."
          },
          {
            "q": "Tu hijo/a adolescente expresa que se siente 'juzgado/a' por su forma de vestir en el colegio.",
            "good": "Validas su percepción y le preguntas qué situaciones concretas se lo hicieron sentir así.",
            "bad": "Le dices que 'nadie lo está juzgando' sin considerar su experiencia."
          },
          {
            "q": "Tu hijo/a dice que el ruido del ventilador 'no lo deja pensar'.",
            "good": "Aceptas que su percepción auditiva es distinta y buscas una alternativa.",
            "bad": "Le dices que 'es un ruido mínimo' y lo dejas encendido igual."
          },
          {
            "q": "Tu hijo/a preadolescente insiste en que 'algo cambió' en cómo lo tratan sus abuelos.",
            "good": "Tomas en serio su observación y exploras con calma qué percibió.",
            "bad": "Le dices que 'seguro no cambió nada' sin indagar más."
          },
          {
            "q": "Tu hijo/a expresa que necesita que le expliquen todo antes de un cambio, aunque parezca simple.",
            "good": "Reconoces esa necesidad de información como legítima, no como capricho.",
            "bad": "Le dices que 'no necesita tanta explicación para algo tan simple'."
          },
          {
            "q": "Tu hijo/a dice que un chiste que otros encuentran gracioso a él/ella 'le incomodó'.",
            "good": "Validas su incomodidad sin necesidad de que coincida con la reacción del grupo.",
            "bad": "Le dices que 'es solo un chiste, no seas exagerado/a'."
          },
          {
            "q": "Tu hijo/a de primaria insiste en que su mochila 'pesa distinto' cada día.",
            "good": "Confías en su percepción del peso y revisan juntos el contenido.",
            "bad": "Le dices que 'pesa lo mismo de siempre' sin revisar nada."
          },
          {
            "q": "Tu hijo/a adulto joven expresa que sintió 'un mal presentimiento' antes de un evento.",
            "good": "Validas su intuición sin necesidad de que se confirme racionalmente.",
            "bad": "Le dices que 'eso no significa nada' descartando su percepción."
          },
          {
            "q": "Tu hijo/a dice que la temperatura de un cuarto 'está helada' cuando a ti te parece templada.",
            "good": "Aceptas que su termorregulación puede ser distinta y ajustas el ambiente.",
            "bad": "Le dices que 'no hace tanto frío' sin considerar su sensación."
          },
          {
            "q": "Tu hijo/a preadolescente insiste en que un amigo 'ya no es el mismo' últimamente.",
            "good": "Tomas en serio su percepción del cambio y exploras juntos qué nota.",
            "bad": "Le dices que 'está viendo cosas que no existen' sin indagar."
          },
          {
            "q": "Tu hijo/a expresa que se siente 'raro/a' con su propio cuerpo en esta etapa.",
            "good": "Validas que esa sensación es parte de un proceso real, sin minimizarla.",
            "bad": "Le dices que 'es normal, no le des tanta importancia' cerrando el tema."
          },
          {
            "q": "Tu hijo/a dice que el sonido de cierto electrodoméstico 'le lastima los oídos'.",
            "good": "Confías en su experiencia sensorial y buscas reducir ese sonido.",
            "bad": "Le dices que 'no puede lastimar, es un ruido normal'."
          },
          {
            "q": "Tu hijo/a de primaria insiste en que 'algo se ve distinto' en su cuarto tras una limpieza.",
            "good": "Validas que notó un cambio real en su entorno y le preguntas qué es.",
            "bad": "Le dices que 'no cambió nada' sin revisar lo que percibió."
          },
          {
            "q": "Tu hijo/a adolescente expresa que sintió que 'lo excluyeron a propósito' de un plan grupal.",
            "good": "Validas su percepción y exploras juntos qué evidencia tiene.",
            "bad": "Le dices que 'seguro fue sin intención' sin escuchar su punto de vista."
          },
          {
            "q": "Tu hijo/a dice que un masaje o abrazo 'duele' aunque se aplique con suavidad.",
            "good": "Confías en su umbral sensorial distinto y ajustas el contacto físico.",
            "bad": "Le dices que 'no puede doler, es solo un abrazo suave'."
          },
          {
            "q": "Tu hijo/a preadolescente insiste en que un profesor 'cambió su forma de tratarlo/a'.",
            "good": "Tomas en serio la observación y consideras indagar en el colegio.",
            "bad": "Le dices que 'seguro lo imagina' sin considerar la posibilidad."
          },
          {
            "q": "Tu hijo/a expresa que 'algo no se siente bien' respecto a una persona nueva en la familia.",
            "good": "Validas esa intuición sin forzarlo a confiar de inmediato en esa persona.",
            "bad": "Le dices que 'tiene que confiar porque es de la familia'."
          },
          {
            "q": "Tu hijo/a dice que las luces de navidad 'son demasiado intensas' para él/ella.",
            "good": "Confías en su sensibilidad visual y ajustas la intensidad o cantidad.",
            "bad": "Le dices que 'a todos les gustan las luces' ignorando su molestia."
          },
          {
            "q": "Tu hijo/a de primaria insiste en que 'siente que algo va a salir mal' antes de un evento.",
            "good": "Validas su ansiedad anticipatoria sin descartarla como infundada.",
            "bad": "Le dices que 'no tiene sentido pensar eso' cerrando el tema."
          },
          {
            "q": "Tu hijo/a adulto joven expresa que un grupo de estudio 'no se siente seguro' para participar.",
            "good": "Validas esa sensación y le preguntas qué la genera específicamente.",
            "bad": "Le dices que 'está exagerando, es solo estudiar' sin explorar más."
          },
          {
            "q": "Tu hijo/a dice que 'algo cambió' en el sabor de su comida favorita.",
            "good": "Confías en su percepción del sabor, aunque la receta sea la misma.",
            "bad": "Le dices que 'es imposible que haya cambiado' sin más."
          },
          {
            "q": "Tu hijo/a preadolescente insiste en que una prenda nueva 'se siente pesada' aunque sea liviana.",
            "good": "Aceptas que su percepción del peso en la piel puede ser distinta.",
            "bad": "Le dices que 'es súper liviana' ignorando lo que siente."
          },
          {
            "q": "Tu hijo/a expresa que sintió 'algo extraño' al entrar a una casa nueva.",
            "good": "Validas esa sensación sin necesidad de identificar una causa lógica.",
            "bad": "Le dices que 'no hay nada extraño ahí' de forma cortante."
          },
          {
            "q": "Tu hijo/a dice que el silencio de la casa 'se siente pesado' cuando está solo/a un rato.",
            "good": "Confías en su experiencia del ambiente y le ofreces compañía o ruido suave.",
            "bad": "Le dices que 'el silencio no puede sentirse pesado' descartándolo."
          },
          {
            "q": "Tu hijo/a de primaria insiste en que 'algo picó' aunque no encuentres marca visible.",
            "good": "Confías en su sensación corporal y revisas con calma junto a él/ella.",
            "bad": "Le dices que 'no hay nada, está imaginando' sin revisar nada."
          },
          {
            "q": "Tu hijo/a adolescente expresa que se siente 'diferente' a sus compañeros de forma que le pesa.",
            "good": "Validas ese sentimiento sin apresurarte a decir que 'todos se sienten así'.",
            "bad": "Le dices rápido que es normal, cerrando la conversación sin explorar más."
          },
          {
            "q": "Tu hijo/a dice que un episodio de una serie 'lo dejó mal' aunque a ti te pareciera liviano.",
            "good": "Validas el impacto que tuvo en él/ella, independiente de tu propia percepción.",
            "bad": "Le dices que 'era solo una serie, no exageres'."
          },
          {
            "q": "Tu hijo/a preadolescente insiste en que 'algo distinto' pasa con su cuerpo que le preocupa.",
            "good": "Tomas en serio su preocupación y buscan información juntos o consultan a un profesional.",
            "bad": "Le dices que 'no le pasa nada' sin considerar la posibilidad."
          },
          {
            "q": "Tu hijo/a expresa que un lugar de vacaciones 'se sintió abrumador' aunque a la familia le encantó.",
            "good": "Validas su experiencia distinta sin forzarlo a compartir el entusiasmo general.",
            "bad": "Le dices que 'a todos les encantó, no entiendo por qué a ti no'."
          },
          {
            "q": "Tu hijo/a dice que 'algo no cuadra' en una explicación que le diste sobre una regla.",
            "good": "Revisas junto a él/ella la explicación para ver si hay una inconsistencia real.",
            "bad": "Le dices que 'no cuestione todo' sin revisar tu propia explicación."
          },
          {
            "q": "Tu hijo/a de primaria insiste en que necesita dormir con la puerta en cierta posición exacta.",
            "good": "Reconoces que esa configuración le da seguridad, sin llamarlo capricho.",
            "bad": "Le dices que 'no importa cómo quede la puerta' y la dejas como quieras."
          },
          {
            "q": "Tu hijo/a adulto joven expresa que un consejo bienintencionado 'le hizo sentir peor'.",
            "good": "Validas ese efecto, aunque la intención detrás fuera buena.",
            "bad": "Le dices que 'era para ayudarte, no te lo tomes así'."
          },
          {
            "q": "Tu hijo/a dice que 'algo huele distinto' en la ropa recién lavada.",
            "good": "Confías en su sensibilidad olfativa y consideras cambiar el detergente.",
            "bad": "Le dices que 'huele igual de siempre' sin considerar su percepción."
          },
          {
            "q": "Tu hijo/a preadolescente insiste en que un familiar 'lo trata distinto' que a sus primos.",
            "good": "Tomas en serio su percepción y exploras juntos ejemplos concretos.",
            "bad": "Le dices que 'todos son tratados igual' sin explorar su experiencia."
          },
          {
            "q": "Tu hijo/a expresa que se siente 'incómodo/a' usando cierto tipo de calzado nuevo.",
            "good": "Confías en su sensación y buscan una alternativa más cómoda juntos.",
            "bad": "Le dices que 'ya se va a acostumbrar' sin considerar cambiarlo."
          },
          {
            "q": "Tu hijo/a dice que 'siente que algo va a pasar' antes de una mudanza, con angustia real.",
            "good": "Validas la angustia anticipatoria y le das información concreta disponible.",
            "bad": "Le dices que 'no tiene por qué sentir eso' descartando la emoción."
          },
          {
            "q": "Tu hijo/a de primaria insiste en que un juguete roto 'todavía se siente especial' para guardarlo.",
            "good": "Respetas ese vínculo emocional con el objeto, sin apurar a tirarlo.",
            "bad": "Le dices que 'está roto, no sirve para nada' y lo descartas."
          },
          {
            "q": "Tu hijo/a adolescente expresa que sintió 'tensión' en una conversación familiar que a ti te pareció normal.",
            "good": "Validas que percibió algo real, aunque tú no lo hayas notado igual.",
            "bad": "Le dices que 'todo estaba tranquilo, no sé de qué hablas'."
          },
          {
            "q": "Tu hijo/a dice que 'algo se siente distinto' en su relación con un hermano/a últimamente.",
            "good": "Tomas en serio esa percepción y exploras juntos qué está cambiando.",
            "bad": "Le dices que 'todo sigue igual' sin considerar su experiencia."
          },
          {
            "q": "Tu hijo/a preadolescente insiste en que necesita revisar sus tareas varias veces antes de entregar.",
            "good": "Reconoces que esa necesidad de certeza es real para él/ella, sin apurar el proceso.",
            "bad": "Le dices que 'una revisión basta' sin considerar su necesidad."
          },
          {
            "q": "Tu hijo/a expresa que un cambio de clima 'le afecta el ánimo' de forma notoria.",
            "good": "Validas esa conexión entre clima y estado de ánimo sin descartarla.",
            "bad": "Le dices que 'el clima no tiene nada que ver con el ánimo'."
          },
          {
            "q": "Tu hijo/a dice que 'algo se siente injusto' en una regla familiar, sin poder argumentarlo del todo.",
            "good": "Le das espacio para procesar esa sensación y exploras el tema juntos después.",
            "bad": "Le dices que 'las reglas no se cuestionan' cerrando la conversación."
          },
          {
            "q": "Tu hijo/a de primaria insiste en que 'algo raro' pasa con un amigo imaginario que menciona.",
            "good": "Aceptas ese mundo interno como parte válida de su desarrollo, sin ridiculizarlo.",
            "bad": "Le dices que 'eso no existe' descalificando su experiencia interna."
          },
          {
            "q": "Tu hijo/a adulto joven expresa que sintió 'un límite cruzado' en una conversación con un familiar.",
            "good": "Validas que su límite es legítimo, aunque el familiar no lo haya notado.",
            "bad": "Le dices que 'seguro no fue su intención, no te pongas así'."
          },
          {
            "q": "Tu hijo/a dice que un abrazo grupal en una despedida 'se sintió demasiado' para él/ella.",
            "good": "Validas que la intensidad del contacto físico grupal puede abrumarlo, sin exigir que participe igual que otros.",
            "bad": "Le dices que 'era solo cariño, no exageres' restando importancia a su malestar."
          },
          {
            "q": "Tu hijo/a preadolescente insiste en que 'algo no está bien' con un plan familiar, sin poder justificarlo con datos.",
            "good": "Tomas en serio su intuición y revisan juntos los detalles del plan.",
            "bad": "Le dices que 'no tiene fundamento' sin considerar su percepción."
          },
          {
            "q": "Tu hijo/a expresa que una silla de ruedas o andador ajeno 'le da curiosidad, no miedo', y tú asumes lo contrario.",
            "good": "Le preguntas qué siente realmente en vez de asumir su reacción.",
            "bad": "Le apartas rápidamente asumiendo que le da miedo sin confirmarlo."
          },
          {
            "q": "Tu hijo/a de primaria dice que 'se siente distinto' un día en que en apariencia todo está normal.",
            "good": "Confías en que algo real está pasando, aunque no sea evidente para ti.",
            "bad": "Le dices que 'no puede sentirse distinto sin motivo' y lo ignoras."
          }
        ]
      },
      {
        "slug": "negociacion-colaborativa",
        "nombre": "Negociación Colaborativa",
        "emoji": "🤝",
        "descripcion": "Resolver problemas juntos.",
        "situaciones": [
          {
            "q": "Tu hijo/a no quiere hacer la tarea a la hora que tú propones.",
            "good": "Le preguntas qué horario le funcionaría mejor y buscan un acuerdo juntos.",
            "bad": "Impones el horario sin consultar su preferencia."
          },
          {
            "q": "Hay un conflicto sobre cuánto tiempo de pantalla usar.",
            "good": "Proponen juntos un límite que considere ambas necesidades.",
            "bad": "Fijas el límite unilateralmente sin explicar ni negociar."
          },
          {
            "q": "Tu hijo/a quiere usar cierta ropa que tú consideras inapropiada para la ocasión.",
            "good": "Buscan una alternativa intermedia que respete su comodidad y el contexto.",
            "bad": "Le impones tu elección sin considerar la suya."
          },
          {
            "q": "Discrepan sobre qué actividad hacer el fin de semana.",
            "good": "Proponen alternar actividades o combinar intereses de ambos.",
            "bad": "Decides la actividad sin consultarlo."
          },
          {
            "q": "Tu hijo/a se resiste a una rutina de estudio que impusiste.",
            "good": "Le preguntas qué parte le resulta difícil y ajustan la rutina juntos.",
            "bad": "Mantienes la rutina exacta sin abrir espacio a su opinión."
          },
          {
            "q": "Hay desacuerdo sobre la hora de dormir.",
            "good": "Exploran juntos un horario que equilibre su energía y las necesidades familiares.",
            "bad": "Impones la hora sin explicar el porqué ni escuchar su punto."
          },
          {
            "q": "Tu hijo/a quiere un descanso extra durante la tarea escolar.",
            "good": "Acuerdan una cantidad de pausas razonable para ambos.",
            "bad": "Niegas cualquier pausa porque 'hay que terminar ya'."
          },
          {
            "q": "Discrepan sobre qué comer para la cena.",
            "good": "Buscan una opción que combine preferencias de ambos o alternan la elección.",
            "bad": "Decides el menú sin considerar sus preferencias sensoriales."
          },
          {
            "q": "Tu hijo/a quiere elegir su propia mochila o materiales escolares.",
            "good": "Le das opciones dentro de un rango que sea funcional para ambos.",
            "bad": "Eliges tú todo sin darle espacio de decisión."
          },
          {
            "q": "Hay conflicto sobre el volumen de la música o TV en casa.",
            "good": "Acuerdan horarios o niveles de volumen que funcionen para todos.",
            "bad": "Impones silencio total sin negociar un punto medio."
          },
          {
            "q": "Tu hijo/a no está de acuerdo con las tareas del hogar asignadas.",
            "good": "Revisan juntos la lista y ajustan según sus preferencias y capacidades.",
            "bad": "Mantienes la asignación fija sin considerar su opinión."
          },
          {
            "q": "Discrepan sobre cuánto tiempo quedarse en una reunión social.",
            "good": "Acuerdan una señal o límite de tiempo que ambos puedan aceptar.",
            "bad": "Decides la duración sin consultarlo ni dar señales de salida."
          },
          {
            "q": "Tu hijo/a quiere cambiar el plan de vacaciones que ya armaste.",
            "good": "Escuchas su propuesta y ven qué partes se pueden ajustar juntos.",
            "bad": "Descartas su propuesta de inmediato sin considerarla."
          },
          {
            "q": "Hay desacuerdo sobre qué actividad extraescolar continuar.",
            "good": "Exploran juntos los pros y contras antes de decidir.",
            "bad": "Decides por él/ella basándote solo en tu preferencia."
          },
          {
            "q": "Tu hijo/a quiere más independencia en una tarea que le supervisas de cerca.",
            "good": "Acuerdan un nivel de supervisión gradual que ambos acepten.",
            "bad": "Mantienes el mismo nivel de control sin negociar cambios."
          },
          {
            "q": "Discrepan sobre las reglas de un juego familiar.",
            "good": "Buscan una versión de las reglas que funcione para todos los participantes.",
            "bad": "Impones tus reglas porque 'siempre se ha jugado así'."
          },
          {
            "q": "Tu hijo/a se resiste al plan de estudio para un examen.",
            "good": "Le preguntas qué método le funciona mejor y ajustan el plan juntos.",
            "bad": "Mantienes tu método de estudio preferido sin considerar el suyo."
          },
          {
            "q": "Hay conflicto sobre compartir un espacio con un hermano/a.",
            "good": "Negocian turnos o límites de espacio que ambos hermanos acepten.",
            "bad": "Impones una solución sin escuchar a ambas partes."
          },
          {
            "q": "Tu hijo/a quiere negociar el uso del dinero de su mesada.",
            "good": "Conversan sobre prioridades y llegan a un acuerdo sobre su uso.",
            "bad": "Decides tú completamente en qué puede gastar su dinero."
          },
          {
            "q": "Discrepan sobre qué ruta o medio de transporte usar.",
            "good": "Consideran su comodidad sensorial y llegan a una opción conjunta.",
            "bad": "Eliges la ruta más rápida sin considerar su bienestar."
          },
          {
            "q": "Tu hijo/a preadolescente quiere elegir su propio corte de pelo distinto al habitual.",
            "good": "Conversan sobre opciones que le gusten dentro de lo manejable para ambos.",
            "bad": "Decides tú el corte sin considerar su preferencia."
          },
          {
            "q": "Hay desacuerdo sobre a qué hora debe estar listo/a para ir al colegio.",
            "good": "Acuerdan juntos una rutina matutina con tiempos que funcionen para ambos.",
            "bad": "Impones el horario sin explicar ni escuchar su ritmo."
          },
          {
            "q": "Tu hijo/a adolescente quiere ir a una fiesta hasta tarde y tú tienes dudas.",
            "good": "Negocian una hora de regreso intermedia que ambos puedan aceptar.",
            "bad": "Le prohíbes ir sin abrir espacio a conversar condiciones."
          },
          {
            "q": "Discrepan sobre qué película ver en familia el fin de semana.",
            "good": "Alternan la elección semana a semana entre los miembros de la familia.",
            "bad": "Eliges tú la película sin considerar las preferencias de los demás."
          },
          {
            "q": "Tu hijo/a quiere llevar un juguete específico a una reunión familiar y tú prefieres que no.",
            "good": "Acuerdan un compromiso: lo lleva pero lo guarda en cierto momento.",
            "bad": "Le prohíbes llevarlo sin explorar por qué es importante para él/ella."
          },
          {
            "q": "Hay conflicto sobre el uso compartido del computador familiar.",
            "good": "Crean juntos un horario de turnos que respete las necesidades de cada uno.",
            "bad": "Impones un horario fijo sin consultar las preferencias de nadie."
          },
          {
            "q": "Tu hijo/a adulto joven quiere mudarse antes de lo que tú consideras prudente.",
            "good": "Conversan sobre un plan gradual que incorpore las preocupaciones de ambos.",
            "bad": "Le dices que no está listo/a sin abrir un diálogo real sobre el tema."
          },
          {
            "q": "Discrepan sobre qué mascota adoptar en la familia.",
            "good": "Investigan juntos opciones que se ajusten a las necesidades de todos.",
            "bad": "Decides la mascota sin considerar las preferencias de tu hijo/a."
          },
          {
            "q": "Tu hijo/a preadolescente quiere decorar su cuarto de una forma que no te convence.",
            "good": "Acuerdan qué elementos puede decidir él/ella y cuáles se conversan juntos.",
            "bad": "Impones tu gusto decorativo sin dar espacio a su preferencia."
          },
          {
            "q": "Hay desacuerdo sobre cuánto dinero destinar a una salida con amigos.",
            "good": "Conversan un monto que sea razonable para ambos y lo acuerdan.",
            "bad": "Fijas el monto sin explicar el porqué ni escuchar su necesidad."
          },
          {
            "q": "Tu hijo/a quiere elegir el menú de su cumpleaños distinto al tradicional familiar.",
            "good": "Buscan una combinación entre su preferencia y la tradición familiar.",
            "bad": "Mantienes el menú tradicional sin considerar lo que él/ella pidió."
          },
          {
            "q": "Discrepan sobre el horario de uso de videojuegos entre semana.",
            "good": "Acuerdan un límite conversado que considere tareas y descanso necesario.",
            "bad": "Impones la prohibición total sin negociar un punto intermedio."
          },
          {
            "q": "Tu hijo/a adolescente quiere participar en una actividad que tú consideras riesgosa.",
            "good": "Conversan sobre las condiciones necesarias para que participe con seguridad.",
            "bad": "Le prohíbes de plano sin explorar el interés detrás de la actividad."
          },
          {
            "q": "Hay conflicto sobre qué ropa usar para una ceremonia familiar formal.",
            "good": "Buscan una opción formal que también sea cómoda sensorialmente para él/ella.",
            "bad": "Le impones la ropa formal sin considerar su comodidad sensorial."
          },
          {
            "q": "Tu hijo/a quiere cambiar de deporte a mitad de temporada.",
            "good": "Conversan sobre las razones y acuerdan cómo hacer la transición.",
            "bad": "Le exiges terminar la temporada sin escuchar sus razones."
          },
          {
            "q": "Discrepan sobre cuánto tiempo dedicar a las tareas escolares cada día.",
            "good": "Acuerdan un tiempo razonable basado en su ritmo real de trabajo.",
            "bad": "Impones un tiempo fijo sin considerar su forma de procesar la tarea."
          },
          {
            "q": "Tu hijo/a adulto joven quiere invitar a su pareja a vivir temporalmente en casa.",
            "good": "Conversan condiciones y expectativas que funcionen para toda la familia.",
            "bad": "Niegas la posibilidad sin abrir espacio a conversar el tema."
          },
          {
            "q": "Hay desacuerdo sobre qué actividad hacer en las vacaciones de verano.",
            "good": "Alternan actividades que incluyan intereses de todos los miembros.",
            "bad": "Decides el plan de vacaciones sin consultar preferencias de tu hijo/a."
          },
          {
            "q": "Tu hijo/a preadolescente quiere tener su propio teléfono antes de lo que planeabas.",
            "good": "Conversan condiciones y un plan gradual de uso responsable.",
            "bad": "Le niegas el teléfono sin abrir espacio a negociar condiciones."
          },
          {
            "q": "Discrepan sobre cómo repartir las tareas del hogar entre hermanos.",
            "good": "Revisan juntos una repartición que considere las capacidades de cada uno.",
            "bad": "Impones la misma carga de tareas a todos sin distinción."
          },
          {
            "q": "Tu hijo/a quiere participar en una decisión sobre el cambio de colegio.",
            "good": "Lo incluyes en la conversación, considerando su opinión en la decisión final.",
            "bad": "Decides el cambio de colegio sin informarle hasta que ya está resuelto."
          },
          {
            "q": "Hay conflicto sobre el uso del baño compartido en las mañanas.",
            "good": "Acuerdan un horario de turnos que funcione para todos los que lo usan.",
            "bad": "Impones un orden fijo sin considerar las necesidades de cada uno."
          },
          {
            "q": "Tu hijo/a adolescente quiere tatuarse o perforarse algo y tú tienes reservas.",
            "good": "Conversan sobre el tema con información y condiciones que ambos acepten.",
            "bad": "Le prohíbes de plano sin abrir ningún espacio de diálogo."
          },
          {
            "q": "Discrepan sobre qué tan tarde puede quedarse despierto/a un fin de semana.",
            "good": "Negocian una hora límite que considere descanso y su deseo de flexibilidad.",
            "bad": "Mantienes la misma hora de todos los días sin negociar excepciones."
          },
          {
            "q": "Tu hijo/a quiere elegir sus propias actividades extracurriculares este año.",
            "good": "Exploran juntos opciones dentro de un presupuesto y tiempo razonable.",
            "bad": "Eliges tú las actividades sin considerar sus intereses actuales."
          },
          {
            "q": "Hay desacuerdo sobre compartir el auto familiar entre hermanos que ya conducen.",
            "good": "Acuerdan un calendario de uso que considere las necesidades de cada uno.",
            "bad": "Impones un uso preferencial sin conversar con ambos hermanos."
          },
          {
            "q": "Tu hijo/a preadolescente quiere ir solo/a a un lugar cercano por primera vez.",
            "good": "Conversan condiciones de seguridad que le permitan ganar autonomía gradual.",
            "bad": "Le niegas el permiso sin explorar un camino intermedio posible."
          },
          {
            "q": "Discrepan sobre cuánta privacidad debe tener en su cuarto.",
            "good": "Acuerdan límites de privacidad que respeten su edad y la confianza mutua.",
            "bad": "Mantienes control total sin negociar ningún espacio de privacidad."
          },
          {
            "q": "Tu hijo/a quiere participar en la organización de un evento familiar.",
            "good": "Le das un rol concreto de decisión dentro de la organización.",
            "bad": "Organizas todo sin incluir su opinión en ninguna parte."
          },
          {
            "q": "Hay conflicto sobre qué idioma o actividad extra estudiar fuera del colegio.",
            "good": "Exploran juntos opciones que consideren su interés y utilidad futura.",
            "bad": "Decides la actividad extra sin considerar su motivación real."
          },
          {
            "q": "Tu hijo/a adolescente quiere trabajar medio tiempo mientras estudia.",
            "good": "Conversan condiciones que equilibren estudio, descanso y el trabajo.",
            "bad": "Le prohíbes trabajar sin explorar sus razones ni llegar a un acuerdo."
          },
          {
            "q": "Discrepan sobre qué tanto tiempo pasar con cada lado de la familia en una fecha especial.",
            "good": "Negocian una repartición de tiempo que considere las preferencias de tu hijo/a.",
            "bad": "Decides la repartición sin consultar su opinión al respecto."
          },
          {
            "q": "Tu hijo/a quiere personalizar las reglas de su fiesta de cumpleaños.",
            "good": "Conversan juntos qué actividades y reglas incluir en la celebración.",
            "bad": "Organizas la fiesta según tu criterio sin considerar sus preferencias."
          },
          {
            "q": "Hay desacuerdo sobre el uso de redes sociales y la edad para tener cuenta propia.",
            "good": "Acuerdan condiciones de supervisión que ambos puedan aceptar.",
            "bad": "Prohíbes las redes sociales sin abrir espacio a conversar condiciones."
          },
          {
            "q": "Tu hijo/a preadolescente quiere elegir su propio horario de estudio en casa.",
            "good": "Acuerdan un horario que considere su energía y las necesidades familiares.",
            "bad": "Impones el horario de estudio sin considerar su ritmo personal."
          },
          {
            "q": "Discrepan sobre qué actividades hacer durante un feriado largo.",
            "good": "Alternan propuestas de cada miembro de la familia para el feriado.",
            "bad": "Decides el plan del feriado sin considerar las preferencias de todos."
          },
          {
            "q": "Tu hijo/a adulto joven quiere manejar su propio dinero de forma distinta a como esperas.",
            "good": "Conversan un plan financiero que respete su autonomía y tus preocupaciones.",
            "bad": "Controlas todas sus decisiones financieras sin abrir el diálogo."
          },
          {
            "q": "Hay conflicto sobre qué tanto ayudar en la cocina según sus gustos e intereses.",
            "good": "Acuerdan tareas de cocina que se ajusten a lo que le interesa hacer.",
            "bad": "Le asignas tareas de cocina sin considerar sus preferencias."
          },
          {
            "q": "Tu hijo/a quiere elegir su propia mascota de peluche o consuelo para llevar a la escuela.",
            "good": "Acuerdan condiciones de cuándo y cómo puede llevarlo consigo.",
            "bad": "Le prohíbes llevarlo sin explorar la función que cumple para él/ella."
          },
          {
            "q": "Discrepan sobre qué tan estricta debe ser la rutina de las noches de escuela.",
            "good": "Ajustan la rutina juntos según lo que realmente funciona para ambos.",
            "bad": "Mantienes la rutina exacta sin evaluar si sigue siendo funcional."
          },
          {
            "q": "Tu hijo/a preadolescente quiere participar en una decisión sobre mudarse de ciudad.",
            "good": "Lo incluyes en la conversación, aunque la decisión final sea de los adultos.",
            "bad": "Le informas la mudanza como un hecho consumado sin espacio a opinar."
          },
          {
            "q": "Hay desacuerdo sobre cuánto tiempo de pantalla compartir en familia por las noches.",
            "good": "Acuerdan un tiempo conjunto que equilibre convivencia y descanso individual.",
            "bad": "Impones la prohibición total de pantallas sin considerar otras opciones."
          },
          {
            "q": "Tu hijo/a quiere elegir su propio estilo de estudio para preparar un examen.",
            "good": "Conversan sobre métodos y acuerdan el que mejor le funcione a él/ella.",
            "bad": "Le impones tu método de estudio preferido sin considerar el suyo."
          },
          {
            "q": "Discrepan sobre qué tan seguido visitar a cierto familiar que le genera ansiedad.",
            "good": "Negocian una frecuencia de visitas que considere su bienestar.",
            "bad": "Mantienes la misma frecuencia sin considerar cómo le afecta."
          },
          {
            "q": "Tu hijo/a adolescente quiere definir sus propias reglas de convivencia con un hermano/a.",
            "good": "Facilitas una conversación entre ambos para llegar a acuerdos propios.",
            "bad": "Impones las reglas de convivencia sin involucrarlos en la decisión."
          },
          {
            "q": "Hay conflicto sobre qué tanto participar en actividades religiosas familiares.",
            "good": "Conversan un nivel de participación que respete sus creencias y las de la familia.",
            "bad": "Le exiges participar igual que todos sin considerar su punto de vista."
          },
          {
            "q": "Tu hijo/a quiere elegir su propio grupo de amigos para un proyecto escolar.",
            "good": "Respetas su elección, apoyando si surge algún conflicto en el proceso.",
            "bad": "Le impones con quién trabajar sin considerar su preferencia."
          },
          {
            "q": "Discrepan sobre cuánto tiempo de descanso debe tener entre actividades extracurriculares.",
            "good": "Revisan juntos el calendario y ajustan según su nivel de energía real.",
            "bad": "Mantienes el calendario cargado sin considerar signos de agotamiento."
          },
          {
            "q": "Tu hijo/a preadolescente quiere participar en la elección de un nuevo mueble para su cuarto.",
            "good": "Le das opciones concretas dentro de un presupuesto para que elija.",
            "bad": "Compras el mueble sin considerar su gusto o necesidad sensorial."
          },
          {
            "q": "Hay desacuerdo sobre qué tan tarde puede usar el celular antes de dormir.",
            "good": "Acuerdan un horario límite conversado que ambos puedan sostener.",
            "bad": "Impones el horario sin explicar el porqué ni escuchar su punto."
          },
          {
            "q": "Tu hijo/a adulto joven quiere una mascota propia en su espacio.",
            "good": "Conversan responsabilidades y condiciones antes de decidir juntos.",
            "bad": "Niegas la posibilidad sin abrir espacio a conversar condiciones."
          },
          {
            "q": "Discrepan sobre qué tanto maquillaje o accesorios puede usar tu hijo/a adolescente.",
            "good": "Acuerdan límites conversados que respeten su expresión personal.",
            "bad": "Prohíbes de plano sin escuchar lo que significa para él/ella."
          },
          {
            "q": "Tu hijo/a quiere elegir el destino de un viaje familiar pequeño.",
            "good": "Consideran su propuesta junto a las de otros miembros de la familia.",
            "bad": "Decides el destino sin considerar ninguna propuesta de tu hijo/a."
          },
          {
            "q": "Hay conflicto sobre qué tan seguido debe practicar un instrumento musical.",
            "good": "Acuerdan una frecuencia que sostenga su motivación sin agotarlo.",
            "bad": "Impones una práctica diaria estricta sin considerar su interés real."
          },
          {
            "q": "Tu hijo/a preadolescente quiere participar en la decisión de cambiar de pediatra.",
            "good": "Le explicas opciones y consideras su opinión antes de decidir.",
            "bad": "Cambias de pediatra sin informarle ni considerar su opinión."
          },
          {
            "q": "Discrepan sobre qué tan estricta debe ser la dieta familiar por salud.",
            "good": "Buscan un equilibrio que considere gustos y necesidades de salud reales.",
            "bad": "Impones una dieta estricta sin negociar ninguna flexibilidad."
          },
          {
            "q": "Tu hijo/a adolescente quiere definir sus propias normas de salida con amigos.",
            "good": "Conversan un marco de normas que ambos consideren razonable.",
            "bad": "Impones las normas sin escuchar su perspectiva sobre lo razonable."
          },
          {
            "q": "Hay desacuerdo sobre qué tanto ayudar económicamente a tu hijo/a adulto joven.",
            "good": "Conversan un acuerdo claro y temporal que ambos puedan sostener.",
            "bad": "Decides unilateralmente el apoyo económico sin conversarlo con él/ella."
          },
          {
            "q": "Tu hijo/a quiere elegir su propio estilo de celebración de un logro académico.",
            "good": "Le preguntas cómo le gustaría celebrarlo y lo organizan juntos.",
            "bad": "Organizas la celebración según lo que a ti te parece adecuado."
          },
          {
            "q": "Discrepan sobre qué tan seguido cambiar de actividad los fines de semana.",
            "good": "Acuerdan un balance entre rutina y variedad que funcione para ambos.",
            "bad": "Mantienes la misma rutina de fin de semana sin considerar su opinión."
          },
          {
            "q": "Tu hijo/a preadolescente quiere participar en la decisión sobre un cambio de habitación.",
            "good": "Conversan opciones y lo incluyes en la decisión final.",
            "bad": "Decides el cambio de habitación sin informarle hasta el último momento."
          },
          {
            "q": "Hay conflicto sobre qué tan tarde puede jugar videojuegos con amigos en línea.",
            "good": "Acuerdan un horario límite que considere descanso y vida social.",
            "bad": "Prohíbes el juego en línea sin explorar un punto intermedio."
          },
          {
            "q": "Tu hijo/a adolescente quiere participar en la organización de sus propias vacaciones.",
            "good": "Le das un rol activo en la planificación del viaje familiar.",
            "bad": "Planificas todo el viaje sin incluir ninguna de sus preferencias."
          },
          {
            "q": "Discrepan sobre qué tan seguido visitar el gimnasio o hacer deporte en familia.",
            "good": "Acuerdan una frecuencia que considere el interés real de tu hijo/a.",
            "bad": "Impones la actividad deportiva sin considerar si realmente le interesa."
          },
          {
            "q": "Tu hijo/a quiere elegir su propio estilo de estudio para la universidad.",
            "good": "Conversan opciones de carrera considerando sus intereses y fortalezas.",
            "bad": "Decides la carrera por él/ella sin considerar su propia motivación."
          },
          {
            "q": "Hay desacuerdo sobre qué tanto tiempo pasar en casa de amigos los fines de semana.",
            "good": "Negocian un límite de tiempo que considere convivencia familiar y social.",
            "bad": "Restringes las visitas sin conversar un acuerdo intermedio."
          },
          {
            "q": "Tu hijo/a preadolescente quiere definir sus propias reglas para compartir el cuarto con un hermano/a.",
            "good": "Facilitas que ambos negocien reglas de convivencia que les funcionen.",
            "bad": "Impones las reglas de convivencia sin involucrar a ninguno de los dos."
          },
          {
            "q": "Discrepan sobre qué tan seguido usar transporte propio en vez de que lo lleven.",
            "good": "Acuerdan un plan gradual de autonomía en el transporte según su edad.",
            "bad": "Mantienes el mismo nivel de dependencia sin conversar cambios posibles."
          },
          {
            "q": "Tu hijo/a adulto joven quiere definir sus propias normas de convivencia al volver a vivir en casa.",
            "good": "Conversan expectativas mutuas y llegan a acuerdos claros para ambos.",
            "bad": "Impones las mismas reglas de cuando era adolescente sin renegociar."
          },
          {
            "q": "Hay conflicto sobre qué tan seguido cambiar el menú familiar según preferencias de todos.",
            "good": "Rotan la elección del menú entre los miembros de la familia.",
            "bad": "Mantienes el mismo menú fijo sin considerar preferencias cambiantes."
          },
          {
            "q": "Tu hijo/a quiere participar en la decisión de qué actividad hacer en su cumpleaños.",
            "good": "Le preguntas sus preferencias y organizan la celebración juntos.",
            "bad": "Organizas el cumpleaños según lo que a ti te parece mejor."
          },
          {
            "q": "Discrepan sobre qué tan estricto debe ser el horario de tareas versus tiempo libre.",
            "good": "Acuerdan un balance que considere su necesidad real de descanso.",
            "bad": "Impones un horario rígido de tareas sin negociar tiempo libre."
          },
          {
            "q": "Tu hijo/a preadolescente quiere elegir su propio estilo para presentar un proyecto escolar.",
            "good": "Le das libertad dentro de los requisitos mínimos que pide el colegio.",
            "bad": "Le impones tu forma de hacerlo sin considerar su estilo propio."
          },
          {
            "q": "Hay desacuerdo sobre qué tan seguido participar en reuniones sociales obligatorias de la familia.",
            "good": "Negocian una frecuencia de participación que respete su límite social.",
            "bad": "Le exiges participar en todas sin considerar su nivel de agotamiento social."
          },
          {
            "q": "Tu hijo/a adolescente quiere definir sus propias normas sobre compartir contenido en redes sociales.",
            "good": "Conversan un acuerdo de privacidad y seguridad que ambos acepten.",
            "bad": "Prohíbes compartir contenido sin explicar ni negociar condiciones."
          },
          {
            "q": "Discrepan sobre qué tan seguido cambiar de rutina de ejercicio o movimiento diario.",
            "good": "Acuerdan variaciones que mantengan su interés sin perder la rutina.",
            "bad": "Mantienes la misma rutina exacta aunque note señales de aburrimiento."
          },
          {
            "q": "Tu hijo/a quiere elegir su propio ritmo para aprender una nueva habilidad (bicicleta, natación).",
            "good": "Respetan su ritmo de aprendizaje sin comparar con otros niños.",
            "bad": "Le exiges avanzar al ritmo que tú esperas, ignorando su proceso."
          },
          {
            "q": "Discrepan sobre qué tanto participar en un grupo de scouts u organización juvenil.",
            "good": "Conversan el nivel de involucramiento que le resulte cómodo a tu hijo/a.",
            "bad": "Lo inscribes en actividades grupales intensas sin consultarle antes."
          },
          {
            "q": "Tu hijo/a adulto joven quiere definir junto contigo un plan de visitas familiares tras independizarse.",
            "good": "Acuerdan una frecuencia de visitas que respete su nueva autonomía y el vínculo familiar.",
            "bad": "Esperas la misma frecuencia de antes sin conversar el cambio de etapa."
          },
          {
            "q": "Hay desacuerdo sobre qué tan formal debe ser la ropa para un evento escolar importante.",
            "good": "Buscan una prenda que cumpla el código de vestimenta y sea sensorialmente cómoda.",
            "bad": "Le impones la ropa más formal sin considerar su comodidad."
          }
        ]
      }
    ]
  },
  {
    "slug": "regulacion",
    "nombre": "Regulación y Co-regulación",
    "color": "#10b981",
    "icon": "<path d=\"M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z\"/>",
    "habilidades": [
      {
        "slug": "detectar-senales-tempranas",
        "nombre": "Detectar Señales Tempranas",
        "emoji": "📡",
        "descripcion": "Anticiparse antes de que llegue la sobrecarga o la crisis.",
        "situaciones": [
          {
            "q": "Tu hijo/a empieza a hablar más rápido y en tono más agudo.",
            "good": "Reconoces la señal temprana de activación y bajas la demanda del momento.",
            "bad": "Sigues exigiendo lo mismo sin notar el cambio de tono."
          },
          {
            "q": "Notas que tu hijo/a se mueve más de lo habitual en su silla.",
            "good": "Interpretas esto como una señal de incomodidad creciente y ofreces una pausa.",
            "bad": "Le dices que se quede quieto sin investigar la causa."
          },
          {
            "q": "Tu hijo/a empieza a repetir una frase o movimiento (stimming) más seguido.",
            "good": "Reconoces que está regulándose ante algo y reduces estímulos alrededor.",
            "bad": "Le pides que 'deje de hacer eso' sin considerar su función."
          },
          {
            "q": "Notas que se aleja del grupo en una reunión familiar.",
            "good": "Interpretas la retirada como señal temprana y le das espacio antes de que escale.",
            "bad": "Lo obligas a reintegrarse al grupo de inmediato."
          },
          {
            "q": "Tu hijo/a empieza a responder con monosílabos cortantes.",
            "good": "Reconoces el cambio como señal de saturación y bajas la exigencia verbal.",
            "bad": "Insistes en una conversación larga justo en ese momento."
          },
          {
            "q": "Notas que se tapa los oídos brevemente en un lugar ruidoso.",
            "good": "Tomas la señal como aviso temprano y buscas salir o bajar el estímulo.",
            "bad": "Esperas a que la situación empeore antes de actuar."
          },
          {
            "q": "Tu hijo/a empieza a caminar en círculos antes de una actividad.",
            "good": "Reconoces la ansiedad anticipatoria y ofreces información o pausa.",
            "bad": "Le dices que deje de dar vueltas sin indagar el motivo."
          },
          {
            "q": "Notas que su respiración se acelera durante una tarea difícil.",
            "good": "Interpretas el cambio fisiológico como aviso y propones un descanso.",
            "bad": "Presionas para que termine la tarea de inmediato."
          },
          {
            "q": "Tu hijo/a empieza a quejarse de cosas pequeñas seguidas.",
            "good": "Reconoces el patrón como señal de saturación acumulada, no como quejas aisladas.",
            "bad": "Respondes a cada queja por separado sin ver el patrón general."
          },
          {
            "q": "Notas que aprieta los puños antes de una posible crisis.",
            "good": "Tomas la señal corporal en serio y reduces la exigencia inmediata.",
            "bad": "Ignoras la señal física hasta que ya es una crisis abierta."
          },
          {
            "q": "Tu hijo/a se pone más rígido/a físicamente en una fila de espera.",
            "good": "Reconoces la tensión corporal como aviso y buscas acortar la espera.",
            "bad": "Le dices que se relaje sin cambiar la situación."
          },
          {
            "q": "Notas que evita el contacto visual más de lo usual hoy.",
            "good": "Interpretas esto como posible señal de agotamiento acumulado del día.",
            "bad": "Le exiges que te mire igual que siempre."
          },
          {
            "q": "Tu hijo/a empieza a hacer preguntas repetitivas sobre el plan del día.",
            "good": "Reconoces la necesidad de certeza como señal temprana de ansiedad.",
            "bad": "Te frustras por la repetición sin dar más información."
          },
          {
            "q": "Notas que su volumen de voz sube gradualmente sin motivo aparente.",
            "good": "Tomas el cambio de volumen como aviso y revisas el entorno inmediato.",
            "bad": "Le pides que baje la voz sin investigar la causa."
          },
          {
            "q": "Tu hijo/a se frota los ojos o la cara reiteradamente.",
            "good": "Reconoces posible cansancio sensorial y reduces estímulos visuales.",
            "bad": "Ignoras la señal y continúas con la actividad planeada."
          },
          {
            "q": "Notas que empieza a decir 'no' a todo de forma creciente.",
            "good": "Interpretas la negación en cadena como señal de saturación acumulada.",
            "bad": "Insistes en las mismas demandas pese a las negativas repetidas."
          },
          {
            "q": "Tu hijo/a se aleja físicamente un paso más de lo habitual al hablarte.",
            "good": "Reconoces la necesidad de espacio como señal temprana y la respetas.",
            "bad": "Te acercas más pensando que necesita más contacto."
          },
          {
            "q": "Notas que su expresión facial se vuelve más plana o ausente.",
            "good": "Interpretas esto como posible señal de desconexión protectora y bajas la exigencia.",
            "bad": "Le exiges 'reaccionar' o mostrar más emoción."
          },
          {
            "q": "Tu hijo/a empieza a golpear ligeramente objetos sin darse cuenta.",
            "good": "Reconoces la señal de tensión acumulada y ofreces una alternativa de descarga.",
            "bad": "Lo regañas por el ruido sin ver la señal detrás."
          },
          {
            "q": "Notas que tarda más de lo normal en responder preguntas simples.",
            "good": "Interpretas la lentitud como señal de sobrecarga cognitiva del momento.",
            "bad": "Repites la pregunta con más urgencia esperando rapidez."
          },
          {
            "q": "En una fiesta de cumpleaños, tu hijo/a de 4 años empieza a chuparse el dedo después de mucho rato jugando.",
            "good": "Reconoces la señal de cansancio acumulado y buscas un rincón tranquilo para una pausa.",
            "bad": "Le dices que ya es grande para chuparse el dedo y sigue en la fiesta."
          },
          {
            "q": "Notas que tu hijo/a empieza a tapar su hoja con el brazo durante la tarea.",
            "good": "Interpretas esto como señal de inseguridad o sobrecarga y te acercas con calma.",
            "bad": "Le exiges que 'muestre su trabajo' sin indagar qué le pasa."
          },
          {
            "q": "Tu hijo/a adolescente empieza a responder con 'da igual' a todo lo que le preguntas.",
            "good": "Reconoces el tono apagado como señal temprana de agotamiento emocional.",
            "bad": "Interpretas la respuesta como falta de respeto y lo confrontas."
          },
          {
            "q": "Antes de una entrevista de trabajo, tu hijo/a adulto empieza a revisar su reloj cada minuto.",
            "good": "Notas la ansiedad anticipatoria y le ofreces un espacio para respirar antes de salir.",
            "bad": "Le apuras diciendo que 'no hay tiempo para nervios'."
          },
          {
            "q": "En el autobús, tu hijo/a empieza a mirar fijamente un punto sin parpadear.",
            "good": "Reconoces la mirada fija como señal de desconexión protectora y bajas estímulos cercanos.",
            "bad": "Le agitas el brazo para que 'reaccione' de inmediato."
          },
          {
            "q": "Notas que tu hijo/a empieza a vestirse más lento de lo habitual una mañana de colegio.",
            "good": "Interpretas la lentitud como posible señal de ansiedad y le preguntas con calma cómo se siente.",
            "bad": "Le apuras verbalmente cada minuto sin indagar la causa."
          },
          {
            "q": "En una comida familiar, tu hijo/a empieza a jugar con la comida en vez de comerla.",
            "good": "Reconoces esto como posible señal de incomodidad sensorial o social y bajas la exigencia de 'comer todo'.",
            "bad": "Le exiges terminar el plato sin considerar la señal."
          },
          {
            "q": "En la sala de espera del médico, tu hijo/a empieza a balancear las piernas rápidamente.",
            "good": "Tomas el movimiento como señal de ansiedad creciente y buscas distraerlo con algo calmante.",
            "bad": "Le pides que 'se esté quieto' sin atender la ansiedad de fondo."
          },
          {
            "q": "En el supermercado, tu hijo/a empieza a caminar más cerca de ti de lo habitual.",
            "good": "Reconoces la búsqueda de cercanía como señal de sobrecarga del ambiente y acortas la compra.",
            "bad": "Le dices que 'te está pisando' sin notar la señal."
          },
          {
            "q": "En la playa, tu hijo/a empieza a sacudirse la arena de los pies repetidamente.",
            "good": "Interpretas la repetición como molestia sensorial creciente y ofreces limpiarlo o cambiar de lugar.",
            "bad": "Le dices que 'es solo arena' y que se aguante."
          },
          {
            "q": "Notas que tu hijo/a adolescente empieza a guardar su teléfono de forma brusca cuando entras al cuarto.",
            "good": "Reconoces un posible aumento de tensión y te acercas sin exigir explicaciones inmediatas.",
            "bad": "Le exiges que te muestre el teléfono de inmediato."
          },
          {
            "q": "A la hora de dormir, tu hijo/a pequeño empieza a pedir el mismo cuento varias veces seguidas.",
            "good": "Reconoces la repetición como búsqueda de previsibilidad ante el cansancio del día.",
            "bad": "Le dices que 'ya escuchó ese cuento' y te niegas a repetirlo."
          },
          {
            "q": "Durante la tarea, tu hijo/a empieza a borrar la misma palabra una y otra vez.",
            "good": "Reconoces la señal de frustración perfeccionista y ofreces una pausa antes de continuar.",
            "bad": "Le apuras a 'seguir escribiendo' sin parar."
          },
          {
            "q": "Notas que tu hijo/a adolescente deja de mirar el celular de golpe y se queda muy quieto/a.",
            "good": "Reconoces el cambio brusco como posible señal de algo perturbador y te acercas con calma.",
            "bad": "Le preguntas qué pasó de forma insistente y repetida."
          },
          {
            "q": "Mientras empacan para una mudanza, tu hijo/a adulto empieza a organizar y reorganizar la misma caja.",
            "good": "Reconoces la necesidad de control ante el cambio como señal de estrés anticipatorio.",
            "bad": "Le dices que 'está perdiendo el tiempo' con la caja."
          },
          {
            "q": "Notas que tu hijo/a se sienta más lejos de sus hermanos de lo usual en el sofá.",
            "good": "Interpretas la distancia como señal de necesidad de espacio y no lo cuestionas.",
            "bad": "Lo obligas a sentarse 'como familia' junto a todos."
          },
          {
            "q": "En la fila para entrar al colegio, tu hijo/a empieza a mirar hacia la salida repetidamente.",
            "good": "Reconoces la señal de querer escapar del estímulo y te acercas a acompañarlo/a.",
            "bad": "Le dices que 'se quede en su lugar' sin más."
          },
          {
            "q": "En el entrenamiento de fútbol, tu hijo/a empieza a quedarse atrás del grupo sin motivo aparente.",
            "good": "Reconoces el rezago como posible señal de agotamiento sensorial o social.",
            "bad": "Le gritas que 'se ponga las pilas' y siga al grupo."
          },
          {
            "q": "En una fiesta, notas que tu hijo/a adolescente empieza a revisar la salida más seguido.",
            "good": "Tomas la señal como aviso de saturación social y le ofreces una salida discreta si la necesita.",
            "bad": "Lo animas a 'quedarse y disfrutar' ignorando la señal."
          },
          {
            "q": "En el aeropuerto, tu hijo/a empieza a taparse los oídos ante el ruido de los anuncios.",
            "good": "Reconoces la señal sensorial temprana y buscas auriculares o un lugar más silencioso.",
            "bad": "Le dices que 'se aguante' porque no hay opción."
          },
          {
            "q": "En la sala de espera del dentista, tu hijo/a empieza a masticar el cuello de su camiseta.",
            "good": "Reconoces la conducta como señal de ansiedad anticipatoria y le ofreces algo para morder de forma segura.",
            "bad": "Le dices que 'deje de arruinar la ropa' sin ver la ansiedad."
          },
          {
            "q": "Con una maestra suplente, notas que tu hijo/a llega a casa más callado/a de lo normal.",
            "good": "Reconoces el silencio como posible señal de un día difícil y le das espacio antes de preguntar.",
            "bad": "Le exiges contar todo lo que pasó apenas entra por la puerta."
          },
          {
            "q": "Antes de un examen importante, tu hijo/a adolescente empieza a repetir en voz baja lo que va a decir.",
            "good": "Reconoces la autorregulación verbal como señal de ansiedad y ofreces apoyo silencioso.",
            "bad": "Le interrumpes preguntando si ya estudió lo suficiente."
          },
          {
            "q": "Notas que tu hijo/a empieza a subir el volumen de la pantalla más de lo habitual.",
            "good": "Interpretas esto como posible intento de bloquear estímulos externos molestos y revisas el ambiente.",
            "bad": "Le bajas el volumen a la fuerza sin investigar la causa."
          },
          {
            "q": "En la caja del supermercado, tu hijo/a pequeño empieza a jalar tu ropa repetidamente.",
            "good": "Reconoces la señal de necesidad de contacto y sobrecarga y te agachas a atenderlo/a.",
            "bad": "Le apartas la mano diciendo que 'estás ocupado/a'."
          },
          {
            "q": "Notas que tu hijo/a adolescente empieza a responder los mensajes del grupo de amigos más tarde de lo usual.",
            "good": "Reconoces el retraso como posible señal de agotamiento social y le preguntas cómo se siente sin presionar.",
            "bad": "Le dices que 'está siendo grosero/a' con sus amigos."
          },
          {
            "q": "En su primera semana de trabajo, notas que tu hijo/a adulto llega a casa y se va directo a su cuarto sin hablar.",
            "good": "Reconoces la necesidad de descompresión tras un ambiente nuevo y respetas el silencio inicial.",
            "bad": "Le exiges contar cómo le fue apenas cruza la puerta."
          },
          {
            "q": "Notas que tu hijo/a empieza a organizar la comida en el plato antes de comer, más de lo habitual.",
            "good": "Reconoces esto como posible señal de necesidad de control ante el estrés del día.",
            "bad": "Le dices que 'deje de jugar con la comida' sin más."
          },
          {
            "q": "Notas que tu hijo/a empieza a quedarse cerca de la puerta durante el recreo en vez de salir a jugar.",
            "good": "Reconoces la cercanía a la salida como señal de sobrecarga social acumulada.",
            "bad": "Lo empujas a 'ir a jugar con los demás' sin indagar."
          },
          {
            "q": "En un viaje largo en auto, tu hijo/a empieza a golpear rítmicamente el asiento con el pie.",
            "good": "Reconoces el movimiento repetitivo como autorregulación ante el encierro prolongado.",
            "bad": "Le pides que 'deje de hacer ruido' sin ofrecer alternativa."
          },
          {
            "q": "En el cumpleaños de un compañero, tu hijo/a se queda mirando el pastel sin acercarse al grupo.",
            "good": "Reconoces la distancia como señal de necesitar tiempo antes de integrarse.",
            "bad": "Lo empujas físicamente hacia el grupo de niños."
          },
          {
            "q": "Notas que tu hijo/a adolescente empieza a cerrar la puerta de su cuarto con más fuerza de lo normal.",
            "good": "Interpretas el gesto como señal de tensión acumulada y le das espacio antes de acercarte.",
            "bad": "Le reclamas por el portazo sin preguntar qué le pasa."
          },
          {
            "q": "Durante una videollamada escolar grupal, notas que tu hijo/a apaga la cámara de repente.",
            "good": "Reconoces la acción como posible señal de sobrecarga social virtual y respetas la decisión.",
            "bad": "Le exiges prender la cámara de inmediato 'porque es de mala educación'."
          },
          {
            "q": "Antes de una cita médica importante, tu hijo/a adulto empieza a llegar temprano y esperar en el auto.",
            "good": "Reconoces la necesidad de anticipar y controlar el entorno como señal de ansiedad manejable.",
            "bad": "Le insistes en entrar antes de que esté listo/a."
          },
          {
            "q": "En una cena de fin de año, notas que tu hijo/a empieza a alejarse hacia otra habitación.",
            "good": "Reconoces la señal de saturación festiva y validas su necesidad de un descanso.",
            "bad": "Lo llamas de vuelta a la mesa 'para no ser descortés'."
          },
          {
            "q": "Antes de una actuación escolar, tu hijo/a empieza a tocar repetidamente su disfraz.",
            "good": "Reconoces la conducta repetitiva como manejo de ansiedad anticipatoria.",
            "bad": "Le dices que 'deje de manosear' el disfraz."
          },
          {
            "q": "Cuando su hermano/a pequeño/a llora fuerte, notas que tu hijo/a se cubre los oídos y se aleja.",
            "good": "Reconoces la sensibilidad auditiva como señal legítima y le permites alejarse del ruido.",
            "bad": "Le dices que 'no sea exagerado/a' con el llanto del hermano."
          },
          {
            "q": "Al anunciar un examen sorpresa, notas que tu hijo/a se queda inmóvil mirando el pupitre.",
            "good": "Reconoces el congelamiento como señal de shock/ansiedad y buscas apoyo con el maestro/a.",
            "bad": "Esperas que 'reaccione rápido' como los demás compañeros."
          },
          {
            "q": "Un sábado sin plan claro, notas que tu hijo/a adolescente empieza a preguntar la hora repetidamente.",
            "good": "Reconoces la necesidad de estructura como señal temprana de incomodidad ante la incertidumbre.",
            "bad": "Le dices que 'deje de preguntar' y que improvise."
          },
          {
            "q": "Antes de una boda familiar, notas que tu hijo/a adulto empieza a planear rutas de escape del salón.",
            "good": "Reconoces esta planificación como estrategia de autorregulación válida y la apoyas.",
            "bad": "Le dices que 'está siendo dramático/a' por planear una salida."
          },
          {
            "q": "Al reorganizar su cuarto, notas que tu hijo/a empieza a tocar cada objeto antes de moverlo.",
            "good": "Reconoces la necesidad de familiarizarse con el cambio como señal temprana de ansiedad.",
            "bad": "Le apuras a que 'deje de tocar todo' y avance más rápido."
          },
          {
            "q": "En la clase de música, notas que tu hijo/a se tapa un oído mientras toca un instrumento.",
            "good": "Reconoces la molestia sensorial y hablas con el/la maestro/a sobre ajustes posibles.",
            "bad": "Le dices que 'debe aguantar' porque es parte de la clase."
          },
          {
            "q": "Notas que tu hijo/a adolescente empieza a escribir y borrar mensajes repetidamente en su chat.",
            "good": "Reconoces la indecisión repetida como señal de tensión social y ofreces escuchar si quiere.",
            "bad": "Le exiges leer sus mensajes para 'saber qué pasa'."
          },
          {
            "q": "Al llegar una mascota nueva a casa, notas que tu hijo/a se mantiene a distancia observando.",
            "good": "Reconoces la cautela como proceso normal de adaptación y no lo apuras a interactuar.",
            "bad": "Lo obligas a acariciar a la mascota de inmediato."
          },
          {
            "q": "Durante un simulacro de incendio, notas que tu hijo/a se cubre los oídos antes de que suene la alarma.",
            "good": "Reconoces la anticipación sensorial y coordinas con la escuela alternativas para simulacros.",
            "bad": "Le dices que 'no ha sonado nada todavía' restando validez a su anticipación."
          },
          {
            "q": "En una reunión familiar, notas que tu hijo/a adulto empieza a jugar con las llaves del auto en el bolsillo.",
            "good": "Reconoces el gesto repetitivo como señal de incomodidad y le ofreces una salida si la necesita.",
            "bad": "Le pides que 'se relaje' sin ofrecer ninguna salida real."
          },
          {
            "q": "Al cambiarle de pupitre en el aula, notas que tu hijo/a llega a casa más irritable de lo usual.",
            "good": "Reconoces la irritabilidad como posible señal del cambio no procesado y le preguntas con calma.",
            "bad": "Asumes que 'tuvo un mal día' sin más y no indagas."
          },
          {
            "q": "Notas que tu hijo/a tarda mucho más de lo normal antes de entrar a la ducha.",
            "good": "Reconoces la demora como posible señal sensorial y preguntas si algo del agua o temperatura le incomoda.",
            "bad": "Le apuras a 'entrar de una vez' sin preguntar nada."
          },
          {
            "q": "En el entrenamiento, notas que tu hijo/a adolescente empieza a ajustar su ropa repetidamente.",
            "good": "Reconoces el ajuste repetido como molestia sensorial con la tela y ofreces buscar otra prenda.",
            "bad": "Le dices que 'deje de estar tocando la ropa' frente al equipo."
          },
          {
            "q": "Notas que tu hijo/a empieza a subrayar la misma línea del libro varias veces.",
            "good": "Reconoces la repetición como señal de dificultad para concentrarse y ofreces un descanso.",
            "bad": "Le exiges que 'siga leyendo' sin parar."
          },
          {
            "q": "Al llegar a un hotel nuevo, notas que tu hijo/a revisa cada rincón de la habitación antes de relajarse.",
            "good": "Reconoces la exploración como necesidad de previsibilidad y le das tiempo para hacerlo.",
            "bad": "Le apuras a 'dejar de curiosear' y salir a cenar."
          },
          {
            "q": "Antes de una presentación oral, notas que tu hijo/a empieza a frotarse las manos repetidamente.",
            "good": "Reconoces el gesto como ansiedad anticipatoria y ofreces practicar juntos con calma.",
            "bad": "Le dices que 'no hay nada de qué preocuparse' sin validar la ansiedad."
          },
          {
            "q": "Durante una conversación familiar sobre un tema polémico, notas que tu hijo/a adolescente se queda muy callado/a.",
            "good": "Reconoces el silencio como posible señal de sobrecarga emocional del tema y cambias de tema con suavidad.",
            "bad": "Le exiges dar su opinión aunque esté visiblemente incómodo/a."
          },
          {
            "q": "Cuando llegan amigos de su hermano/a a casa, notas que tu hijo/a se refugia en su cuarto antes de que lleguen.",
            "good": "Reconoces la anticipación como estrategia protectora y la respetas sin forzar la socialización.",
            "bad": "Lo obligas a 'saludar primero' antes de que se retire."
          },
          {
            "q": "Antes de un trámite burocrático, notas que tu hijo/a adulto empieza a repasar los documentos una y otra vez.",
            "good": "Reconoces la revisión repetida como manejo de la incertidumbre y no lo apresuras.",
            "bad": "Le dices que 'ya está todo bien' y que deje de revisar."
          },
          {
            "q": "Al empezar un nuevo horario escolar, notas que tu hijo/a empieza a preguntar por la rutina antes de dormir.",
            "good": "Reconoces la necesidad de previsibilidad como señal temprana y repasas el horario juntos con calma.",
            "bad": "Le dices que 'ya lo sabe' y te niegas a repetirlo."
          },
          {
            "q": "Al escuchar una discusión entre adultos en casa, notas que tu hijo/a se queda muy quieto/a en su cuarto.",
            "good": "Reconoces la quietud como señal de alerta y te acercas después con calma para tranquilizarlo/a.",
            "bad": "Sigues la discusión sin notar el impacto en tu hijo/a."
          },
          {
            "q": "Al asignarle un nuevo compañero de banca, notas que tu hijo/a llega a casa comiendo menos de lo habitual.",
            "good": "Reconoces el cambio en el apetito como posible señal de estrés escolar y preguntas con calma.",
            "bad": "No conectas el cambio de apetito con la situación escolar."
          },
          {
            "q": "Antes de su primer día de trabajo de verano, notas que tu hijo/a adolescente prepara la ropa la noche anterior de forma obsesiva.",
            "good": "Reconoces la preparación excesiva como manejo de ansiedad anticipatoria y lo acompañas con calma.",
            "bad": "Le dices que 'está exagerando' por preparar todo con tanta anticipación."
          },
          {
            "q": "En un día lluvioso sin poder salir, notas que tu hijo/a empieza a caminar de un lado a otro de la sala.",
            "good": "Reconoces el movimiento como necesidad de descarga de energía acumulada.",
            "bad": "Le pides que 'se siente y esté tranquilo/a' sin ofrecer alternativa de movimiento."
          },
          {
            "q": "Antes de salir a un campamento, notas que tu hijo/a empieza a listar objetos que quiere llevar de forma repetitiva.",
            "good": "Reconoces la lista repetida como estrategia de control ante lo desconocido y la validas.",
            "bad": "Le dices que 'ya empacó suficiente' y que deje de agregar cosas."
          },
          {
            "q": "En la feria de ciencias, notas que tu hijo/a se aleja del stand con mucha gente alrededor.",
            "good": "Reconoces la retirada como señal de sobrecarga social y lo acompañas a un espacio más tranquilo.",
            "bad": "Lo regresas al stand insistiendo en que 'debe mostrar su proyecto'."
          },
          {
            "q": "Antes de mudarse a otra ciudad por trabajo, notas que tu hijo/a adulto empieza a visitar los mismos lugares de siempre repetidamente.",
            "good": "Reconoces esta necesidad de despedida gradual como parte de su proceso de adaptación.",
            "bad": "Le dices que 'está perdiendo tiempo' repitiendo lugares."
          },
          {
            "q": "Al recibir un regalo que no esperaba, notas que tu hijo/a se queda muy quieto/a sin reaccionar.",
            "good": "Reconoces la falta de reacción inmediata como posible sobrecarga de la sorpresa, no como ingratitud.",
            "bad": "Le exiges 'mostrar más alegría' de inmediato."
          },
          {
            "q": "Con el ruido de una construcción en la casa vecina, notas que tu hijo/a se pone los audífonos antes de que se lo pidas.",
            "good": "Reconoces la anticipación sensorial y refuerzas positivamente esa estrategia propia.",
            "bad": "Le dices que 'no hace tanto ruido' y le quitas los audífonos."
          },
          {
            "q": "Al cambiar el uniforme escolar por el de temporada, notas que tu hijo/a se queja de la tela nueva repetidamente.",
            "good": "Reconoces la queja repetida como señal sensorial real y buscas una alternativa de tela.",
            "bad": "Le dices que 'se acostumbrará' sin buscar alternativas."
          },
          {
            "q": "Tras una discusión con su mejor amigo/a, notas que tu hijo/a adolescente revisa el teléfono compulsivamente.",
            "good": "Reconoces la conducta como ansiedad por la incertidumbre social y ofreces acompañarlo/a sin presionar.",
            "bad": "Le quitas el teléfono diciendo que 'está obsesionado/a'."
          },
          {
            "q": "Antes de un chequeo médico de rutina, notas que tu hijo/a adulto pregunta varias veces qué exámenes le harán.",
            "good": "Reconoces la pregunta repetida como necesidad de información para regular la ansiedad.",
            "bad": "Le respondes con fastidio 'ya te dije' sin más detalle."
          },
          {
            "q": "Al presentar un platillo nuevo, notas que tu hijo/a huele la comida varias veces antes de decidir.",
            "good": "Reconoces el olfateo repetido como exploración sensorial necesaria y le das tiempo.",
            "bad": "Le apuras a 'comer de una vez' sin dejarlo explorar."
          },
          {
            "q": "Con un evento especial que rompe la rutina escolar, notas que tu hijo/a pregunta el horario del día repetidamente esa mañana.",
            "good": "Reconoces la pregunta repetida como necesidad de previsibilidad y le muestras un horario visual.",
            "bad": "Le dices que 'deje de preguntar lo mismo' sin ofrecer apoyo visual."
          },
          {
            "q": "Antes de una conversación sobre nuevas normas de la casa, notas que tu hijo/a adolescente empieza a cruzar los brazos y evitar tu mirada.",
            "good": "Reconoces el lenguaje corporal como señal defensiva temprana y ajustas tu tono antes de hablar.",
            "bad": "Ignoras la postura y empiezas la conversación con el mismo tono firme de siempre."
          },
          {
            "q": "Durante un juego de mesa familiar, notas que tu hijo/a empieza a reacomodar sus fichas repetidamente sin necesidad.",
            "good": "Reconoces el acomodo repetido como manejo de ansiedad ante la competencia y bajas la presión del juego.",
            "bad": "Le dices que 'deje de perder tiempo' con las fichas."
          },
          {
            "q": "En un barco o crucero, notas que tu hijo/a se aferra a la baranda más de lo necesario.",
            "good": "Reconoces esto como búsqueda de estabilidad sensorial ante el movimiento y lo acompañas con calma.",
            "bad": "Le dices que 'suelte la baranda' porque 'no hay peligro'."
          },
          {
            "q": "Cuando cambian el patio de recreo habitual por obras, notas que tu hijo/a llega a casa más callado/a esos días.",
            "good": "Reconoces el cambio de espacio como posible fuente de estrés y preguntas con calma cómo se sintió.",
            "bad": "No relacionas el silencio con el cambio de espacio escolar."
          },
          {
            "q": "Antes de una reunión de grupo de estudio en casa, notas que tu hijo/a ordena su cuarto de forma obsesiva.",
            "good": "Reconoces el orden excesivo como manejo de ansiedad ante la visita social y no lo interrumpes.",
            "bad": "Le dices que 'no es necesario tanto orden' y lo apuras a parar."
          },
          {
            "q": "En su primera semana viviendo solo/a, notas que tu hijo/a adulto te llama a horas inusuales solo para hablar de temas triviales.",
            "good": "Reconoces las llamadas frecuentes como señal de ajuste emocional al cambio y respondes con calma.",
            "bad": "Le dices que 'deje de llamar tanto' sin considerar la transición que vive."
          },
          {
            "q": "Cuando llegan visitas sin avisar, notas que tu hijo/a se pone los zapatos como si fuera a salir.",
            "good": "Reconoces la conducta como estrategia de escape ante lo inesperado y le ofreces esa opción real.",
            "bad": "Le dices que 'se quede y salude' sin ofrecerle una salida."
          },
          {
            "q": "El día de entrega de boletín, notas que tu hijo/a evita hablar del tema desde la mañana.",
            "good": "Reconoces la evitación como señal de ansiedad anticipatoria y esperas el momento adecuado para hablarlo.",
            "bad": "Le exiges hablar del boletín antes de que esté listo/a."
          },
          {
            "q": "Después de cambiar su corte de pelo, notas que tu hijo/a adolescente evita los espejos de la casa.",
            "good": "Reconoces la evitación como señal de inseguridad temporal y evitas hacer comentarios directos sobre el cambio.",
            "bad": "Le insistes en 'mirar cómo le quedó' aunque lo evite."
          },
          {
            "q": "Cerca del aniversario de un evento familiar difícil, notas que tu hijo/a adulto empieza a dormir peor esa semana.",
            "good": "Reconoces el patrón de sueño alterado como señal emocional ligada a la fecha y ofreces mayor disponibilidad esos días.",
            "bad": "No conectas el cambio de sueño con la fecha y lo atribuyes a otra cosa."
          }
        ]
      },
      {
        "slug": "co-regular-antes-de-corregir",
        "nombre": "Co-regular Antes de Corregir",
        "emoji": "🌊",
        "descripcion": "Bajar el nivel de activación conjunta antes de abordar la conducta.",
        "situaciones": [
          {
            "q": "Tu hijo/a grita después de que algo no salió como esperaba.",
            "good": "Bajas tu propio tono, te acercas con calma y esperas que se regule antes de hablar de lo ocurrido.",
            "bad": "Le exiges una explicación inmediata mientras sigue alterado/a."
          },
          {
            "q": "Tu hijo/a tira un objeto con frustración.",
            "good": "Te mantienes calmado/a físicamente cerca, sin sermonear en el momento de mayor activación.",
            "bad": "Lo regañas fuerte de inmediato, sumando más activación."
          },
          {
            "q": "Ambos están alterados tras una discusión.",
            "good": "Te tomas un momento para bajar tu propia activación antes de continuar la conversación.",
            "bad": "Sigues discutiendo mientras ambos están activados."
          },
          {
            "q": "Tu hijo/a llora fuerte tras un cambio de planes.",
            "good": "Te sientas cerca en silencio, ofreciendo presencia calmada antes de explicar nada.",
            "bad": "Le explicas la lógica del cambio mientras aún llora fuerte."
          },
          {
            "q": "Tu hijo/a se pone rígido/a y no responde a lo que le dices.",
            "good": "Bajas la voz, reduces las palabras y esperas con paciencia su regulación.",
            "bad": "Repites la pregunta cada vez más alto esperando respuesta."
          },
          {
            "q": "Hay un grito en medio de una tienda por algo que quería y no obtuvo.",
            "good": "Te agachas a su altura, bajas el tono y esperas que se calme antes de hablar de la regla.",
            "bad": "Lo regañas en público exigiendo que se calme ya."
          },
          {
            "q": "Tu hijo/a empieza a respirar agitado/a tras un conflicto con un hermano/a.",
            "good": "Modelas respiración calmada cerca de él/ella sin exigir que la copie de inmediato.",
            "bad": "Le dices 'respira' de forma brusca y sigues discutiendo el conflicto."
          },
          {
            "q": "Tu hijo/a se enoja contigo por poner un límite.",
            "good": "Mantienes tu calma corporal mientras sostienes el límite sin escalar el tono.",
            "bad": "Subes la voz para igualar su intensidad emocional."
          },
          {
            "q": "Notas que ambos están al borde de una discusión acalorada.",
            "good": "Propones una pausa breve para ambos antes de seguir hablando del tema.",
            "bad": "Insistes en resolverlo todo de inmediato mientras crece la tensión."
          },
          {
            "q": "Tu hijo/a llora por una frustración escolar al llegar a casa.",
            "good": "Te sientas con él/ella en silencio antes de preguntar detalles.",
            "bad": "Le pides que 'deje de llorar' para poder hablar con calma."
          },
          {
            "q": "Tu hijo/a se pone a gritar en medio de una tarea difícil.",
            "good": "Bajas tu propio volumen para no sumar activación al ambiente.",
            "bad": "Le gritas para que 'se calme' con el mismo tono elevado."
          },
          {
            "q": "Un cambio inesperado provoca llanto intenso en tu hijo/a.",
            "good": "Ofreces contacto físico calmado si lo acepta, sin exigir explicación inmediata.",
            "bad": "Le exiges que 'actúe con madurez' en medio del llanto."
          },
          {
            "q": "Tu hijo/a golpea la mesa con frustración durante la tarea.",
            "good": "Te acercas con calma, bajas la exigencia de la tarea temporalmente.",
            "bad": "Le exiges que continúe la tarea 'sin hacer drama'."
          },
          {
            "q": "Ambos llegan alterados de un día difícil y chocan por algo pequeño.",
            "good": "Reconoces tu propio estado y te regulas antes de responder a su conducta.",
            "bad": "Reaccionas desde tu propio cansancio, escalando la situación."
          },
          {
            "q": "Tu hijo/a se cierra y no quiere hablar tras un conflicto.",
            "good": "Respetas el silencio, ofreciendo tu presencia disponible sin presionar.",
            "bad": "Insistes en que hable de inmediato para 'resolverlo ya'."
          },
          {
            "q": "Tu hijo/a llora al perder en un juego familiar.",
            "good": "Te quedas cerca en calma, permitiendo la emoción antes de hablar de deportividad.",
            "bad": "Le das un sermón sobre perder mientras aún llora."
          },
          {
            "q": "Notas que tu propio tono ya subió durante una discusión con tu hijo/a.",
            "good": "Te detienes, respiras y bajas tu propio tono conscientemente.",
            "bad": "Sigues subiendo el tono porque 'él/ella empezó'."
          },
          {
            "q": "Tu hijo/a se frustra armando algo y quiere tirarlo todo.",
            "good": "Te acercas con calma y ofreces ayuda sin tomar el control inmediato.",
            "bad": "Le quitas el objeto de las manos bruscamente."
          },
          {
            "q": "Tu hijo/a llora por una decepción social con amigos.",
            "good": "Te sientas con la emoción junto a él/ella antes de dar consejos.",
            "bad": "Le das consejos de inmediato sin validar primero la emoción."
          },
          {
            "q": "Hay un momento de tensión antes de salir de casa y ambos están apurados.",
            "good": "Reconoces la prisa compartida y bajas el ritmo un momento antes de seguir.",
            "bad": "Aumentas la presión de tiempo, subiendo la tensión de ambos."
          },
          {
            "q": "Tu hijo/a pequeño se tira al piso llorando porque no quiere bañarse.",
            "good": "Te sientas a su lado en el piso, bajas tu voz y esperas que la ola de llanto baje antes de hablar del baño.",
            "bad": "Lo levantas a la fuerza mientras le explicas por qué debe bañarse."
          },
          {
            "q": "Tu hijo/a adolescente azota la puerta después de una mala nota.",
            "good": "Le das un momento, luego tocas suavemente y ofreces tu presencia sin exigir hablar de la nota.",
            "bad": "Entras de inmediato exigiendo que explique la nota."
          },
          {
            "q": "En medio de un berrinche en el parque, tu hijo/a grita que 'todos son malos'.",
            "good": "Te agachas a su altura, mantienes tu tono bajo y esperas sin corregir la frase mientras está activado/a.",
            "bad": "Le corriges la frase de inmediato diciendo que 'eso no es cierto'."
          },
          {
            "q": "Tu hijo/a adulto joven llega furioso/a tras un problema en el trabajo.",
            "good": "Le ofreces escuchar sin dar consejos ni juzgar la reacción, solo acompañar la descarga inicial.",
            "bad": "Le das consejos de inmediato sobre cómo debió manejar la situación laboral."
          },
          {
            "q": "Durante una tarea escolar, tu hijo/a rompe la hoja con frustración.",
            "good": "Te acercas en silencio, sin comentar la hoja rota, hasta que su respiración se calme.",
            "bad": "Le reclamas por 'desperdiciar papel' en medio de su frustración."
          },
          {
            "q": "Tu hijo/a llora al despedirse de un amigo que se muda.",
            "good": "Te quedas con la tristeza junto a él/ella, sin apurar el proceso ni minimizar la pérdida.",
            "bad": "Le dices que 'hará nuevos amigos' mientras aún está llorando."
          },
          {
            "q": "Tu hijo/a grita 'te odio' en medio de una discusión.",
            "good": "Mantienes tu calma corporal, no tomas la frase de forma personal y esperas que baje la intensidad.",
            "bad": "Respondes con la misma intensidad emocional, discutiendo la frase de inmediato."
          },
          {
            "q": "Un hermano rompe un juguete de tu hijo/a y este/a empieza a gritar sin parar.",
            "good": "Te pones a su altura, validas la molestia con calma antes de mediar el conflicto entre hermanos.",
            "bad": "Exiges que 'se calme ya' para poder resolver el conflicto entre hermanos."
          },
          {
            "q": "Tu hijo/a se pone a llorar durante una llamada con un familiar por videollamada.",
            "good": "Pausas la llamada brevemente y te quedas con él/ella hasta que se calme antes de continuar.",
            "bad": "Sigues la llamada pidiéndole que 'sonría para la cámara'."
          },
          {
            "q": "Tu hijo/a adolescente llora tras terminar una relación de pareja.",
            "good": "Te sientas cerca sin hablar del tema hasta que esté listo/a para compartir.",
            "bad": "Le dices de inmediato que 'hay más peces en el mar' mientras llora."
          },
          {
            "q": "Tu hijo/a grita de frustración al no poder armar un rompecabezas.",
            "good": "Bajas tu voz, te sientas cerca sin tocar las piezas, esperando que se calme antes de ofrecer ayuda.",
            "bad": "Le quitas las piezas diciendo que 'así no se hace'."
          },
          {
            "q": "En una fila del supermercado, tu hijo/a empieza a llorar fuerte por cansancio.",
            "good": "Te agachas, hablas bajo y te quedas presente sin exigir que 'se comporte' en público.",
            "bad": "Le susurras con enojo que 'está avergonzando a la familia'."
          },
          {
            "q": "Tu hijo/a adulto joven llega llorando tras una decepción amorosa.",
            "good": "Le ofreces estar disponible en silencio, sin analizar la situación de inmediato.",
            "bad": "Empiezas a analizar 'qué hizo mal' en la relación mientras aún llora."
          },
          {
            "q": "Durante una tarea de matemáticas, tu hijo/a lanza el lápiz con frustración.",
            "good": "Recoges el lápiz en silencio y esperas que su respiración se normalice antes de continuar.",
            "bad": "Le exiges recoger el lápiz de inmediato y seguir con la tarea."
          },
          {
            "q": "Tu hijo/a grita al perder el control remoto de un juego con amigos.",
            "good": "Te acercas con calma, sin corregir su reacción frente a sus amigos, y esperas que se regule.",
            "bad": "Lo regañas delante de sus amigos por 'ser mal perdedor'."
          },
          {
            "q": "Tu hijo/a adolescente golpea la almohada tras una pelea con un amigo.",
            "good": "Te quedas cerca sin comentar el golpe, ofreciendo tu presencia calmada.",
            "bad": "Le dices que 'así no se resuelven los problemas' en medio del golpe."
          },
          {
            "q": "Tu hijo/a llora al no poder ir a una fiesta por estar enfermo/a.",
            "good": "Validas la decepción con calma, sin minimizarla ni apurar que 'lo supere'.",
            "bad": "Le dices que 'no es para tanto' mientras llora por la fiesta perdida."
          },
          {
            "q": "Tu hijo/a grita frustrado/a durante una clase de música en casa.",
            "good": "Bajas el volumen de tu propia voz y esperas antes de retomar la práctica musical.",
            "bad": "Subes la voz para 'motivarlo' a seguir practicando de inmediato."
          },
          {
            "q": "Tu hijo/a se enoja y avienta los cubiertos en la mesa.",
            "good": "Te mantienes en calma, retiras los cubiertos con suavidad sin sermonear en el momento.",
            "bad": "Lo regañas fuerte por el gesto en plena mesa familiar."
          },
          {
            "q": "Tu hijo/a llora al ver que su mascota está enferma.",
            "good": "Te sientas con la tristeza junto a él/ella antes de hablar de soluciones o el veterinario.",
            "bad": "Le explicas de inmediato el plan médico mientras aún está llorando."
          },
          {
            "q": "Tu hijo/a adulto joven se frustra armando un mueble nuevo.",
            "good": "Le preguntas con calma si quiere ayuda, sin insistir ni tomar el control de inmediato.",
            "bad": "Le quitas las herramientas diciendo 'yo lo hago mejor' en medio de su frustración."
          },
          {
            "q": "Tu hijo/a grita en el auto por quedar atrapado en el tráfico.",
            "good": "Bajas tu propio tono de voz y ofreces algo calmante (música suave, silencio) sin exigir que se calme ya.",
            "bad": "Le dices 'ya basta' con tono elevado mientras conduces."
          },
          {
            "q": "Tu hijo/a llora tras no ser elegido/a para un equipo deportivo.",
            "good": "Te quedas con la decepción presente, sin minimizarla ni pasar rápido a la solución.",
            "bad": "Le dices de inmediato que 'lo logrará el próximo año' sin validar el dolor actual."
          },
          {
            "q": "Tu hijo/a se pone a gritar durante una tormenta eléctrica.",
            "good": "Te acercas físicamente, bajas tu voz y ofreces contención sin explicar la ciencia del rayo en ese momento.",
            "bad": "Le explicas por qué no hay peligro mientras sigue gritando de miedo."
          },
          {
            "q": "Tu hijo/a adolescente llora tras ser excluido/a de un grupo de chat.",
            "good": "Validas el dolor social sin minimizarlo, esperando que esté listo/a para hablar más.",
            "bad": "Le dices que 'son cosas de adolescentes' restando importancia al dolor."
          },
          {
            "q": "Tu hijo/a grita de frustración al perder en un videojuego.",
            "good": "Te sientas cerca sin comentar el resultado del juego, esperando que baje la intensidad.",
            "bad": "Le apagas la consola de inmediato diciendo que 'así no se juega'."
          },
          {
            "q": "Tu hijo/a llora al enterarse de que se cancela un paseo.",
            "good": "Validas la decepción con calma antes de explicar el motivo del cambio.",
            "bad": "Explicas el motivo del cambio de inmediato sin validar primero la tristeza."
          },
          {
            "q": "Tu hijo/a adulto joven se enoja tras un desacuerdo con su pareja.",
            "good": "Le ofreces escuchar sin opinar sobre la pareja mientras aún está alterado/a.",
            "bad": "Das tu opinión sobre la pareja de inmediato, sumando más tensión."
          },
          {
            "q": "Tu hijo/a llora fuerte al despertar de una pesadilla.",
            "good": "Te quedas a su lado en silencio, ofreciendo contacto físico calmante antes de preguntar detalles.",
            "bad": "Le preguntas de inmediato qué soñó, exigiendo que hable pese al susto."
          },
          {
            "q": "Tu hijo/a se frustra y llora al no poder atarse los cordones.",
            "good": "Te sientas cerca en calma, esperando que la frustración baje antes de ofrecer ayuda.",
            "bad": "Le atas los cordones bruscamente sin dejarlo/a intentarlo de nuevo."
          },
          {
            "q": "Tu hijo/a grita tras un desacuerdo con un primo/a en una reunión familiar.",
            "good": "Bajas tu tono y te acercas a ambos con calma antes de mediar el conflicto.",
            "bad": "Regañas a los dos en voz alta frente a toda la familia."
          },
          {
            "q": "Tu hijo/a adolescente llora al ser corregido/a públicamente por un profesor.",
            "good": "Le das espacio para procesar la vergüenza antes de hablar de lo sucedido en clase.",
            "bad": "Le preguntas de inmediato 'qué hiciste' apenas te enteras."
          },
          {
            "q": "Tu hijo/a golpea el suelo con los pies con frustración durante una espera larga.",
            "good": "Te agachas a su nivel, bajas tu voz y esperas antes de pedirle que se detenga.",
            "bad": "Le exiges que 'deje de patalear' con tono elevado."
          },
          {
            "q": "Tu hijo/a llora tras un examen que sintió que le fue mal.",
            "good": "Te sientas con la angustia junto a él/ella antes de hablar de estrategias de estudio.",
            "bad": "Le das consejos de estudio de inmediato mientras aún está angustiado/a."
          },
          {
            "q": "Tu hijo/a adulto joven llega alterado/a tras un problema con el auto.",
            "good": "Le ofreces presencia calmada, dejando que descargue la frustración antes de resolver el problema.",
            "bad": "Empiezas a resolver el problema del auto de inmediato sin atender su estado emocional."
          },
          {
            "q": "Tu hijo/a grita al no encontrar su juguete favorito.",
            "good": "Bajas tu voz, acompañas la búsqueda con calma sin apurar el momento.",
            "bad": "Le dices que 'deje de gritar' mientras buscas el juguete con prisa."
          },
          {
            "q": "Tu hijo/a llora al ver que perdió una competencia deportiva.",
            "good": "Te quedas con la tristeza cerca de él/ella antes de hablar de lo aprendido en la competencia.",
            "bad": "Le das un análisis de lo que hizo mal mientras aún está llorando."
          },
          {
            "q": "Tu hijo/a se enoja al ser interrumpido mientras juega, y grita fuerte.",
            "good": "Bajas tu tono, reconoces la interrupción como causa y esperas que se calme antes de explicar.",
            "bad": "Le dices que 'no es para tanto' con tono impaciente."
          },
          {
            "q": "Tu hijo/a adolescente llora tras un comentario hiriente de un compañero.",
            "good": "Validas el dolor sin minimizarlo, esperando que quiera compartir más detalles.",
            "bad": "Le dices que 'no le dé importancia' a lo que dijo el compañero."
          },
          {
            "q": "Tu hijo/a grita frustrado/a porque no entiende una instrucción de un juego de mesa.",
            "good": "Bajas la voz, simplificas la instrucción con calma, sin corregir su reacción.",
            "bad": "Le repites la misma instrucción más fuerte y más rápido."
          },
          {
            "q": "Tu hijo/a llora al ver una película triste.",
            "good": "Te quedas con la emoción cerca de él/ella, sin apagar la película de inmediato ni minimizar el llanto.",
            "bad": "Le dices que 'es solo una película' mientras llora."
          },
          {
            "q": "Tu hijo/a adulto joven se frustra intentando aprender a manejar.",
            "good": "Mantienes tu propio tono calmado al volante, sin corregir cada error mientras está tenso/a.",
            "bad": "Corriges cada error de manejo con tono impaciente, aumentando su tensión."
          },
          {
            "q": "Tu hijo/a llora al equivocarse en una presentación escolar frente a la clase.",
            "good": "Le das espacio para procesar la vergüenza antes de hablar de la presentación.",
            "bad": "Le explicas de inmediato qué hizo mal en la presentación."
          },
          {
            "q": "Tu hijo/a se enoja porque su comida favorita no está disponible en el restaurante.",
            "good": "Bajas tu tono, validas la decepción antes de ofrecer alternativas del menú.",
            "bad": "Le dices que 'no sea difícil' y elige por él/ella de inmediato."
          },
          {
            "q": "Tu hijo/a llora tras un pinchazo de vacuna.",
            "good": "Te quedas cerca ofreciendo contención física, sin apurar que 'ya pasó' de inmediato.",
            "bad": "Le dices que 'ya fue, no es nada' apenas empieza a llorar."
          },
          {
            "q": "Tu hijo/a adolescente grita tras perder el acceso a su celular por una regla incumplida.",
            "good": "Mantienes tu calma sosteniendo el límite, sin escalar el tono ante su enojo.",
            "bad": "Subes la voz para igualar su reacción ante la consecuencia."
          },
          {
            "q": "Tu hijo/a llora al no poder resolver un cubo de Rubik después de intentarlo mucho.",
            "good": "Te sientas cerca en silencio, validando el esfuerzo antes de ofrecer alguna pista.",
            "bad": "Le resuelves el cubo tú mismo/a diciendo que 'así se hace'."
          },
          {
            "q": "Tu hijo/a se frustra y grita durante una clase de natación.",
            "good": "Hablas con el instructor para dar espacio de calma antes de retomar el ejercicio.",
            "bad": "Le exiges continuar el ejercicio de inmediato pese al grito."
          },
          {
            "q": "Tu hijo/a llora al recibir una crítica de un familiar sobre su comportamiento.",
            "good": "Te acercas en calma, validando el dolor antes de hablar del comentario del familiar.",
            "bad": "Defiendes al familiar de inmediato sin atender la emoción de tu hijo/a."
          },
          {
            "q": "Tu hijo/a adulto joven llega enojado/a tras un conflicto con un compañero de piso.",
            "good": "Escuchas su frustración sin tomar partido de inmediato ni dar soluciones apresuradas.",
            "bad": "Le dices de inmediato qué debería haber hecho diferente con su compañero."
          },
          {
            "q": "Tu hijo/a llora porque se le cayó su helado en la calle.",
            "good": "Validas la tristeza real del momento, sin decir que 'es solo un helado'.",
            "bad": "Le dices que 'no es para tanto' y sigues caminando de inmediato."
          },
          {
            "q": "Tu hijo/a se enoja al no poder terminar un dibujo como quería.",
            "good": "Te sientas cerca en silencio, sin corregir el dibujo mientras está frustrado/a.",
            "bad": "Le arreglas el dibujo tú mismo/a sin que lo pida."
          },
          {
            "q": "Tu hijo/a adolescente grita tras enterarse de que canceló un plan con amigos por lluvia.",
            "good": "Validas la frustración por el plan perdido antes de ofrecer alternativas.",
            "bad": "Le dices que 'ya lo hará otro día' sin validar la frustración presente."
          },
          {
            "q": "Tu hijo/a llora al ver que un compañero se burló de su trabajo escolar.",
            "good": "Te quedas con el dolor emocional antes de hablar de qué hacer con la situación en el colegio.",
            "bad": "Llamas al colegio de inmediato sin antes acompañar la emoción de tu hijo/a."
          },
          {
            "q": "Tu hijo/a grita porque no logra abrir un frasco.",
            "good": "Te acercas con calma ofreciendo ayuda sin quitarle el frasco de las manos bruscamente.",
            "bad": "Le arrebatas el frasco diciendo 'dámelo, yo lo hago'."
          },
          {
            "q": "Tu hijo/a adulto joven llora tras recibir una noticia médica preocupante de un amigo.",
            "good": "Te quedas presente escuchando sin minimizar ni dar soluciones inmediatas.",
            "bad": "Cambias rápido de tema para 'no ponerse triste'."
          },
          {
            "q": "Tu hijo/a se frustra y grita durante el armado de una manualidad escolar.",
            "good": "Bajas tu voz y ofreces simplificar un paso sin tomar el control total.",
            "bad": "Terminas la manualidad tú mismo/a para 'que quede bien'."
          },
          {
            "q": "Tu hijo/a llora al perder su lugar favorito en la mesa por un cambio de asientos.",
            "good": "Validas la molestia por el cambio antes de explicar el motivo del nuevo orden.",
            "bad": "Le dices que 'no importa dónde se siente' sin validar su malestar."
          },
          {
            "q": "Tu hijo/a grita tras no poder resolver un problema de matemáticas en clase online.",
            "good": "Bajas tu tono y ofreces una pausa antes de retomar el problema juntos.",
            "bad": "Le explicas el problema con impaciencia mientras sigue frustrado/a."
          },
          {
            "q": "Tu hijo/a llora tras una llamada telefónica difícil con un abuelo/a enfermo/a.",
            "good": "Te quedas con la tristeza cerca de él/ella sin apurar que hable de lo que sintió.",
            "bad": "Le preguntas de inmediato detalles de la llamada mientras aún está llorando."
          },
          {
            "q": "Tu hijo/a adolescente grita al descubrir que un amigo compartió algo privado suyo.",
            "good": "Validas la traición sentida antes de pensar juntos en qué hacer al respecto.",
            "bad": "Minimizas diciendo que 'no es tan grave' lo que compartió el amigo."
          },
          {
            "q": "Tu hijo/a se enoja y grita al perder en un juego de cartas familiar.",
            "good": "Mantienes tu calma, sin sermonear sobre 'saber perder' en el momento del enojo.",
            "bad": "Le das un sermón sobre deportividad mientras aún está enojado/a."
          },
          {
            "q": "Tu hijo/a llora al notar que olvidó su tarea en casa el día de la entrega.",
            "good": "Te quedas con su angustia antes de pensar juntos en una solución con el colegio.",
            "bad": "Le reclamas de inmediato por 'descuidado/a' sumando más angustia."
          },
          {
            "q": "Tu hijo/a adulto joven se frustra al no conseguir empleo tras varias entrevistas.",
            "good": "Escuchas su desánimo sin ofrecer soluciones apresuradas ni comparaciones con otros.",
            "bad": "Le comparas con otros que 'ya encontraron trabajo' en medio de su desánimo."
          },
          {
            "q": "Tu hijo/a grita frustrado/a porque el wifi se cae durante un videojuego con amigos.",
            "good": "Bajas tu tono y ofreces ayudar con calma sin minimizar la frustración tecnológica.",
            "bad": "Le dices que 'son solo videojuegos' restando importancia a su frustración."
          },
          {
            "q": "Tu hijo/a llora al ver que llovió el día de su paseo escolar.",
            "good": "Validas la decepción real antes de buscar una actividad alternativa.",
            "bad": "Le dices de inmediato 'ya habrá otro paseo' sin validar la tristeza actual."
          },
          {
            "q": "Tu hijo/a se frustra y grita durante el armado de una pista de carreras de juguete.",
            "good": "Te sientas cerca ofreciendo ayuda solo si la pide, manteniendo la calma.",
            "bad": "Armas la pista tú mismo/a diciendo que 'así se hace más rápido'."
          },
          {
            "q": "Tu hijo/a llora tras enterarse de que un familiar no podrá visitar como esperaba.",
            "good": "Te quedas con la decepción antes de explicar los motivos del cambio de planes.",
            "bad": "Explicas los motivos de inmediato sin validar primero la tristeza."
          },
          {
            "q": "Tu hijo/a adolescente grita al sentir que no fue escuchado/a en una discusión familiar.",
            "good": "Bajas tu tono, reconoces que quiere ser escuchado/a y esperas antes de responder.",
            "bad": "Sigues hablando por encima de sus gritos para 'terminar de explicar'."
          },
          {
            "q": "Tu hijo/a llora al ver que se rompió un dibujo que había hecho con esfuerzo.",
            "good": "Te quedas con la tristeza real del momento, sin decir que 'se puede hacer otro' de inmediato.",
            "bad": "Le dices que 'no es nada, haz otro' apenas ves el dibujo roto."
          },
          {
            "q": "Tu hijo/a se enoja al perder una partida de ajedrez contra ti.",
            "good": "Mantienes tu calma sin explicar la jugada ganadora mientras sigue enojado/a.",
            "bad": "Le explicas de inmediato en qué se equivocó, aumentando su frustración."
          },
          {
            "q": "Tu hijo/a adulto joven llora tras un desacuerdo fuerte contigo por un tema económico.",
            "good": "Bajas tu propio tono y esperas que ambos se calmen antes de seguir hablando del tema.",
            "bad": "Insistes en resolver el tema económico de inmediato mientras ambos están alterados."
          },
          {
            "q": "Tu hijo/a grita frustrado/a al no poder abrir la mochila con el cierre atascado.",
            "good": "Te acercas con calma ofreciendo ayudar, sin quitarle la mochila de las manos bruscamente.",
            "bad": "Le arrebatas la mochila diciendo 'dámela, la abro yo'."
          },
          {
            "q": "Tu hijo/a llora al ver que su equipo deportivo favorito perdió un partido importante.",
            "good": "Te quedas con la tristeza deportiva junto a él/ella sin minimizarla.",
            "bad": "Le dices que 'es solo un juego' mientras aún está llorando."
          },
          {
            "q": "Tu hijo/a se enoja porque le tocó el asiento de en medio en un viaje familiar largo.",
            "good": "Validas la incomodidad antes de buscar una solución de turnos para los asientos.",
            "bad": "Le dices que 'deje de quejarse' y que se aguante todo el viaje."
          },
          {
            "q": "Tu hijo/a adolescente grita al enterarse de que canceló su publicación en redes por privacidad.",
            "good": "Bajas tu tono, escuchas su frustración antes de explicar el motivo de la decisión.",
            "bad": "Explicas el motivo de inmediato sin dar espacio a su enojo primero."
          },
          {
            "q": "Tu hijo/a llora al no poder terminar un rompecabezas antes de la hora de dormir.",
            "good": "Validas la frustración por dejarlo inconcluso, ofreciendo continuar al día siguiente con calma.",
            "bad": "Le dices que 'ya es tarde, se acabó' sin validar su frustración."
          },
          {
            "q": "Tu hijo/a se frustra y grita durante un ensayo de baile para un evento escolar.",
            "good": "Bajas tu tono, ofreces un descanso breve antes de retomar el ensayo.",
            "bad": "Le exiges repetir el paso de baile de inmediato pese a la frustración."
          },
          {
            "q": "Tu hijo/a adulto joven llora tras recibir una crítica dura de un jefe/a en el trabajo.",
            "good": "Escuchas su dolor sin analizar de inmediato si la crítica fue justa o no.",
            "bad": "Le das tu opinión sobre si la crítica del jefe fue merecida mientras aún llora."
          },
          {
            "q": "Tu hijo/a grita al ver que se acabó su programa favorito justo antes del final.",
            "good": "Validas la frustración por el corte inesperado antes de buscar cómo ver el final después.",
            "bad": "Le dices que 'no es tan importante' un programa de televisión."
          }
        ]
      },
      {
        "slug": "respetar-tiempos-recuperacion",
        "nombre": "Respetar Tiempos de Recuperación",
        "emoji": "⏳",
        "descripcion": "No forzar la conversación mientras el sistema nervioso se recupera.",
        "situaciones": [
          {
            "q": "Tu hijo/a se encierra en su cuarto tras llegar del colegio.",
            "good": "Le das el tiempo que necesita y te muestras disponible sin invadir.",
            "bad": "Entras a exigir explicaciones de inmediato."
          },
          {
            "q": "Después de una crisis, tu hijo/a queda en silencio largo rato.",
            "good": "Respetas ese silencio como parte de su recuperación natural.",
            "bad": "Le exiges que hable de lo ocurrido de inmediato."
          },
          {
            "q": "Tu hijo/a se aleja tras un conflicto con un hermano/a.",
            "good": "Le permites ese espacio antes de intentar mediar entre ambos.",
            "bad": "Lo obligas a reconciliarse de inmediato sin dar tiempo."
          },
          {
            "q": "Tras una sobrecarga sensorial, tu hijo/a parece 'apagado/a'.",
            "good": "Le das tiempo de recuperación sin exigir actividad inmediata.",
            "bad": "Le pides que 'reaccione' y participe enseguida."
          },
          {
            "q": "Después de llorar mucho, tu hijo/a no quiere hablar del tema.",
            "good": "Respetas que no quiera hablar ahora y dejas la puerta abierta para después.",
            "bad": "Insistes en 'aclarar las cosas ya' aunque no esté listo/a."
          },
          {
            "q": "Tu hijo/a necesita un rato a solas después de una fiesta.",
            "good": "Le das ese tiempo antes de pedirle que cuente cómo le fue.",
            "bad": "Le preguntas de inmediato con muchos detalles sobre la fiesta."
          },
          {
            "q": "Tras un examen difícil, tu hijo/a llega en silencio.",
            "good": "Esperas a que él/ella inicie la conversación sobre el examen.",
            "bad": "Le preguntas insistentemente cómo le fue apenas llega."
          },
          {
            "q": "Después de un berrinche, tu hijo/a tarda en volver a la normalidad.",
            "good": "Le das el tiempo necesario sin apurar el regreso a la actividad.",
            "bad": "Le exiges retomar la actividad de inmediato 'como si nada'."
          },
          {
            "q": "Tu hijo/a se queda callado/a tras una discusión contigo.",
            "good": "Le das espacio antes de retomar el tema en otro momento más calmado.",
            "bad": "Sigues hablando del tema aunque él/ella ya se cerró."
          },
          {
            "q": "Tras un día muy demandante, tu hijo/a rechaza toda interacción social en casa.",
            "good": "Respetas su necesidad de aislarse temporalmente para recuperarse.",
            "bad": "Insistes en actividades familiares porque 'ya llegó a casa'."
          },
          {
            "q": "Después de una crisis en público, tu hijo/a necesita tiempo antes de volver a hablar de eso.",
            "good": "Evitas mencionar el episodio hasta que él/ella esté listo/a.",
            "bad": "Comentas lo ocurrido con otros delante de él/ella poco después."
          },
          {
            "q": "Tu hijo/a queda muy quieto/a tras un cambio de planes brusco.",
            "good": "Le das tiempo sin exigir que procese la noticia de inmediato.",
            "bad": "Le pides una reacción o respuesta inmediata al cambio."
          },
          {
            "q": "Después de una pelea con un amigo, tu hijo/a no quiere hablar del tema esa noche.",
            "good": "Respetas el silencio y retomas el tema cuando él/ella lo traiga.",
            "bad": "Insistes en hablarlo esa misma noche para 'resolverlo pronto'."
          },
          {
            "q": "Tu hijo/a necesita tiempo extra en la mañana tras una noche de mal dormir.",
            "good": "Ajustas el ritmo matutino dándole ese margen de recuperación.",
            "bad": "Mantienes el mismo ritmo exigente de siempre."
          },
          {
            "q": "Tras un cambio de colegio, tu hijo/a tarda semanas en adaptarse emocionalmente.",
            "good": "Aceptas que el proceso de recuperación toma su propio tiempo.",
            "bad": "Esperas una adaptación rápida y te frustras si tarda."
          },
          {
            "q": "Después de una visita médica difícil, tu hijo/a queda muy sensible el resto del día.",
            "good": "Reduces las demandas del resto del día para darle margen de recuperación.",
            "bad": "Continúas con la agenda normal como si nada hubiera pasado."
          },
          {
            "q": "Tu hijo/a se retira de una reunión familiar sin avisar.",
            "good": "Le das el espacio y verificas después, con calma, que esté bien.",
            "bad": "Lo persigues de inmediato exigiendo que regrese al grupo."
          },
          {
            "q": "Tras un conflicto escolar, tu hijo/a no quiere que le preguntes nada al llegar.",
            "good": "Respetas su pedido y esperas que él/ella decida cuándo hablar.",
            "bad": "Le preguntas igual insistiendo en que 'hablar ayuda'."
          },
          {
            "q": "Después de una rabieta, tu hijo/a tarda en aceptar un abrazo.",
            "good": "Esperas a que él/ella lo busque, sin forzar el contacto físico.",
            "bad": "Insistes en abrazarlo/a de inmediato aunque se resista."
          },
          {
            "q": "Tu hijo/a necesita un día completo de descanso tras un viaje largo.",
            "good": "Ajustas los planes siguientes para darle ese día de recuperación.",
            "bad": "Mantienes actividades exigentes el mismo día de la llegada."
          },
          {
            "q": "Tras un cumpleaños con muchos invitados, tu hijo/a se acuesta antes de lo habitual sin explicación.",
            "good": "Respetas la necesidad de dormir temprano como parte de su recuperación tras el estímulo social.",
            "bad": "Insistes en que se quede despierto/a para 'aprovechar la noche'."
          },
          {
            "q": "Después de una mudanza, tu hijo/a tarda días en volver a jugar con normalidad.",
            "good": "Aceptas que el proceso de asentarse toma su propio tiempo sin presionar.",
            "bad": "Esperas que retome sus juegos de inmediato como si nada hubiera cambiado."
          },
          {
            "q": "Tras un día de exámenes finales, tu hijo/a adolescente no quiere planear nada el fin de semana.",
            "good": "Respetas su necesidad de no tener planes como forma de recuperación.",
            "bad": "Le organizas actividades igual porque 'ya terminaron los exámenes'."
          },
          {
            "q": "Después de una cirugía menor, tu hijo/a queda más irritable de lo normal por varios días.",
            "good": "Ajustas tus expectativas de comportamiento sabiendo que está en recuperación física y emocional.",
            "bad": "Le exiges el mismo buen humor de siempre pese a la recuperación."
          },
          {
            "q": "Tras perder una competencia importante, tu hijo/a no quiere hablar de deporte por unos días.",
            "good": "Evitas mencionar el tema hasta que él/ella lo traiga de nuevo.",
            "bad": "Le preguntas repetidamente 'qué pasó' en los días siguientes."
          },
          {
            "q": "Después de un campamento de una semana, tu hijo/a adulto joven pasa el primer día solo/a en casa.",
            "good": "Respetas ese día de descompresión antes de esperar que retome su rutina social.",
            "bad": "Le organizas una salida con amigos apenas regresa 'para que no pierda el ritmo'."
          },
          {
            "q": "Tras un cambio de terapeuta, tu hijo/a se muestra más cerrado/a en las sesiones siguientes.",
            "good": "Aceptas que el proceso de confianza toma tiempo, sin forzar la apertura.",
            "bad": "Le exiges 'hablar más' en la nueva terapia desde la primera sesión."
          },
          {
            "q": "Después de una discusión fuerte con un amigo/a, tu hijo/a no quiere ir a la escuela al día siguiente.",
            "good": "Le das el espacio de un día si es posible, coordinando con la escuela, para procesar el conflicto.",
            "bad": "Lo obligas a ir de inmediato 'para no perder clases' sin considerar su estado."
          },
          {
            "q": "Tras una crisis sensorial en el cine, tu hijo/a no quiere volver a ese lugar por semanas.",
            "good": "Respetas el tiempo que necesita antes de proponer regresar, sin presionar fechas.",
            "bad": "Lo llevas de nuevo pronto 'para que se le pase el miedo'."
          },
          {
            "q": "Después de conocer a una nueva pareja de un familiar, tu hijo/a se muestra distante varios días.",
            "good": "Le das tiempo para procesar la novedad sin forzar cercanía con la nueva persona.",
            "bad": "Insistes en que 'sea más amable' con la nueva pareja del familiar."
          },
          {
            "q": "Tras un accidente de tránsito menor sin heridos, tu hijo/a se muestra ansioso/a al subir al auto por días.",
            "good": "Respetas ese proceso de recuperación del susto, ajustando los viajes cuando sea posible.",
            "bad": "Lo obligas a subir al auto normalmente 'porque no pasó nada grave'."
          },
          {
            "q": "Después de una fiesta de fin de año escolar, tu hijo/a adolescente duerme hasta tarde varios días seguidos.",
            "good": "Permites ese descanso extendido como parte de la recuperación del período escolar intenso.",
            "bad": "Lo despiertas temprano igual 'para no perder la rutina'."
          },
          {
            "q": "Tras separarse temporalmente de su mascota por una visita al veterinario, tu hijo/a queda callado/a el resto del día.",
            "good": "Respetas su silencio y le das espacio para procesar la preocupación por la mascota.",
            "bad": "Le insistes en hablar de otros temas para 'distraerlo/a'."
          },
          {
            "q": "Después de mudarse de habitación en casa, tu hijo/a tarda en sentirse cómodo/a durmiendo ahí.",
            "good": "Aceptas que la adaptación al nuevo espacio toma su tiempo, sin apurar el proceso.",
            "bad": "Le dices que 'ya debería estar acostumbrado/a' tras pocos días."
          },
          {
            "q": "Tras un desacuerdo fuerte con su pareja, tu hijo/a adulto joven no contesta llamadas por un par de días.",
            "good": "Respetas su necesidad de espacio, dejando saber que estás disponible cuando quiera hablar.",
            "bad": "Insistes en llamarlo/a repetidamente para 'saber qué pasó'."
          },
          {
            "q": "Después de un cambio de médico, tu hijo/a se muestra más callado/a en las citas siguientes.",
            "good": "Le das tiempo para generar confianza con el nuevo profesional sin forzar la comunicación.",
            "bad": "Le exiges que 'hable más' con el nuevo médico desde la primera cita."
          },
          {
            "q": "Tras perder su primer diente sin darse cuenta cómo, tu hijo/a queda inquieto/a esa noche.",
            "good": "Le das tiempo y compañía extra esa noche sin exigir que 'ya lo supere'.",
            "bad": "Le dices que 'no es nada' y esperas que duerma como siempre."
          },
          {
            "q": "Después de un examen médico invasivo, tu hijo/a rechaza el contacto físico por el resto del día.",
            "good": "Respetas esa necesidad de espacio corporal sin insistir en abrazos o cercanía.",
            "bad": "Insistes en abrazarlo/a para 'consolarlo/a' aunque lo rechace."
          },
          {
            "q": "Tras una discusión entre sus padres, tu hijo/a se muestra distante contigo por un par de días.",
            "good": "Le das el tiempo que necesita para procesar, mostrándote disponible sin presionar.",
            "bad": "Le exiges que 'hable normal' contigo de inmediato."
          },
          {
            "q": "Después de un cambio de trabajo, tu hijo/a adulto joven llega a casa y se aísla varias noches seguidas.",
            "good": "Respetas ese proceso de adaptación al nuevo entorno laboral sin cuestionar el aislamiento.",
            "bad": "Le insistes en salir o socializar 'para distraerse' del cambio."
          },
          {
            "q": "Tras un viaje escolar de varios días, tu hijo/a tarda en volver a hablar de sus amigos como antes.",
            "good": "Aceptas que necesita procesar la experiencia a su ritmo antes de compartirla.",
            "bad": "Le preguntas insistentemente detalles del viaje apenas llega."
          },
          {
            "q": "Después de perder una mascota, tu hijo/a no quiere hablar de tener una nueva por meses.",
            "good": "Respetas ese tiempo de duelo sin proponer una mascota nueva antes de que esté listo/a.",
            "bad": "Le sugieres 'reemplazar' a la mascota poco después de la pérdida."
          },
          {
            "q": "Tras un cambio de horario de terapia, tu hijo/a llega más cansado/a los días siguientes.",
            "good": "Ajustas las actividades de esos días para darle margen de recuperación.",
            "bad": "Mantienes la misma carga de actividades esperando que se adapte rápido."
          },
          {
            "q": "Después de una mudanza de ciudad, tu hijo/a adolescente evita hacer nuevos amigos por semanas.",
            "good": "Aceptas que el proceso social lleva su tiempo, sin presionar a socializar rápido.",
            "bad": "Le organizas encuentros sociales forzados 'para que se integre ya'."
          },
          {
            "q": "Tras una hospitalización breve, tu hijo/a necesita dormir con la luz prendida por un tiempo.",
            "good": "Permites ese ajuste temporal sin insistir en volver a la oscuridad de inmediato.",
            "bad": "Le apagas la luz diciendo que 'ya no hay motivo para tener miedo'."
          },
          {
            "q": "Después de un examen de admisión importante, tu hijo/a adolescente no quiere hablar de resultados por días.",
            "good": "Esperas a que él/ella mencione el tema cuando esté listo/a.",
            "bad": "Le preguntas por los resultados cada día insistentemente."
          },
          {
            "q": "Tras un cambio de compañero de trabajo, tu hijo/a adulto joven llega más callado/a las primeras semanas.",
            "good": "Le das espacio para adaptarse a la nueva dinámica laboral sin exigir que comparta detalles.",
            "bad": "Le insistes en contar todo lo que pasa en el trabajo cada día."
          },
          {
            "q": "Después de una pelea física entre hermanos, ambos necesitan tiempo separados antes de estar en la misma habitación.",
            "good": "Respetas ese tiempo de separación antes de intentar cualquier reconciliación.",
            "bad": "Los sientas juntos de inmediato para 'resolverlo ya'."
          },
          {
            "q": "Tras un simulacro de sismo en la escuela, tu hijo/a queda más alerta y ansioso/a esa tarde.",
            "good": "Reduces las exigencias de la tarde y le das espacio para procesar la experiencia.",
            "bad": "Continúas con la tarde normal sin considerar el impacto del simulacro."
          },
          {
            "q": "Después de conocer a sus nuevos compañeros de clase, tu hijo/a llega agotado/a los primeros días.",
            "good": "Ajustas la rutina de la tarde para darle tiempo de recuperación sensorial.",
            "bad": "Mantienes actividades extra esos días 'para aprovechar el tiempo'."
          },
          {
            "q": "Tras un desacuerdo con un profesor, tu hijo/a no quiere hablar del colegio esa noche.",
            "good": "Respetas su silencio y dejas la conversación para cuando esté listo/a.",
            "bad": "Insistes en resolver el tema esa misma noche."
          },
          {
            "q": "Después de un chequeo dental con extracción, tu hijo/a queda muy sensible al tacto en la cara por días.",
            "good": "Evitas el contacto físico en esa zona hasta que él/ella lo permita de nuevo.",
            "bad": "Le tocas la cara para 'revisar cómo va' sin pedir permiso."
          },
          {
            "q": "Tras un cambio de rutina de ejercicio impuesto por el colegio, tu hijo/a llega agotado/a varias tardes.",
            "good": "Ajustas la tarde para darle tiempo de recuperación física antes de otras exigencias.",
            "bad": "Mantienes las mismas tareas de siempre esperando el mismo rendimiento."
          },
          {
            "q": "Después de participar en una obra de teatro escolar, tu hijo/a queda muy callado/a esa noche.",
            "good": "Respetas el silencio como parte de bajar la adrenalina de la actuación.",
            "bad": "Le pides que cuente cómo estuvo la obra apenas terminó."
          },
          {
            "q": "Tras enterarse de una noticia familiar difícil, tu hijo/a adulto joven necesita unos días antes de hablar del tema.",
            "good": "Le das ese margen, mostrándote disponible sin presionar la conversación.",
            "bad": "Le insistes en 'hablar de sentimientos' antes de que esté listo/a."
          },
          {
            "q": "Después de una competencia de matemáticas exigente, tu hijo/a no quiere estudiar nada por unos días.",
            "good": "Permites esa pausa como parte natural de la recuperación mental.",
            "bad": "Le exiges retomar el estudio de inmediato 'para no perder el ritmo'."
          },
          {
            "q": "Tras un cambio de dieta por indicación médica, tu hijo/a se muestra irritable en las comidas por semanas.",
            "good": "Aceptas que el ajuste alimentario toma tiempo y ajustas tus expectativas de comportamiento en la mesa.",
            "bad": "Le exiges buena actitud en cada comida desde el primer día del cambio."
          },
          {
            "q": "Después de un examen de manejo reprobado, tu hijo/a adulto joven no quiere hablar de conducir por semanas.",
            "good": "Respetas ese tiempo antes de proponer una nueva fecha de examen.",
            "bad": "Le insistes en programar el siguiente examen de inmediato."
          },
          {
            "q": "Tras una noche sin poder dormir por ansiedad, tu hijo/a necesita una mañana más lenta al día siguiente.",
            "good": "Ajustas el ritmo matutino permitiendo ese margen extra de recuperación.",
            "bad": "Mantienes el mismo horario exigente de siempre esa mañana."
          },
          {
            "q": "Después de un conflicto grupal en un equipo deportivo, tu hijo/a no quiere ir al entrenamiento la semana siguiente.",
            "good": "Le das ese espacio antes de insistir en el regreso al equipo.",
            "bad": "Lo obligas a ir de inmediato 'para no generar más problemas'."
          },
          {
            "q": "Tras el nacimiento de un hermano/a, tu hijo/a mayor se muestra más necesitado/a de atención por semanas.",
            "good": "Aceptas que el ajuste a la nueva dinámica familiar toma su tiempo y le das esa atención extra.",
            "bad": "Le dices que 'ya está grande' para necesitar tanta atención."
          },
          {
            "q": "Después de un cambio de terapia ocupacional, tu hijo/a se muestra más resistente a las actividades por unas sesiones.",
            "good": "Aceptas que necesita tiempo para adaptarse al nuevo enfoque sin forzar la participación.",
            "bad": "Esperas la misma disposición de siempre desde la primera sesión nueva."
          },
          {
            "q": "Tras perder el celular, tu hijo/a adolescente queda muy alterado/a el resto del día.",
            "good": "Le das espacio para procesar la pérdida antes de hablar de soluciones o reemplazo.",
            "bad": "Le das un sermón sobre responsabilidad mientras aún está alterado/a por la pérdida."
          },
          {
            "q": "Después de un cambio de aula por reparaciones, tu hijo/a llega más cansado/a de lo normal esas semanas.",
            "good": "Reduces las exigencias en casa esos días para darle margen de recuperación.",
            "bad": "Mantienes la misma carga de tareas esperando el mismo rendimiento de siempre."
          },
          {
            "q": "Tras una crisis de pánico en un centro comercial, tu hijo/a no quiere volver a ese lugar por meses.",
            "good": "Respetas ese tiempo, sin forzar el regreso hasta que él/ella lo proponga.",
            "bad": "Lo llevas de nuevo pronto 'para superar el miedo de una vez'."
          },
          {
            "q": "Después de una operación dental con anestesia, tu hijo/a queda desorientado/a y necesita reposo esa tarde.",
            "good": "Cancelas otras actividades del día para darle el reposo que necesita.",
            "bad": "Mantienes los planes del día 'porque ya pasó lo peor'."
          },
          {
            "q": "Tras enterarse de que sus padres se van a divorciar, tu hijo/a necesita semanas antes de hacer preguntas.",
            "good": "Le das ese tiempo, dejando claro que puede preguntar cuando esté listo/a.",
            "bad": "Le exiges hablar del tema para 'aclarar todo de una vez'."
          },
          {
            "q": "Después de un cambio de escuela a mitad de año, tu hijo/a tarda meses en sentirse parte del grupo.",
            "good": "Aceptas ese ritmo de adaptación social sin comparar con otros cambios anteriores.",
            "bad": "Te frustras porque 'ya debería estar adaptado/a' tras pocas semanas."
          },
          {
            "q": "Tras un examen médico con resultados inciertos, tu hijo/a adulto joven necesita procesar la espera en soledad.",
            "good": "Respetas su necesidad de espacio durante la espera de resultados.",
            "bad": "Le llamas repetidamente 'para ver cómo está' durante la espera."
          },
          {
            "q": "Después de una discusión pública con un amigo en la calle, tu hijo/a no quiere salir de casa por días.",
            "good": "Le das ese tiempo, ofreciendo salidas opcionales sin presionar.",
            "bad": "Lo obligas a salir 'para no quedarse encerrado/a'."
          },
          {
            "q": "Tras un cambio de rutina por vacaciones de otro familiar en casa, tu hijo/a se muestra más irritable esos días.",
            "good": "Ajustas expectativas sabiendo que el cambio de dinámica familiar afecta su regulación.",
            "bad": "Le exiges el mismo comportamiento de siempre pese al cambio en casa."
          },
          {
            "q": "Después de una crisis en la piscina por miedo al agua, tu hijo/a no quiere volver a nadar por meses.",
            "good": "Respetas ese tiempo antes de proponer un regreso gradual a la piscina.",
            "bad": "Lo obligas a entrar de nuevo pronto 'para no quedarse con el miedo'."
          },
          {
            "q": "Tras un desacuerdo con abuelos sobre crianza, tu hijo/a queda confundido/a y callado/a por días.",
            "good": "Le das espacio para procesar la confusión sin forzar una postura inmediata.",
            "bad": "Le exiges 'tomar partido' de inmediato en el desacuerdo familiar."
          },
          {
            "q": "Después de una mudanza de país, tu hijo/a adolescente tarda meses en volver a mostrar interés social.",
            "good": "Aceptas que el duelo migratorio y social toma su propio tiempo.",
            "bad": "Te frustras porque 'ya lleva tiempo aquí y debería estar mejor'."
          },
          {
            "q": "Tras un cambio de médico especialista, tu hijo/a se muestra más ansioso/a antes de cada cita por un tiempo.",
            "good": "Reconoces que la confianza con el nuevo especialista toma tiempo en construirse.",
            "bad": "Le exiges 'confiar' en el nuevo médico desde la primera visita."
          },
          {
            "q": "Después de perder un objeto de valor sentimental, tu hijo/a queda triste por semanas.",
            "good": "Respetas ese duelo sin apurar que 'lo supere' o minimizar el apego al objeto.",
            "bad": "Le dices que 'era solo un objeto' para que deje de estar triste."
          },
          {
            "q": "Tras un cambio de rutina por enfermedad prolongada, tu hijo/a necesita semanas para retomar su energía habitual.",
            "good": "Ajustas las expectativas de actividad mientras su cuerpo se recupera gradualmente.",
            "bad": "Esperas el mismo nivel de energía de antes apenas 'se cura'."
          },
          {
            "q": "Después de un examen de admisión a la universidad, tu hijo/a adulto joven no quiere hablar de planes futuros por semanas.",
            "good": "Respetas esa pausa antes de retomar conversaciones sobre el futuro.",
            "bad": "Le insistes en planear los siguientes pasos de inmediato tras el examen."
          },
          {
            "q": "Tras una crisis de ira que rompió un objeto en casa, tu hijo/a evita esa habitación por días.",
            "good": "Respetas esa evitación como parte de su proceso de recuperación emocional.",
            "bad": "Lo obligas a entrar a la habitación 'para enfrentar lo que pasó'."
          },
          {
            "q": "Después de un cambio de rutina por un viaje de trabajo tuyo, tu hijo/a se muestra más apegado/a al volver.",
            "good": "Aceptas ese apego extra como necesidad temporal de reconexión, sin apurar la independencia.",
            "bad": "Le dices que 'ya es grande' para necesitar tanto apego tras tu ausencia."
          },
          {
            "q": "Tras un examen físico deportivo exigente, tu hijo/a necesita todo el fin de semana de descanso.",
            "good": "Ajustas los planes del fin de semana para darle ese descanso completo.",
            "bad": "Programas actividades exigentes igual 'porque ya pasó la prueba'."
          },
          {
            "q": "Después de una crisis migrañosa, tu hijo/a adolescente necesita el resto del día en silencio y oscuridad.",
            "good": "Respetas ese ambiente de recuperación sin exigir actividad ni conversación.",
            "bad": "Enciendes luces y sigues con el plan del día como si nada."
          },
          {
            "q": "Tras un desacuerdo laboral serio, tu hijo/a adulto joven no quiere hablar de trabajo los fines de semana por un tiempo.",
            "good": "Respetas ese límite temporal, evitando el tema en esos días.",
            "bad": "Sacas el tema del trabajo igual 'para que no se acumule'."
          },
          {
            "q": "Después de un evento traumático menor en la calle, como un susto con un perro, tu hijo/a evita esa cuadra por semanas.",
            "good": "Aceptas esa evitación temporal y buscas rutas alternativas sin presionar.",
            "bad": "Lo haces pasar por esa cuadra igual 'para superar el miedo rápido'."
          },
          {
            "q": "Tras un cambio de rutina alimentaria por alergia recién diagnosticada, tu hijo/a se muestra más ansioso/a en las comidas por semanas.",
            "good": "Aceptas que la adaptación a la nueva normalidad alimentaria toma su tiempo.",
            "bad": "Esperas que se acostumbre 'de inmediato' a los nuevos límites de comida."
          },
          {
            "q": "Después de un cambio de compañero de banca impuesto por el colegio, tu hijo/a tarda semanas en sentirse cómodo/a de nuevo.",
            "good": "Aceptas ese proceso de readaptación social sin comparar con la situación anterior.",
            "bad": "Le dices que 'ya debería estar acostumbrado/a' tras pocos días."
          },
          {
            "q": "Tras una crisis de ansiedad antes de un vuelo, tu hijo/a necesita el resto del viaje para recuperarse del episodio.",
            "good": "Ajustas el ritmo de las actividades del viaje para darle ese margen de recuperación.",
            "bad": "Continúas con el itinerario exigente como si el episodio no hubiera pasado."
          },
          {
            "q": "Después de un desacuerdo con su entrenador/a, tu hijo/a no quiere hablar de deporte en la cena esa noche.",
            "good": "Respetas ese silencio y evitas el tema durante la cena.",
            "bad": "Sacas el tema igual en la mesa 'para resolverlo pronto'."
          },
          {
            "q": "Tras un cambio de habitación de hospital durante una internación, tu hijo/a queda más inquieto/a por días.",
            "good": "Aceptas que el nuevo entorno necesita tiempo de adaptación y ofreces objetos familiares.",
            "bad": "Esperas que se adapte de inmediato al nuevo cuarto sin ningún apoyo extra."
          },
          {
            "q": "Después de perder contra su mejor amigo/a en una competencia, tu hijo/a evita quedar con él/ella por unos días.",
            "good": "Respetas esa distancia temporal sin forzar el reencuentro inmediato.",
            "bad": "Organizas una salida juntos de inmediato 'para que hagan las paces ya'."
          },
          {
            "q": "Tras un cambio de médico de cabecera, tu hijo/a adulto joven pospone citas médicas por semanas.",
            "good": "Respetas ese tiempo de ajuste sin presionar para agendar de inmediato.",
            "bad": "Le insistes en agendar la cita cuanto antes sin considerar su resistencia."
          },
          {
            "q": "Después de un examen oral que salió mal, tu hijo/a no quiere participar en clase por unos días según cuenta el profesor.",
            "good": "Aceptas ese retraimiento temporal, coordinando con el colegio sin presionar la participación.",
            "bad": "Le exiges 'volver a participar normal' de inmediato en clase."
          },
          {
            "q": "Tras un cambio de ciudad por trabajo tuyo, tu hijo/a adolescente tarda meses en abrirse a nuevos amigos.",
            "good": "Aceptas el ritmo propio de adaptación social sin comparar con mudanzas anteriores.",
            "bad": "Te frustras comparando con lo rápido que se adaptó en una mudanza anterior."
          },
          {
            "q": "Después de un golpe emocional por una broma pesada de compañeros, tu hijo/a evita el grupo de chat por semanas.",
            "good": "Respetas esa distancia digital como parte de su proceso de recuperación.",
            "bad": "Le insistes en 'no ser rencoroso/a' y volver al chat de inmediato."
          },
          {
            "q": "Tras una crisis por sobrecarga en un concierto, tu hijo/a no quiere ir a eventos con mucha gente por meses.",
            "good": "Respetas ese límite temporal, ofreciendo alternativas de menor estímulo mientras tanto.",
            "bad": "Lo llevas a otro evento similar pronto 'para que se acostumbre'."
          },
          {
            "q": "Después de un cambio de rutina de sueño por un viaje con diferencia horaria, tu hijo/a necesita días para reajustarse.",
            "good": "Ajustas expectativas de rendimiento sabiendo que el cuerpo necesita ese tiempo de reajuste.",
            "bad": "Esperas el mismo rendimiento escolar o de comportamiento desde el primer día de regreso."
          },
          {
            "q": "Tras una crisis de llanto en una boda familiar, tu hijo/a no quiere ver las fotos del evento por semanas.",
            "good": "Respetas esa evitación sin forzar que 'vea lo bonito que salió' el evento.",
            "bad": "Le muestras las fotos igual insistiendo en que 'se le pasó rápido'."
          },
          {
            "q": "Después de un cambio de rutina por reformas en casa, tu hijo/a tarda semanas en sentirse cómodo/a en los espacios nuevos.",
            "good": "Aceptas que la adaptación al espacio remodelado toma su tiempo propio.",
            "bad": "Esperas que se sienta cómodo/a de inmediato porque 'la reforma quedó mejor'."
          },
          {
            "q": "Tras un examen médico con múltiples pinchazos, tu hijo/a evita el contacto con jeringas o dibujos de ellas por meses.",
            "good": "Respetas esa sensibilidad prolongada sin forzar exposiciones para 'superarlo rápido'.",
            "bad": "Le muestras jeringas en juegos o dibujos 'para desensibilizarlo/a' sin su consentimiento."
          },
          {
            "q": "Después de un desacuerdo serio con su mejor amigo/a de toda la vida, tu hijo/a adulto joven necesita meses antes de retomar el contacto.",
            "good": "Respetas ese proceso largo de duelo de la amistad sin presionar una reconciliación rápida.",
            "bad": "Le insistes en 'perdonar y seguir adelante' antes de que esté listo/a."
          }
        ]
      },
      {
        "slug": "elegir-intervencion-adecuada",
        "nombre": "Elegir la Intervención Adecuada",
        "emoji": "🎯",
        "descripcion": "Distinguir cuándo actuar, cuándo esperar y cuándo simplemente acompañar.",
        "situaciones": [
          {
            "q": "Tu hijo/a está en medio de una crisis sensorial en un lugar público.",
            "good": "Priorizas sacarlo/a del estímulo antes que corregir su conducta.",
            "bad": "Le das un sermón sobre comportamiento en medio de la crisis."
          },
          {
            "q": "Tu hijo/a comete un error menor sin consecuencias graves.",
            "good": "Decides no intervenir y dejar que lo resuelva solo/a.",
            "bad": "Intervienes en cada detalle aunque no sea necesario."
          },
          {
            "q": "Notas una posible crisis empezando a formarse.",
            "good": "Intervienes temprano con una pausa antes de que escale.",
            "bad": "Esperas a que la crisis sea total para recién actuar."
          },
          {
            "q": "Tu hijo/a está resolviendo un conflicto leve con un hermano/a.",
            "good": "Observas primero si pueden resolverlo solos antes de mediar.",
            "bad": "Intervienes de inmediato sin darles oportunidad de resolverlo."
          },
          {
            "q": "Tu hijo/a está muy alterado/a y necesita contención física segura.",
            "good": "Reconoces cuándo es momento de acompañar físicamente con calma.",
            "bad": "Te mantienes distante cuando realmente necesita tu cercanía."
          },
          {
            "q": "Tu hijo/a repite un error que ya se habló antes.",
            "good": "Evalúas si necesita un recordatorio suave o simplemente más práctica.",
            "bad": "Reaccionas con el mismo enojo cada vez, sin ajustar la estrategia."
          },
          {
            "q": "Hay una situación de riesgo físico inmediato.",
            "good": "Actúas de inmediato para garantizar seguridad, sin esperar explicaciones.",
            "bad": "Te detienes a discutir el porqué mientras el riesgo continúa."
          },
          {
            "q": "Tu hijo/a está simplemente procesando una emoción sin pedir ayuda.",
            "good": "Te mantienes disponible sin intervenir hasta que la pida.",
            "bad": "Interrumpes su proceso emocional queriendo 'arreglarlo' ya."
          },
          {
            "q": "Notas que la situación mejoraría más dejando que tu hijo/a se frustre un poco resolviendo algo solo/a.",
            "good": "Permites la frustración productiva sin rescatarlo/a de inmediato.",
            "bad": "Intervienes ante la primera señal de dificultad."
          },
          {
            "q": "Tu hijo/a pide ayuda explícita con una tarea.",
            "good": "Respondes a su pedido directo de ayuda sin demorar.",
            "bad": "Le dices que 'lo resuelva solo' cuando pidió apoyo genuino."
          },
          {
            "q": "Hay un conflicto entre reglas de la casa y una necesidad sensorial puntual.",
            "good": "Evalúas el contexto específico antes de aplicar la regla rígidamente.",
            "bad": "Aplicas la regla sin considerar la necesidad real del momento."
          },
          {
            "q": "Tu hijo/a está en shutdown y no responde a estímulos verbales.",
            "good": "Reduces exigencias y esperas en silencio su regreso gradual.",
            "bad": "Insistes con preguntas y estímulos esperando una reacción rápida."
          },
          {
            "q": "Notas que corregir ahora empeoraría la situación emocional.",
            "good": "Pospones la corrección para un momento más calmado.",
            "bad": "Corriges de inmediato aunque el momento no sea el adecuado."
          },
          {
            "q": "Tu hijo/a enfrenta una decisión pequeña que puede tomar solo/a.",
            "good": "Le das espacio para decidir sin intervenir innecesariamente.",
            "bad": "Tomas la decisión por él/ella para 'ahorrar tiempo'."
          },
          {
            "q": "Hay una situación de bullying o maltrato real hacia tu hijo/a.",
            "good": "Intervienes activamente y buscas apoyo externo si es necesario.",
            "bad": "Esperas que 'se resuelva solo' en una situación de daño real."
          },
          {
            "q": "Tu hijo/a comete un error que puede aprender a corregir con la experiencia.",
            "good": "Permites que viva la consecuencia natural sin rescatarlo/a.",
            "bad": "Evitas cualquier consecuencia natural para que no sufra."
          },
          {
            "q": "Notas que tu hijo/a necesita más estructura externa en este momento.",
            "good": "Aumentas temporalmente el apoyo y la claridad de instrucciones.",
            "bad": "Mantienes el mismo nivel de independencia esperado siempre."
          },
          {
            "q": "Tu hijo/a está gestionando bien una situación difícil por su cuenta.",
            "good": "Te mantienes en segundo plano, listo/a para intervenir solo si lo pide.",
            "bad": "Intervienes innecesariamente interrumpiendo su manejo autónomo."
          },
          {
            "q": "Hay una crisis médica o de seguridad urgente.",
            "good": "Actúas con prioridad absoluta en la seguridad antes que en la regulación emocional.",
            "bad": "Te enfocas primero en calmar antes de atender el riesgo real."
          },
          {
            "q": "Tu hijo/a pide que simplemente lo/la acompañes en silencio.",
            "good": "Respetas ese pedido y te quedas presente sin hablar de más.",
            "bad": "Insistes en conversar o dar consejos que no fueron pedidos."
          },
          {
            "q": "Tu hijo/a se traba armando una oración para un mensaje de texto importante.",
            "good": "Le preguntas si quiere ayuda antes de intervenir, dejando que decida el nivel de apoyo.",
            "bad": "Le escribes el mensaje completo sin que lo pida."
          },
          {
            "q": "Notas que tu hijo/a está a punto de tomar una decisión arriesgada pero no peligrosa.",
            "good": "Le permites intentarlo, ofreciendo tu opinión solo si la pide.",
            "bad": "Le impides intentarlo por miedo a que se equivoque."
          },
          {
            "q": "Tu hijo/a discute con un compañero de equipo sobre las reglas de un juego.",
            "good": "Observas desde lejos, interviniendo solo si el conflicto escala a agresión.",
            "bad": "Intervienes de inmediato dictando cómo deben jugar."
          },
          {
            "q": "Notas que tu hijo/a adolescente está manejando una decepción amorosa solo/a en su cuarto.",
            "good": "Le avisas que estás disponible y esperas a que busque hablar.",
            "bad": "Entras a su cuarto insistiendo en hablar del tema ya."
          },
          {
            "q": "Tu hijo/a se enreda tratando de armar un experimento de ciencias para el colegio.",
            "good": "Evalúas si necesita una pista puntual o simplemente más tiempo, sin resolverlo por él/ella.",
            "bad": "Terminas el experimento tú mismo/a para 'que quede bien'."
          },
          {
            "q": "Notas que tu hijo/a está en medio de una discusión verbal, no física, con un hermano/a.",
            "good": "Esperas un momento a ver si pueden resolverlo antes de mediar.",
            "bad": "Interrumpes de inmediato imponiendo una solución."
          },
          {
            "q": "Tu hijo/a adulto joven te pide opinión sobre una decisión de carrera.",
            "good": "Le das tu perspectiva cuando la pide, dejando claro que la decisión final es suya.",
            "bad": "Le dices exactamente qué debe hacer sin dejar espacio a su propia decisión."
          },
          {
            "q": "Notas que tu hijo/a está teniendo una crisis de ansiedad leve antes de un examen.",
            "good": "Ofreces una técnica breve de respiración sin insistir si no la quiere en ese momento.",
            "bad": "Le das un discurso motivacional largo justo antes de entrar al examen."
          },
          {
            "q": "Tu hijo/a se frustra con un juguete que no funciona como espera.",
            "good": "Esperas un momento para ver si se autorregula antes de ofrecer ayuda.",
            "bad": "Le cambias el juguete de inmediato ante la primera señal de frustración."
          },
          {
            "q": "Notas una situación de acoso leve pero repetido hacia tu hijo/a en redes sociales.",
            "good": "Intervienes activamente documentando y buscando apoyo del colegio o la plataforma.",
            "bad": "Le dices que 'ignore' el acoso sin tomar ninguna acción concreta."
          },
          {
            "q": "Tu hijo/a está resolviendo un problema de matemáticas complicado, visiblemente concentrado/a.",
            "good": "No interrumpes su concentración, disponible solo si pide ayuda.",
            "bad": "Le preguntas cada minuto si necesita ayuda, interrumpiendo su proceso."
          },
          {
            "q": "Notas que tu hijo/a adolescente está gestionando bien un conflicto con un profesor por su cuenta.",
            "good": "Te mantienes informado/a pero dejas que él/ella lo resuelva primero.",
            "bad": "Llamas al colegio de inmediato sin darle oportunidad de resolverlo."
          },
          {
            "q": "Tu hijo/a enfrenta un desacuerdo con un amigo sobre planes de fin de semana.",
            "good": "Lo dejas negociar solo/a, ofreciendo consejo solo si lo pide.",
            "bad": "Intervienes llamando al otro padre para 'arreglar' el desacuerdo entre niños."
          },
          {
            "q": "Notas que tu hijo/a pequeño está intentando subir un tobogán alto sin ayuda.",
            "good": "Evalúas el riesgo real antes de decidir intervenir o dejarlo intentarlo.",
            "bad": "Lo bajas de inmediato sin evaluar si realmente hay peligro."
          },
          {
            "q": "Tu hijo/a adulto joven comete un error financiero pequeño y manejable.",
            "good": "Le permites experimentar la consecuencia natural sin rescatarlo/a económicamente.",
            "bad": "Le das el dinero de inmediato para evitar cualquier consecuencia."
          },
          {
            "q": "Notas que tu hijo/a está en shutdown durante una reunión familiar.",
            "good": "Reduces las exigencias sociales del momento y le das espacio sin exigir participación.",
            "bad": "Lo animas a 'saludar a todos' pese al shutdown evidente."
          },
          {
            "q": "Tu hijo/a comete el mismo error de organización que ya se habló varias veces.",
            "good": "Evalúas si necesita un sistema de apoyo diferente en vez de repetir la misma corrección.",
            "bad": "Repites el mismo regaño de siempre esperando un resultado distinto."
          },
          {
            "q": "Notas una posible situación de riesgo en el agua durante una salida a la playa.",
            "good": "Actúas de inmediato para garantizar la seguridad física antes que cualquier otra consideración.",
            "bad": "Esperas a ver 'si de verdad hay peligro' antes de reaccionar."
          },
          {
            "q": "Tu hijo/a está procesando una noticia triste en silencio, sin pedir hablar de ello.",
            "good": "Te mantienes disponible sin forzar la conversación hasta que él/ella la busque.",
            "bad": "Le preguntas repetidamente 'qué tiene' interrumpiendo su proceso silencioso."
          },
          {
            "q": "Notas que dejar que tu hijo/a se equivoque en una tarea sencilla podría enseñarle algo valioso.",
            "good": "Permites el error como aprendizaje, sin corregir antes de que ocurra.",
            "bad": "Corriges cada posible error antes de que suceda, sin dejar espacio al aprendizaje."
          },
          {
            "q": "Tu hijo/a pide ayuda explícita para resolver un conflicto con un amigo por mensaje.",
            "good": "Le ayudas a redactar la respuesta cuando la pide, respetando su pedido directo.",
            "bad": "Le dices que 'lo resuelva solo/a' aunque pidió apoyo genuino."
          },
          {
            "q": "Notas una tensión entre una regla de horario de pantallas y una necesidad puntual de tu hijo/a, como una videollamada con un amigo que se muda.",
            "good": "Evalúas el contexto específico antes de aplicar la regla de forma rígida.",
            "bad": "Aplicas la regla del horario sin considerar la situación puntual."
          },
          {
            "q": "Tu hijo/a está en un colapso emocional y no responde a palabras.",
            "good": "Reduces estímulos y esperas en silencio su regreso gradual, sin insistir verbalmente.",
            "bad": "Sigues hablándole e insistiendo con preguntas esperando respuesta inmediata."
          },
          {
            "q": "Notas que corregir la postura de tu hijo/a durante una crisis empeoraría la situación.",
            "good": "Pospones cualquier corrección física o verbal hasta que esté más regulado/a.",
            "bad": "Corriges la postura de inmediato aunque esté en plena crisis."
          },
          {
            "q": "Tu hijo/a adolescente enfrenta una decisión sobre qué materia optativa elegir.",
            "good": "Le das espacio para decidir, ofreciendo información solo si la pide.",
            "bad": "Eliges la materia por él/ella 'porque es mejor para su futuro'."
          },
          {
            "q": "Notas una situación de exclusión social real y sostenida hacia tu hijo/a en el equipo deportivo.",
            "good": "Intervienes activamente hablando con el entrenador y buscando apoyo si es necesario.",
            "bad": "Esperas que 'se resuelva solo' en una situación de exclusión sostenida."
          },
          {
            "q": "Tu hijo/a comete un error al cocinar algo simple que puede corregir con la experiencia.",
            "good": "Permites que experimente el resultado sin corregirlo antes de que termine.",
            "bad": "Intervienes en cada paso para evitar cualquier error posible."
          },
          {
            "q": "Notas que tu hijo/a necesita más apoyo estructural en las mañanas para no llegar tarde.",
            "good": "Aumentas temporalmente el apoyo con recordatorios visuales o alarmas.",
            "bad": "Mantienes el mismo nivel de independencia esperado pese a las llegadas tarde repetidas."
          },
          {
            "q": "Tu hijo/a adulto joven está gestionando bien un conflicto de convivencia con su compañero/a de piso.",
            "good": "Te mantienes en segundo plano, disponible solo si te pide consejo.",
            "bad": "Llamas al compañero/a de piso para 'arreglar' el conflicto sin que te lo pidan."
          },
          {
            "q": "Notas una situación de emergencia médica real, como una posible alergia grave, en tu hijo/a.",
            "good": "Actúas con prioridad absoluta en la seguridad médica antes que en calmar la emoción.",
            "bad": "Te enfocas primero en tranquilizarlo/a antes de atender la posible emergencia médica."
          },
          {
            "q": "Tu hijo/a pide que simplemente te sientes con él/ella sin hablar tras un mal día.",
            "good": "Respetas ese pedido y te quedas en silencio, disponible.",
            "bad": "Insistes en preguntar 'qué pasó' aunque pidió silencio."
          },
          {
            "q": "Notas que tu hijo/a pequeño está intentando ponerse los zapatos solo/a, tardando mucho.",
            "good": "Le das el tiempo para intentarlo antes de ofrecer ayuda.",
            "bad": "Le pones los zapatos tú mismo/a para 'no perder tiempo'."
          },
          {
            "q": "Tu hijo/a adolescente enfrenta la decisión de disculparse o no con un amigo tras una pelea.",
            "good": "Le das espacio para decidir su propio camino, ofreciendo tu perspectiva solo si la pide.",
            "bad": "Lo obligas a disculparse de inmediato sin que él/ella lo decida."
          },
          {
            "q": "Notas que tu hijo/a está resolviendo bien una frustración leve con un rompecabezas.",
            "good": "Te mantienes cerca sin intervenir, dejando que complete el proceso por sí mismo/a.",
            "bad": "Intervienes ante la primera pieza que no encaja fácilmente."
          },
          {
            "q": "Tu hijo/a enfrenta un conflicto entre la necesidad de moverse en clase y la regla de estar sentado/a.",
            "good": "Evalúas el contexto y buscas un ajuste razonable, como una pelota de asiento o pausas, en vez de aplicar la regla rígidamente.",
            "bad": "Exiges que cumpla la regla de estar sentado/a sin considerar su necesidad real."
          },
          {
            "q": "Notas una situación de riesgo en internet, como contacto con un desconocido sospechoso, con tu hijo/a.",
            "good": "Actúas de inmediato revisando la situación y estableciendo medidas de seguridad.",
            "bad": "Esperas a ver 'si pasa algo más' antes de intervenir en el riesgo digital."
          },
          {
            "q": "Tu hijo/a adulto joven está procesando una decisión difícil de mudarse o no, sin pedir tu opinión.",
            "good": "Te mantienes disponible sin opinar hasta que te lo pida directamente.",
            "bad": "Le das tu opinión repetidamente aunque no la haya pedido."
          },
          {
            "q": "Notas que dejar que tu hijo/a maneje solo/a un desacuerdo con un vendedor le enseñaría autonomía.",
            "good": "Le permites intentar resolverlo solo/a, interviniendo solo si realmente lo necesita.",
            "bad": "Intervienes de inmediato hablando tú con el vendedor por él/ella."
          },
          {
            "q": "Tu hijo/a está en medio de una rabieta por cansancio extremo en un centro comercial.",
            "good": "Priorizas sacarlo/a del estímulo y buscar un lugar tranquilo antes que corregir la conducta.",
            "bad": "Le das un sermón sobre comportamiento en medio de la rabieta por cansancio."
          },
          {
            "q": "Notas que tu hijo/a repite un error de convivencia con hermanos que ya se habló varias veces.",
            "good": "Evalúas si necesita un recordatorio distinto o una estructura de turnos más clara.",
            "bad": "Reaccionas con el mismo enojo cada vez sin ajustar la estrategia."
          },
          {
            "q": "Tu hijo/a adolescente enfrenta una decisión sobre a qué universidad aplicar.",
            "good": "Le das espacio para decidir, disponible para conversar si lo busca.",
            "bad": "Tomas la decisión de la universidad por él/ella 'para asegurar su futuro'."
          },
          {
            "q": "Notas una situación de riesgo físico inminente al cruzar la calle.",
            "good": "Actúas de inmediato para garantizar la seguridad sin esperar a explicar nada primero.",
            "bad": "Te detienes a explicar la regla de cruzar la calle mientras el riesgo continúa."
          },
          {
            "q": "Tu hijo/a está simplemente disfrutando de un momento de calma leyendo, sin pedir interacción.",
            "good": "Respetas ese momento de calma sin interrumpir con preguntas o tareas.",
            "bad": "Interrumpes su lectura para 'aprovechar y conversar' sin que lo busque."
          },
          {
            "q": "Notas que la frustración de tu hijo/a armando un mueble de juguete podría ser productiva si no interviene.",
            "good": "Permites la frustración productiva, ofreciendo ayuda solo si la pide.",
            "bad": "Intervienes ante la primera señal de dificultad con el mueble."
          },
          {
            "q": "Tu hijo/a pide ayuda explícita para hablar con un maestro sobre una calificación.",
            "good": "Le ayudas a preparar lo que quiere decir, respondiendo a su pedido directo.",
            "bad": "Le dices que 'hable solo/a' cuando pidió apoyo genuino para prepararse."
          },
          {
            "q": "Notas un conflicto entre la regla de horario de dormir y una necesidad puntual, como terminar una videollamada emotiva con un amigo lejano.",
            "good": "Evalúas el contexto puntual antes de aplicar la regla de horario rígidamente.",
            "bad": "Aplicas el horario sin considerar la situación emocional puntual."
          },
          {
            "q": "Tu hijo/a está en colapso tras una sobrecarga sensorial en un concierto.",
            "good": "Reduces estímulos de inmediato y esperas en silencio su regreso gradual.",
            "bad": "Insistes en que 'disfrute' el resto del concierto pese al colapso."
          },
          {
            "q": "Notas que corregir el tono de voz de tu hijo/a en medio de su enojo empeoraría todo.",
            "good": "Pospones la corrección del tono para un momento más calmado después.",
            "bad": "Corriges el tono de voz de inmediato en medio del enojo."
          },
          {
            "q": "Tu hijo/a adulto joven enfrenta una decisión sobre terminar o no una relación de pareja.",
            "good": "Le das espacio para decidir, ofreciendo tu perspectiva solo si la pide explícitamente.",
            "bad": "Le insistes en tu opinión sobre la relación sin que te la pida."
          },
          {
            "q": "Notas una situación de maltrato real de un entrenador hacia tu hijo/a.",
            "good": "Intervienes activamente hablando con la institución y buscando apoyo externo si es necesario.",
            "bad": "Esperas que 'se resuelva solo' en una situación de maltrato real."
          },
          {
            "q": "Tu hijo/a comete un error al organizar su mochila que puede aprender a corregir con la experiencia de olvidar algo.",
            "good": "Permites que viva la consecuencia natural de olvidar el objeto sin rescatarlo/a llevándoselo después.",
            "bad": "Le llevas el objeto olvidado a la escuela para evitar cualquier consecuencia."
          },
          {
            "q": "Notas que tu hijo/a necesita más apoyo visual para entender los pasos de una rutina nueva.",
            "good": "Aumentas temporalmente el apoyo con un cronograma visual claro.",
            "bad": "Mantienes solo instrucciones verbales esperando que las recuerde igual."
          },
          {
            "q": "Tu hijo/a está gestionando bien una conversación difícil con un abuelo/a por su cuenta.",
            "good": "Te mantienes en segundo plano, lista/o para intervenir solo si lo necesita.",
            "bad": "Intervienes en la conversación innecesariamente interrumpiendo su manejo autónomo."
          },
          {
            "q": "Notas una situación de riesgo de seguridad al usar herramientas nuevas, por ejemplo cocinar con fuego.",
            "good": "Actúas con prioridad en la seguridad física, supervisando de cerca sin dejarlo/a solo/a con el riesgo.",
            "bad": "Te enfocas en no 'sofocarlo/a' con supervisión y dejas el riesgo sin atender."
          },
          {
            "q": "Tu hijo/a pide que simplemente lo/la acompañes al médico sin hablar mucho en la sala de espera.",
            "good": "Respetas ese pedido y te quedas presente en silencio.",
            "bad": "Insistes en conversar para 'distraerlo/a' aunque pidió silencio."
          },
          {
            "q": "Notas que tu hijo/a adolescente está resolviendo bien un desacuerdo de horarios con su empleador a tiempo parcial.",
            "good": "Observas primero si puede resolverlo solo/a antes de ofrecer intervenir.",
            "bad": "Llamas al empleador de inmediato sin darle oportunidad de resolverlo."
          },
          {
            "q": "Tu hijo/a enfrenta un conflicto entre la necesidad de silencio y una fiesta familiar ruidosa en casa.",
            "good": "Buscas un ajuste razonable, como un espacio tranquilo disponible, en vez de exigir que tolere todo el ruido.",
            "bad": "Le exiges 'aguantar' la fiesta completa sin ofrecer ningún ajuste."
          },
          {
            "q": "Notas una situación de riesgo real de deshidratación durante una actividad al aire libre.",
            "good": "Actúas de inmediato ofreciendo agua y pausa antes de continuar cualquier actividad.",
            "bad": "Continúas la actividad planeada sin atender la señal física de riesgo."
          },
          {
            "q": "Tu hijo/a está simplemente procesando una emoción de alegría intensa sin pedir que la valides.",
            "good": "Disfrutas el momento junto a él/ella sin necesidad de analizar o corregir su expresión.",
            "bad": "Le pides que 'se calme' porque su alegría es 'demasiado intensa'."
          },
          {
            "q": "Notas que dejar que tu hijo/a resuelva un malentendido con un amigo por mensaje solo/a sería una buena oportunidad de aprendizaje.",
            "good": "Le permites intentarlo solo/a, disponible si pide revisar el mensaje antes de enviarlo.",
            "bad": "Escribes tú el mensaje de aclaración sin que te lo pida."
          },
          {
            "q": "Tu hijo/a pide ayuda explícita para calmarse antes de una presentación.",
            "good": "Le ofreces la técnica de respiración que suele usar, respondiendo directamente a su pedido.",
            "bad": "Le dices que 'no necesita ayuda' y que debe poder solo/a."
          },
          {
            "q": "Notas un conflicto entre la regla de compartir juguetes y la necesidad puntual de tu hijo/a de tener un objeto de apego en ese momento.",
            "good": "Evalúas el contexto y permites una excepción razonable para el objeto de apego.",
            "bad": "Aplicas la regla de compartir sin excepción, ignorando la necesidad puntual."
          },
          {
            "q": "Tu hijo/a está en burnout escolar acumulado tras semanas de exigencia.",
            "good": "Reduces temporalmente las exigencias académicas y de actividades extra para permitir recuperación.",
            "bad": "Mantienes el mismo nivel de exigencia esperando que 'aguante un poco más'."
          },
          {
            "q": "Notas que corregir un comentario impulsivo de tu hijo/a justo después de decirlo empeoraría la tensión familiar.",
            "good": "Esperas un momento de calma para hablar del comentario, en vez de corregir de inmediato.",
            "bad": "Corriges el comentario en el acto, delante de toda la familia."
          },
          {
            "q": "Tu hijo/a adulto joven enfrenta una decisión sobre aceptar o no una oferta de trabajo.",
            "good": "Le das espacio para decidir, compartiendo tu perspectiva solo si la pide.",
            "bad": "Le presionas para que acepte la oferta 'porque es lo más seguro'."
          },
          {
            "q": "Notas una situación de riesgo de estafa en línea dirigida a tu hijo/a adolescente.",
            "good": "Intervienes de inmediato explicando la situación y bloqueando el contacto sospechoso.",
            "bad": "Esperas a ver 'si de verdad es una estafa' antes de actuar."
          },
          {
            "q": "Tu hijo/a comete un error menor al elegir su ropa para el día, sin consecuencias reales.",
            "good": "Decides no intervenir y dejar que use la combinación que eligió.",
            "bad": "Le exiges cambiarse de ropa por un detalle estético sin importancia real."
          },
          {
            "q": "Notas que tu hijo/a necesita más apoyo emocional en la despedida de un amigo que se muda de país.",
            "good": "Aumentas tu disponibilidad emocional esos días, sin minimizar la magnitud de la pérdida.",
            "bad": "Le dices que 'ya hará otros amigos' restando importancia a la despedida."
          },
          {
            "q": "Tu hijo/a está gestionando bien sus emociones tras una decepción deportiva, sin pedir tu intervención.",
            "good": "Te mantienes disponible en segundo plano, respetando que lo está manejando bien solo/a.",
            "bad": "Intervienes dándole consejos no solicitados sobre cómo manejar la decepción."
          },
          {
            "q": "Notas una situación de riesgo de aislamiento social sostenido en tu hijo/a adolescente durante meses.",
            "good": "Intervienes activamente buscando apoyo profesional, sin esperar que 'se le pase solo'.",
            "bad": "Esperas que la situación se resuelva sola sin buscar ningún apoyo externo."
          },
          {
            "q": "Tu hijo/a comete un error al organizar su tiempo de estudio que puede corregir con la experiencia del resultado.",
            "good": "Permites que viva el resultado de su organización sin intervenir antes del examen.",
            "bad": "Rehaces su horario de estudio por él/ella sin que lo pida."
          },
          {
            "q": "Notas que tu hijo/a necesita menos estructura externa ahora que ha ganado más autonomía en una rutina.",
            "good": "Reduces gradualmente el apoyo externo, confiando en su autonomía creciente.",
            "bad": "Mantienes el mismo nivel de supervisión de siempre pese al progreso mostrado."
          },
          {
            "q": "Tu hijo/a está gestionando bien un desacuerdo de opiniones políticas con un familiar en una reunión.",
            "good": "Observas sin intervenir mientras el intercambio se mantenga respetuoso.",
            "bad": "Interrumpes la conversación de inmediato para evitar cualquier desacuerdo."
          },
          {
            "q": "Notas una situación de riesgo real en una app de citas para tu hijo/a adulto joven.",
            "good": "Le compartes tu preocupación concreta y ofreces apoyo si decide actuar sobre el riesgo.",
            "bad": "Le prohíbes usar la app sin conversar primero sobre la situación de riesgo."
          },
          {
            "q": "Tu hijo/a pide que simplemente estés cerca mientras hace su tarea, sin ayudar directamente.",
            "good": "Respetas ese pedido, quedándote presente sin intervenir en la tarea.",
            "bad": "Aprovechas para corregir cada respuesta mientras la hace, aunque no lo pidió."
          },
          {
            "q": "Notas que dejar que tu hijo/a maneje solo/a un reclamo en una tienda le daría una buena práctica de autonomía.",
            "good": "Lo dejas intentarlo primero, interviniendo solo si la situación se complica de verdad.",
            "bad": "Haces tú el reclamo de inmediato sin darle oportunidad de intentarlo."
          },
          {
            "q": "Tu hijo/a está en medio de una crisis de pánico y necesita contención física segura, no palabras.",
            "good": "Reconoces la necesidad de cercanía física calmada por encima de cualquier explicación verbal.",
            "bad": "Te mantienes a distancia dando instrucciones verbales cuando necesita contacto físico."
          },
          {
            "q": "Notas que corregir un error de tu hijo/a frente a sus amigos empeoraría la situación social.",
            "good": "Pospones la corrección para un momento privado después del encuentro.",
            "bad": "Corriges el error delante de sus amigos en el momento."
          },
          {
            "q": "Tu hijo/a adulto joven enfrenta una decisión de salud, como empezar o no una terapia, que le corresponde a él/ella.",
            "good": "Le das espacio para decidir, ofreciendo información si la pide sin presionar la decisión.",
            "bad": "Le agendas la terapia sin consultarle primero."
          },
          {
            "q": "Notas una situación de riesgo de sobreesfuerzo físico en tu hijo/a durante una actividad deportiva con fiebre leve.",
            "good": "Actúas priorizando la salud física, deteniendo la actividad pese a su insistencia en continuar.",
            "bad": "Lo dejas continuar la actividad porque 'insiste en que se siente bien'."
          }
        ]
      }
    ]
  },
  {
    "slug": "flexibilidad",
    "nombre": "Flexibilidad Cognitiva del Padre",
    "color": "#f59e0b",
    "icon": "<path d=\"M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z\"/>",
    "habilidades": [
      {
        "slug": "detectar-sesgos-neurotipicos",
        "nombre": "Detectar Sesgos Neurotípicos",
        "emoji": "🪞",
        "descripcion": "Reconocer cuándo se juzga la conducta desde una única forma de ser \"normal\".",
        "situaciones": [
          {
            "q": "Piensas que tu hijo/a 'debería' hacer amigos como los demás niños.",
            "good": "Te preguntas si esa expectativa viene de una norma social, no de una necesidad real de tu hijo/a.",
            "bad": "Presionas para que socialice 'como todos' sin cuestionar el estándar."
          },
          {
            "q": "Te incomoda que tu hijo/a hable en tercera persona o de forma inusual.",
            "good": "Reconoces que esa forma de hablar no es 'incorrecta', solo distinta.",
            "bad": "Lo corriges constantemente para que hable 'normal'."
          },
          {
            "q": "Esperas que tu hijo/a mire a los ojos al hablar, como 'debe ser'.",
            "good": "Cuestionas de dónde viene esa regla y si es realmente necesaria para él/ella.",
            "bad": "Insistes en el contacto visual porque 'así se hace'."
          },
          {
            "q": "Te frustra que tu hijo/a no disfrute actividades 'típicas' de su edad.",
            "good": "Revisas si tu frustración viene de una comparación social más que de su bienestar real.",
            "bad": "Lo empujas a esas actividades para que 'encaje'."
          },
          {
            "q": "Piensas que jugar solo/a mucho tiempo 'no es sano'.",
            "good": "Te informas sobre si esa creencia aplica igual a un perfil neurodivergente.",
            "bad": "Interrumpes su juego solitario asumiendo que algo anda mal."
          },
          {
            "q": "Te preocupa lo que otros piensen del comportamiento de tu hijo/a en público.",
            "good": "Reconoces que esa preocupación es sobre la mirada social, no sobre su bienestar.",
            "bad": "Corriges su conducta en público principalmente por el qué dirán."
          },
          {
            "q": "Esperas que tu hijo/a exprese emociones de la forma convencional (llorar, abrazar).",
            "good": "Aceptas que su expresión emocional puede verse distinta sin ser menos válida.",
            "bad": "Le dices que 'no siente' porque no expresa como esperas."
          },
          {
            "q": "Comparas el desarrollo de tu hijo/a con tablas estándar de hitos.",
            "good": "Contextualizas esas tablas como promedios neurotípicos, no como única meta válida.",
            "bad": "Te alarmas solo por no cumplir el hito exacto en el tiempo esperado."
          },
          {
            "q": "Sientes vergüenza cuando tu hijo/a hace stimming en público.",
            "good": "Examinas de dónde viene esa vergüenza y la separas del bienestar de tu hijo/a.",
            "bad": "Le pides que pare el stimming solo por la mirada ajena."
          },
          {
            "q": "Piensas que un interés intenso y específico es 'obsesivo' en tono negativo.",
            "good": "Reconoces que ese interés puede ser una fortaleza, no una anomalía a corregir.",
            "bad": "Intentas reducir el tiempo dedicado a su interés porque 'no es normal'."
          },
          {
            "q": "Esperas que tu hijo/a maneje el cambio con la misma facilidad que otros niños.",
            "good": "Ajustas la expectativa reconociendo que la flexibilidad ante el cambio varía por perfil.",
            "bad": "Te enojas porque 'otros niños se adaptan más rápido'."
          },
          {
            "q": "Te preocupa que tu hijo/a no tenga 'suficientes' amigos.",
            "good": "Evalúas la calidad de sus vínculos según sus propios términos, no una cantidad estándar.",
            "bad": "Presionas para que tenga más amigos por presión social externa."
          },
          {
            "q": "Piensas que necesitar rutinas fijas es un signo de 'debilidad'.",
            "good": "Reconoces que la previsibilidad es una herramienta legítima de regulación.",
            "bad": "Intentas 'curarlo/a' de la necesidad de rutina forzando cambios constantes."
          },
          {
            "q": "Sientes que debes disculparte con otros por la forma de ser de tu hijo/a.",
            "good": "Te preguntas si esa necesidad de disculpa refleja un sesgo social más que un problema real.",
            "bad": "Te disculpas constantemente frente a otros por su forma natural de ser."
          },
          {
            "q": "Esperas que tu hijo/a disfrute el mismo tipo de diversión que sus hermanos.",
            "good": "Reconoces que el disfrute puede verse distinto según su perfil sensorial e intereses.",
            "bad": "Lo obligas a participar en las mismas diversiones 'para que sea como los demás'."
          },
          {
            "q": "Te incomoda cuando tu hijo/a corrige detalles técnicos en una conversación casual.",
            "good": "Reconoces que esa precisión es parte de su forma de procesar, no una falta de tacto.",
            "bad": "Le dices que 'deje de ser tan quisquilloso' con los detalles."
          },
          {
            "q": "Piensas que debería 'superar' su necesidad de objetos de apoyo sensorial.",
            "good": "Cuestionas si esa expectativa responde a una edad estándar más que a su necesidad real.",
            "bad": "Le retiras el objeto porque 'ya está grande para eso'."
          },
          {
            "q": "Sientes que un profesional 'normaliza demasiado' cuando valida a tu hijo/a.",
            "good": "Te abres a considerar que el enfoque afirmativo puede ser más útil que el enfoque de corrección.",
            "bad": "Descartas el enfoque neuroafirmativo porque 'no exige suficiente cambio'."
          },
          {
            "q": "Esperas que tu hijo/a disfrute el contacto físico igual que el resto de la familia.",
            "good": "Respetas su nivel propio de comodidad con el contacto físico.",
            "bad": "Insistes en abrazos y besos porque 'así se demuestra cariño en la familia'."
          },
          {
            "q": "Piensas que hablar mucho de un tema específico es 'falta de habilidad social'.",
            "good": "Reconoces que puede ser su forma genuina de conectar y compartir entusiasmo.",
            "bad": "Le interrumpes constantemente para 'enseñarle a socializar mejor'."
          },
          {
            "q": "Tu hijo/a pequeño/a prefiere alinear sus juguetes en vez de jugar 'a hacer de cuenta'.",
            "good": "Reconoces que el juego funcional es igual de válido que el juego simbólico convencional.",
            "bad": "Le enseñas insistentemente a jugar 'a la casita' porque 'así juegan los niños normales'."
          },
          {
            "q": "Te incomoda que tu hijo/a adolescente prefiera escribir mensajes en vez de llamar por teléfono.",
            "good": "Te preguntas si tu incomodidad viene de tu propia costumbre, no de una necesidad real de él/ella.",
            "bad": "Le exiges que llame porque 'los mensajes son de flojos'."
          },
          {
            "q": "Esperas que tu hijo/a adulto/a joven quiera vivir solo/a apenas cumpla la mayoría de edad.",
            "good": "Cuestionas si esa expectativa responde a una norma social más que a su bienestar real.",
            "bad": "Le presionas a mudarse 'porque ya es hora, así se hace'."
          },
          {
            "q": "Te preocupa que tu hijo/a no muestre interés en la moda o el vestuario de sus compañeros.",
            "good": "Reconoces que su despreocupación por la apariencia no es un problema a corregir.",
            "bad": "Insistes en que 'se arregle mejor' para encajar con el grupo."
          },
          {
            "q": "Piensas que tu hijo/a 'debería' disfrutar una fiesta sorpresa como cualquier niño.",
            "good": "Consideras que la sorpresa puede generarle ansiedad en vez de alegría, y ajustas la idea.",
            "bad": "Organizas la sorpresa igual, esperando que reaccione con el entusiasmo esperado."
          },
          {
            "q": "Te molesta que tu hijo/a no se ría de los chistes familiares en la sobremesa.",
            "good": "Aceptas que su sentido del humor puede no coincidir con el de la familia sin que eso sea un fallo.",
            "bad": "Le dices que 'no tiene sentido del humor' delante de todos."
          },
          {
            "q": "Piensas que un adolescente 'debería' querer salir de fiesta los fines de semana.",
            "good": "Reconoces que su forma de disfrutar el tiempo libre puede ser distinta sin ser un problema.",
            "bad": "Le insistes en salir 'para que tenga vida social como cualquier joven'."
          },
          {
            "q": "Te incomoda que tu hijo/a hable con un tono de voz monótono en las llamadas familiares.",
            "good": "Separas tu incomodidad de la idea de que algo anda mal en él/ella.",
            "bad": "Le pides que 'ponga más entusiasmo en la voz' cuando habla con la familia."
          },
          {
            "q": "Esperas que tu hijo/a pequeño/a quiera compartir sus juguetes espontáneamente con otros niños.",
            "good": "Reconoces que compartir puede costarle más y no es un signo de mal carácter.",
            "bad": "Lo obligas a prestar sus juguetes 'para que aprenda a compartir como todos'."
          },
          {
            "q": "Piensas que hablar solo/a en voz baja mientras juega es preocupante.",
            "good": "Te informas y reconoces que el habla autodirigida puede ser parte de su forma de procesar.",
            "bad": "Le dices que 'deje de hablar solo' porque 'se ve raro'."
          },
          {
            "q": "Te preocupa que tu hijo/a adolescente no quiera tener pareja romántica todavía.",
            "good": "Reconoces que el interés romántico en su propio tiempo no es un retraso a corregir.",
            "bad": "Le insinúas que 'ya debería estar saliendo con alguien' a su edad."
          },
          {
            "q": "Esperas que tu hijo/a disfrute los deportes de equipo por el compañerismo.",
            "good": "Aceptas que puede preferir el movimiento individual sin que eso sea una carencia social.",
            "bad": "Lo inscribes igual en el equipo 'para que aprenda a trabajar en grupo'."
          },
          {
            "q": "Te incomoda que tu hijo/a no quiera sonreír para la foto familiar de fin de año.",
            "good": "Reconoces que su expresión facial en fotos no define su bienestar real.",
            "bad": "Insistes varias veces en que sonría 'como se debe' hasta lograrlo."
          },
          {
            "q": "Piensas que necesitar el mismo peluche a los diez años es 'demasiado infantil'.",
            "good": "Cuestionas de dónde viene esa idea de edad límite y respetas su necesidad actual.",
            "bad": "Le retiras el peluche porque 'ya no tiene edad para eso'."
          },
          {
            "q": "Te preocupa que tu hijo/a no quiera opinar en los debates de sobremesa familiares.",
            "good": "Reconoces que participar en voz alta no es la única forma de estar presente e involucrado.",
            "bad": "Lo presionas a dar su opinión 'para que se anime como los demás'."
          },
          {
            "q": "Esperas que tu hijo/a pruebe con entusiasmo la comida típica de un país que visitan.",
            "good": "Aceptas que su cautela alimentaria en viajes es parte de su perfil sensorial, no mala educación.",
            "bad": "Le insistes en probar todo 'para no quedar mal' frente a los anfitriones."
          },
          {
            "q": "Piensas que un adolescente 'debería' querer sacar la licencia de conducir apenas puede.",
            "good": "Reconoces que el ritmo para asumir esa independencia puede variar sin ser un atraso.",
            "bad": "Le presionas a tramitar la licencia 'porque ya todos sus amigos la tienen'."
          },
          {
            "q": "Te incomoda que tu hijo/a evite las fiestas de fin de año con muchos invitados.",
            "good": "Separas tu propia expectativa social del bienestar real que él/ella necesita.",
            "bad": "Lo obligas a quedarse toda la fiesta 'porque hay que ser sociable en Navidad'."
          },
          {
            "q": "Esperas que tu hijo/a pequeño/a te cuente su día espontáneamente al salir del colegio.",
            "good": "Aceptas que puede necesitar tiempo y silencio antes de poder compartir, sin forzarlo.",
            "bad": "Le exiges que hable de inmediato porque 'los niños normales cuentan su día'."
          },
          {
            "q": "Piensas que necesitar que le repitan una instrucción varias veces es 'no escuchar'.",
            "good": "Reconoces que el procesamiento auditivo puede requerir repetición sin ser falta de atención.",
            "bad": "Le dices que 'nunca escucha' y subes el tono cada vez que repites."
          },
          {
            "q": "Te preocupa que tu hijo/a adolescente pase mucho tiempo en su cuarto en vez de con la familia.",
            "good": "Consideras que ese tiempo a solas puede ser su forma de recargarse, no rechazo familiar.",
            "bad": "Le exiges 'bajar más' porque 'aislarse tanto no es sano'."
          },
          {
            "q": "Esperas que tu hijo/a entienda una indirecta social sin que se la expliquen.",
            "good": "Reconoces que comunicar de forma directa es más justo para su forma de procesar.",
            "bad": "Te frustras porque 'ya debería captar las indirectas a su edad'."
          },
          {
            "q": "Piensas que un niño que prefiere hablar con adultos antes que con niños de su edad tiene un problema.",
            "good": "Consideras que puede sentirse más cómodo con esas conversaciones sin que sea preocupante.",
            "bad": "Le insistes en jugar con niños de su edad 'porque así corresponde'."
          },
          {
            "q": "Te incomoda que tu hijo/a no quiera abrazar a los abuelos al llegar de visita.",
            "good": "Respetas su límite de contacto físico y ofreces un saludo alternativo, sin obligarlo.",
            "bad": "Le dices 'dale un abrazo a la abuela' delante de todos hasta que cede."
          },
          {
            "q": "Esperas que tu hijo/a adulto/a joven tenga un trabajo de oficina tradicional de tiempo completo.",
            "good": "Reconoces que el bienestar laboral puede lograrse fuera de ese molde específico.",
            "bad": "Le insistes en buscar 'un trabajo serio y estable' descartando otras opciones."
          },
          {
            "q": "Piensas que necesitar auriculares en una fiesta familiar es 'antisocial'.",
            "good": "Reconoces que es una herramienta de regulación sensorial, no un rechazo a la familia.",
            "bad": "Le pides que se los quite 'porque parece que no quiere estar con nosotros'."
          },
          {
            "q": "Te preocupa que tu hijo/a no quiera aprender a manejar redes sociales como sus compañeros.",
            "good": "Aceptas que su interés por la tecnología social puede ser distinto sin que sea un atraso.",
            "bad": "Le insistes en abrir cuentas 'para que no quede afuera de su generación'."
          },
          {
            "q": "Esperas que un niño pequeño juegue a las peleas o luchas como otros niños de su edad.",
            "good": "Reconoces que su desinterés por ese tipo de juego es simplemente una preferencia, no debilidad.",
            "bad": "Lo empujas a jugar bruscamente 'para que sea más varonil o fuerte'."
          },
          {
            "q": "Piensas que evitar el contacto visual en videollamadas familiares es descortesía.",
            "good": "Reconoces que puede procesar mejor la conversación sin mirar directamente la pantalla.",
            "bad": "Le insistes en 'mirar a la cámara' durante toda la llamada."
          },
          {
            "q": "Te incomoda que tu hijo/a no disfrute de deportes de comparación o competencia.",
            "good": "Valoras que puede disfrutar el movimiento sin necesidad de competir contra otros.",
            "bad": "Lo inscribes en competencias igual 'para que aprenda a ganar y perder'."
          },
          {
            "q": "Esperas que tu hijo/a necesite el mismo asiento en la mesa siempre porque 'ya se acostumbrará' a cambiar.",
            "good": "Reconoces que ese lugar fijo le da una previsibilidad real y necesaria, no un capricho.",
            "bad": "Le cambias el lugar a propósito 'para que se flexibilice'."
          },
          {
            "q": "Piensas que un adolescente 'debería' querer un trabajo de medio tiempo como sus amigos.",
            "good": "Consideras que su ritmo hacia la independencia laboral puede ser distinto sin ser un fracaso.",
            "bad": "Le presionas a buscar trabajo 'porque a su edad ya deberías estar generando dinero'."
          },
          {
            "q": "Te preocupa que tu hijo/a se quede en silencio largos ratos durante una sesión de terapia.",
            "good": "Reconoces que el silencio también puede ser parte de su proceso, no falta de compromiso.",
            "bad": "Le exiges 'hablar más' en terapia porque 'para eso estás pagando'."
          },
          {
            "q": "Esperas que tu hijo/a disfrute actividades multitudinarias como conciertos o ferias.",
            "good": "Aceptas que su forma de disfrutar puede requerir menos estímulo y multitud.",
            "bad": "Lo llevas igual esperando que 'se acostumbre si va seguido'."
          },
          {
            "q": "Piensas que necesitar permiso explícito para cada decisión pequeña es inmadurez.",
            "good": "Reconoces que la necesidad de claridad explícita reduce su ansiedad, no señala inmadurez.",
            "bad": "Le dices que 'ya debería decidir solo cosas tan simples'."
          },
          {
            "q": "Te incomoda que tu hijo/a no capte un chiste visual o una broma gestual en la tele.",
            "good": "Le explicas el chiste con gusto sin juzgar que 'no lo entendió'.",
            "bad": "Te burlas frente a otros de que 'nunca entiende nada'."
          },
          {
            "q": "Esperas que tu hijo/a pequeño/a juegue en el parque con otros niños en vez de solo/a en un rincón.",
            "good": "Reconoces que jugar solo/a también es una forma legítima de disfrutar el parque.",
            "bad": "Lo empujas hacia el grupo de niños diciendo que 'así no se hacen amigos'."
          },
          {
            "q": "Piensas que evitar deportes de contacto físico es cobardía.",
            "good": "Reconoces que su elección responde a preferencia sensorial, no a falta de valentía.",
            "bad": "Le insistes en anotarse en un deporte de contacto 'para que se haga más fuerte'."
          },
          {
            "q": "Te preocupa que tu hijo/a adolescente no quiera compartir su vida en redes sociales.",
            "good": "Respetas su elección de privacidad como una decisión válida y no un problema social.",
            "bad": "Le insistes en publicar más 'porque así se hace amigos hoy en día'."
          },
          {
            "q": "Esperas que un hijo pequeño disfrute Halloween disfrazándose y saliendo a pedir dulces.",
            "good": "Ofreces alternativas si la actividad tradicional le resulta abrumadora, sin imponerla.",
            "bad": "Lo obligas a participar completo 'porque a todos los niños les encanta Halloween'."
          },
          {
            "q": "Piensas que tu hijo/a 'debería' entender las reglas no escritas del vestuario social en cada evento.",
            "good": "Le explicas explícitamente qué se espera en cada ocasión en vez de asumir que lo intuirá.",
            "bad": "Te avergüenzas de su ropa 'inapropiada' sin haberle explicado antes qué se esperaba."
          },
          {
            "q": "Te incomoda que tu hijo/a necesite listas escritas para tareas simples de la casa.",
            "good": "Reconoces que ese apoyo visual es una herramienta legítima, no una señal de déficit.",
            "bad": "Le dices que 'ya debería acordarse solo, sin listas, a su edad'."
          },
          {
            "q": "Esperas que tu hijo/a disfrute el fútbol o el deporte que sigue el resto de la familia.",
            "good": "Aceptas que sus intereses deportivos pueden ser distintos sin que eso decepcione tu vínculo con él/ella.",
            "bad": "Le insistes en 'hacerse hincha' del mismo equipo familiar por tradición."
          },
          {
            "q": "Piensas que el bajo interés de tu hijo/a adolescente por el teléfono es raro para su generación.",
            "good": "Reconoces que no encajar en ese patrón generacional no es un problema a resolver.",
            "bad": "Le insistes en 'usarlo más' porque 'todos los jóvenes están pegados al celular'."
          },
          {
            "q": "Te preocupa que tu hijo/a no quiera jugar a disfrazarse o representar personajes.",
            "good": "Aceptas que el juego imaginativo puede no ser su forma preferida de disfrutar.",
            "bad": "Le compras disfraces igual insistiendo en que 'juegue como los demás niños'."
          },
          {
            "q": "Esperas que un hijo adulto joven quiera formar pareja y casarse en algún momento.",
            "good": "Reconoces que su plan de vida puede no incluir esos hitos convencionales y aun así ser pleno.",
            "bad": "Le preguntas insistentemente 'cuándo vas a sentar cabeza' comparándolo con sus primos."
          },
          {
            "q": "Piensas que necesitar el mismo trayecto exacto al colegio todos los días es una manía a corregir.",
            "good": "Reconoces que esa previsibilidad reduce su ansiedad diaria de forma real.",
            "bad": "Cambias la ruta a propósito 'para que se acostumbre a lo distinto'."
          },
          {
            "q": "Te incomoda que tu hijo/a no muestre curiosidad por probar restaurantes nuevos en un viaje.",
            "good": "Planificas alternativas conocidas para él/ella sin forzar la experiencia nueva.",
            "bad": "Insistes en que 'tiene que abrirse a cosas nuevas' en cada comida del viaje."
          },
          {
            "q": "Esperas que tu hijo/a exprese alegría visible al abrir un regalo, como el resto de primos.",
            "good": "Reconoces que su expresión de alegría puede ser más contenida sin ser menos genuina.",
            "bad": "Le dices 'muéstrate más feliz' delante de la familia que regaló."
          },
          {
            "q": "Piensas que jugar con niños más pequeños que él/ella es un signo de inmadurez.",
            "good": "Reconoces que puede sentirse más cómodo con esa dinámica sin que sea un retroceso.",
            "bad": "Le prohíbes jugar con los más chicos 'para que se junte con los de su edad'."
          },
          {
            "q": "Te preocupa que tu hijo/a no quiera compartir su cuarto con visitas en una reunión familiar.",
            "good": "Respetas su espacio como una necesidad legítima, no un gesto egoísta.",
            "bad": "Le exiges ceder su cuarto 'porque así se comparte en familia'."
          },
          {
            "q": "Esperas que un adolescente disfrute discutir política o actualidad como el resto de adultos en la mesa.",
            "good": "Aceptas que su interés en esos temas puede ser distinto sin que sea un déficit social.",
            "bad": "Lo presionas a opinar 'para que aprenda a debatir como un adulto'."
          },
          {
            "q": "Piensas que necesitar el mismo menú en cada comida es 'una manía de crianza mal manejada'.",
            "good": "Reconoces que la selectividad alimentaria puede tener una base sensorial real.",
            "bad": "Culpas tu propia crianza y fuerzas variedad en cada comida para 'corregirlo'."
          },
          {
            "q": "Te incomoda que tu hijo/a hable con mucho entusiasmo de temas que a los demás no interesan.",
            "good": "Reconoces que compartir su interés intenso es su forma genuina de vincularse.",
            "bad": "Le pides que 'cambie de tema' porque 'aburre a todo el mundo'."
          },
          {
            "q": "Esperas que tu hijo/a se emocione igual que tú en un funeral familiar.",
            "good": "Aceptas que su procesamiento del duelo puede verse distinto sin ser frialdad.",
            "bad": "Le dices que 'no le importó nada' porque no lloró como esperabas."
          },
          {
            "q": "Piensas que tu hijo/a 'debería' disfrutar de los deportes de invierno como el resto de la familia.",
            "good": "Reconoces que su sensibilidad al frío o al movimiento puede ser distinta, sin forzarlo.",
            "bad": "Lo obligas a esquiar 'porque en esta familia todos esquían'."
          },
          {
            "q": "Te preocupa que un hijo adulto joven prefiera vivir con sus padres más tiempo del esperado.",
            "good": "Evalúas su bienestar real en vez de compararlo con una edad social estándar de independencia.",
            "bad": "Le presionas a irse 'porque a tu edad ya deberías estar solo'."
          },
          {
            "q": "Esperas que tu hijo/a pequeño/a disfrute los juegos de manos y canciones infantiles grupales.",
            "good": "Aceptas que puede preferir observar desde el margen sin participar activamente.",
            "bad": "Lo tomas de la mano a la fuerza para que participe 'como los demás niños'."
          },
          {
            "q": "Piensas que necesitar el mismo horario de sueño incluso en vacaciones es rigidez excesiva.",
            "good": "Reconoces que mantener el horario le da estabilidad real durante el viaje.",
            "bad": "Rompes su horario a propósito 'porque en vacaciones hay que relajar las reglas'."
          },
          {
            "q": "Te incomoda que tu hijo/a no quiera compartir detalles de su vida amorosa contigo.",
            "good": "Respetas su privacidad como una elección válida y no un distanciamiento preocupante.",
            "bad": "Le insistes en que te cuente todo 'porque en esta familia no hay secretos'."
          },
          {
            "q": "Esperas que tu hijo/a disfrute ir de compras de ropa como una salida divertida.",
            "good": "Reconoces que la experiencia sensorial de probadores y multitudes puede resultarle agotadora.",
            "bad": "Lo arrastras a varias tiendas seguidas esperando que 'le tome el gusto'."
          },
          {
            "q": "Piensas que tu hijo/a adolescente 'debería' querer un grupo grande de amigos en el colegio.",
            "good": "Valoras la calidad de sus vínculos actuales sin medirlos por cantidad.",
            "bad": "Le preguntas insistentemente por qué 'no tiene más amigos' en cada charla."
          },
          {
            "q": "Te preocupa que tu hijo/a no reaccione con entusiasmo visible ante un logro deportivo propio.",
            "good": "Reconoces que su satisfacción interna puede no mostrarse con gestos efusivos.",
            "bad": "Le dices que 'debería estar más contento' por algo que a ti te emociona tanto."
          },
          {
            "q": "Esperas que un niño pequeño disfrute las atracciones ruidosas de un parque de diversiones.",
            "good": "Planificas paradas de descanso sensorial en vez de forzar la exposición completa.",
            "bad": "Insistes en subirlo a todos los juegos 'porque para eso vinieron'."
          },
          {
            "q": "Piensas que necesitar guiones o frases preparadas para conversaciones sociales es artificial.",
            "good": "Reconoces que esos apoyos le permiten participar socialmente con menos ansiedad.",
            "bad": "Le dices que 'hable natural, sin prepararse tanto'."
          },
          {
            "q": "Te incomoda que tu hijo/a no quiera sentarse a la mesa con toda la familia extendida en Navidad.",
            "good": "Ofreces un espacio alternativo cómodo cerca, sin forzar su presencia total en la mesa.",
            "bad": "Lo obligas a sentarse ahí 'porque en Navidad se come todos juntos'."
          },
          {
            "q": "Esperas que tu hijo/a disfrute aprender a bailar en una fiesta familiar.",
            "good": "Aceptas que el baile grupal puede no ser su forma de disfrute, sin insistir.",
            "bad": "Lo sacas a bailar a la fuerza 'para que se suelte un poco'."
          },
          {
            "q": "Piensas que un hijo adulto joven que prefiere un trabajo manual en vez de uno intelectual 'desperdicia su potencial'.",
            "good": "Reconoces que su bienestar y satisfacción laboral no dependen del tipo de trabajo elegido.",
            "bad": "Le insistes en 'aspirar a algo mejor' descalificando su elección real."
          },
          {
            "q": "Te preocupa que tu hijo/a no quiera participar en la actuación escolar frente al público.",
            "good": "Buscas junto al colegio una forma alternativa de participar que respete su comodidad.",
            "bad": "Le exiges subir al escenario 'porque todos los niños deben participar'."
          },
          {
            "q": "Esperas que tu hijo/a mantenga el mismo círculo de amigos de la infancia toda la vida.",
            "good": "Aceptas que sus vínculos pueden cambiar con el tiempo sin que eso sea preocupante.",
            "bad": "Le insistes en 'no perder' esas amistades como si fuera obligatorio mantenerlas."
          },
          {
            "q": "Piensas que tu hijo/a 'debería' disfrutar más de las vacaciones en la playa con la familia extendida.",
            "good": "Reconoces que la sobreestimulación sensorial de la playa puede pesar más que el disfrute social.",
            "bad": "Le dices que 'se está quejando por gusto' de un lugar que 'a todos les encanta'."
          },
          {
            "q": "Te incomoda que tu hijo/a no quiera hablar de sus sentimientos apenas te ve después del colegio.",
            "good": "Le das tiempo y espacio antes de esperar que comparta, respetando su ritmo emocional.",
            "bad": "Insistes en preguntar 'qué te pasa' de forma repetida hasta obtener respuesta."
          },
          {
            "q": "Esperas que un adolescente disfrute manejar dinero y hacer compras solo como sus pares.",
            "good": "Reconoces que su ritmo para asumir esa independencia puede requerir más apoyo, sin ser un atraso.",
            "bad": "Lo dejas solo con esa responsabilidad 'porque a su edad ya debería poder'."
          },
          {
            "q": "Piensas que necesitar el mismo tipo de saludo (choque de manos en vez de abrazo) es frialdad.",
            "good": "Reconoces que ese saludo es su forma genuina y cómoda de conectar con otros.",
            "bad": "Le insistes en abrazar a las visitas 'porque un choque de manos es muy frío'."
          },
          {
            "q": "Te preocupa que tu hijo/a no quiera ir a un campamento de verano como sus compañeros.",
            "good": "Evalúas si esa actividad realmente encaja con sus necesidades, sin presionarlo por 'lo típico del verano'.",
            "bad": "Lo anotas igual esperando que 'se le pase la resistencia una vez allá'."
          },
          {
            "q": "Esperas que tu hijo/a se entusiasme con la misma serie o juego que sus primos.",
            "good": "Aceptas que sus intereses pueden ser distintos sin que eso lo aleje de la familia.",
            "bad": "Le insistes en 'ponerse al día' con lo que ven los primos para 'tener de qué hablar'."
          },
          {
            "q": "Piensas que un niño que necesita que le avisen con anticipación de una visita al médico es exagerado.",
            "good": "Reconoces que la anticipación reduce genuinamente su ansiedad ante lo desconocido.",
            "bad": "Le avisas de último momento 'porque no hay para qué hacer drama antes'."
          },
          {
            "q": "Te incomoda que tu hijo/a adolescente no quiera festejar su cumpleaños con una fiesta grande.",
            "good": "Le preguntas qué celebración prefiere y la respetas, aunque sea distinta a la que imaginabas.",
            "bad": "Organizas la fiesta grande igual porque 'así se festeja bien un cumpleaños'."
          },
          {
            "q": "Te preocupa que tu hijo/a no quiera compartir su cuarto de hospital con la energía habitual.",
            "good": "Reconoces que el ambiente médico puede sobrecargarlo más de lo visible, y ajustas tu expectativa.",
            "bad": "Le pides que 'sea valiente y sonría' para las visitas en el hospital."
          },
          {
            "q": "Esperas que tu hijo/a adulto/a joven celebre las fechas festivas exactamente como se celebraban en tu infancia.",
            "good": "Aceptas que puede construir sus propias formas de celebrar, distintas a la tradición familiar.",
            "bad": "Le exiges seguir las mismas costumbres 'porque así se ha hecho siempre en la familia'."
          }
        ]
      },
      {
        "slug": "tolerar-diferencias",
        "nombre": "Tolerar Diferencias",
        "emoji": "🌈",
        "descripcion": "Aceptar formas distintas de jugar, hablar, sentir y relacionarse.",
        "situaciones": [
          {
            "q": "Tu hijo/a organiza sus juguetes por color en vez de jugar con ellos de forma convencional.",
            "good": "Aceptas esa forma de juego como válida y te interesas en ella.",
            "bad": "Le enseñas insistentemente 'cómo se juega bien' con esos juguetes."
          },
          {
            "q": "Tu hijo/a prefiere hablar de un tema técnico antes que de emociones.",
            "good": "Aceptas que esa es su forma natural de conectar contigo.",
            "bad": "Insistes en que hable de sentimientos como tú preferirías."
          },
          {
            "q": "Tu hijo/a se relaciona con mascotas más fácilmente que con personas.",
            "good": "Valoras esa conexión como una forma legítima de vínculo y regulación.",
            "bad": "Le dices que 'debería' priorizar hacer amigos humanos."
          },
          {
            "q": "Tu hijo/a prefiere rutinas repetitivas para divertirse (ver el mismo video muchas veces).",
            "good": "Aceptas que la repetición le brinda calma y previsibilidad.",
            "bad": "Le impones variedad porque 'ya es aburrido ver lo mismo'."
          },
          {
            "q": "Tu hijo/a expresa afecto ayudando con tareas prácticas en vez de con palabras.",
            "good": "Reconoces esa acción como su lenguaje de cariño particular.",
            "bad": "Sientes que 'no te quiere lo suficiente' porque no lo dice con palabras."
          },
          {
            "q": "Tu hijo/a se mueve de forma inusual (aletea, salta) cuando está feliz.",
            "good": "Aceptas esa expresión corporal de alegría tal como es.",
            "bad": "Le pides que se controle porque 'llama la atención'."
          },
          {
            "q": "Tu hijo/a prefiere jugar videojuegos en solitario en vez de deportes grupales.",
            "good": "Valoras esa preferencia como una forma legítima de disfrute y descanso.",
            "bad": "Insistes en apuntarlo a deportes grupales 'para que socialice'."
          },
          {
            "q": "Tu hijo/a tiene un sentido del humor distinto al del resto de la familia.",
            "good": "Te ríes y disfrutas de su humor particular, aunque sea diferente.",
            "bad": "Le dices que sus chistes 'no tienen gracia' comparándolo con otros."
          },
          {
            "q": "Tu hijo/a prefiere el silencio a la conversación en la cena familiar.",
            "good": "Aceptas que su forma de estar presente no requiere hablar todo el tiempo.",
            "bad": "Lo presionas a hablar más 'como el resto de la familia'."
          },
          {
            "q": "Tu hijo/a organiza su tiempo libre con horarios muy estrictos.",
            "good": "Respetas esa estructura como parte de su forma de sentirse seguro/a.",
            "bad": "Le insistes en que sea 'más espontáneo/a como los demás'."
          },
          {
            "q": "Tu hijo/a prefiere amistades de otra edad (mayores o menores) a las de su grupo etario.",
            "good": "Aceptas esos vínculos como válidos según intereses compartidos reales.",
            "bad": "Le exiges que solo se relacione con niños de su misma edad."
          },
          {
            "q": "Tu hijo/a se entusiasma hablando largamente de datos y estadísticas de su interés.",
            "good": "Escuchas con interés genuino, aunque el tema no te apasione a ti.",
            "bad": "Le dices que 'nadie quiere escuchar tantos detalles'."
          },
          {
            "q": "Tu hijo/a prefiere anticipar todo con planes muy detallados antes de una salida.",
            "good": "Aceptas que esa anticipación es su forma de manejar la incertidumbre.",
            "bad": "Le dices que 'no hace falta planear tanto', restando su necesidad."
          },
          {
            "q": "Tu hijo/a muestra afecto con contacto físico breve, no abrazos largos.",
            "good": "Respetas ese nivel y forma de contacto como suficiente y válido.",
            "bad": "Insistes en abrazos largos porque 'así se hace en la familia'."
          },
          {
            "q": "Tu hijo/a prefiere comunicarse por escrito antes que hablar cara a cara.",
            "good": "Aceptas y facilitas esa vía de comunicación cuando es posible.",
            "bad": "Insistes en que hable directamente 'porque es lo normal'."
          },
          {
            "q": "Tu hijo/a disfruta coleccionar y clasificar objetos de forma meticulosa.",
            "good": "Valoras esa afición como una expresión legítima de su forma de disfrutar.",
            "bad": "Le dices que 'eso no es un hobby de verdad'."
          },
          {
            "q": "Tu hijo/a prefiere ambientes silenciosos a fiestas ruidosas para divertirse.",
            "good": "Organizas celebraciones que respeten esa preferencia sensorial.",
            "bad": "Insistes en fiestas ruidosas porque 'así se celebra normalmente'."
          },
          {
            "q": "Tu hijo/a tiene una forma particular de resolver problemas, distinta a la tuya.",
            "good": "Le das espacio para resolver a su manera, aunque no sea la que tú harías.",
            "bad": "Le impones tu método porque 'es la forma correcta de hacerlo'."
          },
          {
            "q": "Tu hijo/a prefiere quedarse en casa antes que salir los fines de semana.",
            "good": "Aceptas esa preferencia como una necesidad genuina de descanso.",
            "bad": "Lo obligas a salir 'para que no se aísle', ignorando su preferencia real."
          },
          {
            "q": "Tu hijo/a expresa entusiasmo de forma intensa y poco convencional (gritos, saltos).",
            "good": "Celebras junto a él/ella esa forma auténtica de expresar alegría.",
            "bad": "Le pides que se calme porque 'llama demasiado la atención'."
          },
          {
            "q": "Tu hijo/a bebé se calma más con luces tenues que con juguetes que hacen ruido y colores brillantes.",
            "good": "Adaptas el entorno a lo que realmente lo/la calma, en vez del estímulo 'típico' de bebé.",
            "bad": "Le compras juguetes ruidosos insistiendo porque 'a los bebés les encanta eso'."
          },
          {
            "q": "Tu hijo/a de primaria prefiere leer el mismo libro una y otra vez en vez de variar de lecturas.",
            "good": "Aceptas que la repetición le da placer y seguridad genuina en la lectura.",
            "bad": "Le exiges elegir libros distintos porque 'ya se lo sabe de memoria'."
          },
          {
            "q": "Tu hijo/a adolescente prefiere pasar el verano organizando su colección antes que socializando.",
            "good": "Valoras esa forma de disfrute como legítima, sin compararla con lo que 'debería' hacer un adolescente.",
            "bad": "Le insistes en salir más 'para que no desperdicie el verano encerrado'."
          },
          {
            "q": "Tu hijo/a adulto/a joven prefiere comer siempre en el mismo restaurante cuando salen.",
            "good": "Aceptas esa previsibilidad como parte de su comodidad, sin presionar la variedad.",
            "bad": "Insistes en probar lugares nuevos cada vez 'para que se anime a algo distinto'."
          },
          {
            "q": "Tu hijo/a se relaciona mejor escribiendo notas que hablando cara a cara contigo.",
            "good": "Aceptas y usas ese canal como una forma válida y cercana de comunicación.",
            "bad": "Le exiges que 'te hable de frente como se debe' en vez de escribir."
          },
          {
            "q": "Tu hijo/a en el colegio prefiere trabajar en proyectos individuales en vez de en grupo.",
            "good": "Respetas esa preferencia y buscas con el colegio adaptaciones razonables.",
            "bad": "Insistes en que se una al grupo 'porque así se aprende a trabajar en equipo'."
          },
          {
            "q": "Tu hijo/a se entretiene horas observando el mismo fenómeno (agua cayendo, ruedas girando).",
            "good": "Ves esa observación como una forma legítima de concentración y disfrute.",
            "bad": "Le interrumpes constantemente diciendo que 'eso no es un juego de verdad'."
          },
          {
            "q": "Tu hijo/a prefiere celebrar los logros en privado, sin anuncios ni aplausos frente a otros.",
            "good": "Respetas esa forma discreta de celebrar en vez de imponer un festejo público.",
            "bad": "Organizas un festejo con toda la familia igual, ignorando su incomodidad visible."
          },
          {
            "q": "Tu hijo/a adolescente prefiere vestir siempre ropa cómoda y sin diseños llamativos.",
            "good": "Aceptas que su elección de ropa prioriza el confort sensorial sobre la estética social.",
            "bad": "Le insistes en usar ropa 'más a la moda' para las salidas familiares."
          },
          {
            "q": "Tu hijo/a se comunica con más fluidez a través de dibujos que con palabras.",
            "good": "Incorporas el dibujo como un canal legítimo de expresión y conversación.",
            "bad": "Le exiges 'explicarlo con palabras' descartando lo que dibuja."
          },
          {
            "q": "Tu hijo/a prefiere pasar el recreo caminando solo/a por el patio en vez de en grupo.",
            "good": "Aceptas que esa es su forma de descansar entre clases, sin ser motivo de alarma.",
            "bad": "Le pides al colegio que lo 'integren' al grupo aunque él/ella prefiera estar solo/a."
          },
          {
            "q": "Tu hijo/a expresa cariño regalándote objetos relacionados con su interés especial.",
            "good": "Recibes esos regalos como una expresión genuina y valiosa de su afecto.",
            "bad": "Le dices que 'busque otra forma más normal de demostrar cariño'."
          },
          {
            "q": "Tu hijo/a prefiere jugar videojuegos de construcción en solitario antes que juegos multijugador.",
            "good": "Valoras ese tipo de juego como una forma legítima de creatividad y disfrute.",
            "bad": "Le insistes en jugar en línea con otros 'para que socialice mientras juega'."
          },
          {
            "q": "Tu hijo/a tiene rituales específicos antes de dormir que no quiere alterar.",
            "good": "Respetas esos rituales como parte de su regulación nocturna real.",
            "bad": "Le dices que 'ya no hace falta tanto ritual' y los interrumpes."
          },
          {
            "q": "Tu hijo/a prefiere ir de vacaciones al mismo lugar cada año en vez de explorar destinos nuevos.",
            "good": "Aceptas que la previsibilidad del lugar conocido le da un descanso genuino.",
            "bad": "Insistes en cambiar de destino 'porque siempre ir al mismo lugar es aburrido'."
          },
          {
            "q": "Tu hijo/a se entusiasma más con datos y números que con historias o ficción.",
            "good": "Sigues su interés genuino aunque no sea el tipo de lectura que tú preferirías.",
            "bad": "Le insistes en leer novelas 'porque los datos no desarrollan la imaginación'."
          },
          {
            "q": "Tu hijo/a prefiere comunicarse con emojis o imágenes antes que con frases largas.",
            "good": "Aceptas ese estilo de comunicación como válido y respondes en el mismo tono cuando es posible.",
            "bad": "Le exiges 'escribir bien, con oraciones completas' en cada mensaje."
          },
          {
            "q": "Tu hijo/a disfruta reorganizar los mismos objetos de su cuarto una y otra vez.",
            "good": "Reconoces esa actividad como una forma de calma y control sobre su entorno.",
            "bad": "Le dices que 'deje de perder el tiempo acomodando cosas' que ya están ordenadas."
          },
          {
            "q": "Tu hijo/a prefiere participar en actividades familiares desde un rincón tranquilo en vez de en el centro.",
            "good": "Aceptas su forma de participar a distancia como una presencia válida, no una ausencia.",
            "bad": "Lo empujas al centro de la actividad 'para que se integre de verdad'."
          },
          {
            "q": "Tu hijo/a adulto/a joven prefiere trabajar de noche en vez de en horario diurno convencional.",
            "good": "Respetas que su ritmo de energía y concentración puede ser distinto al estándar.",
            "bad": "Le insistes en buscar un horario 'normal' porque 'trabajar de noche no es sano'."
          },
          {
            "q": "Tu hijo/a expresa entusiasmo repitiendo frases de una película que le gusta mucho.",
            "good": "Disfrutas con él/ella esa forma de expresión sin corregirla como 'rara'.",
            "bad": "Le dices que 'hable con sus propias palabras' en vez de citar la película."
          },
          {
            "q": "Tu hijo/a prefiere un cumpleaños tranquilo con dos personas en vez de una fiesta grande.",
            "good": "Organizas la celebración según su preferencia real, no según la costumbre familiar.",
            "bad": "Invitas a mucha gente igual porque 'un cumpleaños se festeja en grande'."
          },
          {
            "q": "Tu hijo/a se relaciona con un club o comunidad en línea sobre su interés especial.",
            "good": "Valoras esos vínculos digitales como amistades reales y significativas.",
            "bad": "Le dices que 'esos no son amigos de verdad' porque no los conoce en persona."
          },
          {
            "q": "Tu hijo/a prefiere estudiar escuchando el mismo tipo de sonido de fondo siempre.",
            "good": "Aceptas esa herramienta de concentración aunque no sea la que tú usarías.",
            "bad": "Le apagas el sonido insistiendo en que 'para estudiar se necesita silencio total'."
          },
          {
            "q": "Tu hijo/a se calma mordiendo o manipulando un objeto específico cuando está nervioso/a.",
            "good": "Permites ese objeto de regulación en la situación que lo necesite.",
            "bad": "Le quitas el objeto en público porque 'ya no tiene edad para eso'."
          },
          {
            "q": "Tu hijo/a prefiere participar en la conversación familiar solo cuando el tema le interesa.",
            "good": "Aceptas que su nivel de participación varía según el interés real, sin forzarlo siempre.",
            "bad": "Le exiges opinar en todos los temas 'para que participe como el resto'."
          },
          {
            "q": "Tu hijo/a organiza su ropa por textura en vez de por ocasión o clima.",
            "good": "Respetas ese criterio como una forma funcional y válida de organizarse.",
            "bad": "Le reordenas el clóset 'a la forma correcta' sin considerar su necesidad sensorial."
          },
          {
            "q": "Tu hijo/a adolescente prefiere pasar tiempo con adultos de la familia antes que con pares de su edad.",
            "good": "Aceptas esos vínculos intergeneracionales como relaciones genuinas y suficientes.",
            "bad": "Le insistes en 'hacer más amigos de su edad' descartando esos vínculos."
          },
          {
            "q": "Tu hijo/a expresa alegría corriendo en círculos o saltando repetidamente.",
            "good": "Celebras junto a él/ella esa expresión corporal auténtica de felicidad.",
            "bad": "Le pides que 'se quede quieto' porque 'llama la atención de los vecinos'."
          },
          {
            "q": "Tu hijo/a prefiere un menú de comida limitado y repetido antes que probar variedad constante.",
            "good": "Aceptas ese patrón alimentario como parte real de su perfil sensorial actual.",
            "bad": "Le fuerzas a variar el menú 'para que no sea tan quisquilloso'."
          },
          {
            "q": "Tu hijo/a se comunica con más comodidad a través de un dispositivo de voz o tablet.",
            "good": "Incorporas esa herramienta como un canal de comunicación tan válido como el habla.",
            "bad": "Insistes en que 'hable con su propia voz' descartando el dispositivo."
          },
          {
            "q": "Tu hijo/a prefiere jugar con un solo amigo en vez de un grupo grande en el recreo.",
            "good": "Valoras esa amistad profunda como suficiente, sin medirla por cantidad.",
            "bad": "Le insistes en 'juntarse con más niños' en vez de solo uno."
          },
          {
            "q": "Tu hijo/a se entusiasma explicando reglas y mecánicas de un juego con mucho detalle.",
            "good": "Escuchas con interés genuino esa forma de compartir su pasión.",
            "bad": "Le interrumpes diciendo que 'nadie necesita tanto detalle'."
          },
          {
            "q": "Tu hijo/a prefiere las reuniones familiares cortas y estructuradas antes que largas y espontáneas.",
            "good": "Planificas encuentros con horario claro que respeten esa preferencia.",
            "bad": "Extiendes las reuniones sin avisar 'porque en familia no hay horarios'."
          },
          {
            "q": "Tu hijo/a se relaciona con su hermano/a principalmente a través de un interés compartido, no de charla cotidiana.",
            "good": "Reconoces ese vínculo basado en intereses como una forma genuina de cercanía.",
            "bad": "Les exiges 'hablar de otras cosas' para que 'sean hermanos de verdad'."
          },
          {
            "q": "Tu hijo/a prefiere resolver un conflicto por escrito antes que discutirlo en el momento.",
            "good": "Aceptas esa vía como legítima para procesar y comunicar su punto de vista.",
            "bad": "Le exiges 'resolverlo hablando cara a cara ahora mismo'."
          },
          {
            "q": "Tu hijo/a disfruta memorizar horarios, mapas o rutas con gran detalle.",
            "good": "Valoras ese interés como una fortaleza cognitiva genuina.",
            "bad": "Le dices que 'para qué se aprende cosas tan inútiles de memoria'."
          },
          {
            "q": "Tu hijo/a prefiere ver una película con subtítulos aunque entienda el idioma hablado.",
            "good": "Aceptas esa preferencia como una forma de procesar mejor la información.",
            "bad": "Le quitas los subtítulos insistiendo en que 'así no se aprende a escuchar bien'."
          },
          {
            "q": "Tu hijo/a se calma repitiendo una misma canción varias veces seguidas en el auto.",
            "good": "Permites la repetición como parte de su regulación durante el trayecto.",
            "bad": "Cambias la canción a la fuerza porque 'ya la escuchamos demasiadas veces'."
          },
          {
            "q": "Tu hijo/a prefiere trabajar en el jardín o con plantas antes que en actividades sociales.",
            "good": "Reconoces esa actividad como una forma válida de disfrute y conexión con el entorno.",
            "bad": "Le insistes en salir con amigos 'en vez de perder el tiempo con plantas'."
          },
          {
            "q": "Tu hijo/a adulto/a joven prefiere vivir en un lugar pequeño y tranquilo antes que en una ciudad activa.",
            "good": "Respetas esa elección de vida como parte de su bienestar sensorial real.",
            "bad": "Le insistes en mudarse a la ciudad 'para tener más oportunidades como todos'."
          },
          {
            "q": "Tu hijo/a expresa afecto imitando gestos o frases tuyas que le gustaron.",
            "good": "Reconoces esa imitación como una forma genuina de vincularse contigo.",
            "bad": "Le dices que 'deje de copiarte' y que 'sea original'."
          },
          {
            "q": "Tu hijo/a prefiere un abrazo firme y breve antes que uno largo y suave.",
            "good": "Aceptas ese tipo específico de contacto como el que realmente le reconforta.",
            "bad": "Insistes en abrazarlo/a de la forma que a ti te gustaría recibir."
          },
          {
            "q": "Tu hijo/a se entretiene desarmando y armando objetos mecánicos repetidamente.",
            "good": "Valoras esa curiosidad práctica como un talento, no como travesura.",
            "bad": "Le regañas por 'romper cosas' sin ver el interés genuino detrás."
          },
          {
            "q": "Tu hijo/a prefiere caminar en zigzag o con pasos particulares en vez de en línea recta.",
            "good": "Aceptas esa forma de moverse como parte de su regulación corporal.",
            "bad": "Le corriges constantemente la forma de caminar 'para que camine normal'."
          },
          {
            "q": "Tu hijo/a se comunica mejor a través del arte o la música que hablando de sus sentimientos.",
            "good": "Aceptas y fomentas esos canales como formas válidas de expresión emocional.",
            "bad": "Le exiges 'poner en palabras' lo que ya está expresando con otro lenguaje."
          },
          {
            "q": "Tu hijo/a prefiere ayudar en tareas domésticas específicas y repetitivas antes que variar de tareas.",
            "good": "Respetas esa preferencia asignándole tareas fijas que disfrute genuinamente.",
            "bad": "Le cambias la tarea seguido 'para que no se aburra', ignorando su preferencia."
          },
          {
            "q": "Tu hijo/a disfruta las conversaciones telefónicas cortas y directas, sin charla trivial.",
            "good": "Aceptas ese estilo de comunicación eficiente como válido y suficiente.",
            "bad": "Le insistes en 'hablar más' o 'preguntar cómo está el otro' por protocolo social."
          },
          {
            "q": "Tu hijo/a prefiere un festejo familiar sin sorpresas, con el itinerario conocido de antemano.",
            "good": "Le compartes el plan con anticipación para que disfrute con tranquilidad.",
            "bad": "Mantienes el plan en secreto 'porque las sorpresas son parte de la diversión'."
          },
          {
            "q": "Tu hijo/a adolescente prefiere pasar tiempo con su mascota antes que con amigos humanos.",
            "good": "Valoras ese vínculo con la mascota como una fuente genuina de compañía y regulación.",
            "bad": "Le insistes en 'salir más con gente' minimizando ese vínculo real."
          },
          {
            "q": "Tu hijo/a prefiere aprender un instrumento de forma autodidacta antes que en clases grupales.",
            "good": "Apoyas esa forma de aprendizaje individual como igualmente válida.",
            "bad": "Le insistes en tomar clases grupales 'porque así se aprende mejor'."
          },
          {
            "q": "Tu hijo/a se relaciona con el mundo principalmente a través de sus intereses especializados.",
            "good": "Usas esos intereses como puerta de entrada genuina a la conexión con él/ella.",
            "bad": "Le pides que 'tenga intereses más variados como los demás niños'."
          },
          {
            "q": "Tu hijo/a prefiere una rutina de ejercicio en solitario antes que en un gimnasio con gente.",
            "good": "Respetas esa preferencia como una forma válida de cuidar su cuerpo.",
            "bad": "Le insistes en ir al gimnasio 'para que también socialice haciendo ejercicio'."
          },
          {
            "q": "Tu hijo/a expresa su identidad con una forma de vestir poco convencional para su entorno.",
            "good": "Apoyas su expresión personal aunque no coincida con las normas del entorno.",
            "bad": "Le pides que 'se vista más normal' para no llamar la atención."
          },
          {
            "q": "Tu hijo/a prefiere comunicarse con la familia extendida por videollamadas cortas y programadas.",
            "good": "Aceptas ese formato como suficiente para mantener el vínculo familiar.",
            "bad": "Insistes en llamadas largas y espontáneas 'porque así se cuida a la familia'."
          },
          {
            "q": "Tu hijo/a disfruta clasificar sus emociones con colores o números en vez de nombrarlas directamente.",
            "good": "Aceptas ese sistema propio como una herramienta válida de autoconocimiento emocional.",
            "bad": "Le exiges 'decir la emoción con la palabra correcta' descartando su sistema."
          },
          {
            "q": "Tu hijo/a prefiere jugar en el suelo con las piernas cruzadas de una forma particular durante horas.",
            "good": "Aceptas esa postura como su forma cómoda de jugar y concentrarse.",
            "bad": "Le corriges la postura constantemente porque 'no se ve bien sentado así'."
          },
          {
            "q": "Tu hijo/a se relaciona con sus primos principalmente jugando videojuegos juntos, sin mucha charla.",
            "good": "Reconoces ese tiempo compartido como un vínculo genuino entre ellos.",
            "bad": "Le insistes en que 'hablen más' mientras juegan, interrumpiendo el momento."
          },
          {
            "q": "Tu hijo/a prefiere un tipo específico de humor absurdo que la familia no siempre entiende.",
            "good": "Te ríes con él/ella aunque el chiste no te resulte tan gracioso a ti.",
            "bad": "Le dices que sus chistes 'no tienen sentido' comparándolos con el humor familiar."
          },
          {
            "q": "Tu hijo/a adulto/a joven prefiere una vida con pocas posesiones y rutinas muy simples.",
            "good": "Respetas ese estilo de vida como una elección auténtica de bienestar.",
            "bad": "Le insistes en 'progresar más' según el estándar convencional de éxito material."
          },
          {
            "q": "Tu hijo/a se calma balanceándose suavemente mientras mira una pantalla.",
            "good": "Permites ese movimiento de autorregulación sin interrumpirlo innecesariamente.",
            "bad": "Le dices que 'deje de moverse así' porque 'se ve raro' frente a otros."
          },
          {
            "q": "Tu hijo/a prefiere una mochila o cartuchera con un diseño poco convencional para su edad.",
            "good": "Le dejas elegir libremente según su gusto real, sin importar la tendencia del grupo.",
            "bad": "Le impones un diseño 'más apropiado para su edad' según la moda del momento."
          },
          {
            "q": "Tu hijo/a disfruta explicar procesos técnicos paso a paso en vez de dar resúmenes breves.",
            "good": "Le das el tiempo y espacio para explicarse a su manera detallada.",
            "bad": "Le interrumpes pidiendo 'que vaya al grano' constantemente."
          },
          {
            "q": "Tu hijo/a prefiere celebrar sus logros escribiendo en un diario antes que contándoselo a otros.",
            "good": "Respetas esa forma privada de procesar sus propios logros.",
            "bad": "Le insistes en 'compartirlo con la familia' para que 'se sienta orgulloso de verdad'."
          },
          {
            "q": "Tu hijo/a se relaciona mejor con un grupo pequeño en línea que con el curso completo en persona.",
            "good": "Reconoces esos vínculos digitales como suficientes y valiosos para su bienestar social.",
            "bad": "Le insistes en 'hacer más amigos del colegio' descartando esas amistades."
          },
          {
            "q": "Tu hijo/a prefiere un tipo de abrazo con presión firme (squeeze) en vez de uno suave.",
            "good": "Ofreces ese tipo específico de contacto que realmente lo/la regula.",
            "bad": "Insistes en el abrazo suave convencional aunque notes que no lo calma."
          },
          {
            "q": "Tu hijo/a disfruta coleccionar información sobre un tema sin necesidad de compartirla con nadie.",
            "good": "Aceptas que ese interés puede ser una fuente de disfrute personal, sin exigir que lo socialice.",
            "bad": "Le insistes en 'hacer algo útil' con todo ese conocimiento acumulado."
          },
          {
            "q": "Tu hijo/a prefiere pasar las vacaciones en casa organizando su espacio antes que viajando.",
            "good": "Consideras esa preferencia real de descanso, en vez de imponer el viaje familiar.",
            "bad": "Lo obligas a viajar igual 'porque las vacaciones son para salir, no para quedarse en casa'."
          },
          {
            "q": "Tu hijo/a se comunica con gestos y señas propias que solo la familia cercana entiende bien.",
            "good": "Aprendes y usas ese lenguaje compartido como una forma legítima de comunicación.",
            "bad": "Le exiges 'hablar como se debe' descartando ese sistema propio."
          },
          {
            "q": "Tu hijo/a prefiere jugar solo con un set de bloques de construcción durante horas, sin variar de juego.",
            "good": "Reconoces esa concentración profunda como una fortaleza, no una limitación.",
            "bad": "Le compras juguetes nuevos constantemente 'para que no se aburra de lo mismo'."
          },
          {
            "q": "Tu hijo/a adolescente prefiere estudiar en la cocina con ruido de fondo familiar antes que en silencio absoluto.",
            "good": "Le permites el espacio que realmente favorece su concentración, aunque no sea el convencional.",
            "bad": "Le exiges estudiar en su cuarto en silencio 'porque así se estudia bien'."
          },
          {
            "q": "Tu hijo/a prefiere un tono de conversación muy directo, sin rodeos ni cortesías extendidas.",
            "good": "Aceptas ese estilo comunicativo como su forma auténtica, no como grosería.",
            "bad": "Le corriges constantemente para que 'suene más amable como se espera'."
          },
          {
            "q": "Tu hijo/a se entusiasma reorganizando su horario semanal con gran detalle, varias veces.",
            "good": "Ves esa actividad como una forma de sentir control y calma, no una obsesión negativa.",
            "bad": "Le dices que 'deje de perder tiempo' reorganizando el mismo horario."
          },
          {
            "q": "Tu hijo/a prefiere un cumpleaños celebrado un día distinto al exacto, para evitar coincidencias con otros eventos.",
            "good": "Te adaptas a esa preferencia práctica sin insistir en la fecha exacta por tradición.",
            "bad": "Insistes en la fecha exacta 'porque un cumpleaños se festeja el día que es'."
          },
          {
            "q": "Tu hijo/a disfruta el silencio compartido contigo sin necesidad de conversar todo el tiempo.",
            "good": "Valoras esos momentos de compañía silenciosa como conexión genuina.",
            "bad": "Llenas el silencio con preguntas constantes porque 'sientes que algo anda mal'."
          },
          {
            "q": "Tu hijo/a prefiere un menú de fiesta con pocas opciones conocidas antes que un buffet variado.",
            "good": "Adaptas el menú de la celebración pensando también en su comodidad real.",
            "bad": "Insistes en el buffet variado 'porque así se festeja, con abundancia y variedad'."
          },
          {
            "q": "Tu hijo/a se relaciona con el mundo natural (animales, insectos, plantas) más que con personas.",
            "good": "Valoras esa conexión con la naturaleza como una forma legítima y rica de vincularse.",
            "bad": "Le insistes en que 'eso no reemplaza tener amigos de verdad'."
          },
          {
            "q": "Tu hijo/a prefiere una forma de aprender basada en videos y demostraciones antes que en explicaciones habladas.",
            "good": "Incorporas ese formato como una vía de aprendizaje tan válida como cualquier otra.",
            "bad": "Insistes en explicarle todo hablado porque 'así se aprende de verdad'."
          },
          {
            "q": "Tu hijo/a prefiere despedirse con una frase o gesto propio en vez del 'chau, nos vemos' habitual.",
            "good": "Aceptas ese ritual particular de despedida como suficiente y genuino.",
            "bad": "Le corriges para que 'se despida bien, como se acostumbra'."
          },
          {
            "q": "Tu hijo/a disfruta ordenar y volver a ordenar su librero por tamaño en vez de leer los libros seguido.",
            "good": "Reconoces esa actividad como una fuente válida de satisfacción y calma.",
            "bad": "Le dices que 'para qué tiene tantos libros si no los lee' y los reordena tú."
          }
        ]
      },
      {
        "slug": "reducir-expectativas-irreales",
        "nombre": "Reducir Expectativas Irreales",
        "emoji": "📏",
        "descripcion": "Ajustar la vara de comparación a las capacidades reales del hijo/a.",
        "situaciones": [
          {
            "q": "Esperas que tu hijo/a termine la tarea en el mismo tiempo que sus compañeros.",
            "good": "Ajustas el tiempo esperado según su ritmo real de procesamiento.",
            "bad": "Lo presionas para igualar el tiempo de otros niños."
          },
          {
            "q": "Esperas que participe en una fiesta larga sin señales de agotamiento.",
            "good": "Planificas una salida anticipada o pausas, ajustando la expectativa de duración.",
            "bad": "Esperas que aguante toda la fiesta 'como cualquier niño'."
          },
          {
            "q": "Esperas que recuerde instrucciones complejas dadas una sola vez.",
            "good": "Ajustas repitiendo o simplificando, aceptando que necesita más apoyo.",
            "bad": "Te frustras porque 'ya se lo dijiste' y no debería olvidarlo."
          },
          {
            "q": "Esperas que se adapte de inmediato a un cambio de planes.",
            "good": "Ajustas dando tiempo y anticipación, aceptando que su adaptación es más gradual.",
            "bad": "Esperas una reacción rápida como la de otros miembros de la familia."
          },
          {
            "q": "Esperas el mismo nivel de independencia que tuvo un hermano/a a su edad.",
            "good": "Evalúas su propio nivel de desarrollo sin comparar directamente con otro hijo/a.",
            "bad": "Insistes en la misma independencia 'porque su hermano/a ya lo hacía a esa edad'."
          },
          {
            "q": "Esperas que disfrute de todas las reuniones familiares por igual.",
            "good": "Aceptas que algunas reuniones le resultan más difíciles y ajustas la participación.",
            "bad": "Exiges la misma actitud positiva en todas las reuniones sin excepción."
          },
          {
            "q": "Esperas que exprese gratitud de la forma convencional esperada.",
            "good": "Reconoces otras formas en que expresa agradecimiento, aunque no sean las típicas.",
            "bad": "Le exiges dar las gracias exactamente como 'se debe'."
          },
          {
            "q": "Esperas que resuelva conflictos sociales solo, sin apoyo.",
            "good": "Ofreces apoyo y herramientas concretas según su etapa de desarrollo social.",
            "bad": "Lo dejas solo con el conflicto porque 'ya debería saber resolverlo'."
          },
          {
            "q": "Esperas que mantenga la calma en situaciones que le generan sobrecarga real.",
            "good": "Ajustas la expectativa reconociendo el límite real de su tolerancia actual.",
            "bad": "Le exiges 'control' en situaciones objetivamente abrumadoras para él/ella."
          },
          {
            "q": "Esperas que se organice solo con múltiples tareas escolares simultáneas.",
            "good": "Brindas apoyo de organización acorde a su función ejecutiva actual.",
            "bad": "Esperas autonomía total 'porque ya tiene edad para organizarse'."
          },
          {
            "q": "Esperas que disfrute actividades sociales tanto como tú disfrutabas a su edad.",
            "good": "Aceptas que su disfrute social puede ser distinto en forma e intensidad.",
            "bad": "Mides su bienestar social comparándolo con tu propia experiencia infantil."
          },
          {
            "q": "Esperas una respuesta emocional inmediata tras darle una noticia importante.",
            "good": "Le das tiempo para procesar antes de esperar una reacción visible.",
            "bad": "Interpretas la falta de reacción inmediata como indiferencia."
          },
          {
            "q": "Esperas que tenga el mismo umbral de frustración que un adulto.",
            "good": "Ajustas la expectativa a su etapa de desarrollo y perfil real.",
            "bad": "Le exiges 'madurez' por encima de lo que es razonable para su edad y perfil."
          },
          {
            "q": "Esperas que memorice reglas sociales implícitas sin explicación directa.",
            "good": "Le explicas las reglas de forma explícita en vez de asumir que las intuirá.",
            "bad": "Te frustras porque 'debería saber' cómo comportarse socialmente."
          },
          {
            "q": "Esperas que un logro pequeño para otros sea igual de fácil para tu hijo/a.",
            "good": "Reconoces el esfuerzo real que le tomó, aunque parezca simple desde fuera.",
            "bad": "Minimizas su logro porque 'para otros niños es fácil'."
          },
          {
            "q": "Esperas que se adapte a un grupo grande de niños con la misma facilidad que en uno pequeño.",
            "good": "Ajustas las expectativas de participación social según el tamaño del grupo.",
            "bad": "Esperas la misma soltura social sin importar cuántas personas haya."
          },
          {
            "q": "Esperas que entienda una broma o ironía sin explicación.",
            "good": "Le explicas el trasfondo cuando no la capta, sin juzgarlo por ello.",
            "bad": "Te burlas o insistes en que 'ya debería entender' ese tipo de humor."
          },
          {
            "q": "Esperas que un cambio de rutina no le afecte porque 'ya es grande'.",
            "good": "Reconoces que la sensibilidad al cambio no depende solo de la edad cronológica.",
            "bad": "Descartas su malestar por el cambio solo por su edad."
          },
          {
            "q": "Esperas que gestione bien las críticas como lo haría un adulto.",
            "good": "Ajustas tu forma de dar feedback a su capacidad actual de procesarlo.",
            "bad": "Das críticas directas esperando la misma tolerancia que tendría un adulto."
          },
          {
            "q": "Esperas que disfrute aprendiendo todas las materias por igual.",
            "good": "Aceptas que su motivación varía según sus intereses y fortalezas reales.",
            "bad": "Exiges el mismo entusiasmo en todas las materias escolares por igual."
          },
          {
            "q": "Esperas que tu hijo/a pequeño/a se quede quieto durante toda una misa o ceremonia larga.",
            "good": "Ajustas la expectativa según su capacidad real de permanecer quieto/a a su edad y perfil.",
            "bad": "Lo regañas repetidamente por moverse durante toda la ceremonia."
          },
          {
            "q": "Esperas que tu hijo/a de primaria haga la tarea sola/o sin ningún acompañamiento.",
            "good": "Reconoces que aún necesita apoyo para iniciar y sostener la tarea, y se lo brindas.",
            "bad": "Lo dejas solo/a con la tarea 'porque ya debería poder hacerla sin ayuda'."
          },
          {
            "q": "Esperas que tu hijo/a adolescente maneje su ansiedad social sin ningún apoyo externo.",
            "good": "Reconoces que necesita herramientas y acompañamiento concretos para manejarla.",
            "bad": "Le dices que 'ya es grande' para superar solo esa ansiedad."
          },
          {
            "q": "Esperas que tu hijo/a adulto/a joven administre sus finanzas sin ningún error desde el principio.",
            "good": "Aceptas que aprender a manejar el dinero es un proceso gradual con apoyo.",
            "bad": "Te frustras cada vez que comete un error financiero 'porque ya debería saber'."
          },
          {
            "q": "Esperas que tu hijo/a disfrute una salida familiar de todo el día sin señales de cansancio.",
            "good": "Planificas la salida con descansos, aceptando su límite real de energía.",
            "bad": "Extiendes la salida esperando que 'aguante como cualquier niño'."
          },
          {
            "q": "Esperas que tu hijo/a entienda instrucciones nuevas en el colegio sin apoyo visual adicional.",
            "good": "Coordinas con el colegio apoyos concretos que se ajusten a su forma de procesar.",
            "bad": "Asumes que 'ya debería entender igual que los demás sin ayuda extra'."
          },
          {
            "q": "Esperas que tu hijo/a maneje una mudanza de casa sin ningún periodo de adaptación.",
            "good": "Anticipas un proceso de adaptación gradual con apoyos durante varias semanas.",
            "bad": "Esperas que se ajuste de inmediato 'porque los niños se adaptan rápido'."
          },
          {
            "q": "Esperas que tu hijo/a exprese sus necesidades verbalmente sin ayuda en situaciones nuevas.",
            "good": "Ofreces apoyos alternativos de comunicación cuando lo verbal no fluye en el momento.",
            "bad": "Esperas que 'hable normal' sin considerar la dificultad real de la situación."
          },
          {
            "q": "Esperas que tu hijo/a tolere una fila larga de espera sin ninguna señal de incomodidad.",
            "good": "Ajustas tus planes anticipando descansos o distracciones durante la espera.",
            "bad": "Le exiges 'aguantar como cualquiera' una fila larga sin ningún apoyo."
          },
          {
            "q": "Esperas que tu hijo/a adolescente resuelva un conflicto de amistad completamente solo/a.",
            "good": "Ofreces orientación y herramientas concretas sin dejarlo/a completamente solo/a con el conflicto.",
            "bad": "Le dices que 'ya tiene edad para resolver sus propios problemas' sin ningún apoyo."
          },
          {
            "q": "Esperas que tu hijo/a mantenga la calma en un examen bajo presión de tiempo estricta.",
            "good": "Solicitas adaptaciones razonables de tiempo si su perfil lo requiere.",
            "bad": "Esperas el mismo desempeño bajo presión que cualquier otro estudiante."
          },
          {
            "q": "Esperas que tu hijo/a pequeño/a comparta juguetes de inmediato sin ningún proceso de transición.",
            "good": "Le das tiempo y acompañamiento para aprender a compartir a su propio ritmo.",
            "bad": "Le exiges compartir de inmediato 'porque ya debería saber hacerlo a su edad'."
          },
          {
            "q": "Esperas que tu hijo/a entienda de inmediato por qué se pospuso un evento importante para él/ella.",
            "good": "Le explicas con calma y paciencia, aceptando que necesitará tiempo para procesarlo.",
            "bad": "Te frustras porque 'no entiende algo tan simple' de inmediato."
          },
          {
            "q": "Esperas que tu hijo/a adulto/a joven consiga trabajo estable apenas termina sus estudios.",
            "good": "Reconoces que su proceso de inserción laboral puede tomar más tiempo y necesitar apoyo.",
            "bad": "Le presionas comparando su ritmo con el de otros jóvenes de su edad."
          },
          {
            "q": "Esperas que tu hijo/a maneje bien un cambio de maestro/a a mitad de año sin ningún apoyo.",
            "good": "Coordinas con el colegio una transición gradual y con información anticipada.",
            "bad": "Esperas que se adapte solo/a 'porque los cambios de maestro son normales'."
          },
          {
            "q": "Esperas que tu hijo/a duerma toda la noche de corrido igual que sus hermanos.",
            "good": "Ajustas la expectativa de sueño según su propio patrón real, buscando apoyo si hace falta.",
            "bad": "Comparas su sueño con el de sus hermanos y te frustras por la diferencia."
          },
          {
            "q": "Esperas que tu hijo/a entienda y siga reglas nuevas de un juego sin explicación repetida.",
            "good": "Repites y ejemplificas las reglas las veces que sea necesario con paciencia.",
            "bad": "Te impacientas porque 'ya se lo explicaste una vez y debería bastar'."
          },
          {
            "q": "Esperas que tu hijo/a maneje el estrés de un examen médico sin ninguna preparación previa.",
            "good": "Anticipas el procedimiento con explicaciones claras y tiempo para procesar antes de la cita.",
            "bad": "Lo llevas sin preparación 'porque no hay para qué generar ansiedad antes'."
          },
          {
            "q": "Esperas que tu hijo/a se integre de inmediato a un equipo deportivo nuevo sin periodo de adaptación.",
            "good": "Aceptas que integrarse a un grupo nuevo puede tomarle más tiempo del esperado.",
            "bad": "Te frustras porque 'después de dos semanas ya debería sentirse parte del equipo'."
          },
          {
            "q": "Esperas que tu hijo/a maneje bien las bromas pesadas de compañeros sin apoyo emocional.",
            "good": "Le ofreces herramientas concretas y apoyo activo para manejar esas situaciones.",
            "bad": "Le dices que 'aprenda a defenderse solo, así es la vida'."
          },
          {
            "q": "Esperas que tu hijo/a adolescente controle sus emociones frente a una decepción amorosa como un adulto.",
            "good": "Ajustas la expectativa emocional a su etapa real de desarrollo y acompañas el proceso.",
            "bad": "Le exiges 'no hacer drama' por algo que consideras propio de la edad."
          },
          {
            "q": "Esperas que tu hijo/a recuerde una rutina nueva después de habérsela explicado una sola vez.",
            "good": "Repites la rutina con apoyos visuales hasta que se afiance con el tiempo.",
            "bad": "Te enojas porque 'ya se lo explicaste y no debería olvidarlo'."
          },
          {
            "q": "Esperas que tu hijo/a participe activamente en una conversación grupal larga sin fatigarse.",
            "good": "Reconoces su límite real de energía social y planificas pausas o salidas anticipadas.",
            "bad": "Esperas que aguante toda la conversación 'como cualquier otro miembro de la familia'."
          },
          {
            "q": "Esperas que tu hijo/a use el transporte público solo/a sin ningún entrenamiento previo.",
            "good": "Practicas la ruta junto a él/ella varias veces antes de dejarlo/a ir solo/a.",
            "bad": "Lo mandas solo/a de una vez 'porque ya tiene edad para hacerlo sin práctica'."
          },
          {
            "q": "Esperas que tu hijo/a maneje bien una fiesta sorpresa sin ningún tipo de anticipación.",
            "good": "Evitas las sorpresas o le das algo de anticipación adaptada a su necesidad de previsibilidad.",
            "bad": "Organizas la sorpresa igual esperando que reaccione bien sin aviso previo."
          },
          {
            "q": "Esperas que tu hijo/a pequeño/a controle esfínteres exactamente al mismo ritmo que otros niños.",
            "good": "Respetas su propio ritmo de desarrollo sin comparar con tablas estándar rígidas.",
            "bad": "Te frustras y comparas su ritmo con el de otros niños de la misma edad."
          },
          {
            "q": "Esperas que tu hijo/a maneje una crítica del profesor sin afectarse emocionalmente.",
            "good": "Reconoces que puede necesitar procesar la crítica con más apoyo emocional del habitual.",
            "bad": "Le dices que 'no es para tanto' y que 'debería tomarlo con más madurez'."
          },
          {
            "q": "Esperas que tu hijo/a memorice de inmediato los nombres de nuevos familiares políticos.",
            "good": "Le das tiempo y recordatorios amables sin exigir memorización instantánea.",
            "bad": "Lo avergüenzas frente a la familia por no recordar un nombre nuevo."
          },
          {
            "q": "Esperas que tu hijo/a maneje bien un vuelo largo sin ningún apoyo sensorial adicional.",
            "good": "Preparas elementos sensoriales y anticipación para hacer el vuelo más llevadero.",
            "bad": "Esperas que 'se aguante' el vuelo largo sin ningún apoyo especial."
          },
          {
            "q": "Esperas que tu hijo/a adolescente organice solo/a sus tiempos de estudio para varios exámenes.",
            "good": "Ofreces apoyo de planificación mientras desarrolla esa habilidad gradualmente.",
            "bad": "Lo dejas organizarse solo 'porque ya debería saber planificar a su edad'."
          },
          {
            "q": "Esperas que tu hijo/a entienda la gravedad de una situación familiar difícil igual que un adulto.",
            "good": "Ajustas la explicación y las expectativas emocionales según su capacidad real de comprensión.",
            "bad": "Le exiges 'entender la seriedad del asunto' sin adaptar tu explicación."
          },
          {
            "q": "Esperas que tu hijo/a maneje bien los cambios de planes de última hora en un viaje.",
            "good": "Anticipas alternativas y aceptas que necesitará más tiempo para ajustarse al cambio.",
            "bad": "Esperas que se adapte de inmediato 'porque en los viajes siempre hay imprevistos'."
          },
          {
            "q": "Esperas que tu hijo/a pequeño/a distinga bien lo real de lo imaginario en todos los contextos.",
            "good": "Acompañas esa distinción con paciencia, sabiendo que es un proceso gradual.",
            "bad": "Te frustras porque 'ya debería distinguir la realidad de la fantasía a su edad'."
          },
          {
            "q": "Esperas que tu hijo/a maneje sin ayuda una entrevista de trabajo o admisión escolar.",
            "good": "Practicas juntos y das apoyos concretos antes de la entrevista.",
            "bad": "Lo envías solo sin preparación 'porque debería poder hacerlo por sí mismo'."
          },
          {
            "q": "Esperas que tu hijo/a tenga la misma resistencia física que sus compañeros en educación física.",
            "good": "Ajustas la expectativa de rendimiento físico a su capacidad y perfil real.",
            "bad": "Lo comparas con sus compañeros y le exiges el mismo nivel de resistencia."
          },
          {
            "q": "Esperas que tu hijo/a comprenda de inmediato reglas sociales implícitas en un evento nuevo.",
            "good": "Le explicas de forma explícita qué se espera antes del evento.",
            "bad": "Asumes que 'las va a captar sola/o como los demás niños'."
          },
          {
            "q": "Esperas que tu hijo/a maneje bien las visitas médicas frecuentes sin ningún apoyo emocional.",
            "good": "Ofreces acompañamiento y estrategias de calma antes y durante cada visita.",
            "bad": "Esperas que 'ya se acostumbre' a las visitas médicas sin ningún apoyo adicional."
          },
          {
            "q": "Esperas que tu hijo/a se organice para empacar su propia maleta de viaje sin ninguna guía.",
            "good": "Le das una lista visual de apoyo mientras aprende a hacerlo con más autonomía.",
            "bad": "Esperas que empaque solo/a 'porque ya tiene edad para hacerlo perfecto'."
          },
          {
            "q": "Esperas que tu hijo/a maneje bien el ruido y el bullicio de un estadio deportivo sin protección sensorial.",
            "good": "Llevas protección auditiva y planificas una salida anticipada si es necesario.",
            "bad": "Esperas que 'se aguante' el ruido del estadio sin ningún apoyo."
          },
          {
            "q": "Esperas que tu hijo/a entienda por qué debe compartir su tiempo con un hermano/a recién nacido/a.",
            "good": "Le explicas con anticipación y paciencia, dándole tiempo para adaptarse al cambio.",
            "bad": "Esperas que 'entienda y acepte' el cambio familiar de inmediato."
          },
          {
            "q": "Esperas que tu hijo/a maneje sin apoyo una mudanza de colegio a mitad de año escolar.",
            "good": "Coordinas con ambos colegios una transición gradual con información anticipada.",
            "bad": "Esperas que se adapte rápido 'porque los niños se acostumbran fácil a todo'."
          },
          {
            "q": "Esperas que tu hijo/a adolescente maneje bien una ruptura de amistad sin apoyo adicional.",
            "good": "Le ofreces espacio para procesar y herramientas concretas para manejar la pérdida del vínculo.",
            "bad": "Le dices que 'ya se le va a pasar solo' sin ofrecer ningún acompañamiento."
          },
          {
            "q": "Esperas que tu hijo/a use cubiertos y modales de mesa exactamente como el resto desde muy pequeño/a.",
            "good": "Ajustas la expectativa de modales según su desarrollo motor y sensorial real.",
            "bad": "Lo corriges constantemente comparándolo con hermanos que ya lo dominan."
          },
          {
            "q": "Esperas que tu hijo/a maneje bien una fila de seguridad en el aeropuerto sin ninguna preparación.",
            "good": "Le explicas el proceso paso a paso antes de llegar al aeropuerto.",
            "bad": "Esperas que 'siga las indicaciones como cualquiera' sin ninguna anticipación."
          },
          {
            "q": "Esperas que tu hijo/a recupere el ritmo escolar inmediatamente después de una hospitalización.",
            "good": "Coordinas una reincorporación gradual, aceptando que necesitará tiempo de ajuste.",
            "bad": "Esperas que 'se ponga al día enseguida' sin considerar su recuperación real."
          },
          {
            "q": "Esperas que tu hijo/a entienda un chiste o doble sentido complejo sin ninguna aclaración.",
            "good": "Le explicas el trasfondo cuando lo necesite, sin juzgarlo por no entenderlo de inmediato.",
            "bad": "Te frustras porque 'un chiste tan simple debería entenderlo sin explicación'."
          },
          {
            "q": "Esperas que tu hijo/a maneje bien una acampada con mucho ruido natural sin ningún apoyo sensorial.",
            "good": "Llevas elementos conocidos de casa que le den seguridad durante la acampada.",
            "bad": "Esperas que 'se adapte a la naturaleza sin quejarse' sin ningún apoyo."
          },
          {
            "q": "Esperas que tu hijo/a adulto/a joven mantenga una rutina laboral de oficina rígida sin ajustes.",
            "good": "Buscas junto a él/ella adaptaciones razonables en su entorno laboral si las necesita.",
            "bad": "Le dices que 'todos tienen que adaptarse a las reglas del trabajo, sin excepciones'."
          },
          {
            "q": "Esperas que tu hijo/a maneje una despedida de un ser querido con la misma expresión emocional que el resto.",
            "good": "Aceptas que su forma de procesar el duelo puede ser distinta, sin juzgar su reacción.",
            "bad": "Le exiges 'mostrar más sentimiento' porque 'así se espera en estos momentos'."
          },
          {
            "q": "Esperas que tu hijo/a pequeño/a entienda instrucciones abstractas de seguridad vial de inmediato.",
            "good": "Le enseñas con ejemplos concretos y prácticas repetidas antes de esperar que las aplique solo/a.",
            "bad": "Le explicas una vez y esperas que 'ya entienda y las aplique siempre'."
          },
          {
            "q": "Esperas que tu hijo/a maneje bien un cambio de niñera o cuidador sin ningún periodo de adaptación.",
            "good": "Planificas una transición gradual con presentaciones previas al cuidador nuevo.",
            "bad": "Haces el cambio de un día para otro esperando que se adapte de inmediato."
          },
          {
            "q": "Esperas que tu hijo/a entienda por qué no puede comprar algo que vio en una tienda sin frustrarse.",
            "good": "Anticipas la posible frustración y explicas con calma antes de entrar a la tienda.",
            "bad": "Esperas que 'entienda un no sin problema' como si fuera obvio para él/ella."
          },
          {
            "q": "Esperas que tu hijo/a maneje bien una evaluación psicológica sin ninguna preparación previa.",
            "good": "Le explicas en qué consiste la evaluación con anticipación y en términos que pueda entender.",
            "bad": "Lo llevas sin explicación 'para no generar expectativas' y lo dejas sorprendido/a."
          },
          {
            "q": "Esperas que tu hijo/a adolescente maneje bien la presión de grupo sin ninguna herramienta previa.",
            "good": "Conversas con anticipación sobre estrategias concretas para manejar esa presión.",
            "bad": "Le dices que 'aprenda a decir que no solo, así se templa el carácter'."
          },
          {
            "q": "Esperas que tu hijo/a mantenga el mismo nivel de atención en una clase virtual que en una presencial.",
            "good": "Ajustas la expectativa reconociendo que el formato virtual exige un tipo distinto de atención.",
            "bad": "Lo comparas con su rendimiento presencial y le exiges igual concentración."
          },
          {
            "q": "Esperas que tu hijo/a maneje bien una celebración con fuegos artificiales sin ningún apoyo sensorial.",
            "good": "Preparas protección auditiva y una salida anticipada si el ruido lo/la sobrepasa.",
            "bad": "Esperas que 'se aguante' los fuegos artificiales sin ningún apoyo."
          },
          {
            "q": "Esperas que tu hijo/a organice su propio horario de medicamentos sin ningún recordatorio.",
            "good": "Usas alarmas o listas visuales de apoyo mientras desarrolla esa autonomía gradualmente.",
            "bad": "Esperas que 'se acuerde solo/a' sin ningún sistema de apoyo."
          },
          {
            "q": "Esperas que tu hijo/a maneje bien la mudanza de un familiar cercano sin procesarlo emocionalmente.",
            "good": "Le das espacio y acompañamiento para procesar ese cambio en su propio tiempo.",
            "bad": "Esperas que 'lo acepte rápido' porque 'a su edad estas cosas no deberían afectarle tanto'."
          },
          {
            "q": "Esperas que tu hijo/a pequeño/a entienda por qué debe esperar su turno en un juego sin apoyo.",
            "good": "Le enseñas con práctica y apoyos visuales el concepto de turnos, con paciencia.",
            "bad": "Le exiges esperar su turno 'porque ya debería saber compartir' sin ninguna guía."
          },
          {
            "q": "Esperas que tu hijo/a maneje bien un examen médico invasivo sin ninguna preparación sensorial.",
            "good": "Coordinas con el personal médico estrategias de anticipación y calma antes del procedimiento.",
            "bad": "Lo llevas sin preparación esperando que 'coopere como cualquier paciente'."
          },
          {
            "q": "Esperas que tu hijo/a adulto/a joven maneje una entrevista social nueva sin ningún apoyo previo.",
            "good": "Practicas juntos posibles escenarios de conversación antes del encuentro.",
            "bad": "Lo envías solo/a esperando que 'ya sepa comportarse socialmente sin practicar'."
          },
          {
            "q": "Esperas que tu hijo/a recupere la confianza tras un fracaso escolar con la misma rapidez que otros.",
            "good": "Aceptas que su proceso de recuperación emocional puede tomar más tiempo real.",
            "bad": "Le presionas a 'superarlo rápido' comparándolo con la reacción de otros niños."
          },
          {
            "q": "Esperas que tu hijo/a maneje bien un cambio de horario de comidas sin ningún ajuste gradual.",
            "good": "Introduces el cambio de forma progresiva, respetando su necesidad de rutina.",
            "bad": "Cambias el horario de golpe esperando que se adapte sin dificultad."
          },
          {
            "q": "Esperas que tu hijo/a entienda instrucciones de seguridad en una emergencia real sin práctica previa.",
            "good": "Practicas simulacros con anticipación para que sepa qué esperar en una emergencia.",
            "bad": "Esperas que 'reaccione bien' en una emergencia real sin haber practicado antes."
          },
          {
            "q": "Esperas que tu hijo/a maneje bien una celebración religiosa larga sin ningún descanso.",
            "good": "Planificas pausas o una salida anticipada si la duración le resulta agotadora.",
            "bad": "Esperas que 'aguante toda la ceremonia como el resto de la familia'."
          },
          {
            "q": "Esperas que tu hijo/a adolescente maneje bien el rechazo de una solicitud de trabajo sin apoyo emocional.",
            "good": "Acompañas el proceso de manejar la decepción, dándole herramientas concretas.",
            "bad": "Le dices que 'así es el mundo laboral, tiene que aguantarse' sin acompañarlo/a."
          },
          {
            "q": "Esperas que tu hijo/a maneje bien un cambio de terapeuta o profesional de apoyo sin ningún proceso.",
            "good": "Planificas una transición con presentaciones previas y tiempo de adaptación.",
            "bad": "Haces el cambio abruptamente esperando que 'se acostumbre rápido al nuevo profesional'."
          },
          {
            "q": "Esperas que tu hijo/a pequeño/a entienda un 'no' inmediato sin ninguna explicación adicional.",
            "good": "Le das una breve explicación adaptada a su edad junto con el límite.",
            "bad": "Te limitas a decir 'no' y esperas obediencia inmediata sin ninguna explicación."
          },
          {
            "q": "Esperas que tu hijo/a maneje bien la transición de la primaria a la secundaria sin ningún apoyo extra.",
            "good": "Coordinas con ambos colegios una transición gradual con visitas previas si es posible.",
            "bad": "Esperas que se adapte solo/a 'porque todos los niños pasan por ese cambio'."
          },
          {
            "q": "Esperas que tu hijo/a mantenga la paciencia en una consulta médica larga sin ningún distractor.",
            "good": "Llevas actividades o elementos que lo ayuden a esperar con más comodidad.",
            "bad": "Esperas que 'se porte bien y espere' sin ofrecerle ningún apoyo durante la espera."
          },
          {
            "q": "Esperas que tu hijo/a pequeño/a aprenda a atarse los cordones al mismo tiempo que sus compañeros.",
            "good": "Ajustas el ritmo de ese aprendizaje motor fino a su propio desarrollo real.",
            "bad": "Le exiges practicar más 'porque ya todos en su clase saben hacerlo'."
          },
          {
            "q": "Esperas que tu hijo/a maneje bien una reunión con muchos parientes desconocidos sin ninguna anticipación.",
            "good": "Le muestras fotos y nombres con anticipación para reducir la incertidumbre social.",
            "bad": "Esperas que 'salude a todos con soltura' sin haberle dado ningún contexto antes."
          },
          {
            "q": "Esperas que tu hijo/a adolescente controle su ansiedad antes de un examen importante sin ninguna estrategia previa.",
            "good": "Le enseñas técnicas concretas de manejo de ansiedad antes de la fecha del examen.",
            "bad": "Le dices que 'se relaje y ya' sin ofrecerle ninguna herramienta concreta."
          },
          {
            "q": "Esperas que tu hijo/a entienda por qué se cambiaron los planes de un viaje sin ninguna explicación visual.",
            "good": "Usas un calendario o esquema visual para explicar el cambio con claridad.",
            "bad": "Le explicas una vez de forma verbal y esperas que lo asimile sin más apoyo."
          },
          {
            "q": "Esperas que tu hijo/a maneje bien una primera cita con un nuevo dentista sin ninguna preparación.",
            "good": "Le explicas el procedimiento con anticipación y, si es posible, visitan el lugar antes.",
            "bad": "Lo llevas sin preparación esperando que 'coopere igual que cualquier paciente'."
          },
          {
            "q": "Esperas que tu hijo/a adulto/a joven mantenga las mismas normas sociales de saludo en todos los contextos.",
            "good": "Reconoces que puede necesitar variantes según el contexto y le das margen para ajustarse.",
            "bad": "Le exiges el mismo protocolo de saludo formal en cualquier situación, sin excepciones."
          },
          {
            "q": "Esperas que tu hijo/a recupere la rutina normal el mismo día de volver de un viaje largo.",
            "good": "Das uno o dos días de transición antes de retomar las exigencias habituales.",
            "bad": "Retomas la rutina exacta al día siguiente 'porque ya hay que volver a la normalidad'."
          },
          {
            "q": "Esperas que tu hijo/a maneje bien un simulacro de emergencia escolar sin ninguna preparación previa en casa.",
            "good": "Conversas en casa sobre qué esperar antes de que ocurra el simulacro en el colegio.",
            "bad": "Esperas que 'reaccione bien' sin haberle explicado nunca qué es un simulacro."
          },
          {
            "q": "Esperas que tu hijo/a pequeño/a controle su volumen de voz en una biblioteca sin ningún recordatorio previo.",
            "good": "Le explicas antes de entrar qué se espera, con un recordatorio visual si ayuda.",
            "bad": "Lo regañas dentro de la biblioteca sin haberle explicado antes la expectativa."
          },
          {
            "q": "Esperas que tu hijo/a adolescente maneje bien una fiesta de graduación larga y ruidosa sin ningún límite anticipado.",
            "good": "Acuerdan juntos una hora de salida anticipada antes de asistir al evento.",
            "bad": "Esperas que 'aguante toda la fiesta como los demás egresados'."
          }
        ]
      },
      {
        "slug": "aceptar-multiples-formas-exito",
        "nombre": "Aceptar Múltiples Formas de Éxito",
        "emoji": "🌟",
        "descripcion": "Redefinir qué significa \"ir bien\" fuera del molde neurotípico.",
        "situaciones": [
          {
            "q": "Tu hijo/a no tiene un grupo grande de amigos pero sí un vínculo profundo con uno o dos.",
            "good": "Reconoces esa amistad significativa como un éxito relacional genuino.",
            "bad": "Sientes que 'algo falla' porque no tiene muchos amigos."
          },
          {
            "q": "Tu hijo/a avanza más lento académicamente pero con comprensión profunda de lo que aprende.",
            "good": "Valoras la profundidad de su aprendizaje por encima de la velocidad.",
            "bad": "Te enfocas solo en que 'va atrasado' respecto al ritmo esperado."
          },
          {
            "q": "Tu hijo/a logra regular una crisis en la mitad de tiempo que antes.",
            "good": "Celebras ese progreso real, aunque la crisis haya ocurrido igual.",
            "bad": "Solo ves que 'todavía tiene crisis' sin notar la mejora."
          },
          {
            "q": "Tu hijo/a elige una trayectoria de vida poco convencional según sus intereses.",
            "good": "Apoyas esa trayectoria si le da sentido y bienestar genuino.",
            "bad": "Insistes en un camino más convencional 'para asegurar su futuro'."
          },
          {
            "q": "Tu hijo/a prefiere un trabajo o actividad solitaria en vez de una social.",
            "good": "Reconoces que el éxito laboral no requiere encajar en un molde social específico.",
            "bad": "Le sugieres cambiar de preferencia 'para tener más oportunidades sociales'."
          },
          {
            "q": "Tu hijo/a logra pedir ayuda cuando la necesita, algo que antes le costaba mucho.",
            "good": "Celebras ese avance como un logro significativo en autonomía.",
            "bad": "Minimizas el logro porque 'pedir ayuda debería ser fácil'."
          },
          {
            "q": "Tu hijo/a encuentra alegría genuina en actividades poco convencionales.",
            "good": "Validas que su forma de disfrutar es tan válida como cualquier otra.",
            "bad": "Sientes que 'debería' disfrutar de cosas más típicas de su edad."
          },
          {
            "q": "Tu hijo/a logra mantener una rutina de autocuidado a su manera.",
            "good": "Reconoces ese logro aunque no se vea como la rutina 'estándar'.",
            "bad": "Comparas su rutina con la de otros y la consideras insuficiente."
          },
          {
            "q": "Tu hijo/a avanza en habilidades sociales de forma distinta y más lenta que sus pares.",
            "good": "Mides su progreso comparándolo con su propio punto de partida.",
            "bad": "Mides su progreso solo comparándolo con el ritmo de otros niños."
          },
          {
            "q": "Tu hijo/a elige comunicarse principalmente por escrito y le funciona bien.",
            "good": "Reconoces que la comunicación efectiva no depende de un único canal.",
            "bad": "Insistes en que 'debería' preferir hablar como la mayoría."
          },
          {
            "q": "Tu hijo/a logra completar una tarea usando su propio método poco convencional.",
            "good": "Valoras el resultado logrado, sin exigir que el método sea el estándar.",
            "bad": "Le exiges usar el método 'correcto' aunque el suyo también funcione."
          },
          {
            "q": "Tu hijo/a se siente orgulloso/a de un logro que a ti te parece menor.",
            "good": "Celebras con la misma intensidad que él/ella siente ese logro.",
            "bad": "Le restas importancia porque para ti no es un gran logro."
          },
          {
            "q": "Tu hijo/a construye una vida adulta distinta a la que imaginabas para él/ella.",
            "good": "Redefines tu idea de éxito según su propio bienestar y elecciones.",
            "bad": "Sientes que 'fallaste como padre/madre' porque no siguió tu plan."
          },
          {
            "q": "Tu hijo/a prefiere vivir con rutinas muy estructuradas en su vida adulta.",
            "good": "Reconoces que esa estructura le da estabilidad y funciona para él/ella.",
            "bad": "Le insistes en ser 'más flexible' porque crees que así sería más exitoso/a."
          },
          {
            "q": "Tu hijo/a logra manejar su energía social evitando sobrecargarse.",
            "good": "Ves esa autorregulación como una habilidad valiosa de autoconocimiento.",
            "bad": "Le dices que 'debería esforzarse más' por ser más sociable."
          },
          {
            "q": "Tu hijo/a elige un círculo social pequeño pero de calidad.",
            "good": "Valoras la calidad del vínculo por encima de la cantidad de relaciones.",
            "bad": "Le insistes en ampliar su círculo social 'para tener más opciones'."
          },
          {
            "q": "Tu hijo/a encuentra su propia forma de expresar creatividad, distinta a lo convencional.",
            "good": "Apoyas esa forma de expresión como legítima y valiosa.",
            "bad": "La comparas negativamente con formas más 'tradicionales' de arte o expresión."
          },
          {
            "q": "Tu hijo/a logra mantener un trabajo que le gusta aunque no sea de alto estatus social.",
            "good": "Reconoces la satisfacción genuina que ese trabajo le da.",
            "bad": "Sientes decepción porque el trabajo 'no es lo que esperabas para él/ella'."
          },
          {
            "q": "Tu hijo/a avanza en autonomía en un área mientras necesita más apoyo en otra.",
            "good": "Celebras el avance específico sin exigir progreso parejo en todas las áreas.",
            "bad": "Minimizas el avance porque 'todavía falla en otras cosas'."
          },
          {
            "q": "Tu hijo/a define su propia versión de una vida plena, distinta a la convencional.",
            "good": "Confías en su definición de bienestar, aunque no coincida con la tuya.",
            "bad": "Impones tu propia definición de una vida exitosa sobre la suya."
          },
          {
            "q": "Tu hijo/a pequeño/a aprende a vestirse solo/a mucho después que sus compañeros de clase.",
            "good": "Celebras ese logro en su propio momento, sin medirlo contra el ritmo de otros niños.",
            "bad": "Sientes vergüenza porque 'ya debería saber vestirse solo como los demás'."
          },
          {
            "q": "Tu hijo/a de primaria prefiere leer cómics en vez de novelas, pero lee con entusiasmo.",
            "good": "Valoras el gusto genuino por la lectura, sin importar el formato elegido.",
            "bad": "Le dices que los cómics 'no cuentan como lectura de verdad'."
          },
          {
            "q": "Tu hijo/a adolescente logra ir solo/a en transporte público por primera vez, aunque tarde más que otros en lograrlo.",
            "good": "Celebras esa autonomía lograda en su propio tiempo, sin compararlo con sus pares.",
            "bad": "Le recalcas que 'otros ya lo hacían mucho antes que él/ella'."
          },
          {
            "q": "Tu hijo/a adulto/a joven elige un oficio manual en vez de una carrera universitaria.",
            "good": "Apoyas esa elección si le da sentido y sustento genuino a su vida.",
            "bad": "Sientes que 'desperdició su potencial' por no ir a la universidad."
          },
          {
            "q": "Tu hijo/a logra terminar un proyecto escolar usando un método completamente distinto al sugerido por el profesor.",
            "good": "Valoras el resultado logrado con su propio enfoque, aunque no sea el convencional.",
            "bad": "Le dices que 'debió seguir las instrucciones como todos' aunque el resultado fue bueno."
          },
          {
            "q": "Tu hijo/a mantiene solo una amistad estable en la adolescencia, sin un grupo grande.",
            "good": "Reconoces esa amistad profunda como un logro social genuino y suficiente.",
            "bad": "Te preocupas constantemente por la 'falta' de más amigos."
          },
          {
            "q": "Tu hijo/a logra comunicar una necesidad usando un dispositivo de comunicación en vez de hablar.",
            "good": "Celebras ese logro comunicativo como un avance genuino en su autonomía.",
            "bad": "Sientes que 'no es un progreso real' porque no fue con palabras habladas."
          },
          {
            "q": "Tu hijo/a adulto/a joven decide no tener hijos ni pareja, y se siente pleno/a con su vida así.",
            "good": "Respetas esa definición de vida plena, aunque sea distinta a la que imaginabas.",
            "bad": "Insistes en que 'le falta algo' para ser realmente feliz."
          },
          {
            "q": "Tu hijo/a logra pedir un descanso durante una actividad exigente en vez de aguantar hasta el colapso.",
            "good": "Celebras esa autorregulación como un avance importante en autoconocimiento.",
            "bad": "Sientes que 'debería aguantar más' en vez de pedir pausas."
          },
          {
            "q": "Tu hijo/a construye su círculo social principalmente en línea, con personas que comparten su interés.",
            "good": "Reconoces esas relaciones digitales como una red de apoyo social genuina.",
            "bad": "Le dices que 'eso no cuenta como vida social real'."
          },
          {
            "q": "Tu hijo/a avanza en su desarrollo motor a un ritmo distinto, dominando ciertas habilidades tarde y otras temprano.",
            "good": "Valoras su perfil de desarrollo único, sin exigir un patrón parejo y estándar.",
            "bad": "Te alarmas solo por las áreas donde va 'más lento' que la norma."
          },
          {
            "q": "Tu hijo/a logra completar sus estudios en más años de los habituales, a su propio ritmo.",
            "good": "Celebras la finalización de sus estudios sin importar el tiempo que le tomó.",
            "bad": "Sientes vergüenza social por el tiempo extra que le tomó terminar."
          },
          {
            "q": "Tu hijo/a encuentra estabilidad emocional en una rutina de vida muy simple y repetitiva.",
            "good": "Reconoces esa estabilidad como un logro de bienestar genuino y valioso.",
            "bad": "Sientes que 'su vida es aburrida' comparada con estándares convencionales de plenitud."
          },
          {
            "q": "Tu hijo/a logra expresar una emoción difícil por primera vez, aunque sea con pocas palabras.",
            "good": "Celebras ese avance comunicativo, valorando la intención más que la cantidad de palabras.",
            "bad": "Esperas una explicación más elaborada y minimizas el logro por ser breve."
          },
          {
            "q": "Tu hijo/a elige un trabajo part-time que le da satisfacción, en vez de uno de tiempo completo mejor pagado.",
            "good": "Reconoces que su bienestar y equilibrio son parte legítima del éxito.",
            "bad": "Le insistes en que 'debería aspirar a ganar más' aunque eso lo/la sobrecargue."
          },
          {
            "q": "Tu hijo/a logra manejar una situación social difícil retirándose a tiempo, en vez de quedarse forzándose.",
            "good": "Valoras esa decisión de autocuidado como una habilidad madura, no como evitación.",
            "bad": "Le dices que 'debería haberse quedado y aguantado' la situación."
          },
          {
            "q": "Tu hijo/a aprende a nadar mucho después que sus compañeros, pero con mucho esfuerzo propio.",
            "good": "Celebras el logro reconociendo el esfuerzo real que le tomó llegar ahí.",
            "bad": "Comentas que 'llegó tarde' comparándolo con niños que aprendieron antes."
          },
          {
            "q": "Tu hijo/a logra mantener correspondencia significativa con un amigo por carta o mensaje, sin verse en persona seguido.",
            "good": "Reconoces esa amistad a distancia como un vínculo genuino y valioso.",
            "bad": "Le dices que 'una amistad de verdad necesita verse más seguido'."
          },
          {
            "q": "Tu hijo/a adulto/a joven logra vivir de forma semi independiente con apoyos puntuales de la familia.",
            "good": "Celebras ese nivel de autonomía logrado, sin compararlo con una independencia total estándar.",
            "bad": "Sientes que 'no llegó a ser realmente independiente' por necesitar apoyo."
          },
          {
            "q": "Tu hijo/a logra terminar una carrera deportiva sin haber ganado ninguna competencia importante.",
            "good": "Valoras la constancia, el disfrute y la disciplina que desarrolló en el proceso.",
            "bad": "Sientes que 'no valió la pena' porque no hubo trofeos ni podios."
          },
          {
            "q": "Tu hijo/a encuentra su forma de expresión artística en algo poco tradicional, como el pixel art o el modelaje digital.",
            "good": "Reconoces esa forma de arte como igual de válida que las técnicas tradicionales.",
            "bad": "Le dices que 'eso no es arte de verdad' comparado con la pintura o el dibujo clásico."
          },
          {
            "q": "Tu hijo/a logra dormir toda la noche por primera vez después de años de dificultades, aunque sea tarde para su edad.",
            "good": "Celebras ese logro real de regulación, sin importar la edad en que se dio.",
            "bad": "Comentas que 'ya debería haber logrado esto hace años'."
          },
          {
            "q": "Tu hijo/a construye una rutina de autocuidado que incluye pasos poco convencionales pero que le funcionan.",
            "good": "Reconoces que la eficacia de su rutina es lo que importa, no que se vea 'normal'.",
            "bad": "Le insistes en seguir una rutina más 'estándar' aunque la suya le funcione bien."
          },
          {
            "q": "Tu hijo/a logra hacer una compra solo/a por primera vez, aunque necesitó ensayarlo varias veces antes.",
            "good": "Celebras ese logro de autonomía reconociendo el proceso que le costó lograrlo.",
            "bad": "Minimizas el logro diciendo que 'cualquier niño hace eso sin practicar'."
          },
          {
            "q": "Tu hijo/a mantiene un empleo estable en un puesto que no requiere mucha interacción social.",
            "good": "Valoras esa estabilidad laboral como un logro genuino y adecuado a su perfil.",
            "bad": "Sientes que 'podría aspirar a algo con más responsabilidad social'."
          },
          {
            "q": "Tu hijo/a logra iniciar una conversación con un desconocido por primera vez, aunque fue breve y torpe.",
            "good": "Celebras ese paso como un avance genuino en habilidades sociales.",
            "bad": "Le señalas que 'fue una conversación muy corta' restándole valor al esfuerzo."
          },
          {
            "q": "Tu hijo/a adulto/a joven logra un título académico en más años de los previstos originalmente.",
            "good": "Celebras el logro final, valorando la perseverancia por encima del tiempo que tomó.",
            "bad": "Comparas el tiempo que le tomó con el de otros que 'ya se graduaron antes'."
          },
          {
            "q": "Tu hijo/a logra reconocer y nombrar su propia sobrecarga antes de que escale a una crisis.",
            "good": "Reconoces ese autoconocimiento como un logro significativo de regulación emocional.",
            "bad": "Minimizas el logro porque 'igual terminó necesitando ayuda para regularse'."
          },
          {
            "q": "Tu hijo/a encuentra sentido de comunidad en un grupo de interés muy específico y poco común.",
            "good": "Valoras ese sentido de pertenencia como un logro social genuino, aunque el grupo sea pequeño o inusual.",
            "bad": "Le dices que 'busque un grupo más normal' para sentirse parte de algo."
          },
          {
            "q": "Tu hijo/a logra manejar sus propias citas médicas de forma independiente por primera vez.",
            "good": "Celebras esa autonomía como un logro real de vida adulta, sin importar la edad en que ocurrió.",
            "bad": "Comentas que 'ya era hora' de que lo lograra, restando valor al logro."
          },
          {
            "q": "Tu hijo/a elige estudiar algo poco convencional que le apasiona, con salidas laborales inciertas.",
            "good": "Apoyas su pasión genuina como parte legítima de un camino de vida con sentido.",
            "bad": "Le insistes en 'algo más seguro' descalificando su elección."
          },
          {
            "q": "Tu hijo/a logra un progreso pequeño pero constante en terapia, sin cambios dramáticos visibles.",
            "good": "Reconoces la constancia y el pequeño progreso como un éxito real del proceso.",
            "bad": "Sientes decepción porque 'los cambios deberían notarse más rápido y más grandes'."
          },
          {
            "q": "Tu hijo/a adulto/a joven logra mantener su casa organizada a su propio estilo, distinto al convencional.",
            "good": "Reconoces que un hogar funcional según sus propios términos es un logro legítimo.",
            "bad": "Le dices que 'su forma de organizar la casa no es la correcta'."
          },
          {
            "q": "Tu hijo/a logra hacer una presentación escolar en formato grabado en vez de en vivo frente a la clase.",
            "good": "Valoras que logró comunicar su trabajo con éxito, en el formato que le funcionó mejor.",
            "bad": "Sientes que 'no cuenta igual' porque no lo hizo en vivo como los demás."
          },
          {
            "q": "Tu hijo/a encuentra alegría genuina jugando solo con un mismo juego durante años.",
            "good": "Reconoces esa constancia y disfrute como una fuente de bienestar legítima.",
            "bad": "Te preocupas de que 'no tenga más variedad de intereses' como otros niños."
          },
          {
            "q": "Tu hijo/a logra reconciliarse con un amigo después de un conflicto, usando su propio estilo directo de disculpa.",
            "good": "Valoras que logró reparar el vínculo, sin exigir que la disculpa siga un guion convencional.",
            "bad": "Le dices que 'esa no es la forma correcta de pedir perdón'."
          },
          {
            "q": "Tu hijo/a adulto/a joven logra un ingreso modesto pero estable con un negocio propio pequeño.",
            "good": "Reconoces ese logro como un éxito genuino de autonomía y sostenibilidad.",
            "bad": "Sientes que 'debería aspirar a ganar más' comparándolo con otros estándares."
          },
          {
            "q": "Tu hijo/a logra expresar afecto de una forma poco convencional que tú aprendes a reconocer con el tiempo.",
            "good": "Valoras esa forma de cariño como igual de válida que la que tú esperabas al principio.",
            "bad": "Sigues sintiendo que 'no te quiere lo suficiente' porque no encaja con lo esperado."
          },
          {
            "q": "Tu hijo/a mantiene un peso o ritmo de crecimiento distinto al promedio, pero saludable para su cuerpo.",
            "good": "Confías en la evaluación médica individualizada por encima de las tablas de promedio general.",
            "bad": "Te alarmas solo por no encajar en el promedio, sin considerar su contexto real."
          },
          {
            "q": "Tu hijo/a logra un cambio de hábito alimentario incorporando solo un alimento nuevo, no varios.",
            "good": "Celebras ese avance puntual como un logro real, sin exigir un cambio más amplio de inmediato.",
            "bad": "Sientes que 'es un progreso insuficiente' porque esperabas más variedad de una vez."
          },
          {
            "q": "Tu hijo/a elige un camino profesional centrado en su interés especial, con pocos pares en ese campo.",
            "good": "Apoyas ese camino poco transitado si le da sentido y sustento real a su vida.",
            "bad": "Le insistes en un camino más 'convencional y con más gente en el rubro'."
          },
          {
            "q": "Tu hijo/a logra reconocer que necesita ayuda profesional y lo comunica por su cuenta.",
            "good": "Reconoces esa autoconciencia y proactividad como un logro emocional significativo.",
            "bad": "Sientes que 'necesitar ayuda' es en sí mismo un fracaso a ocultar."
          },
          {
            "q": "Tu hijo/a adulto/a joven logra mantener rutinas de ejercicio breves pero constantes, en vez de entrenamientos intensos.",
            "good": "Valoras la constancia y el cuidado real de su cuerpo, sin exigir intensidad convencional.",
            "bad": "Le dices que 'eso no cuenta como ejercicio de verdad'."
          },
          {
            "q": "Tu hijo/a logra una mejora notable en su capacidad de espera, aunque aún necesite apoyo en situaciones intensas.",
            "good": "Celebras el progreso parcial como un logro real en su proceso, no como algo incompleto.",
            "bad": "Solo ves lo que 'todavía le falta' sin reconocer la mejora lograda."
          },
          {
            "q": "Tu hijo/a construye su identidad de forma distinta a los roles de género convencionales esperados.",
            "good": "Apoyas esa construcción de identidad genuina como parte legítima de quién es.",
            "bad": "Le insistes en encajar en el rol convencional 'para no llamar la atención'."
          },
          {
            "q": "Tu hijo/a logra mantenerse en un mismo trabajo por un año, algo que antes le costaba mucho.",
            "good": "Reconoces esa estabilidad como un logro significativo de adaptación y constancia.",
            "bad": "Comparas ese logro con la antigüedad laboral de otros y lo consideras poco."
          },
          {
            "q": "Tu hijo/a logra comunicarte un límite claro por primera vez, aunque de forma abrupta.",
            "good": "Valoras que logró poner el límite, más allá de la forma en que lo expresó.",
            "bad": "Te enfocas solo en 'la forma en que lo dijo' sin reconocer el logro de fondo."
          },
          {
            "q": "Tu hijo/a adulto/a joven encuentra estabilidad emocional viviendo solo/a con pocas visitas sociales.",
            "good": "Reconoces que ese estilo de vida tranquilo es una forma legítima de bienestar para él/ella.",
            "bad": "Sientes que 'está aislado' aunque él/ella exprese sentirse bien así."
          },
          {
            "q": "Tu hijo/a logra un promedio escolar más bajo que el esperado, pero con un aprendizaje genuino y sostenido.",
            "good": "Valoras el aprendizaje real logrado por encima del número exacto de la calificación.",
            "bad": "Te enfocas solo en el promedio bajo, ignorando el proceso genuino detrás."
          },
          {
            "q": "Tu hijo/a logra participar en una actividad familiar por un tiempo breve, antes de retirarse a descansar.",
            "good": "Celebras esa participación parcial como un logro real de su límite conocido.",
            "bad": "Sientes que 'no participó lo suficiente' comparado con el resto de la familia."
          },
          {
            "q": "Tu hijo/a logra un vínculo de confianza con un solo profesional de salud, después de varios intentos fallidos.",
            "good": "Reconoces ese vínculo logrado como un avance importante en su proceso de atención.",
            "bad": "Sientes frustración por 'todos los intentos que no funcionaron antes' sin ver el logro actual."
          },
          {
            "q": "Tu hijo/a elige mudarse a un pueblo pequeño en vez de una ciudad grande para su vida adulta.",
            "good": "Respetas esa elección de vida si le da bienestar y sentido genuino.",
            "bad": "Le insistes en que 'las oportunidades reales están en la ciudad'."
          },
          {
            "q": "Tu hijo/a logra manejar bien una semana con múltiples cambios, aunque necesitó más apoyo del habitual.",
            "good": "Reconoces que salió adelante en una semana difícil, valorando el esfuerzo extra que hizo.",
            "bad": "Solo notas que 'necesitó mucho más apoyo de lo normal' sin ver el logro."
          },
          {
            "q": "Tu hijo/a logra reconciliar su propia definición de felicidad con decisiones que a ti te sorprenden.",
            "good": "Confías en su criterio sobre su propio bienestar, aunque no coincida con tu idea inicial.",
            "bad": "Insistes en que 'no sabe lo que realmente lo hará feliz' descartando su propia voz."
          },
          {
            "q": "Tu hijo/a logra terminar una tarea usando pausas frecuentes en vez de hacerla de corrido.",
            "good": "Valoras el resultado final logrado, sin importar que el proceso fuera distinto al esperado.",
            "bad": "Le dices que 'debería poder concentrarse de corrido como los demás'."
          },
          {
            "q": "Tu hijo/a adulto/a joven logra estabilidad emocional apoyándose en una rutina muy estructurada de vida.",
            "good": "Reconoces esa estructura como la base real de su bienestar, no como una limitación.",
            "bad": "Le insistes en 'ser más espontáneo/a' porque crees que así sería más feliz."
          },
          {
            "q": "Tu hijo/a logra hacer nuevas amistades a un ritmo mucho más lento que sus hermanos, pero de forma genuina.",
            "good": "Valoras la calidad y autenticidad de esas amistades logradas a su propio ritmo.",
            "bad": "Comparas la velocidad con la que sus hermanos hacían amigos y sientes preocupación."
          },
          {
            "q": "Tu hijo/a logra manejar bien una entrevista laboral usando notas escritas de apoyo.",
            "good": "Reconoces que usar ese apoyo no resta valor a la entrevista lograda con éxito.",
            "bad": "Sientes que 'debería poder hacerlo sin notas, como cualquier candidato'."
          },
          {
            "q": "Tu hijo/a logra un desarrollo del lenguaje distinto al esperado, comunicándose bien con apoyos alternativos.",
            "good": "Celebras la comunicación efectiva lograda, sin importar que no sea completamente verbal.",
            "bad": "Sientes que 'no es un logro completo' si no habla de forma convencional."
          },
          {
            "q": "Tu hijo/a construye una vida adulta centrada en su interés especial como fuente principal de ingreso y sentido.",
            "good": "Reconoces esa vida como plena y exitosa según sus propios términos genuinos.",
            "bad": "Sientes que 'desperdició otras oportunidades' por centrarse solo en ese interés."
          },
          {
            "q": "Tu hijo/a logra pedir disculpas a su manera después de un conflicto familiar, sin el formato tradicional esperado.",
            "good": "Valoras la intención genuina detrás de su forma particular de disculparse.",
            "bad": "Le exiges que 'pida perdón como se debe' ignorando su gesto genuino."
          },
          {
            "q": "Tu hijo/a logra graduarse de un programa alternativo de educación en vez de la trayectoria escolar convencional.",
            "good": "Celebras ese logro académico igual de válido, sin importar la vía que tomó para llegar ahí.",
            "bad": "Sientes que 'no es un logro tan válido' por no haber sido la vía tradicional."
          },
          {
            "q": "Tu hijo/a logra mantener su bienestar priorizando menos actividades pero de mayor calidad para él/ella.",
            "good": "Reconoces que esa selectividad es una forma sabia de cuidar su energía, no una limitación.",
            "bad": "Sientes que 'debería hacer más cosas' para aprovechar mejor su tiempo."
          },
          {
            "q": "Tu hijo/a logra un avance importante en autorregulación aunque las crisis no hayan desaparecido del todo.",
            "good": "Celebras la reducción real en intensidad o frecuencia, sin exigir la ausencia total de crisis.",
            "bad": "Solo te enfocas en que 'todavía tiene crisis' sin reconocer la mejora lograda."
          },
          {
            "q": "Tu hijo/a pequeño/a logra pedir un juguete señalando en vez de hablar, y consigue lo que necesita.",
            "good": "Celebras esa comunicación efectiva lograda, sin importar que no haya usado palabras.",
            "bad": "Sientes que 'no cuenta' porque no lo pidió hablando como esperabas."
          },
          {
            "q": "Tu hijo/a de primaria logra hacer una amistad con un compañero de otro grado, distinto a su curso.",
            "good": "Valoras esa amistad como igual de válida que una dentro de su propio grupo etario.",
            "bad": "Le preguntas por qué 'no se junta con los de su clase' en vez de celebrar el vínculo."
          },
          {
            "q": "Tu hijo/a logra manejar una decepción deportiva retirándose a calmarse en vez de explotar como antes.",
            "good": "Reconoces ese cambio de estrategia como un progreso real en su regulación.",
            "bad": "Te enfocas en que 'se fue en medio del partido' sin ver el avance de fondo."
          },
          {
            "q": "Tu hijo/a adolescente logra mantener una conversación completa por escrito con un profesional, sin hablar en voz alta.",
            "good": "Valoras que logró comunicar lo que necesitaba, en el canal que le resultó posible.",
            "bad": "Sientes que 'la sesión no sirvió' porque no habló verbalmente."
          },
          {
            "q": "Tu hijo/a logra aprender a cocinar solo un plato simple, y lo repite con orgullo cada semana.",
            "good": "Celebras esa habilidad de autonomía real, sin exigir que amplíe el menú de inmediato.",
            "bad": "Le dices que 'debería aprender más recetas' en vez de celebrar lo logrado."
          },
          {
            "q": "Tu hijo/a adulto/a joven logra mantener un vínculo de pareja con reglas de convivencia poco convencionales que les funcionan a ambos.",
            "good": "Respetas ese acuerdo si les da bienestar genuino, aunque no siga el modelo esperado.",
            "bad": "Le insistes en que 'una relación normal no funciona así'."
          },
          {
            "q": "Tu hijo/a logra terminar el año escolar con adaptaciones curriculares significativas.",
            "good": "Celebras que completó el año aprendiendo a su manera, con los apoyos que necesitó.",
            "bad": "Sientes que 'no es lo mismo' que terminarlo sin adaptaciones."
          },
          {
            "q": "Tu hijo/a logra decir que no a un plan familiar que no quiere hacer, sin dar largas justificaciones.",
            "good": "Reconoces esa capacidad de poner límites como un avance en autoconocimiento.",
            "bad": "Le exiges que 'explique bien por qué' antes de aceptar su negativa."
          },
          {
            "q": "Tu hijo/a logra un empleo con jornada reducida que le permite sostener su energía en el tiempo.",
            "good": "Valoras esa elección como una forma inteligente de sostenibilidad laboral.",
            "bad": "Sientes que 'no está aprovechando su capacidad completa' al trabajar menos horas."
          },
          {
            "q": "Tu hijo/a logra participar en una excursión escolar quedándose solo la mitad del tiempo previsto.",
            "good": "Celebras que logró participar según su propio límite, sin exigir la jornada completa.",
            "bad": "Sientes que 'no fue una participación real' por no quedarse todo el día."
          },
          {
            "q": "Tu hijo/a logra construir una rutina de higiene personal con pasos visuales que él/ella mismo/a diseñó.",
            "good": "Reconoces ese sistema propio como un logro de autonomía genuino y funcional.",
            "bad": "Le insistes en seguir la rutina 'como todo el mundo lo hace' sin sus apoyos visuales."
          },
          {
            "q": "Tu hijo/a logra reconectar con un familiar distanciado enviando un solo mensaje breve, sin una gran conversación.",
            "good": "Valoras ese gesto como un paso genuino de reconciliación, sin exigir más de lo que pudo dar.",
            "bad": "Sientes que 'un mensaje no alcanza' para considerar que hizo las paces de verdad."
          },
          {
            "q": "Tu hijo/a adolescente logra identificar y evitar una amistad que le hacía mal, aunque le costó mucho tiempo notarlo.",
            "good": "Celebras esa toma de conciencia como una habilidad social valiosa y madura.",
            "bad": "Le reprochas que 'debió darse cuenta antes' en vez de reconocer el logro actual."
          },
          {
            "q": "Tu hijo/a logra mantenerse en un club de interés especial por varios años, aunque no cambie de actividad como otros.",
            "good": "Valoras esa constancia y pasión sostenida como una fortaleza, no como falta de variedad.",
            "bad": "Le sugieres 'probar algo distinto ya' sin reconocer el valor de su continuidad."
          },
          {
            "q": "Tu hijo/a adulto/a joven logra vivir con una pareja sin planes de matrimonio convencional, sintiéndose plenamente satisfecho/a.",
            "good": "Aceptas esa forma de vida en pareja como una versión legítima de éxito relacional.",
            "bad": "Le insistes en que 'debería formalizar' la relación según lo que tú esperas."
          },
          {
            "q": "Tu hijo/a logra manejar el dinero de su primer sueldo ahorrando una parte, aunque gaste el resto en su interés especial.",
            "good": "Reconoces ese manejo financiero inicial como un avance real, sin exigir un ahorro mayor de entrada.",
            "bad": "Le criticas que 'gasta todo en lo mismo de siempre' sin valorar que ya está ahorrando algo."
          }
        ]
      }
    ]
  },
  {
    "slug": "vida",
    "nombre": "Vida Cotidiana Compartida",
    "color": "#ef4444",
    "icon": "<path d=\"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z\"/>",
    "habilidades": [
      {
        "slug": "rutinas-colaborativas",
        "nombre": "Rutinas Colaborativas",
        "emoji": "📆",
        "descripcion": "Construir rutinas junto al hijo/a en lugar de imponerlas.",
        "situaciones": [
          {
            "q": "Quieres establecer una nueva rutina matutina.",
            "good": "Le preguntas qué orden de pasos le resulta más cómodo y la construyen juntos.",
            "bad": "Impones el orden que a ti te parece más lógico sin consultarle."
          },
          {
            "q": "La rutina de tareas del hogar genera resistencia constante.",
            "good": "Revisan juntos la lista y ajustan según sus preferencias e intereses.",
            "bad": "Mantienes la misma lista impuesta esperando que 'se acostumbre'."
          },
          {
            "q": "Tu hijo/a quiere cambiar el orden de su rutina de la tarde.",
            "good": "Exploras con él/ella si el nuevo orden funciona igual de bien.",
            "bad": "Rechazas el cambio porque 'siempre se ha hecho así'."
          },
          {
            "q": "La rutina de higiene genera conflicto cada noche.",
            "good": "Le preguntas qué parte le incomoda y ajustan la secuencia juntos.",
            "bad": "Repites la misma exigencia sin explorar el motivo del conflicto."
          },
          {
            "q": "Quieres introducir una rutina de estudio en casa.",
            "good": "Le muestras opciones y decide junto contigo el formato que prefiere.",
            "bad": "Impones un método de estudio sin considerar su forma de aprender."
          },
          {
            "q": "Tu hijo/a propone una rutina distinta para el fin de semana.",
            "good": "La consideras seriamente y prueban su propuesta.",
            "bad": "Descartas su propuesta porque 'la rutina de siempre funciona bien'."
          },
          {
            "q": "La rutina de las comidas genera tensión diaria.",
            "good": "Acuerdan juntos horarios y estructura que reduzcan la fricción.",
            "bad": "Mantienes el mismo horario rígido sin negociar ajustes."
          },
          {
            "q": "Quieres que participe en la construcción del calendario semanal.",
            "good": "Le das voz activa en decidir actividades y horarios del calendario.",
            "bad": "Armas el calendario completo sin incluir su opinión."
          },
          {
            "q": "La rutina de irse a dormir se ha vuelto una lucha constante.",
            "good": "Conversan juntos qué pasos ayudarían a hacerla más llevadera.",
            "bad": "Repites la misma rutina fallida esperando un resultado distinto."
          },
          {
            "q": "Tu hijo/a quiere incluir su interés especial en la rutina diaria.",
            "good": "Incorporas ese interés como parte motivadora de la rutina.",
            "bad": "Excluyes su interés de la rutina por considerarlo 'distracción'."
          },
          {
            "q": "La rutina de vestirse en las mañanas toma mucho tiempo.",
            "good": "Simplifican juntos los pasos o el orden para hacerla más eficiente.",
            "bad": "Apuras el proceso sin buscar ajustes reales a la rutina."
          },
          {
            "q": "Tu hijo/a se resiste a una rutina de ejercicio impuesta.",
            "good": "Buscan juntos un tipo de movimiento que sí disfrute.",
            "bad": "Mantienes el mismo ejercicio impuesto pese a su rechazo constante."
          },
          {
            "q": "Quieres coordinar una rutina familiar de fin de semana.",
            "good": "Incluyes las preferencias de cada miembro, incluido tu hijo/a, en el plan.",
            "bad": "Decides la rutina familiar sin consultar a nadie más."
          },
          {
            "q": "La rutina de las tareas escolares en casa no está funcionando.",
            "good": "Revisan juntos qué momento y lugar del día le funciona mejor para estudiar.",
            "bad": "Insistes en el mismo horario de estudio aunque no rinda ahí."
          },
          {
            "q": "Tu hijo/a propone usar apoyos visuales para su rutina diaria.",
            "good": "Incorporas esa herramienta como parte de la construcción conjunta.",
            "bad": "Descartas la idea porque 'ya es grande para pictogramas'."
          },
          {
            "q": "La rutina del baño genera resistencia sensorial.",
            "good": "Ajustan juntos temperatura, productos o duración según su comodidad.",
            "bad": "Mantienes la misma rutina de baño sin considerar su sensibilidad."
          },
          {
            "q": "Quieres que tu hijo/a participe en preparar su propia mochila escolar.",
            "good": "Construyen juntos una lista o checklist que él/ella pueda usar solo/a.",
            "bad": "Preparas tú la mochila sin involucrarlo en el proceso."
          },
          {
            "q": "La rutina de actividades extraescolares se siente sobrecargada.",
            "good": "Revisan juntos qué actividades mantener según su energía real.",
            "bad": "Mantienes todas las actividades decididas sin revisar la carga total."
          },
          {
            "q": "Tu hijo/a quiere marcar su progreso en la rutina con algún sistema propio.",
            "good": "Diseñan juntos un sistema de seguimiento que le resulte motivador.",
            "bad": "Impones tu propio sistema de seguimiento sin considerar su preferencia."
          },
          {
            "q": "La rutina de despedida al salir de casa genera ansiedad.",
            "good": "Crean juntos un ritual breve de despedida que le dé seguridad.",
            "bad": "Apresuras la salida sin dar espacio a un ritual que lo tranquilice."
          },
          {
            "q": "Quieres organizar la rutina de lavar la ropa sucia semanalmente.",
            "good": "Acuerdan juntos qué día y quién separa la ropa.",
            "bad": "Fijas el día y el método sin preguntarle su opinión."
          },
          {
            "q": "La rutina de ordenar su cuarto genera resistencia.",
            "good": "Definen juntos qué nivel de orden es razonable para ambos.",
            "bad": "Exiges tu propio estándar de orden sin negociar."
          },
          {
            "q": "Quieres establecer horarios de pantallas entre semana.",
            "good": "Acuerdan juntos los bloques de tiempo según sus prioridades.",
            "bad": "Impones el horario de pantallas sin explicarlo ni consultarlo."
          },
          {
            "q": "Tu hijo/a adopta una mascota y necesita rutina de cuidado.",
            "good": "Diseñan juntos quién alimenta y pasea al animal cada día.",
            "bad": "Asignas tú solo/a las tareas de la mascota sin su participación."
          },
          {
            "q": "Debe tomar una medicación diaria y le cuesta recordarlo.",
            "good": "Crean juntos un recordatorio o sistema que le funcione a él/ella.",
            "bad": "Le recuerdas tú cada vez sin ayudarlo a construir su propio sistema."
          },
          {
            "q": "Se acerca un viaje familiar y hay que planear el empaque.",
            "good": "Elaboran juntos la lista de lo que cada uno llevará.",
            "bad": "Empacas tú todo sin involucrarlo en la planificación."
          },
          {
            "q": "Los hermanos deben repartirse las tareas del hogar.",
            "good": "Negocian juntos la repartición según gustos y habilidades de cada uno.",
            "bad": "Repartes tú las tareas sin consultar preferencias de nadie."
          },
          {
            "q": "Quieres que ayude a hacer la lista del supermercado.",
            "good": "Construyen la lista juntos según lo que a cada uno le gusta comer.",
            "bad": "Haces la lista tú solo/a sin preguntarle qué necesita o quiere."
          },
          {
            "q": "La rutina de cepillarse los dientes se hace corta y apurada.",
            "good": "Acuerdan juntos un método o tiempo que sea más efectivo.",
            "bad": "Le exiges cumplir el tiempo sin explorar qué falla en la rutina."
          },
          {
            "q": "Quieres fijar una hora de despertar los días de colegio.",
            "good": "Conversan juntos qué hora le permite sentirse descansado/a.",
            "bad": "Fijas la hora que a ti te conviene sin considerar su descanso."
          },
          {
            "q": "Los sábados hay tareas domésticas pendientes.",
            "good": "Deciden juntos qué tareas hacer primero y cómo repartirlas.",
            "bad": "Le asignas la lista completa de tareas sin negociar el orden."
          },
          {
            "q": "Quieres introducir una rutina de cocinar juntos los fines de semana.",
            "good": "Le preguntas qué platos le gustaría aprender a preparar.",
            "bad": "Eliges tú las recetas sin considerar su interés."
          },
          {
            "q": "La rutina de lectura antes de dormir se ha vuelto aburrida para él/ella.",
            "good": "Exploran juntos nuevos formatos o libros que le interesen.",
            "bad": "Mantienes el mismo libro o formato pese a su desinterés evidente."
          },
          {
            "q": "Necesita una pausa sensorial estructurada durante el día escolar.",
            "good": "Coordinan juntos con el colegio cuándo y cómo tomar esa pausa.",
            "bad": "Decides tú el esquema de pausas sin consultarlo a él/ella."
          },
          {
            "q": "Quieres establecer una rutina para ir y volver del colegio.",
            "good": "Conversan juntos qué medio de transporte le da más seguridad.",
            "bad": "Decides el medio de transporte sin explicarle ni preguntarle."
          },
          {
            "q": "La merienda después del colegio no tiene un formato claro.",
            "good": "Acuerdan juntos opciones de merienda que pueda preparar solo/a.",
            "bad": "Preparas tú la merienda cada día sin involucrarlo en la elección."
          },
          {
            "q": "Quieres organizar una reunión familiar semanal para hablar de la semana.",
            "good": "Le preguntas qué formato de reunión le resultaría cómodo.",
            "bad": "Impones el formato de reunión sin preguntar su opinión."
          },
          {
            "q": "Tu hijo/a recibe una mesada y no sabe cómo administrarla.",
            "good": "Acuerdan juntos un sistema simple de ahorro y gasto.",
            "bad": "Le impones tu propio sistema de ahorro sin explicar el porqué."
          },
          {
            "q": "Se acerca el inicio de la práctica deportiva y hay que ajustar horarios.",
            "good": "Revisan juntos el calendario semanal para acomodar la práctica.",
            "bad": "Ajustas tú solo/a el calendario familiar sin avisarle antes."
          },
          {
            "q": "Quiere personalizar su rutina de la mañana los fines de semana.",
            "good": "Le das flexibilidad para decidir el orden en esos días.",
            "bad": "Mantienes la misma rutina rígida también los fines de semana."
          },
          {
            "q": "La rutina de cargar los dispositivos electrónicos genera desorden.",
            "good": "Acuerdan juntos un lugar y horario fijo para cargarlos.",
            "bad": "Le recriminas el desorden sin proponer una solución conjunta."
          },
          {
            "q": "Quieres que participe en armar el itinerario de las vacaciones.",
            "good": "Le das voz en elegir algunas actividades del itinerario.",
            "bad": "Armas tú todo el itinerario sin pedir su opinión."
          },
          {
            "q": "La rutina de poner y quitar la mesa genera quejas constantes.",
            "good": "Rotan juntos la tarea y ajustan según lo que cada uno prefiere.",
            "bad": "Le asignas la misma tarea siempre sin considerar sus quejas."
          },
          {
            "q": "Empieza el año escolar y hay que definir nuevas rutinas.",
            "good": "Conversan juntos qué ajustes necesita la rutina de este año.",
            "bad": "Aplicas la misma rutina del año anterior sin revisarla con él/ella."
          },
          {
            "q": "Tu hijo/a adolescente empieza su primer trabajo de medio tiempo.",
            "good": "Ajustan juntos la rutina familiar para acomodar su nuevo horario.",
            "bad": "Esperas que ajuste solo/a su vida al horario familiar existente."
          },
          {
            "q": "Quiere decorar y organizar su propio escritorio de estudio.",
            "good": "Le das libertad de organizarlo a su manera, ofreciendo ideas si las pide.",
            "bad": "Organizas tú el escritorio según lo que te parece más práctico."
          },
          {
            "q": "La rutina de bañar y cuidar a la mascota genera conflicto entre hermanos.",
            "good": "Acuerdan juntos un calendario rotativo claro para todos.",
            "bad": "Decides tú quién hace qué sin consultar a los involucrados."
          },
          {
            "q": "Se acerca una celebración familiar y hay que definir su rol.",
            "good": "Le preguntas qué le gustaría hacer o preparar para la ocasión.",
            "bad": "Le asignas un rol en la celebración sin preguntarle su interés."
          },
          {
            "q": "Tu hijo/a joven adulto vive semi-independiente y define sus propias rutinas.",
            "good": "Respetas su proceso y ofreces ayuda solo si la pide.",
            "bad": "Sigues imponiendo tus rutinas aunque ya no vive bajo las mismas reglas."
          },
          {
            "q": "Quieres introducir una rutina de ejercicio familiar los fines de semana.",
            "good": "Buscan juntos una actividad física que disfruten todos.",
            "bad": "Eliges tú la actividad sin considerar los gustos de los demás."
          },
          {
            "q": "La rutina de guardar la ropa de temporada genera desorganización.",
            "good": "Deciden juntos un sistema simple de guardado que puedan mantener.",
            "bad": "Organizas tú solo/a la ropa sin enseñarle el sistema."
          },
          {
            "q": "Quiere tener su propio calendario o planificador semanal.",
            "good": "Lo/la ayudas a diseñar un formato que le funcione a él/ella.",
            "bad": "Le das el mismo planificador que usas tú sin considerar sus necesidades."
          },
          {
            "q": "La rutina antes de una cita médica genera ansiedad.",
            "good": "Acuerdan juntos qué pasos previos le ayudan a sentirse más tranquilo/a.",
            "bad": "Repites la misma rutina que le genera ansiedad sin ajustarla."
          },
          {
            "q": "Quieres coordinar quién lo/la recoge cada día de la semana.",
            "good": "Construyen juntos un calendario claro de encargados por día.",
            "bad": "Decides tú solo/a el calendario de recogida sin comunicárselo con tiempo."
          },
          {
            "q": "La rutina de práctica de un instrumento musical genera resistencia.",
            "good": "Acuerdan juntos horario y duración que sean sostenibles para él/ella.",
            "bad": "Mantienes el mismo horario impuesto pese a la resistencia constante."
          },
          {
            "q": "Tu hijo/a quiere ayudar a planear el menú semanal familiar.",
            "good": "Incluyes sus preferencias al armar el menú de la semana.",
            "bad": "Armas el menú completo sin preguntarle qué le gustaría comer."
          },
          {
            "q": "La rutina de organizar la mochila para el día siguiente se olvida seguido.",
            "good": "Crean juntos un checklist visual que pueda revisar cada noche.",
            "bad": "Le recuerdas tú cada noche sin ayudarlo a construir su propio sistema."
          },
          {
            "q": "Se acerca una mudanza a otra ciudad y hay que reorganizar rutinas.",
            "good": "Conversan juntos qué rutinas quiere mantener en el nuevo lugar.",
            "bad": "Decides tú todas las rutinas nuevas sin consultar su opinión."
          },
          {
            "q": "Quiere un sistema propio para recordar sus tareas escolares.",
            "good": "Exploran juntos aplicaciones o métodos que le resulten útiles.",
            "bad": "Le impones la agenda de papel que a ti te funciona sin considerar su preferencia."
          },
          {
            "q": "La rutina de higiene del cabello genera resistencia sensorial.",
            "good": "Ajustan juntos productos y método según su sensibilidad.",
            "bad": "Mantienes el mismo método pese a su rechazo constante."
          },
          {
            "q": "Tu hijo/a quiere participar en decidir las reglas de convivencia en casa.",
            "good": "Construyen juntos las reglas familiares con su aporte incluido.",
            "bad": "Fijas las reglas familiares sin darle espacio para opinar."
          },
          {
            "q": "La rutina de repasar el día antes de dormir se siente forzada.",
            "good": "Le preguntas qué formato de conversación nocturna le acomoda más.",
            "bad": "Insistes en el mismo formato de conversación aunque no le funcione."
          },
          {
            "q": "Quiere ayudar a organizar el clóset o armario de su cuarto.",
            "good": "Diseñan juntos un sistema de organización que él/ella pueda mantener.",
            "bad": "Organizas tú el clóset a tu manera sin involucrarlo en el proceso."
          },
          {
            "q": "Se acerca el inicio de clases y hay que comprar útiles escolares.",
            "good": "Van juntos a elegir los útiles según su gusto y necesidad.",
            "bad": "Compras tú los útiles sin llevarlo ni preguntarle sus preferencias."
          },
          {
            "q": "La rutina de cuidar las plantas de la casa genera desinterés.",
            "good": "Le ofreces elegir qué planta cuidar según su propio interés.",
            "bad": "Le asignas una planta al azar sin preguntar si le interesa."
          },
          {
            "q": "Tu hijo/a quiere definir su propia rutina de fin de semana con amigos.",
            "good": "Conversan juntos los límites y ella/él arma el resto del plan.",
            "bad": "Defines tú toda la rutina del fin de semana sin dejarle espacio."
          },
          {
            "q": "La rutina de repaso antes de un examen genera estrés.",
            "good": "Acuerdan juntos un método de estudio que reduzca su ansiedad.",
            "bad": "Impones tu propio método de repaso sin considerar cómo aprende."
          },
          {
            "q": "Quiere ser parte de la decisión sobre el destino de las vacaciones familiares.",
            "good": "Consideran sus preferencias junto con las de toda la familia.",
            "bad": "Decides el destino de vacaciones sin preguntar su opinión."
          },
          {
            "q": "La rutina matutina de un hermano menor interfiere con la suya.",
            "good": "Ajustan juntos los horarios para que ambos puedan cumplir su rutina.",
            "bad": "Priorizas la rutina del hermano menor sin negociar con él/ella."
          },
          {
            "q": "Tu hijo/a quiere un sistema de recompensas para las tareas del hogar.",
            "good": "Diseñan juntos un sistema de recompensas que le resulte motivador.",
            "bad": "Impones un sistema de recompensas que a ti te parece adecuado."
          },
          {
            "q": "La rutina de organizar el baño compartido con hermanos genera conflicto.",
            "good": "Acuerdan juntos turnos y horarios claros para todos.",
            "bad": "Decides tú los turnos del baño sin consultar a los involucrados."
          },
          {
            "q": "Quiere ayudar a planear las compras de ropa de temporada.",
            "good": "Lo llevas a elegir y decidir junto contigo qué comprar.",
            "bad": "Compras tú la ropa sin llevarlo ni considerar su gusto."
          },
          {
            "q": "La rutina de guardar los juguetes o materiales de su interés especial genera fricción.",
            "good": "Acuerdan juntos un sistema de guardado que respete ese interés.",
            "bad": "Guardas tú sus materiales sin considerar cómo los organiza él/ella."
          },
          {
            "q": "Tu hijo/a joven adulto quiere definir su propia rutina de búsqueda de empleo.",
            "good": "Ofreces apoyo si lo pide, respetando su propio ritmo y método.",
            "bad": "Le impones tu método de búsqueda de empleo sin preguntar el suyo."
          },
          {
            "q": "La rutina de repartir el tiempo entre tareas y descanso no está clara.",
            "good": "Construyen juntos un balance de tiempo que le resulte sostenible.",
            "bad": "Impones tú la proporción de tiempo entre tarea y descanso."
          },
          {
            "q": "Quiere participar en decidir el horario de visitas a la familia extendida.",
            "good": "Conversan juntos la frecuencia e incluyen su opinión en la decisión.",
            "bad": "Decides tú el calendario de visitas sin considerar su preferencia."
          },
          {
            "q": "La rutina de organizar el material escolar cada domingo se posterga siempre.",
            "good": "Acuerdan juntos un momento fijo de la semana para hacerlo juntos.",
            "bad": "Le exiges hacerlo solo/a sin ofrecer apoyo ni horario conjunto."
          },
          {
            "q": "Tu hijo/a quiere rediseñar su rutina de ejercicio o deporte semanal.",
            "good": "Exploran juntos qué actividad física le motiva realmente.",
            "bad": "Mantienes la misma actividad impuesta aunque ya no le interese."
          },
          {
            "q": "La rutina de repartir el uso del computador familiar genera peleas.",
            "good": "Acuerdan juntos un horario justo de uso para todos los hermanos.",
            "bad": "Decides tú el horario de uso sin negociar con los involucrados."
          },
          {
            "q": "Quiere participar en la organización de su propia fiesta de cumpleaños.",
            "good": "Construyen juntos el plan según lo que a él/ella le ilusiona.",
            "bad": "Organizas tú toda la fiesta sin considerar sus preferencias."
          },
          {
            "q": "La rutina de cuidado personal empieza a ser relevante en la adolescencia.",
            "good": "Le enseñas el proceso y acuerdan juntos cuándo y cómo practicarlo.",
            "bad": "Impones tu propio criterio de cuidado personal sin dejarlo explorar."
          },
          {
            "q": "Tu hijo/a quiere ajustar la rutina de estudio durante exámenes finales.",
            "good": "Revisan juntos qué cambios necesita la rutina en esa etapa.",
            "bad": "Mantienes la rutina habitual sin considerar la carga extra de exámenes."
          },
          {
            "q": "La rutina de organizar el cuarto compartido con un hermano genera tensión.",
            "good": "Acuerdan juntos zonas y reglas de orden que respeten a ambos.",
            "bad": "Impones las mismas reglas de orden sin considerar a ambos hermanos."
          },
          {
            "q": "Quiere participar en decidir el horario de las sesiones de terapia.",
            "good": "Consideras su opinión sobre horarios que le acomoden mejor.",
            "bad": "Fijas el horario de terapia sin considerar su rutina o preferencia."
          },
          {
            "q": "La rutina de alimentación de la mascota se olvida cuando hay visitas.",
            "good": "Acuerdan juntos recordatorios que funcionen incluso en días distintos.",
            "bad": "Le recriminas el olvido sin ayudar a construir un sistema más firme."
          },
          {
            "q": "Tu hijo/a quiere decidir el orden de las materias al estudiar en casa.",
            "good": "Le permites decidir el orden según lo que le resulte más manejable.",
            "bad": "Impones tú el orden de materias sin considerar su preferencia."
          },
          {
            "q": "La rutina de las tardes de verano no tiene estructura y genera aburrimiento.",
            "good": "Construyen juntos un plan flexible de actividades para el verano.",
            "bad": "Impones una agenda rígida de verano sin consultar sus intereses."
          },
          {
            "q": "Quiere participar en organizar el plan de actividades familiares del año.",
            "good": "Le das espacio real de opinión en el plan anual familiar.",
            "bad": "Decides tú solo/a el plan anual sin considerar su participación."
          },
          {
            "q": "La rutina de dejar el cuarto ordenado antes de salir de vacaciones genera estrés.",
            "good": "Acuerdan juntos una lista simple de lo que hay que dejar listo.",
            "bad": "Le exiges dejar todo perfecto sin definir juntos qué implica eso."
          },
          {
            "q": "Tu hijo/a quiere una rutina propia para cuidar su salud mental.",
            "good": "Lo apoyas explorando qué formato le resulta útil a él/ella.",
            "bad": "Le impones una práctica que a ti te funciona sin considerar su preferencia."
          },
          {
            "q": "La rutina de recoger a los hermanos de distintas actividades genera caos.",
            "good": "Organizan juntos un calendario que considere las necesidades de todos.",
            "bad": "Decides tú el orden de recogida sin explicar el porqué a ninguno."
          },
          {
            "q": "Quiere ajustar su rutina de sueño para rendir mejor en el colegio.",
            "good": "Conversan juntos qué cambios de horario podrían ayudarle realmente.",
            "bad": "Impones una hora de dormir sin explorar juntos qué necesita realmente."
          },
          {
            "q": "La rutina de organizar el clóset de temporada de toda la familia se acumula.",
            "good": "Acuerdan juntos un día para hacerlo entre todos los miembros.",
            "bad": "Terminas haciéndolo tú solo/a sin pedir ayuda ni involucrar a nadie."
          },
          {
            "q": "Tu hijo/a quiere decidir cómo distribuir su tiempo libre después del colegio.",
            "good": "Le das autonomía real para estructurar ese bloque de tiempo.",
            "bad": "Llenas tú su tiempo libre con actividades sin consultarlo."
          },
          {
            "q": "La rutina de cuidar a un hermano menor mientras los padres trabajan genera tensión.",
            "good": "Acuerdan juntos límites claros y compensaciones justas para esa tarea.",
            "bad": "Le exiges la tarea de cuidado sin negociar límites ni reconocerlo."
          },
          {
            "q": "Quiere rediseñar la rutina de la mañana para adaptarse a un nuevo horario escolar.",
            "good": "Revisan juntos los tiempos y ajustan la rutina a la nueva realidad.",
            "bad": "Mantienes la rutina anterior esperando que se adapte solo/a al cambio."
          },
          {
            "q": "La rutina para prepararse antes de una entrevista o presentación genera nerviosismo.",
            "good": "Practican juntos y acuerdan pasos que le den más seguridad.",
            "bad": "Le dices que 'solo tiene que hacerlo' sin construir apoyo previo."
          },
          {
            "q": "Tu hijo/a quiere tener voz en cómo se reparten los quehaceres durante vacaciones en casa de familiares.",
            "good": "Conversas con los familiares para incluir su opinión en la repartición.",
            "bad": "Aceptas la repartición que proponen los familiares sin considerar su opinión."
          },
          {
            "q": "La rutina de organizar sus propias pertenencias antes de un cambio de colegio genera ansiedad.",
            "good": "Construyen juntos un plan paso a paso para esa organización.",
            "bad": "Organizas tú todo antes del cambio sin involucrarlo en el proceso."
          },
          {
            "q": "Quiere ajustar la rutina familiar de domingo para incluir tiempo con amigos.",
            "good": "Revisan juntos el domingo familiar para dejar espacio a esa necesidad.",
            "bad": "Mantienes la rutina de domingo intacta sin considerar su petición."
          }
        ]
      },
      {
        "slug": "transiciones",
        "nombre": "Transiciones",
        "emoji": "🔄",
        "descripcion": "Anticipar y suavizar cambios de actividad, lugar o plan.",
        "situaciones": [
          {
            "q": "Debes interrumpir el juego de tu hijo/a para ir al colegio.",
            "good": "Le avisas con anticipación (10, 5, 2 minutos) antes del cambio.",
            "bad": "Interrumpes el juego de golpe sin previo aviso."
          },
          {
            "q": "Van a cambiar de actividad en medio de una tarde tranquila.",
            "good": "Usas una señal clara y anticipada para preparar el cambio.",
            "bad": "Cambias de actividad abruptamente esperando que se adapte al instante."
          },
          {
            "q": "Tu hijo/a debe dejar la pantalla para cenar.",
            "good": "Le das un aviso previo con tiempo concreto para terminar lo que hace.",
            "bad": "Apagas el dispositivo de inmediato sin aviso previo."
          },
          {
            "q": "Cambian de lugar de vacaciones a mitad de semana.",
            "good": "Anticipas el cambio con fotos o descripciones del nuevo lugar.",
            "bad": "Informas el cambio de lugar el mismo día sin preparación."
          },
          {
            "q": "Tu hijo/a debe pasar del recreo a la clase.",
            "good": "Usa una rutina de transición conocida (canción, señal) que ya practicaron.",
            "bad": "Espera que el cambio de recreo a clase sea automático sin apoyo."
          },
          {
            "q": "Un plan familiar cambia de horario a último momento.",
            "good": "Le explicas el cambio apenas lo sabes, dando tiempo para procesarlo.",
            "bad": "Le informas el cambio justo cuando ya deberían estar saliendo."
          },
          {
            "q": "Tu hijo/a debe dejar una actividad divertida para hacer una tarea menos preferida.",
            "good": "Ofreces un puente claro entre ambas actividades con tiempo de aviso.",
            "bad": "Exiges el cambio inmediato sin transición ni aviso."
          },
          {
            "q": "Cambian de casa o habitación durante una mudanza.",
            "good": "Preparan juntos el cambio con anticipación, mostrando el nuevo espacio antes.",
            "bad": "Realizan el cambio de golpe el día de la mudanza sin preparación previa."
          },
          {
            "q": "Tu hijo/a debe pasar de estar en casa a salir de compras.",
            "good": "Anticipas la salida con tiempo y describe qué encontrarán en el lugar.",
            "bad": "Anuncias la salida de imprevisto justo antes de partir."
          },
          {
            "q": "Terminó una actividad de vacaciones y deben moverse a la siguiente.",
            "good": "Das una cuenta regresiva clara antes de cada cambio de actividad.",
            "bad": "Cambian de actividad sin ningún aviso ni transición."
          },
          {
            "q": "Tu hijo/a debe cambiar de una clase a otra en el colegio.",
            "good": "Coordinas con el colegio apoyos visuales o señales para esa transición.",
            "bad": "Asumes que el colegio maneja la transición sin necesidad de apoyo extra."
          },
          {
            "q": "Cambia el plan de quién los recoge del colegio hoy.",
            "good": "Le avisas con tiempo quién irá a buscarlo/a y qué esperar.",
            "bad": "Cambia la persona sin avisar, generando sorpresa al salir."
          },
          {
            "q": "Tu hijo/a debe dejar de jugar con un amigo para volver a casa.",
            "good": "Anuncias el tiempo restante con anticipación antes de partir.",
            "bad": "Interrumpes el juego social abruptamente sin previo aviso."
          },
          {
            "q": "Cambia el menú de la cena respecto a lo esperado.",
            "good": "Le avisas el cambio de menú con tiempo para procesarlo.",
            "bad": "Presenta el cambio de comida como sorpresa en la mesa."
          },
          {
            "q": "Tu hijo/a debe pasar de una actividad en casa a dormir.",
            "good": "Usan una rutina de transición nocturna conocida y predecible.",
            "bad": "Exige que se duerma de inmediato tras una actividad estimulante."
          },
          {
            "q": "Cambian de rutina de fin de semana a rutina escolar el domingo por la noche.",
            "good": "Preparan juntos la transición con tiempo, revisando lo que viene la próxima semana.",
            "bad": "No preparan nada y esperan que el lunes fluya solo."
          },
          {
            "q": "Tu hijo/a debe cambiar de actividad en medio de una crisis de atención.",
            "good": "Esperas un momento de calma antes de proponer el cambio de actividad.",
            "bad": "Fuerzas el cambio en medio de su concentración intensa sin aviso."
          },
          {
            "q": "Cambia el clima y deben modificar el plan de salida.",
            "good": "Explicas el cambio de plan con anticipación y ofreces una alternativa clara.",
            "bad": "Cambia el plan sin explicación, generando confusión y frustración."
          },
          {
            "q": "Tu hijo/a debe pasar de estar con la familia extendida a irse a casa.",
            "good": "Anuncias la salida con tiempo y un ritual breve de despedida.",
            "bad": "Anuncias que ya se van de forma repentina sin aviso previo."
          },
          {
            "q": "Cambia el orden de las actividades de un evento especial.",
            "good": "Actualizas el itinerario visual o verbal con el nuevo orden a tiempo.",
            "bad": "Cambia el orden sin comunicarlo, generando desconcierto durante el evento."
          },
          {
            "q": "Tu hijo/a debe despertar para ir al colegio.",
            "good": "Enciendes la luz gradualmente y le das unos minutos antes de levantarse.",
            "bad": "Lo/la despiertas de golpe encendiendo la luz y gritando que se apure."
          },
          {
            "q": "Deben bajar del auto al llegar a casa tras un paseo.",
            "good": "Le avisas que en unos minutos llegarán y podrá terminar lo que hace.",
            "bad": "Le exiges bajar del auto de inmediato sin darle tiempo de prepararse."
          },
          {
            "q": "Debes dejarlo/a en el colegio en la mañana.",
            "good": "Practican una despedida breve y predecible cada día.",
            "bad": "Te vas abruptamente sin ritual de despedida, generando angustia."
          },
          {
            "q": "Tu hijo/a pasa de un fin de semana en casa de un progenitor a la del otro.",
            "good": "Preparan con anticipación qué llevar y qué esperar en el cambio.",
            "bad": "Se hace el cambio sin aviso ni preparación previa."
          },
          {
            "q": "Termina el receso de verano y empieza el colegio.",
            "good": "Retoman gradualmente horarios de sueño y rutina días antes de empezar.",
            "bad": "Esperan hasta la noche anterior para retomar cualquier rutina escolar."
          },
          {
            "q": "Debe pasar de la sala de espera al consultorio médico.",
            "good": "Le explicas qué pasará paso a paso antes de entrar.",
            "bad": "Lo/la llevan al consultorio sin explicar qué va a pasar ahí."
          },
          {
            "q": "Termina de jugar videojuegos y debe hacer la tarea.",
            "good": "Le avisas con tiempo el momento en que deberá guardar el juego.",
            "bad": "Apagas el juego de inmediato sin ningún aviso previo."
          },
          {
            "q": "Debe pasar de una materia a otra dentro de la misma clase.",
            "good": "El profesor usa una señal clara para anunciar el cambio de tema.",
            "bad": "Se espera que note el cambio de tema sin ninguna señal."
          },
          {
            "q": "Termina el baño y debe ir a dormir.",
            "good": "Siguen el mismo orden de pasos cada noche para que sea predecible.",
            "bad": "Cambian el orden de los pasos cada noche sin avisar."
          },
          {
            "q": "Se termina una fiesta de cumpleaños y deben irse.",
            "good": "Le avisas con anticipación cuánto tiempo queda antes de partir.",
            "bad": "Anuncias que ya se van justo quitándole el juguete de las manos."
          },
          {
            "q": "Vuelven de casa de los abuelos a la propia casa.",
            "good": "Preparan una despedida breve y anticipan el regreso con calma.",
            "bad": "Se van de repente sin darle oportunidad de despedirse."
          },
          {
            "q": "Termina la práctica deportiva y debe subir al auto.",
            "good": "Le avisas cuánto tiempo falta para el final del entrenamiento.",
            "bad": "Lo/la sacas de la práctica abruptamente en cuanto llegas."
          },
          {
            "q": "Es el primer día en un colegio nuevo.",
            "good": "Visitan el lugar antes y hablan de qué esperar el primer día.",
            "bad": "Lo/la llevan el primer día sin ninguna preparación previa."
          },
          {
            "q": "Termina el recreo y debe volver a rendir una prueba.",
            "good": "Le dan unos minutos de transición antes de empezar la prueba.",
            "bad": "Se espera que pase del recreo directo a la prueba sin transición."
          },
          {
            "q": "Está solo/a en casa y llega el momento de reunirse con la familia.",
            "good": "Le avisas con tiempo que la cena o reunión está por comenzar.",
            "bad": "Lo/la interrumpes de golpe exigiendo que baje de inmediato."
          },
          {
            "q": "Cambia el terapeuta o profesional que lo atiende.",
            "good": "Preparan la transición con una sesión de presentación previa si es posible.",
            "bad": "Cambian de profesional sin explicarle el motivo ni presentarlo antes."
          },
          {
            "q": "Cambia la persona que lo cuida después del colegio.",
            "good": "Le presentas a la nueva persona con anticipación antes del cambio.",
            "bad": "La nueva persona aparece sin previo aviso el día del cambio."
          },
          {
            "q": "Se va un invitado que estuvo de visita en casa.",
            "good": "Anticipas la despedida y le das espacio para procesarla.",
            "bad": "El invitado se va de repente sin que puedan despedirse con calma."
          },
          {
            "q": "Debe dejar de jugar en el parque para hacer un mandado.",
            "good": "Le avisas con tiempo antes de salir del parque.",
            "bad": "Lo/la sacas del parque sin aviso justo cuando está más entretenido/a."
          },
          {
            "q": "Toma un vuelo temprano y debe despertar de madrugada.",
            "good": "Preparan la noche anterior y le explican el horario especial con tiempo.",
            "bad": "Lo/la despiertan de golpe de madrugada sin haberlo hablado antes."
          },
          {
            "q": "Está profundamente concentrado/a en su interés especial y debe comer.",
            "good": "Le avisas con varios minutos de anticipación antes de interrumpir.",
            "bad": "Interrumpes su concentración de golpe exigiendo que venga a comer ya."
          },
          {
            "q": "Pasan de jugar adentro a salir al patio por cambio de clima.",
            "good": "Le explicas el cambio de plan y qué van a hacer en su lugar.",
            "bad": "Cambian de actividad sin explicación, generando confusión."
          },
          {
            "q": "Llueve y deben cambiar de actividad al aire libre a una en interior.",
            "good": "Anticipas el cambio mostrando la alternativa antes de que llueva.",
            "bad": "Cancelan la actividad de golpe sin ofrecer alternativa clara."
          },
          {
            "q": "Tiene un día con un profesor sustituto en el colegio.",
            "good": "Le avisas la noche anterior o en la mañana sobre el cambio.",
            "bad": "Se entera del cambio de profesor sin ningún aviso previo."
          },
          {
            "q": "Cambian de mesa o de lugar en un restaurante.",
            "good": "Le explicas brevemente por qué cambian de lugar antes de moverse.",
            "bad": "Los mueven de mesa sin explicación, generando resistencia."
          },
          {
            "q": "Llegan a un hotel o lugar desconocido durante un viaje.",
            "good": "Le muestras fotos o describes el lugar antes de llegar.",
            "bad": "Llegan al lugar nuevo sin ninguna preparación previa."
          },
          {
            "q": "Termina una película o programa que estaba viendo con atención.",
            "good": "Avisas cuánto falta para el final antes de apagar la pantalla.",
            "bad": "Apagas la pantalla de golpe en medio del programa."
          },
          {
            "q": "Termina una videollamada con un familiar o amigo.",
            "good": "Le avisas unos minutos antes de que la llamada deba terminar.",
            "bad": "Cortas la llamada abruptamente sin previo aviso."
          },
          {
            "q": "Despierta de una siesta y debe prepararse para la cena.",
            "good": "Lo/la despiertas con suavidad, dándole unos minutos para ubicarse.",
            "bad": "Lo/la levantas de golpe exigiendo que se siente a cenar ya."
          },
          {
            "q": "Cambia de niñera o cuidador de forma temporal.",
            "good": "Presentas a la nueva persona con tiempo antes de que quede a cargo.",
            "bad": "La nueva persona llega y se queda a cargo sin ninguna presentación previa."
          },
          {
            "q": "Termina la práctica de un instrumento y debe pasar a otra actividad.",
            "good": "Le avisas con anticipación el cambio de actividad que viene.",
            "bad": "Interrumpes la práctica musical sin ningún aviso previo."
          },
          {
            "q": "Termina la temporada de una actividad extracurricular.",
            "good": "Conversan con anticipación sobre el cierre y lo que viene después.",
            "bad": "La actividad simplemente termina sin que se hable del cambio."
          },
          {
            "q": "Cambia el clima y debe usar ropa distinta a la esperada.",
            "good": "Le explicas el cambio de clima y por qué cambia la ropa con tiempo.",
            "bad": "Le cambias la ropa a último momento sin darle ninguna explicación."
          },
          {
            "q": "Empieza su primer día de trabajo o práctica laboral.",
            "good": "Conversan con anticipación sobre qué esperar en ese primer día.",
            "bad": "Lo/la envías al primer día sin ninguna preparación previa."
          },
          {
            "q": "Debe pasar del transporte público a caminar el resto del trayecto.",
            "good": "Le explicas la ruta completa con anticipación antes de salir.",
            "bad": "Cambia de medio de transporte sin haberlo explicado antes."
          },
          {
            "q": "Tiene una cita con el dentista después de estar tranquilo/a en casa.",
            "good": "Le explicas con tiempo qué va a pasar en la consulta.",
            "bad": "Lo/la llevas sin ninguna preparación justo antes de la cita."
          },
          {
            "q": "Va a la peluquería y debe dejar de hacer lo que estaba haciendo.",
            "good": "Le avisas con tiempo cuándo deben salir hacia la peluquería.",
            "bad": "Lo/la interrumpes de golpe para llevarlo a la peluquería."
          },
          {
            "q": "Pasan por seguridad en un aeropuerto.",
            "good": "Le explicas el proceso paso a paso antes de llegar al control.",
            "bad": "Lo/la llevas por el control sin explicar qué va a suceder ahí."
          },
          {
            "q": "Hay un simulacro de incendio inesperado en el colegio.",
            "good": "El colegio anticipa los simulacros con aviso previo cuando es posible.",
            "bad": "El simulacro ocurre sin ninguna preparación previa para tu hijo/a."
          },
          {
            "q": "Cambian de planes por una necesidad urgente de un hermano.",
            "good": "Le explicas el cambio de planes en cuanto lo sabes, con calma.",
            "bad": "Cambian los planes sin ninguna explicación, generando confusión."
          },
          {
            "q": "Llega a una reunión familiar con muchas personas presentes.",
            "good": "Le avisas con anticipación quiénes estarán y qué esperar del evento.",
            "bad": "Lo/la llevas a la reunión sin ninguna preparación previa."
          },
          {
            "q": "Termina una visita a familiares y deben volver a casa.",
            "good": "Anuncias la salida con tiempo y un ritual breve de despedida.",
            "bad": "Anuncias que ya se van de forma repentina sin aviso previo."
          },
          {
            "q": "Pasan de una actividad en equipo a otra durante la clase de educación física.",
            "good": "El profesor da una señal clara antes de cada cambio de actividad.",
            "bad": "Se espera que cambie de actividad sin ninguna señal previa."
          },
          {
            "q": "Cambia el formato de una clase a virtual de un día para otro.",
            "good": "Le explicas el cambio con anticipación y qué necesitará para la clase.",
            "bad": "Se entera del cambio de formato justo al momento de la clase."
          },
          {
            "q": "Termina un día de campamento de verano y vuelve a casa.",
            "good": "Preparan la transición conversando sobre cómo fue el día antes de la rutina nocturna.",
            "bad": "Se espera que retome la rutina de casa sin ningún espacio de transición."
          },
          {
            "q": "Debe acostarse más temprano de lo habitual por un evento al día siguiente.",
            "good": "Le explicas con anticipación por qué cambia la hora de dormir.",
            "bad": "Le exiges dormir antes sin ninguna explicación del cambio."
          },
          {
            "q": "Pasa de hacer la tarea en computador a hacerla en papel por un cambio de indicación.",
            "good": "Le explicas el cambio de formato con tiempo antes de empezar.",
            "bad": "Le cambias el formato de la tarea sin avisarle con anticipación."
          },
          {
            "q": "Despierta de una siesta larga y ya es hora de cenar.",
            "good": "Lo/la despiertas gradualmente dándole tiempo para ubicarse.",
            "bad": "Lo/la sientas a cenar de inmediato apenas despierta."
          },
          {
            "q": "Termina una sesión de terapia y debe volver a la rutina normal.",
            "good": "Le das unos minutos de transición antes de retomar otra actividad.",
            "bad": "Espera que retome la actividad siguiente de inmediato sin transición."
          },
          {
            "q": "Sale de un episodio de crisis o desregulación hacia una actividad tranquila.",
            "good": "Esperas que esté más calmado/a antes de proponer cualquier cambio.",
            "bad": "Le exiges pasar a otra actividad mientras aún está alterado/a."
          },
          {
            "q": "Se mudan a otra ciudad y debe cambiar de casa por completo.",
            "good": "Preparan la mudanza con visitas previas o fotos del nuevo lugar.",
            "bad": "La mudanza ocurre sin ninguna preparación anticipada para él/ella."
          },
          {
            "q": "Vuelve al colegio después de estar enfermo/a varios días.",
            "good": "Conversan con anticipación sobre qué esperar el día de vuelta.",
            "bad": "Lo/la envía al colegio sin preparar la vuelta después de la ausencia."
          },
          {
            "q": "Cambia de salón o de puesto asignado en la clase.",
            "good": "Le explicas el cambio con anticipación si tienes esa información.",
            "bad": "Se entera del cambio de puesto el mismo día sin previo aviso."
          },
          {
            "q": "Termina la temporada de un deporte y empieza otro distinto.",
            "good": "Conversan con tiempo sobre el cambio de deporte y qué esperar.",
            "bad": "Lo inscriben en el deporte nuevo sin conversarlo previamente."
          },
          {
            "q": "Cambia de colegio o de guardería a una edad temprana.",
            "good": "Visitan el lugar nuevo antes y hablan de lo que encontrará.",
            "bad": "Lo llevan al lugar nuevo el primer día sin ninguna visita previa."
          },
          {
            "q": "Termina de escuchar un cuento antes de dormir y debe apagar la luz.",
            "good": "Siguen la misma secuencia de pasos cada noche antes de apagar la luz.",
            "bad": "Apagas la luz de golpe apenas termina el cuento."
          },
          {
            "q": "Pasa de una sala de un museo a otra durante una visita.",
            "good": "Le avisas con anticipación que van a pasar a la siguiente sala.",
            "bad": "Lo mueve de sala sin ningún aviso mientras está concentrado/a."
          },
          {
            "q": "Debe irse antes de que termine una celebración familiar.",
            "good": "Le avisas con tiempo que deberán irse antes del final.",
            "bad": "Anuncia la salida de repente justo en el momento más animado."
          },
          {
            "q": "Hacen varios mandados seguidos en una misma salida.",
            "good": "Le explicas el orden de los lugares que visitarán antes de salir.",
            "bad": "Van de un lugar a otro sin explicarle el plan de la salida."
          },
          {
            "q": "Debe entrar a la piscina o actividad acuática.",
            "good": "Le das tiempo para prepararse mentalmente antes de entrar al agua.",
            "bad": "Lo mete al agua de golpe sin darle tiempo de prepararse."
          },
          {
            "q": "Debe salir de la piscina cuando está disfrutando el momento.",
            "good": "Le avisas con anticipación cuánto tiempo le queda en el agua.",
            "bad": "Lo saca del agua de inmediato sin ningún aviso previo."
          },
          {
            "q": "Tiene su primera cita con un médico nuevo.",
            "good": "Le explicas con anticipación quién es y qué esperar de la consulta.",
            "bad": "Lo lleva a la consulta nueva sin ninguna preparación previa."
          },
          {
            "q": "Va a dormir por primera vez en casa de un amigo.",
            "good": "Preparan juntos qué llevar y qué esperar de la experiencia.",
            "bad": "Lo deja en la casa del amigo sin haber conversado antes qué esperar."
          },
          {
            "q": "Sale de una reunión grande y debe volver a un auto silencioso.",
            "good": "Le das espacio de silencio o descompresión en el camino a casa.",
            "bad": "Le exige seguir conversando activamente en el camino de regreso."
          },
          {
            "q": "Cambia de una actividad a otra durante una fiesta de cumpleaños.",
            "good": "Le avisas con tiempo cada cambio de juego o actividad en la fiesta.",
            "bad": "Cambian de actividad en la fiesta sin ningún aviso previo."
          },
          {
            "q": "Vuelve al colegio después de un fin de semana largo.",
            "good": "Conversan el domingo por la noche sobre lo que viene la próxima semana.",
            "bad": "Espera que el lunes fluya solo sin ninguna preparación previa."
          },
          {
            "q": "Empieza una nueva unidad o materia en el colegio.",
            "good": "Le explicas con anticipación qué cambios trae la nueva unidad.",
            "bad": "Se entera de la nueva materia sin ninguna preparación previa."
          },
          {
            "q": "Cambia el horario por el inicio del horario de verano.",
            "good": "Ajustan gradualmente los horarios de sueño en los días previos.",
            "bad": "Aplican el cambio de hora de golpe sin ningún ajuste previo."
          },
          {
            "q": "Hay un corte de electricidad que interrumpe su rutina habitual.",
            "good": "Explicas la situación con calma y ofreces una alternativa mientras se resuelve.",
            "bad": "Dejas que la interrupción genere caos sin ninguna explicación."
          },
          {
            "q": "Cambia de habitación dentro de la misma casa.",
            "good": "Prepara el cambio mostrándole el nuevo espacio con anticipación.",
            "bad": "Le cambia de habitación sin ninguna preparación previa."
          },
          {
            "q": "Termina de jugar con amigos en la calle y debe entrar a casa.",
            "good": "Le avisas con tiempo antes de que deba despedirse de sus amigos.",
            "bad": "Lo llama a entrar de golpe sin ningún aviso previo."
          },
          {
            "q": "Pasa de estar en un ambiente ruidoso a uno silencioso de golpe.",
            "good": "Le das unos minutos de transición antes de esperar que se adapte.",
            "bad": "Espera que se adapte al silencio de inmediato sin transición."
          },
          {
            "q": "Debe dejar una actividad grupal para atender una necesidad individual.",
            "good": "Le explicas el motivo del cambio antes de sacarlo de la actividad.",
            "bad": "Lo saca de la actividad grupal sin ninguna explicación."
          },
          {
            "q": "Cambia el lugar de encuentro con el otro progenitor a último momento.",
            "good": "Le explicas el cambio en cuanto lo sabes, con la mayor anticipación posible.",
            "bad": "Se entera del cambio de lugar justo en el momento del encuentro."
          },
          {
            "q": "Termina de usar la tableta y debe alistarse para salir.",
            "good": "Le avisas con varios minutos de anticipación antes de que deba dejarla.",
            "bad": "Le quita la tableta de las manos sin ningún aviso previo."
          },
          {
            "q": "Pasa del recreo a una actividad que requiere mucha concentración.",
            "good": "Le da un momento breve de transición antes de exigir concentración.",
            "bad": "Espera que pase del recreo a concentrarse de inmediato sin transición."
          },
          {
            "q": "Debe cambiar de plan porque el lugar reservado está cerrado.",
            "good": "Le explica el cambio con calma y ofrece una alternativa concreta.",
            "bad": "Cambia de plan sin explicación, generando frustración y confusión."
          },
          {
            "q": "Termina una llamada telefónica importante y debe volver a la rutina.",
            "good": "Le da unos minutos antes de pedirle que retome otra actividad.",
            "bad": "Le exige retomar la actividad de inmediato al colgar la llamada."
          },
          {
            "q": "Pasa de estar de vacaciones a la rutina de trabajo o estudio en casa.",
            "good": "Preparan juntos el regreso gradual días antes de que termine el descanso.",
            "bad": "Espera que retome la rutina de golpe el primer día después de volver."
          },
          {
            "q": "Cambia el itinerario de un evento especial por causas de último momento.",
            "good": "Actualiza el plan y se lo explica con calma en cuanto lo sabe.",
            "bad": "Cambia el itinerario sin comunicarlo, generando desconcierto en el evento."
          }
        ]
      },
      {
        "slug": "autonomia-gradual",
        "nombre": "Autonomía Gradual",
        "emoji": "🪜",
        "descripcion": "Ceder control paso a paso, respetando el ritmo del hijo/a.",
        "situaciones": [
          {
            "q": "Tu hijo/a quiere preparar su propio desayuno simple.",
            "good": "Le enseñas los pasos y permites que lo intente con supervisión ligera.",
            "bad": "Lo haces tú por completo porque 'es más rápido y seguro'."
          },
          {
            "q": "Quiere elegir su propia ropa para el día.",
            "good": "Le das opciones dentro de un rango apropiado y respetas su elección.",
            "bad": "Eliges tú la ropa sin darle espacio de decisión."
          },
          {
            "q": "Tu hijo/a quiere caminar solo/a un tramo corto y conocido hasta la escuela.",
            "good": "Evalúas el riesgo real y permites el intento con acuerdos claros de seguridad.",
            "bad": "Le niegas la posibilidad sin evaluar si realmente está listo/a."
          },
          {
            "q": "Quiere manejar su propio dinero de la mesada.",
            "good": "Le das autonomía progresiva con acompañamiento y revisión periódica.",
            "bad": "Controlas cada gasto sin darle ningún margen de decisión."
          },
          {
            "q": "Tu hijo/a quiere hacer una llamada telefónica importante por sí mismo/a.",
            "good": "Lo/la preparas con anticipación y permites que lo intente, disponible si necesita ayuda.",
            "bad": "Haces la llamada tú mismo/a para 'evitar errores'."
          },
          {
            "q": "Quiere organizar su propio espacio de estudio.",
            "good": "Le das libertad de organización, ofreciendo sugerencias solo si las pide.",
            "bad": "Reorganizas el espacio a tu manera sin considerar la suya."
          },
          {
            "q": "Tu hijo/a quiere resolver un conflicto menor con un amigo sin tu intervención.",
            "good": "Le das la oportunidad de intentarlo, observando de cerca sin intervenir de inmediato.",
            "bad": "Intervienes de inmediato resolviendo el conflicto por él/ella."
          },
          {
            "q": "Quiere encargarse de una tarea doméstica nueva.",
            "good": "Le enseñas el proceso paso a paso y permites que la asuma gradualmente.",
            "bad": "Le asignas la tarea pero sigues haciéndola tú 'para que quede bien'."
          },
          {
            "q": "Tu hijo/a quiere planear una salida simple con un amigo.",
            "good": "Lo/la apoyas en la planificación sin tomar el control total del plan.",
            "bad": "Planeas tú toda la salida sin dejarle espacio de decisión."
          },
          {
            "q": "Quiere administrar su propio horario de tareas escolares.",
            "good": "Le das autonomía con revisiones periódicas de apoyo, no control constante.",
            "bad": "Supervisas cada minuto de su tiempo de estudio sin darle margen."
          },
          {
            "q": "Tu hijo/a quiere ir solo/a a comprar algo pequeño en una tienda cercana.",
            "good": "Evalúas el contexto real y permites el intento con acuerdos previos.",
            "bad": "Le niegas la salida asumiendo que no podrá manejarlo sin evaluar realmente."
          },
          {
            "q": "Quiere preparar su mochila para un campamento escolar.",
            "good": "Le das una lista guía y permite que él/ella arme la mochila.",
            "bad": "Preparas tú la mochila completa sin involucrarlo en el proceso."
          },
          {
            "q": "Tu hijo/a quiere tomar decisiones sobre su propio tratamiento o terapia.",
            "good": "Lo/la incluyes progresivamente en las decisiones según su edad y comprensión.",
            "bad": "Decides todo por él/ella sin incluir su opinión en el proceso."
          },
          {
            "q": "Quiere manejar su propio despertador y rutina matutina.",
            "good": "Le das la responsabilidad con un plan de respaldo si algo falla al inicio.",
            "bad": "Sigues despertándolo/a tú cada mañana sin darle la oportunidad de intentarlo."
          },
          {
            "q": "Tu hijo/a quiere elegir sus propias actividades extraescolares.",
            "good": "Le das la decisión final tras explorar opciones juntos.",
            "bad": "Eliges tú las actividades basándote en lo que 'es mejor para su futuro'."
          },
          {
            "q": "Quiere resolver un problema técnico simple (configurar un dispositivo) por sí mismo/a.",
            "good": "Le das tiempo para intentarlo antes de ofrecer ayuda directa.",
            "bad": "Resuelves el problema de inmediato sin darle la oportunidad de intentarlo."
          },
          {
            "q": "Tu hijo/a quiere participar en la decisión de un cambio familiar importante.",
            "good": "Le das información apropiada para su edad y consideras su opinión.",
            "bad": "Tomas la decisión sin informarlo ni considerar su perspectiva."
          },
          {
            "q": "Quiere manejar su propia agenda de citas médicas simples.",
            "good": "Lo/la vas incluyendo gradualmente en el manejo de su propia agenda.",
            "bad": "Manejas tú todas las citas sin involucrarlo en el proceso."
          },
          {
            "q": "Tu hijo/a quiere cocinar una receta sencilla solo/a.",
            "good": "Supervisas la seguridad básica pero le dejas ejecutar la receta.",
            "bad": "Cocinas tú mientras él/ella solo observa, sin dejarlo participar activamente."
          },
          {
            "q": "Quiere tomar el transporte público solo/a en una ruta ya practicada juntos.",
            "good": "Evalúas si está preparado/a y permites el intento con un plan de contingencia.",
            "bad": "Le niegas la posibilidad indefinidamente sin volver a evaluar su progreso."
          },
          {
            "q": "Quiere hacer su propia cama cada mañana.",
            "good": "Le enseñas el proceso y permites que lo haga a su manera, aunque no quede perfecto.",
            "bad": "Rehaces la cama tú mismo/a porque 'no quedó bien hecha'."
          },
          {
            "q": "Quiere lavar su propia ropa por primera vez.",
            "good": "Le enseñas el uso de la lavadora y permites que lo intente solo/a.",
            "bad": "Lavas tú su ropa porque 'puede arruinar algo'."
          },
          {
            "q": "Quiere empacar su propia maleta para un viaje.",
            "good": "Le das una lista guía y permites que decida qué llevar.",
            "bad": "Empacas tú la maleta completa sin dejarlo participar."
          },
          {
            "q": "Quiere elegir su propio corte de cabello o peinado.",
            "good": "Respetas su elección dentro de opciones razonables.",
            "bad": "Impones el corte que a ti te parece apropiado."
          },
          {
            "q": "Quiere encargarse de su higiene personal sin supervisión constante.",
            "good": "Le das el espacio y solo intervienes si realmente lo necesita.",
            "bad": "Supervisas cada paso de su higiene personal sin darle privacidad."
          },
          {
            "q": "Quiere quedarse solo/a en casa por un rato corto.",
            "good": "Evalúas su preparación real y permites el intento con acuerdos claros.",
            "bad": "Le niegas la posibilidad sin evaluar si está realmente listo/a."
          },
          {
            "q": "Quiere usar la estufa para preparar algo simple.",
            "good": "Le enseñas las normas de seguridad y permites que lo haga con supervisión ligera.",
            "bad": "Le prohíbes usar la estufa indefinidamente sin enseñarle nunca cómo hacerlo con seguridad."
          },
          {
            "q": "Quiere ir en bicicleta solo/a a un lugar cercano conocido.",
            "good": "Evalúas la ruta y permites el intento con acuerdos de seguridad.",
            "bad": "Le niegas el permiso sin volver a evaluar su capacidad real."
          },
          {
            "q": "Quiere manejar sus propias redes sociales de forma apropiada para su edad.",
            "good": "Acuerdas límites claros y le das autonomía dentro de ellos.",
            "bad": "Revisas cada mensaje y publicación sin darle ningún margen de privacidad."
          },
          {
            "q": "Consigue su primer trabajo de medio tiempo.",
            "good": "Lo/la apoyas para organizar su propio horario y responsabilidades.",
            "bad": "Te involucras en cada detalle de su trabajo como si fuera tuyo."
          },
          {
            "q": "Quiere abrir su propia cuenta bancaria.",
            "good": "Lo acompañas en el proceso pero le das el manejo de su propia cuenta.",
            "bad": "Manejas tú la cuenta a su nombre sin darle acceso real."
          },
          {
            "q": "Quiere decidir su propia hora de dormir dentro de un rango razonable.",
            "good": "Acuerdan un rango y le permites decidir dentro de esos límites.",
            "bad": "Impones la misma hora exacta sin considerar su edad o necesidad."
          },
          {
            "q": "Quiere elegir sus propias amistades sin que las apruebes una por una.",
            "good": "Confías en su criterio y solo intervienes ante señales reales de riesgo.",
            "bad": "Evalúas y cuestionas cada amistad nueva que menciona."
          },
          {
            "q": "Tiene un desacuerdo con un amigo y quiere resolverlo por su cuenta.",
            "good": "Le das espacio para intentarlo, disponible solo si lo necesita.",
            "bad": "Intervienes de inmediato hablando tú con el amigo o sus padres."
          },
          {
            "q": "Quiere organizar su propio horario de estudio para un examen.",
            "good": "Le das autonomía con una revisión breve de apoyo, no control total.",
            "bad": "Supervisas cada minuto de su tiempo de estudio."
          },
          {
            "q": "Quiere llamar él/ella mismo/a para pedir una cita médica.",
            "good": "Lo preparas con la información necesaria y permites que haga la llamada.",
            "bad": "Haces tú la llamada para 'que salga bien'."
          },
          {
            "q": "Quiere pedir su propia comida en un restaurante.",
            "good": "Le permites hablar directamente con el mesero sin intervenir.",
            "bad": "Pides tú por él/ella sin darle la oportunidad de hacerlo."
          },
          {
            "q": "Tiene dos actividades que chocan en el mismo horario y debe decidir.",
            "good": "Le ayudas a pensar las opciones pero deja que decida cuál priorizar.",
            "bad": "Decides tú cuál actividad debe elegir sin consultarlo."
          },
          {
            "q": "Quiere manejar su propio límite de tiempo de pantallas.",
            "good": "Acuerdan un marco y confías en que él/ella lo autorregule.",
            "bad": "Controlas cada minuto de pantalla sin darle ningún margen de autogestión."
          },
          {
            "q": "Quiere ayudar a hacer las compras del supermercado con una lista.",
            "good": "Le das la lista y permites que elija y compare productos.",
            "bad": "Haces tú las compras mientras él/ella solo observa."
          },
          {
            "q": "Empieza a practicar para obtener su licencia de conducir.",
            "good": "Lo acompañas en las prácticas dándole cada vez más responsabilidad al volante.",
            "bad": "Le criticas cada movimiento sin dejarlo ganar confianza al conducir."
          },
          {
            "q": "Quiere ahorrar para una meta personal con su propio dinero.",
            "good": "Lo apoyas a planificar el ahorro sin controlar cada decisión de gasto.",
            "bad": "Decides tú en qué debe gastar o ahorrar su propio dinero."
          },
          {
            "q": "Quiere opinar sobre qué carrera o estudios seguir en el futuro.",
            "good": "Escuchas su interés real y lo apoyas a explorar opciones.",
            "bad": "Decides tú la carrera que debe seguir sin considerar su interés."
          },
          {
            "q": "Se encarga completamente del cuidado de una mascota que pidió.",
            "good": "Le das la responsabilidad total con apoyo disponible si lo necesita.",
            "bad": "Terminas haciendo tú las tareas de la mascota 'para que no le falte nada'."
          },
          {
            "q": "Quiere elegir un psicólogo o terapeuta que le genere más confianza.",
            "good": "Le das voz en la elección dentro de opciones viables.",
            "bad": "Eliges tú al profesional sin considerar su comodidad o preferencia."
          },
          {
            "q": "Tiene un conflicto con un profesor y quiere hablarlo él/ella mismo/a.",
            "good": "Lo preparas para la conversación y permites que la tenga primero.",
            "bad": "Vas tú directamente a hablar con el profesor sin dejarlo intentarlo."
          },
          {
            "q": "Quiere participar activamente en su reunión escolar de seguimiento.",
            "good": "Lo incluyes en la reunión y le das espacio para expresar sus necesidades.",
            "bad": "Asistes a la reunión y decides todo sin incluir su voz."
          },
          {
            "q": "Quiere preparar su propio almuerzo para llevar al colegio.",
            "good": "Le enseñas opciones simples y permite que arme su propio almuerzo.",
            "bad": "Preparas tú el almuerzo cada día sin involucrarlo en la elección."
          },
          {
            "q": "Quiere decidir cuántas actividades extraescolares asumir este semestre.",
            "good": "Conversan sobre su energía real y le das la decisión final.",
            "bad": "Decides tú la cantidad de actividades sin considerar su carga real."
          },
          {
            "q": "Quiere organizar completamente su propio cuarto sin tu intervención.",
            "good": "Le das libertad total dentro de acuerdos básicos de higiene.",
            "bad": "Reorganizas su cuarto a tu manera cuando él/ella no está."
          },
          {
            "q": "Quiere ir al cine con amigos sin la compañía de un adulto.",
            "good": "Evalúas el contexto real y permites el intento con acuerdos claros.",
            "bad": "Le niegas el permiso asumiendo riesgos sin evaluarlos realmente."
          },
          {
            "q": "Quiere dormir en casa de un amigo por primera vez.",
            "good": "Conversan los acuerdos necesarios y permites la experiencia.",
            "bad": "Le niegas la posibilidad de forma indefinida sin volver a evaluarlo."
          },
          {
            "q": "Quiere encargarse de tomar su propia medicación diaria.",
            "good": "Le das un sistema de apoyo y supervisión decreciente en el tiempo.",
            "bad": "Le das tú la medicación cada día sin enseñarle a manejarla solo/a."
          },
          {
            "q": "Quiere usar un cajero automático por su cuenta.",
            "good": "Le enseñas el proceso y permite que lo intente con supervisión cercana al inicio.",
            "bad": "Usas tú el cajero por él/ella para 'evitar errores'."
          },
          {
            "q": "Quiere hacer una compra en línea por su cuenta.",
            "good": "Lo acompañas la primera vez y luego permites que lo haga solo/a.",
            "bad": "Haces tú todas las compras en línea sin involucrarlo en el proceso."
          },
          {
            "q": "Quiere cocinar una comida completa para la familia.",
            "good": "Supervisas la seguridad básica pero le dejas planificar y ejecutar el menú.",
            "bad": "Terminas cocinando tú la mayor parte 'para que salga bien'."
          },
          {
            "q": "Nota un conflicto entre amigos y quiere mediar por su cuenta.",
            "good": "Le das la oportunidad de intentarlo, disponible si lo necesita.",
            "bad": "Intervienes de inmediato resolviendo el conflicto entre los amigos."
          },
          {
            "q": "Quiere elegir sus propias prácticas espirituales o de creencias en la adolescencia.",
            "good": "Respetas su proceso de exploración personal.",
            "bad": "Le impones tus propias creencias sin dejarlo explorar las suyas."
          },
          {
            "q": "Cuida a un hermano menor por un rato corto.",
            "good": "Le das instrucciones claras y confías en su capacidad de manejarlo.",
            "bad": "Supervisas cada segundo sin darle margen real de responsabilidad."
          },
          {
            "q": "Quiere decidir si participa o no en una reunión familiar.",
            "good": "Consideras su opinión y negocian según la importancia del evento.",
            "bad": "Le exiges asistir sin considerar su preferencia en absoluto."
          },
          {
            "q": "Quiere negociar su propia hora de llegada los fines de semana.",
            "good": "Acuerdan un margen razonable según su edad y responsabilidad.",
            "bad": "Impones la misma hora de llegada sin revisar si corresponde a su edad."
          },
          {
            "q": "Quiere administrar un presupuesto propio para sus salidas.",
            "good": "Le das un monto y confías en cómo decide distribuirlo.",
            "bad": "Controlas cada gasto de su salida sin darle margen de decisión."
          },
          {
            "q": "Quiere ayudar a planear parte del itinerario de un viaje familiar.",
            "good": "Le das espacio real para proponer y decidir actividades del viaje.",
            "bad": "Planeas tú todo el itinerario sin considerar su interés."
          },
          {
            "q": "Prefiere comunicarse por mensajes de texto en vez de llamadas.",
            "good": "Respetas su forma de comunicación preferida sin insistir en la tuya.",
            "bad": "Le exiges llamar por teléfono porque 'es lo correcto'."
          },
          {
            "q": "Quiere manejar sus propias pausas sensoriales en el colegio sin pedir permiso cada vez.",
            "good": "Acuerdas con el colegio un sistema que le dé esa autonomía.",
            "bad": "Exiges que pida permiso cada vez, sin darle ningún margen de autogestión."
          },
          {
            "q": "Quiere pedir él/ella mismo/a las adaptaciones que necesita en clase.",
            "good": "Lo preparas para comunicarse directamente con el profesor.",
            "bad": "Hablas tú siempre con el profesor sin dejarlo participar en el proceso."
          },
          {
            "q": "Recibe una llamada de servicio al cliente que debe resolver él/ella mismo/a.",
            "good": "Le das la oportunidad de manejar la llamada con tu apoyo cercano.",
            "bad": "Tomas tú el teléfono de inmediato sin dejarlo intentarlo primero."
          },
          {
            "q": "Quiere encargarse del mantenimiento de sus propios dispositivos electrónicos.",
            "good": "Le enseñas lo básico y permites que lo resuelva por su cuenta.",
            "bad": "Resuelves tú cada problema técnico sin darle la oportunidad de aprender."
          },
          {
            "q": "Quiere hacer trabajo de jardinería o mantenimiento exterior por su cuenta.",
            "good": "Le enseñas lo necesario y confías en que lo haga a su manera.",
            "bad": "Supervisas cada movimiento corrigiendo constantemente su método."
          },
          {
            "q": "Quiere manejar su propio calendario de recordatorios en el celular.",
            "good": "Lo ayudas a configurarlo pero le dejas el manejo diario.",
            "bad": "Le recuerdas tú todo verbalmente sin dejarlo usar su propio sistema."
          },
          {
            "q": "Quiere iniciar conversaciones con personas nuevas en un evento social.",
            "good": "Lo animas a intentarlo, estando cerca solo como apoyo si lo necesita.",
            "bad": "Hablas tú por él/ella cada vez que conoce a alguien nuevo."
          },
          {
            "q": "Quiere postularse a su primer empleo por su cuenta.",
            "good": "Lo apoyas revisando el proceso si lo pide, sin hacerlo por él/ella.",
            "bad": "Haces tú la solicitud de empleo en su nombre."
          },
          {
            "q": "Debe llenar un formulario o papeleo importante por su cuenta.",
            "good": "Lo acompañas para resolver dudas pero deja que él/ella lo complete.",
            "bad": "Llenas tú el formulario completo sin involucrarlo en el proceso."
          },
          {
            "q": "Quiere decidir qué y cuánto comer en las comidas familiares.",
            "good": "Confías en su criterio dentro de opciones saludables disponibles.",
            "bad": "Controlas cada porción y elección de comida que hace."
          },
          {
            "q": "Quiere elegir sus propios libros o contenidos de lectura.",
            "good": "Respetas su elección aunque no sea la que tú habrías elegido.",
            "bad": "Le impones las lecturas que a ti te parecen apropiadas."
          },
          {
            "q": "Quiere desarrollar un proyecto personal relacionado con su interés especial.",
            "good": "Le das tiempo y recursos para explorarlo a su manera.",
            "bad": "Rediriges el proyecto hacia lo que a ti te parece más 'productivo'."
          },
          {
            "q": "Quiere intentar una actividad nueva sin que lo acompañes la primera vez.",
            "good": "Evalúas el contexto y permites el intento con un plan de respaldo.",
            "bad": "Insistes en acompañarlo siempre, sin darle nunca la oportunidad de ir solo/a."
          },
          {
            "q": "Tiene un conflicto con un hermano que quiere resolver sin tu mediación.",
            "good": "Les das espacio para intentarlo antes de intervenir.",
            "bad": "Intervienes de inmediato resolviendo tú el conflicto entre hermanos."
          },
          {
            "q": "Quiere hacer las compras de sus propios útiles escolares.",
            "good": "Le das el presupuesto y permite que elija según sus necesidades.",
            "bad": "Compras tú los útiles sin llevarlo ni considerar su elección."
          },
          {
            "q": "Pierde algo importante y quiere buscarlo por su cuenta antes de pedir ayuda.",
            "good": "Le das tiempo para intentar resolverlo antes de intervenir.",
            "bad": "Buscas tú el objeto de inmediato sin dejarlo intentarlo primero."
          },
          {
            "q": "Quiere organizar su tiempo de la mañana sin que se lo recuerdes.",
            "good": "Confías en que use alarmas o recordatorios propios, disponible si falla al inicio.",
            "bad": "Le recuerdas cada paso de la mañana sin darle espacio de autogestión."
          },
          {
            "q": "Quiere elegir el horario de sus propias citas médicas dentro de lo posible.",
            "good": "Lo incluyes en la decisión del horario que más le acomode.",
            "bad": "Agendas tú las citas sin considerar su disponibilidad u opinión."
          },
          {
            "q": "Quiere participar activamente en decidir el contenido de las sesiones de terapia familiar.",
            "good": "Le das espacio para expresar qué temas le gustaría abordar.",
            "bad": "Decides tú los temas de terapia sin incluir su perspectiva."
          },
          {
            "q": "Quiere manejar sus propias contraseñas y cuentas digitales de forma segura.",
            "good": "Le enseñas buenas prácticas de seguridad y confías en su manejo.",
            "bad": "Controlas todas sus contraseñas sin darle ninguna privacidad digital."
          },
          {
            "q": "Quiere planear su propia celebración de cumpleaños.",
            "good": "Le das espacio real de decisión sobre cómo quiere celebrar.",
            "bad": "Organizas tú la celebración según lo que a ti te parece mejor."
          },
          {
            "q": "Quiere elegir en qué actividad de voluntariado participar.",
            "good": "Respetas su elección aunque no sea la que tú hubieras sugerido.",
            "bad": "Lo inscribes en la actividad de voluntariado que tú prefieres."
          },
          {
            "q": "Reconoce que necesita una pausa y quiere pedirla él/ella mismo/a.",
            "good": "Confías en su capacidad de identificar y comunicar esa necesidad.",
            "bad": "Decides tú cuándo necesita una pausa sin dejarlo pedirla."
          },
          {
            "q": "Quiere encargarse del mantenimiento de su propio equipo deportivo.",
            "good": "Le enseñas lo básico y confías en que lo mantenga por su cuenta.",
            "bad": "Revisas y mantienes tú el equipo sin involucrarlo en el proceso."
          },
          {
            "q": "Quiere negociar directamente con un hermano el reparto de una tarea.",
            "good": "Le das espacio para negociar antes de intervenir como mediador/a.",
            "bad": "Decides tú el reparto de la tarea entre ambos sin dejarlos negociar."
          },
          {
            "q": "Como joven adulto, quiere decidir dónde vivir.",
            "good": "Apoyas su proceso de decisión aunque no coincida con lo que esperabas.",
            "bad": "Insistes en que la única opción válida es la que tú prefieres."
          },
          {
            "q": "Quiere organizar su propio transporte hacia su primer trabajo.",
            "good": "Lo acompañas a explorar opciones y confías en que elija la mejor para él/ella.",
            "bad": "Decides tú cómo debe transportarse sin considerar su preferencia."
          },
          {
            "q": "Habla de dar un paso hacia vivir de forma más independiente.",
            "good": "Conversan juntos los pasos graduales hacia esa independencia.",
            "bad": "Rechazas la idea de plano sin considerar un proceso gradual."
          },
          {
            "q": "Quiere hablar directamente con su médico sobre su propio tratamiento.",
            "good": "Lo preparas y le das espacio para expresarse en la consulta.",
            "bad": "Hablas tú siempre con el médico sin dejarlo participar en la conversación."
          },
          {
            "q": "Quiere definir sus propias metas financieras a futuro.",
            "good": "Lo apoyas a pensar en metas realistas según su situación.",
            "bad": "Le impones tus propias metas financieras sin considerar las suyas."
          },
          {
            "q": "Quiere desarrollar un pequeño emprendimiento relacionado con su interés.",
            "good": "Lo apoyas con recursos básicos y confías en su iniciativa.",
            "bad": "Tomas el control del proyecto porque 'lo harías mejor tú'."
          },
          {
            "q": "Olvida un compromiso importante y debe asumir la responsabilidad.",
            "good": "Le permites enfrentar la consecuencia natural y aprender de ella.",
            "bad": "Resuelves tú la situación para que no enfrente ninguna consecuencia."
          },
          {
            "q": "Quiere decidir cómo usar su tiempo libre del fin de semana.",
            "good": "Le das autonomía real sobre cómo distribuir ese tiempo.",
            "bad": "Llenas tú su fin de semana de actividades sin consultarlo."
          },
          {
            "q": "Quiere resolver un malentendido con un profesor sin que intervengas primero.",
            "good": "Le das la oportunidad de intentarlo, disponible como respaldo.",
            "bad": "Contactas al profesor de inmediato sin dejarlo intentar resolverlo primero."
          },
          {
            "q": "Quiere elegir su propio médico o especialista de confianza.",
            "good": "Consideras su preferencia real al elegir al profesional.",
            "bad": "Eliges tú al especialista sin preguntar su opinión o comodidad."
          },
          {
            "q": "Quiere manejar la relación con su propia audiencia en línea si crea contenido.",
            "good": "Acuerdan límites de seguridad y confías en su manejo dentro de ellos.",
            "bad": "Controlas cada publicación y comentario sin darle ningún margen de autonomía."
          }
        ]
      },
      {
        "slug": "resolver-imprevistos",
        "nombre": "Resolver Imprevistos",
        "emoji": "🧯",
        "descripcion": "Reaccionar ante lo inesperado sin escalar el conflicto.",
        "situaciones": [
          {
            "q": "Se cancela una actividad que tu hijo/a esperaba con ilusión.",
            "good": "Reconoces su decepción y buscan juntos una alternativa concreta.",
            "bad": "Minimizas la decepción diciendo que 'no es tan importante'."
          },
          {
            "q": "Se pierde un objeto importante para tu hijo/a durante una salida.",
            "good": "Mantienes la calma y ayudas a buscar soluciones sin culpar de inmediato.",
            "bad": "Reaccionas con enojo culpándolo/a por 'no cuidar sus cosas'."
          },
          {
            "q": "El clima arruina un plan de vacaciones ya organizado.",
            "good": "Presentas el cambio con calma y ofreces una alternativa clara.",
            "bad": "Te frustras visiblemente frente a tu hijo/a por el cambio de planes."
          },
          {
            "q": "Un imprevisto de tráfico hace que lleguen tarde a algo importante.",
            "good": "Mantienes la calma y usas el tiempo de espera para regular a tu hijo/a si lo necesita.",
            "bad": "Te alteras y transmites esa tensión directamente a tu hijo/a."
          },
          {
            "q": "Se rompe algo que tu hijo/a estaba usando o construyendo.",
            "good": "Validas su frustración y exploras juntos si se puede reparar o rehacer.",
            "bad": "Le dices que 'no pasa nada' sin validar su frustración real."
          },
          {
            "q": "Cambia el lugar de una reunión familiar a último momento.",
            "good": "Comunicas el cambio con la información disponible y das apoyo para procesarlo.",
            "bad": "Ocultas el cambio hasta último momento para 'evitar el drama'."
          },
          {
            "q": "Un amigo cancela un plan de juego que tu hijo/a esperaba.",
            "good": "Acompañas la decepción y ofreces una actividad alternativa.",
            "bad": "Le restas importancia diciendo que 'ya jugará otro día'."
          },
          {
            "q": "Se olvida algo importante en casa justo al salir de viaje.",
            "good": "Buscas una solución práctica sin generar culpa ni pánico.",
            "bad": "Reaccionas con frustración visible que aumenta la tensión del momento."
          },
          {
            "q": "Un examen o evento escolar cambia de fecha sin previo aviso.",
            "good": "Ayudas a tu hijo/a a reorganizar sus expectativas con calma.",
            "bad": "Reaccionas con la misma sorpresa y frustración que él/ella, sin dar contención."
          },
          {
            "q": "Se presenta una emergencia médica menor durante una salida.",
            "good": "Actúas con calma priorizando la seguridad, explicando lo necesario a tu hijo/a.",
            "bad": "Reaccionas con pánico visible que aumenta la ansiedad de tu hijo/a."
          },
          {
            "q": "Un electrodoméstico o dispositivo importante deja de funcionar de repente.",
            "good": "Buscas una solución temporal manteniendo la rutina lo más estable posible.",
            "bad": "Permites que el caos del imprevisto desorganice toda la rutina del día."
          },
          {
            "q": "Se cancela el transporte planeado para una salida importante.",
            "good": "Buscas una alternativa con calma, explicando el cambio a tu hijo/a.",
            "bad": "Cancelas la salida por completo sin buscar alternativas, generando frustración."
          },
          {
            "q": "Un familiar cambia de opinión sobre una visita ya planeada.",
            "good": "Ajustas el plan con flexibilidad, comunicando el cambio a tu hijo/a.",
            "bad": "Culpas al familiar delante de tu hijo/a, sumando tensión emocional."
          },
          {
            "q": "Se agota un producto o alimento específico que tu hijo/a necesita.",
            "good": "Buscas una alternativa aceptable con anticipación antes de que sea urgente.",
            "bad": "Esperas hasta el último momento sin prever la necesidad real."
          },
          {
            "q": "Un plan de actividad grupal cambia de formato a último momento.",
            "good": "Explicas el nuevo formato con claridad y das tiempo para procesarlo.",
            "bad": "Asumes que el cambio de formato no necesita explicación adicional."
          },
          {
            "q": "Se presenta una fila o espera mucho más larga de lo esperado.",
            "good": "Preparas actividades o estrategias de espera para sobrellevar el imprevisto.",
            "bad": "Exiges paciencia sin ofrecer ninguna herramienta para sobrellevar la espera."
          },
          {
            "q": "Un viaje familiar sufre un retraso significativo.",
            "good": "Usas el tiempo de espera para regular el ambiente y ofrecer distracciones.",
            "bad": "Permites que la tensión del retraso se transmita directamente a todos."
          },
          {
            "q": "Se cancela una cita médica importante sin previo aviso.",
            "good": "Reprogramas con calma explicando el cambio de forma clara a tu hijo/a.",
            "bad": "Muestras frustración intensa frente a tu hijo/a por la cancelación."
          },
          {
            "q": "Un evento especial se ve interrumpido por un problema técnico.",
            "good": "Mantienes la calma y buscas una solución alternativa junto a tu hijo/a.",
            "bad": "Dejas que la frustración por el problema técnico arruine todo el evento."
          },
          {
            "q": "Se presenta un cambio de última hora en quién cuida a tu hijo/a.",
            "good": "Presentas el cambio con anticipación posible y aseguras continuidad y seguridad.",
            "bad": "Informas el cambio de cuidador justo en el momento, sin preparación previa."
          },
          {
            "q": "Se corta la electricidad en casa durante la noche.",
            "good": "Mantienes la calma y conviertes la situación en algo manejable con linternas o velas.",
            "bad": "Te alteras visiblemente, aumentando la ansiedad de tu hijo/a."
          },
          {
            "q": "Se cae el internet justo durante una clase virtual importante.",
            "good": "Buscas una solución alternativa con calma mientras informas al colegio.",
            "bad": "Te frustras culpando a tu hijo/a por no haber avisado antes."
          },
          {
            "q": "Tu hijo/a se enferma repentinamente en medio de un día de colegio.",
            "good": "Vas a buscarlo/a con calma, priorizando su bienestar sobre el horario.",
            "bad": "Muestras fastidio por tener que interrumpir tu día."
          },
          {
            "q": "Te enfermas tú y debes reorganizar los planes del día.",
            "good": "Explicas la situación con calma y ajustan el plan juntos.",
            "bad": "Te disculpas con frustración excesiva, generando culpa en tu hijo/a."
          },
          {
            "q": "El auto se descompone en medio de un viaje familiar.",
            "good": "Mantienes la calma y explicas el plan de contingencia con claridad.",
            "bad": "Muestras pánico o enojo frente a tu hijo/a por la avería."
          },
          {
            "q": "Se retrasa o cancela un vuelo durante un viaje.",
            "good": "Usas el tiempo de espera para mantener la calma y buscar alternativas.",
            "bad": "Te alteras visiblemente, transmitiendo la tensión a tu hijo/a."
          },
          {
            "q": "Pierde su billetera o documento de identidad durante un viaje.",
            "good": "Mantienes la calma y buscan juntos una solución práctica.",
            "bad": "Le recriminas la pérdida en medio del estrés del momento."
          },
          {
            "q": "Se derrama comida o bebida en un restaurante.",
            "good": "Manejas el incidente con calma sin generar vergüenza para tu hijo/a.",
            "bad": "Reaccionas con molestia visible frente a otras personas."
          },
          {
            "q": "Tiene una reacción alérgica inesperada durante una comida.",
            "good": "Actúas con calma priorizando su seguridad y explicando lo necesario.",
            "bad": "Reaccionas con pánico visible que aumenta su angustia."
          },
          {
            "q": "Se lastima durante la práctica de un deporte.",
            "good": "Mantienes la calma evaluando la gravedad antes de reaccionar.",
            "bad": "Reaccionas con alarma excesiva que asusta más a tu hijo/a."
          },
          {
            "q": "Estalla una discusión entre hermanos en un lugar público.",
            "good": "Intervienes con calma, separando la situación sin humillar a nadie.",
            "bad": "Los regañas con enojo frente a otras personas, aumentando la tensión."
          },
          {
            "q": "Se queda sin batería el celular justo cuando lo necesitas para coordinar algo.",
            "good": "Buscas una solución alternativa sin generar drama por la situación.",
            "bad": "Te frustras culpando a tu hijo/a por no haber cargado el teléfono."
          },
          {
            "q": "Olvidan la medicación en casa al salir de viaje.",
            "good": "Buscas una solución práctica sin generar pánico.",
            "bad": "Reaccionas con frustración intensa que agrava la ansiedad de tu hijo/a."
          },
          {
            "q": "Llega un familiar de visita sin previo aviso.",
            "good": "Ajustas el plan con flexibilidad, avisando a tu hijo/a del cambio con calma.",
            "bad": "Muestras fastidio evidente frente al familiar y tu hijo/a."
          },
          {
            "q": "El colegio llama para informar un incidente de conducta inesperado.",
            "good": "Escuchas con calma antes de reaccionar, buscando entender lo ocurrido.",
            "bad": "Reaccionas con enojo inmediato antes de conocer todos los detalles."
          },
          {
            "q": "Suena una alarma de incendio inesperada durante la clase.",
            "good": "El colegio maneja la situación con calma siguiendo el protocolo.",
            "bad": "Se genera pánico innecesario que aumenta la angustia de tu hijo/a."
          },
          {
            "q": "Se pierde en un centro comercial por un momento.",
            "good": "Mantienes la calma al reencontrarlo/a, validando el susto sin regañar.",
            "bad": "Lo/la regañas con dureza en cuanto lo/la encuentras."
          },
          {
            "q": "Tiene una prueba sorpresa que le genera estrés inesperado.",
            "good": "Lo ayudas a procesar el estrés con calma después del colegio.",
            "bad": "Minimizas su estrés diciendo que 'no es para tanto'."
          },
          {
            "q": "Cambia el horario de trabajo de un adulto y afecta quién lo recoge.",
            "good": "Reorganizas la logística con calma, avisando con la mayor anticipación posible.",
            "bad": "Improvisas con enojo evidente frente a tu hijo/a por el cambio."
          },
          {
            "q": "Un hermano se enferma durante una salida familiar.",
            "good": "Ajustan el plan con calma priorizando el bienestar de ambos hijos.",
            "bad": "Culpas al hermano enfermo por 'arruinar' la salida frente a todos."
          },
          {
            "q": "Se pierde la mascota de la familia.",
            "good": "Buscan juntos con calma, validando la preocupación de tu hijo/a.",
            "bad": "Reaccionas con pánico o enojo que intensifica su angustia."
          },
          {
            "q": "La mascota tiene una emergencia médica inesperada.",
            "good": "Actúas con calma priorizando la atención veterinaria, explicando lo necesario.",
            "bad": "Muestras pánico excesivo que asusta más a tu hijo/a."
          },
          {
            "q": "Un lugar público resulta mucho más ruidoso o concurrido de lo esperado.",
            "good": "Buscas con calma una salida o espacio tranquilo para tu hijo/a.",
            "bad": "Le exiges 'aguantar' sin ofrecer ninguna solución al malestar."
          },
          {
            "q": "Cambia el lugar o formato de un concierto o evento a último momento.",
            "good": "Explicas el cambio con calma y ajustan las expectativas juntos.",
            "bad": "Te frustras visiblemente por el cambio frente a tu hijo/a."
          },
          {
            "q": "Se traba o se daña el computador justo cuando debía entregar una tarea.",
            "good": "Buscan juntos una solución práctica sin generar pánico adicional.",
            "bad": "Le recriminas no haber guardado el trabajo antes, sumando presión."
          },
          {
            "q": "Se cancela una sesión de terapia de improviso.",
            "good": "Reprogramas con calma explicando el cambio con claridad.",
            "bad": "Muestras frustración evidente frente a tu hijo/a por la cancelación."
          },
          {
            "q": "Cambia el clima de forma repentina arruinando la ropa planeada para un evento.",
            "good": "Buscas una solución práctica con calma antes de salir.",
            "bad": "Te alteras por el cambio de clima frente a tu hijo/a."
          },
          {
            "q": "Falta dinero para algo que habían planeado comprar juntos.",
            "good": "Explicas la situación con honestidad y buscan una alternativa juntos.",
            "bad": "Muestras frustración o vergüenza excesiva frente a tu hijo/a."
          },
          {
            "q": "Se pierde un permiso o documento importante para el colegio.",
            "good": "Buscas una solución práctica con calma, sin generar culpa excesiva.",
            "bad": "Le recriminas la pérdida del documento en medio del apuro."
          },
          {
            "q": "Cambia el profesor asignado de forma inesperada y genera angustia.",
            "good": "Escuchas su preocupación con calma antes de buscar información.",
            "bad": "Minimizas su angustia diciendo que 'no es gran cosa'."
          },
          {
            "q": "Un desconocido hace un comentario incómodo sobre la conducta de tu hijo/a en público.",
            "good": "Respondes con calma priorizando la tranquilidad de tu hijo/a sobre la opinión ajena.",
            "bad": "Reaccionas con vergüenza visible que refuerza la sensación de ser un problema."
          },
          {
            "q": "Tu hijo/a tiene una crisis en un lugar público.",
            "good": "Buscas un espacio tranquilo y lo acompañas con calma hasta que se regule.",
            "bad": "Te muestras avergonzado/a o enojado/a frente a otras personas presentes."
          },
          {
            "q": "Cambia de improviso el plan por una emergencia de otro familiar.",
            "good": "Explicas la situación con calma apenas la conoces.",
            "bad": "Cambias el plan sin explicación, generando confusión y ansiedad."
          },
          {
            "q": "El médico da un resultado inesperado en una consulta de rutina.",
            "good": "Procesas la noticia con calma antes de comunicarla a tu hijo/a.",
            "bad": "Reaccionas con pánico visible frente a tu hijo/a en el consultorio."
          },
          {
            "q": "Se retrasa mucho el transporte público en un día importante.",
            "good": "Usas la espera para mantener la calma y ajustar expectativas juntos.",
            "bad": "Te alteras visiblemente, transmitiendo la tensión del retraso."
          },
          {
            "q": "Surge un malentendido entre amigos que tu hijo/a presencia con angustia.",
            "good": "Lo ayudas a procesar lo ocurrido con calma después del hecho.",
            "bad": "Minimizas la situación diciendo que 'los amigos se pelean y ya'."
          },
          {
            "q": "Aparecen insectos o animales inesperados durante una acampada.",
            "good": "Manejas la situación con calma, sin transmitir miedo excesivo.",
            "bad": "Reaccionas con pánico que contagia el miedo a tu hijo/a."
          },
          {
            "q": "Llega un huésped inesperado que se queda más tiempo del previsto en casa.",
            "good": "Ajustas la rutina con flexibilidad, explicando el cambio a tu hijo/a.",
            "bad": "Dejas que el desorden genere caos sin ninguna explicación."
          },
          {
            "q": "Falla el dispositivo justo durante una videollamada importante.",
            "good": "Buscas una solución alternativa con calma sin culpar a nadie.",
            "bad": "Te frustras visiblemente durante la llamada frente a tu hijo/a."
          },
          {
            "q": "Recibe una calificación mucho más baja de lo esperado.",
            "good": "Acompañas la decepción con calma antes de buscar soluciones juntos.",
            "bad": "Reaccionas con enojo inmediato por la calificación baja."
          },
          {
            "q": "Se anuncia un cambio familiar importante que afecta la rutina.",
            "good": "Explicas la situación con calma, dando espacio para preguntas.",
            "bad": "Anuncias el cambio de forma abrupta sin espacio para procesar."
          },
          {
            "q": "Llega un pedido equivocado de una compra en línea que esperaba con ilusión.",
            "good": "Manejas el reclamo con calma explicando la situación a tu hijo/a.",
            "bad": "Te frustras visiblemente culpando a la tienda frente a tu hijo/a."
          },
          {
            "q": "Olvida el traje de baño justo el día de ir a la piscina.",
            "good": "Buscan juntos una solución práctica sin generar drama.",
            "bad": "Le recriminas el olvido arruinando el ánimo de la salida."
          },
          {
            "q": "Hay una espera mucho más larga de lo esperado en la farmacia.",
            "good": "Preparas alguna actividad o estrategia para sobrellevar la espera.",
            "bad": "Exiges paciencia sin ofrecer ninguna herramienta para la espera."
          },
          {
            "q": "Hay ruido de construcción inesperado cerca de casa que altera la rutina.",
            "good": "Buscas alternativas de espacio o tiempo mientras dura la molestia.",
            "bad": "Ignoras el impacto del ruido en tu hijo/a sin ajustar nada."
          },
          {
            "q": "Cambia de improviso el horario de una cita con el dentista.",
            "good": "Reorganizas el día con calma explicando el cambio a tu hijo/a.",
            "bad": "Te frustras visiblemente por el cambio de horario."
          },
          {
            "q": "Se quedan sin llaves y no pueden entrar a la casa.",
            "good": "Mantienes la calma buscando una solución mientras tranquilizas a tu hijo/a.",
            "bad": "Te alteras visiblemente, generando más ansiedad en el momento."
          },
          {
            "q": "Hay que ir de improviso a la sala de emergencias.",
            "good": "Mantienes la calma explicando lo necesario según su edad y comprensión.",
            "bad": "Muestras pánico visible que aumenta el miedo de tu hijo/a."
          },
          {
            "q": "Cambia la disponibilidad de la niñera de un momento a otro.",
            "good": "Buscas una alternativa con calma, informando a tu hijo/a del cambio.",
            "bad": "Te alteras frente a tu hijo/a por la situación imprevista."
          },
          {
            "q": "El auto falla camino a un evento importante.",
            "good": "Mantienes la calma buscando una alternativa de transporte.",
            "bad": "Muestras frustración intensa que tensiona todo el trayecto."
          },
          {
            "q": "Olvida la mochila en el colegio con tareas importantes adentro.",
            "good": "Buscan juntos una solución práctica sin generar pánico excesivo.",
            "bad": "Le recriminas el olvido sumando presión a la situación."
          },
          {
            "q": "Hay un simulacro de incendio inesperado durante un examen importante.",
            "good": "Ayudas a tu hijo/a a procesar la interrupción con calma después.",
            "bad": "Minimizas su frustración por la interrupción del examen."
          },
          {
            "q": "Chocan dos eventos importantes en la misma fecha y hora.",
            "good": "Ayudas a decidir juntos con calma cuál priorizar.",
            "bad": "Decides tú solo/a sin considerar la opinión de tu hijo/a."
          },
          {
            "q": "Tiene una reacción alérgica inesperada durante una comida familiar.",
            "good": "Actúas con calma priorizando su seguridad ante todos los presentes.",
            "bad": "Reaccionas con alarma excesiva que avergüenza a tu hijo/a."
          },
          {
            "q": "Surge un conflicto inesperado con un familiar durante una reunión.",
            "good": "Manejas la situación con calma sin involucrar a tu hijo/a en la tensión.",
            "bad": "Discutes abiertamente frente a tu hijo/a, aumentando su incomodidad."
          },
          {
            "q": "Cambia de improviso el evento escolar de un hermano y afecta el plan familiar.",
            "good": "Ajustan el plan con flexibilidad explicando el cambio a todos.",
            "bad": "Culpas al hermano por el cambio de planes frente a la familia."
          },
          {
            "q": "Pierde una competencia o juego de forma contundente.",
            "good": "Validas su frustración sin minimizar el resultado.",
            "bad": "Le restas importancia a su frustración diciendo 'no es para tanto'."
          },
          {
            "q": "Falla un dispositivo de apoyo o movilidad que usa habitualmente.",
            "good": "Buscas una solución temporal con calma mientras se repara o reemplaza.",
            "bad": "Te frustras visiblemente por el inconveniente frente a tu hijo/a."
          },
          {
            "q": "Pierde la tarea justo antes de la fecha de entrega.",
            "good": "Ayudas a buscar una solución práctica sin generar pánico excesivo.",
            "bad": "Le recriminas la pérdida sumando presión al momento de estrés."
          },
          {
            "q": "Lo despiden antes de hora del colegio sin previo aviso.",
            "good": "Ajustas la logística con calma, avisando a quien deba recogerlo.",
            "bad": "Te alteras visiblemente por el cambio de horario imprevisto."
          },
          {
            "q": "Cambia la dosis de una medicación por indicación médica reciente.",
            "good": "Explicas el cambio con calma y acompañas el ajuste juntos.",
            "bad": "Aplicas el cambio sin explicación, generando confusión en tu hijo/a."
          },
          {
            "q": "Cambia el equipo o grupo asignado para un proyecto escolar.",
            "good": "Escuchas su preocupación con calma antes de buscar soluciones.",
            "bad": "Minimizas la situación diciendo que 'da igual con quién trabaje'."
          },
          {
            "q": "Un vecino se queja por ruido durante una celebración en casa.",
            "good": "Manejas la situación con calma sin generar vergüenza en tu hijo/a.",
            "bad": "Reaccionas con enojo frente al vecino y tu hijo/a presente."
          },
          {
            "q": "Cambia el alojamiento reservado para un viaje por sobreventa del hotel.",
            "good": "Buscas una alternativa con calma, explicando el cambio a tu hijo/a.",
            "bad": "Te frustras visiblemente frente a tu hijo/a por el cambio de planes."
          },
          {
            "q": "Se pierde el equipaje durante un viaje.",
            "good": "Mantienes la calma gestionando la situación con la aerolínea.",
            "bad": "Te alteras visiblemente, transmitiendo ansiedad a tu hijo/a."
          },
          {
            "q": "Se corta la electricidad durante una tormenta.",
            "good": "Mantienes la calma ofreciendo actividades alternativas con luz de linterna.",
            "bad": "Muestras ansiedad visible que aumenta el miedo de tu hijo/a."
          },
          {
            "q": "Se cancela una celebración familiar importante por una enfermedad repentina.",
            "good": "Acompañas la decepción con calma buscando una alternativa.",
            "bad": "Muestras frustración excesiva que agrava la decepción de tu hijo/a."
          },
          {
            "q": "Un evento público bloquea la ruta planeada, cambiando los planes del día.",
            "good": "Buscas una alternativa con calma, explicando el cambio a tu hijo/a.",
            "bad": "Te frustras visiblemente por el cambio de ruta imprevisto."
          },
          {
            "q": "Falla la conexión durante un examen en línea importante.",
            "good": "Contactas al colegio con calma buscando una solución práctica.",
            "bad": "Te alteras frente a tu hijo/a, sumando presión al momento de estrés."
          },
          {
            "q": "Pierde los lentes o el audífono justo antes de salir.",
            "good": "Buscan juntos con calma antes de considerar alternativas.",
            "bad": "Le recriminas la pérdida aumentando la tensión del momento."
          },
          {
            "q": "Cambia el grupo o la sección asignada para el próximo año escolar.",
            "good": "Escuchas su preocupación con calma antes de buscar información.",
            "bad": "Minimizas su inquietud diciendo que 'ya se acostumbrará'."
          },
          {
            "q": "Surge una emergencia financiera inesperada que afecta un viaje planeado.",
            "good": "Explicas la situación con honestidad y ajustan el plan juntos.",
            "bad": "Ocultas la situación hasta el último momento, generando más confusión."
          },
          {
            "q": "Presencia una discusión fuerte entre dos amigos suyos.",
            "good": "Lo ayudas a procesar lo presenciado con calma después del hecho.",
            "bad": "Minimizas lo ocurrido sin darle espacio para hablar de ello."
          },
          {
            "q": "Olvida el cargador de un dispositivo esencial durante un viaje.",
            "good": "Buscan juntos una solución práctica sin generar tensión.",
            "bad": "Le recriminas el olvido sumando estrés al viaje."
          },
          {
            "q": "Cambia el horario de visitas con el otro progenitor de improviso.",
            "good": "Explicas el cambio con calma tan pronto como lo sabes.",
            "bad": "Cambias el horario sin explicación, generando confusión y ansiedad."
          },
          {
            "q": "Cambia el lugar de una cita habitual sin previo aviso.",
            "good": "Confirmas la nueva ubicación con calma y informas con tiempo.",
            "bad": "Llegan al lugar equivocado por falta de comunicación, generando estrés."
          },
          {
            "q": "Hay una fila de seguridad mucho más larga de lo esperado en un evento.",
            "good": "Preparas alguna estrategia o distracción para sobrellevar la espera.",
            "bad": "Exiges paciencia sin ofrecer ninguna herramienta para la espera larga."
          },
          {
            "q": "Olvida el permiso firmado necesario para una excursión escolar.",
            "good": "Buscas una solución práctica y rápida sin generar pánico.",
            "bad": "Le recriminas el olvido en medio de la premura del momento."
          },
          {
            "q": "Se presenta un problema de salud inesperado en medio de una celebración importante.",
            "good": "Priorizas con calma la atención necesaria sin arruinar el ánimo general.",
            "bad": "Reaccionas con pánico que arruina el ambiente de la celebración."
          },
          {
            "q": "Cambia de improviso el plan de quién supervisa una actividad extraescolar.",
            "good": "Informas el cambio con calma y aseguras la continuidad de la supervisión.",
            "bad": "Informas el cambio a último momento, sin preparación previa."
          }
        ]
      }
    ]
  },
  {
    "slug": "reparacion",
    "nombre": "Reparación Relacional",
    "color": "#06b6d4",
    "icon": "<path d=\"M16.03 8.3L12.59 13 8.7 16.89c-.61.61-1.59.63-2.22.05l-4.24-3.9 6.27-9.56c.4-.61.35-1.42-.11-1.97-.57-.68-1.59-.72-2.2-.09L.79 6.78c-.53.53-.79 1.25-.79 1.99v3.1c0 1.22.75 2.29 1.88 2.68l7.63 2.63c1.11.38 2.33.05 3.12-.79l4.49-4.49c.6-.61.6-1.59 0-2.2-.6-.59-1.58-.6-2.18-.01l.09.01zM23.11 6.8c-.53-.53-1.39-.53-1.92 0l-1.6 1.6-1.72-1.72c-.59-.59-1.54-.59-2.13 0-.58.59-.58 1.54-.01 2.13l3.34 3.34c.53.53 1.39.53 1.92 0l2.12-2.12c.53-.53.53-1.39 0-1.92z\"/>",
    "habilidades": [
      {
        "slug": "reconocer-errores-propios",
        "nombre": "Reconocer Errores Propios",
        "emoji": "🪞",
        "descripcion": "Ver el propio rol en el conflicto sin caer en la culpa paralizante.",
        "situaciones": [
          {
            "q": "Reaccionaste con enojo excesivo ante una conducta que era una necesidad, no un desafío.",
            "good": "Reconoces internamente el malentendido antes de que escale más.",
            "bad": "Justificas tu reacción culpando a tu hijo/a por 'provocarte'."
          },
          {
            "q": "Te diste cuenta de que interpretaste mal una situación de tu hijo/a.",
            "good": "Aceptas el error de interpretación sin castigarte excesivamente por ello.",
            "bad": "Te flagelas tanto que terminas necesitando que tu hijo/a te consuele a ti."
          },
          {
            "q": "Impusiste una regla sin explicar el porqué y generó un conflicto innecesario.",
            "good": "Revisas tu propia decisión y consideras ajustarla con más contexto.",
            "bad": "Mantienes la regla rígidamente solo para 'no dar tu brazo a torcer'."
          },
          {
            "q": "Levantaste la voz en un momento de estrés propio, no por algo grave de tu hijo/a.",
            "good": "Reconoces que tu propio estado influyó en la reacción desproporcionada.",
            "bad": "Le echas la culpa completa a tu hijo/a por 'hacerte reaccionar así'."
          },
          {
            "q": "Comparaste a tu hijo/a con otro niño de forma hiriente sin darte cuenta al principio.",
            "good": "Notas el impacto de tus palabras y reconsideras esa forma de hablar.",
            "bad": "Minimizas el comentario diciendo que 'no era para tanto'."
          },
          {
            "q": "Ignoraste una señal de sobrecarga y la situación escaló a crisis.",
            "good": "Revisas qué señal pasaste por alto para aprender de ello.",
            "bad": "Culpas a tu hijo/a por 'explotar de la nada' sin revisar tu propio rol."
          },
          {
            "q": "Prometiste algo y no pudiste cumplirlo, generando desconfianza.",
            "good": "Reconoces el incumplimiento como tuyo, más allá de las circunstancias.",
            "bad": "Justificas el incumplimiento sin reconocer el impacto en tu hijo/a."
          },
          {
            "q": "Reaccionaste con sarcasmo ante algo que tu hijo/a dijo con sinceridad.",
            "good": "Notas que el sarcasmo no fue apropiado para su forma de comunicarse.",
            "bad": "Sigues usando ese tono porque 'es tu forma de ser'."
          },
          {
            "q": "Tomaste una decisión importante sin considerar la opinión de tu hijo/a.",
            "good": "Reconoces que debiste incluirlo/a en esa decisión.",
            "bad": "Justificas la decisión unilateral porque 'eres quien manda en casa'."
          },
          {
            "q": "Te frustraste visiblemente por algo que no era responsabilidad de tu hijo/a.",
            "good": "Identificas que la frustración venía de otra fuente, no de él/ella.",
            "bad": "Dejas que tu hijo/a asuma la culpa de tu frustración externa."
          },
          {
            "q": "No cumpliste con dar tiempo de recuperación tras una crisis.",
            "good": "Reconoces que la presión que ejerciste después no ayudó a la situación.",
            "bad": "Insistes en que 'ya había pasado suficiente tiempo' para justificar tu presión."
          },
          {
            "q": "Hiciste una broma que resultó hiriente sin intención.",
            "good": "Notas el impacto real de la broma más allá de tu intención original.",
            "bad": "Insistes en que 'era solo una broma' sin considerar cómo la vivió tu hijo/a."
          },
          {
            "q": "Delegaste una responsabilidad muy exigente sin evaluar si estaba listo/a.",
            "good": "Reconoces que sobreestimaste su capacidad actual en ese momento.",
            "bad": "Le atribuyes el fracaso completamente a su falta de esfuerzo."
          },
          {
            "q": "Reaccionaste con desconfianza ante algo que tu hijo/a explicó honestamente.",
            "good": "Reconsideras tu reacción al notar que no había motivo real de desconfianza.",
            "bad": "Mantienes la desconfianza esperando que él/ella 'demuestre' lo contrario."
          },
          {
            "q": "No validaste una emoción importante en el momento en que la expresó.",
            "good": "Notas la oportunidad perdida y planeas abordarla después con calma.",
            "bad": "Dejas pasar el momento sin ninguna reflexión posterior."
          },
          {
            "q": "Interrumpiste constantemente mientras tu hijo/a trataba de explicarte algo.",
            "good": "Reconoces el patrón de interrupción como algo tuyo a trabajar.",
            "bad": "Le dices que 'habla muy lento' en vez de notar tu propia impaciencia."
          },
          {
            "q": "Aplicaste una consecuencia desproporcionada a la situación real.",
            "good": "Revisas la proporcionalidad de la consecuencia y la ajustas si es necesario.",
            "bad": "Mantienes la consecuencia por completo para 'no parecer inconsistente'."
          },
          {
            "q": "Te olvidaste de algo importante que le habías prometido a tu hijo/a.",
            "good": "Reconoces el olvido como propio y su impacto en la confianza.",
            "bad": "Le restas importancia al olvido porque 'tienes muchas cosas que recordar'."
          },
          {
            "q": "Mostraste favoritismo involuntario hacia un hermano/a en una situación puntual.",
            "good": "Notas el patrón y reflexionas sobre cómo equilibrarlo.",
            "bad": "Niegas cualquier favoritismo sin examinar realmente la situación."
          },
          {
            "q": "Reaccionaste desde tu propio cansancio acumulado, no desde la situación real.",
            "good": "Reconoces que tu estado personal influyó más de lo debido en la reacción.",
            "bad": "Le atribuyes toda la responsabilidad de tu reacción a la conducta de tu hijo/a."
          },
          {
            "q": "Forzaste el contacto visual de tu hijo/a en una reunión familiar y notaste su ansiedad.",
            "good": "Reconoces que la exigencia fue más por costumbre social que por su bienestar.",
            "bad": "Insistes en que 'mirar a los ojos es básico' sin considerar su malestar."
          },
          {
            "q": "Te burlaste sin querer de la forma en que repetía datos sobre su tema favorito.",
            "good": "Notas que el comentario restó valor a algo que le da seguridad.",
            "bad": "Argumentas que 'ya cansa escuchar siempre lo mismo'."
          },
          {
            "q": "Cambiaste su rutina de sábado sin avisar porque llegó una visita inesperada.",
            "good": "Reconoces que el cambio brusco, no un capricho suyo, generó la crisis.",
            "bad": "Piensas que 'debería poder adaptarse' sin revisar tu propio aviso tardío."
          },
          {
            "q": "Le contaste su diagnóstico a un familiar sin pedirle permiso antes.",
            "good": "Te das cuenta de que esa información era suya para decidir compartir.",
            "bad": "Justificas que 'era solo familia cercana, no tenía nada de malo'."
          },
          {
            "q": "Lo/la obligaste a saludar de beso a un pariente pese a su incomodidad visible.",
            "good": "Reconoces que priorizaste la cortesía social por encima de su límite corporal.",
            "bad": "Insistes en que 'un beso no le hace daño a nadie'."
          },
          {
            "q": "Llamaste 'capricho' su rechazo a cierta textura de ropa en la tienda.",
            "good": "Notas que la sensación era real para él/ella, no un capricho pasajero.",
            "bad": "Sigues pensando que 'se queja de la nada' sin revisar tu juicio."
          },
          {
            "q": "Asumiste que fingía dolor de estómago para no ir a la escuela.",
            "good": "Consideras que pudo ser una señal real de sobrecarga, no manipulación.",
            "bad": "Te mantienes convencido/a de que 'solo quería quedarse en casa'."
          },
          {
            "q": "Grabaste un video de su crisis pensando en mostrárselo después.",
            "good": "Reconoces que registrar ese momento sin su consentimiento fue invasivo.",
            "bad": "Justificas que 'era para que viera cómo se pone'."
          },
          {
            "q": "Comparaste en voz alta lo fácil que era todo para su hermano/a durante la cena.",
            "good": "Te das cuenta del daño de esa comparación hecha frente a la familia.",
            "bad": "Dices que 'fue solo una observación, no para tanto'."
          },
          {
            "q": "Forzaste un corte de pelo pese a la angustia sensorial que mostraba.",
            "good": "Reconoces que ignoraste una señal clara de malestar para priorizar la estética.",
            "bad": "Insistes en que 'tenía que verse presentable' sin más revisión."
          },
          {
            "q": "Le exigiste que 'se comportara normal' para una foto familiar de cumpleaños.",
            "good": "Notas que le pediste enmascarar su malestar por una imagen.",
            "bad": "Argumentas que 'solo era una foto, no pedías tanto'."
          },
          {
            "q": "Reaccionaste con vergüenza y dureza ante su stimming en un restaurante lleno.",
            "good": "Reconoces que tu incomodidad social pesó más que su necesidad real.",
            "bad": "Justificas tu reacción diciendo que 'llamaba demasiado la atención'."
          },
          {
            "q": "Asumiste que su crisis fue una estrategia para librarse de las tareas.",
            "good": "Reconsideras si realmente había sobrecarga detrás de esa crisis.",
            "bad": "Mantienes que 'sabe manipular muy bien cuando le conviene'."
          },
          {
            "q": "No lo/la defendiste cuando un familiar hizo un comentario hiriente sobre él/ella.",
            "good": "Reconoces que tu silencio en ese momento también dolió.",
            "bad": "Justificas tu silencio diciendo que 'no quisiste hacer un problema familiar'."
          },
          {
            "q": "Comparaste su progreso con lo que esperaba el/la terapeuta, sintiéndote decepcionado/a.",
            "good": "Notas que trasladaste una expectativa externa como si fuera un fracaso suyo.",
            "bad": "Insistes en que 'debería avanzar más rápido' sin revisar tu propia expectativa."
          },
          {
            "q": "Descartaste su relato de acoso escolar pensando que exageraba.",
            "good": "Reconsideras si tu descreimiento inicial le cerró una puerta importante.",
            "bad": "Sigues pensando que 'siempre exagera todo un poco'."
          },
          {
            "q": "Le dijiste que sus problemas de sueño eran solo por 'querer quedarse despierto/a'.",
            "good": "Reconoces que no indagaste la causa real detrás del insomnio.",
            "bad": "Mantienes que 'es puro capricho de horario' sin más revisión."
          },
          {
            "q": "Interpretaste como desafío algo que en realidad era incapacidad real en el momento.",
            "good": "Notas que confundiste 'no puede' con 'no quiere'.",
            "bad": "Insistes en que 'no quiso' aunque la situación mostraba lo contrario."
          },
          {
            "q": "Le exigiste que hablara de sus sentimientos en el auto cuando claramente no estaba listo/a.",
            "good": "Reconoces que forzaste el momento sin respetar su ritmo emocional.",
            "bad": "Justificas la insistencia diciendo que 'si no hablas ahora, nunca hablas'."
          },
          {
            "q": "Reaccionaste con fastidio al ruido de su stimming mientras conducías.",
            "good": "Reconoces que tu fastidio, no su conducta, fue lo desproporcionado.",
            "bad": "Le pides que 'deje de hacer ese ruido' sin considerar su necesidad real."
          },
          {
            "q": "Le echaste en cara el estrés familiar del mes sin que él/ella tuviera responsabilidad real.",
            "good": "Reconoces que descargaste una tensión que no le correspondía.",
            "bad": "Insistes en que 'algo tiene que ver' sin evidencia real de eso."
          },
          {
            "q": "Cambiaste una rutina establecida por tu propia conveniencia sin avisarle antes.",
            "good": "Notas que priorizaste tu comodidad sobre su necesidad de anticipación.",
            "bad": "Argumentas que 'un cambio pequeño no debería afectar tanto'."
          },
          {
            "q": "Te burlaste sin pensarlo de su estrategia de afrontamiento delante de sus amigos.",
            "good": "Reconoces que expusiste algo que él/ella usa para sentirse seguro/a.",
            "bad": "Dices que 'fue solo una broma entre todos'."
          },
          {
            "q": "Asumiste que fingía enfermedad justo el día de un examen.",
            "good": "Consideras que la ansiedad ante el examen pudo ser real y no una excusa.",
            "bad": "Te mantienes en que 'siempre se enferma cuando le conviene'."
          },
          {
            "q": "No defendiste a tu hijo/a de un comentario despectivo de un abuelo o tío.",
            "good": "Reconoces que callar en ese momento lo/la dejó desprotegido/a.",
            "bad": "Justificas tu silencio diciendo que 'son cosas de la generación de ellos'."
          },
          {
            "q": "Le mostraste a otro familiar un video de su crisis sin pedirle permiso.",
            "good": "Te das cuenta de que expusiste un momento vulnerable sin su consentimiento.",
            "bad": "Argumentas que 'era solo para que entendieran mejor la situación'."
          },
          {
            "q": "Lo/la comparaste desfavorablemente frente a su propio maestro/a.",
            "good": "Reconoces el daño de esa comparación hecha delante de una figura de autoridad.",
            "bad": "Dices que 'era una forma de motivarlo/a a esforzarse más'."
          },
          {
            "q": "Lo/la presionaste a socializar en una fiesta pese a señales claras de agobio.",
            "good": "Notas que ignoraste el enmascaramiento visible por priorizar el plan social.",
            "bad": "Insistes en que 'ya estando ahí, tenía que aguantar un rato más'."
          },
          {
            "q": "Llamaste 'manía' una necesidad sensorial real sobre cierta ropa en la tienda.",
            "good": "Reconoces que descalificaste una necesidad sensorial genuina.",
            "bad": "Mantienes que 'está siendo demasiado quisquilloso/a' sin más revisión."
          },
          {
            "q": "Amenazaste con quitarle su interés especial como forma de castigo.",
            "good": "Reconoces que usar algo tan importante para él/ella como amenaza fue desproporcionado.",
            "bad": "Justificas la amenaza diciendo que 'era la única forma de que reaccionara'."
          },
          {
            "q": "Programaste una actividad o terapia nueva sin preguntarle su opinión antes.",
            "good": "Reconoces que debiste incluirlo/a en esa decisión sobre su propio proceso.",
            "bad": "Argumentas que 'es por su bien, no necesita opinar en todo'."
          },
          {
            "q": "Leíste su diario o sus mensajes privados sin su permiso.",
            "good": "Reconoces que invadiste un espacio que era solo suyo.",
            "bad": "Justificas la lectura diciendo que 'como madre/padre tienes derecho a saber todo'."
          },
          {
            "q": "Lo/la llevaste a un centro comercial abarrotado pese a señales previas de alerta.",
            "good": "Reconoces que ignoraste las señales de que ese ambiente sería demasiado.",
            "bad": "Insistes en que 'había que hacer las compras igual, no había opción'."
          },
          {
            "q": "Descartaste el feedback de un profesor sobre las necesidades reales de tu hijo/a.",
            "good": "Reconsideras si desestimar esa información te hizo perder contexto valioso.",
            "bad": "Mantienes que 'el profesor no lo/la conoce como tú'."
          },
          {
            "q": "Dudaste en voz alta de su propio diagnóstico frente a otras personas.",
            "good": "Reconoces que expresar esa duda públicamente pudo dañar su seguridad.",
            "bad": "Justificas la duda diciendo que 'a veces parece que exagera'."
          },
          {
            "q": "Le dijiste 'yo nunca tuve estos problemas' comparando tu infancia con la suya.",
            "good": "Reconoces que esa comparación invalidó su experiencia real.",
            "bad": "Insistes en que 'antes los niños eran más fuertes'."
          },
          {
            "q": "Asumiste flojera en tu hijo/a adulto/a joven cuando en realidad había agotamiento por enmascaramiento.",
            "good": "Reconsideras si confundiste cansancio real con falta de esfuerzo.",
            "bad": "Mantienes que 'simplemente no se esfuerza lo suficiente'."
          },
          {
            "q": "Exigiste una disculpa performativa inmediata tras una pelea entre hermanos.",
            "good": "Notas que forzar la disculpa no resolvió nada de fondo.",
            "bad": "Insistes en que 'con que pida perdón ya está arreglado'."
          },
          {
            "q": "Ignoraste una adaptación acordada en la reunión escolar porque te resultaba incómoda de sostener.",
            "good": "Reconoces que priorizaste tu comodidad sobre un acuerdo importante para él/ella.",
            "bad": "Justificas que 'esa adaptación era difícil de aplicar siempre'."
          },
          {
            "q": "Le quitaste el dispositivo sin ninguna explicación como castigo impulsivo.",
            "good": "Reconoces que actuaste desde el impulso más que desde una decisión pensada.",
            "bad": "Insistes en que 'no necesitas explicar cada castigo que das'."
          },
          {
            "q": "Te burlaste de su sensibilidad al ruido o a cierta comida frente a otras personas.",
            "good": "Notas que ese comentario expuso algo genuinamente difícil para él/ella.",
            "bad": "Dices que 'no era para tomárselo tan a pecho'."
          },
          {
            "q": "Insististe en un comportamiento 'normal' en público durante una salida familiar.",
            "good": "Reconoces que le pediste enmascarar su forma natural de estar en el mundo.",
            "bad": "Argumentas que 'en público hay que comportarse diferente, es lo normal'."
          },
          {
            "q": "Confundiste su máscara social en la escuela con que 'todo estaba bien'.",
            "good": "Reconoces que no viste el esfuerzo real detrás de esa apariencia de calma.",
            "bad": "Insistes en que 'si no dijo nada, es porque no había ningún problema'."
          },
          {
            "q": "Minimizaste su crisis frente a la familia extendida en una celebración.",
            "good": "Reconoces que restarle importancia frente a otros no lo/la ayudó.",
            "bad": "Justificas que 'no era el momento ni el lugar para darle tanta atención'."
          },
          {
            "q": "Hablaste mal de tu ex pareja frente a tu hijo/a en medio de una discusión.",
            "good": "Reconoces que lo/la pusiste en medio de un conflicto que no era suyo.",
            "bad": "Justificas que 'tenía que saber cómo son realmente las cosas'."
          },
          {
            "q": "Cancelaste una adaptación acordada porque 'venía una visita' a la casa.",
            "good": "Reconoces que priorizaste la comodidad de la visita sobre su necesidad real.",
            "bad": "Argumentas que 'por una vez no pasaba nada quitarla'."
          },
          {
            "q": "Forzaste que comiera algo fuera de su lista de alimentos seguros en una cena familiar.",
            "good": "Reconoces que ignoraste una necesidad real por evitar la incomodidad social.",
            "bad": "Insistes en que 'tenía que probar de todo como los demás'."
          },
          {
            "q": "Usaste su diagnóstico como insulto en medio de una discusión acalorada.",
            "good": "Reconoces el daño profundo de usar algo así como arma en una pelea.",
            "bad": "Justificas que 'se dijeron muchas cosas de ambos lados en ese momento'."
          },
          {
            "q": "Amenazaste con dejarlo/a en el supermercado durante una crisis pública.",
            "good": "Reconoces que esa amenaza, aunque no la cumplieras, fue una reacción dañina.",
            "bad": "Justificas que 'era solo para que reaccionara, nunca lo harías de verdad'."
          },
          {
            "q": "Lo/la comparaste negativamente con la facilidad social de su hermano/a en una fiesta.",
            "good": "Notas el peso de esa comparación hecha en un momento tan expuesto.",
            "bad": "Dices que 'solo señalabas una diferencia real entre ellos'."
          },
          {
            "q": "Asumiste que buscaba atención al tener una crisis en casa.",
            "good": "Reconsideras si había una necesidad real detrás de esa crisis.",
            "bad": "Mantienes que 'lo hace para llamar la atención cuando quiere'."
          },
          {
            "q": "Le exigiste 'verse normal' para las fotos de un evento familiar importante.",
            "good": "Reconoces que priorizaste la imagen sobre su comodidad real.",
            "bad": "Argumentas que 'eran solo unos minutos para la foto'."
          },
          {
            "q": "No respetaste su necesidad de silencio durante una espera larga en el hospital.",
            "good": "Reconoces que ignoraste una señal clara de sobrecarga sensorial en ese lugar.",
            "bad": "Justificas que 'todos estaban incómodos en esa sala de espera, no solo él/ella'."
          },
          {
            "q": "Asumiste que evitaba la escuela por flojera, no por un agobio real.",
            "good": "Reconsideras si había una razón genuina detrás de esa resistencia.",
            "bad": "Mantienes que 'no quiere hacer el esfuerzo de ir' sin más revisión."
          },
          {
            "q": "No preguntaste antes de cambiar su rutina de vacaciones por tu propia conveniencia.",
            "good": "Reconoces que el cambio repentino, no su reacción, generó el conflicto.",
            "bad": "Argumentas que 'en vacaciones hay que ser flexible, no tanto drama'."
          },
          {
            "q": "Te burlaste de su objeto de apoyo (auriculares, muñeco) frente a sus amigos.",
            "good": "Reconoces que expusiste algo que le da seguridad real frente a otros.",
            "bad": "Dices que 'ya está grande para andar con eso'."
          },
          {
            "q": "Asumiste que fingía para evitar una tarea escolar difícil.",
            "good": "Reconsideras si la dificultad real, no la pereza, explicaba su resistencia.",
            "bad": "Mantienes que 'siempre inventa excusas cuando algo se pone difícil'."
          },
          {
            "q": "No defendiste a tu hijo/a adulto/a joven ante un comentario despectivo de un conocido.",
            "good": "Reconoces que tu silencio también lo/la dejó desprotegido/a en ese momento.",
            "bad": "Justificas que 'no quisiste hacer una escena por un comentario menor'."
          },
          {
            "q": "Improvisaste un cambio de planes en medio de unas vacaciones sin anticiparle nada.",
            "good": "Reconoces que la falta de anticipación, no su rigidez, causó la crisis.",
            "bad": "Insistes en que 'en un viaje hay que saber improvisar sin problema'."
          },
          {
            "q": "Comparaste desfavorablemente su desempeño con el de sus compañeros frente a un maestro.",
            "good": "Reconoces el impacto de esa comparación hecha delante de una figura de autoridad.",
            "bad": "Justificas que 'era una forma de que viera dónde debía mejorar'."
          }
        ]
      },
      {
        "slug": "pedir-disculpas-eficazmente",
        "nombre": "Pedir Disculpas Eficazmente",
        "emoji": "🙏",
        "descripcion": "Reparar de forma concreta, sin excusas ni minimizar.",
        "situaciones": [
          {
            "q": "Le gritaste a tu hijo/a por algo que después entendiste que no era su culpa.",
            "good": "Te disculpas nombrando específicamente lo que hiciste mal, sin excusas.",
            "bad": "Te disculpas agregando 'pero es que tú también...' restando la disculpa."
          },
          {
            "q": "Prometiste algo y no lo cumpliste.",
            "good": "Reconoces el incumplimiento directamente y propones cómo repararlo.",
            "bad": "Te disculpas de forma vaga sin mencionar qué harás distinto."
          },
          {
            "q": "Comparaste a tu hijo/a con otro niño de forma hiriente.",
            "good": "Te disculpas nombrando el comentario específico y su impacto.",
            "bad": "Dices 'perdón si te molestó' sin asumir responsabilidad real."
          },
          {
            "q": "Ignoraste una señal clara de que necesitaba tu atención.",
            "good": "Reconoces que no lo/la escuchaste cuando lo necesitaba y te disculpas por eso.",
            "bad": "Te disculpas rápido solo para cerrar el tema sin reflexión real."
          },
          {
            "q": "Reaccionaste con sarcasmo ante algo que dijo con sinceridad.",
            "good": "Te disculpas explicando que el sarcasmo no fue apropiado ahí.",
            "bad": "Minimizas diciendo 'ya, perdón, no seas tan sensible'."
          },
          {
            "q": "Tomaste una decisión sin consultarlo cuando debiste hacerlo.",
            "good": "Reconoces el error de no incluirlo y ofreces incluirlo la próxima vez.",
            "bad": "Te disculpas sin comprometerte a cambiar el patrón futuro."
          },
          {
            "q": "Levantaste la voz de forma desproporcionada.",
            "good": "Te disculpas por el tono, separándolo del contenido válido si lo había.",
            "bad": "Justificas el tono alto diciendo que 'no había otra forma de que entendiera'."
          },
          {
            "q": "Olvidaste algo importante que le habías prometido.",
            "good": "Te disculpas reconociendo el impacto del olvido en su confianza.",
            "bad": "Restas importancia al olvido diciendo 'no es para tanto'."
          },
          {
            "q": "Corregiste su conducta en público de forma humillante.",
            "good": "Te disculpas en privado reconociendo específicamente lo que hiciste mal.",
            "bad": "Te disculpas también en público sumando más exposición incómoda."
          },
          {
            "q": "Mostraste desconfianza sin motivo real hacia algo que dijo.",
            "good": "Te disculpas reconociendo que no había razón para dudar de su palabra.",
            "bad": "Te disculpas pero sigues mostrando la misma desconfianza después."
          },
          {
            "q": "Aplicaste una consecuencia desproporcionada a la situación.",
            "good": "Reconoces la desproporción y ajustas la consecuencia como parte de la disculpa.",
            "bad": "Te disculpas por el tono pero mantienes la consecuencia injusta igual."
          },
          {
            "q": "Interrumpiste repetidamente mientras trataba de explicarte algo importante.",
            "good": "Te disculpas por no dejarlo/a terminar y le das espacio para retomarlo.",
            "bad": "Te disculpas pero sigues interrumpiendo en la misma conversación."
          },
          {
            "q": "Te reíste de algo que para tu hijo/a era serio.",
            "good": "Te disculpas reconociendo que minimizaste algo importante para él/ella.",
            "bad": "Te disculpas diciendo 'es que tiene gracia' restando validez a su seriedad."
          },
          {
            "q": "No respetaste su tiempo de recuperación tras una crisis.",
            "good": "Te disculpas por haber insistido antes de que estuviera listo/a.",
            "bad": "Te disculpas pero justificas la insistencia por 'necesitabas resolverlo ya'."
          },
          {
            "q": "Hiciste un comentario negativo sobre su interés especial.",
            "good": "Te disculpas reconociendo el valor real de ese interés para él/ella.",
            "bad": "Te disculpas pero repites comentarios similares poco después."
          },
          {
            "q": "Rompiste una confidencia que te había compartido en privado.",
            "good": "Te disculpas reconociendo el quiebre de confianza específico que causaste.",
            "bad": "Minimizas diciendo que 'no era tan secreto' lo que compartiste."
          },
          {
            "q": "Mostraste favoritismo hacia un hermano/a delante de él/ella.",
            "good": "Te disculpas reconociendo la diferencia de trato y cómo repararla.",
            "bad": "Niegas el favoritismo en vez de disculparte por lo ocurrido."
          },
          {
            "q": "Le exigiste algo que no era razonable para su capacidad actual.",
            "good": "Te disculpas ajustando la expectativa después de reconocer el error.",
            "bad": "Te disculpas pero mantienes la misma exigencia poco después."
          },
          {
            "q": "Reaccionaste desde tu propio estrés, no por algo que él/ella hizo.",
            "good": "Te disculpas aclarando que tu reacción no fue por su culpa.",
            "bad": "Dejas que asuma la culpa de tu propio estrés sin aclarar la disculpa."
          },
          {
            "q": "Cancelaste un plan importante para tu hijo/a sin suficiente aviso.",
            "good": "Te disculpas reconociendo el impacto de la cancelación tardía.",
            "bad": "Te disculpas restando importancia porque 'era solo un plan'."
          },
          {
            "q": "Forzaste el contacto visual de tu hijo/a en una reunión familiar y notó tu insistencia.",
            "good": "Te disculpas nombrando específicamente que no debiste exigir eso.",
            "bad": "Te disculpas diciendo 'perdón si te incomodó' sin asumir la exigencia real."
          },
          {
            "q": "Te burlaste de la forma en que repetía datos sobre su tema favorito.",
            "good": "Te disculpas nombrando el comentario exacto y su impacto en él/ella.",
            "bad": "Dices 'ya, perdón' sin mencionar qué fue lo que hiciste mal."
          },
          {
            "q": "Cambiaste su rutina de sábado sin avisar por una visita inesperada.",
            "good": "Te disculpas reconociendo que el cambio brusco fue tu responsabilidad.",
            "bad": "Te disculpas pero agregas que 'de todos modos había que ser flexible'."
          },
          {
            "q": "Le contaste su diagnóstico a un familiar sin pedirle permiso antes.",
            "good": "Te disculpas reconociendo que esa información era suya para compartir.",
            "bad": "Te disculpas minimizando: 'era solo familia, no pasa nada'."
          },
          {
            "q": "Lo/la obligaste a saludar de beso a un pariente pese a su incomodidad.",
            "good": "Te disculpas reconociendo que no respetaste su límite corporal.",
            "bad": "Te disculpas diciendo 'perdón, pero era solo un saludo'."
          },
          {
            "q": "Llamaste 'capricho' su rechazo a una textura de ropa en la tienda.",
            "good": "Te disculpas nombrando que su sensación era real, no un capricho.",
            "bad": "Te disculpas pero repites 'igual eres bastante quisquilloso/a' después."
          },
          {
            "q": "Asumiste que fingía dolor de estómago para no ir a la escuela.",
            "good": "Te disculpas reconociendo que dudaste de él/ella sin motivo suficiente.",
            "bad": "Te disculpas solo 'por si acaso' sin reconocer realmente la duda injusta."
          },
          {
            "q": "Grabaste un video de su crisis para mostrárselo después.",
            "good": "Te disculpas reconociendo que grabarlo/a sin permiso fue invasivo.",
            "bad": "Te disculpas pero justificas que 'era para que se viera y aprendiera'."
          },
          {
            "q": "Comparaste en voz alta lo fácil que era todo para su hermano/a en la cena.",
            "good": "Te disculpas nombrando la comparación específica y su efecto en él/ella.",
            "bad": "Te disculpas diciendo 'no fue mi intención' sin reconocer el impacto real."
          },
          {
            "q": "Forzaste un corte de pelo pese a su angustia sensorial evidente.",
            "good": "Te disculpas reconociendo que ignoraste una señal clara de malestar.",
            "bad": "Te disculpas pero añades que 'igual necesitaba el corte'."
          },
          {
            "q": "Le exigiste que 'se comportara normal' para una foto familiar.",
            "good": "Te disculpas reconociendo que le pediste ocultar cómo se sentía.",
            "bad": "Te disculpas diciendo 'era solo una foto, no seas tan sensible'."
          },
          {
            "q": "Reaccionaste con dureza ante su stimming en un restaurante lleno.",
            "good": "Te disculpas reconociendo que tu vergüenza, no su conducta, fue el problema.",
            "bad": "Te disculpas pero agregas 'es que llamabas mucho la atención'."
          },
          {
            "q": "Asumiste que su crisis fue una estrategia para librarse de las tareas.",
            "good": "Te disculpas reconociendo que dudaste de su malestar sin razón real.",
            "bad": "Te disculpas pero dices 'aun así, a veces sí exageras'."
          },
          {
            "q": "No lo/la defendiste cuando un familiar hizo un comentario hiriente.",
            "good": "Te disculpas reconociendo que tu silencio también le dolió.",
            "bad": "Te disculpas diciendo 'no quería hacer un problema familiar'."
          },
          {
            "q": "Comparaste su progreso con lo que esperaba el/la terapeuta.",
            "good": "Te disculpas reconociendo que la expectativa era tuya, no suya.",
            "bad": "Te disculpas pero insistes en que 'debería esforzarse más igual'."
          },
          {
            "q": "Descartaste su relato de acoso escolar pensando que exageraba.",
            "good": "Te disculpas reconociendo que no le creíste cuando debías hacerlo.",
            "bad": "Te disculpas diciendo 'perdón, pero cuentas las cosas de forma exagerada'."
          },
          {
            "q": "Le dijiste que sus problemas de sueño eran solo capricho de horario.",
            "good": "Te disculpas reconociendo que no indagaste la causa real antes de juzgar.",
            "bad": "Te disculpas pero repites que 'de todos modos duerme muy tarde'."
          },
          {
            "q": "Interpretaste como desafío algo que era incapacidad real en el momento.",
            "good": "Te disculpas reconociendo que confundiste 'no puede' con 'no quiere'.",
            "bad": "Te disculpas pero aclaras que 'a veces sí parece que no quiere nomás'."
          },
          {
            "q": "Le exigiste que hablara de sus sentimientos en el auto sin que estuviera listo/a.",
            "good": "Te disculpas reconociendo que no respetaste su ritmo emocional.",
            "bad": "Te disculpas pero insistes en que 'en algún momento tenía que hablar'."
          },
          {
            "q": "Reaccionaste con fastidio al ruido de su stimming mientras conducías.",
            "good": "Te disculpas reconociendo que tu fastidio fue lo desproporcionado, no su conducta.",
            "bad": "Te disculpas pero pides que 'trate de hacerlo más bajito la próxima vez'."
          },
          {
            "q": "Le echaste en cara el estrés familiar del mes sin que tuviera responsabilidad real.",
            "good": "Te disculpas aclarando que ese estrés no era su culpa en absoluto.",
            "bad": "Te disculpas pero dejas entrever que 'algo sí contribuyó'."
          },
          {
            "q": "Cambiaste una rutina establecida por tu conveniencia sin avisarle antes.",
            "good": "Te disculpas reconociendo que debiste anticiparle el cambio.",
            "bad": "Te disculpas diciendo 'fue un cambio pequeño, no entiendo tanto drama'."
          },
          {
            "q": "Te burlaste de su estrategia de afrontamiento delante de sus amigos.",
            "good": "Te disculpas reconociendo que expusiste algo que lo/la ayuda a sentirse seguro/a.",
            "bad": "Te disculpas diciendo 'era solo una broma entre todos, cálmate'."
          },
          {
            "q": "Asumiste que fingía enfermedad justo el día de un examen.",
            "good": "Te disculpas reconociendo que dudaste sin considerar su ansiedad real.",
            "bad": "Te disculpas pero agregas 'aun así, deberías esforzarte más con los exámenes'."
          },
          {
            "q": "No defendiste a tu hijo/a de un comentario despectivo de un abuelo o tío.",
            "good": "Te disculpas reconociendo que tu silencio lo/la dejó desprotegido/a.",
            "bad": "Te disculpas diciendo 'ya sabes cómo es esa generación, no le des tanta importancia'."
          },
          {
            "q": "Le mostraste a otro familiar un video de su crisis sin permiso.",
            "good": "Te disculpas reconociendo que expusiste un momento vulnerable suyo.",
            "bad": "Te disculpas pero justificas que 'era solo para que entendieran mejor'."
          },
          {
            "q": "Lo/la comparaste desfavorablemente frente a su propio maestro/a.",
            "good": "Te disculpas reconociendo el daño de esa comparación pública.",
            "bad": "Te disculpas diciendo 'era para motivarlo/a, no para lastimarlo/a'."
          },
          {
            "q": "Lo/la presionaste a socializar en una fiesta pese a señales claras de agobio.",
            "good": "Te disculpas reconociendo que ignoraste su malestar por sostener el plan.",
            "bad": "Te disculpas pero añades 'ya estando ahí, tampoco era tan grave quedarse'."
          },
          {
            "q": "Llamaste 'manía' una necesidad sensorial real sobre cierta ropa.",
            "good": "Te disculpas reconociendo que descalificaste algo genuino para él/ella.",
            "bad": "Te disculpas pero repites que 'es bastante quisquilloso/a con la ropa'."
          },
          {
            "q": "Amenazaste con quitarle su interés especial como castigo.",
            "good": "Te disculpas reconociendo que usar eso como amenaza fue desproporcionado.",
            "bad": "Te disculpas pero dices 'era la única forma de que reaccionaras rápido'."
          },
          {
            "q": "Programaste una actividad o terapia nueva sin preguntarle su opinión.",
            "good": "Te disculpas reconociendo que debiste incluirlo/a en esa decisión.",
            "bad": "Te disculpas pero aclaras que 'era por su bien, no necesitaba opinar'."
          },
          {
            "q": "Leíste su diario o mensajes privados sin su permiso.",
            "good": "Te disculpas reconociendo que invadiste un espacio que era solo suyo.",
            "bad": "Te disculpas pero agregas 'como madre/padre tienes derecho a saber'."
          },
          {
            "q": "Lo/la llevaste a un centro comercial abarrotado pese a señales previas de alerta.",
            "good": "Te disculpas reconociendo que ignoraste las señales de que sería demasiado.",
            "bad": "Te disculpas pero justificas que 'había que hacer las compras igual'."
          },
          {
            "q": "Descartaste el feedback de un profesor sobre las necesidades reales de tu hijo/a.",
            "good": "Te disculpas reconociendo que desestimar esa información fue un error.",
            "bad": "Te disculpas pero insistes en que 'tú lo/la conoces mejor que el profesor'."
          },
          {
            "q": "Dudaste en voz alta de su propio diagnóstico frente a otras personas.",
            "good": "Te disculpas reconociendo el daño de expresar esa duda en público.",
            "bad": "Te disculpas pero agregas 'a veces sí parece que exagera un poco'."
          },
          {
            "q": "Le dijiste 'yo nunca tuve estos problemas' comparando tu infancia con la suya.",
            "good": "Te disculpas reconociendo que esa comparación invalidó su experiencia.",
            "bad": "Te disculpas pero insistes en que 'antes los niños eran más fuertes'."
          },
          {
            "q": "Asumiste flojera en tu hijo/a adulto/a joven cuando había agotamiento por enmascaramiento.",
            "good": "Te disculpas reconociendo que confundiste cansancio real con falta de esfuerzo.",
            "bad": "Te disculpas pero agregas que 'de todos modos podría esforzarse más'."
          },
          {
            "q": "Exigiste una disculpa performativa inmediata tras una pelea entre hermanos.",
            "good": "Te disculpas reconociendo que forzar esa disculpa no resolvió nada de fondo.",
            "bad": "Te disculpas diciendo 'bueno, ya pidieron perdón, quedó arreglado'."
          },
          {
            "q": "Ignoraste una adaptación acordada en la reunión escolar por comodidad propia.",
            "good": "Te disculpas reconociendo que priorizaste tu comodidad sobre el acuerdo.",
            "bad": "Te disculpas pero justificas que 'esa adaptación era difícil de sostener'."
          },
          {
            "q": "Le quitaste el dispositivo sin explicación como castigo impulsivo.",
            "good": "Te disculpas reconociendo que actuaste desde el impulso, no la reflexión.",
            "bad": "Te disculpas pero agregas 'igual no necesito explicar cada castigo'."
          },
          {
            "q": "Te burlaste de su sensibilidad al ruido o a cierta comida frente a otros.",
            "good": "Te disculpas reconociendo que expusiste algo genuinamente difícil para él/ella.",
            "bad": "Te disculpas pero dices 'no era para tomárselo tan a pecho'."
          },
          {
            "q": "Insististe en un comportamiento 'normal' en público durante una salida familiar.",
            "good": "Te disculpas reconociendo que le pediste ocultar su forma natural de estar.",
            "bad": "Te disculpas pero agregas 'en público hay que comportarse distinto, es así'."
          },
          {
            "q": "Confundiste su máscara social en la escuela con que 'todo estaba bien'.",
            "good": "Te disculpas reconociendo que no viste el esfuerzo real detrás de su calma.",
            "bad": "Te disculpas pero dices 'si no dijiste nada, cómo iba a saberlo'."
          },
          {
            "q": "Minimizaste su crisis frente a la familia extendida en una celebración.",
            "good": "Te disculpas reconociendo que restarle importancia frente a otros no ayudó.",
            "bad": "Te disculpas pero justificas que 'no era el momento de darle tanta atención'."
          },
          {
            "q": "Hablaste mal de tu ex pareja frente a tu hijo/a en medio de una discusión.",
            "good": "Te disculpas reconociendo que lo/la pusiste en medio de un conflicto ajeno.",
            "bad": "Te disculpas pero agregas 'igual tenía que saber cómo son las cosas'."
          },
          {
            "q": "Cancelaste una adaptación acordada porque 'venía una visita' a la casa.",
            "good": "Te disculpas reconociendo que priorizaste la comodidad de la visita.",
            "bad": "Te disculpas pero dices 'por una vez no pasaba nada quitarla'."
          },
          {
            "q": "Forzaste que comiera algo fuera de su lista de alimentos seguros en una cena.",
            "good": "Te disculpas reconociendo que ignoraste una necesidad real por la incomodidad social.",
            "bad": "Te disculpas pero agregas 'igual tenía que probar de todo como los demás'."
          },
          {
            "q": "Usaste su diagnóstico como insulto en medio de una discusión acalorada.",
            "good": "Te disculpas reconociendo el daño profundo de usar eso como arma.",
            "bad": "Te disculpas pero justificas que 'se dijeron cosas de ambos lados'."
          },
          {
            "q": "Amenazaste con dejarlo/a en el supermercado durante una crisis pública.",
            "good": "Te disculpas reconociendo que esa amenaza fue dañina aunque no la cumplieras.",
            "bad": "Te disculpas pero aclaras 'nunca lo hubiera hecho de verdad, tranquilo/a'."
          },
          {
            "q": "Lo/la comparaste negativamente con la facilidad social de su hermano/a en una fiesta.",
            "good": "Te disculpas nombrando el peso de esa comparación en un momento tan expuesto.",
            "bad": "Te disculpas pero dices 'solo señalaba una diferencia real entre ustedes'."
          },
          {
            "q": "Asumiste que buscaba atención al tener una crisis en casa.",
            "good": "Te disculpas reconociendo que dudaste de una necesidad real.",
            "bad": "Te disculpas pero agregas 'aun así, a veces sí lo hace para llamar la atención'."
          },
          {
            "q": "Le exigiste 'verse normal' para las fotos de un evento familiar importante.",
            "good": "Te disculpas reconociendo que priorizaste la imagen sobre su comodidad.",
            "bad": "Te disculpas pero dices 'eran solo unos minutos, no era tanto pedir'."
          },
          {
            "q": "No respetaste su necesidad de silencio durante una espera larga en el hospital.",
            "good": "Te disculpas reconociendo que ignoraste una señal clara de sobrecarga.",
            "bad": "Te disculpas pero agregas 'todos estábamos incómodos ahí, no solo tú'."
          },
          {
            "q": "Asumiste que evitaba la escuela por flojera, no por un agobio real.",
            "good": "Te disculpas reconociendo que no consideraste una razón genuina detrás.",
            "bad": "Te disculpas pero insistes en que 'igual debería hacer más esfuerzo'."
          },
          {
            "q": "No preguntaste antes de cambiar su rutina de vacaciones por tu conveniencia.",
            "good": "Te disculpas reconociendo que el cambio repentino generó el conflicto.",
            "bad": "Te disculpas pero dices 'en vacaciones hay que ser más flexible, sin más'."
          },
          {
            "q": "Te burlaste de su objeto de apoyo (auriculares, muñeco) frente a sus amigos.",
            "good": "Te disculpas reconociendo que expusiste algo que le da seguridad real.",
            "bad": "Te disculpas pero agregas 'ya está grande para andar con eso igual'."
          },
          {
            "q": "Asumiste que fingía para evitar una tarea escolar difícil.",
            "good": "Te disculpas reconociendo que no consideraste la dificultad real detrás.",
            "bad": "Te disculpas pero dices 'aun así, inventa excusas seguido'."
          },
          {
            "q": "No defendiste a tu hijo/a adulto/a joven ante un comentario despectivo de un conocido.",
            "good": "Te disculpas reconociendo que tu silencio también le dolió en ese momento.",
            "bad": "Te disculpas pero justificas que 'no quisiste hacer una escena por poco'."
          },
          {
            "q": "Improvisaste un cambio de planes en medio de unas vacaciones sin anticiparle nada.",
            "good": "Te disculpas reconociendo que la falta de anticipación causó la crisis.",
            "bad": "Te disculpas pero agregas 'hay que saber improvisar en un viaje, sin más'."
          },
          {
            "q": "Comparaste desfavorablemente su desempeño con el de sus compañeros frente a un maestro.",
            "good": "Te disculpas reconociendo el impacto de esa comparación frente a una autoridad.",
            "bad": "Te disculpas pero dices 'era para que viera dónde mejorar, nada más'."
          }
        ]
      },
      {
        "slug": "reconstruir-confianza",
        "nombre": "Reconstruir Confianza",
        "emoji": "🧱",
        "descripcion": "Sostener la relación en el tiempo tras una ruptura.",
        "situaciones": [
          {
            "q": "Tras un conflicto fuerte, tu hijo/a duda en confiarte algo nuevo.",
            "good": "Sostienes paciencia y consistencia sin exigir confianza inmediata.",
            "bad": "Te frustras porque 'ya pediste disculpas, debería confiar de nuevo ya'."
          },
          {
            "q": "Rompiste una promesa importante hace tiempo y aún lo recuerda.",
            "good": "Demuestras con acciones sostenidas que puede confiar en tu palabra ahora.",
            "bad": "Le dices que 'ya deje eso en el pasado' sin demostrar cambios reales."
          },
          {
            "q": "Tu hijo/a se muestra cauteloso/a después de una reacción tuya desproporcionada.",
            "good": "Mantienes reacciones calmadas de forma consistente para reconstruir seguridad.",
            "bad": "Esperas que confíe de nuevo sin cambiar tu propio patrón de reacción."
          },
          {
            "q": "Después de un malentendido grande, la comunicación se volvió más fría.",
            "good": "Inviertes tiempo de calidad consistente para reconstruir la cercanía gradualmente.",
            "bad": "Esperas que la cercanía vuelva sola sin ningún esfuerzo activo de tu parte."
          },
          {
            "q": "Tu hijo/a duda en pedirte ayuda tras una vez que lo/la juzgaste con dureza.",
            "good": "Le muestras con hechos que ahora puede acudir a ti sin ser juzgado/a.",
            "bad": "Le reprochas que 'no confía en ti' sin ver tu propio rol en eso."
          },
          {
            "q": "Después de romper una confidencia, tu hijo/a comparte menos contigo.",
            "good": "Respetas el ritmo con que va recuperando la confianza para compartir de nuevo.",
            "bad": "Presionas para que vuelva a compartir todo 'como antes' de inmediato."
          },
          {
            "q": "Tu hijo/a cuestiona si cumplirás lo que dices tras varios incumplimientos.",
            "good": "Cumples pequeños compromisos de forma consistente para reconstruir credibilidad.",
            "bad": "Te ofendes porque 'debería confiar en tu palabra sin más pruebas'."
          },
          {
            "q": "Después de un castigo injusto, tu hijo/a se muestra más distante.",
            "good": "Reconoces el impacto y sostienes gestos consistentes de reparación en el tiempo.",
            "bad": "Esperas que la distancia se resuelva sola sin ningún gesto reparador."
          },
          {
            "q": "Tu hijo/a duda de tu apoyo tras una vez que tomaste partido injustamente en un conflicto.",
            "good": "Demuestras con acciones futuras que puede contar con tu apoyo genuino.",
            "bad": "Repites el patrón de tomar partido injustamente en conflictos siguientes."
          },
          {
            "q": "Después de un periodo de mucha rigidez de tu parte, tu hijo/a se volvió más cerrado/a.",
            "good": "Muestras flexibilidad genuina de forma sostenida para reabrir el vínculo.",
            "bad": "Mantienes la misma rigidez esperando que él/ella se abra de todos modos."
          },
          {
            "q": "Tu hijo/a te pregunta si esta vez 'de verdad' vas a cambiar algo.",
            "good": "Respondes con honestidad y sostienes el cambio con acciones concretas después.",
            "bad": "Prometes un cambio grande sin ningún plan concreto para sostenerlo."
          },
          {
            "q": "Después de invalidar sus emociones varias veces, ahora duda en expresarlas.",
            "good": "Validas consistentemente sus emociones en las próximas ocasiones para reconstruir seguridad.",
            "bad": "Le pides que 'exprese más' sin cambiar tu propia forma de responder."
          },
          {
            "q": "Tu hijo/a se muestra receloso/a de un nuevo plan tras una decepción anterior.",
            "good": "Cumples ese nuevo plan de forma concreta para demostrar consistencia.",
            "bad": "Le pides que 'confíe esta vez' sin ningún cambio real en tu comportamiento."
          },
          {
            "q": "Después de compararlo/a negativamente, ahora evita compartir sus logros contigo.",
            "good": "Celebras sus logros de forma genuina y consistente en adelante.",
            "bad": "Esperas que comparta logros de nuevo sin cambiar tu forma de reaccionar."
          },
          {
            "q": "Tu hijo/a se distancia tras notar que hablaste de él/ella con otros sin su permiso.",
            "good": "Restableces el límite de confidencialidad y lo sostienes con hechos.",
            "bad": "Minimizas la situación diciendo que 'solo hablabas con familia'."
          },
          {
            "q": "Después de un periodo de mucha exigencia, tu hijo/a se siente inseguro/a de fallar contigo.",
            "good": "Ajustas tus expectativas de forma sostenida para reconstruir seguridad emocional.",
            "bad": "Mantienes el mismo nivel de exigencia esperando que se sienta seguro/a igual."
          },
          {
            "q": "Tu hijo/a duda en pedirte perdón después de haber sido castigado/a con dureza por errores pasados.",
            "good": "Muestras con hechos que los errores no serán castigados desproporcionadamente.",
            "bad": "Repites el mismo patrón de castigo desproporcionado ante errores nuevos."
          },
          {
            "q": "Después de faltar a varias citas importantes para él/ella, duda de tu compromiso.",
            "good": "Priorizas consistentemente las próximas citas para reconstruir esa confianza.",
            "bad": "Faltas de nuevo justificándote con las mismas excusas de siempre."
          },
          {
            "q": "Tu hijo/a se muestra más callado/a tras notar que lo comparaste con su hermano/a.",
            "good": "Evitas comparaciones de forma sostenida y valoras sus cualidades propias.",
            "bad": "Sigues comparando ocasionalmente 'sin mala intención'."
          },
          {
            "q": "Después de mucho tiempo de desconexión, buscas reconectar con tu hijo/a.",
            "good": "Inviertes tiempo genuino y constante sin esperar resultados inmediatos.",
            "bad": "Esperas reconectar con un solo gesto grande y puntual."
          },
          {
            "q": "Después de forzar el contacto visual varias veces, ahora se pone tenso/a antes de reuniones familiares.",
            "good": "Dejas de exigir contacto visual y sostienes esa aceptación de forma constante.",
            "bad": "Esperas que se relaje de inmediato sin cambiar tu propia exigencia."
          },
          {
            "q": "Tras burlarte de su tema favorito, ahora duda en compartirlo contigo.",
            "good": "Muestras interés genuino y sostenido en su tema para reabrir ese espacio.",
            "bad": "Le pides que 'vuelva a contarte cosas como antes' sin cambiar tu actitud."
          },
          {
            "q": "Después de varios cambios de rutina sin aviso, ahora pregunta ansioso/a si algo va a cambiar.",
            "good": "Sostienes avisos anticipados de forma consistente para devolverle previsibilidad.",
            "bad": "Le dices que 'deje de preguntar tanto' sin ofrecer más anticipación real."
          },
          {
            "q": "Tras compartir su diagnóstico sin permiso, ahora es más reservado/a sobre temas personales.",
            "good": "Respetas su privacidad de forma sostenida para recuperar esa confianza.",
            "bad": "Te frustras porque 'ya pediste disculpas, debería contarte todo de nuevo'."
          },
          {
            "q": "Después de obligarlo/a a saludos físicos incómodos, ahora se tensa en reuniones familiares.",
            "good": "Sostienes el respeto a su límite corporal en cada encuentro siguiente.",
            "bad": "Esperas que se relaje solo porque 'ya pasó tiempo' sin cambiar la exigencia."
          },
          {
            "q": "Tras llamar 'capricho' su sensibilidad a la ropa, ahora evita comprar ropa contigo.",
            "good": "Validas consistentemente sus preferencias sensoriales en cada compra futura.",
            "bad": "Le insistes en que 'ya se le pasará' sin ajustar tu propia actitud."
          },
          {
            "q": "Después de dudar de su malestar físico, ahora oculta cuando no se siente bien.",
            "good": "Le crees de forma sostenida ante señales físicas futuras.",
            "bad": "Esperas que confíe en contarte de nuevo sin haber cambiado tu reacción."
          },
          {
            "q": "Tras grabarlo/a en crisis sin permiso, ahora se aleja cuando saca el celular cerca.",
            "good": "Guardas el celular en momentos vulnerables de forma consistente.",
            "bad": "Le dices que 'no era para tanto' sin cambiar tu comportamiento futuro."
          },
          {
            "q": "Después de comparar públicamente con su hermano/a, ahora evita hablar de logros en la mesa.",
            "good": "Celebras sus logros de forma genuina y constante sin comparaciones.",
            "bad": "Esperas que vuelva a compartir sin haber dejado de comparar."
          },
          {
            "q": "Tras forzar un corte de pelo, ahora se resiste con más fuerza a cualquier cambio de imagen.",
            "good": "Consultas y respetas sus preferencias sensoriales en cada ocasión futura.",
            "bad": "Insistes en que 'ya pasó, no hay motivo para seguir resistiéndose'."
          },
          {
            "q": "Después de exigir que 'se viera normal' en fotos, ahora evita las cámaras en reuniones.",
            "good": "Dejas de exigir poses o gestos forzados en encuentros futuros.",
            "bad": "Le pides que 'coopere un poco más' sin cambiar la exigencia de fondo."
          },
          {
            "q": "Tras reaccionar con dureza a su stimming en público, ahora lo reprime frente a ti.",
            "good": "Muestras aceptación consistente de su stimming en salidas futuras.",
            "bad": "Esperas que vuelva a comportarse natural sin haber cambiado tu reacción."
          },
          {
            "q": "Después de acusarlo/a de manipular con sus crisis, ahora minimiza lo que siente frente a ti.",
            "good": "Le crees de forma sostenida ante nuevas señales de malestar.",
            "bad": "Sigues dudando de cada crisis nueva pese a las disculpas dadas."
          },
          {
            "q": "Tras no defenderlo/a de un comentario familiar, ahora evita contarte lo que le dicen otros.",
            "good": "Lo/la defiendes activamente la próxima vez que ocurra algo similar.",
            "bad": "Esperas que vuelva a confiarte esas situaciones sin cambiar tu reacción."
          },
          {
            "q": "Después de comparar su progreso con expectativas de terapia, ahora oculta sus avances reales.",
            "good": "Celebras su ritmo propio de forma sostenida en cada sesión futura.",
            "bad": "Sigues comparando su progreso con el de otros esperando que no le afecte."
          },
          {
            "q": "Tras no creerle sobre el acoso escolar, ahora deja de contarte lo que pasa en la escuela.",
            "good": "Le crees de forma consistente y actúas ante cada nuevo relato suyo.",
            "bad": "Esperas que vuelva a contarte todo sin haber cambiado tu escepticismo."
          },
          {
            "q": "Después de minimizar sus problemas de sueño, ahora oculta cuánto le cuesta dormir.",
            "good": "Indagas con curiosidad genuina cada vez que menciona el tema del sueño.",
            "bad": "Le dices que 'ya deberías dormir mejor' sin cambiar tu forma de escuchar."
          },
          {
            "q": "Tras interpretar su incapacidad como desafío varias veces, ahora se rinde antes de pedir ayuda.",
            "good": "Distingues consistentemente entre 'no puede' y 'no quiere' en adelante.",
            "bad": "Esperas que pida ayuda de nuevo sin haber cambiado tu interpretación."
          },
          {
            "q": "Después de forzar conversaciones emocionales en el auto, ahora se cierra apenas subes al coche.",
            "good": "Respetas su ritmo para hablar de emociones en cada trayecto futuro.",
            "bad": "Insistes en que 'ya debería estar listo/a para hablar' sin dar más espacio."
          },
          {
            "q": "Tras mostrar fastidio por su stimming en el coche, ahora lo contiene hasta que baja.",
            "good": "Sostienes una actitud de aceptación constante en los viajes futuros.",
            "bad": "Esperas que se relaje en el coche sin haber cambiado tu reacción al ruido."
          },
          {
            "q": "Después de culparlo/a del estrés familiar, ahora se disculpa por cosas que no hizo.",
            "good": "Aclaras de forma sostenida que el estrés familiar no es su responsabilidad.",
            "bad": "Dejas que siga sintiéndose culpable sin corregir el patrón."
          },
          {
            "q": "Tras cambiar rutinas sin aviso repetidamente, ahora pregunta con ansiedad los planes del día.",
            "good": "Sostienes avisos claros y anticipados como parte de la rutina diaria.",
            "bad": "Le dices que 'confíe en que todo va a estar bien' sin dar más previsibilidad."
          },
          {
            "q": "Después de burlarte de su estrategia de afrontamiento, ahora la usa a escondidas de ti.",
            "good": "Muestras respeto sostenido por esa estrategia en presencia de otros.",
            "bad": "Esperas que la use abiertamente de nuevo sin haber cambiado tu actitud."
          },
          {
            "q": "Tras dudar de su enfermedad en día de examen, ahora minimiza sus propios síntomas.",
            "good": "Le crees de forma consistente ante cada malestar físico futuro.",
            "bad": "Sigues revisando con sospecha cada vez que dice sentirse mal."
          },
          {
            "q": "Después de no defenderlo/a de un familiar mayor, ahora evita esas reuniones familiares.",
            "good": "Estableces y sostienes límites claros con esa persona en encuentros futuros.",
            "bad": "Esperas que vuelva a asistir tranquilo/a sin haber puesto ningún límite nuevo."
          },
          {
            "q": "Tras mostrar un video suyo sin permiso, ahora te pide el celular cada vez que lo sacas.",
            "good": "Pides permiso de forma consistente antes de grabar o compartir algo suyo.",
            "bad": "Le dices que 'confíe en ti' sin cambiar tu forma de manejar su privacidad."
          },
          {
            "q": "Después de compararlo/a frente a su maestro/a, ahora oculta sus calificaciones.",
            "good": "Reaccionas con apoyo constante ante sus resultados académicos futuros.",
            "bad": "Esperas que comparta sus notas de nuevo sin haber dejado de comparar."
          },
          {
            "q": "Tras presionarlo/a a socializar agobiado/a, ahora rechaza cualquier plan social contigo.",
            "good": "Respetas su ritmo social y lo sostienes en cada invitación futura.",
            "bad": "Insistes en que 'tiene que socializar más' sin ajustar la presión."
          },
          {
            "q": "Después de llamar 'manía' su necesidad sensorial, ahora evita mencionar lo que le incomoda.",
            "good": "Validas de forma sostenida sus señales sensoriales en cada ocasión.",
            "bad": "Esperas que hable de sus incomodidades sin haber cambiado tu reacción previa."
          },
          {
            "q": "Tras amenazar con quitarle su interés especial, ahora lo esconde de ti.",
            "good": "Muestras interés genuino y sostenido por ese tema sin condicionarlo a nada.",
            "bad": "Esperas que lo comparta de nuevo sin haber retirado la amenaza de fondo."
          },
          {
            "q": "Después de decidir una terapia sin consultarle, ahora se resiste a cualquier actividad nueva.",
            "good": "Lo/la incluyes de forma consistente en decisiones futuras sobre su proceso.",
            "bad": "Esperas que coopere sin haberle dado ninguna voz en decisiones nuevas."
          },
          {
            "q": "Tras leer su diario sin permiso, ahora esconde sus cuadernos y su celular.",
            "good": "Respetas su privacidad de forma constante para recuperar ese espacio suyo.",
            "bad": "Le pides que 'no tenga nada que ocultar' sin cambiar tu propio límite."
          },
          {
            "q": "Después de exponerlo/a a un ambiente abrumador, ahora se resiste a salidas similares.",
            "good": "Preparas y anticipas salidas futuras considerando sus señales de alerta.",
            "bad": "Insistes en que 'tiene que acostumbrarse' sin ajustar la planificación."
          },
          {
            "q": "Tras ignorar el feedback de un profesor, ahora tu hijo/a duda de tu apoyo en temas escolares.",
            "good": "Colaboras de forma sostenida con la escuela en adelante.",
            "bad": "Esperas que confíe en tu apoyo escolar sin haber cambiado tu actitud con los profesores."
          },
          {
            "q": "Después de dudar de su diagnóstico en público, ahora evita hablar de sus necesidades frente a otros.",
            "good": "Defiendes su diagnóstico de forma consistente ante cualquier duda externa.",
            "bad": "Esperas que hable abiertamente de nuevo sin haber cambiado tu postura pública."
          },
          {
            "q": "Tras comparar tu infancia con la suya varias veces, ahora se cierra cuando hablas de tu pasado.",
            "good": "Evitas esas comparaciones de forma sostenida en conversaciones futuras.",
            "bad": "Sigues comparando 'sin mala intención' esperando que no le afecte."
          },
          {
            "q": "Después de acusarlo/a de flojera, ahora oculta su cansancio real frente a ti.",
            "good": "Reconoces y validas su agotamiento de forma consistente en adelante.",
            "bad": "Sigues esperando más esfuerzo sin considerar el agotamiento real."
          },
          {
            "q": "Tras exigir disculpas performativas entre hermanos, ahora fingen resolver conflictos frente a ti.",
            "good": "Facilitas espacio genuino para resolver conflictos sin forzar el ritual.",
            "bad": "Sigues exigiendo la misma disculpa rápida en cada pelea nueva."
          },
          {
            "q": "Después de ignorar una adaptación escolar acordada, la escuela y tu hijo/a dudan de tu seguimiento.",
            "good": "Sostienes activamente cada adaptación acordada de ahora en adelante.",
            "bad": "Prometes seguimiento sin cambiar realmente tu participación en la escuela."
          },
          {
            "q": "Tras quitarle el dispositivo sin explicación, ahora desconfía de cualquier consecuencia que impones.",
            "good": "Explicas con claridad cada consecuencia futura antes de aplicarla.",
            "bad": "Esperas que acepte las consecuencias sin dar explicaciones distintas."
          },
          {
            "q": "Después de burlarte de su sensibilidad a la comida, ahora come menos frente a otras personas.",
            "good": "Respetas sus límites alimentarios de forma consistente en presencia de otros.",
            "bad": "Esperas que coma tranquilo/a sin haber cambiado tu actitud sobre el tema."
          },
          {
            "q": "Tras exigir un comportamiento 'normal' en salidas, ahora evita salir en familia.",
            "good": "Aceptas su forma natural de estar en público de manera sostenida.",
            "bad": "Insistes en que 'tiene que comportarse como los demás' en cada salida."
          },
          {
            "q": "Después de confundir su máscara con bienestar real, ahora esconde más su malestar.",
            "good": "Preguntas activamente y con calma cómo se siente realmente en la escuela.",
            "bad": "Asumes que todo está bien mientras no diga lo contrario, como antes."
          },
          {
            "q": "Tras minimizar su crisis frente a la familia, ahora evita esas celebraciones.",
            "good": "Validas sus crisis abiertamente frente a otros en encuentros futuros.",
            "bad": "Esperas que asista sin incomodidad sin haber cambiado tu reacción social."
          },
          {
            "q": "Después de hablar mal de tu ex frente a él/ella, ahora evita el tema de la familia contigo.",
            "good": "Mantienes los conflictos de pareja fuera de las conversaciones con tu hijo/a.",
            "bad": "Sigues comentando el tema esperando que no le afecte esta vez."
          },
          {
            "q": "Tras cancelar una adaptación por una visita, ahora duda si sostendrás sus acuerdos frente a otros.",
            "good": "Sostienes sus adaptaciones incluso cuando hay visitas en casa.",
            "bad": "Vuelves a priorizar la comodidad social sobre sus acuerdos."
          },
          {
            "q": "Después de forzarlo/a a comer algo fuera de su lista segura, ahora desconfía de las cenas familiares.",
            "good": "Respetas su lista de alimentos seguros de forma consistente en adelante.",
            "bad": "Insistes en que 'tiene que variar más' en cada comida siguiente."
          },
          {
            "q": "Tras usar su diagnóstico como insulto, ahora teme que lo vuelvas a usar en su contra.",
            "good": "Evitas mencionar su diagnóstico en discusiones futuras, pase lo que pase.",
            "bad": "Vuelves a mencionarlo en la siguiente discusión acalorada."
          },
          {
            "q": "Después de amenazar con dejarlo/a en el supermercado, ahora se aferra a ti con miedo en lugares públicos.",
            "good": "Sostienes calma y contención en cada salida pública futura.",
            "bad": "Esperas que confíe de nuevo sin haber cambiado tu forma de reaccionar en público."
          },
          {
            "q": "Tras comparar su vida social con la de su hermano/a, ahora evita las fiestas familiares.",
            "good": "Valoras sus propias formas de socializar sin comparaciones futuras.",
            "bad": "Sigues resaltando la facilidad de su hermano/a esperando que no le afecte."
          },
          {
            "q": "Después de acusarlo/a de buscar atención con sus crisis, ahora oculta cuando está mal.",
            "good": "Respondes con atención genuina y consistente ante nuevas señales de malestar.",
            "bad": "Sigues dudando de cada crisis nueva pese a haberte disculpado antes."
          },
          {
            "q": "Tras exigir 'verse normal' en fotos de eventos, ahora evita las cámaras familiares.",
            "good": "Dejas de exigir poses forzadas en cada evento futuro.",
            "bad": "Insistes en 'una foto más' esperando que coopere igual."
          },
          {
            "q": "Después de ignorar su necesidad de silencio en el hospital, ahora se resiste a ir a citas médicas.",
            "good": "Preparas ambientes más silenciosos o tranquilos para citas médicas futuras.",
            "bad": "Esperas que tolere las esperas ruidosas sin ningún ajuste nuevo."
          },
          {
            "q": "Tras acusarlo/a de flojera escolar, ahora oculta cuando la escuela le agobia.",
            "good": "Indagas con curiosidad genuina las causas reales de su resistencia escolar.",
            "bad": "Sigues presionando para que 'se esfuerce más' sin indagar más a fondo."
          },
          {
            "q": "Después de cambiar planes de vacaciones sin avisar, ahora pregunta ansioso/a por cada detalle del viaje.",
            "good": "Anticipas y compartes los planes de viaje de forma consistente.",
            "bad": "Le dices que 'confíe en que todo saldrá bien' sin dar más anticipación."
          },
          {
            "q": "Tras burlarte de su objeto de apoyo, ahora lo esconde antes de salir contigo.",
            "good": "Muestras aceptación abierta de ese objeto en cada salida futura.",
            "bad": "Esperas que lo use libremente sin haber cambiado tu actitud hacia él."
          },
          {
            "q": "Después de acusarlo/a de inventar excusas escolares, ahora minimiza sus propias dificultades.",
            "good": "Le crees de forma consistente ante nuevas dificultades escolares que mencione.",
            "bad": "Sigues sospechando de cada excusa nueva pese a las disculpas dadas."
          },
          {
            "q": "Tras no defenderlo/a de un conocido, ahora evita esas reuniones sociales contigo.",
            "good": "Estableces límites claros y sostenidos frente a comentarios similares futuros.",
            "bad": "Esperas que vuelva a esas reuniones sin haber cambiado tu actitud protectora."
          },
          {
            "q": "Después de improvisar cambios en vacaciones sin avisar, ahora se estresa antes de cada viaje.",
            "good": "Sostienes planificación anticipada y compartida en cada viaje futuro.",
            "bad": "Le pides que 'aprenda a improvisar' sin dar más anticipación real."
          },
          {
            "q": "Tras compararlo/a frente a un maestro, ahora oculta sus dificultades escolares de ti.",
            "good": "Reaccionas con apoyo genuino y consistente ante cada dificultad que comparta.",
            "bad": "Sigues comparándolo/a con otros esperando que esta vez no le afecte."
          }
        ]
      },
      {
        "slug": "aprender-del-conflicto",
        "nombre": "Aprender del Conflicto",
        "emoji": "📈",
        "descripcion": "Convertir cada ruptura en información para la próxima vez.",
        "situaciones": [
          {
            "q": "Tuviste un conflicto fuerte por una transición mal manejada.",
            "good": "Reflexionas qué señal de aviso faltó y la incorporas para la próxima vez.",
            "bad": "Pasas de página sin analizar qué se podría hacer distinto."
          },
          {
            "q": "Un malentendido de comunicación escaló innecesariamente.",
            "good": "Identificas qué expresión ambigua generó la confusión, para evitarla después.",
            "bad": "Atribuyes todo el conflicto a que tu hijo/a 'malinterpretó todo'."
          },
          {
            "q": "Una crisis sensorial ocurrió en un lugar que ya sabías que era complicado.",
            "good": "Anotas mentalmente evitar o preparar mejor ese tipo de lugares en el futuro.",
            "bad": "Repites la misma situación sin ajuste, esperando un resultado distinto."
          },
          {
            "q": "Un conflicto surgió por una expectativa que resultó ser poco realista.",
            "good": "Ajustas esa expectativa concreta para situaciones similares futuras.",
            "bad": "Mantienes la misma expectativa insistiendo en que 'debería poder'."
          },
          {
            "q": "Reaccionaste de forma desproporcionada por tu propio cansancio acumulado.",
            "good": "Identificas el patrón y planeas mejor tu propio descanso antes de momentos clave.",
            "bad": "Repites el mismo patrón de reacción cada vez que estás cansado/a."
          },
          {
            "q": "Un conflicto se repite de forma similar cada semana en el mismo contexto.",
            "good": "Buscas el patrón común y ajustan juntos la rutina que lo genera.",
            "bad": "Reaccionas cada vez como si fuera la primera vez, sin ver el patrón."
          },
          {
            "q": "Después de una crisis, identificas que faltó anticipación del cambio.",
            "good": "Incorporas más anticipación la próxima vez que haya un cambio similar.",
            "bad": "Asumes que la próxima vez será distinta sin cambiar nada del proceso."
          },
          {
            "q": "Un conflicto surgió porque impusiste una regla sin explicar el motivo.",
            "good": "Aprendes a explicar el porqué de las reglas nuevas de ahora en adelante.",
            "bad": "Sigues imponiendo reglas sin explicación esperando distinto resultado."
          },
          {
            "q": "Notas que los conflictos aumentan los días de mayor carga escolar.",
            "good": "Ajustas las expectativas y demandas de casa en esos días específicos.",
            "bad": "Mantienes las mismas exigencias en casa sin considerar la carga externa."
          },
          {
            "q": "Un conflicto se generó por no respetar una señal temprana de sobrecarga.",
            "good": "Revisas qué señal ignoraste y te comprometes a atenderla antes la próxima vez.",
            "bad": "Consideras el conflicto como 'inevitable' sin revisar tu propia respuesta."
          },
          {
            "q": "Después de una discusión, notas que ambos estaban muy cansados esa noche.",
            "good": "Evitas abordar temas importantes en esos horarios de mayor cansancio futuro.",
            "bad": "Sigues teniendo conversaciones importantes en los mismos horarios agotadores."
          },
          {
            "q": "Un conflicto surgió por comparar a tu hijo/a con un hermano/a sin darte cuenta.",
            "good": "Te comprometes a notar y evitar esas comparaciones automáticas futuras.",
            "bad": "Minimizas el patrón diciendo que 'fue solo esa vez'."
          },
          {
            "q": "Notas que ciertos lugares siempre generan crisis similares.",
            "good": "Preparas estrategias específicas antes de volver a esos lugares.",
            "bad": "Evitas pensar en el patrón y repites la misma visita sin preparación."
          },
          {
            "q": "Un conflicto se agravó porque no diste tiempo de recuperación después.",
            "good": "Incorporas tiempo de recuperación como parte estándar tras futuras crisis.",
            "bad": "Sigues exigiendo conversación inmediata tras cada crisis futura."
          },
          {
            "q": "Descubres que cierto tono de voz tuyo siempre escala los conflictos.",
            "good": "Trabajas conscientemente en ajustar ese tono en situaciones tensas futuras.",
            "bad": "Consideras que 'así eres' y no haces ningún ajuste consciente."
          },
          {
            "q": "Un conflicto reveló que tu hijo/a necesita más autonomía en cierta área.",
            "good": "Ajustas gradualmente el nivel de autonomía en esa área específica.",
            "bad": "Mantienes el mismo nivel de control pese a la señal clara del conflicto."
          },
          {
            "q": "Notas que los conflictos de la mañana se relacionan con falta de anticipación.",
            "good": "Preparas la rutina matutina con más anticipación visual desde ahora.",
            "bad": "Repites la misma rutina apresurada cada mañana sin ajustar nada."
          },
          {
            "q": "Un conflicto surgió por no validar una emoción antes de corregir la conducta.",
            "good": "Incorporas la validación emocional como primer paso en conflictos futuros.",
            "bad": "Sigues corrigiendo la conducta primero, sin validar la emoción de base."
          },
          {
            "q": "Descubres que cierta expectativa tuya no encajaba con el perfil real de tu hijo/a.",
            "good": "Ajustas esa expectativa de forma duradera, no solo por esta vez.",
            "bad": "Vuelves a la misma expectativa poco después del conflicto."
          },
          {
            "q": "Un conflicto te mostró que necesitas más apoyo externo (terapia, red de apoyo).",
            "good": "Buscas activamente ese apoyo en lugar de intentar manejarlo todo solo/a de nuevo.",
            "bad": "Ignoras la señal y sigues intentando manejar todo sin apoyo externo."
          },
          {
            "q": "Notas que exigir contacto visual genera tensión repetida en cada reunión familiar.",
            "good": "Aprendes a dejar de exigirlo y buscas otras formas de conexión en adelante.",
            "bad": "Sigues exigiéndolo esperando que en algún momento deje de incomodarle."
          },
          {
            "q": "Un conflicto se repitió porque minimizaste su interés especial frente a otros.",
            "good": "Aprendes a mostrar respeto genuino por ese interés en situaciones sociales futuras.",
            "bad": "Asumes que 'ya se le pasará' sin ajustar tu propia actitud hacia el tema."
          },
          {
            "q": "Notas que los cambios de rutina de último momento siempre generan la misma crisis.",
            "good": "Incorporas avisos anticipados como parte fija de cualquier cambio futuro.",
            "bad": "Sigues improvisando cambios esperando una reacción distinta cada vez."
          },
          {
            "q": "Un conflicto surgió porque compartiste información suya sin permiso.",
            "good": "Aprendes a pedir su consentimiento antes de compartir cualquier información personal.",
            "bad": "Consideras que fue un hecho aislado sin ajustar tu criterio para el futuro."
          },
          {
            "q": "Notas que ciertos saludos físicos forzados siempre generan la misma incomodidad.",
            "good": "Incorporas alternativas de saludo que respeten su límite corporal.",
            "bad": "Sigues exigiendo el mismo saludo esperando que se acostumbre."
          },
          {
            "q": "Un conflicto se repite cada vez que descalificas sus preferencias sensoriales de ropa.",
            "good": "Aprendes a preguntar antes y a confiar en sus señales sensoriales.",
            "bad": "Sigues llamando 'capricho' a la misma sensibilidad en cada compra."
          },
          {
            "q": "Notas que dudar de sus malestares físicos siempre termina en el mismo tipo de conflicto.",
            "good": "Aprendes a tomar en serio sus señales físicas antes de asumir excusas.",
            "bad": "Sigues sospechando lo mismo cada vez que dice sentirse mal."
          },
          {
            "q": "Un conflicto surgió porque grabaste un momento vulnerable suyo sin pensarlo.",
            "good": "Aprendes a guardar el celular en momentos de crisis de ahora en adelante.",
            "bad": "Consideras que fue solo esa vez sin cambiar tu costumbre de grabar."
          },
          {
            "q": "Notas que las comparaciones con su hermano/a siempre generan el mismo tipo de conflicto en la mesa.",
            "good": "Te comprometes a evitar esas comparaciones automáticas en adelante.",
            "bad": "Minimizas el patrón diciendo que 'fue solo un comentario esta vez'."
          },
          {
            "q": "Un conflicto se repitió por forzar cambios de imagen sin considerar su sensibilidad sensorial.",
            "good": "Aprendes a consultar y preparar con anticipación cualquier cambio de imagen futuro.",
            "bad": "Repites la misma imposición esperando menos resistencia la próxima vez."
          },
          {
            "q": "Notas que exigir 'verse normal' para fotos siempre termina en el mismo conflicto.",
            "good": "Ajustas tus expectativas sobre las fotos familiares de ahora en adelante.",
            "bad": "Sigues exigiendo lo mismo en cada evento familiar futuro."
          },
          {
            "q": "Un conflicto surgió porque reaccionaste con vergüenza a su stimming en público.",
            "good": "Trabajas conscientemente tu propia incomodidad social ante su stimming.",
            "bad": "Sigues reaccionando igual cada vez que ocurre en un lugar público."
          },
          {
            "q": "Notas que sueles asumir manipulación en cada crisis, y el patrón se repite.",
            "good": "Aprendes a diferenciar sobrecarga real de otras posibles causas antes de juzgar.",
            "bad": "Sigues asumiendo lo mismo en cada crisis nueva sin revisar el patrón."
          },
          {
            "q": "Un conflicto reveló que no sueles defenderlo/a de comentarios familiares hirientes.",
            "good": "Te comprometes a intervenir de forma clara la próxima vez que ocurra algo similar.",
            "bad": "Sigues quedándote callado/a esperando que la situación se resuelva sola."
          },
          {
            "q": "Notas que comparar su progreso con expectativas externas genera el mismo conflicto en cada sesión.",
            "good": "Aprendes a centrarte en su ritmo propio en vez de expectativas externas.",
            "bad": "Sigues comparando su progreso esperando un resultado distinto."
          },
          {
            "q": "Un conflicto surgió porque no le creíste sobre una situación de acoso escolar.",
            "good": "Aprendes a tomar en serio sus relatos antes de dudar de ellos.",
            "bad": "Sigues dudando de relatos similares en el futuro."
          },
          {
            "q": "Notas que minimizar sus problemas de sueño siempre termina igual: distanciamiento.",
            "good": "Aprendes a indagar la causa real detrás de sus dificultades para dormir.",
            "bad": "Sigues atribuyendo el insomnio a capricho en cada ocasión nueva."
          },
          {
            "q": "Un conflicto reveló que confundes incapacidad real con desafío con frecuencia.",
            "good": "Aprendes a distinguir mejor entre 'no puede' y 'no quiere' antes de reaccionar.",
            "bad": "Sigues interpretando la incapacidad como desafío en situaciones similares."
          },
          {
            "q": "Notas que forzar conversaciones emocionales en el coche nunca resulta bien.",
            "good": "Aprendes a esperar el momento y el lugar adecuados para esas conversaciones.",
            "bad": "Sigues insistiendo en el mismo momento inadecuado cada vez."
          },
          {
            "q": "Un conflicto se repite porque el ruido de su stimming te genera fastidio en el coche.",
            "good": "Trabajas tu propia tolerancia a ese estímulo en trayectos futuros.",
            "bad": "Sigues pidiéndole que pare sin trabajar tu propia reacción."
          },
          {
            "q": "Notas que sueles descargar tu estrés en tu hijo/a sin que tenga responsabilidad real.",
            "good": "Aprendes a identificar y manejar tu propio estrés antes de que lo afecte a él/ella.",
            "bad": "Sigues descargando el mismo estrés esperando que no le afecte esta vez."
          },
          {
            "q": "Un conflicto surgió porque cambiaste una rutina sin avisar, otra vez.",
            "good": "Incorporas avisos anticipados como norma fija para cualquier cambio futuro.",
            "bad": "Sigues cambiando rutinas de último momento sin ajustar el proceso."
          },
          {
            "q": "Notas que burlarte de su estrategia de afrontamiento frente a otros siempre genera distancia.",
            "good": "Aprendes a respetar esa estrategia en cualquier contexto social futuro.",
            "bad": "Sigues haciendo comentarios similares 'sin mala intención'."
          },
          {
            "q": "Un conflicto reveló que dudas de sus malestares en días de mayor exigencia escolar.",
            "good": "Aprendes a considerar el estrés académico como causa real de malestar físico.",
            "bad": "Sigues sospechando lo mismo en cada día de examen futuro."
          },
          {
            "q": "Notas que sueles callar ante comentarios despectivos de ciertos familiares.",
            "good": "Preparas una respuesta clara para usar la próxima vez que ocurra algo similar.",
            "bad": "Sigues callando esperando que esos comentarios dejen de pasar solos."
          },
          {
            "q": "Un conflicto surgió porque compartiste un momento vulnerable suyo con otros sin permiso.",
            "good": "Aprendes a pedir su consentimiento antes de compartir cualquier momento suyo.",
            "bad": "Consideras que fue un caso aislado sin cambiar tu costumbre."
          },
          {
            "q": "Notas que compararlo/a frente a figuras de autoridad siempre genera el mismo malestar.",
            "good": "Aprendes a destacar sus fortalezas en vez de compararlo/a con otros.",
            "bad": "Sigues comparando esperando que esta vez lo motive distinto."
          },
          {
            "q": "Un conflicto reveló que presionarlo/a a socializar pese al agobio nunca funciona.",
            "good": "Aprendes a leer las señales de agobio antes de insistir en planes sociales.",
            "bad": "Sigues presionando de la misma forma en cada evento social futuro."
          },
          {
            "q": "Notas que llamar 'manía' a sus necesidades sensoriales genera el mismo conflicto en cada compra.",
            "good": "Aprendes a validar esas necesidades antes de cuestionarlas.",
            "bad": "Sigues descalificando la misma necesidad sensorial cada vez."
          },
          {
            "q": "Un conflicto surgió porque amenazaste con quitarle algo importante para él/ella.",
            "good": "Aprendes a usar otras formas de límite que no involucren lo que más le importa.",
            "bad": "Sigues usando la misma amenaza en conflictos futuros similares."
          },
          {
            "q": "Notas que decidir actividades importantes sin consultarle genera resistencia repetida.",
            "good": "Aprendes a incluirlo/a en decisiones sobre su propio proceso de ahora en adelante.",
            "bad": "Sigues decidiendo unilateralmente esperando menos resistencia la próxima vez."
          },
          {
            "q": "Un conflicto reveló que invadir su privacidad rompe la confianza de forma repetida.",
            "good": "Aprendes a respetar los espacios privados como norma, no como excepción.",
            "bad": "Sigues justificando la invasión de privacidad en situaciones similares."
          },
          {
            "q": "Notas que ciertos ambientes siempre generan el mismo tipo de crisis por sobrecarga.",
            "good": "Preparas estrategias específicas o alternativas antes de volver a esos ambientes.",
            "bad": "Sigues llevándolo/a a los mismos ambientes sin ningún ajuste."
          },
          {
            "q": "Un conflicto surgió porque descartaste el feedback escolar sobre sus necesidades reales.",
            "good": "Aprendes a colaborar activamente con la escuela en vez de descartar su feedback.",
            "bad": "Sigues ignorando el feedback escolar en situaciones similares futuras."
          },
          {
            "q": "Notas que dudar de su diagnóstico frente a otros siempre genera el mismo malestar.",
            "good": "Aprendes a defender su diagnóstico de forma consistente ante cualquier duda externa.",
            "bad": "Sigues dudando en voz alta en situaciones sociales similares."
          },
          {
            "q": "Un conflicto reveló que comparar tu infancia con la suya invalida su experiencia repetidamente.",
            "good": "Aprendes a validar su experiencia actual sin compararla con la tuya.",
            "bad": "Sigues haciendo la misma comparación en conversaciones futuras."
          },
          {
            "q": "Notas que confundes agotamiento por enmascaramiento con flojera de forma recurrente.",
            "good": "Aprendes a reconocer las señales de agotamiento real antes de juzgar el esfuerzo.",
            "bad": "Sigues asumiendo flojera en situaciones similares futuras."
          },
          {
            "q": "Un conflicto surgió porque exigiste una disculpa performativa entre hermanos, sin resolver nada real.",
            "good": "Aprendes a facilitar diálogo genuino en vez de exigir rituales de disculpa vacíos.",
            "bad": "Sigues exigiendo la misma disculpa rápida en cada pelea entre hermanos."
          },
          {
            "q": "Notas que ignorar adaptaciones acordadas en la escuela genera el mismo conflicto cada vez.",
            "good": "Aprendes a sostener activamente cada adaptación acordada de ahora en adelante.",
            "bad": "Sigues dejando de lado las adaptaciones cuando resultan incómodas."
          },
          {
            "q": "Un conflicto reveló que aplicar castigos impulsivos sin explicación erosiona la confianza.",
            "good": "Aprendes a explicar con claridad cada consecuencia antes de aplicarla.",
            "bad": "Sigues aplicando castigos impulsivos en situaciones similares futuras."
          },
          {
            "q": "Notas que burlarte de su sensibilidad alimentaria frente a otros siempre genera el mismo conflicto.",
            "good": "Aprendes a respetar sus límites alimentarios en cualquier contexto social.",
            "bad": "Sigues haciendo comentarios similares sobre su alimentación."
          },
          {
            "q": "Un conflicto surgió porque exigiste comportamiento 'normal' en una salida pública, otra vez.",
            "good": "Aprendes a aceptar su forma natural de estar en público de ahora en adelante.",
            "bad": "Sigues exigiendo lo mismo en cada salida familiar futura."
          },
          {
            "q": "Notas que confundes su máscara social con bienestar real de forma recurrente.",
            "good": "Aprendes a preguntar activamente cómo se siente, más allá de las apariencias.",
            "bad": "Sigues asumiendo que todo está bien mientras no diga lo contrario."
          },
          {
            "q": "Un conflicto reveló que minimizar sus crisis frente a otros siempre genera el mismo distanciamiento.",
            "good": "Aprendes a validar sus crisis abiertamente, sin importar quién esté presente.",
            "bad": "Sigues restándole importancia frente a otros en situaciones similares."
          },
          {
            "q": "Notas que hablar mal de tu ex frente a tu hijo/a siempre genera el mismo malestar.",
            "good": "Aprendes a mantener esos conflictos fuera de las conversaciones con él/ella.",
            "bad": "Sigues comentando el tema esperando que esta vez no le afecte."
          },
          {
            "q": "Un conflicto surgió porque cancelaste una adaptación por una visita, otra vez.",
            "good": "Aprendes a sostener sus adaptaciones incluso cuando hay visitas en casa.",
            "bad": "Sigues priorizando la comodidad social sobre sus necesidades reales."
          },
          {
            "q": "Notas que forzarlo/a a comer fuera de su lista segura siempre termina en el mismo conflicto.",
            "good": "Aprendes a respetar su lista de alimentos seguros en cualquier cena familiar.",
            "bad": "Sigues insistiendo en que pruebe cosas nuevas en cada ocasión similar."
          },
          {
            "q": "Un conflicto reveló que mencionar su diagnóstico en discusiones acaloradas siempre lastima.",
            "good": "Aprendes a mantener su diagnóstico fuera de cualquier discusión futura.",
            "bad": "Sigues mencionándolo cuando te enojas en conflictos similares."
          },
          {
            "q": "Notas que las amenazas en momentos de crisis pública siempre erosionan la confianza.",
            "good": "Aprendes a sostener calma y contención en vez de amenazar en público.",
            "bad": "Sigues amenazando de forma similar en la próxima crisis pública."
          },
          {
            "q": "Un conflicto reveló que comparar su vida social con la de su hermano/a genera el mismo malestar.",
            "good": "Aprendes a valorar sus propias formas de socializar sin comparaciones.",
            "bad": "Sigues resaltando la facilidad de su hermano/a en situaciones similares."
          },
          {
            "q": "Notas que asumir que busca atención en cada crisis genera el mismo conflicto recurrente.",
            "good": "Aprendes a responder con atención genuina en vez de sospechar manipulación.",
            "bad": "Sigues asumiendo lo mismo en cada nueva crisis."
          },
          {
            "q": "Un conflicto surgió porque exigiste 'verse normal' en fotos familiares, una vez más.",
            "good": "Aprendes a dejar de exigir poses forzadas en eventos futuros.",
            "bad": "Sigues insistiendo en la misma exigencia en cada evento."
          },
          {
            "q": "Notas que ignorar su necesidad de silencio en esperas médicas siempre genera crisis.",
            "good": "Aprendes a preparar ambientes más tranquilos para citas médicas futuras.",
            "bad": "Sigues llevándolo/a a las mismas esperas ruidosas sin ajuste."
          },
          {
            "q": "Un conflicto reveló que confundes agobio escolar real con flojera de forma recurrente.",
            "good": "Aprendes a indagar las causas reales detrás de su resistencia escolar.",
            "bad": "Sigues presionando para que 'se esfuerce más' sin indagar más a fondo."
          },
          {
            "q": "Notas que cambiar planes de vacaciones sin avisar siempre genera el mismo tipo de crisis.",
            "good": "Aprendes a anticipar y compartir los planes de viaje con más antelación.",
            "bad": "Sigues improvisando cambios de última hora en cada viaje futuro."
          },
          {
            "q": "Un conflicto surgió porque te burlaste de su objeto de apoyo frente a otros, otra vez.",
            "good": "Aprendes a mostrar aceptación abierta de ese objeto en cualquier contexto.",
            "bad": "Sigues haciendo comentarios similares sobre ese objeto de apoyo."
          },
          {
            "q": "Notas que sospechar de sus excusas escolares siempre genera el mismo distanciamiento.",
            "good": "Aprendes a indagar la dificultad real antes de asumir que inventa excusas.",
            "bad": "Sigues sospechando de la misma forma en situaciones escolares similares."
          },
          {
            "q": "Un conflicto reveló que no sueles defenderlo/a de comentarios de conocidos o vecinos.",
            "good": "Preparas una respuesta clara para usar ante comentarios similares futuros.",
            "bad": "Sigues callando esperando que la situación se resuelva sola."
          },
          {
            "q": "Notas que improvisar cambios en vacaciones sin avisar genera estrés anticipado en cada viaje.",
            "good": "Aprendes a planificar con anticipación y compartir los detalles antes de viajar.",
            "bad": "Sigues improvisando esperando que esta vez no le afecte."
          },
          {
            "q": "Un conflicto reveló que comparar su desempeño frente a un maestro siempre genera el mismo malestar.",
            "good": "Aprendes a apoyar su proceso escolar sin comparaciones frente a otros.",
            "bad": "Sigues comparando su desempeño esperando un resultado distinto."
          }
        ]
      }
    ]
  },
  {
    "slug": "defensa",
    "nombre": "Defensa y Colaboración",
    "color": "#ec4899",
    "icon": "<path d=\"M20.5 11H19V7c0-1.1-.9-2-2-2h-4V3.5C13 2.12 11.88 1 10.5 1S8 2.12 8 3.5V5H4c-1.1 0-1.99.9-1.99 2v3.8H3.5c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7H2V20c0 1.1.9 2 2 2h3.8v-1.5c0-1.49 1.21-2.7 2.7-2.7 1.49 0 2.7 1.21 2.7 2.7V22H17c1.1 0 2-.9 2-2v-4h1.5c1.38 0 2.5-1.12 2.5-2.5S21.88 11 20.5 11z\"/>",
    "habilidades": [
      {
        "slug": "trabajar-con-profesores",
        "nombre": "Trabajar con Profesores",
        "emoji": "🏫",
        "descripcion": "Comunicar necesidades y coordinar ajustes en el colegio.",
        "situaciones": [
          {
            "q": "Un profesor reporta que tu hijo/a 'no presta atención' en clase.",
            "good": "Compartes información sobre su perfil de atención y sugieres ajustes concretos juntos.",
            "bad": "Asumes que el profesor tiene razón y presionas a tu hijo/a sin más contexto."
          },
          {
            "q": "El colegio propone una sanción estándar para una conducta que es una necesidad sensorial.",
            "good": "Explicas el contexto neurológico y propones una alternativa más adecuada.",
            "bad": "Aceptas la sanción sin cuestionar si es apropiada para su perfil."
          },
          {
            "q": "Un profesor no conoce bien qué significa el perfil de tu hijo/a.",
            "good": "Ofreces compartir información concreta y práctica sobre cómo apoyarlo/a en clase.",
            "bad": "Asumes que el profesor 'debería saberlo' y no compartes nada."
          },
          {
            "q": "El colegio sugiere una evaluación adicional para tu hijo/a.",
            "good": "Te informas y participas activamente en el proceso, colaborando con el equipo.",
            "bad": "Rechazas la evaluación por miedo a una etiqueta, sin informarte primero."
          },
          {
            "q": "Un maestro compara públicamente a tu hijo/a con otros estudiantes.",
            "good": "Conversas en privado con el profesor explicando el impacto de esa comparación.",
            "bad": "Ignoras la situación esperando que 'no vuelva a pasar' sin decir nada."
          },
          {
            "q": "El colegio necesita ajustar la evaluación de un examen para tu hijo/a.",
            "good": "Propones ajustes concretos (tiempo extra, formato) basados en su perfil real.",
            "bad": "Esperas que el colegio proponga los ajustes sin dar tu propia información."
          },
          {
            "q": "Un profesor nuevo no conoce el historial de tu hijo/a.",
            "good": "Preparas un resumen breve y práctico para compartir al inicio del año.",
            "bad": "Asumes que la información ya fue transmitida por el colegio sin confirmarlo."
          },
          {
            "q": "El colegio organiza una actividad sensorialmente intensa (feria, asamblea).",
            "good": "Coordinas con anticipación adaptaciones o alternativas para tu hijo/a.",
            "bad": "Dejas que tu hijo/a enfrente la actividad sin ninguna adaptación previa."
          },
          {
            "q": "Un profesor malinterpreta una conducta de tu hijo/a como falta de respeto.",
            "good": "Explicas el trasfondo neurológico de esa conducta con ejemplos concretos.",
            "bad": "Le pides a tu hijo/a que 'se comporte mejor' sin abordarlo con el profesor."
          },
          {
            "q": "El colegio propone un plan de apoyo (PEI/adaptación curricular).",
            "good": "Participas activamente revisando y ajustando el plan según conoces a tu hijo/a.",
            "bad": "Firmas el plan sin revisarlo, delegando toda la decisión al colegio."
          },
          {
            "q": "Un profesor reporta una crisis en clase sin mucho contexto.",
            "good": "Preguntas detalles específicos para entender qué la desencadenó.",
            "bad": "Asumes automáticamente que tu hijo/a hizo algo mal sin más información."
          },
          {
            "q": "El colegio no tiene un espacio tranquilo disponible para momentos de sobrecarga.",
            "good": "Propones colaborativamente crear o designar un espacio de ese tipo.",
            "bad": "Aceptas que 'no hay recursos' sin proponer ninguna alternativa."
          },
          {
            "q": "Un profesor pregunta cómo manejar mejor una conducta específica en clase.",
            "good": "Compartes estrategias concretas que funcionan en casa, adaptadas al aula.",
            "bad": "Le dices que 'es su trabajo saber cómo manejarlo' sin colaborar."
          },
          {
            "q": "El colegio organiza una reunión sobre el progreso de tu hijo/a.",
            "good": "Llegas preparado/a con observaciones concretas y preguntas específicas.",
            "bad": "Asistes sin preparación, aceptando pasivamente lo que se te informa."
          },
          {
            "q": "Un profesor sugiere una intervención que no encaja con el enfoque neuroafirmativo.",
            "good": "Explicas con respeto por qué prefieres un enfoque distinto y propones alternativas.",
            "bad": "Aceptas la intervención sin cuestionarla para 'no generar conflicto'."
          },
          {
            "q": "El colegio reporta mejoras que tú no ves reflejadas en casa.",
            "good": "Compartes esa diferencia para entender juntos el contexto de cada entorno.",
            "bad": "Asumes que uno de los dos entornos 'está mintiendo' sobre el progreso."
          },
          {
            "q": "Un profesor plantea dudas sobre si tu hijo/a debería estar en aula regular.",
            "good": "Exploras la conversación con datos concretos y buscas la mejor solución conjunta.",
            "bad": "Reaccionas a la defensiva sin escuchar realmente la preocupación planteada."
          },
          {
            "q": "El colegio cambia de metodología sin avisar con anticipación a las familias.",
            "good": "Solicitas información anticipada para poder preparar a tu hijo/a en casa.",
            "bad": "Te enteras tarde y no tienes tiempo de preparar a tu hijo/a para el cambio."
          },
          {
            "q": "Un profesor destaca solo las dificultades de tu hijo/a en las reuniones.",
            "good": "Pides equilibrar la conversación incluyendo también sus fortalezas.",
            "bad": "Aceptas el enfoque negativo sin pedir una visión más completa."
          },
          {
            "q": "El colegio necesita coordinar con un especialista externo que atiende a tu hijo/a.",
            "good": "Facilitas activamente la comunicación entre ambas partes.",
            "bad": "Dejas que cada parte trabaje por separado sin conectar la información."
          },
          {
            "q": "El colegio organiza un examen sorpresa sin previo aviso.",
            "good": "Solicitas que te avisen con anticipación por el impacto que genera en tu hijo/a.",
            "bad": "Aceptas que los exámenes sorpresa sigan ocurriendo sin decir nada."
          },
          {
            "q": "Un profesor cambia la disposición del aula sin avisar a las familias.",
            "good": "Preguntas cómo afecta el cambio a tu hijo/a y compartes su necesidad de previsibilidad.",
            "bad": "Descubres el cambio por tu hijo/a y no dices nada al profesor."
          },
          {
            "q": "El colegio quiere retirar el apoyo de un asistente/paraprofesional.",
            "good": "Pides una reunión para revisar juntos si esa decisión sigue siendo adecuada.",
            "bad": "Aceptas el retiro del apoyo sin pedir datos que lo justifiquen."
          },
          {
            "q": "Un profesor de educación física exige que tu hijo/a participe en un deporte de contacto.",
            "good": "Propones una alternativa que respete sus límites sensoriales.",
            "bad": "Obligas a tu hijo/a a participar igual para 'no destacar' entre compañeros."
          },
          {
            "q": "El colegio programa una salida educativa sin información sensorial previa.",
            "good": "Solicitas detalles del entorno para preparar a tu hijo/a con anticipación.",
            "bad": "Envías a tu hijo/a sin preguntar nada sobre el lugar o el itinerario."
          },
          {
            "q": "Un profesor sustituto no conoce las necesidades de tu hijo/a.",
            "good": "Dejas una nota breve y clara con la información esencial para el día.",
            "bad": "Asumes que el profesor titular ya avisó, sin confirmarlo."
          },
          {
            "q": "El colegio decide cambiar a tu hijo/a de aula a mitad de año.",
            "good": "Preguntas el motivo y evalúas juntos el impacto de ese cambio.",
            "bad": "Aceptas el cambio sin preguntar cómo se preparará a tu hijo/a."
          },
          {
            "q": "Un profesor sugiere que tu hijo/a repita el año escolar.",
            "good": "Pides datos concretos y una reunión para decidir informadamente.",
            "bad": "Rechazas la idea de inmediato sin escuchar los argumentos del profesor."
          },
          {
            "q": "El colegio organiza fotos escolares con un horario rígido y fila larga.",
            "good": "Solicitas un horario alternativo o menos espera para tu hijo/a.",
            "bad": "Dejas que tu hijo/a espere en fila larga sin pedir ningún ajuste."
          },
          {
            "q": "Un profesor pide que tu hijo/a lea en voz alta frente a la clase.",
            "good": "Explicas su preferencia y propones una alternativa cómoda para él/ella.",
            "bad": "Dejas que se sienta expuesto/a sin hablar con el profesor."
          },
          {
            "q": "Un profesor de infantil pregunta por qué tu hijo/a no juega con otros niños en el recreo.",
            "good": "Compartes cómo prefiere jugar y qué apoyos ayudan a iniciar interacción.",
            "bad": "Dices que 'ya se le pasará' sin dar información útil."
          },
          {
            "q": "El colegio propone eliminar el tiempo de descanso sensorial que tu hijo/a tiene asignado.",
            "good": "Explicas por qué ese tiempo sigue siendo necesario con ejemplos recientes.",
            "bad": "Aceptas quitarlo para 'no pedir más de la cuenta'."
          },
          {
            "q": "Un profesor de secundaria penaliza a tu hijo/a por llegar tarde debido a su rutina matutina.",
            "good": "Coordinas con el colegio una solución realista para las mañanas.",
            "bad": "Dejas que las sanciones se acumulen sin hablarlo con nadie."
          },
          {
            "q": "El colegio quiere iniciar el proceso de transición a la vida adulta sin consultarte primero.",
            "good": "Pides participar activamente desde el inicio del proceso.",
            "bad": "Dejas que el colegio decida solo, sin tu perspectiva como padre/madre."
          },
          {
            "q": "Un profesor te pide 'más paciencia en casa' ante una dificultad que observa en clase.",
            "good": "Le explicas qué estrategias usas en casa y cuáles podrían servir también en el aula.",
            "bad": "Te sientes juzgado/a y evitas seguir hablando con ese profesor."
          },
          {
            "q": "El colegio organiza un simulacro de incendio sin preparar a tu hijo/a para el ruido de la alarma.",
            "good": "Solicitas protección auditiva o aviso previo antes del simulacro.",
            "bad": "Dejas que enfrente la alarma sin ninguna preparación."
          },
          {
            "q": "Un profesor de música exige que todos toquen un instrumento ruidoso en grupo.",
            "good": "Propones una alternativa o protección auditiva para tu hijo/a.",
            "bad": "Obligas a tu hijo/a a participar igual, aunque le genere malestar."
          },
          {
            "q": "El colegio decide no renovar el plan de apoyo de tu hijo/a sin revisión previa.",
            "good": "Solicitas una reunión de seguimiento antes de cualquier cambio.",
            "bad": "Te enteras del cambio después de que ya se aplicó."
          },
          {
            "q": "Un profesor comenta que tu hijo/a 'interrumpe demasiado' en clase.",
            "good": "Exploras juntos si es impulsividad y qué estrategia puede ayudar.",
            "bad": "Le pides a tu hijo/a que 'se controle más' sin investigar la causa."
          },
          {
            "q": "El colegio pide que tu hijo/a participe en una obra de teatro frente a todo el colegio.",
            "good": "Preguntas si existe un rol alternativo menos expuesto que le sea cómodo.",
            "bad": "Lo/la inscribes igual sin preguntar sus preferencias."
          },
          {
            "q": "El colegio decide cambiar el horario del recreo sensorial sin avisar.",
            "good": "Pides que te informen los cambios con anticipación por su rutina.",
            "bad": "Te enteras por tu hijo/a y no dices nada al colegio."
          },
          {
            "q": "Un profesor de arte insiste en que use ciertos materiales que le generan rechazo sensorial.",
            "good": "Propones materiales alternativos que cumplan el mismo objetivo.",
            "bad": "Dejas que use el material igual, aunque le incomode."
          },
          {
            "q": "El colegio quiere derivarlo/a a un aula especial sin explorar antes otras opciones.",
            "good": "Pides conocer todas las alternativas antes de decidir.",
            "bad": "Aceptas la derivación de inmediato, sin cuestionar el proceso."
          },
          {
            "q": "Un profesor de secundaria no permite el uso de audífonos con cancelación de ruido en clase.",
            "good": "Presentas la necesidad con información concreta al profesor.",
            "bad": "Le pides a tu hijo/a que los deje en casa para 'evitar problemas'."
          },
          {
            "q": "El colegio programa la graduación con luces y sonido muy intensos.",
            "good": "Solicitas con anticipación ajustes de sonido o un lugar más tranquilo.",
            "bad": "Asistes sin pedir nada, esperando que tu hijo/a lo tolere igual."
          },
          {
            "q": "Un profesor de primaria reporta que tu hijo/a 'se aísla' en el recreo.",
            "good": "Compartes si ese aislamiento es elección o necesidad, y qué apoyo ayuda.",
            "bad": "Asumes automáticamente que hay un problema social sin más contexto."
          },
          {
            "q": "Un profesor decide cambiar el sistema de recompensas sin avisarte.",
            "good": "Preguntas cómo funciona el nuevo sistema y si encaja con el enfoque en casa.",
            "bad": "Dejas que el nuevo sistema opere sin entender su lógica."
          },
          {
            "q": "El colegio no tiene protocolo claro para una crisis sensorial en el comedor.",
            "good": "Propones junto al colegio un protocolo concreto para esos momentos.",
            "bad": "Aceptas que 'se resolverá como se pueda' sin protocolo."
          },
          {
            "q": "Un profesor universitario no conoce el servicio de accesibilidad del centro.",
            "good": "Acompañas a tu hijo/a a conectar con la oficina de accesibilidad correspondiente.",
            "bad": "Dejas que enfrente solo/a la situación sin orientación."
          },
          {
            "q": "El colegio organiza una jornada de puertas abiertas con mucho ruido y gente.",
            "good": "Preparas con anticipación una salida o pausa para tu hijo/a.",
            "bad": "Lo/la llevas sin ningún plan de salida si se sobrecarga."
          },
          {
            "q": "Un profesor de primaria malinterpreta el contacto visual evitado como falta de atención.",
            "good": "Explicas que el procesamiento no depende del contacto visual.",
            "bad": "Le exiges a tu hijo/a que mire a los ojos para 'parecer atento'."
          },
          {
            "q": "El colegio no informa a tiempo sobre un cambio de profesor a mitad de curso.",
            "good": "Pides que te avisen con antelación los cambios de personal relevantes.",
            "bad": "Tu hijo/a se entera del cambio el mismo día, sin preparación."
          },
          {
            "q": "Un profesor de secundaria asigna trabajos grupales sin considerar dificultades sociales de tu hijo/a.",
            "good": "Propones ajustes en la formación de grupos o el rol asignado.",
            "bad": "Dejas que se las arregle solo/a sin plantear nada al profesor."
          },
          {
            "q": "El colegio cuestiona la necesidad de un intérprete o apoyo de comunicación.",
            "good": "Presentas evidencia concreta de por qué ese apoyo es necesario.",
            "bad": "Aceptas que 'puede arreglárselas sin eso' sin más argumento."
          },
          {
            "q": "Un profesor de arte plástica no permite descansos durante actividades largas.",
            "good": "Solicitas pausas cortas programadas según su necesidad de regulación.",
            "bad": "Dejas que aguante toda la actividad sin ninguna pausa."
          },
          {
            "q": "El colegio decide suspender el recreo como castigo colectivo.",
            "good": "Explicas el impacto desproporcionado que eso tiene en tu hijo/a.",
            "bad": "Aceptas la sanción colectiva sin plantear el caso particular."
          },
          {
            "q": "Un profesor de tecnología prohíbe el uso de un dispositivo de comunicación aumentativa.",
            "good": "Aclaras que es una herramienta esencial, no un dispositivo recreativo.",
            "bad": "Dejas que se lo retiren sin explicar su función real."
          },
          {
            "q": "El colegio quiere evaluar el comportamiento de tu hijo/a sin observarlo en su entorno natural.",
            "good": "Sugieres que la evaluación incluya observación directa en el aula.",
            "bad": "Aceptas los resultados de una evaluación descontextualizada sin cuestionarla."
          },
          {
            "q": "Un profesor comenta en redes sociales del colegio una anécdota de tu hijo/a sin permiso.",
            "good": "Conversas en privado sobre el límite de compartir información sin consentimiento.",
            "bad": "Dejas pasar la situación aunque te incomodó."
          },
          {
            "q": "El colegio organiza una competencia deportiva con eliminación pública.",
            "good": "Propones un formato menos expuesto o alternativas de participación.",
            "bad": "Dejas que participe en un formato que sabes le genera ansiedad."
          },
          {
            "q": "Un profesor de primaria pide que 'hable con más confianza' en clase.",
            "good": "Explicas que su comunicación puede tomar otras formas válidas.",
            "bad": "Presionas a tu hijo/a en casa para que hable 'como los demás'."
          },
          {
            "q": "El colegio decide cambiar el proveedor del comedor sin considerar la selectividad alimentaria.",
            "good": "Coordinas con el nuevo servicio opciones compatibles con su alimentación.",
            "bad": "Dejas que se quede sin comer adecuado por no preguntar antes."
          },
          {
            "q": "El colegio organiza el examen de admisión a secundaria en un ambiente muy ruidoso.",
            "good": "Solicitas una sala alternativa más tranquila para el examen.",
            "bad": "Dejas que rinda el examen en las condiciones estándar sin pedir nada."
          },
          {
            "q": "Un profesor de biología exige disecciones sin alternativa para sensibilidades sensoriales.",
            "good": "Propones una alternativa educativa equivalente sin esa exposición.",
            "bad": "Obligas a tu hijo/a a participar igual, aunque le resulte insoportable."
          },
          {
            "q": "El colegio decide no avisar sobre un cambio de aula el día del examen.",
            "good": "Pides que los cambios importantes se comuniquen con antelación siempre.",
            "bad": "Tu hijo/a llega confundido/a el día del examen sin previo aviso."
          },
          {
            "q": "Un profesor de inglés no permite el uso de pictogramas de apoyo en clase.",
            "good": "Explicas que son una herramienta de comprensión, no una ventaja injusta.",
            "bad": "Dejas que se los quiten sin defender su uso."
          },
          {
            "q": "El colegio plantea expulsar temporalmente a tu hijo/a por una crisis sensorial.",
            "good": "Pides revisar el protocolo y proponer alternativas a la expulsión.",
            "bad": "Aceptas la expulsión sin cuestionar si fue la respuesta adecuada."
          },
          {
            "q": "Un profesor de primaria minimiza el acoso que sufre tu hijo/a por parte de compañeros.",
            "good": "Documentas los hechos y exiges una respuesta concreta del colegio.",
            "bad": "Aceptas que 'son cosas de niños' sin exigir ninguna acción."
          },
          {
            "q": "El colegio decide implementar un sistema de puntos por buena conducta para toda la clase.",
            "good": "Preguntas cómo ese sistema afecta a tu hijo/a en particular.",
            "bad": "Dejas que el sistema opere sin evaluar su impacto específico."
          },
          {
            "q": "Un profesor de historia asigna una presentación oral obligatoria sin alternativas.",
            "good": "Propones un formato alternativo (grabación, escrito) que cumpla el objetivo.",
            "bad": "Dejas que enfrente la presentación oral sin ningún ajuste."
          },
          {
            "q": "El colegio no informa sobre el protocolo de emergencia adaptado para tu hijo/a.",
            "good": "Solicitas conocer y participar en la elaboración de ese protocolo.",
            "bad": "Asumes que el colegio ya tiene todo resuelto sin confirmarlo."
          },
          {
            "q": "Un profesor de secundaria descarta el diagnóstico de tu hijo/a por 'no notarlo' en clase.",
            "good": "Compartes información y ejemplos concretos de cómo se manifiesta.",
            "bad": "Dejas de mencionar el diagnóstico para evitar la discusión."
          },
          {
            "q": "El colegio organiza el primer día de clases sin anticipar el cambio de rutina.",
            "good": "Solicitas información previa (horarios, profesores) para preparar a tu hijo/a.",
            "bad": "Llega el primer día sin ninguna preparación previa."
          },
          {
            "q": "Un profesor de química exige que tu hijo/a use materiales con olores fuertes sin alternativa.",
            "good": "Propones una adaptación que reduzca la exposición sensorial.",
            "bad": "Dejas que participe igual, aunque le cause malestar físico."
          },
          {
            "q": "Un profesor de educación física obliga a cambiarse en vestuario grupal sin privacidad.",
            "good": "Solicitas una alternativa de privacidad para el cambio de ropa.",
            "bad": "Dejas que use el vestuario grupal aunque le genere ansiedad."
          },
          {
            "q": "El colegio plantea un viaje de fin de curso sin considerar necesidades de tu hijo/a.",
            "good": "Coordinas con anticipación las adaptaciones necesarias para el viaje.",
            "bad": "Decides que no participe sin explorar antes las alternativas."
          },
          {
            "q": "El colegio decide que tu hijo/a curse una materia optativa sin considerar sus intereses.",
            "good": "Solicitas participar en la elección considerando su perfil.",
            "bad": "Aceptas la asignación sin cuestionar si es la mejor opción."
          },
          {
            "q": "Un profesor solicita que dejes de 'sobreproteger' con las adaptaciones que pides.",
            "good": "Explicas con datos por qué esas adaptaciones no son sobreprotección.",
            "bad": "Reduces las solicitudes de adaptación por ese comentario."
          },
          {
            "q": "El colegio no permite que tu hijo/a lleve su objeto de regulación (fidget, peluche) a clase.",
            "good": "Explicas su función reguladora y negocias su uso apropiado.",
            "bad": "Dejas que se lo prohíban sin explicar para qué sirve."
          },
          {
            "q": "Un profesor de secundaria penaliza la letra desprolija de tu hijo/a en los exámenes.",
            "good": "Solicitas evaluación por contenido con apoyo de escritura si es necesario.",
            "bad": "Aceptas que baje la nota por motricidad fina sin cuestionarlo."
          },
          {
            "q": "Un profesor de secundaria descarta las notas de la reunión anterior sobre tu hijo/a.",
            "good": "Llevas un resumen escrito de los acuerdos previos a cada reunión.",
            "bad": "Confías en que todo se recuerde sin dejar nada por escrito."
          },
          {
            "q": "El colegio decide implementar un cambio de metodología de lectura sin previo aviso.",
            "good": "Pides información anticipada para reforzar en casa la transición.",
            "bad": "Descubres el cambio cuando tu hijo/a ya está confundido/a en clase."
          },
          {
            "q": "Un profesor de primaria exige contacto físico (tomarse de manos) en una actividad grupal.",
            "good": "Propones una alternativa que respete su límite corporal.",
            "bad": "Obligas a tu hijo/a a participar igual, ignorando su malestar."
          },
          {
            "q": "El colegio no considera el diagnóstico de tu hijo/a al asignar la carga de deberes.",
            "good": "Solicitas ajustar la cantidad de deberes según su capacidad real.",
            "bad": "Dejas que la sobrecarga de deberes continúe sin decir nada."
          },
          {
            "q": "Un profesor sugiere que tu hijo/a 'finja estar bien' para pasar desapercibido/a.",
            "good": "Explicas por qué enmascarar constantemente le genera agotamiento.",
            "bad": "Apoyas esa sugerencia esperando que evite conflictos así."
          },
          {
            "q": "El colegio decide cambiar el sistema de comunicación con las familias (app nueva) sin explicación clara.",
            "good": "Pides una demostración o guía clara del nuevo sistema.",
            "bad": "Dejas de recibir información importante por no entender el nuevo sistema."
          },
          {
            "q": "Un profesor de secundaria no adapta el ritmo de dictado a la velocidad de escritura de tu hijo/a.",
            "good": "Solicitas una adaptación concreta (grabación, fotocopias) para el dictado.",
            "bad": "Dejas que se quede atrás en cada clase sin proponer nada."
          },
          {
            "q": "El colegio decide combinar dos grupos con distinta dinámica sin evaluar el impacto.",
            "good": "Solicitas conocer cómo se planea manejar esa combinación con tu hijo/a.",
            "bad": "Aceptas la fusión de grupos sin preguntar nada al respecto."
          },
          {
            "q": "Un profesor de secundaria no permite reprogramar un examen tras una crisis reciente.",
            "good": "Solicitas formalmente una fecha alternativa con respaldo si es necesario.",
            "bad": "Dejas que rinda el examen igual, en un mal momento emocional."
          },
          {
            "q": "El colegio plantea que tu hijo/a curse el último año a distancia sin consultar tu opinión.",
            "good": "Pides participar en la decisión evaluando pros y contras juntos.",
            "bad": "Aceptas la decisión del colegio sin dar tu perspectiva como familia."
          }
        ]
      },
      {
        "slug": "trabajar-con-terapeutas",
        "nombre": "Trabajar con Terapeutas",
        "emoji": "🩺",
        "descripcion": "Alinear estrategias entre casa y consulta clínica.",
        "situaciones": [
          {
            "q": "El terapeuta sugiere una estrategia que no has probado en casa.",
            "good": "La implementas con curiosidad genuina y das seguimiento en la próxima sesión.",
            "bad": "La ignoras porque 'en casa las cosas son distintas' sin intentarlo."
          },
          {
            "q": "Notas que una técnica de terapia no está funcionando en el día a día.",
            "good": "Comunicas esa observación concreta al terapeuta para ajustar el enfoque.",
            "bad": "Dejas de aplicarla en silencio sin informar al terapeuta."
          },
          {
            "q": "El terapeuta pide información detallada sobre una conducta específica.",
            "good": "Llevas un registro concreto de la conducta para compartir información útil.",
            "bad": "Respondes de memoria con generalidades poco específicas."
          },
          {
            "q": "Sientes que el enfoque del terapeuta no encaja con tu filosofía neuroafirmativa.",
            "good": "Conversas abiertamente con el terapeuta sobre ese posible desajuste.",
            "bad": "Continúas la terapia en silencio sin expresar tu desacuerdo."
          },
          {
            "q": "El terapeuta sugiere que tú también apliques ciertas pautas en casa.",
            "good": "Preguntas cómo adaptarlas a tu contexto familiar real.",
            "bad": "Asumes que 'eso es trabajo del terapeuta' y no participas activamente."
          },
          {
            "q": "Notas mejoras en terapia que no se generalizan a casa.",
            "good": "Compartes esa brecha con el terapeuta para ajustar la generalización.",
            "bad": "Asumes que el progreso 'no es real' porque no lo ves en casa."
          },
          {
            "q": "El terapeuta pregunta cómo reaccionó tu hijo/a ante una situación específica.",
            "good": "Describes la situación con detalle, incluyendo el contexto completo.",
            "bad": "Das una respuesta vaga que no aporta información útil."
          },
          {
            "q": "Sientes que las sesiones de terapia agotan mucho a tu hijo/a.",
            "good": "Comunicas esa observación para ajustar duración o frecuencia si es necesario.",
            "bad": "Mantienes el mismo ritmo de sesiones sin comunicar el agotamiento observado."
          },
          {
            "q": "El terapeuta sugiere un cambio de enfoque tras varias sesiones sin avance.",
            "good": "Consideras el cambio con apertura, evaluando juntos el progreso real.",
            "bad": "Insistes en el mismo enfoque por costumbre, aunque no esté funcionando."
          },
          {
            "q": "Tu hijo/a expresa que no le gusta cierta actividad terapéutica.",
            "good": "Compartes esa preferencia con el terapeuta para explorar alternativas.",
            "bad": "Obligas a continuar la actividad sin comunicar su malestar al terapeuta."
          },
          {
            "q": "El terapeuta te pide participar en una sesión conjunta con tu hijo/a.",
            "good": "Aceptas y te preparas para participar activamente en el proceso.",
            "bad": "Evitas participar dejando toda la responsabilidad en el especialista."
          },
          {
            "q": "Notas contradicciones entre lo que indica un terapeuta y otro.",
            "good": "Facilitas la comunicación directa entre ambos profesionales para alinear enfoques.",
            "bad": "Sigues ambas indicaciones por separado sin coordinar entre ellas."
          },
          {
            "q": "El terapeuta sugiere reducir la frecuencia de sesiones al notar progreso.",
            "good": "Consideras la sugerencia con confianza en la evaluación profesional.",
            "bad": "Insistes en mantener la misma frecuencia por inseguridad propia."
          },
          {
            "q": "Sientes que no entiendes bien la jerga técnica que usa el terapeuta.",
            "good": "Pides que te lo explique en términos más simples y concretos.",
            "bad": "Asientes sin entender realmente, para no parecer desinformado/a."
          },
          {
            "q": "El terapeuta pregunta por la dinámica familiar completa, no solo por tu hijo/a.",
            "good": "Compartes honestamente el contexto familiar relevante.",
            "bad": "Minimizas la información familiar pensando que 'no es relevante para la terapia'."
          },
          {
            "q": "Notas que cierta tarea terapéutica para casa genera mucho estrés familiar.",
            "good": "Comunicas ese impacto para ajustar la tarea a algo más sostenible.",
            "bad": "Sigues forzando la tarea porque 'el terapeuta lo indicó'."
          },
          {
            "q": "El terapeuta sugiere involucrar más al colegio en el proceso.",
            "good": "Facilitas activamente esa coordinación entre terapia y colegio.",
            "bad": "Consideras que son procesos separados que no necesitan conectarse."
          },
          {
            "q": "Sientes que has perdido la motivación para continuar cierta terapia.",
            "good": "Conversas esa sensación abiertamente con el terapeuta antes de abandonar.",
            "bad": "Dejas de asistir sin ninguna conversación previa sobre el motivo."
          },
          {
            "q": "El terapeuta destaca un avance que a ti te parece pequeño.",
            "good": "Confías en la evaluación profesional del significado de ese avance.",
            "bad": "Minimizas el avance comparándolo con expectativas propias no informadas."
          },
          {
            "q": "Notas que necesitas apoyo terapéutico también para ti como cuidador/a.",
            "good": "Buscas activamente ese espacio de apoyo personal en paralelo.",
            "bad": "Postergas indefinidamente tu propio apoyo por priorizar solo el de tu hijo/a."
          },
          {
            "q": "Un nuevo terapeuta pide el historial completo de terapias anteriores.",
            "good": "Preparas un resumen ordenado con lo relevante de cada etapa.",
            "bad": "Llegas sin ninguna información previa organizada."
          },
          {
            "q": "El terapeuta ocupacional sugiere una dieta sensorial para aplicar en casa.",
            "good": "La implementas con constancia y das seguimiento de resultados.",
            "bad": "La aplicas solo cuando te acuerdas, sin constancia real."
          },
          {
            "q": "Un logopeda plantea usar un sistema de comunicación aumentativa.",
            "good": "Te informas y participas activamente para reforzarlo en casa.",
            "bad": "Dejas que solo se use en consulta, sin practicarlo en casa."
          },
          {
            "q": "El psiquiatra propone iniciar una evaluación para posible medicación.",
            "good": "Preguntas con calma los pros, contras y alternativas antes de decidir.",
            "bad": "Rechazas la idea de inmediato solo por miedo generalizado."
          },
          {
            "q": "Un terapeuta de alimentación pide que registres lo que come tu hijo/a cada día.",
            "good": "Llevas un registro detallado y honesto para compartir en sesión.",
            "bad": "Improvisas la información en la consulta sin haber llevado registro."
          },
          {
            "q": "El psicólogo detecta ansiedad que no habías identificado en casa.",
            "good": "Te abres a explorar esa posibilidad con curiosidad genuina.",
            "bad": "Descartas la observación porque 'en casa no se ve así'."
          },
          {
            "q": "Un terapeuta sugiere reducir estímulos en el hogar durante una etapa sensible.",
            "good": "Haces los ajustes sugeridos y compartes cómo van funcionando.",
            "bad": "Ignoras la sugerencia por considerarla poco práctica sin intentarla."
          },
          {
            "q": "El terapeuta de conducta usa refuerzos que no coinciden con tus valores de crianza.",
            "good": "Conversas para encontrar un enfoque que respete ambas partes.",
            "bad": "Sigues el plan sin decir nada, aunque te incomode."
          },
          {
            "q": "Un especialista en sueño pide detalles de la rutina nocturna completa.",
            "good": "Describes la rutina con precisión, incluso los detalles incómodos.",
            "bad": "Minimizas detalles que crees que 'no son relevantes'."
          },
          {
            "q": "El terapeuta de tu hijo/a adolescente pide hablar a solas con él/ella.",
            "good": "Respetas ese espacio de confidencialidad terapéutica.",
            "bad": "Insistes en estar presente en toda la sesión, sin dar espacio."
          },
          {
            "q": "Un fisioterapeuta sugiere ejercicios diarios que tu hijo/a rechaza hacer.",
            "good": "Comunicas el rechazo para ajustar el enfoque de manera realista.",
            "bad": "Fuerzas los ejercicios diariamente sin informar la resistencia."
          },
          {
            "q": "El terapeuta pregunta cómo describirías tú mismo/a tu nivel de estrés como cuidador/a.",
            "good": "Respondes con honestidad, sin minimizar tu propia carga.",
            "bad": "Respondes que 'todo está bien' para no desviar el foco de tu hijo/a."
          },
          {
            "q": "Un neuropsicólogo pide completar cuestionarios extensos sobre el comportamiento diario.",
            "good": "Los completas con atención y ejemplos concretos recientes.",
            "bad": "Los llenas rápido y de memoria, sin pensar en ejemplos reales."
          },
          {
            "q": "El terapeuta sugiere invitar al profesor del colegio a una sesión conjunta.",
            "good": "Coordinas activamente esa reunión entre ambas partes.",
            "bad": "Consideras que 'no es necesario mezclar' ambos espacios."
          },
          {
            "q": "Un terapeuta cambia de clínica y te pide decidir si continuar con él/ella o con otro.",
            "good": "Conversas con tu hijo/a sobre su preferencia antes de decidir.",
            "bad": "Decides tú solo/a sin considerar la opinión de tu hijo/a."
          },
          {
            "q": "El terapeuta plantea que cierto avance requiere más tiempo del previsto.",
            "good": "Ajustas tus expectativas con la nueva información compartida.",
            "bad": "Te frustras y cuestionas la capacidad del terapeuta sin más diálogo."
          },
          {
            "q": "Un especialista en integración sensorial pide instalar equipo específico en casa.",
            "good": "Investigas opciones accesibles y las implementas gradualmente.",
            "bad": "Descartas la sugerencia por el costo, sin explorar alternativas."
          },
          {
            "q": "El terapeuta de tu hijo/a pequeño/a sugiere terapia de juego en lugar de conversación directa.",
            "good": "Confías en el enfoque profesional adecuado para su edad.",
            "bad": "Insistes en un enfoque más 'verbal' porque te parece más serio."
          },
          {
            "q": "Un psiquiatra ajusta la dosis de medicación y pide observación cercana.",
            "good": "Llevas un registro diario de cambios para la siguiente cita.",
            "bad": "No registras nada y respondes de memoria en la siguiente consulta."
          },
          {
            "q": "El terapeuta pregunta si notas efectos secundarios de la medicación.",
            "good": "Describes con precisión cualquier cambio físico o emocional notado.",
            "bad": "Minimizas síntomas por miedo a que suspendan la medicación."
          },
          {
            "q": "Un terapeuta de habilidades sociales pide que expongas a tu hijo/a a más situaciones grupales.",
            "good": "Buscas oportunidades graduales y las comunicas en sesión.",
            "bad": "Evitas exponerlo/a a grupos por sobreprotección, sin decirlo."
          },
          {
            "q": "El equipo terapéutico sugiere una reunión con todos los profesionales involucrados.",
            "good": "Organizas activamente esa coordinación entre especialistas.",
            "bad": "Dejas que cada uno trabaje aislado sin conectar la información."
          },
          {
            "q": "Un terapeuta ocupacional pregunta por las texturas de ropa que tu hijo/a tolera.",
            "good": "Compartes detalles concretos basados en la experiencia diaria.",
            "bad": "Respondes de forma genérica sin detalles útiles."
          },
          {
            "q": "El terapeuta plantea discutir un posible diagnóstico adicional (comorbilidad).",
            "good": "Te abres a explorar la posibilidad con la información disponible.",
            "bad": "Rechazas la idea por sentir que 'ya es suficiente etiqueta'."
          },
          {
            "q": "Un especialista pide observar a tu hijo/a en su entorno natural (casa o colegio).",
            "good": "Facilitas esa visita u observación con apertura.",
            "bad": "Te resistes a la observación por sentirte juzgado/a."
          },
          {
            "q": "El terapeuta de lenguaje sugiere reducir preguntas cerradas al hablar con tu hijo/a.",
            "good": "Practicas conscientemente ese cambio en casa.",
            "bad": "Sigues con el mismo estilo de siempre, sin ajustar nada."
          },
          {
            "q": "Un terapeuta pregunta cómo reacciona tu hijo/a ante los cambios de rutina en casa.",
            "good": "Describes ejemplos recientes y concretos de esas reacciones.",
            "bad": "Generalizas diciendo que 'se adapta bien a todo'."
          },
          {
            "q": "El psicólogo sugiere trabajar también la autoestima de tu hijo/a, no solo la conducta.",
            "good": "Aceptas ampliar el enfoque terapéutico con esa perspectiva.",
            "bad": "Insistes en que solo se enfoque en 'corregir' comportamientos."
          },
          {
            "q": "Un terapeuta plantea que cierta actividad extraescolar interfiere con el proceso terapéutico.",
            "good": "Evalúas juntos prioridades y ajustas el calendario si hace falta.",
            "bad": "Mantienes todo igual sin considerar el conflicto de horarios."
          },
          {
            "q": "El terapeuta de conducta pide que dejes de usar cierto castigo en casa.",
            "good": "Te informas sobre alternativas y las pruebas con apertura.",
            "bad": "Continúas con el castigo porque 'siempre lo has hecho así'."
          },
          {
            "q": "Un especialista pregunta por el impacto del divorcio/separación en la terapia de tu hijo/a.",
            "good": "Compartes honestamente esa información relevante.",
            "bad": "Ocultas la situación familiar pensando que no afecta la terapia."
          },
          {
            "q": "El terapeuta sugiere que tu hijo/a participe en un grupo con pares de edad similar.",
            "good": "Te informas y facilitas la incorporación al grupo.",
            "bad": "Rechazas la idea por miedo a que se comparen entre ellos."
          },
          {
            "q": "Un terapeuta plantea reducir el número de terapias simultáneas por sobrecarga.",
            "good": "Evalúas honestamente cuáles priorizar según el bienestar de tu hijo/a.",
            "bad": "Mantienes todas las terapias para 'no perder ningún avance'."
          },
          {
            "q": "El especialista pide tu opinión sobre qué objetivo terapéutico priorizar primero.",
            "good": "Participas activamente, aportando tu conocimiento como cuidador/a.",
            "bad": "Dejas toda la decisión al profesional sin dar tu perspectiva."
          },
          {
            "q": "Un terapeuta detecta que cierto material que usan en sesión le genera ansiedad.",
            "good": "Informas de antemano sensibilidades conocidas para prevenir el malestar.",
            "bad": "Dejas que el terapeuta lo descubra en el momento, sin previo aviso."
          },
          {
            "q": "El terapeuta pregunta cómo maneja tu hijo/a la frustración fuera de terapia.",
            "good": "Das ejemplos reales, incluyendo los momentos difíciles.",
            "bad": "Describes solo los momentos positivos para 'quedar bien'."
          },
          {
            "q": "Un especialista sugiere iniciar terapia también para un hermano/a impactado por la dinámica familiar.",
            "good": "Consideras esa opción con apertura genuina.",
            "bad": "Descartas la idea pensando que 'el problema es solo' tu hijo/a con ND."
          },
          {
            "q": "El terapeuta plantea trabajar la identidad y autoconocimiento de tu hijo/a adolescente.",
            "good": "Apoyas ese proceso aunque incluya temas incómodos para ti.",
            "bad": "Intentas dirigir la conversación hacia lo que tú prefieres tratar."
          },
          {
            "q": "Un terapeuta de conducta pide grabar en video ciertas interacciones en casa.",
            "good": "Aceptas y compartes el material de forma honesta.",
            "bad": "Te niegas por incomodidad, aunque ayudaría al proceso."
          },
          {
            "q": "El especialista sugiere una pausa en la terapia por vacaciones o descanso.",
            "good": "Aceptas la pausa confiando en el criterio profesional.",
            "bad": "Insistes en mantener las sesiones por miedo a perder continuidad."
          },
          {
            "q": "Un terapeuta pregunta si tu hijo/a ha mostrado señales de autolesión.",
            "good": "Respondes con total honestidad, aunque sea un tema difícil.",
            "bad": "Minimizas o evitas mencionar señales de alerta observadas."
          },
          {
            "q": "El terapeuta de integración sensorial pide adaptar el vehículo o transporte a la sesión.",
            "good": "Consideras ajustes prácticos para reducir el estrés del traslado.",
            "bad": "Mantienes el mismo transporte incómodo por costumbre."
          },
          {
            "q": "Un especialista sugiere trabajar habilidades de autodefensa/autoadvocacy con tu hijo/a mayor.",
            "good": "Apoyas ese proceso aunque implique que exprese desacuerdo contigo.",
            "bad": "Te sientes amenazado/a por esa autonomía creciente y la frenas."
          },
          {
            "q": "El terapeuta pregunta por tus propias expectativas sobre el progreso de tu hijo/a.",
            "good": "Reflexionas honestamente si tus expectativas son realistas.",
            "bad": "Insistes en metas que el profesional considera poco realistas."
          },
          {
            "q": "Un terapeuta ocupacional pide reorganizar espacios sensoriales en casa.",
            "good": "Haces los cambios sugeridos de forma gradual y consistente.",
            "bad": "Pospones los cambios indefinidamente por comodidad propia."
          },
          {
            "q": "El especialista sugiere evaluar la visión o audición antes de continuar cierta terapia.",
            "good": "Agendas esas evaluaciones adicionales sin demora.",
            "bad": "Descartas la sugerencia por parecer un trámite innecesario."
          },
          {
            "q": "Un terapeuta plantea que cierto avance depende también de consistencia en el colegio.",
            "good": "Coordinas activamente con el colegio para alinear los enfoques.",
            "bad": "Asumes que es solo responsabilidad del colegio, sin coordinar nada."
          },
          {
            "q": "El psiquiatra pregunta sobre antecedentes familiares de salud mental.",
            "good": "Compartes la información honestamente, aunque sea sensible.",
            "bad": "Omites antecedentes relevantes por incomodidad o vergüenza."
          },
          {
            "q": "Un terapeuta sugiere trabajar la regulación emocional también contigo como modelo.",
            "good": "Te abres a ese trabajo conjunto con humildad.",
            "bad": "Consideras que la terapia 'es solo para tu hijo/a', no para ti."
          },
          {
            "q": "El especialista plantea el alta terapéutica al alcanzar los objetivos propuestos.",
            "good": "Revisas juntos si realmente están cubiertas todas las necesidades.",
            "bad": "Te resistes al alta por miedo, sin evaluar objetivamente el progreso."
          },
          {
            "q": "Un terapeuta de conducta usa un lenguaje que a ti te suena patologizante.",
            "good": "Expresas tu incomodidad y buscas un lenguaje más respetuoso juntos.",
            "bad": "Sigues escuchando ese lenguaje sin decir nada, aunque te moleste."
          },
          {
            "q": "El terapeuta pregunta cómo responde tu hijo/a ante figuras de autoridad distintas a ti.",
            "good": "Compartes ejemplos concretos de distintos contextos.",
            "bad": "Respondes solo pensando en cómo te responde a ti."
          },
          {
            "q": "Un especialista en alimentación sugiere involucrar a toda la familia en el proceso.",
            "good": "Coordinas la participación de todos en casa según lo sugerido.",
            "bad": "Dejas que solo tú manejes el tema sin involucrar al resto."
          },
          {
            "q": "El terapeuta plantea trabajar límites y consentimiento corporal con tu hijo/a.",
            "good": "Refuerzas esos mismos conceptos de forma consistente en casa.",
            "bad": "Consideras el tema innecesario para su edad o perfil."
          },
          {
            "q": "Un terapeuta pregunta por el impacto económico de las terapias en la familia.",
            "good": "Compartes la situación real para ajustar el plan de forma sostenible.",
            "bad": "Ocultas la dificultad económica hasta que se vuelve insostenible."
          },
          {
            "q": "El especialista sugiere telehealth por una temporada en lugar de sesiones presenciales.",
            "good": "Te adaptas probando el formato con apertura genuina.",
            "bad": "Rechazas la opción sin intentarla, asumiendo que 'no funcionará'."
          },
          {
            "q": "Un terapeuta plantea revisar el diagnóstico original tras varios años de seguimiento.",
            "good": "Te abres al proceso con curiosidad, sin aferrarte a una etiqueta fija.",
            "bad": "Te resistes a cualquier revisión por miedo a perder recursos actuales."
          },
          {
            "q": "El terapeuta de tu hijo/a adulto joven sugiere iniciar servicios de transición a vida independiente.",
            "good": "Participas apoyando ese proceso sin tomar el control por él/ella.",
            "bad": "Te resistes al proceso, prolongando la dependencia por miedo."
          },
          {
            "q": "Un especialista pide tu consentimiento para compartir información con otro profesional.",
            "good": "Das el consentimiento entendiendo el beneficio de la coordinación.",
            "bad": "Niegas el consentimiento por desconfianza sin más información."
          },
          {
            "q": "El terapeuta pregunta si notas diferencias en el comportamiento según quién esté presente.",
            "good": "Describes con detalle esas diferencias observadas en distintos contextos.",
            "bad": "Aseguras que 'es igual siempre' sin haberlo observado realmente."
          },
          {
            "q": "Un terapeuta sugiere reducir la cantidad de pantallas antes de las sesiones.",
            "good": "Ajustas la rutina para llegar en mejores condiciones a terapia.",
            "bad": "Mantienes la misma rutina de pantallas sin considerar el efecto."
          },
          {
            "q": "El especialista plantea trabajar la transición de un terapeuta infantil a uno de adultos.",
            "good": "Inicias ese proceso con anticipación, involucrando a tu hijo/a.",
            "bad": "Esperas hasta el último momento para buscar un nuevo profesional."
          },
          {
            "q": "Un terapeuta pregunta por tus propias creencias sobre la neurodivergencia antes de empezar.",
            "good": "Reflexionas honestamente y compartes tu perspectiva actual.",
            "bad": "Respondes lo que crees que el terapeuta 'quiere escuchar'."
          },
          {
            "q": "El terapeuta sugiere una segunda opinión ante un diagnóstico complejo.",
            "good": "Buscas esa segunda opinión con apertura, sin sentirlo como desconfianza.",
            "bad": "Te niegas a buscarla por lealtad al primer profesional."
          },
          {
            "q": "Un terapeuta pide involucrar a la pareja o co-cuidador en próximas sesiones.",
            "good": "Coordinas la participación activa de ambos cuidadores.",
            "bad": "Asistes siempre solo/a, dejando al otro cuidador desinformado."
          },
          {
            "q": "El especialista plantea trabajar el duelo por expectativas no cumplidas como padre/madre.",
            "good": "Te abres a ese proceso emocional con honestidad.",
            "bad": "Evitas el tema insistiendo en que 'estás bien' sin explorarlo."
          },
          {
            "q": "Un terapeuta pregunta cómo describirías la relación actual con tu hijo/a.",
            "good": "Respondes con honestidad, incluyendo tensiones reales presentes.",
            "bad": "Describes una relación idealizada que no refleja la realidad."
          },
          {
            "q": "El terapeuta sugiere ajustar el objetivo terapéutico porque el actual ya no aplica.",
            "good": "Revisas juntos y actualizas el plan según la etapa actual.",
            "bad": "Insistes en mantener objetivos ya superados por costumbre."
          },
          {
            "q": "Un especialista plantea derivar a tu hijo/a a un centro con lista de espera larga.",
            "good": "Te informas de alternativas mientras gestionas activamente esa derivación.",
            "bad": "Esperas pasivamente sin buscar ningún apoyo mientras tanto."
          },
          {
            "q": "El terapeuta pregunta si el enfoque actual sigue siendo neuroafirmativo para ti.",
            "good": "Reflexionas honestamente y lo conversas abiertamente si algo cambió.",
            "bad": "Evitas la pregunta por no saber cómo responder con sinceridad."
          }
        ]
      },
      {
        "slug": "explicar-nd-familiares",
        "nombre": "Explicar la Neurodivergencia a Familiares",
        "emoji": "👨‍👩‍👧",
        "descripcion": "Traducir la doble empatía para abuelos, tíos y otros cuidadores.",
        "situaciones": [
          {
            "q": "Un abuelo dice que tu hijo/a 'solo necesita más disciplina'.",
            "good": "Explicas con calma y ejemplos concretos por qué esa disciplina no aborda la necesidad real.",
            "bad": "Evitas el tema para no generar conflicto familiar, dejando pasar la idea errónea."
          },
          {
            "q": "Un tío hace comentarios sobre que tu hijo/a 'ya se le va a pasar'.",
            "good": "Compartes información breve y clara sobre qué es realmente la neurodivergencia.",
            "bad": "Te ríes incómodamente sin corregir la idea equivocada."
          },
          {
            "q": "Un familiar insiste en abrazar a tu hijo/a aunque él/ella se resista.",
            "good": "Explicas con firmeza y respeto que su límite corporal debe respetarse.",
            "bad": "Permites el abrazo forzado 'para no ofender' al familiar."
          },
          {
            "q": "Un abuelo compara a tu hijo/a con cómo era otro nieto a su edad.",
            "good": "Explicas que cada perfil neurológico tiene su propio desarrollo, sin ser mejor o peor.",
            "bad": "Te quedas callado/a dejando que la comparación quede sin corregir."
          },
          {
            "q": "Un familiar pregunta genuinamente cómo puede ayudar mejor a tu hijo/a.",
            "good": "Aprovechas la apertura para compartir información concreta y práctica.",
            "bad": "Respondes vagamente sin dar herramientas concretas de apoyo."
          },
          {
            "q": "Un tío hace un comentario sobre que 'antes esto no existía'.",
            "good": "Explicas con calma que siempre existió, solo que ahora se comprende mejor.",
            "bad": "Evitas la conversación para no entrar en un debate incómodo."
          },
          {
            "q": "Un familiar se ofende porque tu hijo/a no quiso saludarlo con un beso.",
            "good": "Explicas que su forma de saludar es distinta, sin significar rechazo personal.",
            "bad": "Obligas a tu hijo/a a saludar así 'para no ofender' al familiar."
          },
          {
            "q": "Un abuelo insiste en que tu hijo/a 'está mimado' por tus adaptaciones.",
            "good": "Explicas la diferencia entre adaptación necesaria y sobreprotección.",
            "bad": "Dejas de aplicar las adaptaciones frente a ese familiar por presión social."
          },
          {
            "q": "Un familiar pregunta si la neurodivergencia 'se cura'.",
            "good": "Explicas con paciencia que no es algo a curar, sino una forma distinta de funcionar.",
            "bad": "Evitas responder claramente para no profundizar en el tema."
          },
          {
            "q": "Un tío hace comentarios sobre el 'comportamiento raro' de tu hijo/a delante de él.",
            "good": "Corriges el comentario en el momento, con respeto pero con firmeza.",
            "bad": "Ignoras el comentario delante de tu hijo/a, validándolo con tu silencio."
          },
          {
            "q": "Un familiar quiere ayudar pero no sabe cómo interactuar con tu hijo/a.",
            "good": "Le das indicaciones concretas y sencillas de qué funciona bien.",
            "bad": "Asumes que 'ya debería saber' sin dar ninguna orientación práctica."
          },
          {
            "q": "Un abuelo minimiza una crisis de tu hijo/a diciendo que 'todos los niños hacen eso'.",
            "good": "Explicas la diferencia entre una rabieta típica y una crisis de sobrecarga real.",
            "bad": "Dejas pasar el comentario sin aclarar la diferencia real."
          },
          {
            "q": "Un familiar presiona para que tu hijo/a participe en una tradición familiar que le genera ansiedad.",
            "good": "Explicas el motivo y proponen una forma adaptada de participar.",
            "bad": "Obligas a tu hijo/a a participar igual 'por respeto a la tradición'."
          },
          {
            "q": "Un tío hace bromas sobre los intereses intensos de tu hijo/a.",
            "good": "Explicas con calma el valor de esos intereses y pides respeto hacia ellos.",
            "bad": "Te ríes de la broma para 'no hacer drama' delante de la familia."
          },
          {
            "q": "Un familiar cuestiona por qué tu hijo/a usa auriculares o protección sensorial en reuniones.",
            "good": "Explicas brevemente la función real de esos apoyos sensoriales.",
            "bad": "Le pides a tu hijo/a que no los use para 'no llamar la atención'."
          },
          {
            "q": "Un abuelo dice que 'en su época esto se resolvía con más mano dura'.",
            "good": "Explicas con respeto por qué ese enfoque no ayuda al perfil de tu hijo/a.",
            "bad": "Evitas el enfrentamiento dejando que la idea quede sin cuestionar."
          },
          {
            "q": "Un familiar pregunta si puede leer más sobre el tema para entender mejor.",
            "good": "Le compartes recursos concretos y accesibles sobre neurodivergencia.",
            "bad": "Le dices que 'no hace falta que se complique' sin ofrecer información."
          },
          {
            "q": "Un tío se frustra porque tu hijo/a no reacciona como esperaba a un chiste.",
            "good": "Explicas que el procesamiento del humor puede ser distinto, sin ser un desaire.",
            "bad": "Le pides a tu hijo/a que 'finja reír' para no incomodar al tío."
          },
          {
            "q": "Un familiar insiste en que 'hablando fuerte' tu hijo/a entenderá mejor.",
            "good": "Explicas que el volumen alto genera sobrecarga, no mejor comprensión.",
            "bad": "Permites que el familiar siga hablando fuerte 'para que aprenda a tolerarlo'."
          },
          {
            "q": "Un abuelo se emociona al entender mejor la experiencia de su nieto/a.",
            "good": "Agradeces su apertura y refuerzas la información compartida con calidez.",
            "bad": "Minimizas el momento sin reconocer su esfuerzo genuino por entender."
          },
          {
            "q": "Una suegra dice que 'en su familia nadie tuvo eso'.",
            "good": "Explicas con calma que antes no se diagnosticaba igual, no que no existiera.",
            "bad": "Evitas el comentario para no generar tensión con la suegra."
          },
          {
            "q": "Una prima pregunta por qué tu hijo/a usa una tablet para comunicarse.",
            "good": "Explicas que es su forma de comunicación, tan válida como hablar.",
            "bad": "Minimizas el dispositivo diciendo que 'es solo para entretenerlo'."
          },
          {
            "q": "Un tío bromea diciendo que tu hijo/a 'vive en su mundo'.",
            "good": "Corriges la broma explicando su forma real de procesar el entorno.",
            "bad": "Te ríes también para no incomodar al tío."
          },
          {
            "q": "Una abuela insiste en cambiar los planes de última hora sin avisar a tu hijo/a.",
            "good": "Le explicas por qué el aviso previo es importante para él/ella.",
            "bad": "Dejas que improvise los cambios sin decir nada."
          },
          {
            "q": "Un cuñado cuestiona por qué 'necesita tantas rutinas' tu hijo/a.",
            "good": "Explicas cómo las rutinas le dan seguridad y reducen su ansiedad.",
            "bad": "Te disculpas por las rutinas como si fueran un capricho."
          },
          {
            "q": "Un familiar comenta que 'de grande se le va a quitar lo tímido'.",
            "good": "Aclaras que no es timidez sino una forma distinta de socializar.",
            "bad": "Asientes sin corregir la idea equivocada."
          },
          {
            "q": "Una tía se sorprende de que tu hijo/a adolescente aún necesite apoyo para ciertas tareas.",
            "good": "Explicas que la independencia se desarrolla a su propio ritmo.",
            "bad": "Te disculpas como si fuera un retraso vergonzoso."
          },
          {
            "q": "Un familiar pregunta por qué llevas siempre auriculares o snacks especiales para tu hijo/a.",
            "good": "Explicas brevemente para qué sirve cada apoyo que llevas.",
            "bad": "Escondes esos elementos por vergüenza a la pregunta."
          },
          {
            "q": "Un primo comenta en el grupo familiar que 'todos los niños de hoy están sobre-diagnosticados'.",
            "good": "Respondes con información basada en evidencia, con calma.",
            "bad": "Ignoras el mensaje en el chat para evitar el conflicto."
          },
          {
            "q": "Una abuela le habla a tu hijo/a en tercera persona delante de él/ella.",
            "good": "Corriges con amabilidad, pidiendo que le hable directamente.",
            "bad": "Dejas que continúe así sin decir nada frente a tu hijo/a."
          },
          {
            "q": "Un familiar quiere que tu hijo/a use cubiertos 'normales' en una cena formal.",
            "good": "Explicas su necesidad sensorial y priorizas su comodidad.",
            "bad": "Le exiges que use lo mismo que todos 'por educación'."
          },
          {
            "q": "Un tío pregunta si 'algo que hicieron mal' causó la neurodivergencia.",
            "good": "Aclaras con calma que no es causada por errores de crianza.",
            "bad": "Te sientes culpado/a y evitas responder con claridad."
          },
          {
            "q": "Una familiar mayor no entiende por qué tu hijo/a no quiere ir a la iglesia/misa larga.",
            "good": "Explicas el impacto sensorial y buscan juntos una alternativa breve.",
            "bad": "Lo/la obligas a asistir completo 'por respeto a la familia'."
          },
          {
            "q": "Un cuñado hace comentarios sobre que 'ya debería hablar mejor' a su edad.",
            "good": "Explicas el desarrollo real del lenguaje de tu hijo/a con información concreta.",
            "bad": "Te disculpas avergonzado/a sin explicar nada."
          },
          {
            "q": "Una tía insiste en que tu hijo/a 'solo busca atención' con sus conductas.",
            "good": "Explicas la diferencia entre buscar atención y comunicar una necesidad.",
            "bad": "Regañas a tu hijo/a delante de la tía para 'corregir' la conducta."
          },
          {
            "q": "Un familiar comparte un artículo de dudosa fuente sobre 'curas milagrosas'.",
            "good": "Agradeces la intención y compartes información basada en evidencia.",
            "bad": "Ignoras el mensaje sin dar ninguna respuesta."
          },
          {
            "q": "Una abuela quiere premiar a tu hijo/a solo cuando 'se comporta normal'.",
            "good": "Explicas por qué ese enfoque no ayuda y propones otro tipo de refuerzo.",
            "bad": "Dejas que el sistema de premios siga funcionando así."
          },
          {
            "q": "Un tío pregunta si tu hijo/a 'algún día podrá vivir solo'.",
            "good": "Respondes con honestidad sobre el proceso de autonomía real.",
            "bad": "Evitas la pregunta cambiando de tema por incomodidad."
          },
          {
            "q": "Un familiar dice que 'todos somos un poco autistas hoy en día'.",
            "good": "Explicas la diferencia entre rasgos aislados y un perfil neurodivergente real.",
            "bad": "Dejas pasar el comentario que minimiza la experiencia de tu hijo/a."
          },
          {
            "q": "Una prima no entiende por qué tu hijo/a lleva la misma ropa varios días seguidos.",
            "good": "Explicas su necesidad sensorial de texturas conocidas.",
            "bad": "Fuerzas cambios de ropa 'para que no se note' ante la familia."
          },
          {
            "q": "Un abuelo cuestiona la decisión de compartir el diagnóstico abiertamente con la familia.",
            "good": "Explicas por qué la transparencia ayuda más que el silencio.",
            "bad": "Dejas de mencionar el diagnóstico para evitar el conflicto con el abuelo."
          },
          {
            "q": "Un familiar pregunta si puede 'corregir' a tu hijo/a cuando esté a su cuidado.",
            "good": "Le das pautas claras de qué apoyar y qué evitar corregir.",
            "bad": "Le dices 'haz lo que creas mejor' sin ninguna orientación."
          },
          {
            "q": "Una tía compara el diagnóstico con una moda pasajera.",
            "good": "Compartes información seria y respetuosa sobre lo que realmente implica.",
            "bad": "Te ríes incómodamente para cerrar el tema rápido."
          },
          {
            "q": "Un primo mayor pregunta si tu hijo/a 'algún día será como los demás'.",
            "good": "Explicas que el objetivo no es que sea 'como los demás' sino que esté bien siendo quien es.",
            "bad": "Respondes esperanzado/a que 'algún día se le note menos'."
          },
          {
            "q": "Un familiar se queja de que las reuniones ahora 'giran en torno' a las necesidades de tu hijo/a.",
            "good": "Explicas que los ajustes buscan inclusión, no favoritismo.",
            "bad": "Reduces las adaptaciones para que la familia no se queje más."
          },
          {
            "q": "Una abuela se preocupa de que 'etiquetar' a tu hijo/a le hará daño.",
            "good": "Explicas cómo el diagnóstico le da comprensión y recursos, no un daño.",
            "bad": "Evitas usar el término del diagnóstico frente a ella."
          },
          {
            "q": "Un tío pregunta por qué evitas ciertos lugares ruidosos en las reuniones familiares.",
            "good": "Explicas la sobrecarga sensorial real que esos lugares generan.",
            "bad": "Inventas otra excusa para no explicar la verdadera razón."
          },
          {
            "q": "Un familiar dice que tu hijo/a 'no parece' tener esa condición.",
            "good": "Explicas que la neurodivergencia no siempre se nota a simple vista.",
            "bad": "Te sientes presionado/a a 'demostrar' que el diagnóstico es real."
          },
          {
            "q": "Una prima joven pregunta directamente a tu hijo/a por qué 'actúa raro'.",
            "good": "Intervienes con calma explicando de forma apropiada para su edad.",
            "bad": "Dejas que tu hijo/a responda solo/a esa pregunta incómoda."
          },
          {
            "q": "Un abuelo insiste en llevar a tu hijo/a a lugares con mucha gente 'para que se acostumbre'.",
            "good": "Explicas que la exposición forzada no genera adaptación, sino estrés.",
            "bad": "Aceptas la exposición forzada 'para no contradecir' al abuelo."
          },
          {
            "q": "Un familiar pregunta si el diagnóstico es 'de por vida'.",
            "good": "Explicas que es una forma de ser, no una condición temporal a resolver.",
            "bad": "Respondes con incertidumbre para evitar profundizar en el tema."
          },
          {
            "q": "Una tía menciona que ella 'también es así un poco' y minimiza la experiencia de tu hijo/a.",
            "good": "Validas su comentario pero distingues la intensidad real del perfil de tu hijo/a.",
            "bad": "Dejas que la comparación reduzca la seriedad de sus necesidades."
          },
          {
            "q": "Un familiar critica que le compres ropa sin etiquetas por ser 'demasiado especial'.",
            "good": "Explicas la sensibilidad táctil real detrás de esa elección.",
            "bad": "Dejas de comprar esa ropa frente a esa familia por vergüenza."
          },
          {
            "q": "Un abuelo pregunta si debería hablar más lento con tu hijo/a.",
            "good": "Le das indicaciones concretas y sencillas sobre cómo comunicarse mejor.",
            "bad": "Le dices 'habla normal, no hace falta cambiar nada' sin orientación real."
          },
          {
            "q": "Un familiar comenta que 'está de moda' ser neurodivergente hoy en día.",
            "good": "Respondes con datos que muestran que siempre existió, solo se comprende mejor ahora.",
            "bad": "Evitas el comentario por no querer discutir el tema."
          },
          {
            "q": "Una tía se enoja porque tu hijo/a no la mira mientras habla con ella.",
            "good": "Explicas que el contacto visual no indica falta de atención o interés.",
            "bad": "Le pides a tu hijo/a que la mire 'por respeto' en el momento."
          },
          {
            "q": "Un primo pregunta si puede 'jugarle una broma' sensorial a tu hijo/a (sonido fuerte sorpresa).",
            "good": "Explicas por qué ese tipo de bromas puede ser muy dañino para él/ella.",
            "bad": "Permites la broma pensando que 'no pasa nada'."
          },
          {
            "q": "Un familiar insiste en que 'el problema es la pantalla', no la neurodivergencia.",
            "good": "Explicas la diferencia y el rol regulador que cumplen las pantallas para tu hijo/a.",
            "bad": "Reduces el uso de pantallas frente a esa familia para evitar el juicio."
          },
          {
            "q": "Una abuela pregunta si 'algún día dejará de necesitar' las adaptaciones actuales.",
            "good": "Explicas que las necesidades cambian, pero siempre existirán en alguna forma.",
            "bad": "Prometes que 'pronto ya no las necesitará' sin certeza real."
          },
          {
            "q": "Un tío dice que tu hijo/a 'elige' tener crisis para salirse con la suya.",
            "good": "Explicas la diferencia entre una crisis real de sobrecarga y una manipulación.",
            "bad": "Castigas a tu hijo/a frente al tío para 'demostrar' que no es así."
          },
          {
            "q": "Un familiar pregunta por qué no corriges el aleteo de manos (stimming) de tu hijo/a.",
            "good": "Explicas que es una forma de autorregulación, no algo que deba corregirse.",
            "bad": "Le pides a tu hijo/a que deje de hacerlo frente a esa familia."
          },
          {
            "q": "Una prima quiere organizarle una fiesta sorpresa a tu hijo/a.",
            "good": "Explicas por qué las sorpresas le generan estrés y propones una alternativa avisada.",
            "bad": "Dejas que organice la sorpresa igual, sin advertir el riesgo."
          },
          {
            "q": "Un abuelo compara el diagnóstico actual con 'cosas que antes se llamaban de otra forma'.",
            "good": "Aclaras la terminología actualizada con respeto hacia su experiencia previa.",
            "bad": "Lo corriges de forma brusca sin explicar el contexto histórico."
          },
          {
            "q": "Un familiar pregunta si debería 'hablar del tema' delante de tu hijo/a o evitarlo.",
            "good": "Le explicas que hablar abiertamente ayuda más que evitar el tema.",
            "bad": "Le pides que nunca mencione el tema, generando un secreto incómodo."
          },
          {
            "q": "Una tía dice que 'todos los niños hacen berrinches, no es para tanto'.",
            "good": "Explicas la diferencia entre un berrinche típico y una crisis de sobrecarga sensorial.",
            "bad": "Minimizas tú también la situación para coincidir con la tía."
          },
          {
            "q": "Un familiar pregunta cómo puede prepararse mejor antes de una visita a casa.",
            "good": "Compartes pautas claras sobre rutinas y sensibilidades a respetar.",
            "bad": "Le dices que 'no hace falta preparar nada especial'."
          },
          {
            "q": "Un primo adulto comparte que también sospecha ser neurodivergente tras conocer a tu hijo/a.",
            "good": "Escuchas con apertura y compartes recursos si los pide.",
            "bad": "Minimizas su reflexión diciendo que 'está exagerando'."
          },
          {
            "q": "Un abuelo se resiste a usar el nombre correcto del diagnóstico y usa términos anticuados.",
            "good": "Le explicas con paciencia la terminología actual y por qué importa.",
            "bad": "Dejas que use términos desactualizados sin ninguna corrección."
          },
          {
            "q": "Un familiar cuestiona por qué permites que tu hijo/a coma los mismos alimentos siempre.",
            "good": "Explicas la selectividad alimentaria como parte real de su perfil sensorial.",
            "bad": "Fuerzas variedad en la comida delante de la familia para 'que no se note'."
          },
          {
            "q": "Una tía dice que deberías 'ser más estricto/a' como ella lo fue con sus hijos.",
            "good": "Explicas por qué ese enfoque no funciona para el perfil de tu hijo/a.",
            "bad": "Adoptas ese enfoque frente a la tía solo para complacerla."
          },
          {
            "q": "Un familiar pregunta si el diagnóstico afecta la inteligencia de tu hijo/a.",
            "good": "Explicas que neurodivergencia e inteligencia son cosas distintas.",
            "bad": "Evitas el tema por no saber cómo aclararlo correctamente."
          },
          {
            "q": "Un primo comparte contenido de redes sociales con estereotipos sobre neurodivergencia.",
            "good": "Conversas en privado ofreciendo una perspectiva más informada.",
            "bad": "Ignoras el contenido aunque perpetúe estereotipos dañinos."
          },
          {
            "q": "Un abuelo insiste en tomarle fotos a tu hijo/a en momentos de crisis 'para el recuerdo'.",
            "good": "Explicas por qué eso vulnera su dignidad y pides que no lo haga.",
            "bad": "Permites las fotos por no querer generar un conflicto en el momento."
          },
          {
            "q": "Un familiar dice que 'en otros países esto no se diagnostica tanto'.",
            "good": "Explicas que el acceso a diagnóstico varía, no la existencia de la condición.",
            "bad": "Dejas el comentario sin ninguna aclaración."
          },
          {
            "q": "Una tía pregunta si debería dejar de invitarte a reuniones 'para no complicarte'.",
            "good": "Agradeces la intención y explicas qué ajustes harían posible la asistencia.",
            "bad": "Aceptas dejar de ir, perdiendo la conexión familiar por evitar el tema."
          },
          {
            "q": "Un familiar joven (primo adolescente) pregunta con curiosidad genuina sobre la ND de tu hijo/a.",
            "good": "Aprovechas la apertura para compartir información apropiada para su edad.",
            "bad": "Le dices que 'es un tema de adultos' y cierras la conversación."
          },
          {
            "q": "Un abuelo insiste en que el diagnóstico 'viene de la familia materna/paterna' como reproche.",
            "good": "Rediriges la conversación hacia el apoyo presente, sin entrar en culpas.",
            "bad": "Entras en la discusión de 'de qué lado viene' sin resolver nada útil."
          },
          {
            "q": "Un familiar no entiende por qué tu hijo/a necesita anticipación para cada visita.",
            "good": "Explicas cómo la anticipación reduce su ansiedad ante lo desconocido.",
            "bad": "Dejas de avisar los detalles, esperando que 'se acostumbre' a la sorpresa."
          },
          {
            "q": "Una tía insiste en cargar o alzar a tu hijo/a aunque él/ella se aleje.",
            "good": "Explicas con firmeza que su señal de alejarse debe respetarse.",
            "bad": "Permites que lo alce igual 'para no ofenderla'."
          },
          {
            "q": "Un familiar pregunta si conviene que tu hijo/a 'oculte' el diagnóstico al crecer.",
            "good": "Explicas los pros y contras de la divulgación, dejando la decisión a su hijo/a.",
            "bad": "Decides tú solo/a que debe ocultarlo sin considerar su opinión."
          },
          {
            "q": "Un primo se burla del interés intenso de tu hijo/a frente a otros niños.",
            "good": "Intervienes explicando el valor de ese interés y pidiendo respeto.",
            "bad": "Le pides a tu hijo/a que 'no hable tanto de eso' para evitar burlas."
          },
          {
            "q": "Un abuelo pregunta si la alimentación 'distinta' tiene relación con el diagnóstico.",
            "good": "Explicas la conexión sensorial real entre alimentación y neurodivergencia.",
            "bad": "Dejas que piense que es solo 'mala costumbre' sin corregirlo."
          },
          {
            "q": "Un familiar comenta que tu hijo/a 'parece mal educado' al no responder saludos.",
            "good": "Explicas que procesar y responder puede tomarle más tiempo del esperado.",
            "bad": "Presionas a tu hijo/a a responder rápido para 'quedar bien'."
          },
          {
            "q": "Una tía pregunta si deberías haber esperado más antes de buscar un diagnóstico.",
            "good": "Explicas por qué el diagnóstico temprano ayudó a entender mejor a tu hijo/a.",
            "bad": "Dudas en voz alta frente a la familia si 'hiciste bien' en diagnosticarlo."
          },
          {
            "q": "Un familiar sugiere 'probar' dejar sin apoyos a tu hijo/a durante una visita 'a ver cómo le va'.",
            "good": "Explicas con firmeza que los apoyos no son opcionales ni un experimento.",
            "bad": "Aceptas la propuesta 'para complacer' a esa familia por un día."
          },
          {
            "q": "Un abuelo pregunta si el diagnóstico de tu hijo/a significa que 'no podrá tener pareja/familia'.",
            "good": "Explicas que la neurodivergencia no limita esas posibilidades futuras.",
            "bad": "Evitas responder por no saber cómo abordar el tema con el abuelo."
          },
          {
            "q": "Un familiar mayor confunde neurodivergencia con discapacidad intelectual.",
            "good": "Aclaras con respeto la diferencia entre ambos conceptos.",
            "bad": "Dejas la confusión sin corregir para no parecer 'quisquilloso/a'."
          },
          {
            "q": "Un primo pregunta si tu hijo/a 'finge' no entender ciertas bromas o sarcasmo.",
            "good": "Explicas cómo el procesamiento del lenguaje figurado puede ser distinto.",
            "bad": "Le exiges a tu hijo/a que 'entienda la broma' para no incomodar al primo."
          },
          {
            "q": "Un familiar propone hablar del diagnóstico solo en privado, nunca frente a otros parientes.",
            "good": "Explicas por qué la naturalidad frente a la familia ayuda más que el secreto.",
            "bad": "Aceptas mantenerlo en secreto absoluto, generando tensión innecesaria."
          },
          {
            "q": "Un abuelo, tras mucho diálogo, empieza a usar el lenguaje correcto de forma espontánea.",
            "good": "Reconoces y agradeces ese esfuerzo genuino de adaptación.",
            "bad": "No notas ni valoras el cambio, dejando pasar la oportunidad de reforzarlo."
          }
        ]
      },
      {
        "slug": "defender-ajustes-razonables",
        "nombre": "Defender Ajustes Razonables",
        "emoji": "⚖️",
        "descripcion": "Abogar por adaptaciones en escuela, salud y entorno social.",
        "situaciones": [
          {
            "q": "El colegio se niega a dar tiempo extra en un examen.",
            "good": "Presentas la solicitud formalmente con información y respaldo profesional si es necesario.",
            "bad": "Aceptas la negativa sin insistir ni presentar más información."
          },
          {
            "q": "Un consultorio médico no tiene sala de espera tranquila para tu hijo/a.",
            "good": "Solicitas con anticipación una alternativa (esperar afuera, cita a primera hora).",
            "bad": "Sometes a tu hijo/a a la espera regular sin pedir ningún ajuste."
          },
          {
            "q": "Una actividad extraescolar no permite adaptaciones sensoriales básicas.",
            "good": "Conversas con los organizadores proponiendo ajustes concretos y razonables.",
            "bad": "Retiras a tu hijo/a de la actividad sin intentar negociar primero."
          },
          {
            "q": "El colegio no permite que tu hijo/a use auriculares de protección auditiva.",
            "good": "Presentas la necesidad con información concreta y defiendes su uso.",
            "bad": "Aceptas la prohibición sin explicar la función real del apoyo."
          },
          {
            "q": "Un evento familiar no considera un espacio tranquilo para retirarse.",
            "good": "Propones con anticipación designar un espacio así para tu hijo/a.",
            "bad": "Asistes sin pedir nada, esperando que tu hijo/a 'aguante' igual que siempre."
          },
          {
            "q": "Una aerolínea o transporte no ofrece información clara sobre acomodaciones.",
            "good": "Contactas con anticipación para solicitar la información y ajustes necesarios.",
            "bad": "Viajas sin informarte, asumiendo que 'ya se resolverá' en el momento."
          },
          {
            "q": "El colegio considera innecesaria una adaptación que tú sabes que es clave.",
            "good": "Presentas evidencia concreta (informes, ejemplos) que respalden la necesidad real.",
            "bad": "Desistes de la solicitud ante la primera negativa del colegio."
          },
          {
            "q": "Un campamento no tiene protocolo para necesidades sensoriales.",
            "good": "Conversas con los organizadores antes de inscribirlo, proponiendo ajustes concretos.",
            "bad": "Lo inscribes sin conversar nada, esperando que 'todo salga bien'."
          },
          {
            "q": "Un profesional de salud minimiza la necesidad de un ajuste que pides.",
            "good": "Insistes con información y, si es necesario, buscas una segunda opinión.",
            "bad": "Aceptas la minimización sin buscar alternativas ni más información."
          },
          {
            "q": "El colegio exige que tu hijo/a participe en una actividad sin adaptaciones.",
            "good": "Solicitas formalmente una adaptación razonable respaldada en su perfil.",
            "bad": "Presionas a tu hijo/a para 'aguantar' la actividad sin ningún ajuste."
          },
          {
            "q": "Un restaurante o lugar público no es flexible con el menú o el ambiente.",
            "good": "Preguntas con anticipación por opciones o eliges un lugar más adaptado.",
            "bad": "Fuerzas la visita al mismo lugar esperando que tu hijo/a se adapte solo."
          },
          {
            "q": "Una actividad deportiva no ofrece alternativas para necesidades de comunicación.",
            "good": "Propones ajustes concretos (instrucciones visuales, tiempo extra) a los entrenadores.",
            "bad": "Retiras a tu hijo/a de la actividad sin proponer ninguna adaptación."
          },
          {
            "q": "El colegio considera que pedir ajustes es 'sobreprotección'.",
            "good": "Explicas la diferencia entre ajuste razonable y sobreprotección con ejemplos claros.",
            "bad": "Dejas de pedir ajustes por miedo a esa etiqueta."
          },
          {
            "q": "Un evento social no considera horarios que respeten la energía de tu hijo/a.",
            "good": "Propones llegar más tarde o retirarte antes, explicando el motivo con tacto.",
            "bad": "Asistes al horario completo esperando que tu hijo/a 'aguante' igual que otros."
          },
          {
            "q": "Una institución exige documentación excesiva para un ajuste razonable simple.",
            "good": "Persistes en el proceso, buscando apoyo si es necesario para agilizarlo.",
            "bad": "Desistes del ajuste por la carga burocrática que implica."
          },
          {
            "q": "Un familiar cuestiona por qué pides tantos ajustes para tu hijo/a.",
            "good": "Explicas con calma que son necesidades reales, no privilegios innecesarios.",
            "bad": "Dejas de pedir ajustes frente a esa familia para evitar el cuestionamiento."
          },
          {
            "q": "El colegio no considera necesario avisar con anticipación los cambios de horario.",
            "good": "Solicitas formalmente que te avisen con tiempo por el impacto real en tu hijo/a.",
            "bad": "Aceptas los cambios sin aviso, absorbiendo tú solo/a el impacto en casa."
          },
          {
            "q": "Una actividad grupal no tiene alternativa para quien necesita más tiempo de transición.",
            "good": "Propones una transición escalonada como ajuste razonable para el grupo.",
            "bad": "Aceptas que tu hijo/a se quede rezagado/a sin proponer ninguna solución."
          },
          {
            "q": "Un pediatra sugiere que 'ya se le pasará' sin evaluar más a fondo.",
            "good": "Solicitas una evaluación más completa o una segunda opinión especializada.",
            "bad": "Aceptas la sugerencia sin buscar más información ni seguimiento."
          },
          {
            "q": "El colegio limita las salidas al baño o pausas sensoriales durante el día.",
            "good": "Solicitas formalmente flexibilizar esa política según la necesidad real de tu hijo/a.",
            "bad": "Aceptas la limitación esperando que tu hijo/a 'se aguante' como los demás."
          },
          {
            "q": "Un dentista no ofrece opciones de sedación consciente para procedimientos.",
            "good": "Solicitas formalmente esa alternativa antes del procedimiento.",
            "bad": "Sometes a tu hijo/a al procedimiento estándar sin preguntar opciones."
          },
          {
            "q": "Un cine no ofrece funciones con luces encendidas y volumen reducido.",
            "good": "Buscas o solicitas una función sensorialmente amigable disponible.",
            "bad": "Llevas a tu hijo/a a la función estándar sin considerar el impacto."
          },
          {
            "q": "Un parque de diversiones no explica bien su pase de acceso prioritario por discapacidad.",
            "good": "Contactas con anticipación para conocer y solicitar ese pase.",
            "bad": "Haces las filas regulares sin informarte de las opciones disponibles."
          },
          {
            "q": "Una peluquería no tiene experiencia con clientes con sensibilidad sensorial.",
            "good": "Buscas un salón con experiencia o negocias ajustes previos (horario, herramientas).",
            "bad": "Llevas a tu hijo/a al corte estándar esperando que lo tolere igual."
          },
          {
            "q": "Un examen de conducir no contempla tiempo extra para la prueba escrita.",
            "good": "Solicitas formalmente la adaptación con respaldo profesional.",
            "bad": "Dejas que rinda el examen en las condiciones estándar sin pedir ajuste."
          },
          {
            "q": "Una universidad no informa claramente sobre su oficina de accesibilidad.",
            "good": "Contactas directamente para conocer el proceso de registro de adaptaciones.",
            "bad": "Dejas que tu hijo/a enfrente solo/a los estudios sin ese apoyo."
          },
          {
            "q": "Un hospital programa una cirugía sin considerar necesidades sensoriales previas.",
            "good": "Solicitas anticipadamente ajustes (horario, sala de espera, explicación visual).",
            "bad": "Llevas a tu hijo/a sin ninguna preparación ni ajuste solicitado."
          },
          {
            "q": "Una aerolínea niega el embarque prioritario para tu hijo/a.",
            "good": "Presentas la documentación necesaria e insistes en el proceso formal.",
            "bad": "Aceptas la negativa y viajas sin ese ajuste esencial."
          },
          {
            "q": "Un gimnasio no permite horarios de menor afluencia para socios con necesidades sensoriales.",
            "good": "Negocias un horario alternativo con la administración del lugar.",
            "bad": "Cancelas la membresía sin intentar negociar antes."
          },
          {
            "q": "Una biblioteca pública exige silencio absoluto sin espacio alternativo para estimulación.",
            "good": "Preguntas por un espacio designado o horario más flexible.",
            "bad": "Dejas de asistir a la biblioteca sin proponer ninguna solución."
          },
          {
            "q": "Un museo no ofrece horarios de baja estimulación sensorial.",
            "good": "Consultas si existen horarios especiales o los sugieres como idea.",
            "bad": "Visitas en horario regular esperando que tu hijo/a lo tolere."
          },
          {
            "q": "Una iglesia o templo no tiene un espacio tranquilo durante el servicio.",
            "good": "Propones designar un espacio así para las familias que lo necesiten.",
            "bad": "Asistes al servicio completo sin buscar ninguna alternativa."
          },
          {
            "q": "Un equipo deportivo juvenil no ajusta las instrucciones para necesidades de comunicación.",
            "good": "Propones instrucciones visuales o escritas al entrenador.",
            "bad": "Retiras a tu hijo/a del equipo sin proponer ningún ajuste primero."
          },
          {
            "q": "Un grupo scout no tiene protocolo para necesidades sensoriales en actividades al aire libre.",
            "good": "Conversas con anticipación proponiendo adaptaciones concretas.",
            "bad": "Inscribes a tu hijo/a sin conversar nada sobre sus necesidades."
          },
          {
            "q": "Un campamento de verano nocturno no permite llevar objetos de regulación personal.",
            "good": "Solicitas formalmente una excepción explicando su función.",
            "bad": "Aceptas la norma sin explicar por qué ese objeto es necesario."
          },
          {
            "q": "Una fiesta de cumpleaños infantil no considera el nivel de ruido de la música.",
            "good": "Pides con tacto bajar el volumen o un espacio más tranquilo.",
            "bad": "Asistes sin decir nada, esperando que tu hijo/a aguante el ruido."
          },
          {
            "q": "Una boda formal exige que los niños permanezcan sentados toda la ceremonia.",
            "good": "Negocias con anticipación un lugar donde tu hijo/a pueda moverse si lo necesita.",
            "bad": "Fuerzas que permanezca sentado/a toda la ceremonia sin ajuste."
          },
          {
            "q": "Un funeral no considera el impacto sensorial y emocional en tu hijo/a.",
            "good": "Preparas con anticipación una salida o apoyo específico para el momento.",
            "bad": "Lo/la expones a toda la ceremonia sin ninguna preparación previa."
          },
          {
            "q": "Un control de seguridad aeroportuario no tiene protocolo claro para pasajeros neurodivergentes.",
            "good": "Contactas con anticipación el programa de asistencia disponible.",
            "bad": "Pasas por el control estándar sin informarte de alternativas."
          },
          {
            "q": "Un hotel no ofrece habitaciones con menos estímulos sensoriales (ruido, olores).",
            "good": "Solicitas con anticipación una habitación específica según necesidades.",
            "bad": "Reservas sin preguntar nada y improvisas al llegar."
          },
          {
            "q": "Un restaurante no permite llevar comida propia pese a la selectividad alimentaria de tu hijo/a.",
            "good": "Conversas previamente con el lugar para explicar y negociar la excepción.",
            "bad": "Evitas ese restaurante indefinidamente sin intentar negociar."
          },
          {
            "q": "Un banco o entidad pública tiene tiempos de espera largos sin alternativa.",
            "good": "Solicitas una cita con horario específico o atención prioritaria.",
            "bad": "Esperas en fila regular exponiendo a tu hijo/a a sobrecarga innecesaria."
          },
          {
            "q": "Una entrevista de trabajo para tu hijo/a joven no contempla ajustes de comunicación.",
            "good": "Ayudas a preparar y, si corresponde, solicitar ajustes razonables previos.",
            "bad": "Dejas que enfrente la entrevista estándar sin ninguna preparación específica."
          },
          {
            "q": "Una universidad no ajusta el formato de un examen final pese al diagnóstico registrado.",
            "good": "Contactas formalmente a la oficina de accesibilidad para exigir el ajuste.",
            "bad": "Aceptas que rinda el examen sin las adaptaciones ya aprobadas."
          },
          {
            "q": "Un examen estandarizado (tipo admisión) no ofrece tiempo extra pese a la documentación presentada.",
            "good": "Apelas formalmente con el respaldo profesional necesario.",
            "bad": "Aceptas la negativa sin presentar ningún recurso o apelación."
          },
          {
            "q": "Un empleador no permite el uso de auriculares con cancelación de ruido en el puesto de trabajo.",
            "good": "Presentas la solicitud de ajuste razonable formalmente en recursos humanos.",
            "bad": "Dejas que tu hijo/a joven acepte la prohibición sin cuestionarla."
          },
          {
            "q": "Un consultorio de un especialista tiene un formulario de admisión que no contempla necesidades de comunicación.",
            "good": "Solicitas un formato alternativo (verbal, con apoyo) para completar el formulario.",
            "bad": "Dejas que tu hijo/a luche solo/a con un formulario que no puede completar bien."
          },
          {
            "q": "Una piscina o club deportivo exige duchas grupales sin opción de privacidad.",
            "good": "Solicitas una alternativa de privacidad para el cambio de ropa.",
            "bad": "Dejas que use las duchas grupales aunque le genere ansiedad."
          },
          {
            "q": "Un evento comunitario no informa el nivel de ruido y aglomeración esperado.",
            "good": "Contactas a los organizadores para conocer detalles antes de asistir.",
            "bad": "Asistes sin información previa, arriesgando una sobrecarga evitable."
          },
          {
            "q": "Un dormitorio universitario asigna compañero de cuarto sin considerar necesidades sensoriales.",
            "good": "Solicitas formalmente una habitación individual o ajuste de convivencia.",
            "bad": "Aceptas la asignación estándar sin plantear la necesidad real."
          },
          {
            "q": "Una tienda de ropa no tiene probador con privacidad adecuada para necesidades sensoriales.",
            "good": "Preguntas por un horario de menor afluencia o alternativa de prueba.",
            "bad": "Fuerzas la prueba en las condiciones estándar sin pedir ajuste."
          },
          {
            "q": "Un examen de conducir no ofrece instrucciones en formato escrito además de oral.",
            "good": "Solicitas formalmente el formato combinado que facilite su comprensión.",
            "bad": "Aceptas rendir solo en el formato estándar sin pedir alternativa."
          },
          {
            "q": "Una aseguradora de salud niega la cobertura de cierta terapia por considerarla 'no esencial'.",
            "good": "Apelas formalmente con documentación e informes profesionales de respaldo.",
            "bad": "Aceptas la negativa sin presentar ningún recurso de apelación."
          },
          {
            "q": "Una farmacia de seguro médico cambia la marca de la medicación sin previo aviso.",
            "good": "Solicitas la excepción formal para mantener la marca que sí funciona.",
            "bad": "Aceptas el cambio sin cuestionar el impacto en tu hijo/a."
          },
          {
            "q": "Un club de robótica o ajedrez no ajusta el ritmo de las sesiones a las necesidades de tu hijo/a.",
            "good": "Propones ajustes concretos de tiempo o formato a los organizadores.",
            "bad": "Retiras a tu hijo/a de la actividad sin proponer ningún ajuste."
          },
          {
            "q": "Un examen médico (resonancia, análisis) requiere quietud prolongada sin preparación sensorial.",
            "good": "Solicitas anticipadamente sedación leve o técnicas de preparación adecuadas.",
            "bad": "Sometes a tu hijo/a al procedimiento estándar sin ninguna preparación."
          },
          {
            "q": "Una feria o evento masivo no tiene zona de descompresión sensorial.",
            "good": "Contactas a los organizadores proponiendo un espacio designado para ese fin.",
            "bad": "Asistes sin ningún plan de salida o descanso sensorial."
          },
          {
            "q": "Un centro comercial no ofrece horario de 'hora silenciosa' con luces y sonidos reducidos.",
            "good": "Preguntas si existe esa opción o la sugieres como idea al centro.",
            "bad": "Haces las compras en horario regular sin considerar el impacto."
          },
          {
            "q": "Una clase de natación obligatoria no permite alternativas para el miedo al agua clorada intensa.",
            "good": "Propones adaptaciones (gafas, horario, ritmo) a los instructores.",
            "bad": "Obligas a tu hijo/a a participar igual, ignorando su malestar real."
          },
          {
            "q": "Un examen de admisión a un programa de talentos no contempla formatos alternativos.",
            "good": "Solicitas formalmente el formato que permita mostrar su verdadero potencial.",
            "bad": "Aceptas que rinda en un formato que no refleja sus capacidades reales."
          },
          {
            "q": "Una compañía de transporte escolar no informa bien las rutas y horarios con anticipación.",
            "good": "Solicitas esa información con antelación para preparar a tu hijo/a.",
            "bad": "Dejas que enfrente cambios de ruta sin ningún aviso previo."
          },
          {
            "q": "Un servicio de atención médica telefónica no ofrece opción de comunicación por escrito.",
            "good": "Solicitas formalmente esa alternativa de comunicación.",
            "bad": "Te resignas a la llamada telefónica aunque genere dificultad real."
          },
          {
            "q": "Un programa de prácticas laborales (pasantía) no contempla ajustes de comunicación social.",
            "good": "Coordinas con el programa ajustes razonables antes de iniciar.",
            "bad": "Dejas que enfrente el programa estándar sin ninguna preparación."
          },
          {
            "q": "Una tienda no permite el uso de tarjetas de comunicación o dispositivos AAC dentro del local.",
            "good": "Explicas su función esencial y defiendes su uso ante el personal.",
            "bad": "Guardas el dispositivo por vergüenza ante la reacción del personal."
          },
          {
            "q": "Un centro de tutorías académicas no ofrece sesiones individuales pese a la necesidad de tu hijo/a.",
            "good": "Solicitas formalmente esa modalidad como ajuste razonable.",
            "bad": "Aceptas las sesiones grupales estándar sin plantear la dificultad real."
          },
          {
            "q": "Un evento deportivo escolar exige silencio absoluto de espectadores con necesidades sensoriales propias.",
            "good": "Solicitas una zona designada más flexible para tu familia.",
            "bad": "Te vas del evento sin plantear ninguna alternativa antes."
          },
          {
            "q": "Una clase de manejo (autoescuela) no adapta el ritmo de instrucciones para tu hijo/a joven.",
            "good": "Solicitas formalmente un instructor con experiencia en adaptaciones.",
            "bad": "Continúas con el mismo instructor pese a las dificultades evidentes."
          },
          {
            "q": "Un consultorio de un especialista tiene sala de espera con TV a volumen alto constante.",
            "good": "Pides que bajen el volumen o esperar en un lugar alternativo.",
            "bad": "Soportas la espera con el volumen alto sin decir nada."
          },
          {
            "q": "Una empresa de eventos no permite reconocimiento previo del espacio antes de una celebración.",
            "good": "Solicitas una visita previa para que tu hijo/a conozca el lugar.",
            "bad": "Llega al evento sin ninguna familiarización previa con el espacio."
          },
          {
            "q": "Un programa de intercambio estudiantil no contempla apoyos de neurodivergencia en el extranjero.",
            "good": "Investigas y solicitas formalmente qué apoyos existen antes de aceptar.",
            "bad": "Aceptas el programa sin informarte de los apoyos disponibles."
          },
          {
            "q": "Una clínica dental exige que el paciente espere solo/a en la sala de procedimientos.",
            "good": "Solicitas que puedas acompañarlo/a durante el procedimiento.",
            "bad": "Aceptas la norma general sin plantear la necesidad de acompañamiento."
          },
          {
            "q": "Un examen de certificación profesional no ofrece descansos programados durante la prueba.",
            "good": "Solicitas formalmente pausas programadas como ajuste razonable.",
            "bad": "Aceptas rendir el examen completo sin ningún descanso."
          },
          {
            "q": "Una oficina de gobierno exige trámites solo presenciales sin alternativa digital.",
            "good": "Solicitas formalmente una alternativa o cita con menor tiempo de espera.",
            "bad": "Te resignas a los trámites presenciales sin pedir ningún ajuste."
          },
          {
            "q": "Un programa de voluntariado juvenil no adapta las tareas a las fortalezas de tu hijo/a.",
            "good": "Conversas con los coordinadores para encontrar un rol que le beneficie.",
            "bad": "Dejas que abandone el voluntariado sin intentar ajustar el rol primero."
          },
          {
            "q": "Una tienda de electrónica no permite probar productos antes de comprar por políticas generales.",
            "good": "Explicas la necesidad sensorial concreta y solicitas una excepción.",
            "bad": "Compras sin probar, arriesgando una devolución complicada después."
          },
          {
            "q": "Un centro de idiomas exige participación oral obligatoria en cada clase.",
            "good": "Propones un formato alternativo de evaluación de la práctica oral.",
            "bad": "Aceptas que participe igual, aunque le genere ansiedad significativa."
          },
          {
            "q": "Un evento corporativo familiar (día del padre/madre en la empresa) no considera necesidades sensoriales.",
            "good": "Preguntas con anticipación por adaptaciones posibles en el evento.",
            "bad": "Asistes sin informarte, exponiendo a tu hijo/a a un ambiente abrumador."
          },
          {
            "q": "Una clínica de vacunación no ofrece cita con menor tiempo de espera para casos sensibles.",
            "good": "Solicitas formalmente una cita a primera hora o con menor espera.",
            "bad": "Llevas a tu hijo/a en horario de alta demanda sin pedir ajuste."
          },
          {
            "q": "Un centro de idiomas para certificación internacional no permite adaptaciones documentadas.",
            "good": "Presentas la documentación formal exigiendo el ajuste correspondiente.",
            "bad": "Aceptas rendir sin adaptaciones, afectando el resultado real."
          },
          {
            "q": "Una discoteca o evento nocturno juvenil no ofrece zona de menor volumen.",
            "good": "Buscas o sugieres un espacio alternativo dentro del evento.",
            "bad": "Dejas que tu hijo/a joven evite salir socialmente por falta de esa opción."
          },
          {
            "q": "Un centro de cuidado diurno para adultos jóvenes ND no tiene protocolo sensorial claro.",
            "good": "Solicitas conocer y ajustar el protocolo antes de inscribirlo.",
            "bad": "Lo inscribes sin preguntar nada sobre el protocolo existente."
          },
          {
            "q": "Una compañía de seguros de auto no ofrece ajuste en el examen de manejo por perfil sensorial.",
            "good": "Investigas y solicitas formalmente las opciones de adaptación disponibles.",
            "bad": "Asumes que no existen opciones sin investigar realmente."
          },
          {
            "q": "Un evento de talentos escolar no permite alternativas al formato de presentación en vivo.",
            "good": "Propones una grabación previa como formato alternativo válido.",
            "bad": "Dejas que enfrente el formato en vivo sin ninguna alternativa ofrecida."
          },
          {
            "q": "Una oficina de recursos humanos no informa el proceso para solicitar ajustes razonables laborales.",
            "good": "Investigas junto a tu hijo/a joven el proceso formal disponible.",
            "bad": "Asumes que 'pedir ajustes' podría perjudicarlo/a y evitas el tema."
          },
          {
            "q": "Un centro de examen de manejo escrito no permite lector en voz alta pese al diagnóstico.",
            "good": "Apelas formalmente presentando el respaldo profesional necesario.",
            "bad": "Aceptas la negativa sin presentar ningún recurso adicional."
          },
          {
            "q": "Una obra de teatro comunitaria no ofrece función relajada (sensory-friendly).",
            "good": "Sugieres a los organizadores considerar una función con esas características.",
            "bad": "Asistes a la función estándar sin plantear ninguna alternativa."
          },
          {
            "q": "Un programa de verano universitario no informa sobre apoyos disponibles para estudiantes ND.",
            "good": "Contactas directamente para conocer los recursos antes de inscribirlo.",
            "bad": "Lo inscribes sin informarte de los apoyos realmente disponibles."
          },
          {
            "q": "Una competencia de talentos exige ensayo general con público presente sin excepciones.",
            "good": "Solicitas participar en un ensayo alternativo sin público si lo necesita.",
            "bad": "Expones a tu hijo/a al ensayo con público sin ningún ajuste."
          },
          {
            "q": "Un centro deportivo de alto rendimiento no contempla comunicación alternativa con el entrenador.",
            "good": "Coordinas un sistema de señales o comunicación escrita con el equipo técnico.",
            "bad": "Dejas que la comunicación falle repetidamente sin proponer ninguna solución."
          },
          {
            "q": "Una graduación universitaria exige toga y birrete con materiales sensorialmente incómodos.",
            "good": "Consultas por materiales alternativos o adaptaciones para la ceremonia.",
            "bad": "Fuerzas el uso estándar sin preguntar por ninguna alternativa."
          }
        ]
      }
    ]
  },
  {
    "slug": "bienestar",
    "nombre": "Bienestar Parental",
    "color": "#6366f1",
    "icon": "<path d=\"M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z\"/>",
    "habilidades": [
      {
        "slug": "regular-propias-emociones",
        "nombre": "Regular las Propias Emociones",
        "emoji": "🧘",
        "descripcion": "Gestionar la frustración propia antes de responder.",
        "situaciones": [
          {
            "q": "Sientes que la frustración sube justo antes de responder a tu hijo/a.",
            "good": "Te tomas tres respiraciones antes de decir nada.",
            "bad": "Respondes de inmediato desde la frustración sin pausa."
          },
          {
            "q": "Tu hijo/a repite la misma conducta que ya te agotó antes.",
            "good": "Reconoces tu propio límite y pides un momento antes de responder.",
            "bad": "Explotas verbalmente por la acumulación de veces anteriores."
          },
          {
            "q": "Sientes vergüenza por la conducta de tu hijo/a en público.",
            "good": "Identificas que esa vergüenza es tuya y la separas de cómo actúas.",
            "bad": "Reaccionas duramente con tu hijo/a para 'controlar' el qué dirán."
          },
          {
            "q": "Estás muy cansado/a y tu hijo/a pide tu atención completa.",
            "good": "Reconoces tu cansancio y pides un breve momento antes de atenderlo/a con calidad.",
            "bad": "Respondes con irritación por no reconocer tu propio agotamiento."
          },
          {
            "q": "Sientes que perdiste la paciencia varias veces esta semana.",
            "good": "Te detienes a identificar qué necesitas para regularte mejor.",
            "bad": "Sigues igual sin ninguna pausa de autoevaluación."
          },
          {
            "q": "Tu hijo/a te reclama algo con un tono que te resulta irrespetuoso.",
            "good": "Reconoces tu reacción emocional antes de responder desde el enojo.",
            "bad": "Igualas el tono elevado en tu respuesta inmediata."
          },
          {
            "q": "Sientes ansiedad anticipando una posible crisis de tu hijo/a.",
            "good": "Practicas una técnica de regulación propia antes de que ocurra la situación.",
            "bad": "Llegas a la situación ya tenso/a, sin haberte regulado antes."
          },
          {
            "q": "Te sientes criticado/a por un comentario sobre tu forma de criar.",
            "good": "Reconoces la emoción sin reaccionar de inmediato de forma defensiva.",
            "bad": "Respondes agresivamente sin procesar primero la emoción."
          },
          {
            "q": "Sientes que se repite un conflicto que ya te desgasta emocionalmente.",
            "good": "Identificas tu propio nivel de activación y buscas regularte antes de intervenir.",
            "bad": "Intervienes desde el desgaste acumulado sin ninguna pausa."
          },
          {
            "q": "Tu pareja o familiar cuestiona una decisión que tomaste con tu hijo/a.",
            "good": "Regulas tu reacción antes de responder, incluso si te sientes atacado/a.",
            "bad": "Reaccionas defensivamente de inmediato sin procesar la emoción."
          },
          {
            "q": "Sientes que el día se salió de control con varias exigencias simultáneas.",
            "good": "Te tomas un breve momento a solas antes de continuar interactuando.",
            "bad": "Sigues respondiendo a todo desde el desborde emocional."
          },
          {
            "q": "Tu hijo/a te dice algo hiriente en medio de una crisis.",
            "good": "Reconoces que la crisis habla, no la persona, y regulas tu propia reacción.",
            "bad": "Respondes con la misma dureza que sentiste en el comentario."
          },
          {
            "q": "Sientes culpa por una reacción pasada que tuviste.",
            "good": "Reconoces la culpa sin dejar que te paralice para seguir adelante.",
            "bad": "Te quedas atrapado/a en la culpa sin avanzar hacia un cambio concreto."
          },
          {
            "q": "Te sientes agotado/a después de un día de mucha demanda parental.",
            "good": "Identificas la necesidad de descanso antes de que afecte tu próxima interacción.",
            "bad": "Ignoras tu agotamiento hasta que explota en la siguiente interacción."
          },
          {
            "q": "Sientes impaciencia esperando que tu hijo/a termine una tarea lenta.",
            "good": "Reconoces la impaciencia como tuya y la regulas antes de presionarlo/a.",
            "bad": "Presionas verbalmente desde la impaciencia sin regularla primero."
          },
          {
            "q": "Te enojas por un comentario de un desconocido sobre tu hijo/a en público.",
            "good": "Regulas tu enojo antes de responder, priorizando el bienestar de tu hijo/a.",
            "bad": "Reaccionas agresivamente hacia el desconocido delante de tu hijo/a."
          },
          {
            "q": "Sientes que tu tolerancia está más baja de lo normal hoy.",
            "good": "Reconoces ese estado y ajustas tus expectativas del día en consecuencia.",
            "bad": "Mantienes las mismas exigencias esperando la misma paciencia de siempre."
          },
          {
            "q": "Te sientes sobrepasado/a gestionando varias necesidades a la vez.",
            "good": "Priorizas y pides ayuda o un momento antes de continuar.",
            "bad": "Intentas manejarlo todo sin pausa, aumentando tu propio desborde."
          },
          {
            "q": "Sientes resentimiento acumulado por decisiones que has tenido que tomar solo/a.",
            "good": "Reconoces ese sentimiento y buscas un espacio para procesarlo, no descargarlo en tu hijo/a.",
            "bad": "Descargas ese resentimiento en la próxima interacción con tu hijo/a."
          },
          {
            "q": "Te sientes tentado/a a gritar en medio de una discusión con tu hijo/a.",
            "good": "Reconoces el impulso y eliges una pausa antes de continuar hablando.",
            "bad": "Cedes al impulso y gritas en medio de la discusión."
          },
          {
            "q": "Tienes una llamada de trabajo importante y tu hijo/a interrumpe repetidamente.",
            "good": "Pides una pausa breve y te regulas antes de continuar la llamada.",
            "bad": "Le gritas para que se calle en medio de la llamada."
          },
          {
            "q": "Tu hijo/a derrama algo en un momento en que ya estabas tenso/a.",
            "good": "Respiras antes de reaccionar y ayudas a limpiar con calma.",
            "bad": "Reaccionas con enojo desproporcionado por el derrame."
          },
          {
            "q": "Tus hijos discuten entre sí con gritos mientras intentas concentrarte.",
            "good": "Te tomas un momento para regularte antes de intervenir en la pelea.",
            "bad": "Intervienes gritando más fuerte que ellos."
          },
          {
            "q": "Hay tráfico pesado y tu hijo/a tiene una crisis en el asiento trasero.",
            "good": "Te estacionas si es posible y te regulas antes de responder.",
            "bad": "Sigues manejando mientras gritas para que se calme."
          },
          {
            "q": "Tu hijo/a tiene un colapso en el supermercado frente a otros clientes.",
            "good": "Regulas tu propia vergüenza antes de decidir cómo actuar.",
            "bad": "Lo/la reprendes con dureza para que la gente deje de mirar."
          },
          {
            "q": "En un restaurante, tu hijo/a tira los cubiertos repetidamente.",
            "good": "Notas tu propia tensión y respondes con calma en vez de regañar de inmediato.",
            "bad": "Alzas la voz frente a las otras mesas por la vergüenza."
          },
          {
            "q": "Se acaba el tiempo de videojuego y tu hijo/a reacciona con enojo.",
            "good": "Te preparas emocionalmente antes de sostener el límite con calma.",
            "bad": "Reaccionas con la misma intensidad de enojo que tu hijo/a."
          },
          {
            "q": "Tu hijo/a se niega a hacer la tarea por tercera vez esta semana.",
            "good": "Reconoces tu frustración acumulada y buscas un tono calmado antes de insistir.",
            "bad": "Le hablas con sarcasmo por la frustración acumulada."
          },
          {
            "q": "Es hora de dormir y tu hijo/a alarga la rutina una vez más.",
            "good": "Notas tu cansancio y te regulas antes de repetir el límite.",
            "bad": "Terminas la rutina bruscamente por pura impaciencia."
          },
          {
            "q": "Van tarde al colegio y tu hijo/a se mueve con lentitud.",
            "good": "Reconoces tu propio apuro y evitas descargarlo en tu hijo/a.",
            "bad": "Lo/la apuras a gritos por tu propia ansiedad de llegar tarde."
          },
          {
            "q": "Un familiar critica tu forma de criar durante una reunión familiar.",
            "good": "Regulas tu reacción antes de responder frente a los demás.",
            "bad": "Respondes con un comentario hiriente delante de toda la familia."
          },
          {
            "q": "Recibes un mensaje del colegio en medio de una reunión de trabajo.",
            "good": "Te das un momento antes de responder para no reaccionar desde la ansiedad.",
            "bad": "Escribes una respuesta brusca sin procesar la emoción primero."
          },
          {
            "q": "Tienes hambre y bajo nivel de energía cuando tu hijo/a te pide algo.",
            "good": "Reconoces que tu propio estado influye y te regulas antes de responder.",
            "bad": "Respondes con brusquedad sin notar que el hambre te afecta."
          },
          {
            "q": "Te despertaste varias veces en la noche y hoy estás muy sensible.",
            "good": "Reconoces tu bajo umbral hoy y ajustas tu forma de responder.",
            "bad": "Reaccionas de forma desproporcionada a cosas pequeñas sin notar tu cansancio."
          },
          {
            "q": "Esperas en una sala de espera médica y tu hijo/a se impacienta.",
            "good": "Te regulas a ti mismo/a antes de gestionar la impaciencia de tu hijo/a.",
            "bad": "Le hablas con irritación por tu propia impaciencia con la espera."
          },
          {
            "q": "El tráfico te hace llegar tarde a buscar a tu hijo/a a su práctica deportiva.",
            "good": "Reconoces tu propio estrés y te calmas antes de encontrarte con él/ella.",
            "bad": "Lo/la recibes con reproches por haberte hecho esperar el tráfico."
          },
          {
            "q": "Otro padre te mira con juicio en el parque mientras tu hijo/a tiene una rabieta.",
            "good": "Regulas tu propia vergüenza sin dejar que dicte tu respuesta a tu hijo/a.",
            "bad": "Reaccionas con dureza hacia tu hijo/a para 'demostrar' control ante la mirada ajena."
          },
          {
            "q": "Tu hijo/a rompe algo que valorabas mucho.",
            "good": "Te das un momento antes de responder para no reaccionar desde el enojo inicial.",
            "bad": "Reaccionas con un grito desproporcionado al valor del objeto."
          },
          {
            "q": "Olvidaste firmar un permiso y el colegio te lo reclama frente a tu hijo/a.",
            "good": "Reconoces tu propio bochorno sin descargarlo en tu hijo/a.",
            "bad": "Le echas la culpa a tu hijo/a por 'no haberte recordado'."
          },
          {
            "q": "Tu pareja te contradice frente a tu hijo/a en una decisión de crianza.",
            "good": "Regulas tu reacción en el momento y hablan en privado después.",
            "bad": "Discuten frente a tu hijo/a desde la irritación inmediata."
          },
          {
            "q": "Tuviste un mal día en el trabajo y llegas a casa con poca paciencia.",
            "good": "Reconoces que traes esa carga y te tomas un momento antes de interactuar.",
            "bad": "Descargas la frustración del trabajo en la primera interacción con tu hijo/a."
          },
          {
            "q": "Te da un fuerte dolor de cabeza justo cuando tu hijo/a necesita atención.",
            "good": "Reconoces tu malestar físico y pides un breve respiro antes de atenderlo/a.",
            "bad": "Respondes con irritabilidad sin reconocer que el dolor te afecta."
          },
          {
            "q": "Tu hijo/a repite exactamente el tono brusco que usaste con él/ella antes.",
            "good": "Reconoces el espejo y te regulas en vez de defenderte.",
            "bad": "Te enojas más al escuchar tu propio tono reflejado."
          },
          {
            "q": "Negocian el tiempo de pantallas y la discusión empieza a subir de tono.",
            "good": "Bajas tu propio tono conscientemente para no escalar la discusión.",
            "bad": "Igualas el tono elevado, escalando la discusión aún más."
          },
          {
            "q": "Un familiar compara a tu hijo/a con su primo/a durante una celebración.",
            "good": "Regulas tu enojo y respondes con calma más tarde, en privado si hace falta.",
            "bad": "Reaccionas de forma agresiva delante de todos en la celebración."
          },
          {
            "q": "Un desconocido te da un consejo no solicitado sobre cómo manejar a tu hijo/a.",
            "good": "Reconoces tu irritación y respondes con cortesía breve.",
            "bad": "Le respondes con sarcasmo o agresividad evidente."
          },
          {
            "q": "Tu hijo/a tiene un colapso prolongado en un evento familiar.",
            "good": "Te regulas mientras esperas que pase, priorizando la calma sobre la urgencia de 'arreglarlo'.",
            "bad": "Pierdes la paciencia frente a todos por la duración del colapso."
          },
          {
            "q": "Tu hijo/a come muy lento y ya vas tarde a otra actividad.",
            "good": "Reconoces tu propia impaciencia y ajustas el plan en vez de presionarlo/a.",
            "bad": "Lo/la apuras bruscamente por tu propio apuro con el horario."
          },
          {
            "q": "Tu hijo/a se niega a vestirse cuando ya están atrasados.",
            "good": "Te das un segundo para regularte antes de ofrecer opciones con calma.",
            "bad": "Le gritas mientras lo/la vistes a la fuerza."
          },
          {
            "q": "Preparas las maletas para un viaje y todo se complica a la vez.",
            "good": "Reconoces tu propio estrés acumulado y haces una pausa breve antes de seguir.",
            "bad": "Descargas el estrés del viaje gritando por cosas pequeñas."
          },
          {
            "q": "Una reunión familiar navideña se llena de estímulos y tu hijo/a se altera.",
            "good": "Regulas tu propia sobrecarga antes de acompañar la de tu hijo/a.",
            "bad": "Reaccionas con irritación visible frente a toda la familia."
          },
          {
            "q": "Tienes una fecha límite de trabajo y tu hijo/a demanda atención constante.",
            "good": "Reconoces la tensión entre ambas demandas y te regulas antes de responder.",
            "bad": "Le hablas con brusquedad por la presión del trabajo."
          },
          {
            "q": "Te llaman del colegio por un incidente de conducta de tu hijo/a.",
            "good": "Te tomas un momento para procesar antes de hablar con el colegio o tu hijo/a.",
            "bad": "Reaccionas de inmediato con enojo antes de conocer todos los detalles."
          },
          {
            "q": "Cancelan tu sesión de terapia personal de último momento.",
            "good": "Reconoces la frustración sin descargarla en la siguiente interacción familiar.",
            "bad": "Llegas más irritable a casa y lo proyectas en tu hijo/a."
          },
          {
            "q": "Un ruido fuerte e inesperado te sobresalta junto a tu hijo/a.",
            "good": "Te regulas a ti mismo/a antes de ayudar a tu hijo/a a calmarse.",
            "bad": "Reaccionas con sobresalto y gritos que aumentan la alarma de tu hijo/a."
          },
          {
            "q": "Estás enseñando a tu hijo/a adolescente a manejar y comete un error.",
            "good": "Regulas tu susto o enojo antes de dar retroalimentación.",
            "bad": "Le gritas de inmediato por el error al manejar."
          },
          {
            "q": "Tu hijo/a adolescente responde con un gesto de fastidio a tu pregunta.",
            "good": "Reconoces tu reacción emocional sin tomarlo como un ataque personal inmediato.",
            "bad": "Respondes con la misma actitud desafiante hacia tu hijo/a."
          },
          {
            "q": "Tu hijo/a te da el silencio como respuesta tras pedirle algo.",
            "good": "Toleras la incomodidad del silencio sin forzar una reacción inmediata.",
            "bad": "Presionas repetidamente hasta generar un conflicto mayor."
          },
          {
            "q": "Olvidaste un compromiso importante por la carga de tareas de crianza.",
            "good": "Reconoces el error con calma y buscas cómo resolverlo sin castigarte.",
            "bad": "Te enojas contigo mismo/a de forma desproporcionada frente a tu hijo/a."
          },
          {
            "q": "Cancelas un plan social propio por una necesidad urgente de tu hijo/a.",
            "good": "Reconoces la frustración legítima sin descargarla en tu hijo/a.",
            "bad": "Le haces sentir a tu hijo/a que es culpable de arruinar tu plan."
          },
          {
            "q": "Intentas hacer ejercicio y te interrumpen varias veces seguidas.",
            "good": "Te regulas antes de responder a la siguiente interrupción.",
            "bad": "Respondes de forma cada vez más brusca con cada interrupción."
          },
          {
            "q": "Cocinas la cena y tu hijo/a te interrumpe repetidamente pidiendo cosas.",
            "good": "Reconoces tu tensión creciente y te tomas un respiro antes de responder.",
            "bad": "Terminas gritando por la acumulación de interrupciones."
          },
          {
            "q": "Tienes ropa sucia acumulada y tu hijo/a pide ayuda con algo más.",
            "good": "Priorizas tu regulación antes de decidir qué atender primero.",
            "bad": "Respondes con fastidio evidente por la carga acumulada."
          },
          {
            "q": "Dormiste muy poco y aun así debes sostener toda la rutina del día.",
            "good": "Reconoces el cansancio extremo y ajustas tu propia expectativa de paciencia.",
            "bad": "Exiges de ti mismo/a la misma paciencia de un día bien descansado."
          },
          {
            "q": "Tu hijo/a tiene un colapso en una celebración familiar importante.",
            "good": "Te regulas priorizando acompañarlo/a por sobre la opinión de los presentes.",
            "bad": "Reaccionas con vergüenza y dureza para 'controlar' la situación rápido."
          },
          {
            "q": "Notas que tu hijo/a avanza más lento que su hermano/a en algo puntual.",
            "good": "Regulas la comparación interna antes de que se refleje en tu tono con él/ella.",
            "bad": "Dejas que la comparación se note en un comentario impaciente."
          },
          {
            "q": "Un gasto inesperado se suma justo en un día de mucha demanda parental.",
            "good": "Reconoces la presión extra y te das un momento antes de reaccionar con tu hijo/a.",
            "bad": "Descargas la tensión del gasto en la próxima interacción familiar."
          },
          {
            "q": "Estás en una reunión del colegio y sientes que te están juzgando como padre/madre.",
            "good": "Regulas la sensación de ataque antes de responder con claridad.",
            "bad": "Respondes a la defensiva de forma agresiva en la reunión."
          },
          {
            "q": "El pediatra hace un comentario que sientes como un reproche.",
            "good": "Procesas la emoción antes de responder o preguntar con calma.",
            "bad": "Reaccionas de inmediato a la defensiva frente al profesional."
          },
          {
            "q": "Tu pareja maneja una situación con tu hijo/a de forma distinta a como tú lo harías.",
            "good": "Regulas tu reacción en el momento y conversan el enfoque después, en privado.",
            "bad": "Corriges a tu pareja frente a tu hijo/a desde la irritación inmediata."
          },
          {
            "q": "Un viaje familiar se retrasa y tu hijo/a se sobreestimula en el aeropuerto.",
            "good": "Te regulas a ti mismo/a antes de ayudar a tu hijo/a con la espera.",
            "bad": "Reaccionas con impaciencia visible que aumenta la tensión de ambos."
          },
          {
            "q": "Tu hijo/a tiene una crisis en una sala de espera llena de gente.",
            "good": "Priorizas tu propia calma para poder sostener la de tu hijo/a.",
            "bad": "Te muestras visiblemente exasperado/a frente a los demás presentes."
          },
          {
            "q": "Sientes pánico antes de una conversación difícil que debes tener con tu hijo/a.",
            "good": "Te regulas con alguna técnica antes de iniciar la conversación.",
            "bad": "Inicias la conversación ya desde la ansiedad sin haberte calmado antes."
          },
          {
            "q": "Tu hijo/a interrumpe una videollamada importante frente a tus colegas.",
            "good": "Te disculpas con calma y atiendes brevemente antes de continuar.",
            "bad": "Reaccionas con enojo visible frente a tus colegas en la llamada."
          },
          {
            "q": "Un cambio de planes de último momento provoca un colapso en tu hijo/a.",
            "good": "Regulas tu propia frustración por el cambio antes de acompañarlo/a.",
            "bad": "Muestras tu propia frustración por el cambio, sumándola a la de tu hijo/a."
          },
          {
            "q": "Olvidaron empacar algo importante y eso desata un colapso de tu hijo/a.",
            "good": "Te regulas antes de buscar una solución práctica juntos.",
            "bad": "Culpas a tu hijo/a en voz alta por 'complicar todo'."
          },
          {
            "q": "Tu hijo/a te hace la misma pregunta repetidamente en poco tiempo.",
            "good": "Reconoces tu impaciencia creciente y respondes con calma de todas formas.",
            "bad": "Respondes con brusquedad evidente por la repetición."
          },
          {
            "q": "Discuten en el auto sobre qué camino tomar y tu hijo/a se pone ansioso/a.",
            "good": "Bajas el tono de la discusión al notar el efecto en tu hijo/a.",
            "bad": "Sigues discutiendo acaloradamente sin notar el impacto en tu hijo/a."
          },
          {
            "q": "Un corte de electricidad interrumpe la rutina y tu hijo/a se altera.",
            "good": "Te regulas ante el imprevisto antes de ayudar a tu hijo/a con el cambio.",
            "bad": "Muestras tu propia frustración por el imprevisto frente a tu hijo/a."
          },
          {
            "q": "Un invitado inesperado llega y rompe la rutina que tu hijo/a necesitaba.",
            "good": "Regulas tu propia tensión social antes de gestionar la reacción de tu hijo/a.",
            "bad": "Le exiges a tu hijo/a que 'se comporte' sin reconocer tu propia tensión."
          }
        ]
      },
      {
        "slug": "evitar-burnout-parental",
        "nombre": "Evitar Burnout Parental",
        "emoji": "🔋",
        "descripcion": "Reconocer señales de agotamiento y pedir apoyo a tiempo.",
        "situaciones": [
          {
            "q": "Notas que te sientes irritable con todo, no solo con tu hijo/a.",
            "good": "Reconoces esa señal de agotamiento y buscas apoyo o descanso concreto.",
            "bad": "Ignoras la señal y sigues exigiéndote al mismo ritmo."
          },
          {
            "q": "Llevas semanas sin ningún momento de descanso propio.",
            "good": "Organizas activamente un espacio de descanso, aunque sea breve.",
            "bad": "Postergas indefinidamente tu propio descanso 'porque no hay tiempo'."
          },
          {
            "q": "Sientes que ya no disfrutas momentos que antes te gustaban con tu hijo/a.",
            "good": "Reconoces esa anhedonia como señal de agotamiento y buscas apoyo.",
            "bad": "Te culpas por 'no disfrutar como debería' sin buscar ayuda."
          },
          {
            "q": "Notas que te cuesta concentrarte en tareas simples del día a día.",
            "good": "Identificas el agotamiento acumulado como causa probable y ajustas tu carga.",
            "bad": "Te exiges más concentración sin considerar el agotamiento real."
          },
          {
            "q": "Sientes que ya no tienes paciencia para nada, ni siquiera cosas pequeñas.",
            "good": "Tomas esa señal en serio y buscas reducir demandas temporalmente.",
            "bad": "Sigues funcionando igual, esperando que la paciencia 'vuelva sola'."
          },
          {
            "q": "Te sientes culpable cada vez que piensas en pedir ayuda.",
            "good": "Reconoces que pedir ayuda es parte de sostener el rol, no un fracaso.",
            "bad": "Evitas pedir ayuda por la culpa, aumentando tu propio desgaste."
          },
          {
            "q": "Notas que duermes mal por la carga mental de la crianza.",
            "good": "Buscas estrategias concretas o apoyo profesional para mejorar el descanso.",
            "bad": "Aceptas el mal sueño como 'parte normal' sin buscar ninguna solución."
          },
          {
            "q": "Sientes que tu red de apoyo (familia, amigos) se ha reducido mucho.",
            "good": "Haces un esfuerzo activo por reconectar con esa red de apoyo.",
            "bad": "Te aíslas cada vez más sin buscar reconectar con nadie."
          },
          {
            "q": "Notas que te cuesta recordar la última vez que hiciste algo solo para ti.",
            "good": "Planificas activamente un espacio propio, aunque sea pequeño.",
            "bad": "Sigues posponiendo cualquier espacio personal indefinidamente."
          },
          {
            "q": "Sientes que cada pequeño imprevisto te desborda más de lo habitual.",
            "good": "Reconoces ese umbral bajo como señal de agotamiento y buscas apoyo.",
            "bad": "Te exiges manejar todo igual de bien sin reconocer el desgaste."
          },
          {
            "q": "Un amigo o familiar te ofrece ayuda concreta con el cuidado de tu hijo/a.",
            "good": "Aceptas la ayuda ofrecida, reconociendo que la necesitas.",
            "bad": "Rechazas la ayuda por orgullo o por sentir que 'debes poder sola/o'."
          },
          {
            "q": "Notas que evitas actividades sociales por puro agotamiento.",
            "good": "Reconoces la necesidad de recarga social propia y buscas un espacio breve para ello.",
            "bad": "Te aíslas completamente sin buscar ningún tipo de conexión social."
          },
          {
            "q": "Sientes que ya no tienes paciencia para escuchar a tu pareja o amigos.",
            "good": "Reconoces que necesitas descanso emocional antes de sostener más conversaciones.",
            "bad": "Descargas irritabilidad en esas conversaciones sin reconocer tu agotamiento."
          },
          {
            "q": "Te sientes agotado/a de tomar todas las decisiones de crianza tú solo/a.",
            "good": "Buscas compartir decisiones con tu pareja o red de apoyo cercana.",
            "bad": "Sigues cargando todas las decisiones solo/a sin buscar compartir el peso."
          },
          {
            "q": "Notas que te enfermas físicamente con más frecuencia que antes.",
            "good": "Reconoces el estrés acumulado como posible causa y buscas atención médica y descanso.",
            "bad": "Ignoras las señales físicas y sigues al mismo ritmo exigente."
          },
          {
            "q": "Sientes que ya no tienes espacio mental para pensar en nada más que la crianza.",
            "good": "Buscas activamente un espacio de desconexión, aunque sea breve.",
            "bad": "Aceptas que 'así es la crianza' sin buscar ningún alivio."
          },
          {
            "q": "Un profesional te sugiere buscar apoyo psicológico para ti.",
            "good": "Consideras la sugerencia seriamente y buscas ese apoyo.",
            "bad": "Descartas la sugerencia porque 'el que necesita ayuda es mi hijo/a, no yo'."
          },
          {
            "q": "Notas que te comparas negativamente con otros padres que 'parecen manejarlo mejor'.",
            "good": "Reconoces que cada familia enfrenta desafíos distintos e invisibles.",
            "bad": "Te exiges igualar una imagen externa que no conoces en profundidad."
          },
          {
            "q": "Sientes que has perdido tu identidad fuera del rol de padre/madre.",
            "good": "Buscas activamente reconectar con algún interés o actividad propia.",
            "bad": "Aceptas la pérdida de identidad como algo permanente e inevitable."
          },
          {
            "q": "Notas que llevas mucho tiempo sin hablar con nadie de cómo te sientes realmente.",
            "good": "Buscas un espacio de conversación honesta, con alguien de confianza o un profesional.",
            "bad": "Sigues guardando todo para ti, sin ningún espacio de desahogo."
          },
          {
            "q": "Te saltas comidas seguido porque no encuentras tiempo para ti.",
            "good": "Reconoces la señal y organizas horarios fijos para comer bien.",
            "bad": "Sigues saltándote comidas 'porque no hay tiempo'."
          },
          {
            "q": "Dejas de lado un hobby que antes disfrutabas por falta de tiempo.",
            "good": "Reconoces la pérdida y buscas retomarlo aunque sea en pequeñas dosis.",
            "bad": "Aceptas que ese hobby 'ya no es para esta etapa de tu vida' sin buscar espacio."
          },
          {
            "q": "Sigues trabajando incluso cuando el cuerpo te pide descanso.",
            "good": "Reconoces la señal física y te permites una pausa real.",
            "bad": "Ignoras el cansancio físico y sigues exigiéndote igual."
          },
          {
            "q": "Sientes que no tienes ni un momento de espacio propio, ni de noche.",
            "good": "Buscas activamente un momento, aunque sea breve, solo para ti.",
            "bad": "Aceptas que 'ya no hay espacio para ti' de forma permanente."
          },
          {
            "q": "Lloras sin razón clara en medio del día.",
            "good": "Reconoces esa señal emocional y buscas apoyo o descanso.",
            "bad": "Ignoras el llanto como si no significara nada importante."
          },
          {
            "q": "Sientes temor de que llegue el día siguiente antes de que termine el actual.",
            "good": "Reconoces ese temor como señal de agotamiento y ajustas tu carga.",
            "bad": "Sigues igual sin prestar atención a esa señal de alerta."
          },
          {
            "q": "Descargas irritación con la mascota de la familia sin razón real.",
            "good": "Reconoces que esa irritación viene del agotamiento acumulado y buscas descanso.",
            "bad": "Ignoras la señal y sigues descargando tensión en quien esté cerca."
          },
          {
            "q": "Dejas de ducharte o comer con regularidad por la carga de cuidado.",
            "good": "Reconoces que esas señales indican agotamiento serio y buscas apoyo.",
            "bad": "Normalizas descuidar tu propio cuidado básico indefinidamente."
          },
          {
            "q": "Sientes dolores de cuerpo que antes no tenías, sin causa médica clara.",
            "good": "Reconoces que pueden ser señal de estrés acumulado y buscas atención.",
            "bad": "Ignoras el dolor físico asumiendo que 'es normal a estas alturas'."
          },
          {
            "q": "Usas el celular para desconectar por horas sin realmente descansar.",
            "good": "Reconoces que necesitas un descanso más real y buscas otra forma de recargar.",
            "bad": "Sigues usando la pantalla como único escape sin buscar descanso genuino."
          },
          {
            "q": "Cancelas tu propia terapia varias veces seguidas por la agenda familiar.",
            "good": "Reconoces que tu terapia es prioritaria y la reprogramas activamente.",
            "bad": "Sigues posponiendo tu terapia indefinidamente 'por falta de tiempo'."
          },
          {
            "q": "Sientes que ya nada te emociona, ni lo bueno ni lo malo.",
            "good": "Reconoces esa señal de agotamiento emocional y buscas apoyo profesional.",
            "bad": "Ignoras la sensación de vacío asumiendo que 'ya se te pasará'."
          },
          {
            "q": "Postergas pagar cuentas o hacer trámites simples por falta de energía mental.",
            "good": "Reconoces la sobrecarga mental y pides ayuda para organizar esas tareas.",
            "bad": "Dejas que se acumulen sin reconocer que reflejan tu agotamiento real."
          },
          {
            "q": "Sientes envidia de amigos sin hijos que tienen más tiempo libre.",
            "good": "Reconoces ese sentimiento sin culpa y lo usas como señal para buscar espacio propio.",
            "bad": "Te culpas por sentir envidia en vez de atender lo que revela."
          },
          {
            "q": "Te alejas físicamente de tu pareja por puro agotamiento acumulado.",
            "good": "Reconoces la señal y buscas un espacio de conexión, aunque sea breve.",
            "bad": "Dejas que la distancia crezca sin nombrar el agotamiento de por medio."
          },
          {
            "q": "Olvidas tu propio cumpleaños en medio de la carga de crianza.",
            "good": "Reconoces que mereces celebrar y te das un espacio, aunque pequeño.",
            "bad": "Dejas pasar la fecha sin ningún reconocimiento propio."
          },
          {
            "q": "Sigues funcionando en el trabajo a pesar de sentirte agotado/a en casa.",
            "good": "Reconoces que el agotamiento parental afecta también tu trabajo y buscas apoyo.",
            "bad": "Ignoras la señal esperando que 'se resuelva solo' con el tiempo."
          },
          {
            "q": "Recurres a mucha cafeína para sostener el ritmo diario.",
            "good": "Reconoces que es una señal de fondo y buscas ajustar tu descanso real.",
            "bad": "Sigues aumentando la cafeína sin atender la causa del cansancio."
          },
          {
            "q": "Sientes que pedir un fin de semana libre es imposible para ti.",
            "good": "Reconoces que mereces ese descanso y buscas organizarlo activamente.",
            "bad": "Descartas la idea sin siquiera intentar buscar una solución posible."
          },
          {
            "q": "Sientes culpa por desear un tiempo lejos de tu hijo/a.",
            "good": "Reconoces que ese deseo es humano y no te resta como padre/madre.",
            "bad": "Te castigas por ese deseo en vez de atender la necesidad real."
          },
          {
            "q": "Sales agotado/a de una reunión larga de colegio defendiendo apoyos para tu hijo/a.",
            "good": "Reconoces el desgaste de esa gestión y te das un espacio de recuperación después.",
            "bad": "Sigues con el resto del día igual, sin reconocer ese desgaste extra."
          },
          {
            "q": "La presión económica de terapias y apoyos se suma a tu carga diaria.",
            "good": "Reconoces esa presión como parte del agotamiento y buscas apoyo o alivio concreto.",
            "bad": "Sigues absorbiendo la presión económica en silencio sin buscar ayuda."
          },
          {
            "q": "Sientes que estás 'siempre alerta', incluso cuando tu hijo/a duerme.",
            "good": "Reconoces esa hipervigilancia como señal de agotamiento y buscas soltarla un poco.",
            "bad": "Aceptas la alerta constante como algo que 'ya no puedes cambiar'."
          },
          {
            "q": "No logras relajarte en los pocos ratos libres que tienes.",
            "good": "Reconoces esa dificultad como señal de agotamiento profundo y buscas apoyo para procesarla.",
            "bad": "Te frustras contigo mismo/a por 'no poder ni descansar bien'."
          },
          {
            "q": "Te sientes innecesario/a cuando tu hijo/a no te busca tanto, y lo ignoras.",
            "good": "Reconoces ese sentimiento y aprovechas el espacio para tu propio descanso real.",
            "bad": "Ignoras la oportunidad de descanso sintiéndote solo el vacío emocional."
          },
          {
            "q": "Sigues llevando a tu hijo/a a todas las terapias sin ningún respiro para ti.",
            "good": "Evalúas si puedes compartir esa carga o pedir apoyo puntual.",
            "bad": "Sigues sosteniendo todo tú solo/a sin buscar ninguna alternativa."
          },
          {
            "q": "Minimizas tu agotamiento diciendo que 'solo estás cansado/a'.",
            "good": "Reconoces que puede ser más que cansancio y buscas evaluarlo con calma.",
            "bad": "Sigues restándole importancia hasta que se vuelve insostenible."
          },
          {
            "q": "Tu pareja no parece notar cuánto te está costando sostener el ritmo actual.",
            "good": "Comunicas abiertamente tu agotamiento en vez de esperar que lo note solo/a.",
            "bad": "Guardas silencio esperando que tu pareja 'lo note por sí misma'."
          },
          {
            "q": "La familia extendida espera que sigas organizando reuniones a pesar de tu cansancio.",
            "good": "Pones un límite claro reconociendo tu propio agotamiento actual.",
            "bad": "Sigues organizando todo igual, ignorando tu propio límite."
          },
          {
            "q": "Tu propio terapeuta te advierte señales de agotamiento que has minimizado.",
            "good": "Tomas en serio la advertencia y ajustas tu ritmo de vida.",
            "bad": "Descartas la advertencia asumiendo que 'puedes con todo'."
          },
          {
            "q": "Sientes opresión en el pecho o dolores de cabeza frecuentes últimamente.",
            "good": "Reconoces que puede ser estrés acumulado y buscas atención médica.",
            "bad": "Ignoras el síntoma físico asumiendo que 'no es nada'."
          },
          {
            "q": "Te sientes desconectado/a incluso durante el juego con tu hijo/a.",
            "good": "Reconoces esa desconexión como señal de agotamiento y buscas descanso real.",
            "bad": "Te culpas por 'no disfrutar' sin buscar la causa de fondo."
          },
          {
            "q": "Sonríes en público aunque por dentro sientes un agotamiento profundo.",
            "good": "Reconoces la máscara que sostienes y buscas un espacio honesto para desahogarte.",
            "bad": "Sigues fingiendo bienestar sin buscar ningún espacio real de desahogo."
          },
          {
            "q": "Temes que llegue el fin de semana porque no representa ningún descanso real.",
            "good": "Reconoces esa señal y planificas activamente algún alivio en el fin de semana.",
            "bad": "Aceptas que los fines de semana 'ya no son descanso' sin buscar cambiarlo."
          },
          {
            "q": "La temporada navideña suma más demandas logísticas y emocionales de las habituales.",
            "good": "Ajustas tus expectativas y pides ayuda concreta para esta temporada.",
            "bad": "Intentas sostener todas las demandas extra sin pedir ningún apoyo."
          },
          {
            "q": "El regreso a clases trae una carga logística que te desborda cada año.",
            "good": "Planificas con anticipación y delegas tareas donde sea posible.",
            "bad": "Sostienes toda la logística tú solo/a, agotándote cada inicio de año."
          },
          {
            "q": "Las vacaciones escolares llegan sin ningún apoyo de cuidado disponible.",
            "good": "Buscas activamente opciones de apoyo o descanso durante ese periodo.",
            "bad": "Sostienes solo/a todo el periodo sin buscar ninguna alternativa."
          },
          {
            "q": "Te agotas lidiando con trámites de seguros o apoyos administrativos.",
            "good": "Reconoces ese desgaste específico y buscas ayuda o asesoría para esos trámites.",
            "bad": "Sigues absorbiendo esa carga administrativa sin buscar ningún apoyo."
          },
          {
            "q": "Pospones tu propio chequeo médico anual por falta de tiempo.",
            "good": "Reconoces que tu salud también sostiene la crianza y agendas el chequeo.",
            "bad": "Sigues posponiendo indefinidamente tu propio cuidado médico."
          },
          {
            "q": "Te cuesta terminar un solo pensamiento completo por las interrupciones constantes.",
            "good": "Reconoces esa fragmentación como señal de sobrecarga y buscas ajustar tu carga.",
            "bad": "Te frustras contigo mismo/a por 'no poder concentrarte' sin ver la causa real."
          },
          {
            "q": "Dejaste por completo una pasión antigua desde que empezó la crianza intensiva.",
            "good": "Reconoces esa pérdida y buscas retomarla aunque sea en formato reducido.",
            "bad": "Aceptas que esa pasión 'ya no volverá' sin intentar retomarla nunca."
          },
          {
            "q": "Te despiertas ya agotado/a, incluso después de dormir varias horas.",
            "good": "Reconoces que puede ser agotamiento acumulado más que falta de sueño puntual.",
            "bad": "Ignoras la señal asumiendo que 'dormir más' arreglará todo por sí solo."
          },
          {
            "q": "Sientes resentimiento creciente hacia familiares que no ayudan lo suficiente.",
            "good": "Reconoces el resentimiento y buscas conversarlo o pedir ayuda directamente.",
            "bad": "Guardas el resentimiento en silencio hasta que explota en otro momento."
          },
          {
            "q": "Evitas redes sociales porque te duele ver la aparente facilidad de otros padres.",
            "good": "Reconoces que esa comparación te agota y ajustas tu consumo de esas redes.",
            "bad": "Sigues exponiéndote a esa comparación sin poner ningún límite."
          },
          {
            "q": "Necesitas apoyo de cuidado temporal (respiro) pero no te animas a pedirlo.",
            "good": "Reconoces la necesidad real y buscas activamente ese apoyo de respiro.",
            "bad": "Sigues sin pedir el apoyo por vergüenza o culpa."
          },
          {
            "q": "Faltas repetidamente a eventos importantes de amigos por la carga de cuidado.",
            "good": "Reconoces el costo social y buscas alguna forma de sostener esos vínculos.",
            "bad": "Aceptas el aislamiento social como algo inevitable sin buscar alternativas."
          },
          {
            "q": "Sales agotado/a de cada reunión escolar donde debes abogar por tu hijo/a.",
            "good": "Reconoces ese desgaste específico y te das un espacio de recuperación después.",
            "bad": "Sigues con el resto del día igual, ignorando el costo emocional de esas reuniones."
          },
          {
            "q": "Te sientes emocionalmente entumecido/a al pensar en el futuro por el cansancio actual.",
            "good": "Reconoces ese entumecimiento como señal de agotamiento y buscas apoyo emocional.",
            "bad": "Ignoras la señal asumiendo que 'ya pasará con el tiempo'."
          },
          {
            "q": "Usas el humor para restar importancia a tu agotamiento cuando alguien pregunta cómo estás.",
            "good": "Te permites responder con honestidad cuando alguien de confianza pregunta.",
            "bad": "Sigues minimizando con bromas sin nunca mostrar cómo estás realmente."
          },
          {
            "q": "Rechazas invitaciones sociales de forma automática sin siquiera considerarlas.",
            "good": "Reconoces el patrón y evalúas caso por caso si podrías aceptar alguna.",
            "bad": "Sigues rechazando todo automáticamente sin cuestionar el patrón."
          },
          {
            "q": "Sientes que cuidar de ti mismo/a es un acto egoísta frente a las necesidades de tu hijo/a.",
            "good": "Reconoces que tu bienestar sostiene también el de tu hijo/a a largo plazo.",
            "bad": "Sigues posponiendo tu autocuidado por considerarlo egoísta."
          },
          {
            "q": "Sientes un temor difuso cada mañana antes de que empiece el día.",
            "good": "Reconoces esa señal como agotamiento acumulado y buscas apoyo para procesarla.",
            "bad": "Ignoras el temor diario asumiendo que 'es normal sentirse así'."
          },
          {
            "q": "Solo te conectas con otros padres para quejarte, sin buscar apoyo real.",
            "good": "Buscas también espacios de apoyo genuino, no solo de desahogo puntual.",
            "bad": "Sigues solo desahogándote sin construir ningún apoyo real y sostenido."
          },
          {
            "q": "Evitas buscar servicios de respiro por sentir culpa de 'delegar' el cuidado.",
            "good": "Reconoces que el respiro es parte de sostener el rol, no un fracaso.",
            "bad": "Sigues evitando esos servicios, aumentando tu propio agotamiento."
          },
          {
            "q": "Te sientes agotado/a de ser el punto de contacto único para todos los profesionales.",
            "good": "Buscas compartir esa coordinación con tu pareja o red cercana.",
            "bad": "Sigues siendo el único punto de contacto sin buscar compartir la carga."
          },
          {
            "q": "Notas que ya no tienes energía ni para conversaciones triviales con amigos.",
            "good": "Reconoces esa señal y te permites reducir temporalmente ciertas exigencias sociales.",
            "bad": "Te fuerzas a sostener todas las conversaciones igual, aumentando tu desgaste."
          },
          {
            "q": "Sientes que cada semana se parece a la anterior sin ningún respiro real.",
            "good": "Buscas introducir algún cambio o pausa concreta en la rutina semanal.",
            "bad": "Aceptas la monotonía agotadora como algo permanente e inevitable."
          },
          {
            "q": "Te cuesta pedir a tu pareja que se haga cargo una noche para que tú descanses.",
            "good": "Pides ese espacio directamente, reconociendo que lo necesitas.",
            "bad": "Sigues sin pedirlo, esperando que tu pareja lo ofrezca sin decir nada."
          },
          {
            "q": "Notas que ya casi no recuerdas cómo se siente estar realmente descansado/a.",
            "good": "Tomas esa señal en serio y buscas un cambio concreto en tu rutina de descanso.",
            "bad": "Aceptas esa sensación como 'lo normal de ser padre/madre' sin buscar cambiarlo."
          },
          {
            "q": "Sientes que ya no tienes margen para ningún imprevisto más.",
            "good": "Reconoces que ese margen bajo es señal de agotamiento y buscas aligerar tu carga.",
            "bad": "Sigues sumando responsabilidades sin reconocer que tu margen ya está agotado."
          }
        ]
      },
      {
        "slug": "construir-resiliencia",
        "nombre": "Construir Resiliencia",
        "emoji": "🌱",
        "descripcion": "Sostener el rol parental a lo largo del tiempo, con altibajos.",
        "situaciones": [
          {
            "q": "Tuviste una semana muy difícil con varias crisis seguidas.",
            "good": "Reconoces que las semanas difíciles no definen todo el proceso a largo plazo.",
            "bad": "Sientes que 'todo está fallando' basándote solo en la semana difícil."
          },
          {
            "q": "Un día sientes que retrocediste en algo que ya habían logrado.",
            "good": "Entiendes que los retrocesos son parte normal de un proceso no lineal.",
            "bad": "Sientes que 'todo el esfuerzo fue en vano' por un solo retroceso."
          },
          {
            "q": "Comparas tu progreso actual con el de hace un año.",
            "good": "Reconoces los avances reales, aunque no sean lineales ni constantes.",
            "bad": "Te enfocas solo en lo que sigue igual, ignorando los avances logrados."
          },
          {
            "q": "Sientes que un mismo conflicto se repite una y otra vez.",
            "good": "Reconoces que cada repetición es una oportunidad más de ajuste, no un fracaso total.",
            "bad": "Sientes que 'nunca vas a poder resolverlo' ante cada repetición."
          },
          {
            "q": "Un profesional te da una noticia difícil sobre el proceso de tu hijo/a.",
            "good": "Te das tiempo para procesar la noticia sin perder la perspectiva de largo plazo.",
            "bad": "Reaccionas con desesperanza total ante la noticia difícil."
          },
          {
            "q": "Sientes que otras familias 'lo tienen más fácil' que la tuya.",
            "good": "Reconoces que cada familia enfrenta sus propios desafíos invisibles.",
            "bad": "Te comparas constantemente, alimentando un sentido de injusticia agotador."
          },
          {
            "q": "Después de un mal día, sientes ganas de rendirte con cierta estrategia.",
            "good": "Te das un descanso sin abandonar la estrategia completamente, evaluando después con calma.",
            "bad": "Abandonas por completo la estrategia tras un solo mal día."
          },
          {
            "q": "Notas que necesitas ajustar tus expectativas de tiempo para ciertos logros.",
            "good": "Aceptas un ritmo más largo sin perder la confianza en el proceso.",
            "bad": "Te frustras porque 'ya debería haber avanzado más para esta altura'."
          },
          {
            "q": "Sientes que la crianza de tu hijo/a te ha cambiado como persona.",
            "good": "Reconoces ese cambio como parte de un crecimiento propio, no solo como pérdida.",
            "bad": "Solo ves lo que 'perdiste' sin reconocer ningún crecimiento propio."
          },
          {
            "q": "Un mal momento te hace dudar de si estás haciendo bien las cosas.",
            "good": "Reconoces la duda como parte normal del proceso, sin que defina tu capacidad real.",
            "bad": "Dejas que esa duda puntual se convierta en una creencia fija sobre ti."
          },
          {
            "q": "Sientes que necesitas celebrar más los pequeños logros del camino.",
            "good": "Te das el espacio de reconocer y celebrar avances pequeños regularmente.",
            "bad": "Solo consideras válidos los grandes logros, ignorando los pequeños avances."
          },
          {
            "q": "Un familiar te pregunta cómo haces para sostener el proceso en el tiempo.",
            "good": "Reflexionas y compartes honestamente tanto los recursos como las dificultades reales.",
            "bad": "Presentas una imagen idealizada que no refleja el esfuerzo real que implica."
          },
          {
            "q": "Sientes que un enfoque que antes funcionaba ya no funciona igual.",
            "good": "Aceptas que los enfoques necesitan evolucionar con el crecimiento de tu hijo/a.",
            "bad": "Insistes en el mismo enfoque exacto, frustrándote porque 'ya no funciona'."
          },
          {
            "q": "Un día sientes que no tienes fuerzas para seguir adaptándote a tantos cambios.",
            "good": "Reconoces el cansancio sin que eso signifique que no puedas continuar mañana.",
            "bad": "Sientes que ese cansancio puntual define tu capacidad de sostener el proceso."
          },
          {
            "q": "Notas que necesitas redefinir qué significa 'ir bien' para tu familia.",
            "good": "Ajustas esa definición según el bienestar real vivido, no según estándares externos.",
            "bad": "Mantienes una definición externa de éxito que no encaja con tu realidad."
          },
          {
            "q": "Sientes miedo por el futuro a largo plazo de tu hijo/a.",
            "good": "Reconoces el miedo sin dejar que paralice las acciones concretas de hoy.",
            "bad": "Dejas que el miedo al futuro te impida disfrutar o actuar en el presente."
          },
          {
            "q": "Un mal periodo te hace cuestionar si elegiste bien ciertas decisiones pasadas.",
            "good": "Reconoces que tomaste las mejores decisiones posibles con la información que tenías.",
            "bad": "Te castigas por decisiones pasadas juzgándolas con información que no tenías entonces."
          },
          {
            "q": "Sientes que necesitas más herramientas para sostener el proceso a largo plazo.",
            "good": "Buscas activamente más formación, apoyo o comunidad para nutrir tu resiliencia.",
            "bad": "Esperas que la resiliencia 'aparezca sola' sin buscar ningún recurso adicional."
          },
          {
            "q": "Un logro pequeño de tu hijo/a te emociona profundamente.",
            "good": "Te permites disfrutar plenamente ese momento como parte del camino recorrido.",
            "bad": "Minimizas la emoción porque 'falta mucho camino por recorrer todavía'."
          },
          {
            "q": "Sientes que necesitas reconectar con la razón original por la que sostienes este esfuerzo.",
            "good": "Te das un momento para recordar el vínculo y el amor que sostiene el proceso.",
            "bad": "Sigues en automático sin reconectar nunca con el sentido profundo del esfuerzo."
          },
          {
            "q": "Empieza el año escolar y aparece un retroceso inesperado en la adaptación.",
            "good": "Reconoces que los inicios de etapa pueden traer ajustes temporales.",
            "bad": "Sientes que 'todo el progreso del año anterior se perdió'."
          },
          {
            "q": "Una técnica que aprendiste en terapia no funciona como esperabas.",
            "good": "La ajustas o pruebas otra sin sentir que fue un fracaso total.",
            "bad": "Sientes que 'nada de lo que intentas funciona nunca'."
          },
          {
            "q": "Ves contenido en redes sociales de otras familias que parecen tener todo resuelto.",
            "good": "Reconoces que las redes muestran solo una parte editada de la realidad.",
            "bad": "Te comparas negativamente asumiendo que tu proceso va peor."
          },
          {
            "q": "Tu hijo/a no alcanza un hito en la edad que otros niños lo alcanzan.",
            "good": "Confías en su propio ritmo de desarrollo sin usar la edad como única medida.",
            "bad": "Sientes alarma desproporcionada solo por la diferencia de edad."
          },
          {
            "q": "Un hermano/a alcanza un logro que tu hijo/a con perfil distinto aún no alcanza.",
            "good": "Reconoces que cada camino tiene su propio ritmo, sin comparar linealmente.",
            "bad": "Sientes que eso confirma que 'algo está mal' con el proceso de tu hijo/a."
          },
          {
            "q": "Una enfermedad de tu hijo/a provoca un retroceso temporal en logros ya alcanzados.",
            "good": "Entiendes que el retroceso durante la enfermedad es esperable y temporal.",
            "bad": "Sientes pánico pensando que el logro se perdió para siempre."
          },
          {
            "q": "Un terapeuta cambia la recomendación que llevaban meses siguiendo.",
            "good": "Confías en que ajustar el rumbo es parte normal del proceso.",
            "bad": "Sientes que todo el tiempo invertido en el enfoque anterior fue en vano."
          },
          {
            "q": "Deben cambiar a tu hijo/a de colegio en medio del año escolar.",
            "good": "Reconoces que la adaptación llevará tiempo, sin perder la confianza en el proceso.",
            "bad": "Sientes que este cambio arruinará todo el progreso logrado hasta ahora."
          },
          {
            "q": "Un imprevisto económico reduce temporalmente el acceso a ciertas terapias.",
            "good": "Buscas alternativas sin sentir que el proceso se detiene por completo.",
            "bad": "Sientes que todo el progreso depende únicamente de esa terapia puntual."
          },
          {
            "q": "Un cambio grande en la rutina familiar altera temporalmente los avances logrados.",
            "good": "Confías en que la rutina puede reconstruirse con el tiempo.",
            "bad": "Sientes que el cambio de rutina borra por completo lo avanzado."
          },
          {
            "q": "Las fiestas de fin de año traen un retroceso conductual temporal.",
            "good": "Reconoces que la sobreestimulación de la temporada explica el retroceso puntual.",
            "bad": "Sientes que ese retroceso revela que 'nunca aprendió nada realmente'."
          },
          {
            "q": "Tu hijo/a empieza un nuevo grado y siente ansiedad ante el cambio.",
            "good": "Confías en que, como en transiciones pasadas, logrará adaptarse con tiempo.",
            "bad": "Sientes que esta transición será distinta y fracasará, sin base real para creerlo."
          },
          {
            "q": "Un familiar duda abiertamente del enfoque que has elegido para tu hijo/a.",
            "good": "Sostienes tu confianza en el proceso basada en la evidencia que has visto.",
            "bad": "Dejas que esa duda externa te haga abandonar un enfoque que sí funciona."
          },
          {
            "q": "Debes explicar de nuevo la situación de tu hijo/a a un profesor nuevo cada año.",
            "good": "Ves esa repetición como parte esperable del proceso, no como una carga inútil.",
            "bad": "Sientes agotamiento y desesperanza por tener que 'empezar de cero' cada vez."
          },
          {
            "q": "Tu hijo/a rechaza de golpe una terapia que antes disfrutaba.",
            "good": "Entiendes que los intereses cambian y buscas ajustar el enfoque con calma.",
            "bad": "Sientes que ese rechazo puntual significa que todo el trabajo previo se perdió."
          },
          {
            "q": "El costo económico de sostener los apoyos a largo plazo te desanima.",
            "good": "Buscas alternativas de financiamiento sin perder de vista el valor del proceso.",
            "bad": "Sientes que nunca podrás sostener el esfuerzo necesario en el tiempo."
          },
          {
            "q": "Sientes que necesitas encontrar una comunidad de otros padres que entiendan tu proceso.",
            "good": "Buscas activamente espacios o grupos de apoyo entre pares.",
            "bad": "Sigues sintiéndote solo/a sin buscar ninguna comunidad de apoyo."
          },
          {
            "q": "Sacrificaste tu carrera profesional para sostener el proceso de tu hijo/a.",
            "good": "Redefines el éxito propio incluyendo ese sacrificio como parte de un propósito mayor.",
            "bad": "Sientes que perdiste tu vida entera sin ningún sentido a cambio."
          },
          {
            "q": "Se acerca el aniversario de un momento difícil, como un diagnóstico.",
            "good": "Permites que resurjan emociones sin que definan tu estado actual.",
            "bad": "Dejas que el aniversario arruine por completo tu ánimo del día."
          },
          {
            "q": "Notas un pequeño logro que pasó desapercibido en medio de una semana difícil.",
            "good": "Te detienes a reconocerlo, aunque la semana en general fue dura.",
            "bad": "Ignoras el pequeño logro por estar enfocado/a solo en lo difícil."
          },
          {
            "q": "Necesitas paciencia porque una habilidad aprendida en terapia aún no se generaliza en casa.",
            "good": "Confías en que la generalización llega con más tiempo y práctica.",
            "bad": "Sientes que la habilidad 'no sirvió de nada' si no se ve en todos los contextos aún."
          },
          {
            "q": "Comparas el camino de dos hijos/as con perfiles distintos dentro de la misma familia.",
            "good": "Reconoces que cada camino tiene su propio ritmo y forma, sin jerarquizarlos.",
            "bad": "Sientes que uno de los caminos 'va peor' solo por ser diferente."
          },
          {
            "q": "Un viaje familiar se complica por una crisis inesperada de tu hijo/a.",
            "good": "Ajustas el plan sin que arruine tu confianza en los avances logrados hasta ahora.",
            "bad": "Sientes que el viaje 'confirma' que nunca podrán salir tranquilos."
          },
          {
            "q": "Llega un nuevo hermano/a a la familia y el proceso de adaptación se complejiza.",
            "good": "Reconoces que ese ajuste llevará tiempo, como otros ajustes anteriores.",
            "bad": "Sientes que la llegada del nuevo hermano/a arruinará todo el progreso anterior."
          },
          {
            "q": "Dos profesionales distintos te dan opiniones contradictorias sobre el proceso.",
            "good": "Confías en tu propio criterio, informado por la experiencia acumulada.",
            "bad": "Sientes una desesperanza total al no tener una respuesta única y clara."
          },
          {
            "q": "Iniciar tu propio proceso terapéutico te ayuda a ver tu rol con más perspectiva.",
            "good": "Reconoces ese trabajo personal como parte activa de tu resiliencia.",
            "bad": "Sientes que necesitar ese apoyo propio es una señal de debilidad."
          },
          {
            "q": "Revisas cómo se comunicaba tu hijo/a hace un par de años comparado con hoy.",
            "good": "Reconoces el avance real, aunque el camino no haya sido lineal.",
            "bad": "Solo notas lo que aún falta, sin reconocer el avance ya logrado."
          },
          {
            "q": "El progreso se estanca después de un periodo de avances notorios.",
            "good": "Entiendes que los estancamientos son parte normal del proceso, no un retroceso real.",
            "bad": "Sientes pánico pensando que el progreso se detuvo para siempre."
          },
          {
            "q": "Se acerca el paso de primaria a secundaria y te preocupa cómo lo vivirá tu hijo/a.",
            "good": "Confías en la capacidad de adaptación mostrada en transiciones anteriores.",
            "bad": "Anticipas un fracaso seguro sin ninguna base concreta para creerlo."
          },
          {
            "q": "Tu hijo/a enfrenta miedo antes de un procedimiento médico necesario.",
            "good": "Sostienes la calma confiando en que podrán atravesarlo juntos como antes.",
            "bad": "Te desesperas anticipadamente, transmitiendo ese miedo a tu hijo/a."
          },
          {
            "q": "Te rechazan una solicitud de ayuda económica para terapias de tu hijo/a.",
            "good": "Buscas otras vías de apoyo sin perder de vista el objetivo a largo plazo.",
            "bad": "Sientes que ese rechazo significa que nunca podrán costear el proceso necesario."
          },
          {
            "q": "Un hijo/a de un conocido alcanza visiblemente un logro que el tuyo aún no alcanza.",
            "good": "Reconoces que los caminos son distintos, sin que eso reste valor al tuyo.",
            "bad": "Sientes que eso confirma que tu hijo/a 'se está quedando atrás'."
          },
          {
            "q": "Notas explícitamente el patrón de 'dos pasos adelante, uno atrás' en el proceso.",
            "good": "Nombras ese patrón como parte esperable del progreso, no como un fracaso.",
            "bad": "Cada paso atrás te hace sentir que todo el proceso se derrumba."
          },
          {
            "q": "Dudas de tu propio método de crianza tras leer un debate acalorado en internet.",
            "good": "Contrastas esa opinión con tu propia experiencia acumulada antes de cambiar algo.",
            "bad": "Cambias de método bruscamente solo por la presión de una discusión online."
          },
          {
            "q": "Sientes ganas de abandonar una nueva estrategia después de que fallara una sola vez.",
            "good": "Le das más tiempo antes de descartarla definitivamente.",
            "bad": "La abandonas de inmediato tras el primer intento fallido."
          },
          {
            "q": "Llega el aniversario de varios años sosteniendo el mismo esfuerzo constante.",
            "good": "Te detienes a reconocer la constancia como un logro en sí mismo.",
            "bad": "Minimizas ese esfuerzo sostenido porque 'aún falta mucho por lograr'."
          },
          {
            "q": "Revisas fotos o un diario de los primeros días del proceso con tu hijo/a.",
            "good": "Usas esas fotos para reconocer el camino recorrido con perspectiva real.",
            "bad": "Solo sientes tristeza por lo difícil que fue, sin ver el crecimiento logrado."
          },
          {
            "q": "Las necesidades de tu hijo/a cambian de nuevo al entrar en la pubertad.",
            "good": "Confías en tu capacidad de adaptarte, como lo has hecho en etapas anteriores.",
            "bad": "Sientes que nunca terminarás de 'resolver' las necesidades de tu hijo/a."
          },
          {
            "q": "Mientras más aprendes sobre neurodivergencia, más ajustas tu visión del futuro.",
            "good": "Ves ese ajuste continuo como parte sana del proceso, no como un error pasado.",
            "bad": "Te culpas por no haber sabido antes lo que sabes ahora."
          },
          {
            "q": "Un informe escolar poco útil o genérico te genera dudas sobre el proceso.",
            "good": "Contrastas ese informe con la evidencia que sí conoces de cerca.",
            "bad": "Dejas que un informe puntual defina tu percepción de todo el proceso."
          },
          {
            "q": "Enfrentan visitas médicas repetidas que se sienten agotadoras en el tiempo.",
            "good": "Reconoces el desgaste sin que eso signifique que el proceso no vale la pena.",
            "bad": "Sientes que cada visita confirma que 'todo va cada vez peor'."
          },
          {
            "q": "Notas avances lentos pero reales en las habilidades sociales de tu hijo/a.",
            "good": "Confías en el progreso incremental, aunque sea gradual y no siempre visible.",
            "bad": "Descartas el avance por no ser tan rápido como esperabas."
          },
          {
            "q": "Un comentario familiar en una reunión navideña juzga las diferencias de tu hijo/a.",
            "good": "Sostienes tu propia perspectiva construida con la experiencia real vivida.",
            "bad": "Dejas que ese comentario puntual erosione tu confianza en el proceso."
          },
          {
            "q": "Tu hijo/a tiene un colapso público en un evento grande e importante.",
            "good": "Recuerdas que un evento puntual no borra todo el progreso logrado hasta ahora.",
            "bad": "Sientes que ese colapso arruina la percepción de todo el proceso."
          },
          {
            "q": "Un plan que diseñaste con cuidado no funciona como esperabas.",
            "good": "Lo tomas como información útil para ajustar, no como un fracaso definitivo.",
            "bad": "Sientes que fallar en el plan significa que fallaste como padre/madre."
          },
          {
            "q": "Practicas activamente la gratitud como forma de sostener tu propia resiliencia.",
            "good": "Reconoces esa práctica como una herramienta válida y la sostienes en el tiempo.",
            "bad": "Descartas la gratitud como 'algo superficial que no cambia nada real'."
          },
          {
            "q": "Sientes cansancio pero decides seguir mostrándote presente para tu hijo/a.",
            "good": "Reconoces que seguir mostrándote presente, aun cansado/a, es parte de la resiliencia.",
            "bad": "Sientes que el cansancio de hoy invalida todo tu esfuerzo anterior."
          },
          {
            "q": "Un profesional con quien llevaban tiempo trabajando se jubila o cambia de rol.",
            "good": "Confías en que el nuevo profesional podrá construir sobre lo ya avanzado.",
            "bad": "Sientes que deben 'empezar todo el proceso de cero' con el cambio."
          },
          {
            "q": "Llevan meses en lista de espera para acceder a un servicio necesario.",
            "good": "Sostienes la esperanza mientras buscas alternativas temporales disponibles.",
            "bad": "Sientes que la espera significa que el apoyo nunca llegará."
          },
          {
            "q": "Confías en tu propio criterio por sobre un consejo bien intencionado pero no informado.",
            "good": "Sostienes tu decisión basada en el conocimiento real de tu hijo/a.",
            "bad": "Dudas de tu criterio solo por la insistencia de quien te aconseja."
          },
          {
            "q": "Atraviesan una disputa larga y desgastante por servicios de apoyo escolar (PIE, IEP).",
            "good": "Reconoces el desgaste de la disputa sin que eso defina el valor del esfuerzo.",
            "bad": "Sientes que la dificultad del proceso significa que no vale la pena seguir luchando."
          },
          {
            "q": "Termina un año particularmente difícil para toda la familia.",
            "good": "Reconoces el cierre del año difícil como una etapa que también puede quedar atrás.",
            "bad": "Sientes que ese año difícil predice cómo serán todos los años siguientes."
          },
          {
            "q": "Reflexionas sobre una fortaleza inesperada que descubriste en ti mismo/a durante el proceso.",
            "good": "Reconoces esa fortaleza como parte real de tu crecimiento personal.",
            "bad": "Minimizas esa fortaleza asumiendo que 'cualquiera haría lo mismo'."
          },
          {
            "q": "Notas que ya no te alteras tanto ante situaciones que antes te desbordaban.",
            "good": "Reconoces ese cambio como evidencia real de tu propio crecimiento.",
            "bad": "No notas ese cambio, enfocándote solo en lo que aún cuesta."
          },
          {
            "q": "Un familiar pregunta si 'ya se solucionó' la situación de tu hijo/a.",
            "good": "Explicas con calma que el proceso no es lineal ni tiene un punto final fijo.",
            "bad": "Sientes frustración por no tener una respuesta definitiva que dar."
          },
          {
            "q": "Sientes que debes reconstruir la confianza en un enfoque después de un tropiezo.",
            "good": "Le das tiempo al enfoque antes de juzgarlo completamente por un tropiezo puntual.",
            "bad": "Descartas el enfoque completo tras el primer tropiezo notorio."
          },
          {
            "q": "Revisas viejas metas terapéuticas y notas cuántas ya se cumplieron con el tiempo.",
            "good": "Te permites reconocer ese progreso acumulado con orgullo genuino.",
            "bad": "Solo te enfocas en las metas que aún faltan por cumplir."
          },
          {
            "q": "Sientes que necesitas ajustar tu propia definición de lo que es 'un buen día'.",
            "good": "Redefines esa medida según el bienestar real vivido, no según un estándar externo.",
            "bad": "Sigues midiendo los días con una vara que no encaja con tu realidad actual."
          },
          {
            "q": "Un pequeño gesto de tu hijo/a te recuerda por qué sostienes este esfuerzo.",
            "good": "Te permites emocionarte y nutrir tu resiliencia con ese recuerdo.",
            "bad": "Minimizas el gesto asumiendo que 'no cambia nada de lo difícil'."
          },
          {
            "q": "Te preguntas si vale la pena seguir invirtiendo tanto esfuerzo en el proceso.",
            "good": "Reconectas con el propósito profundo detrás de ese esfuerzo sostenido.",
            "bad": "Dejas que la duda puntual te haga considerar abandonar el proceso por completo."
          }
        ]
      },
      {
        "slug": "vision-largo-plazo",
        "nombre": "Mantener una Visión de Largo Plazo",
        "emoji": "🔭",
        "descripcion": "No juzgar el vínculo por un mal día; pensar en años, no en momentos.",
        "situaciones": [
          {
            "q": "Tuviste una mañana muy difícil con tu hijo/a antes de que ambos salieran.",
            "good": "Recuerdas que un mal momento no define la calidad de la relación completa.",
            "bad": "Sientes que 'todo el vínculo está mal' basándote en esa sola mañana."
          },
          {
            "q": "Un conflicto puntual te hace dudar de la relación con tu hijo/a.",
            "good": "Contextualizas ese conflicto dentro de la historia más amplia del vínculo.",
            "bad": "Generalizas ese conflicto puntual como si representara toda la relación."
          },
          {
            "q": "Sientes que hoy 'fallaste' como padre/madre en algún momento.",
            "good": "Reconoces ese momento como parte de un proceso mucho más largo y humano.",
            "bad": "Sientes que ese momento define tu valor completo como padre/madre."
          },
          {
            "q": "Comparas el vínculo actual con cómo imaginabas que sería la crianza.",
            "good": "Aceptas que el vínculo real, con sus propias formas, es igual de valioso.",
            "bad": "Sientes decepción constante por no cumplir la imagen que habías imaginado."
          },
          {
            "q": "Un año fue especialmente difícil en términos de crisis y conflictos.",
            "good": "Reconoces ese año como una etapa dentro de un proceso más largo, no el final del camino.",
            "bad": "Sientes que ese año difícil predice cómo será todo el futuro."
          },
          {
            "q": "Tu hijo/a atraviesa una etapa de mucha resistencia y oposición.",
            "good": "Recuerdas que las etapas cambian y que esta también es temporal.",
            "bad": "Asumes que esta etapa será permanente y pierdes la esperanza de cambio."
          },
          {
            "q": "Sientes que un mal día opaca los avances de todo un mes.",
            "good": "Revisas conscientemente los avances del mes para mantener perspectiva real.",
            "bad": "Dejas que el mal día borre completamente la memoria de los avances logrados."
          },
          {
            "q": "Un comentario externo cuestiona el vínculo que tienes con tu hijo/a.",
            "good": "Confías en tu propio conocimiento profundo de la relación construida en el tiempo.",
            "bad": "Dejas que un comentario externo puntual defina cómo percibes tu propio vínculo."
          },
          {
            "q": "Sientes que la adolescencia trae más distancia de la que esperabas.",
            "good": "Reconoces que la distancia propia de la etapa no borra el vínculo construido antes.",
            "bad": "Interpretas la distancia natural de la etapa como un fracaso del vínculo."
          },
          {
            "q": "Un mal momento familiar ocurre justo antes de una fecha importante.",
            "good": "Separas ese momento puntual de tu valoración general de la relación familiar.",
            "bad": "Dejas que ese momento arruine tu percepción de toda la fecha importante."
          },
          {
            "q": "Sientes nostalgia por etapas anteriores que parecían 'más fáciles'.",
            "good": "Reconoces que cada etapa trae sus propios desafíos y también sus propios regalos.",
            "bad": "Idealizas el pasado comparándolo negativamente con el presente real."
          },
          {
            "q": "Un terapeuta menciona que el proceso puede tomar años.",
            "good": "Aceptas el tiempo real necesario sin perder la motivación en el camino.",
            "bad": "Sientes desesperanza inmediata al escuchar que el proceso será largo."
          },
          {
            "q": "Notas que un patrón difícil se repite después de meses de mejora.",
            "good": "Entiendes que los patrones pueden reaparecer sin que eso borre el progreso logrado.",
            "bad": "Sientes que 'todo el progreso se perdió' ante la reaparición del patrón."
          },
          {
            "q": "Sientes que tu propio bienestar ha quedado en pausa por mucho tiempo.",
            "good": "Reconoces la necesidad de retomarlo, entendiendo que es parte de sostener el largo plazo.",
            "bad": "Aceptas indefinidamente esa pausa como si fuera un sacrificio permanente necesario."
          },
          {
            "q": "Un logro importante de tu hijo/a llega mucho después de lo esperado.",
            "good": "Valoras el logro en su propio tiempo, sin restarle importancia por la demora.",
            "bad": "Minimizas el logro por no haber llegado en el momento que esperabas."
          },
          {
            "q": "Sientes miedo de cómo será la relación con tu hijo/a en la adultez.",
            "good": "Reconoces que las acciones de hoy siembran ese vínculo futuro, paso a paso.",
            "bad": "Dejas que el miedo al futuro te paralice en las acciones concretas del presente."
          },
          {
            "q": "Un mal periodo te hace cuestionar si el enfoque relacional elegido es el correcto.",
            "good": "Revisas la evidencia acumulada en el tiempo, no solo el periodo difícil actual.",
            "bad": "Cambias de enfoque radicalmente basándote solo en un periodo puntual difícil."
          },
          {
            "q": "Sientes que necesitas ver resultados más rápido de los que están llegando.",
            "good": "Ajustas tu expectativa de tiempo, recordando que las relaciones se construyen gradualmente.",
            "bad": "Presionas para resultados inmediatos, generando más tensión en el vínculo."
          },
          {
            "q": "Un día particularmente conectado con tu hijo/a te da esperanza renovada.",
            "good": "Atesoras ese momento como evidencia real del vínculo que se sigue construyendo.",
            "bad": "Minimizas el momento positivo pensando que 'no cambia nada en el fondo'."
          },
          {
            "q": "Reflexionas sobre todo el camino recorrido hasta ahora con tu hijo/a.",
            "good": "Reconoces con honestidad tanto lo difícil como lo valioso del vínculo construido.",
            "bad": "Solo recuerdas las dificultades, sin reconocer el vínculo genuino construido en el tiempo."
          },
          {
            "q": "Tuviste una discusión fuerte con tu hijo/a justo antes de despedirse por el día.",
            "good": "Confías en que esa despedida no define el vínculo construido en años.",
            "bad": "Sientes que ese momento 'quedará grabado para siempre' en la relación."
          },
          {
            "q": "Piensas en la independencia futura de tu hijo/a y te llena de ansiedad hoy.",
            "good": "Traes la mirada al presente, reconociendo que cada paso de hoy construye ese futuro.",
            "bad": "Dejas que la ansiedad por el futuro lejano te paralice en el presente."
          },
          {
            "q": "Te preocupa cómo será la relación entre hermanos cuando sean adultos.",
            "good": "Confías en que el vínculo se sigue construyendo con cada interacción actual.",
            "bad": "Das por sentado un futuro distante negativo sin ninguna base real hoy."
          },
          {
            "q": "Piensas en quién cuidará de tu hijo/a cuando tú ya no puedas hacerlo.",
            "good": "Canalizas esa preocupación en pasos concretos de planificación a largo plazo.",
            "bad": "Dejas que ese pensamiento te paralice de ansiedad en el día a día actual."
          },
          {
            "q": "Tu hijo/a cumple una edad significativa (10, 13, 18 años) y reflexionas sobre el camino.",
            "good": "Reconoces con perspectiva tanto lo difícil como lo valioso de esos años.",
            "bad": "Solo recuerdas lo difícil, sin espacio para lo construido en el camino."
          },
          {
            "q": "Comparas una foto reciente con una de hace varios años.",
            "good": "Reconoces el crecimiento y los cambios reales, aunque no siempre visibles día a día.",
            "bad": "Solo notas lo que sigue igual, ignorando el crecimiento evidente en las fotos."
          },
          {
            "q": "Te das cuenta de que un miedo antiguo que tenías nunca se hizo realidad.",
            "good": "Usas esa evidencia para confiar más en el proceso a largo plazo.",
            "bad": "Ignoras esa evidencia y sigues anticipando el próximo miedo con la misma intensidad."
          },
          {
            "q": "Un familiar te pregunta con curiosidad genuina cómo ves el futuro a largo plazo.",
            "good": "Compartes una visión realista, con esperanza y también con incertidumbre honesta.",
            "bad": "Respondes con un optimismo forzado que no refleja tu experiencia real."
          },
          {
            "q": "Te preocupa cómo serán las futuras relaciones románticas de tu hijo/a.",
            "good": "Reconoces que esa etapa llegará a su tiempo, sin necesidad de resolverla hoy.",
            "bad": "Te anticipas con ansiedad a escenarios que aún no existen."
          },
          {
            "q": "Piensas en qué recordará tu hijo/a de ti cuando sea adulto/a.",
            "good": "Te enfocas en construir ese recuerdo con las acciones concretas de hoy.",
            "bad": "Te preocupas por el legado futuro sin conectar con las acciones del presente."
          },
          {
            "q": "La etapa de la adolescencia pone a prueba tu paciencia con la visión de largo plazo.",
            "good": "Recuerdas que esta etapa, como otras, también es transitoria.",
            "bad": "Sientes que esta etapa difícil definirá el resto de la relación futura."
          },
          {
            "q": "Empiezan a planear qué pasará después de que tu hijo/a termine el colegio.",
            "good": "Construyen ese plan con calma, paso a paso, sin urgencia desproporcionada.",
            "bad": "Sientes pánico anticipado por decisiones que aún no son urgentes."
          },
          {
            "q": "La planificación financiera para el futuro de tu hijo/a te genera estrés hoy.",
            "good": "Divides esa planificación en pasos manejables en el tiempo.",
            "bad": "Dejas que el estrés por el futuro financiero opaque tu presente actual."
          },
          {
            "q": "Recuerdas con cariño un año que en su momento sentiste como muy difícil.",
            "good": "Reconoces que la perspectiva del tiempo cambia cómo ves los momentos duros.",
            "bad": "Sigues viendo ese año solo como una pérdida, sin ninguna relectura posible."
          },
          {
            "q": "Te preguntas, años después, si la intervención temprana realmente valió la pena.",
            "good": "Revisas la evidencia acumulada en el tiempo para responder con calma.",
            "bad": "Dudas de todo el esfuerzo pasado basándote solo en un mal momento actual."
          },
          {
            "q": "Revisas notas antiguas de terapia y ves cuánto ha cambiado la situación.",
            "good": "Reconoces el camino recorrido con una mirada de conjunto, no solo puntual.",
            "bad": "Solo te fijas en lo que aún no se ha resuelto, ignorando el camino avanzado."
          },
          {
            "q": "Te preocupan los cambios sociales futuros que podrían afectar a tu hijo/a.",
            "good": "Te enfocas en darle herramientas hoy que le sirvan ante cualquier futuro.",
            "bad": "Te paralizas anticipando escenarios sociales que no puedes controlar hoy."
          },
          {
            "q": "Notas que envejeces mientras tu hijo/a crece, y eso te genera reflexión.",
            "good": "Aceptas ese paso del tiempo como parte natural del vínculo que construyen juntos.",
            "bad": "Sientes angustia desproporcionada por el paso del tiempo en sí mismo."
          },
          {
            "q": "Cambian una tradición familiar para adaptarla a las necesidades de tu hijo/a.",
            "good": "Sostienes la nueva tradición viéndola como parte de un vínculo que evoluciona.",
            "bad": "Sientes duelo permanente por la tradición anterior sin aceptar la nueva forma."
          },
          {
            "q": "Asistes a la graduación de tu hijo/a y te invade la emoción del camino recorrido.",
            "good": "Te permites sentir plenamente esa emoción como parte del proceso completo.",
            "bad": "Minimizas el momento pensando solo en lo que falta después."
          },
          {
            "q": "Planificas la estructura de las vacaciones de verano con una mirada de largo plazo.",
            "good": "Balanceas descanso y continuidad de rutinas pensando en el bienestar sostenido.",
            "bad": "Improvisas todo sin ninguna mirada más allá del verano inmediato."
          },
          {
            "q": "Piensas en cómo será la relación entre tus hijos/as cuando tú ya no estés.",
            "good": "Siembras hoy vínculos y hábitos que sostengan esa relación futura.",
            "bad": "Te preocupas por ese futuro lejano sin actuar en el presente para nutrirlo."
          },
          {
            "q": "La muerte de un familiar mayor te hace reflexionar sobre el linaje familiar.",
            "good": "Usas esa reflexión para ver tu rol actual con una perspectiva más amplia.",
            "bad": "Dejas que ese evento te sumerja solo en pesimismo sobre el futuro familiar."
          },
          {
            "q": "Alguien te hace un cumplido inesperado sobre cuánto ha crecido tu hijo/a con los años.",
            "good": "Recibes ese comentario como evidencia real del camino recorrido juntos.",
            "bad": "Descartas el cumplido pensando que 'no refleja lo difícil que sigue siendo'."
          },
          {
            "q": "Dudas si una decisión importante (colegio, tratamiento) fue la correcta, viéndola ahora.",
            "good": "Evalúas esa decisión con la información y el contexto que tenías en su momento.",
            "bad": "Juzgas esa decisión pasada solo con lo que sabes hoy, castigándote por ello."
          },
          {
            "q": "Revisas el libro de hitos de bebé y notas cuánto se alejó del camino esperado.",
            "good": "Reconoces que el camino real, distinto al esperado, tiene igual valor.",
            "bad": "Sientes tristeza comparando el camino real con el que habías imaginado."
          },
          {
            "q": "Ves a tu hijo/a enfrentar con calma algo que antes le generaba mucho miedo.",
            "good": "Reconoces ese cambio como evidencia concreta de crecimiento en el tiempo.",
            "bad": "Minimizas el cambio pensando que 'fue solo suerte de ese día'."
          },
          {
            "q": "La tensión de la crianza afecta temporalmente tu relación de pareja.",
            "good": "Confías en que, con trabajo consciente, la relación puede fortalecerse con el tiempo.",
            "bad": "Sientes que esa tensión puntual define el destino final de la relación."
          },
          {
            "q": "Piensas en cómo las fortalezas actuales de tu hijo/a podrían servirle en su vida adulta.",
            "good": "Nutres esas fortalezas hoy, viéndolas como semillas de su futuro.",
            "bad": "Subestimas esas fortalezas porque 'no son las convencionales para tener éxito'."
          },
          {
            "q": "Te preocupa tu propia capacidad de soltar a tu hijo/a cuando llegue el momento.",
            "good": "Reconoces esa preocupación y trabajas gradualmente en fomentar su autonomía.",
            "bad": "Te aferras al control actual evitando pensar en el proceso de soltar."
          },
          {
            "q": "Tu hijo/a expresa un interés futuro por una carrera o camino poco convencional.",
            "good": "Apoyas ese interés viéndolo dentro de una visión amplia de una vida plena.",
            "bad": "Minimizas ese interés porque no encaja con tu propia idea de éxito futuro."
          },
          {
            "q": "En una reunión familiar comparan el camino de varios primos/as de edades similares.",
            "good": "Sostienes tu propia visión del camino de tu hijo/a, sin medirlo por el de otros.",
            "bad": "Sales de la reunión sintiendo que tu hijo/a 'va atrasado' frente a sus primos."
          },
          {
            "q": "Recibes una libreta de calificaciones que no refleja el esfuerzo real de tu hijo/a.",
            "good": "La contextualizas como un solo dato dentro de un camino mucho más amplio.",
            "bad": "Dejas que esa libreta puntual defina tu percepción general de su capacidad."
          },
          {
            "q": "Tu hijo/a pierde una amistad importante en una etapa particular.",
            "good": "La ves como un capítulo dentro de una historia social más larga y cambiante.",
            "bad": "Sientes que esa pérdida definirá para siempre su vida social futura."
          },
          {
            "q": "Revisas el 'sueño' que tenías sobre la crianza antes de que naciera tu hijo/a.",
            "good": "Reconoces que el camino real, aunque distinto, tiene su propio valor genuino.",
            "bad": "Sientes duelo permanente por el sueño original sin aceptar el camino real."
          },
          {
            "q": "Ves a tu hijo/a manejar una decepción con más calma que hace unos años.",
            "good": "Reconoces ese cambio como evidencia de un crecimiento emocional real.",
            "bad": "No notas el cambio, enfocándote solo en la decepción puntual actual."
          },
          {
            "q": "Reaparece una conducta antigua que creías ya superada.",
            "good": "Confías en que reaparecer no borra el crecimiento logrado en el tiempo.",
            "bad": "Sientes que todo el progreso anterior desaparece con esa reaparición puntual."
          },
          {
            "q": "Piensas en la vida completa de tu hijo/a, más allá de los años escolares actuales.",
            "good": "Amplías tu visión considerando etapas futuras que aún no has vivido con él/ella.",
            "bad": "Reduces todo tu enfoque solo al rendimiento escolar del momento actual."
          },
          {
            "q": "Reflexionas sobre cuánto has crecido tú mismo/a como padre/madre en estos años.",
            "good": "Reconoces ese crecimiento propio como parte del camino recorrido juntos.",
            "bad": "Solo evalúas el crecimiento de tu hijo/a, sin reconocer el tuyo propio."
          },
          {
            "q": "Recuerdas tus propios miedos del día en que recibieron el diagnóstico de tu hijo/a.",
            "good": "Contrastas esos miedos iniciales con la realidad vivida después, con perspectiva.",
            "bad": "Sigues viviendo con la misma intensidad de miedo de aquel primer día."
          },
          {
            "q": "Un profesional predice ciertas limitaciones futuras para tu hijo/a.",
            "good": "Escuchas esa información sin cerrar posibilidades que el tiempo puede abrir.",
            "bad": "Aceptas esa predicción como un destino fijo e inevitable."
          },
          {
            "q": "Notas que estás repitiendo, sin querer, patrones de tu propia crianza de origen.",
            "good": "Reconoces el patrón y trabajas conscientemente por cambiarlo hacia adelante.",
            "bad": "Aceptas el patrón como algo inevitable que se repetirá siempre igual."
          },
          {
            "q": "Llegan las mismas fechas festivas de siempre y comparas cómo las viven ahora versus antes.",
            "good": "Reconoces los cambios y crecimientos reales entre una fecha y otra.",
            "bad": "Solo notas lo que 'ya no es como antes', sin ver lo que sí ha crecido."
          },
          {
            "q": "Piensas en cómo el apoyo de hoy construye la independencia de mañana.",
            "good": "Sostienes el apoyo actual con la confianza de que rinde frutos a largo plazo.",
            "bad": "Sientes que apoyar hoy es 'sobreproteger' y retrasar su independencia futura."
          },
          {
            "q": "Tu hijo/a rechaza tu ayuda de forma típica de su edad o etapa.",
            "good": "Reconoces ese rechazo como parte esperable del desarrollo hacia la autonomía.",
            "bad": "Sientes que ese rechazo puntual amenaza el vínculo construido en el tiempo."
          },
          {
            "q": "Te preguntas cómo quieres que sea la relación con tu hijo/a dentro de diez años.",
            "good": "Usas esa visión para guiar decisiones concretas en el presente.",
            "bad": "Dejas esa reflexión sin ninguna conexión con las acciones de hoy."
          },
          {
            "q": "Lees un artículo alarmante sobre resultados a largo plazo para perfiles como el de tu hijo/a.",
            "good": "Contrastas ese artículo general con la realidad concreta y particular de tu hijo/a.",
            "bad": "Adoptas esa predicción general como si aplicara automáticamente a tu hijo/a."
          },
          {
            "q": "Una habilidad de tu hijo/a se desarrolla mucho más lento de lo esperado.",
            "good": "Sostienes la paciencia recordando que el ritmo no define el resultado final.",
            "bad": "Sientes urgencia y desesperanza por la lentitud del desarrollo de esa habilidad."
          },
          {
            "q": "Asisten a una reunión de exalumnos o graduación de una terapia sostenida por años.",
            "good": "Reflexionas sobre el camino recorrido con una mirada de conjunto agradecida.",
            "bad": "Solo piensas en lo que aún falta, sin espacio para reconocer lo ya logrado."
          },
          {
            "q": "Debates internamente entre priorizar tiempo de calidad o cantidad de tiempo con tu hijo/a.",
            "good": "Reconoces que ambos aportan al vínculo a largo plazo, sin exigirte lo imposible.",
            "bad": "Te culpas constantemente por no poder ofrecer más cantidad de tiempo."
          },
          {
            "q": "Reflexionas sobre qué significa realmente 'estar bien' para tu hijo/a en el futuro.",
            "good": "Construyes esa definición según su propio bienestar, no un estándar externo genérico.",
            "bad": "Adoptas una definición externa de éxito que no refleja quién es tu hijo/a."
          },
          {
            "q": "Un hijo/a de un conocido alcanza un hito importante antes que el tuyo.",
            "good": "Recuerdas que cada camino llega a su propio destino en su propio tiempo.",
            "bad": "Sientes que ese hito ajeno confirma un atraso permanente en tu hijo/a."
          },
          {
            "q": "Notas que tu propia red de apoyo ha cambiado mucho a lo largo de los años.",
            "good": "Reconoces esos cambios como parte natural de un proceso largo y evolutivo.",
            "bad": "Sientes nostalgia paralizante por el apoyo que tenías antes y ya no tienes."
          },
          {
            "q": "Revisas un plan o libro de crianza antiguo que ya no aplica del todo hoy.",
            "good": "Ajustas ese plan reconociendo que el camino real cambió con el tiempo.",
            "bad": "Te aferras al plan original sintiendo que desviarte de él es un fracaso."
          },
          {
            "q": "Piensas en cómo será la relación entre tus hijos/as cuando ambos sean adultos.",
            "good": "Nutres ese vínculo hoy con pequeñas acciones que lo sostengan a futuro.",
            "bad": "Asumes que ese vínculo futuro 'se dará solo' sin ninguna acción presente."
          },
          {
            "q": "La forma en que entiendes el diagnóstico de tu hijo/a ha cambiado mucho con los años.",
            "good": "Reconoces esa evolución en tu propia comprensión como parte del camino conjunto.",
            "bad": "Te culpas por no haber entendido antes lo que entiendes ahora."
          },
          {
            "q": "Un día particularmente difícil ocurre justo antes de una fecha que esperabas disfrutar.",
            "good": "Separas ese momento puntual del significado más amplio de la fecha importante.",
            "bad": "Dejas que el mal momento arruine por completo tu percepción de la fecha."
          },
          {
            "q": "Sientes que necesitas más evidencia de que el vínculo se está construyendo bien.",
            "good": "Repasas conscientemente ejemplos concretos acumulados en el tiempo.",
            "bad": "Ignoras la evidencia ya existente, exigiendo una prueba definitiva imposible."
          },
          {
            "q": "Reflexionas sobre cómo ha cambiado tu propia definición de éxito desde que eres padre/madre.",
            "good": "Reconoces que esa nueva definición es igual de válida que la anterior.",
            "bad": "Sientes que tu definición anterior de éxito era la única correcta."
          },
          {
            "q": "Piensas en todo lo que aún no saben sobre cómo será el futuro de tu hijo/a.",
            "good": "Aceptas esa incertidumbre como parte del camino, sosteniendo la confianza en el proceso.",
            "bad": "Dejas que la incertidumbre total te impida disfrutar y actuar en el presente."
          }
        ]
      }
    ]
  }
];

const EXPANSION_COMPRENDER = [
  {
    contexto: "En una mañana con poco tiempo antes de salir",
    matiz: "cuando tu hijo/a ya muestra señales de saturación",
    goodPrefix: "Bajas la demanda inmediata y ",
    badPrefix: "Aceleras la situación y "
  },
  {
    contexto: "Después de una jornada escolar exigente",
    matiz: "cuando la familia espera que participe como siempre",
    goodPrefix: "Consideras la carga acumulada y ",
    badPrefix: "Ignoras el cansancio acumulado y "
  },
  {
    contexto: "En una visita familiar o social",
    matiz: "cuando otras personas opinan sobre cómo debería comportarse",
    goodPrefix: "Proteges su necesidad real y ",
    badPrefix: "Priorizas la expectativa de los demás y "
  },
  {
    contexto: "Durante un cambio inesperado de rutina",
    matiz: "cuando necesita más previsibilidad para regularse",
    goodPrefix: "Haces explícito el cambio y ",
    badPrefix: "Tratas el cambio como algo menor y "
  }
];

function minusculaInicial(texto) {
  return texto.charAt(0).toLowerCase() + texto.slice(1);
}

function expandirHasta100(situaciones) {
  if (situaciones.length >= 100) return situaciones.slice(0, 100);

  const originales = situaciones.map(s => ({ ...s }));
  const expandidas = [...originales];

  for (const escenario of EXPANSION_COMPRENDER) {
    for (const base of originales) {
      if (expandidas.length >= 100) return expandidas;

      expandidas.push({
        q: `${escenario.contexto}, ${escenario.matiz}: ${minusculaInicial(base.q)}`,
        good: `${escenario.goodPrefix}${minusculaInicial(base.good)}`,
        bad: `${escenario.badPrefix}${minusculaInicial(base.bad)}`
      });
    }
  }

  return expandidas;
}

const dominioComprender = DOMINIOS.find(dominio => dominio.slug === "comprender");
if (dominioComprender) {
  for (const habilidad of dominioComprender.habilidades) {
    habilidad.situaciones = expandirHasta100(habilidad.situaciones);
  }
}

module.exports = { DOMINIOS };
