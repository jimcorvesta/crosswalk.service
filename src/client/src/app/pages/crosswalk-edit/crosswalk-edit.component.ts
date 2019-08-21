/* 
* Generated by
* 
*      _____ _          __  __      _     _
*     / ____| |        / _|/ _|    | |   | |
*    | (___ | | ____ _| |_| |_ ___ | | __| | ___ _ __
*     \___ \| |/ / _` |  _|  _/ _ \| |/ _` |/ _ \ '__|
*     ____) |   < (_| | | | || (_) | | (_| |  __/ |
*    |_____/|_|\_\__,_|_| |_| \___/|_|\__,_|\___|_|
*
* The code generator that works in many programming languages
*
*			https://www.skaffolder.com
*
*
* You can generate the code from the command-line
*       https://npmjs.com/package/skaffolder-cli
*
*       npm install -g skaffodler-cli
*
*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *
*
* To remove this comment please upgrade your plan here: 
*      https://app.skaffolder.com/#!/upgrade
*
* Or get up to 70% discount sharing your unique link:
*       https://app.skaffolder.com/#!/register?friend=5d5414802e8ab75d05c74293
*
* You will get 10% discount for each one of your friends
* 
*/
// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
// Import Services
import { CrosswalkService } from '../../services/crosswalk.service';
// Import Models
import { Crosswalk } from '../../domain/crosswalk_db/crosswalk';

// START - USED SERVICES
/**
* CrosswalkService.create
*	@description CRUD ACTION create
*
* CrosswalkService.get
*	@description CRUD ACTION get
*	@param ObjectId id Id 
*
* CrosswalkService.update
*	@description CRUD ACTION update
*	@param ObjectId id Id
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a Crosswalk
 */
@Component({
    selector: 'app-crosswalk-edit',
    templateUrl: 'crosswalk-edit.component.html',
    styleUrls: ['crosswalk-edit.component.css']
})
export class CrosswalkEditComponent implements OnInit {
    item: Crosswalk;
    model: Crosswalk;
    formValid: Boolean;

    constructor(
    private crosswalkService: CrosswalkService,
    private route: ActivatedRoute,
    private location: Location) {
        // Init item
        this.item = new Crosswalk();
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.crosswalkService.get(id).subscribe(item => this.item = item);
            }
            // Get relations
        });
    }


    /**
     * Save Crosswalk
     *
     * @param {boolean} formValid Form validity check
     * @param Crosswalk item Crosswalk to save
     */
    save(formValid: boolean, item: Crosswalk): void {
        this.formValid = formValid;
        if (formValid) {
            if (item._id) {
                this.crosswalkService.update(item).subscribe(data => this.goBack());
            } else {
                this.crosswalkService.create(item).subscribe(data => this.goBack());
            } 
        }
    }

    /**
     * Go Back
     */
    goBack(): void {
        this.location.back();
    }


}



