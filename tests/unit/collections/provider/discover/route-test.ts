import Service from '@ember/service';
import { setupEngineTest } from 'ember-osf-web/tests/helpers/engines';
import { TestContext } from 'ember-test-helpers';
import { module, test } from 'qunit';

const themeStub = Service.extend();
const headTagsStub = Service.extend();
const analyticsStub = Service.extend();

module('Unit | Route | collections/provider/discover', hooks => {
    setupEngineTest(hooks, 'collections');

    hooks.beforeEach(function(this: TestContext) {
        this.owner.register('service:theme', themeStub);
        this.owner.register('service:head-tags', headTagsStub);
        this.owner.register('service:analytics', analyticsStub);
    });

    test('it exists', function(assert) {
        const route = this.owner.lookup('route:provider/discover');
        assert.ok(route);
    });
});
