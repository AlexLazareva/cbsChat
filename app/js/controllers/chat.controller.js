function chatCtrl() {
	var vm = this;

	vm.test = 'Some word';
}


angular.module('cbsChat')
.controller('chatCtrl', [chatCtrl]);