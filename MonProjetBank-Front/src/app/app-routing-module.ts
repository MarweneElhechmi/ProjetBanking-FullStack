import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ComptesListComponent } from './components/comptes-list/comptes-list.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { AddCompteComponent } from './components/add-compte/add-compte.component';
import { DeleteCompteComponent } from './components/delete-compte/delete-compte.component';


const routes: Routes = [

    {path:"list",component: ComptesListComponent},
    {path:"add",component: AddCompteComponent},
    {path:"welcome",component: WelcomeComponent},
    {path:"delete/:numero",component: DeleteCompteComponent},
    {path:"",redirectTo:"/welcome" ,pathMatch:'full'},
    {path:"**",component: NotfoundComponent}

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
