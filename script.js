//your code here

  // Helper function to get the index of an element among its siblings
  function getIndex(element) {
    const parent = element.parentNode;
    const children = Array.from(parent.children);
    return children.indexOf(element);
  }

  let draggedItem = null;

  function allowDrop(event) {
    event.preventDefault();
  }

  function dragStart(event) {
    draggedItem = event.target;
    event.dataTransfer.setData('text', event.target.id);
  }

  function dragEnter(event) {
    event.preventDefault();
    const dropTarget = event.target;
    if (dropTarget.classList.contains('item')) {
      dropTarget.classList.add('selected');
    }
  }

  function dragLeave(event) {
    event.preventDefault();
    const dropTarget = event.target;
    if (dropTarget.classList.contains('item')) {
      dropTarget.classList.remove('selected');
    }
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

      // Reset the selected class
      dropTarget.classList.remove('selected');
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.item');

    // Add drag event listeners to each item
    items.forEach((item) => {
      item.addEventListener('dragstart', dragStart);
      item.addEventListener('dragenter', dragEnter);
      item.addEventListener('dragleave', dragLeave);
      item.addEventListener('dragover', allowDrop);
      item.addEventListener('drop', drop);
    });
  });
