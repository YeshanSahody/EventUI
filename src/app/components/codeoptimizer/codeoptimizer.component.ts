import { Component } from '@angular/core';

@Component({
  selector: 'app-code-optimizer',
  templateUrl: './codeoptimizer.component.html',
  styleUrls: ['./codeoptimizer.component.scss']
})
export class CodeOptimizerComponent {
  errorMessage: string = '';

  constructor() { }

  onFileSelected(event: any) {
    // Handle file selection logic here
  }

  submitZip() {
    // Implement logic to submit zip file and optimize the code
  }

  downloadReport() {
    // Implement logic to download the optimization report
  }
}
