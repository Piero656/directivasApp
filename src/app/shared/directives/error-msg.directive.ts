import { Directive, ElementRef, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMsgDirective implements OnInit, OnChanges {

  private _color :string = 'red';
  private _mensaje : string = 'Este campo es requerido'


  htmlElement: ElementRef<HTMLElement>;


  @Input() set color (valor :string) {
    this.htmlElement.nativeElement.style.color = valor;
    this._color = valor;
  }


  @Input() set mensaje (valor :string) {
    this.htmlElement.nativeElement.innerText = valor;
    this._mensaje = valor;
  }

  @Input() set valido (valor :boolean) {
    if(valor){
      this.htmlElement.nativeElement.classList.add('hidden')
    }else{
      this.htmlElement.nativeElement.classList.remove('hidden')

    }
  }


  constructor(
    private el : ElementRef<HTMLElement>
  ) {
    console.log("constructor directive");
    console.log(el);

    this.htmlElement = el;

    
   }

   ngOnChanges(changes: SimpleChanges): void {

    // if (changes['mensaje']) {
    //   const mensaje = changes['mensaje'].currentValue;
    //   console.log(mensaje);
    //   this.htmlElement.nativeElement.innerText = mensaje;
    // }

    // if (changes['color']) {
    //   const color = changes['color'].currentValue;
    //   console.log(color);
    //   this.htmlElement.nativeElement.style.color = color;
    // }

    

    
  }
  
  ngOnInit(): void {
    // this.setMensaje();
    // this.setColor();
    
    this.htmlElement.nativeElement.classList.add('form-text');
    this.htmlElement.nativeElement.innerText = this._mensaje;
    this.htmlElement.nativeElement.style.color = this._color;

  }

  setColor() {
    this.htmlElement.nativeElement.style.color = this.color;
  }

  setMensaje() {
    this.htmlElement.nativeElement.innerText = this.mensaje;
  }





}
