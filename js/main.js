
console.log(electrodomesticos);

//  ver los atributos de algunos de los elementos del array hago:
console.log(electrodomesticos[0].precio) // muestra el atributo precio del primer elemento del array
console.log(electrodomesticos[3].marca) // muestra el atributo marca del 4 elemento de array


function mostrarProducto() {
    let eleccion;
    //simulo un menú para un operador de un sistema que gestione la base de datos de productos de una empresa que comercializa electrodomesticos
    do {
      // Mostrar lista de productos
      console.log("Lista de productos:");
      for (const producto of electrodomesticos) {
        console.log(`${producto.id}. ${producto.producto}`);
      }
  
      // Solicitar la elección al usuario de un producto ya sea para dar de baja o modificar precio, cantidad, etc
      eleccion = prompt("Ingrese el número del producto que desea ver (0 para salir):");
      eleccion = parseInt(eleccion);
  
      // Verificar la elección del usuario
      if (eleccion >= 1 && eleccion <= electrodomesticos.length) {
        const productoElegido = electrodomesticos[eleccion - 1];
        console.log('\n');
        console.log("Información del producto:");
        console.log(`ID: ${productoElegido.id}`);
        console.log(`Producto: ${productoElegido.producto}`);
        console.log(`Marca: ${productoElegido.marca}`);
        console.log(`Precio: $${productoElegido.precio}`);
        console.log(`Stock: ${productoElegido.stock}`);
        console.log('\n');

      // Preguntar al usuario si desea eliminar o modificar el producto
      const opcion = prompt("¿Desea eliminar (E)l producto o (M)odificar algún atributo? (Presione cualquier otra tecla para continuar):");
      
      if (opcion.toUpperCase() === 'E') {
        // Eliminar el producto del array
        electrodomesticos.splice(eleccion - 1, 1);
        console.log("Producto eliminado exitosamente.");
      } else if (opcion.toUpperCase() === 'M') {
        // Modificar algún atributo del producto
        const atributo = prompt("Ingrese el nombre del atributo que desea modificar (producto, marca, precio, stock):");
        const nuevoValor = prompt(`Ingrese el nuevo valor para ${atributo}:`);
        productoElegido[atributo] = nuevoValor;
        console.log(`Atributo ${atributo} modificado exitosamente.`);

        // Mostrar el producto actualizado
        console.log('\nProducto actualizado:');
        console.log(`ID: ${productoElegido.id}`);
        console.log(`Producto: ${productoElegido.producto}`);
        console.log(`Marca: ${productoElegido.marca}`);
        console.log(`Precio: $${productoElegido.precio}`);
        console.log(`Stock: ${productoElegido.stock}`);

      }
      console.log('\n\n');
    } else if (eleccion !== 0) {
      console.log("Opción no válida. Por favor, ingrese un número válido.");
    }

  } while (eleccion !== 0);
}

// Llamar a la función para mostrar y modificar productos
mostrarProducto();
