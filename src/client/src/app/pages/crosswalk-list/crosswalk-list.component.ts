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
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
// Import Services
import { CrosswalkService } from '../../services/crosswalk.service';
// Import Models
import { Crosswalk } from '../../domain/crosswalk_db/crosswalk';

// START - USED SERVICES
/**
* CrosswalkService.delete
*	@description CRUD ACTION delete
*	@param ObjectId id Id
*
* CrosswalkService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES

/**
 * This component shows a list of Crosswalk
 * @class CrosswalkListComponent
 */
@Component({
    selector: 'app-crosswalk-list',
    templateUrl: './crosswalk-list.component.html',
    styleUrls: ['./crosswalk-list.component.css']
})
export class CrosswalkListComponent implements OnInit {
    list: Crosswalk[];
    search: any = {};
    idSelected: string;
    constructor(
        private crosswalkService: CrosswalkService,
    ) { }

    /**
     * Init
     */
    ngOnInit(): void {
        this.crosswalkService.list().subscribe(list => this.list = list);
    }

    /**
     * Select Crosswalk to remove
     *
     * @param {string} id Id of the Crosswalk to remove
     */
    selectId(id: string) {
        this.idSelected = id;
    }

    /**
     * Remove selected Crosswalk
     */
    deleteItem() {
        this.crosswalkService.remove(this.idSelected).subscribe(data => this.list = this.list.filter(el => el._id !== this.idSelected));
    }

}
