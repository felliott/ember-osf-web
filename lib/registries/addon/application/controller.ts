import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import Features from 'ember-feature-flags/services/features';

import { OSFService } from 'osf-components/components/osf-navbar/component';

export default class Application extends Controller {
    @service features!: Features;

    activeService = OSFService.REGISTRIES;

    @action
    search(query: string) {
        this.transitionToRoute('discover', {
            queryParams: { query },
        });
    }
}
