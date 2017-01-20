subApp.service('listService',listService);

function listService($http,api){
    var current = this;
    
    current.name = "";
    current.role = "";
    current.linkedIn = "";
    current.picUrl = "";
    
	return {
	    getList: function() {
            return $http.get(api.root + api.path);
	    }
	};
}