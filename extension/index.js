import {hello} from 'sauls-tmp-package'

export default [{
    id: 'sauls-magic-extension',
    autoStart: true,
    activate: function(app) {
      console.log('JupyterLab extension sauls magic extension is activated!');
      hello();
    }
}]