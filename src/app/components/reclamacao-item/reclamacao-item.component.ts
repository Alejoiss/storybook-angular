import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-reclamacao-item',
    templateUrl: './reclamacao-item.component.html',
    styleUrls: ['./reclamacao-item.component.scss']
})
export class ReclamacaoItemComponent {
    @Input() reclamacao: any;
}
