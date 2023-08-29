document.addEventListener("DOMContentLoaded", function () {
    const itemInput = document.getElementById("item");
    const addButton = document.getElementById("agregar");
    const contenedor = document.getElementById("contenedor");
  
    addButton.addEventListener("click", function () {
      const nuevoItem = itemInput.value.trim();
      if (nuevoItem !== "") {
        agregarElemento(nuevoItem);
        guardarEnLocalStorage(nuevoItem);
        itemInput.value = "";
      }
    });
  
    function agregarElemento(item) {
      const li = document.createElement("li");
      li.className = "list-group-item";
      li.textContent = item;
      contenedor.appendChild(li);
    }
  
    function guardarEnLocalStorage(item) {
      let items = localStorage.getItem("items");
      if (items === null) {
        items = [];
      } else {
        items = JSON.parse(items);
      }
  
      items.push(item);
      localStorage.setItem("items", JSON.stringify(items));
    }
  
    function cargarDesdeLocalStorage() {
      const items = localStorage.getItem("items");
      if (items !== null) {
        const itemsArray = JSON.parse(items);
        itemsArray.forEach(function (item) {
          agregarElemento(item);
        });
      }
    }
  
    cargarDesdeLocalStorage();
  });

  document.addEventListener("DOMContentLoaded", function () {
    // ... (código anterior)
  
    const limpiarButton = document.getElementById("limpiar");
    
    limpiarButton.addEventListener("click", function () {
      contenedor.innerHTML = ""; // Limpiar la lista en la página
      localStorage.removeItem("items"); // Eliminar la lista del localStorage
    });
  });