import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "src/app/app.component";
import { MessageComponent } from "src/app/components/message/message.component";
import { PriceComponent } from "src/app/components/price/price.component";

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: 'price',
        component: PriceComponent
      },
      {
        path: 'message',
        component: MessageComponent
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
