const cells = document.querySelectorAll("td");

cells.forEach(cell => {
  cell.addEventListener("click", () => {
    // Remove seleção anterior
    cells.forEach(c => c.classList.remove("active"));

    // Marca célula atual
    cell.classList.add("active");

    // Armazena a seleção no localStorage
    localStorage.setItem("selectedCell", cell.cellIndex + "-" + cell.parentElement.rowIndex);     
  });
});
alert("Bem-vindo à página! Clique em uma célula para selecioná-la. Sua seleção será lembrada mesmo se você recarregar a página.");


// Restaura a seleção ao carregar a página
window.addEventListener("load", () => {
  const selectedCell = localStorage.getItem("selectedCell");
  if (selectedCell) {
    const [cellIndex, rowIndex] = selectedCell.split("-").map(Number);
    const table = document.querySelector("table");
    const cell = table.rows[rowIndex].cells[cellIndex];
    if (cell) {
      cell.classList.add("active");
    }
  }
});

