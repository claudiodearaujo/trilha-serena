import { Component, Input, output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  imports: [CommonModule],
  templateUrl: './button.html',
  styleUrl: './button.css'
})
export class Button {
  @Input() variant: 'primary' | 'secondary' = 'primary';
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() disabled = false;
  @Input() type: 'button' | 'submit' = 'button';
  @Input() fullWidth = false;

  clicked = output<void>();

  onClick() {
    if (!this.disabled) {
      this.clicked.emit();
    }
  }

  get buttonClasses(): string {
    const baseClasses = 'inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
    
    const variantClasses = {
      primary: 'bg-brand-primary text-white hover:bg-brand-primary/90 focus:ring-brand-primary',
      secondary: 'bg-transparent text-brand-primary border-2 border-brand-primary hover:bg-brand-primary hover:text-white focus:ring-brand-primary'
    };

    const sizeClasses = {
      sm: 'px-3 py-2 text-sm rounded-md',
      md: 'px-4 py-2 text-base rounded-md',
      lg: 'px-8 py-4 text-lg rounded-lg'
    };

    const widthClass = this.fullWidth ? 'w-full' : '';

    return `${baseClasses} ${variantClasses[this.variant]} ${sizeClasses[this.size]} ${widthClass}`.trim();
  }
}
