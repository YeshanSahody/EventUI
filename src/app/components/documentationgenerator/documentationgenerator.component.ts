import { Component } from '@angular/core';

@Component({
  selector: 'app-documentation-generator',
  templateUrl: './documentationgenerator.component.html',
  styleUrls: ['./documentationgenerator.component.scss']
})
export class DocumentationGeneratorComponent {
  errorMessage: string = '';

  constructor() { }

  onFileSelected(event: any) {
    // Handle file selection logic here
  }

  submitZip() {
    // Implement logic to submit zip file
  }
}
