subApp.controller('listController', listController );

function listController (listService) {
    var vm = this;
    vm.list = [];
    vm.service = listService;
    
    
	listService.getList().then(function(response) {
       vm.list = response.data;
       
   });
    
    vm.record = function(element){
        vm.service.name = element.name;
        vm.service.role = element.role;
        vm.service.linkedIn = element.linkedInUrl;
        vm.service.picUrl = element.pictureUrl;

    };

}	
