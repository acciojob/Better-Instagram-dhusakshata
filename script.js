let draggedItem = null;

function allowDrop(event) {
  event.preventDefault();
}

function drag(event) {
  draggedItem = event.target;
  event.dataTransfer.setData('text', event.target.id);
}

function drop(event) {
  event.preventDefault();
  const data = event.dataTransfer.getData('text');
  const dropTarget = event.target;

  if (dropTarget.classList.contains('item')) {
    // Swap the background images of the dragged and dropped items
    const draggedBg = draggedItem.style.backgroundImage;
    draggedItem.style.backgroundImage = dropTarget.style.backgroundImage;
    dropTarget.style.backgroundImage = draggedBg;
  }
}
