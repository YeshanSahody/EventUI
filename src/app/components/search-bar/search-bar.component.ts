import { Component, Output, EventEmitter } from '@angular/core';
 
@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
  searchQuery: string = '';
  isClosed: boolean = true;
  isExpanded: boolean = false;
  isProfileDropdownOpen: boolean = false; // Add this line
  isNotificationOpen: boolean = false;
  hoverNotification: boolean = false; // Declare hoverNotification property
  hoverNotification2: boolean = false; // Declare hoverNotification2 property


  @Output() searchEvent = new EventEmitter<string>();
 
  search() {
    this.searchEvent.emit(this.searchQuery);
  }
 
  
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
 

  toggleNotification() {
    this.isNotificationOpen = !this.isNotificationOpen;
  }
  // Toggle Chatbox
  toggleChatbox() {
    this.isClosed = !this.isClosed;
  }
 
  onClose() {
    this.isClosed = true;
  }
 
  onClick() {
    this.isExpanded = !this.isExpanded;
  }
 
  // Toggle Profile Dropdown
  toggleProfileDropdown() {
    this.isProfileDropdownOpen = !this.isProfileDropdownOpen;
  }


  toggleSuggestions() {
    this.isExpanded = !this.isExpanded;
  }

  // Method to insert the selected suggestion into the chat message input field
  insertSuggestion(suggestion: string) {
    // You can do whatever you want with the suggestion here, for now, let's log it to console
    console.log("Selected suggestion:", suggestion);

    // Assuming you have a reference to the input field, you can insert the suggestion into it
    const inputField = document.getElementById('txtTextMedium') as HTMLInputElement;
    if (inputField) {
      inputField.value = suggestion;
    }
  }
}
