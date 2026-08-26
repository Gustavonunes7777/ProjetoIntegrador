import { Routes } from '@angular/router';

export const routes: Routes = [];

const routes: Routes = [
    {
        path: 'livros',
        loadChildren: () => import('./livros/livros-module').then(m => m.LivrosModule)
    }
];

@ngModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]

})
export class appRouting {}