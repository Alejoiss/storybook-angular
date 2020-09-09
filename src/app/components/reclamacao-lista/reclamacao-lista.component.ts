import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-reclamacao-lista',
    templateUrl: './reclamacao-lista.component.html',
    styleUrls: ['./reclamacao-lista.component.scss']
})
export class ReclamacaoListaComponent  {
    @Input() story: any;
}
