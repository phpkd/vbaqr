/*==================================================================================*\
|| ################################################################################ ||
|| # Product Name: PHPKD - Advanced Quick Reply                  Version: 4.0.100 # ||
|| # License Type: Free License                                    $Revision$ # ||
|| # ---------------------------------------------------------------------------- # ||
|| # 																			  # ||
|| #            Copyright ©2005-2010 PHP KingDom. All Rights Reserved.            # ||
|| #     This product may be redistributed in whole or significant part under     # ||
|| #        "Creative Commons - Attribution-Noncommercial-Share Alike 3.0"        # ||
|| # 																			  # ||
|| # ----------------- 'Advanced Quick Reply' IS FREE SOFTWARE ------------------ # ||
|| #        http://www.phpkd.net | http://info.phpkd.net/en/license/free          # ||
|| ################################################################################ ||
\*==================================================================================*/


function phpkd_vbaqr()
{
	if (phpkd_vbaqr_thread_manage == true)
	{
		// On the fly actions (Open/Close), change related phrases & images!
		if (fetch_object('cb_openclose').checked == true)
		{
			if (fetch_object('phpkd_vbaqr_openclose_qr'))
			{
				fetch_object('phpkd_vbaqr_openclose_qr').innerHTML = ((phpkd_vbaqr_thread_open == true) ? vbphrase['reopen_this_thread'] : vbphrase['close_this_thread']);
			}

			if (fetch_object('phpkd_vbaqr_openclose_mt'))
			{
				fetch_object('phpkd_vbaqr_openclose_mt').innerHTML = ((phpkd_vbaqr_thread_open == true) ? vbphrase['open_thread'] : vbphrase['close_thread']);
			}


			if (phpkd_vbaqr_vbversion == '40x')
			{
				// Change phrases on the fly with Open/Close actions
				var phpkd_vbaqr_thead_buttons = YAHOO.util.Dom.getElementsByClassName("thread_button", "phpkdvbaqr");
				for (i = 0; i < phpkd_vbaqr_thead_buttons.length; i++)
				{
					phpkd_vbaqr_thead_buttons[i].innerHTML = ((phpkd_vbaqr_thread_open == true) ? vbphrase['close_thread'] : vbphrase['open_thread']);
				}
			}
			else
			{
				// Change images on the fly with Open/Close actions
				var phpkd_vbaqr_thead_buttons = YAHOO.util.Dom.getElementsByClassName("thread_button", "img");
				for (i = 0; i < phpkd_vbaqr_thead_buttons.length; i++)
				{
					phpkd_vbaqr_thead_buttons[i].src = IMGDIR_BUTTON + "/" + ((phpkd_vbaqr_thread_open == true) ? 'threadclosed.gif' : 'reply.gif');
				}
			}

			// Revert open/close thread status after processing!!
			phpkd_vbaqr_thread_open = ((phpkd_vbaqr_thread_open == true) ? false : true);
		}


		// On the fly actions (Stick/Un-Stick), change related phrases!
		if (fetch_object('cb_stickunstick').checked == true)
		{
			if (fetch_object('phpkd_vbaqr_stickunstick_qr'))
			{
				fetch_object('phpkd_vbaqr_stickunstick_qr').innerHTML = ((phpkd_vbaqr_thread_sticky == true) ? vbphrase['stick_this_thread'] : vbphrase['unstick_this_thread']);
			}
			
			if (fetch_object('phpkd_vbaqr_stickunstick_mt'))
			{
				fetch_object('phpkd_vbaqr_stickunstick_mt').innerHTML = ((phpkd_vbaqr_thread_sticky == true) ? vbphrase['stick_thread'] : vbphrase['unstick_thread']);
			}
			
			phpkd_vbaqr_thread_sticky = ((phpkd_vbaqr_thread_sticky == true) ? false : true);
		}
	}


	// Reseting check status for all options
	if (fetch_object('cb_openclose'))
	{
		fetch_object('cb_openclose').checked = phpkd_vbaqr_checked_close;
	}

	if (fetch_object('cb_stickunstick'))
	{
		fetch_object('cb_stickunstick').checked = phpkd_vbaqr_checked_stick;
	}

	if (fetch_object('qr_quickreply'))
	{
		fetch_object('qr_quickreply').checked = phpkd_vbaqr_checked_quote;
	}

	if (fetch_object('cb_signature'))
	{
		fetch_object('cb_signature').checked = phpkd_vbaqr_checked_showsig;
	}

	if (fetch_object('cb_disablesmilies'))
	{
		fetch_object('cb_disablesmilies').checked = phpkd_vbaqr_checked_dissm;
	}


	// Resetting the attachment controler/handlers/menus after submiting.
	if ((phpkd_vbaqr_attachments == true) && (typeof vB_Attachments != 'undefined'))
	{
		vB_Attachments.reset();
	}
}


/*============================================================================*\
|| ########################################################################### ||
|| # Version: 4.0.100
|| # $Revision$
|| # Released: $Date$
|| ########################################################################### ||
\*============================================================================*/