import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from "@angular/core";

@Directive({
    selector: '[appBasicHightlight]'
})
export class BasicHightlightDirective implements OnInit {
    @Input() defaultColor: string = 'transparent';
    @Input() highlightColor: string = 'blue';
    @HostBinding('style.backgroundColor') backgroundColor: string;
    constructor(private elementRef: ElementRef, private renderer: Renderer2) { }
    
    ngOnInit() {
        this.backgroundColor = this.defaultColor;
        // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'violet')
    }

    @HostListener('mouseover') mouseover(eventData: Event) {
        //  this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'violet');
        this.backgroundColor = this.highlightColor;
    }

     @HostListener('mouseleave') mouseleave(eventData: Event) {
        //  this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
         this.backgroundColor = this.defaultColor;
    }
}