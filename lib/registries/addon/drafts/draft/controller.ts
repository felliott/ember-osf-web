import Controller from '@ember/controller';
import { action } from '@ember/object';
import { alias, not } from '@ember/object/computed';
import { inject as service } from '@ember/service';

import Media from 'ember-responsive';

import BrandModel from 'ember-osf-web/models/brand';
import Registration from 'ember-osf-web/models/registration';

export default class RegistriesDraft extends Controller {
    @service media!: Media;

    @not('media.isDesktop') showMobileView!: boolean;

    @alias('model.draftRegistrationManager.draftRegistration.provider.brand')
    brand?: BrandModel;

    @action
    onSubmitRedirect(registrationId: Registration) {
        this.transitionToRoute('overview.index', registrationId);
    }
}
