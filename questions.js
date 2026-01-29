/**
 * Base de Datos del Oráculo Místico - 1000 Preguntas
 * Organizadas por categorías místicas
 */

const oracleData = [];

const categories = [
    { name: "Magnetismo Dorado", topics: ["Atracción", "Gravedad", "Llamada"] },
    { name: "Sincronía", topics: ["Vínculo", "Ritmo", "Coincidencia"] },
    { name: "Esencia", topics: ["Pureza", "Origen", "Verdad"] },
    { name: "Aura", topics: ["Brillo", "Energía", "Color"] },
    { name: "Intimidad", topics: ["Refugio", "Secreto", "Calor"] },
    { name: "Fuego", topics: ["Pasión", "Llama", "Ardor"] },
    { name: "Destino", topics: ["Hilos", "Camino", "Futuro"] },
    { name: "Deseo", topics: ["Anhelo", "Piel", "Sed"] },
    { name: "Alma", topics: ["Vuelo", "Profundidad", "Eco"] },
    { name: "Pasión", topics: ["Tormenta", "Entrega", "Impulso"] },
    { name: "Enigma", topics: ["Sombra", "Velo", "Acertijo"] },
    { name: "Alquimia", topics: ["Mezcla", "Oro", "Transformación"] },
    { name: "Misterio", topics: ["Oculto", "Noche", "Susurro"] },
    { name: "Conexión", topics: ["Puente", "Red", "Enlace"] },
    { name: "Sombras", topics: ["Deseo Oculto", "Silencio", "Penumbras"] },
    { name: "Eternidad", topics: ["Siempre", "Infinito", "Lazo"] },
    { name: "Vibración", topics: ["Frecuencia", "Resonancia", "Ondas"] },
    { name: "Fusión", topics: ["Eclipse", "Unión", "Mezcla Total"] },
    { name: "Hechizo", topics: ["Encanto", "Magia", "Amarre"] },
    { name: "Vínculo", topics: ["Nudo", "Raíz", "Pertenencia"] }
];

// Generador de contenido variado para alcanzar las 1000
const questionTemplates = [
    "Si pudieras {accion} en este momento, ¿qué {objeto} elegirías para {meta}?",
    "¿Qué sientes cuando {accion} y notas que mi {parte} te busca?",
    "Describe un momento donde {accion} te hizo pensar en {concepto}.",
    "Si el destino nos permitiera {accion} sin límites, ¿qué sería lo primero que harías?",
    "¿Cuál es el secreto más {adjetivo} que guardas sobre {concepto}?",
    "Si mi cuerpo fuera un mapa, ¿qué {lugar} elegirías para {accion} hoy?",
    "¿Qué es lo que más te {emocion} de nuestra {concepto} en la oscuridad?",
    "Si el tiempo se detuviera mientras {accion}, ¿qué palabras me susurrarías?",
    "¿Cómo describirías el {sustantivo} que emana de nuestra {concepto}?",
    "Si pudieras capturar mi {parte} en un frasco, ¿cómo lo usarías para {accion}?"
];

const actions = ["tocar mi piel", "mirarme a los ojos", "susurrar mi nombre", "sentir mi respiración", "besarnos sin prisa", "perdernos en la noche", "recorrer mis manos", "soñar conmigo", "desnudarnos el alma", "ser uno solo"];
const objects = ["un beso", "una caricia", "un deseo", "un suspiro", "una mirada", "un secreto", "un fuego", "un lazo", "una sombra", "un brillo"];
const goals = ["encenderme", "conectarnos", "perder el control", "recordarme siempre", "elevar nuestra energía", "romper el hielo", "fundirnos", "entendernos mejor", "provocar un incendio", "sellar nuestro pacto"];
const concepts = ["nuestra conexión", "el deseo", "la pasión", "el futuro", "nuestro primer encuentro", "la complicidad", "el magnetismo", "lo prohibido", "lo místico", "la piel"];
const adjectives = ["oscuro", "intenso", "mágico", "dorado", "profundo", "ardiente", "eterno", "vulnerable", "misterioso", "puro"];

// Llenar la base de datos hasta 1000
for (let i = 0; i < 1000; i++) {
    const cat = categories[i % categories.length];
    const topic = cat.topics[i % cat.topics.length];
    const template = questionTemplates[i % questionTemplates.length];
    
    let question = template
        .replace("{accion}", actions[Math.floor(Math.random() * actions.length)])
        .replace("{objeto}", objects[Math.floor(Math.random() * objects.length)])
        .replace("{meta}", goals[Math.floor(Math.random() * goals.length)])
        .replace("{concepto}", concepts[Math.floor(Math.random() * concepts.length)])
        .replace("{adjetivo}", adjectives[Math.floor(Math.random() * adjectives.length)])
        .replace("{sustantivo}", objects[Math.floor(Math.random() * objects.length)])
        .replace("{lugar}", ["rincón", "espacio", "paraje", "camino", "secreto", "refugio"][Math.floor(Math.random() * 6)])
        .replace("{parte}", ["alma", "corazón", "mirada", "esencia", "cuello", "espalda"][Math.floor(Math.random() * 6)])
        .replace("{emocion}", ["atrae", "fascina", "excita", "conmueve", "intriga", "asusta"][Math.floor(Math.random() * 6)]);

    // Asegurar que las primeras 20 sean las que ya tenías (alta calidad manual)
    if (i < 20) {
        const manualQuestions = [
            { c: "Magnetismo Dorado", t: "Atracción Fatal", d: "Si pudieras detener el tiempo ahora mismo, ¿qué parte de mi cuerpo elegirías tocar primero?" },
            { c: "Sincronía", t: "El Vínculo", d: "Mírame fijamente a los ojos sin hablar. El primero que sonría debe confesar un deseo oculto." },
            { c: "Esencia", t: "Susurro Místico", d: "Acércate y susúrrame al oído algo que solo tú y yo sepamos, pero con voz de deseo." },
            { c: "Aura", t: "Conexión de Piel", d: "Dibuja un símbolo con tu dedo en mi espalda y deja que mi cuerpo adivine qué estás sintiendo." },
            { c: "Intimidad", t: "Confesión", d: "¿Cuál es esa fantasía que nunca te has atrevido a decirme en voz alta?" },
            { c: "Fuego", t: "Calor Cercano", d: "Si tuviéramos que quitarnos una prenda ahora mismo, ¿cuál elegirías tú para mí?" },
            { c: "Destino", t: "El Reencuentro", d: "Si nos conociéramos hoy por primera vez en un bar, ¿qué frase usarías para seducirme?" },
            { c: "Deseo", t: "Piel con Piel", d: "Cierra los ojos. Voy a darte un beso donde yo quiera, y tú tienes que describir lo que sientes en una palabra." },
            { c: "Alma", t: "Vulnerabilidad", d: "¿Qué es lo que más te gusta de la forma en que te miro cuando estamos a solas?" },
            { c: "Pasión", t: "Límite Cero", d: "Dime un lugar fuera de casa donde te gustaría que rompiéramos las reglas juntos." },
            { c: "Enigma", t: "Revelación Nocturna", d: "Si esta noche fuera la última que pasáramos juntos, ¿qué harías diferente a otras noches?" },
            { c: "Conexión", t: "Puente de Suspiros", d: "Describe con tres adjetivos lo que sentiste la primera vez que nos besamos de verdad." },
            { c: "Alquimia", t: "Transmutación", d: "Si pudieras cambiar un hábito mío por un deseo tuyo, ¿cuál sería?" },
            { c: "Sombras", t: "Deseo Oculto", d: "¿Qué es lo que más te atrae de mí cuando estoy distraído/a?" },
            { c: "Magnetismo", t: "Gravedad Cero", d: "Si estuviéramos en un lugar público, ¿cómo me demostrarías tu deseo sin que nadie se diera cuenta?" },
            { c: "Espejismo", t: "Reflejo del Alma", d: "Si pudieras entrar en mis sueños esta noche, ¿qué escena te gustaría protagonizar conmigo?" },
            { c: "Eternidad", t: "Lazo Infinito", d: "¿Qué promesa te gustaría que hiciéramos hoy para cumplirla en un año exacto?" },
            { c: "Vibración", t: "Eco de Piel", d: "Toca mis manos y dime qué temperatura sientes que tiene mi alma en este momento." },
            { c: "Misterio", t: "Cofre Cerrado", d: "¿Qué es lo primero que pensaste de mí cuando me viste por primera vez, pero nunca me dijiste?" },
            { c: "Fusión", t: "Eclipse de Amor", d: "Si pudieras elegir una banda sonora para nuestro próximo encuentro íntimo, ¿qué género sería?" }
        ];
        oracleData.push(manualQuestions[i]);
    } else {
        oracleData.push({ c: cat.name, t: topic, d: question });
    }
}
