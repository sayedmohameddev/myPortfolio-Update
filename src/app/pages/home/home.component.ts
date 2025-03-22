import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener} from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
    
 

}

