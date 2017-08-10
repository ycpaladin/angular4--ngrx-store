import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetectionChangePageComponent } from './detection-change-page.component';
import { routing } from './detection-change-page.routing';
import { ProfileCardComponent } from './components/profile-card/profile-card.component';
import { ProfileAgeComponent } from './components/profile-age/profile-age.component';
import { ProfileNameComponent } from './components/profile-name/profile-name.component';

@NgModule({
    imports: [
        routing,
        CommonModule
    ],
    declarations: [
        DetectionChangePageComponent,
        ProfileCardComponent,
        ProfileAgeComponent,
        ProfileNameComponent]
})
export class DetectionChangePageModule { }
