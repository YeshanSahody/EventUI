

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FaqComponent } from './components/faq/faq.component';

import { HomepageComponent } from './components/homepage/homepage.component';
import {  DocumentationGeneratorComponent } from './components/documentationgenerator/documentationgenerator.component';
import { SecurityCodeScannerComponent } from './components/securitycodescanner/securitycodescanner.component';
import { CodeOptimizerComponent } from './components/codeoptimizer/codeoptimizer.component';


const routes: Routes = [

  { path: 'faq', component: FaqComponent },
 
  { path: 'homepage', component: HomepageComponent },
  { path: 'documentationgenerator', component: DocumentationGeneratorComponent },
  { path: 'securitycodescanner', component: SecurityCodeScannerComponent },
  { path: 'codeoptimizer', component: CodeOptimizerComponent },



  
  { path: '**', redirectTo: '', pathMatch: 'full' },
];


@NgModule({
  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
