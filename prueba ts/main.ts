import { Persona } from './persona';
import { Direccion } from './direccion';
import { Mail } from './mail';
import { Telefono } from './telefono';

const primeraResidenciaMaria = new Direccion(
  "Calle Maria 1",
  3,
  4,
  "B",
  28056,
  "Madrid",
  "Madrid"
)

const segundaResidenciaMaria = new Direccion(
  "Calle Maria 2",
  4,
  false,
  false,
  28085,
  "Valencia",
  "Valencia"
)

const mailMaria = new Mail(
  "personal",
  "maria@gmail.com"
)

const telefonoFijoMaria = new Telefono(
  "fijo",
  916435654
)

const telefonoMovilMaria = new Telefono(
  "movil",
  654893267
)

const datosMaria = new Persona(
  'María',
  'García Fernández',
  26,
  '50478907H',
  new Date(1997, 5, 11),
  'naranja',
  'mujer',
  [primeraResidenciaMaria, segundaResidenciaMaria],
  [mailMaria],
  [telefonoFijoMaria, telefonoMovilMaria],
  "En verano vive en su segunda residencia"
);

const primeraResidenciaAntonio = new Direccion(
  "Calle Antonio 1",
  29,
  1,
  "A",
  60578,
  "Valencia",
  "Valencia"
)

const segundaResidenciaAntonio = new Direccion(
  "Calle Antonio 2",
  9,
  6,
  "B",
  694256,
  "Gandía",
  "Valencia"
)

const mailPersonalAntonio = new Mail(
  "personal",
  "antonio@hotmail.com"
)

const mailTrabajoAntonio = new Mail(
  "personal",
  "Antonio78@gmail.com"
)

const telefonoFijoAntonio = new Telefono(
  "fijo",
  916554389
)

const telefonoMovilAntonioPersonal = new Telefono(
  "movil",
  689542688
)

const datosAntonio = new Persona(
  'Antonio',
  'González Gutiérrez',
  37,
  '50873490T',
  new Date(1986, 4, 20),
  'negro',
  'hombre',
  [primeraResidenciaAntonio, segundaResidenciaAntonio],
  [mailPersonalAntonio, mailTrabajoAntonio],
  [telefonoFijoAntonio, telefonoMovilAntonioPersonal],
  "En verano alquila su segunda residencia"
);

const primeraResidenciaJorge = new Direccion(
  "Calle Jorge 1",
  20,
  9,
  "C",
  69844,
  "Sevilla",
  "Sevilla"
)

const segundaResidenciaJorge = new Direccion(
  "Calle Jorge 2",
  4,
  4,
  "A",
  79056,
  "Córdoba",
  "Córdoba"
)

const mailPersonalJorge = new Mail(
  "personal",
  "Jorge@gmail.com"
)


const telefonoFijoJorge = new Telefono(
  "fijo",
  916552895
)

const telefonoMovilJorge = new Telefono(
  "movil",
  697437756
)

const datosJorge = new Persona(
  'Jorge',
  'Hernán Jiménez',
  58,
  '50762877R',
  new Date(1964, 8, 9),
  'azul',
  'hombre',
  [primeraResidenciaJorge, segundaResidenciaJorge],
  [mailPersonalJorge],
  [telefonoFijoJorge, telefonoMovilJorge],
  "Pasa los fines de semana en la segunda residencia"
);

console.log("Contactos antes del cambio:");
console.log(datosMaria);
console.log(datosAntonio);
console.log(datosJorge);

const agenda: Array<Persona> = new Array(datosMaria, datosAntonio, datosJorge);

const dniABuscar: string = "50478907H";

const personaAEditar: Persona = agenda.find(persona => persona.dni === dniABuscar) as Persona;

const nuevaDireccion = new Direccion(
  "Calle Fátima",
  96,
  1,
  "A",
  38076,
  "Bilbao",
  "Vizcaya"
)

const nuevoMail = new Mail(
  "trabajo",
  "reclutamiento.smart@gmail.com"
)

const nuevoTelefono = new Telefono(
  "fijo",
  915679634
)

personaAEditar.agregarNuevaDireccion(nuevaDireccion);
personaAEditar.agregarNuevoMail(nuevoMail);
personaAEditar.agregarNuevoTelefono(nuevoTelefono);

console.log("Contactos después del cambio:");
console.log(datosMaria);
console.log(datosAntonio);
console.log(datosJorge);
