var cbsChat = angular.module('cbsChat', []);

function chatCtrl(ChatService) {
	var vm = this;

	vm.sendMessage = function(){
		var message = {
			text: vm.newMessage
		}
		ChatService.sendMessage(message);
	}
}

angular.module('cbsChat')
.controller('chatCtrl', ['ChatService', chatCtrl]);