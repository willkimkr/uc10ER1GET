import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { CardsComponent } from './views/cards/cards.component';
import { FooterComponent } from './views/footer/footer.component';
import { LoginComponent } from './views/login/login.component';
import { HeaderComponent } from './views/header/header.component';

const routes: Routes = [
  {path: "", component:HomeComponent },
  {path:"cards" , component:CardsComponent },
  {path:"footer" , component:FooterComponent },
  {path:"header" , component:HeaderComponent},
  {path:"login" , component:LoginComponent }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
