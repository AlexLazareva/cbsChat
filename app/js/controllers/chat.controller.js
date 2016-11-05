var cbsChat = angular.module('cbsChat', ["firebase"]);

function chatCtrl(ChatService, $firebaseAuth) {
	var vm = this;
	var auth = $firebaseAuth();

	vm.messages = ChatService.getMessages();
	vm.showMessages = ChatService.showMessages();

	vm.sendMessage = function(){
		var message = {
			text: vm.newMessage
		}
		if (vm.newMessage != ''){
			ChatService.sendMessage(message);
			vm.newMessage = '';	
		}else{
			alert('Введите сообщение');
		}
		
	}

	vm.login = function(){
		auth.$signInWithPopup('google');
	}

	auth.$onAuthStateChanged(function(authData){
		console.log(authData);
	})
}

angular.module('cbsChat')
.controller('chatCtrl', ['ChatService', '$firebaseAuth', chatCtrl]);