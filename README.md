# Shorcut keyboard F3 & F4 prompt

####Event Start

`shortcutDSPP1.fromVariable	= &firstprompt.InternalName+","+&lastprompt.InternalName`

####Event UC

`event shortcutDSPP1.onF4
	Do case
		case shortcutDSPP1.toPrompt = &firstprompt.InternalName	
			//prompt 1
		case shortcutDSPP1.toPrompt = &lastprompt.InternalName
			//prompt 2
	endcase
endevent`


![](https://dispapeles.com/wp-content/uploads/2021/09/logo-dispa-principal-01.png)
