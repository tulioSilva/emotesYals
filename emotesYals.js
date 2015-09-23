var emotesYals = function emotesYals() {
	/* 
	* Carrega todos os eventos do plug.dj
	*/
	function loadEvents() {
		API.on(API.CHAT, eventChat);
		API.on(API.CHAT_COMMAND, eventCmd);
		API.on(API.USER_JOIN, eventUserJoin);
		API.on(API.USER_LEAVE, eventUserLeave);
		API.on(API.ADVANCE, eventAdvance);
		API.on(API.VOTE_UPDATE, eventVote);
		API.on(API.GRAB_UPDATE, eventGrab);
	}

	/* 
	* Descarrega todos os eventos do plug.dj
	*/
	function unloadEvents() {
		API.off(API.CHAT, eventChat);
		API.off(API.CHAT_COMMAND, eventCmd);
		API.off(API.USER_JOIN, eventUserJoin);
		API.off(API.USER_LEAVE, eventUserLeave);
		API.off(API.ADVANCE, eventAdvance);
		API.off(API.VOTE_UPDATE, eventVote);
		API.off(API.GRAB_UPDATE, eventGrab);
	}
	function eventCmd(cmd) {
		var args = cmd.split(' '),
			user = userLookUp(args[1]),
			command = args[0].substr(1).toLowerCase();
		switch (command) {
			/* EMOTES */
			case 'shrug':
				API.sendChat(cmd.substr(6) + " ¯\\_(ツ)_/¯");
			break;
			case 'lenny':
				API.sendChat(cmd.substr(6) + " ( ͡° ͜ʖ ͡°)");
			break;
			case 'cat':
				API.sendChat(cmd.substr(4) + " =^.^=");
			break;
			case 'crazy':
				API.sendChat(cmd.substr(6) + " {{{(>_<)}}}");
			break;
			case 'coolsong':
				API.sendChat(cmd.substr(9) + " d(^_^)b");
			break;
			case 'cry':
				API.sendChat(cmd.substr(4) + " (╥﹏╥)");
			break;
			case 'yuno':
				API.sendChat(cmd.substr(5) + " ლ(ಠ益ಠლ)");
			break;
			case 'bearface':
				API.sendChat(cmd.substr(9) + " ʕ•ᴥ•ʔ");
			break;
			case 'wtf':
				API.sendChat(cmd.substr(4) + " ಠ_ಠ");
			break;
			case 'iamfine':
				API.sendChat(cmd.substr(8) + " ⁀‿⁀");
			break;
			case 'iamangry':
				API.sendChat(cmd.substr(9) + " ╰_╯");
			break;
			case 'facepalm':
				API.sendChat(cmd.substr(9) + " (>ლ)");
			break;
			case 'shy':
				API.sendChat(cmd.substr(4) + " (｡◕‿◕｡)");
			break;
			case 'dwi':
				API.sendChat(cmd.substr(4) + " (⌐■_■)");
			break;
			case 'x1':
				API.sendChat(cmd.substr(3) + " (ง'̀-'́)ง");
			break;
			case 'machoman':
				API.sendChat(cmd.substr(9) + " ᕦ( ͡° ͜ʖ ͡°)ᕤ");
			break;
			case 'runsong':
				API.sendChat(cmd.substr(8) + " ᕕ(⌐■_■)ᕗ ♪♬");
			break;
			case 'gasp':
				API.sendChat(cmd.substr(5) + " (ʘᗩʘ’)");
			break;
			case 'creepy':
				API.sendChat(cmd.substr(7) + " ╭(ʘ̆~◞౪◟~ʘ̆)╮");
			break;
			case 'pls':
				API.sendChat(cmd.substr(4) + " 〳 •́ ﹏ •̀ 〵");
			break;
			case 'partyover':
				API.sendChat(cmd.substr(10) + " ᕕ{  ͒ ʖ̯  ͒  }ᕗ");
			break;
			case 'aww':
				API.sendChat(cmd.substr(4) + " ʕ ಡ ﹏ ಡ ʔ");
			break;
			case 'wise':
				API.sendChat(cmd.substr(5) + " (҂ ˘ _ ˘ )");
			break;
			case 'this':
				API.sendChat(cmd.substr(5) + " ☜(ﾟヮﾟ☜)");
			break;
			case 'squad':
				API.sendChat(cmd.substr(6) + " ヽ༼ ຈل͜ຈ༼ ▀̿̿Ĺ̯̿̿▀̿ ̿༽Ɵ͆ل͜Ɵ͆ ༽ﾉ");
			break;
			case 'itsmagic':
				API.sendChat(cmd.substr(9) + " (⊃｡•́‿•̀｡)⊃━☆ﾟ.*･｡ﾟ");
			break;
			case 'wat':
				API.sendChat(cmd.substr(4) + " ʕ ͠° ʖ̫ °͠ ʔ");
			break;
			case 'whatever':
				API.sendChat(cmd.substr(9) + " ¯\\_(⊙_ʖ⊙)_/¯");
			break;
			case 'm8':
				API.sendChat(cmd.substr(3) + " ლ ( ◕  ᗜ  ◕ ) ლ");
			break;
			case 'cool':
				API.sendChat(cmd.substr(5) + " s( ^ ‿ ^)-b");
			break;
			case 'praise':
				API.sendChat(cmd.substr(7) + " ༼つ ◕_◕ ༽つ");
			break;
			case 'gary':
				API.sendChat(cmd.substr(7) + " ᕕ( ᐛ )ᕗ");
			break;
		}
	}
}