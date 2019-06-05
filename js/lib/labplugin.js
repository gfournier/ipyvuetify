const base = require('@jupyter-widgets/base');
const jupyterBootstrapVue = require('./index');

module.exports = {
    id: 'jupyter-bootstrapvue',
    requires: [base.IJupyterWidgetRegistry],
    activate(app, widgets) {
        widgets.registerWidget({
            name: 'jupyter-bootstrapvue',
            version: jupyterBootstrapVue.version,
            exports: jupyterBootstrapVue,
        });
    },
    autoStart: true,
};
