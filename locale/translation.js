// Translation document for the collection
// =======================================
// This file contains the texts
// annotated for translation
//
// Instructions:
// 1. Open the PO file with Poedit
// 2. Press "Update" to update from sources

gettext('Bus');
gettext('Inputs');
gettext('Outputs');
gettext('VIB-Input-Bus');
gettext('Virtual Input Bus: Virtual inputs components receiver');
gettext('Biestable de datos (Tipo D). Cuando se recibe un tic por load se captura el dato');
gettext('Comparador de un operando de 8 bits. Se compara si el operando es igual al parámetro');
gettext('Puerta OR');
gettext('Puerta AND');
gettext('Virtual input bus Joiner');
gettext('Receptor serie asíncrono. Velocidad por defecto: 115200 baudios');
gettext('One cycle after the EOL character  \nis received, the bus is reset');
gettext('## Virtual Input Bus\n\nIt receives the commands generated by the virtual components  \nand it sents them thought the VIB bus');
gettext('**Serial receiver**');
gettext('an End of line character  \ndetected: CR or LF');
gettext('This tick indicates that  \nan eol character has  \nbeen received');
gettext('**VIB BUS**');
gettext('End of command received: All the  \nreceivers connnected to the bus should  \ngo to its initial state for detecting  \nthe next command');
gettext('Signal: End of Line received  \nIt is detected here for optimization  \npurposes. This way the receivers should  \nnot implement the EOL detection');
gettext('VIB-Split');
gettext('Virtual input bus Splitter');
gettext('VIB-join');
gettext('VOB-Output-Bus');
gettext('Virtual Output Bus');
gettext('Print a Bit variable + LF');
gettext('Print a bit plus a new line');
gettext('Código ASCII del carácter LF');
gettext('Valor genérico constante, de 8 bits. Su valor se introduce como parámetro. Por defecto vale 0');
gettext(' Transmit one bit as a character. STDOUT-bus');
gettext('Multiplexor de 2 a 1 de 8 bits');
gettext('Biestable de almacenamiento del estado de la máquina');
gettext('Biestable con entradas de Set y Reset síncronas, para poner y quitar notaficaciones de eventos');
gettext('Detector de flancos de subida y bajada. Emite tic por las salidas correspondientes al detecta los flancos');
gettext('Puerta NOT');
gettext('10 bits, 2-1 Multiplexor');
gettext('stdout bus joiner (data + tic)');
gettext('Extract the next signal from the stdout bus');
gettext('Transmit one character to the STDOUT bus');
gettext('Registro de 8 bits');
gettext('Serial transmiter for the stdout bus');
gettext('Transmisor serie');
gettext('stdout bus splitter into data and tic signals');
gettext('Convert the 1-bit next signal into a 10-bit stdout bus');
gettext('Virtual output bus Joiner');
gettext('Un bit constante a 0');
gettext('Valor constante 0 para bus de 8 bits');
gettext('Virtual output bus Splitter');
gettext('Extractor de 1 bit de un bus de 8 bits');
gettext('Send the string \"a0\\n\"  \nor \"a1\\n\"');
gettext('## Virtual Output Bus\n\nIt receives the information from the Output Virtual devices  \nand sends the messages to the PC though the serial port\n');
gettext('Bus: information from the other  \nelements connected to the VOB  ');
gettext('Get the diffent fields on the bus');
gettext('Boolean variable name');
gettext('Boolean variable value');
gettext('Request bus Tic  \nSend the message!');
gettext('Serial transmitter');
gettext('The busy signal is sent to the bus  \nThe rest of the signals are  \nset to 0');
gettext('**STDOUT BUS**');
gettext('## PRINTLN-bit-var\n\nPrint a Bit Variable. The output format is:  \n< Varname > < Bit > < LN >  \nWehre < Varname >  is a 1-char variable identifier\n\nExample: \"a1\\n\"');
gettext('Print the Variable  \nidentfifies');
gettext('Print the variable  \nbit value + \\n');
gettext('Before print, both variable name  \nand variable value are store into  \na register');
gettext('Store the variable  \nname');
gettext('Store the bit  \nvalue');
gettext('This print machine  \ngets busy as soon as  \nthe print gets high');
gettext('## PrintLn-bit: Print one bit plus a new line character  \n');
gettext('Bit to be transmited');
gettext('Transmit now! (tic)  \nActivate the machine');
gettext('Not connected');
gettext('**Block 1**  \nPrint the bit (0,1)');
gettext('The machine is busy either  \nthe block 1 is busy or  \nthe block 2 is busy');
gettext('**Block 2**  \nPrint new line char');
gettext('The machine has finished');
gettext('## PUTC-bit-stdout: Transmit one bit (STDOUT bus)  \n\nWhen activated, the bit input is sent as the character '0' or '1'  \nWhen not active, the stdout crossed the block (transparent mode)');
gettext('The bit to be transmitted should be  \nsyncronized with its transmit tic');
gettext('If the machine is ready and  \nthe next tic is received:  \nwe are done');
gettext('The machine is done');
gettext('Machine is on: send a character');
gettext('State of the machine  \n0: OFF  \n1: ON: Sending one character');
gettext('Character to transmit when  \nthe input bit is 1');
gettext('Character to transmit when  \nthe input bit is 0');
gettext('Select with character to transmit  \naccording to the input bit');
gettext('**Create the bus**  \nfrom the data and tic signals');
gettext('Transparent mode...  \nor not');
gettext('**Tic de apagado**');
gettext('**Tic de encendido**');
gettext('**Inicializar**');
gettext('**Estado de la máquina**');
gettext('## Detector doble: flancos de subida y bajada\n\nSe detectan tanto los flancos de subida como de bajada y se emite los  \ntics por sus salidas correspondientes');
gettext('Señal de  \nentrada');
gettext('Reloj del  \nsistema');
gettext('## PUTC: Transmit one character (STDOUT bus)\n\nWhen **idle**, the STDOUT bus crosses the component without modification    \n\nWhen the machine starts, the char is outputed and the state is changed to busy  \nWhen the transmitter is done (tic received in next)  the machine is turned off');
gettext('Start tic: The byte from the  \ninput char is transmited');
gettext('Char to be transmited');
gettext('State of the machine:  \n1: ON: transmitting  \n2: OFF: transparent mode  ');
gettext('If the machine is on  \nand the character has been  \ntransmitted: Turn it off');
gettext('## STDOUT serial\n\nSerial transmitter for the STDOUT bus\n');
gettext('**STDOUT Bus**  \n* Data to transmit (8 bits)  \n* tic (1 bit)\n* data sent (done tic, 1 bit)');
gettext('VOB-Split');
gettext('VOB-join');
gettext('PushButton-First');
gettext('Virtual pushbutton. It should be placed the First in the Bus');
gettext('Virtual Switch. Place the first in the Bus chain');
gettext('Virtual switch (1-bit)');
gettext('char syntax block');
gettext('Demultiplexor de 1 bit, de 1 a 2');
gettext('Detector de flanco de subida. Emite un tic cuando detecta un flanco ascendente');
gettext('bit syntax block');
gettext('Syntax End Of Line. Last block when detecting a command');
gettext('The block is exactly the same than the  \nswitch-first, but with a different icon');
gettext('# Virtual Switch-first\n\nThis component should be placed in the  \nfirst place. It creates the Virtual  \ninput BUS for connecting other blocks');
gettext('**Virtual Input Bus**');
gettext('The bit received from the virtual  \ncomponent is stored in this flip-flop');
gettext('When the virtual switch  \nis changed, a tic es emited');
gettext('The swith has changed  \nto the ON state');
gettext('The swicth has changed  \nto the OFF state');
gettext('# Virtual Switch\n\nProcess the commands from the virtual components  \nGet the bit if the messages is for this switch');
gettext('## Syntax Char  \n\nSyntax block for receiving a specific character  \n\nWhen the character recived is what the block is expecting,  \nit gets activated, and the blocks becomes into a wire (transparent mode)  \nuntil it is reset\n\nIf the first received character is different from what it was expecting,  \nthen block blocks. it disconnect itself from the input until it is reset');
gettext('**Reset the block**');
gettext('**Input character**');
gettext('**Active state**  \n0: Block is not active  \n1: In Active mode');
gettext('Depending on the mode, the tic  \nreceived is outputed (transparent mode)\nor sent inside the block for further processing\n');
gettext('Transparent mode');
gettext('Ignored');
gettext('If the block is blocked, the tic  \nis ignored. Else the tic is sent  \nto the next stage for further processing');
gettext('**Expected character**');
gettext('State of the received character  \n0: Not the one was expected   \n1: The one that was expected  ');
gettext('Expected character  \nreceived: Change to   \nactive mode');
gettext('Other character received:  \nBlock the component');
gettext('**Block state**  \n0: Not blocked\n1: Blocked');
gettext('## Syntax Bit  \n\nSyntax block for receiving a bit ('0'/'1')\n\nWhen the character recived is a bit,  \nit gets activated, and the blocks becomes into a wire (transparent mode)  \nuntil it is reset\n\nIf the first received character is not a bit,  \nthe block blocks. it disconnects itself from the input until it is reset');
gettext('State of the received character  \n0: No bit symbol received  \n1: Bit received ');
gettext('Bit received:  \nChange to   \nactive mode');
gettext('**Block state**  \n0: Not blocked  \n1: Blocked');
gettext('Capture the bit  \nreceived');
gettext('Last block:  \nIt is blocked with any  \ncharactere received');
gettext('The received char was  \nan END of LINE: OK!');
gettext('## Syntax EOL\n\nThis block should be the last one. It checks if the last correct  \ncharactere received is an end-of-line\n\nAs it is the last block, it always get blocked when a characterer  \narrives. If it is an EOL, it is send through the ok_tic\n');
gettext('PushButton');
gettext('Virtual-pushbutton');
gettext('The block is exactly the same than the  \nVirtual-switch, but with another icon');
gettext('Switch-First');
gettext('Switch');
gettext('LED-tx');
gettext('Virtual LED. Last output position');
gettext('Componente genérico');
gettext('Puerta XOR');
gettext('Agregador de un bus de 7 bits y un cable a bus de 8-bits');
gettext('Multiplexor de 2 a 1 de 18 bits');
gettext('# Virtual LED-tx\n\nComponent for turning on a Virtual LED  \nIt should be placed in the last output position  ');
gettext('Is the current bit  \ndifferent than the  \nprevious?');
gettext('Yes');
gettext('Store the bit that is being  \ntransmitter');
gettext('# Virtual LED\n\nTurn on a virtual LED. The information is sent  \nthough the VOB bus');
gettext('When the block is actived, it  \ntakes the bus and send its  \ninformation. Otherwise it is transparent');
gettext('Get the signal from the VOB that  \nneeded for this component');
gettext('Another component  \nis using the bus');
gettext('Initialization state:  \n0 : The component has not sent its  \n    initial state yet  \n1 : The initialization is done');
gettext('Send the initial state');
gettext('Actived sinal: The LED is sending a bit  \n0 : The LED is not sending anything  \n1 : Send a bit');
gettext('Bit to send: either the one on the  \ninput or a 0 if it is the first time');
gettext('This is for sending bits ONLY if the  \ninput is different than the bit  \npreviously sent');
gettext('It only sends if the transmiter is  \nnot busy');
gettext('There is new bit to  \nbe sent');
gettext('If other is using the bus:  \nthe request cannot be sent');
gettext('The bit can be sent!');
gettext('Whenever a bit is transmited,  \nthe initialization is stoped!');
gettext('LED');
gettext('Test');
gettext('01-switch-LED');
gettext('# Example 1: Switch-First\n\nExample of one virtual switch  \nThe virtual switch is connected to the LED7  ');
gettext('## Web panel for testing\n\nFor testing this example upload it to the  \nFPGA and connect to the [ONE switch WEB panel](https://fpgawars.github.io/LOVE-FPGA/Web-panels/One-Switch/panel.html)  \n(You should use a Browser that support **Webserial**, like **Chromium** or **Chrome**)  \nYou do not need to install anything. Just the browser\n\n[Panel Image](https://github.com/FPGAwars/LOVE-FPGA/raw/master/Web-panels/One-Switch/wiki/panel-03.png)\n\n![](https://github.com/FPGAwars/LOVE-FPGA/raw/master/Web-panels/One-Switch/wiki/panel-03.png)');
gettext('## Youtube Video\n\n[Link](https://www.youtube.com/watch?v=S3cI9lfasgU)\n\n[![Click to see the youtube video](http://img.youtube.com/vi/S3cI9lfasgU/0.jpg)](https://www.youtube.com/watch?v=S3cI9lfasgU)');
gettext('02-switchx2-LEDx2');
gettext('# Example 2: Switch\n\nExample of two virtual switches  \nVirtual switch \"a\" connected to LED7  \nVirtual switch \"b\" connected to LED0');
gettext('## Web panel for testing\n\nFor testing this example upload it to the  \nFPGA and connect to the [TWO switches WEB panel](https://fpgawars.github.io/LOVE-FPGA/Web-panels/Two-Switches/panel.html)  \n(You should use a Browser that support **Webserial**, like **Chromium** or **Chrome**)  \nYou do not need to install anything. Just the browser\n\n[Panel Image](https://github.com/FPGAwars/LOVE-FPGA/raw/master/Web-panels/Two-Switches/wiki/panel-01.png)\n\n![](https://github.com/FPGAwars/LOVE-FPGA/raw/master/Web-panels/Two-Switches/wiki/panel-01.png)');
gettext('## Youtube Video\n\n[Link](https://www.youtube.com/watch?v=n8WTWNlL8CA)\n\n[![Click to see the youtube video](http://img.youtube.com/vi/n8WTWNlL8CA/0.jpg)](https://www.youtube.com/watch?v=n8WTWNlL8CA)');
gettext('03-switchx2-pushbtn-LEDx3');
gettext('# Example 3: Push button\n\nExample of two virtual switches and one PushButton  \nVirtual switch \"a\" connected to LED7  \nVirtual switch \"b\" connected to LED4  \nVirtual pulshbutton \"c\" connected to LED0');
gettext('## Web panel for testing\n\nFor testing this example upload it to the  \nFPGA and connect to the [2 switches - 1 Pushbutton WEB panel](https://fpgawars.github.io/LOVE-FPGA/Web-panels/Two-Switches-One-Pushbutton/panel.html)  \n(You should use a Browser that support **Webserial**, like **Chromium** or **Chrome**)  \nYou do not need to install anything. Just the browser\n\n[Panel Image](https://github.com/FPGAwars/LOVE-FPGA/raw/master/Web-panels/Two-Switches/wiki/panel-01.png)\n\n![](https://raw.githubusercontent.com/FPGAwars/LOVE-FPGA/master/Web-panels/Two-Switches-One-Pushbutton/wiki/panel-01.png)');
gettext('## Youtube Video\n\n[Link](https://www.youtube.com/watch?v=n8WTWNlL8CA)\n\n[![Click to see the youtube video](http://img.youtube.com/vi/uycGad61imk/0.jpg)](https://www.youtube.com/watch?v=uycGad61imk)');
gettext('04-switchx2-pushbtnx2-LEDx4');
gettext('# Example 4: Two switches and two Pushbuttons\n\nVirtual switch \"a\" connected to LED7  \nVirtual switch \"b\" connected to LED5  \nVirtual pulshbutton \"c\" connected to LED2\nVirtual pushbutton \"d\" connected to LED0');
gettext('## Web panel for testing\n\nFor testing this example upload it to the  \nFPGA and connect to the [2 switches - 2 Pushbuttons WEB panel](https://fpgawars.github.io/LOVE-FPGA/Web-panels/Two-Switches-Two-PushButtons/panel.html)  \n(You should use a Browser that support **Webserial**, like **Chromium** or **Chrome**)  \nYou do not need to install anything. Just the browser\n\n[Panel Image](https://github.com/FPGAwars/LOVE-FPGA/raw/master/Web-panels/Two-Switches-Two-PushButtons/wiki/panel-01.png)\n\n![](https://github.com/FPGAwars/LOVE-FPGA/raw/master/Web-panels/Two-Switches-Two-PushButtons/wiki/panel-01.png)');
gettext('05-Virtual-LED');
gettext('Detección de pulsación. Emite un tic cada vez que se aprieta el pulsador');
gettext('### Virtual LED');
gettext('### Real LED');
gettext('## Example 5: One Virtual LED  \n\nWhen the real pushbutton is pressed, both  \nthe Virtual LED and the real LED are turned on');
gettext('## Youtube Video\n\n[Link](https://www.youtube.com/watch?v=n8WTWNlL8CA)\n\n[![Click to see the youtube video](http://img.youtube.com/vi/ycp8d5fJK6Q/0.jpg)](https://www.youtube.com/watch?v=ycp8d5fJK6Q)');
gettext('## Web panel for testing\n\nFor testing this example upload it to the  \nFPGA and connect to the [One LED WEB panel](https://fpgawars.github.io/LOVE-FPGA/Web-panels/Two-Switches-One-Pushbutton/panel.html)  \n(You should use a Browser that support **Webserial**, like **Chromium** or **Chrome**)  \nYou do not need to install anything. Just the browser\n\n[Panel Image](https://github.com/FPGAwars/LOVE-FPGA/raw/master/Web-panels/One-LED/wiki/panel-01.png)\n\n![](https://github.com/FPGAwars/LOVE-FPGA/raw/master/Web-panels/One-LED/wiki/panel-01.png)');
gettext('**Pulsador-tic**');
gettext('06-Virtual-LED-blink');
gettext('Corazon genérico para bombear bits a la frecuencia fijada en Hz (por defecto 1Hz)');
gettext('## Example 6: One Virtual LED blinking  \n\nBoth, the virtual LED and the Real LEAD are blinking');
gettext('## Youtube Video\n\n[Link](https://www.youtube.com/watch?v=Mi0ew0z-PlU)\n\n[![Click to see the youtube video](http://img.youtube.com/vi/Mi0ew0z-PlU/0.jpg)](https://www.youtube.com/watch?v=Mi0ew0z-PlU)');
gettext('07-Virtual-LEDx2-counter');
gettext('Contador módulo M, ascendente, de 2 bits, con reset ');
gettext('Corazón de bombeo de tics a con periodo paramétrico de segundos');
gettext('Separador de bus de 2-bits en dos cables');
gettext('Agregador de 2 cables en un bus de 2-bits');
gettext('### Virtual LEDs');
gettext('## Example 7: 2-bits counter on Virtual LEDs  \n\nA 2-bit counter is shown in both Virtual LEDs and  \nreal LEDs');
gettext('### Real LEDs');
gettext('## Youtube Video\n\n[Link](https://www.youtube.com/watch?v=onP4iw8JE2E)\n\n[![Click to see the youtube video](http://img.youtube.com/vi/onP4iw8JE2E/0.jpg)](https://www.youtube.com/watch?v=onP4iw8JE2E)');
gettext('## Web panel for testing\n\nFor testing this example upload it to the  \nFPGA and connect to the [Two LEDs WEB panel](https://fpgawars.github.io/LOVE-FPGA/Web-panels/Two-LEDs/panel.html)  \n(You should use a Browser that support **Webserial**, like **Chromium** or **Chrome**)  \nYou do not need to install anything. Just the browser\n\n[Panel Image](https://github.com/FPGAwars/LOVE-FPGA/raw/master/Web-panels/Two-LEDs/wiki/panel-03.png)\n\n![](https://github.com/FPGAwars/LOVE-FPGA/raw/master/Web-panels/Two-LEDs/wiki/panel-03.png)');
gettext('Reset the counter');
gettext('### COUNTER');
gettext('**Parámetro**: Módulo del contador');
gettext('01-pushbutton-test');
gettext('# Test 1: Pushbutton test\n\nTesting the pushbutton and pushbutton-first blocks  \n');
