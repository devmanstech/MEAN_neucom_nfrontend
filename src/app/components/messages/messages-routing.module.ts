import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Componentes
import { MainComponent } from './components/main/main.component';
import { AddComponent } from './components/add/add.component';
import { ReceivedComponent } from './components/received/received.component';
import { SendedComponent } from './components/sended/sended.component';

const messagesRoutes: Routes = [  //array con configuracion de rutas
    {
        path: 'messages',  //ruta principal de mensajes  //recibidos enviados etc
        component: MainComponent, //carga el componente Main
        children: [
            { path: '', redirectTo: 'recibidos', pathMatch: 'full' },
            { path: 'enviar', component: AddComponent},
            { path: 'recibidos', component: ReceivedComponent},
            { path: 'enviados', component: SendedComponent }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(messagesRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class MessagesRoutingModule{}