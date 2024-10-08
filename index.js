// Sample menu data (Consider fetching this data from a server in a real-world scenario)
const menu = {
    Starters: ["Garlic Bread", "Bruschetta"],
    MainCourses: ["Margherita Pizza", "Spaghetti Carbonara"],
    Desserts: ["Tiramisu", "Cheesecake"]
};

// Function to display menu items by category
function displayMenuItems(menu) {
    // Get the menu container element from the HTML
    const menuContainer = document.getElementById('menu-container');

    // Loop through each category and its items in the menu object
    for (const category in menu) {
        // Create an element to represent the category
        const categoryElement = document.createElement('h3');
        categoryElement.textContent = category;

        // Append the category element to the menu container
        menuContainer.appendChild(categoryElement);

        // Create an element to represent a list of items
        const itemList = document.createElement('ul');

        // Loop through the items in the category and create list items
        menu[category].forEach(item => {
            // Create a list item element
            const listItem = document.createElement('li');
            listItem.textContent = item;

            // Attach a click event listener to the list item to add it to the order
            listItem.addEventListener('click', () => addToOrder(item));

            // Append the list item to the list of items
            itemList.appendChild(listItem);
        });

        // Append the list of items to the menu container
        menuContainer.appendChild(itemList);
    }
}

// Callback function for adding an item to the order
function addToOrder(itemName) {
    // Get the order items list and the order total element from the HTML
    const orderItemsList = document.getElementById('order-items');
    const orderTotalElement = document.getElementById('order-total');

    // Create a list item for the order
    const orderItem = document.createElement('li');
    
    // Set the text content to include the item name
    orderItem.textContent = itemName;

    // Create a delete button for removing the item
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.style.marginLeft = '10px';
    deleteButton.style.backgroundColor = 'blue';
    deleteButton.style.color = 'white';

    // Attach the delete functionality to the button
    deleteButton.addEventListener('click', () => {
        removeFromOrder(orderItem, 10); // Assuming each item costs R10
    });

    // Append the delete button to the order item
    orderItem.appendChild(deleteButton);

    // Append the list item to the order items list
    orderItemsList.appendChild(orderItem);

    // Calculate and update the total price (assuming each item costs R10 for simplicity)
    const currentTotal = parseFloat(orderTotalElement.textContent.replace('R', '')) || 0;
    const newTotal = currentTotal + 10;
    orderTotalElement.textContent = `R${newTotal.toFixed(2)}`;
}

// Callback function for removing an item from the order
function removeFromOrder(orderItem, itemCost) {
    const orderTotalElement = document.getElementById('order-total');

    // Remove the item from the order list
    orderItem.remove();

    // Update the total price
    const currentTotal = parseFloat(orderTotalElement.textContent.replace('R', '')) || 0;
    const newTotal = currentTotal - itemCost;
    orderTotalElement.textContent = `R${newTotal.toFixed(2)}`;
}

// Function to initialize the menu system
function initMenuSystem(menu) {
    // Call the function to display menu items
    displayMenuItems(menu);
}

// Start the menu system by calling the init function
initMenuSystem(menu);

