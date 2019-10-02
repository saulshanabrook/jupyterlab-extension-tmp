import {hello} from 'sauls-test-extension'

export default [{
    id: 'sauls-magic-extension',
    autoStart: true,
    activate: function(app) {
      console.log('JupyterLab extension sauls magic extension is activated!');
      hello();
    }
}]