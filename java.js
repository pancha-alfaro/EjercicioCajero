let contraseñaCorrecta, contraseña, nombre;

contraseñaCorrecta = "abcabc";


nombre = prompt("Ingrese su nombre");
contraseña = prompt("Ingrese su contraseña");
counter = 1;

if (contraseña == contraseñaCorrecta) {
  alert("Contraseña correcta! Bienvenido!");
  document.write("Tienes 100000000001 USD xik material")
}

while (contraseña != contraseñaCorrecta && counter < 3) {
    contraseña = prompt("Ingrese su contraseña");
    ++counter
}
if (counter == 3) {
    alert("Acceso denegado");
} 