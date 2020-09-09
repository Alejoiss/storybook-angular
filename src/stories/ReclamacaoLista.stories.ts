import { CommonModule } from '@angular/common';
import { moduleMetadata } from '@storybook/angular';
import { Meta, Story } from '@storybook/angular/types-6-0';

import { ReclamacaoItemComponent } from './../app/components/reclamacao-item/reclamacao-item.component';
import { ReclamacaoListaComponent } from './../app/components/reclamacao-lista/reclamacao-lista.component';
import { story1, story2 } from './../app/stories/stories';

export default {
    title: 'Example/Reclamação',
    component: ReclamacaoListaComponent,
    decorators: [
        moduleMetadata({
            imports: [CommonModule],
            declarations: [ReclamacaoItemComponent]
        }),
    ],
} as Meta;

const Template: Story<ReclamacaoListaComponent> = (args: ReclamacaoListaComponent) => ({
    component: ReclamacaoListaComponent,
    props: args,
});

export const Story1 = Template.bind({});
Story1.args = {
    story: story1,
};

export const Story2 = Template.bind({});
Story2.args = {
    story: story2
};
