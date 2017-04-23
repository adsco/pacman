/**
 * Resource loader, for now loads only image
 */
export default class ResourceLoader {
    _setupProperties() {
        this._resources = [];
    }
    
    _getTypeClass(type) {
        var typeClass = null;
        
        switch (type) {
            case 'image': {
                typeClass = 'Image';
            }
            case 'audio': {
                typeClass = 'Audio';
            }
            default: {
                typeClass = 'Image';
            }
        }
        
        return typeClass;
    }
    
    _createInstance(className, args = []) {
        return new (Function.prototype.bind.apply(window[className], args));
    }
    
    constructor() {
        this._setupProperties();
    }
    
    addResource(id, type, url) {
        this._resources.push({
            id,
            type,
            url
        });
    }
    
    addResources(resources) {
        for (let i = 0, len = resources.length; i < len; i++) {
            this.addResource(
                resources[i].id,
                resources[i].type,
                resources[i].url
            );
        }
    }
    
    loadResource(type, url) {
        return new Promise((resolve, reject) => {
            let instance = this._createInstance(
                this._getTypeClass(type)
            );
            
            instance.onload = function() {
                resolve(instance);
            }
            
            instance.src = url;
        });
    }
    
    loadResources(resources) {
        var promises = [];

        for (let i = 0, len = resources.length; i < len; i++) {
            promises.push(
                this.loadResource(
                    resources[i].type,
                    resources[i].url
                )
            );
        }
        
        return Promise.all(promises);
    }
}