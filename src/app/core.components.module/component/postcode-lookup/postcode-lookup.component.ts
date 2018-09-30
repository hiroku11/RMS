import { AlertsLoaderService } from './../../../services/alerts-loader.service';
import { ApiService } from './../../../services/api.service';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
    selector: 'app-postcode-lookup',
    templateUrl: './postcode-lookup.component.html',
    styleUrls: ['./postcode-lookup.component.scss']
})
export class PostcodeLookupComponent implements OnInit {

    lookupOptions: any = {};
    data: any;
    googleApi = "https://maps.googleapis.com/maps/api/geocode/json?sensor=false&key=AIzaSyAiomJS84bB9JOsgqoCKUh47jTAjjVuAWU&address=";
    postcode1: string = "";
    postcode2: string = "";
    lookupType: any;
    formattedAddresses = [];
    display: boolean;
    @Output() closeModal: EventEmitter<any> = new EventEmitter();
    @Output() selectAddress: EventEmitter<any> = new EventEmitter();
    @Input() mod: string;
    constructor(private api: ApiService, private alert: AlertsLoaderService) { }

    ngOnInit() {
        this.display = true;
        // this.initSearchParams();
    }


    close() {
        this.display = false;
        this.closeModal.emit();
    }
    formatAdd(results: any) {
        results.forEach((add) => {
            let address = {
                "organizationName": null,
                "buildingName": null,
                "streetName": null,
                "localityName": null,
                "postTown": null,
                "county": null,
                "city": null,
                "postcode1": null,
                "postcode2": null,
                "country": null,
                "doorNumber": null,
                "blockNumber": null,
                "apartmentNumber": null
            };
            address.postcode1 = this.postcode1;
            address.postcode2 = this.postcode2;
            add.address_components.forEach((c) => {
                switch (c.types[0]) {
                    case 'street_number':
                        address.streetName = c.long_name;
                        break;
                    case 'route':
                        if (address.streetName) {
                            address.streetName = address.streetName + ' ' + c.long_name;
                        } else {
                            address.streetName = c.long_name;
                        }
                        break;
                    case 'sublocality':
                        address.streetName = c.long_name;
                        break;
                    // case 'sublocality_level_1':
                    //     address.suburb = c.long_name;
                    //     break;
                    // case 'sublocality_level_2':
                    //     if (!address.suburb) { address.suburb = c.long_name; }
                    //     break;
                    case 'neighborhood':
                        address.localityName = c.long_name;
                        break;
                    case 'postal_town':
                        address.county = c.long_name;
                        break;
                    case 'administrative_area_level_2':
                        address.city = c.long_name;
                        break;
                    // case 'administrative_area_level_1':
                    //     address.state = c.long_name;
                    //     break;
                    case 'country':
                        address.country = c.long_name;
                        break;
                }
            });
            this.formattedAddresses.push(address);
            console.log(address);
        });
    }

    lookup() {

        this.api.postcodelookup(this.googleApi + `${this.postcode1}+${this.postcode2}`).subscribe(
            (data: any) => {
                if (data.results.length === 0) {
                    this.alert.error("No results found");
                }
                this.formatAdd(data.results)
            }, (error) => {
                this.alert.error("Some error while post code lookup");
            }
        )
    }

    initSearchParams() {
        this.postcode1 = null;
        this.postcode2 = null;
    }
    orgSelected(add: any) {
        this.selectAddress.emit(add);
    }
}
