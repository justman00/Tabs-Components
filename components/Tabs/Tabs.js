class TabLink {
  constructor(element) {
    // Assign this.element to the passed in DOM element
    this.element = element;
    // Get the custom data attribute on the Link
    this.data = this.element.dataset.tab;
    // Using the custom data attribute get the associated Item element
    this.itemElement = document.querySelector(
      `.tabs-item[data-tab="${this.data}"]`
    );
    // console.log(this.itemElement);
    // Using the Item element, create a new instance of the TabItem class
    this.tabItem = new TabItem(this.itemElement);
    // Add a click event listener on this instance, calling the select method on click
    // console.log(this.tabItem.element);
    this.element.addEventListener("click", () => this.select());
  }

  deselect() {
    // Get all of the elements with the tabs-link class
    const links = document.querySelectorAll(".tabs-link");
    // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
    Array.from(links).forEach(link =>
      link.classList.remove("tabs-link-selected")
    );
  }

  select() {
    this.deselect();
    // Add a class named "tabs-link-selected" to this link
    this.element.classList.add("tabs-link-selected");
    // Call the select method on the item associated with this link
    console.log("works until now");
    this.tabItem.select();
  }
}

class TabItem {
  constructor(element) {
    // Assign this.element to the passed in element
    this.element = element;
  }

  deselect() {
    // Select all ".tabs-item" elements from the DOM
    const items = document.querySelectorAll(".tabs-item");
    // Remove the class "tabs-item-selected" from each element
    items.forEach(item => item.classList.remove("tabs-item-selected"));
  }

  select() {
    this.deselect();
    // Add a class named "tabs-item-selected" to this element
    this.element.classList.add("tabs-item-selected");
    // console.log("Im doing stuff");
  }
}

class Tabs {
  constructor() {
    this.links = Array.from(document.querySelectorAll(".tabs-link")).map(
      link => new TabLink(link)
    );
    // console.log(this.links);
    this.currentlySelected = this.links.filter(link =>
      link.element.classList.contains("tabs-link-selected")
    )[0];
    // console.log(this.currentlySelected);
  }
}

/* START HERE: 

- Select all classes named ".tabs-link" and assign that value to the links variable

- With your selection in place, now chain a .forEach() method onto the links variable to iterate over the DOM NodeList

- In your .forEach() method's callback function, return a new instance of TabLink and pass in each link as a parameter

*/
const start = new Tabs();
