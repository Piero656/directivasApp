import { Component, OnChanges, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent implements OnInit {

  miFormulario: FormGroup = this.formbuilder.group(
    { nombre: ['',Validators.required]}
  )

  texto1:string = 'Vamor a ver';
  color :string = 'blue'


  constructor(
    private formbuilder : FormBuilder
  ) { }

  ngOnInit(): void {
  }

  tieneError (campo : string) {
    return this.miFormulario.get(campo)?.invalid || false;
  }

  cambiarTexto1() {
    this.texto1 = Math.random().toString();
  }

  cambiarColor() {
    const color = "#xxxxxx".replace(/x/g, y=>(Math.random()*16|0).toString(16));
    this.color = color;
  }
}
