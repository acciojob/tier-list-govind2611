document.addEventListener('DOMContentLoaded', function () {
    const items = document.querySelectorAll('.item');
    const dropZones = document.querySelectorAll('.drop-zone');

    items.forEach(item => {
        item.addEventListener('dragstart', handleDragStart);
        item.addEventListener('dblclick', handleDoubleClick);
    });

    dropZones.forEach(zone => {
        zone.addEventListener('dragover', handleDragOver);
        zone.addEventListener('drop', handleDrop);
    });

    function handleDragStart(event) {
        event.dataTransfer.setData('text/plain', event.target.id);
    }

    function handleDragOver(event) {
        event.preventDefault();
    }

    function handleDrop(event) {
        event.preventDefault();
        const itemId = event.dataTransfer.getData('text/plain');
        const item = document.getElementById(itemId);

        if (!item) return;

        // Check if the item is being moved to a different drop zone
        if (!event.target.contains(item)) {
            event.target.appendChild(item);
        }
    }

    function handleDoubleClick(event) {
        const itemId = event.target.id;
        const unrankedDropZone = document.getElementById('unranked-drop-zone');
        const item = document.getElementById(itemId);

        if (unrankedDropZone.contains(item)) return;

        unrankedDropZone.appendChild(item);
    }
});
