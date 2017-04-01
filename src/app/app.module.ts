import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { masterFirebaseConfig } from './api-keys';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FoodService } from './food.service';
import { FoodDetailComponent } from './food-detail/food-detail.component';
import { NewFoodComponent } from './new-food/new-food.component';
import { EditFoodComponent } from './edit-food/edit-food.component';
import { FilterPipe } from './filter.pipe';


export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FoodDetailComponent,
    NewFoodComponent,
    EditFoodComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    routing
  ],
  providers: [FoodService],
  bootstrap: [AppComponent]
})
export class AppModule { }
